class Api::VotesController < ApplicationController

  def create
    @vote = Vote.new(vote_params)
    if (params[:comment_id])
      @vote.votable_type = "Comment"
      @vote.votable_id = params[:comment_id]
    else
      @vote.votable_type = "Post"
      @vote.votable_id = params[:post_id]
    end

    if @vote.save
      render "api/"
      render json: @vote.errors.full_messages
    end
  end

  def delete
    @vote = Vote.find(params[:vote_id])
    if @vote
      @vote.destroy
      render_post(vote
    else
      render json: ["Error"]
    end
  end


  private
  def vote_params
    params.require(:vote).permit(:id, :user_id, :vote_type)
  end

end
