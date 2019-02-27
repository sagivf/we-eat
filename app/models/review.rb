class Review < ApplicationRecord
  belongs_to :restaurant

  validates :rating, numericality: { greater_than_or_equal_to: 0.00,
                                     less_than_or_equal_to: 5 }
end
