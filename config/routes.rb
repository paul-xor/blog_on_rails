Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  root 'pages#home'
  get 'pages/about', to: 'pages#about'
  get 'welcome/home', to: "welcome#home"
  resources :posts do
    resources :comments, only: [:create, :destroy]
  end

  get 'signup', to: 'users#new' 
  resources :users, except: [:new]
  
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
end
