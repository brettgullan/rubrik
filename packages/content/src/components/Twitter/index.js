import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

// ----------------------------------------------------------------------------

const Tweet = ({ tweetId, options, placeholder, onLoad }) => {
  return (
    <TwitterTweetEmbed
      tweetId={tweetId}
      options={options}
      placeholder={placeholder}
      onLoad={onLoad}
    />
  )
}

export default Tweet
