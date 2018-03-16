function addEvent(d,c,a){if(d.addEventListener){d.addEventListener(c,a,false);
return true
}else{if(d.attachEvent){var b=d.attachEvent("on"+c,a);
return b
}else{return false
}}}function removeEvent(e,d,b,a){if(e.removeEventListener){e.removeEventListener(d,b,a);
return true
}else{if(e.detachEvent){var c=e.detachEvent("on"+d,b);
return c
}else{alert("Handler could not be removed")
}}}function getViewportHeight(){if(window.innerHeight!=window.undefined){return window.innerHeight
}if(document.compatMode=="CSS1Compat"){return document.documentElement.clientHeight
}if(document.body){return document.body.clientHeight
}return window.undefined
}function getViewportWidth(){var b=17;
var a=null;
if(window.innerWidth!=window.undefined){return window.innerWidth
}if(document.compatMode=="CSS1Compat"){return document.documentElement.clientWidth
}if(document.body){return document.body.clientWidth
}}function getScrollTop(){if(self.pageYOffset){return self.pageYOffset
}else{if(document.documentElement&&document.documentElement.scrollTop){return document.documentElement.scrollTop
}else{if(document.body){return document.body.scrollTop
}}}}function getScrollLeft(){if(self.pageXOffset){return self.pageXOffset
}else{if(document.documentElement&&document.documentElement.scrollLeft){return document.documentElement.scrollLeft
}else{if(document.body){return document.body.scrollLeft
}}}}var gPopupMask=null;
var gPopupContainer=null;
var gPopupIsShown=false;
var gHideSelects=false;
var gReturnVal=null;
var popupwinID=null;
var gTabIndexes=new Array();
var gTabbableTags=new Array("A","BUTTON","TEXTAREA","INPUT","IFRAME");
if(!document.all){document.onkeypress=keyDownHandler
}function initPopUp(){theBody=document.getElementsByTagName("BODY")[0];
popmask=document.createElement("div");
popmask.id="popupMask";
popcont=document.createElement("div");
theBody.appendChild(popmask);
theBody.appendChild(popcont);
gPopupMask=document.getElementById("popupMask");
gPopupContainer=document.getElementById("popupwinID");
var a=parseInt(window.navigator.appVersion.charAt(0),10);
if(a<=6&&window.navigator.userAgent.indexOf("MSIE")>-1){gHideSelects=true
}}addEvent(window,"load",initPopUp);
function showPopWin(g,e,a,c,f,b){popupwinID=g;
initPopUp();
gPopupIsShown=true;
disableTabIndexes();
gPopupMask.style.display="block";
gPopupContainer=document.getElementById(popupwinID);
gPopupContainer.style.display="block";
centerPopWin(e,a);
var d=parseInt(document.getElementById("popupTitleBar").offsetHeight,10);
gPopupContainer.style.width=e+"px";
setMaskSize();
window.setTimeout("setPopTitle();",600)
}var gi=0;
function centerPopWin(g,a){if(gPopupIsShown==true){if(g==null||isNaN(g)){g=gPopupContainer.offsetWidth
}if(a==null){a=gPopupContainer.offsetHeight
}var e=document.getElementsByTagName("BODY")[0];
var b=parseInt(getScrollTop(),10);
var d=parseInt(gPopupContainer.scrollLeft,10);
setMaskSize();
var f=parseInt(document.getElementById("popupTitleBar").offsetHeight,10);
var c=getViewportHeight();
var h=getViewportWidth();
gPopupContainer.style.top=(b+((c-(a+f))/2))+"px";
gPopupContainer.style.left=(d+((h-g)/2))+"px"
}}addEvent(window,"resize",centerPopWin);
addEvent(window,"scroll",centerPopWin);
window.onscroll=centerPopWin;
function setMaskSize(){var b=document.getElementsByTagName("BODY")[0];
var a=getViewportHeight();
var c=getViewportWidth();
if(a>b.scrollHeight){popHeight=a
}else{popHeight=b.scrollHeight
}if(c>b.scrollWidth){popWidth=c
}else{popWidth=b.scrollWidth
}gPopupMask.style.height=popHeight+"px";
gPopupMask.style.width=popWidth+"px"
}function hidePopWin(a){gPopupContainer=document.getElementById(popupwinID);
gPopupIsShown=false;
var b=document.getElementsByTagName("BODY")[0];
b.style.overflow="";
restoreTabIndexes();
if(gPopupMask==null){return
}gPopupMask.style.display="none";
gPopupContainer.style.display="none";
if(gHideSelects==true){displaySelectBoxes()
}}function setPopTitle(){return;
if(window.frames.popupFrame.document.title==null){window.setTimeout("setPopTitle();",10)
}else{document.getElementById("popupTitle").innerHTML=window.frames.popupFrame.document.title
}}function keyDownHandler(a){if(gPopupIsShown&&a.keyCode==9){return false
}}function disableTabIndexes(){if(document.all){var c=0;
for(var b=0;
b<gTabbableTags.length;
b++){var d=document.getElementsByTagName(gTabbableTags[b]);
for(var a=0;
a<d.length;
a++){gTabIndexes[c]=d[a].tabIndex;
d[a].tabIndex="-1";
c++
}}}}function restoreTabIndexes(){if(document.all){var c=0;
for(var b=0;
b<gTabbableTags.length;
b++){var d=document.getElementsByTagName(gTabbableTags[b]);
for(var a=0;
a<d.length;
a++){d[a].tabIndex=gTabIndexes[c];
d[a].tabEnabled=true;
c++
}}}}function hideSelectBoxes(){if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var a=document.getElementsByTagName("SELECT");
for(i=0;
a&&i<a.length;
i++){a[i].style.visibility="hidden"
}}}function displaySelectBoxes(){if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var a=document.getElementsByTagName("SELECT");
for(i=0;
a&&i<a.length;
i++){a[i].style.visibility="visible"
}}}var gPopupMask=null;
var gPopupContainer=null;
var gPopupIsShown=false;
var gHideSelects=false;
var gReturnVal=null;
var popupwinID=null;
var gTabIndexes=new Array();
var gTabbableTags=new Array("A","BUTTON","TEXTAREA","INPUT","IFRAME");
if(!document.all){document.onkeypress=keyDownHandler
}function initPopUp(){theBody=document.getElementsByTagName("BODY")[0];
popmask=document.createElement("div");
popmask.id="popupMask";
popcont=document.createElement("div");
theBody.appendChild(popmask);
theBody.appendChild(popcont);
gPopupMask=document.getElementById("popupMask");
gPopupContainer=document.getElementById("popupwinID");
var a=parseInt(window.navigator.appVersion.charAt(0),10);
if(a<=6&&window.navigator.userAgent.indexOf("MSIE")>-1){gHideSelects=true
}}addEvent(window,"load",initPopUp);
function showPopWin(g,e,a,c,f,b){popupwinID=g;
initPopUp();
gPopupIsShown=true;
disableTabIndexes();
gPopupMask.style.display="block";
gPopupContainer=document.getElementById(popupwinID);
gPopupContainer.style.display="block";
centerPopWin(e,a);
var d=parseInt(document.getElementById("popupTitleBar").offsetHeight,10);
gPopupContainer.style.width=e+"px";
setMaskSize();
window.setTimeout("setPopTitle();",600)
}var gi=0;
function centerPopWin(g,a){if(gPopupIsShown==true){if(g==null||isNaN(g)){g=gPopupContainer.offsetWidth
}if(a==null){a=gPopupContainer.offsetHeight
}var e=document.getElementsByTagName("BODY")[0];
var b=parseInt(getScrollTop(),10);
var d=parseInt(gPopupContainer.scrollLeft,10);
setMaskSize();
var f=parseInt(document.getElementById("popupTitleBar").offsetHeight,10);
var c=getViewportHeight();
var h=getViewportWidth();
gPopupContainer.style.top=(b+((c-(a+f))/2))+"px";
gPopupContainer.style.left=(d+((h-g)/2))+"px"
}}addEvent(window,"resize",centerPopWin);
addEvent(window,"scroll",centerPopWin);
window.onscroll=centerPopWin;
function setMaskSize(){var b=document.getElementsByTagName("BODY")[0];
var a=getViewportHeight();
var c=getViewportWidth();
if(a>b.scrollHeight){popHeight=a
}else{popHeight=b.scrollHeight
}if(c>b.scrollWidth){popWidth=c
}else{popWidth=b.scrollWidth
}gPopupMask.style.height=popHeight+"px";
gPopupMask.style.width=popWidth+"px"
}function hidePopWin(a){gPopupContainer=document.getElementById(popupwinID);
gPopupIsShown=false;
var b=document.getElementsByTagName("BODY")[0];
b.style.overflow="";
restoreTabIndexes();
if(gPopupMask==null){return
}gPopupMask.style.display="none";
gPopupContainer.style.display="none";
if(gHideSelects==true){displaySelectBoxes()
}}function setPopTitle(){return;
if(window.frames.popupFrame.document.title==null){window.setTimeout("setPopTitle();",10)
}else{document.getElementById("popupTitle").innerHTML=window.frames.popupFrame.document.title
}}function keyDownHandler(a){if(gPopupIsShown&&a.keyCode==9){return false
}}function disableTabIndexes(){if(document.all){var c=0;
for(var b=0;
b<gTabbableTags.length;
b++){var d=document.getElementsByTagName(gTabbableTags[b]);
for(var a=0;
a<d.length;
a++){gTabIndexes[c]=d[a].tabIndex;
d[a].tabIndex="-1";
c++
}}}}function restoreTabIndexes(){if(document.all){var c=0;
for(var b=0;
b<gTabbableTags.length;
b++){var d=document.getElementsByTagName(gTabbableTags[b]);
for(var a=0;
a<d.length;
a++){d[a].tabIndex=gTabIndexes[c];
d[a].tabEnabled=true;
c++
}}}}function hideSelectBoxes(){if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var a=document.getElementsByTagName("SELECT");
for(i=0;
a&&i<a.length;
i++){a[i].style.visibility="hidden"
}}}function displaySelectBoxes(){if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var a=document.getElementsByTagName("SELECT");
for(i=0;
a&&i<a.length;
i++){a[i].style.visibility="visible"
}}};