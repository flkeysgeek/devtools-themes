// Copyright (C) 1999-2016 Siber Systems Inc. All Rights Reserved.
var zhl=(function(){function zhl(){this.zhm=zhn();this.zho=false;this.zhp=false;this.zhq={}
;this.zhr={};}zhl.prototype.zhs=function(zht,zhu,zhv,port,url,zhw){try{var zhx=zhu;var zhy=this.zhz(zht);var zia=undefined;if(zhy){if(zhv&&zhy.zib){zhu=zhy.zib;}
zia=zhy.zic[zhu];if(zia){zhy.zid(zia.zie,false);if(zhv&&zif){zhy.zig(false);}
if(zhv&&zag){zhy.zig(false);}zia.zih(zhu,zht,port,zhy,zhv,url,"initial");if(zia.zie!=zhx){zia.zii({"name":"SetID","data":zhu}
);}}}else{zhy=this.zij(zht);}if(!zia){zia=new zik();zia.zih(zhu,zht,port,zhy,zhv,url,"initial");}
zhy.zil(zia);if(zhv){zhy.zim();}zia.update(url,zhw);zia.zii("ping");if(this.zhp){zia.zii("ActivateTesterMode");}
}catch(zhj){zin(zio,zhj);}};zhl.prototype.zij=function zip(zht){var zhy=new ziq(zht);this.zhq[zht]=zhy;return zhy;}
;zhl.prototype.zhz=function(zht){return this.zhq[zht];}
;zhl.prototype.zir=function zis(zht,url){var zhy=this.zhz(zht);if(zhy){}
else{zhy=this.zij(zht);zhy.zit(url);}return zhy;};zhl.prototype.ziu=function(zht){delete this.zhq[zht];}
;zhl.prototype.ziv=function(ziw,zht){if(zht===undefined){delete this.zhr[ziw];}
else{this.zhr[ziw]=zht;}};zhl.prototype.zix=function(ziw){return this.zhr[ziw];}
;zhl.prototype.ziy=function(ziw){};function zam(){zan("RoboFormBase: "+zao(zam.caller,arguments));}
function zap(){zan("RoboFormBase: "+zao(zap.caller,arguments));}
return zhl;})();function ziq(zht){this.ziz=zht;this.zic={}
;this.zib=undefined;this.zja=undefined;this.zjb=new zjc();this.zjd=new zjc();this.zje=undefined;this.zjf=undefined;this.zjg=undefined;this.zjh=undefined;this.zji=new zjc();this.zjj=new zjc();this.zjk=undefined;this.zjl=new zjc();}
ziq.prototype.zit=function(url){var zhu="top"+zjm().toString();var zia=new zik();zia.zih(zhu,this.ziz,undefined,this,true,url,undefined);this.zil(zia);}
;ziq.prototype.zig=function(zjn){for(var zft in this.zic){if(!this.zic.hasOwnProperty(zft)){continue;}
this.zid(zft,zjn);}};ziq.prototype.update=function(url,zhw){if(url){this.zja=url;}
var zjo=this.zic[this.zib];if(zjo){zjo.update(url,zhw);}
};ziq.prototype["FillSubmit"]=function(zjp){this.zjd.zjq({browser:this,zjr:"FillSubmit",zjs:JSON.parse(zjp),zjt:"EndFillSubmit"
}
);this.zju();};ziq.prototype.zju=function(){this.zjd.zjv();}
;ziq.prototype.SaveFormsInWindow=function(){this.zjb.zjq({browser:this,zjr:"SaveForms",zjt:"EndSaveForms"
}
);this.SaveNextUnsavedFrame();};ziq.prototype.SaveNextUnsavedFrame=function(){this.zjb.zjv();}
;ziq.prototype.ClearFields=function(){this.zjw(function(zjx){zjx.zii({"name":"ClearFields"}
);});};ziq.prototype.SetFields=function(zjp){var zjy=zjz(zjp);this.zjw(function(zjx){zjx.zii({"name":"SetFields","data":zjy}
);});};ziq.prototype.ResetFields=function(){this.zjw(function(zjx){zjx.zii({"name":"ResetFields"}
);});};ziq.prototype.zjw=function(zka){for(var zhu in this.zic){if(!this.zic.hasOwnProperty(zhu)){continue;}
var zjx=this.zic[zhu];if(!zjx||!zjx.zkb()){continue;}
if(zka(zjx)){return true;}}return false;};function zik(){this.zkc=undefined;this.zie=undefined;this.zkd=false;this.ziz=undefined;this.zja=undefined;this.zke=undefined;this.zkf=undefined;this.zkg=false;this.zkh=false;this.zki=false;this.zkj=undefined;this.zkk="";}
zik.prototype.zih=function(zhu,zht,port,zhy,zhv,url,zhw){this.detach();this.zie=zhu;this.zkc=port;this.zkd=zhv;this.ziz=zht;this.zja=url;this.zke=zhw;this.zkf=zhy;this.zkg=false;this.zkh=false;this.zki=false;if(!port){return;}
var self=this;function zkl(){self.zhi();}port.onDisconnect.addListener(zkl);function zkm(zcm){self.zkn(zcm);}
port.onMessage.addListener(zkm);this.zko=function(){delete this.zko;port.onDisconnect.removeListener(zkl);if(zhv){}
else{port.onMessage.removeListener(zkm);}};};zik.prototype.detach=function(){if(typeof(this.zko)=="function"){this.zko();}
this.zkc=undefined;};zik.prototype.zhi=function(){try{this.detach();this.zkh=false;this.zkf.zid(this.zie,false);if(zif&&this.zkd){this.zkf.zig(false);}
}catch(zhj){zin(zkp,zhj);}};zik.prototype.Navigate=function(url,zkq){this.zkf.Navigate(url,zkq);}
;zik.prototype["FillFormsInFrame"]=function(zkr){try{var data=zjz(zkr);var zcm={"name":"FillFormsInFrame","data":data}
;if(data.m_pIdentity){var zks=!this.zkh;var zkt=data.m_sLanguage&&(this.m_sLanguage!=data.m_sLanguage);var self=this;this.zkf.zku(zks,zkt,data.m_sLanguage,function(zkv,zkw,zkx){if(zks){zcm.zkv=zkv;self.zkh=true;}
if(zkt){zcm.zky=zkw;self.m_sLanguage=data.m_sLanguage;}
self.zii(zcm);});}else{this.zii(zcm);}return true;}
catch(zhj){zin(zkp,zhj);return false;}};zik.prototype.FillFormsInWindow=function(zkr){if(!this.zkf){}
else{this.zkf.zkz(zkr);}};var zla=undefined;var zlb=undefined;var zlc=undefined;zik.prototype.GoFill0=function(){this.zii({"name":"GoFill0"}
);return true;};zik.prototype.GoFill1=function(data){try{if(!this.zkj||!this.zkk||this.zkk!=data){this.zkj=undefined;this.zkj=JSON.parse(data);this.zkk=data;}
this.zii({"name":"GoFill1","data":this.zkj});return true;}
catch(zhj){zin(zkp,zhj);return false;}};zik.prototype.GoFill2=function(data){try{if(!this.zkj||!this.zkk||this.zkk!=data){this.zkj=undefined;this.zkj=JSON.parse(data);this.zkk=data;}
this.zii({"name":"GoFill2","data":this.zkj});return true;}
catch(zhj){zin(zkp,zhj);return false;}};zik.prototype.AutoFill=function(data){this.zii({"name":"AutoFill"}
);};zik.prototype.FillRfVer=function(data){try{var zld=JSON.parse(data);this.zii({"name":"FillRfVer","data":zld}
);return true;}catch(zhj){return false;}};zik.prototype["FillSubmit"]=function(zjp){this.zkf["FillSubmit"](zjp);}
;zik.prototype.SaveFormsInWindow=function(){this.zkf.SaveFormsInWindow();}
;zik.prototype.SaveNextUnsavedFrame=function(){this.zkf.SaveNextUnsavedFrame();}
;zik.prototype["ActivateTesterMode"]=function(){zle.zhp=true;}
;zik.prototype.ClearFields=function(){this.zkf.ClearFields();}
;zik.prototype.SetFields=function(zjp){this.zkf.SetFields(zjp);}
;zik.prototype.ResetFields=function(){this.zkf.ResetFields();}
;zik.prototype.zkb=function(){if(this.zkc){return true;}
else{return false;}};zik.prototype.zii=function(message){if(!this.zkb()){return false;}
try{this.zkc.postMessage(message);}catch(zhj){return false;}
return true;};zik.prototype.CallStartPage=function(zlf){if(this.zki){return;}
this.zii({"name":"CallStartPage","data":zlf});};zik.prototype.OnUpdateMatchBar=function(){this.zkf.OnUpdateMatchBar();}
;function zjc(){this.zlg=new zlh();this.init();}zjc.prototype.init=function(){this.zkf=undefined;this.zli=undefined;this.zlj=undefined;this.zlk=undefined;this.zll=undefined;this.zlm=undefined;this.zln=undefined;this.zlo=undefined;this.zlg.zlp();}
;zjc.prototype.zjq=function(zlq){this.zkf=zlq.browser;this.zli=zlq.zjs;this.zlk=zlq.zlr;this.zlj=zlq.zjr;this.zll=zlq.zjt;this.zlm=zlq.zls;if(zlq.zlt){var zlu=[];for(var zep in zlq.zlt){zlu.push(this.zkf.zic[zlq.zlt[zep]]);}
this.zlg.zjq(zlu);}else{this.zlg.zjq(this.zkf.zic);}
};zjc.prototype.zlp=function(){if(this.zlo){zlv(this.zlo,this.zln);}
this.init();};var zlw=1;function zjm(){return zlw++;}
var zin=function zlx(zcm,zly,zlz){var zhk=zcm;if(zly){zhk+="\n\nError: "+zly;}
if(zlz&&typeof(alert)!=undefined){alert(zhk);}zma();}
;
