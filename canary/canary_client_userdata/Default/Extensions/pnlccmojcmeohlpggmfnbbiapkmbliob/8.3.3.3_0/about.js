// Copyright (C) 1999-2017 Siber Systems Inc. All Rights Reserved.
function zaa(){if(zab||zac){$("rf_about_extension_lbl").innerHTML="RoboForm Opera Extension";}
else if(zad){$("rf_about_extension_lbl").innerHTML="RoboForm Chrome Extension";}
else if(zae){$("rf_about_extension_lbl").innerHTML="RoboForm Maxthon Extension";}
else if(zaf){$("rf_about_extension_lbl").innerHTML="RoboForm Edge Extension";}
else if(zag){$("rf_about_extension_lbl").innerHTML="RoboForm Firefox Extension";}
$("rf_about_version_td").innerHTML=zah("Version");var zai=chrome.runtime.getManifest();var zaj=zai.version;$("rf_about_version_td1").innerText=" "+zaj;$("rf_about_build_td").innerHTML=zah("Build");$("rf_about_build_td1").innerText=" "+zak;var zal="Copyright (C) 1999-2009 Siber Systems, Inc";zal=zal.replace(" 1999-2009 "," 1999-"+(new Date()).getFullYear()+" ");$("rf_about_copyright_lbl").innerHTML=zal;}
function zam(){zan("PT: "+zao(zam.caller,arguments));}
function zap(){zan("PT: "+zao(zap.caller,arguments));}
window.addEventListener("load",zaa,true);
