// Copyright (C) 1999-2017 Siber Systems Inc. All Rights Reserved.
var RfapiJS=RfapiJS||{}
;(function(){var zffr="1.17.3.13";var zak="March 13, 2017";var zcte=RfapiJS["traceJS"];var zcud=RfapiJS["SibErrType"];var zctf=RfapiJS["traceLevel"];var zfhs=RfapiJS["RfErrType"];var zawd=RfapiJS["utils"];var zwf="rf-pbkdf2.js";var zgzq={"SHA-1":1,"SHA-256":2,"SHA-512":3
}
;function zgzr(zfms,zfjc,zyr,zfjd){this.zgzs=0;this.zgzt=1;this.zgzu=null;this.zgzv=0;this.zgzw=0;this.zfms=zfms;this.salt=zfjc;this.zgzx=zfjd;this.zgzs=this.zfms==zgzq["SHA-256"]?32:64;this.zgzu=new Array(this.zgzs);this.password=zyr;}
;zgzr.prototype.zfka=function(zalb,zgzy,zfjt,zfju){var zgv=new Array(zalb);var zgzz=0;var zhaa=this.zgzw-this.zgzv;if(zhaa>0){if(zalb<zhaa){zawd.zfnk(this.zgzu,this.zgzv,zgv,0,zalb);this.zgzv+=zalb;if(typeof(zgzy)!="undefined"){zgzy(100,zgv,zfjt,zfju);}
return zgv;}zawd.zfnk(this.zgzu,this.zgzv,zgv,0,zhaa);this.zgzv=this.zgzw=0;zgzz+=zhaa;}
while(zgzz<zalb){var zhab=zalb-zgzz;this.zgzu=this.zhac(zgzy);if(zhab>this.zgzs){zawd.zfnk(this.zgzu,0,zgv,zgzz,this.zgzs);zgzz+=this.zgzs;}
else{zawd.zfnk(this.zgzu,0,zgv,zgzz,zhab);this.zgzv=zhab;this.zgzw=this.zgzs;if(typeof(zgzy)!="undefined"){zgzy(100,zgv,zfjt,zfju);}
return zgv;}}return zgv;};zgzr.prototype.zhad=function(zcw){var zcxr=new Array(4);zcxr[0]=zcw;zcxr[1]=0;zcxr[2]=0;zcxr[3]=0;if(true){var zhae=new Array(4);zhae[0]=zcxr[3];zhae[1]=zcxr[2];zhae[2]=zcxr[1];zhae[3]=zcxr[0];return zhae;}
return zcxr;};zgzr.prototype.zhac=function(zghr){zcte("Pbkdf2.prototype.Func ->",zwf,zctf["INFO"]);var zfjw=(new Date).getTime();var zhaf=new Array(this.salt.length+4);zawd.zfnk(this.salt,0,zhaf,0,this.salt.length);zawd.zfnk(this.zhad(this.zgzt),0,zhaf,this.salt.length,4);var zhag=this.zhah(zhaf);var zhai=zhag;var zhaj;for(var zcw=2;zcw<=this.zgzx;zcw++){zhaj=zhag.slice(0,zhag.length);zhag=this.zfms==zgzq["SHA-256"]?zawd.zawe(CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(CryptoJS.enc.Base64.parse(zawd.zcxv(zhaj)),this.password))):zawd.zawe(CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA512(CryptoJS.enc.Base64.parse(zawd.zcxv(zhaj)),this.password)));for(var zgg=0;zgg<this.zgzs;zgg++){zhai[zgg]=(zhai[zgg]^zhag[zgg]);}
}if(this.zgzt==4294967295){throw new DOMException("Derived key too long.");}
this.zgzt+=1;var zfku=(new Date).getTime();var zfkv=zfku-zfjw;zcte("Pbkdf2.prototype.Func <- TIME="+zfkv,zwf,zctf["INFO"]);return zhai;}
;zgzr.prototype.zhah=function(zhak){var zfnl=zawd.zcxv(zhak);var zqb=CryptoJS.enc.Base64.parse(zfnl);var hash=this.zfms==zgzq["SHA-256"]?CryptoJS.HmacSHA256(zqb,this.password):CryptoJS.HmacSHA512(zqb,this.password);var base64=CryptoJS.enc.Base64.stringify(hash);var zhal=zawd.zawe(base64);return zhal;}
;zgzr.prototype.zham=function(zhak,zhan){var zhao=zawd.zcxv(zhak);var zhap=sjcl.codec.base64.toBits(zhao);var zhaq=zhan.encrypt(zhap);var zhar=sjcl.codec.hex.fromBits(zhaq);var zhal=zawd.zfip(zhar);return zhal;}
;RfapiJS["Pbkdf2"]=zgzr;}).apply(RfapiJS);
