window.addEventListener("load",zba,false);var zawv;function zba(){var zaph=zoj();if(zaww||zoa){var zawx=$("start_sa_link");var zawy=$("download_button");var zawz=$("start_nm_button");function zaxa(){$("setup_welcome").innerHTML=zaof("welcome");$("setup_notification_div").style.display="block";zawx.style.display="inline-block";zawy.style.display="inline-block";zawz.style.display="none";zawx.addEventListener("click",function(){zaph.zaxb(zaxc);}
);zawy.addEventListener("click",function(){zaph.zmt(zzc);}
);}if(zaph.zapk&&zaph.zaxd){$("setup_description").innerHTML=zaof("setup_description_first");zaxa();return;}
if(zaph.zapk&&zaph.zaxe){$("setup_description").innerHTML=zaof("setup_description_repair");zaxa();return;}
}else{if(zaph.zapk&&zaph.zaxd){zaph.zaxb(zaxc);return;}
}zaph.zaxf=zaph.zapi;zaph.zaxg=zaph.zapk;zdv("internal","is-nm",zaph.zaxf);zdv("internal","is-sa",zaph.zaxg);zaxc();}
function zaxc(zaxh){$("setup_notification_div").style.display="none";var zaph=zoj();if(zaph.zaxf){$("toolbar").style.display="block";zawv=new zaxi();}
else if(zaph.zaxg){zawv=new zaxj();}else{return;}zawv.css.zaxk('setup.css');zawv.zba(zaxh);}
var zaxl=(function(){function zaxl(){this.zapg=false;this.zna=undefined;this.zaxm=undefined;this.zaxn=undefined;this.zaxo={zaxp:0,zaxq:1<<0,zaxr:1<<1,zaxs:1<<8}
;this.zaxt=[];this.zaxu=undefined;this.zaxv=["mousedown","mouseup","mousewheel","keyup","keydown","keypress","blur"];this.zaxw=undefined;this.zaxx=undefined;this.zaxy=["mousedown","mouseup"];this.zaxz=16;this.zaya={}
;this.zayb=new zayc(this.zayd());}zaxl.prototype.zba=function(){}
;zaxl.prototype.ziy=function(){};zaxl.prototype.zayd=function(){return $("ui-items");}
;zaxl.prototype.zaye=function(zayf,parent){if(!parent){parent=this.zayd();}
for(var zcw=0;zcw<zayf.length;zcw++){parent.appendChild(zayf[zcw]);}
};zaxl.prototype.zayg=function(zss,zayh){var zfl=[];for(var zcw=0;zcw<zss.length;zcw++){zfl.push(this.zayi(zss[zcw],zayh))}
return zfl;};zaxl.prototype.zayj=function(zss,zayh){var zayk=this.zayd();for(var zcw=0;zcw<zss.length;zcw++){var item=zss[zcw];var zya=item["m_sName"];var parent=(zya&&$(zya))||zayk;if(parent){var zfm;if(this.zapg&&zya=="match"){zfm=this.zayl();this.zaxt.push(zfm);parent.appendChild(zfm);}
zfm=this.zayi(item,zayh);parent.appendChild(zfm);if(zya=="match"){this.zaxu=zfm;}
else{this.zaxt.push(zfm);}}}};zaxl.prototype.zaym=function(){this.zayn();if(this.zapg){this.css.zayo(document.body,"body-V8");this.css.zayo($("toolbar"),"toolbar-V8");}
document.documentElement.style.width="";this.css.zayp($("ui-items"),"nowrap wrap");var zayq=$("layout");if(this.zapg){if(zayq){zayq.style.display="none";}
}else{if(zayq){zayq.style.visibility="visible";}this.zayr(zde("nm-settings","horizontal"));}
};zaxl.prototype.zmv=function(zmw){zmw(false);};zaxl.prototype.zayr=function(zays){var zayt=$("ui-items");if(zayt){if(zays){this.css.zayu(zayt,"vlayout wrap","hlayout nowrap");}
else{this.css.zayu(zayt,"hlayout nowrap","vlayout");}
}var zayv=$("layout");if(zayv){if(zays){this.css.zayu(zayv,"vertical","horizontal");}
else{this.css.zayu(zayv,"horizontal","vertical");}
}};zaxl.prototype.zayw=function(zaex){if(zde("nm-settings","horizontal")){switch(zaex){case"0":zaex="1";break;}
}return zaex;};zaxl.prototype.zayn=function(){this.zaxt.forEach(function(zfm){if(zfm.parentNode){zfm.parentNode.removeChild(zfm);}
});this.zaxu&&this.zaxu.parentNode&&this.zaxu.parentNode.removeChild(this.zaxu);this.zaxu=undefined;this.zaxt=[];}
;zaxl.prototype.zayx=function(){if(!this.zapg){var zayy=zde("nm-settings","horizontal");if(zayy){if(document.body.clientWidth+this.zaxz<document.body.scrollWidth){var zfl=document.body.getElementsByClassName("separator");var zcw;for(zcw=0;zcw<zfl.length;zcw++){var zfm=zfl[zcw];var zayz=this.zaza(zfm);zfm.className="hseparator";if(document.body.clientWidth+this.zaxz>=document.body.scrollWidth){break;}
}}if(document.body.clientWidth+this.zaxz<document.body.scrollWidth){this.css.zayu($("ui-items"),"nowrap","wrap");}
}}};zaxl.prototype.zayi=function(item,zayh){switch(item["m_sType"]){case"header-title":return this.zazb();case"header-item-title":return this.zazc(item["m_oContext"]);case"header-simple-title":return this.zazd(item["m_oContext"]);case"header-list-title":return this.zaze(item["m_oContext"]);case"search":return this.zazf(item);case"separator":return this.createElement("div",{"class":this.zapg?"separator-V8":"separator"}
);case"notification-footer":return this.zazg();case"dialog":return this.zazh(item["m_nID"]);case"folder-navigation":return this.zazi(item);case"button":case"menu":case"match":return this.zazj(item,zayh);default:return this.zazj(item,zayh);break;}
};zaxl.prototype.zazj=function(item,zayh){var zpn=this.zazk(item);var zazl=this.zazm(item);var zahv=item["m_sType"];var zazn=item["m_nID"];var zya=item["m_sName"];var zazo=item["m_sIconData"];var zazp=item["m_sSuffix"];var zhf,zazq;zhf=this.createElement("div",{"class":this.zapg?"toolbar-button-V8 toolbar-button-V8-hover":"toolbar-button","id":zazn,"name":zya}
,[zazq=this.createElement("div",{"class":"toolbar-button-content nowrap"}
)]);if(zazo){zazq.appendChild(this.createElement("img",{"class":"toolbar-button-icon item-icon","src":zazo}
));}var zazr;var zazs=false;switch(zya){case"match":case"identity":case"turn-on":case"login":zazs=true;zazr=item["m_sText"]||item["m_sLabel"];break;default:if(!this.zapg&&zayh=="1"){}
else{zazr=item["m_sText"]||item["m_sLabel"];}break;}
if(this.zapg&&(zya=="match"||zya=="new-identity2")){if(!zazr||zazr==""){zhf.style.display="none";}
}var zazt=item["m_nFlags"]||0;var zagt,text;if(zazr){zagt=this.zapg?"toolbar-button-text-V8":"toolbar-button-text";if(!this.zapg&&!zazs){zagt+=" "+"item-text";}
text=this.createElement("div",{"class":zagt},[this.createTextNode(zazr)]);if((zazt&this.zaxo.zaxs)!=0){this.css.zayo(text,"bold-text");}
if(!this.zapg){var zazu=item["m_nMaxWidth"];if(zazu){text.style.maxWidth=zazu+"px";}
}zazq.appendChild(text);}else{if(zya=="new-identity2"){zagt="toolbar-button-text-V8";text=this.createElement(zazv,{"class":zagt}
,[this.createTextNode(zazr)]);zazq.appendChild(text);}
}if(zazp){zazq.appendChild(this.createElement("div",{"class":this.zapg?"toolbar-button-suffix-V8":"toolbar-button-text"}
,[this.createTextNode(zazp)]));}if(this.zapg){if(zahv=="menu"){zazq.parentElement.appendChild(this.createElement("div",{"class":"toolbar-button-menu-icon-V8 toolbar-button-icon"}
));this.zazw(zazq,zhf);}else{switch(zya){case"new-identity":this.zazx(zazq,zhf,zya);break;case"match":this.zazy(zazq,zhf,item);break;case"identity":this.zazz(zazq,zhf,item);break;case"new-identity2":this.zbaa(zazq,zhf,zya);break;}
}}if(!this.zapg){if(zahv=="menu"){zazq.appendChild(this.createElement("img",{"class":"toolbar-button-menu-icon","src":"arrow.png"
}
));}}if(zayh=="1"&&(!zazr&&!zazs||zazl)){var zbab=item["m_sTooltip"];if(zbab){zhf.title=zbab;}
}if(zazn&&((zazt&this.zaxo.zaxr)==0)){var self=this;this.zbac.forEach(function(zbad){zhf.addEventListener(zbad,function(event){self.zbae(event);}
,false);});}if(zpn){zhf.setAttribute(zsn,JSON.stringify(zpn));}
if(zazl){zhf.setAttribute(zsf,JSON.stringify(zazl));}
return zhf;};zaxl.prototype.zazf=function(item){var zazn=item["m_nID"];var zbaf=item["m_nMaxWidth"];this.zaxw=zazn;var zazq;var zbag;var zbah={}
;zbah["class"]=this.zapg?"toolbar-search-V8":"toolbar-search";zbah["id"]="div_"+zazn;var self=this;if(this.zapg){zbag=this.createElement("div",zbah);zazq=this.createElement("div",{"class":"toolbar-search-pane-V8","id":"search_pane"}
);zbag.appendChild(zazq);}else{zbag=this.createElement("div",zbah,[zazq=this.createElement("div",{"class":"toolbar-button-content"}
)]);}var zbai=zazq.appendChild(this.createElement("input",{"class":this.zapg?"toolbar-search-edit-V8":"toolbar-search-edit"
,"id":zazn,"type":"search"
}
));this.zbaj(zbai);this.zbak(zbai);if(this.zapg){zbai.addEventListener("focus",function(){zazq.style.borderColor="rgb(48, 125, 251)";}
,false);zbai.addEventListener("blur",function(){zazq.style.borderColor="rgb(246, 246, 246)";}
,false);var zazo=item["m_sIconData"];if(zazo){var zbal;zazq.appendChild(zbal=this.createElement("img",{"class":"toolbar-search-icon-V8 toolbar-button-icon item-icon","id":"search_icon_id","src":zazo}
));zbai.addEventListener("input",function(){if(zbai.value===""){zbal.style.display="inline";}
else{zbal.style.display="none";}},false);}zbaf+=32;}
if(zbaf){if(this.zapg){zbai.style.minWidth=zbaf+"px";}
else{zbai.style.width=zbaf+"px";}}this.zaxv.forEach(function(zbad){zbai.addEventListener(zbad,function(event){self.zbae(event);}
,false);});zbai.addEventListener("input",function(){self.zbam(zbai);if(zbai.value===""){self.zban(false);}
},false);this.zbao(zbai);return zbag;};zaxl.prototype.zbae=function(event){var zft=event.currentTarget.id;var zaex=event.type;var zbap=zaex.substring(0,3)=="key";if(zbap){switch(event.keyCode){case zabr:case zabp:case zabq:return;}
}var key=event.key;var zbaq=false;if(zbap&&!key){if(!event.charCode){switch(event.keyCode){case zabm:key="Esc";break;case zabn:key="Enter";break;case zabk:key="Up";break;case zabl:key="Down";break;case zabi:key="PageUp";break;case zabj:key="PageDown";break;case zabo:key="Tab";break;case zabp:key="Shift";break;case zabq:key="Control";break;case zabr:key="Alt";break;default:if(event.keyCode>=zabs&&event.keyCode<=zacp){key="F"+(event.keyCode-zabs+1);zbaq=true;}
break;}}if(!key){key="Unidentified";}}if(zaex&&!(zaex=="mousemove"||zaex=="mouseout"||zaex=="mouseover"||zaex=="mouseleave"||zaex=="mouseenter")){}
if(zft==this.zaxw){var zbar=this.zbas();if(!zbar){return;}
switch(zaex){case"keydown":switch(key){case"Up":case"ArrowUp":case"Down":case"ArrowDown":case"PageUp":case"PageDown":zaex="keyup";event.preventDefault();event.stopPropagation();break;default:return;}
break;case"keypress":switch(key){case"Up":case"ArrowUp":case"Down":case"ArrowDown":case"PageUp":case"PageDown":event.preventDefault();event.stopPropagation();return;}
return;case"keyup":switch(key){case"Esc":var self=this;this.zbat(function(zgv){if(zgv){self.zban(false);}
else{if(zbar.value==""){return;}zbar.value="";}});event.preventDefault();event.stopPropagation();return;case"Enter":this.zbau(zbar);event.preventDefault();event.stopPropagation();break;case"Up":case"ArrowUp":case"Down":case"ArrowDown":case"PageUp":case"PageDown":event.preventDefault();event.stopPropagation();return;case"Shift":case"Alt":case"Control":case"Tab":return;default:if(zbaq){zbar.blur();break;}
this.zban(true,100);return;}break;case"mousedown":this.zbav();event.stopPropagation();return;case"mouseup":event.stopPropagation();return;case"mousewheel":event.stopPropagation();event.preventDefault();return;case"blur":this.zbaw();return;}
}var zbax;if(zft==this.zaxw){zbax=this.zbay();}else{zbax=this.zbaz(event.currentTarget);}
var zbba=this.zbaz(document.body);var zbbb=this.zbbc(zbba);var data;var zbbd=false;if(zbap){data={"id":zft,"type":zaex,"key":key,"char":event["char"]
}
;}else if(zaex.substring(0,5)=="mouse"){zbbd=true;data={"id":zft,"type":zaex,"timeStamp":event.timeStamp,"screenX":event.screenX,"screenY":event.screenY,"clientX":event.clientX,"clientY":event.clientY,"ctrlKey":event.ctrlKey,"shiftKey":event.shiftKey,"altKey":event.altKey,"button":event.button,"wheelDelta":event.wheelDelta}
;}else if(zaex=="search"){data={"id":zft,"type":zaex,"value":event.currentTarget.value}
;}else{data={"id":zft,"type":zaex};}data["item_rect"]=zbax;data["toolbar_rect"]=zbba;data["toolbar_screen_rect"]=zbbb;this.zbbe(data,zaex);if((zaex=="mouseup"||zaex=="mousedown")&&event.currentTarget.id!=this.zaxw){event.stopPropagation();}
};zaxl.prototype.zbas=function(){return $(this.zaxw);}
;zaxl.prototype.zbay=function(){if(this.zapg){var zbbf=$("search_pane");if(zbbf){var zbbg=this.zbaz(zbbf);zbbg["bottom"]-=2;zbbg["top"]+=2;return zbbg;}
}else{var zbbf=this.zbas();if(zbbf){return this.zbaz(zbbf);}
}return undefined;};zaxl.prototype.zban=function(zez,zafc){this.zbbh();if(!zafc){this.zbbi(zez);return;}
var self=this;this.zaxx=window.setTimeout(function(){self.zbbi(zez);}
,zafc);};zaxl.prototype.zbbh=function(){if(!this.zaxx){return;}
window.clearTimeout(this.zaxx);this.zaxx=undefined;}
;zaxl.prototype.zbbi=function(zez){if(zez){this.zbbj();}
else{this.zbbk();}};zaxl.prototype.zqe=function(){var self=this;this.zbat(function(zbbl){if(!zbbl){self.zban(true);}
});};zaxl.prototype.zbbm=function(zbbg){return{"left":zbbg["left"],"top":zbbg["top"],"right":zbbg["right"],"bottom":zbbg["bottom"]
}
;};zaxl.prototype.zbbc=function(zbbg){if(this.zaxm===undefined||this.zaxn===undefined){return{"left":document.body.scrollWidth,"top":document.body.scrollHeight,"right":document.body.scrollWidth,"bottom":document.body.scrollHeight}
;}else{return{"left":zbbg["left"]+this.zaxm,"top":zbbg["top"]+this.zaxn,"right":zbbg["right"]+this.zaxm,"bottom":zbbg["bottom"]+this.zaxn}
;}};zaxl.prototype.zin=function(zcm,zly){var zhk=zcm;if(zly){zhk+="\n\nError: "+zly;}
var message=$("message");if(message){message.textContent=zhk;message.style.display="block";}
};zaxl.prototype.createElement=function(zbbn,attributes,children){var zagj=document.createElement(zbbn);this.zbbo(zagj,attributes);this.zbbp(zagj,children);return zagj;}
;zaxl.prototype.createTextNode=function(text){return document.createTextNode(text);}
;zaxl.prototype.zbbo=function(zagj,attributes){if(!attributes){return zagj;}
zafv(attributes,function(value,name){zagj.setAttribute(name,value);}
);return zagj;};zaxl.prototype.zbbp=function(zagj,children){if(!children){return zagj;}
for(var zcw=0;zcw<children.length;zcw++){if(children[zcw]){zagj.appendChild(children[zcw]);}
}return zagj;};zaxl.prototype.zbaz=function(zagj){var zayz=this.zaza(zagj);return{"left":zayz.x,"top":zayz.y,"right":zayz.x+zagj.offsetWidth,"bottom":zayz.y+zagj.offsetHeight}
;};zaxl.prototype.zaza=function(zagj){var zafr={};if(!zagj){zafr.x=zafr.y=0;return zafr;}
if(zagj.getBoundingClientRect){var zbbq=document.documentElement;var zbbr=zagj.getBoundingClientRect();var zbbs=zbbq.scrollLeft;var zbbt=zbbq.scrollTop;zafr.x=zbbr.left+zbbs;zafr.y=zbbr.top+zbbt;}
else{zafr.x=zagj.offsetLeft;zafr.y=zagj.offsetTop;var parentNode=zagj.parentNode;var zbbu;while(offsetParent){zafr.x+=offsetParent.offsetLeft;zafr.y+=offsetParent.offsetTop;var zbbv=offsetParent.tagName.toLowerCase();if(zbbv=="td"){zbbu=this.zbbw(offsetParent);zafr.x+=zbbu.left;zafr.y+=zbbu.top;}
if(offsetParent!=document.body&&offsetParent!=document.documentElement){zafr.x-=offsetParent.scrollLeft;zafr.y-=offsetParent.scrollTop;}
while(parentNode&&offsetParent!=parentNode){zafr.x-=parentNode.scrollLeft;zafr.y-=parentNode.scrollTop;zbbu=this.zbbw(parentNode);zafr.x+=zbbu.left;zafr.y+=zbbu.top;parentNode=parentNode.parentNode;}
parentNode=offsetParent.parentNode;offsetParent=offsetParent.offsetParent;}
}return zafr;};zaxl.prototype.zbbw=function(zagj){var zafr={}
;if(window.getComputedStyle){var style=window.getComputedStyle(zagj,null);zafr.left=parseInt(style.borderLeftWidth.slice(0,-2));zafr.top=parseInt(style.borderTopWidth.slice(0,-2));zafr.right=parseInt(style.borderRightWidth.slice(0,-2));zafr.bottom=parseInt(style.borderBottomWidth.slice(0,-2));}
else{zafr.left=this.zbbx(zagj.style.borderLeftWidth);zafr.top=this.zbbx(zagj.style.borderTopWidth);zafr.right=this.zbbx(zagj.style.borderRightWidth);zafr.bottom=this.zbbx(zagj.style.borderBottomWidth);}
return zafr;};zaxl.prototype.zbbx=function(zbaf){var zafr=0;if(typeof(zbaf)=="string"
&&zbaf!=null&&zbaf!=""){var zbby=zbaf.indexOf("px");if(zbby>=0){zafr=parseInt(zbaf.substring(0,zbby));}
else{zafr=-1;}}return zafr;};zaxl.prototype.zbbz=function(){this.zaya={}
;var zbca=$("templates");var zgy=zbca.childNodes;for(var zcw=0;zcw<zgy.length;zcw++){var zfm=zgy[zcw];if(zfm.nodeType===Node.ELEMENT_NODE&&zfm.id){this.zaya[zfm.id]=zfm;}
}zbca.parentNode.removeChild(zbca);};zaxl.prototype.zazh=function(zft){var zbcb=this.zaya[zft];if(!zbcb){return undefined;}
return zbcb.cloneNode(true);};var alert=function zasp(zhk){var zaph=zoj();if(zaph){zaph.alert(zhk);}
else{window.alert(zhk);}};zaxl.prototype.css={zayo:function(zagj,zagu){var zagt=(zagj.getAttribute("class")||"").split(" ");zbcc(zagt,zagu);zagt=zagt.filter(function(zagw){return zagw!="";}
);zagj.setAttribute("class",zagt.join(" "));},zayp:function(zagj,zagx){var zagt=(zagj.getAttribute("class")||"").split(" ");zbcd(zagt,zagx);zagt=zagt.filter(function(zagw){return zagw!="";}
);zagj.setAttribute("class",zagt.join(" "));},zayu:function(zagj,zagx,zagz){var zagt=(zagj.getAttribute("class")||"").split(" ");zbcd(zagt,zagx);zbcc(zagt,zagz);zagt=zagt.filter(function(zagw){return zagw!="";}
);zagj.setAttribute("class",zagt.join(" "));},zapm:function(zasi){var zasj=document.head;var zask=document.createElement('link');zask.type='text/css';zask.rel='stylesheet';zask.href=zasi;zasj.appendChild(zask);}
,zaxk:function(zasi){var zbce=document.getElementsByTagName('link');var zbcf;for(var zcw=0;zcw<zbce.length;zcw++){var zfm=zbce.item(zcw);if(zfm&&zfm.attributes["href"].value==zasi){zbcf=zfm;break;}
}if(zbcf){zbcf.parentNode.removeChild(zbcf);}}};function zbcc(zqb,zaha){if(typeof(zqb)=="string"){zqb=zqb.split(" ");}
if(typeof(zaha)=="string"){zaha=zaha.split(" ");}var zahb=zbcg(zqb);for(var zcw=0;zcw<zaha.length;zcw++){var zhk=zaha[zcw];if(!zahb.hasOwnProperty(zhk)){zqb.push(zhk);}
}return zqb;}function zbcd(zqb,zahd){if(typeof(zqb)=="string"){zqb=zqb.split(" ");}
if(typeof(zahd)=="string"){zahd=zahd.split(" ");}var zahd=zbcg(zahd);for(var zcw=0;zcw<zqb.length;zcw++){var zhk=zqb[zcw];if(zahd.hasOwnProperty(zhk)){zqb.splice(zcw,1);zcw--;}
}return zqb;}function zbcg(arr){var zahe={};for(var zcw=0;zcw<arr.length;zcw++){zahe[arr[zcw]]=arr[zcw];}
return zahe;}function zam(){zan("PT: "+zao(zam.caller,arguments));}
function zap(){zan("PT: "+zao(zap.caller,arguments));}
return zaxl;})();var zayc=(function(){function zayc(zbch){this.zaso=undefined;this.zbci=[];this.zbch=zbch;}
zayc.prototype.Navigate=function(name,zbcj,zpn,zbck,zbcl,zbcm){if(this.zaso&&!this.zaso["skip"]){this.zbci.push(this.zaso);}
this.zaso={"name":name,"views":zbcj,"context":zpn,"init":zbck,"clear":zbcl,"skip":zbcm}
;this.zbcn();};zayc.prototype.zbco=function(){return this.zbci.length>0;}
;zayc.prototype.zbcp=function(){if(this.zbco()){if(this.zaso["clear"]){this.zaso["clear"](this.zaso["context"]);}
this.zaso=this.zbci.pop();this.zbcn();}};zayc.prototype.zbcq=function(){if(!this.zaso){return undefined;}
return this.zaso["context"];};zayc.prototype.zbcr=function(zpn){if(this.zaso){this.zaso["context"]=zpn;}
};zayc.prototype.zbcs=function(){while(this.zbci.length){this.zbct();}
};zayc.prototype.zbct=function(){var zbcu=this.zbci.pop();if(zbcu&&zbcu["clear"]){zbcu["clear"](zbcu["context"]);}
};zayc.prototype.zbcn=function(){while(this.zbch.childNodes.length){this.zbch.removeChild(this.zbch.childNodes[0]);}
var zbcj=this.zaso["views"];for(var zcw=0;zcw<zbcj.length;zcw++){this.zbch.appendChild(zbcj[zcw]);}
if(this.zaso["init"]){this.zaso["init"](this.zaso["context"]);}
};return zayc;})();function zbcv(zft,zbcw,zaex,text,name,zbab,zfw,zsd,zpn){this["m_nID"]=zft;this["m_nFlags"]=zbcw;this["m_sType"]=zaex;this["m_sText"]=text;this["m_sName"]=name;this["m_sTooltip"]=zbab;this["m_sIconData"]=zfw;this["m_oItemInfo"]=zsd;this["m_oContext"]=zpn;}
zbcv.prototype.toString=function(){return" <<ViewItem>> ID='"+this["m_nID"]+"'  Text='"+this["m_sText"]+"'";}
;
