class Article < ApplicationRecord

  # Validations are made on the Model 
  # https://guides.rubyonrails.org/active_record_validations.html
  has_many :comments
  validates :title, presence: true, length: { minimum: 5 }
end