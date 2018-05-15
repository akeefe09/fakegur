# class Api::ImagesController < ApplicationController
#
#   def create
#     @image = Image.new(image_params)
#     if @image.save
#       render :show
#     else
#       render json: @image.errors.full_messages, status: 422
#     end
#   end
#
#   def destroy
#     Image.find(params[:id]).destroy
#   end
#
#   def index
#     cloud_name = ENV['CLOUD_NAME']
#     upload_preset = Figaro.env.UPLOAD_PRESET
#     @images = Image.all
#   end
#
#   def show
#     @image = Image.find(params[:id])
#   end
#
#   private
#
#   def image_params
#     params.require(:image).permit(:image, :description, :main_image)
#   end
# end
