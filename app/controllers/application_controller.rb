class ApplicationController < ActionController::Base

  private

  def current_user
    @current_user ||= User.find_by(api_token: params[:api_token]) if params[:api_token]
  end

  def current_cart
    return @cart if @cart
    if params[:cart_token]
      @cart = Cart.find_by(token: params[:cart_token])
    elsif current_user && current_user.cart
      @cart = current_user.cart
    elsif current_user
      @cart = current_user.cart.create!
    else
      @cart = Cart.create!(status: "active")
    end
  end


end
