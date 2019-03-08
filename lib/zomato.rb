require 'net/http'

$key = ENV['ZOMATO_API_KEY']
$domain = 'developers.zomato.com'
$base_path = '/api/v2.1'

class Zomato

  def initialize(city_id)
    @city_id = city_id
  end

  def createCuisines
    charset = Array(1..9) + Array('a'..'z')
    uri = URI::HTTPS.build({:use_ssl => true,
                            :host => $domain,
                            :path => "#{$base_path}/cuisines",
                            :query => {:city_id => @city_id}.to_query})

    Net::HTTP.start(uri.host, uri.port, :use_ssl => true) do |http|
      request = Net::HTTP::Get.new uri
      request.add_field("user-key", $key)
      request.add_field("accept", "application/json")
      response = http.request request # Net::HTTPResponse object
      return puts "Failed status: #{response.code}" unless response.is_a?(Net::HTTPSuccess)

      JSON.parse(response.body)['cuisines'].each do |cuisine|
        cuisine = cuisine['cuisine']
        Cuisine.create!({
                            id: cuisine['cuisine_id'],
                            name: cuisine['cuisine_name'],
                            icon: charset.sample
                        })
      end
    end
  end

  def createRestaurants(start, count, review_count)
    cuisines = Cuisine.all
    uri = URI::HTTPS.build({:use_ssl => true,
                            :host => $domain,
                            :path => "#{$base_path}/search",
                            :query => {
                                :entity_id => @city_id,
                                :entity_type => 'city',
                                :start => start,
                                :count => count
                            }.to_query})

    puts uri
    Net::HTTP.start(uri.host, uri.port, :use_ssl => true) do |http|
      request = Net::HTTP::Get.new uri
      request.add_field("user-key", $key)
      request.add_field("accept", "application/json")
      response = http.request request
      return puts "Failed status: #{response.code}" unless response.is_a?(Net::HTTPSuccess)

      JSON.parse(response.body)['restaurants'].each do |restaurant|
        restaurant = restaurant['restaurant']
        res_id = restaurant['id']
        cuisine = restaurant['cuisines'].split(',').collect(&:strip)[0]
        begin
          Restaurant.create!({
                                 id: res_id,
                                 name: restaurant['name'],
                                 cuisine_id: cuisines.detect {|c| c['name'] == cuisine}['id'],
                                 address: restaurant['location']['address'],
                                 lat: restaurant['location']['latitude'],
                                 lng: restaurant['location']['longitude'],
                                 max_delivery_time_minutes: rand(1..120),
                                 accepts_10bis: [true, false].sample
                             })
          uri = URI::HTTPS.build({:use_ssl => true,
                                  :host => $domain,
                                  :path => "#{$base_path}/reviews",
                                  :query => {
                                      :res_id => res_id,
                                      :count => review_count
                                  }.to_query})

          Net::HTTP.start(uri.host, uri.port, :use_ssl => true) do |http|
            request = Net::HTTP::Get.new uri
            request.add_field("user-key", $key)
            request.add_field("accept", "application/json")
            response = http.request request
            return puts "Failed status: #{response.code}" unless response.is_a?(Net::HTTPSuccess)

            begin
              JSON.parse(response.body)['user_reviews'].each do |review|
                review = review['review']
                Review.create!({
                                   id: review['id'],
                                   name: review['user']['name'],
                                   restaurant_id: res_id,
                                   rating: review['rating'],
                                   comment: review['review_text']
                               })
              end
            rescue => e
              puts e
            end
          end
        rescue => e
          puts e
        end
      end
    end
  end
end
