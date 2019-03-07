require_relative '../zomato'

namespace :zomato do
  desc 'Load cuisines'
  task :cuisines, [:city_id]  => :environment do |task, args|
    Zomato.new(args[:city_id].to_i).createCuisines
  end

  desc 'Load Restaurants'
  task :restaurants, [:city_id, :from, :to, :count, :review_count] => :environment do |task, args|
    args.with_defaults(:city_id => 280, :from => 50, :to => 100, :count => 10, :review_count => 3)
    start = args[:from].to_i
    to = args[:to].to_i
    count = args[:count].to_i
    review_count = args[:review_count].to_i
    city_id = args[:city_id].to_i
    (start..to-1).step(count) {|start|
      RestaurantCreatorWorker.perform_async(city_id, start, count, review_count)
    }
  end
end
