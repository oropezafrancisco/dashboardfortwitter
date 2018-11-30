function mainCorp(){

var arrayRefresh = JSON.parse(localStorage.getItem("listConfig"));
var tuis = arrayRefresh[0];
var timeOfRefresh = arrayRefresh[1];
var arrayTwitter = JSON.parse(localStorage.getItem("listUser"));
document.getElementById("body01").remove();
var thesubBody = document.createElement("div");
thesubBody.setAttribute("id", "body01");
var theBody = document.getElementById("body00");
theBody.appendChild(thesubBody);

madetable1(arrayTwitter.length,"body01");//Table Master *************

for (var k = 0; k < arrayTwitter.length; k++) {
  var divContainer = document.getElementById("TitleNombre0"+k);
  divContainer.innerHTML = '<a>@'+arrayTwitter[k]+'</a>';
// widget twitter js funcion off it have bug

};



for (var k = 0; k < arrayTwitter.length; k++) {
              var url1="http://"+theSERVER+":7890/1.1/statuses/user_timeline.json?count="+tuis+"&screen_name="+arrayTwitter[k];
              var conteneDor = document.getElementById("Column0"+k);
              conteneDor.innerHTML = '<table id="t002'+k+'"></table>';
              var tt = '"t002'+k+'"';
              //zona var END****************
              var nameSto = 'twitterproxy'+k;
              readTwitterProxy(url1, arrayTwitter[k], k);

};
};
//******************************************
function readTwitterProxy(urlUser, nameStorage,theIndexUser){

  var xmlhttp = new XMLHttpRequest();
  var url = urlUser;
  xmlhttp.responseType = "json";
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          sessionStorage.setItem(nameStorage, JSON.stringify(this.response));
          subTable(nameStorage, theIndexUser);

      };
  };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};
//*************************************
function subTable(user_in_table,k)
{
var arriIDstr = [];
var arrItems = JSON.parse(sessionStorage.getItem(user_in_table));
var col = [];
for (var i = 0; i < tuis; i++) {
    var a0 = '"'+String(arrItems[i]['id_str'])+'"';
    arriIDstr.push(a0);
    for (var key in arrItems[i]) {
        if (col.indexOf(key) === -1) { col.push(key) };
    };
};
              //**********************
                  var logoUser = arrItems[k]['user']['profile_image_url'];
                  console.log(logoUser);
                  var b0 = arrItems[k]['user']['followers_count'];
                  var b1 = document.getElementById("TitleNombre0"+k).innerHTML;
                  var b2 = 'butTitleNombre0'+k;
                  document.getElementById("TitleNombre0"+k).innerHTML = '<img height="25" width="25" src='+logoUser+'><a>'+b1+'_<a>'+'<button type="button" id='+b2+'>follower:'+b0+'</button>';
                  document.getElementById('t002'+k).insertRow(-1);
                  var tr = document.createElement("tr");
                  document.getElementById('t002'+k).appendChild(tr);
                  var th = document.createElement("th");
                  th.innerHTML = col[0];
                  th.setAttribute("id","thtitle");
                  tr.appendChild(th);
                  var th = document.createElement("th");
                  th.innerHTML = col[3];
                  th.setAttribute("id","thtitle");
                  tr.appendChild(th);
                  var th = document.createElement("th");
                  th.innerHTML = col[6];
                  th.setAttribute("id","thtitle");
                  tr.appendChild(th);



                  for (var i = 0; i < tuis; i++)
                  {
                    var dict = arrItems[i];
                    var theDate = dict['created_at'];
                    var theID_str = arriIDstr[i];
                    var theRT = dict['retweet_count'];
                    var dict24 = dict['source'];
                    var theText = dict['text'];
                    var dict2 = dict['entities'];
                    var dict3 = dict2['urls'];

                    document.getElementById('t002'+k).insertRow(-1);
                      var tr = document.createElement("tr");
                      document.getElementById('t002'+k).appendChild(tr);
                          var tabCell = tr.insertCell(-1);
                          tabCell.setAttribute("id","timedate");
                          var d1 = new Date(theDate);
                          var d2 = d1.toDateString();
                          tabCell.innerHTML = d1.toUTCString();
                          var tabCell = tr.insertCell(-1);
                          tabCell.setAttribute("id","th"+i+user_in_table); //unique for retwits buttons o function
                          tabCell.innerHTML = theText;
                          var tabCell = tr.insertCell(-1);
                          tabCell.setAttribute("id","thcontantInfo");
                          var xreTweets = theID_str;
                          var yreTweets = "bth"+i+user_in_table;
                          var xtabTweets = theID_str;
                          var ytabTweets = "tth"+i+user_in_table;
                          tabCell.innerHTML ='<button type="button" id='+ytabTweets+'>go tab</button><button type="button" id='+yreTweets+'>retw:'+theRT+'</button>';
                          document.getElementById(yreTweets).setAttribute("onclick", 'forRetweets('+xreTweets+')');
                          document.getElementById(ytabTweets).setAttribute("onclick", 'forOpentweets('+xtabTweets+')');
                  };

};
