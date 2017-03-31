class Cart < ApplicationRecord
  belongs_to :shipping
  belongs_to :order
  has_many :inventories, through: :orderings
  has_many :orderings
end
