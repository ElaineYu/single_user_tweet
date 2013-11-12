#HOMEPAGE
get '/' do
  erb :index
end

# CREATE A TWEET
post '/' do
  # Database
  @tweet = Tweet.create(tweet: params[:tweet])
  # After configuration, requests can be made like so:
  # Twitter.update("I'm tweeting something!")
  Twitter.update(params[:tweet])
  #Test
  # params[:tweet]
  @tweets = Tweet.all
  erb :_see_tweets
end

# post '/tweet_entry' do
#   Tweet.create(tweet: params[:tweet])
#   redirect '/'
# end
