var zcxe={"nm-settings":{"toolbar":false,"popup-windows-toolbar":true,"popup":true,"horizontal":false,"focus":true}
,"sa-generator":{"rf_pwd_generate_number_symbols":14,"rf_pwd_generate_number_digits":1,"rf_pwd_generate_upper_chk":1,"rf_pwd_generate_lower_chk":1,"rf_pwd_generate_digits_chk":1,"rf_pwd_generate_copycliboardp_chk":0,"rf_pwd_generate_special_chars":"!@#$%^&","rf_pwd_generate_specialsymb_chk":1,"rf_pwd_generate_excludesimilar_chk":1,"rf_pwd_generate_onlyhexvalues_chk":0}
,"sa-search":{"rf_search_yahoo_chk":1,"rf_search_google_chk":1,"rf_search_roboform_chk":1,"rf_search_bing_chk":1,"rf_search_ebay_chk":1,"rf_search_amazon_chk":1}
,"sa-settings":{"rf_fill_empty_fields_chk":false,"rf_highlight_filledflds_chk":false,"rf_match_fillsubmitaction":true,"rf_cachemp_onbrowser_close_chk":false}
,"recent":{"items":[]
},"sa-auto-save":{"rf_show_autosavebar":true,"rf_alt_click_forces_autosave":true,"rf_shift_enter_forces_autosave":true,"rf_show_auto_save_blocking_confirm":true,"rf_show_auto_save_unblocking_confirm":true,"rf_show_folder_field_in_dialog":true,"rf_current_selected_folder":"","blocking":[]}
,"sa-user":{"rf_username":"","rf_accpwd":"","rf_masterpwd":"","rf_timeout_select":1440}
,"internal":{"first-start":false,"is-nm":false,"is-sa":false,"need-repair":false,"active-server":"https://online.roboform.com"
}
};function zcxd(){zdv("sa-user","rf_masterpwd","");zdv("sa-user","rf_accpwd","");}
function zcxf(){localStorage.removeItem("nm-settings");}
function zcuw(){localStorage.removeItem("sa-generator");localStorage.removeItem("sa-search");localStorage.removeItem("sa-settings");localStorage.removeItem("recent");localStorage.removeItem("sa-user");}
function zcxg(zee){var zcxh={};if(!zee){return zcxh;}
var zcxi=localStorage[zee];if(!zcxi){return zcxh;}
try{zcxh=JSON.parse(zcxi);}catch(zhj){}return zcxh;}
function zdv(zee,name,value){if(!zee){return;}var zcxj=zcxg(zee);zcxj[name]=value;localStorage[zee]=JSON.stringify(zcxj);}
function zde(zee,name,zawm){var zcxj=zcxg(zee);var value=zcxj[name];if(value===undefined){if(zawm===undefined){var zcxk=zcxe[zee];if(zcxk){value=zcxk[name];}
}else{value=zawm;}}if(value===undefined){}if(typeof(value)=="string"){switch(value.toLowerCase()){case"true":return true;case"false":return false;}
}return value;}var zcxl="101112131415161718191a1b1c1d1e1f";function zcns(zcxm,zbih){var zcxn=CryptoJS.lib.CipherParams.create({"ciphertext":CryptoJS.enc.Base64.parse(zcxm)}
);var zcxo=CryptoJS.enc.Latin1.parse(CryptoJS.enc.Latin1.stringify(CryptoJS.SHA256(zbih)));var zcxp=CryptoJS.enc.Hex.parse(zcxl);var zcxq=CryptoJS.AES.decrypt(zcxn,zcxo,{"iv":zcxp}
);var zgv=zcxq.toString(CryptoJS.enc.Utf8);var zcxr=RfapiJS["utils"].zawe(zgv);var zbtu=RfapiJS["UTF8"].zawf(zcxr);return zbtu;}
function zyt(zbtu,zbih){var zcxs=RfapiJS["UTF8"].zcxt(zbtu);var zcxu=RfapiJS["utils"].zcxv(zcxs);var zcxo=CryptoJS.enc.Latin1.parse(CryptoJS.enc.Latin1.stringify(CryptoJS.SHA256(zbih)));var zcxp=CryptoJS.enc.Hex.parse(zcxl);var zcxw=CryptoJS.AES.encrypt(zcxu,zcxo,{"iv":zcxp}
);var zcxx=zcxw.toString();var zcxn=CryptoJS.lib.CipherParams.create({"ciphertext":CryptoJS.enc.Base64.parse(zcxx)}
);var zcxq=CryptoJS.AES.decrypt(zcxn,zcxo,{"iv":zcxp}
);var zgv=zcxq.toString(CryptoJS.enc.Utf8);var zcxy=zcxu==zgv;return zcxx;}

