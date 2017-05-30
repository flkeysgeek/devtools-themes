var zavo=RfapiJS["UTF8"];function zavp(){this.zavq();}
zavp.prototype.zavq=function(){this.zavr=false;this.zavs=false;this.zavt=false;this.zavu="";this.zavv={}
;this.zavw={};this.zavx=[];this.zavy=[];this.zavz={}
;this.zavz["CONFIG"]={};this.zavz["CONFIG"][zacq]=6;this.zavz["CONFIG"][zacr]=80;this.zavz["CONFIG"][zacs]=0;this.zavz["CONFIG"][zact]=0;this.zavz["CONFIG"][zacu]=0;this.zavz["CONFIG"][zacv]=false;this.zavz["CONFIG"][zacw]=0;this.zavz["CONFIG"][zacx]=0;this.zavz["CONFIG"][zacy]=false;this.zavz["CONFIG"][zrw]=false;this.zavz["CONFIG"][zacz]=false;this.zavz["CONFIG"][zrx]=false;this.zavz["CONFIG"][zada]=false;this.zavz["CONFIG"][zadb]=false;this.zavz["CONFIG"][zadc]=false;this.zavz["CONFIG"][zadd]=false;this.zavz["CONFIG"][zade]=false;this.zavz["CONFIG"][zadf]="";this.zavz["CONFIG"][zadg]="";this.zavz["OPTIONS"]={}
;this.zavz["OPTIONS"][zadh]=true;this.zavz["OPTIONS"][zrz]=true;this.zavz["OPTIONS"][zsr]=false;this.zavz["OPTIONS"][zadi]=-1;this.zavz["OPTIONS"][zadj]=false;this.zavz["OPTIONS"][zadk]=false;this.zavz["OPTIONS"][zadl]=false;this.zavz["OPTIONS"][zadm]=0;this.zavz["OPTIONS"][zadn]="";this.zavz["DOMAINS EQUIV"]={}
;this.zavz["DOMAINS EQUIV"][zado]=0;this.zavz["DOMAINS EQUIV"][zadp]=1;}
;zavp.prototype.zawa=function(zawb){this.zavt=false;this.zavq();if(!zawb){return true;}
var zawc=zawd.zawe(zawb);zawc=zavo.zawf(zawc);if(!zawc){}
else if(zawc[0]=='{'){var zvd=JSON.parse(zawc);var zqu=zvd&&zvd['policies'];if(zqu){var self=this;zafv(zqu,function(value,name){if(typeof self.zavv["CONFIG"]=="undefined"){self.zavv["CONFIG"]={}
;}if(typeof self.zavv["CONFIG"][zfr[0]]=="undefined"){self.zavv["CONFIG"][zfr[0]]={}
;}self.zavv["CONFIG"][name]=value;self.zavt=true;}
);}}else{var zee='';var zawg=zawc.split('\r\n');for(var zcw=0;zcw<zawg.length;zcw++){var zawh=zawg[zcw];if(zawh.length>2&&zawh[0]=='['&&zawh[zawh.length-1]==']'){zee=zawh.substr(1,zawh.length-2);continue;}
var zfr=zawh.split("=");if(Array.isArray(zfr)&&zfr.length>1&&zfr[0]&&zee){var name=zfr.shift();var value=zfr.join("=");if(value){if(typeof this.zavv[zee]=="undefined"){this.zavv[zee]={}
;}if(typeof this.zavv[zee][name]=="undefined"){this.zavv[zee][name]={}
;}this.zavv[zee][name]=value;}}}this.zavt=true;}if(this.zavt){this.zavu=zawb;}
this.zawi(this.zawj());this.zawk();return true;};zavp.prototype.zawl=function(zee,name,zawm){zawm=this.zawn(zee,name,zawm);if(typeof zee=="undefined"||typeof name=="undefined"){return zawm;}
if(typeof this.zavv[zee]=="undefined"||typeof this.zavv[zee][name]=="undefined"){return this.zawn(zee,name,zawm);}
var value=this.zavv[zee][name];if(typeof zawm=="undefined"){return value;}
switch(typeof zawm){case"boolean":return value=="1";case"number":var zawo=parseInt(value);return!isNaN(zawo)?zawo:this.zawn(zee,name,zawm);case"string":return value;default:return value;break;}
};zavp.prototype.zrv=function(name,zawm){return this.zawl("CONFIG",name,zawm);}
;zavp.prototype.zry=function(name,zawm){return this.zawl("OPTIONS",name,zawm);}
;zavp.prototype.zawp=function(name,zawm){return this.zawl("DOMAINS EQUIV",name,zawm);}
;zavp.prototype.zawn=function(zee,name,zawm){if(typeof zawm!="undefined"){return zawm;}
if(typeof this.zavz[zee]=="undefined"||typeof this.zavz[zee][name]=="undefined"){return zawm;}
return this.zavz[zee][name];};zavp.prototype.zawj=function(){var zgv=[];var zalb=this.zawp(zado);var zaj=this.zawp(zadp);if(zaj==1){for(var zcw=0;zcw<zalb;zcw++){var zawh=this.zawp(zcw);if(zawh){zgv.push(zawh);}
}}return zgv;};zavp.prototype.zawi=function(zawg){this.zavw=[];if(Array.isArray(zawg)){for(var zcw=0;zcw<zawg.length;zcw++){var zawh=zawg[zcw];var zfr=zawh.split("=");this.zavw.push([]);for(var zgg=0;zgg<zfr.length;zgg++){var zvo=zfr[zgg].trim();if(zvo){zvo=zty(zvo,true);if(zvo){this.zavw[zcw].push(zvo);}
}}}}};zavp.prototype.zawq=function(url){var zgv=[];url=url.trim();if(url){var zvo=zty(url,true);if(zvo){for(var zcw=0;zcw<this.zavw.length;zcw++){var zatm=this.zavw[zcw];if(zatm.indexOf(zvo)!=-1){for(var zgg=0;zgg<zatm.length;zgg++){if(zgv.indexOf(zatm[zgg])==-1){zgv.push(zatm[zgg]);}
}}}}}if(zgv.length==0){zgv.push(url);}return zgv;}
;zavp.prototype.zawr=function(zaws,zawt){if(zaws){var zawu=zaws.split("\\n");for(var zcw=0;zcw<zawu.length;zcw++){var zvo=zawu[zcw];if(!zvo){continue;}
zvo=zty(zvo,true);if(zvo){zawt.push(zvo);}}}};zavp.prototype.zawk=function(){this.zavx=[];this.zavy=[];this.zawr(this.zrv(zadf),this.zavx);this.zawr(this.zrv(zadg),this.zavy);}
;zavp.prototype.zrs=function(url){if(!url){return false;}
var zvo=zty(url,true);if(!zvo){return false;}if(this.zavx&&this.zavx.length!=0){return this.zavx.indexOf(zvo)!=-1;}
if(this.zavy&&this.zavy.length!=0){if(this.zavy.indexOf(zvo)!=-1){return false;}
}return true;};
