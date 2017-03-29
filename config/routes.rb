Rails.application.routes.draw do

  scope :api do
    resources :categories do
      resources :inventories
    end
    resources :users
  end

  get 'api/login' => 'sessions#create'

end
