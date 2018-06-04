class Api::VotesController < ApplicationController

  def render_post(vote)
    if vote.votable_type.include?("Post")
      id = vote.votable_id
    else
      id = Comment.find(vote.votable_id).post.id
    end
    @post = Post.find(id)
    render "api/posts/show"
  end

  def create
    @vote = Vote.new(
      value: params[:value],
      user_id: current_user.id,
    )
    if (params[:comment_id])
      @vote.votable_type = "Comment"
      @vote.votable_id = params[:comment_id]
    else
      @vote.votable_type = "Post"
      @vote.votable_id = params[:post_id]
    end

    if @vote.save
      render_post(@vote)
    else
      render json: @vote.errors.full_messages
    end
  end

  def delete
    @vote = Vote.find(params[:vote_id])
    if @vote
      @vote.destroy
      render_post(vote)
    else
      render json: ["Error"]
    end
  end


  private
  # def vote_params
  #   params.require(:vote).permit(:id, :user_id, :value, :votable_type, :votable_id)
  # end

end
