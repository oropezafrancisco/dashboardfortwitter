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
  var xhr = new XMLHttpRequest();
  var url = urlUser;
  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.send();
  xhr.addEventListener("error", function () {
      console.log(xhr.status);
      console.log('Off line');
      subTable(nameStorage, theIndexUser);
      resolve(new HttpResponse(200, null, null));
  }, false);

  xhr.addEventListener("load", function () {
      if (xhr.status === 200) {
        console.log(xhr.status);
        console.log('On line');
        sessionStorage.setItem(nameStorage, JSON.stringify(xhr.response));
        subTable(nameStorage, theIndexUser);
      };
  }, false);

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
                  var b0 = arrItems[k]['user']['followers_count'];
                  var b1 = document.getElementById("TitleNombre0"+k).innerHTML;
                  var b2 = 'butTitleNombre0'+k;
                  document.getElementById("TitleNombre0"+k).innerHTML = '<img alt="logo" height="25" width="25" src='+logoUser+'><a>'+b1+'_</a>'+'<button type="button" id='+b2+'>follower:'+b0+'</button>';
                  document.getElementById('t002'+k).insertRow(-1);
                  var tr = document.createElement("tr");
                  document.getElementById('t002'+k).appendChild(tr);
                  var th = document.createElement("th");
                  th.innerHTML = "";//col[0];
                  th.setAttribute("id","thtitle");
                  tr.appendChild(th);
                  var th = document.createElement("th");
                  th.innerHTML = col[3];
                  th.setAttribute("id","thtitle");
                  tr.appendChild(th);
                  var th = document.createElement("th");
                  th.innerHTML = "";//col[6];
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
                    var xreTweets = theID_str;
                    var yreTweets = "bth"+i+user_in_table;
                    var xtabTweets = theID_str;
                    var ytabTweets = "tth"+i+user_in_table;

                    document.getElementById('t002'+k).insertRow(-1);
                      var tr = document.createElement("tr");
                      document.getElementById('t002'+k).appendChild(tr);
                          var tabCell = tr.insertCell(-1);
                          tabCell.setAttribute("id","timedate");
                          var d1 = new Date(theDate);
                          var d2 = d1.toDateString();
                          tabCell.innerHTML = "";//d1.toUTCString();
                          var tabCell = tr.insertCell(-1);
                          tabCell.setAttribute("id","th"+i+user_in_table); //unique for retwits buttons o function
                          tabCell.innerHTML = '<a id="timedate" >'+d1.toUTCString()+'</a></br>'+theText+'</br><button type="button" id='+ytabTweets+'>go tab</button><button type="button" id='+yreTweets+'>retw:'+theRT+'</button>';
                          var tabCell = tr.insertCell(-1);
                          tabCell.setAttribute("id","thcontantInfo");

                          tabCell.innerHTML ='';//'<button type="button" id='+ytabTweets+'>go tab</button><br><button type="button" id='+yreTweets+'>retw:'+theRT+'</button>';
                          document.getElementById(yreTweets).setAttribute("onclick", 'forRetweets('+xreTweets+')');
                          document.getElementById(ytabTweets).setAttribute("onclick", 'forOpentweets('+xtabTweets+')');
                  };

};
