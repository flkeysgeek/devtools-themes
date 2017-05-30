'use strict';chrome.i18n.getMessage("4528089202128275824");
chrome.i18n.getMessage("2810417817914017289");
chrome.i18n.getMessage("3413021810593924462");
var $mr$cast$Messages$MSG_MUTE$$ = chrome.i18n.getMessage("7603034707785674700"), $mr$cast$Messages$MSG_UNMUTE$$ = chrome.i18n.getMessage("8009014317872238527");
chrome.i18n.getMessage("8636962961150071298");
chrome.i18n.getMessage("1802762746589457177");
var $mr$cloud$details$Messages$MSG_MR_LOCAL_PRESENT_TITLE$$ = chrome.i18n.getMessage("1779193092441017833"), $mr$cloud$details$Messages$MSG_MR_LOCAL_PRESENT_SUBTITLE$$ = chrome.i18n.getMessage("3506175733260505131");
var $mr$cloud$RouteController$$ = function($displayName$$, $statusText$$, $muteButton$$, $unmuteButton$$, $checkBoxElement$$, $checkBox$$, $checkMark$$, $checkBoxLabel$$, $checkBoxLabelSubtitle$$, $opt_search$$) {
  this.$s$ = $displayName$$;
  this.$l$ = $statusText$$;
  this.$f$ = $muteButton$$;
  this.$g$ = $unmuteButton$$;
  this.$h$ = $checkBoxElement$$;
  this.$i$ = $checkBox$$;
  this.$j$ = $checkMark$$;
  this.$o$ = $checkBoxLabel$$;
  this.$m$ = $checkBoxLabelSubtitle$$;
  this.$b$ = this.$c$ = !1;
  this.$a$ = null;
  $JSCompiler_StaticMethods_initializePresentationApi_$$(this, $opt_search$$);
}, $JSCompiler_StaticMethods_initializePresentationApi_$$ = function($JSCompiler_StaticMethods_initializePresentationApi_$self$$, $opt_search$jscomp$1_routeId_search$$) {
  if ($opt_search$jscomp$1_routeId_search$$ = $opt_search$jscomp$1_routeId_search$$ || window.location.search) {
    for (var $handleButtonEvents_handleCheckBoxEvents_urlParams$$ = {}, $searchPattern$$ = /([^&=]+)=?([^&]*)/g, $match$jscomp$1$$; $match$jscomp$1$$ = $searchPattern$$.exec($opt_search$jscomp$1_routeId_search$$.substring(1));) {
      $handleButtonEvents_handleCheckBoxEvents_urlParams$$[decodeURIComponent($match$jscomp$1$$[1])] = decodeURIComponent($match$jscomp$1$$[2]);
    }
    if ($opt_search$jscomp$1_routeId_search$$ = $handleButtonEvents_handleCheckBoxEvents_urlParams$$.routeId) {
      $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$s$.textContent = "Casting:", $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$l$.textContent = "", $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$f$.title = $mr$cast$Messages$MSG_MUTE$$, $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$g$.title = $mr$cast$Messages$MSG_UNMUTE$$, $JSCompiler_StaticMethods_updateMuteButtons$$($JSCompiler_StaticMethods_initializePresentationApi_$self$$), $handleButtonEvents_handleCheckBoxEvents_urlParams$$ = 
      function($event$jscomp$5$$) {
        $event$jscomp$5$$ && $event$jscomp$5$$.key && " " != $event$jscomp$5$$.key && "Enter" != $event$jscomp$5$$.key || ($JSCompiler_StaticMethods_initializePresentationApi_$self$$.$a$ && "connected" == $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$a$.state && ($JSCompiler_StaticMethods_initializePresentationApi_$self$$.$c$ = !$JSCompiler_StaticMethods_initializePresentationApi_$self$$.$c$, $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$a$.send('{"type":"MUTE", "data": {"mute":' + 
        $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$c$ + "}}")), $JSCompiler_StaticMethods_updateMuteButtons$$($JSCompiler_StaticMethods_initializePresentationApi_$self$$));
      }, $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$f$.onclick = $handleButtonEvents_handleCheckBoxEvents_urlParams$$, $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$f$.onkeydown = $handleButtonEvents_handleCheckBoxEvents_urlParams$$, $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$g$.onclick = $handleButtonEvents_handleCheckBoxEvents_urlParams$$, $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$g$.onkeydown = $handleButtonEvents_handleCheckBoxEvents_urlParams$$, 
      $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$o$.textContent = $mr$cloud$details$Messages$MSG_MR_LOCAL_PRESENT_TITLE$$, $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$m$.textContent = $mr$cloud$details$Messages$MSG_MR_LOCAL_PRESENT_SUBTITLE$$, $handleButtonEvents_handleCheckBoxEvents_urlParams$$ = function($event$jscomp$6$$) {
        $event$jscomp$6$$ && $event$jscomp$6$$.key && " " != $event$jscomp$6$$.key && "Enter" != $event$jscomp$6$$.key || ($JSCompiler_StaticMethods_initializePresentationApi_$self$$.$a$ && "connected" == $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$a$.state && ($JSCompiler_StaticMethods_initializePresentationApi_$self$$.$b$ = !$JSCompiler_StaticMethods_initializePresentationApi_$self$$.$b$, $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$a$.send('{"type":"LOCAL_PRESENT", "data": {"local":' + 
        $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$b$ + "}}")), $JSCompiler_StaticMethods_updateLocalCheckBox$$($JSCompiler_StaticMethods_initializePresentationApi_$self$$));
      }, $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$h$.onclick = $handleButtonEvents_handleCheckBoxEvents_urlParams$$, $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$h$.onkeydown = $handleButtonEvents_handleCheckBoxEvents_urlParams$$, (new PresentationRequest("https://hangouts.google.com/cloudmrp-mirroring")).reconnect($opt_search$jscomp$1_routeId_search$$).then(function($conn$$) {
        $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$a$ = $conn$$;
        $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$a$.onmessage = $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$u$.bind($JSCompiler_StaticMethods_initializePresentationApi_$self$$);
        $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$a$.onconnect = function() {
          $JSCompiler_StaticMethods_initializePresentationApi_$self$$.$a$.send('{"type":"STATUS_REQUEST"}');
        };
      }, null);
    }
  }
}, $JSCompiler_StaticMethods_updateMuteButtons$$ = function($JSCompiler_StaticMethods_updateMuteButtons$self$$) {
  $JSCompiler_StaticMethods_updateMuteButtons$self$$.$c$ ? ($JSCompiler_StaticMethods_updateMuteButtons$self$$.$g$.style.display = "", $JSCompiler_StaticMethods_updateMuteButtons$self$$.$f$.style.display = "none") : ($JSCompiler_StaticMethods_updateMuteButtons$self$$.$g$.style.display = "none", $JSCompiler_StaticMethods_updateMuteButtons$self$$.$f$.style.display = "");
}, $JSCompiler_StaticMethods_updateLocalCheckBox$$ = function($JSCompiler_StaticMethods_updateLocalCheckBox$self$$) {
  $JSCompiler_StaticMethods_updateLocalCheckBox$self$$.$b$ ? ($JSCompiler_StaticMethods_updateLocalCheckBox$self$$.$i$.className = "checked paper-checkbox", $JSCompiler_StaticMethods_updateLocalCheckBox$self$$.$j$.className = "paper-checkbox") : ($JSCompiler_StaticMethods_updateLocalCheckBox$self$$.$i$.className = "paper-checkbox", $JSCompiler_StaticMethods_updateLocalCheckBox$self$$.$j$.className = "hidden paper-checkbox");
};
$mr$cloud$RouteController$$.prototype.$u$ = function($event$jscomp$7_message$jscomp$34$$) {
  if ($event$jscomp$7_message$jscomp$34$$ = $event$jscomp$7_message$jscomp$34$$.data) {
    $event$jscomp$7_message$jscomp$34$$ = JSON.parse($event$jscomp$7_message$jscomp$34$$), "STATUS_RESPONSE" == $event$jscomp$7_message$jscomp$34$$.type && $event$jscomp$7_message$jscomp$34$$.data && ($event$jscomp$7_message$jscomp$34$$ = $event$jscomp$7_message$jscomp$34$$.data, $event$jscomp$7_message$jscomp$34$$.routeDescription && (this.$l$.textContent = $event$jscomp$7_message$jscomp$34$$.routeDescription), void 0 != $event$jscomp$7_message$jscomp$34$$.mute && (this.$c$ = $event$jscomp$7_message$jscomp$34$$.mute, 
    $JSCompiler_StaticMethods_updateMuteButtons$$(this)), void 0 != $event$jscomp$7_message$jscomp$34$$.local && (this.$b$ = $event$jscomp$7_message$jscomp$34$$.local, $JSCompiler_StaticMethods_updateLocalCheckBox$$(this)));
  }
};
window.addEventListener("DOMContentLoaded", function() {
  window.routeController = new $mr$cloud$RouteController$$(document.getElementById("displayNameHolder"), document.getElementById("statusTextHolder"), document.getElementById("mute"), document.getElementById("unmute"), document.getElementById("checkboxElement"), document.getElementById("checkbox"), document.getElementById("checkmark"), document.getElementById("checkboxLabelTitle"), document.getElementById("checkboxLabelSubtitle"));
});

