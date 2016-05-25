#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, 'sqlite3:pizzashop.db'

class Product < ActiveRecord::Base

end

class Order < ActiveRecord::Base
  validates :name, presence: true, length: {minimum: 3}
  validates :phone, presence: true
  validates :address, presence: true
end

get '/' do
  @products = Product.all
	erb :index
end

get '/about' do
  erb :about
end
#
# get '/cart' do
#   erb :cart
# end

post '/cart' do
  @orders_input = params[:orders]
  @items = pars_orders_line @orders_input

  @items.each do |item|
    item[0] = Product.find(item[0])
  end

 erb :cart
end

def pars_orders_line orders_input
  s1 = orders_input.split(",")
  arr = []
  s1.each {|x|
    s2 = x.split("=")
    s3 = s2[0].split("_")
    id = s3[1]
    cnt = s2[1]

    arr2 = [id, cnt]
    arr.push arr2
  }
  arr
end

post '/place_order' do
  @o = Order.new params[:order]
  @o.save
   # @orderslist = Order.order "created_at DESC"
  erb :orders
end

get '/admin' do
  @orderslist = Order.order "created_at DESC"
  erb :admin
end

after do
  ActiveRecord::Base.connection.close
end