class UsersController < ApplicationController


  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
      # session id
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  private

  def user_params
    params.permit(:username, :password)
  end

end
