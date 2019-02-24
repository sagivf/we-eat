FactoryBot.define do
  factory :restaurant do
    name                  { Faker::Name.name }
    cuisine            { FactoryBot.create(:cuisine) }
    address               { Faker::Address.street_name }
    max_delivery_time_minutes     { Faker::Number.between(from = 1, to = 5) }
  end
end