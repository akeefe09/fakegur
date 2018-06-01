Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :comments

    resources :posts do
      resources :votes
    end

    resources :comments do
      resources :votes
    end

    resources :posts do
      resources :comments, only: [:index]
    end

    resources :users, only: [:create, :show, :update, :index]
    resource :session, only: [:show, :create, :destroy]
  end
end
