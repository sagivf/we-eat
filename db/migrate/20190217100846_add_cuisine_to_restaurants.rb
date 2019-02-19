class AddCuisineToRestaurants < ActiveRecord::Migration[5.2]
  # def change
  #   remove_column :restaurants, :cuisine_id, :integer
  #   add_reference :restaurants, :cuisine, foreign_key: true
  # end
  #

  def down
    add_column :restaurants, :cuisine_id, :integer
    remove_reference :restaurants, :cuisine, foreign_key: true
  end

  def up
    remove_column :restaurants, :cuisine_id, :integer
    add_reference :restaurants, :cuisine, foreign_key: true
    json = ActiveSupport::JSON.decode(File.read('db/seeds/cuisines.json'))
    json.each do |a|
      Cuisine.create!(a)
    end
    cuisine_id = (Cuisine.first(1))[0].id
    Restaurant.update_all({:cuisine_id => cuisine_id})
  end
end
