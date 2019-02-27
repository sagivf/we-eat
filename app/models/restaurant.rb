class Restaurant < ApplicationRecord
  belongs_to :cuisine
  has_many :reviews

  validates :name, uniqueness: true, presence: true
  validates :address, presence: true

  def rating
    reviews.present? ? reviews.average(:rating).round : 0
  end
end
