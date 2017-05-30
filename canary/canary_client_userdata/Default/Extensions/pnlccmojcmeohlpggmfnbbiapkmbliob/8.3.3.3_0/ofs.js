// Copyright (C) 1999-2017 Siber Systems Inc. All Rights Reserved.
var RfapiJS=RfapiJS||{}
;(function(){var zffr="1.17.5.4";var zak="May 4, 2017";var zcte=RfapiJS["traceJS"];var zctf=RfapiJS["traceLevel"];var zcud=RfapiJS["SibErrType"];var zfhs=RfapiJS["RfErrType"];var zwe=RfapiJS["logJS"];var zawd=RfapiJS["utils"];var zavo=RfapiJS["UTF8"];var zcue=RfapiJS["HTTP_Status_Code_OK"];var zfht=RfapiJS["UserDataFiles"];var zfhu=RfapiJS["Binary"];var zfhv="-> ";var zfhw="<- ";var zwf="ofs.js";var zfhx="undefined";var zfhy="rfosha#$";var zfhz="rfosha2#$";var zfia="###";var zcxl="101112131415161718191a1b1c1d1e1f";var zfib=4096;var zfic=32;var zfid={"enIntegrityCheck":1<<0,"enEncrypted":1<<1,"enZipped":1<<2}
;var zfie={"enNoPadding":1
};function zfif(){try{return'localStorage'in window&&window['localStorage']!==null;}
catch(zhj){return false;}}function zfig(){zcte("CRfOneFileSys  ctor  ->",zwf,zctf["FUNC_INOUT"]);this.zfih={}
;this.zfii={};this.zfij={};this.zfik={};var zfil=zfif();try{if(zfil){for(var item in localStorage){if(item.startsWith(zfhy)){delete localStorage[item];}
}for(var item in localStorage){if(item.startsWith(zfhz)){var zfim=item.substr(zfhz.length,item.indexOf(zfia)-zfhz.length);var zfin=item.substr(item.indexOf(zfia)+zfia.length);var zfio=zawd.zfip(zfim);var zfiq=zawd.zfip(zfin);var zfir=zavo.zawf(zfio);var zasi=zavo.zawf(zfiq);if(!this.zfik[zfir]){this.zfik[zfir]={}
;}this.zfik[zfir][zasi]=localStorage[item];}}}}catch(zhj){}
zcte("CRfOneFileSys  ctor  <-",zwf,zctf["FUNC_INOUT"]);}
;zfig.prototype.zfis=function(zcwo,zasi){zcte("ofs_ClearCacheForAccount. File='"+zasi+"' account='"+zcwo+"'",zwf,zctf["SPECIAL_CASE"]);if(!zasi){delete this.zfih[zcwo];delete this.zfii[zcwo];delete this.zfij[zcwo];}
else{if(this.zfih[zcwo]&&this.zfih[zcwo][zasi]){delete this.zfih[zcwo][zasi];}
if(this.zfii[zcwo]&&this.zfii[zcwo][zasi]){delete this.zfii[zcwo][zasi];}
if(this.zfij[zcwo]&&this.zfij[zcwo][zasi]){delete this.zfij[zcwo][zasi];}
}var zfil=zfif();if(!zfil){return;}var zfit=zawd.zfiu(zavo.zcxt(zcwo));var zfiv=zawd.zfiu(zavo.zcxt(zfht["APP_DATA"]));var zfiw=zfhz+zfit+zfia+zfiv;if(!zasi||(zasi&&zasi==zfht["APP_DATA"])){delete localStorage[zfiw];}
var zfix=zawd.zfiu(zavo.zcxt(zfht["SYNC_DATA"]));var zfiy=zfhz+zfit+zfia+zfix;if(!zasi||(zasi&&zasi==zfht["SYNC_DATA"])){delete localStorage[zfiy];}
var zfiz=zawd.zfiu(zavo.zcxt(zfht["USER_DATA"]));var zfja=zfhz+zfit+zfia+zfiz;if(!zasi||(zasi&&zasi==zfht["USER_DATA"])){delete localStorage[zfja];}
};zfig.prototype.zfjb=function(zfjc,key,zfjd,zasi,zcwo,zbtu){try{var zfil=zfif();var zfje=zawd.zfiu(zavo.zcxt(zcwo));var zfjf=zawd.zfiu(zavo.zcxt(zasi));var zfjg=zfhz+zfje+zfia+zfjf;var zcxr=[];for(var zcw=0;zcw<zfjc.length;zcw++){zcxr.push(zfjc[zcw]);}
for(var zcw=0;zcw<key.length;zcw++){zcxr.push(key[zcw]);}
var zfjh=zawd.zfji(zfjd);for(var zcw=0;zcw<zfjh.length;zcw++){zcxr.push(zfjh[zcw]);}
var zcxu=zawd.zcxv(zcxr);var zcxo=CryptoJS.enc.Latin1.parse(CryptoJS.enc.Latin1.stringify(CryptoJS.SHA256(zbtu+zbtu)));var zcxp=CryptoJS.enc.Hex.parse(zcxl);var zcxw=CryptoJS.AES.encrypt(zcxu,zcxo,{"iv":zcxp}
);var zcxx=zcxw.toString();var zcxn=CryptoJS.lib.CipherParams.create({"ciphertext":CryptoJS.enc.Base64.parse(zcxx)}
);var zcxq=CryptoJS.AES.decrypt(zcxn,zcxo,{"iv":zcxp}
);var zgv=zcxq.toString(CryptoJS.enc.Utf8);var zcxy=zcxu==zgv;if(zcxy){zcte("ofs_SetData. Cache salt and key to localStorage. for file='"+zasi+"' account='"+zcwo+"' pwd='"+zbtu+"'",zwf,zctf["SPECIAL_CASE"]);if(zfil){if((typeof localStorage[zfjg]==zfhx)||(localStorage[zfjg]!=zcxx)){localStorage[zfjg]=zcxx;}
}if(!this.zfih[zcwo]){this.zfih[zcwo]={};}this.zfih[zcwo][zasi]=zfjc;if(!this.zfii[zcwo]){this.zfii[zcwo]={}
;}this.zfii[zcwo][zasi]=key;if(!this.zfij[zcwo]){this.zfij[zcwo]={}
;}this.zfij[zcwo][zasi]=zfjd;}else{zcte("ofs_SetData. ### Encode-decode error ### . msg64 != result ",zwf,zctf["SPECIAL_CASE"]);}
return;}catch(zhj){zcte("ERROR  ofs_SetData: "+zhj,zwf,zctf["SPECIAL_CASE"]);}
};zfig.prototype.zfjj=function(zasi,zcwo,zbtu){if(this.zfii[zcwo]&&this.zfih[zcwo]){if(this.zfih[zcwo][zasi]&&this.zfii[zcwo][zasi]){return{"salt":this.zfih[zcwo][zasi],"key":this.zfii[zcwo][zasi],"iterations":this.zfij[zcwo][zasi]
}
;}}var zfjk=this.zfjl(zasi,zcwo,zbtu);if(!zfjk){return{"salt":null,"key":null,"iterations":0}
;}var zfjm=[];var zfjn=[];var zfjo=[];var zfjp=16;var zfjq=64;for(var zcw=0;zcw<zfjp;zcw++){zfjm.push(zfjk[zcw]);}
for(var zcw=zfjp;zcw<zfjp+zfjq;zcw++){zfjn.push(zfjk[zcw]);}
for(var zcw=zfjp+zfjq;zcw<zfjk.length;zcw++){zfjo.push(zfjk[zcw]);}
if(!this.zfih[zcwo]){this.zfih[zcwo]={};}this.zfih[zcwo][zasi]=zfjm;if(!this.zfii[zcwo]){this.zfii[zcwo]={}
;}this.zfii[zcwo][zasi]=zfjn;var zfjd=zawd.zfjr(zfjo,0);if(!this.zfij[zcwo]){this.zfij[zcwo]={}
;}this.zfij[zcwo][zasi]=zfjd;return{"salt":zfjm,"key":zfjn,"iterations":zfjd}
;};zfig.prototype.zfjl=function(zasi,zcwo,zbtu){try{if(!this.zfik[zcwo]){return"";}
var zcxm=this.zfik[zcwo][zasi];if(!zcxm){return"";}
var zcxn=CryptoJS.lib.CipherParams.create({"ciphertext":CryptoJS.enc.Base64.parse(zcxm)}
);var zcxo=CryptoJS.enc.Latin1.parse(CryptoJS.enc.Latin1.stringify(CryptoJS.SHA256(zbtu+zbtu)));var zcxp=CryptoJS.enc.Hex.parse(zcxl);var zcxq=CryptoJS.AES.decrypt(zcxn,zcxo,{"iv":zcxp}
);var zgv=zcxq.toString(CryptoJS.enc.Utf8);var zcxr=zawd.zawe(zgv);return zcxr;}
catch(zdn){zcte("ERROR  ofs_decryptSaltKey: "+zdn,zwf,zctf["SPECIAL_CASE"]);return"";}
};zfig.prototype.zfjs=function(src,zyr,zfjt,zfju,zasi,zcwo){zfjv=this;var zcwz="RfTEST_OFS";zcte(zcwz+" length="+src.length,zwf,zctf["FUNC_INOUT"]);var zfjw=(new Date).getTime();var zfjx=new zfjy(src);var zfjz=new Array(8);zfjx.zfka(zfjz,8);zfjz=zavo.zawf(zfjz);if(zfjz!="onefile1"){zcte(zcwz+" Wrong file format! Could not read onefile1.",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju({"Code":zfhs["RfErr_BadData"],"Description":"Wrong file format : Could not read onefile1","sibErr":"LocalErr"
}
,zfkb);}return false;}var zbcw={"u_char":""};if(!zfjx.zfkc(zbcw)){zcte(zcwz+"  Wrong file format! Could not get flags.",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju({"Code":zfhs["RfErr_BadData"],"Description":"Wrong file format : Could not get flags","sibErr":"LocalErr"
}
,zfkb);}return false;}zbcw=zbcw["u_char"];zcte(zcwz+".  flags="+zbcw,zwf,zctf["INFO"]);if(zbcw&zfid.enIntegrityCheck){zcte(zcwz+"  enIntegrityCheck!",zwf,zctf["INFO"]);var zfkd=new zfke(zfjx);var zfkf=zfkd.zfkg(true);if(!zfkf){zcte(zcwz+"  enIntegrityCheck FAILED!",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju({"Code":zfhs["RfErr_BadData"],"Description":"enIntegrityCheck failed!","sibErr":"LocalErr"
}
,zfkb);}return false;}}var zfkh=true;if(zbcw&zfid.enEncrypted){zcte(zcwz+"  enIntegrityCheck ENCRYPTED!",zwf,zctf["INFO"]);if(zyr==""){if(typeof(zfju)!=zfhx){zfju({"Code":zcud["SibTErr_AuthRejected"],"Description":"Password is required","sibErr":"LocalErr"
}
,zfkb);}return false;}var zfkd=new zfki(zfkd,zyr);zfkd.zfkj=true;var zfkk=zfkd;var zfkl=zfjv.zfjj(zasi,zcwo,zyr);if(zfkl["key"]&&zfkl["salt"]){zfkd.zfkm(zfkl["salt"],zasi,zcwo);zfkd.zfkn(zfkl["key"],zasi,zcwo);zfkd.zfko(zfkl["iterations"],zasi,zcwo);}
zfkd.zfkg(true,zasi,zcwo,function zfkp(){zcte(zcwz+" okBack ->",zwf,zctf["INFO"]);if(zbcw&zfid.enZipped){zcte(zcwz+" ZIPPED!",zwf,zctf["INFO"]);}
zcte(zcwz+" After zip. Push to memoryStream.",zwf,zctf["INFO"]);var zfkq=new Array();var zdws={"u_char":""}
;while(zfkd.zfkc(zdws)){var zagw=zdws["u_char"];zfkq.push(zagw);}
zcte(zcwz+" Try to unzip memorystream. Length="+zfkq.length,zwf,zctf["INFO"]);var zfkr=zfks(zfkq);zcte(zcwz+" --- OK - opened.",zwf,zctf["INFO"]);if(zfkr==-1){if(typeof(zfju)!=zfhx){zfju({"Code":zfhs["RfErr_AuthRejected"],"Description":"Wrong master password","sibErr":"LocalErr"
}
,zfkb);}return false;}else if(zfkr==-2){if(typeof(zfju)!=zfhx){zfju({"Code":-2,"Description":"Pako.unzip. Maximum call stack size exceeded","sibErr":"LocalErr"
}
,zfkb);}return false;}try{var zfkt=JSON.parse(zfkr);}
catch(zdn){zcte(zcwz+" End of data='"+zfkr.substring(zfkr.length-150)+"'",zwf,zctf["FUNC_INOUT"]);if(typeof(zfju)!=zfhx){zfju({"Code":zfhs["RfErr_BadData"],"Description":"Exception while JSON.Parse: "+zdn.toString()+".  End of data:  ..."+zfkr.substring(zfkr.length-50),"sibErr":"LocalErr"
}
,zfkb);}return false;}var zfku=(new Date).getTime();var zfkv=zfku-zfjw;zcte(zcwz+"  <- TIME="+zfkv+"ms.",zwf,zctf["FUNC_INOUT"]);if(typeof(zfjt)!=zfhx){zfjt(zcue);}
return true;},function zfkw(zcpb){zfju(zcpb);return false;}
);return;}else{zcte(zcwz+" NOT encrypted!",zwf,zctf["INFO"]);}
};var zfkb=undefined;zfig.prototype.zfkx=function(src,zasi,zcwo,zyr,zfjd,zfky,zfjt,zfju,algo,zfkz){try{var zcwz="EncodeZipOFSBytes";var zfla="CRfOneFileSys."+zcwz;zcte("-> "+zfla+" account='"+zcwo+"' src.length(json BYTES)="+src.length,zwf,zctf["FUNC_INOUT"]);zfkb={"filename":zasi,"password":zyr,"initialBytes":src}
;var zfjw=(new Date).getTime();var zflb=new zfjy();var zflc="onefile1";zflc=zavo.zcxt(zflc);if(!zflb.zfld(zflc,8)){zcte(zcwz+" Could not write onefile1.",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"Could not write onefile1","sibErr":"LocalErr"
}
,zfkb);}return;}zcte(zfla+" [ByteStream]: wrote signature 'onefile1'",zwf,zctf["INFO"]);var zflf=zyr!="";var zbcw=(zfid.enIntegrityCheck|zfid.enZipped);if(zflf){zbcw|=zfid.enEncrypted;}
if(!zflb.zflg(zbcw)){zcte(zcwz+"  Could not write flags.",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"Could not write flags","sibErr":"LocalErr"
}
,zfkb);}return;}zcte(zfla+" [ByteStream]: wrote flags='"+zbcw+"'",zwf,zctf["INFO"]);var zflh=(zbcw&zfid.enIntegrityCheck)!=0;var zfli=(zbcw&zfid.enEncrypted)!=0;var zflj=(zbcw&zfid.enZipped)!=0;zcte(zfla+" isIntegrityCheck="+zflh+", isEncrypted="+zfli+", isZipped="+zflj,zwf,zctf["INFO"]);var zfkd=zflb;if(zflh){zfkd=new zfke(zfkd);zfkd.zflk();}
zcte(zfla+" IntegrityCheck PASSED. [ByteStream.buf]:"+zflb.zfll.join(),zwf,zctf["INFO"]);if(zfli){zfkd=new zfki(zfkd,zyr);var zfkk=zfkd;zfkd.zflm(zasi,zcwo);zfkd.zflk(zasi,zcwo,zfjd,algo,zfkz);}
zcte(zfla+" Wrote encryption headers and garbage",zwf,zctf["INFO"]);var zfln=pako.gzip(new Uint8Array(src));zcte(zfla+" GZIP json bytes: zipped length="+zfln.length+" unzipped length="+src.length,zwf,zctf["INFO"]);var zflo=zavo.zawf(src);zfkb["json"]=zflo;var zflp=pako.ungzip(zfln);var zflq=zavo.zawf(new Uint8Array(zflp));if(zflo!=zflq){zcte(zfla+" ZIP-UNZIP FAILED! initalStr.length="+zflo.length+" strDataTest.length="+zflq.length,zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"TEST ZIP-UNZIP FAILED!","sibErr":"LocalErr"
}
,zfkb);}return;}zcte(zfla+" TEST of GZIP PASSED!",zwf,zctf["INFO"]);zfkb["zipped"]=zfln;if(zfln.length>1000){zcte(zfla+" ZIPPED. Length="+zfln.length,zwf,zctf["INFO"]);}
else{zcte(zfla+" ZIPPED. Length="+zfln.length+"  DATA="+zfln,zwf,zctf["INFO"]);}
zcte(zfla+" Wrote(and encode) zipped json to encrypted stream.",zwf,zctf["INFO"]);zfkd.zfld(zfln,zfln.length);zfkd.zflr();var zfew=zfkd.zfls();zcte("CRfOneFileSys."+zcwz+" buffer.length="+zfew.length,zwf,zctf["INFO"]);var zfjc=zfkk.zflt(zasi,zcwo);var key=zfkk.zflu(zasi,zcwo);var zfas=zfkk.zflv(zasi,zcwo);this.zfjb(zfjc,key,zfas,zasi,zcwo,zyr);zfkb["result"]=zfew;var zfku=(new Date).getTime();var zfkv=zfku-zfjw;zcte("CRfOneFileSys."+zcwz+"  <- TIME="+zfkv+"ms.",zwf,zctf["FUNC_INOUT"]);this.zfjs(zfew,zyr,function zflw(zhw){if(typeof(zfjt)!=zfhx){zfjt(zfew);}
},function zflx(zdq){if(typeof(zfju)!=zfhx){zfju(zdq);}
},zasi,zcwo);return;}catch(zhj){zcte("ERROR  EncodeZipOFSBytes: "+zhj,zwf,zctf["EXCEPTION"]);if(typeof(zfju)!=zfhx){zfju({"Code":zcud["SibTErr_CatchedException"],"Description":zhj.toString(),"sibErr":"LocalErr"
}
);}return;}};zfig.prototype.zfly=function(src,zasi,zcwo,zyr,zfky,zfjt,zfju){try{zfjv=this;var zcwz="DecodeUnZipOFSBytes";zcte(zcwz+" FILE='"+zasi+"' Account='"+zcwo+"' src.length="+src.length,zwf,zctf["FUNC_INOUT"]);if(src.length>150){if(src.join){zcte(zcwz+" src first 300='"+src.join().substr(0,300)+"'",zwf,zctf["FUNC_INOUT"]);zcte(zcwz+" src last 300='"+src.join().substr(src.join().length-300,src.join().length)+"'",zwf,zctf["FUNC_INOUT"]);}
}var zfjw=(new Date).getTime();var zfjx=new zfjy(src);var zfjz=new Array(8);zfjx.zfka(zfjz,8);zfjz=zfky?zavo.zawf(zfjz):zfjz.join('');if(zfjz!="onefile1"){zcte(zcwz+" Wrong file format! Could not read onefile1.",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju({"Code":zfhs["RfErr_BadData"],"Description":"Wrong file format : Could not read onefile1","sibErr":"LocalErr"
}
);}return false;}var zbcw={"u_char":""};if(!zfjx.zfkc(zbcw)){zcte(zcwz+"  Wrong file format! Could not get flags.",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju({"Code":zfhs["RfErr_BadData"],"Description":"Wrong file format : Could not get flags","sibErr":"LocalErr"
}
);}return false;}zbcw=zbcw["u_char"];zbcw=zfky?zbcw:zbcw.charCodeAt(0);zcte(zcwz+".  flags="+zbcw,zwf,zctf["INFO"]);if(zbcw&zfid.enIntegrityCheck){zcte(zcwz+"  enIntegrityCheck!",zwf,zctf["INFO"]);var zfkd=new zfke(zfjx);var zfkf=zfkd.zfkg(zfky);if(!zfkf){zcte(zcwz+"  enIntegrityCheck FAILED!",zwf,zctf["SPECIAL_CASE"]);if(typeof(zfju)!=zfhx){zfju({"Code":zfhs["RfErr_BadData"],"Description":"enIntegrityCheck failed!","sibErr":"LocalErr"
}
);}return false;}}var zfkh=true;if(zbcw&zfid.enEncrypted){zcte(zcwz+"  enIntegrityCheck ENCRYPTED!",zwf,zctf["INFO"]);if(zyr==""){if(typeof(zfju)!=zfhx){zfju({"Code":zcud["SibTErr_AuthRejected"],"Description":"Password is required","sibErr":"LocalErr"
}
);}return false;}var zfkd=new zfki(zfkd,zyr);zfkd.zfkj=true;var zfkk=zfkd;var zfkl=zfjv.zfjj(zasi,zcwo,zyr);if(zfkl["key"]&&zfkl["salt"]){zfkd.zfkm(zfkl["salt"],zasi,zcwo);zfkd.zfkn(zfkl["key"],zasi,zcwo);zfkd.zfko(zfkl["iterations"],zasi,zcwo);}
zfkd.zfkg(zfky,zasi,zcwo,function zfkp(){zcte(zcwz+" okBack ->",zwf,zctf["INFO"]);if(zbcw&zfid.enZipped){zcte(zcwz+" ZIPPED!",zwf,zctf["INFO"]);}
zcte(zcwz+". We already read headers and garbage bytes. Here goes real data...",zwf,zctf["INFO"]);var zfkq=new Array();var zdws={"u_char":""}
;while(zfkd.zfkc(zdws)){var zagw=zdws["u_char"];zfkq.push(zagw);}
zcte(zcwz+" After push to memoryStream.",zwf,zctf["INFO"]);if(zfkq.length>150){zcte(zcwz+" encrypted!  first 300='"+zfkq.join().substr(0,300)+"'",zwf,zctf["FUNC_INOUT"]);zcte(zcwz+" encrypted!  last 300='"+zfkq.join().substr(zfkq.join().length-300,zfkq.join().length)+"'",zwf,zctf["FUNC_INOUT"]);}
if(zfkh&&!zfky){for(var zcw=0;zcw<zfkq.length;zcw++){zfkq[zcw]=zfkq[zcw].charCodeAt(0);}
}zcte(zcwz+" Try to unzip memorystream. Length="+zfkq.length,zwf,zctf["INFO"]);var zfkr=zfks(zfkq);zcte(zcwz+" --- OK - opened.",zwf,zctf["INFO"]);if(zfkr==-1){if(typeof(zfju)!=zfhx){zfju({"Code":zfhs["RfErr_AuthRejected"],"Description":"Wrong master password","sibErr":"LocalErr"
}
);}return false;}else if(zfkr==-2){if(typeof(zfju)!=zfhx){zfju({"Code":-2,"Description":"Maximum call stack size exceeded","sibErr":"LocalErr"
}
);}return false;}var zflz=zfkk.zflt(zasi,zcwo);var zfma=zfkk.zflu(zasi,zcwo);var zfmb=zfkk.zflv(zasi,zcwo);zfjv.zfjb(zflz,zfma,zfmb,zasi,zcwo,zyr);var zfku=(new Date).getTime();var zfkv=zfku-zfjw;zcte(zcwz+"  <- TIME="+zfkv+"ms.",zwf,zctf["FUNC_INOUT"]);if(typeof(zfjt)!=zfhx){zfjt(zcue,zfkr);}
return true;},function zfkw(zcpb){zfju(zcpb);return false;}
);return;}else{zcte(zcwz+" NOT encrypted!",zwf,zctf["INFO"]);}
if(zbcw&zfid.enZipped){zcte(zcwz+" ZIPPED!",zwf,zctf["INFO"]);}
var zfkq=new Array();var zdws={"u_char":""};while(zfkd.zfkc(zdws)){var zagw=zdws["u_char"];zfkq.push(zagw);}
if(zfkh&&!zfky){for(var zcw=0;zcw<zfkq.length;zcw++){zfkq[zcw]=zfkq[zcw].charCodeAt(0);}
}var zfkr=zfks(zfkq);zcte(zcwz+" --- OK - opened.",zwf,zctf["INFO"]);if(zfkr==-1){if(typeof(zfju)!=zfhx){zfju({"Code":zfhs["RfErr_AuthRejected"],"Description":"Wrong master password","sibErr":"LocalErr"
}
);}return false;}else if(zfkr==-2){if(typeof(zfju)!=zfhx){zfju({"Code":-2,"Description":"Maximum call stack size exceeded","sibErr":"LocalErr"
}
);}return false;}var zfku=(new Date).getTime();var zfkv=zfku-zfjw;zcte(zcwz+"  <- TIME="+zfkv+"ms.",zwf,zctf["FUNC_INOUT"]);if(typeof(zfjt)!=zfhx){zfjt(zcue,zfkr);}
return true;}catch(zhj){zcte("ERROR  DecodeUnZipOFSBytes: "+zhj,zwf,zctf["EXCEPTION"]);if(typeof(zfju)!=zfhx){zfju({"Code":zcud["SibTErr_CatchedException"],"Description":zhj.toString(),"sibErr":"LocalErr"
}
);}return false;}};function zfks(zafb){try{zcte("SibOpenZipStreamRead  ->",zwf,zctf["FUNC_INOUT"]);var zfjw=(new Date).getTime();var zfmc=new Uint8Array(zafb);zcte("SibOpenZipStreamRead binData.byteLength="+zfmc.byteLength,zwf,zctf["INFO"]);zcte("SibOpenZipStreamRead START!",zwf,zctf["INFO"]);var data=pako.ungzip(zfmc);if(!data){return-1;}
var zfmd=zfhu.zawf(new Uint8Array(data));var zfku=(new Date).getTime();var zfkv=zfku-zfjw;zcte("SibOpenZipStreamRead <- FINISH! UnZip time="+zfkv+"ms.",zwf,zctf["FUNC_INOUT"]);return zfmd;}
catch(zhj){zcte("ERROR  SibOpenZipStreamRead: "+zhj,zwf,zctf["INFO"]);if(zhj.name=="RangeError"){return-2;}
else{return-1;}}};function zfjy(src){this.zfme=typeof(src)!=zfhx?src.length:8192;this.zfll=typeof(src)!=zfhx?src:[];this.zfmf=0;this.zfmg=null;this.zfmh=false;this.zfmi=false;this.zfkj=false;this.zfmj=0;this.zfmk=0;this.zfml=-1;}
;zfjy.prototype.zfls=function(){return this.zfll;}
;zfjy.prototype.zfmm=function(){if(this.zfmg==null){this.zfmg=new Array();}
for(var zcw=0;zcw<this.zfmf;zcw++){this.zfmg.push(this.zfll[zcw]);}
this.zfll=new Array(this.zfme);this.zfmf=0;};zfjy.prototype.zflr=function(){if(this.zfmg!=null){this.zfmm();this.zfll=this.zfmg;this.zfmg=null;}
this.zfll.length=this.zfmk;this.zfmh=false;this.zfml=-1;this.zfmk=0;this.zfmj=0;this.zfmi=false;return true;}
;zfjy.prototype.zfld=function(target,zalb,zfmn){var zehs=typeof(zfmn)!=zfhx?zfmn:0;if(zehs+zalb>target.length){return false;}
for(var zcw=0;zcw<zalb;zcw++){if(!this.zflg(target[zehs+zcw])){return false;}
}return true;};zfjy.prototype.zflg=function(zfmo){if(this.zfmf>=this.zfme){this.zfmm();}
this.zfll[this.zfmf++]=zfmo;this.zfmk++;return true;}
;zfjy.prototype.zfka=function(zage,zalb,zfmn){var zehs=typeof(zfmn)!=zfhx?zfmn:0;if(zehs+zalb>zage.length){return false;}
for(var zcw=0;zcw<zalb;zcw++){var zfmo={"u_char":zage[zehs+zcw]}
;if(!this.zfkc(zfmo)){zcte("ByteStream.GetBytes. Return false. <-",zwf,zctf["SPECIAL_CASE"]);return false;}
zage[zehs+zcw]=zfmo["u_char"];}return true;};zfjy.prototype.zfkc=function(zfmp){zfmp.u_char=0;if(this.zfml>=0){zfmp.u_char=this.zfml;this.zfml=-1;this.zfmk++;return true;}
if(this.zfmh){zcte("ByteStream.GetByte. Return false. Unexpected EOF",zwf,zctf["SPECIAL_CASE"]);return false;}
if(this.zfmf>=this.zfme){this.zfmh=true;zcte("ByteStream.GetByte. Return false. End of file at pos: "+this.zfmk,zwf,zctf["SPECIAL_CASE"]);return false;}
zfmp.u_char=this.zfll[this.zfmf++];this.zfmk++;if(zfmp.u_char=='\n'){this.zfmj++;}
return true;};var zfmq={"enCRC32":0,"enMD5":1,"enSHA1":2,"enSHA256":3,"EnAlgorithm_Max":100
}
;function zfke(src,zfmr){this.zfms=-1;this.zfmt=typeof(zfmr)!=zfhx?zfmr:8192;this.zfmu=0;this.zfme=0;this.zfmf=0;this.zfmv=null;this.zfmi=false;this.zfmh=false;this.zfml=-1;this.zfmk=0;this.zfmj=0;this.zfkj=false;this.zfmw=src;this.zfmx=false;}
;zfke.prototype.zdft=function(src){if(src){this.zfmw=new zfke();this.zfmw.zfmh=src.m_bEOF;this.zfmw.zfmi=src.m_bIsOpen;this.zfmw.zfml=src.m_nUngetChar;this.zfmw.zfmk=src.m_nCurPosIn;this.zfmw.zfmj=src.m_nCurLineIn;this.zfmw.zfmf=src.m_buf_ix;this.zfmw.zfme=src.m_buf_len;this.zfmw.zfll=src.buf;}
};zfke.prototype.zfmy=function(zfms){this.zfmu=0;switch(zfms){case zfmq["enCRC32"]:this.zfmu=4;break;case zfmq["enMD5"]:this.zfmu=16;break;case zfmq["enSHA1"]:break;case zfmq["enSHA256"]:break;default:return false;}
return true;};zfke.prototype.zfmz=function(){this.zfmh=false;this.zfml=-1;this.zfmk=0;this.zfmj=0;this.zfmi=false;}
;zfke.prototype.zfna=function(){this.zfmz();this.zfmi=true;this.zfkj=false;return true;}
;zfke.prototype.zfnb=function(){this.zfmz();this.zfmi=true;this.zfkj=true;return true;}
;zfke.prototype.zfkg=function(zfky){this.zfnb();this.zfmx=zfky;this.zfme=0;this.zfmf=0;this.zfmv=[];var zfnc={"u_char":""}
;if(!this.zfmw.zfkc(zfnc)){}zfnc=zfnc["u_char"];zfnc=this.zfmx?zfnc:zfnc.charCodeAt(0);this.zfms=zfnc;if(this.zfms>=zfmq["EnAlgorithm_Max"]){return false;}
return this.zfmy(this.zfms);};zfke.prototype.zfkc=function(zfmp){if(this.zfml>=0){zfmp.u_char=this.zfml;this.zfml=-1;this.zfmk++;return true;}
zfmp.u_char=0;if(this.zfmh){return false;}if(this.zfmf>=this.zfme){if(!this.zfnd()){return false;}
}zfmp.u_char=this.zfmv[this.zfmf++];this.zfmk++;return true;}
;zfke.prototype.zfka=function(zage,zalb,zfmn){var zehs=typeof(zfmn)!=zfhx?zfmn:0;if(zehs+zalb>zage.length){return false;}
for(var zcw=0;zcw<zalb;zcw++){var zfmo={"u_char":zage[zehs+zcw]}
;if(!this.zfkc(zfmo)){return false;}zage[zehs+zcw]=zfmo["u_char"];}
return true;};zfke.prototype.zflk=function(){this.zfna();this.zfms=zfmq.enMD5;this.zfme=0;this.zfmf=0;this.zfmv=[];if(!this.zfmy(this.zfms)){return false;}
if(!this.zfmw.zflg(this.zfms)){return false;}this.zfmi=true;return true;}
;zfke.prototype.zflg=function(zfmo){this.zfmv[this.zfmf++]=zfmo;this.zfmk++;if(this.zfmf>=this.zfmt){if(!this.zfne()){return false;}
}return true;};zfke.prototype.zfld=function(target,zalb,zfmn){var zehs=typeof(zfmn)!=zfhx?zfmn:0;if(zehs+zalb>target.length){return false;}
for(var zcw=0;zcw<zalb;zcw++){if(!this.zflg(target[zehs+zcw])){return false;}
}return true;};zfke.prototype.zfnd=function(){var zcwz="CheckedStream.ReadBuffer";zcte(zfhv+zcwz+". this.m_buf_len="+this.zfme,zwf,zctf["FUNC_INOUT"]);var zfnf=new Array(4);if(!this.zfmw.zfka(zfnf,4)){zcte(zfhw+zcwz+".  Cannot get length of CheckedStream. Return FALSE.",zwf,zctf["FUNC_INOUT"]);return false;}
if(!this.zfmx){for(var zcw=0;zcw<zfnf.length;zcw++){zfnf[zcw]=zfnf[zcw].charCodeAt(0)&0xFF;}
}this.zfme=zawd.zfjr(zfnf,0);zcte(zcwz+". Length of CheckedStream(zipped) block_len_bytes=["+zfnf.join()+"]  this.m_buf_len="+this.zfme,zwf,zctf["INFO"]);if(this.zfme==0){this.zfmh=true;zcte(zfhw+zcwz+".  EOF. Return FALSE.",zwf,zctf["FUNC_INOUT"]);return false;}
var zfng=new Array(this.zfmu);if(!this.zfmw.zfka(zfng,this.zfmu)){zcte(zfhw+zcwz+".  Cannot get md5 HASH of CheckedStream (zipped). Return FALSE.",zwf,zctf["FUNC_INOUT"]);return false;}
var zfnh=new Array(this.zfmu);for(var zcw=0;zcw<zfng.length;zcw++){zfnh[zcw]=this.zfmx?zfng[zcw]:zfng[zcw].charCodeAt(0)&0xFF;}
this.zfmv=new Array(this.zfme);if(!this.zfmw.zfka(this.zfmv,this.zfme)){return false;}
var zfni=CryptoJS.MD5(CryptoJS.enc.Base64.parse(zawd.zcxv(this.zfmv)));var zcxr=zawd.zawe(CryptoJS.enc.Base64.stringify(zfni));for(var zgg=0;zgg<zcxr.length;zgg++){if(zcxr[zgg]!=zfnh[zgg]){zcte(zfhw+zcwz+".  MD5 compare hash error. Return FALSE.",zwf,zctf["FUNC_INOUT"]);return false;}
}this.zfmf=0;zcte(zfhw+zcwz+". Return TRUE",zwf,zctf["FUNC_INOUT"]);return true;}
;zfke.prototype.zfne=function(){var zcwz="CheckedStream.WriteBuffer";zcte(zfhv+zcwz+" this.m_buf_ix="+this.zfmf,zwf,zctf["INFO"]);var zfnf=zawd.zfji(this.zfmf);if(!this.zfmw.zfld(zfnf,zfnf.length)){return false;}
zcte(zcwz+". block_len_bytes="+zfnf.join(),zwf,zctf["INFO"]);var zfnj=new Array(this.zfmf);zawd.zfnk(this.zfmv,0,zfnj,0,this.zfmf);var zfnl=zawd.zcxv(zfnj);var zqb=CryptoJS.enc.Base64.parse(zfnl);var zfnm=CryptoJS.MD5(zqb);var base64=CryptoJS.enc.Base64.stringify(zfnm);var zcxr=zawd.zawe(base64);if(!this.zfmw.zfld(zcxr,this.zfmu)){return false;}
zcte(zcwz+". wrote md5 hash of data to ByteStream",zwf,zctf["INFO"]);if(!this.zfmw.zfld(this.zfmv,this.zfmf)){return false;}
this.zfmf=0;return true;};zfke.prototype.zflr=function(){if(!this.zfmi){return true;}
if(!this.zfkj){if(!this.zfne()){return false;}if(!this.zfmw.zfld([0,0,0,0],4)){return false;}
}if(!this.zfmw.zflr()){return false;}this.zfme=0;this.zfmf=0;this.zfmv=null;return true;}
;zfke.prototype.zfls=function(){return this.zfmw.zfls();}
;var zfnn={"PBKDF1_AES_SHA1 AES-256-CBC":0,"PBKDF2_HMAC_SHA1 AES-256-CBC":1,"PBKDF2_HMAC_SHA256 AES-256-CBC":2,"PBKDF2_HMAC_SHA512 AES-256-CBC":3,"PBKDF2_HMAC_SHA512 AES-256-GCM":4
}
;function zfki(src,zfno){this.zfnp=typeof(zfno)!=zfhx?zfno:"";this.zli=null;this.zfnq=[];this.zfme=0;this.zfmf=0;this.zfnr=false;this.zfmk=0;this.zfns=false;this.zfkj=false;this.zfmi=false;this.zfmh=false;this.zfml=-1;this.zfmk=0;this.zfmj=0;this.zfnt=false;this.zfmw=src;this.zfnu=16;this.zfnv=32;this.zfnw=16;this.zfmx=false;this.zfnx={}
;this.zfny={};this.zfnz={};};zfki.prototype.zfko=function(zfjd,zasi,zcwo){if(!this.zfnz[zcwo]){this.zfnz[zcwo]={}
;}this.zfnz[zcwo][zasi]=zfjd;};zfki.prototype.zflv=function(zasi,zcwo){if(!this.zfnz[zcwo]){return 0;}
return this.zfnz[zcwo][zasi];};zfki.prototype.zfkm=function(zfjc,zasi,zcwo){if(!this.zfnx[zcwo]){this.zfnx[zcwo]={}
;}this.zfnx[zcwo][zasi]=zfjc;};zfki.prototype.zflt=function(zasi,zcwo){if(!this.zfnx[zcwo]){return[];}
return this.zfnx[zcwo][zasi];};zfki.prototype.zfkn=function(key,zasi,zcwo){if(!this.zfny[zcwo]){this.zfny[zcwo]={}
;}this.zfny[zcwo][zasi]=key;};zfki.prototype.zflu=function(zasi,zcwo){if(!this.zfny[zcwo]){return null;}
return this.zfny[zcwo][zasi];};zfki.prototype.zflk=function(zasi,zcwo,zfjd,zfoa,zfkz){try{zfkz=typeof(zfkz)=="undefined"?false:zfkz;zfoa=typeof(zfoa)=="undefined"?zfnn["PBKDF2_HMAC_SHA256 AES-256-CBC"]:zfoa;var self=this;self.zfna();var zflc="gsencst1";zflc=zavo.zcxt(zflc);self.zfmw.zfld(zflc,8);zcte("EncryptedStream.OpenWrite. [CheckedStream] Put string *gsencst1*. buffer["+self.zfmw.zfmv.length+"]="+self.zfmw.zfmv.join(),zwf,zctf["INFO"]);var zfob=zfkz?1:0;self.zfmw.zflg(zfob);zcte("EncryptedStream.OpenWrite. [CheckedStream] Put noPaddingByte="+zfob,zwf,zctf["INFO"]);self.zfmw.zflg(zfoa);zcte("EncryptedStream.OpenWrite. [CheckedStream] Put Algorithm="+zfoa,zwf,zctf["INFO"]);var zfoc=!zfjd?zfib:zfjd;var zfjh=zawd.zfji(zfoc);zcte("EncryptedStream.OpenWrite. [CheckedStream] Put 4 bytes rounds=' "+zfjh+"'  (int)iterations=' "+zfjd+"'",zwf,zctf["INFO"]);self.zfmw.zfld(zfjh,zfjh.length);zcte("EncryptedStream.OpenWrite. [CheckedStream] buffer["+self.zfmw.zfmv.length+"]="+self.zfmw.zfmv.join(),zwf,zctf["INFO"]);self.zfmw.zflg(self.zfnu);zcte("EncryptedStream.OpenWrite. [CheckedStream] Put salt.length="+self.zfnu,zwf,zctf["INFO"]);var zfjc=zawd.zfod(self.zfnu);self.zfkm(zfjc,zasi,zcwo);self.zfko(zfoc,zasi,zcwo);self.zfmw.zfld(zfjc,self.zfnu);if(zfkz){self.zfmw.zflg(zfie.enNoPadding);zcte("EncryptedStream.OpenWrite. [CheckedStream] Put NoPadding byte=1",zwf,zctf["INFO"]);}
zcte("EncryptedStream.OpenWrite. [CheckedStream]  buffer=["+self.zfmw.zfmv.length+"]="+self.zfmw.zfmv.join(),zwf,zctf["INFO"]);var zfoe=1;switch(zfoa){case zfnn["PBKDF2_HMAC_SHA256 AES-256-CBC"]:zfoe=2;break;case zfnn["PBKDF2_HMAC_SHA512 AES-256-CBC"]:case zfnn["PBKDF2_HMAC_SHA512 AES-256-GCM"]:zfoe=3;break;}
var zfof=new RfapiJS["Pbkdf2"](zfoe,zfjc,self.zfnp,zfoc);var zfog=new Array(64);zfog=zfof.zfka(64);self.zfkn(zfog,zasi,zcwo);self.zfme=0;self.zfmf=0;self.zfnr=false;self.zfmi=true;var key=new Array(32);var zfoh=new Array(16);zawd.zfnk(zfog,0,key,0,32);zawd.zfnk(zfog,32,zfoh,0,16);var zfoi=CryptoJS.enc.Hex.parse(zawd.zfiu(key));var zfoj=CryptoJS.enc.Hex.parse(zawd.zfiu(zfoh));self.zfoi=zfoi;self.zfoj=zfoj;var zfok={}
;zfok["iv"]=zfoj;zfok["mode"]=CryptoJS.mode.CBC;zfok["padding"]=zfkz?CryptoJS.pad.NoPadding:CryptoJS.pad.Pkcs7;self.zfnt=zfkz?true:false;self.zli=CryptoJS.algo.AES.createEncryptor(zfoi,zfok);var zfol=self.zfnv==0
?0
:self.zfnv<=32
?zawd.zfom()%self.zfnv:zawd.zfom()%(self.zfnv-32)+32;var zfon=0xAA;for(var zcw=0;zcw<zfol;zcw++){var zfoo=zawd.zfop(zawd.zfom());if(zawd.zfop(zfoo^zfon)==0){zfoo=zawd.zfop(zawd.zfom());if(zawd.zfop(zfoo^zfon)==0){zfoo++;}
}if(!self.zflg(zfoo)){return false;}zfon=zawd.zfop(zfon^zfoo);}
self.zflg(zfon);zcte("EncryptedStream.OpenWrite. Put GARBAGE["+zfol+"] and  pattern = "+zfon,zwf,zctf["INFO"]);zcte("EncryptedStream.OpenWrite. Garbage was written exit-> EncryptedStream = "+self.zfnq.join(),zwf,zctf["INFO"]);return true;}
catch(zhj){zwe("EXCEPTION in EncryptedStream.OpenWrite"+zhj.toString(),zwf);}
};zfki.prototype.zfkg=function(zfky,zasi,zcwo,zfjt,zfju){try{var self=this;var zcwz="EncryptedStream.OpenRead";function zfoq(zfor,zfog){zcte(" PBkdf_callback -> ",zwf,zctf["INFO"]);if(zfor!=100){return;}
try{self.zfkn(zfog,zasi,zcwo);var key=new Array(32);var zfoh=new Array(16);zawd.zfnk(zfog,0,key,0,32);zawd.zfnk(zfog,32,zfoh,0,16);var zfoi=CryptoJS.enc.Hex.parse(zawd.zfiu(key));var zfoj=CryptoJS.enc.Hex.parse(zawd.zfiu(zfoh));self.zfoi=zfoi;self.zfoj=zfoj;}
catch(zhj){zwe("EXCEPTION in EncryptedStream.OpenRead.PBkdf_Callback[1] "+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in EncryptedStream.OpenRead.PBkdf_Callback[1]:"+zhj.toString()}
);}return false;}try{var zfos={};zfos["iv"]=zfoj;zfos["mode"]=CryptoJS.mode.CBC;zfos["padding"]=CryptoJS.pad.Pkcs7;if((zxk&zfie.enNoPadding)!=0){zfos["padding"]=CryptoJS.pad.NoPadding;self.zfnt=true;}
self.zli=CryptoJS.algo.AES.createDecryptor(zfoi,zfos);self.zfme=0;self.zfmf=0;self.zfnr=false;zcte("PBkdf_callback. Stream header OK",zwf,zctf["INFO"]);var zfot=1024*1024;var zfon=0xAA;var zfou=0;}
catch(zhj){zwe("EXCEPTION in EncryptedStream.OpenRead.PBkdf_Callback[2] "+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in EncryptedStream.OpenRead.PBkdf_Callback[2]:"+zhj.toString()}
);}return false;}var zfov=[];for(zfou=0;zfou<zfot;zfou++){var zfoo={"u_char":""}
;if(!self.zfkc(zfoo)){zcte("[READ_ERROR] --- NO - stream too short!",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"--- NO - stream too short!"}
);}return false;}zfoo=zfoo["u_char"];zfov.push(zfoo);if((zfoo^zfon)==0){zcte("PBkdf_callback. garbage_bytes_read  BREAK. Return TRUE.",zwf,zctf["INFO"]);break;}
if(zfou==zfot-1){zcte("[READ_ERROR] max_garbage_bytes! RETURN FALSE!",zwf,zctf["INFO"]);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"garbage_bytes_read RETURN FALSE!"}
);}return false;}zfon=(zfon^zfoo);}zcte("OK. GARBAGE bytes skipped ["+zfov.length+"] = "+zfov.join(),zwf,zctf["INFO"]);zfjt();return true;}
;zcte(zcwz+"  ->",zwf,zctf["INFO"]);self.zfnb();self.zfmx=zfky;try{var zflc=new Array(8);for(var zcw=0;zcw<8;zcw++){var zfow={"u_char":""}
;self.zfmw.zfkc(zfow);zflc[zcw]=zfow["u_char"];}var zfox=self.zfmx?zavo.zawf(zflc):zflc.join('');if(zfox!="gsencst1"){if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"Wrong file format. Bad stream header != gsencst1"}
);}return false;}}catch(zhj){zwe("EXCEPTION in EncryptedStream.OpenRead[1] "+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in EncryptedStream.OpenRead[1]:"+zhj.toString()}
);}return false;}try{var zfoy={"u_char":""};if(!self.zfmw.zfkc(zfoy)){if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"Wrong file format. Bad stream header. ext_header_len"}
);}return false;}zfoy=self.zfmx?zfoy["u_char"]:zfoy["u_char"].charCodeAt(0);var zfoz={"u_char":""}
;if(!self.zfmw.zfkc(zfoz)){if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"Wrong file format. Bad stream header. kdf_algorithm"}
);}return false;}var zfpa=self.zfmx?zfoz["u_char"]:zfoz["u_char"].charCodeAt(0);if(!(zfpa==zfnn["PBKDF2_HMAC_SHA256 AES-256-CBC"]||zfpa==zfnn["PBKDF2_HMAC_SHA512 AES-256-CBC"])){if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"Unknown ecryption method"}
);}return false;}}catch(zhj){zwe("EXCEPTION in EncryptedStream.OpenRead[2] "+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in EncryptedStream.OpenRead[2]:"+zhj.toString()}
);}return false;}try{var zfjh=new Array(4);if(!self.zfmw.zfka(zfjh,4)){if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"Cannot get hash rounds"}
);}return false;}if(!self.zfmx){for(var zcw=0;zcw<zfjh.length;zcw++){zfjh[zcw]=zfjh[zcw].charCodeAt(0);}
}var zfoc=zawd.zfjr(zfjh,0);if(zfoc==0||zfoc>512*1024){if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"Wrong ecryption parameters: hash rounds"}
);}return false;}}catch(zhj){zwe("EXCEPTION in EncryptedStream.OpenRead[3] "+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in EncryptedStream.OpenRead[3]:"+zhj.toString()}
);}return false;}try{var zfpb={"u_char":""};if(!self.zfmw.zfkc(zfpb)){if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"Wrong ecryption parameters: Cannot get salt length."}
);}return false;}zfpb=self.zfmx?zfpb["u_char"]:zfpb["u_char"].charCodeAt(0);var zfjc=new Array(zfpb);if(!self.zfmw.zfka(zfjc,zfpb)){if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"Wrong ecryption parameters: Cannot get salt bytes."}
);}return false;}if(!self.zfmx){for(var zcw=0;zcw<zfjc.length;zcw++){zfjc[zcw]=zfjc[zcw].charCodeAt(0)&0xFF;}
}}catch(zhj){zwe("EXCEPTION in EncryptedStream.OpenRead[4] "+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in EncryptedStream.OpenRead[4]:"+zhj.toString()}
);}return false;}try{var zxk=0;var zfpc=new Array(zfoy);if(!self.zfmw.zfka(zfpc,zfoy)){if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"Wrong ecryption parameters: Cannot get reserved bytes."}
);}return false;}zxk=zfpc[0];if((zfpa==zfnn["PBKDF1_AES_SHA1 AES-256-CBC"])||(zfpa==zfnn["PBKDF2_HMAC_SHA1 AES-256-CBC"])){if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"Wrong decryption parameters: Unsupported algorithm SHA1"}
);}return false;}zcte(zcwz+"  ALG='"+zfpa+"' SKIP='"+zfpc+"' Salt.length='"+zfpb+"' hash_rounds='"+zfoc+"'",zwf,zctf["INFO"]);}
catch(zhj){zwe("EXCEPTION in EncryptedStream.OpenRead[5] "+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in EncryptedStream.OpenRead[5]:"+zhj.toString()}
);}return false;}try{var zfpd=self.zflt(zasi,zcwo);var zfpe=self.zflu(zasi,zcwo);var zfpf=self.zflv(zasi,zcwo);var zfpg=false;if((zfpf==zfoc)&&zfpd){zfpg=zawd.zfph(zfpd,zfjc);}
}catch(zhj){zwe("EXCEPTION in EncryptedStream.OpenRead[6] "+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in EncryptedStream.OpenRead[6]:"+zhj.toString()}
);}return false;}try{if(zfpg&&zfpe){zcte(zcwz+" #####-- CACHED Salt and KEYS --##### ",zwf,zctf["INFO"]);zfoq(100,zfpe,zfjt,zfju);}
else{self.zfkm(zfjc,zasi,zcwo);self.zfko(zfoc,zasi,zcwo);var zfoe=1;switch(zfpa){case zfnn["PBKDF2_HMAC_SHA256 AES-256-CBC"]:zfoe=2;break;case zfnn["PBKDF2_HMAC_SHA512 AES-256-CBC"]:case zfnn["PBKDF2_HMAC_SHA512 AES-256-GCM"]:zfoe=3;break;}
var zfof=new RfapiJS["Pbkdf2"](zfoe,zfjc,self.zfnp,zfoc);zfof.zfka(64,zfoq,zfjt,zfju);}
}catch(zhj){zwe("EXCEPTION in EncryptedStream.OpenRead[7] "+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in EncryptedStream.OpenRead[7]:"+zhj.toString()}
);}return false;}return;}catch(zhj){zwe("EXCEPTION in EncryptedStream.OpenRead"+zhj.toString(),zwf);if(typeof(zfju)!=zfhx){zfju({"Code":zcud.SibTErr_LocalErr,"Description":"EXCEPTION in EncryptedStream.OpenRead:"+zhj.toString()}
);}}};zfki.prototype.zfpi=function(){var zcwz="EncryptedStream.FillReadBuf";this.zfnq=new Array(16);if(!this.zfnr){for(var zcw=0;zcw<16;zcw++){var zfmo={"u_char":""}
;if(!this.zfmw.zfkc(zfmo)){this.zfnr=true;this.zfme=zcw;break;}
this.zfnq[zcw]=this.zfmx?zfmo["u_char"]:zfmo["u_char"].charCodeAt(0)&0xFF;}
}if(!this.zfnr){var zqb=CryptoJS.enc.Base64.parse(zawd.zcxv(this.zfnq));var zfpj=this.zli.process(zqb);var zcxr=zawd.zawe(CryptoJS.enc.Base64.stringify(zfpj));if(!zcxr.length){this.zfpi();return;}
this.zfme=zcxr.length;this.zfnq=[];for(var zgg=0;zgg<zcxr.length;zgg++){this.zfnq.push(zcxr[zgg]);}
}else{this.zfns=true;var zep=0;while(typeof this.zfnq[zep]!=zfhx){zep++;}
this.zfnq.length=zep;var zqb=CryptoJS.enc.Base64.parse(zawd.zcxv(this.zfnq));var zfpj=this.zli.process(zqb);var zfpk=this.zli.finalize();zcte(zcwz+". *LAST_BLOCK* ciphertextFinal='"+zfpk+"'",zwf,zctf["INFO"]);if(zfpk.zfjz<0){var base64=CryptoJS.enc.Base64.stringify(zfpj);}
else{zfpk=zfpj.concat(zfpk);var base64=CryptoJS.enc.Base64.stringify(zfpk);}
var zcxr=zawd.zawe(base64);this.zfme=zcxr.length;zcte(zcwz+". *LAST_BLOCK* m_Encryptedbuffers["+this.zfnq.length+"] = "+this.zfnq.join()+"\n READ TRANSFORMED bytes='"+zcxr.join()+"'",zwf,zctf["INFO"]);this.zfnq=zcxr;}
};zfki.prototype.zfna=function(){this.zfkj=false;this.zfmh=false;this.zfml=-1;this.zfmk=0;this.zfmj=0;this.zfmi=true;return true;}
;zfki.prototype.zfnb=function(){this.zfkj=true;this.zfmh=false;this.zfml=-1;this.zfmk=0;this.zfmj=0;this.zfmi=true;return true;}
;zfki.prototype.zfpl=function(zfmp){if(this.zfme>0&&this.zfmf<this.zfme){zfmp.u_char=this.zfnq[this.zfmf++];this.zfmk++;return true;}
if(this.zfnr){zfmp.u_char=0;zcte(zfhw+" EncryptedStream.TryGetByteFromReadBuf. Last block.",zwf,zctf["INFO"]);return false;}
this.zfmf=0;zfmp.u_char=0;return false;};zfki.prototype.zfkc=function(zfmp){if(!this.zfpl(zfmp)){if(this.zfns){return false;}
try{this.zfpi();}catch(zhj){return false;}if(!this.zfpl(zfmp)){return false;}
}return true;};zfki.prototype.zflg=function(zfmo){var zcwz="EncryptedStream.PutByte";if(this.zfmf<this.zfnw){this.zfnq[this.zfmf++]=zfmo;return true;}
var zqb=CryptoJS.enc.Base64.parse(zawd.zcxv(this.zfnq));var zfpj=this.zli.process(zqb);var zcxr=zawd.zawe(CryptoJS.enc.Base64.stringify(zfpj));var zfpm=zcxr.length;var zfpn=[];for(var zcw=0;zcw<zcxr.length;zcw++){zfpn.push(zcxr[zcw]);}
if(zfpm>=32){zcte("UploadBuf encryption error",zwf,zctf["INFO"]);return false;}
if(!this.zfmw.zfld(zfpn,zfpm)){return false;}this.zfmf=0;this.zfnq.length=0;this.zfnq[this.zfmf++]=zfmo;return true;}
;zfki.prototype.zfld=function(target,zalb,zfmn){var zehs=typeof(zfmn)!=zfhx?zfmn:0;if(zehs+zalb>target.length){return false;}
for(var zcw=0;zcw<zalb;zcw++){if(!this.zflg(target[zehs+zcw])){return false;}
}return true;};zfki.prototype.zfls=function(){return this.zfmw.zfls();}
;zfki.prototype.zflr=function(){var zcwz="EncryptedStream.Close";zcte(zfhv+zcwz,zwf,zctf["INFO"]);if(!this.zfmi){return true;}
if(!this.zfkj){if(this.zfnt){var zfpo=16;var zfpp=(this.zfnv==0)?0
:(this.zfnv<=zfic)?(zawd.zfom()%this.zfnv):(zawd.zfom()%(this.zfnv-zfic)+zfic);var zfpq=parseInt(((this.zfmf+zfpp+zfpo-1)/zfpo))*zfpo;var zfpr=zfpq-this.zfmf;var zfll=zawd.zfod(zfpr);zcte(zcwz+". *NoPadding* put garbage to the end="+zfll.join(),zwf,zctf["INFO"]);for(var zcw=0;zcw<zfll.length;zcw++){this.zfnq.push(zfll[zcw]);this.zfmf++;}
}zcte(zcwz+". this.m_Encryptedbuffer="+this.zfnq.join(),zwf,zctf["INFO"]);var zqb=CryptoJS.enc.Base64.parse(zawd.zcxv(this.zfnq));var zfps=this.zli.process(zqb);var zfpt=this.zli.finalize();var zeju=CryptoJS.enc.Base64.stringify(zfps);var zfpu=CryptoJS.enc.Base64.stringify(zfpt);zcte(zcwz+". textPart='"+zfps.toString()+"' textFinal='"+zfpt+"'  textPart.sigBytes="+zfps.zfjz+" textFinal.sigBytes="+zfpt.zfjz,zwf,zctf["INFO"]);var zfpv=zfps.concat(zfpt);var base64=CryptoJS.enc.Base64.stringify(zfpv);var zcxr=zawd.zawe(base64);zcte(zcwz+". bytes='"+zcxr.join(),zwf,zctf["INFO"]);var zfpn=[];for(var zcw=0;zcw<zcxr.length;zcw++){zfpn.push(zcxr[zcw]);}
if(!this.zfmw.zfld(zfpn,zfpn.length)){zcte(zfhw+zcwz+"  this.m_src.PutBytes return false",zwf,zctf["INFO"]);return false;}
}this.zli=null;if(!this.zfmw.zflr()){zcte(zfhw+zcwz+"  this.m_src.Close return false",zwf,zctf["INFO"]);return false;}
this.zfme=0;this.zfmf=0;this.zfnq=[];zcte(zfhw+zcwz+" Correct return. TRUE.",zwf,zctf["INFO"]);return true;}
;zfki.prototype.zflm=function(zasi,zcwo){if(!this.zfnz[zcwo]){this.zfnz[zcwo]={}
;}this.zfnz[zcwo][zasi]=0;if(!this.zfnx[zcwo]){this.zfnx[zcwo]={}
;}this.zfnx[zcwo][zasi]=null;if(!this.zfny[zcwo]){this.zfny[zcwo]={}
;}this.zfny[zcwo][zasi]=null;};RfapiJS.CRfOneFileSys=zfig;}
).apply(RfapiJS);
