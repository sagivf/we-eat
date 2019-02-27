class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :name
      t.string :rating
      t.string :comment
      t.integer :restaurant_id

      t.timestamps
    end
    add_foreign_key :reviews, :restaurants
  end
end
