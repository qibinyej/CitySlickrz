class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :email, :password, :location
end
