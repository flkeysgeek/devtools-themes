// Copyright (C) 1999-2016 Siber Systems Inc. All Rights Reserved.
var zmb=(function(){function zmb(){zhl.call(this);this.zmc=undefined;this.zmd=undefined;this.zme=false;this.zmf="normal";this.zmg=zhl.prototype;}
zmb.prototype=Object.create(zhl.prototype);zmb.prototype.zmh=function(zmi,zmj){try{var self=this;this.zmd.zmk(["version","product-version"],function(zml){var zmm=zml["version"];self.zmc=zml["product-version"];if(zmm!=self.zmc){var zcm="RoboForm installation is incomplete.\n"
+"\n"
+"Versions of the components do not match:\n"
+"Plugin version: "+zmm+"\n"
+"RoboForm version: "+self.zmc+"\n"
+"\n"
+"Please close the browser and reinstall RoboForm\n";if(typeof(alert)!=undefined){alert(zcm);}
}zmn(function(zmo){try{var zmp=zmo.match(new RegExp(".[^\\s]*",""));zmo=zmp?zmp[0]:zmo;zmo=zmo.replace(new RegExp("\\.","g"),"-");var zmq=zmr(zmo,self.zmc,"-");if(zmq>0){zmq=zmr(self.zmc,zms,"-");if(zmq<0){zmt(zmu);}
}else if(zmq<0){zmj();}}catch(zhj){}zmi();});});}catch(zhj){zin(zio);}
};zmb.prototype.zmv=function(zmw){if(!this.zmd){return;}
this.zmd.zmx(function(zgv){var zmy=zgv["timestamp"];var zmz=zgv["uptodate"];if(zmz){if(zna==zmy){zmw(true);return;}
}else{}zna=zmy;zmw(false);});};zmb.prototype.zij=function zip(zht){var zhy=this.zmg.zij.call(this,zht);var zgv;if(zif){var znb=znc(znd);zgv=this.zmd.zne(zht,zhy,znb.znf,znb.zng);}
else{zgv=this.zmd.zne(zht,zhy);}if(typeof(zgv)=="string"){if(zgv=="E_INVALIDARG"){var znb=znc(znd);var self=this;window.setTimeout(function(){self.zmd.zne(zht,zhy,znb.znf,znb.zng);this.zjw(function(zjx){self.zmd.zil(this.ziz,zjx.zie,zjx.zkd,zjx.zja,zjx.zke,zjx);}
);},1000);return;}delete this.zhq[zgv];}return zhy;}
;zmb.prototype.ziu=function(zht){this.zmg.ziu.call(this,zht);this.zmd.znh(zht);}
;zmb.prototype.zni=function znj(zht,znk,ziw,znl){try{this.zmd.znm(zht,znk);}
catch(zhj){}};zmb.prototype.znn=function(event){var zno=event["detail"];var zee=zno["section"];var name=zno["name"];var value=zno["value"];if(zee!="nm-settings"){return;}
switch(name){case"toolbar":value=value==true;this.zhm=value;this.znp(value,false);break;case"popup-windows-toolbar":value=value==true;this.znp(value,true);break;case"popup":value=value==true;this.znq(value);break;default:return;}
};zmb.prototype.znp=function znr(zez,zns){if(zns){this.zmd.znt(zez);}
else{this.zmd.znu(zez);}if(!zns){this.znv(zez);}};zmb.prototype.znq=function znw(znx){if(this.zmd&&typeof(this.zmd.zny)!="undefined"){this.zmd.zny(znx);}
};zmb.prototype.znz=function(){if(zde("nm-settings","popup")&&(zoa||this.zmf=="remote-service-missing"||this.zmf=="login-required")){this.zmd.zob();}
else{this.zhm=!this.zhm;this.znp(this.zhm,false);zdv("nm-settings","toolbar",this.zhm);zoc().zod("nm-settings","toolbar",this.zhm);}
};zmb.prototype.zoe=function zof(){if(this.zho){this.zmd.zog(JSON.stringify({"type":"close-popup"}
));}this.zho=false;};zmb.prototype.znv=function(zoh){}
;zmb.prototype.ziy=function(ziw){this.zmg.ziy.call(this,ziw);try{this.zmd.zoi();}
catch(zhj){}this.zmd=undefined;};zmb.prototype.zod=function(zee,name,value){var event=new CustomEvent("putSetting");event.initCustomEvent("putSetting",true,true,{"section":zee,"name":name,"value":value}
);zoj().dispatchEvent(event);};function zam(){zan("RoboFormNM: "+zao(zam.caller,arguments));}
function zap(){zan("RoboFormNM: "+zao(zap.caller,arguments));}
return zmb;})();function zok(){this.zol={zom:0,zon:1,zoo:2,zop:3,zoq:4,zor:5,zos:6,zot:7,zou:8,zov:9,zow:10,zox:11
}
;this.zoy=undefined;this.m_Args={};this.zoz=[];this.zpa={zpb:0,zpc:1,zpd:2}
;this.zpe=0;this.zpf=undefined;this.zpg=undefined;}
function zph(){ziq.prototype.zil=function(zia){zia.zkg=false;this.zki=false;this.zic[zia.zie]=zia;if(zia.zkd){this.zib=zia.zie;this.zja=zia.zja;}
zoc().zmd.zil(this.ziz,zia.zie,zia.zkd,zia.zja,zia.zke,zia);}
;ziq.prototype.zid=function(zhu,zjn){if(zjn){if(this.zib==zhu){this.zib=undefined;}
delete this.zic[zhu];}else{if(this.zic[zhu]){this.zic[zhu].zkg=true;}
}try{zoc().zmd.zid(this.ziz,zhu,zjn);}catch(zhj){}
};ziq.prototype.zpi=function(){for(var zhu in this.zic){if(!this.zic.hasOwnProperty(zhu)){continue;}
if(this.zic[zhu]){this.zic[zhu].zki=true;}}};ziq.prototype.zim=function(){for(var zft in this.zic){if(!this.zic.hasOwnProperty(zft)){continue;}
if(this.zic[zft].zkg){try{zoc().zmd.zid(this.ziz,zft,true);}
catch(zhj){}delete this.zic[zft];}}};ziq.prototype.OnShowToolbar=function(zez){this.zpj(zez);}
;ziq.prototype.ShowToolbar=function(zez){this.zpj(zez);}
;ziq.prototype["ClosePopup"]=function(){zle.zoe();}
;ziq.prototype.zpk=function(){var znb=znc(znd);zoc().zmd.onMessage(this.ziz,this.zib,"safari_update_tab",znb.znf,znb.zng);}
;ziq.prototype.OnUpdateMatchBar=function(){zpl(this.ziz,this.zjg);}
;ziq.prototype.zpm=function(){var zpn=this.zje;var args=zpn.m_Args;var zpo=this.zjf;while(1){switch(zpn.zoy){case zpn.zol.zom:if(!zpo.zjv()){zpn.zoy=zpn.zol.zot;}
else{zpn.zoy=zpn.zol.zon;}break;case zpn.zol.zon:zpn.zoy=zpn.zol.zoo;if(args.m_pPasscard){args.m_TestPhase1.m_sMainFrameURL=this.zic[this.zib].zja;args.m_TestPhase1.m_sCurrentFrameURL=this.zic[zpn.zpe].zja;args.m_TestPhase1.m_sMatchURL=args.m_pPasscard.m_sMatchURL;this.FillFormsInWindow_CallDll("Phase1_CheckURLs");return;}
else{args.m_enResult=zpn.zpa.zpb;}break;case zpn.zol.zoo:if(args.m_enResult==zpn.zpa.zpc){zpn.zoy=zpn.zol.zom;}
else{zpn.zoy=zpn.zol.zop;}break;case zpn.zol.zop:var zjx=this.zic[zpn.zpe];if(zpn.m_Args.m_pIdentity&&!zjx.zkh){this.zku(true,false,undefined,function(zkv,zkw,zkx){zjx.zkh=true;zpn.zpf=zkv;zpn.zoy=zpn.zol.zoq;zjx.zii({"name":"FillFormsInWindow_CallContent","data":zpn}
);});}else{zpn.zoy=zpn.zol.zoq;zjx.zii({"name":"FillFormsInWindow_CallContent","data":zpn}
);}return;case zpn.zol.zoq:zpn.zoy=zpn.zol.zos;this.FillFormsInWindow_CallDll("Phase2_CheckFillingAndShowWarning");return;case zpn.zol.zos:if(args.m_enResult!=zpn.zpa.zpb){}
else{zpn.zoz.push(zpn.zpe);}zpn.zoy=zpn.zol.zom;break;case zpn.zol.zot:zpn.zoy=zpn.zol.zou;this.FillFormsInWindow_CallDll("Phase3_OverallTestAndWarnings");return;case zpn.zol.zou:if(args.m_enResult!=zpn.zpa.zpb){zpn.zoy=zpn.zol.zox;}
else{zpn.zoy=zpn.zol.zov;zpo.zjq({browser:this,zlt:zpn.zoz,zjr:"FillFormsInWindow_CallContent"
}
);}break;case zpn.zol.zov:if(!zpo.zjv(zpn)){zpn.zoy=zpn.zol.zow;}
else{return;}break;case zpn.zol.zow:zpn.zoy=zpn.zol.zox;this.FillFormsInWindow_CallDll("Phase4_Submit",args);return;case zpn.zol.zox:this.zje=undefined;this.zjf=undefined;return;default:zpn.zoy=zpn.zol.zox;break;}
}};ziq.prototype.zkz=function(zkr){if(this.zje){}var zpn=this.zje=new zok();var zpo=this.zjf=new zjc();zpn.m_Args=JSON.parse(zkr);if(zpn.m_Args.m_pIdentity){var self=this;this.zku(false,true,zpn.m_Args.m_sLanguage,function(zkv,zkw,zkx){zpn.zpg=zkw;zpp(self);}
);}else{zpp(this);}function zpp(self){{zpo.zjq({browser:self,zlr:function zpq(zia){zpn.zpe=zia.zie;return false;}
,});}zpn.zoy=zpn.zol.zom;self.zpm();}};ziq.prototype.FillFormsInWindow_CallDll=function(zpr){var zps={"phase":zpr,"args":this.zje.m_Args}
;zoc().zmd.onMessage(this.ziz,this.zib,"FillFormsInWindow_CallDll",JSON.stringify(zps));}
;ziq.prototype.zpt=function zpu(zpv){this.zpw();this.zjh=zpv;zoc().zmd.onMessage(this.ziz,this.zib,"FirefoxBAOnPromptOpened","");}
;ziq.prototype.zpw=function zpx(){if(this.zjh){this.zjh.zpy();}
this.zjh=undefined;};ziq.prototype.zpz=function zqa(zqb){this.zjk=0;var self=this;function zqc(){function zqd(){roboform.onMessageFromBG({"name":"SearchHighlight","window_id":self.zjg,"highlighted":self.zjk}
);}self.zjj.zjq({browser:self,zjr:"SearchHighlight",zls:zqd,zjs:zqb}
);self.zjj.zjv();}this.zji.zjq({browser:this,zjr:"SearchIsHighlighted",zls:zqc}
);this.zji.zjv();};ziq.prototype.zqe=function zqf(){this.zjl.zjq({browser:this,zjr:"UpdateSelectionSearch",}
);this.zjl.zjv();};ziq.prototype.zqg=function zqh(){var data={}
;data["requested_url"]=this.zjh["GetUrl"]();data["password"]=this.zjh["GetField"]("password1");data["login"]=this.zjh["GetField"]("login");return data;}
;ziq.prototype.FirefoxBASave=function zqi(){if(!this.zjh){return;}
var zqj=this.zqg();var self=this;zqk(function(){zoc().zmd.onMessage(self.ziz,self.zib,"FirefoxBASave",JSON.stringify(zqj));}
,1);};ziq.prototype.FirefoxBAFindFill=function zql(zjp){if(!this.zjh){return;}
var data=zjz(zjp);var zqj=this.zqg();for(var zqm in data){if(!data.hasOwnProperty(zqm)){continue;}
zqj[zqm]=data[zqm]
}var self=this;zqk(function(){zoc().zmd.onMessage(self.ziz,self.zib,"FirefoxBAFindFill",JSON.stringify(zqj));}
,1);};ziq.prototype.FirefoxBAFill=function zqn(zjp){if(!this.zjh){return;}
var data=zjz(zjp);for(var zqm in data){if(!data.hasOwnProperty(zqm)){continue;}
if(zqm=="submit"&&data[zqm]==true){this.zjh["Accept"]();continue;}
var zqo=data[zqm];this.zjh["PutField"](zqm,zqo);}}
;ziq.prototype.zku=function(zqp,zqq,zkx,zmw){try{var zqr=zoc().zmd&&zoc().zmd.zmk;var zqs=zqp&&!zlc;var zqt=zqq&&(!zla||!zlb||(zkx!==undefined&&zkx!=zlb));if(!zqs&&!zqt){zmw(zlc,zla,zlb);return;}
if(zqr){var zqu=[];if(zqs){zqu.push("filler-rules");}
if(zqt){zqu.push("filler-localization");}zoc().zmd.zmk(zqu,function(zgv){var zkv=zgv["filler-rules"];if(zkv){zlc=zkv;}
var zkw=zgv["filler-localization"];if(zkw){zlb=zkx;zla=zkw;}
zmw(zlc,zla,zlb);});}else{if(zqs){zlc=zqv("rf_f1.js");}
if(zqt){zlb=zkx;zla="{}";}zmw(zlc,zla,zlb);}}catch(zhj){zin(zkp,zhj);}
};}function zqw(){zik.prototype.update=function(url,zhw){if(url){this.zja=url;if(this.zkd){this.zkf.zja=url;}
}if(zhw){this.zke=zhw;}zoc().zmd.zqx(this.ziz,this.zie,url,zhw);}
;zik.prototype.zkn=function(zcm){try{var zjp=undefined;var self=this;switch(zcm.name){case"status":if(zag&&zcm.status=="complete"&&this.zkf.zja&&this.zkf.zja.substr(0,6)=="about:"){zqk(function(){if(!self.zkg){self.update(zcm.url,zcm.status);}
},2000);}else{this.update(zcm.url,zcm.status);}break;case"AutoSave":if(zcm.data){if(!zcm.data.m_sGotoURL||zcm.data.m_sGotoURL==""){zcm.data.m_sGotoURL=this.zkf.zja;}
if(this.zkf&&this.zkf.zqy){zcm.data.favIconUrl=this.zkf.zqy;}
zjp=JSON.stringify(zcm.data);}zoc().zmd.onMessage(this.ziz,this.zie,zcm.name,zjp);break;case"GetScreenRect":zjp=JSON.stringify(zcm.data);zoc().zmd.onMessage(this.ziz,this.zie,zcm.name,zjp);break;case"SaveForms":if(zcm.data){zcm.data.m_sGotoURL=this.zkf.zja;if(this.zkf&&this.zkf.zqy){zcm.data.favIconUrl=this.zkf.zqy;}
zjp=JSON.stringify(zcm.data);zoc().zmd.onMessage(this.ziz,this.zie,zcm.name,zjp);break;}
this.SaveNextUnsavedFrame();break;case"FillSubmit":zoc().zmd.onMessage(this.ziz,this.zie,zcm.name,zcm.data);if(this.zkf){this.zkf.zju();}
break;case"FillFormsInWindow_CallContent":if(!zcm.data){return;}
if(!this.zkf){return;}this.zkf.zje.m_Args=zcm.data;this.zkf.zje.zpf=undefined;this.zkf.zpm();return;case"SearchHighlight":if(!zcm.data){return;}
if(!this.zkf){return;}this.zkf.zjk+=zcm.data.highlighted;this.zkf.zjj.zjv();break;case"SearchUnhighlight":if(!this.zkf){return;}
this.zkf.zjj.zjv();break;case"SearchIsHighlighted":if(!zcm.data){return;}
if(!this.zkf){return;}if(zcm.data.highlighted){this.zkf.zji.zlp();function zqz(){roboform.onMessageFromBG({"name":"SearchHighlight","window_id":this.zkf.zjg,"highlighted":0
}
);}this.zkf.zjj.zjq({browser:this.zkf,zjr:"SearchUnhighlight",zls:zqz}
);this.zkf.zjj.zjv();return;}this.zkf.zji.zjv();break;case"UpdateSelectionSearch":if(!zcm.data){return;}
if(!this.zkf){return;}if(zcm.data.text!=""){this.zkf.zjl.zlp();roboform.onMessageFromBG({"name":"UpdateSelectionSearch","window_id":this.zkf.zjg,"text":zcm.data.text}
);}this.zkf.zjl.zjv();break;default:if(zcm.data){if(typeof(zcm.data)=="string"){zjp=zcm.data;}
else{zjp=JSON.stringify(zcm.data);}}zoc().zmd.onMessage(this.ziz,this.zie,zcm.name,zjp);break;}
}catch(zhj){zin(zkp,zhj);}};zik.prototype.FillFormsInWindow_CallDll=function(zkr){if(!this.zkf){return;}
var zra=this.zkf.zje.m_Args.m_pIdentity;this.zkf.zje.m_Args=JSON.parse(zkr);this.zkf.zje.m_Args.m_pIdentity=zra;this.zkf.zpm();}
;zik.prototype["ClosePopup"]=function(){zle.zoe();}
;zik.prototype["ScheduleGetScreenRect"]=function(){this.zii({"name":"GetScreenRect"}
);};}function zrb(){zjc.prototype.zjv=function(data){var zia=this.zlg.zjv(function(zjx){if(zif){if(!zjx.zkd){return false;}
}if(!zjx.zkb()){return false;}if(!zjx.zkd&&zrc(zjx.zja)){return false;}
return true;});if(zia){var zrd=true;if(this.zlk){zrd=this.zlk(zia);}
if(this.zlj&&zrd){zia.zii({"name":this.zlj,"frame_id":zia.zie,"context":this.zli,"data":data}
);}return true;}else{if(this.zlm){this.zlm();}if(this.zll){var zjt=this.zll;var zht=this.zkf.ziz;var zre=this.zkf.zib;var zjs=JSON.stringify(this.zli);this.zln=window;var self=this;this.zlo=zqk(function(){zoc().zmd.onMessage(zht,zre,zjt,zjs);self.zlp();}
,1);}else{this.zlp();}return false;}};}function zrf(){zrb();zqw();zph();}

