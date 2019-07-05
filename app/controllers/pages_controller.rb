class PagesController < ApplicationController
  
  #index is for react
  def index
  
  end

  def home
    redirect_to posts_path if logged_in?
  end

  def about

  end

  def contacts
  
  end

end
