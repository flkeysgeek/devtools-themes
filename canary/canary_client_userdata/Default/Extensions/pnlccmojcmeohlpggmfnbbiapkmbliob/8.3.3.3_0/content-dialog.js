(function zama(){var zamb=0;var zamc=0;var zamd=false;var zame=false;var zamf=document.getElementById("rf_oq59tkMNhi");if(!zamf){return;}
var zamg=document.getElementById("rf_6e46jGA50S");if(!zamg){return;}
zamf.addEventListener("mousedown",zaik);zamg.addEventListener("mousedown",zamh);zamg.addEventListener("click",zami);document.addEventListener("mousemove",zamj);document.addEventListener("mouseup",zamk);window.addEventListener("resize",zaml);function zamm(zamn,zamo){var zgt=zamf.getBoundingClientRect();var zamp=document.documentElement.clientWidth;var zamq=document.documentElement.clientHeight;var zvt=zgt.left+zamn;var zamr=zgt.top+zamo;if(zvt+zgt.width>zamp){zvt=zamp-zgt.width;}
if(zamr+zgt.height>zamq){zamr=zamq-zgt.height;}if(zvt<0){zvt=0;}
if(zamr<0){zamr=0;}zamf.style.left=zvt+"px";zamf.style.top=zamr+"px";}
function zamh(zaky){zaky.preventDefault();zaky.stopPropagation();}
function zami(zaky){var message={"name":"rf_Pq4XBmSTzG"
}
;parent.postMessage(JSON.stringify(message),"*");}
function zaik(zaky){if(zaky.button===0&&zaky.buttons===1){zaky.preventDefault();zamb=zaky.clientX;zamc=zaky.clientY;zamd=true;}
}function zamj(zaky){if(zamd){var zamn=zaky.clientX-zamb;var zamo=zaky.clientY-zamc;if(Math.abs(zamn)+Math.abs(zamo)>=4){zame=true;}
if(zame&&(zamn!=0||zamo!=0)){zamm(zamn,zamo);zamb=zaky.clientX;zamc=zaky.clientY;}
}}function zamk(zaky){zamb=zaky.clientX;zamc=zaky.clientY;zamd=false;zame=false;}
function zaml(){var zgt=zamf.getBoundingClientRect();var zamp=document.documentElement.clientWidth;var zamq=document.documentElement.clientHeight;var zvt=zgt.left;var zamr=zgt.top;if(zgt.right>zamp){zvt=zamp-zgt.width;}
if(zgt.bottom>zamq){zamr=zamq-zgt.height;}if(zvt<0){zvt=0;}
if(zamr<0){zamr=0;}zamf.style.left=zvt+"px";zamf.style.top=zamr+"px";}
})();
