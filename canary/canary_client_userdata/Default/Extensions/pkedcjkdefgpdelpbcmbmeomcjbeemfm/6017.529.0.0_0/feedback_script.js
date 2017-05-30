'use strict';var $goog$i18n$BidiFormatter$$ = function($contextDir$$) {
  this.$contextDir_$ = "number" == typeof $contextDir$$ ? 0 < $contextDir$$ ? 1 : 0 > $contextDir$$ ? -1 : null : null == $contextDir$$ ? null : $contextDir$$ ? -1 : 1;
};
if ("undefined" != typeof angular) {
  var $module$$ = angular.module("chrome_18n", []);
  chrome.runtime && chrome.runtime.getManifest && chrome.runtime.getManifest().default_locale && $module$$.directive("angularMessage", function() {
    return {restrict:"E", replace:!0, controller:["$scope", function($$scope$$) {
      var $$jscomp$this$jscomp$3$$ = this;
      this.$bidiFormatter_$ = this.$dir_$ = null;
      $$scope$$.dirForText = function($$scope$$) {
        $$jscomp$this$jscomp$3$$.$dir_$ || ($$jscomp$this$jscomp$3$$.$dir_$ = chrome.i18n.getMessage("@@bidi_dir") || "ltr");
        $$jscomp$this$jscomp$3$$.$bidiFormatter_$ || ($$jscomp$this$jscomp$3$$.$bidiFormatter_$ = new $goog$i18n$BidiFormatter$$("rtl" == $$jscomp$this$jscomp$3$$.$dir_$));
        var $text$jscomp$16_tokens$jscomp$inline_4226$$ = $$jscomp$this$jscomp$3$$.$bidiFormatter_$, $JSCompiler_inline_result$jscomp$4134_rtlCount$jscomp$inline_4223$$, $totalCount$jscomp$inline_4224$$ = $JSCompiler_inline_result$jscomp$4134_rtlCount$jscomp$inline_4223$$ = 0, $hasWeaklyLtr$jscomp$inline_4225$$ = !1;
        $$scope$$ = ($$scope$$ || "").split($goog$i18n$bidi$wordSeparatorRe_$$);
        for (var $i$jscomp$inline_4227$$ = 0; $i$jscomp$inline_4227$$ < $$scope$$.length; $i$jscomp$inline_4227$$++) {
          var $token$jscomp$inline_4228$$ = $$scope$$[$i$jscomp$inline_4227$$];
          $goog$i18n$bidi$rtlDirCheckRe_$$.test($token$jscomp$inline_4228$$) ? ($JSCompiler_inline_result$jscomp$4134_rtlCount$jscomp$inline_4223$$++, $totalCount$jscomp$inline_4224$$++) : $goog$i18n$bidi$isRequiredLtrRe_$$.test($token$jscomp$inline_4228$$) ? $hasWeaklyLtr$jscomp$inline_4225$$ = !0 : $goog$i18n$bidi$ltrCharReg_$$.test($token$jscomp$inline_4228$$) ? $totalCount$jscomp$inline_4224$$++ : $goog$i18n$bidi$hasNumeralsRe_$$.test($token$jscomp$inline_4228$$) && ($hasWeaklyLtr$jscomp$inline_4225$$ = 
          !0);
        }
        $JSCompiler_inline_result$jscomp$4134_rtlCount$jscomp$inline_4223$$ = 0 == $totalCount$jscomp$inline_4224$$ ? $hasWeaklyLtr$jscomp$inline_4225$$ ? 1 : 0 : 0.40 < $JSCompiler_inline_result$jscomp$4134_rtlCount$jscomp$inline_4223$$ / $totalCount$jscomp$inline_4224$$ ? -1 : 1;
        return -1 == (0 == $JSCompiler_inline_result$jscomp$4134_rtlCount$jscomp$inline_4223$$ ? $text$jscomp$16_tokens$jscomp$inline_4226$$.$contextDir_$ : $JSCompiler_inline_result$jscomp$4134_rtlCount$jscomp$inline_4223$$) ? "rtl" : "ltr";
      };
    }], compile:function($element$jscomp$28$$, $attrs_msgId$$) {
      $attrs_msgId$$ = $attrs_msgId$$.key;
      var $args$jscomp$8_msg$jscomp$1$$ = null, $replaceElement$$ = document.createElement("amr");
      $attrs_msgId$$ && !$attrs_msgId$$.match(/^\d+$/) && ($attrs_msgId$$ = chrome.i18n.getMessage($attrs_msgId$$), null == $attrs_msgId$$ && $replaceElement$$.setAttribute("id", "missing"));
      if ($attrs_msgId$$) {
        var $i$jscomp$63_placeholders$$ = chrome.i18n.getMessage($attrs_msgId$$ + "_ph"), $args$jscomp$8_msg$jscomp$1$$ = [];
        if (null != $i$jscomp$63_placeholders$$) {
          for ($args$jscomp$8_msg$jscomp$1$$ = $i$jscomp$63_placeholders$$.split("\ue000"), $i$jscomp$63_placeholders$$ = 0; $i$jscomp$63_placeholders$$ < $args$jscomp$8_msg$jscomp$1$$.length; ++$i$jscomp$63_placeholders$$) {
            $args$jscomp$8_msg$jscomp$1$$[$i$jscomp$63_placeholders$$] = $args$jscomp$8_msg$jscomp$1$$[$i$jscomp$63_placeholders$$].replace(/^{{(.*)}}$/, '<amrp dir="{{dirForText($1)}}">{{$1}}</amrp>');
          }
        }
        $args$jscomp$8_msg$jscomp$1$$ = chrome.i18n.getMessage($attrs_msgId$$, $args$jscomp$8_msg$jscomp$1$$);
      } else {
        $replaceElement$$.setAttribute("r", "nokey");
      }
      $args$jscomp$8_msg$jscomp$1$$ ? $replaceElement$$.innerHTML = $args$jscomp$8_msg$jscomp$1$$ : ($replaceElement$$.setAttribute("tl", "false"), $replaceElement$$.innerHTML = $element$jscomp$28$$.html());
      $element$jscomp$28$$.replaceWith($replaceElement$$);
    }};
  });
}
;var $csp$nonceTools$NONCE_PATTERN$$ = /^[\w+/]+[=]{0,2}$/;
var $userfeedback$api$startFeedback$$ = function($configuration$jscomp$2_script$jscomp$7$$, $argArray_opt_productData_value$jscomp$124$$, $opt_window$jscomp$2_serverUri$$) {
  $configuration$jscomp$2_script$jscomp$7$$.timeOfStartCall = (new Date).getTime();
  var $src$jscomp$13_win$jscomp$1$$ = $opt_window$jscomp$2_serverUri$$ || $goog$global$$, $doc$jscomp$6$$ = $src$jscomp$13_win$jscomp$1$$.document, $elem$jscomp$inline_446_nonce$jscomp$2_nonce$jscomp$inline_447$$;
  a: {
    if (($elem$jscomp$inline_446_nonce$jscomp$2_nonce$jscomp$inline_447$$ = ($src$jscomp$13_win$jscomp$1$$ || $goog$global$$).document.querySelector("script[nonce]")) && ($elem$jscomp$inline_446_nonce$jscomp$2_nonce$jscomp$inline_447$$ = $elem$jscomp$inline_446_nonce$jscomp$2_nonce$jscomp$inline_447$$.nonce || $elem$jscomp$inline_446_nonce$jscomp$2_nonce$jscomp$inline_447$$.getAttribute("nonce")) && $csp$nonceTools$NONCE_PATTERN$$.test($elem$jscomp$inline_446_nonce$jscomp$2_nonce$jscomp$inline_447$$)) {
      break a;
    }
    $elem$jscomp$inline_446_nonce$jscomp$2_nonce$jscomp$inline_447$$ = void 0;
  }
  $elem$jscomp$inline_446_nonce$jscomp$2_nonce$jscomp$inline_447$$ && ($configuration$jscomp$2_script$jscomp$7$$.nonce = $elem$jscomp$inline_446_nonce$jscomp$2_nonce$jscomp$inline_447$$);
  if ("help" == $configuration$jscomp$2_script$jscomp$7$$.flow) {
    var $href_isValidPsd_startFeedback$$ = $goog$getObjectByName$$("document.location.href", $src$jscomp$13_win$jscomp$1$$);
    !$configuration$jscomp$2_script$jscomp$7$$.helpCenterContext && $href_isValidPsd_startFeedback$$ && ($configuration$jscomp$2_script$jscomp$7$$.helpCenterContext = $href_isValidPsd_startFeedback$$.substring(0, 1200));
    $href_isValidPsd_startFeedback$$ = !0;
    if ($argArray_opt_productData_value$jscomp$124$$ && JSON && JSON.stringify) {
      var $psdJson$$ = JSON.stringify($argArray_opt_productData_value$jscomp$124$$);
      ($href_isValidPsd_startFeedback$$ = 1200 >= $psdJson$$.length) && ($configuration$jscomp$2_script$jscomp$7$$.psdJson = $psdJson$$);
    }
    $href_isValidPsd_startFeedback$$ || ($argArray_opt_productData_value$jscomp$124$$ = {invalidPsd:!0});
  }
  $argArray_opt_productData_value$jscomp$124$$ = [$configuration$jscomp$2_script$jscomp$7$$, $argArray_opt_productData_value$jscomp$124$$, $opt_window$jscomp$2_serverUri$$];
  $src$jscomp$13_win$jscomp$1$$.GOOGLE_FEEDBACK_START_ARGUMENTS = $argArray_opt_productData_value$jscomp$124$$;
  $opt_window$jscomp$2_serverUri$$ = $configuration$jscomp$2_script$jscomp$7$$.serverUri || "//www.google.com/tools/feedback";
  if ($href_isValidPsd_startFeedback$$ = $src$jscomp$13_win$jscomp$1$$.GOOGLE_FEEDBACK_START) {
    $href_isValidPsd_startFeedback$$.apply($src$jscomp$13_win$jscomp$1$$, $argArray_opt_productData_value$jscomp$124$$);
  } else {
    var $src$jscomp$13_win$jscomp$1$$ = $opt_window$jscomp$2_serverUri$$ + "/load.js?", $key$jscomp$74$$;
    for ($key$jscomp$74$$ in $configuration$jscomp$2_script$jscomp$7$$) {
      $argArray_opt_productData_value$jscomp$124$$ = $configuration$jscomp$2_script$jscomp$7$$[$key$jscomp$74$$], null != $argArray_opt_productData_value$jscomp$124$$ && !$goog$isObject$$($argArray_opt_productData_value$jscomp$124$$) && ($src$jscomp$13_win$jscomp$1$$ += encodeURIComponent($key$jscomp$74$$) + "=" + encodeURIComponent($argArray_opt_productData_value$jscomp$124$$) + "&");
    }
    $configuration$jscomp$2_script$jscomp$7$$ = $doc$jscomp$6$$.createElement("script");
    $elem$jscomp$inline_446_nonce$jscomp$2_nonce$jscomp$inline_447$$ && $configuration$jscomp$2_script$jscomp$7$$.setAttribute("nonce", $elem$jscomp$inline_446_nonce$jscomp$2_nonce$jscomp$inline_447$$);
    $configuration$jscomp$2_script$jscomp$7$$.src = $src$jscomp$13_win$jscomp$1$$;
    $doc$jscomp$6$$.body.appendChild($configuration$jscomp$2_script$jscomp$7$$);
  }
};
$goog$exportSymbol$$("userfeedback.api.startFeedback", $userfeedback$api$startFeedback$$);
var $mr$FeedbackUtils$ProductInfo$$ = function() {
  this.$f$ = this.$b$ = this.$h$ = this.modelName = this.$g$ = this.$a$ = this.$logs$ = "";
};
var $mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_BUG_OR_ERROR$$ = chrome.i18n.getMessage("4163185390680253103"), $mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_FEATURE_REQUEST$$ = chrome.i18n.getMessage("492097680647953484"), $mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_PROJECTION_QUALITY$$ = chrome.i18n.getMessage("2575016469622936324"), $mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_DISCOVERY$$ = chrome.i18n.getMessage("128276876460319075"), $mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_OTHER$$ = chrome.i18n.getMessage("3326722026796849289"), 
$mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_FREEZES$$ = chrome.i18n.getMessage("1018984561488520517"), $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_JERKY$$ = chrome.i18n.getMessage("8205999658352447129"), $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_STUTTER$$ = chrome.i18n.getMessage("5723583529370342957"), $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_SMOOTH$$ = chrome.i18n.getMessage("1550904064710828958"), $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_PERFECT$$ = chrome.i18n.getMessage("5014364904504073524"), 
$mr$feedback$Messages$MSG_MR_FEEDBACK_NA$$ = chrome.i18n.getMessage("2194670894476780934"), $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_UNWATCHABLE$$ = chrome.i18n.getMessage("6614468912728530636"), $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_POOR$$ = chrome.i18n.getMessage("5910595154486533449"), $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_ACCEPTABLE$$ = chrome.i18n.getMessage("5363086287710390513"), $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_GOOD$$ = chrome.i18n.getMessage("244647017322945605"), 
$mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_GREAT$$ = chrome.i18n.getMessage("5375576275991472719"), $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_UNINTELLIGIBLE$$ = chrome.i18n.getMessage("4592127349908255218"), $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_POOR$$ = chrome.i18n.getMessage("843316808366399491"), $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_ACCEPTABLE$$ = chrome.i18n.getMessage("5699813974548050528"), $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_GOOD$$ = chrome.i18n.getMessage("8515148417333877999"), 
$mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_PERFECT$$ = chrome.i18n.getMessage("1636686747687494376"), $mr$feedback$Messages$MSG_MR_FEEDBACK_DISCARD_CONFIRMATION$$ = chrome.i18n.getMessage("4148300086676792937"), $mr$feedback$Messages$MSG_MR_FEEDBACK_SENDING$$ = chrome.i18n.getMessage("3219866268410307919"), $mr$feedback$Messages$MSG_MR_FEEDBACK_SEND_FAIL$$ = chrome.i18n.getMessage("9211708838274008657"), $mr$feedback$Messages$MSG_MR_FEEDBACK_SEND_SUCCESS$$ = chrome.i18n.getMessage("8706273405040403641"), 
$mr$feedback$Messages$MSG_MR_FEEDBACK_RESENDING$$ = chrome.i18n.getMessage("4756056595565370923"), $mr$feedback$Messages$MSG_MR_FEEDBACK_LOGS_HEADER$$ = chrome.i18n.getMessage("7876724262035435114"), $mr$feedback$Messages$MSG_MR_FEEDBACK_SEND_LOGS$$ = chrome.i18n.getMessage("5485620192329479690"), $mr$feedback$Messages$MSG_MR_FEEDBACK_FINE_LOGS_WARNING$$ = chrome.i18n.getMessage("6963873398546068901"), $mr$feedback$Messages$MSG_MR_FEEDBACK_OK$$ = chrome.i18n.getMessage("3567591856726172993"), $mr$feedback$Messages$MSG_MR_FEEDBACK_YOUR_ANSWER$$ = 
chrome.i18n.getMessage("3239956785410157548");
var $FeedbackCtrl$$ = function($$scope$jscomp$1$$, $$mdDialog$$) {
  var $$jscomp$this$jscomp$4$$ = this;
  this.$j$ = $$mdDialog$$;
  this.$a$ = $$scope$jscomp$1$$;
  this.$a$.top = $$scope$jscomp$1$$;
  this.$l$ = [];
  this.$g$ = !1;
  this.$b$ = new $mr$FeedbackUtils$ProductInfo$$;
  this.$a$.videoSmoothnessRatings = this.$toStandardRatings_$($mr$feedback$Messages$MSG_MR_FEEDBACK_NA$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_FREEZES$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_JERKY$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_STUTTER$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_SMOOTH$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_PERFECT$$);
  this.$a$.videoQualityRatings = this.$toStandardRatings_$($mr$feedback$Messages$MSG_MR_FEEDBACK_NA$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_UNWATCHABLE$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_POOR$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_ACCEPTABLE$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_GOOD$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_GREAT$$);
  this.$a$.audioQualityRatings = this.$toStandardRatings_$($mr$feedback$Messages$MSG_MR_FEEDBACK_NA$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_UNINTELLIGIBLE$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_POOR$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_ACCEPTABLE$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_GOOD$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_PERFECT$$);
  this.$l$ = [{value:"Bug", desc:$mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_BUG_OR_ERROR$$}, {value:"FeatureRequest", desc:$mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_FEATURE_REQUEST$$}, {value:"MirroringQuality", desc:$mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_PROJECTION_QUALITY$$}, {value:"Discovery", desc:$mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_DISCOVERY$$}, {value:"Other", desc:$mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_OTHER$$}];
  this.$a$.feedbackTypes = this.$l$;
  this.$a$.includeFineLogs = !0;
  this.$a$.feedbackType = "Bug";
  this.$a$.sendFeedback = this.$sendFeedback_$.bind(this);
  this.$a$.cancel = this.$cancel_$.bind(this);
  this.$a$.attachLogsClick = this.$h$.bind(this);
  this.$a$.viewLogs = this.$A$.bind(this);
  this.$a$.$watchGroup("videoSmoothness videoQuality audioQuality feedbackDescription comments feedbackType".split(" "), this.$checkHasSufficientFeedback_$.bind(this));
  this.$a$.sufficientFeedback = !1;
  this.$a$.$watch("attachLogs", this.$h$.bind(this));
  this.$a$.attachLogs = !0;
  this.$o$ = $goog$string$getRandomString$$();
  this.$a$.userEmail = "";
  chrome.identity.getProfileUserInfo(function($$scope$jscomp$1$$) {
    $$jscomp$this$jscomp$4$$.$a$.userEmail = $$scope$jscomp$1$$.email;
    $JSCompiler_StaticMethods_safeApply_$$($$jscomp$this$jscomp$4$$);
  });
  this.$a$.yourAnswerText = $mr$feedback$Messages$MSG_MR_FEEDBACK_YOUR_ANSWER$$;
  this.$a$.language = chrome.i18n && chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : chrome.runtime.getManifest().default_locale;
  this.$a$.requestLogsInProgress = !1;
};
$JSCompiler_prototypeAlias$$ = $FeedbackCtrl$$.prototype;
$JSCompiler_prototypeAlias$$.$toStandardRatings_$ = function($var_args$jscomp$83$$) {
  for (var $arr$jscomp$62$$ = [], $i$jscomp$64$$ = 1; $i$jscomp$64$$ < arguments.length; $i$jscomp$64$$++) {
    $arr$jscomp$62$$.push(new $FeedbackCtrl$Rating_$$($i$jscomp$64$$, arguments[$i$jscomp$64$$]));
  }
  $arr$jscomp$62$$.push(new $FeedbackCtrl$Rating_$$(0, arguments[0]));
  return $arr$jscomp$62$$;
};
$JSCompiler_prototypeAlias$$.$cancel_$ = function() {
  this.$a$.feedbackDescription && !confirm($mr$feedback$Messages$MSG_MR_FEEDBACK_DISCARD_CONFIRMATION$$) || window.close();
};
$JSCompiler_prototypeAlias$$.$checkHasSufficientFeedback_$ = function() {
  var $type$jscomp$124$$ = this.$a$.feedbackType;
  this.$a$.sufficientFeedback = "MirroringQuality" == $type$jscomp$124$$ ? this.$a$.videoSmoothness || this.$a$.videoQuality || this.$a$.audioQuality || this.$a$.comments : "Discovery" == $type$jscomp$124$$ ? this.$a$.visibleInSetup || this.$a$.comments : !!this.$a$.feedbackDescription;
};
$JSCompiler_prototypeAlias$$.$sendFeedback_$ = function() {
  if (this.$a$.sufficientFeedback) {
    var $description$jscomp$inline_460_type$jscomp$125$$ = this.$a$.feedbackType, $text$jscomp$17$$ = "";
    "MirroringQuality" == $description$jscomp$inline_460_type$jscomp$125$$ ? (this.$a$.videoSmoothness && ($text$jscomp$17$$ += "\nVideo Smoothness: " + this.$a$.videoSmoothness), this.$a$.videoQuality && ($text$jscomp$17$$ += "\nVideo Quality: " + this.$a$.videoQuality), this.$a$.audioQuality && ($text$jscomp$17$$ += "\nAudio: " + this.$a$.audioQuality), this.$a$.projectedContentUrl && ($text$jscomp$17$$ += "\nProjected Content/URL: " + this.$a$.projectedContentUrl), this.$a$.comments && ($text$jscomp$17$$ += 
    "\nComments: " + this.$a$.comments)) : "Discovery" == $description$jscomp$inline_460_type$jscomp$125$$ ? (this.$a$.visibleInSetup && ($text$jscomp$17$$ += "\nChromecast Visible in Setup: " + this.$a$.visibleInSetup), this.$a$.hasNetworkSoftware && ($text$jscomp$17$$ += "\nUsing VPN/proxy/firewall/NAS Software: " + this.$a$.hasNetworkSoftware), this.$a$.networkDescription && ($text$jscomp$17$$ += "\nNetwork Description: " + this.$a$.networkDescription), this.$a$.comments && ($text$jscomp$17$$ += 
    "\nComments: " + this.$a$.comments)) : $text$jscomp$17$$ = this.$a$.feedbackDescription;
    $description$jscomp$inline_460_type$jscomp$125$$ = "Type: " + $description$jscomp$inline_460_type$jscomp$125$$ + "\n\n" + $text$jscomp$17$$;
    this.$a$.sendDialogText = $mr$feedback$Messages$MSG_MR_FEEDBACK_SENDING$$;
    this.$a$.okButton = $mr$feedback$Messages$MSG_MR_FEEDBACK_OK$$;
    this.$a$.feedbackSent = !1;
    this.$j$.show({locals:{$feedbackSent$:this.$a$.feedbackSent, $sendDialogText$:this.$a$.sendDialogText, $okButton$:this.$a$.okButton}, scope:this.$a$, preserveScope:!0, bindToController:!0, template:'<md-dialog id="feedback-confirmation"><md-dialog-content><div id="send-feedback-text">{{sendDialogText}}</div><md-dialog-actions><md-button class="md-raised md-primary"ng-disabled="!feedbackSent" ng-click="closeWindow()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>', 
    controller:this.$f$});
    this.$sendFeedbackWithLogsOrAfterTimeout_$($description$jscomp$inline_460_type$jscomp$125$$, Date.now());
  }
};
$JSCompiler_prototypeAlias$$.$sendFeedbackWithLogsOrAfterTimeout_$ = function($description$jscomp$6$$, $startTime$jscomp$7$$) {
  var $currentTime$$ = Date.now();
  !this.$a$.requestLogsInProgress || 5000 < $currentTime$$ - $startTime$jscomp$7$$ ? $JSCompiler_StaticMethods_doSendFeedbackWithRetry_$$(this, $description$jscomp$6$$) : setTimeout(this.$sendFeedbackWithLogsOrAfterTimeout_$.bind(this), 1000, $description$jscomp$6$$, $startTime$jscomp$7$$);
};
var $JSCompiler_StaticMethods_doSendFeedbackWithRetry_$$ = function($JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$, $description$jscomp$7$$) {
  var $attemptNumber$$ = 0, $sendCallback$$ = function($description$jscomp$7$$, $attemptNumber$$, $sendCallback$$) {
    $sendCallback$$ ? $description$jscomp$7$$(!0) : ($JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$.$a$.sendDialogText = $mr$feedback$Messages$MSG_MR_FEEDBACK_RESENDING$$, $JSCompiler_StaticMethods_safeApply_$$($JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$), $attemptNumber$$(Error("Failed to send")));
  };
  $JSCompiler_StaticMethods_setBackoffFactor$$(new $mr$Retry$$(function() {
    $attemptNumber$$++;
    return new Promise(function($attemptNumber$$, $manifest$jscomp$inline_467_reject$jscomp$3$$) {
      var $callback$jscomp$inline_466_resolve$jscomp$3$$ = $JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$.$a$.userEmail, $productInfo$jscomp$inline_465$$ = $JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$.$b$;
      $attemptNumber$$ = $sendCallback$$.bind(null, $attemptNumber$$, $manifest$jscomp$inline_467_reject$jscomp$3$$);
      $manifest$jscomp$inline_467_reject$jscomp$3$$ = chrome.runtime.getManifest();
      $userfeedback$api$startFeedback$$({productId:85561, bucket:"Canary", flow:"submit", serverUri:"https://www.google.com/tools/feedback", allowNonLoggedInFeedback:!0, locale:$manifest$jscomp$inline_467_reject$jscomp$3$$.default_locale, enableAnonymousFeedback:!$callback$jscomp$inline_466_resolve$jscomp$3$$, report:{description:$description$jscomp$7$$}, callback:$attemptNumber$$}, {version:$manifest$jscomp$inline_467_reject$jscomp$3$$.version, description:$manifest$jscomp$inline_467_reject$jscomp$3$$.description, 
      user_email:$callback$jscomp$inline_466_resolve$jscomp$3$$ || "NA", logs:$productInfo$jscomp$inline_465$$.$logs$ || "NA", external_logs:$productInfo$jscomp$inline_465$$.$a$ || "NA", device_model:$productInfo$jscomp$inline_465$$.modelName || "NA", receiver_version:$productInfo$jscomp$inline_465$$.$h$ || "NA", dash_report_url:$productInfo$jscomp$inline_465$$.$g$ || "NA", cast_device_counts:$productInfo$jscomp$inline_465$$.$b$, dial_device_counts:$productInfo$jscomp$inline_465$$.$f$});
    });
  }, 10000, 4), 2).start().then(function() {
    $JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$.$a$.sendDialogText = $mr$feedback$Messages$MSG_MR_FEEDBACK_SEND_SUCCESS$$;
    $JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$.$a$.feedbackSent = !0;
    $JSCompiler_StaticMethods_safeApply_$$($JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$);
  }, function() {
    $JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$.$a$.sendDialogText = $mr$feedback$Messages$MSG_MR_FEEDBACK_SEND_FAIL$$;
    $JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$.$a$.feedbackSent = !0;
    $JSCompiler_StaticMethods_safeApply_$$($JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$);
  });
};
$FeedbackCtrl$$.prototype.$h$ = function() {
  var $$jscomp$this$jscomp$6$$ = this;
  this.$b$ = new $mr$FeedbackUtils$ProductInfo$$;
  this.$a$.attachLogs && (this.$a$.requestLogsInProgress = !0, chrome.runtime.sendMessage(new $mr$InternalMessage$$(this.$o$, "retrieve_log_data"), function($receiver_response$jscomp$6$$) {
    $$jscomp$this$jscomp$6$$.$a$.requestLogsInProgress = !1;
    $$jscomp$this$jscomp$6$$.$b$.$logs$ = $receiver_response$jscomp$6$$.logs || "no extension";
    $receiver_response$jscomp$6$$.castStreamingLogs && ($$jscomp$this$jscomp$6$$.$b$.$g$ = $receiver_response$jscomp$6$$.castStreamingLogs);
    $receiver_response$jscomp$6$$.castDeviceCounts && ($$jscomp$this$jscomp$6$$.$b$.$b$ = $receiver_response$jscomp$6$$.castDeviceCounts);
    $receiver_response$jscomp$6$$.dialDeviceCounts && ($$jscomp$this$jscomp$6$$.$b$.$f$ = $receiver_response$jscomp$6$$.dialDeviceCounts);
    if ($receiver_response$jscomp$6$$ = $receiver_response$jscomp$6$$.device) {
      if ($receiver_response$jscomp$6$$.model && ($$jscomp$this$jscomp$6$$.$b$.modelName = $receiver_response$jscomp$6$$.model), $receiver_response$jscomp$6$$.version && ($$jscomp$this$jscomp$6$$.$b$.$h$ = $receiver_response$jscomp$6$$.version), !$$jscomp$this$jscomp$6$$.$g$) {
        var $logId$jscomp$1$$ = $goog$string$getRandomString$$();
        $$jscomp$this$jscomp$6$$.$g$ = !0;
        $$jscomp$this$jscomp$6$$.$b$.$a$ = $module$contents$mr$DongleUtils_DongleUtils$requestDeviceToSendLogs$$($receiver_response$jscomp$6$$.ip, $logId$jscomp$1$$, $$jscomp$this$jscomp$6$$.$w$.bind($$jscomp$this$jscomp$6$$));
      }
    }
  }));
};
$FeedbackCtrl$$.prototype.$A$ = function() {
  this.$a$.logs = this.$b$.$logs$;
  this.$a$.logsHeader = $mr$feedback$Messages$MSG_MR_FEEDBACK_LOGS_HEADER$$;
  this.$a$.sendLogs = $mr$feedback$Messages$MSG_MR_FEEDBACK_SEND_LOGS$$;
  this.$a$.fineLogsWarning = $mr$feedback$Messages$MSG_MR_FEEDBACK_FINE_LOGS_WARNING$$;
  this.$a$.okButton = $mr$feedback$Messages$MSG_MR_FEEDBACK_OK$$;
  this.$j$.show({locals:{$attachLogs$:this.$a$.attachLogs, $logs$:this.$a$.logs, $includeFineLogs$:this.$a$.includeFineLogs, $logsHeader$:this.$a$.logsHeader, $sendLogs$:this.$a$.sendLogs, $fineLogsWarning$:this.$a$.fineLogsWarning, $okButton$:this.$a$.okButton}, scope:this.$a$, preserveScope:!0, bindToController:!0, clickOutsideToClose:!0, template:'<md-dialog><md-dialog-content id="logs-dialog"><div class="subheading">{{logsHeader}}</div><div ng-show="includeFineLogs && attachLogs"id="feedback-fine-log-warning" class="informative">{{fineLogsWarning}}</div><pre>{{logs}}</pre><div class="send-logs"><md-checkbox type="checkbox" ng-model="attachLogs"ng-change="attachLogsClick()"><span>{{sendLogs}}</span></md-checkbox></div><md-dialog-actions><md-button class="md-raised md-primary"ng-click="closeDialog()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>', 
  controller:this.$f$});
};
$FeedbackCtrl$$.prototype.$w$ = function($status$jscomp$1$$, $content$jscomp$7$$) {
  this.$g$ = !1;
  this.$b$.$a$ = "error" == $status$jscomp$1$$ ? "" : $content$jscomp$7$$;
  this.$a$.attachLogs || (this.$b$.$a$ = "");
  $JSCompiler_StaticMethods_safeApply_$$(this);
};
var $JSCompiler_StaticMethods_safeApply_$$ = function($JSCompiler_StaticMethods_safeApply_$self$$) {
  $JSCompiler_StaticMethods_safeApply_$self$$.$a$.$$phase || $JSCompiler_StaticMethods_safeApply_$self$$.$a$.$apply();
};
$FeedbackCtrl$$.prototype.$f$ = function($$scope$jscomp$2$$, $$mdDialog$jscomp$1$$) {
  $$scope$jscomp$2$$.closeWindow = function() {
    window.close();
  };
  $$scope$jscomp$2$$.closeDialog = function() {
    $$mdDialog$jscomp$1$$.hide();
  };
};
$FeedbackCtrl$$.prototype.$f$.$inject = ["$scope", "$mdDialog"];
var $FeedbackCtrl$Rating_$$ = function($value$jscomp$125$$, $rating$$) {
  this.id = $value$jscomp$125$$;
  this.desc = $rating$$;
  this.text = 0 == $value$jscomp$125$$ ? $rating$$ : $value$jscomp$125$$ + " (" + $rating$$ + ")";
};
angular.module("feedbackApp", "chrome_18n material.components.button material.components.checkbox material.components.dialog material.components.input material.components.radioButton".split(" ")).controller("FeedbackCtrl", ["$scope", "$mdDialog", $FeedbackCtrl$$]);
$goog$exportSymbol$$("ng.safehtml.googSceHelper.isGoogHtmlType", function($value$jscomp$126$$) {
  return $value$jscomp$126$$ && $value$jscomp$126$$.$implementsGoogStringTypedString$ ? !0 : !1;
});
$goog$exportSymbol$$("ng.safehtml.googSceHelper.isCOMPILED", function() {
  return !0;
});
$goog$exportSymbol$$("ng.safehtml.googSceHelper.unwrapAny", function($value$jscomp$127$$) {
  if ($value$jscomp$127$$ instanceof $goog$html$TrustedResourceUrl$$) {
    return $goog$html$TrustedResourceUrl$unwrap$$($value$jscomp$127$$);
  }
  if ($value$jscomp$127$$ instanceof $goog$html$SafeHtml$$) {
    return $goog$html$SafeHtml$unwrap$$($value$jscomp$127$$);
  }
  if ($value$jscomp$127$$ instanceof $goog$html$SafeUrl$$) {
    return $goog$html$SafeUrl$unwrap$$($value$jscomp$127$$);
  }
  if ($value$jscomp$127$$ instanceof $goog$html$SafeStyle$$) {
    return $goog$html$SafeStyle$unwrap$$($value$jscomp$127$$);
  }
  if ($value$jscomp$127$$ instanceof $goog$html$SafeScript$$) {
    return $goog$html$SafeScript$unwrap$$($value$jscomp$127$$);
  }
  throw Error();
});
$goog$exportSymbol$$("ng.safehtml.googSceHelper.unwrapGivenContext", function($type$jscomp$126$$, $maybeTrusted$jscomp$7$$) {
  if ("html" == $type$jscomp$126$$) {
    return $goog$html$SafeHtml$unwrap$$($maybeTrusted$jscomp$7$$);
  }
  if ("resourceUrl" == $type$jscomp$126$$ || "templateUrl" == $type$jscomp$126$$) {
    return $goog$html$TrustedResourceUrl$unwrap$$($maybeTrusted$jscomp$7$$);
  }
  if ("url" == $type$jscomp$126$$) {
    return $maybeTrusted$jscomp$7$$ instanceof $goog$html$TrustedResourceUrl$$ ? $goog$html$TrustedResourceUrl$unwrap$$($maybeTrusted$jscomp$7$$) : $goog$html$SafeUrl$unwrap$$($maybeTrusted$jscomp$7$$);
  }
  if ("css" == $type$jscomp$126$$) {
    return $goog$html$SafeStyle$unwrap$$($maybeTrusted$jscomp$7$$);
  }
  if ("js" == $type$jscomp$126$$) {
    return $goog$html$SafeScript$unwrap$$($maybeTrusted$jscomp$7$$);
  }
  throw Error();
});

