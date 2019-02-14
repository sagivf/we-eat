json = ActiveSupport::JSON.decode(File.read('db/seeds/restaurants.json'))

json.each do |a|
    Restaurant.create!(a)
end