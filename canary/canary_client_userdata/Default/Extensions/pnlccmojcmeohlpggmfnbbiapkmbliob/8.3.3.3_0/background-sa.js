// Copyright (C) 1999-2017 Siber Systems Inc. All Rights Reserved.
var zrg=(function(){function zrg(){zhl.call(this);this.zmg=zhl.prototype;}
zrg.prototype=Object.create(zhl.prototype);zrg.prototype.zhs=function(zht,zhu,zhv,port,url,zhw){this.zmg.zhs.apply(this,arguments);if(zhv){if(zhw=="complete"){zrh(zht,"",url);}
}};zrg.prototype.zod=function(zee,name,value){};function zam(){zan("RoboFormStandalone: "+zao(zam.caller,arguments));}
function zap(){zan("RoboFormStandalone: "+zao(zap.caller,arguments));}
return zrg;})();function zri(){ziq.prototype.zil=function(zia){zia.zkg=false;this.zki=false;this.zic[zia.zie]=zia;if(zia.zkd){this.zib=zia.zie;this.zja=zia.zja;}
};ziq.prototype.zid=function(zhu,zjn){if(zjn){if(this.zib==zhu){this.zib=undefined;}
delete this.zic[zhu];}else{if(this.zic[zhu]){this.zic[zhu].zkg=true;}
}};ziq.prototype.zim=function(){for(var zft in this.zic){if(!this.zic.hasOwnProperty(zft)){continue;}
if(this.zic[zft].zkg){delete this.zic[zft];}}};ziq.prototype.zku=function(zqp,zqq,zkx,zmw){try{var zqs=zqp&&!zlc;var zqt=zqq&&(!zla||!zlb||(zkx!==undefined&&zkx!=zlb));if(!zqs&&!zqt){zmw(zlc,zla,zlb);return;}
if(zqs){zlc=zqv("identity-resources.json");}if(zqt){zlb=zkx;zla="{}";}
zmw(zlc,zla,zlb);}catch(zhj){zin(zkp,zhj);}};}function zrj(){zik.prototype.update=function(url,zhw){if(url){this.zja=url;if(this.zkd){this.zkf.zja=url;}
}if(zhw){this.zke=zhw;}};zik.prototype.zkn=function(zcm){try{var zjp=undefined;switch(zcm.name){case"status":this.update(zcm.url,zcm.status);if(zcm.status=="complete"&&this.zkd){zrk(this.ziz,this.zie,zcm.name,zcm.url);}
break;case"AutoSave":if(zcm.data){if(!zcm.data.m_sGotoURL||zcm.data.m_sGotoURL==""){zcm.data.m_sGotoURL=this.zkf.zja;}
if(this.zkf&&this.zkf.zqy){zcm.data.favIconUrl=this.zkf.zqy;}
zjp=JSON.stringify(zcm.data);}zrk(this.ziz,this.zie,zcm.name,zjp);break;case"AutoSaveDialogInit":this.zrl=true;zrk(this.ziz,this.zie,zcm.name,zcm);break;case"AutoSaveDialogSaveLogin":case"AutoSaveDialogCreateFolder":case"AutoSaveDialogClosed":case"AutoSaveGetFolderContent":zrk(this.ziz,this.zie,zcm.name,zcm);break;case"GetScreenRect":break;case"SaveForms":if(zcm.data){zcm.data.m_sGotoURL=this.zkf.zja;if(this.zkf&&this.zkf.zqy){zcm.data.favIconUrl=this.zkf.zqy;}
zrk(this.ziz,this.zie,zcm.name,zcm);this.SaveNextUnsavedFrame();break;}
this.SaveNextUnsavedFrame();break;case"FillSubmit":if(this.zkf){this.zkf.zju();}
break;case"FillFormsInWindow_CallContent":if(!zcm.data){return;}
if(!this.zkf){return;}this.zkf.zje.m_Args=zcm.data;this.zkf.zje.zpf=undefined;this.zkf.zpm();return;case"SearchHighlight":if(!zcm.data){return;}
if(!this.zkf){return;}this.zkf.zjk+=zcm.data.highlighted;this.zkf.zjj.zjv();break;case"SearchUnhighlight":if(!this.zkf){return;}
this.zkf.zjj.zjv();break;case"SearchIsHighlighted":if(!zcm.data){return;}
if(!this.zkf){return;}if(zcm.data.highlighted){this.zkf.zji.zlp();function zqz(){roboform.onMessageFromBG({"name":"SearchHighlight","window_id":this.zkf.zjg,"highlighted":0
}
);}this.zkf.zjj.zjq({browser:this.zkf,zjr:"SearchUnhighlight",zls:zqz}
);this.zkf.zjj.zjv();return;}this.zkf.zji.zjv();break;case"UpdateSelectionSearch":if(!zcm.data){return;}
if(!this.zkf){return;}if(zcm.data.text!=""){this.zkf.zjl.zlp();roboform.onMessageFromBG({"name":"UpdateSelectionSearch","window_id":this.zkf.zjg,"text":zcm.data.text}
);}this.zkf.zjl.zjv();break;default:break;}}catch(zhj){zin(zkp,zhj);}
};}function zrm(){zjc.prototype.zjv=function(data){var zia=this.zlg.zjv(function(zjx){if(zif){if(!zjx.zkd){return false;}
}if(!zjx.zkb()){return false;}if(zjx.zrl){return false;}
if(!zjx.zkd&&zrc(zjx.zja)){return false;}return true;}
);if(zia){var zrd=true;if(this.zlk){zrd=this.zlk(zia);}
if(this.zlj&&zrd){zia.zii({"name":this.zlj,"frame_id":zia.zie,"context":this.zli,"data":data}
);}return true;}else{if(this.zlm){this.zlm();}if(this.zll){var zjt=this.zll;var zht=this.zkf.ziz;var zre=this.zkf.zib;var zjs=JSON.stringify(this.zli);this.zln=window;var self=this;this.zlo=zqk(function(){zrk(zht,zre,zjt,zjs);self.zlp();}
,1);}else{this.zlp();}return false;}};}function zrn(){zrm();zrj();zri();}
function zrh(zro,zrp,url){var zrq=zrr.zrs(url);setTimeout(function zrt(){if(!zrq){return;}
zru(zro,url);},2000);if(!zrq){return;}var zct=zrr.zrv(zrw);var zcu=zrr.zrv(zrx);if(zrr.zry(zrz)&&(!zct||!zcu)){var zjp=zsa[zro];if(zjp){setTimeout(function(){zsb(zro);}
,1500);}}var zhy=zle.zhz(zro);if(!zhy){return;}var zia=zhy.zic[zrp];if(!zia){return;}
function zsc(zsd){var zse={};zse[zsf]=JSON.stringify(zsd);var zsg=JSON.stringify(zse);zsh().zsi(zsg,function(zsj){var zsk=JSON.parse(zsj);var zdq=zsk[zsl];if(zdq){return;}
var zsm=zsk[zsn][zsf];var zsd=JSON.parse(zsm);var zso=zsk[zsp];var data=zsq(null,zso,true,false,false,false,true,true,true);var args=JSON.stringify(data);zia["FillFormsInFrame"](args);}
);}if(zrr.zry(zsr)){var zss=zst.zsu(url);if(zss&&Array.isArray(zss)&&zss.length==1){zsc(zss[0]);return;}
var zsv={};zsv["url"]=url;zsw(zsv,function zsx(zsy){zss=zsy;zst.zsz(url,zss);if(zss&&Array.isArray(zss)&&zss.length==1){zsc(zss[0]);}
},function zta(ztb,ztc){});}}function ztd(message){var zte=zle.zhq;for(var zht in zte){if(!zte.hasOwnProperty(zht)){continue;}
var ztf=zte[zht];if(!ztf){return;}var zhu=ztf.ztg;if(zhu){var zia=ztf.zic[zhu];if(!zia){continue;}
zia.zii(message);}}}function zsb(zro){var zhy=zle.zhz(zro);if(!zhy){return;}
var zhu=zhy.zib;var zia=zhy.zic[zhu];if(!zia){return;}
zia.zii({"name":"ShowAutosaveBar"});}function zth(){return new Promise(function(resolve,reject){var zti=zst.ztj();if(zti){resolve(zti);return;}
var zsv={"path":"","type":ztk["RfItemType_Folder"],"bDeep":true}
;ztl(zsv,function(zcs){zst.ztm(zcs);resolve(zcs);}
,function(ztb,ztc,ztn){var zdq=new Error();zdq["description"]=ztc;zdq["code"]=ztb;reject(zdq);}
);});}function zto(url){return new Promise(function(resolve,reject){var ztp=zst.zsu(url);if(ztp){resolve(ztp);return;}
var zsv={"url":url,"bExcludeShared":true,"type":[ztk["RfItemType_Login"],ztk["RfItemType_Bookmark"]]
}
;zsw(zsv,function(zss){zst.zsz(url,zss);resolve(zss);}
,function(ztb,ztc){var zdq=new Error();zdq["description"]=ztc;zdq["code"]=ztb;reject(zdq);}
);});}function ztq(){return new Promise(function(resolve,reject){zsh().ztr(function(){resolve();}
,function(zts){var zdq=new Error();zdq["description"]=zts[ztt];zdq["code"]=zts[ztu];reject(zdq);}
);});}function ztv(message,zht){var zhy=zle.zhz(zht);if(!zhy){return;}
var zhu=zhy.ztg;var zia=zhy.zic[zhu];if(!zia){return;}
zia.zii(message);}function ztw(url){var ztx=zty(url,false,false,true);if(!ztx||ztx==="(file)"||ztx==="(unparseable)"){ztx="Passcard";}
return ztx;}function ztz(zht){var zjp=zsa[zht];if(!zjp){return;}
var zua=JSON.parse(zjp);var url=zua["m_sMatchURL"];var zub=false;if(zua["m_bForcedSave"]===true){if(zua["m_bPressKey"]===true){zub=zde("sa-auto-save","rf_shift_enter_forces_autosave",true);}
else{zub=zde("sa-auto-save","rf_alt_click_forces_autosave",true);}
}if(!zsh().zuc){return;}ztq().then(function zud(){return Promise.all([zth(),zto(url)]);}
).then(zue).catch(function zuf(zdq){ztv({"name":"AutoSaveDialogInitResponse","error":zdq}
,zht);});function zue(zug){var zcs=zug[0];var zss=zug[1];var ztx=ztw(zua["m_sMatchURL"]);var zcq=[zuh(ztx,zss)];var zui=zua["possible_login_name"];if(zui&&zui.length<=20){var zuj=zuk(ztx+"("+zui+")");if(zuj){zcq.push(zuh(zuj,zss));}
}var zul=zuk(zua["title"]);if(zul){zcq.push(zuh(zul,zss));}
var zct=zrr.zrv(zrw);var zcu=zrr.zrv(zrx);var zcm={"name":"AutoSaveDialogInitResponse","name_suggestions":zcq,"replace_items":zss,"folders":zcs,"disableLogins":zct,"disableBookmarks":zcu,"bForcedSave":zub,"sDomainUrl":zty(zua["m_sMatchURL"],true,true,true)}
;ztv(zcm,zht);}}function zum(zro,zrp,zjp){var item=zsa[zro];var data={}
;data[zun]=JSON.parse(item);data[zuo]=zjp[zup]?ztk["RfItemType_Bookmark"]:ztk["RfItemType_Login"];var zuq=RfapiJS["utils"].zur(data[zuo]);data[zus]=zjp[zsf][zus]+zuq;var zut={}
;zut[zun]={};zut[zus]=zjp[zsf][zus]+zuq;zut[zuo]=zjp[zup]?ztk["RfItemType_Bookmark"]:ztk["RfItemType_Login"];zut[zun][RfapiJS.ITEM_NOTE_PROP]=data[zun]["m_sNote"];zut[zun][RfapiJS.ITEM_GOTOURL_PROP]=data[zun]["m_sGotoURL"];zut[zun][zuu]=true;zut[zun][zuu]=true;zut[zun][zuv]=zsh().zuw;if(zut[zuo]==ztk["RfItemType_Login"]){zut[zun][RfapiJS.ITEM_MATCHURL_PROP]=data[zun]["m_sMatchURL"];zut[zun][RfapiJS.ITEMDATA_FIELDS_PROP]=[];var zux=data[zun]["m_lFields"];for(var zcw=0;zcw<zux.length;zcw++){var zuy=zux[zcw];var zuz={}
;if(typeof zuy["m_sName"]!="undefined"){zuz["n"]=zuy["m_sName"];}
if(typeof zuy["m_sCaption"]!="undefined"){zuz["c"]=zuy["m_sCaption"];}
if(typeof zuy["m_bDefaultValue"]!="undefined"){zuz["d"]=zuy["m_bDefaultValue"];}
if(typeof zuy["m_nOrderIndex"]!="undefined"){zuz["i"]=zuy["m_nOrderIndex"];}
if(typeof zuy["m_field_type"]!="undefined"){zuz["t"]=zuy["m_field_type"];}
if(typeof zuy["m_sValue"]!="undefined"){zuz["v"]=zuy["m_sValue"];}
if(typeof zuy["m_sId"]!="undefined"){zuz["id"]=zuy["m_sId"];}
zut[zun][RfapiJS.ITEMDATA_FIELDS_PROP].push(zuz);}
}zva(zut,function zsx(){var zvb=zst.zvc(zut[zus]);var zvd=zst.zve();var zvf=zst.zvg(zvd,zvb,zvh);if(zvf){delete zvf["c"];}
zst.zvi();if(zut[zuo]==ztk["RfItemType_Login"]){zst.zvj(data[zun]["m_sGotoURL"]);}
delete zsa[zro];ztv({"name":"AutoSaveDialogSaveLoginResponse"
}
,zro);},function zta(zvk){var zdq=new Error();zdq["description"]=zvk["Description"];zdq["code"]=zvk["Code"];ztv({"name":"AutoSaveDialogSaveLoginResponse","error":zdq}
,zro);});}function zbx(zro,zrp,data){var zsg=JSON.stringify({"path":data["path"]}
);zsh().CreateFolder(zsg,function(zsj){var zsj=JSON.parse(zsj);var message={"name":"AutoSaveDialogCreateFolderResponse","path":data["path"],"folder_name":data["folder_name"]
}
;var zvk=zsj[zsl];if(zvk){var zdq=new Error();zdq["description"]=zvk["Description"];zdq["code"]=zvk["Code"];message["error"]=zdq;}
ztv(message,zro);});}function zrk(zro,zrp,zvl,zjp){switch(zvl){case"status":zrh(zro,zrp,zjp);break;case"EndSaveForms":zvm(zro,zrp);break;case"SaveForms":zvn(zro,zrp,zjp);break;case"AutoSave":if(zjp){var zua=JSON.parse(zjp);var zea=zde("sa-auto-save","rf_show_autosavebar",true);var zub=false;if(zua["m_bForcedSave"]===true){if(zua["m_bPressKey"]===true){zub=zde("sa-auto-save","rf_shift_enter_forces_autosave",true);}
else{zub=zde("sa-auto-save","rf_alt_click_forces_autosave",true);}
}if(!zea&&!zub){break;}if(zea&&!zub){var zeo=zde("sa-auto-save","blocking",[]);var zvo=zty(zua["m_sMatchURL"],true,true,true);if(zeo.indexOf(zvo)>=0){break;}
}zsa[zro]=zjp;setTimeout(function(){zsb(zro);},0);}
break;case"AutoSaveDialogInit":var zhy=zle.zhz(zro);if(!zhy){return;}
zhy.ztg=zrp;ztz(zro);break;case"AutoSaveDialogSaveLogin":zum(zro,zrp,zjp);break;case"AutoSaveDialogCreateFolder":zbx(zro,zrp,zjp);break;case"AutoSaveGetFolderContent":var zvp={"path":zjp["path"],"type":[ztk["RfItemType_Login"],ztk["RfItemType_Bookmark"]]}
;zsh().zvq(JSON.stringify(zvp),function(zvr){zvr=JSON.parse(zvr);if(zvr&&zvr["items"]){var zvs=Array.from(zvr["items"],function(zvt){return zvt["path"]
}
);ztv({"name":"AutoSaveGetFolderContentResponse","data":zvs}
,zro);}});break;case"AutoSaveDialogClosed":delete zsa[zro];var zhy=zle.zhz(zro);if(!zhy){return;}
delete zhy.ztg;break;}}function zvu(url,zvv){try{if(zad||zag){if(zvv){chrome.tabs.create({"url":url}
,null);}else{zvw(null,function(zvx){chrome.tabs.update(zvx.id,{"url":url}
);});}}else if(zif){if(zvv==undefined){zvv=false;}
if(zvv==true){var tab=safari.application.activeBrowserWindow.openTab();tab.url=url;}
else{var tab=safari.application.activeBrowserWindow.activeTab;tab.url=url;}
var zvy={};zvy.url=url;setTimeout(function(){zvz.zwa(zvy);}
,300);}else if(zac){if(zvv){opera.extension.tabs.create({"url":url,"focused":true}
);}else{var zwb=opera.extension.tabs.getFocused();zwb.update({"url":url}
);}}else if(zae){if(zvv){window.external.mxGetRuntime().create("mx.browser").tabs.newTab({url:url,zwc:true,position:'last'
}
);}else{var zwb=window.external.mxGetRuntime().create("mx.browser").tabs.getCurrentTab();zwb.zwd(url);}
}else if(zaf){if(zvv){browser.tabs.create({"url":url}
,null);}else{zvw(null,function(tab){var zht=tab.id;browser.tabs.update(zht,{"url":url}
);});}}}catch(zhj){zwe("EXCEPTION in Bg_OpenPage:"+zhj.toString(),zwf);}
}function zru(zwg,zwh){function zwi(args){zvw(null,function zwj(tab){var zht=tab.id;var zhy=zle.zhz(zht);if(!zhy){return;}
var zhu=zhy.zib;var zia=zhy.zic[zhu];if(!zia){return;}
zia["FillFormsInFrame"](args);});}var zwk={};zst.zwl(zwk);var zwm=zwk.zwm;var zwn=zwk[zwo];var zwp=zwk.zwp;if(!zwm){return;}
if(!RfapiJS["utils"].zwq(zwp,zwh)){return;}var zwr=zwk[zsp];var data=zsq(null,zwr,true,false,false,zwn,true,true,true);var args=JSON.stringify(data);zwi(args);zst.zws();}
function zsq(zwt,zwu,zwv,zww,zwx,zwy,zwz,zxa,zxb,zxc){var data={}
;data["bActuallyFill"]=zwv;data["m_nStopAfterMatchingFields"]=zww;data["bSubmit"]=zwy;data["bFillInvisibleFields"]=zxb;data["m_bUseEnglishSelectValues"]=zxa;data["m_bCountFields"]=zwx;data["m_bFillNonemptyFields"]=!zwz;data["m_bHighLightFields"]=zde("sa-settings","rf_highlight_filledflds_chk");if(zwu){data["m_pPasscard"]=zxd(zwu);}
else if(zwt){data["m_pIdentity"]=zxe(zwt,zxc);}else{return undefined;}
return data;}function zxd(zwu){var zxf={};zxf["m_sGotoURL"]=zwu[RfapiJS.ITEM_GOTOURL_PROP]?zwu[RfapiJS.ITEM_GOTOURL_PROP]:"";zxf["m_sMatchURL"]=zwu[RfapiJS.ITEM_MATCHURL_PROP]?zwu[RfapiJS.ITEM_MATCHURL_PROP]:"";var zux=[];var zxg=zwu[RfapiJS.ITEMDATA_FIELDS_PROP];if(Array.isArray(zxg)){for(var zcw=0;zcw<zxg.length;zcw++){var zxh=zxg[zcw];var zuy={}
;zuy["m_sName"]=zxh[RfapiJS.ITEM_NAME_PROP]?zxh[RfapiJS.ITEM_NAME_PROP]:"";zuy["m_nOrderIndex"]=zxh["i"]?zxh["i"]:"";zuy["m_field_type"]=zxh[RfapiJS.FIELD_TYPE_PROP]?zxh[RfapiJS.FIELD_TYPE_PROP]:"";zuy["m_bDefaultValue"]=zxh[RfapiJS.ITEM_ISDEFAULT_PROP]?zxh[RfapiJS.ITEM_ISDEFAULT_PROP]:"";zuy["m_sCaption"]=zxh[RfapiJS.FIELD_CAPTION_PROP]?zxh[RfapiJS.FIELD_CAPTION_PROP]:"";zuy["m_sId"]=zxh["id"]?zxh["id"]:"";zuy["m_sValue"]=zxh[RfapiJS.FIELD_VALUE_PROP]?zxh[RfapiJS.FIELD_VALUE_PROP]:"";zux.push(zuy);}
}zxf["m_lFields"]=zux;return zxf;}function zxe(zwt,zxi){var zft={}
;var zxj=zwt[RfapiJS.ID_OPTIONS_PROP];var zxk={};for(var zxl in zxj){if(!zxj.hasOwnProperty(zxl)){continue;}
zxk[zxl]=zxj[zxl];}zft["m_mOptionValues"]=zxk;var zxm=zwt[RfapiJS.ID_GROUPS_PROP];var zxn=[];if(Array.isArray(zxm)){for(var zcw=0;zcw<zxm.length;zcw++){var zxo=zxm[zcw];var zxc=zxo[RfapiJS.ID_INSTANCES_PROP];var zxp={}
;if(Array.isArray(zxc)&&zxc.length>0){var zxq=zxc[0];if(!zxq[RfapiJS.ITEM_ISDEFAULT_PROP]){for(var zgg=1;zgg<zxc.length;zgg++){var zxr=zxc[zgg];if(zxr[RfapiJS.ITEM_ISDEFAULT_PROP]){zxq=zxr;break;}
}}var zxs=zxo[RfapiJS.ITEM_NAME_PROP];zxp["m_sName"]="Main";zxp["m_sType"]=zxs;if(zxc.length>1&&zxi){for(var zxt=0;zxt<zxi.length;zxt++){var zxu=zxi[zxt];for(var name in zxu){if(zxs==name){for(var zxv=0;zxv<zxc.length;zxv++){var zxw=zxc[zxv];if(zxu[name]==zxw[RfapiJS.ITEM_NAME_PROP]){zxq=zxw;break;}
}}}}}var zxg=zxq[RfapiJS.ITEMDATA_FIELDS_PROP];var zux=[];if(Array.isArray(zxg)&&zxg.length>0){for(var zxx=0;zxx<zxg.length;zxx++){var zxy=zxg[zxx];var zuy={}
;zuy["m_sName"]=zxy[RfapiJS.ITEM_NAME_PROP];zuy["m_sValue"]=zxy[RfapiJS.FIELD_VALUE_PROP];if(zxp["m_sType"]=="Custom"&&zxy["o"]){zuy["m_sMatches"]=zxy["o"];}
zux.push(zuy);}}zxp["m_lFields"]=zux;zxn.push(zxp);}
}}zft["m_lGroups"]=zxn;return zft;}function zxz(zya,zss){for(var zcw=0;zcw<zss.length;++zcw){var zxt=zss[zcw];var zyb=zxt[zus];zyb=zyb.substring(zyb.lastIndexOf("/")+1);zyb=zyb.substr(0,zyb.lastIndexOf("."));if(zya.toLowerCase()==zyb.toLowerCase()){return true;}
}return false;}function zuh(name,zss){var zyc=zss.length+1;var zyd=name;for(var zep=0;zep<zyc;++zep){if(zep>0){zyd=name+" - "+zep;}
if(!zxz(zyd,zss)){break;}}return zyd;}function zvn(zht,zhu,zjp){if(!zjp){return;}
var data=zjp["data"];if(!data){return;}var zhy=zle.zhz(zht);if(!zhy){return;}
var zia=zhy.zic[zhu];if(!zia){return;}zye=!zye?{}:zye;if(zia.zkd){zye["m_sGotoURL"]=data["m_sGotoURL"];zye["m_sMatchURL"]=data["m_sMatchURL"];zye["title"]=data["title"];zye["m_sNote"]=data["m_sNote"];}
var zux=data["m_lFields"];if(zux){if(!zye["m_lFields"]){zye["m_lFields"]=[];}
for(var zcw=0;zcw<zux.length;zcw++){zye["m_lFields"].push(zux[zcw]);}
}}function zvm(zht,zhu,zyf){if(!zyg||!zye){return;}
if(!zye["m_sGotoURL"]){var zhy=zle.zhz(zht);if(zhy){var zia=zhy.zic[zhu];if(zia){zye["m_sGotoURL"]=zye["m_sMatchURL"]=zia.zja;}
}}var data=zye;function zyh(zcs,zyi){try{var zso=zyj(data,"/"+zyi,ztk["RfItemType_Login"]);var zyk={}
;zyk["data"]=zso;zyk[zyl]=zcs;zyk["name"]=zyi;zyk["title"]=data["title"];var zsg=JSON.stringify(zyk);zyg(zsg);zyg=undefined;zye=undefined;}
catch(zhj){}}function zym(zss){var name=zuh(ztw(url),zss);var ztp=zst.ztj();if(ztp){zyh(ztp,name);return;}
var zsv={};zsv[zus]="";zsv[zuo]=ztk["RfItemType_Folder"];zsv["bDeep"]=true;ztl(zsv,function zsx(zcs){zst.ztm(zcs);zyh(zcs,name);}
,function zta(ztb,ztc,ztn){});}var url=data["m_sMatchURL"];var ztp=zst.zsu(url);if(ztp){zym(ztp);return;}
var zsv={};zsv["url"]=url;zsv["bExcludeShared"]=true;zsw(zsv,zym,function zta(ztb,ztc){}
);}function zyj(data,zyn,zyo){var zuq=RfapiJS["utils"].zur(zyo);var zut={}
;zut[zun]={};zut[zus]=zyn+zuq;zut[zuo]=zyo;zut[zun][RfapiJS.ITEM_NOTE_PROP]=typeof(data["m_sNote"])=="undefined"?"":data["m_sNote"];zut[zun][RfapiJS.ITEM_GOTOURL_PROP]=data["m_sGotoURL"];if(zut[zuo]==ztk["RfItemType_Login"]){zut[zun][RfapiJS.ITEM_MATCHURL_PROP]=data["m_sMatchURL"];zut[zun][RfapiJS.ITEM_GOTOURL_PROP]=data["m_sGotoURL"];zut[zun][RfapiJS.ITEMDATA_FIELDS_PROP]=[];var zux=data["m_lFields"];if(zux){for(var zcw=0;zcw<zux.length;zcw++){var zuy=zux[zcw];var zuz={}
;if(typeof zuy["m_sName"]!="undefined"){zuz["n"]=zuy["m_sName"];}
if(typeof zuy["m_sCaption"]!="undefined"){zuz["c"]=zuy["m_sCaption"];}
if(typeof zuy["m_bDefaultValue"]!="undefined"){zuz["d"]=zuy["m_bDefaultValue"];}
if(typeof zuy["m_nOrderIndex"]!="undefined"){zuz["i"]=zuy["m_nOrderIndex"];}
if(typeof zuy["m_field_type"]!="undefined"){zuz["t"]=zuy["m_field_type"];}
if(typeof zuy["m_sValue"]!="undefined"){zuz["v"]=zuy["m_sValue"];}
if(typeof zuy["m_sId"]!="undefined"){zuz["id"]=zuy["m_sId"];}
zut[zun][RfapiJS.ITEMDATA_FIELDS_PROP].push(zuz);}
}}return zut;}var zsa={};var zyg=undefined;var zye=undefined;function zyp(zmw){zyg=zmw;zvw(null,function(tab){var zht=tab.id;var zhy=zle.zhz(zht);if(!zhy){return;}
zye=undefined;zhy["SaveFormsInWindow"]();window.setTimeout(function(){zvm(zht,zhy.zib,true);}
,4000);});}function zyq(zyr){zsh().zuw=zyr;var zys=zde("sa-settings","rf_cachemp_onbrowser_close_chk");zdv("sa-user","rf_masterpwd",zys?zyt(zyr,zsh().zuc):"");}
function zyu(zyr){zsh().zyv=zyr;var zys=zde("sa-settings","rf_cachemp_onbrowser_close_chk");zdv("sa-user","rf_accpwd",zys?zyt(zyr,zsh().zuc):"");}

