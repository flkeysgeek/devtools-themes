var zaxi=(function(){function zaxi(){zaxl.call(this);if(location.search!=="?foo"){location.search="?foo";}
this.zmd=undefined;this.zapf="8-0-1-3";this.zbac=["mousedown","mouseup","mouseover","mousemove","mouseout","mousewheel"];this.zmg=zaxl.prototype;window.oncontextmenu=function(){return false;}
;this.zbcx=[];this.zbcy="";}zaxi.prototype=Object.create(zaxl.prototype);zaxi.prototype.zba=function(){this.zmg.zba.call(this);try{this.zbcz();var zapn=zoc();zapn.zho=true;var self=this;window.addEventListener("unload",function(){self.ziy();}
,false);zoj().addEventListener("putSetting",function(event){self.znn(event);}
,false);this.zmd=zapn.zmd;if(!this.zmd||typeof(this.zmd.zapo)=="undefined"){throw zio;}
this.zmd.zapo();if(!zoa&&zapn.zmc){var zmq=zmr(zapn.zmc,this.zapf,"-");if(zmq>=0){this.zapg=true;}
}if(zoa){try{var zbda=document.createElement("img");zbda.setAttribute("id","rf-embed-placeholder");zbda.setAttribute("height","241");zbda.setAttribute("width","128");document.body.replaceChild(zbda,$("toolbar"));this.zmd.zmk("toolbar-image",function(zazo){if(zazo&&zazo!=""){zbda.setAttribute('src',zazo);if(zbda.naturalWidth&&zbda.naturalHeight){zbda.width=zbda.naturalWidth/window.devicePixelRatio;zbda.height=zbda.naturalHeight/window.devicePixelRatio;}
}});window.addEventListener("mouseover",function(event){self.zbdb(event);}
,false);}catch(zhj){}}zbdc(function(tab){if(!tab||!tab.id){return;}
self.zbdd(tab.id);});chrome.runtime.onMessage.addListener(function(data,sender,zbde){switch(data.name){case"update-match":self.zbdf(data["tab_id"]);zbde({}
);return;case"close-popup":window.close();zbde({});return;}
});function zbdc(zka){if(chrome.tabs.getSelectedTab){chrome.tabs.getSelectedTab(null,zka);}
else{chrome.tabs.query({"active":true,"currentWindow":true}
,function(tabs){if(!tabs||!tabs[0]){return;}zka(tabs[0]);}
);}}}catch(zhj){this.zin(zio,zhj);}};zaxi.prototype.zbcz=function(){this.css.zapm('popup-nm.css');}
;zaxi.prototype.ziy=function(){this.zmg.ziy.call(this);this.zmd=undefined;}
;zaxi.prototype.znn=function(event){var zno=event["detail"];var zee=zno["section"];var name=zno["name"];var value=zno["value"];if(zee!="nm-settings"){return;}
if(zoa)return;switch(name){case"horizontal":this.zaym();break;}
};zaxi.prototype.zbdb=function(event){this.zmd.zbdg(event.clientX,event.clientY,event.screenX,event.screenY);}
;zaxi.prototype.zbdd=function(zht){if(!zht){return;}
this.zmd.zbdh(zht);if(this.zapg){this.zmd.zog(JSON.stringify({"type":"chrome-set-V8-style"
}
));}if(zoa)return;var self=this;this.zmv(function(){self.zaym();document.body.addEventListener("mousemove",function(event){self.zbdi(event);}
,false);setTimeout(function(){document.body.addEventListener("mouseup",function(event){self.zbae(event);}
,false);var zayq=$("layout-button");if(zayq){zayq.addEventListener("click",function(){var value=!zde("nm-settings","horizontal");zdv("nm-settings","horizontal",value);zoc().zod("nm-settings","horizontal",value);self.zaym();}
,false);}self.zmd.zog(JSON.stringify({"type":"init-popup"
}
));setInterval(function(){self.zbdj();},1000);},10);}
);};zaxi.prototype.zbak=function(zbai){if(zde("nm-settings","focus")){zbai.setAttribute("autofocus","");}
};zaxi.prototype.zbdk=function(){var zbar=this.zbas();if(zbar){var zapn=zoc();if(zapn){zapn.zbdl=zbar.value;}
}};zaxi.prototype.zbdm=function(){var zbbf=this.zbas();if(zbbf){var zapn=zoc();if(zapn&&zapn.zbdl){zbbf.value=zapn.zbdl;}
}};zaxi.prototype.zbdj=function(){if(!this.zmd){return;}
var self=this;this.zmv(function(zmz){if(!zmz){self.zaym();}
});};zaxi.prototype.zbdf=function(zht){this.zmd.zbdh(zht);if(this.zapg){this.zmd.zog(JSON.stringify({"type":"chrome-set-V8-style"
}
));}if(zoa)return;var self=this;this.zmv(function(zmz){if(!zmz){self.zaym();return;}
self.zmd.zmk(["match","!ToolbarButtonTextType"],function(zgv){var zmp=zgv["match"];var zayh=self.zayw(zgv["!ToolbarButtonTextType"]);var zbdn=zjz(zmp);var zazn=zbdn&&zbdn["m_nID"];var zbdo=zazn&&$(zazn);if(zbdo){var zbdp=self.zayi(zbdn,zayh);var parent=zbdo.parentNode;parent.replaceChild(zbdp,zbdo);self.zaxu=zbdp;}
else{self.zaxu&&self.zaxu.parentNode&&self.zaxu.parentNode.removeChild(self.zaxu);self.zaxu=undefined;}
setTimeout(function(){self.zayx();setTimeout(function(){self.zbdq();}
,1);},1);});});};zaxi.prototype.zaym=function(){var self=this;this.zmd.zmk(["toolbar","!ToolbarButtonTextType"],function(zgv){var zss=JSON.parse(zgv["toolbar"]);var zayh=self.zayw(zgv["!ToolbarButtonTextType"]);if(self.zbcy==zayh&&self.zbcx.length==zss.length){var zbdr=false;for(var zcw=0;zcw<self.zbcx.length;zcw++){var zbds=self.zbcx[zcw];var zbdt=zss[zcw];if(zbds["m_nID"]!==zbdt["m_nID"]
||zbds["m_sName"]!==zbdt["m_sName"]
||zbds["m_sType"]!==zbdt["m_sType"]
||zbds["m_sIconData"]!==zbdt["m_sIconData"]
||zbds["m_sSuffix"]!==zbdt["m_sSuffix"]
||zbds["m_sText"]!==zbdt["m_sText"]
||zbds["m_nFlags"]!==zbdt["m_nFlags"]
||zbds["m_nMaxWidth"]!==zbdt["m_nMaxWidth"]
||zbds["m_sTooltip"]!==zbdt["m_sTooltip"]){zbdr=true;break;}
}if(!zbdr){setTimeout(function(){self.zayx();setTimeout(function(){self.zbdq();}
,1);},1);return;}}self.zbcx=zss;self.zbcy=zayh;var zbdu="";var zbdv=false;if(self.zapg){var zbbf=self.zbas();if(zbbf){zbdu=zbbf.value;zbdv=(zbbf===document.activeElement);}
}self.zmg.zaym.call(self);if(self.zapg){zss.unshift(new zbcv(undefined,undefined,"header-title"));}
self.zayj(zss,zayh);var zbdw=$("custom-ui-items");if(zbdw&&zbdw.childNodes.length==0){zbdw.style.display="none";}
var zayk=$("ui-items");if(zayk&&zayk.childNodes.length==0){zayk.style.display="none";}
setTimeout(function(){self.zayx();setTimeout(function(){self.zbdq();if(self.zapg&&(zbdu!=""||zbdv)){var zbbf=self.zbas();if(zbbf){if(zbdu){zbbf.value=zbdu;var zbal=$("search_icon_id");if(zbal){zbal.style.display="none";}
}if(zbdv){zbbf.focus();if(zbdu){self.zban(true);}}
}}},1);},1);});};zaxi.prototype.zayl=function(){var zalw;var zbdx=this.createElement("div",{"class":"toolbar-match-title-V8"}
,[zalw=this.createTextNode("Fill from:")]);this.zmd.zmk("IDS_Toolbar_Chrome_Match_Title",function(zbdy){zalw.data=zbdy;}
);return zbdx;};zaxi.prototype.zmv=function(zmw){if(!this.zmd){return;}
var self=this;this.zmd.zmx(function(zgv){var zmy=zgv["timestamp"];var zmz=zgv["uptodate"];if(zmz){if(self.zna==zmy){zmw(true);return;}
}else{}self.zna=zmy;zmw(false);});};zaxi.prototype.zayr=function(zays){this.zmg.zayr.call(this,zays);var zbdz=$("layout-content");if(zbdz){this.zmd.zmk(zays?"IDS_Toolbar_SwitchToVertical_Tip":"IDS_Toolbar_SwitchToHorizontal_Tip",function(zaqp){zbdz.title=zaqp;}
);}this.zmd.zog(JSON.stringify({"set-horizontal-layout":zays}
));};zaxi.prototype.zbdq=function(){var zayq=$("layout-button");var zbba=this.zbaz(document.body);var zbea=zbba["left"];var zbeb=zbba["top"];var zfl;if(this.zapg){zfl=document.body.getElementsByClassName("toolbar-button-V8");}
else{zfl=document.body.getElementsByClassName("toolbar-button");}
var zbec=[];for(var zcw=0;zcw<zfl.length;zcw++){var zfm=zfl[zcw];if(zfm==zayq){continue;}
var data=this.zbaz(zfm);data["left"]-=zbea;data["right"]-=zbea;data["top"]-=zbeb;data["bottom"]-=zbeb;data["id"]=zfm.id;zbec.push(data);}
var zbbf=this.zbas();if(zbbf){data=this.zbay();data["left"]-=zbea;data["right"]-=zbea;data["top"]-=zbeb;data["bottom"]-=zbeb;data["id"]=this.zaxw;zbec.push(data);}
this.zmd.zbed("toolbar",JSON.stringify(zbec));};zaxi.prototype.zbee=function(){this.zmd.zog(JSON.stringify({"type":"chrome-home"
}
));};zaxi.prototype.zbef=function(){var zbbg=this.zbaz($("chrome_settings_id"));this.zmd.zog(JSON.stringify({"type":"chrome-settings","left":zbbg["left"],"top":zbbg["top"],"right":zbbg["right"],"bottom":zbbg["bottom"]
}
));};zaxi.prototype.zazb=function(){var self=this;var zaqp=this.createElement("div",{"class":"toolbar-title-V8"}
);var zbeg=this.createElement("div",{"class":"toolbar-title-icon-V8 toolbar-home-icon-V8"}
);zbeg.addEventListener("click",function(){self.zbee();}
,false);zaqp.appendChild(zbeg);var zbeh=this.createElement("div",{"class":"toolbar-title-icon-V8 toolbar-main-settings-icon-V8","id":"chrome_settings_id"
}
);zbeh.addEventListener("click",function(){self.zbef();}
,false);zaqp.appendChild(zbeh);var zalw;var zbei=this.createElement("div",{"class":"toolbar-title-text-V8"}
,[zalw=this.createTextNode("RoboForm")]);this.zmd.zmk("IDS_Cmd_RoboForm_Flat",function(zbdy){zalw.data=zbdy;}
);zaqp.appendChild(zbei);return zaqp;};zaxi.prototype.zazx=function(zazq,zhf,zya){}
;zaxi.prototype.zbaa=function(zazq,zhf,zya){};zaxi.prototype.zazy=function(zazq,zhf,item){var zazn=item["m_nID"];var self=this;var zbej;zhf.appendChild(zbej=this.createElement("div",{"class":"toolbar-minidialog-icon-V8"}
));zbej.addEventListener("click",function(){self.zmd.zog(JSON.stringify({"type":"chrome-minidialog","id":zazn}
));},false);this.zaxy.forEach(function(zbad){zbej.addEventListener(zbad,function(event){event.stopImmediatePropagation();}
,false);});zbej.addEventListener("mouseover",function(){self.css.zayp(zhf,"toolbar-button-V8-hover");}
,false);zbej.addEventListener("mouseout",function(){self.css.zayo(zhf,"toolbar-button-V8-hover");}
,false);};zaxi.prototype.zazw=function(zazq,zhf){}
;zaxi.prototype.zazz=function(zazq,zhf,item){this.zazy(zazq,zhf,item);}
;zaxi.prototype.zbao=function(zbai){var self=this;zbai.addEventListener("paste",function(){self.zban(true,100);}
,false);};zaxi.prototype.zbaj=function(zbai){this.zmd.zmk("IDS_Toolbar_Search_Flat",function(zbdy){zbai.placeholder=zbdy;}
);};zaxi.prototype.zbam=function(zbai){};zaxi.prototype.zazk=function(){return undefined;}
;zaxi.prototype.zazm=function(){return undefined;}
;zaxi.prototype.zbbe=function(data){this.zmd.zog(JSON.stringify(data));}
;zaxi.prototype.zbae=function(event){this.zmg.zbae.call(this,event);}
;zaxi.prototype.zbaw=function(){var self=this;this.zbek(function(zbel){if(!zbel){self.zban(false);}
});};zaxi.prototype.zbav=function(){this.zqe();};zaxi.prototype.zbau=function(zbar){var self=this;this.zbat(function(zgv){if(!zgv){self.zban(true);return;}
zbar.blur();});};zaxi.prototype.zbat=function(zmw){this.zmd.zmk("search-list-visible",function(zgv){zmw(zgv=="true");}
);};zaxi.prototype.zbek=function(zmw){this.zmd.zmk("search-list-focused",function(zgv){zmw(zgv=="true");}
);};zaxi.prototype.zbbj=function(){var zbem=this.zbas();var zbba=this.zbaz(document.body);var zbbb=this.zbbc(zbba);this.zmd.zog(JSON.stringify({"id":this.zaxw,"type":"search"
,"value":zbem.value,"item_rect":this.zbay(),"toolbar_rect":zbba,"toolbar_screen_rect":zbbb}
));};zaxi.prototype.zbbk=function(){this.zmd.zog(JSON.stringify({"id":this.zaxw,"type":"hide-search"
}
));};zaxi.prototype.zbdi=function(event){if(event.screenX===undefined||event.screenY===undefined||event.clientX===undefined||event.clientY===undefined){return;}
if(event.screenX==0||event.screenY==0){return;}this.zaxm=event.screenX-event.clientX;this.zaxn=event.screenY-event.clientY;}
;function zam(){zan("PT: "+zao(zam.caller,arguments));}
function zap(){zan("PT: "+zao(zap.caller,arguments));}
return zaxi;})();
