class Order < ApplicationRecord
  belongs_to :shipping
  has_many :orderings
  has_many :inventories, through: :orderings
end
