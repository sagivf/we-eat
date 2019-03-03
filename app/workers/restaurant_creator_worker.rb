require_relative '../../lib/zomato'

class RestaurantCreatorWorker
  include Sidekiq::Worker

  def perform(city_id = 280, start = 50, count = 10, review_count = 3)
    Zomato.new(city_id).createRestaurants(start, count, review_count)
  end
end
