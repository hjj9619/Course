/* 此项目创建于2016/4/28 */
window.onload = function () {
  $(function(){
    $("#tab-nav li").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
      $(".tab-d > div").eq($(this).index()).show().siblings().hide();
    })
  })
}
function wheel(obj, up, down){
  obj.onmousewheel = fn;
  if(obj.addEventListener){
    obj.addEventListener("DOMMouseScroll", fn, false);
  }

  function fn(ev) {
    var ev = ev || event;
    if (ev.capture) {
      ev.capture();  //事件捕获
    }
    var b = true;
    if (ev.detail) {
      b = ev.detail < 0 ? true : false;
    } else {
      b = ev.wheelDelta < 0 ? false : true;
    }

    if (b) {
      up();
    } else {
      down();
    }

    if (ev.preventDefault) {
      ev.preventDefault();
    }
  }
  return false;
}


var box = document.getElementById("box");
var oBtn = document.getElementById("sublim");
var oTxt = document.getElementById("txt");
var oUl = document.getElementById("ul");
var iNow = localStorage.getItem("num") || 0;

wheel(box, function(){
//上
  var off = oUl.offsetTop + 30;
  if(off>= 0){
    off = 0;
  }
  oUl.style.top = off + "px";
}, function(){
//下
  var off = oUl.offsetTop - 30;
  if(off <= box.offsetHeight - oUl.offsetHeight ){
    off = box.offsetHeight - oUl.offsetHeight;
  }
  oUl.style.top = off + "px";
})




if(iNow){
  for(var i= 0; i<iNow ; i++){
    creatE(i);
  }
}



var alert =document.getElementById("alert");
oTxt.onfocus = function(){
   alert.style.display = "block";
}
oTxt.onblur = function(){
  alert.style.display = "none";
}

oTxt.onkeydown = function(ev){
  var ev = ev || event;
  if(ev.keyCode == 13 && ev.ctrlKey){
    ms();
  }
}
oBtn.onclick = ms;
function ms(){



  var T = box.offsetHeight - oUl.offsetHeight - 100;

  oUl.style.top = T + "px";


  localStorage.setItem("ms"+iNow, oTxt.value);
  localStorage.setItem("date" + iNow, new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
  creatE(iNow);
  iNow++;
  localStorage.setItem("num", iNow);
  oTxt.value = "";
}












function creatE(n){
  var oLi = document.createElement("li");
  var oImg = document.createElement("img");
  var hDiv = document.createElement("div");
  var mDiv = document.createElement("div");
  var aDiv = document.createElement("div");
  var lSpan = document.createElement("span");
  var nSpan = document.createElement("span");
  var tSpan = document.createElement("span");

  oImg.src = "img/avatar1.jpg";
  oLi.className = "mess-l";
  hDiv.className = "header-l";
  mDiv.className = "mess-d";
  aDiv.className = "mess-a";
  lSpan.className = "left";
  nSpan.className = "name";
  tSpan.className = "time";
  nSpan.innerHTML = "HE";
  aDiv.innerHTML = localStorage.getItem("ms" + n);
  tSpan.innerHTML = localStorage.getItem("date" + n);
  mDiv.appendChild(lSpan);
  mDiv.appendChild(nSpan);
  mDiv.appendChild(tSpan);
  mDiv.appendChild(aDiv);
  hDiv.appendChild(oImg);

  oLi.appendChild(hDiv);
  oLi.appendChild(mDiv);

  oUl.appendChild(oLi);

}


function allSiblings(elm) {
  var a = [];
  var p = elm.parentNode.children;
  for(var i =0,pl= p.length;i<pl;i++) {
    if(p[i] !== elm) a.push(p[i]);
  }
  return a;
}
//手风琴效果

var tb = document.getElementsByClassName("title-b");
var tc = document.getElementsByClassName("content");
for(var i=0; i<tb.length; i++){
  tb[i].onclick = function(){
    for(var j=0; j<tc.length;  j++){
      tc[j].style.display = "none";
      this.nextElementSibling.style.display = "block";
    }
  }
}

//localStorage.clear();