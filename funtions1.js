
//******************** reload time ***************
function reLoadtime()
{
var a = JSON.parse(localStorage.getItem('listConfig'));
if (typeof a[1] === "string")
{
var b = Number(a[1]);
}else{
var b = 60000;
};
return b;
};

// *******************clock******************
var myVar = setInterval(function() {
  myClock();
}, 1000);

function myClock() {
  var d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
};
//***************************del user********************
function removeUserT(f1)
{
  var arrayMenu = JSON.parse(localStorage.getItem("listUser"));
    arrayMenu.splice(f1, 1);
    localStorage.setItem("listUser", JSON.stringify(arrayMenu));
    generatemenu();
    mainCorp();

};
//****************************add user *****************
function addUserT()
{
    var newUser = document.getElementById('userIDnew').value;
    var arrayMenu = JSON.parse(localStorage.getItem("listUser"));
    arrayMenu.push(newUser);
    localStorage.setItem("listUser", JSON.stringify(arrayMenu));
    generatemenu();
    mainCorp();
};
//*****************************menu users****************
function generatemenu()
{
  var arrayMenu = JSON.parse(localStorage.getItem("listUser"));
  var menu01 = document.getElementById('menu001').remove();
  var menu01 = document.createElement("div");
  menu01.setAttribute('id', 'menu001');
  for (var i = 0; i < arrayMenu.length; i++)
    {
      var userN = document.createElement("p");
      userN.innerHTML ='@' + arrayMenu[i] + '   <button type="button" onclick="removeUserT('+i+')">del</button>';
      menu01.appendChild(userN);
    };
    var userN = document.createElement("p");
    userN.innerHTML = '@'+'<input type="text" id="userIDnew" name="usertwitter"><button type="button" onclick="addUserT()">add</button>';
    menu01.appendChild(userN);

    var userN = document.createElement("a");
    userN.innerHTML ='<button type="button" >Save in HDD</button>';
    menu01.appendChild(userN);

    var userN = document.createElement("a");
    userN.innerHTML ='<button type="button" >Load from HDD</button>';
    menu01.appendChild(userN);

    var userN = document.createElement("a");
    userN.innerHTML ='<button type="button" >Reset to default</button>';
    menu01.appendChild(userN);

    var divContainer11 = document.getElementById('menuconfig1');
    divContainer11.appendChild(menu01);



};
//***********************menu options********************
function generatemenu2()
{
  var arrayMenu = JSON.parse(localStorage.getItem("listConfig"));
  var menu02 = document.getElementById('menu002').remove();
  var menu02 = document.createElement("div");
  menu02.setAttribute('id', 'menu002');
      var userN = document.createElement("p");
      userN.innerHTML ='# of Tweets     :  ' + arrayMenu[0];
      menu02.appendChild(userN);
      var userN = document.createElement("p");
      userN.innerHTML ='Refresh      :  ' + arrayMenu[1] +'  ms';
      menu02.appendChild(userN);
      var userN = document.createElement("p");
      userN.innerHTML ='column      :  ' + arrayMenu[2];
      menu02.appendChild(userN);
      var userN = document.createElement("p");
      userN.innerHTML ='Style      :  ' + arrayMenu[3];
      menu02.appendChild(userN);

      var userN = document.createElement("a");
      userN.innerHTML ='<button type="button" >Save in HDD</button>';
      menu02.appendChild(userN);

      var userN = document.createElement("a");
      userN.innerHTML ='<button type="button" >Load from HDD</button>';
      menu02.appendChild(userN);

      var userN = document.createElement("a");
      userN.innerHTML ='<button type="button" >Reset to default</button>';
      menu02.appendChild(userN);

    var divContainer15 = document.getElementById('menuconfig2');
    divContainer15.appendChild(menu02);
};
//******************************cicle menu users******************
function menuOnOff()
{
  var x = document.getElementById('menuconfig1');
  if (x.style.display === 'none') {
      x.style.display ='block';
      generatemenu();
    }
  else {
      x.style.display = 'none';
    }
};
//*************************************cicle menu users**************
function menuOnOff2()
{
  var x = document.getElementById('menuconfig2');
  if (x.style.display === 'none') {
      x.style.display ='block';
      generatemenu2();
    }
  else {
      x.style.display = 'none';
    }
};
