(function zaq(){var zar=false;var zas=false;var zat;var zau=undefined;var zav=undefined;var zaw=undefined;var zax=undefined;var zay=false;var zaz=undefined;window.addEventListener("load",zba,true);window.addEventListener("message",zbb);function zba(){$("folder-div").addEventListener("click",zbc,false);$("save-button").addEventListener("click",zbd,false);$("cancel-button").addEventListener("click",zbe,false);$("close-button").addEventListener("click",zbe,false);var zbf=$("file-name-div");zbf.addEventListener("mousedown",zbg,false);var zbh=$("file-name-arrow-wrapper");zbh.addEventListener("mousedown",zbi,false);var zbj=$("file-name-input");zbj.addEventListener("keypress",zbk,false);zbj.addEventListener("blur",zbl,false);zbj.addEventListener("input",zbm,false);var zbn=$("folder-name-div");zbn.addEventListener("mousedown",zbo,false);var zbp=$("folder-name-arrow-wrapper");zbp.addEventListener("mousedown",zbo,false);var zbq=$("folder-name-input");zbq.addEventListener("blur",zbr,false);var zbs=$("new-folder-name-input");zbs.addEventListener("keypress",zbt,false);zbs.addEventListener("input",zbu,false);var zbv=$("folder-tree");zbv.addEventListener("mousedown",zbw,false);$("create-folder-button").addEventListener("mousedown",zbx);$("new-folder-cancel").addEventListener("mousedown",zby);$("new-folder-ok").addEventListener("mousedown",zbz);$("block-autosave").addEventListener("click",zca);$("unblock-autosave").addEventListener("click",zcb);$("enable-autosave-button").addEventListener("click",zcc);$("block-auto-save-confirmation-no").addEventListener("click",zcd);$("block-auto-save-confirmation-yes").addEventListener("click",zce);$("unblock-auto-save-confirmation-no").addEventListener("click",zcf);$("unblock-auto-save-confirmation-yes").addEventListener("click",zcg);zch.then(zci,zcj);function zci(zck){zau=zck;zcl();}
function zcj(zcm){}}function zcl(){zav=zcl;if(zau){zcn();zau({"name":"AutoSaveDialogInit"}
);}}function zco(data){zcp("file-name-dropdown");zcp("folder-tree");var zcq=data["name_suggestions"];var zcr=data["replace_items"];var zcs=data["folders"];var zct=data["disableLogins"];var zcu=data["disableBookmarks"];zaw=data["sDomainUrl"];zax=data["bForcedSave"];zcv("suggestions_section","Name suggestions:");for(var zcw=0;zcw<zcq.length;zcw++){var zcx=zcy(zcq[zcw]);if(zcw==0){zcz(zcx);}
}if(zcr.length>0){zcv("replace_section","Replace existing account:");for(zcw=0;zcw<zcr.length;zcw++){var path=zda(zcr[zcw]["path"]);zdb(path,"login24.png");}
}zdc(zcs);var zdd=zde("sa-auto-save","rf_current_selected_folder","");var zdf=zdg(zdd);if(zdf){zdh(zdf);}
else{var zdi=$("folder-tree").getElementsByClassName("tree-root")[0];zdh(zdi);}
zdj("autosave-dialog");zdk();$("createFolderDiv").style.display="none";zdl(zde("sa-auto-save","rf_show_folder_field_in_dialog",true));}
function zbb(event){try{var data=JSON.parse(event.data);if(!data.hasOwnProperty("name")){return;}
var zdm=chrome.runtime.getURL("").slice(0,-1);if(zdm!==event.origin){return;}
switch(data["name"]){case"dialog_init":zcl();break;default:break;}
}catch(zdn){}}function zdo(zcm){var zdp=undefined;if(typeof(zcm)=="string"){zdp=zcm;}
else if(zcm.name){zdp=zcm.name;}else{return;}var zdq=zcm["error"];if(zdq){zdr();zds(zdq);return;}
switch(zdp){case"AutoSaveDialogInitResponse":zco(zcm);zdr();zdt({"name":"dialog_ready","bForcedSave":zcm["bForcedSave"]}
);break;case"AutoSaveDialogSaveLoginResponse":var zdd=zdu();zdv("sa-auto-save","rf_current_selected_folder",zdd);zdr();zdj("message-dialog");break;case"AutoSaveDialogCreateFolderResponse":var zdw=zdx(zcm["folder_name"],zat);zdw.dataset.zdy=zcm["path"];zdh(zdw);zdr();break;case"AutoSaveGetFolderContentResponse":zdr();zaz=zcm.data;zbm();break;case"AutoSaveUserLoggedIn":if(zay){zay=false;zdj("autosave-dialog");zdz();}
break;case"AutoSaveUserLoggedOff":zay=true;zdj("error-login-dialog");break;case"AutoSaveDataChanged":break;}
}function zds(zdq){if(zdq){if(zdq["code"]==401||zdq["code"]==403||zdq["code"]==-1){zay=true;zdj("error-login-dialog");zdt({"name":"dialog_ready"}
);return;}if(zdq["code"]==410){zay=true;zdj("error-login-dialog");zdt({"name":"dialog_ready"}
);return;}if(zdq["code"]==1){zay=true;zdj("error-login-dialog");zdt({"name":"dialog_ready"}
);return;}if(zdq["code"]==100){zay=true;zdj("error-login-dialog");zdt({"name":"dialog_ready"}
);return;}zdr();}}function zdk(){var zea=zde("sa-auto-save","rf_show_autosavebar",true);var zeb=zde("sa-auto-save","blocking",[]).indexOf(zaw)>=0;$("block-autosave").style.display=zea&&!zeb&&!zax?"inline-block":"none";$("unblock-autosave").style.display=zea&&zeb&&zax?"inline-block":"none";$("enable-autosave-button").style.display=!zea&&zax?"inline-block":"none";}
function zdz(){if(zav){var exec=zav;zav=undefined;exec();}
}function zec(){var zed=$("mainDialog").childNodes;for(var zcw=0;zcw<zed.length;zcw++){var zee=zed[zcw];if(zee.nodeType===Node.ELEMENT_NODE){if(zee.style.display=="block"){return zee;}
}}return undefined;}function zef(){var zeg=$("mainDialog").getBoundingClientRect();var zeh=$("file-name-dropdown").getBoundingClientRect();var zei=$("folder-name-dropdown").getBoundingClientRect();var zej=Math.max(zeg.height,zeh.bottom,zei.bottom);var message={"name":"update_dimensions","height":zej,"width":zeg.width}
;zdt(message);}function zdt(message){parent.postMessage(JSON.stringify(message),"*");}
function zcc(){zdv("sa-auto-save","rf_show_autosavebar",true);zdk();}
function zcb(){if(zde("sa-auto-save","rf_show_auto_save_unblocking_confirm",true)){zdj("unblock-auto-save-confirmation-dialog");}
else{zel();}}function zca(){if(zde("sa-auto-save","rf_show_auto_save_blocking_confirm",true)){zdj("block-auto-save-confirmation-dialog");}
else{zem();}}function zcd(){zdj("autosave-dialog");}
function zce(){if($("do-not-show-again").checked){zdv("sa-auto-save","rf_show_auto_save_blocking_confirm",false);}
zem();zdj("autosave-dialog");}function zcf(){zdj("autosave-dialog");}
function zcg(){if($("do-not-show-again-unblock").checked){zdv("sa-auto-save","rf_show_auto_save_unblocking_confirm",false);}
zel();zdj("autosave-dialog");}function zen(){if(zde("sa-auto-save","rf_show_auto_save_unblocking_confirm",true)){zdj("unblock-auto-save-confirmation-dialog");}
else{zel();}}function zel(){var zeo=zde("sa-auto-save","blocking",[]);var zep=zeo.indexOf(zaw);if(zep>=0){zeo.splice(zep,1);}
zdv("sa-auto-save","blocking",zeo);zdk();}function zem(){var zeo=zde("sa-auto-save","blocking",[]);zeo.push(zaw);zdv("sa-auto-save","blocking",zeo);zbe();}
function zbe(){zdt({"name":"close_dialog"});}function zeq(message){$("auto-error-message").innerText=message;$("auto-error-message-div").style.display="block";zef();}
function zer(){$("auto-error-message").innerText="";$("auto-error-message-div").style.display="none";zef();}
function zes(message){$("auto-warning-message").innerText=message;$("auto-warning-message-div").style.display="block";zef();}
function zet(){$("auto-warning-message").innerText="";$("auto-warning-message-div").style.display="none";zef();}
function zcn(){zef();$("page-mask").style.display="block";$("progress-dialog").style.display="block";}
function zdr(){$("page-mask").style.display="none";$("progress-dialog").style.display="none";}
function zbx(){var zeu=$("new-folder-name-input");zeu.value="New Folder";$("createFolderDiv").style.display="table-row";setTimeout(function(){zeu.focus();}
,100);}function zby(){$("createFolderDiv").style.display="none";zef();}
function zbz(){zav=zbz;var name=$("new-folder-name-input").value;var zev=zew(name);if(!zev){var zcm="Folder name '"+name+"' cannot be empty and it cannot contain characters \\ / : * ? \" < > |";zeq(zcm);return;}
zer();var zex=zdu()+"/"+zev;var zey=zdg(zex);if(zey){zdh(zey);zby();return;}
var message={"name":"AutoSaveDialogCreateFolder","path":zex,"folder_name":zev}
;zcn();zau(message);zby();}function zdl(zez){$('folderDiv').style.display=zez?"table-row":"none";$('folderImg').src=chrome.runtime.getURL(zez?"autosave_show_folder_open.ico":"autosave_show_folder.ico");}
function zbc(){$("createFolderDiv").style.display="none";var zez=!zde("sa-auto-save","rf_show_folder_field_in_dialog",true);zdv("sa-auto-save","rf_show_folder_field_in_dialog",zez);zdl(zez);zef();}
function zbd(){zav=zbd;var name=$("file-name-input").value;var zev=zew(name);if(!zev){var zcm="Login name '"+name+"' cannot be empty and it cannot contain characters \\ / : * ? \" < > |";zeq(zcm);return;}
zer();var message={"name":"AutoSaveDialogSaveLogin","bIsBookmark":false,"item_info":{"path":zdu()+"/"+zev}
};zcn();zau(message);}function zbm(){zfa();zer();zet();var zbj=$("file-name-input");var name=zbj.value;var zev=zew(name);if(!zev){var zcm="Login name '"+name+"' cannot be empty and it cannot contain characters \\ / : * ? \" < > |";zeq(zcm);return;}
var zfb=zdu();var path=zfb+"/"+zev;var zcx=zfc(zda(path));if(zcx){var zcm="This Login info will replace an existing Login: '"+zev+"'";zes(zcm);zfd("custom-name");zfe(zcx);zbj.value=name;return;}
zcx=zff(name);if(zcx){zfd("custom-name");zfg(zcx);return;}
if(zaz){var zex=path.trim().toLowerCase();for(var zcw=0;zcw<zaz.length;++zcw){var zfh=zaz[zcw].trim().toLowerCase();var zep=zfh.indexOf(".rfp");if(zep===-1){zep=zfh.indexOf(".rfb");}
if(zep>=0){zfh=zfh.substring(0,zep);}if(zex===zfh){var zcm="This Login info will replace an existing Login: '"+zev+"'";zes(zcm);return;}
}}zfd("custom-name");zcx=zcy(name,"custom-name");zfg(zcx);}
function zbk(event){event=event||window.event;var target=(event.target)?event.target:event.scrElement;var zfi=(event.charCode)?event.charCode:((event.which)?event.which:event.keyCode);if(zfi==13){$("save-button").focus();zbd();}
}function zbl(){zar=false;zfj();}function zbg(event){if(zar){return;}
zbi(event);}function zbi(event){event.preventDefault();event.stopPropagation();zar=!zar;zfj();}
function zfk(event){$("file-name-input").focus();event.preventDefault();event.stopPropagation();}
function zfa(){var zfl=$("file-name-select").getElementsByClassName("dropdown-name-selected");for(var zcw=0;zcw<zfl.length;zcw++){var zfm=zfl[zcw];zfn(zfm,"dropdown-name-selected")}
}function zff(text){var zfl=$("suggestions_section").getElementsByClassName("dropdown-name");for(var zcw=0;zcw<zfl.length;zcw++){var zfm=zfl[zcw];if(zfm.textContent===text){return zfm;}
}}function zfc(text){var zfo=$("replace_section");if(zfo){var zfl=zfo.getElementsByClassName("dropdown-name");for(var zcw=0;zcw<zfl.length;zcw++){var zfm=zfl[zcw];if(zfm.textContent===text){return zfm;}
}}return undefined;}function zfg(zcx){zfa();zfp(zcx,"dropdown-name-selected");}
function zcz(zcx){var zbj=$("file-name-input");zbj.value=zcx.textContent;zbj.focus();zfg(zcx);}
function zfe(zcx){var zbj=$("file-name-input");var zfq=zcx.textContent;var zfr=zfq.split("\\");var zfs=zfr[zfr.length-1];var path="";for(var zcw=0;zcw<zfr.length-1;zcw++){path+="/"+zfr[zcw];}
zbj.value=zfs;zbj.focus();zfg(zcx);var zfm=zdg(path);if(zfm){zdh(zfm);}
}function zcv(zft,text){var zee=document.createElement("div");zee.id=zft;zee.className="dropdown-section";var zfu=document.createElement("div");zfu.className="dropdown-section-name";zfu.innerText=text;zfu.addEventListener("mousedown",zfk,true);zee.appendChild(zfu);$("file-name-dropdown").appendChild(zee);}
function zfd(zft){var zfv=$(zft);if(zfv){$("suggestions_section").removeChild(zfv);}
}function zcy(text,zft){var zcx=document.createElement("div");if(zft){zcx.id=zft;}
if(!text){return;}zcx.innerHTML+=text;zcx.addEventListener("mousedown",function(){zcz(this);}
,true);zcx.className="dropdown-name";$("suggestions_section").appendChild(zcx);return zcx;}
function zdb(text,zfw){var zcx=document.createElement("div");if(zfw){var zfx=document.createElement("img");zfx.className="dropdown-name-icon";zfx.src=chrome.runtime.getURL(zfw);zcx.appendChild(zfx);}
zcx.innerHTML+=text;zcx.addEventListener("mousedown",function(){zfe(this);}
,true);zcx.className="dropdown-name";$("replace_section").appendChild(zcx);return zcx;}
function zfj(){var zfy=$("file-name-arrow");zfy.className=zar?"name-arrow-opened":"name-arrow-closed";var zbf=$("file-name-div");zbf.className=zar?"name-wrapper-opened":"name-wrapper-closed";var zfz=$("file-name-dropdown");zfz.style.display=zar?"block":"none";if(zar){var zga=$("file-name-input");zga.focus();}
zbm();zef();}function zda(zgb){if(zgb.startsWith("/")){zgb=zgb.substr(1,zgb.length-1);}
if(zgb.endsWith(".rfp")){zgb=zgb.substr(0,zgb.length-4);}
if(zgb.endsWith(".rfb")){zgb=zgb.substr(0,zgb.length-4);}
return zgb.replace(new RegExp("/","g"),"\\");}function zgc(zfm){if(zfm){var zgd=zfm.getElementsByClassName("tree-node-content")[0];if(zgd){return zgd.innerHTML;}
}return undefined;}function zdc(zcs){var zdi=zdx("Home");zdi.dataset.zdy="";for(var zcw=0;zcw<zcs.length;zcw++){var zfb=zcs[zcw];var path=zfb["path"];var zfr=path.split("/").filter(function(zge){return zge;}
);var zgf=zdi;for(var zgg=0;zgg<zfr.length;zgg++){(function(){var zge=zfr[zgg];var zgh=zgi(zgf);var zgj=zgh.find(function(zgk){return zgc(zgk)===zge;}
);if(zgj){zgf=zgj;}else{zgf=zdx(zge,zgf);zgf.dataset.zdy=path;}
})();}}}function zgl(){var zfl=$("folder-name-dropdown").getElementsByClassName("dropdown-name-selected");for(var zcw=0;zcw<zfl.length;zcw++){var zfm=zfl[zcw];zfn(zfm,"dropdown-name-selected")}
}function zgm(zfm){if(!zfm){return;}if(zfm.nodeType===1&&zgn(zfm,"tree-node")){if(zgn(zfm,'tree-node-expand-closed')){zgo(zfm,'tree-node-expand-closed','tree-node-expand-open');}
if(zgn(zfm,"tree-root")){return;}}zgm(zfm.parentNode);}
function zdh(zfm){if(zat===zfm){return;}if(zau){zaz=undefined;zau({"name":"AutoSaveGetFolderContent","path":zfm.dataset.zdy}
);zcn();}zat=zfm;zgl();zgm(zfm);var zgp=zfm.getElementsByClassName("tree-node-header")[0];zfp(zgp,"dropdown-name-selected");zgq();zbm();}
function zbo(event){event.preventDefault();event.stopPropagation();zas=!zas;zgq();}
function zbr(){zas=false;zgq();}function zgq(){var zfy=$("folder-name-arrow");zfy.className=zas?"name-arrow-opened":"name-arrow-closed";var zbn=$("folder-name-div");zbn.className=zas?"name-wrapper-opened":"name-wrapper-closed";var zgr=$("folder-name-dropdown");zgr.style.display=zas?"block":"none";var zgs=zdu();if(zgs){zgs=zgs.substring(1);}
else{zgs="Home";}var zga=$("folder-name-input");zga.value=zgs;if(zas){var zgt=$("folder-tree").getBoundingClientRect();$("folder-tree").scrollTop=zat.offsetTop-zgt.height/2;zga.focus();}
zef();}function zdg(path){function zgu(zfm,path){if(zfm&&zfm.dataset.zdy.toLowerCase()===path.toLowerCase()){return zfm;}
var zgh=zgi(zfm);for(var zcw=0;zcw<zgh.length;++zcw){var zgv=zgu(zgh[zcw],path);if(zgv){return zgv;}
}return undefined;}var zdi=$("folder-tree").getElementsByClassName("tree-root")[0];return zgu(zdi,path);}
function zdu(){if(!zat){return"";}return zat.dataset.zdy;}
function zbt(event){event=event||window.event;var target=(event.target)?event.target:event.scrElement;var zfi=(event.charCode)?event.charCode:((event.which)?event.which:event.keyCode);if(zfi==13){$("new-folder-ok").focus();zbz();}
}function zbu(){var name=$("new-folder-name-input").value;if(!zew(name)){var zcm="Folder name '"+name+"' cannot be empty and it cannot contain characters \\ / : * ? \" < > |";zeq(zcm);return;}
zer();}function zbw(event){event=event||window.event;var zgw=event.target||event.srcElement;if(!zgn(zgw,"tree-node-expand")){if(zgn(zgw,"tree-node-content")){zdh(zgw.parentNode.parentNode);return;}
return;}var zfm=zgw.parentNode.parentNode;if(zgn(zfm,"tree-node-leaf")){return;}
if(zgn(zfm,'tree-node-expand-open')){zgo(zfm,'tree-node-expand-open','tree-node-expand-closed');}
else{zgo(zfm,'tree-node-expand-closed','tree-node-expand-open');}
event.preventDefault();event.stopPropagation();zef();}
function zgi(zfm){if(!zfm){return[];}var zgx=zfm.getElementsByClassName("tree-node-container")[0];if(zgx){var zgy=zgx.childNodes;var zgv=[];for(var zcw=0;zcw<zgy.length;zcw++){if(zgy[zcw].nodeType===Node.ELEMENT_NODE){zgv.push(zgy[zcw]);}
}return zgv;}return[];}function zdx(name,parent){var zgz=document.createElement("li");zfp(zgz,["tree-node","tree-node-leaf"]);var zha=document.createElement("div");zfp(zha,["tree-node-header"]);var zhb=document.createElement("div");zfp(zhb,"tree-node-expand");var zgd=document.createElement("div");zfp(zgd,"tree-node-content");zgd.innerText=name;zha.appendChild(zhb);zha.appendChild(zgd);zgz.appendChild(zha);var zbv=$("folder-tree");if(!parent){parent=zbv.getElementsByClassName("tree-root")[0];if(!parent){zfp(zgz,["tree-root","tree-node-expand-open"]);var zhc=zbv.getElementsByClassName("tree-node-container")[0];if(!zhc){zhc=document.createElement("ul");zfp(zhc,"tree-node-container");zbv.appendChild(zhc);}
zhc.appendChild(zgz);return zgz;}}var zgx=parent.getElementsByClassName("tree-node-container")[0];if(!zgx){zgx=document.createElement("ul");zfp(zgx,"tree-node-container");parent.appendChild(zgx);}
zfn(parent,["tree-node-leaf"]);if(!zgn(parent,"tree-node-expand-open")){zfp(parent,["tree-node-expand-closed"]);}
zgx.appendChild(zgz);return zgz;}function zdj(name){var zed=$("mainDialog").childNodes;for(var zcw=0;zcw<zed.length;zcw++){var zee=zed[zcw];if(zee.nodeType===Node.ELEMENT_NODE){if(zee.id===name){zee.style.display="block";$("mainDialog").style.width=window.getComputedStyle(zee).getPropertyValue("width");}
else{zee.style.display="none";}}}zef();}function zhd(zhe,zhf){if(zhe){zhf.removeAttribute("disabled");}
else{zhf.setAttribute("disabled",'true');}}var zch=new Promise(function(resolve,reject){var port=undefined;chrome.runtime.sendMessage({"name":"hi"}
,zhg);function zhg(zhh){try{if(!zhh){reject("hi::responce failed: "+chrome.runtime.lastError.message);return;}
port=chrome.runtime.connect({"name":zhh.id});port.onMessage.addListener(zdo);port.onDisconnect.addListener(zhi);}
catch(zhj){reject("hi::responce exception: "+zhj);}
resolve(zau);}function zhi(){port=undefined;}function zau(data){if(!port){return;}
port.postMessage(data);}});function zam(zhk){zan("AutoSaveDlg: "+zhk);}
})();
