// Copyright (C) 1999-2017 Siber Systems Inc. All Rights Reserved.
var RfapiJS=RfapiJS||{}
;(function(){var zawd=RfapiJS["utils"];var zavo=RfapiJS["UTF8"];var zfyv=RfapiJS["RF_RSA"];var zfhu=RfapiJS["Binary"];var zfyw=RfapiJS["SecurityScore"];var zalx=(new Date).getTime();var zctf={"INFO":0,"FUNC_INOUT":1,"SPECIAL_CASE":2,"EXCEPTION":3
}
;var zfyx=zctf["INFO"];var zfyy=false;var zwf="rf-api-lib.js";var zffr="1.17.5.7";var zak="May 7, 2017";var zfhx="undefined";var zad=false;var zif=false;var zac=false;var zfyz=false;var zag=false;var zae=false;var zfza=false;var zaf=false;if(window.navigator.appVersion.indexOf('Edge')>-1){zaf=true;}
if(typeof(opera)!=zfhx){zac=true;}if(typeof(chrome)!=zfhx){zad=true;if(typeof(window.navigator.vendor)!=zfhx){if(window.navigator.vendor.indexOf("Opera")!=-1){zfyz=true;zad=false;}
}}if(typeof(zfzb)!=zfhx){zae=true;}if(navigator.userAgent.indexOf('MSIE')!==-1||navigator.appVersion.indexOf('Trident/')>0){zfza=true;}
if(navigator.userAgent.indexOf('Firefox')>0){zag=true;}
if(navigator.vendor&&navigator.vendor.indexOf('Apple')>-1&&(navigator.userAgent&&navigator.userAgent.indexOf('Safari')>-1&&navigator.userAgent.indexOf('Chrome')==-1)){zif=true;}
var zfzc=null;var zcud={"SibTErr_None":0,"SibTErr_ProxyAuthBad":1,"SibTErr_AuthRejected":2,"SibTErr_AuthNeedOTP":3,"SibTErr_Connectivity":4,"SibTErr_SocketClosed":5,"SibTErr_LocalErr":6,"SibTErr_AccessDenied":7,"SibTErr_LockedFile":8,"SibTErr_ServerErr":9,"SibTErr_DiskFull":10,"SibTErr_MemoryFull":11,"SibTErr_MustRetry":12,"SibTErr_UserStop":13,"SibTErr_Disconnected":14,"SibTErr_BadServerErr":15,"SibTErr_NotInCache":16,"SibTerr_NotFound":17,"SibTerr_NotReady":18,"SibTErr_EndOfFile":19,"SibTErr_CatchedException":20,"SibTErr__Last":1000
}
;var zarx={"EMPTY":0,"OFS":1,"MULTIFILE":2
};var zfpx={"enNothing":0,"enFileInfo":1,"enFlags":2,"enUrls":4,"enIcon":8,"enUnprotData":16,"enUsageInfo":32,"enAll":1|2|4|8|16|32
}
;var zfzd={"enInitial":0,"enHaveHeader":1,"enHaveUnprotectedPart":2,"enExecuteOnly":3,"enHaveAll":4}
;var ztk={"RfItemType_Undefined":0,"RfItemType_Login":1,"RfItemType_Bookmark":2,"RfItemType_SearchCard":3,"RfItemType_BlockingPasscard":4,"RfItemType_Identity":5,"RfItemType_Contact":6,"RfItemType_Safenote":7,"RfItemType_Folder":8,"RfItemType_Generic":9,"RfItemType_Max":100
}
;var zfze=[ztk["RfItemType_Login"],ztk["RfItemType_Bookmark"],ztk["RfItemType_SearchCard"],ztk["RfItemType_BlockingPasscard"],ztk["RfItemType_Identity"],ztk["RfItemType_Contact"],ztk["RfItemType_Safenote"]];var zfhs={"RfErr_None":0,"RfErr_AuthRejected":1,"RfErr_PermissionDenied":2,"RfErr_BadRequest":3,"RfErr_BadData":4,"RfErr_WrongParams":5,"RfErr_InvalidPath":6,"RfErr_UnknownFunction":7,"RfErr_AccountExists":8,"RfErr_FolderExists":9}
;var zfpy={"RF_MATCH_TYPE_NULL":0,"RF_MATCH_TYPE_UNKNOWN":1,"RF_MATCH_TYPE_BLOCKING":2,"RF_MATCH_TYPE_DOMAIN":3,"RF_MATCH_TYPE_SERVER":4,"RF_MATCH_TYPE_PAGE":20,"RF_MATCH_TYPE_URL_EXACT":21}
;var zfpz={"usiRecentlyUsedList":0,"usiFavouritesList":1,"usiRecentlyViewedList":2,"usiMostPopularList":3
}
;var zfzf="GetDataStatus";var zfzg="CreateAccount";var zfzh="LoginToAccount_Scram";var zfzi="LogOffAccount";var zfzj="ChangeAccountPwd";var zfzk="ResetAccountPwd";var zfzl="GetAccountInfo";var zfzm="SetAccountInfo";var zfzn="PumsAction";var zfzo="PostTrustedUsers";var zfzp="UpdateTrustedUsers";var zfzq="GetTrustedUsers";var zfzr="RecoverMemberPassword";var zfzs="InviteEmergencyContact";var zfzt="UpdateEmergencyContactInfo";var zfzu="RevokeEmergencyContact";var zfzv="GetEmergencyContacts";var zfzw="GetTestators";var zfzx="AcceptEmergencyContactInvitation";var zfzy="RejectEmergencyContactInvitation";var zfzz="RevokeEmergencyAccess";var zgaa="GrantEmergencyAccess";var zgab="RejectEmergencyAccess";var zgac="RequestEmergencyAccess";var zgad="GetTrustedUserData";var zgae="CreateSharedAccount";var zgaf="GetRecipients";var zgag="GetReceivedAccountsFiles";var zgah="GetSharedAcctInfo";var zgai="SetSharedAcctInfo";var zgaj="GetUserKnownRecipients"
var zgak="GetPublicKey";var zgal="PutPublicKey";var zgam="CreateCompany";var zgan="GetCompanies";var zgao="CompanyAddUser";var zgap="CompanyRemoveUser";var zgaq="CreateCompanyMember";var zgar="JoinCompany";var zgas="LeaveCompany";var zgat="GetCompanyUsers";var zgau="UpdateCompanyMemberInfo";var zgav="GetCompanyGroups";var zgaw="GrantFile";var zgax="GrantAccount";var zgay="GetGrantedFiles";var zgaz="RevokeFile";var zgba="RevokeAccount";var zgbb="AcceptSharedFile";var zgbc="AcceptSharedAccount";var zgbd="RejectSharedFile";var zgbe="RejectSharedAccount";var zgbf="UpdateRecievedAccountList";var zgbg="CheckoutFile";var zfrk="GetUsageInfo";var zgbh="PutOFSFile";var zgbi="GetOFSFile";var zgbj="DecodeOFSFile";var zgbk="CheckOFSFileETag";var zgbl="PutOFS_WithCheckMerge";var zgbm="GetOFSWitheTagCheck";var zgbn="DeleteAllDevices";var zgbo="CreateEmptyOFS_RSAKeys";var zfrq="DeleteAllObjects";var zfrh="GetMatchingPasscards";var zfri="GetDomainPasscards";var zfrj="GetItemsCount";var zfrl="GetItemInfo";var zfrm="GetFile";var zfrn="Search";var zfrw="GetItemsList";var zfro="CreateDataItem";var zfrp="GetDataItem";var zfrv="PutDataItem";var zfrr="CreateFolder";var zfrs="DeleteObject";var zfrt="CopyObject";var zfru="MoveObject";var zgbp="GetSyncData";var zgbq="GetOptions";var zgbr="UpdateStatus";var zgbs="CacheMasterPassword";var zgbt="ChangePassword";var zgbu="CheckPwd";var zgbv="SetTemporaryPassword";var zgbw="UpdateSecurityScore";var zgbx="getBrowserParam";var zgby="setBrowserParam";var zgbz="ResetOFSCache";var zgca="Clear";var zgcb="getMasterPwd";var zgcc="setMasterPwd";var zgcd="getAccountMode";var zgce="setAccountMode";var zgcf="getAccountPwd";var zgcg="setAccountPwd";var zgch="GetUserID";var zgci="SetUserID";var zgcj="GetServerUrl";var zgck="SetServerUrl";var zgcl="GetVersion";var zgcm="SetEventListener";var zgcn="GetLastError";var zgco="Session is expired. You need to relogin.";var zgcp="Enter Correct UserID and Password for Realm RoboForm Online Server";var zgcq="UserId is not defined";var zgcr="User name is not defined";var zgcs="Server URL is not defined";var zgct="Connection error or RoboForm server is offline";var zgcu="Password cannot be empty";var zgcv="Repository returned null [R]";var zcue=200;var zcuh=400;var zcuf=401;var zcug=403;var zgcw=404;var zgcx=503;var zgcy=412;var zgcz=500;var zfhv="-> ";var zfhw="<- ";var zgda=100;var zgdb=48;var zfib=4096;var zgdc=4096;var zgdd=4096;var zgde="type";var zgdf="path";var zgdg="name";var zgdh="function";var zgdi="request";var zgdj="deep";var zgdk="parts";var zgdl="from";var zgdm="to";var zgdn="pwd";var zgdo="status";var zgdp="response";var zgdq="url";var zgdr="recipient";var zgds="grantor";var zgdt="body";var zgdu="id";var zgdv="admin";var zgdw="keep";var zgdx="isManager";var zgdy="readOnly";var zgdz="showPasswords";var zgea="serverOnly";var zgeb="company";var zgec="user";var zged="used";var zgee="favorite";function zfpw(zgef,ztc,zgeg,zgeh,zgei){if(typeof(zgef)!=zfhx){this["Code"]=typeof(zgef)!=zfhx?zgef:-1;}
if(typeof(zgei)!=zfhx){this["sibErr"]=typeof(zgei)!=zfhx?zgei:-1;}
this["Description"]=typeof(ztc)!=zfhx?ztc:"";if(typeof(zgeg)!=zfhx){this["oException"]=zgeg;}
if(typeof(zgeh)!=zfhx){this["HttpRequest"]=zgeh;}}
;zfpw.prototype.toString=function(){var zgv="{";if(typeof(this["HttpRequest"])!=zfhx){zgv+=" HTTPStatus="+this["HttpRequest"].status+" ";}
if(typeof(this["Code"])!=zfhx){zgv+=" rfApiCode="+this["Code"]+" ";}
if(typeof(this["sibErr"])!=zfhx){zgv+=" sibErr="+this["sibErr"]+" ";}
zgv+='  Description="'+this["Description"]+'" }';return zgv;}
;var zfht={"APP_DATA":"app-data.rfo","SYNC_DATA":"sync-data.rfo","USER_DATA":"user-data.rfo"
}
;function zgej(){this.zgek=Math.floor(Math.random()*10001);zcte(zfhv+"RfDataManager ctor. ID=["+this.zgek+"] build="+zak,zwf,zctf["FUNC_INOUT"]);this.zgel=-1;this.zgem="";this.zgen="";this.zgeo="";this.zgep="";this.zgeq="";this.zger="";this.zges={}
;this.zget={};this.zgeu={};this.zgev=new RfapiJS.CRfOneFileSys();zfzc=new RfapiJS.Repository();}
;zgej.prototype[zgcl]=function(){zcte("[ID:"+this.zgek+"]. RfDataManager.GetVersion  ->  ",zwf,zctf["FUNC_INOUT"]);return zffr+" , "+zak;}
;zgej.prototype[zgck]=function(zgew){zcte("[ID:"+this.zgek+"]. RfDataManager.SetServerUrl  ->  '"+zgew+"'",zwf,zctf["FUNC_INOUT"]);this.zgem=zgew;}
;zgej.prototype[zgcj]=function(){zcte("RfDataManager.GetServerUrl  ->  '"+this.zgem+"'",zwf,zctf["FUNC_INOUT"]);return this.zgem;}
;zgej.prototype[zgci]=function(zgex){zcte("[ID:"+this.zgek+"]. RfDataManager.SetUserID  ->  '"+zgex+"'",zwf,zctf["FUNC_INOUT"]);this.zgen=zgex;zfzc.zfsc(zgex);}
;zgej.prototype[zgch]=function(){zcte("RfDataManager.GetUserID  ->  '"+this.zgen+"'",zwf,zctf["FUNC_INOUT"]);return this.zgen;}
;zgej.prototype.zgey=function(zcwo){return this.zgen!=zcwo;}
;zgej.prototype[zgcg]=function(zgez){zcte("[ID:"+this.zgek+"]. RfDataManager.setAccountPwd  ->  '"+zgez+"'",zwf,zctf["FUNC_INOUT"]);this.zgeo=zgez;}
;zgej.prototype[zgcf]=function(){zcte("RfDataManager.getAccountPwd  ->  '"+this.zgeo+"'",zwf,zctf["FUNC_INOUT"]);return this.zgeo;}
;zgej.prototype[zgce]=function(zgfa){if(zgfa==zarx["OFS"]){zcte("[ID:"+this.zgek+"]. RfDataManager.setAccountMode  ->  OFS[1]",zwf,zctf["FUNC_INOUT"]);}
else if(zgfa==zarx["MULTIFILE"]){zcte("[ID:"+this.zgek+"]. RfDataManager.setAccountMode  ->  MULTIFILE[2]",zwf,zctf["FUNC_INOUT"]);}
else{zcte("[ID:"+this.zgek+"]. RfDataManager.setAccountMode  -> "+zgfa,zwf,zctf["FUNC_INOUT"]);}
this.zgel=zgfa;};zgej.prototype[zgcd]=function(){zcte("RfDataManager.getAccountMode  ->  "+this.zgel,zwf,zctf["FUNC_INOUT"]);return this.zgel;}
;zgej.prototype[zgcc]=function(zgez){zcte("[ID:"+this.zgek+"]. RfDataManager.setMasterPwd  ->  '"+zgez+"'",zwf,zctf["FUNC_INOUT"]);this.zgep=zgez;}
;zgej.prototype[zgcb]=function(){zcte("RfDataManager.getMasterPwd  ->  '"+this.zgep+"'",zwf,zctf["FUNC_INOUT"]);return this.zgep;}
;zgej.prototype[zgby]=function(zgfb){zcte("[ID:"+this.zgek+"]. RfDataManager.setBrowserParam  ->  '"+zgfb+"'",zwf,zctf["FUNC_INOUT"]);this.zgeq=zgfb;}
;zgej.prototype[zgbx]=function(){return this.zgeq;}
;zgej.prototype[zgbz]=function(zfjt,zfju){this[zgca]();this[zgbf](this.zgen,function zgfc(zcut){if(typeof(zfjt)!=zfhx){zfjt(zcut);}
return;},zfju);};zgej.prototype[zgca]=function(){if(zfzc){zfzc.zdwm();}
this.zgev=new RfapiJS.CRfOneFileSys();this.zger="";this.zges={}
;};zgej.prototype[zgcn]=function(){return this.zgeu;}
;zgej.prototype.zgfd=function(zdq){this.zgeu=zdq;}
;zgej.prototype.zgfe=function(zgeh,zdn,zcwz,zfju){var zgff=this.zgfg(zgeh,zdn,zfju);if(!zgff){zcte("RfDataManager."+zcwz+" (MULTI) checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return;}
if(zgeh.status==zgcw){if(typeof(zfju)!=zfhx){zfju(new zfpw(zgcw,zgeh.responseText));}
return;}var zgfh=JSON.parse(zgeh.responseText);if(!zgfh||typeof(zgfh[zgdp])==zfhx){if(typeof(zfju)!=zfhx){zfju(new zfpw(undefined,"Error while parsing JSON.",undefined,undefined,"LocalErr"));}
return;}zgfh=zgfh[zgdp];var zhw=zgfh[zgdo];if(zhw=="error"){if(typeof(zfju)!=zfhx){if(typeof(zgfh["code"])!=zfhx){zfju(new zfpw(zgfh["code"],zgfh["description"]));}
else if(typeof(zgfh["sibError"])!=zfhx){zfju(new zfpw(undefined,zgfh["description"],undefined,undefined,zgfh["sibError"]));}
else{zfju(new zfpw(zcud["SibTErr_ServerErr"],JSON.stringify(zgfh),undefined,zgfh,undefined));}
}return;}return zgfh;};zgej.prototype.zgfg=function(zgeh,zdn,zfju){if(!zgeh){zcte("RfDataManager.misc_checkHttpResponse. Connection error or RoboForm server is offline. Return false.",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(undefined,zgct,undefined,undefined,"Connectivity"));}
return false;}if(zgeh.readyState==0){zcte("RfDataManager.misc_checkHttpResponse. Return false. readyState is 0. statusCode is 0. Status Text: '"+zgeh.statusText+"'",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(zdn);}
return false;}if(zgeh.status==0){zcte("RfDataManager.misc_checkHttpResponse. Connection error or RoboForm server is offline. Return false.",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zgcx,zgct,undefined,zgeh,"Connectivity"));}
return false;}if(zgeh.status==zgcx){zcte("RfDataManager.misc_checkHttpResponse. Return false. StatusCode is NOT ok! (HTTP_Status_Service_Unavailable=503). statusText: '"+zgeh.statusText+"'",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zgcx,"Service Unavailable",undefined,zgeh,undefined));}
return false;}if(zgeh.status==zcug){zcte("RfDataManager.misc_checkHttpResponse. Return false. StatusCode is NOT ok! (HTTP_Status_Code_Forbidden =403). statusText: '"+zgeh.statusText+"'",zwf,zctf["INFO"]);var ztc=typeof zgeh.getResponseHeader("reason")!=zfhx?zgeh.getResponseHeader("reason"):"Forbidden";if(typeof(zfju)!=zfhx){zfju(new zfpw(zcug,ztc,undefined,zgeh,undefined));}
return false;}if(zgeh.status==zcuh){zcte("RfDataManager.misc_checkHttpResponse. Return false. StatusCode is NOT ok! (HTTP_Status_Code_BadRequest = 400). statusText: '"+zgeh.statusText+"'",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){var zgfi=zgeh.responseType=="arraybuffer"?zgeh.statusText:zgeh.responseText;zfju(new zfpw(zcuh,zgfi,undefined,zgeh,undefined));}
return false;}if(zgeh.status==zcuf){zcte("RfDataManager.misc_checkHttpResponse. Return false. StatusCode is NOT ok! (HTTP_Status_Code_Unauthorized =401). statusText: '"+zgeh.statusText+"'",zwf,zctf["INFO"]);var zgfj=zgeh.getResponseHeader("x-sib-auth-alt-otp");if(zgfj&&(zgfj=="email"||zgfj=="phone"||zgfj=="sms")){if(typeof(zfju)!=zfhx){zfju(new zfpw(410,"Otp is reqiered. otp="+zgfj,undefined,zgeh));}
return false;}var zgfk=zgeh.getResponseHeader("x-sib-auth-alt-channel");if(zgfk){if(typeof(zfju)!=zfhx){zfju(new zfpw(411,"Otp channels="+zgfk,undefined,zgeh));}
return false;}var zgfl=zgeh.getAllResponseHeaders();zcte("RfDataManager.misc_checkHttpResponse. Return false. headers: '"+zgfl+"'",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zcuf,zgcp,undefined,zgeh,undefined));}
this[zgca]();return false;}return true;};zgej.prototype.zgfm=function(zcwz,zgfn,zfju){var zgfo=typeof zgfn.stack!=zfhx?zgfn.stack:zgfn.toString();zwe("EXCEPTION in "+zcwz+": "+zgfo,zwf);zfju(new zfpw(undefined,zgfn.toString(),zgfn,undefined,"CatchedException"));}
;zgej.prototype.zgfp=function(zgfl){var zgfq=this[zgbx]();if(zgfq){zgfl["x-sib-client-type"]=zgfq;}
};zgej.prototype.zgfr=function(zgfs){var zgft=!zgfs?"application/json":"application/octet-stream";var zgfl={}
;zgfl["Content-type"]=zgft;this.zgfp(zgfl);return zgfl;}
;zgej.prototype.zgfu=function(zgfv,zcwo,zasi){if(!this.zges[zcwo]){this.zges[zcwo]={}
;}this.zges[zcwo][zasi]=zgfv;};zgej.prototype.zgfw=function(zcwo,zasi){if(!this.zges[zcwo]){return"";}
return this.zges[zcwo][zasi];};zgej.prototype.zgfx=function(zcwo){var zgfy=zfzc.zftu(zcwo,true);var zfuf=zfzc.zfue();var zgfz=zgfy[RfapiJS.ITEM_INFO_PROP][RfapiJS.ITEM_SHARED_PROP]["mp"];var zgga=zawd.zawe(zgfz);var zggb=zawd.zfiu(zgga);var zggc=new RSAKey();var zggd=zfyv.zgge(zfuf,false);zggc.setPrivateEx(zggd["modulus"],zggd["exponent"],zggd["privateexp"],zggd["P"],zggd["Q"],zggd["DP"],zggd["DQ"],zggd["InverseQ"]);var zbtu=zggc.decrypt(zggb);return zbtu;}
;zgej.prototype.zggf=function(zggg){var zwp=this.zgem+"/rf-api/"+encodeURI(this.zgen);if(typeof zggg!=zfhx){zwp+=zggg;}
return zwp;};zgej.prototype.zggh=function(path,zcvc,zcda,zfjt,zfju,zcvd){var zatm=[];var zggi=false;if(zcvd){zatm.push(this.zgen);zfjt({"list":zatm,"bAll":zggi}
);return;}if(!path){!zcvc?zatm.push(this.zgen):zggi=true;}
else{if(!zfzc.zfuw(path,false)){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_InvalidPath"],"Invalid path = '"+path+"'"));}
return;}var zfts=zfzc.zfvd(path,zcda);zatm.push(zfts["id"]);}
zfjt({"list":zatm,"bAll":zggi});return;};zgej.prototype.zggj=function(zagq,zbjb,zfjt,zfju){var self=this;var zcwz="internal_updateAppData";var zasi=zfht["APP_DATA"];zcte(zfhv+zcwz+" action='"+zbjb+"'",zwf,zctf["FUNC_INOUT"]);var zful=zagq[zgdi][zgdf];var zfcl=zful.substr(zful.lastIndexOf("."));var zcda=zawd.zfuv(zfcl);if((ztk["RfItemType_Login"]>zcda)||(zcda>ztk["RfItemType_Safenote"])){return;}
function zggk(){zcte(zfhv+zcwz+" .updateRepositoryMru action='"+zbjb+"'",zwf,zctf["FUNC_INOUT"]);if(zbjb==zfrm||zbjb==zfrp){var zggl=zagq[zgdi][zged];var zggm=zagq[zgdi][zgee];if(zggl){zfzc.zfuk(zfpz["usiRecentlyUsedList"],zful);}
if(zggm){zfzc.zfuk(zfpz["usiFavouritesList"],zful);}
self[zgbl](zasi,self.zgen,function zggn(zhw){zcte("RfDataManager."+zcwz+"."+zbjb+". save_OK ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfjt)!=zfhx){zfjt(zhw);}
return true;},function zggo(zcpb){zcte("RfDataManager."+zcwz+"."+zbjb+". save_Error ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;},true);}zcte(zfhw+zcwz+" .updateRepositoryMru action='"+zbjb+"'",zwf,zctf["FUNC_INOUT"]);}
;if(zbjb==zfrm||zbjb==zfrp){var zggl=zagq[zgdi][zged];var zggm=zagq[zgdi][zgee];if(!zggl&&!zggm){return;}
if(!zfzc.zfse(zasi,self.zgen)){self[zgbi](function zggp(zggq){zcte("RfDataManager."+zcwz+"."+zbjb+".  STEP 1. GET from server OFS='"+zasi+"'  Account='"+self.zgen+"'  Status='"+zggq+"' ->",zwf,zctf["FUNC_INOUT"]);if(zggq==404){var zfuj=Math.round(new Date()/1000);var body={"recentlyUsed":{"list":[]}
,"favorites5":{},"recentlyViewed":{"list":[]},"usageCounters":{"list":[]}
};body=JSON.stringify(body);var zggr={"i":{"F":true}
,"c":[{"i":{"c":zfuj,"m":zfuj,"f":true,"s":0,"n":"mru.rfo"}
,"b":body}]
};zfzc.zauy(zggr,zasi,self.zgen);zggk();return;}
if(zggq==zcue){zggk();return;}},function zggs(zcpb){}
,zasi,self.zgen);}else{zggk();}}zcte(zfhw+zcwz+" action='"+zbjb+"'",zwf,zctf["FUNC_INOUT"]);return;}
;zgej.prototype.zggt=function(zagq,zbjb,zfjt,zfju,file){var zcwz="internal_RepositoryAction";var zfla="RfDataManager."+zcwz;try{var zggu=false;var zggv=[];var self=this;var zasi=typeof(file)!=zfhx?file:zfht["USER_DATA"];var zftg=[];zcte("-> "+zfla+" ACTION="+zbjb,zwf,zctf["FUNC_INOUT"]);function zggw(){zcte(zfla+"."+zbjb+".  STEP 2. Call repo function ->",zwf,zctf["FUNC_INOUT"]);zfzc[zbjb](zagq,function zggx(zgv,zggy,zggz){try{if(zggu){self.zgha("OnAccountChanged",{"accounts":zggv}
);}if(!zgv){zcte(zfla+"."+zbjb+". RepoAnswerCallBack. Repository returned NULL. Return",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(undefined,zgcv,undefined,undefined,"NotFound"));}
return;}zcte(zfla+"."+zbjb+". RepoAnswerCallBack. Repository returned result="+zgv+" NeedToSave="+zggy+" savedAccounts='"+zggz.join()+"'",zwf,zctf["FUNC_INOUT"]);if(zggy){var zghb=zggz.length;var zghc=0;for(var zcw=0;zcw<zggz.length;zcw++){self[zgbh](function zghd(zgeh){zghc++;zcte(zfla+"."+zbjb+". putOFS_AnswerCallback -> counter="+zghc+" all="+zghb,zwf,zctf["FUNC_INOUT"]);if(zghc==zghb){if(typeof(zfjt)!=zfhx){zcte(zfla+"."+zbjb+". ***putOFS_AnswerCallback*** ->",zwf,zctf["FUNC_INOUT"]);zfjt(zgeh.status);}
}return;},function zghe(zanz){zghc++;zcte(zfla+"."+zbjb+". ***putOFS_ErrorCallback*** ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zanz);}
return;},file,zggz[zcw]);}}else{if(zbjb==zfrh||zbjb==zfri||zbjb==zfrj||zbjb==zfrl){if(typeof(zfjt)!=zfhx){zcte(zfla+"."+zbjb+". RepoAnswerCallBack. ***AnswerCallBack*** ->",zwf,zctf["FUNC_INOUT"]);zfjt(zgv);}
}else if(zbjb==zfrm||zbjb==zfrp){if(typeof(zfjt)!=zfhx){zfjt(zgv,zcue);}
self.zggj(zagq,zbjb);}else if(zbjb==zfrk||zbjb==zfrn||zbjb==zfrw){if(typeof(zfjt)!=zfhx){zfjt(zgv,zcue);}
}else{if(typeof(zfjt)!=zfhx){zfjt(zcue);}}}return;}
catch(zghf){self.zgfm(zfla+":RepoAnswerCallBack. Action='"+zbjb+"'",zghf,zfju);}
},function zghg(zcpb){if(zggu){self.zgha("OnAccountChanged",{"accounts":zggv}
);}if(typeof(zfju)!=zfhx){zfju(zcpb);}return;});};function zghh(){try{zcte(zfla+"."+zbjb+".  #STEP 1.1# GET shared accounts from server(if needed)  ->",zwf,zctf["FUNC_INOUT"]);var zghi=zfzc.zftz();if(!zghi.length){zggw();return;}
var zghb=zghi.length;var zghc=0;var zghj=false;for(var zcw=0;zcw<zghi.length;zcw++){var zftp=zghi[zcw];if(!zfzc.zfse(zasi,zftp[RfapiJS.ACCOUNT_ID_PROP])){zcte(zfla+"."+zbjb+".  #STEP 1.1#. Need to get FROM SERVER: sharedAccount='"+zftp[RfapiJS.ACCOUNT_ID_PROP]+"' ->",zwf,zctf["FUNC_INFO"]);if(zftp["licenseExpired"]){zcte(zfla+"."+zbjb+".  #STEP 1.1#. LICENCE IS EXPIRED!!! sharedAccount='"+zftp[RfapiJS.ACCOUNT_ID_PROP]+"' ->",zwf,zctf["FUNC_INFO"]);zghc++;if(zghc==zghb){zggw();}
continue;}if((typeof zftp["accountInfo"]["isAllowedIP"]==zfhx)||(zftp["accountInfo"]["isAllowedIP"]==false)){zcte(zfla+"."+zbjb+".  #STEP 1.1#. IP IS NOT ALLOWED!!! sharedAccount='"+zftp[RfapiJS.ACCOUNT_ID_PROP]+"' ->",zwf,zctf["FUNC_INFO"]);zghc++;if(zghc==zghb){zggw();}
continue;}self[zgbi](function zghk(zhw,zghl){zcte(zfla+"."+zbjb+".getShared_OkCallBack.  STEP 1. GET from server OFS='"+zasi+"'  status='"+zhw+"' ->",zwf,zctf["FUNC_INOUT"]);if(zhw!=zcue){zghc++;zcte(zfla+"."+zbjb+".getShared_OkCallBack. HttpStatus for account("+zghl+") is="+zhw,zwf,zctf["INFO"]);if(zghc==zghb){zggw();}
return;}zghc++;zcte(zfla+"."+zbjb+". getShared_OkCallBack. n_counter="+zghc+" all="+zghb,zwf,zctf["INFO"]);if(zghc==zghb){zggw();}
return;},function zghm(zcpb){zcte(zfla+"."+zbjb+".getShared_ErrorCallBack.  STEP 1. OFS='"+zasi+"'  Account='"+zftp[RfapiJS.ACCOUNT_ID_PROP]+" ->",zwf,zctf["FUNC_INOUT"]);zghc++;zwe("ERROR in "+zfla+".getShared_ErrorCallBack1.  "+zcpb["Description"],zwf);if(zghc==zghb){zggw();}
return;},zasi,zftp[RfapiJS.ACCOUNT_ID_PROP]
);}else{zcte(zfla+"."+zbjb+".  #STEP 1.1#. IN MEMORY: sharedAccount='"+zftp[RfapiJS.ACCOUNT_ID_PROP]+"' n_counter="+zghc+" all="+zghb+"->",zwf,zctf["FUNC_INOUT"]);self[zgbm](function zghn(zhw,zghl,zdtm){zghc++;zcte(zfla+".getSharedWithCheck_OkCallBack. n_counter="+zghc+" all="+zghb+" changed="+zdtm+" acct_Inner="+zghl,zwf,zctf["INFO"]);if(zdtm){zggu=true;zggv.push(zghl);zcte(zfla+".getSharedWithCheck_OkCallBack. CHANGED_OUTSIDE='"+zghl+"'",zwf,zctf["INFO"]);}
if(zghc==zghb){zggw();}return;},function zgho(zcpb){zghc++;zwe("ERROR in "+zfla+".getSharedWithCheck_ErrorCallBack  "+zcpb["Description"],zwf);if(zghc==zghb){zggw();}
return;},zasi,zftp[RfapiJS.ACCOUNT_ID_PROP]
);}}zcte(" <- "+zfla+"."+zbjb+".  #STEP 1.1# GET shared accounts from server(if needed)",zwf,zctf["FUNC_INOUT"]);return;}
catch(zghp){self.zgfm(zfla+":getSharedAccounts. Action='"+zbjb+"'",zghp,zfju);}
};function zghq(){zcte(zfla+".getAllAccounts. #STEP 1(a)#  ->",zwf,zctf["FUNC_INOUT"]);if(!zfzc.zfse(zasi,self.zgen)){self[zgbi](function zghr(zggq){zcte(zfla+"."+zbjb+".  STEP 1(a). GET from server OFS='"+zasi+"'  Account='"+self.zgen+"'  Status='"+zggq+"' ->",zwf,zctf["FUNC_INOUT"]);if((zbjb==zfrk)&&(zggq!=zcue)){if(typeof(zfjt)!=zfhx){zfjt([],zggq);}
}else{zghh();}},zfju,zasi,self.zgen);}else{self[zgbm](function zghs(zhw,zcwo,zdtm){zcte(zfla+".getUserData_OkCallBack.  changed="+zdtm+" -> ",zwf,zctf["INFO"]);if(zdtm){zggu=true;zggv.push(zcwo);zcte(zfla+".getUserData_OkCallBack. CHANGED_OUTSIDE='"+zcwo+"'",zwf,zctf["INFO"]);}
zghh();return;},zfju,zasi,self.zgen);}zcte(" <- "+zfla+".getAllAccounts. #STEP 1(a)#",zwf,zctf["FUNC_INOUT"]);return;}
;function zght(){zcte(zfla+".getAccounts. #STEP 1(b)#  ->",zwf,zctf["FUNC_INOUT"]);function zghu(){zcte(zfla+".getAccounts.funcStep2  ->",zwf,zctf["FUNC_INOUT"]);var zghb=zftg.length;var zghc=0;for(var zcw=0;zcw<zftg.length;zcw++){var zghv=zftg[zcw];if(!zfzc.zfse(zasi,zghv)){self[zgbi](function zghw(zhw,zghl){zcte(zfla+"."+zbjb+" getAccount_OkCallBack. funcStep2. GET from server OFS='"+zasi+"'  status='"+zhw+"' ->",zwf,zctf["FUNC_INOUT"]);if(zhw!=zcue){zghc++;zcte(zfla+"."+zbjb+". getAccount_OkCallBack. funcStep2. HttpStatus for account("+zghl+") is="+zhw,zwf,zctf["INFO"]);if(zghc==zghb){if((zbjb==zfrk)&&(zhw!=zcue)){if(typeof(zfjt)!=zfhx){zfjt([],zhw);}
}else{if(zghb==1){if(zhw==zgcw){if(typeof(zfju)!=zfhx){zfju({"Code":zhw,"Description":zasi+" not found."
}
);}}else{if(typeof(zfju)!=zfhx){zfju({"Code":zhw,"Description":"Server error"
}
);}}}else{zggw();}}}return;}zghc++;zcte(zfla+"."+zbjb+". getAccount_OkCallBack. funcStep2. n_counter="+zghc+" all="+zghb,zwf,zctf["INFO"]);if(zghc==zghb){if((zbjb==zfrk)&&(zhw!=zcue)){if(typeof(zfjt)!=zfhx){zfjt([],zhw);}
}else{zggw();}}return;},function zghx(zcpb){zcte(zfla+"."+zbjb+". getAccount_ErrorCallBack. funcStep2. STEP 1. OFS='"+zasi+"' ->",zwf,zctf["FUNC_INOUT"]);zghc++;if(typeof(zfju)!=zfhx){zfju(zcpb);}
return;},zasi,zghv);}else{zcte(zfla+".getAccounts.funcStep2. Check eTag...",zwf,zctf["FUNC_INOUT"]);self[zgbk](function zghy(zghz,zggq,zghl){zcte(zfla+".get_eTag  get_eTag_AnswerCallback. funcStep2. #STEP 1(b)#.  serverTag='"+zghz+"' acct_Inner="+zghl,zwf,zctf["FUNC_INOUT"]);if(!zghz){zcte(zfla+".get_eTag  get_eTag_AnswerCallback. funcStep2. #STEP 1(b)#. There is no file on server. Call Repository function(if last)",zwf,zctf["FUNC_INFO"]);zghc++;if(zghc==zghb){zggw();}
return;}var zgia=self.zgfw(zghl,zasi);if(zgia==zghz){zcte(zfla+".get_eTag  get_eTag_AnswerCallback. funcStep2.  #STEP 1(b)#. eTags are equal. Call Repository function(if last)",zwf,zctf["FUNC_INFO"]);zghc++;if(zghc==zghb){zggw();}
return;}zcte(zfla+".get_eTag  get_eTag_AnswerCallback. funcStep2. #STEP 1(b)#. eTags are NOT equal. GET NEW VERSION FROM SERVER",zwf,zctf["FUNC_INFO"]);zfzc.zfsf(zghl,zasi);zggu=true;zggv.push(zghl);zght();return;}
,function zgib(zcpb){zcte(zfla+".get_eTag  get_eTag_ErrorCallback. funcStep2.",zwf,zctf["FUNC_INOUT"]);zghc++;if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;},zasi,zghv);}}zcte(zfla+".getAccounts.funcStep2 <-",zwf,zctf["FUNC_INOUT"]);return;}
function zgic(){zcte(zfla+".getAccounts. funcStep1  ->",zwf,zctf["FUNC_INOUT"]);if((zftg.length==1)&&(zasi==zfht["USER_DATA"])){if(!zfzc.zfse(zfht["USER_DATA"],self.zgen)){self[zgbi](function zghw(zhw,zghl){zcte(zfla+"."+zbjb+" getAccount_OkCallBack. funcStep1. GET from server OFS='"+zfht["USER_DATA"]+"'  status='"+zhw+"' ->",zwf,zctf["FUNC_INOUT"]);if(zhw!=zcue){if(zhw==zgcw){if(typeof(zfju)!=zfhx){zfju({"Code":zhw,"Description":zfht["USER_DATA"]+" not found."
}
);}}else{if(typeof(zfju)!=zfhx){zfju({"Code":zhw,"Description":"Server error"}
);}}}else{zghu();}return;},function zghx(zcpb){zcte(zfla+"."+zbjb+". getAccount_ErrorCallBack. funcStep1. STEP 1. OFS='"+zfht["USER_DATA"]+"' for auth user. ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
return;},zfht["USER_DATA"],self.zgen);}else{zghu();}
}else{zghu();}return;}zgic();zcte(" <- "+zfla+".getAccounts. #STEP 1(b)#",zwf,zctf["FUNC_INOUT"]);return;}
;var zcda;var path="";var zcvc=false;var zcvd=false;if(zbjb==zfrw){path=zagq[zgdi][zgdf];zcvc=zagq[zgdi][zgdj];zcda=ztk["RfItemType_Folder"];zcvd=typeof zagq[zgdi]["bExcludeShared"]==zfhx?false:zagq[zgdi]["bExcludeShared"];}
else if(zbjb==zfru){path=zagq[zgdi][zgdm][zgdf];zcda=zagq[zgdi][zgdm][zgde];var zgid=zfzc.zfvd(path,zcda);zftg.push(zgid["id"]);var zgie=zagq[zgdi][zgdl][zgdf];var zgif=zfzc.zfvd(zgie,zcda);if(zgid["id"]!=zgif["id"]){zftg.push(zgif["id"]);}
zght();return;}else if(zbjb==zfrt){path=zagq[zgdi][zgdm][zgdf];zcda=zagq[zgdi][zgdm][zgde];}
else if(zbjb==zfrs){path=zagq[zgdi][zgdf];zcda=zagq[zgdi][zgde];}
else if(zbjb==zfrv||zbjb==zfrp){path=zagq[zgdi][zgdf];zcda=zagq[zgdi][zgde];}
else if(zbjb==zfrm){path=zagq[zgdi][zgdf];var zfcl=path.substr(path.lastIndexOf("."));zcda=zawd.zfuv(zfcl);}
else if(zbjb==zfrl){path=zagq[zgdi][zgdf];var zfcl=path.substr(path.lastIndexOf("."));zcda=zawd.zfuv(zfcl);}
else if(zbjb==zfrj){path=zagq[zgdi][zgdf];zcvc=zagq[zgdi][zgdj];zcvd=zagq[zgdi]["bExcludeShared"];zcda=ztk["RfItemType_Folder"];if(zcvd){zftg.push(self.zgen);zght();return;}
}else if(zbjb==zfri||zbjb==zfrh){zcvc=true;zcda=ztk["RfItemType_Folder"];zcvd=typeof zagq[zgdi]["bExcludeShared"]==zfhx?false:zagq[zgdi]["bExcludeShared"];}
else if(zbjb==zfrn){zcvc=zagq[zgdi][zgdj];zcda=ztk["RfItemType_Folder"];}
else if(zbjb==zfrr){path=zagq[zgdi]["folder"];zcda=ztk["RfItemType_Folder"];var zgig=path;if(zgig.startsWith("/")){zgig=zgig.substr(1);}
var zep=zgig.indexOf("/");if(zep==-1){zftg.push(self.zgen);zght();return;}
}else if(zbjb==zfrq||zbjb==zfrk){zftg.push(self.zgen);zght();return;}
else{return;}zcte(zfla+" ACTION="+zbjb+" STEP 1. Get needed accounts names...",zwf,zctf["FUNC_INOUT"]);self.zggh(path,zcvc,zcda,function zgih(zgv){zftg=zgv["list"];var zggi=zgv["bAll"];zggi==true?zghq():zght();}
,function zgii(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return;},zcvd);zcte("<- "+zfla+" ACTION="+zbjb,zwf,zctf["FUNC_INOUT"]);return;}
catch(zdn){this.zgfm(zfla+"-"+zbjb,zdn,zfju);}};zgej.prototype.zgij=function(zcwz,zgik,body,zgfl,zgil,zgim,zfky,zgin,zsv,zfjt,zfju){var self=this;zcte("-> RfDataManager.internal_RequestAsync. Command='"+zcwz+"'. Make ASYNC "+zgil+" request to "+zgik,zwf,zctf["INFO"]);self.zgio(zgik,body,zgfl,zgil,zgim,zfky,function zmw(zgeh,zdn){try{zcte("-> RfDataManager.makeRequestAsync.callback Command='"+zcwz+"'",zwf,zctf["FUNC_INOUT"]);var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte("RfDataManager Command='"+zcwz+"' checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(zgin){var zgfh=self.zgfe(zgeh,zdn,zcwz,zfju);if(!zgfh){zcte("RfDataManager Command='"+zcwz+"' checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
}if(zgeh.status==zcue){zcte("RfDataManager.makeRequestAsync.callback Command='"+zcwz+"'. HttpResponse=OK.",zwf,zctf["INFO"]);if(zcwz==zgan||zcwz==zgay||zcwz==zfrl||zcwz==zgat||zcwz==zgav){if(typeof(zfjt)!=zfhx){var zcox=JSON.parse(zgeh.responseText);zfjt(zcox,zcue);}
return;}else if(zcwz==zgaf){var url=zgik;var zfvy=url.substr(url.lastIndexOf("/")+1);if(zfvy.lastIndexOf("?")>0){zfvy=zfvy.substr(0,zfvy.lastIndexOf("?"));}
if(typeof(zfjt)!=zfhx){var zcox=JSON.parse(zgeh.responseText);zfjt(zcox,zcue,zfvy);}
return;}else if(zcwz==zfzn){if(typeof(zfjt)!=zfhx){zfjt(zgfh);}
return;}else if(zcwz==zfzs||zcwz==zfzt||zcwz==zfzu){if(typeof(zfjt)!=zfhx){zfjt(zcue,zgeh);}
return;}else if(zcwz==zfzv||zcwz==zfzw){if(typeof(zfjt)!=zfhx){var zcox=JSON.parse(zgeh.responseText);zfjt(zcox);}
return;}else if(zcwz==zfrr||zcwz==zfrs||zcwz==zgau||zcwz==zfrt||zcwz==zfru||zcwz==zfrv||zcwz==zgbr||zcwz==zgbs||zcwz==zgbt||zcwz==zgbn||zcwz==zfzy||zcwz==zfzx||zcwz==zgac||zcwz==zgab||zcwz==zfzz||zcwz==zgaa||zcwz==zfzo){if(typeof(zfjt)!=zfhx){zfjt(zcue);}
return;}else if(zcwz==zfrj){if(typeof(zfjt)!=zfhx){var zcox=JSON.parse(zgeh.responseText);zfjt(zcox["response"]);}
return;}else if(zcwz==zfzq){if(typeof(zfjt)!=zfhx){var zcox=JSON.parse(zgeh.responseText);zfjt(zcox);}
return;}else if(zcwz==zfrw){var zgip=zgfh["items"];if(typeof(zfjt)!=zfhx){zfjt(zgip,zcue);}
return;}else if(zcwz==zfzi){self[zgca]();if(typeof(zfjt)!=zfhx){zfjt(zcue);}
return;}else if(zcwz==zgbq){if(typeof(zfjt)!=zfhx){var zxj=zgfh["options"];zfjt(zxj,zcue);}
return;}else if(zcwz==zfrm){if(typeof(zfjt)!=zfhx){zfjt(window.atob(zgfh["content"]),zcue);}
return;}else if(zcwz==zfrk){if(typeof(zfjt)!=zfhx){zfjt(zgfh["items"],zcue);}
return;}else if(zcwz==zfrh||zcwz==zfri){if(typeof(zfjt)!=zfhx){zfjt(zgfh,zcue);}
return;}else if(zcwz==zgag){var zgiq=zgeh.getResponseHeader("eTag");zcte("RfDataManager.makeRequestAsync.callback Command='"+zcwz+"'. headerAccountListTag="+zgiq,zwf,zctf["INFO"]);self.zger=zgiq;var zcox=JSON.parse(zgeh.responseText);if(typeof(zfjt)!=zfhx){zcte("RfDataManager.makeRequestAsync.callback Command='"+zcwz+"'.  Try to parse responseText...",zwf,zctf["INFO"]);zcte("RfDataManager.makeRequestAsync.callback Command='"+zcwz+"'. Call answerCallback with JSONResp='"+zcox+"'",zwf,zctf["INFO"]);zfjt(zcox,zcue);}
return;}else if(zcwz==zfro||zcwz==zfrp){var zcsg=zgfh["data"];if(typeof(zfjt)!=zfhx){zfjt(zcsg,zcue);}
return;}else if(zcwz==zgai){if(typeof(zfjt)!=zfhx){zfjt(zgeh.responseText,zcue);}
return;}else if(zcwz==zfzm){if(typeof(zfjt)!=zfhx){zfjt(zcue);}
return;}else if(zcwz==zgah){if(typeof(zfjt)!=zfhx){var zcox=JSON.parse(zgeh.responseText);zfjt(zcox,zcue);}
return;}else if(zcwz==zgaj){if(typeof(zfjt)!=zfhx){var zcox=JSON.parse(zgeh.responseText);zfjt(zcox);}
return;}else if(zcwz==zgam){if(zgeh.status==zcue){if(zgeh.responseText){try{var zgir=JSON.parse(zgeh.responseText);var zgis=zgir[zgdp][zgdo];if(zgis=="error"){zcte("RfDataManager Command='"+zcwz+". Server returns status=error.",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zcud["SibTErr_ServerErr"],"Server returns status=error."+zgeh.responseText,zgir[zgdp]));}
return;}if(zgis=="ok"){if(typeof(zfjt)!=zfhx){zfjt(zgeh.responseText,zcue);}
return;}}catch(zgit){zcte("RfDataManager Command='"+zcwz+". Error while parsing JSON response",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zcud["SibTErr_ServerErr"],"Error Parsing JSON response"));}
return;}}}else{if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));}
}return;}else if(zcwz==zgak||zcwz==zgal||zcwz==zgas||zcwz==zgbu||zcwz==zgaw||zcwz==zgbb||zcwz==zgbc||zcwz==zgbd||zcwz==zgbe||zcwz==zgaz||zcwz==zgba||zcwz==zgax||zcwz==zgar||zcwz==zgao||zcwz==zgaq||zcwz==zgap){if(typeof(zfjt)!=zfhx){zfjt(zgeh.responseText,zcue);}
return;}else if(zcwz==zfzl){var zcox=JSON.parse(zgeh.responseText);if(zsv["getUserInfo"]){if(typeof(zfjt)!=zfhx){zfjt(zcox);}
return;}var zcpa=zcox["oneFile"];zcpa=typeof(zcpa)==zfhx?false:zcpa;self[zgce](zcpa?1:2);self[zgci](zsv["userId"]);if(zcpa){function zgiu(zghi){if(zcox["updateTrustedUsers"]){self[zfzp](function zgiv(zakw){zcte("RfDataManager Command='"+zcwz+"._Ok : Trusted user's password were updated...",zwf,zctf["SPECIAL_CASE"]);return;}
,function zgiw(zcpb){zcte("RfDataManager Command='"+zcwz+"._Error: while updating trusted user's passwords.",zwf,zctf["SPECIAL_CASE"]);return;}
)}if(typeof(zfjt)!=zfhx){zcox["receivedData"]=zghi;zfjt(zcox);}
return;}function zgix(zgiy,zghi){var zalb=0;for(var zfir in zgiy){zalb++;}
if(!zalb){zgiu(zghi);return;}for(var zfir in zgiy){var zfsd=zfir;var zgiz=zgiy[zfir];self[zgai](zfsd,function zgja(){zalb--;if(!zalb){zgiu(zghi);return;}
return;},function zgjb(){zalb--;if(!zalb){zgiu(zghi);return;}
return;},zgiz,undefined,undefined,undefined,self.zgen,undefined);}
return;};self[zgag](function zgjc(zghi,zcut){zcte("-> RfDataManager. "+zcwz+".GetAccounts_AnswerCallBack. shared.length="+zghi["accounts"].length,zwf,zctf["FUNC_INOUT"]);var zgiy=zfzc.zftf(zghi["accounts"]);zgix(zgiy,zghi);return;}
,function zgjd(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;});}else{self[zgag](function zgje(zgjf,zcut){zcte("-> RfDataManager. "+zcwz+".GetReceivedDataMulti_AnswerCallBack",zwf,zctf["FUNC_INOUT"]);zcox["receivedData"]=zgjf;if(typeof(zfjt)!=zfhx){zfjt(zcox);}
return;},function zgjg(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;});zcte("RfDataManager Command='"+zcwz+"' <-",zwf,zctf["FUNC_INOUT"]);}
return;}else if(zcwz==zfzf){if(zgfh[zgdo]=="ok"){zcte("RfDataManager Command='"+zcwz+"'. JSONResponse=OK",zwf,zctf["INFO"]);var zgjh=parseInt(zgfh["dataStatus"]);self[zgce](zgjh);self[zgci](zsv["userId"]);if(zgjh==0){if(typeof(zfjt)!=zfhx){zfjt(zgjh);}
}else{if(zgjh==1){function zgji(zgiy,zhw){var zalb=0;for(var zfir in zgiy){zalb++;}
if(!zalb){if(typeof(zfjt)!=zfhx){zfjt(zhw);}return;}
for(var zfir in zgiy){var zfsd=zfir;var zgiz=zgiy[zfir];self[zgai](zfsd,function zgja(){zalb--;if(!zalb){if(typeof(zfjt)!=zfhx){zfjt(zhw);}
return;}return;},function zgjb(){zalb--;if(!zalb){if(typeof(zfjt)!=zfhx){zfjt(zhw);}
return;}return;},zgiz,undefined,undefined,undefined,self.zgen,undefined);}
return;};self[zgag](function zgjc(zghi,zcut){zcte("-> RfDataManager. "+zcwz+".GetAccounts_AnswerCallBack. shared.length="+zghi["accounts"].length,zwf,zctf["FUNC_INOUT"]);var zgiy=zfzc.zftf(zghi["accounts"]);zgji(zgiy,zgjh);return;}
,function zgjd(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;});}else{if(typeof(zfjt)!=zfhx){zfjt(zgjh);}
}}}return;}else if(zcwz==zfrn){var zfva=zsv["filter"];var zgip=zgfh["items"];var zgv=[];for(var zcw=0;zcw<zgip.length;zcw++){var item=zgip[zcw];var zans=item[zgdf];zans=zans.toLowerCase();var zfvc=zans.substr(zans.lastIndexOf("/")+1);if(item[zgde]!=ztk["RfItemType_Folder"]){zfvc=zfvc.substr(0,zfvc.lastIndexOf("."));}
if(((zfva.length>2)&&(zfvc.lastIndexOf(zfva)==-1))){continue;}
if(zfva.length<=2){if(zfvc.lastIndexOf(zfva)==-1){continue;}
if((zfvc.indexOf(zfva)!=0)&&zawd.zcre(zfvc,zfva,' ')==false&&zawd.zcre(zfvc,zfva,'.')==false&&zawd.zcre(zfvc,zfva,'-')==false&&zawd.zcre(zfvc,zfva,'_')==false){continue;}
}zgv.push(item);}if(typeof(zfjt)!=zfhx){zfjt(zgv,zcue);}
return;}}if(typeof(zfju)!=zfhx){var zgfi=!zgeh.responseText?zgeh.statusText:zgeh.responseText;zfju(new zfpw(zgeh.status,zgfi,undefined,zgeh,undefined));return false;}
zcte("RfDataManager Command='"+zcwz+"' <-",zwf,zctf["FUNC_INOUT"]);return true;}
catch(zhj){self.zgfm("RfDataManager.makeRequestAsync.callback",zhj,zfju);}
})};zgej.prototype.zgjj=function(zant,zfju){for(var zlf in zant){if(zlf=="ACCOUNT_MODE"){if(zant[zlf]==-1){zcte("RfDataManager.misc_checkParameters. '"+zlf+"' is undefined. Return false.",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(undefined,zlf+" is empty or undefined.",undefined,undefined,"LocalErr"));}
return false;}}else{if(!zant[zlf]){zcte("RfDataManager.misc_checkParameters. '"+zlf+"' is undefined. Return false.",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(undefined,zlf+" is empty or undefined.",undefined,undefined,"LocalErr"));}
return false;}}}return true;};zgej.prototype.zgjk=function(zwp,zlq,zgfl,zgil,zgim){try{var zgeh=false;if(window.XMLHttpRequest){zgeh=new XMLHttpRequest();}
else if(window.ActiveXObject){zgeh=new zgjl("Microsoft.XMLHTTP");}
zgeh.open(zgil,zwp,false);if(zgim){zgeh.overrideMimeType('text/plain; charset=x-user-defined');}
for(var zgp in zgfl){zgeh.setRequestHeader(zgp,zgfl[zgp]);}
zgeh.send(zlq);if(zgeh.status==zcue){return zgeh;}
return null;}catch(zhj){zcte("ERROR in RfDataManager.makeSyncRequest: "+zhj.toString(),zwf,zctf["EXCEPTION"]);return null;}
};zgej.prototype.zgio=function(zwp,zlq,zgfl,zgil,zgim,zfky,zmw,zgjm){try{var zgeh=null;if(typeof zgjm==zfhx){if(window.XMLHttpRequest){zgeh=new XMLHttpRequest();}
else if(window.ActiveXObject){zgeh=new zgjl("Microsoft.XMLHTTP");}
}else{zgeh=zgjm;}zgeh.open(zgil,zwp,true);if(zfky){zgeh.responseType="arraybuffer";}
zgeh.onreadystatechange=function(){if(zgeh.readyState===4){zcte("RfDataManager.makeRequestAsync. Changes to readyState="+zgeh.readyState+"  Status="+zgeh.status,zwf,zctf["INFO"]);zmw(zgeh,null);}
};if(zgim&&zgeh.overrideMimeType){zgeh.overrideMimeType('text/plain; charset=x-user-defined');}
for(var zgp in zgfl){zgeh.setRequestHeader(zgp,zgfl[zgp]);}
if(!zif){zgeh.send(zlq);}else{if(zfky&&zlq&&zlq.buffer){zgeh.send(zlq.buffer);}
else{zgeh.send(zlq);}}}catch(zhj){zcte("ERROR in RfDataManager.makeRequestAsync: "+zhj.toString(),zwf,zctf["EXCEPTION"]);zmw(zgeh,new zfpw(undefined,zhj.toString(),zhj,zgeh,"CatchedException"));}
};zgej.prototype.zgjn=function(zfew){var zgjo=new Uint8Array(zfew);if(zfza){var arr=[];for(var zcw=0;zcw<zgjo.length;zcw++){arr.push(zgjo[zcw]);}
return arr;}else{return zgjo;}};zgej.prototype.zgjp=function(zfkt,zfyp){function zgjq(zfb){if(zfb[RfapiJS.ITEM_INFO_PROP]&&zfb[RfapiJS.ITEM_INFO_PROP][RfapiJS.ITEM_NAME_PROP]){var zasi=zfb[RfapiJS.ITEM_INFO_PROP][RfapiJS.ITEM_NAME_PROP];try{var zgjr=zfyp?decodeURIComponent(escape(zasi)):unescape(encodeURIComponent(zasi));zcte("escapeDecodeFileNames  name='"+zasi+"'  decodedName='"+zgjr+"'",zwf,zctf["INFO"]);zfb[RfapiJS.ITEM_INFO_PROP][RfapiJS.ITEM_NAME_PROP]=zgjr;}
catch(zdn){zwe("EXCEPTION in convertUTF8Strings while decode filename='"+zasi+"'.  ERROR='"+zdn.toString(),zwf);}
}var body=zfb[RfapiJS.ITEM_BODY_PROP];var zfuy=((typeof zfb[RfapiJS.ITEM_ENCODED_PROP]!=zfhx)&&(zfb[RfapiJS.ITEM_ENCODED_PROP]==true))?true:false;if((typeof(body)!=zfhx)&&!zfuy){try{var zgjs=zfyp?decodeURIComponent(escape(body)):unescape(encodeURIComponent(body));if(zfb[RfapiJS.ITEM_INFO_PROP]&&zfb[RfapiJS.ITEM_INFO_PROP][RfapiJS.ITEM_NAME_PROP]){zcte("escapeDecodeFileNames  decode body for='"+zfb[RfapiJS.ITEM_INFO_PROP][RfapiJS.ITEM_NAME_PROP]+"'",zwf,zctf["INFO"]);}
zfb[RfapiJS.ITEM_BODY_PROP]=zgjs;}catch(zdti){zwe("EXCEPTION in convertUTF8Strings while decode BODY for filename='"+zfb[RfapiJS.ITEM_INFO_PROP][RfapiJS.ITEM_NAME_PROP]+"'.  ERROR='"+zdti.toString(),zwf);}
}var zgh=zfb["c"];if(zgh){for(var zcw=0;zcw<zgh.length;zcw++){zgjq(zgh[zcw]);}
}};zgjq(zfkt);};zgej.prototype.zgjt=function(zgju){zcte("RfDataManager.ObjectOFSToBytes  ->",zwf,zctf["FUNC_INOUT"]);var zfjw=(new Date).getTime();var zfeq=JSON.stringify(zgju);var zgjv=zavo.zcxt(zfeq);var zfku=(new Date).getTime();var zfkv=zfku-zfjw;zcte("RfDataManager.ObjectOFSToBytes  <- TIME="+zfkv+"ms.",zwf,zctf["FUNC_INOUT"]);return zgjv;}
;zgej.prototype.zgjw=function(zgjx,zasi,zcwo){zcte("ParseOneFileDataString -> fileName='"+zasi+"' accountId='"+zcwo+"'",zwf,zctf["INFO"]);var self=this;function zgji(zgiy){var zalb=0;for(var zfir in zgiy){zalb++;}
if(!zalb){return;}for(var zfir in zgiy){var zfsd=zfir;var zgiz=zgiy[zfir];self[zgai](zfsd,function zgja(){zalb--;}
,function zgjb(){zalb--;},zgiz,undefined,undefined,undefined,self.zgen,undefined);}
return;};var zfkt=JSON.parse(zgjx);self.zgjp(zfkt,true);var zgiy=zfzc.zauy(zfkt,zasi,zcwo);zcte("ParseOneFileDataString -> changedNames='"+zgiy+"'",zwf,zctf["INFO"]);if(zcwo==self.zgen){zgji(zgiy);}
return;};zgej.prototype[zgbj]=function(zgjy,zasi,zfjt,zfju,zcwo,zyr){var zcwz=zgbj;var self=this;var zgjz=typeof(zgjy.byteLength)!=zfhx?true:false;var zgka=zgjz?self.zgjn(zgjy):zgjy;zcte("RfDataManager. "+zcwz+"  File='"+zasi+"' for account='"+zcwo+"' current='"+self.zgen+"' (convert to Uint8Array) Length="+zgka.length,zwf,zctf["INFO"]);var zgkb=self.zgev!=null?self.zgev:new RfapiJS.CRfOneFileSys();var zcov=(typeof(zcwo)==zfhx)?self.zgen:zcwo;var zcwv=zcov==self.zgen?self[zgcb]():zyr;zgkb.zfly(zgka,zasi,zcov,zcwv,true,function zgkc(zgv,zgkd){zcte("RfDataManager."+zcwz+". Ok_CallBack. Fill Repository with items!",zwf,zctf["INFO"]);try{self.zgjw(zgkd,zasi,zcov);}
catch(zdn){if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"[DECODE_OFSFILE_FUNC] Exception while ParseOneFileDataString: "+zdn.toString()+".  End of data:  ..."+zgkd.substring(zgkd.length-20)}
);}return false;}if(typeof(zfjt)!=zfhx){zfjt(zgv,zcov);}
return;},function zgke(zcpb){zcte("RfDataManager."+zcwz+". Error_CallBack.",zwf,zctf["INFO"]);if(zcpb["Code"]==zfhs["RfErr_AuthRejected"]){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_AuthRejected"],"Wrong Master Password."));return false;}
}else{if(typeof(zfju)!=zfhx){zfju(new zfpw(zcpb["Code"],zcpb["Description"]));return false;}
}return false;});return;};zgej.prototype[zgbl]=function(zasi,zcwo,zfjt,zfju,zgkf){var zcwz=zgbl;var zfla="RfDataManager."+zcwz;try{var self=this;zcte(zfhv+zfla+" fileName='"+zasi+"'  accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);function zgkg(){zcte(zfla+".put_OFS ->  ##STEP 4##  file='"+zasi+"'  accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);self[zgbh](function zgkh(zgeh){zcte(zfla+".put_OFS  put_OFS_OKCallback. #STEP 4#",zwf,zctf["FUNC_INOUT"]);if(typeof(zfjt)!=zfhx){zfjt(zgeh);}
return true;},function zgki(zcpb){zcte(zfla+".put_OFS  put_OFS_ErrorCallback. #STEP 4#",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;},zasi,zcwo);zcte(zfla+".put_OFS <-  ##STEP 4##  file='"+zasi+"'  accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);return;}
;function zgkj(zgkk,zghz){zcte(zfla+".merge_OFS ->  ##STEP 3##  file='"+zasi+"'  accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);var zgkl=zfzc.zfse(zasi,zcwo);var zgkm=zgkl[RfapiJS.ITEM_CHILDS_PROP];var zgkn=zgkk[RfapiJS.ITEM_CHILDS_PROP][1][RfapiJS.ITEM_CHILDS_PROP];zcte(zfla+".merge_OFS <-  ##STEP 3##  file='"+zasi+"'  accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);return;}
;function zgko(zghz){zcte(zfla+".get_ServerVersion ->  ##STEP 2##  file='"+zasi+"'  accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);if(zasi==zfht["USER_DATA"]&&zcwo==self.zgen){var file=zasi;var zgkp=zcwo;var zgik=self.zgem+"/rf-api/"+encodeURI(zcwo)+"/"+file;zcte(zfla+".get_ServerVersion  file='"+file+"' for account='"+zgkp+"'"+" . Current auth user is ='"+self.zgen+"'. Make request *GET* to "+zgik,zwf,zctf["INFO"]);var zgfl=self.zgfr();self.zgio(zgik,null,zgfl,"GET",true,true,function zmw(zgeh,zdn){zcte(zfla+".get_ServerVersion. makeRequestAsync callback ->",zwf,zctf["FUNC_INOUT"]);var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte(zfla+". checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var url=zgik;var zgkq=url.substr(url.lastIndexOf("/")+1);url=url.substr(0,url.lastIndexOf("/"));var zgkr=url.substr(url.lastIndexOf("/")+1);if(zgeh.status==zcue){zcte(zfla+" Return true. StatusCode is 200. File='"+zgkq+"' for account='"+zgkr+"' current='"+self.zgen+"'",zwf,zctf["INFO"]);var zgka=zgeh.response;var zyr=self[zgcb]();var zgks=self.zgjn(zgka);var zgkb=self.zgev!=null?self.zgev:new RfapiJS.CRfOneFileSys();zgkb.zfly(zgks,zgkq,zgkr,zyr,true,function zgkt(zgv,zgkd){zcte(zfla+". decode_Ok_CallBack ->",zwf,zctf["INFO"]);try{var zfkt=JSON.parse(zgkd);}
catch(zdn){if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"Exception while JSON.Parse: "+zdn.toString()+".  End of data:  ..."+zgkd.substring(zgkd.length-20)}
);}return false;}zgkj(zfkt,zghz);return;},function zgku(zcpb){zcte(zfla+". decode_Error_CallBack.",zwf,zctf["INFO"]);if(zcpb["Code"]==zfhs["RfErr_AuthRejected"]){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_AuthRejected"],"Wrong Master Password."));return false;}
}else{if(typeof(zfju)!=zfhx){zfju(new zfpw(zcpb["Code"],zcpb["Description"]));return false;}
}return false;});}});}zcte(zfla+".get_ServerVersion <-  ##STEP 2##  file='"+zasi+"'  accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);return;}
;function zgkv(){zcte(zfla+".get_eTag ->  ##STEP 1##  file='"+zasi+"'  accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);self[zgbk](function zghy(zghz,zggq){zcte(zfla+".get_eTag  get_eTag_AnswerCallback. #STEP 1#  serverTag='"+zghz+"'",zwf,zctf["FUNC_INOUT"]);if(!zghz){zcte(zfla+".get_eTag  get_eTag_AnswerCallback. There is no file on server-> just save it.",zwf,zctf["FUNC_INOUT"]);zgkg();return;}
var zgia=self.zgfw(zcwo,zasi);if(zgia==zghz){zcte(zfla+".get_eTag  get_eTag_AnswerCallback. eTags are equal. Just save it.",zwf,zctf["FUNC_INOUT"]);zgkg();return;}
zgko(zghz);return;},function zgib(zcpb){zcte(zfla+".get_eTag  get_eTag_ErrorCallback. #STEP 1#",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;},zasi,zcwo);zcte(zfla+".get_eTag <-  ##STEP 1##  file='"+zasi+"'  accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);return;}
;zgkf?zgkv():zgkg();zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return true;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgbg]=function(zfjt,zfju,zasi,zcwo){var zcwz=zgbg;var self=this;var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER_ID":self.zgen}
,zfju);if(!zgkw){zcte("RfDataManager."+zcwz+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var file=(typeof(zasi)==zfhx)?zfht["USER_DATA"]:zasi;var zgkp=(typeof(zcwo)==zfhx)?self.zgen:zcwo;var zgkx=Math.floor(Math.random()*10001);var zgik=self.zgem+"/rf-api/"+encodeURI(zgkp)+"/"+file+"?_"+zgkx;zcte("RfDataManager. "+zcwz+" file='"+file+"' for account='"+zgkp+"'"+" . Current auth user is ='"+self.zgen+"'. Make request *GET* to "+zgik,zwf,zctf["INFO"]);var zgfl=self.zgfr();self.zgio(zgik,null,zgfl,"GET",true,true,function zmw(zgeh,zdn){zcte("RfDataManager. "+zcwz+". makeRequestAsync callback ->",zwf,zctf["FUNC_INOUT"]);var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte("RfDataManager. "+zcwz+". checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var url=zgik;var zasi=url.substr(url.lastIndexOf("/")+1);if(zasi.lastIndexOf("?")>0){zasi=zasi.substr(0,zasi.lastIndexOf("?"));}
url=url.substr(0,url.lastIndexOf("/"));var zfvy=url.substr(url.lastIndexOf("/")+1);if(zgeh.status==zgcw){zcte("RfDataManager. "+zcwz+" StatusCode is "+zgeh.status+". file ='"+zasi+"' for account='"+zfvy+"' current='"+self.zgen+"'",zwf,zctf["INFO"]);if(typeof(zfjt)!=zfhx){zfjt(zgeh.status,zasi,zfvy,null);}
return true;}if(zgeh.status==zcue){zcte("RfDataManager. "+zcwz+" StatusCode is "+zgeh.status+". file ='"+zasi+"' for account='"+zfvy+"' current='"+self.zgen+"'",zwf,zctf["INFO"]);var zgky=typeof(zgeh.response)!=zfhx?true:false;var zgka=zgky?zgeh.response:zgeh.responseText;var zgkz=zgeh.getResponseHeader("eTag");if(typeof(zfjt)!=zfhx){zfjt(zgeh.status,zasi,zfvy,zgkz,zgka);}
return true;}zcte("RfDataManager. "+zcwz+" Return false. StatusCode is ='"+zgeh.status+"'  File='"+zasi+"' for account='"+zfvy+"' current='"+self.zgen+"'",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(-1,"HttpStatus error="+zgeh.status+" while getting file='"+zasi+"' for  account=["+zfvy+"]"));}
return false;})};zgej.prototype[zgbi]=function(zfjt,zfju,zasi,zcwo){var zcwz=zgbi;var self=this;var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER_ID":self.zgen}
,zfju);if(!zgkw){zcte("RfDataManager."+zcwz+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var file=(typeof(zasi)==zfhx)?zfht["USER_DATA"]:zasi;var zgkp=(typeof(zcwo)==zfhx)?self.zgen:zcwo;var zgkx=Math.floor(Math.random()*10001);var zgik=self.zgem+"/rf-api/"+encodeURI(zgkp)+"/"+file+"?_"+zgkx;zcte("RfDataManager. "+zcwz+" file='"+file+"' for account='"+zgkp+"'"+" . Current auth user is ='"+self.zgen+"'. Make request *GET* to "+zgik,zwf,zctf["INFO"]);var zgfl=self.zgfr();self.zgio(zgik,null,zgfl,"GET",true,true,function zmw(zgeh,zdn){zcte("RfDataManager. "+zcwz+". makeRequestAsync callback ->",zwf,zctf["FUNC_INOUT"]);var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte("RfDataManager. "+zcwz+". checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var url=zgik;var zasi=url.substr(url.lastIndexOf("/")+1);if(zasi.lastIndexOf("?")>0){zasi=zasi.substr(0,zasi.lastIndexOf("?"));}
url=url.substr(0,url.lastIndexOf("/"));var zfvy=url.substr(url.lastIndexOf("/")+1);if(zgeh.status==zgcw){zcte("RfDataManager. "+zcwz+" StatusCode is 404. file not found='"+zasi+"' for account='"+zfvy+"' current='"+self.zgen+"'",zwf,zctf["INFO"]);if(file==zfht["USER_DATA"]&&(!self.zgey(zfvy))){self[zgce](zarx["MULTIFILE"]);}
if(self.zgey(zfvy)){if(typeof(zfjt)!=zfhx){zfjt(zgcw,null,null,zfvy);}
}else{if(typeof(zfjt)!=zfhx){zfjt(zgcw);}}return true;}
if(zgeh.status==zcue){zcte("RfDataManager. "+zcwz+" Return true. StatusCode is 200. File='"+zasi+"' for account='"+zfvy+"' current='"+self.zgen+"'",zwf,zctf["INFO"]);var zgky=typeof(zgeh.response)!=zfhx?true:false;var zgka=zgky?zgeh.response:zgeh.responseText;var zgkz=zgeh.getResponseHeader("eTag");if(!self.zgey(zfvy)){var zyr=self[zgcb]();if(!zyr){if(typeof(zfju)!=zfhx){zfju(new zfpw(-1,"Master Password for current user is empty."));}
return false;}}else{var zyr=self.zgfx(zfvy);if(!zyr){if(typeof(zfju)!=zfhx){zfju(new zfpw(-1,"Cannot decrypt MasterPassword of shared account=["+zfvy+"]  with user RSA Private Key. "));}
return false;}}if(!self.zgey(zfvy)){zfzc.zfsc(self.zgen);self[zgce](zarx["OFS"]);}
self.zgfu(zgkz,zfvy,zasi);var zgla=zgky?zgka.byteLength:zgka.length;zcte("RfDataManager. "+zcwz+"  File='"+zasi+"' for account='"+zfvy+"' current='"+self.zgen+"' BYTES="+zgla,zwf,zctf["INFO"]);self[zgbj](zgka,zasi,zfjt,zfju,zfvy,zyr);return true;}
})};zgej.prototype[zgbh]=function(zfjt,zfju,zasi,zcwo){var zcwz=zgbh;var zfla="RfDataManager."+zcwz;try{var self=this;zcte(zfhv+zfla+" fileName='"+zasi+"'  accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER_ID":self.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var file=(typeof(zasi)==zfhx)?zfht["USER_DATA"]:zasi;var zgkp=(typeof(zcwo)==zfhx)?self.zgen:zcwo;var zgkb=self.zgev!=null?self.zgev:new RfapiJS.CRfOneFileSys();var zglb=zfzc.zfse(file,zgkp);var zcwv="";if(zgkp==self.zgen){zcwv=self[zgcb]();}
else{var zglc=self.zgfx(zgkp);if(!zglc){if(typeof(zfju)!=zfhx){zfju(new zfpw(-1,"Cannot decrypt account("+zgkp+") Master Password."));}
return;}zcwv=zglc;}var zgjv=self.zgjt(zglb);var zfjd=4096;zgkb.zfkx(zgjv,file,zgkp,zcwv,zfjd,true,function zgld(zgle){zcte(zfla+". encrypt_Ok callback ->",zwf,zctf["FUNC_INOUT"]);var zglf=new Uint8Array(zgle);var zgfv=self.zgfw(zgkp,file);var zgfl=self.zgfr(true);!zgfv?zgfl["If-None-Match"]="*":zgfl["If-Match"]=zgfv;var zgik=self.zgem+"/rf-api/"+encodeURI(zgkp)+"/"+file;zcte(zfla+". SAVE OFS "+zgik,zwf,zctf["INFO"]);self.zgio(zgik,zglf,zgfl,"POST",false,true,function zglg(zgeh,zdn){zcte(zfla+". makeRequestAsync.saveOFS_callback ->",zwf,zctf["FUNC_INOUT"]);var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte(zfla+". makeRequestAsync.saveOFS_callback failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(zgeh.status==zgcy){if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));}
return false;}if(zgeh.status==zgcz){if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));}
return false;}self.zgfu(zgeh.getResponseHeader("eTag"),zgkp,file);if(typeof(zfjt)!=zfhx){zfjt(zgeh);}
});return;},function zglh(zdq,zgli){zcte(zfla+". encrypt_Error callback ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zdq);}
if(zgli){zgli["function"]=zfla;self.zgfd(zgli);}return;}
);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return true;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgbo]=function(zfjt,zfju,zcwo,zaef){var zcwz=zgbo;zcte("RfDataManager."+zcwz+" ->",zwf,zctf["FUNC_INOUT"]);var zglj=1024;var zglk=zfyv.zgll(zglj);var zglm=zglk['Public_Pem'];var zgln=zglk['Private_Pem'];var zfuj=Math.round(new Date()/1000);var zggr={"i":{"F":true}
,"c":[{"b":zgln,"i":{"n":"private-key.pem","c":zfuj,"m":zfuj,"s":zgln.length,"f":true}
},{"i":{"F":true,"n":"root"},"c":[]}]
};if(!zaef&&(zcwo==this.zgen)){zfzc.zauy(zggr,zfht["USER_DATA"],zcwo);}
this[zgal](zglm,function zglo(zgeh){if(typeof(zfjt)!=zfhx){zfjt(zgeh);}
return true;},function zglp(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;},zcwo);zcte("RfDataManager."+zcwz+" <-",zwf,zctf["FUNC_INOUT"]);return;}
;zgej.prototype[zgbm]=function(zfjt,zfju,zasi,zcwo){var self=this;var zcwz=zgbm;var zfla="RfDataManager."+zcwz;zcte(zfhv+zfla+" fileName='"+zasi+"'  accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);function zglq(zfsd,file){zcte(zfla+".  getNewOFSFromServer. *Step 2* file='"+file+"' accId='"+zfsd+"'  ->",zwf,zctf["FUNC_INOUT"]);self[zgbi](function zghw(zhw,zglr){zcte(zfla+".getAccount_OkCallBack. *Step 2* GOT from server OFS='"+file+"'  status='"+zhw+"' ->",zwf,zctf["FUNC_INOUT"]);if(zhw!=zcue){zcte(zfla+"getAccount_OkCallBack. HttpStatus for account("+zglr+") is="+zhw,zwf,zctf["INFO"]);if(typeof(zfjt)!=zfhx){zfjt(zhw,zfsd,true);}
return;}if(typeof(zfjt)!=zfhx){zfjt(zhw,zfsd,true);}
return;},function zghx(zcpb){zcte(zfla+".getAccount_ErrorCallBack.  *Step 2* OFS='"+file+"'  accId='"+zfsd+" ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
return;},file,zfsd);zcte(" <- "+zfla+".  getNewOFSFromServer. *Step 2* file='"+file+"' accId='"+zfsd+"'",zwf,zctf["FUNC_INOUT"]);return;}
;self[zgbk](function zghy(zghz,zggq,zglr){zcte(zfla+".  get_eTag_AnswerCallback. serverTag='"+zghz+"' accId='"+zglr+"'",zwf,zctf["FUNC_INOUT"]);if(!zghz){zcte(zfla+". get_eTag_AnswerCallback. There is no file on server. Return OK. accId='"+zglr+"'",zwf,zctf["FUNC_INFO"]);if(typeof(zfjt)!=zfhx){zfjt(200,zglr,false);}
return;}var zgia=self.zgfw(zglr,zasi);if(zgia==zghz){zcte(zfla+". get_eTag_AnswerCallback.  eTags are equal. Return OK. accId='"+zglr+"'",zwf,zctf["FUNC_INFO"]);if(typeof(zfjt)!=zfhx){zfjt(200,zglr,false);}
return;}zcte(zfla+". get_eTag_AnswerCallback. eTags are NOT equal. GET NEW VERSION FROM SERVER. accId='"+zglr+"'",zwf,zctf["FUNC_INFO"]);zfzc.zfsf(zglr,zasi);zglq(zglr,zasi);return;}
,function zgib(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;},zasi,zcwo);};var zgls=0;var zglt=0;var zglu=500;zgej.prototype[zgbk]=function(zfjt,zfju,zasi,zcwo){zcte("CheckOFSFileETag ->",zwf,zctf["INFO"]);var self=this;var zcwz=zgbk;var file=(typeof(zasi)==zfhx)?zfht["USER_DATA"]:zasi;var zgkp=(typeof(zcwo)==zfhx)?self.zgen:zcwo;var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER_ID":zgkp}
,zfju);if(!zgkw){zcte("RfDataManager."+zcwz+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zgkx=Math.floor(Math.random()*10001);var zgik=self.zgem+"/rf-api/"+encodeURI(zgkp)+"/"+file+"?_"+zgkx;zcte("CheckOFSFileETag. UserId='"+zgkp+"'  Make request *HEAD* to "+zgik,zwf,zctf["INFO"]);var zgfl=self.zgfr();self.zgio(zgik,null,zgfl,"HEAD",false,false,function zmw(zgeh,zdn){zcte("RfDataManager."+zcwz+". makeRequestAsync callback ->",zwf,zctf["FUNC_INOUT"]);var url=zgik;var zglv=url.substr(url.lastIndexOf("/")+1);if(zglv.lastIndexOf("?")>0){zglv=zglv.substr(0,zglv.lastIndexOf("?"));}
url=url.substr(0,url.lastIndexOf("/"));var zglw=url.substr(url.lastIndexOf("/")+1);var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte("RfDataManager."+zcwz+" checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(zgeh.status==zgcw){zcte("RfDataManager."+zcwz+" StatusCode is 404. file not found='"+file+"' for account='"+zgkp+"'",zwf,zctf["INFO"]);if(typeof(zfjt)!=zfhx){zfjt(null,zgcw,zglw);}
return true;}if(zgeh.status==zcue){var zgkz=zgeh.getResponseHeader("eTag");zcte("RfDataManager."+zcwz+" Return true. StatusCode is 200. eTag="+zgkz+" accountId="+zglw,zwf,zctf["INFO"]);if(typeof(zfjt)!=zfhx){zfjt(zgkz,zcue,zglw);}
return true;}})};zgej.prototype[zgcm]=function(zglx,zgly){var zcwz=zgcm;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" eventName='"+zglx+"'",zwf,zctf["FUNC_INOUT"]);if(!zglx){zcte(zfla+". EventName is empty. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(typeof this.zget[zglx]==zfhx){this.zget[zglx]=[];this.zget[zglx].push(zgly);}
else{this.zget[zglx].push(zgly);}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return true;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype.zgha=function(zglx,zsv){var zcwz="FireEvent";var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" eventName='"+zglx+"'",zwf,zctf["FUNC_INOUT"]);if(typeof this.zget[zglx]==zfhx){zcte(zfhv+zfla+" There is no callback for event='"+zglx+"'",zwf,zctf["FUNC_INOUT"]);return false;}
var zglz=this.zget[zglx];for(var zcw=0;zcw<zglz.length;zcw++){var zghr=zglz[zcw];zghr(zsv);}
zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return true;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfzl]=function(zcwo,zfjt,zfju){var zcwz=zfzl;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":zcwo}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zgik=this.zgem+"/rf-api/"+encodeURI(zcwo)+"?get-account-info";this.zgij(zcwz,zgik,null,this.zgfr(),"POST",false,false,false,{"userId":zcwo}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return true;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfzm]=function(zfjt,zfju,zcov,zgma,zgmb,zgmc,zgmd,zcwl,zgme){var zcwz=zfzm;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgmf=typeof zcov!=zfhx?zcov:this.zgen;var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":zgmf}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};if(typeof(zgma)!=zfhx){zagq["block"]=zgma;}
if(typeof(zgmb)!=zfhx){zagq["unblock"]=zgmb;}if(typeof(zgmc)!=zfhx){zagq["otpOn"]=zgmc;}
if(typeof(zgmd)!=zfhx){zagq["suspend"]=zgmd;}if(typeof(zcwl)!=zfhx){zagq["securityScore"]=zcwl;}
if(typeof(zgme)!=zfhx){zagq["loginsCount"]=zgme;}var body=JSON.stringify(zagq);var zgik=this.zgem+"/rf-api/"+encodeURI(zgmf)+"?account-info";this.zgij(zcwz,zgik,body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return true;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfzf]=function(zcwo,zfjt,zfju,zgmg){var zcwz=zfzf;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":zcwo}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="getdatastatus";if(typeof(zgmg)!=zfhx){zagq[zgdi]["listDir"]=zgmg;}
var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{"userId":zcwo}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return true;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfzh]=function(zcov,zyr,zaqf,zcpc,zcuo,zcup,zfjt,zfju,zgmh){var zcwz=zfzh;var zfla="RfDataManager."+zcwz;try{var self=this;zcte(zfhv+zfla+" userId='"+zcov+"'",zwf,zctf["FUNC_INOUT"]);var zgmi=false;if(window.XMLHttpRequest){zgmi=new XMLHttpRequest();}
else if(window.ActiveXObject){zgmi=new zgjl("Microsoft.XMLHTTP");}
var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER_ID":zcov,"USER_PWD":zyr}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zgfl=self.zgfr();zgfl["x-sib-session-timeout"]=zaqf;if(typeof(zcpc)!=zfhx){zgfl["x-sib-auth-alt-otp"]=zcpc;}
if(typeof(zcuo)!=zfhx){zgfl["x-sib-auth-alt-memorize"]=zcuo;}
if(typeof(zcup)!=zfhx){zgfl["x-sib-auth-alt-channel"]=zcup;}
if(typeof(zgmh)!=zfhx){var zgmj=zavo.zcxt(zgmh);var zgmk=zawd.zcxv(zgmj);zgfl["x-sib-auth-computerdescr"]=zgmk;}
var zgml=new RfapiJS["SibHttpScramAuthClient"]();zgml.zgmm("RoboForm Online Server");var zgmn=zgml.zgmo(zcov,zyr);zgfl["Authorization"]=zgmn;var zgik=self.zgem+"/rf-api/"+encodeURI(zcov)+"?login";self.zgio(zgik,null,zgfl,"POST",false,false,function zmw(zgeh,zdn){zcte(zfla+". makeRequestAsync ->",zwf,zctf["FUNC_INOUT"]);if(zgeh.status==zcuf){var zgmp=zgeh.getResponseHeader("WWW-Authenticate");if(zgmp){var zgmq=RfapiJS["SibHttpGetAuthMethod"](zgmp);if(zgml.zgmr(zgmq)){zgmn=zgml.zgmo(zcov,zyr);zgfl["Authorization"]=zgmn;self.zgio(zgik,null,zgfl,"POST",false,false,function zgms(zgmt,zgmu){zcte(zfla+". SECOND makeRequestAsync callback2->",zwf,zctf["FUNC_INOUT"]);var zgmv=self.zgfg(zgmt,zgmu,zfju);if(!zgmv){zcte(zfla+". checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(zgmt.status==zcue){zcte(zfla+". Log In: SUCCESSFUL!!!  user='"+zcov+"'",zwf,zctf["INFO"]);self[zgca]();self[zgci](zcov);self[zgcg](zyr);self[zgcc](zyr);if(typeof(zfjt)!=zfhx){var zcuu=JSON.parse(zgmt.responseText);zfjt(zcue,zcuu);}
return true;}if(typeof(zfju)!=zfhx){zfju(new zfpw(zgmt.status,zgmt.statusText,undefined,zgmt,undefined));return false;}
zcte(zfla+". makeRequestAsync callback <-",zwf,zctf["FUNC_INOUT"]);return;}
,zgmi);}}return;}if(zgeh.status==zcue){zcte(zfla+". Log In: SUCCESSFUL!!!  user='"+zcov+"'",zwf,zctf["INFO"]);if(typeof(zfjt)!=zfhx){var zgmw=JSON.parse(zgeh.responseText);zfjt(zcue,zgmw);}
return true;}if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));return false;}
},zgmi);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return true;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype["LoginToAccount"]=function(zcov,zyr,zaqf,zcpc,zcuo,zcup,zfjt,zfju,zgmh){try{zcte("RfDataManager.LoginToAccount  ->",zwf,zctf["FUNC_INOUT"]);var self=this;var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER_ID":zcov,"USER_PWD":zyr}
,zfju);if(!zgkw){zcte("RfDataManager.LoginToAccount. misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zgik=self.zgem+"/rf-api/"+encodeURI(zcov)+"?login";var zgmx=CryptoJS.MD5(zyr);zgmx=zgmx.toString();var zgfl={"Content-type":"application/x-www-form-urlencoded","Authorization":"SibMD5 "+zcov+":"+zgmx,"x-sib-session-timeout":zaqf}
;self.zgfp(zgfl);if(typeof(zcpc)!=zfhx){zgfl["x-sib-auth-alt-otp"]=zcpc;}
if(typeof(zcuo)!=zfhx){zgfl["x-sib-auth-alt-memorize"]=zcuo;}
if(typeof(zcup)!=zfhx){zgfl["x-sib-auth-alt-channel"]=zcup;}
if(typeof(zgmh)!=zfhx){var zgmj=zavo.zcxt(zgmh);var zgmk=zawd.zcxv(zgmj);zgfl["x-sib-auth-computerdescr"]=zgmk;}
zcte("RfDataManager.LoginToAccount. LogIn. URL='"+zgik+"'\nOTP params! password='"+zyr+"' otp_password='"+zcpc+"'  otp_channel='"+zcup+"' otp_memorize='"+zcuo+"' userId='"+zcov+"'",zwf,zctf["INFO"]);self.zgio(zgik,null,zgfl,"POST",false,false,function zmw(zgeh,zdn){zcte("RfDataManager.LoginToAccount. makeRequestAsync ->",zwf,zctf["FUNC_INOUT"]);var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte("RfDataManager.LoginToAccount. checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(zgeh.status==zcue){zcte("RfDataManager.LoginToAccount. Log In: SUCCESSFUL!!!  user='"+zcov+"'",zwf,zctf["INFO"]);self[zgca]();self[zgci](zcov);self[zgcg](zyr);if(typeof(zfjt)!=zfhx){zfjt(zcue);}
return true;}if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));return false;}
zcte("LoginToAccount. makeRequestAsync callback <-",zwf,zctf["FUNC_INOUT"]);return;}
);zcte("RfDataManager.LoginToAccount <-",zwf,zctf["FUNC_INOUT"]);return true;}
catch(zhj){this.zgfm("RfDataManager.LoginToAccount",zhj,zfju);}
};zgej.prototype[zfzi]=function(zgmy,zfjt,zfju){var zcwz=zfzi;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zano=zgmy==4?"?logoutall":(zgmy==2?"?logoutdevice":"?logout");this.zgij(zcwz,this.zggf(zano),null,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return true;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};var zgmz=6;var zgna=80;var zgnb=2;var zgnc=60;var zgnd=6;var zgne=80;var zgnf=6;var zgng=80;var zgnh=7;var zgni=20;zgej.prototype[zfzg]=function(zgnj,zbyo,zbih,zgnk,zgnl,zfjt,zfju,zgnm,zgnn,zgno,zgnp,zgnq,zgnr){var zcwz=zfzg;var zfla="RfDataManager."+zcwz;if(!zgnn){zgnn=function(zvt){}
;}try{var self=this;zcte(zfhv+zfla+"  accountLogin ='"+zgnj+"'",zwf,zctf["FUNC_INOUT"]);if(!self.zgem){zcte(zfla+". Server Url is undefined. Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],zgcs));}
zgnn(zgda);return false;}if(!zgnj){zcte(zfla+". User login is undefined. Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],zgcq));}
zgnn(zgda);return false;}else{if(zgnj.length<zgmz||zgnj.length>zgna){zcte(zfla+". Account login is incorrect (6-80 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Account login is incorrect (6-80 symbols)"));}
zgnn(zgda);return false;}}if(!zbih){if(zgnr){zcte(zfla+". User Name is undefined. Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],zgcr));}
zgnn(zgda);return false;}}else{if(zbih.length<zgnb||zbih.length>zgnc){zcte(zfla+". Account name is incorrect (2-60 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Account name is incorrect (2-60 symbols)"));}
zgnn(zgda);return false;}}if(!zgnk){zcte(zfla+". User email is undefined. Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"User email is empty."));}
zgnn(zgda);return false;}else{if(zgnk.length<zgnd||zgnk.length>zgne){zcte(zfla+". Account email is incorrect (6-50 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Account email is incorrect (6-50 symbols)"));}
zgnn(zgda);return false;}}if(!zbyo){zcte(zfla+". Account password is undefined. Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],zgcu));}
zgnn(zgda);return false;}else{if(zbyo.length<zgnf||zbyo.length>zgng){zcte(zfla+". Account password is incorrect (6-49 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Account password is incorrect (6-49 symbols)"));}
zgnn(zgda);return false;}}if(typeof zgnl!=zfhx&&(zgnl!="")){if(zgnl.length<zgnh||zgnl.length>zgni){zcte(zfla+". Account phone is incorrect (7-20 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Account phone is incorrect (7-20 symbols)"));}
zgnn(zgda);return false;}}var zgik=self.zgem+"/rf-api?createaccount";var zagq={}
;zagq[zgdg]=zbih;zagq["login"]=zgnj;zagq["email"]=zgnk;if(typeof(zgnl)!=zfhx){zagq["phone"]=zgnl;}
if(zgnr){var zgns=CryptoJS.MD5(zbyo);var zgnt=zgns.toString(CryptoJS.enc.hex);zagq["password"]=zgnt;self[zgce](zarx["MULTIFILE"]);}
else{var zfjc=zawd.zfod(16);var zgnu=new RfapiJS["SibScramAuthClient"]();var zglk=zgnu.zgnv(zavo.zcxt(zbyo),zfjc,zgdc);var zgnw=zglk.item2;var zgny=zglk.item3;for(var zcw=0;zcw<zgny.length;zcw++){zgnw.push(zgny[zcw]);}
var hash=zawd.zcxv(zgnw);hash=hash.replace(new RegExp('=','g'),'');zfjc=zawd.zcxv(zfjc);zfjc=zfjc.replace(new RegExp('=','g'),'');self[zgce](zarx["OFS"]);zagq["method"]="SCRAM-SHA-256";zagq["iterations"]=zgdc;zagq["salt"]=zfjc;zagq["hash"]=hash;}
if(typeof(zgno)!=zfhx){zagq["acceptCode"]=zgno;}if(typeof(zgnp)!=zfhx){zagq["passwordExpires"]=zgnp;}
if(typeof(zgnq)!=zfhx){zagq["passwordExpiresInDays"]=zgnq;}
var zgfl=self.zgfr();zgfl["x-sib-auth-alt-memorize"]=1;var body=JSON.stringify(zagq);zcte(zfla+". Make ASYNC POST request to "+zgik,zwf,zctf["INFO"]);zgnn(25);self.zgio(zgik,body,zgfl,"POST",false,false,function zmw(zgeh,zdn){zcte(zfla+". makeRequestAsync ->",zwf,zctf["FUNC_INOUT"]);zgnn(50);var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte(zfla+". checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);zgnn(zgda);return false;}
if(zgeh.status==zcue){zcte(zfla+". Status code=OK. Need to parse response for errors. RESPONSE  = "+zgeh.responseText,zwf,zctf["INFO"]);if(zgeh.responseText){try{var zgv=JSON.parse(zgeh.responseText);var zhw=zgv[zgdp][zgdo];if(zhw=="error"){zcte(zfla+". Server returns status=error.",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zcud["SibTErr_ServerErr"],"Server returns status=error",zgv[zgdp]));}
zgnn(zgda);return false;}if(zhw=="ok"){self.zgen=zgnj;if(!zgnr){self[zgcc](zbyo);}
self[zfzh](self.zgen,zbyo,1440,undefined,undefined,undefined,function zgoa(zcut,zcuu){zcte(zfla+". login_Ok_Callback. makeRequestAsync ->",zwf,zctf["FUNC_INOUT"]);zgnn(75);if(zgnr){if(typeof(zfjt)!=zfhx){zfjt(zcut,zcuu);}
zgnn(zgda);return;}self[zgbo](function zgob(zgoc){self[zgbh](function zgod(zgoe){zcte(zfla+". answerCallbackInner ->",zwf,zctf["FUNC_INOUT"]);zgnn(95);if(typeof(zfjt)!=zfhx){zfjt(zgoe.status,zcuu);}
zgnn(zgda);return true;},function zgof(zcpb){zcte(zfla+". errorCallbackInner ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
zgnn(zgda);return false;},zfht["USER_DATA"],self.zgen);return true;}
,function zgog(zcpb){zcte(zfla+". innerError ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
zgnn(zgda);return false;},self.zgen,false);return;}
,function zgoh(zcpb){zcte(zfla+". login_Err_Callback. makeRequestAsync ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
zgnn(zgda);return false;},zgnm);return true;}}catch(zgit){zcte(zfla+". Error while parsing JSON response",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zcud["SibTErr_ServerErr"],"Error Parsing JSON response"));}
zgnn(zgda);return false;}}return true;}if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));}
zgnn(zgda);return false;});zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);zgnn(zgda);}};zgej.prototype[zfzj]=function(zcva,zcvb,zfjt,zfju,zgnn){var zcwz=zfzj;var zfla="RfDataManager."+zcwz;if(!zgnn){zgnn=function(zvt){}
;}try{var self=this;zcte(zfhv+zfla+" newPwd='"+zcva+"'",zwf,zctf["FUNC_INOUT"]);var zgoi=self[zgcd]();var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER_ID":self.zgen,"NEW_PASSWORD":zcva,"OLD_PASSWORD":zcvb}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);zgnn(zgda);return false;}
if(zcva.length<zgnf||zcva.length>zgng){zcte(zfla+". New account password is incorrect (6-49 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"New account password is incorrect (6-49 symbols)"));}
zgnn(zgda);return false;}zgnn(15);if(zgoi==zarx["MULTIFILE"]){zcte(zfla+" # MULTIFILE pwd change -> #",zwf,zctf["FUNC_INOUT"]);var zgoj=CryptoJS.MD5(zcvb);zgoj=zgoj.toString();var zgok=CryptoJS.MD5(zcva);zgok=zgok.toString();var zgfl={"Content-type":"application/x-www-form-urlencoded","x-sib-auth-old-pwd":zgoj,"x-sib-auth-new-pwd":zgok}
;zgnn(50);var zgik=self.zgem+"/rf-api/"+encodeURI(self.zgen)+"?setaccountpwd";self.zgio(zgik,null,zgfl,"POST",false,false,function zmw(zgmt,zgmu){if(zgmt.status==403){if(typeof(zfju)!=zfhx){zgnn(100);var zgol=zgmt.responseText?zgmt.responseText:"Wrong old Password."
zfju(new zfpw(zfhs["RfErr_AuthRejected"],zgol));return false;}
}var zgmv=self.zgfg(zgmt,zgmu,zfju);if(!zgmv){zcte(zfla+". checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);zgnn(zgda);return false;}
if(zgmt.status==zcue){zcte(zfla+". SUCCESSFUL!!!",zwf,zctf["INFO"]);self[zgcg](zcva);self[zgcc](zcva);zgnn(zgda);if(typeof(zfjt)!=zfhx){zfjt(zcue);}
return;}});zcte(zfla+" # MULTIFILE pwd change <- #",zwf,zctf["FUNC_INOUT"]);return;}
else{var zfjc=zawd.zfod(16);var zgnu=new RfapiJS["SibScramAuthClient"]();var zglk=zgnu.zgnv(zavo.zcxt(zcva),zfjc,zgdc);var zgnw=zglk.item2;var zgny=zglk.item3;for(var zcw=0;zcw<zgny.length;zcw++){zgnw.push(zgny[zcw]);}
var hash=zawd.zcxv(zgnw);hash=hash.replace(new RegExp('=','g'),'');var zgom=CryptoJS.MD5(CryptoJS.enc.Latin1.parse(zfhu.zawf(zfjc)));var zgon=zgom.toString(CryptoJS.enc.hex);var zgoo=zawd.zcxv(zfjc);zgoo=zgoo.replace(new RegExp('=','g'),'');var zgkb=self.zgev!=null?self.zgev:new RfapiJS.CRfOneFileSys();function zgop(zgoq){zcte(zfla+" changePwdWithOldPwdCheck  #STEP 5 #",zwf,zctf["FUNC_INOUT"]);zgnn(90);var zgml=new RfapiJS["SibHttpScramAuthClient"]();zgml.zgmm("RoboForm Online Server");var zgmn=zgml.zgmo(self.zgen,zcvb);var zgfl=self.zgfr();zgfl["Authorization"]=zgmn;var zagq={}
;zagq["method"]="SCRAM-SHA-256";zagq["iterations"]=zgdc;zagq["salt"]=zgoo;zagq["hash"]=hash;if(zgoq&&zgoq.length){zagq["trustedUsers"]=zgoq;}
var body=JSON.stringify(zagq);zgnn(95);var zgik=self.zgem+"/rf-api/"+encodeURI(self.zgen)+"?setaccountpwd";self.zgio(zgik,body,zgfl,"POST",false,false,function zmw(zgeh,zdn){zcte(zfla+". makeRequestAsync ->",zwf,zctf["FUNC_INOUT"]);if(zgeh.status==zcuf){var zgmp=zgeh.getResponseHeader("WWW-Authenticate");if(zgmp){zgnn(99);var zgmq=RfapiJS["SibHttpGetAuthMethod"](zgmp);if(zgml.zgmr(zgmq)){zgmn=zgml.zgmo(self.zgen,zcvb);zgfl["Authorization"]=zgmn;self.zgio(zgik,body,zgfl,"POST",false,false,function zgms(zgmt,zgmu){zcte(zfla+". SECOND makeRequestAsync callback2->",zwf,zctf["FUNC_INOUT"]);if(zgmt.status==401){if(typeof(zfju)!=zfhx){zgnn(zgda);zfju(new zfpw(zfhs["RfErr_AuthRejected"],"Wrong Password."));return false;}
}var zgmv=self.zgfg(zgmt,zgmu,zfju);if(!zgmv){zcte(zfla+". checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);zgnn(zgda);return false;}
if(zgmt.status==zcue){zcte(zfla+". CHECK OLD PWD(change to new complete): SUCCESSFUL!!!",zwf,zctf["INFO"]);self[zgcg](zcva);self[zgcc](zcva);zgnn(zgda);if(typeof(zfjt)!=zfhx){zfjt(zcue);}
return;}});}}}});zcte(zfla+" changePwdWithOldPwdCheck  # end of STEP 5#",zwf,zctf["FUNC_INOUT"]);return;}
;function zgor(zgos){try{zcte(zfla+". encryptNewPasswordByUserPublicKey. Step 4. ->",zwf,zctf["INFO"]);var zgot=zcva;var zgoq=[];for(var zgg=0;zgg<zgos.length;zgg++){var zgkp=zgos[zgg];var zgou=zgkp["publicKey"];var zgov=CryptoJS.MD5(zgou);var zgow=zgov.toString(CryptoJS.enc.hex);var zgox=new RSAKey();var zgoy=zfyv.zgge(zgou,true);zgox.setPublic(zgoy["modulus"],zgoy["exponent"]);var zgoz=zgox.encrypt(zgot);var zgpa=zawd.zcxv(zawd.zfip(zgoz));var zgpb={}
;zgpb["accountId"]=zgkp["accountId"];zgpb["mp"]=zgpa;zgpb["publicKeyHash"]=zgow;zgoq.push(zgpb);}
zgop(zgoq);zcte(zfla+". encryptNewPasswordByUserPublicKey. Step 4. <-",zwf,zctf["INFO"]);return;}
catch(zdn){zwe("EXCEPTION in "+zfla+".encryptNewPasswordByUserPublicKey: "+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in encryptNewPasswordByUserPublicKey:"+zhj.toString()}
);}}};function zgpc(){zcte(zfla+". getTrustedUsersList. Step 3. -> ",zwf,zctf["INFO"]);self[zfzq](function zgpd(data){zcte(zfla+". getTrusted_Ok. Step 3. -> ",zwf,zctf["INFO"]);var zgpe=data["trustedUsers"];if(!zgpe.length){zgop();zcte(zfla+". getTrusted_Ok. Step 3. No trusted users. Goto Step 5.. <-",zwf,zctf["INFO"]);return;}
zgor(zgpe);zcte(zfla+". getTrusted_Ok. Step 3. users="+zgpe.length+" <-",zwf,zctf["INFO"]);return;}
,function zgpf(zcpb){zcte(zfla+". getTrusted_Error. Step 3. -> ",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
return;});zcte(zfla+". getTrustedUsersList. Step 3. <- ",zwf,zctf["INFO"]);return;}
;function zgpg(zgph){var zgpi=[];zgpi.push(zfht["APP_DATA"]);zgpi.push(zfht["SYNC_DATA"]);var zgpj=zgpi.length;function zgpk(zgka,file,zgkp){zcte(zfla+".upload_AppSyncRFO.  #STEP 2.2# file='"+file+"' account='"+zgkp+"'",zwf,zctf["FUNC_INOUT"]);if(!zgka){zgpj--;zgnn(45+20*(2-zgpj));if(!zgpj){zgpc();}
return;}var zgjv=self.zgjt(zgka);zgkb.zfis(zgkp,file);zgkb.zfjb(zgph["salt"],zgph["key"],zgph["iterations"],file,zgkp,zcva);zgkb.zfkx(zgjv,file,zgkp,zcva,zfib,true,function zgld(zgle){zcte(zfla+". Step 2.2  encrypt_Ok callback ->",zwf,zctf["FUNC_INOUT"]);var zglf=new Uint8Array(zgle);var zgfl=self.zgfr(true);zgfl["x-sib-new-pwd-id"]=zgon;var zgfv=self.zgfw(zgkp,file);!zgfv?zgfl["If-None-Match"]="*":zgfl["If-Match"]=zgfv;var zgik=self.zgem+"/rf-api/"+encodeURI(zgkp)+"/"+file;self.zgio(zgik,zglf,zgfl,"POST",false,true,function zgpl(zgeh,zdn){zcte(zfla+".upload_AppSyncRFO 2.2 -> upLoadOFS_callback",zwf,zctf["FUNC_INOUT"]);zgpj--;zgnn(45+20*(2-zgpj));var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte(zfla+".upload_AppSyncRFO 2.2 -> upLoadOFS_callback failed. Return false.",zwf,zctf["SPECIAL_CASE"]);zgnn(zgda);return false;}
if(zgeh.status==zgcy){zgnn(zgda);if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));}
return false;}if(zgeh.status==zgcz){zgnn(zgda);if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));}
return false;}self.zgfu(zgeh.getResponseHeader("eTag"),zgkp,file);if(!zgpj){zgpc();}
return;});return;},function zglh(zdq){zcte(zfla+". Step 2.2  encrypt_Error callback ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zdq);}
return;});zcte(zfla+" upload_AppSyncRFO  # end of STEP 2.2 #",zwf,zctf["FUNC_INOUT"]);return;}
;function zgpm(file){var zgkp=self.zgen;zcte(zfla+".get_AppSyncRFO.  #STEP 2.1# file='"+file+"' account='"+zgkp+"'",zwf,zctf["FUNC_INOUT"]);var zglb=zfzc.zfse(file,zgkp);if(!zglb){self[zgbi](function zgpn(zggq){zcte(zfla+".get_AppSyncRFO. GetOFS_CallBack. #STEP 2.1# file='"+file+"' account='"+zgkp+"' status="+zggq,zwf,zctf["FUNC_INOUT"]);if(zggq==zcue){var zgpo=zfzc.zfse(file,zgkp);zgpk(zgpo,file,zgkp);}
else if(zggq==404){zcte(zfla+".get_AppSyncRFO. GetOFS_CallBack. NO FILE ON SERVER->return. #STEP 2.1# file='"+file+"' account='"+zgkp+"' status="+zggq,zwf,zctf["FUNC_INOUT"]);zgpk(null,file,zgkp);return;}
return;},zfju,file,zgkp);}else{zcte(zfla+".get_AppSyncRFO #STEP 2.1# got JSON data from repo file='"+file+"' account='"+zgkp+"'",zwf,zctf["FUNC_INOUT"]);zgpk(zglb,file,zgkp);}
zcte(zfla+" get_AppSyncRFO  # end of STEP 2.1 #",zwf,zctf["FUNC_INOUT"]);return;}
;for(var zcw=0;zcw<zgpi.length;zcw++){zgpm(zgpi[zcw]);}
return;};function zgpp(){function zgpq(zgka,file,zgkp){zgnn(25);zcte(zfla+".upload_UserDataRFO.  #STEP 1.2# file='"+file+"' account='"+zgkp+"'",zwf,zctf["FUNC_INOUT"]);var zgjv=self.zgjt(zgka);zgkb.zfis(zgkp,file);zgkb.zfkx(zgjv,file,zgkp,zcva,zfib,true,function zgld(zgle){zcte(zfla+". Step 1  encrypt_Ok callback ->",zwf,zctf["FUNC_INOUT"]);var zgpr=zgkb.zfjj(zfht["USER_DATA"],zgkp,zcva);zgnn(45);var zglf=new Uint8Array(zgle);var zgfl=self.zgfr(true);zgfl["x-sib-new-pwd-id"]=zgon;var zgfv=self.zgfw(zgkp,file);!zgfv?zgfl["If-None-Match"]="*":zgfl["If-Match"]=zgfv;var zgik=self.zgem+"/rf-api/"+encodeURI(zgkp)+"/"+file;self.zgio(zgik,zglf,zgfl,"POST",false,true,function zgpl(zgeh,zdn){zcte(zfla+".upload_UserDataRFO -> upLoadOFS_callback",zwf,zctf["FUNC_INOUT"]);zgnn(55);var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte(zfla+".upload_UserDataRFO -> upLoadOFS_callback failed. Return false.",zwf,zctf["SPECIAL_CASE"]);zgnn(zgda);return false;}
if(zgeh.status==zgcy){if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));}
zgnn(zgda);return false;}if(zgeh.status==zgcz){if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));}
zgnn(zgda);return false;}self.zgfu(zgeh.getResponseHeader("eTag"),zgkp,file);zgpg(zgpr);return;}
);return;},function zglh(zdq){zcte(zfla+". Step 1  encrypt_Error callback ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zdq);}
return;});zcte(zfla+" upload_UserDataRFO  # end of STEP 1.2#",zwf,zctf["FUNC_INOUT"]);return;}
;function zgps(){var zgkp=self.zgen;var file=zfht["USER_DATA"];zcte(zfla+".get_UserDataRFO.  #STEP 1.1# file='"+file+"' account='"+zgkp+"'",zwf,zctf["FUNC_INOUT"]);var zglb=zfzc.zfse(file,zgkp);if(!zglb){self[zgbi](function zgpn(zggq){zcte(zfla+".get_UserDataRFO. GetOFS_CallBack. #STEP 1.1# file='"+file+"' account='"+zgkp+"' status="+zggq,zwf,zctf["FUNC_INOUT"]);if(zggq==zcue){var zgpo=zfzc.zfse(file,zgkp);zgpq(zgpo,file,zgkp);}
else if(zggq==404){zcte(zfla+".get_UserDataRFO. GetOFS_CallBack. NO FILE ON SERVER->return. #STEP 1.1# file='"+file+"' account='"+zgkp+"' status="+zggq,zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zgnn(zgda);zfju(new zfpw(zfhs["RfErr_BadData"],"user-data.rfo is missing"));}
return false;}return;},zfju,file,zgkp)}else{zcte(zfla+".get_UserDataRFO #STEP 1.1# got JSON data from repo file='"+file+"' account='"+zgkp+"'",zwf,zctf["FUNC_INOUT"]);zgpq(zglb,file,zgkp);}
zcte(zfla+" get_UserDataRFO  # end of STEP 1.1#",zwf,zctf["FUNC_INOUT"]);return;}
;function zgpt(){var zgkp=self.zgen;var file=zfht["USER_DATA"];zcte(zfla+".check_OldPwd ->  ##STEP 1##  file='"+file+"'  user='"+zgkp+"'",zwf,zctf["FUNC_INOUT"]);var zgik=self.zgem+"/rf-api/"+encodeURI(zgkp)+"/"+file;var zgml=new RfapiJS["SibHttpScramAuthClient"]();zgml.zgmm("RoboForm Online Server");var zgmn=zgml.zgmo(zgkp,zcvb);var zgfl=self.zgfr();zgfl["Authorization"]=zgmn;var zgpu=zawd.zfod(16);var zgnu=new RfapiJS["SibScramAuthClient"]();var zgpv=zgnu.zgnv(zavo.zcxt(zcvb),zgpu,zgdc);var zgpw=zgpv.item2;var zgpx=zgpv.item3;for(var zcw=0;zcw<zgpx.length;zcw++){zgpw.push(zgpx[zcw]);}
var zgpy=zawd.zcxv(zgpw);zgpy=zgpy.replace(new RegExp('=','g'),'');var zgpz=CryptoJS.MD5(CryptoJS.enc.Latin1.parse(zfhu.zawf(zgpu)));var zgqa=zgpz.toString(CryptoJS.enc.hex);var zgqb=zawd.zcxv(zgpu);zgqb=zgqb.replace(new RegExp('=','g'),'');var zagq={}
;zagq["method"]="SCRAM-SHA-256";zagq["iterations"]=zgdc;zagq["salt"]=zgqb;zagq["hash"]=zgpy;var body=JSON.stringify(zagq);self.zgio(zgik,body,zgfl,"HEAD",false,false,function zmw(zgeh,zdn){zcte(zfla+".check_OldPwd ->  makeRequestAsync callback ->",zwf,zctf["FUNC_INOUT"]);zgnn(20);if(zgeh.status==zcuf){var zgmp=zgeh.getResponseHeader("WWW-Authenticate");if(zgmp){var zgmq=RfapiJS["SibHttpGetAuthMethod"](zgmp);if(zgml.zgmr(zgmq)){zgmn=zgml.zgmo(self.zgen,zcvb);zgfl["Authorization"]=zgmn;zgnn(22);self.zgio(zgik,body,zgfl,"HEAD",false,false,function zgms(zgmt,zgmu){zcte(zfla+".check_OldPwd. SECOND makeRequestAsync callback2->",zwf,zctf["FUNC_INOUT"]);zgnn(24);if(zgmt.status==401){if(typeof(zfju)!=zfhx){zgnn(zgda);zfju(new zfpw(zfhs["RfErr_AuthRejected"],"Wrong Old Password"));}
return false;}var zgmv=self.zgfg(zgmt,zgmu,zfju);if(!zgmv){zcte(zfla+".check_OldPwd.. checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);zgnn(zgda);return false;}
if(zgmt.status==zcue){zgps();}return;})}}else{return;}
}else if(zgeh.status==zcue){zgps();}else{zgnn(21);var zgqc=self.zgfg(zgeh,zdn,zfju);if(!zgqc){zcte(zfla+".check_OldPwd.. checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);zgnn(zgda);return false;}
}})};zgpt();return;};zgpp();}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);zgnn(zgda);}};zgej.prototype[zgbv]=function(zgqd,zcva,zfjt,zfju,zgnn){var zcwz=zgbv;var zfla="RfDataManager."+zcwz;if(!zgnn){zgnn=function(zvt){}
;}try{var self=this;zcte(zfhv+zfla+" target_account_id='"+zgqd+"'  newPwd='"+zcva+"'",zwf,zctf["FUNC_INOUT"]);var zgoi=self[zgcd]();var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER_ID":self.zgen,"ACCOUNT":zgqd,"NEW_PASSWORD":zcva}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);zgnn(zgda);return false;}
if(zcva.length<zgnf||zcva.length>zgng){zcte(zfla+". New account password is incorrect (6-49 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"New account password is incorrect (6-49 symbols)"));}
zgnn(zgda);return false;}zgnn(5);var zfjc=zawd.zfod(16);var zgnu=new RfapiJS["SibScramAuthClient"]();var zglk=zgnu.zgnv(zavo.zcxt(zcva),zfjc,zgdc);var zgnw=zglk.item2;var zgny=zglk.item3;for(var zcw=0;zcw<zgny.length;zcw++){zgnw.push(zgny[zcw]);}
var hash=zawd.zcxv(zgnw);hash=hash.replace(new RegExp('=','g'),'');var zgom=CryptoJS.MD5(CryptoJS.enc.Latin1.parse(zfhu.zawf(zfjc)));var zgon=zgom.toString(CryptoJS.enc.hex);var zgoo=zawd.zcxv(zfjc);zgoo=zgoo.replace(new RegExp('=','g'),'');var zgkb=self.zgev!=null?self.zgev:new RfapiJS.CRfOneFileSys();zgnn(10);function zgqe(zgqf,zgqg,zgqh,zgqi){zcte(zfla+". reGrantGroupsforTargetAccount. Step 9. ->",zwf,zctf["INFO"]);zgnn(95);var zafj=zgqg.length;for(var zcw=0;zcw<zgqg.length;zcw++){var zgqj=zgqg[zcw];var zgqk=zgqj[RfapiJS.ACCOUNT_ID_PROP];var zcmz=false;for(var zgg=0;zgg<zgqh.length;zgg++){if(zgqk==zgqh[zgg]["accountId"]){zcmz=true;break;}
}if(!zcmz){zafj--;continue;}var zgql=zgqj["mp"];var zgga=zawd.zawe(zgql);var zggb=zawd.zfiu(zgga);var zggc=new RSAKey();var zggd=zfyv.zgge(zgqi,false);zggc.setPrivateEx(zggd["modulus"],zggd["exponent"],zggd["privateexp"],zggd["P"],zggd["Q"],zggd["DP"],zggd["DQ"],zggd["InverseQ"]);var zglc=zggc.decrypt(zggb);if(!zglc){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Decrypted password is empty"));}
return false;}var zgou=zfyv.zgge(zgqf,true);var zgox=new RSAKey();zgox.setPublic(zgou["modulus"],zgou["exponent"]);var zgqm=zgox.encrypt(zglc);var zgqn=zawd.zcxv(zawd.zfip(zgqm));var zagq={}
;zagq[zgdr]=zgqd;zagq["mp"]=zgqn;var zsv=JSON.stringify(zagq);var zwp=self.zgem+"/rf-api/"+encodeURI(zgqk)+"?grantaccount";self.zgij(zgax,zwp,zsv,self.zgfr(),"POST",false,false,false,{}
,function zgqo(zcwx){zcte(zfla+". grant_OKCallBack.inner_OK Step 9. -> ResponseText='"+zcwx+"'",zwf,zctf["INFO"]);zafj--;if(!zafj){zgnn(zgda);zfjt(200);}
return true;},function zgqp(zcpb){zcte(zfla+". grant_ErrorCallBack.inner_Error Step 9. -> ",zwf,zctf["INFO"]);zafj--;if(typeof(zfju)!=zfhx){zfju(zcpb);zgnn(zgda);}
return false;});}if(!zafj){zgnn(zgda);zfjt(200);}zcte(zfla+". reGrantGroupsforTargetAccount. Step 9. ->",zwf,zctf["INFO"]);return;}
;function zgqq(zgou,zgqg,zgqh){zcte(zfla+". getAdminPrivateKey. Step 8. ->",zwf,zctf["INFO"]);zgnn(90);if(!zgqh||!zgqh.length){zgnn(zgda);zfjt(200);return;}
if(!zfzc.zfse(zfht["USER_DATA"],self.zgen)){self[zgbi](function zgpn(zggq){var zgqr=zfzc.zfue();zgqe(zgou,zgqg,zgqh,zgqr);return;}
,zfju);return;}else{zcte(zfla+".getAdminPrivateKey. Step 8. got private key from repo",zwf,zctf["FUNC_INOUT"]);var zgqr=zfzc.zfue();zgqe(zgou,zgqg,zgqh,zgqr);return;}
zcte(zfla+". getAdminPrivateKey. Step 8. ->",zwf,zctf["INFO"]);return;}
;function zgqs(zgou){zcte(zfla+". getChangedUserAccountInfo. Step 7. ->",zwf,zctf["INFO"]);zgnn(86);self[zgag](function zgjc(zghi,zcut){zcte(zfla+".GetAccounts_AnswerCallBack -> Step 7. HttpStatus="+zcut,zwf,zctf["FUNC_INOUT"]);var zgqg=zghi["accounts"];if(!zgqg||!zgqg.length){zgnn(zgda);zfjt(200);return;}
var zafj=zgqg.length;var zgqh=[];for(var zcw=0;zcw<zgqg.length;zcw++){var zxp=zgqg[zcw];var zcwo=zxp["accountId"];self[zgaf](zcwo,function zgqt(data,zhw,zgqu){zcte(zfla+". getRecipients_Ok Step 7. -> responseAccountId="+zgqu,zwf,zctf["INFO"]);zafj--;var zgqv=data["accounts"];for(var zgg=0;zgg<zgqv.length;zgg++){var zgqw=zgqv[zgg];if(zgqw["accountId"]==zgqd){zgqh.push({"accountId":zgqu,"isManager":zgqw["isManager"],"readOnly":zgqw["readOnly"],"showPasswords":zgqw["showPasswords"],"serverOnly":zgqw["serverOnly"]
}
);break;}}if(!zafj){zgqq(zgou,zgqg,zgqh);}return;}
,function zgqx(){zcte(zfla+". getRecipients_Error Step 7. -> ",zwf,zctf["INFO"]);zafj--;if(typeof(zfju)!=zfhx){zfju(zcpb);zgnn(zgda);}
return false;});}return;},function zgjd(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;});zcte(zfla+". getCompanyMemberAccountInfo. Step 7. ->",zwf,zctf["INFO"]);return;}
;function zgqy(zglm){zcte(zfla+". uploadPublicKey. Step 6. -> ",zwf,zctf["INFO"]);self[zgal](zglm,function zglo(zcwx){zcte(zfla+". uploadPublicKey.inner_OK Step 6. -> ResponseText='"+zcwx+"'",zwf,zctf["INFO"]);zgnn(85);zgqs(zglm);return true;}
,function zglp(zcpb){zcte(zfla+". uploadPublicKey.inner_Error Step 6. -> ",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju(zcpb);zgnn(zgda);}
return false;},zgqd);zcte(zfla+". uploadPublicKey. Step 6. <- ",zwf,zctf["INFO"]);return;}
;function zgqz(zgra,zglm){zcte(zfla+". changeOneFileAccountPassword. Step 5. -> ",zwf,zctf["INFO"]);zgnn(81);var zagq={}
;zagq["method"]="SCRAM-SHA-256";zagq["iterations"]=zgdc;zagq["salt"]=zgoo;zagq["hash"]=hash;if(zgra&&zgra.length){zagq["trustedUsers"]=zgra;}
var body=JSON.stringify(zagq);var zgik=self.zgem+"/rf-api/"+encodeURI(zgqd)+"?set-account-pwd";var zgrb=3;function zgrc(url,body,zgil){zgrb--;zcte(zfla+" changeOneFileAccountPassword. tryToLogin->  nCounter="+zgrb,zwf,zctf["FUNC_INOUT"]);if(!zgrb){zgnn(zgda);if(typeof(zfju)!=zfhx){zfju(new zfpw(401,"Cannot auth to account "+zgqd,undefined,undefined,undefined));}
return false;}var zgml=new RfapiJS["SibHttpScramAuthClient"]();zgml.zgmm("RoboForm Online Server");var zgmn=zgml.zgmo(self.zgen,self.zgep);var zgfl=self.zgfr();zgfl["Authorization"]=zgmn;self.zgio(url,body,zgfl,zgil,false,false,function zgrd(zgeh,zdn){zcte(zfla+" changeOneFileAccountPassword. FIRST makeRequestAsync callBack_First->",zwf,zctf["FUNC_INOUT"]);if(zgeh.status==zcuf){var zgmp=zgeh.getResponseHeader("WWW-Authenticate");if(zgmp){var zgmq=RfapiJS["SibHttpGetAuthMethod"](zgmp);if(zgml.zgmr(zgmq)){var zgre=zgml.zgmo(self.zgen,self.zgep);zgfl["Authorization"]=zgre;zgnn(83);self.zgio(url,body,zgfl,zgil,false,false,function zgrf(zgmt,zgmu){zcte(zfla+".changeOneFileAccountPassword. SECOND makeRequestAsync callBack_Second->  status="+zgmt.status,zwf,zctf["FUNC_INOUT"]);if(zgmt.status==zcue){zcte(zfla+". changeOneFileAccountPassword (change to new complete): SUCCESSFUL!!!",zwf,zctf["INFO"]);zgnn(84);zgrb=0;zgqy(zglm);return;}
if(zgmt.status==zcuf){zgrc(url,body,zgil);return;}
});}}}else if(zgeh.status==zcue){zgrb=0;zgqy(zglm);}
else{zgnn(99);var zgrg=self.zgfg(zgeh,zdn,zfju);if(!zgrg){zcte(zfla+".changeOneFileAccountPassword. checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);zgnn(zgda);return false;}
}});};zgrc(zgik,body,"POST");zcte(zfla+". changeOneFileAccountPassword. Step 5. <- ",zwf,zctf["INFO"]);return;}
;function zgrh(zgra){zcte(zfla+". uploadOFS. Step 4. -> ",zwf,zctf["INFO"]);zgnn(35);var zglm;var zgpi=[];zgpi.push(zfht["USER_DATA"]);zgpi.push(zfht["APP_DATA"]);zgpi.push(zfht["SYNC_DATA"]);var zgpj=zgpi.length;function zgri(file,zgkp,zgfv){zcte(zfla+".upload_AppSyncUserRFO.  #STEP 4.2# file='"+file+"' account='"+zgkp+"' eTag="+zgfv,zwf,zctf["FUNC_INOUT"]);var zgka;if(file==zfht["APP_DATA"]||file==zfht["SYNC_DATA"]){zgka={}
;}else if(file==zfht["USER_DATA"]){var zglj=1024;var zglk=zfyv.zgll(zglj);zglm=zglk['Public_Pem'];var zgln=zglk['Private_Pem'];var zfuj=Math.round(new Date()/1000);zgka={"i":{"F":true}
,"c":[{"b":zgln,"i":{"n":"private-key.pem","c":zfuj,"m":zfuj,"s":zgln.length,"f":true}
},{"i":{"F":true,"n":"root"},"c":[]}]
};}var zgjv=self.zgjt(zgka);zgkb.zfis(zgkp,file);zgkb.zfkx(zgjv,file,zgkp,zcva,zfib,true,function zgld(zgle){zcte(zfla+". Step 4. encrypt_Ok callback ->",zwf,zctf["FUNC_INOUT"]);var zglf=new Uint8Array(zgle);var zgfl=self.zgfr(true);zgfl["x-sib-new-pwd-id"]=zgon;!zgfv?zgfl["If-None-Match"]="*":zgfl["If-Match"]=zgfv;var zgik=self.zgem+"/rf-api/"+encodeURI(zgkp)+"/"+file;self.zgio(zgik,zglf,zgfl,"POST",false,true,function zgpl(zgeh,zdn){zcte(zfla+".upload_AppSyncUserRFO 4.2 -> upLoadOFS_callback",zwf,zctf["FUNC_INOUT"]);zgpj--;zgnn(40+20*(2-zgpj));var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte(zfla+".upload_AppSyncUserRFO 4.2 -> upLoadOFS_callback failed. Return false.",zwf,zctf["SPECIAL_CASE"]);zgnn(zgda);return false;}
if(zgeh.status==zgcy){zgnn(zgda);if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));}
return false;}if(zgeh.status==zgcz){zgnn(zgda);if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));}
return false;}if(!zgpj){zgqz(zgra,zglm);}return;});return;}
,function zglh(zdq){zcte(zfla+". Step 4. encrypt_Error callback ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zdq);}
return;});zcte(zfla+" upload_AppSyncUserRFO  # end of STEP 4.2 #",zwf,zctf["FUNC_INOUT"]);return;}
;function zgrj(file){zcte(zfla+".get_AppSyncUserRFO.  #STEP 4.1# file='"+file+"' account='"+zgqd+"'",zwf,zctf["FUNC_INOUT"]);self[zgbg](function zgrk(zggq,zasi,zfvy,zgfv){zcte(zfla+".get_AppSyncUserRFO. CheckoutOFS_CallBack. #STEP 4.1# file='"+zasi+"' account='"+zfvy+"' status="+zggq+" eTag="+zgfv,zwf,zctf["FUNC_INOUT"]);zgri(zasi,zfvy,zgfv);return;}
,zfju,file,zgqd);zcte(zfla+" get_AppSyncUserRFO  # end of STEP 4.1 #",zwf,zctf["FUNC_INOUT"]);return;}
;for(var zcw=0;zcw<zgpi.length;zcw++){zgrj(zgpi[zcw]);}
zcte(zfla+". uploadOFS. Step 4. <- ",zwf,zctf["INFO"]);return;}
;function zgrl(zgra){zgnn(30);zcte(zfla+". eraseTargetUserPublicKey. Step 3. -> ",zwf,zctf["INFO"]);self[zgal]("",function zgrm(zgrn,zgro){zcte(zfla+". erasePublicKey_Ok. Step 3. -> ",zwf,zctf["INFO"]);zgrh(zgra);zcte(zfla+". erasePublicKey_Ok. Step 3. Goto step 4.. <-",zwf,zctf["INFO"]);return;}
,function zgrp(zcpb){zcte(zfla+". erasePublicKey_Error. Step 3. -> ",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
return;},zgqd);zcte(zfla+". eraseTargetUserPublicKey. Step 3. <- ",zwf,zctf["INFO"]);return;}
;function zgor(zgos){try{zgnn(25);zcte(zfla+". encryptNewPasswordByUserPublicKey. Step 2. ->",zwf,zctf["INFO"]);var zgot=zcva;var zgra=[];for(var zgg=0;zgg<zgos.length;zgg++){var zgkp=zgos[zgg];var zgou=zgkp["publicKey"];var zgov=CryptoJS.MD5(zgou);var zgow=zgov.toString(CryptoJS.enc.hex);var zgox=new RSAKey();var zgoy=zfyv.zgge(zgou,true);zgox.setPublic(zgoy["modulus"],zgoy["exponent"]);var zgoz=zgox.encrypt(zgot);var zgpa=zawd.zcxv(zawd.zfip(zgoz));var zgpb={}
;zgpb["accountId"]=zgkp["accountId"];zgpb["mp"]=zgpa;zgpb["publicKeyHash"]=zgow;zgra.push(zgpb);}
zgrl(zgra);zcte(zfla+". encryptNewPasswordByUserPublicKey. Step 2. Goto Step 3...<-",zwf,zctf["INFO"]);return;}
catch(zdn){zwe("EXCEPTION in "+zfla+".encryptNewPasswordByUserPublicKey: "+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in encryptNewPasswordByUserPublicKey:"+zhj.toString()}
);}}};function zgpc(){zcte(zfla+". getTrustedUsersList. Step 1. -> ",zwf,zctf["INFO"]);zgnn(15);self[zfzq](function zgpd(data){zcte(zfla+". getTrusted_Ok. Step 1. -> ",zwf,zctf["INFO"]);var zgpe=data["trustedUsers"];if(!zgpe||!zgpe.length){zgrl([]);zcte(zfla+". getTrusted_Ok. Step 1. No trusted users. Goto Step 3.. <-",zwf,zctf["INFO"]);return;}
zgor(zgpe);zcte(zfla+". getTrusted_Ok. Step 1. Goto Step 2. users="+zgpe.length+" <-",zwf,zctf["INFO"]);return;}
,function zgpf(zcpb){zcte(zfla+". getTrusted_Error. Step 1. -> ",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
return;},zgqd);zcte(zfla+". getTrustedUsersList. Step 1. <- ",zwf,zctf["INFO"]);return;}
;zgpc();}catch(zhj){this.zgfm(zfla,zhj,zfju);zgnn(zgda);}
};zgej.prototype[zfzk]=function(zgrq,zcva,zcwo,zgrr,zfjt,zfju,zgnn){var zcwz=zfzk;var zfla="RfDataManager."+zcwz;if(!zgnn){zgnn=function(zvt){}
;}try{var self=this;zcte(zfhv+zfla+" newPwd='"+zcva+"' for account='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=self.zgjj({"SERVER_URL":self.zgem,"PVC_CODE":zgrq,"ACCOUNT_ID":zcwo,"NEW_PASSWORD":zcva}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);zgnn(zgda);return false;}
if(zcva.length<zgnf||zcva.length>zgng){zcte(zfla+". New account password is incorrect (6-49 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"New account password is incorrect (6-49 symbols)"));}
zgnn(zgda);return false;}zgnn(10);function zgrs(){zcte(zfla+".logOffAfterReset #STEP 5#",zwf,zctf["FUNC_INOUT"]);zgnn(95);self[zfzi](1,function zglo(zhw){if(typeof(zfjt)!=zfhx){zfjt(zhw);zgnn(zgda);}
return true;},function zglp(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);zgnn(zgda);}
return false;});zcte(zfla+".logOffAfterReset #END OF STEP 5#",zwf,zctf["FUNC_INOUT"]);return;}
;function zgrt(zgru,zgro){zcte(zfla+".MakeKeysUploadOFS #STEP 4#",zwf,zctf["FUNC_INOUT"]);zgnn(75);var zglj=1024;var zglk=zfyv.zgll(zglj);var zglm=zglk['Public_Pem'];var zgln=zglk['Private_Pem'];var zfuj=Math.round(new Date()/1000);var zggr={"i":{"F":true}
,"c":[{"b":zgln,"i":{"n":"private-key.pem","c":zfuj,"m":zfuj,"s":zgln.length,"f":true}
},{"i":{"F":true,"n":"root"},"c":[]}]
};zgnn(80);if(zcwo==self.zgen){zfzc.zdwm();zfzc.zfsc(self.zgen);}
var zgkb=self.zgev!=null?self.zgev:new RfapiJS.CRfOneFileSys();var file="user-data.rfo";var zgjv=self.zgjt(zggr);zgkb.zfis(zcwo);zgkb.zfkx(zgjv,file,zcwo,zcva,zfib,true,function zgld(zgle){zcte(zfla+". MakeKeysUploadOFS #STEP 4#  encrypt_Ok callback ->",zwf,zctf["FUNC_INOUT"]);var zglf=new Uint8Array(zgle);var zgfl=self.zgfr(true);!zgru?zgfl["If-None-Match"]="*":zgfl["If-Match"]=zgru;var zgik=self.zgem+"/rf-api/"+encodeURI(zcwo)+"/"+file;self.zgio(zgik,zglf,zgfl,"POST",false,true,function zglg(zgeh,zdn){zcte(zfla+". makeRequestAsync.saveOFS_callback ->",zwf,zctf["FUNC_INOUT"]);var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte(zfla+". makeRequestAsync.saveOFS_callback failed. Return false.",zwf,zctf["SPECIAL_CASE"]);zgnn(zgda);return false;}
if(zgeh.status==zgcy){if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));}
zgnn(zgda);return false;}if(zgeh.status==zgcz){if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));}
zgnn(zgda);return false;}self.zgfu(zgeh.getResponseHeader("eTag"),zcwo,file);if(zcwo==self.zgen){zfzc.zauy(zggr,zfht["USER_DATA"],self.zgen);}
self[zgal](zglm,function zglo(zcwx){zgrs();return true;}
,function zglp(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);zgnn(zgda);}
return false;},zcwo);});return;},function zglh(zdq){zcte(zfla+". MakeKeysUploadOFS #STEP 4#  encrypt_Error callback ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zdq);}
return;});zcte(zfla+".MakeKeysUploadOFS #END OF STEP 4#",zwf,zctf["FUNC_INOUT"]);return;}
;function zgrv(){zcte(zfla+".getOFSeTag #STEP 3#",zwf,zctf["FUNC_INOUT"]);zgnn(60);self[zgbk](function zgrw(zgfv,zggq){zcte(zfla+".getOFSeTag  getETag_AnswerCallback. #STEP 3#",zwf,zctf["FUNC_INOUT"]);zgrt(zgfv,zggq);return;}
,function zgrx(zcpb){zcte(zfla+".getOFSeTag  getETag_ErrorCallback. #STEP 3#",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zcpb);zgnn(zgda);}
return false;},zfht["USER_DATA"],zcwo);zcte(zfla+".getOFSeTag #END OF STEP 3#",zwf,zctf["FUNC_INOUT"]);return;}
;function zgry(){zcte(zfla+".logintoAccount #STEP 2#",zwf,zctf["FUNC_INOUT"]);zgnn(40);self[zfzh](zcwo,zcva,20,undefined,undefined,undefined,function zgrz(zcut,zcuu){if(zcuu&&zcuu["updateTrustedUsers"]){self[zfzp](function zgiv(zakw){zcte(zfla+".logintoAccount  updateTrustedUsers. OK_callback #STEP 2#",zwf,zctf["FUNC_INOUT"]);zgrv();return;}
,function zgiw(zcpb){zcte(zfla+".logintoAccount  updateTrustedUsers. Error_callback #STEP 2#",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zcpb);zgnn(zgda);}
return false;})}else{zgrv();}return;},function zgsa(zcpb){zcte(zfla+".logintoAccount  login_ErrorCallback. #STEP 2#",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zcpb);zgnn(zgda);}
return false;});zcte(zfla+".logintoAccount #END OF STEP 2#",zwf,zctf["FUNC_INOUT"]);return;}
;function zgsb(){zcte(zfla+".makeSaltHashKeys #STEP 1#",zwf,zctf["FUNC_INOUT"]);var zfjc=zawd.zfod(16);var zgnu=new RfapiJS["SibScramAuthClient"]();var zglk=zgnu.zgnv(zavo.zcxt(zcva),zfjc,zgdc);var zgnw=zglk.item2;var zgny=zglk.item3;for(var zcw=0;zcw<zgny.length;zcw++){zgnw.push(zgny[zcw]);}
var hash=zawd.zcxv(zgnw);hash=hash.replace(new RegExp('=','g'),'');var zgoo=zawd.zcxv(zfjc);zgoo=zgoo.replace(new RegExp('=','g'),'');var zagq={}
;zagq["method"]="SCRAM-SHA-256";zagq["iterations"]=zgdc;zagq["salt"]=zgoo;zagq["hash"]=hash;zagq["code"]=zgrq;zgnn(25);var zgkb=new RfapiJS.CRfOneFileSys();var zglb={"i":{"F":true}
,"c":[{"i":{"F":true,"n":"root"},"c":[]}]};var zgjv=self.zgjt(zglb);zgkb.zfis(zcwo);zgkb.zfkx(zgjv,zfht["USER_DATA"],zcwo,zcva,zfib,true,function zgld(zgle){zcte(zfla+". Step 1  encrypt_Ok callback ->",zwf,zctf["FUNC_INOUT"]);zgkb.zfis(zcwo);var zglf=new Uint8Array(zgle);var zgsc=zawd.zcxv(zglf);zagq["emptyOneFile"]=zgsc;zgnn(35);var body=JSON.stringify(zagq);var zgik=self.zgem+"/rf-api/"+encodeURI(zcwo)+"?resetpwd";var zgfl=self.zgfr();self.zgio(zgik,body,zgfl,"POST",false,false,function zgsd(zgeh,zdn){zcte(zfla+".makeSaltHashKeys resetPwd_callback.  #STEP 1# ",zwf,zctf["FUNC_INOUT"]);var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte(zfla+".makeSaltHashKeys resetPwd_callback failed. Return false.",zwf,zctf["SPECIAL_CASE"]);zgnn(zgda);return false;}
zgry();return;});return;},function zglh(zdq){zcte(zfla+". Step 1. encrypt_Error callback ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zdq);}
return;});zcte(zfla+".makeSaltHashKeys # END OF STEP 1#",zwf,zctf["FUNC_INOUT"]);return;}
;function zgse(){zcte(zfla+".resetPwd # STEP 1# (MULTI)",zwf,zctf["FUNC_INOUT"]);zgnn(45);var zgns=CryptoJS.MD5(zcva);var zgnt=zgns.toString(CryptoJS.enc.hex);var zagq={}
;zagq["code"]=zgrq;zagq["password"]=zgnt;var body=JSON.stringify(zagq);var zgik=self.zgem+"/rf-api/"+encodeURI(zcwo)+"?resetpwd";var zgfl=self.zgfr();zgnn(80);self.zgio(zgik,body,zgfl,"POST",false,false,function zgsd(zgeh,zdn){zcte(zfla+".resetPwd resetPwd_callback.  #STEP 1# ",zwf,zctf["FUNC_INOUT"]);zgnn(zgda);var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte(zfla+".resetPwd resetPwd_callback failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(typeof(zfjt)!=zfhx){zfjt(zgeh.status);}return;}
);zcte(zfla+".resetPwd # END OF STEP 1# (MULTI)",zwf,zctf["FUNC_INOUT"]);return;}
;if(zgrr){zgnn(30);zgse();}else{zgnn(15);zgsb();}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);zgnn(zgda);}};zgej.prototype[zfrw]=function(path,zfjt,zfju,zbjl,zfr,zcvc,zfw,zcvd,zcve){var zcwz=zfrw;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" path='"+path+"'",zwf,zctf["FUNC_INOUT"]);var zgoi=this[zgcd]();var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen,"ACCOUNT_MODE":zgoi}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="list",zagq[zgdi][zgdf]=path;if((typeof(zfr)!=zfhx)&&zfr!=""){zagq[zgdi][zgdk]=parseInt(zfr);}
if((typeof(zbjl)!=zfhx)&&zbjl!=""){zagq[zgdi][zgde]=zbjl;}
if((typeof(zcvc)!=zfhx)&&zcvc==true){zagq[zgdi][zgdj]=zcvc;}
if((typeof(zfw)!=zfhx)&&zfw==true){zagq[zgdi]["iconMime"]="x-icon";}
if(zgoi==zarx["OFS"]){if((typeof(zcvd)!=zfhx)){zagq[zgdi]["bExcludeShared"]=zcvd;}
if((typeof(zcve)!=zfhx)){zagq[zgdi]["bBody"]=zcve;}
this.zggt(zagq,zcwz,zfjt,zfju,zfht["USER_DATA"]);}
else if(zgoi==zarx["MULTIFILE"]){var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfrl]=function(path,zfjt,zfju,zcda,zcvg,zcvi){var zcwz=zfrl;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" path='"+path+"'",zwf,zctf["FUNC_INOUT"]);var zgoi=this[zgcd]();var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen,"ACCOUNT_MODE":zgoi}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
zcvg=typeof(zcvg)==zfhx?0:(zcvg==""?0:parseInt(zcvg));zcvi=typeof(zcvi)==zfhx?"":(zcvi==true?"x-icon":"");zcte(zfla+". path='"+path+"' parts='"+zcvg+"' type='"+zcda+"' iconMime='"+zcvi+"'",zwf,zctf["INFO"]);var zagq={}
;zagq[zgdi]={};zagq[zgdi][zgdh]="getinfo";zagq[zgdi][zgdf]=path;zagq[zgdi][zgdk]=zcvg;if(typeof(zcda)!=zfhx){zagq[zgdi][zgde]=zcda;}
if(typeof(zcvi)!=zfhx){zagq[zgdi]["iconMime"]=zcvi;}
if(zgoi==zarx["MULTIFILE"]){var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);}else if(zgoi==zarx["OFS"]){this.zggt(zagq,zcwz,zfjt,zfju,zfht["USER_DATA"]);}
zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);}catch(zhj){this.zgfm(zfla,zhj,zfju);}
};zgej.prototype[zfrj]=function(path,zfjt,zfju,zcwc,zfr,zcvc,zcvd){var zcwz=zfrj;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" path='"+path+"'  bExcludeShared='"+zcvd+"' bDeep='"+zcvc+"'",zwf,zctf["FUNC_INOUT"]);var zgoi=this[zgcd]();var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen,"ACCOUNT_MODE":zgoi}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="count";zagq[zgdi][zgdf]=path;if((typeof(zcwc)!=zfhx)){zagq[zgdi][zgde]=zcwc;}
if((typeof(zfr)!=zfhx)){zagq[zgdi][zgdk]=zfr;}if((typeof(zcvc)!=zfhx)){zagq[zgdi][zgdj]=zcvc;}
if((typeof(zcvd)!=zfhx)&&zcvd){zagq[zgdi]["bExcludeShared"]=zcvd;}
if(zgoi==zarx["OFS"]){this.zggt(zagq,zcwz,zfjt,zfju,zfht["USER_DATA"]);}
else if(zgoi==zarx["MULTIFILE"]){var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfri]=function(url,zfjt,zfju,zcda,zcvd){var zcwz=zfri;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" URL='"+url+"'",zwf,zctf["FUNC_INOUT"]);var zgoi=this[zgcd]();var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen,"ACCOUNT_MODE":zgoi,"URL":url}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="getdomainpasscards";zagq[zgdi][zgdq]=url;if((typeof(zcda)!=zfhx)){zagq[zgdi][zgde]=zcda;}
if(zgoi==zarx["OFS"]){if((typeof(zcvd)!=zfhx)){zagq[zgdi]["bExcludeShared"]=zcvd;}
this.zggt(zagq,zcwz,zfjt,zfju,zfht["USER_DATA"]);}
else if(zgoi==zarx["MULTIFILE"]){var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfrh]=function(url,zfjt,zfju,zcda,zgsf,zgsg,zfr){var zcwz=zfrh;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" URL='"+url+"'",zwf,zctf["FUNC_INOUT"]);var zgoi=this[zgcd]();var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen,"ACCOUNT_MODE":zgoi,"URL":url}
,zfju);if(!zgkw){zcte("RfDataManager."+zcwz+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="getmatchingpasscards";zagq[zgdi][zgdq]=url;if((typeof(zcda)!=zfhx)){zagq[zgdi][zgde]=zcda;}
if((typeof(zgsf)!=zfhx)){zagq[zgdi]["matchLevelMin"]=zgsf;}
if((typeof(zgsg)!=zfhx)){zagq[zgdi]["matchLevelMax"]=zgsg;}
if((typeof(zfr)!=zfhx)){zagq[zgdi][zgdk]=zfr;}if(zgoi==zarx["OFS"]){this.zggt(zagq,zcwz,zfjt,zfju,zfht["USER_DATA"]);}
else if(zgoi==zarx["MULTIFILE"]){var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfrq]=function(zfjt,zfju){var zcwz=zfrq;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgoi=this[zgcd]();var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(zgoi!=zarx["OFS"]){zcte(zfla+". MODE IS NOT OFS. Return false.",zwf,zctf["INFO"]);return false;}
var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="deleteall";this.zggt(zagq,zcwz,zfjt,zfju,zfht["USER_DATA"]);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfrs]=function(path,zcda,zfjt,zfju){var zcwz=zfrs;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var self=this;var zgoi=self[zgcd]();var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER_ID":self.zgen,"PATH":path,"ACCOUNT_MODE":zgoi}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="delete";zagq[zgdi][zgdf]=path;if((typeof(zcda)!=zfhx)&&zcda!=""){zagq[zgdi][zgde]=zcda;}
if(zgoi==zarx["OFS"]){zfzc[zfrl](zagq,function zgsh(item){if(item[RfapiJS.ITEM_SHARED_PROP]){self[zgbe](item[RfapiJS.ITEM_SHARED_PROP][RfapiJS.ACCOUNT_ID_PROP],zfjt,zfju);return;}
else{self.zggt(zagq,zcwz,zfjt,zfju,zfht["USER_DATA"]);return;}
},function zgii(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return;});return;}else if(zgoi==zarx["MULTIFILE"]){var body=JSON.stringify(zagq);self.zgij(zcwz,self.zggf(),body,self.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfru]=function(zgsi,zgsj,zgsk,zgsl,zfjt,zfju){var zcwz=zfru;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" FROM_path='"+zgsi+"'  TO_path='"+zgsk+"'",zwf,zctf["FUNC_INOUT"]);var self=this;var zgoi=self.zgel;var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER_ID":self.zgen,"FROM_Path":zgsi,"TO_Path":zgsk,"ACCOUNT_MODE":zgoi}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
zgsj=parseInt(zgsj);zgsl=parseInt(zgsl);var zagq={}
;zagq[zgdi]={};zagq[zgdi][zgdh]="move";zagq[zgdi][zgdl]={}
;zagq[zgdi][zgdl][zgdf]=zgsi;zagq[zgdi][zgdl][zgde]=zgsj;zagq[zgdi][zgdm]={}
;zagq[zgdi][zgdm][zgdf]=zgsk;zagq[zgdi][zgdm][zgde]=zgsl;if(zgoi==zarx["MULTIFILE"]){var body=JSON.stringify(zagq);self.zgij(zcwz,self.zggf(),body,self.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);}else if(zgoi==zarx["OFS"]){if(zgsj==ztk["RfItemType_Folder"]){zcte(zfhv+zfla+" . This IS folder. Check  FROM ItemInfo from Repo for isShared",zwf,zctf["FUNC_INOUT"]);var zgsm={"request":{}
};zgsm["request"]["path"]=zgsi;zgsm["request"]["type"]=ztk["RfItemType_Folder"];zfzc[zfrl](zgsm,function zgsn(zgso){if(zgso[RfapiJS.ITEM_SHARED_PROP]){zcte(zfhv+zfla+" . Answer_GetItemInfo_From-> *SHARED*",zwf,zctf["FUNC_INOUT"]);var zfsd=zgso[RfapiJS.ITEM_SHARED_PROP][RfapiJS.ACCOUNT_ID_PROP];if(zgsk.startsWith("/")){zgsk=zgsk.substr(1);}
self[zgai](zfsd,zfjt,zfju,zgsk,undefined,undefined,undefined,self.zgen,undefined);return;}
else{zcte(zfhv+zfla+" . Answer_GetItemInfo_From-> *FOLDER*",zwf,zctf["FUNC_INOUT"]);var zgsp={"request":{}
};zgsp["request"]["path"]=zgsk;zfzc[zfrl](zgsp,function zgsq(zgsr){zcte(zfhv+zfla+" . Answer_GetItemInfo_To-> ",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"File/Folder with the same name:'"+zgsk+"' already exists"));}
return;},function zgss(zcpb){zcte(zfhv+zfla+" . Error_GetItemInfo_To-> ",zwf,zctf["FUNC_INOUT"]);if(zcpb["sibErr"]=="NotFound"){self.zggt(zagq,zcwz,zfjt,zfju,zfht["USER_DATA"]);return;}
if(typeof(zfju)!=zfhx){zfju(zcpb);}return;});return;}
},function zgst(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return;});}else{zcte(zfhv+zfla+" . This is not a folder - common function call.",zwf,zctf["FUNC_INOUT"]);self.zggt(zagq,zcwz,zfjt,zfju,zfht["USER_DATA"]);}
}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}catch(zhj){this.zgfm(zfla,zhj,zfju);}
};zgej.prototype[zfrt]=function(zgsu,zcpx,zgsv,zcpy,zfjt,zfju){var zcwz=zfrt;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" FROM_path='"+zgsu+"'  TO_path='"+zgsv+"'",zwf,zctf["FUNC_INOUT"]);var zgoi=this[zgcd]();var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen,"OLD_PATHNAME":zgsu,"NEW_PATHNAME":zgsv,"ACCOUNT_MODE":zgoi}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
zcpx=parseInt(zcpx);zcpy=parseInt(zcpy);var zagq={}
;zagq[zgdi]={};zagq[zgdi][zgdh]="copy";zagq[zgdi][zgdl]={}
;zagq[zgdi][zgdl][zgdf]=zgsu;zagq[zgdi][zgdl][zgde]=zcpx;zagq[zgdi][zgdm]={}
;zagq[zgdi][zgdm][zgdf]=zgsv;zagq[zgdi][zgdm][zgde]=zcpy;if(zgoi==zarx["MULTIFILE"]){var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);}else if(zgoi==zarx["OFS"]){this.zggt(zagq,zcwz,zfjt,zfju,zfht["USER_DATA"]);}
zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}catch(zhj){this.zgfm(zfla,zhj,zfju);}
};zgej.prototype[zfrr]=function(path,zfjt,zfju){var zcwz=zfrr;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" path='"+path+"'",zwf,zctf["FUNC_INOUT"]);var zgoi=this[zgcd]();var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen,"PATH":path,"ACCOUNT_MODE":zgoi}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
path=path.trim();var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="createfolder";zagq[zgdi]["folder"]=path;if(zgoi==zarx["OFS"]){this.zggt(zagq,zcwz,zfjt,zfju,zfht["USER_DATA"]);}
else if(zgoi==zarx["MULTIFILE"]){var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfrm]=function(path,zfjt,zfju,zgsw,zgsx){var zcwz=zfrm;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" path='"+path+"'",zwf,zctf["FUNC_INOUT"]);var zgoi=this[zgcd]();var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen,"ACCOUNT_MODE":zgoi,"PATH":path}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="getfile";zagq[zgdi][zgdf]=path;if((typeof(zgsw)!=zfhx)){zagq[zgdi][zged]=zgsw;}
if((typeof(zgsx)!=zfhx)){zagq[zgdi][zgee]=zgsx;}if(zgoi==zarx["OFS"]){this.zggt(zagq,zcwz,zfjt,zfju,zfht["USER_DATA"]);}
else if(zgoi==zarx["MULTIFILE"]){var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfrp]=function(path,zcda,zfjt,zfju,zavh,zbtu,zgsy,zgsz,zgta,zgtb){var zcwz=zfrp;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" path='"+path+"' objType='"+zcda+"'",zwf,zctf["FUNC_INOUT"]);var zgoi=this[zgcd]();var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen,"PATH":path,"ACCOUNT_MODE":zgoi}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
zcda=parseInt(zcda);var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="getdataitem2";zagq[zgdi][zgdf]=path;zagq[zgdi][zgde]=zcda;if(typeof(zavh)!=zfhx&&zavh!=""){zagq[zgdi]["level"]=parseInt(zavh);}
if(typeof(zbtu)!=zfhx){zagq[zgdi][zgdn]=zbtu;}if((typeof(zgsy)!=zfhx)){zagq[zgdi]["allFields"]=zgsy;}
if((typeof(zgsz)!=zfhx)){zagq[zgdi]["options"]=zgsz;}
if((typeof(zgta)!=zfhx)){zagq[zgdi][zged]=zgta;}if((typeof(zgtb)!=zfhx)){zagq[zgdi][zgee]=zgtb;}
if(zgoi==zarx["OFS"]){this.zggt(zagq,zcwz,zfjt,zfju,zfht["USER_DATA"]);}
else if(zgoi==zarx["MULTIFILE"]){var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfrv]=function(path,zcda,data,zfjt,zfju,zgtc,zgtd,zgte){var zcwz=zfrv;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgoi=this[zgcd]();var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen,"ITEM":data,"ACCOUNT_MODE":zgoi,"PATH":path}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
path=path.trim();zcda=parseInt(zcda);var zagq={};zagq[zgdi]={}
;zagq[zgdi][zgdh]="putdataitem";zagq[zgdi][zgdf]=path;zagq[zgdi][zgde]=zcda;zagq[zgdi]["data"]=data;if((typeof(zgtc)!=zfhx)){zagq[zgdi][zged]=zgtc;}
if((typeof(zgtd)!=zfhx)){zagq[zgdi][zgee]=zgtd;}if((typeof(zgte)!=zfhx)){zagq[zgdi]["s"]=zgte;}
if(zgoi==zarx["OFS"]){this.zggt(zagq,zcwz,zfjt,zfju,zfht["USER_DATA"]);}
else if(zgoi==zarx["MULTIFILE"]){var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfro]=function(zcda,zfjt,zfju,zejx,zgtf,zgtg){var zcwz=zfro;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" objType='"+zcda+"'",zwf,zctf["FUNC_INOUT"]);var zgoi=this[zgcd]();var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen,"ACCOUNT_MODE":zgoi,"TYPE":zcda}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
zcda=parseInt(zcda);var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="createdataitem2";zagq[zgdi][zgde]=zcda;if((typeof(zejx)!=zfhx)){zagq[zgdi]["country"]=zejx;}
if((typeof(zgtf)!=zfhx)){zagq[zgdi]["phonePrefixMode"]=zgtf;}
if((typeof(zgtg)!=zfhx)){zagq[zgdi]["appUpload"]=zgtg;}
if(zgoi==zarx["OFS"]){zfzc[zfro](zagq,function zgth(zgv){if(!zgv){if(typeof(zfju)!=zfhx){zfju(new zfpw(undefined,zgcv,undefined,undefined,"NotFound"));}
return false;}zcte(zfla+". RepAnswerCallBack. Repository returned result="+zgv,zwf,zctf["FUNC_INOUT"]);if(typeof(zfjt)!=zfhx){zfjt(zgv,zcue);}
return true;},function zgti(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;});return;}else if(zgoi==zarx["MULTIFILE"]){var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgbq]=function(zfjt,zfju){var zcwz=zgbq;var zfla="RfDataManager."+zcwz;try{var self=this;zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgoi=self[zgcd]();var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER_ID":self.zgen,"ACCOUNT_MODE":zgoi}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="getoptions";if(zgoi==zarx["OFS"]){throw"Not Implemented";}
else if(zgoi==zarx["MULTIFILE"]){var body=JSON.stringify(zagq);self.zgij(zcwz,self.zggf(),body,self.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfrk]=function(zatm,zcda,zfjt,zfju){var zcwz=zfrk;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" list="+zatm,zwf,zctf["FUNC_INOUT"]);var zgoi=this[zgcd]();var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen,"list":zatm,"ACCOUNT_MODE":zgoi}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="getusageinfo";zagq[zgdi]["list"]=zatm;zagq[zgdi][zgde]=zcda;if(zgoi==zarx["OFS"]){this.zggt(zagq,zcwz,zfjt,zfju,zfht["APP_DATA"]);}
else if(zgoi==zarx["MULTIFILE"]){var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfrn]=function(zfva,zfjt,zfju,zcwc,zcvc,zfw){var zcwz=zfrn;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" sFilter='"+zfva+"'",zwf,zctf["FUNC_INOUT"]);var zgoi=this[zgcd]();var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen,"ACCOUNT_MODE":zgoi,"SEARCH":zfva}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
zcte(zfla+". sFilter='"+zfva+"' objTypes='"+zcwc+"' bDeep='"+zcvc+"'",zwf,zctf["INFO"]);if(typeof(zcwc)==zfhx){zcwc=zfze;}
if(typeof(zcvc)==zfhx){zcvc=true;}zfva=zfva.toLowerCase();var zagq={}
;zagq[zgdi]={};zagq[zgdi][zgde]=zcwc;zagq[zgdi][zgdk]=zfpx["enUrls"];zagq[zgdi][zgdj]=zcvc;if((typeof(zfw)!=zfhx)&&zfw==true){zagq[zgdi]["iconMime"]="x-icon";zagq[zgdi][zgdk]=zfpx["enUrls"]|zfpx["enIcon"];}
if(zgoi==zarx["OFS"]){zagq[zgdi][zgdh]="search";zagq[zgdi]["search"]=zfva;this.zggt(zagq,zcwz,zfjt,zfju,zfht["USER_DATA"]);}
else if(zgoi==zarx["MULTIFILE"]){zagq[zgdi][zgdh]="list";zagq[zgdi][zgdf]="";var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{"filter":zfva}
,zfjt,zfju);}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgbr]=function(zfjt,zfju){var zcwz=zgbr;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgoi=this[zgcd]();var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="updatestatus";if(zgoi==zarx["OFS"]){throw"Not Implemented";}
else if(zgoi==zarx["MULTIFILE"]){var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};var zgtj="ServerOffSessionCall";zgej.prototype[zgtj]=function(url,zcov,zyr,zsv,zfjt,zfju){var zcwz=zgtj;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var self=this;var zgkw=self.zgjj({"url":url,"user":zcov,"password":zyr}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zgfl=self.zgfr();var zgml=new RfapiJS["SibHttpScramAuthClient"]();zgml.zgmm("RoboForm Online Server");var zgmn=zgml.zgmo(zcov,zyr);zgfl["Authorization"]=zgmn;self.zgio(url,zsv,zgfl,"POST",false,false,function zmw(zgeh,zdn){zcte(zfla+". makeRequestAsync ->",zwf,zctf["FUNC_INOUT"]);if(zgeh.status==zcuf){var zgmp=zgeh.getResponseHeader("WWW-Authenticate");if(zgmp){var zgmq=RfapiJS["SibHttpGetAuthMethod"](zgmp);if(zgml.zgmr(zgmq)){zgmn=zgml.zgmo(zcov,zyr);zgfl["Authorization"]=zgmn;self.zgio(url,zsv,zgfl,"POST",false,false,function zgms(zgmt,zgmu){zcte(zfla+". SECOND makeRequestAsync callback2->",zwf,zctf["FUNC_INOUT"]);var zgmv=self.zgfg(zgmt,zgmu,zfju);if(!zgmv){zcte(zfla+". checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(zgmt.status==zcue){zcte(zfla+". SUCCESSFUL2!!!  user='"+zcov+"'",zwf,zctf["INFO"]);if(typeof(zfjt)!=zfhx){zfjt(zcue);}
return true;}if(typeof(zfju)!=zfhx){zfju(new zfpw(zgmt.status,zgmt.statusText,undefined,zgmt,undefined));return false;}
zcte(zcwz+" RequestAsync callback <-",zwf,zctf["FUNC_INOUT"]);return;}
);}}return;}if(zgeh.status==zcue){zcte(zfla+". SUCCESSFUL1!!!  user='"+zcov+"'",zwf,zctf["INFO"]);if(typeof(zfjt)!=zfhx){zfjt(zcue);}
return true;}if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));return false;}
});zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgbp]=function(zfjt,zfju){var zcwz=zgbp;var zfla="RfDataManager."+zcwz;try{var self=this;zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER_ID":self.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
self[zgbi](function zgtk(zcut){zcte(zfla+". HttpStatus="+zcut,zwf,zctf["SPECIAL_CASE"]);if(typeof(zfjt)!=zfhx){zfjt(zfzc.zfse(zfht["SYNC_DATA"],self.zgen),zcut);return false;}
return;},function zgtl(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);return false;}
return;},zfht["SYNC_DATA"]
);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgbn]=function(zgtm,zfjt,zfju,zgtn,zgto){var zcwz=zgbn;var zfla="RfDataManager."+zcwz;try{var self=this;zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER_ID":self.zgen,"DEVICES":zgtm}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq["devices"]=zgtm;if((typeof(zgtn)!=zfhx)){zagq["remove"]=zgtn;}
if((typeof(zgto)!=zfhx)){zagq["logout"]=zgto;}var body=JSON.stringify(zagq);self.zgij(zcwz,self.zggf("?deletedevices"),body,self.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgbs]=function(zbtu,zfjt,zfju){try{var zcwz=zgbs;zcte("RfDataManager."+zcwz+"  ->",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen}
,zfju);if(!zgkw){zcte("RfDataManager."+zcwz+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(self.zgel!=zarx["MULTIFILE"]){zcte("RfDataManager."+zcwz+". MODE IS UNKNOWN. Return false.",zwf,zctf["INFO"]);return false;}
var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="cachemp";zagq[zgdi][zgdn]=zbtu;var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);return;}catch(zhj){this.zgfm("RfDataManager.CacheMasterPassword",zhj,zfju);}
};zgej.prototype[zgbt]=function(path,zcda,zgtp,zgtq,zfjt,zfju,zgtr){try{var zcwz=zgbt;zcte("RfDataManager."+zcwz+" ->",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen,"PATH":path,"ACCOUNT_MODE":this.zgel}
,zfju);if(!zgkw){zcte("RfDataManager."+zcwz+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(self.zgel!=zarx["MULTIFILE"]){zcte("RfDataManager."+zcwz+". MODE IS UNKNOWN. Return false.",zwf,zctf["INFO"]);return false;}
var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="changepwd";zagq[zgdi][zgdf]=path;zagq[zgdi][zgdl]=zgtp;zagq[zgdi][zgdm]=zgtq;if(typeof(zcda)!=zfhx){zagq[zgdi][zgde]=zcda;}
if(typeof(zgtr)!=zfhx){zagq[zgdi]["dp"]=zgtr;}var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);return;}catch(zhj){this.zgfm("RfDataManager.ChangePassword",zhj,zfju);}
};zgej.prototype[zgbu]=function(zbtu,zfjt,zfju){var zcwz=zgbu;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" pwd='"+zbtu+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER_ID":this.zgen,"PWD":zbtu,"ACCOUNT_MODE":this.zgel}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(this.zgel!=zarx["MULTIFILE"]){zcte(zfla+". MODE IS UNKNOWN. Return false.",zwf,zctf["INFO"]);return false;}
var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="checkpwd";zagq[zgdi][zgdn]=zbtu;var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf(),body,this.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype["ConvertMultiFileToOFS"]=function(zgts,zgtt,zfjt,zfju){try{function zgtu(zgeh){zcte("RfDataManager.ConvertMultiFileToOFS. Convert_SaveOFS_AnswerCallback ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfjt)!=zfhx){zfjt(zfzc.zfse(zfht["USER_DATA"],self.zgen),100);}
return;}function zgtv(zanz){zcte("RfDataManager.ConvertMultiFileToOFS. Convert_SaveOFS_ErrorCallback ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zanz);}
return;}zcte("RfDataManager.ConvertMultiFileToOFS ->",zwf,zctf["FUNC_INOUT"]);var self=this;var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER_ID":self.zgen}
,zfju);if(!zgkw){zcte("RfDataManager.ConvertMultiFileToOFS. misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(self.zgel!=zarx["MULTIFILE"]){zcte("RfDataManager.GetItemsList. MODE IS not MULTIFILE. Return false.",zwf,zctf["INFO"]);return false;}
var zgtw=0;var zgtx=["aaaa"];var zagq={};zagq[zgdi]={}
;zagq[zgdi][zgdh]="getdataitem2";zagq[zgdi]["level"]=4;zagq[zgdi]["options"]=true;if(typeof zgts!=zfhx){zagq[zgdi][zgdn]=zgts[zgtw];}
var zgfl=self.zgfr();var zgik=self.zggf();var zggr={"i":{"F":true}
,"c":[{"i":{"F":true,"n":"root"},"c":[]}]};zfzc.zauy(zggr,zfht["USER_DATA"],self.zgen);self.zgty("",function zgtz(zss,zcut){var zfgr=true;for(var zcw=0;zcw<zss.length;){var item=zss[zcw];var path=item[zgdf];var zcda=item[zgde];zcda=parseInt(zcda);if(zcda==8){zcw++;var zcsg={"request":{"item":item}
};zfzc.zfxp(zcsg,function zgua(zgub,zguc){if(typeof(zfjt)!=zfhx){if(zcw==zss.length){self[zgcc](zgtt);self[zgce](zarx["OFS"]);self[zgbh](zgtu,zgtv,zfht["USER_DATA"],self.zgen);}
else{zfjt(null,parseInt((zcw/zss.length)*100));}}}
,function zdq(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
});continue;}zagq[zgdi][zgdf]=path;zagq[zgdi][zgde]=zcda;var body=JSON.stringify(zagq);var zgud=self.zgjk(zgik,body,zgfl,"POST",false);if(zgud&&zgud.status==zcue){var zgfh=JSON.parse(zgud.responseText);zgfh=zgfh[zgdp];var zhw=zgfh[zgdo];if(zhw=="error"){if(zgfh["code"]==1){zcte("RfDataManager.GetItemsData. Password is incorrect. pwd='"+zgts[zgtw]+"'  item='"+path+"'",zwf,zctf["INFO"]);if(zgts.length==1){if(typeof(zfju)!=zfhx){zfju({"Description":zgfh["description"]+" : Password(s) are incorrect. Set other password","HttpRequest":path}
);}break;}if(zgts.length==zgtw+1){if(zfgr){zgtw=0;zfgr=false;zcte("RfDataManager.GetItemsData. Try (1) password='"+zgts[zgtw]+"' for item='"+path+"'",zwf,zctf["INFO"]);}
else{if(typeof(zfju)!=zfhx){zfju({"Description":zgfh["description"]+" : Password(s) are incorrect. Set other password","HttpRequest":path}
);}break;}}else{zgtw++;zcte("RfDataManager.GetItemsData. Try  (2) password='"+zgts[zgtw]+"' for item='"+path+"'",zwf,zctf["INFO"]);}
zagq[zgdi][zgdn]=zgts[zgtw];}else{if(typeof(zfju)!=zfhx){zfju({"Description":zgfh["description"]}
);}zcw++;}}else{zfgr=true;zcw++;var data=zgfh["data"];var zcsg={"request":{"item":item,"data":data}
};zfzc.zfxp(zcsg,function zgua(zgub,zguc){if(typeof(zfjt)!=zfhx){if(zcw==zss.length){self[zgcc](zgtt);self[zgce](zarx["OFS"]);self[zgbh](zgtu,zgtv,zfht["USER_DATA"],self.zgen);}
else{zfjt(null,parseInt((zcw/zss.length)*100));}}}
,function zdq(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
});}}else{if(typeof(zfju)!=zfhx){zfju({"Description":"server error"}
);}break;}}return true;},zfju,[1,2,3,4,5,6,7,8],0,true,false);}
catch(zhj){this.zgfm("RfDataManager.ConvertMultiFileToOFS",zhj,zfju);}
};zgej.prototype[zgae]=function(zfjt,zfju,zgnj,zbih,zgnk,zgnl,zgue,zguf,zgug,zguh,zgui,zguj){var zcwz=zgae;var zfla="RfDataManager."+zcwz;try{var self=this;zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);if(!self.zgem){zcte(zfla+". Server Url is undefined. Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],zgcs));}
return false;}if(typeof zgnj!=zfhx&&(zgnj!="")){zgnj=zgnj.trim();if(zgnj.length<zgmz||zgnj.length>zgna){zcte(zfla+" . Account login is incorrect (6-30 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Account login is incorrect (6-30 symbols)"));}
return false;}}if(typeof zbih!=zfhx&&(zbih!="")){zbih=zbih.trim();if(zbih.length<zgnb||zbih.length>zgnc){zcte(zfla+". Account name is incorrect (2-60 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Account name is incorrect (2-60 symbols)"));}
return false;}}if(typeof zgnk!=zfhx&&(zgnk!="")){zgnk=zgnk.trim();if(zgnk.length<zgnd||zgnk.length>zgne){zcte(zfla+". Account email is incorrect (6-50 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Account email is incorrect (6-50 symbols)"));}
return false;}}if(typeof zgnl!=zfhx&&(zgnl!="")){if(zgnl.length<zgnh||zgnl.length>zgni){zcte(zfla+". Account phone is incorrect (7-20 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Account phone is incorrect (7-20 symbols)"));}
return false;}}function zguk(zcwo){zcte(zfla+". Step 4. getCompanyAdmins for company='"+zgue+"'  accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);self[zgat](zgue,function zgul(data,zcut){try{zcte(zfla+". Step 4. companyUsers_OkCallback ->",zwf,zctf["INFO"]);var zgpe=data["users"];if(!zgpe.length){zcte(zfla+". Step 4. companyUsers_OkCallback. There are no users. Exit.",zwf,zctf["INFO"]);if(typeof(zfjt)!=zfhx){zfjt(zcue);}
return;}var zgum=[];for(var zcw=0;zcw<zgpe.length;zcw++){var zgkp=zgpe[zcw];if(typeof zgkp["is_admin"]=="undefined"||zgkp["is_admin"]==false){continue;}
if(self.zgen!=zgkp["id"]){zgum.push(zgkp["id"]);}}
if(!zgum.length){zcte(zfla+". Step 4. companyUsers_OkCallback. There are no admins. Exit.",zwf,zctf["INFO"]);if(typeof(zfjt)!=zfhx){zfjt(zcue);}
return;}var zgun=zgum.length;for(var zgg=0;zgg<zgum.length;zgg++){var zgqw=zgum[zgg];self[zgax](zgqw,zcwo,true,false,true,false,function zgqo(zhw){zcte(zfla+". Step 4.1. grant_OKCallBack for recipient='"+zgqw+"'",zwf,zctf["FUNC_INOUT"]);zgun--;if(!zgun){if(typeof(zfjt)!=zfhx){zfjt(zcue);}
}},function zgqp(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;},false,undefined);}}catch(zhj){zwe("EXCEPTION in "+zfla+".Step 4. companyUsers_OkCallback: "+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in "+zfla+" Step 4. companyUsers_OkCallback:"+zhj.toString()}
);}}},function zguo(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;});zcte(zfla+". Step 4. getCompanyAdmins <- ",zwf,zctf["FUNC_INOUT"]);}
;function zgup(zglf,zcwo){try{zcte(zfla+". #Step 3# upLoadOFS_forShared ->",zwf,zctf["INFO"]);var zgfl=self.zgfr(true);var file=zfht["USER_DATA"];var zgik=self.zgem+"/rf-api/"+encodeURI(zcwo)+"/"+file;zcte(zfla+". Step 3. SAVE OFS "+zgik,zwf,zctf["INFO"]);self.zgio(zgik,zglf,zgfl,"POST",false,true,function zglg(zgeh,zdn){zcte(zfla+". Step 3.  makeRequestAsync.saveOFS_callback ->",zwf,zctf["FUNC_INOUT"]);var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte(zfla+". Step 3. makeRequestAsync.saveOFS_callback failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(zgeh.status==zgcy){if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));}
return false;}if(zgeh.status==zgcz){if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));}
return false;}if(zgeh.status==zcue){zcte(zfla+". Step 3.  makeRequestAsync.saveOFS_callback. HTTP_Status_Code_OK.",zwf,zctf["FUNC_INOUT"]);self[zgbf](zcwo,function zguq(zcut){if(typeof zgue!=zfhx){zguk(zcwo);}
else{if(typeof(zfjt)!=zfhx){zfjt(zcut);}}return;},function zgur(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;});return;}if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));}
return;});}catch(zhj){zwe("EXCEPTION in "+zfla+".Step 3. upLoadOFS_forShared: "+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in "+zfla+" Step 3. upLoadOFS_forShared: "+zhj.toString()}
);}}};function zgus(zbtu,zcwo){zcte(zfla+". #Step 3.a# EncryptData. pwd='"+zbtu+"'  accountId='"+zcwo+"'",zwf,zctf["INFO"]);var zgkb=new RfapiJS.CRfOneFileSys();var zglb={"i":{"F":true}
,"c":[{"i":{"F":true,"n":"root"},"c":[]}]};var zgjv=self.zgjt(zglb);zgkb.zfkx(zgjv,zfht["USER_DATA"],zcwo,zbtu,4096,true,function zgld(zgle){zcte(zfla+". Step 3.a  encrypt_Ok callback ->",zwf,zctf["FUNC_INOUT"]);zgup(new Uint8Array(zgle),zcwo);return;}
,function zglh(zdq){zcte(zfla+". Step 3.a  encrypt_Error callback ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zdq);}
return;});zcte(zfla+". EncryptData. Step 3.a <-",zwf,zctf["INFO"]);return;}
;function zgut(zguu){try{zcte(zfla+". Step 2. createShAccount. account='"+zgnj+"'",zwf,zctf["INFO"]);var zagq={}
;if(typeof(zgnj)!=zfhx){zagq["login"]=zgnj;}if(typeof(zbih)!=zfhx){zagq[zgdg]=zbih;}
if(typeof(zgnk)!=zfhx){zagq["email"]=zgnk;}if(typeof(zgnl)!=zfhx){zagq["phone"]=zgnl;}
if(typeof(zgue)!=zfhx){zagq[zgeb]=zgue;}if(typeof(zguf)!=zfhx){zagq["readOnly"]=zguf;}
if(typeof(zgug)!=zfhx){zagq["showPasswords"]=zgug;}
if(typeof(zguh)!=zfhx){zagq["serverOnly"]=zguh;}if(typeof(zgui)!=zfhx){zagq["allowedIPRanges"]=zgui;}
if(typeof(zguj)!=zfhx){zagq["policies"]=zguj;}var zgfl=self.zgfr();zgfl["x-sib-auth-alt-memorize"]=1;var zgik=self.zgem+"/rf-api?createsharedaccount";var zguv=zawd.generatePassword(zgdb);zcte(zfla+". Step 2. createShAccount. masterPwd='"+zguv+"'",zwf,zctf["INFO"]);var zguw=new RSAKey();var zgoy=zfyv.zgge(zguu,true);zguw.setPublic(zgoy["modulus"],zgoy["exponent"]);var zgqm=zguw.encrypt(zguv);var zgqn=zawd.zcxv(zawd.zfip(zgqm));zagq["mp"]=zgqn;var zfjc=zawd.zfod(16);var zgnu=new RfapiJS["SibScramAuthClient"]();var zglk=zgnu.zgnv(zavo.zcxt(zguv),zfjc,zgdc);var zgnw=zglk.item2;var zgny=zglk.item3;for(var zcw=0;zcw<zgny.length;zcw++){zgnw.push(zgny[zcw]);}
var hash=zawd.zcxv(zgnw);hash=hash.replace(new RegExp('=','g'),'');zfjc=zawd.zcxv(zfjc);zfjc=zfjc.replace(new RegExp('=','g'),'');zagq["method"]="SCRAM-SHA-256";zagq["iterations"]=zgdc;zagq["salt"]=zfjc;zagq["hash"]=hash;var body=JSON.stringify(zagq);zcte(zfla+". Make ASYNC POST request to "+zgik,zwf,zctf["INFO"]);self.zgio(zgik,body,zgfl,"POST",false,false,function zmw(zgeh,zdn){zcte(zfla+". Step 2. makeRequestAsync ->",zwf,zctf["FUNC_INOUT"]);var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte(zfla+". Step 2. checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(zgeh.status==zcue){zcte(zfla+".  Step 2 .OK. Go to Step 3.",zwf,zctf["FUNC_INOUT"]);if(!zgnj){var zgfh=JSON.parse(zgeh.responseText);zgnj=zgfh["response"][RfapiJS.ACCOUNT_ID_PROP];}
zgus(zguv,zgnj);return true;}if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));return false;}
return false;});}catch(zhj){zwe("EXCEPTION in "+zfla+".Step 2. createShAccount: "+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in "+zfla+" Step 2. createShAccount:"+zhj.toString()}
);}}};function zgux(){try{zcte(zfla+". Step 1. GetPublicKey-> ",zwf,zctf["INFO"]);self[zgak](function zguy(zguu,zcut){zgut(zguu);return;}
,function zguz(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;},self.zgen);zcte(zfla+". Step 1. GetPublicKey <- ",zwf,zctf["INFO"]);return;}
catch(zhj){zwe("EXCEPTION in "+zfla+".Step 1. GetPublicKey: "+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in "+zfla+" Step 1. GetPublicKey:"+zhj.toString()}
);}}};function zgva(){zcte(zfla+".SharedFolders_CheckNames  <-",zwf,zctf["FUNC_INOUT"]);var zgvb=!zgue?false:true;self[zgag](function zgvc(zghi,zcut){try{zcte(zfla+".getSharedAccounts_AnswerCallBack  ->",zwf,zctf["FUNC_INOUT"]);var zftg=zghi["accounts"];if(!zftg){zgux();return;}
var zfxo=false;for(var zcw=0;zcw<zftg.length;zcw++){var zfir=zftg[zcw];if(zfir["name"]==zbih){if(zgvb){if((typeof zfir["company"]!=zfhx)&&(zfir["company"]==zgue)){zfxo=true;break;}
}else{zfxo=true;}}}if(zfxo){if(typeof(zfju)!=zfhx){var zgol=zgvb?"Group with the same name already exists.":"Shared account with the same name already exists."
zfju(new zfpw(zfhs["RfErr_AccountExists"],zgol));}
return false;}zgux();return;}catch(zhj){zwe("EXCEPTION in "+zfla+".getSharedAccounts_AnswerCallBack: "+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in "+zfla+" getSharedAccounts_AnswerCallBack:"+zhj.toString()}
);}}},function zgvd(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;});zcte(zfla+".SharedFolders_CheckNames  <-",zwf,zctf["FUNC_INOUT"]);return;}
;function zgve(){zcte(zfla+".Folder_SharedFolder_Check  ->",zwf,zctf["FUNC_INOUT"]);var zasi=zfht["USER_DATA"];function zgvf(zgvg){try{zcte(zfla+".Folder_SharedFolder_Check.checkNames  ->",zwf,zctf["FUNC_INOUT"]);var zgh=zgvg[RfapiJS.ITEM_CHILDS_PROP];if(!zgh||(typeof(zgh.length)==zfhx)){zgva();zcte(zfla+".Folder_SharedFolder_Check.checkNames  <-(1)",zwf,zctf["FUNC_INOUT"]);return;}
var zgvh=null;for(var zcw=0;zcw<zgh.length;zcw++){var zgk=zgh[zcw];if(zgk[RfapiJS.ITEM_INFO_PROP][RfapiJS.ITEM_NAME_PROP]==RfapiJS.ROOT_NODE){zgvh=zgk;break;}
}if(!zgvh||(typeof(zgvh[RfapiJS.ITEM_CHILDS_PROP])==zfhx)){zgva();zcte(zfla+".Folder_SharedFolder_Check.checkNames  <-(2)",zwf,zctf["FUNC_INOUT"]);return;}
var zfxo=false;for(var zgg=0;zgg<zgvh[RfapiJS.ITEM_CHILDS_PROP].length;zgg++){var item=zgvh[RfapiJS.ITEM_CHILDS_PROP][zgg];if((item[RfapiJS.ITEM_INFO_PROP][RfapiJS.ITEM_NAME_PROP]==zbih)&&(!item[RfapiJS.ITEM_INFO_PROP][RfapiJS.ITEM_SHARED_PROP])){zfxo=true;break;}
}if(zfxo){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_FolderExists"],"File/Folder with the same name already exists."));}
return false;}zgva();zcte(zfla+".Folder_SharedFolder_Check.checkNames  <-(3)",zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){zwe("EXCEPTION in "+zfla+".Folder_SharedFolder_Check.checkNames: "+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in Folder_SharedFolder_Check.checkNames:"+zhj.toString()}
);}}};if(!zbih){zgux();return;}var zgvg=zfzc.zfse(zasi,self.zgen);if(!zgvg){self[zgbi](function zgvi(zggq){if(zggq!=zcue){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"user-data.rfo is missing."));}
return false;}else{zgvg=zfzc.zfse(zasi,self.zgen);zgvf(zgvg);}
},zfju,zasi,self.zgen);}else{zgvf(zgvg);}zcte(zfla+".Folder_SharedFolder_Check  <-",zwf,zctf["FUNC_INOUT"]);return;}
;zgve();zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgah]=function(zcwo,zfjt,zfju){var zcwz=zgah;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" for accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"ACCOUNT_ID":zcwo}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zwp=this.zgem+"/rf-api/"+encodeURI(zcwo)+"?sharedaccountinfo";this.zgij(zcwz,zwp,null,this.zgfr(),"GET",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgai]=function(zgvj,zfjt,zfju,name,zguf,zgug,zguh,zgvk,zgvl,zgui,zguj,zcwl,zgme){var zcwz=zgai;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" for sharedaccount='"+zgvj+"'",zwf,zctf["FUNC_INOUT"]);var self=this;var zgkw=self.zgjj({"SERVER_URL":self.zgem,"SHARED_ACCOUNT_ID":zgvj}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
function zgvm(zfta){zcte(zfla+" postAccountInfo ->",zwf,zctf["FUNC_INOUT"]);var zagq={}
;if((typeof(zfta)!=zfhx)){zagq[zgdg]=zfta;}if((typeof(zguf)!=zfhx)){zagq["readOnly"]=zguf;}
if((typeof(zgvl)!=zfhx)){zagq["isManager"]=zgvl;}if((typeof(zgug)!=zfhx)){zagq["showPasswords"]=zgug;}
if((typeof(zguh)!=zfhx)){zagq["serverOnly"]=zguh;}
if((typeof(zgvk)!=zfhx)){zagq["user"]=zgvk;}if((typeof(zgui)!=zfhx)){zagq["allowedIPRanges"]=zgui;}
if(typeof(zguj)!=zfhx){zagq["policies"]=zguj;}if(typeof(zcwl)!=zfhx){zagq["securityScore"]=zcwl;}
if(typeof(zgme)!=zfhx){zagq["loginsCount"]=zgme;}var body=JSON.stringify(zagq);var zwp=self.zgem+"/rf-api/"+encodeURI(zgvj)+"?sharedaccountinfo";self.zgij(zcwz,zwp,body,self.zgfr(),"POST",false,false,false,{}
,function zgvn(zgvo,zhw){zcte(zfla+".innerAnswerCallBack ->",zwf,zctf["FUNC_INOUT"]);if((typeof(zfta)!=zfhx)&&(zfta!="")){var zfir=zfzc.zfua(zgvj,zfta);}
if(typeof(zfjt)!=zfhx){zfjt(zgvo,zhw);}return;},zfju);zcte(zfla+" postAccountInfo <-",zwf,zctf["FUNC_INOUT"]);return;}
;if((typeof(name)==zfhx)||(name=="")){zgvm(name);return;}
var zgsp={"request":{}};var zgsk="/"+name;zgsp["request"]["path"]=zgsk;zfzc[zfrl](zgsp,function zgsq(zgsr){if(zgsr[RfapiJS.ITEM_SHARED_PROP]&&(zgsr[RfapiJS.ITEM_SHARED_PROP][RfapiJS.ACCOUNT_ID_PROP]==zgvj)&&(zgsr["path"]=="/"+name)){zgvm(name);}
else{if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Object with the same name '"+name+"' already exists."));}
}return;},function zgss(zcpb){if(zcpb["sibErr"]=="NotFound"){zgvm(name);return;}
if(typeof(zfju)!=zfhx){zfju(zcpb);}return;});zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgaj]=function(zfjt,zfju,zcov){var zcwz=zgaj;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+"  userId='"+zcov+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zgkp=zcov?zcov:this.zgen;var zwp=this.zgem+"/rf-api/"+encodeURI(zgkp)+"?known-recipients";this.zgij(zcwz,zwp,null,this.zgfr(),"GET",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgaf]=function(zcwo,zfjt,zfju){var zcwz=zgaf;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+"  accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen,"SHARED_ACCOUNT":zcwo}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zwp=this.zgem+"/rf-api/"+encodeURI(zcwo)+"?recipients";this.zgij(zcwz,zwp,null,this.zgfr(),"GET",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgbf]=function(zcwo,zfjt,zfju){var zcwz=zgbf;var zfla="RfDataManager."+zcwz;var self=this;try{zcte(zfhv+zfla+"  accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);self[zgag](function zgjc(zghi,zcut){zcte(zfla+".GetAccounts_AnswerCallBack ->  HttpStatus="+zcut,zwf,zctf["FUNC_INOUT"]);var zftg=zghi["accounts"];if(!zfzc.zfsb){zfzc.zfsc(self.zgen);}
var zgiy=zfzc.zftf(zftg,zcwo);zcte(zfla+".GetAccounts_AnswerCallBack. It's time to callback... changedNames="+zgiy,zwf,zctf["FUNC_INOUT"]);if(typeof(zfjt)!=zfhx){zfjt(zcut);}
return;},function zgjd(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;});zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgax]=function(zgqw,zcwo,zgvl,zguf,zgug,zguh,zfjt,zfju,zgvp,name){var zcwz=zgax;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+"  recipient='"+zgqw+"' accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);var self=this;var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER":self.zgen,"RECIPIENT":zgqw,"ACCOUNT_NAME":zcwo}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
function zgvq(zgvr,zgql,zgvs){zcte(zfla+".decryptEcnrypt_GrantAccount  #Step 4# ->",zwf,zctf["FUNC_INOUT"]);var zgga=zawd.zawe(zgql);var zggb=zawd.zfiu(zgga);var zggc=new RSAKey();var zggd=zfyv.zgge(zgvs,false);zggc.setPrivateEx(zggd["modulus"],zggd["exponent"],zggd["privateexp"],zggd["P"],zggd["Q"],zggd["DP"],zggd["DQ"],zggd["InverseQ"]);var zglc=zggc.decrypt(zggb);if(!zglc){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Decrypted password is empty"));}
return false;}var zgou=zfyv.zgge(zgvr,true);var zgox=new RSAKey();zgox.setPublic(zgou["modulus"],zgou["exponent"]);var zgqm=zgox.encrypt(zglc);var zgqn=zawd.zcxv(zawd.zfip(zgqm));var zagq={}
;zagq[zgdr]=zgqw;if(typeof(zgvl)!=zfhx){zagq[zgdx]=zgvl;}
if(typeof(zguf)!=zfhx){zagq[zgdy]=zguf;}if(typeof(zgug)!=zfhx){zagq[zgdz]=zgug;}
if(typeof(zguh)!=zfhx){zagq[zgea]=zguh;}if(typeof(zgvp)!=zfhx){zagq["disabled"]=zgvp;}
if(typeof(name)!=zfhx){zagq["name"]=name;}zagq["mp"]=zgqn;var zsv=JSON.stringify(zagq);var zwp=self.zgem+"/rf-api/"+encodeURI(zcwo)+"?grantaccount";self.zgij(zcwz,zwp,zsv,self.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);return;};function zgvt(zgvr,zgql){zcte(zfla+".getPrivateUserKey. #Step 3# ->",zwf,zctf["FUNC_INOUT"]);var zfuf=zfzc.zfue();if(zfuf){zgvq(zgvr,zgql,zfuf);return;}
var zglk=zfyv.zgll(1024);var zglm=zglk['Public_Pem'];var zgln=zglk['Private_Pem'];self[zgal](zglm,function zgvu(zgeh){zfzc.zfuh(zgln);self[zgbh](function zgvv(zgvw){zgvq(zgvr,zgql,zgln);return;}
,function zgvx(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return;},zfht["USER_DATA"]
);return true;},function zgvy(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;},self.zgen);return;};function zgvz(zgvr){zcte(zfla+" #Step 2#  Get shared account(group) of active user. We will grant it to recipient ->",zwf,zctf["INFO"]);self[zgag](function zgjc(zghi,zcut){zcte(zfla+". GetAccounts_AnswerCallBack. #Step 2# ->",zwf,zctf["FUNC_INOUT"]);var zftg=zghi["accounts"];var zgwa=null;for(var zcw=0;zcw<zftg.length;zcw++){if(zftg[zcw][RfapiJS.ACCOUNT_ID_PROP]==zcwo){zgwa=zftg[zcw];break;}
}if(!zgwa){if(typeof(zfju)!=zfhx){zfju(new zfpw(zcud["SibTerr_NotFound"],"Account '"+zcwo+"' not found."));}
return false;}var zgql=zgwa["mp"];if(!zgql){if(typeof(zfju)!=zfhx){zfju(new zfpw(zcud["SibTerr_NotFound"],"Master password for account '"+zcwo+"' not found."));}
return false;}zcte(zfla+". GetAccounts_AnswerCallBack. #Step 2#. Get Private Key of current user(admin)='"+self.zgen+"'",zwf,zctf["FUNC_INOUT"]);if(!zfzc.zfse(zfht["USER_DATA"],self.zgen)){self[zgbi](function zgpn(zggq){zgvt(zgvr,zgql);return;}
,zfju);return;}else{zcte(zfla+".GetAccounts_AnswerCallBack. get private key from repo",zwf,zctf["FUNC_INOUT"]);zgvt(zgvr,zgql);return;}
return;},function zgjd(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;});return;};function zgwb(){zcte(zfla+" #Step 1.1#  send email as recipient ->",zwf,zctf["INFO"]);var zagq={}
;zagq[zgdr]=zgqw;if(typeof(zgvl)!=zfhx){zagq[zgdx]=zgvl;}
if(typeof(zguf)!=zfhx){zagq[zgdy]=zguf;}if(typeof(zgug)!=zfhx){zagq[zgdz]=zgug;}
if(typeof(zguh)!=zfhx){zagq[zgea]=zguh;}if(typeof(zgvp)!=zfhx){zagq["disabled"]=zgvp;}
if(typeof(name)!=zfhx){zagq["name"]=name;}var zsv=JSON.stringify(zagq);var zwp=self.zgem+"/rf-api/"+encodeURI(zcwo)+"?grantaccount";self.zgij(zcwz,zwp,zsv,self.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(" <- "+zfla+" #Step 1.1#  exit",zwf,zctf["INFO"]);return;}
zcte(zfla+" #Step 1#  Get Public Key of  recipient='"+zgqw+"'  ->",zwf,zctf["INFO"]);self[zgak](function zguy(zguu,zcut){zgvz(zguu);return;}
,function zguz(zcpb){if(zcpb&&zcpb["Code"]==zgcw){zgwb();}
else{if(typeof(zfju)!=zfhx){zfju(zcpb);}return false;}
return true;},zgqw);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgaw]=function(zgqw,path,name,body,zfjt,zfju){var zcwz=zgaw;var zfla="RfDataManager."+zcwz;try{var self=this;zcte(zfhv+zfla+"  recipient='"+zgqw+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER":self.zgen,"RECIPIENT":zgqw,"FILE_NAME":name}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
self[zgak](function zguy(data,zcut){zcte(zfla+".GetPublicKey_AnswerCallBack. Got public key...",zwf,zctf["FUNC_INOUT"]);var zguw=new RSAKey();var zgoy=zfyv.zgge(data,true);zguw.setPublic(zgoy["modulus"],zgoy["exponent"]);var zgqm=zguw.encrypt(body);var zgqn=zawd.zcxv(zawd.zfip(zgqm));var zagq={}
;zagq[zgdr]=zgqw;zagq[zgdf]=path;zagq[zgdg]=name;zagq[zgdt]=zgqn;var zsv=JSON.stringify(zagq);self.zgij(zcwz,self.zggf("?grantfile"),zsv,self.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);return true;},function zguz(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;});zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgay]=function(zfjt,zfju){var zcwz=zgay;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
this.zgij(zcwz,this.zggf("?grantedfiles"),null,this.zgfr(),"GET",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgbe]=function(zcwo,zfjt,zfju,zgwc){var zcwz=zgbe;var zfla="RfDataManager."+zcwz;try{var self=this;zcte(zfhv+zfla+" accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER":self.zgen,"SHARED_ACCOUNT":zcwo}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgds]=zcwo;if((typeof(zgwc)!=zfhx)){zagq[zgdw]=zgwc;}
var body=JSON.stringify(zagq);self.zgij(zcwz,self.zggf("?reject"),body,self.zgfr(),"POST",false,false,false,{}
,function zgvn(zakw,zhw){self[zgbf](zcwo,function zguq(zcut){if(typeof(zfjt)!=zfhx){zfjt(zcut);}
return;},function zgur(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;});return;},zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgbd]=function(zcwo,path,name,zfjt,zfju,zgwc){var zcwz=zgbd;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen,"SHARED_ACCOUNT":zcwo,"FILENAME":name}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgds]=zcwo;zagq[zgdf]=path;zagq[zgdg]=name;if((typeof(zgwc)!=zfhx)){zagq[zgdw]=zgwc;}
var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?reject"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgbc]=function(zcwo,zfjt,zfju,zgno){var zcwz=zgbc;var zfla="RfDataManager."+zcwz;try{var self=this;zcte(zfhv+zfla+" accountId='"+zcwo+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=false;if(typeof(zgno)!=zfhx){zgkw=this.zgjj({"SERVER_URL":self.zgem,"USER":self.zgen}
,zfju);}else{zgkw=this.zgjj({"SERVER_URL":self.zgem,"USER":self.zgen,"SHARED_ACCOUNT":zcwo}
,zfju);}if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};if(typeof(zcwo)!=zfhx){zagq[zgds]=zcwo;}
if(typeof(zgno)!=zfhx){zagq["acceptCode"]=zgno;}var body=JSON.stringify(zagq);self.zgij(zcwz,self.zggf("?accept"),body,self.zgfr(),"POST",false,false,false,{}
,function zgvn(zakw,zhw){zcte(zfhv+zfla+" innerAnswerCallBack-> . New, update list of accounts.  Status="+zhw+"'",zwf,zctf["FUNC_INOUT"]);self[zgbf](zcwo,function zguq(zcut){zcte(zfhv+zfla+" UpdateAccount_OkCallback-> . List updated!.  HttpStatus="+zcut+"'",zwf,zctf["FUNC_INOUT"]);if(typeof(zfjt)!=zfhx){zfjt(zcut);}
return;},function zgur(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;});return;},zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgbb]=function(zcwo,path,name,zfjt,zfju){var zcwz=zgbb;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" accountId='"+zcwo+"' path='"+path+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen,"SHARED_ACCOUNT":zcwo}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgdf]=path;zagq[zgdg]=name;zagq[zgds]=zcwo;var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?accept"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgba]=function(zcwo,zgqw,zfjt,zfju,zgwc){var zcwz=zgba;var zfla="RfDataManager."+zcwz;try{var self=this;zcte(zfhv+zfla+" accountId='"+zcwo+"' recipient='"+zgqw+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER":self.zgen,"SHARED_ACCOUNT":zcwo,"RECIPIENT":zgqw}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgdr]=zgqw;if((typeof(zgwc)!=zfhx)){zagq[zgdw]=zgwc;}
var body=JSON.stringify(zagq);var zwp=self.zgem+"/rf-api/"+encodeURI(zcwo)+"?revoke";self.zgij(zcwz,zwp,body,self.zgfr(),"POST",false,false,false,{}
,function zgvn(zakw,zhw){self[zgbf](zcwo,function zguq(zcut){if(typeof(zfjt)!=zfhx){zfjt(zcut);}
return;},function zgur(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;});return;},zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgaz]=function(zcwo,zgqw,path,name,zfjt,zfju,zgwc){var zcwz=zgaz;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" accountId='"+zcwo+"' recipient='"+zgqw+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen,"SHARED_ACCOUNT":zcwo,"RECIPIENT":zgqw,"FILE_NAME":name}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgdf]=path;zagq[zgdg]=name;zagq[zgdr]=zgqw;if((typeof(zgwc)!=zfhx)){zagq[zgdw]=zgwc;}
var body=JSON.stringify(zagq);var zwp=this.zgem+"/rf-api/"+encodeURI(zcwo)+"?revoke";this.zgij(zcwz,zwp,body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgag]=function(zfjt,zfju){var zcwz=zgag;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
this.zgij(zcwz,this.zggf("?received"),null,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgak]=function(zfjt,zfju,zgkp){var zcwz=zgak;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zgex=typeof zgkp==zfhx?this.zgen:zgkp;var zwp=this.zgem+"/rf-api/"+encodeURI(zgex)+"?publickey";this.zgij(zcwz,zwp,null,this.zgfr(),"GET",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgal]=function(zguu,zfjt,zfju,zgkp){var zcwz=zgal;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zgex=typeof zgkp==zfhx?this.zgen:zgkp;var zwp=this.zgem+"/rf-api/"+encodeURI(zgex)+"?publickey";this.zgij(zcwz,zwp,zguu,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgaq]=function(zgwd,zgwe,zgwf,zgwg,zgue,zfjt,zfju,zgwh,zgwi,zgmc,zgnp,zgnq){var zcwz=zgaq;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+" member='"+zgwd+"'  company='"+zgue+"'",zwf,zctf["FUNC_INOUT"]);var self=this;if(!self.zgem){zcte(zfla+". Server Url is undefined. Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],zgcs));}
return false;}if(!self.zgen){zcte(zfla+". Current user is undefined. Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],zgcq));}
return false;}if(!zgwd){zcte(zfla+". Company Member login is undefined. Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],zgcq));}
return false;}else{zgwd=zgwd.trim();if(zgwd.length<zgmz||zgwd.length>zgna){zcte(zfla+". Company member login is incorrect (6-30 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Company member login is incorrect (6-30 symbols)"));}
return false;}}if(!zgwe){zcte(zfla+". Company member password is undefined. Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],zgcu));}
return false;}else{if(zgwe.length<zgnf||zgwe.length>zgng){zcte(zfla+". Company member password is incorrect (6-49 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Company member password is incorrect (6-49 symbols)"));}
return false;}}if(!zgwf){zcte(zfla+". Company member Name is undefined. Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],zgcr));}
return false;}else{zgwf=zgwf.trim();if(zgwf.length<zgnb||zgwf.length>zgnc){zcte(zfla+". Company member name is incorrect (2-60 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Company member name is incorrect (2-60 symbols)"));}
return false;}}if(!zgue){zcte(zfla+". Company Name is undefined. Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Empty Company Name"));}
return false;}else{zgue=zgue.trim();if(zgue.length<zgnd||zgwf.length>zgne){zcte(zfla+". Company name is incorrect (6-80 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Company name is incorrect (6-80 symbols)"));}
return false;}}if(!zgwg){zcte(zfla+". Member email is undefined. Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"User email is empty."));}
return false;}else{zgwg=zgwg.trim();if(zgwg.length<zgnd||zgwg.length>zgne){zcte(zfla+". Member email is incorrect (6-50 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Member email is incorrect (6-50 symbols)"));}
return false;}}if(typeof zgwh!=zfhx&&(zgwh!="")){if(zgwh.length<zgnh||zgwh.length>zgni){zcte(zfla+". Member phone is incorrect (7-20 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Member phone is incorrect (7-20 symbols)"));}
return false;}}function zgwj(zglb){zcte(zfla+". uploadOFS_CompanyMember. Step 3. -> ",zwf,zctf["INFO"]);var zgfl=self.zgfr(true);var file=zfht["USER_DATA"];var zgik=self.zgem+"/rf-api/"+encodeURI(zgwd)+"/"+file;zcte(zfla+". Step 3. SAVE OFS "+zgik,zwf,zctf["INFO"]);self.zgio(zgik,zglb,zgfl,"POST",false,true,function zglg(zgeh,zdn){zcte(zfla+". Step 3.  makeRequestAsync.saveOFS_callback ->",zwf,zctf["FUNC_INOUT"]);var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte(zfla+". Step 3. makeRequestAsync.saveOFS_callback failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(zgeh.status==zgcy){if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));}
return false;}if(zgeh.status==zgcz){if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));}
return false;}zcte(zfla+". Step 3.  makeRequestAsync.saveOFS_callback. OK. Exit.",zwf,zctf["FUNC_INOUT"]);if(typeof(zfjt)!=zfhx){zfjt(zgeh.status);}
return;});return;};function zgus(zglb){zcte(zfla+". EncryptData. Step 3.a -> ",zwf,zctf["INFO"]);var zgkb=new RfapiJS.CRfOneFileSys();var zgjv=self.zgjt(zglb);zgkb.zfkx(zgjv,zfht["USER_DATA"],zgwd,zgwe,zfib,true,function zgld(zgle){zcte(zfla+". Step 3.a  encrypt_Ok callback ->",zwf,zctf["FUNC_INOUT"]);zgwj(new Uint8Array(zgle));return;}
,function zglh(zdq){zcte(zfla+". Step 3.a  encrypt_Error callback ->",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju(zdq);}
return;});zcte(zfla+". EncryptData. Step 3.a <-",zwf,zctf["INFO"]);return;}
;function zgwk(){zcte(zfla+". generateRsaKeys. Step 2. -> ",zwf,zctf["INFO"]);var zglj=1024;var zglk=zfyv.zgll(zglj);var zglm=zglk['Public_Pem'];var zgln=zglk['Private_Pem'];var zfuj=Math.round(new Date()/1000);var zggr={"i":{"F":true}
,"c":[{"b":zgln,"i":{"n":"private-key.pem","c":zfuj,"m":zfuj,"s":zgln.length}
},{"i":{"F":true,"n":"root"},"c":[]}]
};self[zgal](zglm,function zglo(zgeh){zgus(zggr);return true;}
,function zglp(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;},zgwd);return;};var zfjc=zawd.zfod(16);var zgnu=new RfapiJS["SibScramAuthClient"]();zcte(zfla+". member pwd='"+zgwe+"'",zwf,zctf["INFO"]);var zglk=zgnu.zgnv(zavo.zcxt(zgwe),zfjc,zgdc);var zgnw=zglk.item2;var zgny=zglk.item3;for(var zcw=0;zcw<zgny.length;zcw++){zgnw.push(zgny[zcw]);}
var hash=zawd.zcxv(zgnw);hash=hash.replace(new RegExp('=','g'),'');zfjc=zawd.zcxv(zfjc);zfjc=zfjc.replace(new RegExp('=','g'),'');var zagq={}
;zagq[zgdg]=zgwf;zagq["login"]=zgwd;zagq["email"]=zgwg;zagq[zgeb]=zgue;if(typeof(zgwh)!=zfhx){zagq["phone"]=zgwh;}
if(typeof(zgwi)!=zfhx){zagq["isAdmin"]=zgwi;}if(typeof(zgmc)!=zfhx){zagq["otpOn"]=zgmc;}
if(typeof(zgnp)!=zfhx){zagq["passwordExpires"]=zgnp;}
if(typeof(zgnq)!=zfhx){zagq["passwordExpiresInDays"]=zgnq;}
zagq["method"]="SCRAM-SHA-256";zagq["iterations"]=zgdc;zagq["salt"]=zfjc;zagq["hash"]=hash;var zgfl=self.zgfr();zgfl["x-sib-auth-alt-memorize"]=1;var body=JSON.stringify(zagq);var zgik=self.zgem+"/rf-api?create-company-member";self.zgio(zgik,body,zgfl,"POST",false,false,function zmw(zgeh,zdn){zcte(zfla+". makeRequestAsync ->",zwf,zctf["FUNC_INOUT"]);var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte(zfla+". checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(zgeh.status==zcue){zcte(zfla+". Status code=OK. Need to parse response for errors. RESPONSE  = "+zgeh.responseText,zwf,zctf["INFO"]);if(zgeh.responseText){try{var zgv=JSON.parse(zgeh.responseText);var zhw=zgv[zgdp][zgdo];if(zhw=="error"){zcte(zfla+". Server returns status=error.",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zcud["SibTErr_ServerErr"],"Server returns status=error",zgv[zgdp]));}
return false;}if(zhw=="ok"){zcte(zfla+". Status=OK. It's time to generate RSA keys, OFS. makeRequestAsync ->",zwf,zctf["FUNC_INOUT"]);zgwk();return;}
}catch(zgit){zcte(zfla+". Error while parsing JSON response",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zcud["SibTErr_ServerErr"],"Error Parsing JSON response"));}
}}return true;}if(typeof(zfju)!=zfhx){zfju(new zfpw(zgeh.status,zgeh.statusText,undefined,zgeh,undefined));return false;}
return false;});zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgan]=function(zfjt,zfju){var zcwz=zgan;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
this.zgij(zcwz,this.zggf("?companies"),null,this.zgfr(),"GET",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgao]=function(zgwl,zgue,zfjt,zfju,zgwi,zhw){var zcwz=zgao;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+". UserToAdd='"+zgwl+"'  ToCompany='"+zgue+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen,"ADD_USERNAME":zgwl,"COMPANY":zgue}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
zgwl=zgwl.trim();zgue=zgue.trim();var zagq={};zagq[zgec]=zgwl;zagq[zgeb]=zgue;if(typeof(zgwi)!=zfhx){zagq["isAdmin"]=zgwi;}
if(typeof(zhw)!=zfhx){zagq["status"]=zhw;}var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?company-add-user"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgap]=function(zgwm,zgue,zfjt,zfju){var zcwz=zgap;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+". UserToRemove='"+zgwm+"'  FromCompany='"+zgue+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen,"REMOVE_USERNAME":zgwm,"COMPANY":zgue}
,zfju);if(!zgkw){zcte(zwf+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgec]=zgwm;zagq[zgeb]=zgue;var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?company-remove-user"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgam]=function(name,zfjt,zfju,zft,zgwn,url,zcov){var zcwz=zgam;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+". CompanyName='"+name+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"NAME":name}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
name=name.trim();if(name.length<zgnb||name.length>zgnc){zcte(zfla+". Company NAME is incorrect (2-60 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Company NAME is incorrect (2-60 symbols)"));}
return false;}if(typeof(zft)!=zfhx){if(zft.length<zgmz||zft.length>zgna){zcte(zfla+". Company ID is incorrect (6-80 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Company ID is incorrect (6-80 symbols)"));}
return false;}}if(typeof(zgwn)!=zfhx){if(zgwn.length<zgmz||zgwn.length>zgna){zcte(zfla+". Company admin is incorrect (6-80 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Company admin is incorrect (6-80 symbols)"));}
return false;}else{if(zgwn==name){zcte(zfla+". Company Name must be unique for this admin account ID. Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Company Name must be unique for this admin account ID."));}
return false;}}}if(typeof(url)!=zfhx){if(url.length<7||url.length>zgnc){zcte(zfla+". Company URL is incorrect (7-60 symbols)[Optional]. Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Company URL is incorrect (7-60 symbols)[Optional]"));}
return false;}}var zagq={};zagq[zgdg]=name;if(typeof(zft)!=zfhx){zagq[zgdu]=zft;}
if(typeof(zgwn)!=zfhx){zagq[zgdv]=zgwn;}if(typeof(url)!=zfhx){zagq[zgdq]=url;}
var body=JSON.stringify(zagq);if(typeof zcov!=zfhx){var zwp=this.zgem+"/rf-api/"+encodeURI(zcov)+"?createcompany";}
else{var zwp=this.zgem+"/rf-api?createcompany";}this.zgij(zcwz,zwp,body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgar]=function(zgue,zfjt,zfju){var zcwz=zgar;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+". Company='"+zgue+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen,"COMPANY":zgue}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(zgue.length<zgmz||zgue.length>zgna){zcte(zfla+". Company name is incorrect (6-80 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Company name is incorrect (6-80 symbols)"));}
return false;}var zagq={};zagq[zgeb]=zgue;var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?company-join"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgas]=function(zgue,zfjt,zfju){var zcwz=zgas;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+". Company='"+zgue+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen,"COMPANY":zgue}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if(zgue.length<zgmz||zgue.length>zgna){zcte(zfla+". Company name is incorrect (6-80 symbols). Return false",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_WrongParams"],"Company name is incorrect (6-80 symbols)"));}
return false;}var zagq={};zagq[zgeb]=zgue;var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?company-leave"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgat]=function(zgue,zfjt,zfju){var zcwz=zgat;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+". Company='"+zgue+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen,"COMPANY":zgue}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgeb]=zgue;var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?company-users"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgau]=function(zgwo,zgue,zfjt,zfju,zgwi,zguj){var zcwz=zgau;var zfla="RfDataManager."+zcwz;try{var self=this;zcte(zfhv+zfla+". Member='"+zgwo+"' from Company='"+zgue+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER":self.zgen,"COMPANY":zgue,"MEMBER":zgwo}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
function zgwp(zgwq,zgwr,zgou,zgqr){zcte(zfla+". encryptGroupPwdByUserPublicKey. Step 4. ->",zwf,zctf["INFO"]);var zxn=[];zcte(zfla+". encryptGroupPwdByUserPublicKey. Step 4. allgroups="+zgwr.length,zwf,zctf["INFO"]);for(var zgg=0;zgg<zgwr.length;zgg++){var zgws=typeof zgwr[zgg]["company"]==zfhx?"":zgwr[zgg]["company"];if(zgws!=zgue){continue;}
try{var zxp={};zxp[RfapiJS.ACCOUNT_ID_PROP]=zgwr[zgg][RfapiJS.ACCOUNT_ID_PROP];zcte(zfla+". encryptGroupPwdByUserPublicKey. Step 4. accountId="+zxp[RfapiJS.ACCOUNT_ID_PROP],zwf,zctf["INFO"]);var zgwt=zgwr[zgg]["mp"];var zgwu=zawd.zawe(zgwt);var zgwv=zawd.zfiu(zgwu);var zggc=new RSAKey();var zggd=zfyv.zgge(zgqr,false);zggc.setPrivateEx(zggd["modulus"],zggd["exponent"],zggd["privateexp"],zggd["P"],zggd["Q"],zggd["DP"],zggd["DQ"],zggd["InverseQ"]);var zgww=zggc.decrypt(zgwv);if(!zgww){zcte(zfla+". encryptGroupPwdByUserPublicKey. CANNOT decrypt password for accountId='"+zxp[RfapiJS.ACCOUNT_ID_PROP]+"'  name='"+zgwr[zgg]["name"]+"'",zwf,zctf["INFO"]);continue;}
var zgox=new RSAKey();var zgoy=zfyv.zgge(zgou,true);zgox.setPublic(zgoy["modulus"],zgoy["exponent"]);var zgoz=zgox.encrypt(zgww);var zgpa=zawd.zcxv(zawd.zfip(zgoz));zxp["mp"]=zgpa;if(!zgpa){zcte(zfla+". encryptGroupPwdByUserPublicKey. New Password is empty for for accountId='"+zxp[RfapiJS.ACCOUNT_ID_PROP]+"'  name='"+zgwr[zgg]["name"]+"'",zwf,zctf["INFO"]);continue;}
zxn.push(zxp);zcte(zfla+". encryptGroupPwdByUserPublicKey. Step 4. groupId="+zxp['accountId']+"  realPwd='"+zgww+"'",zwf,zctf["INFO"]);}
catch(zhj){zcte(zfla+". encryptGroupPwdByUserPublicKey. ERROR="+zhj,zwf,zctf["INFO"]);}
}zgwq["groups"]=zxn;zcte(zfla+".encryptGroupPwdByUserPublicKey. Step 4. isAdmin. There are groups. Send them in json body.",zwf,zctf["INFO"]);var body=JSON.stringify(zgwq);var zwp=self.zgem+"/rf-api/"+encodeURI(zgwo)+"?company-member-info";self.zgij(zcwz,zwp,body,self.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfla+". encryptGroupPwdByUserPublicKey. Step 4. ->",zwf,zctf["INFO"]);return;}
;function zgwx(zgwq,zxn,zgou){zcte(zfla+". getPrivateAdminKey. Step 3. ->",zwf,zctf["INFO"]);if(!zfzc.zfse(zfht["USER_DATA"],self.zgen)){self[zgbi](function zgwy(zggq){zcte(zfla+". getOFS_OkCallBack. Step 3. ->",zwf,zctf["INFO"]);if(zggq!=zcue){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Cannot get user-data.rfo"));}
return;}else{var zfuf=zfzc.zfue();if(!zfuf){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Cannot get RSA Private Key"));}
return;}zgwp(zgwq,zxn,zgou,zfuf);return;}},zfju,zfht["USER_DATA"],self.zgen);}
else{var zfuf=zfzc.zfue();if(!zfuf){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Cannot get RSA Private Key"));}
return;}zgwp(zgwq,zxn,zgou,zfuf);}zcte(zfla+". getPrivateAdminKey. Step 3. <-",zwf,zctf["INFO"]);return;}
;function zgwz(zgwq,zxn){zcte(zfla+". getPublicUserKey. Step 2. ->",zwf,zctf["INFO"]);self[zgak](function zgxa(zguu,zcut){zcte(zfla+". getPublicUserKey_AnswerCallBack. Step 2. -> ",zwf,zctf["INFO"]);zgwx(zgwq,zxn,zguu);return;}
,function zgxb(zcpb){zcte(zfla+". getPublicUserKey_ErrorCallBack. Step 2. -> ",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;},zgwo);zcte(zfla+". getPublicUserKey. Step 2. <-",zwf,zctf["INFO"]);return;}
;function zgxc(zgwq){zcte(zfla+". getAllGroups. Step 1. -> ",zwf,zctf["INFO"]);self[zgag](function zgxd(data,zhw){zcte(zfla+". getGroups_OKCallback. Step 1. -> ",zwf,zctf["INFO"]);var zxn=[];if(!data["accounts"].length){zgwq["groups"]=zxn;zcte(zfla+".getAllGroups. Step 1. isAdmin. There are no groups. Send empty array array in json body.",zwf,zctf["INFO"]);var body=JSON.stringify(zgwq);var zwp=self.zgem+"/rf-api/"+encodeURI(zgwo)+"?company-member-info";self.zgij(zcwz,zwp,body,self.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);return;}zgwz(zgwq,data["accounts"]);return;}
,function zgxe(zcpb){zcte(zfla+". getGroups_ErrorCallback. Step 1. -> ",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
return;});zcte(zfla+". getAllGroups. Step 1. <-",zwf,zctf["INFO"]);return;}
;var zagq={};zagq[zgeb]=zgue;if(typeof(zguj)!=zfhx){zagq["policies"]=zguj;}
if(typeof(zgwi)!=zfhx){zcte(zfla+". isAdmin='"+zgwi+"'",zwf,zctf["INFO"]);zagq["isAdmin"]=zgwi;if(!zgwi){var body=JSON.stringify(zagq);var zwp=self.zgem+"/rf-api/"+encodeURI(zgwo)+"?company-member-info";self.zgij(zcwz,zwp,body,self.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);}else{zcte(zfla+". isAdmin!  Need to get groups of this company..",zwf,zctf["INFO"]);zgxc(zagq);return;}
}else{var body=JSON.stringify(zagq);var zwp=self.zgem+"/rf-api/"+encodeURI(zgwo)+"?company-member-info";self.zgij(zcwz,zwp,body,self.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);}zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgav]=function(zgue,zfjt,zfju){var zcwz=zgav;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+". Company='"+zgue+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen,"COMPANY":zgue}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq[zgeb]=zgue;var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?company-groups"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfzn]=function(zbjb,zcov,zfjt,zfju){var zcwz=zfzn;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla+". action='"+zbjb+"'",zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":zcov,"ACTION":zbjb}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq["action"]=zbjb;var body=JSON.stringify(zagq);var zgik=this.zgem+"/rf-api/"+encodeURI(zcov)+"?pums";this.zgij(zcwz,zgik,body,this.zgfr(),"POST",false,false,true,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfzq]=function(zfjt,zfju,zgxf){var zcwz=zfzq;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zgex=typeof zgxf==zfhx?this.zgen:zgxf;var zwp=this.zgem+"/rf-api/"+encodeURI(zgex)+"?trusted-users";this.zgij(zcwz,zwp,null,this.zgfr(),"GET",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfzo]=function(zgxg,zfjt,zfju){var zcwz=zfzo;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq["trustedUsers"]=zgxg;var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?trusted-users"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfzp]=function(zfjt,zfju){var zcwz=zfzp;var zfla="RfDataManager."+zcwz;try{var self=this;zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER":self.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
function zgxh(zgoq){zcte(zfla+". updateTrustedUsersPwd. Step 3. ->",zwf,zctf["INFO"]);self[zfzo](zgoq,function zgxi(zhw){zcte(zfla+". putTrusted_Ok. Step 3. -> ",zwf,zctf["INFO"]);if(typeof(zfjt)!=zfhx){zfjt({"count":zgoq.length}
);}zcte(zfla+". putTrusted_Ok. Step 3. updated Users="+zgoq.length+" <-",zwf,zctf["INFO"]);return;}
,function zgxj(zcpb){zcte(zfla+". putTrusted_Error. Step 3. -> ",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
return;});zcte(zfla+". updateTrustedUsersPwd. Step 3. <-",zwf,zctf["INFO"]);return;}
;function zgor(zgos){zcte(zfla+". encryptNewPasswordByUserPublicKey. Step 2. ->",zwf,zctf["INFO"]);var zgot=self[zgcb]();var zgoq=[];for(var zgg=0;zgg<zgos.length;zgg++){var zgkp=zgos[zgg];var zgou=zgkp["publicKey"];var zgov=CryptoJS.MD5(zgou);var zgow=zgov.toString(CryptoJS.enc.hex);var zgox=new RSAKey();var zgoy=zfyv.zgge(zgou,true);zgox.setPublic(zgoy["modulus"],zgoy["exponent"]);var zgoz=zgox.encrypt(zgot);var zgpa=zawd.zcxv(zawd.zfip(zgoz));var zgpb={}
;zgpb["accountId"]=zgkp["accountId"];zgpb["mp"]=zgpa;zgpb["publicKeyHash"]=zgow;zgoq.push(zgpb);}
zgxh(zgoq);zcte(zfla+". encryptNewPasswordByUserPublicKey. Step 2. <-",zwf,zctf["INFO"]);return;}
;function zgpc(){zcte(zfla+". getTrustedUsersList. Step 1. -> ",zwf,zctf["INFO"]);self[zfzq](function zgpd(data){zcte(zfla+". getTrusted_Ok. Step 1. -> ",zwf,zctf["INFO"]);var zgpe=data["trustedUsers"];var zgxk=[];for(var zcw=0;zcw<zgpe.length;zcw++){var zgkp=zgpe[zcw];if((typeof(zgkp["uptodate"])==zfhx)||!zgkp["uptodate"]){zgxk.push(zgkp);zcte(zfla+". getTrusted_Ok. Step 1. Need to update accountId='"+zgkp["accountId"]+"'",zwf,zctf["INFO"]);}
}if(!zgxk.length){if(typeof(zfjt)!=zfhx){zfjt({"count":0}
);}zcte(zfla+". getTrusted_Ok. Step 1. <-(AnswerCallBack)",zwf,zctf["INFO"]);return;}
zgor(zgxk);zcte(zfla+". getTrusted_Ok. Step 1. updatedUsers="+zgxk.length+" <-",zwf,zctf["INFO"]);return;}
,function zgpf(zcpb){zcte(zfla+". getTrusted_Error. Step 1. -> ",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
return;});zcte(zfla+". getTrustedUsersList. Step 1. <- ",zwf,zctf["INFO"]);return;}
;zgpc();zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfzr]=function(zcwo,zfjt,zfju){var zcwz=zfzr;var zfla="RfDataManager."+zcwz;try{var self=this;zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER":self.zgen,"ACCOUNT":zcwo}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
function zgxl(zgxm,zgqr){zcte(zfla+". decryptPwdByPrivateKey. Step 3. ->",zwf,zctf["INFO"]);var zgxn=zawd.zawe(zgxm);var zgxo=zawd.zfiu(zgxn);var zggd=zfyv.zgge(zgqr,false);var zggc=new RSAKey();zggc.setPrivateEx(zggd["modulus"],zggd["exponent"],zggd["privateexp"],zggd["P"],zggd["Q"],zggd["DP"],zggd["DQ"],zggd["InverseQ"]);var zgxp=zggc.decrypt(zgxo);if(typeof(zfjt)!=zfhx){zfjt({"pwd":zgxp,"account":zcwo}
);}zcte(zfla+". decryptPwdByPrivateKey. Step 3. pwd='"+zgxp+"'",zwf,zctf["INFO"]);return;}
;function zgwx(zgxm){zcte(zfla+". getPrivateAdminKey. Step 2. ->",zwf,zctf["INFO"]);if(!zfzc.zfse(zfht["USER_DATA"],self.zgen)){self[zgbi](function zgwy(zggq){zcte(zfla+". getOFS_OkCallBack. Step 2. ->",zwf,zctf["INFO"]);if(zggq!=zcue){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Cannot get user-data.rfo"));}
return;}else{var zfuf=zfzc.zfue();if(!zfuf){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Cannot get RSA Private Key"));}
return;}zgxl(zgxm,zfuf);return;}},zfju,zfht["USER_DATA"],self.zgen);}
else{var zfuf=zfzc.zfue();if(!zfuf){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Cannot get RSA Private Key"));}
return;}zgxl(zgxm,zfuf);}zcte(zfla+". getPrivateAdminKey. Step 2. <-",zwf,zctf["INFO"]);return;}
;function zgxq(){zcte(zfla+". getCompanyMemberAccountInfo. Step 1. ->",zwf,zctf["INFO"]);var zgik=self.zgem+"/rf-api/"+encodeURI(zcwo)+"?get-account-info";self.zgij(zfzl,zgik,null,self.zgfr(),"POST",false,false,false,{"userId":zcwo,"getUserInfo":true}
,function zgxr(data){zcte(zfla+". getUserInfo_Ok. Step 1. ->",zwf,zctf["INFO"]);var zgxm=data["mp"];if(!zgxm){zcte(zfla+". getUserInfo_Ok. Step 1. Master pwd is empty!",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"get-account-info returned empty mp field"));}
return;}zgwx(zgxm);zcte(zfla+". getUserInfo_Ok. Step 1. mp='"+zgxm+"'",zwf,zctf["INFO"]);return;}
,function zgxs(zcpb){zcte(zfla+". getUserInfo_Error. Step 1. ->",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
return;});zcte(zfla+". getCompanyMemberAccountInfo. Step 1. ->",zwf,zctf["INFO"]);return;}
;zgxq();zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfzs]=function(zgxt,zgxu,zfjt,zfju,zgxv,zgxw,zgxx){var zcwz=zfzs;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen,"CONTACT":zgxt}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if((typeof(zgxu)==zfhx)&&(typeof(zgxv)==zfhx)){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"TimeoutDays or TimeoutSecs must be present."));}
zcte(zfla+". misc_checkParameters failed. Return false. TimeoutDays or TimeoutSecs must be present.",zwf,zctf["SPECIAL_CASE"]);return false;}
if((typeof(zgxu)!=zfhx)){if(parseInt(zgxu)==NaN){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Timeout in days must be integer."));}
zcte(zfla+". misc_checkParameters failed. Return false. TimeoutDays must be integer",zwf,zctf["SPECIAL_CASE"]);return false;}
}if((typeof(zgxv)!=zfhx)){if(parseInt(zgxv)==NaN){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Timeout in seconds must be integer."));}
zcte(zfla+". misc_checkParameters failed. Return false. TimeoutSecs must be integer",zwf,zctf["SPECIAL_CASE"]);return false;}
}var zgxy=0;if((typeof(zgxu)==zfhx)&&(typeof(zgxv)!=zfhx)){zgxy=parseInt(zgxv);}
else if((typeof(zgxu)!=zfhx)&&(typeof(zgxv)==zfhx)){zgxy=parseInt(zgxu)*60*60*24;}
else if((typeof(zgxu)!=zfhx)&&(typeof(zgxv)!=zfhx)){zgxy=parseInt(zgxv);}
var zagq={};zagq["contact"]=zgxt;zagq["timeoutSecs"]=zgxy;if(typeof(zgxw)!=zfhx){zagq["note"]=zgxw;}
if(typeof(zgxx)!=zfhx){zagq["invite"]=zgxx;}var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?ea-invite"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfzt]=function(zgxt,zfjt,zfju,zgxu,zgxv,zgxw){var zcwz=zfzt;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen,"CONTACT":zgxt}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
if((typeof(zgxu)!=zfhx)){if(parseInt(zgxu)==NaN){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Timeout in days must be integer."));}
zcte(zfla+". misc_checkParameters failed. Return false. TimeoutDays must be integer",zwf,zctf["SPECIAL_CASE"]);return false;}
}if((typeof(zgxv)!=zfhx)){if(parseInt(zgxv)==NaN){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Timeout in seconds must be integer."));}
zcte(zfla+". misc_checkParameters failed. Return false. TimeoutSecs must be integer",zwf,zctf["SPECIAL_CASE"]);return false;}
}var zgxy=-1;if((typeof(zgxu)==zfhx)&&(typeof(zgxv)!=zfhx)){zgxy=parseInt(zgxv);}
else if((typeof(zgxu)!=zfhx)&&(typeof(zgxv)==zfhx)){zgxy=parseInt(zgxu)*60*60*24;}
else if((typeof(zgxu)!=zfhx)&&(typeof(zgxv)!=zfhx)){zgxy=parseInt(zgxv);}
var zagq={};zagq["contact"]=zgxt;if(zgxy!=-1){zagq["timeoutSecs"]=zgxy;}
if(typeof(zgxw)!=zfhx){zagq["note"]=zgxw;}var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?ea-update"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfzu]=function(zgxt,zfjt,zfju){var zcwz=zfzu;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq["contact"]=zgxt;var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?ea-revoke"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfzv]=function(zfjt,zfju){var zcwz=zfzv;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
this.zgij(zcwz,this.zggf("?emergency-contacts"),null,this.zgfr(),"GET",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfzw]=function(zfjt,zfju){var zcwz=zfzw;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
this.zgij(zcwz,this.zggf("?testators"),null,this.zgfr(),"GET",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfzx]=function(zgxz,zfjt,zfju,zgno){var zcwz=zfzx;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq["testator"]=zgxz;if(typeof(zgno)!=zfhx){zagq["acceptCode"]=zgno;}
var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?ea-accept"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfzy]=function(zgxz,zfjt,zfju){var zcwz=zfzy;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq["testator"]=zgxz;var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?ea-reject"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgaa]=function(zgxt,zfjt,zfju){var zcwz=zgaa;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq["contact"]=zgxt;var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?access-grant"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zfzz]=function(zgxt,zfjt,zfju){var zcwz=zfzz;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq["contact"]=zgxt;var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?access-revoke"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgab]=function(zgya,zfjt,zfju){var zcwz=zgab;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq["owner"]=zgya;var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?access-reject"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgac]=function(zgya,zfjt,zfju){var zcwz=zgac;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var zgkw=this.zgjj({"SERVER_URL":this.zgem,"USER":this.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var zagq={};zagq["owner"]=zgya;var body=JSON.stringify(zagq);this.zgij(zcwz,this.zggf("?access-request"),body,this.zgfr(),"POST",false,false,false,{}
,zfjt,zfju);zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgad]=function(zgyb,zfjt,zfju){var zcwz=zgad;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var self=this;var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER":self.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
function zgyc(zyr){zcte(zfla+". getTrustedUserData. Step 2. ->",zwf,zctf["INFO"]);var file=zfht["USER_DATA"];var zgkx=Math.floor(Math.random()*10001);var zgik=self.zgem+"/rf-api/"+encodeURI(zgyb)+"/"+file+"?_"+zgkx;zcte("RfDataManager. "+zcwz+" file='"+file+"' for trusted account='"+zgyb+"'"+" . Current auth user is ='"+self.zgen+"'. Make request *GET* to "+zgik,zwf,zctf["INFO"]);var zgfl=self.zgfr();self.zgio(zgik,null,zgfl,"GET",true,true,function zmw(zgeh,zdn){zcte("RfDataManager. "+zcwz+". makeRequestAsync callback ->",zwf,zctf["FUNC_INOUT"]);var zgff=self.zgfg(zgeh,zdn,zfju);if(!zgff){zcte("RfDataManager. "+zcwz+". checkHttpResponse failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
var url=zgik;var zasi=url.substr(url.lastIndexOf("/")+1);if(zasi.lastIndexOf("?")>0){zasi=zasi.substr(0,zasi.lastIndexOf("?"));}
url=url.substr(0,url.lastIndexOf("/"));var zfvy=url.substr(url.lastIndexOf("/")+1);if(zgeh.status==zgcw){zcte("RfDataManager. "+zcwz+" StatusCode is 404. file not found='"+zasi+"' for account='"+zfvy+"' current='"+self.zgen+"'",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Cannot get user-data.rfo for user='"+zgyb+"'"));}
return false;}if(zgeh.status==zcue){zcte("RfDataManager. "+zcwz+" Return true. StatusCode is 200. File='"+zasi+"' for account='"+zfvy+"' current='"+self.zgen+"'",zwf,zctf["INFO"]);var zgky=typeof(zgeh.response)!=zfhx?true:false;var zgka=zgky?zgeh.response:zgeh.responseText;var zgla=zgky?zgka.byteLength:zgka.length;zcte("RfDataManager. "+zcwz+"  File='"+zasi+"' for account='"+zfvy+"' current='"+self.zgen+"' BYTES="+zgla,zwf,zctf["INFO"]);var zgkb=self.zgev!=null?self.zgev:new RfapiJS.CRfOneFileSys();var zgka=zgeh.response;var zgks=self.zgjn(zgka);zgkb.zfly(zgks,zasi,zfvy,zyr,true,function zgyd(zgv,zgkd){zcte("RfDataManager."+zcwz+". DecodeOFS_Ok.",zwf,zctf["INFO"]);var zfkt=JSON.parse(zgkd);self.zgjp(zfkt,true);var zgh=zfkt[RfapiJS.ITEM_CHILDS_PROP];if(!zgh||!zgh.length){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Cannot get childs for user-data.rfo root"));}
return false;}var zvd=null;for(var zcw=0;zcw<zgh.length;zcw++){var zgk=zgh[zcw];if(zgk[RfapiJS.ITEM_INFO_PROP][RfapiJS.ITEM_NAME_PROP]==RfapiJS.ROOT_NODE){zvd=zgk;break;}
}if(typeof(zfjt)!=zfhx){zfjt(zvd);}return;},function zgye(zcpb){zcte("RfDataManager."+zcwz+". DecodeOFS_Error. ",zwf,zctf["INFO"]);if(zcpb["Code"]==zfhs["RfErr_AuthRejected"]){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_AuthRejected"],"Wrong Master Password."));return false;}
}else{if(typeof(zfju)!=zfhx){zfju(new zfpw(zcpb["Code"],zcpb["Description"]));return false;}
}return false;});return true;};if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Unknown response status='"+zgeh.status+"'"));return false;}
return;});zcte(zfla+". getTrustedUserData. Step 2. ->",zwf,zctf["INFO"]);return;}
;function zgyf(){zcte(zfla+". getUserPassword. Step 1. ->",zwf,zctf["INFO"]);self[zfzr](zgyb,function zgyg(zgv){zcte(zfla+". getPWD_OkCallBack. Step 1. ->",zwf,zctf["INFO"]);if(zgv&&zgv["pwd"]){zgyc(zgv["pwd"]);}
else{if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Cannot get password for user='"+zgyb+"'"));}
return;}},zfju);zcte(zfla+". getUserPassword. Step 1. ->",zwf,zctf["INFO"]);}
;zgyf();zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};zgej.prototype[zgbw]=function(zgyh,zfjt,zfju,zgnn,zgyi,zgyj,zgyk){var zcwz=zgbw;var zfla="RfDataManager."+zcwz;try{zcte(zfhv+zfla,zwf,zctf["FUNC_INOUT"]);var self=this;if(!zgnn){zgnn=function(zvt){}
;}var zgkw=self.zgjj({"SERVER_URL":self.zgem,"USER":self.zgen}
,zfju);if(!zgkw){zcte(zfla+". misc_checkParameters failed. Return false.",zwf,zctf["SPECIAL_CASE"]);return false;}
zgyk=typeof zgyk=="undefined"?false:zgyk;zgnn(5);function zgyl(zcwl,zgme,zgym,zgyn){zcwl=typeof zcwl=="undefined"?0:zcwl;zcte(zfla+". updateSecurityScore. Step 5. -> securityScore="+zcwl+" for account='"+zgyh+"'",zwf,zctf["INFO"]);zgnn(95);if(self.zgen==zgyh){self[zfzm](function zcwm(zcut){if(typeof(zfjt)!=zfhx){zfjt({"updated":true,"score":zcwl,"accountId":zgyh,"count":0}
);}return;},function zcwn(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
},zgyh,undefined,undefined,undefined,undefined,zcwl,zgme)}
else{self[zgai](zgyh,function zcwm(zcut){if(typeof(zfjt)!=zfhx){zfjt({"updated":true,"score":zcwl,"accountId":zgyh,"count":zgym["allItemsCount"],"loginsCount":zgme,"itemsCounter":zgym}
);}return;},function zcwn(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
},undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,zcwl,zgme)}
zcte(zfla+". updateSecurityScore. Step 5. <-",zwf,zctf["INFO"]);return;}
;function zgyo(zfkt,zgyn){zcte(zfla+". calculateSecurityScore. Step 4. ->",zwf,zctf["INFO"]);zgnn(75);var zgym={}
;if(zgyk){var zgyp={};zgyp[zgdi]={};zgyp[zgdi][zgdh]="list",zgyp[zgdi][zgdf]="";zgyp[zgdi][zgdj]=true;zgyp[zgdi][zgdk]=0;zgyp[zgdi][zgde]=[1,2,3,4,5,6,7];zgyp[zgdi]["bBody"]=false;zfzc["GetItemsCount2"](zgyp,zfkt,function zgyq(zss){zcte(zfla+". calculateSecurityScore. Step 4.a getItems_CallBack_1 ->",zwf,zctf["INFO"]);zgym=zss;}
,zfju);}var zagq={};zagq[zgdi]={};zagq[zgdi][zgdh]="list",zagq[zgdi][zgdf]="";zagq[zgdi][zgdk]=63;zagq[zgdi][zgde]=ztk["RfItemType_Login"];zagq[zgdi][zgdj]=true;zagq[zgdi]["bBody"]=true;zfzc["GetItemsList2"](zagq,zfkt,function zgyq(zss){zcte(zfla+". calculateSecurityScore. Step 4.b getItems_CallBack 2 ->",zwf,zctf["INFO"]);zgnn(85);var zgyr=0;var zgme=zss.length;for(var zcw=0;zcw<zgme;zcw++){var zgys=zss[zcw];var zux=zgys["f"];if(!zux){continue;}
for(var zgg=0;zgg<zux.length;zgg++){var zuy=zux[zgg];if(zuy["t"]&&zuy["t"]==2){var value=zuy["v"];var zgyt=0;if(value){zgyt=parseInt(RfapiJS["SecurityScore"].CalcPasswordStrength(value));}
zgyr+=zgyt;break;}}}var zgyu=!zgme?0:(parseInt((zgyr/zgme)+0.5));zgyu=zgyu>100?100:zgyu;zcte(zfla+". calculateSecurityScore. Step 4.b getItems_CallBack 2. SUMMARY SC="+zgyu,zwf,zctf["INFO"]);zgyl(zgyu,zgme,zgym,zgyn);return;}
,zfju);zcte(zfla+". calculateSecurityScore. Step 4. <-",zwf,zctf["INFO"]);return;}
;function zgyv(zgyw,zgyx,zgjy,zgyy,zgyn){zcte(zfla+". decryptGroupRFO. Step 3.3. ->",zwf,zctf["INFO"]);zgnn(55);var zgjz=typeof(zgjy.byteLength)!=zfhx?true:false;var zgka=zgjz?self.zgjn(zgjy):zgjy;var zgfz="";var zxn=zgyw["receivedData"]["accounts"];if(zxn){for(var zcw=0;zcw<zxn.length;zcw++){if(zxn[zcw]["accountId"]==zgyh){zgfz=zxn[zcw]["mp"];break;}
}}if(!zgfz){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Cannot get MP from accountInfo for account '"+zgyh+"'"));}
return false;}var zfuf=null;var zfsr=zgyy["c"];if(!zfsr){if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"[decryptGroupRFO]. There are no childs items"
}
);}return;}for(var zcw=0;zcw<zfsr.length;zcw++){if(zfsr[zcw][RfapiJS.ITEM_INFO_PROP][RfapiJS.ITEM_NAME_PROP]=="private-key.pem"){zfuf=zfsr[zcw][RfapiJS.ITEM_BODY_PROP];break;}
}if(!zfuf){if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"[decryptGroupRFO]. There is no private-key.pem in user-data.rfo"
}
);}return;}var zgga=zawd.zawe(zgfz);var zggb=zawd.zfiu(zgga);var zggc=new RSAKey();var zggd=zfyv.zgge(zfuf,false);zggc.setPrivateEx(zggd["modulus"],zggd["exponent"],zggd["privateexp"],zggd["P"],zggd["Q"],zggd["DP"],zggd["DQ"],zggd["InverseQ"]);var zbtu=zggc.decrypt(zggb);var zasi=zfht["USER_DATA"];var zgkb=self.zgev!=null?self.zgev:new RfapiJS.CRfOneFileSys();zgkb.zfly(zgka,zasi,zgyh,zbtu,true,function zgkc(zgv,zgkd){zcte(zfla+".decryptGroupRFO. Ok_CallBack. Step 3.3",zwf,zctf["FUNC_INOUT"]);try{var zgyz=JSON.parse(zgkd);self.zgjp(zgyz,true);}
catch(zdn){if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"[decryptGroupRFO] Exception while ParseOneFileDataString: "+zdn.toString()+".  End of data:  ..."+zgkd.substring(zgkd.length-20)}
);}return false;}zgyo(zgyz,zgyn);return;},function zgke(zcpb){zcte(zfla+".decryptGroupRFO. Error_CallBack. Step 3.3",zwf,zctf["FUNC_INOUT"]);if(zcpb["Code"]==zfhs["RfErr_AuthRejected"]){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_AuthRejected"],"Wrong Master Password."));return false;}
}else{if(typeof(zfju)!=zfhx){zfju(new zfpw(zcpb["Code"],zcpb["Description"]));return false;}
}return false;});zcte(zfla+". decryptGroupRFO. Step 3.3. <-",zwf,zctf["INFO"]);return;}
;function zgza(zgyw,zgyx,zgyy,zgyn){try{zcte(zfla+". getGroupAccountData. Step 3.2 ->",zwf,zctf["INFO"]);zgnn(45);var zasi=zfht["USER_DATA"];self[zgbg](function zgrk(zhw,file,zfir,zbbn,data){zcte(zfla+".getGroupAccountData. CheckoutOFS_CallBack. Step 3.2 file='"+file+"' account='"+zfir+"' status="+zhw+" eTag="+zbbn,zwf,zctf["FUNC_INOUT"]);zgyv(zgyw,zgyx,data,zgyy,zgyn);return;}
,zfju,zasi,zgyh);zcte(zfla+". getGroupAccountData. Step 3.2 <-",zwf,zctf["INFO"]);return;}
catch(zhj){zwe("EXCEPTION in "+zfla+" getGroupAccountData. Step 3.2 "+zhj.toString(),zwf);}
};function zgzb(zgyw,zgyx,zgyn){try{zcte(zfla+". getUserAccountData. Step 3. ->",zwf,zctf["INFO"]);zgnn(35);var zasi=zfht["USER_DATA"];var zcmz=false;if(self.zgen==zgyh){zcmz=true;}
else{var zxn=zgyw["receivedData"]["accounts"];if(zxn){for(var zcw=0;zcw<zxn.length;zcw++){if(zxn[zcw]["accountId"]==zgyh){zcmz=true;break;}
}}}if(!zcmz){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_BadData"],"Cannot update security score for account '"+zgyh+"'"));}
return false;}self[zgbg](function zgrk(zhw,file,zfir,zbbn,zgjy){zcte(zfla+".getUserAccountData. CheckoutOFS_CallBack. Step 3 file='"+file+"' account='"+zfir+"' status="+zhw+" eTag="+zbbn,zwf,zctf["FUNC_INOUT"]);zgnn(45);var zgjz=typeof(zgjy.byteLength)!=zfhx?true:false;var zgka=zgjz?self.zgjn(zgjy):zgjy;var zgkb=self.zgev!=null?self.zgev:new RfapiJS.CRfOneFileSys();var zasi=zfht["USER_DATA"];zgkb.zfly(zgka,zasi,zfir,self.zgep,true,function zgkc(zgv,zgkd){zcte(zfla+".getUserAccountData. Ok_CallBack. Step 3",zwf,zctf["FUNC_INOUT"]);zgnn(55);try{var zgyy=JSON.parse(zgkd);zgnn(65);self.zgjp(zgyy,true);}
catch(zdn){if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"[getUserAccountData] Exception while ParseOneFileDataString: "+zdn.toString()+".  End of data:  ..."+zgkd.substring(zgkd.length-20)}
);}return false;}self.zgen==zgyh?zgyo(zgyy,zgyn):zgza(zgyw,zgyx,zgyy,zgyn);return;}
,function zgke(zcpb){zcte(zfla+".getUserAccountData. Error_CallBack. Step 3",zwf,zctf["FUNC_INOUT"]);if(zcpb["Code"]==zfhs["RfErr_AuthRejected"]){if(typeof(zfju)!=zfhx){zfju(new zfpw(zfhs["RfErr_AuthRejected"],"Wrong Master Password."));return false;}
}else{if(typeof(zfju)!=zfhx){zfju(new zfpw(zcpb["Code"],zcpb["Description"]));return false;}
}return false;});return;},zfju,zasi,self.zgen);zcte(zfla+". getUserAccountData. Step 3. <-",zwf,zctf["INFO"]);return;}
catch(zhj){zwe("EXCEPTION in "+zfla+" getUserAccountData. Step3 "+zhj.toString(),zwf);}
};function zgzc(zgyw){try{zcte(zfla+". checkForUpdate. Step 2. ->",zwf,zctf["INFO"]);zgnn(15);if(self.zgen==zgyh){if(!zgyj){var zgzd=zfyw.zgze(zgyw);if(!zgzd){zcte(zfla+". No need to update SSC for account ='"+zgyh+"'",zwf,zctf["SPECIAL_CASE"]);zgnn(zgda);if(typeof(zfjt)!=zfhx){zfjt({"updated":false,"score":zgyw["securityScore"],"accountId":zgyh,"count":0}
);}return;}}zcte(zfla+". checkForUpdate. Step 2. Need to update. Get user-data.rfo for account='"+zgyh+"'",zwf,zctf["INFO"]);zgzb(zgyw,null,true);return;}
else{var zgik=self.zgem+"/rf-api/"+encodeURI(zgyh)+"?shared-account-info";self.zgij(zfzl,zgik,null,self.zgfr(),"GET",false,false,false,{"userId":zgyh,"getUserInfo":true}
,function zgzf(zgzg){zcte(zfla+". getSharedAccountInfo_Ok. Step 2. Ok->",zwf,zctf["INFO"]);zgzg["oneFile"]=true;var zgyn=zgyj;if(!zgyj){var zgzd=zfyw.zgze(zgzg);zgyn=zgzd;if(!zgzd){zcte(zfla+". No need to update SSC for account ='"+zgyh+"' Check bItemsCount flag",zwf,zctf["SPECIAL_CASE"]);if(!zgyk){zcte(zfla+". No need to update SSC for account ='"+zgyh+"' RETURN.",zwf,zctf["SPECIAL_CASE"]);zgnn(zgda);if(typeof(zfjt)!=zfhx){zfjt({"updated":false,"score":zgzg["securityScore"],"accountId":zgyh,"count":0}
);}return;}}}zcte(zfla+". checkForUpdate. Step 2. Need to update. Get user-data.rfo for account='"+zgyh+"'",zwf,zctf["INFO"]);zgzb(zgyw,zgzg,zgyn);return;}
,function zgzh(zcpb){zcte(zfla+".getSharedAccountInfo_Error. Step 2. Error->",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
return;});}zcte(zfla+". checkForUpdate. Step 2. <-",zwf,zctf["INFO"]);return;}
catch(zhj){zwe("EXCEPTION in "+zfla+" checkForUpdate. Step2 "+zhj.toString(),zwf);}
};function zgzi(){zcte(zfla+". getAccountInfo. Step 1. ->",zwf,zctf["INFO"]);if(zgyi){zgzc(zgyi);}
else{var zgik=self.zgem+"/rf-api/"+encodeURI(self.zgen)+"?get-account-info";self.zgij(zfzl,zgik,null,self.zgfr(),"POST",false,false,false,{"userId":self.zgen,"getUserInfo":true}
,function zgzj(zcnz){zcte(zfla+". getAccountInfo. Step 1. Ok->",zwf,zctf["INFO"]);if(self.zgen==zgyh){zgzc(zcnz);}
else{self[zgag](function zgjc(zgjf,zcut){zcte(zfla+". getAccountInfo.GetAccounts_AnswerCallBack. Step 1.1 Ok->",zwf,zctf["INFO"]);zcnz["receivedData"]=zgjf;zgzc(zcnz);return;}
,function zgjd(zcpb){if(typeof(zfju)!=zfhx){zfju(zcpb);}
return false;});}return;},function zgzk(zcpb){zcte(zfla+".getAccountInfo. Step 1. Error->",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju(zcpb);}
return;});}zcte(zfla+". getAccountInfo. Step 1. ->",zwf,zctf["INFO"]);return;}
;zgzi();zcte(zfhw+zfla,zwf,zctf["FUNC_INOUT"]);return;}
catch(zhj){this.zgfm(zfla,zhj,zfju);}};function zgzl(zavn){zfyx=zavn;}
;function zgzm(zgzn){zfyy=zgzn;};function zcte(zcm,zasi,zavh){if(!zfyy){return;}
if(zfyx>zavh){return;}var zalz=(new Date).getTime()-zalx;if(typeof(opera)!=zfhx&&typeof(opera.postError)!=zfhx){opera.postError(new Date().toUTCString()+'\n'+zalz+"  (RfapiJS trace in "+zasi+") : "+zcm);}
else if(zad||zae){console.log(new Date().toUTCString()+'\n'+zalz+"  (RfapiJS trace in "+zasi+") : "+zcm);}
else if(zag){if(typeof(console)!=zfhx){console.log(new Date().toUTCString()+'\n'+zalz+"  (RfapiJS trace in "+zasi+") : "+zcm);}
else{}}else if(zfza){console.log(new Date().toUTCString()+'\n'+zalz+"  (RfapiJS trace in "+zasi+") : "+zcm);}
else if(zif){console.log(new Date().toUTCString()+'\n'+zalz+"  (RfapiJS trace in "+zasi+") : "+zcm);}
else{zgzo.zaly(new Date().toUTCString()+'\n'+zalz+"  (RfapiJS trace in "+zasi+") : "+zcm);}
if(zavh==zctf["EXCEPTION"]){alert(zcm);}};var zgzp=false;function zwe(zcm,zasi){var zalz=(new Date).getTime()-zalx;if(typeof(opera)!=zfhx&&typeof(opera.postError)!=zfhx){opera.postError(new Date().toUTCString()+'\n'+zalz+"  (RfapiJS log in "+zasi+") : "+zcm);}
else if(zad||zae){console.log(new Date().toUTCString()+'\n'+zalz+"  (RfapiJS log in "+zasi+") : "+zcm);}
else if(zag){if(typeof(console)!=zfhx){console.log(new Date().toUTCString()+'\n'+zalz+"  (RfapiJS log in "+zasi+") : "+zcm);}
else{zgzo.zaly(new Date().toUTCString()+'\n'+zalz+"  (RfapiJS log in "+zasi+") : "+zcm);}
}else if(zfza){console.log(new Date().toUTCString()+'\n'+zalz+"  (RfapiJS trace in "+zasi+") : "+zcm);}
else if(zif){console.log(new Date().toUTCString()+'\n'+zalz+"  (RfapiJS trace in "+zasi+") : "+zcm);}
else{zgzo.zaly(new Date().toUTCString()+'\n'+zalz+"  (RfapiJS log in "+zasi+") : "+zcm);}
if(zgzp){alert(zcm);}};if(!String.prototype.startsWith){String.prototype.startsWith=function(zafb){return!this.indexOf(zafb);}
}if(!String.prototype.endsWith){String.prototype.endsWith=function(zafb){return(this.match(zafb+"$")==zafb);}
;}if(!String.prototype.trimLeft){String.prototype.trimLeft=function(){return this.replace(new RegExp("^\\s+"),"");}
;}if(!String.prototype.trimRight){String.prototype.trimRight=function(){return this.replace(new RegExp("\\s+$"),"");}
;}if(!String.prototype.trim){String.prototype.trim=function(){return this.trimLeft().trimRight();}
;}RfapiJS["RfDataManager"]=zgej;RfapiJS["accountMode"]=zarx;RfapiJS["setTraceLevel"]=zgzl;RfapiJS["setDebugMode"]=zgzm;RfapiJS["traceJS"]=zcte;RfapiJS["SibErrType"]=zcud;RfapiJS["traceLevel"]=zctf;RfapiJS["logJS"]=zwe;RfapiJS["RfApiError"]=zfpw;RfapiJS["EnDataItemInfoParts"]=zfpx;RfapiJS["RfErrType"]=zfhs;RfapiJS["EnRfDataItemType"]=ztk;RfapiJS["EnDataPresenceLevel"]=zfzd;RfapiJS["RfUrlMatchLevel"]=zfpy;RfapiJS["EnUsageInfoList"]=zfpz;RfapiJS["UserDataFiles"]=zfht;RfapiJS["HTTP_Status_Code_OK"]=zcue;RfapiJS["HTTP_Status_Code_Unauthorized"]=zcuf;RfapiJS["HTTP_Status_Code_Forbidden"]=zcug;}
).apply(RfapiJS);
