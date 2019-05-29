class Post < ActiveRecord::Base
    belongs_to :user
    has_many :post_categories
    has_many :categories, through: :post_categories
    validates :title, presence: true, length: {minimum: 3, maximum: 50}
    validates :body, presence: true, length: {minimum: 10, maximum: 10000}
    validates :user_id, presence: true
    has_many(:comments, dependent: :destroy)
end