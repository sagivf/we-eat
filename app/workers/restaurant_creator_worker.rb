require_relative '../../lib/zomato'

class RestaurantCreatorWorker
  include Sidekiq::Worker

  def perform(*args)
    city_id = args[0]
    start = args[1]
    count = args[2]
    review_count = args[3]
    Zomato.new(city_id).createRestaurants(start, count, review_count)
  end
end
