function initLocalStorage(){
var twitterStorage = localStorage.getItem("listUser"),
    listUser = document.getElementById("listUser");
if (twitterStorage) {
    // Reuse existing Data URL from localStorage
console.log('local storage is OK');
}
else {
    // Create XHR and FileReader objects
    var xhr = new XMLHttpRequest(), fileReader = new FileReader();

    xhr.open("GET", "listNameTwitter.json", true);
    // Set the responseType to blob
    xhr.responseType = "blob";
    xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
            // onload needed since Google Chrome doesn't support addEventListener for FileReader
            fileReader.onload = function (evt) {
                // Read out file contents as a Data URL
                var result = evt.target.result;
                try {
                    localStorage.setItem("listUser", result);

                }
                catch (e) {
                    console.log("Storage failed: " + e);
                }
            };
            //fileReader.readAsDataURL(xhr.response); // Load blob as Data URL
            fileReader.readAsText(xhr.response);
            sessionStorage.setItem("listUserblod", xhr.response);
        }else{
          xhr.push = sessionStorage.getItem("listUserblod");
          console.log(xhr.response);
        }
    }, false);
    // Send XHR
    xhr.send();
    console.log('load default Ok');
}
};

function initLocalStorage2(){
var twitterStorage = localStorage.getItem("listConfig"),
    listConfig = document.getElementById("listConfig");
if (twitterStorage) {
    // Reuse existing Data URL from localStorage
console.log('local storage2 is OK');
}
else {
    // Create XHR and FileReader objects
    var xhr = new XMLHttpRequest(), fileReader = new FileReader();

    xhr.open("GET", "listTimeNumberTweets.json", true);
    // Set the responseType to blob
    xhr.responseType = "blob";
    xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
            // onload needed since Google Chrome doesn't support addEventListener for FileReader
            fileReader.onload = function (evt) {
                // Read out file contents as a Data URL
                var result = evt.target.result;
                try {
                    localStorage.setItem("listConfig", result);
                    location.reload(true);
                }
                catch (e) {
                    console.log("Storage failed: " + e);
                }
            };
            //fileReader.readAsDataURL(xhr.response); // Load blob as Data URL
            fileReader.readAsText(xhr.response);
            sessionStorage.setItem("listConfigblod", xhr.response);
        }else{
          xhr.push = sessionStorage.getItem("listConfigblod");
          console.log(xhr.response);
        };
    }, false);
    // Send XHR
    xhr.send();
    console.log('load default2 Ok');
}
};
///******************************************************************
function testproxy(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=makeschool");
    xhr.responseType = "json";
    xhr.send();
    xhr.addEventListener("error", function () {
        console.log(xhr.status);
        console.log('what wea this is');
        console.log(sessionStorage.getItem("makeschoolBlob"));
    }, false);
    xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
          sessionStorage.setItem("makeschoolBlob", JSON.stringify(xhr.response[0]));
          console.log('load new');
        };
    }, false);

};
