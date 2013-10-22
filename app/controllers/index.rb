get '/' do

  erb :index
end

post '/' do
  @tweet = Tweet.create(tweet: params[:tweet])
  Twitter.update(params[:tweet])
  # params[:tweet]
  @tweets = Tweet.all
  erb :see_tweets
end

# post '/tweet_entry' do
#   Tweet.create(tweet: params[:tweet])
#   redirect '/'
# end
