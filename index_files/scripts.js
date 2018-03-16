function saveOptions(){document.orderOptions.method.value="saveOptions";
document.orderOptions.submit()
}function checkOut(){document.orderOptions.method.value="checkout";
document.orderOptions.submit()
}function showTab(a){document.getElementById(a).style.visibility="visible";
document.getElementById("childNode0").style.display="block";
document.getElementById("childNode1").style.display="block";
document.getElementById("childNode2").style.display="block";
document.getElementById("childNode3").style.display="block"
}function hidechild(){if(document.getElementById("childNode0")){document.getElementById("childNode0").style.display="none"
}if(document.getElementById("childNode1")){document.getElementById("childNode1").style.display="none"
}if(document.getElementById("childNode2")){document.getElementById("childNode2").style.display="none"
}if(document.getElementById("childNode3")){document.getElementById("childNode3").style.display="none"
}}function hideTab(a){document.getElementById(a).style.visibility="hidden"
}function setBookOn(b){var a=b+1;
document.getElementById("book"+b+"L").className="leftSelected"+b;
document.getElementById("book"+b+"M").className="middleSelected"+b;
document.getElementById("book"+b+"R").className="rightSelected"+b
}function setBookOff(b){var a=b+1;
document.getElementById("book"+b+"L").className="left"+b;
document.getElementById("book"+b+"M").className="middle"+b;
document.getElementById("book"+b+"R").className="right"+b
}function tabrollover(a){if(document.getElementById("tableft"+a).className=="leftSelected"){document.getElementById("tableft"+a).className="leftSelected";
document.getElementById("tabmiddle"+a).className="middleSelected";
document.getElementById("tabright"+a).className="rightSelected"
}else{document.getElementById("tableft"+a).className="leftOver";
document.getElementById("tabmiddle"+a).className="middleOver";
document.getElementById("tabright"+a).className="rightOver"
}}function tabrollout(a){if(document.getElementById("tableft"+a).className=="leftSelected"){document.getElementById("tableft"+a).className="leftSelected";
document.getElementById("tabmiddle"+a).className="middleSelected";
document.getElementById("tabright"+a).className="rightSelected"
}else{document.getElementById("tableft"+a).className="left";
document.getElementById("tabmiddle"+a).className="middle";
document.getElementById("tabright"+a).className="right"
}}function hidesearch(b){var a=b;
document.getElementById("txtHintBox").style.display="none"
}function showStuff(a){document.getElementById(a).style.display="block"
}function showStuffProduct(a){document.getElementById(a).style.display="block"
}function hideStuff(a){document.getElementById(a).style.display="none"
}function trim(a){if(a!=null){if(a.charAt(0)==" "||a.charAt(a.length-1)==" "){while(a.charAt(0)==" "){a=a.substring(1)
}while(a.charAt(a.length-1)==" "){a=a.substring(0,a.length-1)
}}}return a
}function setUser(){with(document.forms.login){j_username.value=prefix.value+username.value
}}function moreImages(a,b){document.getElementById(a).src=b
}function showGeneral(a){window.location="/web/generalDisplay.html?id="+a
}function showGeneralPopup(e,d,c,b){var a="/web/generalDisplay.html?id="+e+"&file="+d;
window.open(a,c,b)
}function confirmDelete(a){var b=a;
ans=confirm(b);
if(ans){return true
}else{return false
}}var flag=true;
function setForm(){var a=document.getElementById("deleteText").value;
if(flag){document.getElementById("deleteText").value="";
flag=false
}a=document.getElementById("deleteText").value;
document.getElementById("hideAdd").style.display="block"
}var Temp;
Temp="";
altCurHour="";
now=new Date();
var CurHour=now.getHours();
var CurMinute=now.getMinutes();
var CurSecond=now.getSeconds();
CurHour=10+CurMinute*CurSecond;
Temp=CurHour;
altCurHour="_"+CurMinute*CurMinute;
function countUsername(a){if(a.length>=5&&a.length<60){document.getElementById("checkUsername").style.visibility="visible"
}else{document.getElementById("checkUsername").style.visibility="hidden"
}}var req;
function checkUsernameAvailability(){var b=document.getElementById("usernameAvailabilityStatus");
if(b){b.innerHTML=""
}if(window.XMLHttpRequest){try{req=new XMLHttpRequest()
}catch(d){req=false
}}else{if(window.ActiveXObject){try{req=new ActiveXObject("Microsoft.XMLHTTP")
}catch(d){req=false
}}}if(req){var c=document.getElementById("reg_username");
if(c){var a="/web/registration/registrationPageOneAction.html?method=checkUsername&username="+encodeURIComponent(c.value);
req.onreadystatechange=updateAvailabilityResult;
req.open("GET",a,true);
req.send(null)
}}return false
}function updateAvailabilityResult(){if(req.readyState==4){if(req.status==200){var c=req.responseXML.documentElement;
var e=req.responseXML.getElementsByTagName("userexists")[0].childNodes[0].nodeValue;
var d=req.responseXML.getElementsByTagName("messagetouser")[0].childNodes[0].nodeValue;
var b=document.getElementById("usernameAvailabilityStatus");
var a=document.getElementById("userNameLabel");
if(b){if(e=="true"){b.innerHTML='<strong><ec:label name="Registration_errorLabel"/></strong>'+d;
a.className="error"
}else{b.innerHTML=d;
a.className="formLabel"
}b.style.display="block";
document.getElementById("userNameSuggest").style.display="none";
if(e=="true"){b.className="error";
document.origonalUserName.origonalName.value=document.registrationActionFormOne.username.value;
document.getElementById("failedName").innerHTML=document.origonalUserName.origonalName.value;
document.getElementById("failedName2").innerHTML=document.origonalUserName.origonalName.value;
document.getElementById("userNameSuggest").style.display="block"
}else{b.className="usernameAvailable"
}nextSiblingNode=b.nextSibling;
while(nextSiblingNode&&nextSiblingNode.nodeType==3){nextSiblingNode=nextSiblingNode.nextSibling
}if(nextSiblingNode){if(nextSiblingNode.tagName=="P"){nextSiblingNode.style.display="none"
}}}}}}function tryUserName(a){document.registrationActionFormOne.username.value=document.origonalUserName.origonalName.value+a;
checkUsernameAvailability()
}function checkcell(e,f){var g="td"+e;
var c="td"+f;
if(document.getElementById("currentSelect1")!=null){document.getElementById(c).className="tdClass";
var d=document.getElementById("currentSelect1").value;
var b="td"+d;
document.getElementById(b).className="tdClass"
}else{var a=document.createElement("input");
a.setAttribute("type","hidden");
a.setAttribute("id","currentSelect1");
a.setAttribute("value","currentSelect1");
document.getElementById("normalDel").appendChild(a)
}document.getElementById("currentSelect1").value=e;
document.getElementById(g).className="tdClassbg"
}function checkInvcell(e,f){var g="inv"+e;
var c="inv"+f;
if(document.getElementById("currentSelect2")!=null){document.getElementById(c).className="tdClass";
var d=document.getElementById("currentSelect2").value;
var b="inv"+d;
document.getElementById(b).className="tdClass"
}else{var a=document.createElement("input");
a.setAttribute("type","hidden");
a.setAttribute("id","currentSelect2");
a.setAttribute("value","currentSelect2");
document.getElementById("normalInv").appendChild(a)
}document.getElementById("currentSelect2").value=e;
document.getElementById(g).className="tdClassbg"
}function checkBlanketcell(e,f){var g="blanket"+e;
var c="blanket"+f;
if(document.getElementById("currentBlanket")!=null){document.getElementById(c).className="tdClass";
var d=document.getElementById("currentBlanket").value;
var b="blanket"+d;
document.getElementById(b).className="tdClass"
}else{var a=document.createElement("input");
a.setAttribute("type","hidden");
a.setAttribute("id","currentBlanket");
a.setAttribute("value","currentBlanket");
document.getElementById("normalInv").appendChild(a)
}document.getElementById("currentBlanket").value=e;
document.getElementById(g).className="tdClassbg"
}function checkCostcell(e,f){var g="cost"+e;
var c="cost"+f;
if(document.getElementById("currentCost")!=null){document.getElementById(c).className="tdClass";
var d=document.getElementById("currentCost").value;
var b="cost"+d;
document.getElementById(b).className="tdClass"
}else{var a=document.createElement("input");
a.setAttribute("type","hidden");
a.setAttribute("id","currentCost");
a.setAttribute("value","currentCost");
document.getElementById("normalInv").appendChild(a)
}document.getElementById("currentCost").value=e;
document.getElementById(g).className="tdClassbg"
}function blanketcheckcell(d,c){var e="blank"+d;
if(document.getElementById("blanketcurrentSelect1")!=null){var g="blank"+c;
document.getElementById(g).className="";
var b=document.getElementById("blanketcurrentSelect1").value;
var f="blank"+b;
document.getElementById(f).className=""
}else{var k=document.createElement("input");
k.setAttribute("type","hidden");
k.setAttribute("id","blanketcurrentSelect1");
k.setAttribute("value","blanketcurrentSelect1");
document.getElementById("normalBO").appendChild(k)
}document.getElementById("blanketcurrentSelect1").value=d;
document.getElementById(e).className="addressbg";
var j=document.getElementById("setBOAsOrderNumber");
if(j&&j.value=="true"){var h=document.getElementsByName("orderNo");
var a=document.getElementById("bo_name_"+d);
if(a==null){h[0].value="";
document.getElementById("ordername").readOnly=false
}else{if(a&&h[0]){h[0].value=a.value;
document.getElementById("ordername").readOnly=true
}}}}function costcheckcell(e,f){var g="cost"+e;
var c="cost"+f;
if(document.getElementById("costcurrentSelect1")!=null){document.getElementById(c).className="";
var d=document.getElementById("costcurrentSelect1").value;
var b="cost"+d;
document.getElementById(b).className=""
}else{var a=document.createElement("input");
a.setAttribute("type","hidden");
a.setAttribute("id","costcurrentSelect1");
a.setAttribute("value","costcurrentSelect1");
document.getElementById("normalCC").appendChild(a)
}document.getElementById("costcurrentSelect1").value=e;
document.getElementById(g).className="addressbg"
}function glcodecheckcell(e,f){var g="gl"+e;
var c="gl"+f;
if(document.getElementById("glcodecurrentSelect1")!=null){document.getElementById(c).className="";
var d=document.getElementById("glcodecurrentSelect1").value;
var b="gl"+d;
document.getElementById(b).className=""
}else{var a=document.createElement("input");
a.setAttribute("type","hidden");
a.setAttribute("id","glcodecurrentSelect1");
a.setAttribute("value","glcodecurrentSelect1");
document.getElementById("normalGL").appendChild(a)
}document.getElementById("glcodecurrentSelect1").value=e;
document.getElementById(g).className="addressbg"
}function invcheckcell(e,f){var g="inv"+e;
var c="inv"+f;
if(document.getElementById("invcurrentSelect1")!=null){document.getElementById(c).className="tdClass";
var d=document.getElementById("invcurrentSelect1").value;
var b="inv"+d;
document.getElementById(b).className="tdClass"
}else{var a=document.createElement("input");
a.setAttribute("type","hidden");
a.setAttribute("id","invcurrentSelect1");
a.setAttribute("value","invcurrentSelect1");
document.getElementById("normalInv").appendChild(a)
}document.getElementById("invcurrentSelect1").value=e;
document.getElementById(g).className="tdClassbg"
}function selectedCard(c,a,b,f){var h=document.getElementById("customerReference");
var g=document.getElementById("custCostRef");
var j=document.getElementById("custCostRefMand");
var e=document.getElementById("custCostCentre");
var d=document.getElementById("custCostCenterMand");
if(!h){return
}if(c!="200"&&c!="201"){h.style.display="none";
if(g){g.value=""
}if(e){e.value=""
}}else{h.style.display="inline";
if(c=="200"&&j){if(f){j.style.display="inline"
}else{j.style.display="none"
}}if(c=="201"&&j){if(b){j.style.display="inline"
}else{j.style.display="none"
}}if(a&&d){d.style.display="inline"
}else{if(d){d.style.display="none"
}}}}function paycheckcell(e,c,a){var f="pay"+e;
var h="pay"+c;
if(a!=null){if(a.name=="paymentBankId"){document.getElementById("chinaCard").checked="checked"
}}if(document.getElementById("paycurrentSelect1")!=null){document.getElementById(h).className="tdClass";
var b=document.getElementById("paycurrentSelect1").value;
var g="pay"+b;
document.getElementById(g).className="tdClass"
}else{var j=document.createElement("input");
j.setAttribute("type","hidden");
j.setAttribute("id","paycurrentSelect1");
j.setAttribute("value","paycurrentSelect1");
document.getElementById("normalPayment").appendChild(j)
}document.getElementById("paycurrentSelect1").value=e;
document.getElementById(f).className="tdClassbg";
var d=document.getElementById("chinaCard");
if(d!=null){if(!d.checked){var a=document.getElementById("paymentBankIdBlank");
if(a!=null){a.checked="checked"
}}}}var isIE=document.all?true:false;
document.onmousemove=getMousePosition;
function getMousePosition(f){if(navigator.appName!="Microsoft Internet Explorer"){var d=0,c=0;
if(typeof(window.pageYOffset)=="number"){c=window.pageYOffset;
d=window.pageXOffset
}else{if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){c=document.body.scrollTop;
d=document.body.scrollLeft
}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){c=document.documentElement.scrollTop;
d=document.documentElement.scrollLeft
}}}}var b;
var a;
if(!isIE){b=f.pageX;
a=f.pageY
}if(isIE){b=event.clientX-450;
a=event.clientY-50
}posX=b;
posY=a;
return true
}function showMailAddress(e,n,k,a){var m=0,l=0;
if(typeof(window.pageYOffset)=="number"){l=window.pageYOffset;
m=window.pageXOffset
}else{if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){l=document.body.scrollTop;
m=document.body.scrollLeft
}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){l=document.documentElement.scrollTop;
m=document.documentElement.scrollLeft
}}}if(navigator.appName=="Microsoft Internet Explorer"){n=n+m;
k=k+l
}else{n=n;
k=k
}var o=document.getElementById("mailAddress");
if(o.style.display=="none"){o.style.display="block"
}document.forms.mailDocumentForm.documentNumber.value=e;
document.forms.mailDocumentForm.redirectTo.value=a;
document.getElementById("document").innerHTML=e;
var g=document.getElementById("zoomwindow");
g.style.display="block";
if(n!=0&&k!=0){if(navigator.appName=="Microsoft Internet Explorer"){g.style.left=n+20+"px";
g.style.top=k+30+"px"
}else{g.style.left=n-420+"px";
g.style.top=k+"px"
}}else{var j,h;
if(self.pageYoffset){j=self.pageXoffset;
h=self.pageYoffset
}else{if(document.documentElement&&document.documentElement.scrollTop){j=document.documentElement.scrollLeft;
h=document.documentElement.scrollTop
}else{if(document.body){j=document.body.scrollLeft;
h=document.body.scrollTop
}}}var d,c;
if(self.innerHeight){d=self.innerWidth;
c=self.innerHeight
}else{if(document.documentElement&&document.documentElement.clientHeight){d=document.documentElement.clientWidth;
c=document.documentElement.clientHeight
}else{if(document.body){d=document.body.clientWidth;
c=document.body.clientHeight
}}}var b=j+(d-375)/2;
var f=h+(c-200)/2;
g.style.left=b+"px";
g.style.top=f+"px"
}}function showMailAddressdetails(b,a,f,e){var d=document.getElementById("mailAddress");
if(d.style.display=="none"){d.style.display="block"
}document.forms.mailDocumentForm.documentNumber.value=b;
document.forms.mailDocumentForm.redirectTo.value=e;
document.getElementById("document").innerHTML=b;
var c=document.getElementById("zoomwindow");
c.style.display="block"
}function hideMailAddress(){var a=document.getElementById("mailAddress");
a.style.display="none";
document.getElementById("zoomwindow").style.display="none"
}function liBorder(a){document.getElementById(a).style.borderColor="#cc0000"
}function liBorderOff(a){document.getElementById(a).style.borderColor="silver"
}function newWindow(a){var c="Tracking";
var b=window.open(a,c,"width=1000,height=600,resizable=yes,location=no,status=no,scrollbars=yes,toolbar=no")
}function clearDateFormat(a){var b=document.getElementById(a).value=""
}function showApprovers(){document.getElementById("myApprovers").style.display="block"
}function disableLoginButton(){document.getElementById("enabled").style.display="none";
document.getElementById("disabled").style.display="block"
}function displaycurrency(a,b){var a=a;
document.getElementById(a+"1").style.display="none";
for(i=1;
i<=b;
i++){document.getElementById(a+"1td"+i).style.display="block"
}}function hideLoadingDiv(){gPopupMask.style.display="none";
document.getElementById("loadingDiv").style.display="none"
}function rs_genExpAtt(){var c="-_-";
var b="";
for(var a=0;
a<arguments.length;
a++){b=b+arguments[a]+c
}b=b.replace(/-_-$/g,"");
return b
}function addSelectedPartName(c){var b=new Array();
b=document.getElementsByName("name");
for(var a=0;
a<b.length;
a++){b[a].checked=false
}document.getElementById("idName_"+c).checked=true;
document.getElementById("idPartsListAdd").submit()
}var currentLi;
var currentPrimaryNavigationMenu=null;
function togglePrimaryNavigationMenuLinks(d,b){var c=d.attr("class");
var a=b.find("li a.menu");
a.each(function(e){if(jQuery(this).attr("class")===c){jQuery(this).toggleClass("menu-active")
}else{jQuery(this).removeClass("menu-active")
}})
}function toggleVerticalMenu(d,b){var c=d.parent().attr("class");
var a=b.find("ul.verticalMenu");
a.each(function(e){if(jQuery(this).parent().hasClass(c)){d.toggleClass("hideVerticalMenu").toggleClass("showVerticalMenu")
}else{jQuery(this).addClass("hideVerticalMenu").removeClass("showVerticalMenu")
}})
}jQuery(document).ready(function(){jQuery("#overlay").click(function(){jQuery("#overlay").removeClass("menuOverlay");
var c=jQuery("ul.primaryNavigation");
var b=c.find("li a.menu");
b.each(function(d){jQuery(this).removeClass("menu-active")
});
var a=c.find("ul.verticalMenu");
a.each(function(d){jQuery(this).addClass("hideVerticalMenu").removeClass("showVerticalMenu")
})
});
jQuery("ul.primaryNavigation li a").click(function(){var b=jQuery(this).next();
var a=b.parent().parent();
togglePrimaryNavigationMenuLinks(jQuery(this),a);
toggleVerticalMenu(b,a);
currentPrimaryNavigationMenu=jQuery(this);
if(jQuery(this).hasClass("menu-active")){jQuery("#overlay").addClass("menuOverlay")
}else{jQuery("#overlay").removeClass("menuOverlay")
}});
jQuery("ul.primaryNavigation li a").keydown(function(a){if(a.which==40){if(currentLi===undefined||currentLi===null){currentLi=jQuery(this).next().find("li.verticalMenuOption").get(0);
currentLi=jQuery(currentLi)
}else{if(currentLi.next().attr("class")===undefined){a.preventDefault();
return
}currentLi.removeClass("highlight");
currentLi=currentLi.next();
if(currentLi.hasClass("verticalMenuHeader")){currentLi=currentLi.next()
}}currentLi.addClass("highlight");
currentLi.find("a").focus();
a.preventDefault()
}else{if(a.which==38){if(currentLi===undefined||currentLi===null){currentPrimaryNavigationMenu.focus()
}else{currentLi.removeClass("highlight");
currentLi=currentLi.prev();
if(currentLi.hasClass("verticalMenuHeader")){currentLi=currentLi.prev()
}if(currentLi.attr("class")===undefined){currentPrimaryNavigationMenu.focus();
currentLi=null;
return
}currentLi.addClass("highlight");
currentLi.find("a").focus()
}a.preventDefault()
}}})
});
function liveChatDocking(){document.getElementById("buttonDIVcatalogue").style.display="none";
document.getElementById("buttonDIVcheckout").style.display="none";
jQuery(window).load(function(){jQuery(".buttonDIVcatalogue").css("top",((jQuery(window).height()-jQuery(".buttonDIVcatalogue").height())/2))
});
jQuery().ready(function(){jQuery(window).resize(function(){jQuery(".buttonDIVcatalogue").css("top",((jQuery(window).height()-jQuery(".buttonDIVcatalogue").height())/2))
})
})
};