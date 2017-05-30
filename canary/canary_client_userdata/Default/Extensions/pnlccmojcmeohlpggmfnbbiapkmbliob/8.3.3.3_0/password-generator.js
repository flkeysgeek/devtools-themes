function zasq(){var zasr=$(zass).value;var zyk={};zyk[zuv]=zasr;zsh().zast(zyk);}
function zasu(){var zasv=document.getElementById(zass).value;zasw.zasx(zasv);}
function zasy(){try{if((!$(zasz).checked)&&(!$(zata).checked)&&(!$(zatb).checked)){$(zatb).checked=true;}
zdv("sa-generator","rf_pwd_generate_number_symbols",$(zatc).value);zdv("sa-generator","rf_pwd_generate_number_digits",$(zatd).value);zdv("sa-generator","rf_pwd_generate_upper_chk",$(zasz).checked?1:0);zdv("sa-generator","rf_pwd_generate_digits_chk",$(zatb).checked?1:0);zdv("sa-generator","rf_pwd_generate_lower_chk",$(zata).checked?1:0);zdv("sa-generator","rf_pwd_generate_specialsymb_chk",$(zate).checked?1:0);zdv("sa-generator","rf_pwd_generate_special_chars",$(zatf).value?$(zatf).value:"!@#$%^&");if(!zac){zdv("sa-generator","rf_pwd_generate_copycliboardp_chk",$(zatg).checked?1:0);}
zdv("sa-generator","rf_pwd_generate_excludesimilar_chk",$(zath).checked?1:0);zdv("sa-generator","rf_pwd_generate_onlyhexvalues_chk",$(zati).checked?1:0);}
catch(zhj){}}function zatj(zatk){try{$(zatl).innerHTML="";if(!zatk){var zatm=zsh().zatn();if(zatm.length){zato(zatm);return;}
}var zatp;var zatq=$(zatc);var zatr=parseInt(zatq.value);if(zatr==0||zatr>zats){$(zatl).innerHTML=zaof("wrong_number_of_characters");$(zatc).focus();zatp=zaof("language");if(zatp&&zatp.toString()=="ja"){$(zatl).style.fontSize="6px";}
return;}var zatt=$(zatd);var zatu=parseInt(zatt.value);if(zatu>zatr){$(zatl).innerHTML=zaof("wrong_number_of_digits");$(zatd).focus();zatp=zaof("language");if(zatp&&zatp.toString()=="ja"){$(zatl).style.fontSize="6px";}
return;}var zatv=RfapiJS["utils"].generatePassword(zatr,$(zasz).checked,$(zata).checked,$(zatb).checked,$(zate).checked,$(zatf).value,zatu,$(zati).checked,$(zath).checked);if(!zac){var zatw=$(zatg);if(zatw.checked==true||zatw.checked=='true'){zasw.zasx(zatv);}
}var zatm=zsh().zatx(zatv);zato(zatm);}catch(zhj){}
}function zato(zatm){var zcw;var zaty=$(zass);for(zcw=zaty.options.length-1;zcw>=0;zcw--){zaty.remove(zcw);}
for(var zcw=0;zcw<zatm.length;zcw++){zatz(zatm[zcw],false,zcw==0);}
zatz("",true,false);};function zatz(zyr,zaua,zaub){var zauc=document.createElement('option');zauc.text=zaua?zaof("clear_list"):zyr;zauc.value=zaua?-1:zyr;zauc.setAttribute("class","password_value_opt");$(zass).add(zauc);zauc.selected=zaub;if(zaub){zaud(zyr,$("rfpassword_generator_strenght_img"),$("rfpassword_generator_strenght_lbl"),$("rf_passgen_strength_div"));}
}function zaue(event){var zauf=$(zass).value;if(zauf==-1){zsh().zaug();zatj(true);return;}
zaud(zauf,$("rfpassword_generator_strenght_img"),$("rfpassword_generator_strenght_lbl"),$("rf_passgen_strength_div"));}
;function zauh(){if($(zati).checked){$(zasz).disabled="disabled";$(zata).disabled="disabled";$(zatb).disabled="disabled";$(zate).disabled="disabled";$(zatf).disabled="disabled";$(zatd).disabled="disabled";}
else{$(zasz).disabled="";$(zata).disabled="";$(zatb).disabled="";$(zate).disabled="";$(zatf).disabled="";$(zatd).disabled="";}
}function zaui(event){var zfi=(event.which)?event.which:event.keyCode;return!(zfi>31&&(zfi<48||zfi>57));}
function zauj(){var zauk=this;if(!zauk.value||parseInt(zauk.value)==0){if(zauk.getAttribute("id")==zatc){zauk.value="14";}
else{zauk.value="1";}}}function zaul(zaky){var zaum;var zaun=$(zatf);if(zac){zaum=String.fromCharCode(zaky.zauo);if((zaky.keyCode==8)||(zaky.zauo==0)&&(zaky.keyCode!=13)){return true;}
}else{zaum=String.fromCharCode(zaky.charCode);if((zaky.charCode==0)&&(zaky.keyCode!=13)){return true;}
}var zaup="~_!@#$%^&*()+=-[]\\\';,./{}|\":<>?";var zauq=zaup.indexOf(zaum);if(zauq==-1){return false;}
if(zaky.target.value.length>30){return false;}var zaur=zaun.value;if(!zaur.length){return true;}
var zaus=zaur.indexOf(zaum);if(zaus==-1){return true;}
return false;}function zaut(zaky){try{var zaur=zaky.zauu.zauv("Text");var zaum,zauq;var zaup="~_!@#$%^&*()+=-[]\\\';,./{}|\":<>?";var zauw=zaur.length;for(var zcw=0;zcw<zauw;zcw++){zaum=zaur[zcw];zauq=zaup.indexOf(zaum);if(zauq==-1){zaur=zaux(zaur,zcw,1);zcw=0;zauw=zauw-1;}
}if(zaur.length){zaum=zaur[0];zauq=zaup.indexOf(zaum);if(zauq==-1){zaur=zaux(zaur,0,1);}
}zaky.zauu.zauy("text/plain",zaur);setTimeout(function(){$(zatf).value=zaur;}
,150);zaky.zauz=false;return false;}catch(zhj){}}function zava(zaky){try{zaky=zaky||window.event;var target=(zaky.target)?zaky.target:zaky.scrElement;var zavb=target.checked;if(zavb==false||zavb=="false"){if(target.id==zatb){$(zatd).setAttribute("disabled",'true');$(zavc).style.color="grey";}
if((!$(zasz).checked)&&(!$(zata).checked)&&(!$(zatb).checked)){$(zavd).setAttribute("disabled",'true');}
}else{$(zavd).removeAttribute("disabled");if(target.id==zatb){$(zatd).removeAttribute("disabled");$(zavc).style.color="black";}
}}catch(zhj){}}function zave(){var zavf=$(zate);zavf.checked?$(zatf).removeAttribute("readonly"):$(zatf).setAttribute("readonly",'true');$(zatf).style.color=zavf.checked?"black":"grey";}
var zavg={"Weak":{"image":"passaud_weak.ico","text":zaof("pwd_score_weak"),"color":"RGB(247,64,45)"
}
,"Medium":{"image":"passaud_fair.ico","text":zaof("pwd_score_medium"),"color":"RGB(255,152,58)"
}
,"Good":{"image":"passaud_good.ico","text":zaof("pwd_score_good"),"color":"RGB(153,201,42)"
}
,"Strong":{"image":"passaud_strong.ico","text":zaof("pwd_score_strong"),"color":"RGB(88,179,79)"
}
,"Default":{"image":"passaud_weak.ico","text":"n/a","color":"RGB(255,152,58)"
}
,"GetDataByLevel":function(zavh){switch(zavh){case 0:return this["Weak"];case 1:return this["Medium"];case 2:return this["Good"];case 3:return this["Strong"];default:return this["Default"];}
}};function zaud(zavi,zavj,zavk,zavl){if(!zavi){var data=zavg["GetDataByLevel"](-1);zavj.setAttribute("src",data["image"]);zavk.innerHTML=data["text"];zavk.style.color=data["color"];zavl.style.display="none";return;}
var zavm=RfapiJS["SecurityScore"].CalcPasswordStrength(zavi);var zavn=RfapiJS["SecurityScore"].GetScoreLevel(zavm);var data=zavg["GetDataByLevel"](zavn);zavj.setAttribute("src",data["image"]);zavk.innerHTML=data["text"];zavk.style.color=data["color"];zavl.style.display="block";}
function zaux(zafb,zjq,zalb){return zafb.substring(0,zjq)+zafb.substring(zjq+zalb);}
function zam(){zan(zao(zam.caller,arguments));}function zap(){zan(zao(zap.caller,arguments));}

