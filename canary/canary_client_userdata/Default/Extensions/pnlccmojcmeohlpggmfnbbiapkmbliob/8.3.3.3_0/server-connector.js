var zwf="server-connector.js";var zcte=RfapiJS.traceJS;var zcud=RfapiJS.SibErrType;var zctf=RfapiJS.traceLevel;var ztk=RfapiJS.EnRfDataItemType;var zarx=RfapiJS.accountMode;var zcue=RfapiJS["HTTP_Status_Code_OK"];var zcuf=RfapiJS.HTTP_Status_Code_Unauthorized;var zcug=RfapiJS.HTTP_Status_Code_Forbidden;var zcuh=400;function zcui(zsv){zcte("*TEST* OnAccountChangedEvent->",zwf,zctf["INFO"]);zst.zcpe();}
function zcny(zsv,zcos,zcot){try{var zcov=zsv[zart];zaqe["GetAccountInfo"](zcov,function zcuj(zcox){if(!zcox["syncAllowed"]){zcot(zcoy,zsh().zcoz(zcox));return;}
var zcpa=zcox["oneFile"];zcpa=typeof(zcpa)=="undefined"?false:zcpa;if(zcpa){zaqe["setAccountMode"](zarx["OFS"]);if(!zaqe["getAccountPwd"]()){zaqe["setAccountPwd"](zsh().zyv);}
zsh().zuw=zsh().zyv;zaqe["setMasterPwd"](zsh().zuw);zrr.zawa(zcox["policies"]);zrr.zavr=zcox["passwordExpired"]?zcox["passwordExpired"]:false;zrr.zavs=zcox["forcePasswordChange"]?zcox["forcePasswordChange"]:false;zcos(zcox);return;}
zaqe["setAccountMode"](zarx["MULTIFILE"]);if(!zaqe["getAccountPwd"]()){zaqe["setAccountPwd"](zsh().zyv);}
zaqe["setMasterPwd"](zsh().zuw);zcos(zcox);},function zcuk(zcpb){if(zcpb.Code==zbig||zcpb.Code==zcum){}
zcun(zcpb,"checkLoginDataStatus_async",zcot,{});});}
catch(zhj){var zdn="ERROR was catched in checkLoginDataStatus_async "+zhj.toString();zcte(zdn,zwf,zctf["INFO"]);zcot(zcud["SibTErr_CatchedException"],zdn);}
}function zcpd(zsv,zcos,zcot){var zcov=zsv[zart];var zyr=zsv[zaru];var zcpc=zsv[zbyu];var zcuo=zsv[zbyv];var zcup=zsv[zarv];var zcuq=zsv[zbyw];var zaqf=zrr.zry(zadi);var zcur=false;if(zaqf==-1){zcur=true;zaqf=zde("sa-user","rf_timeout_select")}
zaqe["LoginToAccount_Scram"](zcov,zyr,zaqf,zcpc,zcuo,zcup,function zcus(zcut,zcuu){if(zcut==zcue){zcte("-> (loginToAccount_async). HTTP_Status_Code_OK = 200");var zcpa=zcuu["oneFile"];zaqe["SetUserID"](zcov);zaqe["setAccountMode"](zcpa?zarx["OFS"]:zarx["MULTIFILE"]);var zcuv=zde("sa-user","rf_username");if(zcuv!=zcov){zcuw();zdv("sa-user","rf_username",zcov);}
zsh().zuc=zcov;zyu(zyr);if(zaqe["getAccountMode"]==zarx["OFS"]){zyq(zyr);}
if(zcur){zdv("sa-user","rf_timeout_select",zaqf);}
zcos();return;}return;},function zcux(zcpb){if(zcpb.Code==zbig||zcpb.Code==zcum){var zcuv=zde("sa-user","rf_username");if(zcuv!=zcov){zcuw();zdv("sa-user","rf_username",zcov);}
zsh().zuc=zcov;zyu(zyr);if(zaqe["getAccountMode"]==zarx["OFS"]){zyq(zyr);}
if(zcur){zdv("sa-user","rf_timeout_select",zaqf);}
}zcun(zcpb,"loginToAccount_async",zcot,{"otp":zcpc}
);});}function zcpf(zcos,zcot){try{zcte("logOffFromAccount_async ->",zwf,zctf["INFO"]);zaqe["LogOffAccount"](1,function(zcut){if(zcut==zcue){zcuy();zcte("*SERVER_RFAPI_ASYNC* LogOffFromAccount_Async. AnswerCallBack. Status=200->logoff from account completed",zwf,zctf["INFO"]);zcos();return;}
zcte("*SERVER_RFAPI_ASYNC* LogOffFromAccount_Async. AnswerCallBack. Unknown HttpStatus="+zcut,zwf,zctf["EXCEPTION"]);}
,function(zcpb){zcun(zcpb,"logOffFromAccount_async",zcot);}
);}catch(zhj){var zdn="ERROR was catched in logOffFromAccount_async "+zhj.toString();zcte(zdn,zwf,zctf["INFO"]);zcot(zcuz,zdn);}
}function zcow(zsv,zcos,zcot,zcou){try{var zcva=zsv["new_password"];var zcvb=zsv[zaru];zcte("ChangeMasterPassword_async->",zwf,zctf["INFO"]);zaqe["ChangeAccountPwd"](zcva,zcvb,function(zcut){if(zcut==zcue){zcte("*SERVER_RFAPI_ASYNC* ChangeAccountPassword_async. AnswerCallBack. Status=200->change account password completed",zwf,zctf["INFO"]);zyu(zcva);if(zaqe["getAccountMode"]==zarx["OFS"]){zyq(zcva);}
zcos();return;}zcte("*SERVER_RFAPI_ASYNC* ChangeAccountPassword_async. AnswerCallBack. Unknown HttpStatus="+zcut,zwf,zctf["EXCEPTION"]);}
,function(zcpb){zcun(zcpb,"ChangeAccountPassword_async",zcot);}
,zcou);}catch(zhj){var zdn="ERROR was catched in logOffFromAccount_async "+zhj.toString();zcte(zdn,zwf,zctf["INFO"]);zcot(zcuz,zdn);}
}function ztl(zsv,zcos,zcot){try{var zbkn=typeof zsv[zuo]!="undefined"?zsv[zuo]:undefined;var path=zsv[zus];var zans=path;zans=zans=="/"?"":zans;var zfr=typeof zsv["parts"]!="undefined"?zsv["parts"]:undefined;var zcvc=typeof zsv["bDeep"]!="undefined"?zsv["bDeep"]:undefined;var zfw=typeof zsv["icon"]!="undefined"?zsv["icon"]:undefined;var zcvd=typeof zsv["bExcludeShared"]!="undefined"?zsv["bExcludeShared"]:undefined;var zcve=typeof zsv["bBody"]!="undefined"?zsv["bBody"]:undefined;zaqe["GetItemsList"](zans,function(zss,zcut){if(zss){zcos(zss);}
},function(zcpb){zcun(zcpb,"getItemsInfoList_async",zcot);}
,zbkn,zfr,zcvc,zfw,zcvd,zcve);}catch(zhj){}}function zcvf(zsv,zcos,zcot){try{var path=zsv[zaed];var zcda=zsv[zaec];var zcvg=zsv[zcvh];var zcvi=zsv[zcvj];zaqe["GetItemInfo"](path,function(zsd){zcos(zsd);}
,function(zdq){zcot(zdq);},zcda,zcvg,zcvi);}catch(zhj){zcot(zhj);}
}function zcpq(zsv,zcos,zcot){try{var self=this;var zpn=zsv[zsn];var zbtu=zpn[zuv]==null?(zsh().zuw?zsh().zuw:undefined):zpn[zuv];var zsd=zpn[zsf];var path=zsd[zaed];var zcda=zsd[zaec];var zcpp=zpn["cachepwd"];zaqe["GetDataItem"](path,zcda,function zcvk(zso){if(zcpp){zsh().zuw=zbtu;zaqe["setMasterPwd"](zsh().zuw);}
zcos(zso);},function zcvl(zcpb){if(zcpb["Code"]&&zcpb["Code"]==1){var ztc=zbtu?zcpb["Description"]:"";zcot(zcpb["Code"],ztc);}
else{zcot(zcpb["Code"],zcpb["Description"]);}},3,zbtu);}
catch(zhj){}}function zcqq(zsv,zcos,zcot){try{var url=zsv["url"];var zcvd=typeof zsv["bExcludeShared"]!="undefined"?zsv["bExcludeShared"]:undefined;var zcvm=zrr.zawq(url);var zgv=[];var zcvn=[];var zcvo=zcvm.length;var zcvp=0;var zcvq=0;for(var zcw=0;zcw<zcvm.length;zcw++){var zcvr=zcvm[zcw];if(!(zcvr.startsWith("http://")||zcvr.startsWith("https://"))){zcvr="http://"+zcvr;}
zaqe["GetDomainPasscards"](zcvr,function zcvs(data,zcut){zcvp++;var zhw=data["status"];var zss=data[zyl];for(var zcw=0;zcw<zss.length;zcw++){var item=zss[zcw];if(item.path&&(zcvn.indexOf(item.path)==-1)){zgv.push(item);zcvn.push(item.path);}
}if(zcvp+zcvq==zcvo){zcos(zgv);}},function zcvt(zcpb){zcvq++;if(zcvq==zcvo){zcun(zcpb,"getDomainLogins_async",zcot);}
else{}},undefined,zcvd);}}catch(zhj){var zdn="ERROR was catched in getDomainLoginsWithEquiv_async "+zhj.toString();zcte(zdn,zwf,zctf["INFO"]);zcot(zcuz,zdn);}
}function zsw(zsv,zcos,zcot){try{var url=zsv["url"];var zcvd=typeof zsv["bExcludeShared"]!="undefined"?zsv["bExcludeShared"]:undefined;zaqe["GetDomainPasscards"](url,function zcvs(data,zcut){var zhw=data["status"];var zss=data[zyl];zcos(zss);}
,function zcvt(zcpb){zcun(zcpb,"getDomainLogins_async",zcot);}
,zsv["type"],zcvd);}catch(zhj){var zdn="ERROR was catched in getDomainLogins_async "+zhj.toString();zcte(zdn,zwf,zctf["INFO"]);zcot(zcuz,zdn);}
}function zcrg(zsv,zcos,zcot){try{var zbfy=zsv[zbuw];zaqe["Search"](zbfy,function zcvu(zss,zcut){zcos(zss);}
,function zcvv(zcpb){zcun(zcpb,"searchItems_async",zcot);}
);}catch(zhj){var zdn="ERROR was catched in searchItems_async "+zhj.toString();zcte(zdn,zwf,zctf["INFO"]);zcot(zcuz,zdn);}
}function zcpu(zsv,zcos,zcot){try{var zcpr=zsv[zun];zaqe["DeleteObject"](zcpr[zaed],zcpr[zaec],function zcvw(zcut){if(zcut==zcue){zcos();}
},function zcvx(zcpb){zcun(zcpb,"deleteItem_async",zcot);}
)}catch(zhj){var zdn="ERROR was catched in searchItems_async "+zhj.toString();zcte(zdn,zwf,zctf["INFO"]);zcot(zcuz,zdn);}
}function zcqh(zsv,zcos,zcot){try{var path=zsv[zus];zaqe["CreateFolder"](path,function zcvy(zcut){if(zcut==zcue){zcos();return;}
},function zcvz(zcpb){zcun(zcpb,"createFolder_async",zcot);}
);}catch(zhj){var zdn="ERROR was catched in createFolder_async "+zhj.toString();zcte(zdn,zwf,zctf["INFO"]);zcot(zcuz,zdn);}
}function zcpz(zsv,zcos,zcot){try{var zbrw=zsv["oldPath"];var zcpx=zsv["oldType"];var zbry=zsv["newPath"];var zcpy=zsv["newType"];zaqe["MoveObject"](zbrw,zcpx,zbry,zcpy,function zcwa(zcut){if(zcut==zcue){zcos();return;}
},function zcwb(zcpb){zcun(zcpb,"moveItem_async",zcot);}
)}catch(zhj){var zdn="ERROR was catched in moveItem_async "+zhj.toString();zcte(zdn,zwf,zctf["INFO"]);zcot(zcuz,zdn);}
}function zcrl(path,zcwc,zfr,zcvc,zcvd,zcos,zcot){zaqe["GetItemsCount"](path,function(zgv){zcos(zgv);}
,function(zdq){zcot(zdq);},zcwc,zfr,zcvc,zcvd);}function zcwd(zbtu,zcos,zcot){zaqe["CheckPwd"](zbtu,function(zgv){zcos(zgv);}
,function(zdq){zcot(zdq);});}function zva(zsv,zcos,zcot){var item=zsv[zun];var zcwe={}
;for(var zck in item){zcwe[zck]=item[zck];}var zbqo=zsv[zuo];if((zrr.zrv(zrw)&&zbqo==ztk["RfItemType_Login"])||(zrr.zrv(zacz)&&zbqo==ztk["RfItemType_Identity"])||(zrr.zrv(zrx)&&zbqo==ztk["RfItemType_Bookmark"])||(zrr.zrv(zada)&&zbqo==ztk["RfItemType_Contact"])||(zrr.zrv(zadc)&&zbqo==ztk["RfItemType_Safenote"])){return}
if(zbqo==ztk["RfItemType_Contact"]||zbqo==ztk["RfItemType_Identity"]){zadq(zcwe);}
zaqe["PutDataItem"](zsv[zaed],zbqo,zcwe,function zcwf(zcut){zcos();}
,function zcwg(zcpb){if(zcpb["Code"]!=zcwh){zcun(zcpb,"putDataItem_async",zcot);zcot(zcpb);return;}
zcwi(function(zcwj){if(zcpb["Code"]==zcwh){zcpb["Description"]="Please enter your RoboForm Master Password";}
zcpb["Code"]=zcwj?zaoe:zaoh;zcun(zcpb,"putDataItem_async",zcot);zcot(zcpb);}
,function(zdq){zcun(zcpb,"putDataItem_async",zcot);zcot(zcpb);}
);});}function zcwi(zcos,zcot){if(zaqe["getAccountMode"]==zarx["OFS"]){zcos(true);return;}
zcrl("","",2,true,true,function(zgv){if(zgv["protected"]){zcos(true);}
else{zcos(false);}},function(zdq){zcot(zdq);});}function zcwk(zsv,zcos,zcot){var zcwl=typeof zsv["securityScore"]=="undefined"?0:zsv["securityScore"];zaqe["SetAccountInfo"](function zcwm(zcut){if(zcut==zcue){zcos();return;}
},function zcwn(zcpb){zcun(zcpb,"setAccountInfo_async",zcot);}
,undefined,undefined,undefined,undefined,undefined,zcwl)}
function zcoa(zlf,zcos,zcot){var zcwo=typeof zlf["accountId"]=="undefined"?zaqe["GetUserID"]():zlf["accountId"];zaqe["UpdateSecurityScore"](zcwo,function zcwp(data){zcos(data);}
,function zcwq(zcpb){zcun(zcpb,"updateSecurityScore_async",zcot);}
,undefined,zlf,undefined)}function zcph(zsv,zcos,zcot){var zcwr=zsv[zbud];var zcws=zsv[zaru];var zya=zsv[zanv];var zcwt=zsv[zcwu];var zcwv=zsv[zbue];var zcpg=typeof zsv["boneFile"]=="undefined"?true:!zsv["boneFile"];if(!zcwt){zcwt=undefined;}
if(!zya){zya=undefined;}zaqe["CreateAccount"](zcwr,zcws,zya,zcwr,zcwt,function zcww(zcut,zcwx){if(zcut==zcue){var zcuv=zde("sa-user","rf_username");if(zcuv!=zcwr){zcuw();zdv("sa-user","rf_username",zcwr);}
zsh().zuc=zcwr;zyu(zcws);if(zcpg){zyq(zcwv);zaqe["setMasterPwd"](zcwv);}
else{zyq(zcws);zaqe["setMasterPwd"](zcws);}zcos();}
},function zcwy(zcpb){zcot(zcpb);},undefined,undefined,undefined,undefined,undefined,zcpg);}
function zcun(zcpb,zcwz,zcot,zsv){if((typeof(zcpb)=="undefined")||(zcpb["sibErr"]=="Connectivity")||(zcpb["sibErr"]=="LocalErr")||(zcpb["sibErr"]=="MotFound")||(zcpb["sibErr"]=="CatchedException")||(zcpb["Code"]==zcug)||(zcpb["Code"]==zcuh)||(zcpb["Code"]==zcuf)||(zcpb["Code"]==zbig)||(zcpb["Code"]==-1)||(zcpb["Code"]==1)||(zcpb["Code"]==5)||(zcpb["Code"]==9)||(zcpb["Code"]==zcum)){if(typeof(zcpb["oException"])!="undefined"){if(zcpb["oException"]["stack"]){zcte("*SERVER_RFAPI_ASYNC* "+zcwz+". ErrorCallBack. Exception = "+zcpb["oException"]["stack"],zwf,zctf["EXCEPTION"]);}
else{zcte("*SERVER_RFAPI_ASYNC* "+zcwz+". ErrorCallBack. Exception = "+zcpb["oException"],zwf,zctf["EXCEPTION"]);}
}if(zcpb["Code"]&&zcpb["Code"]==zcuf){zcpb["sibErr"]=zcuf;zcpb["Description"]=zaof("You_have_entered_an_invalid_User_ID_and_or_Password");zcuy();}
if(zcpb["Code"]&&zcpb["Code"]==zcug){zcpb["sibErr"]=zbie;zcpb["Description"]="Forbidden. Account is locked.";}
if(zcwz=="checkLoginDataStatus_async"){if(zcpb["Code"]==zbig){var zcxa=undefined;if(zcpb.Description){var zfr=zcpb.Description.split('=');zcxa=Array.isArray(zfr)&&zfr.length>0?zfr[zfr.length-1]:undefined;}
if(zcxa){zsv['Channel']=zcxa;}zcot(zbig,zaof("Need_OTP"),zsv);return;}
if(zcpb["Code"]==zcum){zcte("*SERVER_RFAPI_ASYNC* checkLoginDataStatus_async. ErrorCallBack. ",zwf,zctf["SPECIAL_CASE"]);zcot(zcum,zaof("Err_OTPAltChannel"),zsv);return;}
if((zcpb["Code"]==zcuf)){zcot(zcpb["Code"],"");}else{zcot(zcpb["Code"],zcpb["Description"]);}
return;}else if(zcwz=="loginToAccount_async"){if((zcpb["Code"]==zcuf)){if(zsv&&zsv["otp"]){zcot(zcuf,zaof("Wrong_OTP"),{}
);}else{zcot(zcuf,zaof("You_have_entered_an_invalid_User_ID_and_or_Password"),zsv);}
return;}if(zcpb["Code"]==zbig){zcxa=undefined;if(zcpb.Description){var zfr=zcpb.Description.split('=');zcxa=Array.isArray(zfr)&&zfr.length>0?zfr[zfr.length-1]:undefined;}
if(zcxa){zsv['Channel']=zcxa;}zcot(zbig,zaof("Need_OTP"),zsv);return;}
if(zcpb["Code"]==zcum){zcte("*SERVER_RFAPI_ASYNC* LogInToAccount_Async. ErrorCallBack. ",zwf,zctf["SPECIAL_CASE"]);zcot(zcum,zaof("Err_OTPAltChannel"),zsv);return;}
zcot(zcuz,zcpb["Description"],zsv);return;}else if(zcwz=="moveItem_async"){if((zcpb["Code"]==zcuf)){zcte("*SERVER_RFAPI_ASYNC* moveItem_async. ErrorCallBack. SibTErr_AuthRejected",zwf,zctf["SPECIAL_CASE"]);zcot(zcpb["sibErr"],zcpb["Description"],zsv);return;}
if((zcpb["Code"]==5)){zcte("*SERVER_RFAPI_ASYNC* moveItem_async. ErrorCallBack. File/Folder already exists",zwf,zctf["SPECIAL_CASE"]);zcot(zaon,zcpb["Description"],zsv);return;}
}else if(zcwz=="getDomainLogins_async"||zcwz=="searchItems_async"||zcwz=="deleteItem_async"||zcwz=="getItemsInfoList_async"||zcwz=="putDataItem_async"||zcwz=="createFolder_async"||zcwz=="logOffFromAccount_async"||zcwz=="setAccountInfo_async"||zcwz=="updateSecurityScore_async"){if((zcpb["Code"]==zcuf)){zcte("*SERVER_RFAPI_ASYNC* GetDomainPasscards_Async. ErrorCallBack. SibTErr_AuthRejected",zwf,zctf["SPECIAL_CASE"]);zcot(zcpb["sibErr"],zcpb["Description"],zsv);return;}
if((zcpb["Code"]==9)){zcte("*SERVER_RFAPI_ASYNC* ErrorCallBack. Not Implemented",zwf,zctf["SPECIAL_CASE"]);zcot(zcpb["Code"],zcpb["Description"],zsv);return;}
if((zcpb["Code"]==1)){zcte("*SERVER_RFAPI_ASYNC* ErrorCallBack. Wrong master password",zwf,zctf["SPECIAL_CASE"]);zcot(zcpb["Code"],zcpb["Description"],zsv);return;}
if((zcpb["Code"]==-1)){zcte("*SERVER_RFAPI_ASYNC* ErrorCallBack. Master Password for current user is empty",zwf,zctf["SPECIAL_CASE"]);zcot(zcpb["Code"],zcpb["Description"],zsv);return;}
}else if(zcwz=="GetDataItem_Async"){if((zcpb["Code"]==zcuf)){zcte("*SERVER_RFAPI_ASYNC* GetDataItem_Async. ErrorCallBack. SibTErr_AuthRejected",zwf,zctf["SPECIAL_CASE"]);zcxc(zvz.zsl,zcuf,zaof("You_have_entered_an_invalid_User_ID_and_or_Password"),zcoc,null);return;}
zcxc(zvz.zsl,zcuz,zcpb["Description"],zcoc,null);}
else if(zcwz=="ChangeAccountPassword_async"){zcte("*SERVER_RFAPI_ASYNC* ChangeAccountPassword_async ErrorCallBack",zwf,zctf["SPECIAL_CASE"]);zcot(zcpb["Code"],zcpb["Description"],zsv);}
return;}zcte("*SERVER_RFAPI_ASYNC* "+zcwz+". ErrorCallBack. Unknown errObject="+zcpb,zwf,zctf["EXCEPTION"]);}
function zcuy(){zst.zcpe();zcps.zctx();zsh().zyv="";zsh().zuw="";zcxd();}

