class CommentsController < ApplicationController
    before_action :require_user

    def create
        @post = Post.find params[:post_id] 
        @comment = Comment.new comm_params 
        @comment.post = @post

        if @comment.save
            redirect_to post_path(@post.id)
        else
            @comments = @post.comments.order(created_at: :desc)
            render "posts/show"
        end
    end

    def destroy
        @comment = Comment.find params[:id]
        @comment.destroy
      
        redirect_to post_path(@comment.post)
    end

    private
    def comm_params
        params.require(:comment).permit(:body)
    end
end