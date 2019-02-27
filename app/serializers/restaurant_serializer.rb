class RestaurantSerializer < ActiveModel::Serializer
  has_one :cuisine
  has_many :reviews

  attributes :id, :name, :rating, :address, :lat, :lng, :max_delivery_time_minutes, :accepts_10bis
end