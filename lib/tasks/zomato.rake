require 'net/http'

base_url = 'https://developers.zomato.com/api/v2.1'
city_id = 280
key = ENV['ZOMATO_API_KEY']
restaurant_count = 10
review_count = 3

namespace :zomato do
  desc 'test'
  task :test  => :environment do
    puts key
  end
  desc 'Load cuisines'
  task :cuisines  => :environment do
    charset = Array(1..9) + Array('a'..'z')
    uri = URI("#{base_url}/cuisines?city_id=#{city_id}")

    Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https') do |http|
      request = Net::HTTP::Get.new uri
      request.add_field("user-key", key)
      request.add_field("accept", "application/json")
      response = http.request request # Net::HTTPResponse object
      if !response.is_a?(Net::HTTPSuccess)
        puts "Failed status: #{response.code}"
        return
      end

      JSON.parse(response.body)['cuisines'].each do |a|
        Cuisine.create!({
          id: a['cuisine']['cuisine_id'],
          name: a['cuisine']['cuisine_name'],
          icon: charset.sample
        })
      end
    end
  end

  desc 'Load Restaurants'
  task :restaurants => :environment do
    cuisines = Cuisine.all
    uri = URI("#{base_url}/search?entity_id=#{city_id}&entity_type=city&count=#{restaurant_count}")

    Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https') do |http|
      request = Net::HTTP::Get.new uri
      request.add_field("user-key", key)
      request.add_field("accept", "application/json")
      response = http.request request
      if !response.is_a?(Net::HTTPSuccess)
        puts "Failed status: #{response.code}"
        return
      end

      JSON.parse(response.body)['restaurants'].each do |a|
        res_id = a['restaurant']['id']
        puts res_id
        puts a['restaurant']['name']
        cuisine = a['restaurant']['cuisines'].split(',').collect {|x| x.strip || x}[0]
        begin
          Restaurant.create!({
               id: res_id,
               name: a['restaurant']['name'],
               cuisine_id: cuisines.detect {|c| c['name'] == cuisine}['id'],
               address: a['restaurant']['location']['address'],
               lat: a['restaurant']['location']['latitude'],
               lng: a['restaurant']['location']['longitude'],
               max_delivery_time_minutes: rand(1..120),
               accepts_10bis: [true, false].sample
           })
          uri = URI("#{base_url}/reviews?res_id=#{res_id}&count=#{review_count}")
          Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https') do |http|
            request = Net::HTTP::Get.new uri
            request.add_field("user-key", key)
            request.add_field("accept", "application/json")
            response = http.request request
            if !response.is_a?(Net::HTTPSuccess)
              puts "Failed status: #{response.code}"
              return
            end
            begin
              JSON.parse(response.body)['user_reviews'].each do |review|
                Review.create!({
                   id: review['review']['id'],
                   name: review['review']['user']['name'],
                   restaurant_id: res_id,
                   rating: review['review']['rating'],
                   comment: review['review']['review_text']
               })
              end
            rescue Exception => e
              puts e
            end
          end
        rescue Exception => e
          puts e
        end
      end
    end
  end
end
