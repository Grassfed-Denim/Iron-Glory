class ShippingSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :street, :city, :state, :zip, :email
end
