class PostsController < ApplicationController
    before_action :set_post, only:[:edit, :show, :update, :destroy]
    before_action :require_user, except: [:index, :show]
    before_action :require_same_user, only: [:edit, :update, :destroy]

    def index
        @posts = Post.paginate(page: params[:page], per_page: 9)
    end

    def new
     @post = Post.new
    end

    def create
        #render plain: params[:post].inspect
        @post = Post.new(post_params)
        @post.user = current_user
        if @post.save
            flash[:success] = "Post was successfully created"
            redirect_to post_path(@post)
        else
            render :new
        end

    end

    def show
        @comments = @post.comments.order(created_at: :desc)
        @comment = Comment.new

        #@post.update_columns(view_count: @post.view_count + 1)
    end

    def edit
        
    end

    def update
        
        if @post.update(post_params)
            flash[:success] = "Post was successfully updated!"
            redirect_to post_path(@post)
        else
            render :edit
        end
    end

    def destroy
        
        @post.destroy
        flash[:danger] = "Post was successfully deleted."
        redirect_to posts_path 

    end

    private
    def set_post
        @post = Post.find(params[:id])
    end

    def post_params
        params.require(:post).permit(:title, :summary, :image, :body, category_ids: [])
    end
    
    def require_same_user
        if current_user != @post.user and !current_user.admin?
            flash[:danger] = "You can edit/delete only your own posts"
            derirect_to root_path
        end
    end
end