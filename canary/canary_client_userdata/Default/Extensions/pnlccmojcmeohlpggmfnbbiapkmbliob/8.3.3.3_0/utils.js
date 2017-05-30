// Copyright (C) 1999-2017 Siber Systems Inc. All Rights Reserved.
var RfapiJS=RfapiJS||{}
;(function(){var zffr="1.17.4.27";var zak="April 27, 2017";var zhfd="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var zfhx="undefined";var ztk={"RfItemType_Undefined":0,"RfItemType_Login":1,"RfItemType_Bookmark":2,"RfItemType_SearchCard":3,"RfItemType_BlockingPasscard":4,"RfItemType_Identity":5,"RfItemType_Contact":6,"RfItemType_Safenote":7,"RfItemType_Folder":8,"RfItemType_Generic":9,"RfItemType_Max":100
}
;var zhfe=".rfp";var zhff=".rfb";var zhfg=".rfq";var zhfh=".rfx";var zhfi=".rfn";var zhfj=".rft";var zhfk=".rfc";var zhfl={zwq:function(zhfm,zhfn){if(!zhfm||!zhfn){return false;}
var zhfo=new zhfp(zhfm);var zhfq=new zhfp(zhfn);if(!zhfo||!zhfq){return false;}
if(zhfo.key("host").toString()==zhfq.key("host").toString()){return true;}
return false;},zfuv:function(zfcl){zfcl=zfcl.toLowerCase();if(zfcl==zhfe){return ztk["RfItemType_Login"];}
if(zfcl==zhff){return ztk["RfItemType_Bookmark"];}
if(zfcl==zhfg){return ztk["RfItemType_SearchCard"];}
if(zfcl==zhfi){return ztk["RfItemType_Safenote"];}
if(zfcl==zhfj){return ztk["RfItemType_Identity"];}
if(zfcl==zhfk){return ztk["RfItemType_Contact"];}if(zfcl==zhfh){return ztk["RfItemType_BlockingPasscard"];}
return ztk["RfItemType_Undefined"];},zur:function(zceq){if(zceq==ztk["RfItemType_Login"]){return zhfe;}
if(zceq==ztk["RfItemType_Bookmark"]){return zhff;}
if(zceq==ztk["RfItemType_SearchCard"]){return zhfg;}
if(zceq==ztk["RfItemType_Safenote"]){return zhfi;}
if(zceq==ztk["RfItemType_Identity"]){return zhfj;}
if(zceq==ztk["RfItemType_Contact"]){return zhfk;}if(zceq==ztk["RfItemType_BlockingPasscard"]){return zhfh;}
return"";},zfjr:function(data,zhfr){return(data[zhfr+3]<<24)|(data[zhfr+2]<<16)|(data[zhfr+1]<<8)|data[zhfr];}
,zfji:function(data){var zdws=new Array(4);zdws[0]=data&0xFF;zdws[1]=((data>>8)&0xFF);zdws[2]=((data>>16)&0xFF);zdws[3]=((data>>24)&0xFF);return zdws;}
,zfnk:function(zhfs,zhft,zhfu,zhfv,zdye){for(var zcw=zhft,zgg=zhfv;zcw<(zhft+zdye);zcw++,zgg++){zhfu[zgg]=zhfs[zcw];}
},zhfw:function(zaap,zdws){return(zaap<<zdws)|(zaap>>>(32-zdws));}
,zhfx:function(zaap,zdws){return(zaap<<(32-zdws))|(zaap>>>zdws);}
,zhfy:function(zaap){if(zaap.constructor==Number){return zhfl.zhfw(zaap,8)&0x00FF00FF|zhfl.zhfw(zaap,24)&0xFF00FF00;}
for(var zcw=0;zcw<zaap.length;zcw++)zaap[zcw]=zhfl.zhfy(zaap[zcw]);return zaap;}
,zfop:function(zhfz){return zhfz%256;},zhga:function(zfjc){var zhgb=new zhgc((int)(zhgd.zhge.zhgf(new zhgd(1970,1,1))).zhgg*3);zhgb.zhgh(zfjc);}
,zfom:function(){return Math.floor(Math.random()*10000000000);}
,zfod:function(zaap){for(var zcxr=[];zaap>0;zaap--)zcxr.push(Math.floor(Math.random()*256));return zcxr;}
,zhgi:function(zcxr){for(var zqb=[],zcw=0,zdws=0;zcw<zcxr.length;zcw++,zdws+=8)zqb[zdws>>>5]|=(zcxr[zcw]&0xFF)<<(24-zdws%32);return zqb;}
,zhgj:function(zqb){for(var zcxr=[],zdws=0;zdws<zqb.length*32;zdws+=8)zcxr.push((zqb[zdws>>>5]>>>(24-zdws%32))&0xFF);return zcxr;}
,zfiu:function(zcxr){for(var hex=[],zcw=0;zcw<zcxr.length;zcw++){hex.push((zcxr[zcw]>>>4).toString(16));hex.push((zcxr[zcw]&0xF).toString(16));}
return hex.join("");},zfip:function(hex){for(var zcxr=[],zagw=0;zagw<hex.length;zagw+=2)zcxr.push(parseInt(hex.substr(zagw,2),16));return zcxr;}
,zcxv:function(zcxr){for(var base64=[],zcw=0;zcw<zcxr.length;zcw+=3){var zhgk=(zcxr[zcw]<<16)|(zcxr[zcw+1]<<8)|zcxr[zcw+2];for(var zgg=0;zgg<4;zgg++){if(zcw*8+zgg*6<=zcxr.length*8)base64.push(zhfd.charAt((zhgk>>>6*(3-zgg))&0x3F));else base64.push("=");}
}return base64.join("");},zawe:function(base64){base64=base64.replace(new RegExp("[^A-Z0-9+\/]","ig"),"");for(var zcxr=[],zcw=0,zhgl=0;zcw<base64.length;zhgl=++zcw%4){if(zhgl==0)continue;zcxr.push(((zhfd.indexOf(base64.charAt(zcw-1))&(Math.pow(2,-2*zhgl+8)-1))<<(zhgl*2))|(zhfd.indexOf(base64.charAt(zcw))>>>(6-zhgl*2)));}
return zcxr;},zfph:function(zcdz,zcec){if(zcdz.length!==zcec.length){return false;}
var zbvp=zcdz.length;while(zbvp--){if(!~zcec.indexOf(zcdz[zbvp])||!~zcdz.indexOf(zcec[zbvp])){return false;}
}return true;},zcre:function(zafb,zhgm,zest){var arr=zafb.split(zest);if(arr.length==1){return false;}
for(var zcw=0;zcw<arr.length;zcw++){var item=arr[zcw];if(item.indexOf(zhgm)==0){return true;}
}return false;},zhgn:function(zafb){var zhk=zafb.length;for(var zcw=zafb.length-1;zcw>=0;zcw--){var ztb=zafb.charCodeAt(zcw);if(ztb>0x7f&&ztb<=0x7ff){zhk++;}
else if(ztb>0x7ff&&ztb<=0xffff){zhk+=2;}if(ztb>=0xDC00&&ztb<=0xDFFF){zcw--;}
}return zhk;},generatePassword:function(zhgo,zhgp,zhgq,zhgr,zhgs,zhgt,zhgu,zhgv,zhgw){var zhgx=[];var zhgy=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];var zhgz=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];var zdob=['0','1','2','3','4','5','6','7','8','9'];zhgs=(typeof zhgs==zfhx)?true:zhgs;if(zhgs&&!zhgv){var zhha=(typeof zhgt==zfhx)?['!','@','#','$','%','^','&']:zhgt.split('');zhgx=zhgx.concat(zhha);}
zhgu=(typeof zhgu==zfhx)?2:zhgu;if(zhgv){zhgu=this.zhhb(zhgo);}
var zhhc=[];for(var zcw=0;zcw<zhgo;zcw++){zhhc[zcw]=" ";}
var zhhd=zhgu;var zvy={};zvy.zdgg=zhgo;if(zhgr||zhgv){for(var zej=0;zej<zhhd;++zej){this.zhhe(zhhc,zvy,zdob,zhgo,zhgw);}
}if(zhgp||zhgv){this.zhhe(zhhc,zvy,zhgy,zhgo,zhgw);}
if(zhgq&&!zhgv){this.zhhe(zhhc,zvy,zhgz,zhgo,zhgw);}
zhgp=(typeof zhgp==zfhx)?true:zhgp;if(zhgp||zhgv){zhgx=zhgx.concat(zhgy);}
zhgq=(typeof zhgq==zfhx)?true:zhgq;if(zhgq&&!zhgv){zhgx=zhgx.concat(zhgz);}
zhgr=(typeof zhgr==zfhx)?true:zhgr;if(zhgr||zhgv){zhgx=zhgx.concat(zdob);}
for(var zbkc=0;zbkc<zhgo;zbkc++){if(zhhc[zbkc]==" "){if(!zhgx.length){if(zhgr){zhgx=['0','1','2','3','4','5','6','7','8','9'];}
if(zhgp){for(var zxx=0;zxx<zhgy.length;zxx++){zhgx.push(zhgy[zxx]);}
}if(zhgq){for(var zaap=0;zaap<zhgz.length;zaap++){zhgx.push(zhgz[zaap]);}
}if(zhgs){var zhha=(typeof zhgt==zfhx)?['!','@','#','$','%','^','&']:zhgt.split('');for(var zaap=0;zaap<zhha.length;zaap++){zhgx.push(zhha[zaap]);}
}}zhhc[zbkc]=this.zhhf(zhgx,zhgw);}}var zerr="";for(var zcw=0;zcw<zhgo;zcw++){zerr+=zhhc[zcw];}
return zerr;},zhhe:function(zhhg,zvy,zhgx,zdgg,zhgw){if(zvy.zdgg==0){return;}
var zzw=0;var zhhh=1000000;while(true){zhhh--;if(zhhh==0){break;}
zzw=this.zhhb(zdgg);if(zhhg[zzw]==" "){var zhhi=this.zhhf(zhgx,zhgw);zhhg[zzw]=zhhi;zvy.zdgg--;break;}
}},zhhf:function(zhgx,zhgw){if(zhgx.length==0){return" ";}
var zbnr=this.zhhb(zhgx.length-1);var zafr=zhgx[zbnr];if(zhgw){zhgx.splice(zbnr,1);}
return zafr;},zhhb:function(zhhj){return Math.floor(Math.random()*(zhhj+1));}
,zhhk:function(zavi){var zdms=0;if(zavi==""){return 0;}
if(zavi.match(new RegExp(".*\\d.*\\d.*\\d"))){zdms+=6;}
if(zavi.match(new RegExp("[!,@,#,$,%,^,&,*,?,_,~]"))){zdms+=6;}
if(zavi.match(new RegExp(".*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~]"))){zdms+=8;}
zdms+=zavi.length*3;if(zavi.match(new RegExp("[a-z]"))){zdms+=2;}
if(zavi.match(new RegExp("[A-Z]"))){zdms+=5;}if(zavi.match(new RegExp("(?=.*[a-z])(?=.*[A-Z])"))){zdms+=2;}
if(zavi.match(new RegExp("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])"))){zdms+=2;}
if(zavi.match(new RegExp("\\d"))){zdms+=4;}if(zavi.match(new RegExp("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!,@,#,$,%,^,&,*,?,_,~])"))){zdms+=2;}
zdms*=2;if(zdms<0){zdms=0;}else if(zdms>100){zdms=100;}
return zdms;},zfsm:function(zagj,zhhl,zqu){zhhl.splice(this.zhhm(zagj,zhhl,zhhn,undefined,undefined,zqu)+1,0,zagj);return zhhl;}
,zhhm:function(zagj,zhhl,zhho,zjq,zhhp,zqu){if(zhhl.length===0){return-1;}
zjq=zjq||0;zhhp=zhhp||zhhl.length;var zhhq=(zjq+zhhp)>>1;var zagw=zhho(zagj,zhhl[zhhq],zqu);if(zhhp-zjq<=1){return zagw==-1?zhhq-1:zhhq;}
switch(zagw){case-1:return this.zhhm(zagj,zhhl,zhho,zjq,zhhq,zqu);case 0:return zhhq;case 1:return this.zhhm(zagj,zhhl,zhho,zhhq,zhhp,zqu);}
;}};var zhhn=function(zhhr,zhhs,zqu){var zhht=zhhr[zqu[0]][zqu[1]].substring(zhhr[zqu[0]][zqu[1]].lastIndexOf("/")+1);var zhhu=typeof zhhr[zqu[0]][RfapiJS.ITEM_ISFOLDER_PROP]!=zfhx?ztk["RfItemType_Folder"]:1;zhht=zhht.toLowerCase();var zhhv=zhhs[zqu[0]][zqu[1]].substring(zhhs[zqu[0]][zqu[1]].lastIndexOf("/")+1);var zhhw=typeof zhhs[zqu[0]][RfapiJS.ITEM_ISFOLDER_PROP]!=zfhx?ztk["RfItemType_Folder"]:1;zhhv=zhhv.toLowerCase();if(zhhw!=ztk["RfItemType_Folder"]&&zhhu==ztk["RfItemType_Folder"]){return-1;}
if(zhhw==ztk["RfItemType_Folder"]&&zhhu!=ztk["RfItemType_Folder"]){return 1;}
if((zhhw==ztk["RfItemType_Folder"]&&zhhu==ztk["RfItemType_Folder"])||(zhhw!=ztk["RfItemType_Folder"]&&zhhu!=ztk["RfItemType_Folder"])){if(zhht<zhhv){return-1;}
if(zhht>zhhv){return 1;}return 0;}};var zhhx={zgll:function(zglj){var zhhy="qwerty";var zafj=0;function zhhz(){zafj++;var zguw=new RSAKey();zguw.generate(parseInt(zglj),"10001");var zhia=zhhx.zhib(zguw);var zgoy=zhhx.zgge(zhia,true);zguw.setPublic(zgoy["modulus"],zgoy["exponent"]);var zhic=zguw.encrypt(zhhy);var zhid=zhhx.zhie(zguw);var zhif=zhhx.zgge(zhid,false);var zhig=zhif["modulus"];var zhih=zhif["exponent"];var zhii=zhif["privateexp"];var zhij=zhif["P"];var zhik=zhif["Q"];var zhil=zhif["DP"];var zhim=zhif["DQ"];var zhin=zhif["InverseQ"];zguw.setPrivateEx(zhig,zhih,zhii,zhij,zhik,zhil,zhim,zhin);var zhio=zguw.decrypt(zhic);if(!zhio){return;}
return{"Public_Pem":zhia,"Private_Pem":zhid};};var zglk=zhhz();while(!zglk){zglk=zhhz();}
return zglk;},zhip:function(zglj){var zguw=new RSAKey();zguw.generate(parseInt(zglj),"10001");var zhiq=this.zhib(zguw);var zhir=this.zhie(zguw);return{"Private_Pem":zhir,"Public_Pem":zhiq}
;},zhie:function(zguw){var zgv=[];zgv.push(0x30);var zhis=[];this.zhit(zhis,[0]);var zhiu=zhfl.zfip(zguw["n"].toString(16));this.zhit(zhis,zhiu,zguw["n"].toString(16).length);var zhiv=[1,0,1];this.zhit(zhis,zhiv);var zhiw=zhfl.zfip(zguw["d"].toString(16));this.zhit(zhis,zhiw,zguw["d"].toString(16).length);var zhix=zhfl.zfip(zguw["p"].toString(16));this.zhit(zhis,zhix,zguw["p"].toString(16).length);var zhiy=zhfl.zfip(zguw["q"].toString(16));this.zhit(zhis,zhiy,zguw["q"].toString(16).length);var zhiz=zhfl.zfip(zguw["dmp1"].toString(16));this.zhit(zhis,zhiz,zguw["dmp1"].toString(16).length);var zhja=zhfl.zfip(zguw["dmq1"].toString(16));this.zhit(zhis,zhja,zguw["dmq1"].toString(16).length);var zhjb=zhfl.zfip(zguw["coeff"].toString(16));this.zhit(zhis,zhjb,zguw["coeff"].toString(16).length);var zhbd=zhis.length;this.zhjc(zgv,zhbd);for(var zcw=0;zcw<zhis.length;zcw++){zgv.push(zhis[zcw]);}
var base64=zhfl.zcxv(zgv);var zhir="-----BEGIN RSA PRIVATE KEY-----\n";zhir+=this.zhjd(base64);zhir+="\n";zhir+="-----END RSA PRIVATE KEY-----\n";return zhir;}
,zhjd:function(zafb,zbaf){zbaf=zbaf||64;if(!zafb){return zafb;}
var zhje='(.{1,'+zbaf+'})( +|$\n?)|(.{1,'+zbaf+'})';return zafb.match(RegExp(zhje,'g')).join('\n');}
,zhjc:function(zhjf,zhbd){if(zhbd<0){throw new DOMException("Length must be non-negative");}
if(zhbd<0x80){zhjf.push(zhbd);}else{var zhjg=zhbd;var zhjh=0;while(zhjg>0){zhjg>>=8;zhjh++;}
zhjf.push((zhjh|0x80));for(var zcw=zhjh-1;zcw>=0;zcw--){zhjf.push((zhbd>>(8*zcw)&0xff));}
}},zhji:function(data,zhjj){var zhbd=data[zhjj["offset"]++];if((zhbd&0x80)==0x80){var zhjk=zhbd&~0x80;zhbd=0;for(var zbko=0;zbko<zhjk;zbko++){zhbd|=data[zhjj["offset"]++]<<((zhjk-zbko-1)*8);}
}return zhbd;},zhit:function(zhjf,value,zhjl){var zhjm=true;zhjf.push(0x02);var zhjn=0;for(var zcw=0;zcw<value.length;zcw++){if(value[zcw]!=0){break;}
zhjn++;}if(value.length-zhjn==0){this.zhjc(zhjf,1);zhjf.push(0);}
else{if(zhjm&&value[zhjn]>0x7f){this.zhjc(zhjf,value.length-zhjn+1);zhjf.push(0);}
else{this.zhjc(zhjf,value.length-zhjn);}for(var zcw=zhjn;zcw<value.length;zcw++){zhjf.push(value[zcw]);}
}},zhib:function(zguw){var zgv=[];zgv.push(0x30);var zhjo=zguw["n"].toString(16);var zhjp=zhfl.zfip(zhjo);var zhiv=[1,0,1];var zhis=[];this.zhit(zhis,zhjp);this.zhit(zhis,zhiv);var zhbd=zhis.length;this.zhjc(zgv,zhbd);for(var zcw=0;zcw<zhis.length;zcw++){zgv.push(zhis[zcw]);}
var base64=zhfl.zcxv(zgv);var zhiq="-----BEGIN RSA PUBLIC KEY-----\n";zhiq+=this.zhjd(base64);zhiq+="\n";zhiq+="-----END RSA PUBLIC KEY-----\n";return zhiq;}
,zgge:function(zhjq,zhjr){if((zhjq.indexOf("-----BEGIN RSA"))>=0&&(zhjq.indexOf("-----END")>=0)){var zhen=zhjq.substr(31);var zbnr=zhen.indexOf("-----END");zhen=zhen.substr(0,zbnr);zhen=zhen.replace(new RegExp("[\r\n]","g"),"");var zhjs=zhfl.zawe(zhen);var zhiu=null;var zhjt=null;var zhju=null;var zhjv=null;var zhix=null;var zhiy=null;var zhiz=null;var zhja=null;var zhjb=null;var zfmn=0;do{var zbbn=zhjs[zfmn++];var zhbd;if(zbbn==0x30){var zhjw={"offset":zfmn}
;zhbd=this.zhji(zhjs,zhjw);zfmn=zhjw["offset"];}else if(zbbn==0x02){var zhjw={"offset":zfmn}
;zhbd=this.zhji(zhjs,zhjw);zfmn=zhjw["offset"];if((zhbd==17||zhbd==33||zhbd==65||zhbd==129||zhbd==257||zhbd==513||zhbd==1025||zhbd==2049)&&zhjs[zfmn]==0){zhbd--;zfmn++;}
var value=new Array(zhbd);zhfl.zfnk(zhjs,zfmn,value,0,zhbd);zfmn+=zhbd;if(zhjr){if(zhiu==null){zhiu=value;}
else if(zhjt==null){zhjt=value;}}else{if(zhju==null){zhju=value;}
else if(zhiu==null){zhiu=value;}else if(zhjt==null){zhjt=value;}
else if(zhjv==null){zhjv=value;}else if(zhix==null){zhix=value;}
else if(zhiy==null){zhiy=value;}else if(zhiz==null){zhiz=value;}
else if(zhja==null){zhja=value;}else if(zhjb==null){zhjb=value;}
}}else if(zbbn==0x03){var zhjw={"offset":zfmn};zhbd=this.zhji(zhjs,zhjw);zfmn=zhjw["offset"];}
else if(zbbn==0x04){var zhjw={"offset":zfmn};zhbd=this.zhji(zhjs,zhjw);zfmn=zhjw["offset"];if(zhbd!=-1){var value=new Array(zhbd);zhfl.zfnk(zhjs,zfmn,value,0,zhbd);}
zfmn+=zhbd;}else if(zbbn==0x05){zhbd=zhjs[zfmn++];zfmn+=zhbd;}
else if(zbbn==0x06){zhbd=zhjs[zfmn++];var value=new Array(zhbd);zhfl.zfnk(zhjs,zfmn,value,0,zhbd);zfmn+=zhbd;}
}while(zfmn<zhjs.length);if(zhjr){var zhjx=zhfl.zfiu(zhiu);var zhjy=zhfl.zfiu(zhjt);return{"modulus":zhjx,"exponent":zhjy}
;}else{var zhjx=zhfl.zfiu(zhiu);var zhjy=zhfl.zfiu(zhjt);var zhjz=zhfl.zfiu(zhjv);var zhka=zhfl.zfiu(zhix);var zhkb=zhfl.zfiu(zhiy);var zhkc=zhfl.zfiu(zhiz);var zhkd=zhfl.zfiu(zhja);var zhke=zhfl.zfiu(zhjb);return{"modulus":zhjx,"exponent":zhjy,"privateexp":zhjz,"P":zhka,"Q":zhkb,"DP":zhkc,"DQ":zhkd,"InverseQ":zhke}
;}}else{return null;}}};var zhkf={zcxt:function(zafb){for(var zcxr=[],zcw=0;zcw<zafb.length;zcw++){zcxr.push(zafb.charCodeAt(zcw)&0xFF);}
return zcxr;},zawf:function(zcxr){for(var zafb=[],zcw=0;zcw<zcxr.length;zcw++){zafb.push(String.fromCharCode(zcxr[zcw]));}
return zafb.join("");},zhkg:function(zcxr){var zhkh=[];for(var zcw=0,zaap=zcxr.length;zcw<zaap;){zhkh.push(((zcxr[zcw++]&0xff)<<8)|(zcxr[zcw++]&0xff));}
return String.fromCharCode.apply(null,zhkh);}};var zhki={zcxt:function(zafb){var zhkj=encodeURIComponent(zafb);var zhkk=unescape(zhkj);return zhkf.zcxt(zhkk);}
,zawf:function(zcxr){var zhkl=zhkf.zawf(zcxr);var zhkm=escape(zhkl);return decodeURIComponent(zhkm);}
};var zhkn=undefined;var zhko=undefined;var zhkp={zhkq:60*60*24*2,zhkr:{"Weak":0,"Medium":1,"Good":2,"Strong":3
}
,zhks:{"enDictionary":0,"enRepeat":1,"enSequence":2,"enBrutForce":3
}
,zhkt:function(zhku,zhkv,data,zfon,zhkw){this.zhkx=typeof zhku=="undefined"?-1:zhku;this.zhky=typeof zhkv=="undefined"?-1:zhkv;this.zhkz=typeof zfon=="undefined"?3:zfon;this.zhla=typeof data=="undefined"?"":data;this.zhlb=typeof zhkw=="undefined"?0:zhkw;this.zhlc=0;}
,GetScoreLevel:function(zhld){var zavm=parseInt(zhld);if(isNaN(zavm)){return-1;}
if(zavm<25){return this.zhkr.Weak;}if(25<=zavm&&zavm<50){return this.zhkr.Medium;}
if(50<=zavm&&zavm<75){return this.zhkr.Good;}if(zavm>=75){return this.zhkr.Strong;}
},zgze:function(zcnz){if(!zcnz){return false;}var zcpa=zcnz["oneFile"];zcpa=typeof(zcpa)=="undefined"?false:zcpa;if(!zcpa){return false;}
var zhle=zcnz["securityScore"];var zhlf=zcnz["securityScoreUpdatedTime"];if(!zhlf){return true;}
if(typeof zfdi=="undefined"){console.log("could not load pwd-dict.js");return false;}
var zhlg=Math.round(new Date()/1000);if((zhlg-zhlf)>this.zhkq){return true;}
return false;},zhlh:function(zmw){if(typeof zfdi=="undefined"){console.log("could not load pwd-dict.js");}
else{zmw();}},CalcPasswordStrength:function(zyr,zhli,zhlj){zhlj=[];if(!zyr){return 0.0;}
var zerr=zyr.length<100?zyr:zyr.substr(0,99);var zcta=[];var zhlk=-1;var zhll=-1;for(var zcw=0;zcw<zerr.length-1;zcw++){if(zerr[zcw]==zerr[zcw+1]){if(zhlk==-1){zhlk=zcw;}
}else{if(zhlk!=-1){zhll=zcw+1;var zhlm=new this.zhkt(zhlk,zhll-1,this.zeqm(zerr,zhlk,zhll-zhlk),this.zhks.enRepeat);zcta.push(zhlm);zhlk=-1;zhll=-1;}
}}if(zhlk!=-1){var zhln=new this.zhkt(zhlk,zerr.length-1,this.zeqm(zerr,zhlk,zerr.length-zhlk),this.zhks.enRepeat);zcta.push(zhln);}
var zhlo=[];for(var zcw=0;zcw<zerr.length-1;zcw++){zhlo.push(zerr[zcw].charCodeAt(0)-zerr[zcw+1].charCodeAt(0));}
var zhlp=-1;var zhlq=-1;for(var zcw=0;zcw<zhlo.length-1;++zcw){if(zhlo[zcw]==zhlo[zcw+1]){if(zhlp==-1){zhlp=zcw;}
}else{if(zhlp!=-1){zhlq=zcw+1;var zhlr=new this.zhkt(zhlp,zhlq,this.zeqm(zerr,zhlp,zhlq+1-zhlp),this.zhks.enSequence);zcta.push(zhlr);zhlp=-1;zhlq=-1;}
}}if(zhlp!=-1){var zhlr=new this.zhkt(zhlp,zerr.length-1,this.zeqm(zerr,zhlp,zerr.length-zhlp),this.zhks.enSequence);zcta.push(zhlr);}
var zhls=zerr;zhls=zhls.toLowerCase();var zhlt=zhls;var zhlu=this.zhlv();for(var zcw=0;zcw!=zerr.length;++zcw){for(var zgg=zcw+1;zgg<=zerr.length;++zgg){var zhlw=this.zeqm(zhlt,zcw,zgg-zcw);var zhkw=0;var item=zhlu[zhlw];if(item){zhkw=item;var zhlx=new this.zhkt(zcw,zgg-1,this.zeqm(zerr,zcw,zgg-zcw),this.zhks.enDictionary,zhkw);zcta.push(zhlx);}
}}for(var zcw=0;zcw!=zcta.length;++zcw){zcta[zcw].zhlc=this.zhly(zcta[zcw]);}
var zhlz=0.0;var zhma=new Array(zerr.length);var zhmb=new Array(zerr.length);for(var zcw=0;zcw!=zhma.length;++zcw){zhlz+=6.53;for(var zxx=0;zxx!=zcta.length;++zxx){if(zcta[zxx].zhky==zcw){var zmp=zcta[zxx];var zhmc=zcta[zxx].zhkx>0?zhma[zcta[zxx].zhkx-1]:0;if(zcta[zxx].zhlc+zhmc<zhlz){zhlz=zcta[zxx].zhlc+zhmc;zhmb[zcw]=zcta[zxx];}
}}zhma[zcw]=zhlz;}var zhmd=[];var zcw=zerr.length-1;while(zcw>0){if(zhmb[zcw]){var zmp=zhmb[zcw];zhmd.unshift(zmp);zcw=zmp.zhkx;}
zcw--;}zhlj.length=0;var zxx=0;for(var zayz=0;zayz<zhmd.length;zayz++){var zmp=zhmd[zayz];if(zmp.zhkx-zxx>0){var zhme=new this.zhkt(zxx,zmp.zhkx-1,this.zeqm(zerr,zxx,zmp.zhkx-zxx),this.zhks.enBrutForce);zhme.zhlc=this.zhly(zhme);zhlj.push(zhme);}
zhlj.push(zmp);zxx=zmp.zhky+1;}if(zxx<zerr.length){var zhme=new this.zhkt(zxx,zerr.length-1,this.zeqm(zerr,zxx,zerr.length-zxx),this.zhks.enBrutForce);zhme.zhlc=this.zhly(zhme);zhlj.push(zhme);}
var zhmf=0.0;for(var zcw=0;zcw!=zhlj.length;++zcw){zhmf+=zhlj[zcw].zhlc;}
return zhmf;},zhly:function(zmp){var zhmg=65408;var zhld=0.0;switch(zmp.zhkz){case this.zhks.enDictionary:zhld=Math.log(zmp.zhlb)/Math.log(2.0);break;case this.zhks.enRepeat:var zhmh=zmp.zhla[0];var zhmi=0;if(this.zhmj(zhmh)){zhmi=10;}
else if(this.zaff(zhmh)){zhmi=26;}else if(this.zhmk(zhmh)){zhmi=33;}
else{zhmi=zhmg;}zhld=Math.log(zhmi*zmp.zhla.length)/Math.log(2.0);break;case this.zhks.enSequence:var zhmh=zmp.zhla[0];var zhmi=0;if(this.zhmj(zhmh)){zhmi=10;}
else if(this.zaff(zhmh)){zhmi=26;}else if(this.zhmk(zhmh)){zhmi=33;}
else{zhmi=zhmg;}zhld=Math.log(zhmi*zmp.zhla.length)/Math.log(2.0);break;case this.zhks.enBrutForce:default:{var zhmi=0;var zhml=this.zhmm(zmp.zhla,this.zhmj);var zhmn=this.zhmm(zmp.zhla,this.zhmo);var zhmp=this.zhmm(zmp.zhla,this.zhmq);var zhmr=this.zhmm(zmp.zhla,this.zhmk);zhmi+=zhml?10:0;zhmi+=zhmn?26:0;zhmi+=zhmp?26:0;zhmi+=zhmr?33:0;if(zhmi==0){zhmi=zhmg;}
zhld=Math.log(zhmi)*zmp.zhla.length/Math.log(2.0);break;}
}return zhld;},zhlv:function(){if(zhko){return zhko;}
zhko={};var zhms=[];zhms.push(zfdi);zhms.push(zfdh);zhms.push(zfdg);zhms.push(zfdf);zhms.push(zfde);var zhmt=[];zhmt.push(zfdi.length);zhmt.push(zfdh.length);zhmt.push(zfdg.length);zhmt.push(zfdf.length);zhmt.push(zfde.length);for(var zcw=0;zcw!=zhms.length;++zcw){for(var zgg=0;zgg!=zhmt[zcw];++zgg){var zhkw=zgg+1;var zald=zhms[zcw][zgg];var item=zhko[zald];if(item){if(item>zgg+1){zhkw=zgg+1;}
else{zhkw=item;}}zhko[zald]=zhkw;}}return zhko;},zhmq:function(zagw){zagw=zagw.charCodeAt(0);if(zagw>='a'.charCodeAt(0)&&zagw<='z'.charCodeAt(0)){return true;}
return false;},zhmo:function(zagw){zagw=zagw.charCodeAt(0);if(zagw>='A'.charCodeAt(0)&&zagw<='Z'.charCodeAt(0)){return true;}
return false;},zhmj:function(zagw){zagw=zagw.charCodeAt(0);if(zagw>='0'.charCodeAt(0)&&zagw<='9'.charCodeAt(0)){return true;}
return false;},zaff:function(zagw){zagw=zagw.charCodeAt(0);if(zagw>='a'.charCodeAt(0)&&zagw<='z'.charCodeAt(0)){return true;}
if(zagw>='A'.charCodeAt(0)&&zagw<='Z'.charCodeAt(0)){return true;}
return false;},zhmk:function(zagw){var zhmu=" `!@$%^&*()_+-={}[]:\";',.<>/?\\|#";if(zhmu.indexOf(zagw)>=0){return true;}
return false;},zhmm:function(zafb,zka){for(var zcw=0;zcw!=zafb.length;++zcw){var zagw=zafb[zcw];if(zka(zagw)){return true;}
}return false;},zeqm:function(zafb,zjq,zbvp){if(zjq<0||zbvp<0){return"";}
var zeqn,zeqo=String(zafb).length;if(zjq+zbvp>zeqo){zeqn=zeqo;}
else{zeqn=zjq+zbvp;}return String(zafb).substring(zjq,zeqn);}
,};var Base64={zhmv:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",zhmw:function(zhmx){var zhmy=2;var zhmz=7;var zhna="";var zbai=zhmx["pbSrcData"];if(!zbai){return false;}
zbai=this.zfyu(zbai);var zhnb=zbai.length;var zhnc=0;var zhnd=(parseInt(zhnb/3))*4;var zhne=parseInt(zhnd/76);var zhnf=19;var zhng=0;for(var zcw=0;zcw<=zhne;zcw++){if(zcw==zhne){zhnf=parseInt((zhnd%76)/4);}
for(var zgg=0;zgg<zhnf;zgg++){var zhnh=0;for(var zaap=0;zaap<3;zaap++){zhnh|=zbai.charCodeAt(zhng++);zhnh<<=8;}
for(var zxx=0;zxx<4;zxx++){}}zhnc+=zhnf*4;if((zhmz&zhmy)==0){}
}if(zhnc&&(zhmz&zhmy)==0){}zhne=(zhnb%3)?(zhnb%3+1):0;if(zhne){}
return true;},zfys:function(zhmx){var zbai=zhmx["szSrc"];if(!zbai){return false;}
var zhni=zhmx["pbDest"];var zhnj=zhmx["pnDestLen"];var zhnb=zbai.length;var zhnk=typeof zhni==zfhx?true:false;var zgg=0;var zhnc=0;while(zgg<zbai.length){var zhnh=0;var zcw;var zhnl=0;for(zcw=0;zcw<4;zcw++){if(zgg>=zbai.length){break;}
var zhnm=this.zhnn(zbai.charAt(zgg++));if(zhnm==-1){zcw--;continue;}
zhnh<<=6;zhnh|=zhnm;zhnl+=6;}if(!zhnk&&zhnc+parseInt(zhnl/8)>zhnj){zhnk=true;}
zhnh<<=24-zhnl;for(zcw=0;zcw<parseInt(zhnl/8);zcw++){if(!zhnk){var zhno=String.fromCharCode((zhnh&0x00ff0000)>>16);zhmx["pbDest"]+=zhno;}
zhnh=(zhnh<<8)>>>0;zhnc++;}}zhmx["pnDestLen"]=zhnc;if(zhnk){return false;}
zhmx["pbDest"]=this.zfyr(zhmx["pbDest"]);return true;}
,zfyu:function(zepc){zepc=zepc.replace(new RegExp("\r\n","g"),"\n");var zfda="";for(var zaap=0;zaap<zepc.length;zaap++){var zagw=zepc.charCodeAt(zaap);if(zagw<128){zfda+=String.fromCharCode(zagw);}
else if((zagw>127)&&(zagw<2048)){zfda+=String.fromCharCode((zagw>>6)|192);zfda+=String.fromCharCode((zagw&63)|128);}
else{zfda+=String.fromCharCode((zagw>>12)|224);zfda+=String.fromCharCode(((zagw>>6)&63)|128);zfda+=String.fromCharCode((zagw&63)|128);}
}return zfda;},zfyr:function(zfda){var zepc="";var zcw=0;var zagw=zfdd=zfdc=0;while(zcw<zfda.length){zagw=zfda.charCodeAt(zcw);if(zagw<128){zepc+=String.fromCharCode(zagw);zcw++;}
else if((zagw>191)&&(zagw<224)){zfdc=zfda.charCodeAt(zcw+1);zepc+=String.fromCharCode(((zagw&31)<<6)|(zfdc&63));zcw+=2;}
else{zfdc=zfda.charCodeAt(zcw+1);zfdb=zfda.charCodeAt(zcw+2);zepc+=String.fromCharCode(((zagw&15)<<12)|((zfdc&63)<<6)|(zfdb&63));zcw+=3;}
}return zepc;},zhnn:function(zzn){var zfi=zzn.charCodeAt(0);if(zfi>=65&&zfi<=90){return zfi-65+0;}
if(zfi>=97&&zfi<=122){return zfi-97+26;}if(zfi>=48&&zfi<=57){return zfi-48+52;}
if(zfi==43||zfi==45){return 62;}if(zfi==47||zfi==95){return 63;}
return-1;},zhnp:function(zbai){var zhna="";var zhnq,zhnr,zhns,zhnt,zhnu,zhnv,zhnw;var zcw=0;zbai=this.zfyu(zbai);while(zcw<zbai.length){zhnq=zbai.charCodeAt(zcw++);zhnr=zbai.charCodeAt(zcw++);zhns=zbai.charCodeAt(zcw++);zhnt=zhnq>>2;zhnu=((zhnq&3)<<4)|(zhnr>>4);zhnv=((zhnr&15)<<2)|(zhns>>6);zhnw=zhns&63;if(isNaN(zhnr)){zhnv=zhnw=64;}
else if(isNaN(zhns)){zhnw=64;}zhna=zhna+this.zhmv.charAt(zhnt)+this.zhmv.charAt(zhnu)+this.zhmv.charAt(zhnv)+this.zhmv.charAt(zhnw);}
return zhna;},zhnx:function(zbai){var zhna="";var zhnq,zhnr,zhns;var zhnt,zhnu,zhnv,zhnw;var zcw=0;zbai=zbai.replace(new RegExp("[^A-Za-z0-9\+\/\=]","g"),"");while(zcw<zbai.length){zhnt=this.zhmv.indexOf(zbai.charAt(zcw++));zhnu=this.zhmv.indexOf(zbai.charAt(zcw++));zhnv=this.zhmv.indexOf(zbai.charAt(zcw++));zhnw=this.zhmv.indexOf(zbai.charAt(zcw++));zhnq=(zhnt<<2)|(zhnu>>4);zhnr=((zhnu&15)<<4)|(zhnv>>2);zhns=((zhnv&3)<<6)|zhnw;zhna=zhna+String.fromCharCode(zhnq);if(zhnv!=64){zhna=zhna+String.fromCharCode(zhnr);}
if(zhnw!=64){zhna=zhna+String.fromCharCode(zhns);}
}zhna=this.zfyr(zhna);return zhna;}};var zhny="parsed";var zhnz="segments";var zhoa="domainsSuffix";var zhob="domainsPrefix";function zhfp(zwp){this["keysNumber"]=14;this[zhnz]={}
;this[zhny]={};this["options"]={"url":zwp,"key":["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],"q":{"name":"queryKey","parser":new RegExp("(?:^|&)([^&=]*)=?([^&]*)","g")}
,"parser":{"strict":new RegExp("^(?:([^:\\/?#]+):)?(?:\\/\\/((?:(([^:@]*):?([^:@]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)"),"loose":new RegExp("^(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?(?:\\/\\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\\/?#]*)(?::(\\d*))?)(((\\/(?:[^?#](?![^?#\\/]*\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))(?:\\?([^#]*))?(?:#(.*))?)")}
};this[zhoa]=[".com",".ru",".de",".co.uk",".uk",".org",".com.au",".edu",".net",".fm",".at",".hu",".gov",".sk",".au",".fi",".us",".dk",".pl"];this[zhob]=["www.","www2."];this["options"]["url"]=zwp;this.zhoc();return;}
;zhfp.prototype.zhoc=function(){this[zhny]=this.zhod();this.zhoe();}
;zhfp.prototype.zhod=function(){var zwp=this["options"]["url"];var zafb='';try{zafb=decodeURIComponent(zwp);}
catch(zhj){zwp=zwp.substr(0,zwp.lastIndexOf("/"));zafb=decodeURIComponent(zwp);}
var zxt=this["options"]["parser"]["strict"].exec(zafb);var zcvr={}
;var zcw=this["keysNumber"];while(zcw--){zcvr[this["options"]["key"][zcw]]=zxt[zcw]||"";}
zcvr[this["options"]["q"]["name"]]={};zcvr["length"]=zxt["length"];zcvr["full_host"]=zcvr["host"];return zcvr;}
;zhfp.prototype.key=function(zhof){if(!this[zhny].length){this.zhoc();}
if(zhof=="base"){if(this[zhny].port!==null&&this[zhny].port!==""){return this[zhny].zaaa+"://"+this[zhny].host+":"+this[zhny].port+"/";}
else{return this[zhny].zaaa+"://"+this[zhny].host+"/";}
}if(zhof=="host"){if(this[zhny].host!=""){for(var zgg=0;zgg<this[zhob].length;++zgg){if(this[zhny].host.toString().startsWith(this[zhob][zgg])){this[zhny].host=this[zhny].host.substr(this[zhob][zgg].length);}
}for(var zcw=0;zcw<this[zhoa].length;++zcw){if(this[zhny].host.toString().endsWith(this[zhoa][zcw])){this[zhny].host=this[zhny].host.substr(0,this[zhny].host.lastIndexOf(this[zhoa][zcw]));var zcks=this[zhny].host.lastIndexOf(".");if(zcks!=-1){this[zhny].host=this[zhny].host.substr(zcks+1);}
return this[zhny].host;}}}}return(this[zhny][zhof]==="")?null:this[zhny][zhof];}
;zhfp.prototype.param=function(zhog){if(!this[zhny].length){this.zhoc();}
return(this[zhny].zhoh[zhog]===null)?null:this[zhny].zhoh[zhog];}
;zhfp.prototype.zhoe=function(){var zbby=this[zhny].path;this[zhnz]=[];this[zhnz]=this[zhny].path.length==1?{}
:(zbby.charAt(zbby.length-1)=="/"?zbby.substring(1,zbby.length-1):path=zbby.substring(1)).split("/");}
;RfapiJS["UTF8"]=zhki;RfapiJS["utils"]=zhfl;RfapiJS["Binary"]=zhkf;RfapiJS["Base64"]=Base64;RfapiJS["RF_RSA"]=zhhx;RfapiJS["URL_Parser"]=zhfp;RfapiJS["SecurityScore"]=zhkp;}
).apply(RfapiJS);
