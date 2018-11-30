//*********************function for retweets***********
function forRetweets(whatRetweet){
      var myWindows = window.open('https://twitter.com/intent/retweet?tweet_id='+ whatRetweet, "MsgWindow",
      "toolbar=no, scrollbars=no, menubar=no, status=no, width=600, height=330");
};

function forOpentweets(whatOpentweet){
      var myWindows2 = window.open('https://twitter.com/i/web/status/'+ whatOpentweet, '_blank');
};
//********************write in table of username
