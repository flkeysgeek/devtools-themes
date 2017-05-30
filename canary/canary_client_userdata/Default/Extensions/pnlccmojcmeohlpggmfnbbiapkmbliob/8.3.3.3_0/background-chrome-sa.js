var zfez=new zcnp();var zst=undefined;var zcsh=undefined;var zaqe=undefined;var zawd=RfapiJS["utils"];function zffa(){zrg.prototype.zfdq=function(ziw,zht,url,tab){var zfdr=zle.zix(ziw);if(zfdr){if(zfdr==zht){zfdr=undefined;}
}var zhy=zle.zir(zht,url);if(tab){zfds(tab);}else{chrome.tabs.get(zht,function(tab){if(chrome.runtime.lastError){zle.ziv(ziw,undefined);zle.ziu(zht);return;}
zfds(tab);});}function zfds(tab){chrome.windows.get(ziw,function(zfdt){if(!zfdt||!zfdt.type){return;}
var znl=zfdt.type;switch(znl){case"normal":case"popup":break;default:return;}
if(zfdu(znl,tab)){return;}zle.ziv(ziw,zht);});}};zrg.prototype.zfel=function(zly,zfem){var zgv={}
;zfem(zgv);};zrg.prototype.zfeo=function(){chrome.browserAction.setIcon({"path":"robo32.png"}
);};}function zffb(){zcxf();zfdl();zffa();zrn();zle=new zrg();zsh().zcnr();zaqe=new RfapiJS["RfDataManager"]();zaqe["setBrowserParam"](zffc);RfapiJS["setTraceLevel"](0);RfapiJS["setDebugMode"](false);zaqe["SetServerUrl"](zde("internal","active-server"));zst=new zcrp();zcsh=new zctd();zaqe["SetEventListener"]("OnAccountChanged",zcui);chrome.runtime.onMessage.addListener(function(request,sender,zbde){switch(request.name){case"hi":zbde({"id":zjm().toString()}
);return;}});chrome.runtime.onConnect.addListener(function(port){if(!port){return;}
var tab=port.sender.tab;if(!tab||!tab.id){return;}
zle.zhs(tab.id,port.name,port.name[0]=='t',port,tab.url,tab.status);if(zfec(tab)){zle.zfdq(tab.windowId,tab.id,tab.url,tab);}
});if(chrome.tabs.onActivated){chrome.tabs.onActivated.addListener(function(zffd){zle.zfdq(zffd.windowId,zffd.tabId,undefined,undefined);}
);}chrome.tabs.onRemoved.addListener(function(zht,zffe){zle.ziu(zht);}
);chrome.tabs.onUpdated.addListener(zfff);chrome.tabs.onCreated.addListener(function(tab){}
);chrome.windows.onFocusChanged.addListener(zfei);chrome.browserAction.setPopup({"popup":"popup.html"}
);zfeo(true);chrome.browserAction.setTitle({"title":"Click this button to show RoboForm commands"}
);}function zfei(ziw){if(ziw!=chrome.windows.WINDOW_ID_NONE){if(chrome.tabs.query){chrome.tabs.query({"windowId":ziw,"active":true}
,function(tabs){if(!tabs){return;}if(tabs.length==1){var zht=tabs[0].id;zle.zfdq(ziw,zht,undefined,undefined);}
});}else{var zht=zle.zix(ziw);if(zht){zle.zfdq(ziw,zht,undefined,undefined);}
}}}
