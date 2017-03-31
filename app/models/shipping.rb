class Shipping < ApplicationRecord
  belongs_to :user, optional: true
  has_many :orders

  validates :first_name, :last_name, :street, :city, :state, :zip, :email, presence: true
end
