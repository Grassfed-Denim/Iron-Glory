class ShippingController < ApplicationController
  def create
    @shipping = Shipping.new(shipping_params)
    if @shipping.save
      render json: @shipping
    else
      render json: @shipping.errors.full_messages, status: 400
    end
  end

  private

  def shipping_params
    params.permit(:first_name, :last_name, :street, :city, :state, :zip, :email)
  end
end
