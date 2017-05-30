// Copyright (C) 1999-2017 Siber Systems Inc. All Rights Reserved.
if(typeof zyw==="undefined"){var zyw=1;var zyx={"com":["eu","au","br","cn","de","gb","hu","no","ru","sa","se","uk","us","uy","za","amer.csc"],"net":["gb","se","uk","nobelbiocare"],"org":["eu"],"int":["eu"],"uk":["ltd","me","plc"],"ca":["gc","ab","bc","mb","nb","nf","nl","ns","nt","nu","on","pe","qc","sk","yk"],"fr":["tm","asso","nom","prd","presse"],"se":["tm","pp","parti","press"],"jp":["ad","ed","gr","lg"],"tw":["idv","game","ebiz","club"],"kr":["pe","re","hs","ms","es","sc","kg","seoul","busan","daegu","incheon","gwangju","daejeon","ulsan","gyeonggi","gangwon","chungbuk","chungnam","jeonbuk","jeonnam","gyeongbuk","gyeongnam","jeju"],"ru":["sp","pp","nsc","mhost","caravan","narod","spb","msk","adygeya","bashkiria","ulan-ude","buryatia","dagestan","nalchik","kalmykia","kchr","karelia","ptz","komi","mari-el","joshkar-ola","mari","mordovia","yakutia","vladikavkaz","kazan","tatarstan","tuva","udmurtia","izhevsk","udm","khakassia","grozny","chuvashia","altai","kuban","krasnoyarsk","marine","vladivostok","stavropol","stv","khabarovsk","khv","amur","arkhangelsk","astrakhan","belgorod","bryansk","vladimir","volgograd","tsaritsyn","vologda","voronezh","vrn","cbg","ivanovo","irkutsk","koenig","kaluga","kamchatka","kemerovo","kirov","vyatka","kostroma","kurgan","kursk","lipetsk","magadan","mosreg","murmansk","nnov","nov","nsk","novosibirsk","omsk","orenburg","oryol","penza","perm","pskov","rnd","ryazan","samara","saratov","sakhalin","yuzhno-sakhalinsk","yekaterinburg","e-burg","smolensk","tambov","tver","tomsk","tsk","tom","tula","tyumen","simbirsk","chelyabinsk","chel","chita","yaroslavl","bir","jar","palana","dudinka","surgut","chukotka","yamal","amursk","baikal","cmw","fareast","jamal","kms","k-uralsk","kustanai","kuzbass","magnitka","mytis","nakhodka","nkz","norilsk","snz","oskol","pyatigorsk","rubtsovsk","syzran","tagil","vdonsk","zgrad"],"in":["firm","gen","ind","res","ernet"]
}
;var zyy=new RegExp("[\\/:*?\"<>|\r\n\t]","g");var zyz=true;var zvh="";var zza="https://www.roboform.com/dist/RoboForm-v8-Setup.exe";var zzb="https://www.roboform.com/dist/roboform-mac-v8.dmg";var zzc="https://www.roboform.com/download?reason=RoboForm-Not-Found";var zkp="Internal Error";function zhn(){return zde("nm-settings","toolbar");}
function zzd(){return zde("nm-settings","popup-windows-toolbar");}
function zze(arr,zvy){for(var zcw=0;zcw<arr.length;zcw++){if(arr[zcw]==zvy)return true;}
}var zzf=["ms-browser","safari","mxaddon","chrome","widget","mx:","file:"];function zzg(url){if(!url){return false;}
if(url=="about:blank"){return false;}for(var zcw=0;zcw<zzf.length;zcw++){if(url.startsWith(zzf[zcw])){return false;}
}return true;}function zzh(zzi){if(typeof(zzi)!=typeof("")){return false;}
if(zzi.length===0){return false;}var zzj=0;var zzk="0".charCodeAt(0);var zzl="9".charCodeAt(0);var zzm=".".charCodeAt(0);for(var zcw=0;zcw<zzi.length;zcw++){var zzn=zzi.charCodeAt(zcw);if(zzn>=zzk&&zzn<=zzl){continue;}
if(zzn===zzm){if(++zzj>3){return true;}}else{return false;}
}return true;}function zzo(zzp){if(zzh(zzp)){return true;}
return false;}function zty(url,zzq,zzr,zzs){if(typeof(url)!=typeof("")){return"";}
url=url.toLowerCase();if(url.startsWith("about:")||url.startsWith("javascript:")||url.startsWith("ms-browser-extension://")||url.startsWith("chrome-extension://")||url.startsWith("chrome://")||url==="http://"){return"";}
if(url.indexOf("://")===-1){url="http://"+url;}var zzt="";var zzu="";var zzv="";while(true){if(url.startsWith("file://")){zzt="file://";zzu="(file)";break;}
var zzw=url.indexOf("?");var zzx=zzw===-1?url:url.substring(0,zzw);var zzy=new RfapiJS["URL_Parser"](zzx);var zzz=zzy.key("full_host");var zaaa=zzy.key("protocol");if(!zzz){zzt="what://";zzu="(unparseable)";break;}
if(zaaa==="file"){zzt="file://";zzu="(file)";break;}
if(zaaa==="ftp"){zzt="ftp://";}else{zzt="http://";}
if(zzo(zzz)){if(zzz==="127.0.0.1"){zzz="localhost";}
zzu=zzz;break;}zzw=zzz.indexOf(".");if(zzw>=0){if((zzz.startsWith("www.")||zzz.startsWith("www2.")||zzz.startsWith("www3.")||zzz.startsWith("cgi."))&&zzz.lastIndexOf(".")>zzw){zzz=zzz.substring(zzw+1);}
}zzw=zzz.lastIndexOf(".");if(zzw>=0){var zaab=false;var zaac=zzz.substring(zzw+1);zzv="."+zaac;var zaad=zzz.substring(0,zzw);if(zaad.length>0){var zaae=zaad.lastIndexOf(".");if(zaae>=0){var zaaf=zaad.substring(zaae+1);if(zaaf.length>0&&typeof(zyx[zaac])===typeof([])&&zyx[zaac].indexOf(zaaf)>=0){zzv="."+zaaf+"."+zaac;zzz=zzz.substring(0,zzz.length-zzv.length);zaab=true;}
else{var zaag=zaad.substring(0,zaae);var zaah=zaag.lastIndexOf(".");if(zaah>=0){var zaai=zaad.substring(zaah+1);if(zaai.length>0&&typeof(zyx[zaac])===typeof([])&&zyx[zaac].indexOf(zaai)>=0){zzv="."+zaai+"."+zaac;zzz=zzz.substring(0,zzz.length-zzv.length);zaab=true;}
}}}}if(!zaab){var zaac=zzz.substring(zzw+1);zzv="."+zaac;zzz=zzz.substring(0,zzw);if(zaac.length==2){zzw=zzz.lastIndexOf(".");if(zzw>=0){zaac=zzz.substring(zzw+1);if(zzv==".us"||zaac=="co"||zaac=="ac"||zaac=="go"||zaac=="or"||zaac=="ne"||zaac=="com"||zaac=="edu"||zaac=="gov"||zaac=="gouv"||zaac=="gob"||zaac=="info"||zaac=="int"||zaac=="mil"||zaac=="net"||zaac=="org"){zzv="."+zaac+zzv;zzz=zzz.substring(0,zzw);}
}}}zzw=zzz.lastIndexOf(".");if(zzw>=0){zzu=zzz.substring(zzw+1);zzz=zzz.substring(0,zzw);}
else{zzu=zzz;zzz="";}}else{zzu=zzz;zzv="";}if(zzu.length>0&&zzs){zzu=zzu[0].toUpperCase()+zzu.substring(1);}
break;}if(zzq){if(zzr){return zzt+zzu+zzv;}else{return zzu+zzv;}
}return zzu;}function zrc(url){if(!url){return false;}
var zaaj=["facebook.com/plugins","facebook.com/extern","facebook.com/widgets","facebook.com/connect","twitter.com/widgets","plusone.google.com","google.com/ads","google.ru/ads","doubleclick.net/pagead","vk.com/widget","interceptedby.admuncher.com","staticxx.facebook.com","tpc.googlesyndication.com","imasdk.googleapis.com","chrome-extension://"
];for(var zcw=0;zcw<zaaj.length;zcw++){if(url.indexOf(zaaj[zcw])>=0){return true;}
}return false;}function zaak(zfo,zaal,zaam){var zaan=0;var zaao=100;var target=zaal[zaal.length-1];for(var zcw=0;zcw<zaal.length;zcw++){if(zaam){var parent=zfo;for(var zaap=0;zaap<parent.childNodes.length;zaap++){var zgk=parent.childNodes[zaap];var zft=zgk.getAttribute("id");if(zft&&zze(zaam,zft)){}
else{if(zgk.style.opacity!==(target/10)+""){zaaq(zgk,zaal[zcw],zaan);}
}}}else{if(zfo.style.opacity!==(target/10)+""){zaaq(zfo,zaal[zcw],zaan);}
}zaan+=zaao;}}function zaaq(zfo,zaar,zaan){setTimeout(function(){var zaas=zfo;var zaat=zaar/10;zaas.style.opacity=zaat;if(zaar==1){zaas.style.display="block";zaas.style.opacity="0.3";}
},zaan);}var zaau="rf_save_button_id";var zaav="rf_div_tbar_save";var zaaw="rf_div_tbar_close";var zaax="rf_close_button_id";var zaay="rf_passcard_input_id";var zaaz="rf_folders_select_id";var zaba="rf_protect_chkbox_id";var zabb="rf_div_tbar_text";var zabc="rf_div_tbar_password";var zabd="rf_mp_savebtn";var zabe="rf_mp_checkbtn";var zabf="rf_masterpassconfirm_input";var zabg="rf_masterpass_input";var zabh="rf_mp_cancelbtn";var zabi=0x21;var zabj=0x22;var zabk=0x26;var zabl=0x28;var zabm=0x1B;var zabn=0x0D;var zabo=0x09;var zabp=0x10;var zabq=0x11;var zabr=0x12;var zabs=0x70;var zabt=0x71;var zabu=0x72;var zabv=0x73;var zabw=0x74;var zabx=0x75;var zaby=0x76;var zabz=0x77;var zaca=0x78;var zacb=0x79;var zacc=0x7A;var zacd=0x7B;var zace=0x7C;var zacf=0x7D;var zacg=0x7E;var zach=0x7F;var zaci=0x80;var zacj=0x81;var zack=0x82;var zacl=0x83;var zacm=0x84;var zacn=0x85;var zaco=0x86;var zacp=0x87;var zacq="MasterPasswordMinLength";var zacr="MasterPasswordMaxLength";var zacs="MasterPasswordMinNonNumChars";var zact="MasterPasswordMinDigitChars";var zacu="MPRotationTimeDays";var zacv="DisableChangeMasterPassword";var zacw="MasterPasswordMinUpperCaseChars";var zacx="MasterPasswordMinLowerCaseChars";var zacy="DisableLogoff";var zrw="DisableCreateLogins";var zacz="DisableCreateIdentities";var zrx="DisableCreateBookmarks";var zada="DisableCreateContacts";var zadb="DisableCreateAppLogins";var zadc="DisableCreateSafenotes";var zadd="ShowPasswordsAsStarsInEditor";var zade="DisableSharing";var zadf="WhiteListURLs";var zadg="BlackListURLs";var zadh="StoreMPInSystemProtectedStorage";var zrz="AutoSaveEnable";var zsr="ConfirmAutoFillEnable";var zadi="AutoLogoffTimeMins";var zadj="EnforceOTP";var zadk="DisableOTPViaSMS";var zadl="DisableMobileDevices";var zadm="EnrollDevicesForDays";var zadn="AllowedIPRanges";var zado="DomEqCount";var zadp="DomEqVer";function zan(zhk){if(!zyz){return;}
console.log(zhk);}function zadq(zso){if(zso["g"]){var zadr=[];var zads=zso["g"];for(var zxp in zads){var zadt=zads[zxp];var zadu=[];var zadv=zadt["i"];for(var zxq in zadv){var zadw=zadv[zxq];var zadx=[];var zady=zadw["f"];for(var zuy in zady){var zadz=zady[zuy];zadx.push(zadz);}
zadw["f"]=zadx;zadu.push(zadw);}zadt["i"]=zadu;zadr.push(zadt);}
zso["g"]=zadr;}}function zaea(zsd){var zaeb=zsd[zaec];var path=zsd[zaed];var text="";switch(zaeb){case ztk["RfItemType_Folder"]:text=path.substring(path.lastIndexOf("/")+1);break;case ztk["RfItemType_Identity"]:case ztk["RfItemType_Contact"]:case ztk["RfItemType_Bookmark"]:case ztk["RfItemType_Login"]:case ztk["RfItemType_BlockingPasscard"]:case ztk["RfItemType_SearchCard"]:case ztk["RfItemType_Safenote"]:text=path.substring(path.lastIndexOf("/")+1);text=text.substr(0,text.lastIndexOf("."));break;}
return text;}function zaee(zaeb,zaef){switch(zaeb){case ztk["RfItemType_Folder"]:return zaef?zaeg:zaeh;case ztk["RfItemType_SearchCard"]:return zaef?zaei:zaej;case ztk["RfItemType_Bookmark"]:return zaef?zaek:zael;case ztk["RfItemType_Login"]:return zaef?zaem:zaen;case ztk["RfItemType_Identity"]:return zaef?zaeo:zaep;case ztk["RfItemType_Contact"]:return zaef?zaeq:zaer;case ztk["RfItemType_Safenote"]:return zaef?zaes:zaet;case ztk["RfItemType_BlockingPasscard"]:return zaef?zaeu:zaev;}
}function zaew(zaex){switch(zaex){case ztk["RfItemType_Folder"]:return"Folder";case ztk["RfItemType_Contact"]:return"Contact";case ztk["RfItemType_Login"]:return"Login";case ztk["RfItemType_Identity"]:return"Identity";case ztk["RfItemType_Bookmark"]:return"Bookmark";case ztk["RfItemType_SearchCard"]:return"Searchcard";case ztk["RfItemType_BlockingPasscard"]:return"Blockcard";case ztk["RfItemType_Safenote"]:return"Safenote";default:return"[object]";}
}function zaey(zya){if(!zya){return undefined;}return zya.replace(zyy,"_").replace(new RegExp("_+","g"),"_");}
function zew(zya,zaez){if(!zya){return undefined;}
zya=zya.replace(new RegExp("^\\s+","i"),"");zya=zya.replace(new RegExp("[.\\s]+$","i"),"");if(!zya||zya[0]=='.'){return undefined;}
if(zyy.test(zya)){return undefined;}if(zaez>0){zya=zya.substr(0,zaez);}
return zya;}function zuk(zya,zaez){zya=zaey(zya);return zew(zya,zaez);}
function zafa(zafb){if(!zafb){return false;}if(zafb.startsWith(" ")||zafb.endsWith(" ")||zafb.startsWith(".")||zafb.endsWith(".")){return false;}
if(zafb.indexOf("\\")!=-1||zafb.indexOf("/")!=-1||zafb.indexOf(":")!=-1||zafb.indexOf("*")!=-1||zafb.indexOf("?")!=-1||zafb.indexOf("\"")!=-1||zafb.indexOf("<")!=-1||zafb.indexOf(">")!=-1||zafb.indexOf("|")!=-1||zafb.indexOf("\r")!=-1||zafb.indexOf("\n")!=-1||zafb.indexOf("\t")!=-1){return false;}
return true;}function zqk(zmw,zafc){return window.setTimeout(zmw,zafc);}
function zafd(zmw,zafc){return window.setInterval(zmw,zafc);}
function zlv(zafe,window){if(zafe){if(window){window.clearTimeout(zafe);}
}}function zaff(zzn){return zzn.toLowerCase()!=zzn.toUpperCase();}
function zafg(zzn){return zzn==zzn.toUpperCase();}
function zafh(zzn){return zzn==zzn.toLowerCase();}
function zafi(zafb){var args=Array.prototype.slice.call(arguments,1);return zafb.replace(new RegExp("%(\\d+)","g"),function(zmp,zafj){return typeof args[zafj-1]!='undefined'?args[zafj-1]:zmp;}
);}function zafk(zvd,zafl,zafm){if(typeof(zafl)=="string"){zafl=new RegExp(zafl,"i");}
zafn(zvd,function(zfm){switch(zfm.nodeType){case 3:if(zafl.test(zfm.nodeValue)){zfm.nodeValue=zafm(zfm.nodeValue);}
break;default:if(zfm.value&&zafl.test(zfm.value)){var zafo=zafm(zfm.value);if(zafo!==undefined){zfm.value=zafo;}
}break;}});}function zafp(zvd,zafl,zafq){if(typeof(zafl)=="string"){zafl=new RegExp(zafl,"i");}
zafn(zvd,function(zfm){switch(zfm.nodeType){case 3:if(zafl.test(zfm.nodeValue)){zafq(zfm.nodeValue,zfm,"nodeValue");}
break;default:if(zfm.value&&zafl.test(zfm.value)){zafq(zfm.value,zfm,"value");}
break;}});}function $(zft){return document.getElementById(zft);}
function zafn(zfm,zka){var zvd=zfm;while(zfm){var zafr=zka(zfm);if(zafr){return zafr;}
if(zfm.firstChild){zfm=zfm.firstChild;}else{while(!zfm.nextSibling){zfm=zfm.parentNode;if(!zfm||zfm==zvd){break;}
}zfm=zfm.nextSibling;}}return undefined;}function zjz(zafs){if(typeof(zafs)=="string"){return JSON.parse(zafs);}
else{return zafs;}}function zqv(zaft){var request=new XMLHttpRequest();request.open("GET",zafu(zaft),false);request.send(null);return request.responseText;}
function zafv(zvy,zka){for(var zxl in zvy){if(!zvy.hasOwnProperty(zxl)){continue;}
var zafr=zka(zvy[zxl],zxl);if(zafr){return zafr;}}
return undefined;}function zmr(zafw,zafx,zafy){var zafz=zafw.split(zafy);var zaga=zafx.split(zafy);var zcw;for(zcw=0;zcw<zafz.length;zcw++){zafz[zcw]=parseInt(zafz[zcw]);}
for(zcw=0;zcw<zaga.length;zcw++){zaga[zcw]=parseInt(zaga[zcw]);}
for(zcw=zafz.length;zcw<zaga.length;zcw++){zafz.push(0);}
for(zcw=zaga.length;zcw<zafz.length;zcw++){zaga.push(0);}
for(zcw=0;zcw<zafz.length;zcw++){var zagb=zafz[zcw];var zagc=zaga[zcw];if(zagb==zagc){continue;}
if(zagb<zagc){return-1*(zafz.length-zcw);}else{return+1*(zafz.length-zcw);}
}return 0;}function zagd(src,zage){var zagf=typeof(src)=="object";for(var name in src){if(zagf&&!src.hasOwnProperty(name)){continue;}
if(typeof(src[name])=="function"){delete zage[name];continue;}
if(zage[name]===undefined){zage[name]=src[name];}else if(typeof(zage[name])=="object"){continue;}
else{zage[name]=src[name];}}}function zlh(){this.zagg=undefined;this.zagh=[];}
zlh.prototype.zjq=function(elements){this.zagg=elements;this.zagh.length=0;}
;zlh.prototype.zlp=function(){this.zagg=undefined;this.zagh.length=0;}
;zlh.prototype.zjv=function(zagi){if(!this.zagg){return undefined;}
for(var key in this.zagg){if(!this.zagg.hasOwnProperty(key)){continue;}
var zagj=this.zagg[key];if(!zagj){continue;}if(this.zagh.indexOf(zagj)>=0){continue;}
this.zagh.push(zagj);if(zagi&&!zagi(zagj)){continue;}
return zagj;}this.zlp();return undefined;};function zao(zagk,args){var zagl="";if(zagk&&zagk.name){zagl=zagk.name;}
var zhk=zagl;for(var zcw=0;zcw<args.length;zcw++){var zagm=zagn(args[zcw]);if(!zagm||zagm==""){continue;}
if(zagm==zagl){continue;}if(zhk!=""){zhk+=": ";}zhk+=zagm;}
return zhk;}function zagn(zagm){var zago=zagp(zagm);switch(typeof(zagm)){case"string":case"undefined":break;default:if(zagm){if(zagm.length){}
else if(zagm.description&&zagm.zafj){zagm=zagm.toString();break;}
if(zagm.message&&zagm.name){zagm=zagm.toString();break;}
}try{var zagq=JSON.stringify(zagm);if(!zagq||zagq==""||zagq=="{}"){zagm=zagm.toString();}
else{zagm=zagq;}}catch(zhj){zagm=zagm.toString();}
break;}if(zago){zagm+=" @"+zago+"\n";}return zagm;}
function zagr(zhj){var zhk=zhj.toString();var zxv=zagp(zhj);if(zxv){zhk+="\n"+zxv;}
return zhk;}function zagp(zhj){if(!zhj){return undefined;}
if(typeof(zhj.fileName)=="undefined"){return undefined;}
var zhk=zhj.fileName;if(typeof(zhj.lineNumber)!="undefined"){zhk+="("+zhj.lineNumber+")";}
return zhk;}function zcp(zft){var zfm=$(zft);if(zfm){while(zfm.hasChildNodes()){zfm.removeChild(zfm.lastChild);}
}}function zgn(zagj,zags){var zagt=(zagj.getAttribute("class")||"").split(" ");return zagt.indexOf(zags)!==-1
}
function zfp(zagj,zagu){var zagt=(zagj.getAttribute("class")||"").split(" ");zagv(zagt,zagu);zagt=zagt.filter(function(zagw){return zagw!="";}
);zagj.setAttribute("class",zagt.join(" "));}function zfn(zagj,zagx){var zagt=(zagj.getAttribute("class")||"").split(" ");zagy(zagt,zagx);zagt=zagt.filter(function(zagw){return zagw!="";}
);zagj.setAttribute("class",zagt.join(" "));}function zgo(zagj,zagx,zagz){var zagt=(zagj.getAttribute("class")||"").split(" ");zagy(zagt,zagx);zagv(zagt,zagz);zagt=zagt.filter(function(zagw){return zagw!="";}
);zagj.setAttribute("class",zagt.join(" "));}function zagv(zqb,zaha){if(typeof(zqb)=="string"){zqb=zqb.split(" ");}
if(typeof(zaha)=="string"){zaha=zaha.split(" ");}var zahb=zahc(zqb);for(var zcw=0;zcw<zaha.length;zcw++){var zhk=zaha[zcw];if(!zahb.hasOwnProperty(zhk)){zqb.push(zhk);}
}return zqb;}function zagy(zqb,zahd){if(typeof(zqb)=="string"){zqb=zqb.split(" ");}
if(typeof(zahd)=="string"){zahd=zahd.split(" ");}var zahd=zahc(zahd);for(var zcw=0;zcw<zqb.length;zcw++){var zhk=zqb[zcw];if(zahd.hasOwnProperty(zhk)){zqb.splice(zcw,1);zcw--;}
}return zqb;}function zahc(arr){var zahe={};for(var zcw=0;zcw<arr.length;zcw++){zahe[arr[zcw]]=arr[zcw];}
return zahe;}}
