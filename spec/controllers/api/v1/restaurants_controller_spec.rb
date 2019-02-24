require 'rails_helper'

RSpec.describe Api::V1::RestaurantsController, type: :controller do
  describe "GET index" do
    it "has a 200 status code" do
      FactoryBot.create_list(:restaurant, 5)
      get :index
      hash_body = nil
      expect(response.status).to eq(200)
      expect { hash_body = JSON.parse(response.body) }.not_to raise_exception
      expect(hash_body.length).to eq(5)
    end
    it "returns all restaurants" do
      FactoryBot.create_list(:restaurant, 5)
      get :index
      hash_body = nil
      expect(response.status).to eq(200)
      expect { hash_body = JSON.parse(response.body) }.not_to raise_exception
      expect(hash_body.length).to eq(5)
    end
    it "returns restaurant filtered by name" do
      FactoryBot.create_list(:restaurant, 5)
      FactoryBot.create(:restaurant, {
          name: "YoYoma",
          address: "Asdasd"
      })

      get :index, params: { name: 'YoYo' }
      puts response.body
      hash_body = nil
      expect(response.status).to eq(200)
      expect { hash_body = JSON.parse(response.body) }.not_to raise_exception
      expect(hash_body.length).to eq(1)
    end
  end
end
