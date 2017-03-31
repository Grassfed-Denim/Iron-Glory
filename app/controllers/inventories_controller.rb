class InventoriesController < ApplicationController

  def index
    @category = Category.find_by(id: params[:category_id])
    @items = @category.inventories
    render json: @items
  end

  def show
    @category = Category.find_by(id: params[:category_id])
    @item = @category.inventories.find_by(id: params[:id])
    render json: @item
  end

end
