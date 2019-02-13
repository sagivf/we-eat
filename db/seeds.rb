List.create(title:"West Sweden Road Trip", excerpt:"A cool road trip with stops in harbors of the coast")
List.create(title:"Must have equipment for the outdoor photographer", excerpt:"My selection of gear for modern outdoor photography")
json = ActiveSupport::JSON.decode(File.read('db/seeds/restaurants.json'))

json.each do |a|
    Restaurant.create!(a)
end