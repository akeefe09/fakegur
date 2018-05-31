class Api::CommentsController < ApplicationController

  def create
    @comment = current_user.comments.new(comment_params)
    if @comment.save
      render :show
    end
  end

  def downvote
    vote(-1)
  end

  def upvote
    vote(1)
  end

  def vote(direction)
    @comment = Comment.find(params[:id])
    @vote = @comment.votes.find_or_initialize_by(user: current_user)
    unless @vote.update(value: direction)
      flash[:errors] = @user_vote.errors.full_messages
    end
    redirect_to comment_url(@comment)
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :post_id)
  end

end
