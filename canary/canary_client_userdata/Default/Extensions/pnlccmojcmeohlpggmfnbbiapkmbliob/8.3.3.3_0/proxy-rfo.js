function zcnp(){this.zuc=undefined;this.zyv=undefined;this.zuw=undefined;this.zarx=RfapiJS["accountMode"];this.zcnq=false;}
zcnp.prototype.zcnr=function(){var zbih=zde("sa-user","rf_username");this.zuc=zbih;this.zyv=zcns(zde("sa-user","rf_accpwd"),zbih);this.zuw=zcns(zde("sa-user","rf_masterpwd"),zbih);}
;zcnp.prototype.zaqc=function(){var zcnt=zde("internal","active-server")+"/login";var zxf={}
;zxf[RfapiJS.ITEM_GOTOURL_PROP]=zcnt;zxf[RfapiJS.ITEM_MATCHURL_PROP]=zcnt;var zux=[];var zcnu={}
;zcnu[RfapiJS.ITEM_NAME_PROP]="username";zcnu["i"]=0;zcnu[RfapiJS.FIELD_TYPE_PROP]=1;zcnu[RfapiJS.ITEM_ISDEFAULT_PROP]=false;zcnu[RfapiJS.FIELD_CAPTION_PROP]="";zcnu["id"]="username";zcnu[RfapiJS.FIELD_VALUE_PROP]=this.zuc;zux.push(zcnu);var zcnv={}
;zcnv[RfapiJS.ITEM_NAME_PROP]="password";zcnv["i"]=0;zcnv[RfapiJS.FIELD_TYPE_PROP]=2;zcnv[RfapiJS.ITEM_ISDEFAULT_PROP]=false;zcnv[RfapiJS.FIELD_CAPTION_PROP]="";zcnv["id"]="password";zcnv[RfapiJS.FIELD_VALUE_PROP]=this.zyv;zux.push(zcnv);zxf[RfapiJS.ITEMDATA_FIELDS_PROP]=zux;zst.zws();zst.zcnw(true,true,zcnt,"",1,zxf);zvu(zcnt,true);}
;zcnp.prototype.ztr=function(zmw,zdq){if(!this.zuc){var zcnx={}
;zcnx[zsl]={};zcnx[zsl][ztu]=401;zcnx[zsl][ztt]="";zdq(zcnx);return;}
var self=this;var zsv={};zsv[zart]=self.zuc;zcny(zsv,function zsx(zcnz){if(zmw){zmw();}
if(self.zuw){zqk(function(){zcoa(zcnz,function zcob(zcoc){}
,function zcod(zcoc){});},2000);}},function zta(ztb,ztc,zcoe){var zcof={}
;zcof[ztu]=ztb;zcof[ztt]=ztc;zcof["params"]=zsv;if(zcoe&&zcoe["Channel"]){zcof["params"]["Channel"]=zcoe["Channel"];}
if(zdq){zdq(zcof);}});};zcnp.prototype.zarr=function(){return this.zuc;}
;zcnp.prototype.zcbu=function(){return this.zuw;};zcnp.prototype.zbij=function(){return this.zyv;}
;zcnp.prototype.zarz=function(zyr){if(zaqe["getAccountMode"]()==zarx["MULTIFILE"]){return{"result":true}
;}var zcog=true;var zdn="";var zbvp=zyr.length;var zcoh=zrr.zrv(zacq);var zcoi=zrr.zrv(zacr);if(zbvp<zcoh||zbvp>zcoi){zdn=zafi(zaof("IDS_MasterPass_New_Length_Error"),zcoh,zcoi);zcog=false;}
var zcoj=zyr.trim();if(!zcoj){zdn+=(zdn==""?"":"<br/>")+zaof("IDS_MasterPass_New_BlanksOnly_Error");zcog=false;}
var zcok=0;var zcol=0;var zcom=0;for(var zcw=0;zcw<zbvp;zcw++){if(zyr[zcw]>='0'&&zyr[zcw]<='9'){zcom++;}
if(!zaff(zyr[zcw])){continue;}if(zafg(zyr[zcw])){zcok++;}
if(zafh(zyr[zcw])){zcol++;}}var zcon=zrr.zrv(zacw);var zcoo=zrr.zrv(zacx);var zcop=zrr.zrv(zact);var zcoq=zrr.zrv(zacs);if(zcok<zcon){zdn+=(zdn==""?"":"<br/>")+zafi(zaof("IDS_MasterPass_New_UpperCaseChars_Error"),zcon);zcog=false;}
if(zcol<zcoo){zdn+=(zdn==""?"":"<br/>")+zafi(zaof("IDS_MasterPass_New_LowerCaseChars_Error"),zcoo);zcog=false;}
if(zcom<zcop){zdn+=(zdn==""?"":"<br/>")+zafi(zaof("IDS_MasterPass_New_DigitChars_Error"),zcop);zcog=false;}
var zcor=zbvp-zcom;if(zcor<zcoq){zdn+=(zdn==""?"":"<br/>")+zafi(zaof("IDS_MasterPass_New_NonNumChars_Error"),zcoq);zcog=false;}
if(zcog){return{"result":zcog}}return{"result":zcog,"reason":zdn}
;};zcnp.prototype.zasb=function(zars,zcos,zcot,zcou){var self=this;var zse=JSON.parse(zars);var zcov=zse[zart];zcow(zse,function zsx(){zaqe["GetAccountInfo"](zcov,function(zcox){if(!zcox["syncAllowed"]){zcot({"code":zcoy,"description":self.zcoz(zcox)}
);return;}var zcpa=zcox["oneFile"];zrr.zawa(zcox["policies"]);zrr.zavr=zcox["passwordExpired"]?zcox["passwordExpired"]:false;zrr.zavs=zcox["forcePasswordChange"]?zcox["forcePasswordChange"]:false;zcpa=typeof(zcpa)=="undefined"?false:zcpa;zaqe["setAccountMode"](zcpa?zarx["OFS"]:zarx["MULTIFILE"]);var zsg=JSON.stringify({}
);zcos(zsg);},function(zcpb){var zsg=JSON.stringify(zcpb);zcot(zsg);}
,true);},function zta(ztb,ztc,ztn){var zyk={};zyk[zsl]={}
;zyk[zsl][ztu]=ztb;zyk[zsl][ztt]=ztc;zyk["params"]=ztn;var zsg=JSON.stringify(zyk);zcot(zsg);}
,zcou)};zcnp.prototype.zcoz=function(data){if(data["suspended"]){return zaof("account_suspended")+" "+zaof("contact_administrator");}
if(data["enterpriseLicenseExpired"]){return zaof("enterprise_license_expired")+" "+zaof("contact_administrator");;}
if(data["enterpriseLicenseExceeded"]){return zaof("enterprise_license_exceeded")+" "+zaof("contact_administrator");;}
return zaof("sync_not_allowed")+" "+zaof("contact_administrator");;}
;zcnp.prototype.zarw=function(zars,zmw){var self=this;var zse=JSON.parse(zars);var zcov=zse[zart];var zyr=zse[zaru];var zcpc=zse[zbyu];zcpd(zse,function zsx(){zst.zcpe();zaqe["GetAccountInfo"](zcov,function(zcox){if(!zcox["syncAllowed"]){var zafr={}
;zafr[zsl]={"code":zcoy,"description":self.zcoz(zcox)}
;zmw(JSON.stringify(zafr));return;}var zcpa=zcox["oneFile"];zrr.zawa(zcox["policies"]);zrr.zavr=zcox["passwordExpired"]?zcox["passwordExpired"]:false;zrr.zavs=zcox["forcePasswordChange"]?zcox["forcePasswordChange"]:false;zcpa=typeof(zcpa)=="undefined"?false:zcpa;zaqe["setAccountMode"](zcpa?zarx["OFS"]:zarx["MULTIFILE"]);var zsg=JSON.stringify({}
);zmw(zsg);},function(zcpb){var zsg=JSON.stringify(zcpb);zmw(zsg);}
,true);},function zta(ztb,ztc,ztn){var zyk={};zyk[zsl]={}
;zyk[zsl][ztu]=ztb;zyk[zsl][ztt]=ztc;zyk["params"]=ztn;var zsg=JSON.stringify(zyk);zmw(zsg);}
);};zcnp.prototype.zbip=function(zmw){zcpf(function zsx(){var zsg=JSON.stringify({}
);zmw(zsg);},function zta(ztb,ztc){var zyk={};zyk[zsl]={}
;zyk[zsl][ztu]=ztb;zyk[zsl][ztt]=ztc;var zsg=JSON.stringify(zyk);zmw(zsg);}
);};zcnp.prototype.zbuf=function(zars,zmw){var zse=JSON.parse(zars);var zcpg=typeof zse["boneFile"]=="undefined"?true:!zse["boneFile"];var self=this;zcph(zse,function zsx(){if(zcpg){var zyk={}
;zyk[zuv]=zse[zbue];self.zcpi(zyk,function zcpj(zcpk){var zyk={}
;zyk[zsn]=zse;if(zcpk[zsl]){zyk[zsl]={};zyk[zsl][ztu]=zcpk[zsl]["Code"];zyk[zsl][ztt]=zcpk[zsl]["Description"];}
var zsg=JSON.stringify(zyk);zmw(zsg);});}else{var zcak={}
;zcak[zsn]=zse;var zcal=JSON.stringify(zcak);zmw(zcal);}
},function zta(zcpb){var zyk={};zyk[zsl]={};zyk[zsn]=zse;zyk[zsl][ztu]=zcpb["Code"];var zcpl="";if(zcpb["oException"]){var zcpm=zcpb["oException"];if(zcpm["status"]==zsl){var zux=zcpm["fields"];if(zux){var zuy=zux[0];if(zuy["error"]){zcpl+="  "+zuy["error"];}
else{if(zuy["exists"]){zcpl+=zuy["name"]+"  '"+zuy["value"]+"'  already exists";}
else{zcpl+=" Field '"+zuy["name"]+"' with value='"+zuy["value"]+"'  exists="+zuy["exists"];}
}}}zyk[zsl][ztt]=zcpl;}else{zyk[zsl][ztt]=zcpb["Description"];}
var zsg=JSON.stringify(zyk);zmw(zsg);});};zcnp.prototype.zcac=function(zars,zmw){try{var zse=JSON.parse(zars);if(zse[zun][RfapiJS.ITEMDATA_FIELDS_PROP]){var zadx=[];for(var zck in zse[zun][RfapiJS.ITEMDATA_FIELDS_PROP]){zadx.push(zse[zun][RfapiJS.ITEMDATA_FIELDS_PROP][zck]);}
zse[zun][RfapiJS.ITEMDATA_FIELDS_PROP]=zadx;}zva(zse,function zsx(){zst.zvi();var zvb=zst.zvc(zse[zus]);var zvd=zst.zve();var zvf=zst.zvg(zvd,zvb,zvh);var item=zst.zcpn(zse[zus],zse[zuo],false);if(zvf&&!item){delete zvf["c"];}
if(zse[zuo]==ztk["RfItemType_Login"]){zst.zvj();}if(zse[zuo]==ztk["RfItemType_Identity"]){zst.zcpo();}
var zyk={};zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);}
,function zta(zcpb){var zyk={};zyk[zsl]={};zyk[zsl][ztu]=zcpb["Code"];zyk[zsl][ztt]=zcpb["Description"];zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);}
);}catch(zhj){}};zcnp.prototype.zsi=function(zars,zmw){try{var zse=JSON.parse(zars);var zsm=zse[zsf];var zcab=zse[zanu];var zbtu=zse[zuv];var zcpp=zse["cachepwd"];var zsd=JSON.parse(zsm);var zsv={}
;zsv[zsf]=zsd;zsv[zanu]=zcab;zsv[zuv]=zbtu;zsv["cachepwd"]=zcpp;zcpq({"context":zsv}
,function zsx(zso){var zcpr=JSON.parse(zsm);zcps.zcpt(zcpr);var zyk={}
;zyk[zsn]=zse;zyk[zsp]=zso;var zsg=JSON.stringify(zyk);zmw(zsg);}
,function zta(ztb,ztc,ztn){var zyk={};zyk[zsl]={};zyk[zsl][ztu]=ztb;zyk[zsl][ztt]=ztc;zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);}
);}catch(zhj){}};zcnp.prototype.zbrp=function(zars,zmw){var zse=JSON.parse(zars);var zsm=zse[zun];var zsd=JSON.parse(zsm);var zsv={}
;zsv[zun]=zsd;zcpu(zsv,function zsx(){var zcpr=JSON.parse(zsm);zst.zcpv(zcpr);zcps.zcpw(zcpr);var zsg=JSON.stringify({}
);zmw(zsg);},function zta(ztb,ztc,ztn){var zyk={};zyk[zsl]={}
;zyk[zsl][ztu]=ztb;zyk[zsl][ztt]=ztc;zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);}
);};zcnp.prototype.zbrz=function(zars,zmw){var zse=JSON.parse(zars);var zbrw=zse["oldPath"];var zcpx=zse["oldType"];var zbry=zse["newPath"];var zcpy=zse["newType"];var zsv={}
;zsv["oldPath"]=zbrw;zsv["oldType"]=zcpx;zsv["newPath"]=zbry;zsv["newType"]=zcpy;zcpz(zsv,function zsx(){var zvd=zst.zve();var zcqa=zst.zvc(zbrw);var zcqb=zst.zvg(zvd,zcqa,zvh);if(zcqb){delete zcqb["c"];}
zst.zvi();var zcqc=zst.zvc(zbry);if(zcqc!=zcqa){var zcqd=zst.zvg(zvd,zcqc,zvh);if(zcqd){delete zcqd["c"];}
}if(zcpx==ztk["RfItemType_Identity"]){zst.zcpo();}
if(zcpx==ztk["RfItemType_Folder"]){zst.zcqe();}if(zcpx==ztk["RfItemType_Login"]){var zcqf={}
;zcqf["path"]=zbrw;zcqf["type"]=zcpx;zcps.zcpw(zcqf);zst.zvj();}
if(zcpy==ztk["RfItemType_Login"]){var zcqg={};zcqg["path"]=zbry;zcqg["type"]=zcpy;zcps.zcpt(zcqg);}
var zsg=JSON.stringify({});zmw(zsg);},function zta(ztb,ztc,ztn){var zyk={}
;zyk[zsl]={};zyk[zsl][ztu]=ztb;zyk[zsl][ztt]=ztc;zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);}
);};zcnp.prototype.CreateFolder=function(zars,zmw){var zse=JSON.parse(zars);var path=zse[zus];var zsv={}
;zsv[zus]=path;zcqh(zsv,function zsx(){zst.zcqe();var zvb=zst.zvc(path);var zvd=zst.zve();var zvf=zst.zvg(zvd,zvb,zvh);if(zvf){delete zvf["c"];}
var zyk={};zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);}
,function zta(ztb,ztc,ztn){var zyk={};zyk[zsl]={};zyk[zsl][ztu]=ztb;zyk[zsl][ztt]=ztc;zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);}
);};zcnp.prototype.zvq=function(zars,zmw){try{var zse=JSON.parse(zars);var path=zse[zus];var zbkn=zse[zuo];var zcqi=JSON.stringify(zbkn);var zcqj=zst.zcqk(path);if(zcqj){var zss=zst.zcql(path,zbkn);var zyk={}
;zyk[zyl]=zss;zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);return;}
var zsv={};zsv[zus]=path;ztl(zsv,function zsx(zss){zst.zcqm(zss,path);var zgh=[];var zcqn=JSON.parse(zcqi);for(var zcw=0;zcw<zss.length;zcw++){var item=zss[zcw];if(zze(zcqn,item[zuo])){zgh.push(item);}
}var zyk={};zyk[zyl]=zgh;zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);}
,function zta(ztb,ztc,ztn){var zyk={};zyk[zsl]={};zyk[zsl][ztu]=ztb;zyk[zsl][ztt]=ztc;zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);}
);}catch(zhj){}};zcnp.prototype.zbvx=function(zars,zmw){var zse=JSON.parse(zars);var ztp=zst.zbvx();if(ztp){var zcak={}
;zcak[zyl]=ztp;zcak[zsn]=zse;var zcal=JSON.stringify(zcak);zmw(zcal);return;}
var zsv={};zsv[zus]=zvh;zsv[zuo]=ztk["RfItemType_Identity"];zsv["bDeep"]=true;zsv["bExcludeShared"]=true;ztl(zsv,function zsx(zss){zst.zcqo(zss);var zyk={}
;zyk[zyl]=zss;zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);}
,function zta(ztb,ztc,ztn){var zyk={};zyk[zsl]={};zyk[zsl][ztu]=ztb;zyk[zsl][ztt]=ztc;zse["accountMode"]=zaqe["getAccountMode"]();zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);}
);};zcnp.prototype.ztj=function(zars,zmw){var zse=JSON.parse(zars);var ztp=zst.ztj();if(ztp){var zcak={}
;zcak[zyl]=ztp;zcak[zsn]=zse;var zcal=JSON.stringify(zcak);zmw(zcal);return;}
var zsv={};zsv[zus]=zvh;zsv[zuo]=ztk["RfItemType_Folder"];zsv["bDeep"]=true;ztl(zsv,function zsx(zcs){zst.ztm(zcs);var zyk={}
;zyk[zyl]=zcs;zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);}
,function zta(ztb,ztc,ztn){var zyk={};zyk[zsl]={};zyk[zsl][ztu]=ztb;zyk[zsl][ztt]=ztc;zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);}
);};zcnp.prototype.zbxg=function(zse,zcqp){function zwj(tab){try{var url=tab.url;if(!zzg(url)){var zyk={}
;zyk[zyl]=[];zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zcqp(zsg);return;}
var ztp=zst.zsu(url);if(ztp){var zcak={};zcak[zyl]=ztp;zcak[zsn]=zse;var zcal=JSON.stringify(zcak);zcqp(zcal);return;}
var zsv={};zsv["url"]=url;zsv["bExcludeShared"]=true;zcqq(zsv,function zsx(zss){zst.zsz(url,zss);var zyk={}
;zyk[zyl]=zss;zyk[zsn]=zse;for(var zcw=0;zcw<zss.length;zcw++){var item=zss[zcw];}
var zsg=JSON.stringify(zyk);zcqp(zsg);},function zta(ztb,ztc){zst.zsz(url,[]);var zyk={}
;zyk[zsl]={};zyk[zsl][ztu]=ztb;zyk[zsl][ztt]=ztc;zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zcqp(zsg);}
);}catch(zhj){}}zvw(null,zwj);};zcnp.prototype.zbjh=function(zars,zmw){function zwi(args){zvw(null,function zwj(tab){var zht=tab.id;var zhy=zoc().zhz(zht);if(!zhy){return;}
var zhu=zhy.zib;var zia=zhy.zic[zhu];if(!zia){return;}
if(!zrr.zrs(zia.zja)){return;}zia["FillFormsInFrame"](args);if(zmw){var zsg=JSON.stringify({}
);zmw(zsg);}});}function zcqr(path){var zbqo;var zfr=path.split('/');if(zfr.length>0){zbqo=zfr[zfr.length-1];var zcqs=zbqo.lastIndexOf('.');if(zcqs>=0){zbqo=zbqo.substr(zcqs+1);}
}return zbqo;}var zse=JSON.parse(zars);var zsd=zse[zsf];var zcqt=zse[zbjd];var zcqu=zse[zbje];var zcqv=zse[zwo];var zcqw=zse[zbjf];var zbjc=typeof zse[zbjg]=="undefined"?false:zse[zbjg];var zxi=zse["instances"];var path=zsd[zus];var zcda=zsd[zuo];if(!zse[zuv]){zse[zuv]=this.zuw;}
var zft=null;var zxf=null;var zbqo=zcqr(path);var zso=zst.zcpn(zsd[zaed],zsd[zaec],true);zcps.zcpt(zsd);zst.zws();function zcqx(zwr){if(!zcqt){if(zbqo=="rfp"){zxf=zwr}
else{zft=zwr;}var data=zsq(zft,zxf,true,false,false,zcqv,zbjc,true,true,zxi);var args=JSON.stringify(data);zwi(args);}
else{var zcnt=zwr[RfapiJS.ITEM_GOTOURL_PROP];if(!zrr.zrs(zcnt)){return;}
zst.zcnw(zcqu,zcqv,zcnt,path,zcda,zwr);if(zmw){var zsg=JSON.stringify({}
);zmw(zsg);}zvu(zcnt,zcqw);}}if(zso){zcqx(zso["b"]);}
else{zcpq({"context":zse},zcqx,function zta(ztb,ztc){var zyk={}
;zyk[zsl]={};zyk[zsl][ztu]=ztb;zyk[zsl][ztt]=ztc;zyk[zsn]=zse;if(zmw){var zsg=JSON.stringify(zyk);zmw(zsg);}
});}};zcnp.prototype.zaug=function(){zcqy.zblw();return zcqy.zcqz();}
;zcnp.prototype.zatn=function(){return zcqy.zcqz();}
;zcnp.prototype.zatx=function(zyr){zcqy.zcpt(zyr);return zcqy.zcqz();}
;zcnp.prototype.zbpx=function(zse,zmw){var zss=zcps.zcqz();var zyk={}
;zyk[zyl]=zss;zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);}
;zcnp.prototype.zbll=function(zse,zmw){zcps.zblw();var zss=zcps.zcqz();var zyk={}
;zyk[zyl]=zss;zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);}
;zcnp.prototype.zbqf=function(){if(this.zcnq){return;}
this.zcnq=true;var ztp=zst.zcra();if(ztp){this.zcnq=false;return;}
var zsv={};zsv[zus]="";zsv["bDeep"]=true;zsv[zuo]=[ztk["RfItemType_Login"],ztk["RfItemType_Bookmark"],ztk["RfItemType_Identity"],ztk["RfItemType_Contact"],ztk["RfItemType_Safenote"]];var self=this;ztl(zsv,function zsx(zss){zst.zcrb(zss);self.zcnq=false;}
,function zta(ztb,ztc,ztn){self.zcnq=false;});};zcnp.prototype.zbqg=function(){this.zcnq=false;}
;zcnp.prototype.zbbj=function(zars,zmw){var zse=JSON.parse(zars);var zgv=[];if(!zde("sa-search","rf_search_roboform_chk")){zmw(JSON.stringify(zgv));return;}
var zcrc=zse[zbuw].toLowerCase();var ztp=zst.zcra();if(typeof ztp!="undefined"){zgv=this.zcrd(ztp,zcrc);}
var zsg=JSON.stringify(zgv);zmw(zsg);};zcnp.prototype.zcrd=function(ztp,zcrc){var zgv=[];for(var zcw=0;zcw<ztp.length;zcw++){var item=ztp[zcw];var name=zaea(item);name=name.toLowerCase();if(name.lastIndexOf(zcrc)==-1){continue;}
if((name.indexOf(zcrc)!=0)&&zawd.zcre(name,zcrc,' ')==false&&zawd.zcre(name,zcrc,'.')==false&&zawd.zcre(name,zcrc,'-')==false&&zawd.zcre(name,zcrc,'_')==false){continue;}
zgv.push(item);}return zgv;};zcnp.prototype.zbux=function(zcrf,zmw){try{var zse=JSON.parse(zcrf);var zasf=zse[zbuw];if(!zde("sa-search","rf_search_roboform_chk")){var zyk={}
;zyk[zyl]=[];zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);return;}
var ztp=zst.zcra();if(ztp){var zcak={};zcak[zyl]=this.zcrd(ztp,zasf);zcak[zsn]=zse;var zcal=JSON.stringify(zcak);zmw(zcal);return;}
var zsv={};zsv[zbuw]=zasf;zcrg(zsv,function zsx(zss){var zyk={}
;zyk[zyl]=zss;zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);}
,function zta(ztb,ztc,ztn){var zyk={};zyk[zsl]={};zyk[zsl][ztu]=ztb;zyk[zsl][ztt]=ztc;zyk[zsn]=zse;var zsg=JSON.stringify(zyk);zmw(zsg);}
);}catch(zhj){}};zcnp.prototype.zast=function(zsv){var data={}
;data["bActuallyFill"]=true;data["m_nStopAfterMatchingFields"]=false;data["bSubmit"]=false;data["bFillInvisibleFields"]=true;data["m_bFillNonemptyFields"]=true;data["m_bUseEnglishSelectValues"]=true;data["m_bCountFields"]=false;var zxf={}
;zxf["m_sGotoURL"]="";zxf["m_sMatchURL"]="";var zux=[];var zuy={}
;zuy["m_sName"]="Password$";zuy["m_nOrderIndex"]=0;zuy["m_field_type"]=2;zuy["m_bDefaultValue"]=false;zuy["m_sCaption"]="";zuy["m_sId"]="";zuy["m_sValue"]=zsv[zuv];zux.push(zuy);zxf["m_lFields"]=zux;data["m_pPasscard"]=zxf;var args=JSON.stringify(data);zvw(null,function(tab){var zht=tab.id;var zhy=zoc().zhz(zht);if(!zhy){return;}
var zhu=zhy.zib;var zia=zhy.zic[zhu];if(!zia){return;}
zia["FillFormsInFrame"](args);});};zcnp.prototype.zblj=function(zse,zmw){zvu(zse[zbli],zse[zbjf]);}
;zcnp.prototype.zcpi=function(zcpk,zmw){var zut={}
;zut[zun]={};zut[zus]="/Contact Info.rfp";zut[zuo]=ztk["RfItemType_Login"];zut[zun][RfapiJS.ITEM_GOTOURL_PROP]=zbzf;zut[zun][RfapiJS.ITEM_MATCHURL_PROP]=zbzf;zut[zun][zuu]=true;zut[zun][zuv]=zcpk[zuv];zva(zut,function zsx(){var zvb=zst.zvc(zut[zus]);var zvd=zst.zve();var zvf=zst.zvg(zvd,zvb,zvh);if(zvf){delete zvf["c"];}
zyq(zcpk[zuv]);zmw(zcpk);},function zta(zcpb){zcpk[zsl]=zcpb;zmw(zcpk);}
);};zcnp.prototype.zbrh=function(path,zmw){var zcrh=4;var zgv={}
;function zcri(zbrj,zalb){zcrh--;zgv[zbrj]=zalb;if(zcrh==0){zmw(zgv);}
}function zcrj(zcrk,zbrj){zcrl(path,zcrk,1,true,true,function(zgv){zcri(zbrj,zgv["count"]);}
,function(zdq){zcri(zbrj,undefined);});}var zcrm=[ztk["RfItemType_Login"],ztk["RfItemType_Bookmark"],ztk["RfItemType_SearchCard"],ztk["RfItemType_BlockingPasscard"]];var zbpu=[ztk["RfItemType_Identity"],ztk["RfItemType_Contact"]];var zcrn=[ztk["RfItemType_Safenote"]];var zcro=[ztk["RfItemType_Generic"]];zcrj(zcrm,ztk["RfItemType_Login"]);zcrj(zbpu,ztk["RfItemType_Identity"]);zcrj(zcrn,ztk["RfItemType_Safenote"]);zcrj(zcro,ztk["RfItemType_Generic"]);}
;function zcrp(){this.zcrq=false;this.zcrr={};this.zcrs={}
;this.zcrt={};this.zcru={};this.zcrv={"root":{}};this.zcrw="c";}
zcrp.prototype.zve=function(){return this.zcrv["root"];}
;zcrp.prototype.zvg=function(zfb,zcrx,zcdc){if(zcdc==zcrx){return zfb;}
if(!zfb[this.zcrw]){return null;}var zbxk=zfb[this.zcrw].length;if(zbxk){var zgv=null;for(var zgg=0;zgv==null&&zgg<zbxk;zgg++){var zcry=zfb[this.zcrw][zgg];if((zcry[zaec])==ztk["RfItemType_Folder"]){var zcrz=zcry[RfapiJS.ITEMINFO_PATH_PROP];zgv=this.zvg(zcry,zcrx,zcrz);}
}return zgv;}return null;};zcrp.prototype.zvc=function(zbre){var zcsa=zbre.lastIndexOf("/");var zcsb=zcsa==0?zvh:zbre.substring(0,zbre.lastIndexOf("/"));return zcsb;}
;zcrp.prototype.zcqm=function(zss,path){if(zaqe["getAccountMode"]()==1){return;}
path=path=="/"?zvh:path;var zfb=this.zvg(this.zve(),path,zvh);var zgh=zfb[this.zcrw];if(!zgh){zfb[this.zcrw]=[];for(var zgg=0;zgg<zss.length;zgg++){zfb[this.zcrw].push(zss[zgg]);}
}};zcrp.prototype.zcql=function(path,zbkn){var zss=[];path=path=="/"?zvh:path;var zfb=this.zvg(this.zve(),path,zvh);var zgh=zfb[this.zcrw];for(var zcw=0;zcw<zgh.length;zcw++){var item=zgh[zcw];if(zze(zbkn,item[RfapiJS.ITEMINFO_TYPE_PROP])){zss.push(item);}
}return zss;};zcrp.prototype.zcqk=function(path){if(zaqe["getAccountMode"]()==1){return;}
path=path=="/"?zvh:path;var zfb=this.zvg(this.zve(),path,zvh);if(!zfb){return null;}
var zgh=zfb[this.zcrw];if(!zgh){return null;}return zfb;}
;zcrp.prototype.zcsc=function(path,zcda,zso){var zvf=this.zvg(this.zve(),this.zvc(path),zvh);if(!zvf){return false;}
if(!zvf[this.zcrw]){return false;}var zcks=this.zcsd(path,zcda,zvf[this.zcrw]);if(zcks==-1){return false;}
var item=zvf[this.zcrw][zcks];if(!item){return false;}
item["b"]=zso;return true;};zcrp.prototype.zcpn=function(path,zcda,zcse){var zvf=this.zvg(this.zve(),this.zvc(path),zvh);if(!zvf){return null;}
if(!zvf[this.zcrw]){return null;}var zcks=this.zcsd(path,zcda,zvf[this.zcrw]);if(zcks==-1){return null;}
var item=zvf[this.zcrw][zcks];if(zcse&&!item["b"]){return null;}
return item;};zcrp.prototype.zcsd=function(zbvu,zcda,zcsf){var zcks=-1;for(var zcw=0;zcw<zcsf.length;zcw++){var zcry=zcsf[zcw];if((zcry[zaed]==zbvu)&&zcry[zaec]==zcda){zcks=zcw;break;}
}return zcks;};zcrp.prototype.zcpv=function(zcsg){var path=zcsg[zaed];var zcda=zcsg[zaec];switch(zcda){case ztk["RfItemType_Login"]:this.zvj();this.zvi();break;case ztk["RfItemType_Identity"]:this.zcpo();this.zvi();break;case ztk["RfItemType_Folder"]:this.zcpo();this.zvj();this.zcqe();this.zvi();break;}
var item=this.zcpn(path,zcda,false);if(!item){return;}
var zvf=this.zvg(this.zve(),this.zvc(path),zvh);if(!zvf){return;}
var zcks=this.zcsd(path,zcda,zvf[this.zcrw]);if(zcks!=-1){zvf[this.zcrw].splice(zcks,1);}
return;};zcrp.prototype.zcnw=function(zwm,zcqv,zwp,path,zcda,zso){this.zws();zcsh.zcsi(zwm);zcsh.zcsj(zcqv);zcsh.zcsk(zwp);zcsh.zcsl(path,zcda);zcsh.zcsm(zso);}
;zcrp.prototype.zwl=function(zvy){zvy.zwm=zcsh.zcsn();zvy[zwo]=zcsh.zcso();zvy.zwp=zcsh.zcsp();var zsd=zcsh.zcsq();zvy[zus]=zsd[zus];zvy[zuo]=zsd[zuo];zvy[zsp]=zcsh.zcsr();}
;zcrp.prototype.zws=function(){zcsh.zcsi(false);zcsh.zcsj(false);zcsh.zcsk("");zcsh.zcss();zcsh.zcst();}
;zcrp.prototype.zcpe=function(zcsu){this.zcrv={"root":{}
};this.zcrr={};this.zcrs={};this.zcrt={};this.zcru={}
;if(arguments.length==0){this.zcsv(false);}};zcrp.prototype.zcsv=function(zcsw){if(arguments.length==1){this.zcrq=zcsw;if(zaf){}
else if(zad||zag){}else if(zif){}else if(zac){}else if(zae){var zcsx=zcsw==true?'icon':'icon_gray';window.external.mxGetRuntime().icon.zcsy(zcsx);}
}return this.zcrq;};zcrp.prototype.zvj=function(url){if(!url){this.zcrr={}
;return;}this.zcsz(url);};zcrp.prototype.zcpo=function(){if(zaqe["getAccountMode"]()==1){return;}
this.zcrs={};};zcrp.prototype.zcqe=function(){if(zaqe["getAccountMode"]()==1){return;}
this.zcrt={};};zcrp.prototype.zvi=function(){if(zaqe["getAccountMode"]()==1){return;}
this.zcru={};};zcrp.prototype.zsz=function(url,zcta){if(zaqe["getAccountMode"]()==1){return;}
var zctb=zty(url);if(!zctb){return;}this.zcrr[zctb]=zcta;}
;zcrp.prototype.zcqo=function(zss){if(zaqe["getAccountMode"]()==1){return;}
this.zcrs["items"]=zss;};zcrp.prototype.ztm=function(zss){if(zaqe["getAccountMode"]()==1){return;}
this.zcrt["items"]=zss;};zcrp.prototype.zcrb=function(zss){this.zcru["items"]=zss;}
;zcrp.prototype.zcra=function(){return this.zcru["items"];}
;zcrp.prototype.zbvx=function(){if(zaqe["getAccountMode"]()==1){return;}
return this.zcrs["items"];};zcrp.prototype.ztj=function(){if(zaqe["getAccountMode"]()==1){return;}
return this.zcrt["items"];};zcrp.prototype.zsu=function(url){if(zaqe["getAccountMode"]()==1){return;}
var zctb=zty(url);if(!zctb){return;}return this.zcrr[zctb];}
;zcrp.prototype.zcsz=function(url){if(zaqe["getAccountMode"]()==1){return;}
if(!url){this.zcrr={};return;}var zctb=zty(url);if(!zctb){return;}
var zctc=this.zcrr[zctb];delete this.zcrr[zctb];};function zctd(){zcte("CRFSharedDataMain ctor ->",zwf,zctf["FUNC_INOUT"]);this.zctg=false;this.zcth=false;this.zcti="";this.zctj="";this.zctk=0;this.zctl=null;}
zctd.prototype.zcsn=function(){return this.zctg;};zctd.prototype.zcsi=function(zwm){this.zctg=zwm;}
;zctd.prototype.zcso=function(){return this.zcth;}
;zctd.prototype.zcsj=function(zwn){this.zcth=zwn;}
;zctd.prototype.zcsp=function(){return this.zcti;}
;zctd.prototype.zcsk=function(zwp){this.zcti=zwp;}
;zctd.prototype.zcsq=function(){return{"path":this.zctj,"type":this.zctk}
;};zctd.prototype.zcsl=function(path,zaex){this.zctj=path;this.zctk=zaex;}
;zctd.prototype.zcss=function(){this.zctj="";this.zctk=0
}
;zctd.prototype.zcsm=function(zso){this.zctl=zso;}
;zctd.prototype.zcst=function(){this.zctl=null;};zctd.prototype.zcsr=function(){return this.zctl;}
;function zctm(){this.zctn=8;this.zcto=[];}zctm.prototype.zblw=function(){this.zcto.length=0;}
;zctm.prototype.zcqz=function(){return this.zcto;}
;zctm.prototype.zcpt=function(zyr){var zctp=this.zctq(zyr);if(zctp!=-1){return;}
this.zcto.unshift(zyr);if(this.zcto.length>this.zctn){this.zcto.pop();}
return true;};zctm.prototype.zctq=function(zyr){var zcks=-1;for(var zbnr=0;zbnr<this.zcto.length;zbnr++){if(zyr==this.zcto[zbnr]){zcks=zbnr;break;}
}return zcks;};function zctr(){this.zctn=10;this.zcto=[];this.zcts(this.zcto);}
zctr.prototype.zcts=function(zss){var zctt=zde("recent","items");if(Array.isArray(zctt)){for(var zcw=0;zcw<zctt.length;zcw++){var zsd={}
;zsd[zctu]=zsd[zctv]=zsd[zctw]=0;zsd[zaec]=ztk["RfItemType_Login"];zsd[zaed]=zctt[zcw];var zcsg=JSON.stringify(zsd);zss.push(zcsg);}
}};zctr.prototype.zctx=function(){this.zcto.length=0;}
;zctr.prototype.zblw=function(){this.zcto.length=0;this.zcty();}
;zctr.prototype.zcqz=function(){var zss=[];for(var zcw=0;zcw<this.zcto.length;zcw++){zss.push(JSON.parse(this.zcto[zcw]));}
return zss;};zctr.prototype.zcpw=function(zsd){try{if(zsd[zaec]!=ztk["RfItemType_Login"]){return false;}
var zcks=this.zctq(zsd);if(zcks==-1){return false;}
this.zcto.splice(zcks,1);this.zcty();return true;}
catch(zhj){}};zctr.prototype.zctq=function(zsd){var zcks=-1;for(var zbnr=0;zbnr<this.zcto.length;zbnr++){var zctz=this.zcto[zbnr];var zvy=JSON.parse(zctz);if((typeof zvy[zaed]!="undefined")&&(zvy[zaed]==zsd[zaed])){zcks=zbnr;break;}
}return zcks;};zctr.prototype.zcpt=function(zsd){try{if(zsd[zaec]!=ztk["RfItemType_Login"]){return false;}
var zcua=this.zctq(zsd);if(zcua!=-1){this.zcto.splice(zcua,1);}
var zcub=JSON.stringify(zsd);this.zcto.unshift(zcub);if(this.zcto.length>this.zctn){this.zcto.pop();}
this.zcty();return true;}catch(zhj){}};zctr.prototype.zcty=function(){this.zcuc();}
;zctr.prototype.zcuc=function(){var zctt=[];for(var zck=0;zck<this.zcto.length;zck++){var zctz=this.zcto[zck];var zvy=JSON.parse(zctz);zctt.push(zvy[zaed]);}
zdv("recent","items",zctt);};
