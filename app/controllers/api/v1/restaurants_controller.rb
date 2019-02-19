module Api::V1
  class RestaurantsController < ApplicationController
    before_action :set_restaurant, only: [:show, :update, :destroy]

    # GET /restaurants
    def index
      @restaurants = Restaurant
      if (params.has_key? :max_delivery_time_minutes)
        @restaurants = @restaurants.where("max_delivery_time_minutes < ?", params[:max_delivery_time_minutes])
      end
      @restaurants = @restaurants.where(params.permit(:cuisine_id, :rating))
      render json: @restaurants, each_serializer: RestaurantSerializer
    end

    # GET /restaurants/1
    def show
      render json: @restaurant
    end

    # POST /restaurants
    def create
      @restaurant = Restaurant.new(restaurant_params)

      if @restaurant.save
        render json: @restaurant, status: :created
      else
        render json: @restaurant.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /restaurants/1
    def update
      if @restaurant.update(restaurant_params)
        render json: @restaurant
      else
        render json: @restaurant.errors, status: :unprocessable_entity
      end
    end

    # DELETE /restaurants/1
    def destroy
      @restaurant.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_restaurant
      @restaurant = Restaurant.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def restaurant_params
      tp = params.require(:restaurant).permit(:name, :rating, :address, :lat, :lng, :max_delivery_time_minutes, :accepts_10bis)
      tp[:cuisine_id] = params[:cuisine]
      tp
    end
  end
end

