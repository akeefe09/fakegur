class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def new

  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 403
    end
  end

  def update

  end
  #
  # def downvote
  #   vote(-1)
  # end
  #
  # def upvote
  #   vote(1)
  # end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  # def vote(direction)
  #   @post = Post.find(params[:id])
  #   @vote = @post.votes.find_or_initialize_by(user: current_user)
  #   unless @vote.update(value: direction)
  #     flash[:errors] = @vote.errors.full_messages
  #   end
  #   redirect_to post_url(@post)
  # end

  private
  def post_params
    params.require(:post).permit(:title, :description, :image)
  end

end
