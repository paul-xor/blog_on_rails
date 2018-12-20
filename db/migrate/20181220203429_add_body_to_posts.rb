class AddBodyToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :body, :text
    add_column :posts, :created_at, :datetime
    add_column :posts, :updated_at, :datetime
  end
end
