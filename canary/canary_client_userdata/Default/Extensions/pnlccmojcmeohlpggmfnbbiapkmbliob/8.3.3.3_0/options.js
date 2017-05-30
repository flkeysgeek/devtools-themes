var zmd=undefined;var zape=false;var zapf="8-0-1-3";var zapg=false;window.addEventListener("load",zba,false);function zba(){var zaph=zoj();if(!zaph||zaph.document.readyState!="complete"){setTimeout(zba,500);return;}
if(zaph.zapi){zapj();}if(zaph.zapk){zapl();}}function zapj(){zapm('options-nm.css');var zapn=zoc();if(!zapn.zme){zin(zio);return;}
window.addEventListener("unload",ziy,false);zoj().addEventListener("putSetting",znn,false);zmd=zapn.zmd;if(!zmd||typeof(zmd.zapo)=="undefined"){zin(zio,zapp);return;}
if(zoa){zmd.zapq();window.close();return;}var zmq=zmr(zapn.zmc,zapf,"-");if(zmq>=0){zapg=true;}
zapr("toolbar","IDS_ShowLowerToolbar_Text");zapr("popup-windows-toolbar","IDS_ShowLowerToolbarForPopup_Text");zapr("popup","IDS_ShowBrowserActionPopup_Text");if(!zapg){zapr("horizontal","IDS_HorizontalToolbar_Text");$("horizontal-div").style.display="none";}
zapr("focus","IDS_FocusSearchBox_Text");zmd.zmk("IDS_ShowOptionsDlg_Link_Text",function(zgv){$("options-dialog").value=zgv;}
);$("options-dialog").onclick=function(event){zmd.zapq();}
;$("options-container").style.display="block";$("prefs_body").style.visibility="visible";}
function zapr(zaps,zapt){var zapu=$(zaps);zapu.checked=zde("nm-settings",zaps);zapu.onclick=function(event){zdv("nm-settings",zaps,!!zapu.checked);zoc().zod("nm-settings",zaps,!!zapu.checked);}
;zmd.zmk(zapt,function(zgv){zapu.nextSibling.innerHTML=zgv;}
);}function znn(event){var zno=event["detail"];var zee=zno["section"];var name=zno["name"];var value=zno["value"];var zagj=$(name);if(!zagj){return;}
if(typeof(zagj.checked)!="undefined"){zagj.checked=value==true;}
else{zagj.value=value;}}function ziy(){zmd=undefined;}
function zin(zcm,zly){var zhk=zcm;if(zly){zhk+="\n\nError: "+zly;}
var message=$("message");if(message){message.textContent=zhk;message.style.display="block";}
}function zapl(){zapm('options-sa.css');try{zapv();zapw();zapx();zapy();document.addEventListener("keydown",function(event){if(event.altKey){if(!zape&&event.keyCode==187){zape=true;zapz("extended","Extended");}
}});$("prefs_body").style.visibility="visible";}catch(zhj){}
}function zapv(){$("opt_username_label").innerHTML=zaof("Options_Main_Title");$("account_label").innerHTML=zaof("Options_Account_Title");$("accountname_label").innerHTML=zaof("Options_Account_Title")+":";var zaqa=zsh().zuc;$("accountid_link").innerHTML=!zaqa?"n/a":zaqa;!zaqa?$("accountid_link").setAttribute("disabled",true):$("accountid_link").removeAttribute("disabled");$("accountid_link").addEventListener("click",function zaqb(){zsh().zaqc();}
);$("rf_autosave_options_lbl").innerHTML=zaof("Options_AutoSave_Title");$("rf_show_bar_label").innerHTML=zaof("Options_OfferAutoSave_WebForms2_Text");$("rf_shift_enter_forces_autosave_label").innerHTML=zaof("Options_AutoSave_ShiftEnterEnable_Text");$("rf_alt_click_forces_autosave_label").innerHTML=zaof("Options_AutoSave_AltClickEnable_Text");$("security_label").innerHTML=zaof("Options_Security_Title");$("cachemp_onbrowser_close_label").innerHTML=zaof("Options_Security_CacheMPBrowserSessions_Text");$("rf_logoff_label").innerHTML=zaof("Options_Security_AutoLogoffAfterIdle_Text")+":";$("rf_logoff_info").innerHTML=zaof("Options_Security_TakeEffectNextSession");$("form_fill_label").innerHTML=zaof("Options_FillForms_Title");$("rf_highlight_filled_lbl").innerHTML=zaof("Options_FillForms_HighlightFields_Text");$("rf_fill_submit_matching_lbl").innerHTML=zaof("Options_Fill_SubmitDefButton_PC_Text");$("search_label").innerHTML=zaof("Options_Search_Title");$("rf_roboform_search_engine_lbl").innerHTML=zaof("SearchAction_Search_In_RoboForm_Names").replace("%",zaof("SearchAction_Phrase_Text"));$("rf_yahoo_search_engine_lbl").innerHTML=zaof("SearchAction_Search_In_Yahoo").replace("%",zaof("SearchAction_Phrase_Text"));$("rf_google_search_engine_lbl").innerHTML=zaof("SearchAction_Search_In_Google").replace("%",zaof("SearchAction_Phrase_Text"));$("rf_bing_search_engine_lbl").innerHTML=zaof("SearchAction_Search_In_Bing").replace("%",zaof("SearchAction_Phrase_Text"));$("rf_ebay_search_engine_lbl").innerHTML=zaof("SearchAction_Search_In_eBay").replace("%",zaof("SearchAction_Phrase_Text"));$("rf_amazon_search_engine_lbl").innerHTML=zaof("SearchAction_Search_In_Amazon").replace("%",zaof("SearchAction_Phrase_Text"));$("rf_server_label").innerHTML=zaof("Options_Extended_ActiveServer_Text");zaqd("rf_show_auto_savebar_chk","sa-auto-save","rf_show_autosavebar");zaqd("rf_alt_click_forces_autosave_chk","sa-auto-save","rf_alt_click_forces_autosave");zaqd("rf_shift_enter_forces_autosave_chk","sa-auto-save","rf_shift_enter_forces_autosave");zaqd("rf_highlight_filledflds_chk","sa-settings","rf_highlight_filledflds_chk");zaqd("rf_fill_submit_matching_chk","sa-settings","rf_match_fillsubmitaction");zaqd("rf_cachemp_onbrowser_close_chk","sa-settings","rf_cachemp_onbrowser_close_chk");zaqd("logoff_minutes_input","sa-user","rf_timeout_select");zaqd("rf_yahoo_search_engine_chk","sa-search","rf_search_yahoo_chk");zaqd("rf_google_search_engine_chk","sa-search","rf_search_google_chk");zaqd("rf_roboform_search_engine_chk","sa-search","rf_search_roboform_chk");zaqd("rf_bing_search_engine_chk","sa-search","rf_search_bing_chk");zaqd("rf_ebay_search_engine_chk","sa-search","rf_search_ebay_chk");zaqd("rf_amazon_search_engine_chk","sa-search","rf_search_amazon_chk");zaqd("rf_server_select","internal","active-server");$("rf_server_select").addEventListener("change",function(){zoj().zaqe["SetServerUrl"](zde("internal","active-server"));}
);var zaqf=zoj().zrr.zry(zadi);if(zaqf!=-1){$("logoff_minutes_input").setAttribute("disabled","disabled");$("rf_logoff_label").style.color="RGB(90, 90, 90)";$("rf_logoff_info").setAttribute("disabled","disabled");$("rf_logoff_info").innerHTML=zaof("Options_Security_AutoLogoffDisabled_Text");}
}function zapx(){var target=zaqg("tab");if(!target){target=zaqh;}
var zaqi=$("menu"+target);if(zaqi){zaqi.click();}}
var zaqj="#f1f1f1";var zaqk="#d2d2d2";var zaqh="account";var zaql="security";var zaqm="rf_autosave_options";var zaqn="form_fill";var zaqo="search";function zapw(){zapz(zaqh,zaof("Options_Account_Title"));zapz(zaql,zaof("Options_Security_Title"));zapz(zaqm,zaof("Options_AutoSave_Title"));zapz(zaqn,zaof("Options_FillForms_Title"));zapz(zaqo,zaof("Options_Search_Title"));}
function zapz(name,zaqp){$("prefs_menu").appendChild(zaqq(name,zaqp));}
function zaqr(){zaqs();var zaqt=$("prefs_menu").childNodes;for(var zcw=0;zcw<zaqt.length;zcw++){var item=zaqt[zcw];item.style.backgroundColor=zaqj;if(item.className=="menubutton_active"){item.className="menubutton";var zaqu=item.getAttribute("displaytab");if(zaqu){$(zaqu).style.display="none";}
}}this.style.backgroundColor=zaqk;this.className="menubutton_active";$(this.getAttribute("displaytab")).style.display="block";}
function zaqq(name,zaqp){var zaqv=document.createElement("div");zaqv.id="menu"+name;if(name==null){zaqv.className="menuspacer";return zaqv;}
zaqv.setAttribute("displaytab",name);zaqv.className="menubutton";var zaqw=document.createElement("div");zaqw.className="menubuttontext";zaqw.innerText=zaqp;zaqv.appendChild(zaqw);zaqv.addEventListener("click",zaqr,false);zaqv.addEventListener("mouseover",function zaqx(){this.style.backgroundColor=zaqk;}
,false);zaqv.addEventListener("mouseout",function zaqx(){if(this.className!="menubutton_active"){this.style.backgroundColor=zaqj;}
},false);return zaqv;}function zaqd(zaqy,zee,name){var zfo=$(zaqy);if(!zfo){return;}
var nodeName=zfo.nodeName.toLowerCase();if(nodeName=="select"){zaqz(zfo,zee,name);}
if(nodeName=="input"){var zaex=zfo.type.toLowerCase();if(zaex=="checkbox"){zara(zfo,zee,name);}
else if(zaex=="number"){zarb(zfo,zee,name);}}}function zarb(zagj,zee,name){zarc(zagj,zde(zee,name));zagj.addEventListener("change",function(){zdv(zee,name,zard(this));}
);}function zaqz(zagj,zee,name){zare(zagj,zde(zee,name));zagj.addEventListener("change",function(){zdv(zee,name,zarf(this));}
);}function zara(zagj,zee,name){zarg(zagj,zde(zee,name));zagj.addEventListener("change",function(){if(name=="rf_cachemp_onbrowser_close_chk"){var zarh=zari(this);zdv(zee,name,zarh);if(!zsh().zuc){return;}
ztq().then(function zarj(){zdv("sa-user","rf_accpwd",zarh?zyt(zsh().zyv,zsh().zuc):"");zdv("sa-user","rf_masterpwd",zarh?zyt(zsh().zuw,zsh().zuc):"");}
).catch(function(zdq){});}else{zdv(zee,name,zari(this));}
});}function ztq(){return new Promise(function(resolve,reject){zsh().ztr(function(){resolve();}
,function(zts){var zdq=new Error();zdq["description"]=zts[ztt];zdq["code"]=zts[ztu];reject(zdq);}
);});}function zarg(zfo,value){if(value==false||value=="false"){zfo.removeAttribute("checked");}
}function zari(zfo){return zfo.checked?true:false;}
function zare(zfo,value){for(var zep=0;zep<zfo.options.length;zep++){if(value==zfo.options[zep].value){zfo.selectedIndex=zep;break;}
}}function zarc(zfo,value){zfo.value=value;}function zard(zfo){var value=zfo.value;if(value==""){zfo.value=value=zfo.getAttribute("min");}
if(parseInt(value)>parseInt(zfo.getAttribute("max"))){zfo.value=value=zfo.getAttribute("max");}
return value;}function zarf(zfo){return zfo.options[zfo.selectedIndex].value;}
function zapy(){try{var zark=$("opt_start_change_master_password_change");zark.disabled=true;var zarl=$("opt_change_master_password_header_text");zarl.innerText=zaof("Change_Account_Password");$("opt_change_master_password_current_label").innerText=zaof("Old_Change_Account_Password");$("opt_change_master_password_new_label").innerText=zaof("New_Change_Account_Password");$("opt_change_master_password_confirm_label").innerText=zaof("Confirm_Change_Account_Password");$("options_progress_dialog_header").innerText=zaof("changing_password");if(!zsh().zuc){zarl.innerText=zaof("Change_Account_Password_Login_First");}
else{$("opt_start_change_master_password_email").innerText=zsh().zuc;if(zoj().zrr.zrv(zacv)){$("opt_start_change_master_password_header_text").innerText=zaof("Change_Account_Password_Prohibited");return;}
zark.disabled=false;}zark.addEventListener("click",function(){$("opt_start_change_master_password_buttons_div").style.display="none";$("opt_change_master_password_div").style.display="block";}
);$("opt_change_master_password_change").addEventListener("click",function(){zarm();var zarn=$("opt_change_master_password_error_div");zarn.innerHTML="";var zaro=$("opt_change_master_password_current_input").value;var zarp=$("opt_change_master_password_new_input").value;var zarq=$("opt_change_master_password_confirm_input").value;if(!zaro||!zarp||!zarq){zarn.innerHTML=zaof("master_password_empty");}
if(!zsh().zarr()){zarn.innerText=zaof("Change_Account_Password_Login_First");return;}
if(zaro==zarp){zarn.innerHTML=zaof("IDS_MasterPass_New_TheSameAsPrevious_Error");return;}
if(zarp!=zarq){zarn.innerHTML=zaof("master_password_confirm_error");return;}
var zars={};zars[zart]=zsh().zarr();zars[zaru]=zaro;zars[zarv]="-";zsh().zarw(JSON.stringify(zars),function(zsj){var zsk=JSON.parse(zsj);if(zsk[zsl]){zarn.innerText=zaof("Change_Account_Password_Login_First");return;}
if(zoj().zaqe["getAccountMode"]()!=zoj().zarx["OFS"]){zarn.innerText=zaof("operation_not_supported");return;}
var zary=zsh().zarz(zarp);if(zary["result"]!=true){zarn.innerHTML=zary["reason"];return;}
if(zoj().zrr.zrv(zacv)){zarn.innerText=zaof("Change_Account_Password_Prohibited");return;}
var zasa={};zasa["new_password"]=zarp;zasa[zaru]=zaro;zasa[zart]=zsh().zarr();zsh().zasb(JSON.stringify(zasa),function(data){zoj().ztd({"name":"AutoSaveUserLoggedIn"}
);zaqs();$("opt_start_change_master_password_buttons_div").style.display="block";$("opt_change_master_password_div").style.display="none";$("opt_start_change_master_password_header_text").innerHTML=zaof("Password_Successfully_Changed");zarm();}
,function(zts){var zanz=JSON.parse(zts);if(zanz){var zdq=zanz["error"];if(zdq){var ztb=zdq["code"];var ztc=zdq["description"];if(ztb==1){zarn.innerHTML=zaof("Wrong_Password");}
else{if(ztc){zarn.innerHTML=ztc;}else{zarn.innerHTML=zafi(zaof("error_code"),ztb);}
}}}zarm();},function(zasc){if(zasc==100){return;}$("options_page_mask").style.display="block";$("options_progress_dialog").style.display="block";zasd(zasc);}
);});});}catch(zhj){}}function zaqs(){$("opt_change_master_password_current_input").value="";$("opt_change_master_password_new_input").value="";$("opt_change_master_password_confirm_input").value="";$("opt_change_master_password_error_div").innerHTML="";}
function zaqg(zase){var zasf=window.location.search.substring(1);var zasg=zasf.split("&");for(var zcw=0;zcw<zasg.length;zcw++){var zash=zasg[zcw].split("=");if(zash[0]==zase){return zash[1];}
}return undefined;}function zapm(zasi){var zasj=document.head;var zask=document.createElement('link');zask.type='text/css';zask.rel='stylesheet';zask.href=zasi;zasj.appendChild(zask);}
function zarm(){document.getElementById("options_progress_dialog_bar").style.width=0;$("options_page_mask").style.display="none";$("options_progress_dialog").style.display="none";}
var zasl=0;var zasm;function zasd(zasn){if(zasn>zasl){zasl=zasn;}
if(zasm){clearInterval(zasm);}var zfo=document.getElementById("options_progress_dialog_bar");var zaso=parseInt(zfo.style.width);if(zaso>=zasl){return;}
var zft=setInterval(zjx,10);function zjx(){if(zaso>zasl){clearInterval(zft);}
else{zaso++;zfo.style.width=zaso+'%';document.getElementById("options_progress_dialog_label").innerHTML=zaso*1+'%';}
}}var alert=function zasp(zhk){var zaph=zoj();if(zaph){zaph.alert(zhk);}
else{window.alert(zhk);}};function zam(){zan("OP: "+zao(zam.caller,arguments));}
function zap(){zan("OP: "+zao(zap.caller,arguments));}

