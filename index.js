import { tweetsData } from './data.js'
const tweetBtn = document.getElementById('tweet-btn')
const tweetInput = document.getElementById('tweet-input')
const feed = document.getElementById('feed')
tweetBtn.addEventListener('click', () => {
    console.log(tweetInput.value)
    tweetInput.value = '';
})
document.addEventListener('click', function(e){
    if(e.target.dataset.like){
        console.log(e.target.dataset.like)
        handleLikeClick(e.target.dataset.like)
    }
})
// this has been my solution to the challenge on the Like a tweet part 5: find the tweet object
// function handleLikeClick(tweetId){
//     console.log(tweetId)
//     tweetsData.forEach(function(tweet){
//         if(tweet.uuid === tweetId){
//             const targetTweetObj = tweet
//             tweet.likes += 1
//             console.log(targetTweetObj)
//         }
//     })
// }
// The scrim is "Like a tweet part 5" I did my solution with forEach - and the tutor did it with filter!!! 
// They searched for the object with the uuid and because there would be only one such object the could
// safely say at the end [0]
// this is the scrimba solution
function handleLikeClikc(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    targetTweetObj.likes++
    console.log(tweetsData)

}
function getFeedHtml(){
    let feedHtml = '';
    tweetsData.forEach(function(tweet){
        feedHtml += `
                <div class="tweet">
                    <img src="${tweet.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${tweet.handle}</p>
                        <p class="tweet-text">${tweet.tweetText}</p>
                        <div class="tweet-details">
                            <span class="tweet-detail">
                            <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}"></i>${tweet.replies.length}</span>
                            <span class="tweet-detail"><i class="fa-solid fa-heart" data-like="${tweet.uuid}" ></i>${tweet.likes}</span>
                            <span class="tweet-detail"><i class="fa-solid fa-retweet" data-retweet="${tweet.uuid}"></i>${tweet.retweets}</span>

                        </div>
                    </div>
                </div>
        `
    })
    return feedHtml;
}
function render(){
    feed.innerHTML = getFeedHtml();
}
render()
/*
<div class="tweet">
    <img src="URL OF PROFILE PIC" class="profile-pic">
    <div>
        <p class="handle">TWEET HANDLE</p>
        <p class="tweet-text">TWEET TEXT</p>
        <div class="tweet-details">
            <span class="tweet-detail">
                NUMBER OF REPLIES
            </span>
            <span class="tweet-detail">
                NUMBER OF likes
            </span>
            <span class="tweet-detail">
                NUMBER OF RETWEETS
            </span>

        </div>
    </div>
</div>
*/