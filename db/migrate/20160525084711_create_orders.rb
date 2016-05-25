class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.text :name
      t.text :phone
      t.text :address
      t.text :order

      t.timestamps
    end
  end
end
