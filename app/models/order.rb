class Order < ApplicationRecord
  belongs_to :shipping
  has_many :orderings
end
