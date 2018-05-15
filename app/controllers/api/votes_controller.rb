class Api::VotesController < ApplicationController

  

  private
  def vote_params
    params.require(:vote).permit(:id, :user_id, :vote_type, :voteable_id, :voteable_type)
  end

end
