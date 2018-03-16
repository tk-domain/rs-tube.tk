var t;
var locale;
var topProductsViewEnabled=false;
var defaultSearchText;
var advancedSearch;
var queue=[];
var MAX_QUEUE_LIMIT=4;
var running=0;
var topProductsTitle;
var topProductsSubTitle;
var topProductsTimeoutVar;
var topProductsFirstCategoryURL;
var topProductsFirstCategoryName;
var isCategoryAvailable=false;
function populateTopProductsLabels(b,a,c){topProductsTitle=b;
topProductsSubTitle=a;
topProductsViewEnabled=c
}function retrieveTfgsCheck(d,c,b,a){locale=c;
defaultSearchText=b;
advancedSearch=a;
if(topProductsViewEnabled){jQuery(".predictiveSearchDiv").css("height","");
jQuery(".topProductsDiv").css("height","");
jQuery(".autoCompleteDiv").css("height","");
hideStuff("topProductsContainer")
}if(d.length>=maxLength){t=setTimeout("retrieveCatlogue()",maxDelay)
}else{document.getElementById("txtHint").innerHTML="";
document.getElementById("txtHintBox").style.display="none";
return
}}function stopCount(){clearTimeout(t)
}function trim(a){if(a!=null){a=a.replace(/^\s+/g,"");
a=a.replace(/\s+$/g,"");
a=a.replace(/\s+/g," ");
return a
}}var req;
function retrieveCatlogue(){var b=document.getElementById("searchTerm").value;
if(b!=defaultSearchText){var a=document.getElementById("lastSearch").value;
if(b.length==0){document.getElementById("txtHint").innerHTML="";
document.getElementById("txtHintBox").style.display="none";
return
}if(b!=null){b=trim(b)
}if(b!=a){var c="/predictivesearch/catSearch?searchTerm="+encodeURIComponent(b)+"&locale="+encodeURIComponent(locale)+"&advancedPredictiveSearchEnabled="+encodeURIComponent(advancedSearch);
if(window.XMLHttpRequest){req=new XMLHttpRequest();
req.onreadystatechange=populateCatalogue;
try{req.open("GET",c,true)
}catch(d){alert("Cannot connect to server")
}req.send(null)
}else{if(window.ActiveXObject){req=new ActiveXObject("Microsoft.XMLHTTP");
if(req){req.onreadystatechange=populateCatalogue;
req.open("GET",c,true);
req.send()
}}}}else{if(b==a){populateLastresults()
}}}}function populateCatalogue(){var jsonData=null;
var tfgList="";
var searchTerm=document.getElementById("searchTerm").value;
if(searchTerm!=null){searchTerm=trim(searchTerm)
}if(req.readyState==4){var textToSplit=removeLastDelimitor(req.responseText);
if(textToSplit.length!=0){var checkSession=textToSplit.split("><");
if(checkSession[0]=="<html"){return
}jsonData=eval("("+req.responseText+")");
if(advancedSearch==="false"){tfgList=populateSimpleCatalogue(jsonData)
}else{tfgList=populateAdvancedCatalogue(jsonData,searchTerm)
}document.getElementById("lastSearch").value=searchTerm;
document.getElementById("storedresponse").value=tfgList;
new AutoComplete(tfgList,document.getElementById("searchTerm"),document.getElementById("txtHint"))
}else{document.getElementById("txtHint").innerHTML="";
document.getElementById("txtHintBox").style.display="none";
return
}}}function populateSimpleCatalogue(e){document.getElementById("txtHintBox").style.fontSize="11px";
document.getElementById("txtHintBox").style.marginTop="-3px";
var c="";
var d=0;
for(var g in e){if(e.hasOwnProperty(g)){var b=e[g];
for(var f in b){var a="";
if(b[f].indexOf("/web")>-1){a=b[f]
}else{a="/web"+b[f]+"?sra=p"
}c=c+"<li class=dropDown><a id="+d+" onmouseover='rollover(this);' href='"+a+"'>"+f+"</a></li>";
++d
}}}return c
}function populateAdvancedCatalogue(m,e){var l=document.getElementById("txtHintBox").style;
l.fontSize="12px";
l.backgroundColor="#FFFFFF";
l.marginTop="-3px";
var c="";
var b="";
var g=0;
var j=true;
isCategoryAvailable=false;
for(var n in m){if(m.hasOwnProperty(n)){c=c+"<li class=advSecContainer><span class=sectionTitle>"+n+"</span><div class=clearBoth></div></li>";
var k=m[n];
for(var o in k){var a=o.replace(new RegExp("("+e+")","gi"),"<b>$1</b>");
b=k[o];
if(b.indexOf("/web")>-1){if(topProductsViewEnabled&&(b.indexOf("/c/")==4)&&(b.indexOf("searchTerm")==-1)){var d=o.replace(/\'/g,"");
var h=b.replace(/\/web|\?sra=p/g,"");
c=c+"<li class=advItemContainer onmouseover=showStuff('topProductsContainer'); onmouseenter='getTopProducts(\""+h+'","'+d+"\");' onmouseout=hideStuff('topProductsContainer');><a id="+g+" href='"+b+"'>"+a+"</a></li>";
if(j){j=false;
isCategoryAvailable=true;
topProductsFirstCategoryURL=h;
topProductsFirstCategoryName=d;
showTopProductsOnLoad(topProductsFirstCategoryURL,topProductsFirstCategoryName)
}}else{c=c+"<li class=advItemContainer><a id="+g+" href='"+b+"'>"+a+"</a></li>"
}}else{var f=k[o];
if(f.indexOf("?")>-1){b="/web"+k[o]+"&sra=p&r=t"
}else{b="/web"+k[o]+"?sra=p&r=t"
}if(topProductsViewEnabled&&(f.indexOf("/c/")==0)&&(f.indexOf("searchTerm")==-1)){var d=o.replace(/\'/g,"");
c=c+"<li class=advItemContainer onmouseover=showStuff('topProductsContainer'); onmouseenter='getTopProducts(\""+f+'","'+d+"\");' onmouseout=hideStuff('topProductsContainer');><a id="+g+" href='"+b+"'>"+a+"</a></li>";
if(j){j=false;
isCategoryAvailable=true;
topProductsFirstCategoryURL=f;
topProductsFirstCategoryName=d;
showTopProductsOnLoad(topProductsFirstCategoryURL,topProductsFirstCategoryName)
}}else{c=c+"<li class=advItemContainer><a id="+g+" href='"+b+"'>"+a+"</a></li>"
}}++g
}c=c+"<li class='separator'></li>"
}}return trimRight(c,"<li class='separator'></li>")
}function showTopProductsOnLoad(a,b){topProductsTimeoutVar=setTimeout(function(){showStuff("topProductsContainer");
getTopProducts(a,b)
},topProductsMaxDelay)
}function stopTopProductsOnLoad(){clearTimeout(topProductsTimeoutVar)
}function trimRight(b,a){return b.replace(new RegExp(a+"+$"),"")
}function populateLastresults(){var a=document.getElementById("storedresponse").value;
new AutoComplete(a,document.getElementById("searchTerm"),document.getElementById("txtHint"));
if(topProductsViewEnabled&&isCategoryAvailable){showStuff("topProductsContainer");
getTopProducts(topProductsFirstCategoryURL,topProductsFirstCategoryName)
}}function stopCount(){clearTimeout(t)
}var autoCompleteItemSelected=false;
var navigatingList=false;
var childLink;
function AutoComplete(a,b,c){if(a.length!=0){this.oText=b;
this.oDiv=c;
document.getElementById("txtHintBox").style.display="block";
document.getElementById("txtHint").innerHTML=a;
b.AutoComplete=this;
c.AutoComplete=this;
b.onkeyup=AutoComplete.prototype.onTextChange;
if(advancedSearch==="false"){c.onmouseover=AutoComplete.prototype.onDivMouseOver
}}}AutoComplete.prototype.onTextChange=function(){var h=arguments[0]||window.event;
var c=h.which||h.keyCode;
var f=this.AutoComplete;
if(typeof f.whichSelected==undefined){f.whichSelected=-1
}var a=f.whichSelected;
var d=jQuery(f.oDiv).find("li a").parent();
var g=false;
childLink="";
switch(c){case 38:f.whichSelected=a>0?a-1:d.length;
g=true;
break;
case 40:f.whichSelected=a>-1&&a<d.length?a+1:0;
g=true;
break;
case 27:document.getElementById("txtHintBox").style.display="none";
g=true;
break;
case 13:if(document.getElementById("txtHintBox").style.display=="block"){document.getElementById("txtHintBox").style.display="none";
g=true
}else{g=false
}break;
default:f.whichSelected=-1;
this.AutoComplete.onchange();
autoCompleteItemSelected=false;
break
}if(g){navigatingList=true;
for(var b=0;
b<d.length;
b++){if(d[b].className!="separator"){if(b==f.whichSelected){if(advancedSearch==="false"){d[b].className="AutoCompleteHighlight"
}else{d[b].className="advancedAutoCompHighlight"
}childLink=document.getElementById(b);
document.onkeyup=keyHandler;
var j=document.getElementById("autoc");
j.value="true"
}else{d[b].className="AutoCompleteBackground"
}if(d[b].className==="advancedAutoCompHighlight"){jQuery(d[b]).find("a").addClass("advancedHighlight")
}else{jQuery(d[b]).find("a").removeClass("advancedHighlight")
}}}g=false
}else{navigatingList=false
}};
function keyHandler(b){if(navigator.appName=="Microsoft Internet Explorer"){var a=event
}else{var a=b
}if(a.keyCode==13){if(childLink!=""){document.location.href=childLink;
return false
}else{return
}}else{return
}}AutoComplete.prototype.onDivMouseDown=function(){this.AutoComplete.oText.value=this.innerHTML;
autoCompleteItemSelected=true
};
var liValueglobal="";
function rollover(a){liValueglobal=a.innerHTML
}AutoComplete.prototype.onDivMouseOver=function(){var g=/^.*\"\>/;
var a=/\<.*$/;
var f=this.AutoComplete;
var b=document.getElementById("txtHint");
var e=b.childNodes;
for(var c=0;
c<e.length;
c++){var d=e[c].innerHTML.replace(g,"");
d=d.replace(a,"");
if(d==liValueglobal){f.whichSelected=c;
e[c].className="AutoCompleteHighlight"
}else{e[c].className="AutoCompleteBackground"
}}};
AutoComplete.prototype.onDivMouseOut=function(){this.className="AutoCompleteBackground"
};
AutoComplete.prototype.onchange=function(){var a=this.oText.value;
retrieveTfgsCheck(a,locale,defaultSearchText,advancedSearch)
};
function noRightClickEvent(b,a){document.getElementById("searchTerm").oncontextmenu=function(c){removeDefaultText(b,a)
}
}function removeDefaultText(b,a){if(b!=null){var c=b.value;
if(c==a){b.value="";
b.style.color="#000000"
}}}function addDefaultText(b,a){if(b!=null){var c=b.value;
if(trim(c)==""){b.value=a;
b.style.color="#c8c8c8"
}}}function removeLastDelimitor(a){if(a!=null){a=a.replace(/\|\|$/g,"");
return a
}}function getTopProducts(a,b){queue.push(a);
loadTopProducts(b)
}function loadTopProducts(c){while(running<MAX_QUEUE_LIMIT&&queue.length){running+=1;
var a=queue.shift();
var b="/predictivesearch/top-products/locales/"+locale+"/categories"+a;
if(window.XMLHttpRequest){req=new XMLHttpRequest();
req.onreadystatechange=function(){populateTopProducts(c)
};
try{req.open("GET",b,true)
}catch(d){alert("Cannot connect to top prods server")
}req.send(null)
}else{if(window.ActiveXObject){req=new ActiveXObject("Microsoft.XMLHTTP");
if(req){req.onreadystatechange=function(){populateTopProducts(c)
};
req.open("GET",b,true);
req.send()
}}}}}function equalHeightSearchDivs(){var c=jQuery(".predictiveSearchDiv").height();
var a=jQuery(".autoCompleteDiv").height();
var b=jQuery(".topProductsDiv").height();
if(a>b){jQuery(".topProductsDiv").css("height",a);
jQuery(".predictiveSearchDiv").css("height",(a+20))
}else{jQuery(".autoCompleteDiv").css("height",b);
jQuery(".predictiveSearchDiv").css("height",(b+20))
}}function populateTopProducts(catKey){running-=1;
var jsonData=null;
if(req.readyState==4&&req.status==200){jsonData=eval("("+req.responseText+")")
}if(jsonData!=null&&catKey!=""&&jsonData!=""&&jsonData.products.length>0){populateTopProductsData(jsonData,catKey);
equalHeightSearchDivs()
}}function populateTopProductsData(h,e){var b;
var g="";
var d="";
var f=-1;
f=e.lastIndexOf(">");
if(f>=0){g=e.substring(f+1)
}var a="<li><div><span class=topProductsTitle>"+topProductsTitle+" </span><span class=topProductsSubTitle>"+topProductsSubTitle+g+" </span></div></li>";
for(var c=0;
c<h.products.length;
c++){b=h.products[c].imagePath;
d="/web/p/products/"+h.products[c].productNumber+"/?tpr="+(c+1);
a+="<li class=prodItem><div class=floatLeft><a href='"+d+"'><table class=productThumbnailTbl><tr><td><img src='"+b+"'/></td></tr></table></a></div><div class='floatRight prodInfoDiv'><div class='linkText'><a href='"+d+"'>"+h.products[c].longDescription+"</a></div><span class='brandText'>"+h.products[c].brandName+"</span></div></li>"
}document.getElementById("topProdsList").innerHTML=a
};