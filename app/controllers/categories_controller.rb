class CategoriesController < ApplicationController

  def index
    @categories = Category.all
    render json: @categories
  end

  def show
    @category = Category.find_by(id: params[:id])
    @items = @category.inventories
    render json: @items
  end

end
