class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    @user.profile_pic = params[:post][:image]
    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 403
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end

end
