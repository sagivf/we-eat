Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :restaurants
      resources :cuisines
    end
  end
end
