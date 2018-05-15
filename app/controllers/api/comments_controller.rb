class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :post_id)
  end

end
