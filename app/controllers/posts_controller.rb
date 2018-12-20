class PostsController < ApplicationController

    def new
     @post = Post.new
    end

    def create
        #render plain: params[:post].inspect
        @post = Post.new(post_params)
        @.post.save
        redirect_to post_show(@post)
    end

    private
    def post_params
        params.require(:post).permit(:title, :body)
    end
    
end