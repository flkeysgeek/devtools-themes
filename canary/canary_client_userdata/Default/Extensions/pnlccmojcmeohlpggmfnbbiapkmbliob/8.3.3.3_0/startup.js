// Copyright (C) 1999-2016 Siber Systems Inc. All Rights Reserved.
var zfgo="http://www.roboform.com/download/chrome-extension?reason=RoboForm-Not-Found";var zmu="http://www.roboform.com/download/chrome-extension?reason=RoboForm-Version-Is-Old";var zms="7-9-5-0";var zle;var zcps=new zctr();var zcqy=new zctm();var zrr=new zavp();var zaxd;var zapi=false;var zapk=false;var zaxf=false;var zaxg=false;var zaxe;function zmn(zka){zka(chrome.app.getDetails().version);}
var zme=false;zfeo(false);chrome.browserAction.setTitle({"title":"Loading..."}
);window.addEventListener("load",zba,true);window.addEventListener("unload",ziy,true);function zba(){try{zfgp();}
catch(zhj){zin(zio,zhj);}}function ziy(){if(zle){zle.ziy();}
}var zfgq=zfgq||{};var zfdn;function zfgp(){zaxd=true;zaxd=zde("internal","first-start",zaxd);var zfgr=!zle;zfdn=new zfga;zfdn.zcts(zfgq,zffh(),zfgs,zfgt,zkl);function zfgt(){if(zle){zle.zme=false;}
zaxe=zde("internal","is-nm",false)||zde("internal","need-repair",false);zdv("internal","need-repair",zaxe);zapk=true;zapi=false;zfgu();}
function zkl(){if(zle){zle.zme=false;}zin(zkp);}function zfgs(){zdv("internal","first-start",false);zapk=false;zapi=true;zfdj();}
}function zma(){zfeo(false);chrome.browserAction.onClicked.addListener(function(){chrome.runtime.reload();}
);}function zfgu(){if(zaxd){chrome.browserAction.setPopup({"popup":"popup.html"}
);zfeo(true);return;}zffb();}function zaxb(zmw){zaxd=false;zdv("internal","first-start",zaxd);zaxf=false;zdv("internal","is-nm",zaxf);zaxg=true;zdv("internal","is-sa",zaxg);zapi=false;zapk=true;zaxe=false;zdv("internal","need-repair",zaxe);zffb();zmw(true);}
function zfgv(zmw){zaxd=false;zdv("internal","first-start",zaxd);zaxf=true;zdv("internal","is-nm",zaxf);zaxg=false;zdv("internal","is-sa",zaxg);zapi=true;zapk=false;zaxe=false;zdv("internal","need-repair",zaxe);zfdj();zmw();}
function zmt(url){chrome.tabs.query({"lastFocusedWindow":true,"windowType":"normal"
,"url":[url,url.replace("/download/chrome-extension?","/download-from-chrome-extension?")]
}
,function(tabs){if(tabs&&tabs.length>=1){var tab=tabs[0];chrome.tabs.update(tab.id,{"active":true}
);}else{chrome.tabs.create({"url":url});}});}function zfgw(zfgx){var url=zaww?zza:(zoa?zzb:"");chrome.downloads.download({"url":url}
);}function zfff(zht,zfgy,tab){var url=zfgy.url||tab.url;var zhw=zfgy.status||tab.status;var zfgz=zfec(tab);var ziw=tab.windowId;var zfha=tab.favIconUrl;var zhy=zle.zir(zht,url);var zhu=zhy.zib;var zfhb=zhy.zic[zhu];if(zfhb&&zfhb.zkg){zhy.zid(zhu,false);zfhb.zih(zhu,zht,undefined,zhy,true,url,"initial");zhy.zil(zfhb);zhy.zim();zhy.update(url,"complete");if(zfgz){zle.zfdq(ziw,zht,url,tab);}
}else{zhy.update(url,"complete");}zhy.zqy=zfha;}zhl.prototype.zfei=function(ziw){if(ziw!=chrome.windows.WINDOW_ID_NONE){if(chrome.tabs.query){chrome.tabs.query({"windowId":ziw,"active":true}
,function(tabs){if(tabs.length==1){var zht=tabs[0].id;zle.zfdq(ziw,zht,undefined,undefined);}
});}else{var zht=zle.zix(ziw);if(zht){zle.zfdq(ziw,zht,undefined,undefined);}
}}};zhl.prototype.zfej=function(ziw){};function zfec(tab){if(tab.active!==undefined){return tab.active;}
else{return tab.selected;}}function zfdu(znl,tab){return znl=="popup"
&&tab.index==0
&&tab.url&&tab.url.substr(0,6)=="chrome";}
function zvw(zdwr,zka){if(chrome.tabs.getSelected){chrome.tabs.getSelected(zdwr,zka);}
else{chrome.tabs.query({"active":true,"currentWindow":true}
,function(tabs){if(!tabs||!tabs[0]){return;}zka(tabs[0]);}
);}}function zfhc(zht,zhu){zffj(zht,zhu,"base.js",function(){zffj(zht,zhu,"storage.js",function(){zffj(zht,zhu,"common.js",function(){zffj(zht,zhu,"content.js",function(){zffj(zht,zhu,"filler.js",function(){zffj(zht,zhu,"content-init.js");}
);});});});});}function zpl(zht,ziw){chrome.runtime.sendMessage({"name":"update-match"
,"tab_id":zht}
);}function zfeh(){var zfhd="robo32.png";try{zle.zmd.zmk(["rf-icon","service-status"],function(zfhe){var zazo=zfhe["rf-icon"];var zfhf=zfhe["service-status"];if(zazo&&zazo!=""){zfhd=zazo;}
chrome.browserAction.setIcon({"path":zfhd});if(zfhf&&zfhf=="remote-service-missing"){if(zle.zmf!="remote-service-missing"){zle.zmf="remote-service-missing";zle.znq(false);zle.zoe();}
}else if(zfhf&&zfhf=="login-required"){if(zle.zmf!="login-required"){zle.zmf="login-required";zle.znq(false);zle.zoe();}
}else{if(zle.zmf!="normal"){zle.zmf="normal";zle.znq(zde("nm-settings","popup"));}
}});}catch(zhj){chrome.browserAction.setIcon({"path":zfhd}
);zle.zmf="normal";zle.znq(true);}}function zfeo(zfhg){if(zfhg){if(zle){zle.zfeo(zfhg);}
else{chrome.browserAction.setIcon({"path":"robo32.png"}
);}}else{chrome.browserAction.setIcon({"path":"rfdis16.png"}
);}}function znv(zoh){}function zfhh(zhk,zalg,zafe){chrome.browserAction.setBadgeText({"text":zhk}
);if(zalg){chrome.browserAction.setBadgeBackgroundColor({"color":zalg}
);}if(zafe){window.setTimeout(function(){chrome.browserAction.setBadgeText({"text":""}
);},zafe);}}var zin=function zfhi(zcm,zly,zlz){var zhk=zcm;if(zly){zhk+="\n\nError: "+zly;}
chrome.browserAction.setTitle({"title":zhk});if(zlz&&typeof(alert)!=undefined){alert(zhk);}
zma();};function zfhj(zly){var zakw={};var zfhk="";var zlq={}
;{var zfhl=zly["url"].indexOf("//");var zfhm=zly["url"].indexOf("?");if(zfhl==-1||zfhm==-1){return zakw;}
var zfhn=zly["url"].slice(zfhm+1,zly["url"].length).split("&");for(var zcw=0;zcw<zfhn.length;zcw++){var zfho=zfhn[zcw].indexOf("=");if(zfho==-1){return zakw;}
zlq[zfhn[zcw].slice(0,zfho)]=zfhn[zcw].slice(zfho+1,zfhn[zcw].length);}
}if(typeof(zlq["rfobject$"])!="undefined"){zakw["redirectUrl"]="javascript:void(0)";var zhy=zle.zhz(zly["tabId"]);if(zhy){if(zly["frameId"]){return zakw;}
var zia=zhy.zic[zhy.zib];if(zia){zia.zii({"name":"GetValueByID","data":zlq}
);}else{}}else{}}return zakw;}function zfdl(){zhl.prototype.zir=function zfhp(zht,url){var zhy=zle.zhz(zht);if(zhy){}
else{zhy=zle.zij(zht);zhy.zit(url);zfhc(zht);}return zhy;}
;zhl.prototype.zfdo=function(){chrome.webNavigation.onBeforeNavigate.addListener(function(zly){if(zly.url==="about:blank"){zfhc(zly.tabId,zly.frameId);}
});chrome.webNavigation.onErrorOccurred.addListener(function(zly){var zhy=zle.zhz(zly.tabId);if(zhy){zhy.zid(zly.frameId,true);}
});chrome.runtime.onMessage.addListener(function(request,sender,zbde){switch(request.name){case"hi":zbde({"id":sender.frameId.toString()}
);return;}});chrome.runtime.onConnect.addListener(function(port){if(!port){return;}
var tab=port.tab||(port.sender&&port.sender.tab);if(!tab||!tab.id){return;}
zle.zhs(tab.id,port.name,port.name[0]=='t',port,tab.url,tab.status);if(zfec(tab)){zle.zfdq(tab.windowId,tab.id,tab.url,tab);}
});if(chrome.tabs.onActivated){chrome.tabs.onActivated.addListener(function(zffd){zle.zfdq(zffd.windowId,zffd.tabId,undefined,undefined);}
);}else{chrome.tabs.onSelectionChanged.addListener(function(zht,selectInfo){zle.zfdq(selectInfo.windowId,zht,undefined,undefined);}
);}chrome.tabs.onUpdated.addListener(zfff);if(zaww){chrome.tabs.onDetached.addListener(function(zro,zfhq){zle.ziu(zro);}
);chrome.tabs.onAttached.addListener(function(zro,zfhr){zle.zfdq(zfhr.newWindowId,zro,undefined,undefined);}
);}chrome.tabs.onRemoved.addListener(function(zht,zffe){zle.ziu(zht);}
);chrome.windows.onFocusChanged.addListener(function(ziw){zle.zfei(ziw);}
);chrome.windows.onRemoved.addListener(function(ziw){zle.zfej(ziw)}
);if(chrome.webRequest&&chrome.webRequest.onBeforeRequest){chrome.webRequest.onBeforeRequest.addListener(zfhj,{"urls":["*://www.roboform.com/needroboform.html*"]}
,["blocking"]);}else{}if(zoa){if(chrome.webRequest&&chrome.webRequest.onAuthRequired){chrome.webRequest.onAuthRequired.addListener(function(zly,zfem){zle.zfel(zly,zfem);}
,{"urls":["<all_urls>"]},['asyncBlocking']);}}zfeo(true);}
;}function zam(){zan("BG: "+zao(zam.caller,arguments));}
function zap(){zan("BG: "+zao(zap.caller,arguments));}

