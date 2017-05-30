// Copyright (C) 1999-2017 Siber Systems Inc. All Rights Reserved.
function zkn(zcm){var zdp=undefined;if(typeof(zcm)=="string"){zdp=zcm;}
else if(zcm.name){zdp=zcm.name;}else{return;}var zahf=undefined;zahf=zcm.data;var zhh={"name":zdp,"data":undefined}
;var zahg=false;try{switch(zdp){case"ShowAutosaveBar":zahh();return;case"SetID":zahi=zahf;return;case"ping":return;case"GoFill0":{var data=zahj(document);if(!data){break;}
var zahk=["_rf_ver_","_rf_type_","_rf_on_","_rf_computerdescr_"];for(var zcw=0;zcw<zahk.length;zcw++){var zahl=zahk[zcw];var zfo;var elements=document.getElementsByName(zahl);if(elements&&elements.length&&elements.length!=0){zfo=elements[0];}
if(!zfo){zfo=document.getElementById(zahl);}if(zfo){data[zahl]=true;continue;}
}var zahm=["rfactivate_name","rfactivate_order"];for(var zcw=0;zcw<zahm.length;zcw++){var zahl=zahm[zcw];var zfo;var elements=document.getElementsByName(zahl);if(elements&&elements.length&&elements.length!=0){zfo=elements[0];}
if(!zfo){zfo=document.getElementById(zahl);}if(zfo&&typeof(zfo.value)!=="undefined"){data[zahl]=zfo.value;continue;}
}{if(typeof(document.all.length)==='number'){data.tree_size=document.all.length;}
else{data.tree_size=0;}}zhh.data=JSON.stringify(data);}
break;case"GoFill1":{var zgv=zahn(zahf,undefined,undefined,true);zhh.data=JSON.stringify(zgv);}
break;case"GoFill2":{var zaho=zahn(zahf,undefined,undefined,true);zhh.data=JSON.stringify(zaho);}
break;case"FillFormsInFrame":{var zgv=zahn(zahf,zcm.zkv,zcm.zky,true);zhh.data=JSON.stringify(zgv);}
break;case"FillRfVer":{zahn(zahf,undefined,undefined,false);return;}
break;case"AutoFill":zahg=true;case"FillSubmit":{var zahp=new zahq();zahp.zahr(document,false,!zahg,[],false,true);for(var zcw=0;zcw<zahp.zahs.length;zcw++){var zaht=zahp.zahs[zcw];if(zaht["sTagName"]===undefined){zaht["sTagName"]=zaht.zahu;delete zaht.zahu;zaht["sName"]=zaht.zya;delete zaht.zya;zaht["sType"]=zaht.zahv;delete zaht.zahv;zaht["sValue"]=zaht.zahw;delete zaht.zahw;zaht["bVisible"]=zaht.zahx;delete zaht.zahx;zaht["bInvisibleButCanChange"]=zaht.zahy;delete zaht.zahy;}
}zhh.data=JSON.stringify({"fields":zahp.zahs});}break;case"GetScreenRect":zahz();return;case"SaveForms":{if(zif){if(zcm.frame_id!=zahi){return;}
}var zxf=zaia();if(zxf){zhh.data=zxf;}else{if(document.title&&document.title.length){zhh.data={"title":document.title}
;}}}break;case"ClearFields":var zaib=new zaic();zaid(window.document,zaib);zaie(window.document,rfjs_EnRfSetClearFields.RF_CLEAR_FIELDS,zaib,false,undefined);return;case"SetFields":var zaib=new zaic();zaid(window.document,zaib);zaie(window.document,rfjs_EnRfSetClearFields.RF_SET_FIELDS,zaib,zahf["bSetValue"],zahf["sSetValue"]);return;case"ResetFields":var zaib=new zaic();zaid(window.document,zaib);zaie(window.document,rfjs_EnRfSetClearFields.RF_RESET_FIELDS,zaib,false,undefined);return;case"CallStartPage":var zaif=JSON.parse(zahf);var zaig=zaif.name;if(typeof(zaig)!=="undefined"){zaih();zaii(zaig,zaif.data);}
else{}return;case"FillFormsInWindow_CallContent":var args=zahf.m_Args;var data={}
;switch(zahf.zoy){case 4:data.bActuallyFill=false;data.m_pRfOnAfterAction_IgnoreActualFill=function(zqm){if(args.m_FieldsFilled[zqm]){args.m_FieldsFilled[zqm]++;}
else{args.m_FieldsFilled[zqm]=1;}};break;case 9:data.bActuallyFill=true;break;default:return;}
data.bSubmit=args.m_bSubmit;data.bFillInvisibleFields=args.bFillInvisibleFields;data.m_bUseEnglishSelectValues=args.m_bUseEnglishSelectValues;data.m_bCountFields=false;data.m_bFillNonemptyFields=args.m_bFillNonemptyFields;var zkv;var zaij;if(args.m_pPasscard){data.m_pPasscard=args.m_pPasscard;}
else if(args.m_pIdentity){data.m_pIdentity=args.m_pIdentity;zkv=zahf.zpf;zaij=zahf.zpg;}
else{return;}var zgv=zahn(data,zkv,zaij,true);if(zahf.zoy==4){if(zgv.m_frc>args.m_max_frc){args.m_max_frc=zgv.m_frc;}
args.m_TestPhase2.m_nFieldsFilled_namenotvalue=zgv.m_nFieldsFilled_namenotvalue;}
zhh.data=args;break;case"ActivateTesterMode":document.addEventListener("click",zaik,true);return;case"GetValueByID":var zagj=document.getElementById(zahf["rfobject$"]);if(zagj){zhh.data={"value":zagj["value"],"parameters":zahf}
;}else{return;}break;case"SearchIsHighlighted":zhh.data={"highlighted":zail(document)}
;break;case"SearchHighlight":var zaim=0;if(zcm.context&&zcm.context.length!=0){zaim=zain(document,zcm.context);}
zhh.data={"highlighted":zaim};break;case"SearchUnhighlight":zaio(document);break;case"UpdateSelectionSearch":var text="";var zaip=window.getSelection();if(zaip){text=zaip.toString();}
zhh.data={"text":text};break;case"SearchText":var text=zahf;var zaiq;if(window.find(text)){zaiq="true";}
else{zaiq="false";}zhh.data={"result":zaiq};break;default:zhh.data="unknown";break;}
}catch(zhj){zhh.data=zhj;}zair(zhh);}function zhi(){zais=undefined;}
function zait(){zaiu();}function zba(){if(zaiv){return;}
zaiu();zaiv=true;}function zaiu(){if(zaiw!="complete"){zair({"name":"status","status":"complete","url":window.document.URL}
);}if(zaix){return;}zaiw="complete";zaix=true;document.addEventListener("keydown",zaiy,true);document.addEventListener("mousedown",zaik,true);}
function zaiz(){zair({"name":"disconnected","id":zahi}
);window.setTimeout(function(){zair({"name":"connected","id":zahi,"url":window.document.URL,"status":zaiw}
);},500);}function ziy(){zaix=false;}function zaiy(event){try{zair({"name":"Pressed","keyCode":event.keyCode}
);if(zaja!=0){return;}if(!zajb){zajb=new zajc();}var zajd=zajb.zaje(true,true,event);zajf(zajd);delete zajb.zajg;}
catch(zhj){}}function zaik(event){try{zair({"name":"Clicked"}
);if(zaja!=0){return;}if(!zajb){zajb=new zajc();}var zajd=zajb.zaje(false,true,event);zajf(zajd);delete zajb.zajg;}
catch(zhj){}}function getFavIconURL(){var zajh=document.getElementsByTagName('link');var zaji=window.location.protocol+'//'+window.location.hostname+'/favicon.ico';for(var zcw=0;zcw<zajh.length;zcw++){var zhk=zajh[zcw].rel;if(zhk.indexOf('icon')!=-1){zaji=zajh[zcw].href;}
}return zaji;}function zajf(zajd){if(!zajd){return;}
var zxf=zajj(zajd);zxf.m_sMatchURL=document.URL;zxf.title=document.title.trim();var zajk={}
;if(zajd.zajl(zajk)){if(zajk.zajm&&zajk.zajn){zxf.zajo=zajk.zajn.trim();}
}if(zif){zxf.favIconUrl=getFavIconURL();}zxf.window={"screenLeft":window.screenLeft,"screenTop":window.screenTop,"innerWidth":window.innerWidth,"innerHeight":window.innerHeight,"outerWidth":window.outerWidth,"outerHeight":window.outerHeight}
;zair({"name":"AutoSave","data":zxf});}function zahz(){var zajp={"screenLeft":window.screenLeft,"screenTop":window.screenTop,"innerWidth":window.innerWidth,"innerHeight":window.innerHeight,"outerWidth":window.outerWidth,"outerHeight":window.outerHeight}
;var data={"window":zajp};zair({"name":"GetScreenRect","data":data}
);}function zahn(data,zajq,zajr,zajs){if(zajq){var zkv=JSON.parse(zajq);RFB_COUNTRIES=zkv["RFB_COUNTRIES"];RFB_OPTIONS=zkv["RFB_OPTIONS"];RFB_FIELDS=zkv["RFB_FIELDS"];RFB_RULES=zkv["RFB_RULES"];}
if(zajr){zajt=JSON.parse(zajr);}var zaju=0;var zahp=new zahq();zagd(data,zahp);zahp.zajv=zajs;if(data.m_pRfOnAfterAction_IgnoreActualFill){zahp.zajw=data.m_pRfOnAfterAction_IgnoreActualFill;}
var zajx={};zajx.zajy=new zajz();if(data.m_pPasscard){zahp.zaka=new zakb();for(var zcw=0;zcw<data.m_pPasscard.m_lFields.length;zcw++){zahp.zaka.m_lFields.push(data.m_pPasscard.m_lFields[zcw]);}
zahp.zaka.m_sGotoURL=data.m_pPasscard.m_sGotoURL;zahp.zaka.m_sMatchURL=data.m_pPasscard.m_sMatchURL;zahp.zaka.zakc(zajx);var zakd=[];var zaib=new zaic();zaid(document,zaib);zahp.zake=zaib;zahp.zahr(document,data.bActuallyFill,data.bFillInvisibleFields,zakd,false,false);if(!zahp.m_nFieldsCounted_fillable){zakf(zahp,window.top,zakd,data.bActuallyFill,data.bFillInvisibleFields);}
if(data.bSubmit&&data.bActuallyFill){zaja++;try{if(zakg(document,zajx.zajy,zahp.zakh)){zahp.submitted=true;}
else{zahp.submitted=false;}}catch(zhj){}zaja--;}}else if(data.m_pIdentity){if(data.m_sLanguage){zahp.m_sLanguage=data.m_sLanguage;}
var zaib=new zaic();zaid(document,zaib);zahp.zake=zaib;zahp.zaki=false;if(data["m_bHighLightFields"]){zahp.zaki=true;}
zahp.zakj(document,data.bActuallyFill,data.m_pIdentity);if(data.bSubmit&&data.bActuallyFill){zaja++;try{if(zakg(document,zajx.zajy,zahp.zakh)){zahp.submitted=true;}
else{zahp.submitted=false;}}catch(zhj){}zaja--;}}zaju=zahp.m_frc;data={}
;if(zahp.zaka){data.m_pPasscard={};zagd(zahp.zaka,data.m_pPasscard);delete data.m_pPasscard.m_lFields;}
if(zahp.zakk){delete zahp.zakk;}for(var name in zahp){if(!zahp.hasOwnProperty(name)){continue;}
switch(typeof(zahp[name])){case"object":case"array":case"undefined":continue;default:data[name]=zahp[name];break;}
}return data;}function zakf(zahp,zakl,zakm,zwv,zxb){try{if(document=zakl.document){try{var zaib=new zaic();zaid(zakl.document,zaib);zahp.zake=zaib;zahp.zahr(zakl.document,zwv,zxb,zakm,false,false);}
catch(zhj){}}if(zaf){var allFrames=[];var frames=zakl.document.getElementsByTagName('frame');for(var zcw=0;zcw<frames.length;zcw++){allFrames.push(frames[zcw]);}
var zakn=zakl.document.getElementsByTagName('iframe');for(var zcw=0;zcw<zakn.length;zcw++){allFrames.push(zakn[zcw]);}
for(var zcw=0;zcw<allFrames.length;zcw++){var zako=allFrames[zcw];if(zako&&zako.contentWindow){if(window.document.URL!=zako.contentWindow.document.URL){zakf(zahp,zako.contentWindow,zakm,zwv,zxb);}
else{}}else{}}}else{var zakn=zakl.frames;for(var zcw=0;zcw<zakn.length;zcw++){var zako=frames[zcw];if(zako&&zako.document){zakf(zahp,zako,zakm,zwv,zxb);}
else{}}}}catch(zhj){}};function zahj(zakp){var zakq=zakp.getElementsByTagName("input");if(zakq&&zakq.length!=0){return{"inputs":zakq.length}
;}var zakr=zakp.getElementsByTagName("select");if(zakr&&zakr.length!=0){return{"inputs":zakr.length}
;}var zaks=zakp.getElementsByTagName("textarea");if(zaks&&zaks.length!=0){return{"inputs":zaks.length}
;}return false;}function zaia(){var zxf=new zakb();zakt(document,zxf);var data={}
;if(zxf.m_lFields&&zxf.m_lFields.length){data=zajj(zxf);}
data.m_sMatchURL=document.URL;data.title=document.title;if(zif){data.favIconUrl=getFavIconURL();}
return data;}function zajj(zxf){var data={};zagd(zxf,data);data.m_lFields=[];for(var zcw=0;zcw<zxf.m_lFields.length;zcw++){data.m_lFields.push(zxf.m_lFields[zcw]);}
return data;}var zaku=false;function zaih(name,data){if(!zaku){zaku=true;document.addEventListener("click",zakv,false);}
}function zakv(){var name="RfStartPage_GetAction";var zakw=zaii(name);zair({"name":name,"data":zakw}
,true);}function zaii(name,data){var zagj=zakx();zagj.setAttribute("name",name);if(typeof(data)!="undefined"){zagj.setAttribute("data",data);}
var zaky=document.createEvent("Events");zaky.initEvent("StartPageEvent",true,false);zagj.dispatchEvent(zaky);var zakw=zagj.getAttribute("data");return zakw;}
function zakx(){if(!document.documentElement){return;}
var elements=document.getElementsByTagName("StartPageDataElement");var zagj;if(elements.length==0){zagj=document.createElement("StartPageDataElement");document.documentElement.appendChild(zagj);}
else{zagj=elements[0];}return zagj;}var zakz="rf_search_hilite";function zail(zakp){var zala=zakp.getElementById(zakz);if(!zala||zala.length==0){return false;}
return true;}function zain(zakp,zqb){if(!zakp.body){return 0;}
if(zail(zakp)){zaio(zakp);}var zalb=0;var zalc=["gold","greenyellow","aqua","magenta","springgreen"];for(var zcw=0;zcw<zqb.length;zcw++){var zald=zqb[zcw];if(!zald||zald.length==0){continue;}
var zald=zale(zald.toLowerCase());zalb+=zalf(zakp.body,zald,zalc[zcw%zalc.length],zakp);}
return zalb;}function zalf(zfm,zald,zalg,zakp){if(zfm.id==zakz){return 0;}
var zalh=0;if(zfm.hasChildNodes){for(var zgk=zfm.firstChild;zgk;zgk=zgk.nextSibling){zalh+=zalf(zgk,zald,zalg,zakp);}
}if(zfm.nodeType!=3){return zalh;}var zali=zale(zfm.nodeValue.toLowerCase());var zzw=zali.indexOf(zald);if(zzw<0){return zalh;}
zalh+=1;var zalj=zfm.parentNode;var zalk=zfm.nodeValue;var zall=zakp.createTextNode(zalk.substr(0,zzw));zalj.insertBefore(zall,zfm);var zalm=zalk.substr(zzw,zald.length);var zaln=zakp.createTextNode(zalm);var zalo=zakp.createElement("span");zalo.id=zakz;zalo.style.color="black";zalo.style.background=zalg;zalo.appendChild(zaln);zalj.insertBefore(zalo,zfm);var zalp=zakp.createTextNode(zalk.substr(zzw+zald.length));zalj.insertBefore(zalp,zfm);zalj.removeChild(zfm);return zalh;}
function zale(zafb){var zalq=[new RegExp("[\\xC0-\\xC2]","g"),new RegExp("[\\xE0-\\xE2]","g"),new RegExp("[\\xC8-\\xCA]","g"),new RegExp("[\\xE8-\\xEB]","g"),new RegExp("[\\xCC-\\xCE]","g"),new RegExp("[\\xEC-\\xEE]","g"),new RegExp("[\\xD2-\\xD4]","g"),new RegExp("[\\xF2-\\xF4]","g"),new RegExp("[\\xD9-\\xDB]","g"),new RegExp("[\\xF9-\\xFB]","g")];var zalr=['A','a','E','e','I','i','O','o','U','u'];for(var zcw=0;zcw<zalq.length;zcw++){zafb=zafb.replace(zalq[zcw],zalr[zcw]);}
return zafb;}function zaio(zakp){zals(zakp.body,zakp);}
function zals(zfm,zakp){if(zfm.id==zakz){return zalt(zfm,zakp);}
if(zfm.hasChildNodes){for(var zaap=zfm.firstChild;zaap;){zaap=zals(zaap,zakp);}
}return zfm.nextSibling;}function zalt(zfm,zakp){var parent=zfm.parentNode;var text="";var zalu=zfm.previousSibling;if(zalu&&zalu.nodeType==3){text+=zalu.nodeValue;parent.removeChild(zalu);}
text+=zfm.textContent;var zalv=zfm.nextSibling;var zjv=zalv;if(zalv&&zalv.nodeType==3){text+=zalv.nodeValue;zjv=zalv.nextSibling;parent.removeChild(zalv);}
var zalw=zakp.createTextNode(text);parent.replaceChild(zalw,zfm);return zjv;}
function zam(){zan("CS-"+(zahi?zahi.toString():"?")+": "
+zao(zam.caller,arguments));}
function zap(){zan("CS-"+(zahi?zahi.toString():"?")+": "
+zao(zap.caller,arguments));}
var zalx=(new Date).getTime();function zaly(zcm,zlz){var zalz=(new Date).getTime()-zalx;if(zlz){alert(zcm);}
}window.addEventListener("DOMContentLoaded",zait,true);window.addEventListener("load",zba,true);window.addEventListener("unload",ziy,true);
