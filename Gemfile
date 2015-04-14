source 'https://rubygems.org'

ruby '2.2.2'

gem 'sinatra', require: 'sinatra/base'
gem 'sinatra-asset-pipeline', require: 'sinatra/asset_pipeline'
gem 'uglifier'
gem 'yui-compressor'

gem 'puma'
gem 'haml', require: 'haml'
gem 'mongoid', require: 'mongoid'
gem 'bson_ext'
gem 'rack_csrf', require: 'rack/csrf'
gem 'dalli', require: 'dalli'
gem "omniauth"
gem "omniauth-twitter"

source 'https://rails-assets.org' do
	gem 'rails-assets-jquery'
end

group :development, :test do
	gem 'rake'
	gem 'rspec'
	gem 'autotest'
	gem 'sinatra-reloader', require: 'sinatra/reloader'
	gem 'pry'
end

