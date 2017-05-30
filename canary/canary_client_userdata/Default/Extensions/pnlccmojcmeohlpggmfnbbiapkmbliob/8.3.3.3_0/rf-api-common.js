// Copyright (C) 1999-2016 Siber Systems Inc. All Rights Reserved.
var RfapiJS=RfapiJS||{}
;(function(){var ztk={"RfItemType_Undefined":0,"RfItemType_Login":1,"RfItemType_Bookmark":2,"RfItemType_SearchCard":3,"RfItemType_BlockingPasscard":4,"RfItemType_Identity":5,"RfItemType_Contact":6,"RfItemType_Safenote":7,"RfItemType_Folder":8,"RfItemType_Generic":9,"RfItemType_Max":100
}
;RfapiJS.ITEMINFO_MODTIME_PROP="mod";RfapiJS.ITEMINFO_CREATETIME_PROP="cre";RfapiJS.ITEMINFO_SIZE_PROP="size";RfapiJS.ITEMINFO_PATH_PROP="path";RfapiJS.ITEMINFO_TYPE_PROP="type";RfapiJS.ITEM_NOTE_PROP="n";RfapiJS.ITEMDATA_FIELDS_PROP="f";RfapiJS.ITEM_MATCHURL_PROP="m";RfapiJS.ITEM_GOTOURL_PROP="g";RfapiJS["EnRfDataItemType"]=ztk;var zctf={"INFO":0,"FUNC_INOUT":1,"SPECIAL_CASE":2,"EXCEPTION":3
}
;function zwe(zcm,zasi){if(typeof(opera)!="undefined"&&typeof(opera.postError)!="undefined"){opera.postError("(RfapiJS log) : "+zcm);}
else{console.log("(RfapiJS log) : "+zcm);}};function zcte(zcm,zasi,zavh){return;if(typeof(opera)!="undefined"&&typeof(opera.postError)!="undefined"){opera.postError("(RfapiJS trace) : "+zcm);}
else{console.log("(RfapiJS trace) : "+zcm);}};RfapiJS["logJS"]=zwe;RfapiJS["traceLevel"]=zctf;RfapiJS["traceJS"]=zcte;}
).apply(RfapiJS);
