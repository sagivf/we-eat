FactoryBot.define do
  factory :cuisine do
    name                  { Faker::Name.name }
    icon     { Faker::String.random(1) }
  end
end