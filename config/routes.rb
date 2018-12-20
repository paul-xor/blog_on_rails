Rails.application.routes.draw do
  root 'pages#home'
  get 'pages/about', to: 'pages#about'
  get 'welcome/home', to: "welcome#home"
  resources :posts
  
end
