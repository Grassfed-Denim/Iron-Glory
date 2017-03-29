class SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:username]).try(:authenticate, params[:password])
    if @user
      render json: @user, serializer: UserExpandedSerializer
    else
      render json: ["Incorrect username and/or password.  Please try again."], status: 401
    end
  end
end
