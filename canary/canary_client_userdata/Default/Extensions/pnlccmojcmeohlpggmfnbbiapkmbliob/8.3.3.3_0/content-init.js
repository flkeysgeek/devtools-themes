// Copyright (C) 1999-2017 Siber Systems Inc. All Rights Reserved.
if(typeof zahi==="undefined"){var RFB_COUNTRIES;var RFB_OPTIONS;var RFB_FIELDS;var RFB_RULES;var zahi=undefined;var zffs=(window==window.top);var zaix=false;var zais=undefined;var zaiv=false;var zajb=undefined;var zfft=false;var zffu=undefined;var zffv=[];var zaiw="initial";var zaja=0;window.addEventListener("DOMContentLoaded",zait,true);window.addEventListener("load",zba,true);window.addEventListener("unload",ziy,true);var zffw=typeof(document.webkitHidden)!=="undefined";if(!zffw){zffx();}
else if(!document.webkitHidden){zffx();}else{if(zffw){document.addEventListener("webkitvisibilitychange",zffy,false);function zffy(){if(!document.webkitHidden&&!zahi){document.removeEventListener("webkitvisibilitychange",zffy,false);zffx();}
}}}function zffx(){chrome.runtime.sendMessage({"name":"hi"}
,function(zhh){try{if(!zhh){return;}if(zffs){zahi="top"+zhh.id.toString();}
else{zahi=zhh.id;}zais=chrome.runtime.connect({"name":zahi}
);zais.onMessage.addListener(zkn);zais.onDisconnect.addListener(zhi);if(zaix){zair({"name":"status","status":"complete","url":window.document.URL}
);}}catch(zhj){}});}}function zair(data,zffz){if(!zais){return;}
if(!zffz){}zais.postMessage(data);}
