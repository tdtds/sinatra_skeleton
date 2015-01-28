#
# application main
#
require 'sinatra/base'
require 'haml'
require 'mongoid'
require 'rack/csrf'
require 'dalli'
require 'omniauth'
require 'omniauth-twitter'

class App < Sinatra::Base
	set :haml, {format: :html5, escape_html: true}
	enable :logging

	enable :sessions
	use OmniAuth::Builder do
		provider :twitter, ENV['TWITTER_KEY'], ENV['TWITTER_SECRET']
		#provider :developer unless production?
	end

	configure do
		Mongoid::load!('config/mongoid.yml')
	end

	configure :production do
		raise StandardError.new("not found ENV['TWITTER_KEY']") unless ENV['TWITTER_KEY']
		raise StandardError.new("not found ENV['TWITTER_SECRET']") unless ENV['TWITTER_SECRET']
	end

	get '/' do
		haml :index
	end
end
