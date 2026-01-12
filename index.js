import { tweetsData } from './data.js'
const tweetBtn = document.getElementById('tweet-btn')
const tweetInput = document.getElementById('tweet-input')
tweetBtn.addEventListener('click', () => {
    console.log(tweetInput.value)
    tweetInput.value = '';
})

function getFeedHtml(){
    let feedHtml = '';
    for(let tweet of tweetsData){
        feedHtml += `
                <div class="tweet">
                    <img src="${tweet.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${tweet.handle}</p>
                        <p class="tweet-text">${tweet.tweetText}</p>
                        <div class="tweet-details">
                            <span class="tweet-detail">${tweet.replies.length}</span>
                            <span class="tweet-detail">${tweet.likes}</span>
                            <span class="tweet-detail">${tweet.retweets}</span>

                        </div>
                    </div>
                </div>
        `
    }
    return feedHtml;
}
getFeedHtml();

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