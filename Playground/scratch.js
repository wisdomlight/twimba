const talkBtn = document.getElementById('send-btn');
const userText = document.getElementById('user-text');

talkBtn.addEventListener('click', function(){
    console.log(userText.value)
    userText.value = '';
})