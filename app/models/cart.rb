class Cart < ApplicationRecord
  belongs_to :shipping
  has_many :inventories, through: :orderings
  has_many :orderings
end
