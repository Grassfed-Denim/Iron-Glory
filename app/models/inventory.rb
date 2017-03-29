class Inventory < ApplicationRecord
  belongs_to :category
  has_many :orders, through: :orderings
  has_many :orderings

  mount_uploader :photo, PhotoUploader

end
