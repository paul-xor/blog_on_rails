class UsersController < ApplicationController

    def index
        @users = User.paginate(page: params[:page], per_page: 5)
    end

    def new
        @user = User.new
    end

    def create
        # debugger
        @user = User.new(user_params)

        if @user.save
            flash[:success] = "Welcome to the blog #{@user.username}"
            redirect_to posts_path
        else
            render :new
        end
    end

    def edit
        @user = User.find(params[:id])
    end

    def update
        @user = User.find(params[:id])

        if @user.update(user_params)
            flash[:success] = "#{@user.username} account was updated successfully"
            redirect_to posts_path
        else
            render :edit
        end

    end

    def show
        @user = User.find(params[:id])
        @user_posts = @user.posts.paginate(page: params[:page], per_page: 6)
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end