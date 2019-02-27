module Api::V1
  class ReviewsController < ApplicationController
    # POST /review
    def create
      review = Review.new(review_params)

      if review.save
        render json: review, status: :created
      else
        render json: review.errors, status: :unprocessable_entity
      end
    end

    # Only allow a trusted parameter "white list" through.
    def review_params
      params.require(:review).permit(:name, :rating, :comment, :restaurant_id)
    end
  end
end

