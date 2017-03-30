Rails.application.routes.draw do

  resources :carts
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  scope :api do
    resources :categories do
      resources :inventories
    end
    resources :users
  end

  get 'api/login' => 'sessions#create'

end
