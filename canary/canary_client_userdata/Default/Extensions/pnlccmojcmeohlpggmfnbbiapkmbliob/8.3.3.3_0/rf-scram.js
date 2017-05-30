// Copyright (C) 1999-2017 Siber Systems Inc. All Rights Reserved.
var RfapiJS=RfapiJS||{}
;(function(){var zffr="1.17.3.13";var zak="March 13, 2017";var zcte=RfapiJS["traceJS"];var zcud=RfapiJS["SibErrType"];var zctf=RfapiJS["traceLevel"];var zfhs=RfapiJS["RfErrType"];var zawd=RfapiJS["utils"];var zavo=RfapiJS["UTF8"];var zwf="rf-scram.js";var zhas={"enInitial":0,"enError":1,"enServerError":2,"enClientFirstMessageSent":3,"enServerFirstMessageRecieved":4,"enClientFinalMessageSent":5,"enServerFinalMessageRecieved":6,"enAuthRejected":7,"enServerVerified":8
}
;var zhat={"enNone":0,"enSHA1":1,"enSHA224":2,"enSHA256":3,"enSHA512":4
}
;function zhau(){this.zli=new zhav();this.zhaw="";this.zhax="";this.zhay=Math.floor(Math.random()*1E8);this.zhaz=16;}
;zhau.prototype.zfcu=function(){this.zli.zfcu();this.zhax="";}
;zhau.prototype.zhba=function(zhbb){if(this.zhaw!=""&&zhbb!=this.zhaw){zcte("Wrong realm: "+zhbb,zwf,zctf["INFO"]);return false;}
return true;};zhau.prototype.zgmm=function(zhbb){this.zhaw=zhbb;}
;zhau.prototype.zhbc=function(zhbd){var zcxr=zawd.zfod(zhbd);var base64=zawd.zcxv(zcxr);base64=base64.replace(new RegExp("=","g"),"");base64=base64.replace(new RegExp("\\+","g"),"-");base64=base64.replace(new RegExp("/","g"),"_");return base64;}
;zhau.prototype.zgmo=function(zhbe,zyr){var zgp="";switch(this.zli.zhbf()){case zhas["enServerFirstMessageRecieved"]:var data=this.zli.zhbg();zgp="SibAuth ";if(this.zhax){zgp+="sid=\""+this.zhax+"\",";}
var zhbh=zavo.zcxt(data);var zhbi=zawd.zcxv(zhbh);zgp+="data=\""+zhbi+"\"";break;case zhas["enClientFinalMessageSent"]:case zhas["enServerFinalMessageRecieved"]:case zhas["enServerVerified"]:var zhbj=this.zhbc(this.zhaz);var data=this.zli.zhbk(zhbj);zgp="SibAuth ";break;default:var zhbj=this.zhbc(this.zhaz);zcte("SibHttpScramAuthClient.GetAuthRequestHeader. FIRST_CLIENT nonce='"+zhbj+"'",zwf,zctf["INFO"]);var zgxn=zavo.zcxt(zyr);var data=this.zli.zhbl(zhbe,zgxn,zhat["enSHA256"],zhbj);var zhbh=zavo.zcxt(data);var zhbi=zawd.zcxv(zhbh);zgp="SibAuth realm=\""+this.zhaw+"\",data=\""+zhbi+"\"";break;}
return zgp;};zhau.prototype.zgmr=function(zhbm){var zhbb=zhbm.zhbn["realm"];var zhbo=zhbm.zhbn["sid"];var base64=zhbm.zhbn["data"];var data="";if(base64){var zhbh=zawd.zawe(base64);data=zavo.zawf(zhbh);}
if(data==""){zcte("SCRAM Auth: bad base64 encoding",zwf,zctf["INFO"]);return false;}
if(zhbb){this.zfcu();if(!this.zhba(zhbb)){return false;}
zcte("[SibAuth: sending first client message]",zwf,zctf["INFO"]);return false;}
var message="";switch(this.zli.zhbf()){case zhas["enClientFirstMessageSent"]:if(!this.zli.zhbp(data)){return false;}
this.zhax=zhbo;zcte("[SibAuth: sending final client message]",zwf,zctf["INFO"]);return true;case zhas["enClientFinalMessageSent"]:if(!this.zhbq(zhbo)){return false;}
if(!this.zli.zhbr(data)){return false;}return true;default:zcte("Unathorized",zwf,zctf["INFO"]);return false;}
};function zhav(){this.zhbs=zhas["enInitial"];this.zhbt="";this.zhbu="";this.zhbv=null;this.zhbw="";this.zhbx="";this.zhby="";this.zhbz="";this.zhca="";this.zhcb=null;this.zhcc=0;this.zhcd=false;this.zhce=null;this.zhcf=null;this.zhcg=null;this.zhch=null;this.zhci=null;this.zhcj="";this.zhck="";this.zhcl=null;this.zhcm="";this.zhcn=false;this.zhco=[];this.zhcp=[];this.zhcq=0;this.zhcr=false;this.zhcs=null;this.zhct=null;this.zhcu=null;this.zhcv=null;this.zhcw=zhat["enNone"];this.zhcx=0;this.zhcy=0;this.zhcz=64;}
;zhav.prototype.zhbg=function(){if(this.zhcn&&zawd.zfph(this.zhbv,this.zhco)&&zawd.zfph(this.zhcb,this.zhcp)&&this.zhcc==this.zhcq&&this.zhcd==this.zhcr){this.zhce=this.zhcs;this.zhcf=this.zhct;this.zhci=this.zhcu;this.zhcg=this.zhcv;}
else{this.zhcn=true;this.zhco=this.zhbv;this.zhcp=this.zhcb;this.zhcq=this.zhcc;this.zhcr=this.zhcd;this.zhce=this.zhda(this.zhcd?this.zhdb(this.zhbv):this.zhbv,this.zhcb,this.zhcc);var zglk=this.zhdc(this.zhce);this.zhcf=zglk.Item1;this.zhci=zglk.Item2;this.zhcg=zglk.Item3;this.zhcs=this.zhce;this.zhct=this.zhcf;this.zhcu=this.zhci;this.zhcv=this.zhcg;}
var zhdg="c=biws,r="+this.zhca;var zhdh=this.zhby+","+this.zhbz+","+zhdg;zcte("SibScramAuthClient.MakeClientFinalMessage. authMsg='"+zhdh+"'",zwf,zctf["INFO"]);this.zhch=zavo.zcxt(zhdh);var zhdi=this.zhdj(this.zhcg,this.zhch,false);var zhdk=this.zhcf.length;var zhdl=new Array(zhdk);for(var zcw=0;zcw<zhdk;zcw++){zhdl[zcw]=this.zhcf[zcw]^zhdi[zcw];}
var zhdm=zhdg+",p="+zawd.zcxv(zhdl);zcte("SibScramAuthClient.MakeClientFinalMessage. client_final_message='"+zhdm+"'",zwf,zctf["INFO"]);this.zhbs=zhas["enClientFinalMessageSent"];return zhdm;}
;zhav.prototype.zhbp=function(zhdn){if(this.zhbs!=zhas["enClientFirstMessageSent"]){this.zhdo();zcte("SCRAM Auth: unexpected server response",zwf,zctf["INFO"]);return false;}
this.zhbz="";this.zhca="";this.zhcb=[];this.zhcc=0;this.zhcd=false;var zfjc=[];var zhbj="";var zfjd=0;var zxk="";var zcm=zhdn;var zlf;do{var zep=zcm.indexOf(',');if(zep!=-1){zlf=zcm.substring(0,zep);zcm=zcm.substring(zep+1);}
else{zlf=zcm;zcm="";}var zhdp={"param":zlf};if(this.zhdq(zlf,"r=",zhdp)){zlf=zhdp["param"];zhbj=zlf;}
else if(this.zhdq(zlf,"s=",zhdp)){zlf=zhdp["param"];zfjc=zawd.zawe(zlf);if(zfjc.length==0){this.zhdo();zcte("SCRAM Auth: bad server response - bad base64 encoding",zwf,zctf["INFO"]);return false;}
}else if(this.zhdq(zlf,"i=",zhdp)){zlf=zhdp["param"];zfjd=zlf;if(!zfjd||zfjd==0){this.zhdo();zcte("SCRAM Auth: bad server response - iterations=0",zwf,zctf["INFO"]);return false;}
}else if(this.zhdq(zlf,"o=",zhdp)){zlf=zhdp["param"];zxk=zlf;}
}while(zcm!="");if(zhbj==""||zfjc.length==0){this.zhdo();zcte("SCRAM Auth: bad server response",zwf,zctf["INFO"]);return false;}
zcte("SibHttpScramAuthClient.ParseServerFirstMessage. Server NONCE='"+zhbj+"'",zwf,zctf["INFO"]);if(!zhbj.startsWith(this.zhbw)){this.zhdo();zcte("SCRAM Auth: bad server response - nonce mismatch",zwf,zctf["INFO"]);return false;}
this.zhbz=zhdn;this.zhca=zhbj;this.zhcb=zfjc;this.zhcc=zfjd;if(zxk.indexOf("pwdMD5")>=0){this.zhcd=true;}
this.zhbs=zhas["enServerFirstMessageRecieved"];if(this.zhcb!=this.zhcp||this.zhcc!=this.zhcq||this.zhcd!=this.zhcr){this.zhdr();}
return true;};zhav.prototype.zhbl=function(zbih,zyr,zhds,zhbj){this.zfcu();if(zyr!=this.zhco||zhds!=this.zhcw){this.zhdr();}
this.zhdt(zhds);this.zhbt=zbih;this.zhbv=zyr;this.zhbw=this.zhdu(zhbj);zcte("SibHttpScramAuthClient.MakeClientFirstMessage. after MakeNonceValid this.m_client_nonce='"+this.zhbw+"'",zwf,zctf["INFO"]);this.zhby="n="+encodeURI(this.zhbt)+",r="+this.zhbw;this.zhbx="n,,"+this.zhby;this.zhbs=zhas["enClientFirstMessageSent"];return this.zhbx;}
;zhav.prototype.zfcu=function(){this.zhbs=zhas["enInitial"];this.zhbt="";this.zhbv=[];this.zhbw="";this.zhbx="";this.zhby="";this.zhbz="";this.zhca="";this.zhcb=[];this.zhcc=0;this.zhcd=false;this.zhce=[];this.zhcf=[];this.zhcg=[];this.zhch=[];this.zhci=[];this.zhck="";this.zhcl=[];this.zhcm="";}
;zhav.prototype.zhdr=function(){if(!this.zhcn){return;}
this.zhcn=false;this.zhco=[];this.zhcp=[];this.zhcq=0;this.zhcr=false;this.zhcs=[];this.zhct=[];this.zhcu=[];this.zhcv=[];}
;zhav.prototype.zarr=function(){return this.zhbt;}
;zhav.prototype.zhdq=function(zhdv,zhdw,zgv){zgv["param"]=zhdv;if(zhdv.startsWith(zhdw)){zgv["param"]=zhdv.substring(zhdw.length);return true;}
return false;};zhav.prototype.zhdx=function(){return this.zhca;}
;zhav.prototype.zhdy=function(){return this.zhcb;}
;zhav.prototype.zhdz=function(){return this.zhcc;}
;zhav.prototype.zhea=function(){return this.zhcm;}
;zhav.prototype.zhdo=function(){this.zhbs=zhas["enError"];}
;zhav.prototype.zhbf=function(){return this.zhbs;}
;zhav.prototype.zhdb=function(zyr){var hash=CryptoJS.MD5(zavo.zawf(zyr));hash=hash.toString();return zavo.zcxt(hash);}
;zhav.prototype.zgnv=function(zyr,zfjc,zheb){var zhec=this.zhda(zavo.zcxt(zyr),zfjc,zheb);var zglk=this.zhdc(zhec);return zglk;}
;zhav.prototype.zhdt=function(zhed){this.zhcw=zhed;switch(zhed){case zhat["enSHA256"]:break;case zhat["enNone"]:case zhat["enSHA1"]:case zhat["enSHA224"]:case zhat["enSHA512"]:default:zcte("SibScramAuthClient.SetHashAlgorithm. Hash algorithm is not supported",zwf,zctf["INFO"]);return;}
this.zhcx=this.zhcy=this.zhcz;};zhav.prototype.zhdu=function(zhbj){var zgv="";for(var zcw=0;zcw<zhbj.length;zcw++){var zbko=zhbj[zcw]!=undefined?zhbj[zcw]:zhbj.charAt(zcw);var zzn=zbko;var zhee=(((zzn.charCodeAt(0)-'!'.charCodeAt(0))%('~'.charCodeAt(0)-'!'.charCodeAt(0)+1))+'!'.charCodeAt(0));zzn=String.fromCharCode(zhee);if(zzn==','){zzn='~';}
zgv+=(zzn!=zbko?zzn:zbko);}return zgv;};zhav.prototype.zgnv=function(zyr,zfjc,zhef){var zheg=this.zhda(zyr,zfjc,zhef);var zheh=this.zhdc(zheg);return{"item2":zheh.Item2,"item3":zheh.Item3}
;};zhav.prototype.zhda=function(zyr,zfjc,zhef){var zheg=[];var zfof=new RfapiJS["Pbkdf2"](2,zfjc,zavo.zawf(zyr),zhef);zheg=zfof.zfka(32);return zheg;}
;zhav.prototype.zhdc=function(zheg){var zhei=this.zhdj(zheg,"Client Key",true);var zhej=this.zhdj(zheg,"Server Key",true);var zhek=this.zhel(zhei);return{"Item1":zhei,"Item2":zhej,"Item3":zhek}
;};zhav.prototype.zhdj=function(key,data,zhem){var zhen=zawd.zcxv(key);var zheo=CryptoJS.enc.Base64.parse(zhen);if(zhem){var zhep=zavo.zcxt(data);var zheq=zawd.zcxv(zhep);}
else{var zheq=zawd.zcxv(data);}var zher=CryptoJS.enc.Base64.parse(zheq);var zhar=CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256,zheo);zhar.update(zher);var hash=zhar.finalize();hash=hash.toString(CryptoJS.enc.Base64);zhal=zawd.zawe(hash);return zhal;}
;zhav.prototype.zhel=function(data){var zheq=zawd.zcxv(data);var zher=CryptoJS.enc.Base64.parse(zheq);var hash=CryptoJS.SHA256(zher);hash=hash.toString(CryptoJS.enc.Base64);var zhal=zawd.zawe(hash);return zhal;}
;zhav.prototype.zhes=function(zbih){var zhet=zbih.replace("=","=3D");return zhet.replace(",","=2C");}
;zhav.prototype.zheu=function(zhet){var zbih=zhet.replace("=2C",",");return zbih.replace("=3D","=");}
;function zhev(zhew){var zhex=new zhey();var zhez=zhew.indexOf(" ");zhex.zhfa=zhew.substring(0,zhez);zhew=zhew.substring(zhez).trimLeft().trimRight();var zhfb=zhew.split(',');for(var zcw=0;zcw<zhfb.length;zcw++){var zash=zhfb[zcw];var zhfc=zash.indexOf('=');var key=zash.substring(0,zhfc);var value=zash.substring(zhfc+2);value=value.replace(new RegExp('"','g'),'');if(key&&value){zhex.zhbn[key]=value;}
}return zhex;};function zhey(){this.zhfa="";;this.zhbn={}
;};RfapiJS["SibHttpScramAuthClient"]=zhau;RfapiJS["SibHttpGetAuthMethod"]=zhev;RfapiJS["SibScramAuthClient"]=zhav;}
).apply(RfapiJS);
