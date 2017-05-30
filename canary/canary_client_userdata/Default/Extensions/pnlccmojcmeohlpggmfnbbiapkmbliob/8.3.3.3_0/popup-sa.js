var zben="n";var zbeo="c";var zbep="v";var zbeq="t";var zber="d";var zbes="i";var zbet="id";var zbeu="o";var zbev="g";var zbew="i";var zbex="f";var zbey="Custom";var zbez=25;var zbfa=5;var zbfb=7;var zbfc="field-name";var zbfd="field-value";var zbfe="group-type";var zbff="instance-name";var zbfg="isCustom";var zbfh="field-index";var zbfi="gr_inst.png";var zbfj="note$";var zbfk=["prompt$",zbfj];var zbfl="rf_passcard_table_input";var zbfm="rf_passcard_table_area";var zbfn="";var zbfo="li#";var zbfp="a_href#";var zbfq="/show_password_tc.png";var zbfr="nodeminus2.png";var zbfs="nodeplus2.png";var zbft="folder_tree.png";var zbfu="/safenote48.png";var zbfv="/identity48.png";var zbfw="/Contact48.png";var zbfx=255;var zats=99;var zwf="popup-sa.js";var zalx=(new Date).getTime();var zaxj=(function(){function zaxj(){zaxl.call(this);this.zapg=true;this.zbfy="";this.zbac=["mousedown","mouseup","mouseover","mousemove","mouseout","mousewheel","click","mouseenter","mouseleave"];this.zbfz=false;this.zbga=false;this.zbgb=false;this.zmg=zaxl.prototype;this.zbgc=10000;this.zbgd=this.zbgc;this.zbge={"Edit":0,"Rename":1,"Delete":2,"Goto":3,"GoFill":4,"LoginSameWindow":5,"LoginNewWindow":6,"FillForms_ID":7,"FillSubmit_ID":8,"CreateFolder":9,"Save":10,"CreateSafenote":11,"CreateContact":12,"CreateIdentity":13,"RejectSharedFolder":14
}
;this.zbgf=20;this.zbgg=0;this.zbgh="http://search.yahoo.com/search?fr=robo&p=";this.zbgi="http://www.google.com/search?ie=UTF-8&oe=UTF-8&q=";this.zbgj="https://www.bing.com/search?q=";this.zbgk="http://www.ebay.com/sch/items/?_nkw=";this.zbgl="https://www.amazon.com/s/field-keywords=";this.zbgm=30;this.zbgn="";this.zbgo="";this.zbgp=0;this.zbgq=1000;this.zbgr=0;this.zbgs="";this.zbgt=1000;this.zbgu=0;this.zbgv=5;this.zbgw=this.zbgv;this.zbgx="";this.zbgy=[];this.zbgz=0;window.oncontextmenu=function(){return false;}
;}zaxj.prototype=Object.create(zaxl.prototype);zaxj.prototype.zba=function(zaxh){this.zmg.zba.call(this);try{var self=this;this.zbga=zaxh;window.addEventListener("unload",function(){self.ziy();}
,false);document.documentElement.style.width="";this.zbcz();this.zbha();this.zbbz();this.zbhb();this.zbhc();var zbhd=new zbcv("strip_loader_div",undefined,"dialog");var zbhe=self.zayi(zbhd);var zbcj=[zbhe];self.zayb.Navigate("Load Screen",zbcj,undefined,function(){self.zbhf();}
,undefined,true);this.zbga?this.zbhg():this.ztr();}
catch(zhj){this.zin(zio,zhj);}};zaxj.prototype.zbak=function(zbai){zbai.setAttribute("autofocus","");}
;zaxj.prototype.zazk=function(item){return item["m_oContext"];}
;zaxj.prototype.zazm=function(item){return item["m_oItemInfo"];}
;zaxj.prototype.zazy=function(zazq,zhf,item){var zya=item["m_sName"];var self=this;var zbej;zhf.appendChild(zbej=this.createElement("div",{"class":"toolbar-minidialog-icon-V8"}
));zbej.addEventListener("click",function(event){var zbhh=$(zbhi);if(zbhh.style.display=="none"){self.zbhj(event);}
else{self.zbhk();}event.preventDefault();event.stopPropagation();}
,false);this.zaxy.forEach(function(zbad){zbej.addEventListener(zbad,function(event){event.stopImmediatePropagation();}
,false);});zbej.addEventListener("mouseover",function(event){self.css.zayp(zhf,"toolbar-button-V8-hover");if(zya=="match"){self.zbhl(event);}
},false);zbej.addEventListener("mouseout",function(event){self.css.zayo(zhf,"toolbar-button-V8-hover");if(zya=="match"){self.zbhm(event);}
},false);};zaxj.prototype.zazz=function(zazq,zhf,item){}
;zaxj.prototype.zazw=function(zazq,zhf){};zaxj.prototype.zazx=function(zazq,zhf,zya){var self=this;var zbhn;zhf.appendChild(zbhn=this.createElement(zazv,{"class":"toolbar-minidialog-icon-V8"}
));zbhn.addEventListener("click",function(event){var zbho=zbhn.parentElement;var zbhh=$(zbhp);if(zbhh.style.display=="none"){self.zbhq(event,zbho);}
else{self.zbhr();}event.preventDefault();event.stopPropagation();}
,false);this.zaxy.forEach(function(zbad){zbhn.addEventListener(zbad,function(event){event.stopImmediatePropagation();}
,false);});zbhn.addEventListener("mouseover",function(event){self.css.zayp(zhf,"toolbar-button-V8-hover");self.zbhs(event,zhf);}
,false);zbhn.addEventListener("mouseout",function(event){self.css.zayo(zhf,"toolbar-button-V8-hover");if(zya=="new-identity"||zya=="new-identity2"){self.zbht(event,zhf);}
},false);};zaxj.prototype.zbaa=function(zazq,zhf,zya){var self=this;var zbhu;zhf.appendChild(zbhu=this.createElement(zazv,{"class":"toolbar-minidialog-icon-V8"}
));zbhu.addEventListener("click",function(event){var zbho=zbhu.parentElement;var zbhh=$(zbhp);if(zbhh.style.display=="none"){self.zbhq(event,zbho);}
else{self.zbhr();}event.preventDefault();event.stopPropagation();}
,false);this.zaxy.forEach(function(zbad){zbhu.addEventListener(zbad,function(event){event.stopImmediatePropagation();}
,false);});zbhu.addEventListener("mouseover",function(event){self.css.zayp(zhf,"toolbar-button-V8-hover");self.zbhs(event,zhf);}
,false);zbhu.addEventListener("mouseout",function(event){self.css.zayo(zhf,"toolbar-button-V8-hover");if(zya=="new-identity2"){self.zbht(event,zhf);}
},false);};zaxj.prototype.zbbe=function(data,zaex){if(zaex=="click"){this.zbhv(data);}
else if(zaex=="mouseup"){this.zbhw(data);}else if(zaex=="mouseenter"){this.zbhx(data);}
else if(zaex=="mouseleave"){this.zbhy(data);}};zaxj.prototype.zbae=function(event){if(this.zbfz){this.zbfz=false;return;}
this.zmg.zbae.call(this,event);};zaxj.prototype.zbhx=function(data){}
;zaxj.prototype.zbhy=function(data){};zaxj.prototype.RejectSharedFolder=function(zazl){this.zbhz(zazl);}
;zaxj.prototype.zbcz=function(){this.css.zapm('popup-sa.css');}
;zaxj.prototype.ztr=function(){var self=this;setTimeout(function(){zsh().ztr(function(){setTimeout(function(){if(!self.zbia()){return;}
zoj().ztd({"name":"AutoSaveUserLoggedIn"});self.zbib();}
,0);},function(zdq){var zbic=zdq[ztu];var zbid=zdq[ztt];if(zbic==401||zbic==zbie||zbic==503){self.zbif(zbid);return;}
if(zbic==zbig){setTimeout(function(){var zbih=zsh().zarr();var zbii=zsh().zbij();if(zbih&&zbii){self.zbik(zdq["params"]["Channel"],false);}
else{self.zbif(zbid);}},200);return;}self.zbil({"description":zbid}
);});},0);};zaxj.prototype.zbia=function(){if(!zsh().zyv){this.zbif();return;}
var zary=zsh().zarz(zsh().zyv);if(zary["result"]!=true||zoj().zrr.zavr||zoj().zrr.zavs){this.zbim();$("change_master_password_header_text").innerHTML=zaof("MasterPass_Change");if(zary["result"]!=true){$("change_master_password_error_div").innerHTML=zary["reason"];}
if(zoj().zrr.zavr){$("change_master_password_header_text").innerHTML=zaof("MasterPass_Expired");}
return false;}return true;};zaxj.prototype.zbif=function(zbid){var self=this;setTimeout(function(){var zbih=zsh().zarr();if(zbih){var zpn={"description":zbid,"user_id":zbih}
;self.zbin(zpn);}else{self.zbil({"description":zbid}
);}},0);};zaxj.prototype.zbio=function(){var self=this;zsh().zbip(function(zsj){self.zbiq(zsj);}
)};zaxj.prototype.zbiq=function(zsj){var zsk=JSON.parse(zsj);if(typeof(zsk)=="undefined"){return;}
zoj().ztd({"name":"AutoSaveUserLoggedOff"});this.zbif();}
;zaxj.prototype.zbir=function(zbis){if(zae){window.external.mxGetRuntime().zbit("rfpanel").hide();}
else{setTimeout(function(){window.close();},zbis);}
};zaxj.prototype.zayl=function(){return this.createElement(zazv,{"class":"toolbar-match-title-V8"}
,[this.createTextNode(zaof("match_fill_from"))]);}
;zaxj.prototype.zayd=function(){var zayt=$("mainscreen");zayt.style.display="block";return zayt;}
;zaxj.prototype.zbiu=function(){this.zbiv();};zaxj.prototype.zbiw=function(zbix,zbiy){$(zbix).innerHTML="";var zbiz=$(zbiy).value;if(!zbiz||zbiz.length>zbfx){$(zbix).innerHTML=zaof("name_length_restrictions");$(zbiy).focus();return false;}
if(!zafa(zbiz)){$(zbix).innerHTML=zaof("create_symbol_restrict");$(zbiy).focus();return false;}
return true;};zaxj.prototype.zbja=function(zsd,zwy,zbjb,zbjc,zxc){if(typeof(zbjc)=="undefined"){zbjc=zde("sa-settings","rf_fill_empty_fields_chk");}
zxc=typeof(zxc)=="undefined"?undefined:(!zxc.length?undefined:zxc);var zyk={}
;zyk[zsf]=zsd;zyk[zanu]=zbjb;zyk[zwo]=zwy;zyk[zbjd]=false;zyk[zbje]=true;zyk[zbjf]=false;zyk[zbjg]=zbjc;if(zxc){zyk["instances"]=zxc;}
var self=this;var zsg=JSON.stringify(zyk);zsh().zbjh(zsg,function(zsj){self.zbji(zsj);}
);};zaxj.prototype.zbji=function(zsj){var zsk=JSON.parse(zsj);if(this.zbjj(zsk)){return;}
this.zbir(500);};zaxj.prototype.zbjk=function(zbjl,path,zaqp){var self=this;var zse={}
;zse[zus]=path;zse[zuo]=zbjl;zsh().zvq(JSON.stringify(zse),function(zsj){var zakw=JSON.parse(zsj);zakw[zsn]["title"]=zaqp;self.zbjm(zakw);}
);};zaxj.prototype.zbjm=function(zakw){try{var self=this;setTimeout(function(){if(self.zbjj(zakw)){return;}
var zpn=zakw[zsn];var zbjn=zakw[zyl];var zbjl=zpn[zuo];var path=zpn[zus];var zaqp=zpn["title"];var zss=self.zbjo(zbjn,zbjl);zpn={"types":zbjl,"path":path,"title":zaqp}
;var zbjp=self.zbjq(zss);var zbjr=new zbcv(undefined,undefined,"header-list-title");zbjr["m_oContext"]={"title":zaqp}
;var zbjs=self.zayi(zbjr);var zbjt=new zbcv(undefined,undefined,"folder-navigation");zbjt["m_oContext"]={"path":path}
;var zbju=self.zayi(zbjt);var zbcj=[zbjs,zbju,zbjp];self.zayb.Navigate("Item List",zbcj,zpn,function(zpn){self.zbhf();self.zbjv(zpn)}
);},0);}catch(zhj){}};zaxj.prototype.zbjo=function(zbjn,zbjl){var zbjw=[];var zbjx=[];for(var zcw=0;zcw<zbjn.length;++zcw){var zsd=zbjn[zcw];var zbjy=this.zbgd+zcw;var path=zsd[zus];var zbjz=zsd[zaec];var zazo=zaee(zbjz,zsd["s"]||zsd["Shared"]);var text=zaea(zsd);var zpn={}
;zpn[zbka]=zbjl;var zbkb=new zbcv(zbjy,0,zbjz==ztk["RfItemType_Folder"]?"menu":"button",text,path,path,zazo,zsd,zpn);if(zbjz==ztk["RfItemType_Folder"]){zbjx.unshift(zbkb);}
else{zbjw.push(zbkb);}}for(var zbkc=0;zbkc<zbjx.length;++zbkc){zbjw.unshift(zbjx[zbkc]);}
return zbjw;};zaxj.prototype.zbkd=function(zbke){var zagj=$(zbke);var zbkf=zbke==zbkg;var zsm=undefined;var zsd=undefined;if(!zbkf){zsm=zagj.getAttribute(zsf);if(!zsm){return;}
zsd=JSON.parse(zsm);}else{var zbhh=$(zbhi);var zbkh=zbhh.getAttribute(zsf);if(!zbkh){return;}
var zbki=JSON.parse(zbkh);if(!zbki){return;}zsd=zbki[0];if(!zsd){return;}
var zbkj=zde("sa-settings","rf_match_fillsubmitaction");}
switch(zsd[zaec]){case ztk["RfItemType_Folder"]:var zbkk=zagj.getAttribute(zsn);if(!zbkk){return;}
var zpn=JSON.parse(zbkk);var zbkl=zpn[zbka];var zbkm=this.zayb.zbcq();var zaqp=zbkm["title"];var zbkn=[];for(var zbko in zbkl){zbkn.push(zbkl[zbko]);}
this.zbjk(zbkn,zsd[zaed],zaqp);break;case ztk["RfItemType_Login"]:case ztk["RfItemType_Bookmark"]:var zbkp=true;var zbkq=zbkf?zbkj:true;var zbkr=false;if(zsd[zaec]==ztk["RfItemType_Bookmark"]){zbkp=zbkq=zbkr=false;}
var zyk={};zyk[zbjf]=zbkr;zyk[zwo]=zbkq;zyk[zbje]=zbkp;zyk[zbjd]=!zbkf;zyk[zsf]=zsd;zyk[zanu]=this.zbge["GoFill"];var self=this;var zsg=JSON.stringify(zyk);zsh().zbjh(zsg,function(zsj){self.zbji(zsj);}
);break;case ztk["RfItemType_Contact"]:case ztk["RfItemType_Safenote"]:case ztk["RfItemType_SearchCard"]:case ztk["RfItemType_BlockingPasscard"]:this.zbks(zsd);break;case ztk["RfItemType_Identity"]:this.zbja(zsd,false,"FillForms_ID");break;}
};zaxj.prototype.zbhv=function(data){try{var zbkt=data["id"];var zbku=parseInt(zbkt);if(!isNaN(zbku)){this.zbkd(zbku);return;}
var self=this;switch(zbkt){case zbkv:this.zbkw(["contextmenu_list_page","contextmenu_common"]);this.zbjk([ztk["RfItemType_Login"],ztk["RfItemType_SearchCard"],ztk["RfItemType_BlockingPasscard"],ztk["RfItemType_Folder"]],zvh,zaof("logins_header"));break;case zbkx:this.zbkw(["contextmenu_list_page","contextmenu_common"]);this.zbjk([ztk["RfItemType_Bookmark"],ztk["RfItemType_Folder"]],zvh,zaof("bookmarks_header"));break;case zbky:this.zbkw(["contextmenu_safenote_page","contextmenu_list_page","contextmenu_common"]);this.zbjk([ztk["RfItemType_Safenote"],ztk["RfItemType_Folder"]],zvh,zaof("safenotes_header"));break;case zbkz:self.zbla();break;case zblb:this.zbio();break;case zblc:zsh().zaqc();break;case zbld:case zble:case zblf:case zblg:var zbkk=$(zbkt).getAttribute(zsn);if(!zbkk){return;}
var zpn=JSON.parse(zbkk);var zyk={};var zblh=false;zyk[zbjf]=zblh;zyk[zbli]=zpn[zbli];zsh().zblj(zyk);this.zbir(100);break;case zblk:zsh().zbll(JSON.stringify({}
),function(zsj){self.zblm(JSON.parse(zsj));});break;case zbkg:this.zbkd(zbkt);break;case zbln:this.zblo();break;case zblp:this.zblq(zblp);break;case zblr:this.zblq(zblr);break;default:break;}
}catch(zdn){var zafb=zdn.description?zdn.description:zdn.stack;}
};zaxj.prototype.zbls=function(){var zyk={};zyk[zbjf]=false;zyk[zbli]="localhelp.html";zsh().zblj(zyk);this.zbir(100);}
;zaxj.prototype.zblm=function(zakw){var self=this;var zss=[];var zbjr=new zbcv(undefined,undefined,"header-simple-title");zbjr["m_oContext"]={"title":zaof("recent_header")}
;zss.push(zbjr);var zbjn=zakw[zyl];for(var zcw=0;zcw<zbjn.length;zcw++){var zsd=zbjn[zcw];if(typeof zsd[zus]=="undefined"){continue;}
var zbjy=this.zbgd+zcw;var path=zsd[zus];var zazo=zaee(zsd[zaec],zsd["s"]);var text=zaea(zsd);var zblt={}
;var zbkb=new zbcv(zbjy,0,"button",text,path,path,zazo,zsd,zblt);zss.push(zbkb);}
var zblu=new zbcv(0,0,"separator");zss.push(zblu);var zblv={}
;var zblw=new zbcv(zblk,0,"button","Clear List",zblk,"",zaow,undefined,zblv);zss.push(zblw);var zbjp=self.zbjq(zss);var zbcj=[zbjp];self.zayb.Navigate("Recently Used",zbcj,undefined,function(zpn){self.zbhf();self.zbjv(zpn)}
);};zaxj.prototype.zblx=function(zft){switch(zft){case"contextmenu_edit_tr":return this.zbge["Edit"];case"contextmenu_rename_tr":return this.zbge["Rename"];case"contextmenu_delete_tr":return this.zbge["Delete"];case"contextmenu_loginsame_tr":return this.zbge["LoginSameWindow"];case"contextmenu_loginnew_tr":return this.zbge["LoginNewWindow"];case"contextmenu_gofill_tr":return this.zbge["GoFill"];case"contextmenu_goto_tr":return this.zbge["Goto"];case"contextmenu_fillformsid_tr":return this.zbge["FillForms_ID"];case"contextmenu_fillsubmitid_tr":return this.zbge["FillSubmit_ID"];case"contextmenu_createfolder_tr":return this.zbge["CreateFolder"];case"contextmenu_createsafenote_tr":return this.zbge["CreateSafenote"];case"contextmenu_createcontact_tr":return this.zbge["CreateContact"];case"contextmenu_createidentity_tr":return this.zbge["CreateIdentity"];case"contextmenu_rejectsharedfolder_tr":return this.zbge["RejectSharedFolder"];}
};zaxj.prototype.zbjj=function(zsj){var self=this;var zdq=zsj[zsl];if(!zdq){return false;}
var zpn=zsj[zsn];var zbly=zdq[ztu];var zblz=zdq[ztt];zpn["description"]=zblz;if(zbly==401){self.zbma();}
if(zbly==zaoe){if(zpn&&zpn["accountMode"]&&zpn["accountMode"]==1){self.zbif(zblz);}
else{self.zbmb(zpn);}}if(zbly==zaoh){self.zbmc();}
return true;};zaxj.prototype.zbmd=function(zaky){zaky=zaky||window.event;var target=(zaky.target)?zaky.target:zaky.scrElement;var zfi=(zaky.charCode)?zaky.charCode:((zaky.zauo)?zaky.zauo:zaky.keyCode);if(zfi!=zbme){return true;}
var zft=target.getAttribute(zbmf);if(zft==zbmg){this.zbmh();}
else if(zft==zbmi){$(zbmj).focus();}else if(zft==zbmj){this.zbmk();}
else if(zft==zbml){this.zbmm();}else if(zft==zbmn){this.zbmo();}
else if(zft==zbmp){this.zbmq();}else if(zft==zbmr){this.zbms();}
else if(zft==zbmt){this.zbmu();}else if(zft==zbmv){this.zbmw();}
else if(zft==zbmx){$(zbmy).focus();}else if(zft==zbmy){this.zbmz();}
else if(zft==zbna){this.zbnb();}else if(zft==zbnc){this.zbnd();}
else if(zft==zbne){this.zbnf();}return false;};zaxj.prototype.zbhc=function(){var self=this;$('identitymini_submit_btn').addEventListener("click",function(){self.zbng();}
,false);$('identitymini_fill_btn').addEventListener("click",function(){self.zbnh();}
,false);$('identitymini_edit_btn').addEventListener("click",function(){self.zbni();}
,false);$('identitymini_showall_link').addEventListener("click",function(){self.zbnj();}
,false);$(zbhp).addEventListener("mouseenter",function(){}
,false);$(zbhp).addEventListener("mouseleave",function(){}
,false);$('rfmatch_edit_btn').addEventListener("click",function(){self.zbnk();}
,false);$('rfmatch_fill_btn').addEventListener("click",function(){self.zbnl();}
,false);$('rfmatch_submit_btn').addEventListener("click",function(){self.zbnm();}
,false);$("rfmatch_showall_link").addEventListener("click",function(){self.zbnn();}
,false);$(zbhi).addEventListener("mouseenter",function(event){}
,false);$(zbhi).addEventListener("mouseleave",function(event){}
,false);var zbno=$("rfmatch_logins_fieldset");if(zbno){zbno.addEventListener("scroll",function zbnp(event){self.zbiv();}
,false);}var zbnq=$("contextmenu_table");for(var zbnr=0;zbnr<zbnq.rows.length;zbnr++){(function(){var zbns=zbnq.rows[zbnr];if(zbns.getAttribute("id")){zbns.addEventListener("click",function(){self.zbnt(zbns);}
,false);zbns.addEventListener("mousedown",function(event){self.zbnu(event);}
,false);zbns.addEventListener("mouseup",function(event){self.zbnv(event);}
,false);}})();}};zaxj.prototype.zbha=function(){$("rfloginsection_userid_td").innerHTML=zaof("RFOSetup_EnterAccountId");$(zbnw).value=zaof("Install_Next");$(zbnx).value=zaof("Install_Back");$(zbny).innerHTML=zaof("RFOSetup_CreateNewAccount");$(zbnz).value=zaof("Install_Next");$(zboa).value=zaof("Install_Back");$("login_pwdsection_entertxt_td").innerHTML=zaof("RFOSetup_EnterPasswordForAccount");$(zavd).value=zaof("Generate");if($(zbob)){$(zbob).value=zaof("Copy_pwd");}
if($(zboc)){$(zboc).value=zaof("Fill");}if(zad||zae||zag){$("pwd_copy_lbl").innerHTML=zaof("generate_Pass_helptext1")+"<br />"+zaof("generate_Pass_helptext2")+"<br />"+zaof("generate_Pass_helptext3")+"<br />"+zaof("generate_Pass_helptext4");}
else if(zac){$("pwd_copy_lbl").innerHTML=zaof("generate_Pass_helptext1")+"<br />"+zaof("generate_Pass_helptext2")+"<br />"+zaof("generate_Pass_helptext4");}
else if(zaf){$("pwd_copy_lbl").innerHTML=zaof("generate_Pass_helptext1");}
$("pwd_generate_copy_lbl").innerHTML=zaof("Copy_Password_to_Clipboard");$("rf_passgen_similar_label").innerHTML=zaof("Exclude_similar");$("rf_passgen_hex_label").innerHTML=zaof("Hexadecimal");$("pwd_number_smbl_lbl").innerHTML=zaof("Number_of_symbols")+":";$(zavc).innerHTML=zaof("Minimal_Number_of_digits")+":";$("rf_otp_toptext_lbl").innerHTML=zaof("OTP_otptext_main");$("rf_otp_checkmail_lbl").innerHTML=zaof("OTP_otptext_mail");$("rf_otp_pwd_lbl").innerHTML=zaof("One_time_password");$("rf_otp_memorize_lbl").innerHTML=zaof("OTP_memorize_device");$("rfmatch_topcaption_td").innerHTML=zaof("match_matchlogins");$("rfmatch_fillempty_lbl").innerText=zaof("match_fillemptyfields");$("rfmatch_edit_btn").value=zaof("match_edit_btn");$("rfmatch_fill_btn").value=zaof("match_fillforms_btn");$("rfmatch_submit_btn").value=zaof("match_fillsubmit_btn");$("rfmatch_showall_link").innerText=zaof("match_show_all_logins");$("identitymini_topcaption_td").innerHTML=zaof("fill_from_identity");$("identitymini_fillempty_lbl").innerText=zaof("match_fillemptyfields");$("identitymini_edit_btn").value=zaof("match_edit_btn");$("identitymini_fill_btn").value=zaof("match_fillforms_btn");$("identitymini_submit_btn").value=zaof("match_fillsubmit_btn");$("identitymini_showall_link").innerText=zaof("match_show_all_identities");$("session_expire_lbl").innerHTML=zaof("session_expire");$(zbod).value=zaof("savebar_close_btn");$("mastpwdEnter_maintext_div").innerHTML=zaof("password_protected3");$("mastpwdEnter_pwd_label").innerText=zaof("password");$(zboe).value=zaof("cancel_btn");$("rf_cache_mp_lbl").innerHTML=zaof("cache_mast_pwd");$(zbof).innerHTML=zaof("mp_createmp_text");$(zbog).innerHTML=zaof("savebar_createmp_password");$(zboh).innerHTML=zaof("savebar_createmp_confirm");$(zboi).value=zaof("cancel_btn");$(zboj).value=zaof("cancel_btn");$(zbok).value=zaof("cancel_btn");$(zbol).innerText=zaof("folder_name");$(zbom).value=zaof("cancel_btn");$(zbon).innerText=zaof("Rename_to");$("logineditor_fields_legend").innerText=zaof("Fields");$(zboo).innerHTML=zaof("new_login");$(zbop).innerHTML=zaof("new_bookmark");$(zboq).value=zaof("New_Folder");$(zbor).innerText=zaof("New");$("manualsaveDlg_createfld_namelbl").innerHTML=zaof("folder_name");$(zbos).value=zaof("cancel_btn");$(zbot).value=zaof("cancel_btn");$("confirm_accountpwd_emaillabel").innerHTML=zaof("Install_Email");$(zbou).value=zaof("Install_Next");$(zbov).value=zaof("Install_Back");$("confirm_td_maintext1").innerHTML=zaof("Setup_Welcome_HeaderTitle");$("confirm_td_maintext2").innerHTML=zaof("Setup_MasterPassword_HeaderSubtitle");$("confirm_accountpwd_confirmpwdtitle").innerHTML=zaof("Setup_ConfirmMasterPassword_Title");$("confirm_accountpwd_confirmpwdnotetxt").innerHTML=zaof("Setup_ConfirmMasterPassword_Prompt");$("confirm_accountpwd_pwdlabel").innerHTML=zaof("Setup_ConfirmMasterPassword_Password_Text");$("rfsignupsection_middletable_step1_toptxt_td").innerHTML=zaof("CreateAccount_Step1_Create_Free");$("rfsignupsection_middletable_step1_emailtd").innerHTML=zaof("Install_Email");$("rf_sign_td_step1_pwd").innerHTML=zaof("CreateAccount_Step1_MasterPwd");$("rf_sign_step1_text").innerHTML=zaof("CreateAccount_Step1_Text");$(zbow).value=zaof("Install_Next");$(zbox).value=zaof("Install_Back");$(zboy).value=zaof("cancel_btn");$("rf_createobj_notelbl_td").innerText=zaof("CreateDlg_note_lbl");$("rf_createobj_countrieslbl_td").innerText=zaof("CreateDlg_country_lbl");var zboz=document.getElementById(zbpa);var zbpb=RFB_COUNTRIES;for(var zcw=0;zcw<zbpb.length;zcw++){var zbpc=zbpb[zcw];var zbpd=document.createElement("option");zbpd.setAttribute("label",zbpc[0]);zbpd.setAttribute("value",zbpc[0]);zboz.add(zbpd,null);}
zboz.selectedIndex=0;$("change_master_password_current_label").innerText=zaof("MasterPass_Change_Old");$("change_master_password_new_label").innerText=zaof("MasterPass_Change_New");$("change_master_password_confirm_label").innerText=zaof("MasterPass_Change_Confirm");}
;zaxj.prototype.zbef=function(){var zbpe=$("settingsDialog");if(zbpe&&zbpe.style.display!="block"){zbpe.style.display="block";}
};zaxj.prototype.zbee=function(){zsh().zaqc();};zaxj.prototype.zbpf=function(){this.zbib();}
;zaxj.prototype.zazb=function(){var self=this;var zaqp=this.createElement("div",{"class":"toolbar-title-V8"}
);var zbeg=this.createElement("div",{"class":"toolbar-title-icon-V8 toolbar-home-icon-V8"}
);zbeg.addEventListener("click",function(){self.zbee();}
,false);zaqp.appendChild(zbeg);var zbeh=this.createElement("div",{"class":"toolbar-title-icon-V8 toolbar-main-settings-icon-V8","id":"chrome_settings_id"
}
);zbeh.addEventListener("click",function(){self.zbef();}
,false);zaqp.appendChild(zbeh);var zalw;var zbei=this.createElement("div",{"class":"toolbar-title-text-V8"}
,[zalw=this.createTextNode("RoboForm")]);zalw.data="RoboForm";zaqp.appendChild(zbei);return zaqp;}
;zaxj.prototype.zazc=function(zpn){var self=this;var zaqp=this.createElement("div",{"class":"toolbar-title-V8"}
);var zbpg=this.createElement("div",{"class":"toolbar-title-icon-V8 toolbar-back-icon-V8"}
);zbpg.addEventListener("click",function(){self.zayb.zbcp();}
,false);zaqp.appendChild(zbpg);var zgh=[];var zbph=zpn["image_data"];if(zbph){var zbpi=this.createElement("img",{"class":"toolbar-item-title-image-V8 toolbar-button-icon item-icon","src":zbph}
);zgh.push(zbpi);}var zalw=this.createTextNode("RoboForm");zgh.push(zalw);var zbpj=this.createElement("div",{"class":"toolbar-item-title-text-V8"}
,zgh);var zbei=this.createElement("div",{"class":"toolbar-title-text-V8"}
,[zbpj]);var zbpk=zpn?zpn["title"]:undefined;zalw.data=zbpk?zbpk:"RoboForm";zaqp.appendChild(zbei);return zaqp;}
;zaxj.prototype.zazd=function(zpn){var self=this;var zaqp=this.createElement("div",{"class":"toolbar-title-V8"}
);var zbpg=this.createElement("div",{"class":"toolbar-title-icon-V8 toolbar-back-icon-V8"}
);zbpg.addEventListener("click",function(){self.zbpf();}
,false);zaqp.appendChild(zbpg);var zalw;var zbei=this.createElement("div",{"class":"toolbar-title-text-V8"}
,[zalw=this.createTextNode("RoboForm")]);var zbpk=zpn?zpn["title"]:undefined;zalw.data=zbpk?zbpk:"RoboForm";zaqp.appendChild(zbei);return zaqp;}
;zaxj.prototype.zaze=function(zpn){var self=this;var zaqp=this.createElement("div",{"class":"toolbar-title-V8"}
);var zbpg=this.createElement("div",{"class":"toolbar-title-icon-V8 toolbar-back-icon-V8"}
);zbpg.addEventListener("click",function(){self.zbpf();}
,false);zaqp.appendChild(zbpg);var zbeh=this.createElement("div",{"class":"toolbar-title-icon-V8 toolbar-main-settings-icon-V8","id":"chrome_settings_id"
}
);zbeh.addEventListener("click",function(){self.zbef();}
,false);zaqp.appendChild(zbeh);var zalw;var zbei=this.createElement("div",{"class":"toolbar-title-text-V8"}
,[zalw=this.createTextNode("RoboForm")]);var zbpk=zpn?zpn["title"]:undefined;zalw.data=zbpk?zbpk:"RoboForm";zaqp.appendChild(zbei);return zaqp;}
;zaxj.prototype.zbpl=function(zft,zagt,name,zbpm){var item=this.createElement("div",{"class":zagt}
);item.id=zft;item.innerText=name;var self=this;item.addEventListener("mousedown",function(event){self.zbnu(event);}
,false);item.addEventListener("mouseup",function(event){self.zbnv(event);}
,false);item.addEventListener("click",zbpm,false);return item;}
;zaxj.prototype.zbkw=function(zagt){this.zbiv();var zbpn=$("settingsDialog");var zss=zbpn.getElementsByClassName("contextmenu_item_normal");for(var zcw=0;zcw<zss.length;zcw++){var item=zss[zcw];if(item.nodeType===Node.ELEMENT_NODE){var display="none";for(var zgg=0;zgg<zagt.length;zgg++){if(zgn(item,zagt[zgg])){display="block";break;}
}item.style.display=display;}}};zaxj.prototype.zbhb=function(){var self=this;var zbpo=this.zbpl("settingsDialogNewContact","contextmenu_contact_page contextmenu_item_normal","New Contact",function(){var path="/";var zpn=self.zayb.zbcq();if(zpn&&zpn["path"]){path=zpn["path"];}
self.zbpp({"type":ztk["RfItemType_Contact"],"path":path}
);});var zbpq=this.zbpl("settingsDialogNewIdentity","contextmenu_identity_page contextmenu_item_normal","New Identity",function(){var path="/";var zpn=self.zayb.zbcq();if(zpn&&zpn["path"]){path=zpn["path"];}
self.zbpp({"type":ztk["RfItemType_Identity"],"path":path}
);});var zbpr=this.zbpl("settingsDialogNewSafenote","contextmenu_safenote_page contextmenu_item_normal","New Safenote",function(){var path="/";var zpn=self.zayb.zbcq();if(zpn&&zpn["path"]){path=zpn["path"];}
self.zbpp({"type":ztk["RfItemType_Safenote"],"path":path}
);});var zbps=this.zbpl("settingsDialogNewFolder","contextmenu_list_page contextmenu_item_normal","New Folder",function(){var path="/";var zpn=self.zayb.zbcq();if(zpn&&zpn["path"]){path=zpn["path"];}
self.zbpt({"type":ztk["RfItemType_Folder"],"path":path}
);});var zbpu=this.zbpl("settingsDialogIdentities","contextmenu_start_page contextmenu_item_normal","Identities",function(){self.zbkw(["contextmenu_identity_page","contextmenu_list_page","contextmenu_common"]);self.zbjk([ztk["RfItemType_Identity"],ztk["RfItemType_Folder"]],zvh,zaof("identities_header"));}
);var zbpv=this.zbpl("settingsDialog_contacts_tr","contextmenu_start_page contextmenu_item_normal","Contacts",function(){self.zbkw(["contextmenu_contact_page","contextmenu_list_page","contextmenu_common"]);self.zbjk([ztk["RfItemType_Contact"],ztk["RfItemType_Folder"]],zvh,zaof("contacts_header"));}
);var zbpw=this.zbpl("settingsDialogRecent","contextmenu_common contextmenu_item_normal","Recent",function(){zsh().zbpx(JSON.stringify({}
),function(zsj){self.zblm(JSON.parse(zsj));});});var zxk=this.zbpl("settingsDialogOptions","contextmenu_common contextmenu_item_normal","Options...",function(){zsh().zblj({"url":"options.html"}
);self.zbir(100);});var zbpy=this.zbpl("settingsDialogHelp","contextmenu_common contextmenu_item_normal","Help",function(){self.zbpz();}
);var zbqa=this.createElement("div",{"class":"contextmenu"}
,[zbps,zbpo,zbpu,zbpq,zbpr,zbpv,zbpw,zxk,zbpy]);zbqa.id="settingsDialog";zbqa.style.display="none";document.body.appendChild(zbqa);}
;zaxj.prototype.zbqb=function(name,path,zbqc){var self=this;var item=this.createElement("li");item.addEventListener("click",function(){var zpn=self.zayb.zbcq();var zbjl=zpn["types"];var zaqp=zpn["title"];self.zbjk(zbjl,path,zaqp);}
);if(zbqc){item.innerText=name;}else{var zask=this.createElement("a");zask.href="#";zask.innerText=name;item.appendChild(zask);}
return item;};zaxj.prototype.zazi=function(item){var zpn=item["m_oContext"];if(!zpn){return this.createElement("ul",{"class":"breadcrumb"}
);}var path=zpn["path"];var zfr=path.split("/").filter(function(zge){return zge;}
);var zbqd="";var zss=[this.zbqb("Home","/",zfr.length===0)];for(var zcw=0;zcw<zfr.length;zcw++){var zge=zfr[zcw];zbqd+="/"+zge;zss.push(this.zbqb(zge,zbqd,zfr.length-1===zcw))}
return this.createElement("ul",{"class":"breadcrumb"}
,zss);};zaxl.prototype.zazg=function(){var zbqe=this.createElement("div",{"class":"notification-footer"}
);var zask=this.createElement("a",{"class":"notification-footer-download-link"}
);zbqe.innerHTML=zaof("limited_mode");zask.innerHTML=zaof("limited_link_text");zask.href="#";zask.addEventListener("click",function(){zoj().zmt(zzc);}
);zbqe.appendChild(zask);return zbqe;};zaxj.prototype.zbao=function(zbai){var self=this;zbai.addEventListener("focus",function(){self.zbiv();self.zbhk();self.zbhr();zsh().zbqf();if(typeof zbai.value=="string"&&zbai.value.length>0){self.zbfy=zbai.value;self.zban(true,300);}
},false);};zaxj.prototype.zbaw=function(){var self=this;this.zbek(function(zbel){if(!zbel){self.zban(false);zsh().zbqg();}
});};zaxj.prototype.zbav=function(){};zaxj.prototype.zbau=function(zbar){this.zbqh(zbar.value);}
;zaxj.prototype.zbaj=function(zbai){zbai.placeholder="Search";}
;zaxj.prototype.zbam=function(zbai){this.zbfy=zbai.value;}
;zaxj.prototype.zbat=function(zmw){var style=window.getComputedStyle($(zbqi));zmw(style.display!=="none");}
;zaxj.prototype.zbek=function(zmw){var zbqc=document.activeElement;var zbqj=$(zbqi);zmw(zbqc==zbqj);}
;zaxj.prototype.zban=function(zez,zafc){var zbem=this.zbas();this.zbfy=zbem.value;zez=zez&&zbem.value!="";this.zmg.zban.call(this,zez,zafc);}
;zaxj.prototype.zbbj=function(){this.zbqk();};zaxj.prototype.zbbk=function(){this.zbql();}
;zaxj.prototype.zbhw=function(data){this.zbiv();if(data.button!=2){return;}
var zbkt=data["id"];var zbku=parseInt(zbkt);if(!isNaN(zbku)){var zagj=$(zbkt);this.zbqm(zagj,false);}
};zaxj.prototype.zbqm=function(zagj,zbqn){var zbqo=ztk["RfItemType_Undefined"];var zsd={}
;var zaef=false;var zbqp=!zagj.getAttribute(zsf);if(!zbqp){var zsm=zagj.getAttribute(zsf);zsd=JSON.parse(zsm);zbqo=zsd[zuo];}
if(zsd&&zsd["Shared"]){zaef=true;}var zbnq=$("contextmenu_table");var zbqq="table-row";for(var zayz=0;zayz<zbnq.rows.length;zayz++){var zbqr=zbnq.rows[zayz];var zft=zbqr.getAttribute("id");if(!zft){continue;}
var zbjb=this.zblx(zft);var zbqs="table-row";switch(zbjb){case this.zbge["RejectSharedFolder"]:zbqs="none";if(zbqo==ztk["RfItemType_Folder"]){zbqs=!zaef?"none":zbqq;}
break;case this.zbge["Edit"]:zbqs=(zbqo==ztk["RfItemType_Login"]||zbqo==ztk["RfItemType_SearchCard"]||zbqo==ztk["RfItemType_BlockingPasscard"]||zbqo==ztk["RfItemType_Bookmark"]||zbqo==ztk["RfItemType_Contact"]||zbqo==ztk["RfItemType_Identity"]||zbqo==ztk["RfItemType_Safenote"])?zbqq:"none";break;case this.zbge["Rename"]:zbqs=(zbqo==ztk["RfItemType_Contact"]||zbqo==ztk["RfItemType_Bookmark"]||zbqo==ztk["RfItemType_SearchCard"]||zbqo==ztk["RfItemType_BlockingPasscard"]||zbqo==ztk["RfItemType_Login"]||zbqo==ztk["RfItemType_Identity"]||zbqo==ztk["RfItemType_Safenote"])?zbqq:"none";if(zbqo==ztk["RfItemType_Folder"]){zbqs=zaef?"none":zbqq;}
break;case this.zbge["Delete"]:zbqs=(zbqo==ztk["RfItemType_Login"]||zbqo==ztk["RfItemType_Bookmark"]||zbqo==ztk["RfItemType_SearchCard"]||zbqo==ztk["RfItemType_BlockingPasscard"]||zbqo==ztk["RfItemType_Contact"]||zbqo==ztk["RfItemType_Identity"]||zbqo==ztk["RfItemType_Safenote"])?zbqq:"none";if(zbqo==ztk["RfItemType_Folder"]){zbqs=zaef?"none":zbqq;}
break;case this.zbge["LoginSameWindow"]:case this.zbge["LoginNewWindow"]:case this.zbge["GoFill"]:zbqs=(zbqo==ztk["RfItemType_Login"])?zbqq:"none";break;case this.zbge["Goto"]:zbqs=(zbqo==ztk["RfItemType_Login"]||zbqo==ztk["RfItemType_Bookmark"])?zbqq:"none";break;case this.zbge["FillForms_ID"]:case this.zbge["FillSubmit_ID"]:zbqs=(zbqo==ztk["RfItemType_Contact"]||zbqo==ztk["RfItemType_Identity"])?zbqq:"none";break;}
zbqr.style.display=zbqs;zbqr.setAttribute(zsf,JSON.stringify(zsd));}
if(!zbqn){var zbqt;if(zbqp){zbqt=event.clientY;$(zbqu).style.top=zbqt+"px";$(zbqu).style.display=zaef?"none":"block";var zbqv=$(zbqu).clientHeight;if((zbqt+zbqv)>400){zbqt=zbqt-zbqv;$(zbqu).style.top=zbqt+"px";}
}else{zbqt=zagj.offsetTop+14;var parent=zagj.parentElement;var zbqw=$("listscrolldiv");if(parent&&parent.id==zbqi){zbqt=zbqt+parent.offsetTop-parent.scrollTop;}
else{var zbqx=zagj.getAttribute("topOffset")?parseInt(zagj.getAttribute("topOffset")):0;zbqt=zbqw?zbqt-zbqw.scrollTop:zbqt;zbqt+=zbqx}
$(zbqu).style.top=zbqt+"px";$(zbqu).style.display="block";if(((zbqt)+$(zbqu).clientHeight)>400){zbqt=(zbqt)-$(zbqu).clientHeight;$(zbqu).style.top=zbqt+"px";}
}}else{$(zbqu).style.display="block";$(zbqu).style.top=event.clientY-$(zbqu).clientHeight+"px";$(zbqu).style.left="115px";}
};zaxj.prototype.zbhf=function(){this.zbiv();this.zbhk();this.zbhr();this.zbbk();}
;zaxj.prototype.zbiv=function(){if(this.zbgz){window.clearTimeout(this.zbgz);}
var zbqs=$(zbqu).style.display;if(zbqs!="none"){$(zbqu).style.display="none";}
zbqs=$("settingsDialog").style.display;if(zbqs!="none"){$("settingsDialog").style.display="none";}
};zaxj.prototype.zbnt=function(zbns){var zbqr=zbns;var zsm=zbqr.getAttribute(zsf);if(!zsm){return;}
var zsd=JSON.parse(zsm);var zft=zbqr.getAttribute("id");var zbjb=this.zblx(zft);this.zbqy(zsd,zbjb);}
;zaxj.prototype.zbqy=function(zazl,zbjb){var self=this;var zyk={}
;zyk[zsf]=zazl;zyk[zanu]=zbjb;switch(zbjb){case this.zbge["RejectSharedFolder"]:this.RejectSharedFolder(zazl);break;case this.zbge["Edit"]:this.zbks(zazl);break;case this.zbge["Rename"]:this.zbqz(zazl);break;case this.zbge["Delete"]:this.zbhz(zazl);break;case this.zbge["FillForms_ID"]:case this.zbge["FillSubmit_ID"]:this.zbja(zazl,zbjb!=this.zbge["FillForms_ID"],zbjb);break;case this.zbge["LoginSameWindow"]:case this.zbge["LoginNewWindow"]:case this.zbge["GoFill"]:case this.zbge["Goto"]:zyk[zbje]=zbjb!=this.zbge["Goto"];zyk[zbjg]=true;zyk[zbjf]=zbjb==this.zbge["LoginNewWindow"];zyk[zbjd]=true;zyk[zwo]=zbjb==this.zbge["LoginSameWindow"]||zbjb==this.zbge["LoginNewWindow"];var zsg=JSON.stringify(zyk);zsh().zbjh(zsg,function(zsj){self.zbji(zsj)}
);break;case this.zbge["CreateFolder"]:this.zbpt(zazl);break;case this.zbge["CreateSafenote"]:zazl[zuo]=ztk["RfItemType_Safenote"];self.zbpp(zazl);break;case this.zbge["CreateContact"]:zazl[zuo]=ztk["RfItemType_Contact"];self.zbpp(zazl);break;case this.zbge["CreateIdentity"]:zazl[zuo]=ztk["RfItemType_Identity"];self.zbpp(zazl);break;}
};zaxj.prototype.zbnu=function(event){event.stopPropagation();this.zbbk();}
;zaxj.prototype.zbnv=function(event){event.stopPropagation();}
;zaxj.prototype.zbhz=function(zazl){var self=this;var zaex=zazl["type"];var zbjr=new zbcv(undefined,undefined,"header-item-title");zbjr["m_oContext"]={"image_data":zaee(zaex),"title":zaea(zazl)}
;var zbjs=self.zayi(zbjr);var zbhd=new zbcv("rfobject_delete_section_div",undefined,"dialog");var zbhe=self.zayi(zbhd);var zbcj=[zbjs,zbhe];self.zayb.Navigate("Delete Item Dialog",zbcj,{"item_info":zazl}
,function(zpn){self.zbhf();self.zbra(zpn);});};zaxj.prototype.zbrb=function(){var self=this;$(zboj).addEventListener("click",function(){self.zayb.zbcp();}
,false);$(zbrc).addEventListener("click",function(){self.zbrd();}
,false);};zaxj.prototype.zbra=function(zpn){this.zbrb();var zsd=zpn["item_info"];var zbre=zaea(zsd);var zya=zbre.substring(zbre.lastIndexOf("/")+1);if(zya.length>this.zbgm){zya=zya.substring(0,this.zbgm-3)+"...";}
var zbrf=" "+zaew(zsd[zuo])+" ";$(zbrg).innerHTML="Loading...";if(zsd[zuo]==ztk["RfItemType_Folder"]){setTimeout(function(){zsh().zbrh(zsd[zaed],function(zgv){$(zbrg).innerHTML=zya.length>10?zaof("alert_delete_msg")+zbrf+"<br/> \'"+zya+"\' ?":zaof("alert_delete_msg")+zbrf+" \'"+zya+"\' ?";if(zgv){function zbri(zbrj){var zbrk=zgv[zbrj];if(zbrk==0){return 0;}
return zgv[zbrj]?zgv[zbrj]:"?";}var zbrl="";zbrl+=zbri(ztk["RfItemType_Login"])+" "+zaof("logins_header")+",<br/>";zbrl+=zbri(ztk["RfItemType_Identity"])+" "+zaof("identities_header")+",<br/>";zbrl+=zbri(ztk["RfItemType_Safenote"])+" "+zaof("safenotes_header")+",<br/>";zbrl+=zbri(ztk["RfItemType_Generic"])+" "+zaof("other_files")+".";$(zbrg).innerHTML+="<br/>"+zbrl+"<br/><br/>"+zaof("delete_warning");}
});},10);}else{$(zbrg).innerHTML=zya.length>10?zaof("alert_delete_msg")+zbrf+"<br/> \'"+zya+"\' ?":zaof("alert_delete_msg")+zbrf+" \'"+zya+"\' ?";}
$(zbrm).innerHTML="";$(zbrc).focus();};zaxj.prototype.zbrd=function(){var zpn=this.zayb.zbcq();if(!zpn){return;}
var zazl=zpn["item_info"];if(!zazl){return;}$(zbrm).innerHTML="";zbrn(true,zbro,[zbrc,zboj],zbrg);var self=this;setTimeout(function(){var zse={}
;zse[zun]=JSON.stringify(zazl);var zsg=JSON.stringify(zse);zsh().zbrp(zsg,function(zsj){self.zbrq(zsj);}
);},100);};zaxj.prototype.zbrq=function(zsj){var zsk=JSON.parse(zsj);if(this.zbjj(zsk)){return;}
var self=this;setTimeout(function(){zbrn(false,zbro,[zbrc,zboj],zbrg);self.zayb.zbcp();var zpn=self.zayb.zbcq();var zbjl=zpn["types"];var path=zpn["path"];var zaqp=zpn["title"];self.zayb.zbct();self.zbjk(zbjl,path,zaqp);}
,100);};zaxj.prototype.zbqz=function(zazl){var self=this;var zaex=zazl["type"];var zbjr=new zbcv(undefined,undefined,"header-item-title");zbjr["m_oContext"]={"image_data":zaee(zaex),"title":zaea(zazl)}
;var zbjs=self.zayi(zbjr);var zbhd=new zbcv("rffolder_rename_div",undefined,"dialog");var zbhe=self.zayi(zbhd);var zbcj=[zbjs,zbhe];self.zayb.Navigate("Rename Item",zbcj,{"item_info":zazl}
,function(zpn){self.zbhf();self.zbrr(zpn);});};zaxj.prototype.zbrs=function(){var self=this;$(zbom).addEventListener("click",function(){self.zayb.zbcp();}
,false);$(zbrt).addEventListener("click",function(){self.zbmw();}
,false);$(zbmv).addEventListener("keypress",function(event){self.zbmd(event);}
,false);};zaxj.prototype.zbrr=function(zpn){this.zbrs();var zsd=zpn["item_info"];var name=zaea(zsd);$(zbru).innerHTML="";$(zbmv).value=name;$(zbmv).select();zbrn(false,zbrv,[zbrt,zbom],null);setTimeout(function(){$(zbmv).focus();}
,200);};zaxj.prototype.zbmw=function(){if(!this.zbiw(zbru,zbmv)){return;}
var zpn=this.zayb.zbcq();var zazl=zpn["item_info"];var zbiz=$(zbmv).value;var zbrw=zazl[zus];var zuq=RfapiJS["utils"].zur(zazl[zuo]);var zbrx=zbrw.substr(0,zbrw.lastIndexOf("/"));var zbry=zbrx+"/"+zbiz+zuq;zbrn(true,zbrv,[zbrt,zbom],zbon);var zse={}
;zse["oldPath"]=zbrw;zse["oldType"]=zazl[zuo];zse["newPath"]=zbry;zse["newType"]=zazl[zuo];var self=this;setTimeout(function(){var zsg=JSON.stringify(zse);zsh().zbrz(zsg,function(zsj){self.zbsa(zsj);}
)},100);};zaxj.prototype.zbsa=function(zsj){var zsk=JSON.parse(zsj);if(this.zbjj(zsk)){var zdq=zsk[zsl];if(zdq[ztu]&&zdq[ztu]==zaon){$(zbru).innerHTML=zdq[ztt];}
zbrn(false,zbrv,[zbrt,zbom],zbon);return;}var self=this;setTimeout(function(){zbrn(false,zbrv,[zbrt,zbom],zbon);self.zayb.zbcp();var zpn=self.zayb.zbcq();var zbjl=zpn["types"];var path=zpn["path"];var zaqp=zpn["title"];self.zayb.zbct();self.zbjk(zbjl,path,zaqp);}
,100);};zaxj.prototype.zbib=function(){var self=this;self.zbkw(["contextmenu_start_page","contextmenu_common"]);var zss=self.zbsb();var zayf=self.zayg(zss);self.zayb.Navigate("Start Screen",zayf,undefined,function(zpn){self.zbhf();self.zbsc(zpn)}
);this.zayb.zbcs();};zaxj.prototype.zbsc=function(zpn){var self=this;setTimeout(function(){if(!zpn){zpn={}
;}self.zbsd();setTimeout(function(){self.zbse();},10);}
,0);};zaxj.prototype.zbsb=function(zbsf,zbsg,zbsh){var zss=[];zss.push(new zbcv(undefined,undefined,"header-title"));var zbsi=new zbcv("rfsearch",0,"search","Search","search","Enter words to search in Logins names and search engines","search.png",undefined);zss.push(zbsi);var zbsj=new zbcv(zbkv,0,"menu","Logins","logins","Show All Logins",zaen,undefined);zss.push(zbsj);var zbsk=new zbcv(zbkx,0,"menu","Bookmarks","bookmarks","Show All Bookmarks",zael,undefined);zss.push(zbsk);var zbsl=new zbcv(zbky,0,"menu","Safenotes","Safenotes","Show All Safenotes",zaet,undefined);zss.push(zbsl);var zblu=new zbcv(0,0,"separator");zss.push(zblu);var zbsm=new zbcv(zbkg,0,"match",!zbsf?"(logins)":zbsf,"match","Matching Passcards",zaoo,undefined);zss.push(zbsm);var zbsn=new zbcv(zblp,0,"button",!zbsg?zaof("activeID_setup_formfill"):zbsg,"new-identity","Create Identity for filling long registration and checkout forms",zaep,undefined);zss.push(zbsn);var zbso=new zbcv(zblr,0,"button",!zbsh?"":zbsh,"new-identity2","",zaep,undefined);zss.push(zbso);zss.push(new zbcv(0,0,"separator"));if(!zoj().zrr.zrv(zrw)||!zoj().zrr.zrv(zrx)){var zpn={}
;var zbsp=new zbcv(zbln,0,"button","Save","Save","Save Login",zaop,undefined,zpn);zss.push(zbsp);}
zpn={};var zbsq=new zbcv("PwdGenerator_item",0,"button",zaof("Generate"),"Generate","Generate new Password",zaor,undefined,zpn);zss.push(zbsq);var zbsr=new zbcv(zblb,0,"button",zaof("menu_Logoff"),zaof("menu_Logoff"),"Logoff from account",zaot,undefined);zss.push(zbsr);if(!zbss){zss.push(new zbcv(0,0,"notification-footer"));}
return zss;};zaxj.prototype.zbjq=function(zss){var self=this;var parent=this.createElement(zazv,{"id":"listscrolldiv"}
);parent.addEventListener("scroll",function(){self.zbiu();}
,false);var zayf=this.zayg(zss);this.zaye(zayf,parent);return parent;}
;zaxj.prototype.zbjv=function(zpn){};zaxj.prototype.zbin=function(zpn){var self=this;var zbhd=new zbcv("enteraccountpwd_div",undefined,"dialog");var zbhe=self.zayi(zbhd);var zbcj=[zbhe];self.zayb.Navigate("Account Password",zbcj,zpn,function(zpn){self.zbhf();self.zbst(zpn);}
);};zaxj.prototype.zbsu=function(){var self=this;$(zbsv).addEventListener("click",function(){self.zbnb();}
,false);$(zbsw).addEventListener("click",function(){self.zbil();}
,false);$(zbna).addEventListener("keypress",function(event){self.zbmd(event);}
,false);};zaxj.prototype.zbst=function(zpn){this.zbsu();var zbid=zpn["description"];var zbih=zpn["user_id"];self.zbgs=self.zbgn=self.zbgo="";$(zbsx).innerText=zbih;$(zbsy).style.display="none";$(zbsz).style.display="table-row";$(zbsv).removeAttribute("disabled");$("enteraccountpwd_topcaption_lbl").innerText=zaof("enter_password");$("enteraccountpwd_login_btn").value=zaof("login_btn");$("enteraccountpwd_foraccount_lbl").innerText=zaof("for_account");$(zbsw).innerText=zaof("change_account");if(zde("internal","active-server").indexOf("roboform.us")!=-1){$("enteraccountpwd_rfus_test_lbl").innerText="TEST SERVER : roboform.us";}
$(zbta).innerText=!zbid?"":zbid;$(zbna).value="";setTimeout(function(){$(zbna).focus();}
,250);};zaxj.prototype.zbnb=function(){var zbtb=$(zbna);var zbtc=$(zbta);var zbtd=zbtb.value;zbtc.innerHTML="";if(!zbtd){zbtb.focus();zbtc.innerText="Password cannot be empty";return;}
$(zbsy).style.display="table-row";$(zbsz).style.display="none";$(zbsv).setAttribute("disabled","true");var self=this;setTimeout(function(){var zse={}
;zse[zart]=$(zbsx).innerText;zse[zaru]=zbtd;zse[zarv]="-";var zsg=JSON.stringify(zse);zsh().zarw(zsg,function(zsj){self.zbte(zsj);}
);},100);};zaxj.prototype.zbte=function(zsj){try{var self=this;var zsk=JSON.parse(zsj);if(!zsk){return;}
$(zbsy).style.display="none";$(zbsz).style.display="table-row";$(zbsv).removeAttribute("disabled");var zbtf=typeof zsk[zsl]=="undefined";var zbtb=$(zbna);var zbtc=$(zbta);if(!zbtf){var zbic=zsk[zsl][ztu];var zbid=zsk[zsl][ztt];if(zbic==zbig){this.zbik(zsk["params"]["Channel"],true);return;}
zbtc.innerHTML=zbid;zbtb.value="";zbtb.focus();return;}
zbtc.innerHTML="";zbtb.value="";setTimeout(function(){if(!self.zbia()){return;}
zoj().ztd({"name":"AutoSaveUserLoggedIn"});self.zbib();}
,0);}catch(zhj){}};zaxj.prototype.zbtg=function(){var self=this;$(zbmt).addEventListener("keypress",function(){self.zbmd(event);}
,false);$(zbmt).addEventListener("input",function(event){self.zbth(event);}
,false);$(zbnw).addEventListener("click",function(){self.zbmu();}
,false);$(zbnx).addEventListener("click",function(){self.zayb.zbcp();}
,false);$(zbny).addEventListener("click",function(){self.zbhg({"only_create":true}
);},false);var zbti=$("rfloginsection_setupcookies_link");if(zbti){zbti.addEventListener("click",function(){self.zbls();}
,false);}};zaxj.prototype.zbtj=function(zpn){var self=this;setTimeout(function(){self.zbtg();var zbtk="";var zbid="";if(zpn){zbtk=zpn["email"]?zpn["email"]:"";zbid=zpn["description"]?zpn["description"]:"";}
self.zbgs=self.zbgn=self.zbgo="";$(zbmt).value=zbtk;$(zbtl).innerHTML=zbid;$("login_emailsection_backtd").style.display=self.zayb.zbco()?"table-row":"none";$("rflogin_td_maintext1").innerHTML=this.zbga?zaof("Setup_Welcome_HeaderTitle"):zaof("CreateAccount_Step1_TopText");if(zde("internal","active-server").indexOf("roboform.us")!=-1){$("rflogin_td_maintext2").innerHTML="(RFO test server)";}
else{$("rflogin_td_maintext2").innerHTML="&nbsp;";}
$(zbmt).focus();},0);};zaxj.prototype.zbil=function(zpn){var self=this;var zbhd=new zbcv("rfloginsection_div",undefined,"dialog");var zbhe=self.zayi(zbhd);var zbcj=[zbhe];self.zayb.Navigate("Account Login",zbcj,zpn,function(zpn){self.zbhf();self.zbtj(zpn);}
);};zaxj.prototype.zbmu=function(){var zbtm=$(zbmt);var zbtc=$(zbtl);zbtc.innerHTML="";var zbtk=zbtm.value;if(!zbtk){zbtm.focus();zbtc.innerHTML="User ID cannot be empty";return;}
var zpn=this.zayb.zbcq();if(!zpn){zpn={};}zpn["email"]=zbtk;this.zayb.zbcr(zpn);this.zbtn({"email":zbtk}
);};zaxj.prototype.zbth=function(){var zbtk=$(zbmt).value;if(!zbtk){$(zbnw).setAttribute("disabled","true");return;}
$(zbnw).removeAttribute("disabled");};zaxj.prototype.zbto=function(){var self=this;$(zboa).addEventListener("click",function(){self.zayb.zbcp();}
,false);$(zbnz).addEventListener("click",function(){self.zbnf();}
,false);$(zbne).addEventListener("keypress",function(event){self.zbmd(event);}
,false);$(zbne).addEventListener("input",function(event){self.zbtp(event);}
,false);};zaxj.prototype.zbtq=function(zpn){this.zbto();var zbtk="";if(zpn){zbtk=zpn["email"]?zpn["email"]:"";}
$(zbtr).style.display="none";$("entercreate_accountpwd_maintext1").innerHTML=this.zbga?zaof("Setup_Welcome_HeaderTitle"):zaof("CreateAccount_Step1_TopText");zde("internal","active-server").indexOf("roboform.us")!=-1?$("entercreate_accountpwd_maintext2").innerHTML="(RFO test server)":$("entercreate_accountpwd_maintext2").innerHTML="&nbsp;";$("login_pwdsection_emailtxt_td").innerHTML=zbtk;$(zbts).innerHTML="";$(zbne).value="";$(zbnz).setAttribute("disabled","true");$(zbne).focus();}
;zaxj.prototype.zbtn=function(zpn){var self=this;var zbhd=new zbcv("login_pwdsection_div",undefined,"dialog");var zbhe=self.zayi(zbhd);var zbcj=[zbhe];self.zayb.Navigate("Account Login Password",zbcj,zpn,function(zpn){self.zbhf();self.zbtq(zpn);}
);};zaxj.prototype.zbnf=function(){var zpn=this.zayb.zbcq();var zbtk="";if(zpn){zbtk=zpn["email"]?zpn["email"]:"";}
var zbtb=$(zbne);var zbtc=$(zbts);var zbtd=zbtb.value;zbtc.innerHTML="";if(!zbtd){zbtb.focus();zbtc.innerHTML="Password cannot be empty";return;}
zbrn(true,zbtr,[zboa,zbnz],zbne);var self=this;setTimeout(function(){var zse={}
;zse[zart]=zbtk;zse[zaru]=zbtd;zse[zarv]="-";var zsg=JSON.stringify(zse);zsh().zarw(zsg,function(zsj){self.zbtt(zsj);}
);},50);};zaxj.prototype.zbtp=function(){var zbtu=$(zbne).value;if(!zbtu){$(zbnz).setAttribute("disabled","true");return;}
$(zbnz).removeAttribute("disabled");};zaxj.prototype.zbtt=function(zsj){try{var self=this;var zsk=JSON.parse(zsj);if(!zsk){return;}
zbrn(false,zbtr,[zboa,zbnz],null);var zbtf=typeof zsk[zsl]=="undefined";var zbtb=$(zbne);var zbtc=$(zbts);if(!zbtf){var zbic=zsk[zsl][ztu];var zbid=zsk[zsl][ztt];if(zbic==zbig){this.zbik(zsk["params"]["Channel"],true);return;}
zbtc.innerHTML=zbid;zbtb.value="";zbtb.focus();return;}
zbtc.innerHTML="";zbtb.value="";setTimeout(function(){if(!self.zbia()){return;}
zoj().ztd({"name":"AutoSaveUserLoggedIn"});self.zbib();}
,0);}catch(zhj){}};zaxj.prototype.zbtv=function(){var self=this;$(zbou).addEventListener("click",function(){self.zbnd();}
,false);$(zbov).addEventListener("click",function(){self.zayb.zbcp();}
,false);$(zbnc).addEventListener("keypress",function(event){self.zbmd(event);}
,false);$(zbnc).addEventListener("input",function(event){self.zbtw(event);}
,false);};zaxj.prototype.zbtx=function(zpn){this.zbtv();var zbtk="";if(zpn){zbtk=zpn["email"]?zpn["email"]:"";}
$(zbty).innerHTML=zbtk;$(zbtz).innerHTML="";$(zbnc).value="";$(zbnc).focus();}
;zaxj.prototype.zbua=function(zpn){var self=this;var zbhd=new zbcv("confirm_accountpwd_div",undefined,"dialog");var zbhe=self.zayi(zbhd);var zbcj=[zbhe];self.zayb.Navigate("Confirm Password",zbcj,zpn,function(zpn){self.zbhf();self.zbtx(zpn);}
);};zaxj.prototype.zbnd=function(){var zbtc=$(zbtz);zbtc.innerHTML="";var zpn=this.zayb.zbcq();var zbtk=zpn["email"];var zyr=zpn["password"];var zbub=$(zbnc);if(!zbub.value){zbtc.innerHTML=zaof("master_password_empty");zbub.focus();return;}
if(zyr!=zbub.value){zbtc.innerHTML=zaof("master_password_confirm_error");zbub.focus();return;}
zbrn(true,zbuc,[zbov,zbou],zbnc);var self=this;setTimeout(function(){var zse={}
;zse[zbud]=zbtk;zse[zaru]=zyr;zse[zbue]=zyr;zse["boneFile"]=true;var zsg=JSON.stringify(zse);zsh().zbuf(zsg,function(zsj){self.zbug(zsj);}
);},100);};zaxj.prototype.zbug=function(zsj){var zsk=JSON.parse(zsj);zbrn(false,zbuc,[zbov,zbou],zbnc);var zdq=zsk[zsl];$(zbuh).style.display="none";if(zdq){var zpn=this.zayb.zbcq();var zbtk=zpn["email"];this.zbhg({"email":zbtk,"only_create":this.zbgb,"description":zdq[ztt]
}
);return;}this.zbib();};zaxj.prototype.zbtw=function(){var zbtu=$(zbnc).value;if(!zbtu){$(zbou).setAttribute("disabled","true");return;}
$(zbou).removeAttribute("disabled");};zaxj.prototype.zbui=function(){var self=this;$(zbow).addEventListener("click",function(){self.zbmz();}
,false);$(zbox).addEventListener("click",function(){self.zayb.zbcp();}
,false);$(zbmx).addEventListener("keypress",function(event){self.zbmd(event);}
,false);$(zbmy).addEventListener("keypress",function(event){self.zbmd(event);}
,false);$(zbmy).addEventListener("input",function(event){self.zbuj(event);}
,false);$("rfsignupsection_bottom_loginlink").addEventListener("click",function(){self.zbuk();}
,false);};zaxj.prototype.zbul=function(zpn){this.zbui();var zbum,zdn;var zbtk="";if(zpn){zbum=zpn["only_create"];zdn=zpn["description"];zbtk=zpn["email"]?zpn["email"]:"";}
this.zbgb=zbum;$(zbun).innerHTML=this.zbga?zaof("Setup_Welcome_HeaderTitle"):zaof("CreateAccount_Step1_TopText");zde("internal","active-server").indexOf("roboform.us")!=-1?$(zbuo).innerHTML="(RFO test server)":$(zbuo).innerHTML="&nbsp;";$("rfsignupsection_backtd_step1").style.display=this.zbga?"none":"table-row";$("rfsignupsection_linktd_step1").style.textAlign=this.zbga?"left":"center";$(zbmx).value=zbtk;$(zbmy).value="";zaud($(zbmy).value,$("rfsignupsection_strength_img"),$("rfsignupsection_strength_lbl"),$("rfsignupsection_strength_div"));$(zbup).style.display="none";$(zbuq).innerHTML=zdn?zdn:"";$(zbmx).focus();}
;zaxj.prototype.zbhg=function(zpn){var self=this;var zbhd=new zbcv("rfsignupsection_div",undefined,"dialog");var zbhe=self.zayi(zbhd);var zbcj=[zbhe];self.zayb.Navigate("Create Account",zbcj,zpn,function(zpn){self.zbhf();self.zbul(zpn);}
);};zaxj.prototype.zbmz=function(){var zbtc=$(zbuq);zbtc.innerHTML="";var zbur=$(zbmx);if(!zbur.value){zbtc.innerHTML=zaof("email_empty");zbur.focus();return;}
var zbtb=$(zbmy);if(!zbtb.value){zbtc.innerHTML=zaof("master_password_empty");zbtb.focus();return;}
if(zbtb.value.length<zbus||zbtb.value.length>zbut){zbtc.innerHTML=zaof("mast_pwd_limit");zbtb.focus();return;}
zbrn(true,zbup,[zbow,zbox],zbmx);var self=this;setTimeout(function(){var zse={}
;zse[zart]=zbur.value;zse[zaru]=zbtb.value;zse[zarv]="-";var zsg=JSON.stringify(zse);zsh().zarw(zsg,function(zsj){self.zbuu(zsj);}
);},100);};zaxj.prototype.zbuu=function(zsj){var zsk=JSON.parse(zsj);zbrn(false,zbup,[zbow,zbox],zbmx);var zdq=zsk[zsl];if(zdq){var zbic=zdq[ztu];var zbid=zdq[ztt];if(zbic==zbig){this.zbik(zsk["params"]["Channel"],true);return;}
this.zbua({"email":$(zbmx).value,"password":$(zbmy).value}
);return;}if(!this.zbga||this.zbgb){this.zbua({"email":$(zbmx).value,"password":$(zbmy).value}
);return;}this.zbga=false;$(zbuv).style.display="none";var self=this;setTimeout(function(){if(!self.zbia()){return;}
zoj().ztd({"name":"AutoSaveUserLoggedIn"});self.zbib();}
,0);};zaxj.prototype.zbuj=function(){var zbtu=$(zbmy).value;zaud(zbtu,$("rfsignupsection_strength_img"),$("rfsignupsection_strength_lbl"),$("rfsignupsection_strength_div"));if(!zbtu){$(zbow).setAttribute("disabled","true");return;}
$(zbow).removeAttribute("disabled");};zaxj.prototype.zbuk=function(){this.zbil();}
;zaxj.prototype.zbqh=function(value){this.zbbk();var zse={}
;zse[zbuw]=value;var zsg=JSON.stringify(zse);var self=this;zsh().zbux(zsg,function(zsj){self.zbuy(JSON.parse(zsj));}
);};zaxj.prototype.zbuy=function(zakw){var self=this;if(this.zbjj(zakw)){return;}
var zss=[];var zbuz=zakw[zyl];for(var zcw=0;zcw<zbuz.length;zcw++){var zsd=zbuz[zcw];var zbjy=this.zbgd+zcw;var path=zsd[zus];var zazo=zaee(zsd[zaec],zsd["s"]);var text=zaea(zsd);var zbva={}
;var zbkb=new zbcv(zbjy,0,"button",text,path,path,zazo,zsd,zbva);zss.push(zbkb);}
var zpn={"query":zakw["context"]["search"]
};var zbjp=self.zbjq(zss);var zbcj=[zbjp];self.zayb.Navigate("Search Results",zbcj,zpn,function(zpn){self.zbhf();self.zbjv(zpn)}
);};zaxj.prototype.zbqk=function(){var zbem=this.zbas();var zbba=this.zbaz(document.body);var zbvb=$(zbqi);var zbvc=zbvb.getAttribute("init");if(!zbvc){this.zbvd();}
zbvb.style.display="block";zaak($(zbve),[10,9,8,7,6],["div_rfsearch"]);this.zbfy=zbem.value;$(zbvf).innerHTML=zaof("search_bar_bing_text").replace("%",this.zbfy);$(zbvg).innerHTML=zaof("search_bar_yahoo_text").replace("%",this.zbfy);$(zbvh).innerHTML=zaof("search_bar_google_text").replace("%",this.zbfy);$(zbvi).innerHTML=zaof("search_bar_roboform_text").replace("%",this.zbfy);$(zbvj).innerHTML=zaof("search_bar_ebay_text").replace("%",this.zbfy);$(zbvk).innerHTML=zaof("search_bar_amazon_text").replace("%",this.zbfy);$(zbvl).innerHTML=zaof("search_bar_options_text");$("search_bar_bing_wrapper").style.display=zde("sa-search","rf_search_bing_chk")?"block":"none";$("search_bar_yahoo_wrapper").style.display=zde("sa-search","rf_search_yahoo_chk")?"block":"none";$("search_bar_google_wrapper").style.display=zde("sa-search","rf_search_google_chk")?"block":"none";$("search_bar_roboform_wrapper").style.display=zde("sa-search","rf_search_roboform_chk")?"block":"none";$("search_bar_ebay_wrapper").style.display=zde("sa-search","rf_search_ebay_chk")?"block":"none";$("search_bar_amazon_wrapper").style.display=zde("sa-search","rf_search_amazon_chk")?"block":"none";var zse={}
;zse[zbuw]=zbem.value;var zsg=JSON.stringify(zse);var self=this;zsh().zbbj(zsg,function zbvm(zbvn){var zgv=JSON.parse(zbvn);if(Array.isArray(zgv)){var zbvb=$(zbqi);zbvb.addEventListener("mousedown",function(event){event.stopImmediatePropagation();self.zbiv();self.zbhk();self.zbhr();}
,false);zbvb.addEventListener("scroll",function(event){event.stopImmediatePropagation();self.zbiv();self.zbhk();self.zbhr();}
,false);var zbvo=zbvb.getElementsByClassName("search_dropdown_item_wrapper");var zbvp=zbvo.length;for(var zcw=0;zcw<zbvp;zcw++){zbvb.removeChild(zbvo[0]);}
zgv.forEach(function(zsd){var zbvq=self.createElement(zbvr,{"class":"toolbar-search-result"}
);var zbvs=self.createElement(zazv,{"class":"search_dropdown_item"}
);var zbjb;switch(zsd.type){case ztk["RfItemType_Login"]:zbvq.setAttribute(zbvt,"login.png");zbvs.innerHTML=zaof("search_dropdown_login_item_text");zbjb=self.zbge["LoginSameWindow"];break;case ztk["RfItemType_Bookmark"]:zbvq.setAttribute(zbvt,"bookmark.png");zbvs.innerHTML=zaof("search_dropdown_bookmark_item_text");zbjb=self.zbge["Goto"];break;case ztk["RfItemType_Identity"]:zbvq.setAttribute(zbvt,"identity.png");zbvs.innerHTML=zaof("search_dropdown_identity_item_text");zbjb=self.zbge["FillForms_ID"];break;case ztk["RfItemType_Contact"]:zbvq.setAttribute(zbvt,"contact.png");zbvs.innerHTML=zaof("search_dropdown_contact_item_text");zbjb=self.zbge["Edit"];break;case ztk["RfItemType_Safenote"]:zbvq.setAttribute(zbvt,"safenote.png");zbvs.innerHTML=zaof("search_dropdown_safenote_item_text");zbjb=self.zbge["Edit"];break;default:break;}
var zbvu=zaea(zsd);zbvs.innerHTML=zbvs.innerHTML.replace("%",zbvu);var zbvv={}
;zbvv["class"]="search_dropdown_item_wrapper";zbvv[zsf]=JSON.stringify(zsd);zbvv["topOffset"]=28;var zbvw=self.createElement(zazv,zbvv,[zbvq,zbvs]);zbvw.addEventListener("mousedown",function(event){self.zbfz=true;if(event.button==2){self.zbqm(zbvw,false);event.stopImmediatePropagation();return;}
self.zbqy(zsd,zbjb);self.zbbk();},false);zbvb.insertBefore(zbvw,zbvb.firstChild);}
);}});};zaxj.prototype.zbql=function(){var zbvb=$(zbqi);if(zbvb.style.display=="none"){return;}
zbvb.style.display="none";zaak($(zbve),[7,9,10],["div_rfsearch"]);}
;zaxj.prototype.zbvd=function(){var zbvb=$(zbqi);zbvb.setAttribute("init",'true');var self=this;$("search_bar_bing_wrapper").addEventListener("mousedown",function(){var zbar=self.zbas();zoj().zvu(self.zbgj+zbar.value,true);self.zbir(0);}
,false);$("search_bar_yahoo_wrapper").addEventListener("mousedown",function(){var zbar=self.zbas();zoj().zvu(self.zbgh+zbar.value,true);self.zbir(0);}
,false);$("search_bar_google_wrapper").addEventListener("mousedown",function(){var zbar=self.zbas();zoj().zvu(self.zbgi+zbar.value,true);self.zbir(0);}
,false);$("search_bar_roboform_wrapper").addEventListener("mousedown",function(){var zbar=self.zbas();self.zbqh(zbar.value);}
,false);$("search_bar_ebay_wrapper").addEventListener("mousedown",function(){var zbar=self.zbas();zoj().zvu(self.zbgk+zbar.value,true);self.zbir();}
,false);$("search_bar_amazon_wrapper").addEventListener("mousedown",function(){var zbar=self.zbas();zoj().zvu(self.zbgl+zbar.value,true);self.zbir(0);}
,false);$("search_bar_options_wrapper").addEventListener("mousedown",function(){zoj().zvu("options.html?tab=search",true);self.zbir(0);}
,false);};zaxj.prototype.zbse=function(){var zsg=JSON.stringify({}
);var self=this;zsh().zbvx(zsg,function(zsj){self.zbvy(zsj);}
);};zaxj.prototype.zbvy=function(zsj){var zsk=JSON.parse(zsj);if(this.zbjj(zsk)){return;}
var zbpu=zsk[zyl];this.zbvz(zbpu);};zaxj.prototype.zblq=function(zft){var self=this;var zhf=$(zft);var zsm=zhf.getAttribute(zsf);if(!zsm&&zft==zblp){var zbih=zsh().zarr();zbih=!zbih?"Identity1":(zbih.substr(0,zbih.indexOf("@")));var zazl={}
;zazl[zuo]=ztk["RfItemType_Identity"];zazl[zus]="/";self.zbpp(zazl);return;}
if(!zsm){return;}this.zbkd(zft);};zaxj.prototype.zbwa=function(zajx,zsd){if(!zajx){return;}
var zbwb=zajx.id;var text=!zsd?"":zaea(zsd);zbwb==zblp?(this.zbgn=text):(this.zbgo=text);zajx.firstChild.firstChild.nextSibling.innerText=zbwb==zblp?(!text?zaof("activeID_setup_formfill"):text):(!text?"":text);!text?zajx.removeAttribute(zsf):zajx.setAttribute(zsf,JSON.stringify(zsd));zajx.firstChild.nextSibling.style.display=!text?"none":"inline-block";zajx.style.display=zbwb==zblp?"block":(!text?"none":"block");}
;zaxj.prototype.zbvz=function(zbpu){var zbwc=$(zblp);var zbwd=$(zblr);var zbwe=$("identitymini_showall_link");if(zbwe){zbwe.style.display=zbpu.length>2?"inline-block":"none";}
if(!zbpu.length){this.zbwa(zbwc,null);this.zbwa(zbwd,null);return;}
this.zbwa(zbwc,zbpu[0]);if(zbpu.length==1){this.zbwa(zbwd,null);return;}
this.zbwa(zbwd,zbpu[1]);};zaxj.prototype.zbhq=function(event,zbwf){var zbhh=$(zbhp);var zbwg=zbhh.getAttribute("btnID");var zbwh=!event?zbwg:zbwf.id;var zagj=zbwh==zblp?$(zblp):$(zblr);if(!zagj){return;}
var zbwi=zagj.getAttribute(zsf);if(!zbwi){return;}
zbhh.setAttribute("btnID",zbwh);zbhh.setAttribute(zsf,zbwi);var zahx=zbhh.style.display=="block";if(zahx){if(!zbwg||(zbwg==zbwh)){return;}
}var self=this;var zse={};zse[zsf]=zbwi;zse[zanu]=this.zbge["Edit"];var zsg=JSON.stringify(zse);zsh().zsi(zsg,function zbwj(zsj){var zsk=JSON.parse(zsj);if(self.zbjj(zsk)){return;}
var zsm=zsk[zsn][zsf];var zsd=JSON.parse(zsm);var zso=zsk[zsp];var zbwk=[];var zxn=zso["g"];for(var zcw=0;zcw<zxn.length;zcw++){var zxp=zxn[zcw];var zxc=zxp["i"];if(zxc.length>1){var zbwl={}
;zbwl["n"]=zxp["n"]
zbwl["i"]=[];for(var zgg=0;zgg<zxc.length;zgg++){zbwl["i"].push(zxc[zgg]["n"]);}
zbwk.push(zbwl);}}var zbwm=$("identitymini_groupstable");while(zbwm.rows.length){zbwm.deleteRow(0);}
var zbwn=75;switch(zbwk.length){case 0:case 1:case 2:case 3:zbwn=27*zbwk.length;break;}
$("identitymini_fieldset").style.height=zbwn+"px";$("identity_minidialog_separator2_tr").style.display=zbwk.length?"table-row":"none";for(var zayz=0;zayz<zbwk.length;zayz++){var zxp=zbwk[zayz];var name=zxp["n"];var zxc=zxp["i"];var zbns=self.createElement(zbwo,{}
);var zbwp=self.createElement("td",{});var zbwq=self.createElement("table",{"class":"identitymini_inner_table"}
);var zbwr=self.createElement("tr",{});var zbws=self.createElement(zbwt,{"class":"identitymini_grinst_img_td"}
);var zbvv={};zbvv["src"]=self.zbwu(name);zbvv["class"]="identitymini_grinst_img";var zfx=self.createElement("img",zbvv);zbws.appendChild(zfx);zbwr.appendChild(zbws);for(var zgg=0;zgg<zxc.length;zgg++){var zbwv=self.createElement(zbwt,{"class":"identitymini_grinst_text_td"}
);var zbww=zxc[zgg];var zbwx=self.createElement("input",{"type":"radio","instance":zbww,"id":name+"##"+zbww,"name":name,"class":"rfmatch_login_radio"
}
);if(!zgg){self.zbbo(zbwx,{"checked":"checked"});}
var zbwy=self.createElement("label",{"title":zbww,"for":name+"##"+zbww,"class":"identitymini_instance_lbl"
}
);zbwy.innerText=zbww;zbwv.appendChild(zbwx);zbwv.appendChild(zbwy);zbwr.appendChild(zbwv);}
zbwq.appendChild(zbwr);zbwp.appendChild(zbwq);zbns.appendChild(zbwp);zbwm.appendChild(zbns);}
zbhh.style.top=zagj.offsetTop+24+"px";zbhh.style.display="block";zaak($(zbve),[10,9,8,7,6]);}
);};zaxj.prototype.zbwu=function(zbwz){switch(zbwz){case"Person":return"group_person16.png";case"App Upload":return"group_app16.png"
case"Default Password":return"group_default_password16.png";case"Credit Card":return"group_credit_card16.png";case"Car":return"group_car16.png";case"Business":return"group_business16.png";case"Passport":return"group_passport16.png";case"Bank Account":return"group_bank_account16.png";case"Location":return"group_location16.png";}
};zaxj.prototype.zbhr=function(){var zbhh=$(zbhp);zbhh.removeAttribute(zsf);var zahx=zbhh.style.display=="block";if(!zahx){return;}
zbhh.style.display="none";zaak($(zbve),[7,9,10]);}
;zaxj.prototype.zbhs=function(event,zbwf){};zaxj.prototype.zbht=function(event,zbwf){}
;zaxj.prototype.zbng=function(){var zbjc=$("identitymini_fillempty_check").checked;var zbjb=this.zbge["FillSubmit_ID"];var zbhh=$(zbhp);var zsm=zbhh.getAttribute(zsf);var zsd=JSON.parse(zsm);var zbwk=this.zbxa();this.zbja(zsd,zbjb!=this.zbge["FillForms_ID"],zbjb,zbjc,zbwk);}
;zaxj.prototype.zbxa=function(){var zbwm=$("identitymini_groupstable");var zbwk=[];for(var zbxb=0;zbxb<zbwm.rows.length;zbxb++){var zbqr=zbwm.rows[zbxb];var cells=zbqr.cells;for(var zbxc=1;zbxc<cells.length;zbxc++){var zbxd=cells[zbxc];var zgh=zbxd.children;var zbwx=zgh[0];if(zbwx.checked){var zbxe=zbwx.getAttribute("instance");var zxs=zbwx.getAttribute("name");var zbxf={}
;zbxf[zxs]=zbxe;zbwk.push(zbxf);}}}return zbwk;};zaxj.prototype.zbnh=function(){var zbjc=$("identitymini_fillempty_check").checked;var zbhh=$(zbhp);var zsm=zbhh.getAttribute(zsf);var zsd=JSON.parse(zsm);var zbjb=this.zbge["FillForms_ID"];var zbwk=this.zbxa();this.zbja(zsd,zbjb!=this.zbge["FillForms_ID"],zbjb,zbjc,zbwk);}
;zaxj.prototype.zbni=function(){var zbhh=$(zbhp);var zsm=zbhh.getAttribute(zsf);var zsd=JSON.parse(zsm);this.zbks(zsd);}
;zaxj.prototype.zbnj=function(){this.zbhk();this.zbkw(["contextmenu_identity_page","contextmenu_list_page","contextmenu_common"]);this.zbjk([ztk["RfItemType_Identity"],ztk["RfItemType_Folder"]],zvh,zaof("identities_header"));}
;zaxj.prototype.zbsd=function(){var zsg=JSON.stringify({}
);var self=this;zsh().zbxg(zsg,function(zsj){self.zbxh(zsj)}
);};zaxj.prototype.zbxh=function(zsj){var zsk=JSON.parse(zsj);if(this.zbjj(zsk)){return;}
var zbxi=zsk[zyl];this.zbxj(zbxi);};zaxj.prototype.zbxj=function(zbxi){var zbhh=$(zbhi);var zbxk=zbxi.length;var zbkh=zbhh.getAttribute(zsf);var zbxl=undefined;if(zbkh){var zbki=JSON.parse(zbkh);zbxl=zbki.length;}
if(typeof zbxl!="undefined"&&zbxl!=zbxk){zbhh.removeAttribute("init");}
var zagj=$(zbkg);if(!zbxk){zbhh.removeAttribute(zsf);if(zagj){zagj.style.display="none";zagj.firstChild.firstChild.nextSibling.innerText="(logins)";zagj.firstChild.nextSibling.style.display="none";}
return;}var zbxm=zbxi[0];var text=zbxk==1?zaea(zbxm):zaea(zbxm)+" (+"+(zbxk-1)+")";this.zbgs=text;zbhh.setAttribute(zsf,JSON.stringify(zbxi));if(zagj){zagj.firstChild.firstChild.nextSibling.innerText=text;zagj.firstChild.nextSibling.style.display="inline-block";}
};zaxj.prototype.zbxn=function(){var zbhh=$(zbhi);var zbxo=zbhh.getAttribute(zsf);var zbxi=JSON.parse(zbxo);var zbxp=$("rfmatch_loginstable");while(zbxp.rows.length){zbxp.deleteRow(0);}
var zbns,zbxq,zbxr,zbnr;for(var zayz=0;zayz<zbxi.length;zayz++){var zmp=zbxi[zayz];var text=this.zbxs(zmp);var zbxt=this.zbgd++;var zbvv={}
;zbvv["itemId"]=zbxt;zbvv[zsf]=JSON.stringify(zmp);zbns=this.createElement(zbwo,zbvv);var zbxu=this.createElement(zbwt,{"class":"rfmatch_login_text_td"}
);var zbwx=this.createElement("input",{"type":"radio","itemId":zbxt,"id":"radio"+zbxt,"name":"rf_match_radio","class":"rfmatch_login_radio"
}
);zbxq="hidden";if(!zayz){this.zbbo(zbwx,{"checked":"checked"}
);}var zbwy=this.createElement("label",{"for":"radio"+zbxt,"class":"rfmatch_login_lbl"}
);zbwy.innerText=text;zbxu.appendChild(zbwx);zbxu.appendChild(zbwy);var zbxv=this.createElement(zbwt,{"align":"right"}
);zbxv.style.width="25px";zbxr=this.createElement(zazv,{"itemId":zbxt,"id":"div"+zbxt,"class":"match-minidialog-details-V8 toolbar-minidialog-details-icon-normal"
}
);this.zaxy.forEach(function(zbad){zbxr.addEventListener(zbad,function(event){event.stopImmediatePropagation();}
,false);});zbxq=!zayz?"visible":"hidden";zbxr.style.visibility=zbxq;zbxv.appendChild(zbxr);zbns.appendChild(zbxu);zbns.appendChild(zbxv);zbxp.appendChild(zbns);}
zbhh.setAttribute("init",'true');var self=this;zbxr=zbxp.getElementsByTagName(zazv);for(zbnr=0;zbnr<zbxr.length;zbnr++){var zaoi=zbxr[zbnr];zaoi.addEventListener("mouseover",function(){self.css.zayu(zaoi,"toolbar-minidialog-details-icon-normal","toolbar-minidialog-details-icon-hover");}
,false);zaoi.addEventListener("mouseout",function(){self.css.zayu(zaoi,"toolbar-minidialog-details-icon-hover","toolbar-minidialog-details-icon-normal");}
,false);zaoi.addEventListener("click",function(){self.zbxw();}
,false);zaoi.addEventListener("mouseup",function zbxx(event){if(event.button!=2){return;}
self.zbxw();},false);}var zbxy=zbxp.getElementsByTagName(zbwo);for(zbnr=0;zbnr<zbxy.length;zbnr++){(function(){var zbns=zbxy[zbnr];if(zbns.getAttribute("itemId")){zbns.addEventListener("click",function(){self.zbxz(zbns);}
,false);}})();}var zbwn;if(zbxi.length==1){zbwn="30px";}
else if(zbxi.length==2){zbwn="50px";}else{zbwn="75px";}
var zbya=$("rfmatch_logins_fieldset");zbya.style.height=zbya.style.maxHeight=zbwn;}
;zaxj.prototype.zbhj=function(){var zagj=$(zbkg);if(!zagj){return;}
var zbhh=$(zbhi);var zbxo=zbhh.getAttribute(zsf);if(!zbxo){return;}
var zbvc=zbhh.getAttribute("init");if(!zbvc){this.zbxn();}
var zahx=zbhh.style.display=="block";if(zahx){return;}
zbhh.style.top=zagj.offsetTop+24+"px";zbhh.style.display="block";zaak($(zbve),[10,9,8,7,6]);}
;zaxj.prototype.zbhk=function(){this.zbiv();var zbhh=$(zbhi);var zahx=zbhh.style.display=="block";if(!zahx){return;}
zbhh.style.display="none";zaak($(zbve),[7,9,10]);}
;zaxj.prototype.zbxw=function(){var zagj=this.zbyb();this.zbqm(zagj,true);}
;zaxj.prototype.zbnk=function(){var zagj=this.zbyb();var zsm=zagj.getAttribute(zsf);var zsd=JSON.parse(zsm);this.zbks(zsd);}
;zaxj.prototype.zbnl=function(){var zbjc=$("rfmatch_fillempty_check").checked;var zagj=this.zbyb();var zsm=zagj.getAttribute(zsf);var zsd=JSON.parse(zsm);var zyk={}
;zyk[zbjf]=false;zyk[zwo]=false;zyk[zbjg]=zbjc;zyk[zbje]=true;zyk[zbjd]=false;zyk[zsf]=zsd;zyk[zanu]=this.zbge["GoFill"];var zsg=JSON.stringify(zyk);var self=this;zsh().zbjh(zsg,function(zsj){self.zbji(zsj);}
);};zaxj.prototype.zbnm=function(){var zbjc=$("rfmatch_fillempty_check").checked;var zagj=this.zbyb();var zsm=zagj.getAttribute(zsf);var zsd=JSON.parse(zsm);var zyk={}
;zyk[zbjf]=false;zyk[zwo]=true;zyk[zbjg]=zbjc;zyk[zbje]=true;zyk[zbjd]=false;zyk[zsf]=zsd;zyk[zanu]=this.zbge["GoFill"];var zsg=JSON.stringify(zyk);var self=this;zsh().zbjh(zsg,function(zsj){self.zbji(zsj)}
);};zaxj.prototype.zbyb=function(){var zbxp=$("rfmatch_loginstable");for(var zayz=0;zayz<zbxp.rows.length;zayz++){var zbqr=zbxp.rows[zayz];var zbwx=zbqr.cells[0].children[0];if(zbwx.checked){return zbqr;}
}};zaxj.prototype.zbxs=function(zsd){var text="";var path=zsd[zaed];var zbyc=path.match(new RegExp("\/","g")).length;if(zbyc<2){text=path.substring(path.lastIndexOf("/")+1);text=text.substr(0,text.lastIndexOf("."));}
else{text=path.substr(0,path.lastIndexOf("."));}return text;}
;zaxj.prototype.zbxz=function(zagj){var zbyd=zagj.getAttribute("itemId");if(!zbyd){return;}
zbyd=parseInt(zbyd);var zbxp=$("rfmatch_loginstable");for(var zayz=0;zayz<zbxp.rows.length;zayz++){var zbqr=zbxp.rows[zayz];var zbwx=zbqr.cells[0].children[0];var zbye=parseInt(zbwx.getAttribute("itemId"));if(zbye==zbyd){zbwx.setAttribute("checked",'true');zbwx.checked=true;}
else{zbwx.removeAttribute("checked");zbwx.checked=false;}
var zly=zbqr.cells[1].children[0];zly.style.visibility=zbye==zbyd?"visible":"hidden";}
};zaxj.prototype.zbhl=function(event){};zaxj.prototype.zbhm=function(event){}
;zaxj.prototype.zbnn=function(){this.zbhk();this.zbkw(["contextmenu_list_page","contextmenu_common"]);this.zbjk([ztk["RfItemType_Login"],ztk["RfItemType_SearchCard"],ztk["RfItemType_BlockingPasscard"],ztk["RfItemType_Folder"]],zvh,zaof("logins_header"));}
;zaxj.prototype.zbyf=function(){var self=this;$(zbyg).addEventListener("click",function(){self.zbyh();}
,false);$(zbmn).addEventListener("keypress",function(){self.zbmd(event);}
,false);$(zbyi).addEventListener("click",function(){self.zbmo();}
,false);};zaxj.prototype.zbyj=function(zpn){var zbyk=zpn["channel_type"];var zbyl=zpn["request_server"];this.zbyf();$(zbmn).value="";$(zbym).innerHTML="";$(zbmn).setAttribute("channel",zbyk);setTimeout(function(){$(zbmn).focus();}
,100);var self=this;setTimeout(function zbyn(){if(!zbyl){if(zbyk=="undefined"){$(zbym).innerText="OTP was sent";}
else{$(zbym).innerText="OTP was sent by "+zbyk;}return;}
var zbyo=zsh().zbij();if(!zbyo){return;}var zse={}
;zse[zart]=zsh().zarr();zse[zaru]=zbyo;zse[zarv]=zbyk;var zsg=JSON.stringify(zse);zsh().zarw(zsg,function(zsj){self.zbyp(zsj);}
);},100);};zaxj.prototype.zbik=function(zbyk,zbyl){var self=this;var zpn={"channel_type":zbyk,"request_server":zbyl}
;var zbhd=new zbcv("rf_otp_section_div",undefined,"dialog");var zbhe=this.zayi(zbhd);var zbcj=[zbhe];this.zayb.Navigate("One Time Password",zbcj,zpn,function(zpn){self.zbhf();self.zbyj(zpn);}
);};zaxj.prototype.zbyp=function(zsj){var zsk=JSON.parse(zsj);if(!zsk){return;}
var zbyq=$(zbmn).getAttribute("channel");if(zbyq=="undefined"){$(zbym).innerText="OTP was sent";}
else{$(zbym).innerText="OTP was sent by "+zbyq;}};zaxj.prototype.zbmo=function(){try{var zbyr=$(zbmn).value;$(zbym).innerHTML="";if(!zbyr){$(zbmn).focus();$(zbym).innerHTML="Password cannot be empty";return;}
var zbys=$("rf_otp_memorize_chk").checked?1:0;var zbyq=$(zbmn).getAttribute("channel");zbrn(true,zbyt,[zbyi],zbmn);var self=this;setTimeout(function(){var zse={}
;zse[zart]=zsh().zarr();zse[zaru]=zsh().zbij();zse[zbyu]=zbyr;zse[zbyv]=zbys;zse[zarv]=zbyq;zse[zbyw]="";var zsg=JSON.stringify(zse);zsh().zarw(zsg,function(zsj){self.zbyx(zsj);}
);},200);}catch(zhj){}};zaxj.prototype.zbyx=function(zsj){try{var zsk=JSON.parse(zsj);if(!zsk){return;}
zbrn(false,zbyt,[zbyi],null);var zbtf=typeof zsk[zsl]=="undefined";if(!zbtf){var zbic=zsk[zsl][ztu];var zbid=zsk[zsl][ztt];$(zbym).innerText=zbid;return;}
var self=this;setTimeout(function(){if(!self.zbia()){return;}
zoj().ztd({"name":"AutoSaveUserLoggedIn"});self.zbib();}
,0);}catch(zhj){}};zaxj.prototype.zbyh=function(){this.zbif();}
;zaxj.prototype.zbpz=function(){var self=this;var zss=[];var zbjr=new zbcv(undefined,undefined,"header-simple-title");zbjr["m_oContext"]={"title":zaof("help_header")}
;zss.push(zbjr);var zbyy={};zbyy[zbli]=zbyz;var zbza=new zbcv(zbld,0,"button","RoboForm Account",zbld,"",zaox,undefined,zbyy);zss.push(zbza);var zbzb={}
;zbzb[zbli]=zbzc;var zbzd=new zbcv(zble,0,"button","FAQs",zble,"",zaoy,undefined,zbzb);zss.push(zbzd);var zbze={}
;zbze[zbli]=zbzf;var zbzg=new zbcv(zblf,0,"button","Contact support",zblf,"",zaoz,undefined,zbze);zss.push(zbzg);var zbzh={}
;zbzh[zbli]=zbzi;var zbzj=new zbcv(zblc,0,"button","RoboForm Home",zblc,"",zapa,undefined,zbzh);zss.push(zbzj);var zblu=new zbcv(0,0,"separator");zss.push(zblu);var zbzk={}
;zbzk[zbli]="about.html";var zbzl=new zbcv(zblg,0,"button","About...",zblg,"",zapb,undefined,zbzk);zss.push(zbzl);var zbjp=self.zbjq(zss);var zbcj=[zbjp];self.zayb.Navigate("Help",zbcj,undefined,function(zpn){self.zbhf();self.zbjv(zpn)}
);};zaxj.prototype.zbim=function(){var self=this;var zbhd=new zbcv("change_master_password_div",undefined,"dialog");var zbhe=this.zayi(zbhd);var zbcj=[zbhe];this.zayb.Navigate("Change Master Password",zbcj,undefined,function(zpn){self.zbhf();self.zbzm(zpn);}
);};zaxj.prototype.zbzm=function(){this.zbzn();};zaxj.prototype.zbzn=function(){var self=this;$("change_master_password_change").addEventListener("click",function(){self.zbzo();}
,false);$("change_master_password_cancel").addEventListener("click",function(){self.zayb.zbcp();self.zbio();}
,false);};zaxj.prototype.zbzo=function(){var self=this;var zarn=$("change_master_password_error_div");zarn.innerHTML="";var zaro=$("change_master_password_current_input").value;var zarp=$("change_master_password_new_input").value;var zarq=$("change_master_password_confirm_input").value;if(!zaro||!zarp||!zarq){zarn.innerHTML=zaof("master_password_empty");}
if(!zsh().zarr()){zarn.innerText=zaof("Change_Account_Password_Login_First");return;}
if(zaro==zarp){zarn.innerHTML=zaof("IDS_MasterPass_New_TheSameAsPrevious_Error");return;}
if(zarp!=zarq){zarn.innerHTML=zaof("master_password_confirm_error");return;}
zbrn(true,"change_master_password_progress",["change_master_password_change"],null);var zars={}
;zars[zart]=zsh().zarr();zars[zaru]=zaro;zars[zarv]="-";zsh().zarw(JSON.stringify(zars),function(zsj){var zsk=JSON.parse(zsj);if(zsk[zsl]){zarn.innerText=zaof("Wrong_Password");zbrn(false,"change_master_password_progress",["change_master_password_change"],null);return;}
var zary=zsh().zarz(zarp);if(zary["result"]!=true){zarn.innerHTML=zary["reason"];zbrn(false,"change_master_password_progress",["change_master_password_change"],null);return;}
var zasa={};zasa["new_password"]=zarp;zasa[zaru]=zaro;zasa[zart]=zsh().zarr();zsh().zasb(JSON.stringify(zasa),function(data){zbrn(false,"change_master_password_progress",["change_master_password_change"],null);zoj().ztd({"name":"AutoSaveUserLoggedIn"}
);self.zbib();},function(zts){zbrn(false,"change_master_password_progress",["change_master_password_change"],null);var zanz=JSON.parse(zts);if(zanz){var zdq=zanz.error;if(zdq){var ztb=zdq["code"];var ztc=zdq["description"];if(ztb==1){zarn.innerHTML=zaof("Wrong_Password");}
else{if(ztc){zarn.innerHTML=ztc;}else{zarn.innerHTML=zafi(zaof("error_code"),ztb);}
}}}},function(zasc){if(zasc==100){return;}});});};zaxj.prototype.zbmc=function(zpn){var self=this;var zbhd=new zbcv("rfcreate_mpsection_div",undefined,"dialog");var zbhe=self.zayi(zbhd);var zbcj=[zbhe];self.zayb.Navigate("Create Master Password",zbcj,zpn,function(zpn){self.zbhf();self.zbzp(zpn);}
);};zaxj.prototype.zbzq=function(){var self=this;$(zbzr).addEventListener("click",function(){self.zbmk();}
,false);$(zboi).addEventListener("click",function(){self.zayb.zbcp();}
,false);$(zbmi).addEventListener("keypress",function(event){self.zbmd(event);}
,false);$(zbmj).addEventListener("keypress",function(event){self.zbmd(event);}
,false);};zaxj.prototype.zbzp=function(zpn){this.zbzq();var zazl=zpn["item_info"];var zbjb=zpn["action"];var zbzs=zpn["description"];$(zbzt).innerHTML=zbzs||"";zbrn(false,zbzu,[zbzr,zboi],null);var zbzv=$(zbmi);zbzv.value="";zbzv.focus();}
;zaxj.prototype.zbmk=function(){try{var zbzw=$(zbmi);var zbzx=$(zbmj);var zbzy=$(zbzt);zbzy.innerHTML="";var zbzz=zbzw.value;var zcaa=zbzx.value;if(!zbzz){zbzy.innerHTML=zaof("master_password_empty");zbzw.focus();return false;}
if(zbzz.length<zbus||zbzz.length>zbut){zbzy.innerHTML=zaof("mast_pwd_limit");zbzw.focus();return false;}
if(!zcaa){zbzy.innerHTML=zaof("master_password_empty");zbzx.focus();return false;}
if(zcaa!=zbzz){zbzy.innerHTML=zaof("master_password_confirm_error");zbzw.focus();return false;}
var zpn=this.zayb.zbcq();var zcab=zpn[zanu];var zsd=zpn[zsf];zbrn(true,zbzu,[zbzr,zboi],zbmj);if(zcab==this.zbge["Save"]||zcab==this.zbge["CreateSafenote"]||zcab==this.zbge["CreateContact"]||zcab==this.zbge["CreateIdentity"]){var zyk={}
;zyk[zuo]=zsd[zuo];zyk[zus]=zsd[zus];zyk[zun]=zpn[zun];zyk[zun][zuu]=true;zyk[zun][zuv]=zbzz;zyk[zsf]=zsd;zyk[zanu]=zcab;var self=this;var zsg=JSON.stringify(zyk);setTimeout(function(){zsh().zcac(zsg,function(zsj){self.zcad(zsj);}
)},100);}}catch(zhj){return false;}};zaxj.prototype.zcad=function(zsj){var zsk=JSON.parse(zsj);zbrn(false,zbzu,[zbzr,zboi],null);if(this.zbjj(zsk)){return;}
var self=this;setTimeout(function(){var zpn=zsk[zsn];zoj().zyq(zpn[zun][zuv]);self.zayb.zbcp();}
,100);};zaxj.prototype.zbmb=function(zpn){var self=this;var zbhd=new zbcv("mastpwdEnter_div",undefined,"dialog");var zbhe=self.zayi(zbhd);var zbcj=[zbhe];self.zayb.Navigate("Enter Master Password",zbcj,zpn,function(zpn){self.zbhf();self.zcae(zpn);}
);};zaxj.prototype.zcaf=function(){var self=this;$(zboe).addEventListener("click",function(){self.zayb.zbcp();}
,false);$(zcag).addEventListener("click",function(){self.zbmm();}
,false);$(zbml).addEventListener("keypress",function(){self.zbmd(event,true);}
,false);};zaxj.prototype.zcae=function(zpn){this.zcaf();var zazl=zpn[zsf];var zbjb=zpn[zanu];var zbzs=zpn["description"];$(zcah).innerHTML=zbzs||"";zbrn(false,zcai,[zcag,zboe],null);$(zbml).value="";$(zbml).focus();}
;zaxj.prototype.zbmm=function(){try{$(zcah).innerHTML="";var zbzv=$(zbml);var zbzz=zbzv.value;if(!zbzz){$(zbml).focus();$(zcah).innerHTML="Empty password";return;}
var zanq=!!$(zcaj).checked;if(zanq){zoj().zyq(zbzz);}
var zpn=this.zayb.zbcq();var zcab=zpn[zanu];var zsd=zpn[zsf];zbrn(true,zcai,[zcag,zboe],zcaj);var zyk={}
;zyk[zuv]=zbzz;zyk[zsf]=zsd;zyk[zanu]=zcab;zyk["cachepwd"]=zanq;var self=this;switch(zcab){case this.zbge["CreateSafenote"]:case this.zbge["CreateContact"]:case this.zbge["CreateIdentity"]:case this.zbge["Save"]:var zcak={}
;zcak[zuo]=zsd[zuo];zcak[zus]=zsd[zus];zcak[zsf]=zsd;zcak[zanu]=zcab;zcak[zun]=zpn[zun];zcak[zun][zuu]=true;zcak[zun][zuv]=zbzz;var zcal=JSON.stringify(zcak);zcab==this.zbge["Save"]?zsh().zcac(zcal,function(zsj){self.zcam(zsj);}
):zsh().zcac(zcal,function(zsj){self.zcan(zsj);});break;case this.zbge["Edit"]:var zsg=JSON.stringify(zyk);zsh().zsi(zsg,function(zsj){self.zcao(zsj);}
);break;case this.zbge["FillForms_ID"]:case this.zbge["FillSubmit_ID"]:this.zbja(zsd,zcab!=this.zbge["FillForms_ID"],zcab);break;case this.zbge["LoginSameWindow"]:case this.zbge["LoginNewWindow"]:case this.zbge["GoFill"]:case this.zbge["Goto"]:zyk[zbjg]=true;zyk[zbjd]=true;zyk[zbjf]=zcab==this.zbge["LoginNewWindow"];zyk[zbje]=zcab!=this.zbge["Goto"];zyk[zwo]=!(zcab==this.zbge["Goto"]||zcab==this.zbge["GoFill"]);zsh().zbjh(JSON.stringify(zyk),function(zsj){var zsk=JSON.parse(zsj);if(self.zbjj(zsk)){return;}
self.zbir(500);});break;}}catch(zhj){zbrn(false,zcai,[zcag,zboe],null);}
};zaxj.prototype.zbma=function(){var self=this;var zbhd=new zbcv("session_timeout_div",undefined,"dialog");var zbhe=self.zayi(zbhd);var zbcj=[zbhe];self.zayb.Navigate("Session Expired",zbcj,undefined,function(zpn){self.zbhf();self.zcap(zpn);}
);};zaxj.prototype.zcaq=function(){var self=this;$(zbod).addEventListener("click",function(){self.zcar();}
,false);};zaxj.prototype.zcap=function(){this.zcaq();if(zac){opera.extension.postMessage({"msg":"session_expire"}
);}this.zbgw=this.zbgv;var self=this;this.zbgu=setInterval(function(){self.zcas()}
,1000);};zaxj.prototype.zcas=function(){$(zbod).value=zaof("savebar_close_btn")+" ("+this.zbgw+")";if(this.zbgw==0){this.zcat();return;}
this.zbgw--;};zaxj.prototype.zcar=function(){this.zcat();}
;zaxj.prototype.zcat=function(){if(this.zbgu!=0){clearInterval(this.zbgu);this.zbgu=0;}
$("session_timeout_div").style.display="none";this.zbir(100);}
;zaxj.prototype.zbpt=function(zazl){var self=this;var zbjr=new zbcv(undefined,undefined,"header-item-title");zbjr["m_oContext"]={"title":zaof("new_folder_header")}
;var zbjs=self.zayi(zbjr);var zbhd=new zbcv("rffolder_create_div",undefined,"dialog");var zbhe=self.zayi(zbhd);var zbcj=[zbjs,zbhe];self.zayb.Navigate("Create Folder Dialog",zbcj,{"item_info":zazl}
,function(zpn){self.zbhf();self.zcau(zpn);});};zaxj.prototype.zcav=function(){var self=this;$(zbok).addEventListener("click",function(){self.zayb.zbcp();}
,false);$(zcaw).addEventListener("click",function(){self.zbmh();}
,false);$(zbmg).addEventListener("keypress",function(event){self.zbmd(event);}
,false);};zaxj.prototype.zcau=function(){this.zcav();$(zcax).innerHTML="";$(zbmg).value="";setTimeout(function(){$(zbmg).focus();}
,200);};zaxj.prototype.zbmh=function(){if(!this.zbiw(zcax,zbmg)){return;}
var zpn=this.zayb.zbcq();var zazl=zpn["item_info"];var zcay=$(zbmg).value;var zcaz=zazl[zus];if(!zcaz.endsWith("/")){zcaz+="/";}
zcaz+=zcay;zbrn(true,zcba,[zcaw,zbok],zbol);var zse={}
;zse[zus]=zcaz;var self=this;setTimeout(function(){var zsg=JSON.stringify(zse);zsh().CreateFolder(zsg,function(zsj){self.zcbb(zsj);}
);},100);};zaxj.prototype.zcbb=function(zsj){var zsk=JSON.parse(zsj);if(this.zbjj(zsk)){return;}
var self=this;setTimeout(function(){zbrn(false,zcba,[zcaw,zbok],zbol);self.zayb.zbcp();var zpn=self.zayb.zbcq();var zbjl=zpn["types"];var path=zpn["path"];var zaqp=zpn["title"];self.zayb.zbct();self.zbjk(zbjl,path,zaqp);}
,100);};zaxj.prototype.zbpp=function(zazl){var self=this;var zbhd=new zbcv("rfcreate_object_dialog",undefined,"dialog");var zbhe=self.zayi(zbhd);var zbcj=[zbhe];self.zayb.Navigate("Create Item Dialog",zbcj,{"item_info":zazl}
,function(zpn){self.zbhf();self.zcbc(zpn);});};zaxj.prototype.zcbc=function(zpn){this.zcbd();var zazl=zpn["item_info"];$(zcbe).innerHTML="";$(zcbf).innerHTML="";$(zcbg).value="";$(zcbh).value="";$(zcbi).style.display="none";$(zcbj).style.display="none";$(zcbk).style.display="none";$(zcbl).style.display="none";var zcbm;var zcbn=$("rf_createobj_newname_td");switch(zazl[zuo]){case ztk["RfItemType_Safenote"]:$(zcbi).style.display="table-row";$(zcbj).style.display="table-row";zcbm=zbfu;zcbn.innerHTML=zaof("Name");$(zcbe).innerHTML=zaof("Create_new")+zaew(zazl[zuo]);break;case ztk["RfItemType_Identity"]:$(zcbk).style.display="table-row";$(zcbl).style.display="table-row";zcbm=zbfv;zcbn.innerHTML=zaof("CreateDlg_identity_name_lbl");$(zcbe).innerHTML=zaof("CreateDlg_identity_top_lbl");break;case ztk["RfItemType_Contact"]:$(zcbk).style.display="table-row";$(zcbl).style.display="table-row";zcbm=zbfw;zcbn.innerHTML=zaof("Name");$(zcbe).innerHTML=zaof("Create_new")+zaew(zazl[zuo]);break;default:return;}
$(zcbo).innerHTML="<img id='rf_create_obj_img' src='"+zcbm+"' />";setTimeout(function(){$(zcbh).focus();}
,200);};zaxj.prototype.zcbd=function(){var self=this;$(zboy).addEventListener("click",function(){self.zayb.zbcp();}
,false);$(zcbp).addEventListener("click",function(){self.zcbq();}
,false);};zaxj.prototype.zcbq=function(){try{if(!this.zbiw(zcbf,zcbh)){return;}
var zpn=this.zayb.zbcq();var zazl=zpn["item_info"];var zcbr=zazl[zuo];var zcaz=zazl[zus];var zcbs=$(zcbh).value;zbrn(true,zcbt,[zcbp,zboy],zcbh);var zyk={}
;zyk[zuo]=zcbr;var zuq=RfapiJS["utils"].zur(zcbr);var zso={}
;var zbjb=0;if(!zcaz.endsWith("/")){zcaz+="/";}zyk[zus]=zcaz+zcbs+zuq;switch(zazl[zuo]){case ztk["RfItemType_Safenote"]:zso[zben]=$(zcbg).value;zbjb=this.zbge["CreateSafenote"];break;case ztk["RfItemType_Identity"]:case ztk["RfItemType_Contact"]:var zxk={}
;zxk["World Regions"]=$(zbpa).value;zxk["Use for Form Filling"]=zazl[zuo]==ztk["RfItemType_Identity"]?"+":"";zso[zbeu]=zxk;zbjb=zazl[zuo]==ztk["RfItemType_Identity"]?this.zbge["CreateIdentity"]:this.zbge["CreateContact"];break;}
zyk[zun]=zso;zyk[zun][zuu]=true;zyk[zun][zuv]=zsh().zcbu();var zcbv={}
;zcbv[zuo]=zcbr;zcbv[zus]=zyk[zus];zyk[zsf]=zcbv;zyk[zanu]=zbjb;var self=this;setTimeout(function(){var zsg=JSON.stringify(zyk);zsh().zcac(zsg,function(zsj){self.zcan(zsj);}
);},10);}catch(zhj){zbrn(false,zcbt,[zcbp,zboy],zcbh);}
};zaxj.prototype.zcan=function(zsj){var zsk=JSON.parse(zsj);if(this.zbjj(zsk)){this.zayb.zbcp();zbrn(false,zcbt,[zcbp,zboy],null);return;}
var self=this;setTimeout(function(){zbrn(false,zcai,[zcag,zboe],null);zbrn(false,zcbt,[zcbp,zboy],zcbh);var zsd=zsk[zsn][zsf];switch(zsd[zuo]){case ztk["RfItemType_Safenote"]:case ztk["RfItemType_Identity"]:case ztk["RfItemType_Contact"]:self.zayb.zbcp();var zpn=self.zayb.zbcq();var zbjl=zpn["types"];var path=zpn["path"];var zaqp=zpn["title"];self.zayb.zbct();self.zbjk(zbjl,path,zaqp);self.zbks(zsd);break;}
},300);};zaxj.prototype.zblo=function(){var self=this;zoj().zyp(function(data){self.zcbw(data);}
);};zaxj.prototype.zcbw=function(data){var zpn=JSON.parse(data);var zcbx=zpn["data"]["item"];var url=zcbx[RfapiJS.ITEM_MATCHURL_PROP];var zcby=zoj().zrr.zrs(url);if(!zcby){return;}
this.zcbz(zpn);};zaxj.prototype.zcbz=function(zpn){var self=this;var zbhd=new zbcv("manualsaveDlg_div",undefined,"dialog");var zbhe=self.zayi(zbhd);var zbcj=[zbhe];self.zayb.Navigate("Manual Save",zbcj,zpn,function(zpn){self.zbhf();self.zcca(zpn);}
);};zaxj.prototype.zccb=function(){var self=this;$(zboq).addEventListener("click",function(){self.zccc();}
,false);$(zccd).addEventListener("click",function(){self.zbms();}
,false);$(zbos).addEventListener("click",function(){self.zcce();}
,false);$(zbmr).addEventListener("keypress",function(){self.zbmd(event);}
,false);$(zbot).addEventListener("click",function(){self.zayb.zbcp();}
,false);$(zccf).addEventListener("click",function(){self.zbmq();}
,false);$(zbmp).addEventListener("keypress",function(){self.zbmd(event);}
,false);$("manual_save_dlg_unblock_button").addEventListener("click",function(){self.zccg();}
,false);$("rfobject_unblock_cancel_btn").addEventListener("click",function(){self.zcch();}
,false);$("rfobject_unblock_ok_btn").addEventListener("click",function(){self.zcci();}
,false);};zaxj.prototype.zcca=function(zpn){this.zccb();var zaqp=zpn["title"];var zccj=zpn["name"];var zcs=zpn[zyl];var zcbx=zpn["data"][zun];var zcu=zoj().zrr.zrv(zrx);var zct=zoj().zrr.zrv(zrw);var zcck=$('manualsaveDlg_radio_bookmark');zcck.disabled=zcu;zcck.checked=!zcu;var zccl=$('manualsaveDlg_radio_login');zccl.disabled=zct;zccl.checked=!zct;var zccm=zcbx[RfapiJS.ITEM_MATCHURL_PROP];var zccn=zcbx[RfapiJS.ITEMDATA_FIELDS_PROP];if(!zcu&&!zct){$(zcco).checked=zccn.length==0;}
var zeo=zde("sa-auto-save","blocking",[]);var zvo=zty(zccm,true,true,true);var zccp=zeo.indexOf(zvo)!==-1;$("manual_save_dlg_unblock_td").style.display=zccp?"block":"none";$(zccq).innerHTML="";$(zccr).innerHTML="";$(zccs).style.display="none";$("manual_save_dlg_section_tree_row").style.display="table-row";$(zbmp).value=zccj;$(zbmp).focus();this.zcct("manual_save_dlg_createfldsection_maintr",false);this.zcct("rfobject_unblock_section_div",false);this.zccu(zcs,"","manual_save_dlg_treeview");}
;zaxj.prototype.zcch=function(){this.zcct("rfobject_unblock_section_div",false);$(zbmp).focus();}
;zaxj.prototype.zcci=function(){try{var zpn=this.zayb.zbcq();var zcbx=zpn["data"][zun];var zvo=zty(zcbx[RfapiJS.ITEM_MATCHURL_PROP],true,true,true);var zeo=zde("sa-auto-save","blocking",[]);var zep=zeo.indexOf(zvo);while(zep>-1){zeo.splice(zep,1);zep=zeo.indexOf(zvo);}
zdv("sa-auto-save","blocking",zeo);$("manual_save_dlg_unblock_td").style.display="none";this.zcct("rfobject_unblock_section_div",false);}
catch(zhj){zbrn(false,zccs,[zccf,zbot],null);}};zaxj.prototype.zccg=function(){this.zcct("rfobject_unblock_section_div",true);$(zccv).style.display="none";$(zbmr).value="";$(zccw).innerHTML="";$(zccr).innerHTML="";var zpn=this.zayb.zbcq();var zso=zpn[zsp];var zvo=zty(zso[RfapiJS.ITEM_MATCHURL_PROP],true,true,true);$("rfobject_unblock_section_lbl").innerHTML=zafi(zaof("unblock_description"),zvo,zvo);$("rfobject_unblock_ok_btn").focus();}
;zaxj.prototype.zbmq=function(){try{if(!this.zbiw(zccr,zbmp)){return;}
var zccx=$(zbmp).value;var zccy=$(zccz).checked;var zcda=zccy?ztk["RfItemType_Login"]:ztk["RfItemType_Bookmark"];var zcaz=$(zbfn).getAttribute(zus);zbrn(true,zccs,[zccf,zbot],zbmp);var zpn=this.zayb.zbcq();var zso=zpn["data"]["item"];var zyk={}
;zyk[zun]=zso;zyk[zuo]=zcda;var zuq=RfapiJS["utils"].zur(zcda);if(!zcaz.endsWith("/")){zcaz+="/";}
zyk[zus]=zcaz+zccx+zuq;zyk[zun][zuu]=true;zyk[zun][zuv]=zsh().zcbu();zyk[zsf]={"path":zyk[zus],"type":zcda}
;zyk[zanu]=this.zbge["Save"];var self=this;setTimeout(function(){var zsg=JSON.stringify(zyk);zsh().zcac(zsg,function(zsj){self.zcam(zsj);}
);},10);}catch(zhj){zbrn(false,zccs,[zccf,zbot],null);}
};zaxj.prototype.zcam=function(zsj){var zsk=JSON.parse(zsj);if(this.zbjj(zsk)){return;}
zbrn(false,zcai,[zcag,zboe],null);zbrn(false,zccs,[zccf,zbot],null);this.zayb.zbcp();}
;zaxj.prototype.zccc=function(){this.zcct("manual_save_dlg_createfldsection_maintr",true);$(zccv).style.display="none";$(zbmr).value="";$(zccw).innerHTML="";$(zccr).innerHTML="";$(zbmr).focus();}
;zaxj.prototype.zbms=function(){try{if(!this.zbiw(zccw,zbmr)){return;}
var zcay=$(zbmr).value;var zcaz=$(zbfn).getAttribute(zus);if(!zcaz.endsWith("/")){zcaz+="/";}
zcaz=zcaz+zcay;zbrn(true,zccv,[zccd,zbos],zbmr);var zse={}
;zse[zus]=zcaz;var self=this;setTimeout(function(){var zsg=JSON.stringify(zse);zsh().CreateFolder(zsg,function(zsj){self.zcdb(zsj);zbrn(false,zccv,[zccd,zbos],null);}
);},100);}catch(zhj){zbrn(false,zccv,[zccd,zbos],null);}
};zaxj.prototype.zcdb=function(zsj){var zsk=JSON.parse(zsj);if(this.zbjj(zsk)){return;}
var zcdc=zsk[zsn][zus];var zse={};zse["path"]=zcdc;var zsg=JSON.stringify(zse);var self=this;setTimeout(function(){zsh().ztj(zsg,function zcdd(zcde){var zcdf=JSON.parse(zcde);if(self.zbjj(zcdf)){return;}
self.zcct("manual_save_dlg_createfldsection_maintr",false);$(zccq).innerHTML="";$(zccr).innerHTML="";$("manual_save_dlg_section_tree_row").style.display="table-row";var zcs=zcdf[zyl];self.zccu(zcs,"","manual_save_dlg_treeview");$(zbmp).focus();var zcdg=$(zbfo+zcdc);self.zcdh(zcdg);}
)},100);};zaxj.prototype.zcce=function(){this.zcct("manual_save_dlg_createfldsection_maintr",false);$(zbmp).focus();}
;zaxj.prototype.zcct=function(zee,zahx){var zcdi=zahx==false?"none":"table-row";var zcdj=zahx==true?"none":"table-row";$("manual_save_dlg_createfldsection_maintr").style.display="none";$("rfobject_unblock_section_div").style.display="none";$(zee).style.display=zcdi;$("manual_save_dlg_btns_row").style.display=zcdj;$("manual_save_dlg_section_tree_row").style.display=zcdj;$("manual_save_dlg_nametxt_row").style.display=zcdj;$("manual_save_dlg_input_row").style.display=zcdj;$("manualsaveDlg_radio_top_row").style.display=zcdj;$("manualsaveDlg_top_div").style.display=zahx?"none":"block";}
;zaxj.prototype.zccu=function(zcdk,zcdl,zft){try{var zcdm="/";zbfn="";var zcdn=$(zft);this.zcdo(zcdn,zcdm,false,"Home");for(var zbnr=0;zbnr<zcdk.length;++zbnr){var zcdp=zcdk[zbnr][zaed];var zcdq=zcdp.split(zcdm);var zcdr=zcdm;for(var zcds=1;zcds<zcdq.length;++zcds){var zalj=$(zbfo+zcdr);zcdr=zcdr+zcdm+zcdq[zcds];if(zcdr.startsWith("//")){zcdr=zcdr.substr(1);}
var zcdt=$(zbfo+zcdr);if(!zcdt){this.zcdo(zalj,zcdr,true,zcdq[zcds]);}
}}var zcdu=document.getElementsByTagName("li");if(zcdu!=null){var zalb=zcdu.length;for(var zgg=0;zgg<zalb;zgg++){var zcdv=zcdu[zgg];if(zcdv.children.length==1){if(zcdv.firstChild.firstChild.firstChild){zcdv.firstChild.firstChild.firstChild.innerHTML="";}
}if((zbfo+zcdm)==zcdv.getAttribute("id")){this.zcdh(zcdv);}
}}}catch(zhj){}};zaxj.prototype.zcdo=function(parentNode,zcdp,zcdw,zcdx){try{var self=this;if(zcdx&&zcdx.length>this.zbgm){zcdx=zcdx.substring(0,this.zbgm-3)+"...";}
var zcdy=document.createElement("ul");var zcdv=document.createElement("li");zcdy.setAttribute(zus,zcdp);zcdv.setAttribute(zus,zcdp);zcdv.setAttribute("id",zbfo+zcdp);if(zcdw==true){zcdv.setAttribute("class","cl");}
var zaoi=document.createElement(zazv);zaoi.setAttribute(zus,zcdp);var zbby=document.createElement("p");zbby.setAttribute(zus,zcdp);var zcdz=document.createElement("a");zcdz.setAttribute("href","#");zcdz.setAttribute("class","sc");zcdz.setAttribute("close_state",zcdw);zcdz.addEventListener("click",function(){self.zcea(zcdz);}
,false);var zceb=zcdw==true?zbfs:zbfr;zcdz.innerHTML="<img src='"+zceb+"' class='i' />";zbby.appendChild(zcdz);var zcec=document.createElement("a");zcec.setAttribute("href","#");zcec.setAttribute("class","nodetext");zcec.setAttribute(zus,zcdp);zcec.setAttribute("id",zbfp+zcdp);zcec.addEventListener("click",function(){self.zced(zcec);}
,false);var zcee=zcdw==true?zbft:zbft;zcec.innerHTML="<img src='"+zcee+"' class='i2' />"+zcdx;zbby.appendChild(zcec);zaoi.appendChild(zbby);zcdv.appendChild(zaoi);zcdy.appendChild(zcdv);parentNode.appendChild(zcdy);return zcdy;}
catch(zhj){}};zaxj.prototype.zcdh=function(zcdv){var zcef=zcdv['firstChild']['firstChild'];this.zced.call(this,zcef['firstChild']['nextSibling']);this.zceg(zcdv);}
;zaxj.prototype.zced=function(zfo){if(zbfn){var zceh=$(zbfn);zceh.style.fontWeight="normal";zceh.style.background="white";}
zfo.style.fontWeight="bold";zfo.style.background="#e3e3e3";zbfn=zfo.id;return false;}
;zaxj.prototype.zcei=function(){var zcdu=document.getElementsByTagName("li");if(zcdu!=null){var zalb=zcdu.length;for(var zgg=0;zgg<zalb;zgg++){var zcdv=zcdu[zgg];var zgk=zcdv.firstChild.firstChild.firstChild;if(!zgk){continue;}
if(zcdv.children.length==1){zgk.innerHTML="";continue;}
if(zgk.getAttribute('close_state')=='true'){zgk.innerHTML="<img src='"+zbfs+"' class='i' />";}
if(zgk.getAttribute('close_state')=='false'){zgk.innerHTML="<img src='"+zbfr+"' class='i' />";}
}}};zaxj.prototype.zcea=function(zfo){if(zfo.getAttribute("close_state")=="true"){zfo.innerHTML="<img src='"+zbfr+"' class='i' />";zfo.parentNode.parentNode.parentNode.className='';zfo.nextSibling.firstChild.setAttribute(zbvt,zbft);zfo.setAttribute("close_state","false");}
else{zfo.innerHTML="<img src='"+zbfs+"' class='i' />";zfo.parentNode.parentNode.parentNode.className='cl';zfo.nextSibling.firstChild.setAttribute(zbvt,zbft);zfo.setAttribute("close_state","true");}
return false;};zaxj.prototype.zceg=function(zfm){if(zfm.tagName&&zfm.tagName.toLowerCase()=="li"){zfm.className='';if(zfm.children.length>1){zfm.firstChild.firstChild.firstChild.innerHTML="<img src='"+zbfr+"' class='i' />";zfm.firstChild.firstChild.firstChild.setAttribute("close_state","false");}
}if(zfm.parentNode!=null){this.zceg(zfm.parentNode);}
};zaxj.prototype.zbks=function(zsd){try{var self=this;setTimeout(function(){var zse={}
;zse[zsf]=JSON.stringify(zsd);zse[zanu]=self.zbge["Edit"];var zsg=JSON.stringify(zse);zsh().zsi(zsg,function(zsj){self.zcao(zsj);}
);},0);}catch(zhj){}};zaxj.prototype.zcao=function(zsj){var self=this;setTimeout(function(){var zsk=JSON.parse(zsj);if(self.zbjj(zsk)){return;}
zbrn(false,zcai,[zcag,zboe],null);var zsm=zsk[zsn][zsf];var zazl=JSON.parse(zsm);var zcbx=zsk[zsp];var zpn={"item_info":zazl,"item_data":zcbx}
;if(zazl[zuo]==ztk["RfItemType_Login"]||zazl[zuo]==ztk["RfItemType_SearchCard"]||zazl[zuo]==ztk["RfItemType_Bookmark"]||zazl[zuo]==ztk["RfItemType_BlockingPasscard"]||zazl[zuo]==ztk["RfItemType_Safenote"]){self.zcej(zpn);}
else{self.zcek(zpn);}},0);};zaxj.prototype.zcej=function(zpn){var self=this;var zazl=zpn["item_info"];var zaex=zazl["type"];var zbjr=new zbcv(undefined,undefined,"header-item-title");zbjr["m_oContext"]={"image_data":zaee(zaex),"title":zaea(zazl)}
;var zbjs=self.zayi(zbjr);var zbhd=new zbcv("logineditor_div",undefined,"dialog");var zbhe=self.zayi(zbhd);var zbcj=[zbjs,zbhe];self.zayb.Navigate("Item Editor",zbcj,zpn,function(zpn){self.zbhf();self.zcel(zpn);}
);};zaxj.prototype.zcem=function(){var self=this;$(zcen).addEventListener("click",function(){self.zayb.zbcp();}
,false);$(zceo).addEventListener("click",function(){self.zcep();}
,false);};zaxj.prototype.zcel=function(zpn){this.zcem();var zazl=zpn["item_info"];var zcbx=zpn["item_data"];var zceq=zazl[zuo];$(zcer).value=zceq==ztk["RfItemType_Login"]||zceq==ztk["RfItemType_SearchCard"]||zceq==ztk["RfItemType_Bookmark"]?zcbx[RfapiJS.ITEM_GOTOURL_PROP]:(zceq==ztk["RfItemType_BlockingPasscard"]?zcbx[RfapiJS.ITEM_MATCHURL_PROP]:"");$(zces).style.display=(zceq==ztk["RfItemType_Login"]||zceq==ztk["RfItemType_BlockingPasscard"]||zceq==ztk["RfItemType_SearchCard"]||zceq==ztk["RfItemType_Bookmark"])?"block":"none";$("logineditor_fields_fieldset").style.display=$(zcet).style.display=zceq==ztk["RfItemType_Login"]||zceq==ztk["RfItemType_BlockingPasscard"]||zceq==ztk["RfItemType_SearchCard"]?"block":"none";$(zceu).style.display="block";switch(zceq){case ztk["RfItemType_Safenote"]:$(zcev).style.height=$(zcev).style.minHeight=$(zcev).style.maxHeight="350px";break;case ztk["RfItemType_BlockingPasscard"]:case ztk["RfItemType_SearchCard"]:case ztk["RfItemType_Login"]:$(zcev).style.height=$(zcev).style.minHeight=$(zcev).style.maxHeight="50px";break;case ztk["RfItemType_Bookmark"]:$(zcev).style.height=$(zcev).style.minHeight=$(zcev).style.maxHeight="175px";break;}
$(zcev).value=!zcbx[RfapiJS.ITEM_NOTE_PROP]?"":zcbx[RfapiJS.ITEM_NOTE_PROP];$("logineditor_fields_legend").style.background="url('/fields.png') no-repeat 0px 1px";var self=this;var zcew=0;if(zceq==ztk["RfItemType_Login"]||zceq==ztk["RfItemType_BlockingPasscard"]||zceq==ztk["RfItemType_SearchCard"]){var zcex=$(zcey);while(zcex.rows.length){zcex.deleteRow(0);}
var zux=zcbx[RfapiJS.ITEMDATA_FIELDS_PROP];if(!zux){}
else{zcew=zux.length;}zcex.setAttribute(zcez,(zcew-1)+'');for(var zbnr=0;zbnr<zcew;++zbnr){this.zcfa(zcex,zcbx[RfapiJS.ITEMDATA_FIELDS_PROP][zbnr],zbnr);}
var zcfb=document.getElementsByTagName(zbvr);for(var zcw=0;zcw<zcfb.length;zcw++){(function(){var zcfc=zcfb[zcw];var zcfd=zcfc.getAttribute("class");if(zcfd&&zcfd=="show_pwd_img"){zcfc.addEventListener("click",function(){self.zcfe(zcfc);}
,false);}})();}}};zaxj.prototype.zcfa=function(zcff,zuy,zep){var zcfg="black";var zcfh=false;for(var zcw=0;zcw<zbfk.length;++zcw){if(zuy[zben].toString().toLowerCase().indexOf(zbfk[zcw])!=-1){zcfg="grey";zcfh=true;}
}if(zuy[zben].toString().toLowerCase()==zbfj){return;}
this.zcfi(zcff,zuy,zep,zcfg,zcfh);};zaxj.prototype.zcfi=function(zcfj,zcfk,zep,zcfl,zcfm){try{var zcfn=false;var zcfo=typeof(zcfk[zben])=="undefined"?"":zcfk[zben];var zcfp=typeof(zcfk[zbep])=="undefined"?"":zcfk[zbep];var zcfq=typeof(zcfk[zbeo])=="undefined"?"":zcfk[zbeo];var zcfr=typeof(zcfk[zbes])=="undefined"?0:zcfk[zbes];var zcfs=typeof(zcfk[zbet])=="undefined"?"":zcfk[zbet];var zcft=typeof(zcfk[zber])=="undefined"?false:zcfk[zber];var zcfu=typeof(zcfk[zbeq])=="undefined"?1:zcfk[zbeq];var zcfv=document.createElement(zbwo);zcfv.setAttribute(zcfw,zcfo);zcfv.setAttribute(zcfx,zcfq);zcfv.setAttribute(zcfy,zcfs);zcfv.setAttribute(zcfz,zcfu.toString());zcfv.setAttribute(zcga,zep);zcfv.setAttribute(zcgb,zcfr.toString());zcfv.setAttribute(zcgc,zcft.toString());var zcgd=document.createElement(zbwt);zcgd.className="rf_passcard_table_td_capton";zcgd.setAttribute("width","100px");var zcge=zcfo;zcge+=zcfr==0?"":"["+zcfr+"]";var zcgf=parseInt(zcfu);switch(zcgf){case 0:zcge+="";break;case 1:zcge+=":txt";break;case 2:zcge+=":pwd";zcfn=true;break;case 3:zcge+=":chk";break;case 4:zcge+=":rch";break;case 5:zcge+=":rad";break;case 6:zcge+=":are";break;case 7:zcge+=":sel";break;default:zcge+=":unk";break;}
var zcgg=document.createElement(zazv);zcgg.className="rf_passfields_table_td_caption_div";zcgg.innerText=zcge;zcgd.appendChild(zcgg);if(zcgf==RfFieldType.RfFieldTextArea){zcgd.style.verticalAlign="top";}
zcgd.style.color=zcfl;zcgd.title=zcge;zcfv.appendChild(zcgd);var zcgh=document.createElement(zbwt);zcgh.setAttribute("align","left");zcgh.className="rf_passfields_table_td_value";if(zcgf!=RfFieldType.RfFieldTextArea){var zbai=document.createElement("input");if(zcfm){zbai.setAttribute("readonly",true);}
zbai.className=zbfl;zbai.setAttribute(zcfw,zcfo);zbai.setAttribute(zcga,zep);zbai.setAttribute(zuo,"text");if(zcfn){zbai.setAttribute(zuo,"password");}
zbai.setAttribute("value",zcfp);zbai.style.color=zcfl;zcgh.appendChild(zbai);}
else{var zcgi=document.createElement("textarea");if(zcfm){zcgi.setAttribute("readonly",zcfm);}
zcgi.setAttribute(zcfw,zcfo);zcgi.setAttribute(zcga,zep);zcgi.className=zbfm;zcgi.style.color=zcfl;zcgi.value=zcfp;zcgi.innerText=zcfp;zcgh.appendChild(zcgi);}
zcfv.appendChild(zcgh);var zcgj=document.createElement(zbwt);zcgj.setAttribute("width","18px");zcgj.setAttribute("align","right");zcgj.className="rf_passfields_table_td_pwdshow";if(zcfn&&!zoj().zrr.zrv(zadd)){var zcgk=document.createElement(zazv);zcgk.className="rf_passfields_table_td_pwd_div";zcgk.innerHTML="<img id='rf_passfields_table_td_pwd_img"+zep+"' style='cursor: pointer;' show_symbols_as='"+zcgl+"' class='show_pwd_img' width='16' height='16'  src='"+zbfq+"' title='Show password values as stars or text' />";zcgj.appendChild(zcgk);}
zcfv.appendChild(zcgj);zcfj.appendChild(zcfv);return zcfv;}
catch(zhj){}};zaxj.prototype.zcfe=function(zfo){var zcgm=zfo.getAttribute('show_symbols_as');var zcgn=zfo.parentNode.parentNode;var zcgo=zcgn.previousSibling;var zcgp=zcgo.firstChild;var zahw=zcgp.value;zcgo.removeChild(zcgp);var zcgq="text";if(zcgm==zcgr){zcgq="password";zfo.setAttribute('show_symbols_as',zcgl);}
else{zfo.setAttribute('show_symbols_as',zcgr);}var zbai=document.createElement("input");zbai.className=zbfl;zbai.setAttribute(zuo,zcgq);zbai.setAttribute("value",zahw);zbai.style.color="black";zcgo.appendChild(zbai);}
;zaxj.prototype.zcep=function(){var zpn=this.zayb.zbcq();var zazl=zpn["item_info"];var zcbx=zpn["item_data"];if(zcbx[RfapiJS.ITEMDATA_FIELDS_PROP]){var zadx=[];for(var zck in zcbx[RfapiJS.ITEMDATA_FIELDS_PROP]){zadx.push(zcbx[RfapiJS.ITEMDATA_FIELDS_PROP][zck]);}
zcbx[RfapiJS.ITEMDATA_FIELDS_PROP]=zadx;}if(zazl[zuo]==ztk["RfItemType_BlockingPasscard"]||zazl[zuo]==ztk["RfItemType_Login"]||zazl[zuo]==ztk["RfItemType_SearchCard"]){var zcfj=$(zcey);if(zcfj&&zcfj.rows.length){var zcgs=zcfj.getAttribute(zcez);var zcgt=zcfj.rows.length;var zcgu=zcbx[RfapiJS.ITEMDATA_FIELDS_PROP].length;if(zcgt!=zcgu||zcgs!=zcgu-1){}
else{for(var zcw=0;zcw<zcgt;zcw++){var zcfv=zcfj.rows[zcw];var zcgv=zcfv.getAttribute(zcfw);var zcgw=zcfv.getAttribute(zcgb);var zcgx=zcfv.firstChild.nextSibling.firstChild;var zcgy=zcgx.tagName.toLowerCase()=="input"?zcgx.value:zcgx.innerText;for(var zcgz=0;zcgz<zcgu;zcgz++){var zuy=zcbx[RfapiJS.ITEMDATA_FIELDS_PROP][zcgz];if(zuy[zben].toLowerCase()==zcgv.toLowerCase()){var zcha=typeof zuy[zbes]=="undefined"?"0":zuy[zbes];if(zcha==zcgw){zcbx[RfapiJS.ITEMDATA_FIELDS_PROP][zcgz][zbep]=zcgy;break;}
}}}}}}zcbx[RfapiJS.ITEM_NOTE_PROP]=$(zcev).value;switch(zazl[zuo]){case ztk["RfItemType_Bookmark"]:zcbx[RfapiJS.ITEM_GOTOURL_PROP]=$(zcer).value;break;case ztk["RfItemType_BlockingPasscard"]:zcbx[RfapiJS.ITEM_MATCHURL_PROP]=$(zcer).value;break;case ztk["RfItemType_Login"]:zcbx[RfapiJS.ITEM_GOTOURL_PROP]=$(zcer).value;zcbx[RfapiJS.ITEM_MATCHURL_PROP]=$(zcer).value;break;case ztk["RfItemType_SearchCard"]:zcbx[RfapiJS.ITEM_GOTOURL_PROP]=$(zcer).value;break;}
zbrn(true,zchb,[zceo,zcen],zceu);var zyk={};zyk[zun]=zcbx;zyk[zuo]=zazl[zuo];zyk[zus]=zazl[zus];var self=this;setTimeout(function(){var zsg=JSON.stringify(zyk);zsh().zcac(zsg,function(zsj){self.zchc(zsj);}
);},100);};zaxj.prototype.zchc=function(zsj){var zsk=JSON.parse(zsj);if(this.zbjj(zsk)){return;}
var self=this;setTimeout(function(){zbrn(false,zchb,[zceo,zcen],zceu);self.zayb.zbcp();}
,100);};zaxj.prototype.zcek=function(zpn){var self=this;var zazl=zpn["item_info"];var zaex=zazl["type"];var zbjr=new zbcv(undefined,undefined,"header-item-title");zbjr["m_oContext"]={"image_data":zaee(zaex),"title":zaea(zazl)}
;var zbjs=self.zayi(zbjr);var zbhd=new zbcv("rfIdentitysection_div",undefined,"dialog");var zbhe=self.zayi(zbhd);var zbcj=[zbjs,zbhe];self.zayb.Navigate("Identity Editor",zbcj,zpn,function(zpn){self.zbhf();self.zchd(zpn);}
);};zaxj.prototype.zche=function(){var self=this;$(zchf).addEventListener("click",function(){self.zayb.zbcp();}
,false);$(zchg).addEventListener("click",function(){self.zchh();}
,false);};zaxj.prototype.zchi=function(){var self=this;var zcw;for(zcw=0;zcw<this.zbgy.length;zcw++){(function(){var zchj=self.zbgy[zcw].toLowerCase();zchj=zchj.split(' ').join('_');var zchk="tab"+zchj;var zchl=$(zchk);zchl.addEventListener("click",function(){self.zchm("tab"+zchj);}
,false);zchl.addEventListener("mouseover",function(){if(zchl.getAttribute("id")==self.zbgx){return;}
zchl.style.backgroundColor="#eee";},false);zchl.addEventListener("mouseout",function(){if(zchl.getAttribute("id")==self.zbgx){return;}
zchl.style.backgroundColor="#DCDFE6";},false);})();}
var zchn=$(zcho);var zchp=zchn.getElementsByTagName("select");for(zcw=0;zcw<zchp.length;zcw++){var zchq=zchp[zcw];zchq.selectedIndex=zchq.getAttribute("setSelectedIndex");}
var zchr=zchn.getElementsByTagName("textarea");for(var zgg=0;zgg<zchr.length;zgg++){var zchs=zchr[zgg];zchs.value=zchs.getAttribute("value");}
};zaxj.prototype.zchd=function(zpn){this.zche();var zazl=zpn["item_info"];var zcbx=zpn["item_data"];var zwt=this.zcht(zcbx,zazl);this.zchu(zwt);this.zchi();var self=this;setTimeout(function(){self.zchm('tabperson');}
,100);};zaxj.prototype.zchu=function(zchv){this.zbgx="";this.zbgy.length=0;var zchw=zchv.zchx();var zchy=zchw.zchz;for(var zcia=0;zcia<zchy.length;zcia++){this.zbgy.push(zchy[zcia].m_sName);}
if(typeof(zchw.zcib)!="undefined"&&zchw.zcib){this.zbgy.push("Custom");}
var zcic=$(zcid);while(zcic.childNodes.length){zcic.removeChild(zcic.childNodes[0]);}
for(var zcw=0;zcw<this.zbgy.length;zcw++){var zcie=this.zcif(this.zbgy[zcw]);zcic.appendChild(zcie);if(this.zbgy.length>9){zcie.style.width="12px";}
}var zcig=this.createElement(zazv,{});zcig.style.clear="both";zcic.appendChild(zcig);var zcih=$("ff_content");while(zcih.childNodes.length){zcih.removeChild(zcih.childNodes[0]);}
for(var zgg=0;zgg<this.zbgy.length;zgg++){var zchj=this.zbgy[zgg].toLowerCase();zchj=zchj.split(' ').join('_');var zcii=this.createElement(zazv,{"id":"pane"+zchj,"class":"rf_pane","groupname":zchj}
);zcih.appendChild(zcii);}for(var zbnr=0;zbnr<zchy.length;++zbnr){var zxp=zchy[zbnr];var zcij=zxp.m_sName;var zxc=zchw.zcik(zcij);for(var zxq=0;zxq<zxc.length;zxq++){this.zcil(zxp,zxc[zxq],zchw,zxc.length);}
}if(typeof(zchw.zcib)!="undefined"&&zchw.zcib){this.zcil(zchw.zcib,"Main",zchw,1);}
};zaxj.prototype.zcif=function(zcim){var zcin=zcim;zcim=zcim.toLowerCase();zcim=zcim.split(' ').join('_');var zfx=zcim!="custom"?"group_"+zcim+"16.png":"group_custom16.png";var zcie=this.createElement(zazv,{"id":"tab"+zcim,"class":"rf_tab","title":zcin,"groupname":zcim}
);zcie.innerHTML="<img class='identitytab_img' src='"+zfx+"'>";return zcie;}
;zaxj.prototype.zcil=function(zxp,zcio,zchw,zcip){try{var zcij=zxp.m_sName;var zciq=null;var zcir=this.createElement("fieldset",{"class":"rf_identity_groupfieldset"}
);var zcis=this.createElement("legend",{"class":"rf_identity_grouplegend"}
);var zcit=zcip>1?" - "+zcio:"";zcis.innerText=zxp.m_sName+zcit;var zciu=zcij.toLowerCase();var zciv=zcij.replace(" ","_");zciu=zciu.replace(" ","_");zcis.innerText=zciv+zcit;zcis.style.background="url('"+zbfi+"') no-repeat";zciq=$("pane"+zciu);zcir.appendChild(zcis);var zciw=this.createElement("fieldset",{"class":"rf_identity_table_innerset"}
);zcir.appendChild(zciw);var zcix=document.createElement("legend");zciw.appendChild(zcix);var zcfj=this.createElement(zciy,{"class":"rf_identity_table","cellpadding":0,"cellspacing":"2","border":0
}
);if(zcij=="Custom"){zcfj.id=zciz;}var zcja=null;var zcjb="";var zcjc=null;for(var zbnr=0;zbnr<zxp.m_lFields.length;++zbnr){var zcfo=zxp.m_lFields[zbnr];var zuy=zchw.zcjd(zcfo);if(!zuy){continue;}
var zcje=zuy.zcjf;var zcjg=false;if(zcij=="Location"&&zcfo=="Country"){zcjg=true;}
else if(zcje.zcjh()){continue;}var zcji=zcje.m_sCaption;if(zcij=="Location"&&zcfo=="Country"){zcji="Country";}
if(zcji.length&&zcji=="$Note$"){zcjb=zuy.zawl(zchw,zcio);zcjc=document.createElement("textarea");zcjc.setAttribute("multiline","true");zcjc.setAttribute("class","identity_field_notearea");zcjc.setAttribute("value",zcjb);zcjc.value=zcjb;zcjc.setAttribute(zbfg,"false");zcjc.setAttribute(zbfc,zcfo);zcjc.setAttribute(zbfd,zcjb);zcjc.setAttribute(zbfh,zuy.zcjj);zcjc.setAttribute(zbfe,zcij);zcjc.setAttribute(zbff,zcio);continue;}
var zcjk=false;if(zcji.length&&zcji[0]=='_'){zcjk=true;zcji=zcji.substr(1);}
else{zcja=null;}var zcjl=false;if(zcji.length&&zcji[0]==':'){zcjl=true;zcji=zcji.substr(1);}
var zcjm=0;if(zcji.length&&zcji.match(new RegExp("^(.*)\\@(\\d+)(.*)$"))){zcjm=parseInt(RegExp.$2);zcji=RegExp.$1+RegExp.$3;}
var zcjn="";if(zcji.length&&zcji.match(new RegExp("^\\s*(.*)\\^(.*)$"))){zcjn=RegExp.$2;zcji=RegExp.$1||RegExp.$2;}
if(zcji.length&&zcji.indexOf("#")==0){zcji=zcji.substr(1);}
var zcjo=zuy.zawl(zchw,zcio);if(zcjk){if(zcja){var zcjp=zcja.rows[0];if(zcij.toLowerCase()=='credit card'){zcja.style.width="25%";}
else{if(zcfo=="Age"||zcfo=="Birth Year"){zcja.style.width="20%";}
else if(zcfo=="Middle Initial"||zcfo=="Last Name"||zcfo=="Name Suffix"){zcja.style.width="97%";}
else{zcja.style.width="80%";}}var zcjq=zcja.rows[1];var zcjr=false;if(zcji&&zcjn&&zcji!=zcjn){zcjr=true;}
if(zcjn){if(zcjq){var zcjs=document.createElement(zbwt);if(zcjr){var zcjt=document.createElement(zbwt);zcjq.appendChild(zcjt);}
zcjs.className="rf_identity_lower_row_td";zcjs.style.paddingLeft="3px";zcjs.innerText=zcjn;zcjq.appendChild(zcjs);zcja.style.marginBottom="3px";}
}if(zcji&&zcji!=zcjn){var zcju=document.createElement(zbwt);zcju.className="rf_identity_table_td_capton_next";var zcjv=document.createElement(zazv);zcjv.className="rf_identity_table_td_div_capton_next";if(zcjn&&zcji=="/"){zcjv.style.marginLeft="1px";zcjv.style.width="5px";}
zcjv.innerText=zcji||zuy.zcjw;zcjv.setAttribute("title",zcji||zuy.zcjw);zcju.appendChild(zcjv);zcjp.appendChild(zcju);}
var zcjx=document.createElement(zbwt);zcjx.style.paddingLeft="3px";if(zcje&&zcje.zcjy==1){var zcjz=this.zcka("select","rf_identity_table_select",zcij,zcfo,zcjo,zcio,zuy);zcjx.appendChild(zcjz);this.zckb(zcjz,zcjo);}
else{var zbai=this.zcka("input","rf_identity_table_input",zcij,zcfo,zcjo,zcio,zuy);if(zcje.zckc>0){var zckd=zcje.zckc*zbfb+2;zcjx.style.width=zckd+"px";}
zcjx.appendChild(zbai);}zcjp.appendChild(zcjx);}else{throw"There is No Prev TABLE!"
}
}else{var zcfv=this.createElement(zbwo,{});zcfj.appendChild(zcfv);var zcgd=this.createElement(zbwt,{"class":"rf_identity_table_td_capton"}
);var zcgg=this.createElement(zazv,{"class":"rf_identity_table_td_div_capton"}
);if(zcij=="Location"&&zcfo=="Country"){zcgg.style.color="Grey";}
zcgg.innerText=zcji||zuy.zcjw;zcgg.setAttribute("title",zcji||zuy.zcjw);zcgd.appendChild(zcgg);zcfv.appendChild(zcgd);var zcke=this.createElement(zbwo,{}
);var zckf=this.createElement(zbwt,{"class":"rf_identity_table_td_value"}
);var zckg=this.createElement(zciy,{"class":"rf_identity_td_value_innerTable","cellpadding":0,"cellspacing":0
}
);zckf.appendChild(zckg);zcja=zckg;var zckh=this.createElement(zbwo,{"class":"rf_identity_upper_row"}
);zckg.appendChild(zckh);if(zcjn){var zcki=this.createElement(zbwo,{"class":"rf_identity_lower_row"}
);zckg.appendChild(zcki);var zckj=this.createElement(zbwt,{"class":"rf_identity_lower_row_td"}
);zckj.innerText=zcjn;zcki.appendChild(zckj);}var zckk=document.createElement(zbwt);if(zcje&&zcje.zcjy==1){if(zcij=="Location"&&zcfo=="Country"){var zbai=this.zcka("input","rf_identity_table_input",zcij,zcfo,zcjo,zcio,zuy);zckk.appendChild(zbai);}
else{var zcjz=this.zcka("select","rf_identity_table_select",zcij,zcfo,zcjo,zcio,zuy);zckk.appendChild(zcjz);this.zckb(zcjz,zcjo);}
}else{var zbai=this.zcka("input","rf_identity_table_input",zcij,zcfo,zcjo,zcio,zuy);if(zcje.zckc>0){var zckd=zcje.zckc*zbfb+10;zckk.style.width=zckd+"px";}
zckk.appendChild(zbai);}zckh.appendChild(zckk);zcke.appendChild(zckf);zcfj.appendChild(zcke);}
}if(zcjc){var zbqr=document.createElement(zbwo);var zcgd=document.createElement(zbwt);zcgd.className="rf_identity_table_td_capton";var zcgg=document.createElement(zazv);zcgg.className="rf_identity_table_td_div_capton";zcgg.innerText=zaof("editor_note_lbl");zcgg.setAttribute("title",zaof("editor_note_lbl"));zcgd.appendChild(zcgg);zbqr.appendChild(zcgd);var zckl=document.createElement(zbwo);var zckm=document.createElement(zbwt);zckm.className="rf_identity_table_td_value";zckm.appendChild(zcjc);zckl.appendChild(zckm);zcfj.appendChild(zbqr);zcfj.appendChild(zckl);}
if(zcij=="Custom"){var zckn=zchw.zcko();var zckp=document.createElement(zbwo);zckp.id="identity_customfieldsRow_labels";var zckq=document.createElement(zbwt);zckq.innerText=zaof("custom_field_name");zckp.appendChild(zckq);zckq=document.createElement(zbwt);zckq.innerText=zaof("custom_field_value");zckp.appendChild(zckq);zckq=document.createElement(zbwt);zckq.innerText=zaof("custom_field_matches");zckp.appendChild(zckq);zcfj.appendChild(zckp);var zckr=zckn<zbfa?zbfa:zckn+1;for(var zcks=0;zcks<zckr;zcks++){var zckt=zcks<zckn?zchw.zcku(zcks):null;this.zckv(zckt,zcfj,zchw);}
}zciw.appendChild(zcfj);if(zciq){zciq.appendChild(zcir);}
}catch(zhj){}};zaxj.prototype.zckb=function(zfo,zcjo){var zckw=-1;for(var zcw=0;zcw<zfo.options.length;zcw++){var zckx=zfo.options[zcw];if(zckx.value==zcjo){zckw=zcw;break;}
}zfo.selectedIndex=zckw;zfo.setAttribute("setSelectedIndex",zckw+'');}
;zaxj.prototype.zcky=function(){var zckz=$(zciz);var children=zckz.rows;if(children.length>zbez){return;}
var zcla=$("#"+zcho).data("rfObject");this.zckv(null,zckz,zcla.zclb);}
;zaxj.prototype.zckv=function(zuy,zclc,zchw){var zcld=this.createElement(zbwo,{"class":"custom_field_row"}
);var zcle=this.createElement(zbwt,{});var zclf=!zuy?"":zuy.zcjw;var zclg=this.createElement("input",{"value":zclf,"class":"custom_field_singletextbox","isCustom":"true"
}
);zclg.value=zclf;zcle.appendChild(zclg);zcld.appendChild(zcle);zcle=this.createElement(zbwt,{}
);var zcjo=!zuy?"":zuy.zawl(zchw,"Main");var zclh=this.createElement("input",{"value":zclf,"class":"custom_field_singletextbox","isCustom":"true"
}
);zclh.value=zcjo;zcle.appendChild(zclh);zcld.appendChild(zcle);var zcli=!zuy?"":zuy.zclj().zclk();zcli=zcli.split("; ").join("\n");zcle=this.createElement(zbwt,{"colspan":"1"}
);var zcll=this.createElement("textarea",{"multiline":"true","class":"custom_field_multitextbox","isCustom":"true","flex":"1","value":zcli}
);zcle.appendChild(zcll);zcld.appendChild(zcle);zclc.appendChild(zcld);}
;zaxj.prototype.zcka=function(zclm,zcln,zcij,zcfo,zcjo,zclo,zuy){var zcje=zuy.zcjf;var zfo=document.createElement(zclm);if(zclm=="input"||zclm=="select"){zfo.setAttribute(zbfc,zcfo);zfo.setAttribute(zbfd,zcjo);zfo.setAttribute(zbfh,zuy.zcjj);zfo.setAttribute(zbfe,zcij);zfo.setAttribute(zbff,zclo);zfo.setAttribute(zbfg,"false");zfo.className=zcln;if(zcij=="Location"&&zcfo=="Country"){zfo.setAttribute("readonly",true);zfo.style.color="Grey";}
if(zclm=="input"){zfo.setAttribute("value",zcjo);if(zcje.zckc>0){var zckd=zcje.zckc*zbfb;zfo.style.width=zckd+"px";zfo.style.minWidth=zckd+"px";zfo.setAttribute("maxlength",zcje.zckc);}
}else{var zclp=document.createElement("option");zclp.setAttribute("label","");zclp.setAttribute("value","");zclp.setAttribute("class","identity_field_select_option");zfo.add(zclp,null);for(var zcw=0;zcw<zcje.zclq.length;zcw++){var zbpd=document.createElement("option");var zahw=zcje.zclq[zcw].zclr;zahw=zahw=="{UserDefined}"?"(Unlisted)":zahw;zahw=zahw=="{UserDefinedShort}"?"(Unl)":zahw;zbpd.setAttribute("label",zahw);zbpd.setAttribute("value",zahw);zbpd.setAttribute("class","identity_field_select_option");zfo.add(zbpd,null);}
}}return zfo;};zaxj.prototype.zchm=function(zft){var zcls=$(zft.replace(new RegExp("pane"),"tab"));var zaap,zgk;var zcic=$(zcid);for(zaap=0;zaap<zcic.childNodes.length;zaap++){zgk=zcic.childNodes[zaap];if(zgk.getAttribute("class")){this.zclt(zgk,{"background":"#DCDFE6","border":"1px solid #aaa","border-bottom":"1px solid grey"
}
);}}this.zclt(zcls,{"background":"#fff","border":"1px solid grey","border-bottom":"1px solid white"
}
);var zclu=$("ff_content");for(zaap=0;zaap<zclu.childNodes.length;zaap++){zgk=zclu.childNodes[zaap];this.zclt(zgk,{"display":"none"}
);}var zxs=zcls.getAttribute("groupname");var zclv="pane"+zxs;var zaas=$(zclv);zaas.style.display="block";this.zbgx=zft;return false;}
;zaxj.prototype.zclt=function(zagj,zclw){if(!zclw){return zagj;}
zafv(zclw,function(value,name){zagj.style[name]=value;}
);return zagj;};zaxj.prototype.zcht=function(zso,zsd){var zxk=zso[zbeu];var zclx=zsd[zuo]==ztk["RfItemType_Contact"];var zcly=new RfapiJS.CIdentity(zxk);var zclz,zcma,zck,zuy,zclf,zcjo;var zxn=zso[zbev];for(var zcw=0;zcw<zxn.length;++zcw){var zxp=zxn[zcw];var zcmb=zxp[zben];var zcmc=zxp[zbew];if(zcmb==zbey){zclz=zcmc[0];zcma=zclz[zbex];for(zck=0;zck<zcma.length;zck++){zuy=zcma[zck];zclf=zuy[zben];zcjo=zuy[zbep];var zcli=zuy[zbeu];var zcmd=zcli.indexOf(";")!=-1;zcly.zcme(zclf,zcli,zcjo,zcmd);}
}else{for(var zxq=0;zxq<zcmc.length;zxq++){zclz=zcmc[zxq];var zbww=zclz[zben];zcma=zclz[zbex];if(!zcma.length){zcly.zcmf(zcmb,zbww);}
for(zck=0;zck<zcma.length;zck++){zuy=zcma[zck];zclf=zuy[zben];zcjo=zuy[zbep];zcly.zcmg(zclf,zcjo,zbww,zcmb);}
}}}return zcly;};zaxj.prototype.zchh=function(){var zpn=this.zayb.zbcq();var zazl=zpn["item_info"];var zcbx=zpn["item_data"];zadq(zcbx);var zcmh=$("page_content_div");var zchp=zcmh.getElementsByTagName("select");var zcw;for(zcw=0;zcw<zchp.length;zcw++){this.zcmi(zchp[zcw],zcbx);}
var zcmj=zcmh.getElementsByTagName("input");for(zcw=0;zcw<zcmj.length;zcw++){this.zcmi(zcmj[zcw],zcbx);}
var zchr=zcmh.getElementsByTagName("textarea");for(zcw=0;zcw<zchr.length;zcw++){this.zcmi(zchr[zcw],zcbx);}
var zxp,zcmk;if(zazl[zuo]==ztk["RfItemType_Identity"]){var zcml;var zcmm=false;for(zcw=0;zcw<zcbx[zbev].length;zcw++){zxp=zcbx[zbev][zcw];zcmk=zxp[zben];if(zcmk!=zbey){continue;}
zcmm=true;zxp[zbew][0][zbex]=[];zcml=zcw;break;}if(!zcmm){var zcmn={}
;zcmn[zben]=zbey;zcmn[zbew]=[];var zcmo={};zcmo[zbex]=[];zcmn[zbew].push(zcmo);zcbx[zbev].push(zcmn);}
zcml=-1;for(zcw=0;zcw<zcbx[zbev].length;zcw++){zxp=zcbx[zbev][zcw];zcmk=zxp[zben];if(zcmk!=zbey){continue;}
zcml=zcw;break;}var zckz=$(zciz);if(zckz){var children=zckz.rows;for(zcw=0;zcw<children.length;zcw++){var zgk=children[zcw];if(zgk.getAttribute("id")&&zgk.getAttribute("id")=="identity_customfieldsRow_labels"){continue;}
var zcmp=zgk.children;var zcfo=zcmp[0].firstChild.value;var zcfp=zcmp[1].firstChild.value;var zcmq=zcmp[2].firstChild.value;zcmq=zcmq.split(String.fromCharCode(10)).join("; ");var zckt={}
;zckt[zben]=zcfo;zckt[zbep]=zcfp;zckt[zbeu]=zcmq;if(zcfo!=""&&zcfp!=""){zcbx[zbev][zcml][zbew][0][zbex].push(zckt);}
}}}zbrn(true,zcmr,[zchg,zchf],null);var zyk={};zyk[zun]=zcbx;zyk[zuo]=zazl[zuo];zyk[zus]=zazl[zus];var self=this;setTimeout(function(){var zsg=JSON.stringify(zyk);zsh().zcac(zsg,function(zsj){self.zcms(zsj);}
);},100);};zaxj.prototype.zcmi=function(zcmt,zcbx){var zcmu=zcmt.getAttribute(zbfg);if(zcmu=="true"){return false;}
var zcmv;zcmv=zcmt.getAttribute(zbfc);if(!zcmv){return false;}
var zcjo=zcmt.value;var zcmw=zcmt.getAttribute(zbfd);if(zcmw==zcjo){return false;}
zcmv=zcmt.getAttribute(zbfc);var zcmx=zcmt.getAttribute(zbff);var zcmy=zcmt.getAttribute(zbfe);var zxn=zcbx[zbev];var zcmz=false;var zcna=-1;var zcnb=-1;var zbxf;for(var zcw=0;zcw<zxn.length;zcw++){var zxp=zxn[zcw];var zcmk=zxp[zben];if(zcmy!=zcmk){continue;}
zcna=zcw;var zxc=zxp[zbew];for(var zgg=0;zgg<zxc.length;zgg++){zbxf=zxc[zgg];var zcnc=zbxf[zben];if(zcmx!=zcnc){continue;}
zcnb=zgg;var zux=zbxf[zbex];for(var zck=0;zck<zux.length;zck++){var zcnd=zux[zck];var zcne=zcnd[zben];if(zcmv!=zcne){continue;}
zcmz=true;zcnd[zbep]=zcjo;break;}}}var zcnf;if(!zcmz){if(zcna!=-1){zcnf={}
;zcnf[zben]=zcmv;zcnf[zbep]=zcjo;zcbx[zbev][zcna][zbew][zcnb][zbex].push(zcnf);}
else{var zcmn={};zcmn[zben]=zcmy;zcmn[zbew]=[];zbxf={}
;zbxf[zben]="Main";zbxf[zber]=true;zbxf[zbex]=[];zcnf={}
;zcnf[zben]=zcmv;zcnf[zbep]=zcjo;zbxf[zbex].push(zcnf);zcmn[zbew].push(zbxf);zcbx[zbev].push(zcmn);}
}return true;};zaxj.prototype.zcms=function(zsj){var zsk=JSON.parse(zsj);if(this.zbjj(zsk)){return;}
var self=this;setTimeout(function(){zbrn(false,zcmr,[zchg,zchf],null);self.zayb.zbcp();}
,100);};zaxj.prototype.zbla=function(){var self=this;var zbjr=new zbcv(undefined,undefined,"header-simple-title");zbjr["m_oContext"]={"title":zaof("generator_header")}
;var zbjs=self.zayi(zbjr);var zbhd=new zbcv("rfpassword_generator_div",undefined,"dialog");var zbhe=self.zayi(zbhd);var zbcj=[zbjs,zbhe];self.zayb.Navigate("Password Generator",zbcj,undefined,function(zpn){self.zbhf();self.zcng(zpn);}
);};zaxj.prototype.zcnh=function(){if($(zavd)){$(zavd).addEventListener("click",function(){zasy();zatj(true);}
,false);}if($(zbob)){$(zbob).addEventListener("click",function(){zasy();zasu();}
,false);}if($(zboc)){$(zboc).addEventListener("click",function(){zasy();zasq();}
,false);}if($(zatc)){$(zatc).addEventListener("blur",zauj,false);$(zatc).addEventListener("keypress",zaui,false);}
if($(zasz)){$(zasz).addEventListener("click",zava,false);}
if($(zata)){$(zata).addEventListener("click",zava,false);}
if($(zatb)){$(zatb).addEventListener("click",zava,false);}
if($(zate)){$(zate).addEventListener("click",zave,false);}
if($(zatf)){$(zatf).addEventListener("keypress",zaul,false);$(zatf).addEventListener("paste",zaut,false);}
if($(zatd)){$(zatd).addEventListener("blur",zauj,false);$(zatd).addEventListener("keypress",zaui,false);}
if($(zati)){$(zati).addEventListener("click",zauh,false);}
$(zass).addEventListener("change",function(event){zaue(event);}
,false);};zaxj.prototype.zcng=function(){try{this.zcnh();if(zac){$("rf_passgen_clipchk_td").style.display="none";}
$(zatl).innerHTML="";var zcni=zde("sa-generator","rf_pwd_generate_special_chars");zcni=!zcni?"!@#$%^&":zcni;$(zatc).value=parseInt(zde("sa-generator","rf_pwd_generate_number_symbols"));$(zatd).value=parseInt(zde("sa-generator","rf_pwd_generate_number_digits"));$(zasz).checked=parseInt(zde("sa-generator","rf_pwd_generate_upper_chk"));$(zata).checked=parseInt(zde("sa-generator","rf_pwd_generate_lower_chk"));$(zatb).checked=parseInt(zde("sa-generator","rf_pwd_generate_digits_chk"));$(zate).checked=parseInt(zde("sa-generator","rf_pwd_generate_specialsymb_chk"));$(zath).checked=parseInt(zde("sa-generator","rf_pwd_generate_excludesimilar_chk"));$(zati).checked=parseInt(zde("sa-generator","rf_pwd_generate_onlyhexvalues_chk"));$(zatf).value=zcni;zave();if(!zac){$(zatg).checked=zde("sa-generator","rf_pwd_generate_copycliboardp_chk");}
else{$(zbob).style.visibility="hidden";}$(zavd).removeAttribute("disabled");if(!$(zatb).checked){$(zatd).setAttribute("disabled",'true');$(zavc).style.color="gray";}
else{$(zatd).removeAttribute("disabled");$(zavc).style.color="black";}
zatj(false);}catch(zhj){}};function zbrn(zcnj,zcnk,zcnl,zcnm){try{if(zcnk){zcnj==true?$(zcnk).style.display="block":$(zcnk).style.display="none";}
for(var zcw=0;zcw<zcnl.length;zcw++){if($(zcnl[zcw])){zcnj==true?$(zcnl[zcw]).setAttribute("disabled",'true'):$(zcnl[zcw]).removeAttribute("disabled");}
}if(zcnm&&zcnj){if($(zcnm)&&zcnj){$(zcnm).focus();}
}}catch(zhj){}}var alert=function zasp(zhk){var zaph=zoj();if(zaph){zaph.alert(zhk);}
else{window.alert(zhk);}};function zam(){var zalz=(new Date).getTime()-zalx;zan(zalz+"  PT: "+zao(zam.caller,arguments));}
function zap(){zan("PT: "+zao(zap.caller,arguments));}
return zaxj;})();zasw={};zasw.createTextArea=function(zasv){try{var zcnn=document.createElement("textarea");zcnn.style.position="absolute";zcnn.style.left="-100%";if(zasv!=null){zcnn.innerText=zasv;}
document.body.appendChild(zcnn);return zcnn;}catch(zhj){return null;}
};zasw.zasx=function(zasv){try{if(zasv==null){return;}
if(zasv==""){zasv=" ";}var zcnn=zasw.createTextArea(zasv);if(zcnn==null){return;}
zcnn.select();document.execCommand("Copy");document.body.removeChild(zcnn);}
catch(zhj){}};zasw.zcno=function(){try{var zcnn=zasw.createTextArea();if(zcnn==null){return null;}
zcnn.focus();document.execCommand("Paste");var zasv=zcnn.innerText;document.body.removeChild(zcnn);return zasv;}
catch(zhj){return null;}};
