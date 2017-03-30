class User < ApplicationRecord
  has_many :shippings
  has_secure_token :api_token
  has_secure_password
  validates :username, presence: true

end
