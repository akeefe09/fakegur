class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
    render "api/posts/index"
  end

  def show
    @post = Post.find(params[:id])
    render "api/posts/show"
  end

  def new

  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    @user = User.find(@post.user_id)
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :user_id, :description)
  end

end
