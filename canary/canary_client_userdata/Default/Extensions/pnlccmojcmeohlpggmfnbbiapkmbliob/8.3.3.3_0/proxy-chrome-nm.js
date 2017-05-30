var zfga=zfgb;function zfgb(){this.zkc=undefined;this.zfgc={}
;this.zfgd=0;this.zfge=[];}zfgb.prototype.zapq=function(){this.postMessage("showOptions",arguments);}
;zfgb.prototype.zbdh=function(){this.postMessage("setCurrentBrowser",arguments);}
;zfgb.prototype.zbed=function(){this.postMessage("setUIItemsInfo",arguments);}
;zfgb.prototype.zapo=function(){this.postMessage("initUI",arguments);}
;zfgb.prototype.zcts=function(zfgf,zfgg,zfgh,zfgi,zfgj){var self=this;this.zfgk(function(){self.sendMessage("Initialize",[null,zfgg],function(zgv){if(zgv){try{zfgh();}
catch(zhj){zfgi();}}else{zfgi();}});},zfgi,zfgj);}
;zfgb.prototype.zne=function(zht,zhy){this.postMessage("addBrowser",[zht]);}
;zfgb.prototype.zoi=function(){this.postMessage("Uninitialize",arguments);}
;zfgb.prototype.zmk=function(zqu,zmw){this.sendMessage("getProp",zqu,zmw);}
;zfgb.prototype.zmx=function(zmw){this.sendMessage("ensureUptodate",undefined,zmw);}
;zfgb.prototype.znm=function(zht,znk,ziw,znl){this.postMessage("updateToolbarPosition",arguments);}
;zfgb.prototype.zfek=function(ziw){this.postMessage("onWindowRemoved",arguments);}
;zfgb.prototype.onFocusChanged=function(ziw){this.postMessage("onFocusChanged",arguments);}
;zfgb.prototype.zfen=function(zly,zmw){this.sendMessage("onAuthRequired",arguments,zmw);}
;zfgb.prototype.znh=function(zht){this.postMessage("removeBrowser",arguments);}
;zfgb.prototype.zil=function(ziz,zie,zkd,zja,zke,zia){zia=undefined;this.postMessage("addFrame",arguments);}
;zfgb.prototype.zqx=function(ziz,zie,url,zhw){this.postMessage("updateFrame",arguments);}
;zfgb.prototype.zid=function(ziz,zhu,zjn){this.postMessage("removeFrame",arguments);}
;zfgb.prototype.onMessage=function(ziz,zhu,message,data){this.postMessage("onMessage",arguments);}
;zfgb.prototype.znt=function(){this.postMessage("setToolbarForPopupVisible",arguments);}
;zfgb.prototype.znu=function(){this.postMessage("setToolbarVisible",arguments);}
;zfgb.prototype.zny=function(){this.postMessage("setPopupToolbar",arguments);}
;zfgb.prototype.zog=function(){this.postMessage("onUIEvent",arguments);}
;zfgb.prototype.zbdg=function(){this.postMessage("updateNativeToolbar",arguments);}
;zfgb.prototype.zob=function(){this.postMessage("onActionButtonClick",arguments);}
;zfgb.prototype.zfgk=function(zfgh,zfgi,zfgj){try{this.zkc=chrome.runtime.connectNative("com.siber.roboform");var self=this;this.zkc.onMessage.addListener(function(zcm){try{var zfgl=zcm["chunk"];if(zfgl){var zep=zfgl["index"];if(zep==0){self.zfge.length=0;}
self.zfge.push(zfgl);var zalb=zfgl["count"];var data=zfgl["data"];var zfgm=zfgl["last"];if(!zfgm){return;}
var data="";for(var zcw=0;zcw<self.zfge.length;zcw++){data+=self.zfge[zcw]["data"];}
self.zfge.length=0;zcm=JSON.parse(data);}var zfgn=zcm["callbackId"];if(zfgn){var zmw=self.zfgc[zfgn];if(!zmw){return;}
delete self.zfgc[zfgn];zmw(zcm["result"]);}else{var zht=zcm["tabId"];var zhu=zcm["frameId"];var name=zcm["name"];var args=zcm["args"]||[];if(!zht||!name){return;}
var zhy=zle.zhq[zht];if(!zhy){return;}if(!zhu){zhy[name].apply(zhy,args);}
else{var zia=zhy.zic[zhu];if(!zia){return;}zia[name].apply(zia,args);}
}}catch(zhj){}});this.zkc.onDisconnect.addListener(zfgi);this.sendMessage("ping",[],function(){try{zfgh();self.zkc.onDisconnect.removeListener(zfgi);self.zkc.onDisconnect.addListener(zfgj);}
catch(zhj){zfgi();}});}catch(zhj){zfgi();}};zfgb.prototype.postMessage=function(name,args){this.zkc.postMessage({"name":name,"args":args}
);};zfgb.prototype.sendMessage=function(name,args,zmw){var message={"name":name,"args":args}
;if(name=="ensureUptodate"){}else{}var zfgn;if(zmw){this.zfgd++
if(this.zfgd<=0){this.zfgd=1;}
zfgn=this.zfgd;message["callbackId"]=zfgn;this.zfgc[zfgn]=zmw;}
try{this.zkc.postMessage(message);}catch(zhj){if(zmw){delete this.zfgc[zfgn];}
throw zhj;}};
