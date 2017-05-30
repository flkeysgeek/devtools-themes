function zfdj(){zcxd();zfdk();zrf();zfdl();zfdm();zle=new zmb();zle.zmd=zfdn;zle.zme=true;zle.zmh(function(){zle.zfdo();}
,zfdp);znv(zle.zhm);function zfdp(){chrome.runtime.requestUpdateCheck(function(zhw,zly){}
);}}function zfdm(){zmb.prototype.zfdq=function(ziw,zht,url,tab){var zfdr=zle.zix(ziw);if(zfdr){if(zfdr==zht){zfdr=undefined;}
}var zhy=zle.zir(zht,url);if(tab){zfds(tab);}else{chrome.tabs.get(zht,function(tab){if(chrome.runtime.lastError){zle.ziv(ziw,undefined);zle.ziu(zht);return;}
zfds(tab);});}function zfds(tab){chrome.windows.get(ziw,function(zfdt){if(!zfdt||!zfdt.type){return;}
var znl=zfdt.type;switch(znl){case"normal":case"popup":break;default:return;}
if(zfdu(znl,tab)){return;}zle.ziv(ziw,zht);if(zfdr){zle.zni(zfdr,false,ziw,znl);}
if(zht){zle.zni(zht,true,ziw,znl);zpl(zht);}});}};zmb.prototype.zni=function zfdv(zht,znk,ziw,znl){try{this.zmd.znm(zht,znk,ziw,znl);}
catch(zhj){}};zmb.prototype.znp=function zfdw(zez,zns){if(zns){this.zmd.znt(zez);}
else{this.zmd.znu(zez);}chrome.windows.getAll({"populate":true}
,function(windows){for(var zfdx in windows){zfdy(zfdx,windows[zfdx]);}
});function zfdy(zfdx,zfdt){if(!zfdt||!zfdt.id){return;}
var znl=zfdt.type;switch(znl){case"normal":if(!zns){break;}
return;case"popup":if(zns){break;}return;default:return;}
var ziw=zfdt.id;if(chrome.tabs.getAllInWindow){chrome.tabs.getAllInWindow(ziw,zfdz);}
else{chrome.tabs.query({"windowId":ziw},zfdz);}function zfdz(tabs){zle.ziv(ziw,undefined);var zfea;for(var zfeb in tabs){var tab=tabs[zfeb];var zht=tab.id;if(!zht){continue;}
var zhy=zle.zir(zht,tab.url);if(zfec(tab)&&!zfdu(znl,tab)){zfea=zht;}
else{zle.zni(zht,false,ziw,znl);}}if(zfea){zle.ziv(ziw,zfea);zle.zni(zfea,true,ziw,znl);zpl(zfea);}
}}if(!zns){znv(zez);}};zmb.prototype.znq=function zfed(znx){if(this.zmd&&typeof(this.zmd.zny)!="undefined"){this.zmd.zny(znx);}
chrome.browserAction.setPopup({"popup":(znx?"popup.html":"")}
);if(zoa){this.zmd.zmk("mac-toolbar-style",function(zfee){if(zfee){chrome.browserAction.setPopup({"popup":""}
);}});}var zfef;if(znx){zfef="IDS_BrowserButton_ShowPopup_Title";}
else if(zle.zmf=="remote-service-missing"){zfef="IDS_BrowserButton_RemoteServiceMissing_Title";}
else if(zle.zmf=="login-required"){zfef="IDS_BrowserButton_OneFileLogin_Title";}
else{zfef="IDS_BrowserButton_ShowToolbar_Title";}this.zmd.zmk(zfef,function(zaqp){chrome.browserAction.setTitle({"title":zaqp}
);});};zmb.prototype.zoe=function zfeg(){if(this.zho){this.zmd.zog(JSON.stringify({"type":"close-popup"}
));chrome.runtime.sendMessage({"name":"close-popup"}
);}this.zho=false;};zmb.prototype.zfdo=function(){zhl.prototype.zfdo.call(this);chrome.browserAction.onClicked.addListener(function(){zle.znz();}
);zoj().addEventListener("putSetting",function(event){zle.znn(event);}
,false);zle.znq(zde("nm-settings","popup"));zle.znp(zle.zhm,false);zle.znp(zzd(),true);window.setTimeout(zfeh,500);window.setInterval(function(){zle.zmv(function(zmz){if(!zmz){zfeh();}
});},1000);};zmb.prototype.zfei=function(ziw){if(zle.zmd&&typeof(zle.zmd.onFocusChanged)!="undefined"){zle.zmd.onFocusChanged(ziw);}
zhl.prototype.zfei.call(this,ziw);};zmb.prototype.zfej=function(ziw){zhl.prototype.zfej.call(this,ziw);if(zle.zmd){zle.zmd.zfek(ziw);}
};zmb.prototype.zfel=function(zly,zfem){if(zle.zmd&&typeof(zle.zmd.zfen)!="undefined"){zle.zmd.zfen(JSON.stringify(zly),function(zgv){zgv=JSON.parse(zgv);zfem(zgv);}
);}};zmb.prototype.zfeo=function(){if(zle.zmd&&typeof(zle.zmd.zmk)!=="undefined"){window.setTimeout(zfeh,500);}
};}function zfdk(){ziq.prototype.Navigate=function(url,zkq){if(zkq){chrome.tabs.create({"url":url}
);}else{this.zpi();chrome.tabs.update(this.ziz,{"url":url}
);}};ziq.prototype.zpj=function(zez){chrome.tabs.get(this.ziz,function(tab){if(chrome.runtime.lastError){zle.ziu(this.tab_id);return;}
chrome.windows.get(tab.windowId,function(zfdt){if(!zfdt||!zfdt.type){return;}
var znl=zfdt.type;switch(znl){case"normal":zle.zhm=zez;zle.znp(zez,false);zdv("nm-settings","toolbar",zez);zoc().zod("nm-settings","toolbar",zez);break;case"popup":zle.znp(zez,true);zdv("nm-settings","popup-windows-toolbar",zez);zoc().zod("nm-settings","popup-windows-toolbar",zez);break;}
});});};zik.prototype["AddLink"]=function zfep(zfeq){try{var data=JSON.parse(zfeq);chrome.bookmarks.create({"title":data.m_title,"url":data.m_url}
);}catch(zhj){}};zik.prototype.GetRealUrlFromTab=function(){var zhu=this.zie;var zht=this.ziz;chrome.tabs.get(this.ziz,function(tab){if(chrome.runtime.lastError){zle.ziu(this.tab_id);}
if(!tab||!tab.url){zle.zmd.onMessage(zht,zhu,"GetRealUrlFromTab","");}
else{zle.zmd.onMessage(tab.id,zhu,"GetRealUrlFromTab",tab.url);}
});return true;};zik.prototype["UpdateSiteIcons"]=function(zjp){var zcvm=JSON.parse(zjp);if(!zcvm||!Array.isArray(zcvm)){return;}
var zht=this.ziz;var zhu=this.zie;var zfer=[];var self=this;var zfes=null;function zfet(zfeu){if(zfeu.length>256*1024){return false;}
if(zfes==null){return true;}if(zfes.length!=zfeu.length){return true;}
for(var zcw=0;zcw<zfeu.length;zcw++){if(zfes[zcw]!=zfeu[zcw]){return true;}
}return false;}function zfev(zcvm,zcw){if(zcw==zcvm.length){zle.zmd.onMessage(zht,zhu,"onSiteIconsUpdated",JSON.stringify(zfer),"");return;}
var url=zcvm[zcw];var request=new XMLHttpRequest();request.open("GET","chrome://favicon/"+url,true);request.responseType="arraybuffer";request.timeout=10*1000;request.ontimeout=function(){zfev(zcvm,zcw+1);}
;request.onreadystatechange=function(){if(request.readyState!=4){return;}
if(request.status==200){var zfew=request.response;var zfex=new Uint8Array(zfew);if(zfet(zfex)){zfer.push({"url":url,"icon_data":window.btoa(String.fromCharCode.apply(null,zfex))}
);}}zfev(zcvm,zcw+1);};request.send();}function zfey(zcvm){var request=new XMLHttpRequest();request.open("GET","chrome://favicon/invalid_url",true);request.responseType="arraybuffer";request.onreadystatechange=function(){if(request.readyState!=4){return;}
if(request.status==200){zfes=new Uint8Array(request.response);zfev(zcvm,0);}
};request.send();}zfey(zcvm);};ziq.prototype.zit=function(url){var zhu="top0";var zia=new zik();zia.zih(zhu,this.ziz,undefined,this,true,url,undefined);this.zil(zia);}
;}
