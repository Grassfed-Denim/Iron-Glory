class Inventory < ApplicationRecord
  belongs_to :category
  has_many :carts, through: :orderings
  has_many :orderings

  mount_uploader :photo, PhotoUploader

end
