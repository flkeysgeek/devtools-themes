(function(){'use strict';var $JSCompiler_prototypeAlias$$, $$jscomp$inherits$$ = function($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$;
  for (var $p$$ in $parentCtor$$) {
    if (Object.defineProperties) {
      var $descriptor$jscomp$1$$ = Object.getOwnPropertyDescriptor($parentCtor$$, $p$$);
      $descriptor$jscomp$1$$ && Object.defineProperty($childCtor$$, $p$$, $descriptor$jscomp$1$$);
    } else {
      $childCtor$$[$p$$] = $parentCtor$$[$p$$];
    }
  }
}, $$jscomp$defineProperty$$ = "function" == typeof Object.defineProperties ? Object.defineProperty : function($target$jscomp$57$$, $property$jscomp$4$$, $descriptor$jscomp$2$$) {
  $target$jscomp$57$$ != Array.prototype && $target$jscomp$57$$ != Object.prototype && ($target$jscomp$57$$[$property$jscomp$4$$] = $descriptor$jscomp$2$$.value);
}, $$jscomp$global$$ = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, $$jscomp$initSymbol$$ = function() {
  $$jscomp$initSymbol$$ = function() {
  };
  $$jscomp$global$$.Symbol || ($$jscomp$global$$.Symbol = $$jscomp$Symbol$$);
}, $$jscomp$symbolCounter_$$ = 0, $$jscomp$Symbol$$ = function($opt_description$jscomp$1$$) {
  return "jscomp_symbol_" + ($opt_description$jscomp$1$$ || "") + $$jscomp$symbolCounter_$$++;
}, $$jscomp$initSymbolIterator$$ = function() {
  $$jscomp$initSymbol$$();
  var $symbolIterator$$ = $$jscomp$global$$.Symbol.iterator;
  $symbolIterator$$ || ($symbolIterator$$ = $$jscomp$global$$.Symbol.iterator = $$jscomp$global$$.Symbol("iterator"));
  "function" != typeof Array.prototype[$symbolIterator$$] && $$jscomp$defineProperty$$(Array.prototype, $symbolIterator$$, {configurable:!0, writable:!0, value:function() {
    return $$jscomp$arrayIterator$$(this);
  }});
  $$jscomp$initSymbolIterator$$ = function() {
  };
}, $$jscomp$arrayIterator$$ = function($array$jscomp$5$$) {
  var $index$jscomp$46$$ = 0;
  return $$jscomp$iteratorPrototype$$(function() {
    return $index$jscomp$46$$ < $array$jscomp$5$$.length ? {done:!1, value:$array$jscomp$5$$[$index$jscomp$46$$++]} : {done:!0};
  });
}, $$jscomp$iteratorPrototype$$ = function($iterator$jscomp$6_next$$) {
  $$jscomp$initSymbolIterator$$();
  $iterator$jscomp$6_next$$ = {next:$iterator$jscomp$6_next$$};
  $iterator$jscomp$6_next$$[$$jscomp$global$$.Symbol.iterator] = function() {
    return this;
  };
  return $iterator$jscomp$6_next$$;
}, $$jscomp$makeIterator$$ = function($iterable$jscomp$2$$) {
  $$jscomp$initSymbolIterator$$();
  var $iteratorFunction$$ = $iterable$jscomp$2$$[Symbol.iterator];
  return $iteratorFunction$$ ? $iteratorFunction$$.call($iterable$jscomp$2$$) : $$jscomp$arrayIterator$$($iterable$jscomp$2$$);
}, $goog$global$$ = this, $goog$isString$$ = function($val$jscomp$2$$) {
  return "string" == typeof $val$jscomp$2$$;
}, $goog$nullFunction$$ = function() {
}, $goog$typeOf$$ = function($value$jscomp$77$$) {
  var $s$jscomp$2$$ = typeof $value$jscomp$77$$;
  if ("object" == $s$jscomp$2$$) {
    if ($value$jscomp$77$$) {
      if ($value$jscomp$77$$ instanceof Array) {
        return "array";
      }
      if ($value$jscomp$77$$ instanceof Object) {
        return $s$jscomp$2$$;
      }
      var $className$jscomp$1$$ = Object.prototype.toString.call($value$jscomp$77$$);
      if ("[object Window]" == $className$jscomp$1$$) {
        return "object";
      }
      if ("[object Array]" == $className$jscomp$1$$ || "number" == typeof $value$jscomp$77$$.length && "undefined" != typeof $value$jscomp$77$$.splice && "undefined" != typeof $value$jscomp$77$$.propertyIsEnumerable && !$value$jscomp$77$$.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == $className$jscomp$1$$ || "undefined" != typeof $value$jscomp$77$$.call && "undefined" != typeof $value$jscomp$77$$.propertyIsEnumerable && !$value$jscomp$77$$.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == $s$jscomp$2$$ && "undefined" == typeof $value$jscomp$77$$.call) {
      return "object";
    }
  }
  return $s$jscomp$2$$;
}, $goog$isArrayLike$$ = function($val$jscomp$8$$) {
  var $type$jscomp$108$$ = $goog$typeOf$$($val$jscomp$8$$);
  return "array" == $type$jscomp$108$$ || "object" == $type$jscomp$108$$ && "number" == typeof $val$jscomp$8$$.length;
}, $goog$UID_PROPERTY_$$ = "closure_uid_" + (1e9 * Math.random() >>> 0), $goog$uidCounter_$$ = 0, $goog$bindNative_$$ = function($fn$jscomp$2$$, $selfObj$jscomp$1$$, $var_args$jscomp$46$$) {
  return $fn$jscomp$2$$.call.apply($fn$jscomp$2$$.bind, arguments);
}, $goog$bindJs_$$ = function($fn$jscomp$3$$, $selfObj$jscomp$2$$, $var_args$jscomp$47$$) {
  if (!$fn$jscomp$3$$) {
    throw Error();
  }
  if (2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $var_args$jscomp$47$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($var_args$jscomp$47$$, $boundArgs$$);
      return $fn$jscomp$3$$.apply($selfObj$jscomp$2$$, $var_args$jscomp$47$$);
    };
  }
  return function() {
    return $fn$jscomp$3$$.apply($selfObj$jscomp$2$$, arguments);
  };
}, $goog$bind$$ = function($fn$jscomp$4$$, $selfObj$jscomp$3$$, $var_args$jscomp$48$$) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bind$$ = $goog$bindNative_$$ : $goog$bind$$ = $goog$bindJs_$$;
  return $goog$bind$$.apply(null, arguments);
}, $goog$exportSymbol$$ = function($parts$jscomp$inline_33_publicPath$$, $object$$) {
  $parts$jscomp$inline_33_publicPath$$ = $parts$jscomp$inline_33_publicPath$$.split(".");
  var $cur$jscomp$inline_34$$ = $goog$global$$;
  $parts$jscomp$inline_33_publicPath$$[0] in $cur$jscomp$inline_34$$ || !$cur$jscomp$inline_34$$.execScript || $cur$jscomp$inline_34$$.execScript("var " + $parts$jscomp$inline_33_publicPath$$[0]);
  for (var $part$jscomp$inline_35$$; $parts$jscomp$inline_33_publicPath$$.length && ($part$jscomp$inline_35$$ = $parts$jscomp$inline_33_publicPath$$.shift());) {
    $parts$jscomp$inline_33_publicPath$$.length || void 0 === $object$$ ? $cur$jscomp$inline_34$$[$part$jscomp$inline_35$$] && $cur$jscomp$inline_34$$[$part$jscomp$inline_35$$] !== Object.prototype[$part$jscomp$inline_35$$] ? $cur$jscomp$inline_34$$ = $cur$jscomp$inline_34$$[$part$jscomp$inline_35$$] : $cur$jscomp$inline_34$$ = $cur$jscomp$inline_34$$[$part$jscomp$inline_35$$] = {} : $cur$jscomp$inline_34$$[$part$jscomp$inline_35$$] = $object$$;
  }
}, $goog$inherits$$ = function($childCtor$jscomp$1$$, $parentCtor$jscomp$1$$) {
  function $tempCtor$jscomp$1$$() {
  }
  $tempCtor$jscomp$1$$.prototype = $parentCtor$jscomp$1$$.prototype;
  $childCtor$jscomp$1$$.$superClass_$ = $parentCtor$jscomp$1$$.prototype;
  $childCtor$jscomp$1$$.prototype = new $tempCtor$jscomp$1$$;
  $childCtor$jscomp$1$$.prototype.constructor = $childCtor$jscomp$1$$;
  $childCtor$jscomp$1$$.$base$ = function($childCtor$jscomp$1$$, $tempCtor$jscomp$1$$, $var_args$jscomp$50$$) {
    for (var $me$$ = Array(arguments.length - 2), $methodName$$ = 2; $methodName$$ < arguments.length; $methodName$$++) {
      $me$$[$methodName$$ - 2] = arguments[$methodName$$];
    }
    return $parentCtor$jscomp$1$$.prototype[$tempCtor$jscomp$1$$].apply($childCtor$jscomp$1$$, $me$$);
  };
};
var chrome = chrome || window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
chrome.cast.VERSION = [1, 2];
$goog$exportSymbol$$("chrome.cast.VERSION", chrome.cast.VERSION);
chrome.cast.$usingPresentationApi$ = !0;
$goog$exportSymbol$$("chrome.cast.usingPresentationApi", chrome.cast.$usingPresentationApi$);
chrome.cast.Error = function($code$jscomp$5$$, $opt_description$jscomp$2$$, $opt_details$$) {
  this.code = $code$jscomp$5$$;
  this.description = $opt_description$jscomp$2$$ || null;
  this.details = $opt_details$$ || null;
};
$goog$exportSymbol$$("chrome.cast.Error", chrome.cast.Error);
chrome.cast.$SenderApplication$ = function($platform$$) {
  this.platform = $platform$$;
  this.packageId = this.url = null;
};
$goog$exportSymbol$$("chrome.cast.SenderApplication", chrome.cast.$SenderApplication$);
chrome.cast.Image = function($url$jscomp$26$$) {
  this.url = $url$jscomp$26$$;
  this.width = this.height = null;
};
$goog$exportSymbol$$("chrome.cast.Image", chrome.cast.Image);
chrome.cast.Volume = function($opt_level$$, $opt_muted$$) {
  this.level = void 0 !== $opt_level$$ ? $opt_level$$ : null;
  this.muted = void 0 !== $opt_muted$$ ? $opt_muted$$ : null;
};
$goog$exportSymbol$$("chrome.cast.Volume", chrome.cast.Volume);
var $goog$string$subs$$ = function($str$jscomp$16$$, $var_args$jscomp$52$$) {
  for (var $splitParts$$ = $str$jscomp$16$$.split("%s"), $returnString$$ = "", $subsArguments$$ = Array.prototype.slice.call(arguments, 1); $subsArguments$$.length && 1 < $splitParts$$.length;) {
    $returnString$$ += $splitParts$$.shift() + $subsArguments$$.shift();
  }
  return $returnString$$ + $splitParts$$.join("%s");
}, $goog$string$trim$$ = String.prototype.trim ? function($str$jscomp$30$$) {
  return $str$jscomp$30$$.trim();
} : function($str$jscomp$31$$) {
  return $str$jscomp$31$$.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}, $goog$string$AMP_RE_$$ = /&/g, $goog$string$LT_RE_$$ = /</g, $goog$string$GT_RE_$$ = />/g, $goog$string$QUOT_RE_$$ = /"/g, $goog$string$SINGLE_QUOTE_RE_$$ = /'/g, $goog$string$NULL_RE_$$ = /\x00/g, $goog$string$ALL_RE_$$ = /[\x00&<>"']/, $goog$string$unescapeEntitiesUsingDom_$$ = function($str$jscomp$40$$) {
  var $seen$$ = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'};
  var $div$$ = $goog$global$$.document.createElement("div");
  return $str$jscomp$40$$.replace($goog$string$HTML_ENTITY_PATTERN_$$, function($str$jscomp$40$$, $entity_n$jscomp$3$$) {
    var $s$jscomp$3$$ = $seen$$[$str$jscomp$40$$];
    if ($s$jscomp$3$$) {
      return $s$jscomp$3$$;
    }
    "#" == $entity_n$jscomp$3$$.charAt(0) && ($entity_n$jscomp$3$$ = Number("0" + $entity_n$jscomp$3$$.substr(1)), isNaN($entity_n$jscomp$3$$) || ($s$jscomp$3$$ = String.fromCharCode($entity_n$jscomp$3$$)));
    $s$jscomp$3$$ || ($div$$.innerHTML = $str$jscomp$40$$ + " ", $s$jscomp$3$$ = $div$$.firstChild.nodeValue.slice(0, -1));
    return $seen$$[$str$jscomp$40$$] = $s$jscomp$3$$;
  });
}, $goog$string$unescapePureXmlEntities_$$ = function($str$jscomp$41$$) {
  return $str$jscomp$41$$.replace(/&([^;]+);/g, function($str$jscomp$41$$, $entity$jscomp$1_n$jscomp$4$$) {
    switch($entity$jscomp$1_n$jscomp$4$$) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        return "#" != $entity$jscomp$1_n$jscomp$4$$.charAt(0) || ($entity$jscomp$1_n$jscomp$4$$ = Number("0" + $entity$jscomp$1_n$jscomp$4$$.substr(1)), isNaN($entity$jscomp$1_n$jscomp$4$$)) ? $str$jscomp$41$$ : String.fromCharCode($entity$jscomp$1_n$jscomp$4$$);
    }
  });
}, $goog$string$HTML_ENTITY_PATTERN_$$ = /&([^;\s<&]+);?/g, $goog$string$compareElements_$$ = function($left$jscomp$3$$, $right$jscomp$2$$) {
  return $left$jscomp$3$$ < $right$jscomp$2$$ ? -1 : $left$jscomp$3$$ > $right$jscomp$2$$ ? 1 : 0;
};
chrome.cast.$AutoJoinPolicy$ = {CUSTOM_CONTROLLER_SCOPED:"custom_controller_scoped", TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
$goog$exportSymbol$$("chrome.cast.AutoJoinPolicy", chrome.cast.$AutoJoinPolicy$);
chrome.cast.$DefaultActionPolicy$ = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
$goog$exportSymbol$$("chrome.cast.DefaultActionPolicy", chrome.cast.$DefaultActionPolicy$);
chrome.cast.$Capability$ = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in", MULTIZONE_GROUP:"multizone_group"};
$goog$exportSymbol$$("chrome.cast.Capability", chrome.cast.$Capability$);
chrome.cast.$ErrorCode$ = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
$goog$exportSymbol$$("chrome.cast.ErrorCode", chrome.cast.$ErrorCode$);
chrome.cast.$ReceiverAvailability$ = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
$goog$exportSymbol$$("chrome.cast.ReceiverAvailability", chrome.cast.$ReceiverAvailability$);
chrome.cast.$SenderPlatform$ = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
$goog$exportSymbol$$("chrome.cast.SenderPlatform", chrome.cast.$SenderPlatform$);
chrome.cast.$ReceiverType$ = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
$goog$exportSymbol$$("chrome.cast.ReceiverType", chrome.cast.$ReceiverType$);
chrome.cast.$DialAppState$ = {RUNNING:"running", STOPPED:"stopped", ERROR:"error"};
$goog$exportSymbol$$("chrome.cast.DialAppState", chrome.cast.$DialAppState$);
chrome.cast.$ReceiverAction$ = {CAST:"cast", STOP:"stop"};
$goog$exportSymbol$$("chrome.cast.ReceiverAction", chrome.cast.$ReceiverAction$);
chrome.cast.$SessionStatus$ = {CONNECTED:"connected", DISCONNECTED:"disconnected", STOPPED:"stopped"};
$goog$exportSymbol$$("chrome.cast.SessionStatus", chrome.cast.$SessionStatus$);
chrome.cast.$VolumeControlType$ = {ATTENUATION:"attenuation", FIXED:"fixed", MASTER:"master"};
$goog$exportSymbol$$("chrome.cast.VolumeControlType", chrome.cast.$VolumeControlType$);
chrome.cast.$ApiConfig$ = function($sessionRequest$$, $sessionListener$$, $receiverListener$$, $opt_autoJoinPolicy$$, $opt_defaultActionPolicy$$) {
  this.sessionRequest = $sessionRequest$$;
  this.sessionListener = $sessionListener$$;
  this.receiverListener = $receiverListener$$;
  this.autoJoinPolicy = $opt_autoJoinPolicy$$ || chrome.cast.$AutoJoinPolicy$.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = $opt_defaultActionPolicy$$ || chrome.cast.$DefaultActionPolicy$.CREATE_SESSION;
  this.customDialLaunchCallback = null;
  this.invisibleSender = !1;
  this.additionalSessionRequests = [];
};
$goog$exportSymbol$$("chrome.cast.ApiConfig", chrome.cast.$ApiConfig$);
chrome.cast.$DialRequest$ = function($appName$$, $opt_launchParameter$$) {
  this.appName = $appName$$;
  this.launchParameter = $opt_launchParameter$$ || null;
};
$goog$exportSymbol$$("chrome.cast.DialRequest", chrome.cast.$DialRequest$);
chrome.cast.$DialLaunchData$ = function($receiver$$, $appState$$, $opt_extraData$$) {
  this.receiver = $receiver$$;
  this.appState = $appState$$;
  this.extraData = $opt_extraData$$ || null;
};
$goog$exportSymbol$$("chrome.cast.DialLaunchData", chrome.cast.$DialLaunchData$);
chrome.cast.$DialLaunchResponse$ = function($doLaunch$$, $opt_launchParameter$jscomp$1$$) {
  this.doLaunch = $doLaunch$$;
  this.launchParameter = $opt_launchParameter$jscomp$1$$ || null;
};
$goog$exportSymbol$$("chrome.cast.DialLaunchResponse", chrome.cast.$DialLaunchResponse$);
chrome.cast.$SessionRequest$ = function($appId$$, $opt_capabilities$$, $opt_timeout$$) {
  this.appId = $appId$$;
  this.capabilities = "array" == $goog$typeOf$$($opt_capabilities$$) ? $opt_capabilities$$ : [chrome.cast.$Capability$.VIDEO_OUT, chrome.cast.$Capability$.AUDIO_OUT];
  this.requestSessionTimeout = $opt_timeout$$ || chrome.cast.timeout.requestSession;
  this.dialRequest = this.language = null;
};
$goog$exportSymbol$$("chrome.cast.SessionRequest", chrome.cast.$SessionRequest$);
chrome.cast.$Receiver$ = function($label$jscomp$4_str$jscomp$inline_37$$, $friendlyName$$, $opt_capabilities$jscomp$1$$, $opt_volume$$) {
  this.label = $label$jscomp$4_str$jscomp$inline_37$$;
  $label$jscomp$4_str$jscomp$inline_37$$ = $friendlyName$$;
  $goog$string$ALL_RE_$$.test($label$jscomp$4_str$jscomp$inline_37$$) && (-1 != $label$jscomp$4_str$jscomp$inline_37$$.indexOf("&") && ($label$jscomp$4_str$jscomp$inline_37$$ = $label$jscomp$4_str$jscomp$inline_37$$.replace($goog$string$AMP_RE_$$, "&amp;")), -1 != $label$jscomp$4_str$jscomp$inline_37$$.indexOf("<") && ($label$jscomp$4_str$jscomp$inline_37$$ = $label$jscomp$4_str$jscomp$inline_37$$.replace($goog$string$LT_RE_$$, "&lt;")), -1 != $label$jscomp$4_str$jscomp$inline_37$$.indexOf(">") && 
  ($label$jscomp$4_str$jscomp$inline_37$$ = $label$jscomp$4_str$jscomp$inline_37$$.replace($goog$string$GT_RE_$$, "&gt;")), -1 != $label$jscomp$4_str$jscomp$inline_37$$.indexOf('"') && ($label$jscomp$4_str$jscomp$inline_37$$ = $label$jscomp$4_str$jscomp$inline_37$$.replace($goog$string$QUOT_RE_$$, "&quot;")), -1 != $label$jscomp$4_str$jscomp$inline_37$$.indexOf("'") && ($label$jscomp$4_str$jscomp$inline_37$$ = $label$jscomp$4_str$jscomp$inline_37$$.replace($goog$string$SINGLE_QUOTE_RE_$$, "&#39;")), 
  -1 != $label$jscomp$4_str$jscomp$inline_37$$.indexOf("\x00") && ($label$jscomp$4_str$jscomp$inline_37$$ = $label$jscomp$4_str$jscomp$inline_37$$.replace($goog$string$NULL_RE_$$, "&#0;")));
  this.friendlyName = $label$jscomp$4_str$jscomp$inline_37$$;
  this.capabilities = $opt_capabilities$jscomp$1$$ || [];
  this.volume = $opt_volume$$ || null;
  this.receiverType = chrome.cast.$ReceiverType$.CAST;
  this.displayStatus = this.isActiveInput = null;
};
$goog$exportSymbol$$("chrome.cast.Receiver", chrome.cast.$Receiver$);
chrome.cast.$ReceiverDisplayStatus$ = function($statusText$$, $appImages$$) {
  this.statusText = $statusText$$;
  this.appImages = $appImages$$;
  this.showStop = null;
};
$goog$exportSymbol$$("chrome.cast.ReceiverDisplayStatus", chrome.cast.$ReceiverDisplayStatus$);
chrome.cast.$Timeout$ = function() {
  this.requestSession = 60000;
  this.sendCustomMessage = this.setReceiverVolume = this.stopSession = this.leaveSession = 3000;
};
$goog$exportSymbol$$("chrome.cast.Timeout", chrome.cast.$Timeout$);
chrome.cast.timeout = new chrome.cast.$Timeout$;
$goog$exportSymbol$$("chrome.cast.timeout", chrome.cast.timeout);
chrome.cast.$AUTO_JOIN_PRESENTATION_ID$ = "auto-join";
chrome.cast.$PRESENTATION_ID_PREFIX$ = "cast-session_";
chrome.cast.media.$MediaCommand$ = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
$goog$exportSymbol$$("chrome.cast.media.MediaCommand", chrome.cast.media.$MediaCommand$);
chrome.cast.media.$MetadataType$ = {GENERIC:0, MOVIE:1, TV_SHOW:2, MUSIC_TRACK:3, PHOTO:4};
$goog$exportSymbol$$("chrome.cast.media.MetadataType", chrome.cast.media.$MetadataType$);
chrome.cast.media.$PlayerState$ = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
$goog$exportSymbol$$("chrome.cast.media.PlayerState", chrome.cast.media.$PlayerState$);
chrome.cast.media.$RepeatMode$ = {OFF:"REPEAT_OFF", ALL:"REPEAT_ALL", SINGLE:"REPEAT_SINGLE", ALL_AND_SHUFFLE:"REPEAT_ALL_AND_SHUFFLE"};
$goog$exportSymbol$$("chrome.cast.media.RepeatMode", chrome.cast.media.$RepeatMode$);
chrome.cast.media.$ResumeState$ = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
$goog$exportSymbol$$("chrome.cast.media.ResumeState", chrome.cast.media.$ResumeState$);
chrome.cast.media.$StreamType$ = {BUFFERED:"BUFFERED", LIVE:"LIVE", OTHER:"OTHER"};
$goog$exportSymbol$$("chrome.cast.media.StreamType", chrome.cast.media.$StreamType$);
chrome.cast.media.$IdleReason$ = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
$goog$exportSymbol$$("chrome.cast.media.IdleReason", chrome.cast.media.$IdleReason$);
chrome.cast.media.$TrackType$ = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
$goog$exportSymbol$$("chrome.cast.media.TrackType", chrome.cast.media.$TrackType$);
chrome.cast.media.$TextTrackType$ = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
$goog$exportSymbol$$("chrome.cast.media.TextTrackType", chrome.cast.media.$TextTrackType$);
chrome.cast.media.$TextTrackEdgeType$ = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
$goog$exportSymbol$$("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.$TextTrackEdgeType$);
chrome.cast.media.$TextTrackWindowType$ = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
$goog$exportSymbol$$("chrome.cast.media.TextTrackWindowType", chrome.cast.media.$TextTrackWindowType$);
chrome.cast.media.$TextTrackFontGenericFamily$ = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
$goog$exportSymbol$$("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.$TextTrackFontGenericFamily$);
chrome.cast.media.$TextTrackFontStyle$ = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
$goog$exportSymbol$$("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.$TextTrackFontStyle$);
chrome.cast.media.$GetStatusRequest$ = function() {
  this.customData = null;
};
$goog$exportSymbol$$("chrome.cast.media.GetStatusRequest", chrome.cast.media.$GetStatusRequest$);
chrome.cast.media.$PauseRequest$ = function() {
  this.customData = null;
};
$goog$exportSymbol$$("chrome.cast.media.PauseRequest", chrome.cast.media.$PauseRequest$);
chrome.cast.media.$PlayRequest$ = function() {
  this.customData = null;
};
$goog$exportSymbol$$("chrome.cast.media.PlayRequest", chrome.cast.media.$PlayRequest$);
chrome.cast.media.$SeekRequest$ = function() {
  this.customData = this.resumeState = this.currentTime = null;
};
$goog$exportSymbol$$("chrome.cast.media.SeekRequest", chrome.cast.media.$SeekRequest$);
chrome.cast.media.$StopRequest$ = function() {
  this.customData = null;
};
$goog$exportSymbol$$("chrome.cast.media.StopRequest", chrome.cast.media.$StopRequest$);
chrome.cast.media.$VolumeRequest$ = function($volume$$) {
  this.volume = $volume$$;
  this.customData = null;
};
$goog$exportSymbol$$("chrome.cast.media.VolumeRequest", chrome.cast.media.$VolumeRequest$);
chrome.cast.media.$LoadRequest$ = function($mediaInfo$$) {
  this.type = "LOAD";
  this.requestId = 0;
  this.sessionId = null;
  this.media = $mediaInfo$$;
  this.activeTrackIds = null;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
$goog$exportSymbol$$("chrome.cast.media.LoadRequest", chrome.cast.media.$LoadRequest$);
chrome.cast.media.$PrecacheRequest$ = function($data$jscomp$44$$) {
  this.type = "PRECACHE";
  this.requestId = 0;
  this.data = $data$jscomp$44$$;
};
chrome.cast.media.$EditTracksInfoRequest$ = function($opt_activeTrackIds$$, $opt_textTrackStyle$$) {
  this.requestId = 0;
  this.activeTrackIds = $opt_activeTrackIds$$ || null;
  this.textTrackStyle = $opt_textTrackStyle$$ || null;
};
$goog$exportSymbol$$("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.$EditTracksInfoRequest$);
chrome.cast.media.$GenericMediaMetadata$ = function() {
  this.metadataType = this.type = chrome.cast.media.$MetadataType$.GENERIC;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null;
};
$goog$exportSymbol$$("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.$GenericMediaMetadata$);
chrome.cast.media.$MovieMediaMetadata$ = function() {
  this.metadataType = this.type = chrome.cast.media.$MetadataType$.MOVIE;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
$goog$exportSymbol$$("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.$MovieMediaMetadata$);
chrome.cast.media.$TvShowMediaMetadata$ = function() {
  this.metadataType = this.type = chrome.cast.media.$MetadataType$.TV_SHOW;
  this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null;
};
$goog$exportSymbol$$("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.$TvShowMediaMetadata$);
chrome.cast.media.$MusicTrackMediaMetadata$ = function() {
  this.metadataType = this.type = chrome.cast.media.$MetadataType$.MUSIC_TRACK;
  this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null;
};
$goog$exportSymbol$$("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.$MusicTrackMediaMetadata$);
chrome.cast.media.$PhotoMediaMetadata$ = function() {
  this.metadataType = this.type = chrome.cast.media.$MetadataType$.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
$goog$exportSymbol$$("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.$PhotoMediaMetadata$);
chrome.cast.media.$MediaInfo$ = function($contentId$$, $contentType$jscomp$2$$) {
  this.contentId = $contentId$$;
  this.streamType = chrome.cast.media.$StreamType$.BUFFERED;
  this.contentType = $contentType$jscomp$2$$;
  this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = null;
};
$goog$exportSymbol$$("chrome.cast.media.MediaInfo", chrome.cast.media.$MediaInfo$);
chrome.cast.media.$QueueItem$ = function($mediaInfo$jscomp$1$$) {
  this.itemId = null;
  this.media = $mediaInfo$jscomp$1$$;
  this.autoplay = !0;
  this.startTime = 0;
  this.playbackDuration = null;
  this.preloadTime = 0;
  this.customData = this.activeTrackIds = null;
};
$goog$exportSymbol$$("chrome.cast.media.QueueItem", chrome.cast.media.$QueueItem$);
chrome.cast.media.$DEFAULT_MEDIA_RECEIVER_APP_ID$ = "CC1AD845";
$goog$exportSymbol$$("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.$DEFAULT_MEDIA_RECEIVER_APP_ID$);
chrome.cast.media.timeout = {};
chrome.cast.media.timeout.load = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.load", chrome.cast.media.timeout.load);
chrome.cast.media.timeout.$getStatus$ = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.getStatus", chrome.cast.media.timeout.$getStatus$);
chrome.cast.media.timeout.play = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.play", chrome.cast.media.timeout.play);
chrome.cast.media.timeout.pause = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.pause", chrome.cast.media.timeout.pause);
chrome.cast.media.timeout.seek = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.seek", chrome.cast.media.timeout.seek);
chrome.cast.media.timeout.stop = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.stop", chrome.cast.media.timeout.stop);
chrome.cast.media.timeout.$setVolume$ = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.setVolume", chrome.cast.media.timeout.$setVolume$);
chrome.cast.media.timeout.$editTracksInfo$ = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.editTracksInfo", chrome.cast.media.timeout.$editTracksInfo$);
chrome.cast.media.timeout.$queue$ = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.queue", chrome.cast.media.timeout.$queue$);
chrome.cast.media.$Track$ = function($trackId$jscomp$1$$, $trackType$$) {
  this.trackId = $trackId$jscomp$1$$;
  this.trackContentType = this.trackContentId = null;
  this.type = $trackType$$;
  this.customData = this.subtype = this.language = this.name = null;
};
$goog$exportSymbol$$("chrome.cast.media.Track", chrome.cast.media.$Track$);
chrome.cast.media.$TextTrackStyle$ = function() {
  this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null;
};
$goog$exportSymbol$$("chrome.cast.media.TextTrackStyle", chrome.cast.media.$TextTrackStyle$);
chrome.cast.media.$QueueLoadRequest$ = function($items$jscomp$1$$) {
  this.type = "QUEUE_LOAD";
  this.sessionId = this.requestId = null;
  this.items = $items$jscomp$1$$;
  this.startIndex = 0;
  this.repeatMode = chrome.cast.media.$RepeatMode$.OFF;
  this.customData = null;
};
$goog$exportSymbol$$("chrome.cast.media.QueueLoadRequest", chrome.cast.media.$QueueLoadRequest$);
chrome.cast.media.$QueueInsertItemsRequest$ = function($itemsToInsert$$) {
  this.type = "QUEUE_INSERT";
  this.sessionId = this.requestId = null;
  this.items = $itemsToInsert$$;
  this.customData = this.insertBefore = null;
};
$goog$exportSymbol$$("chrome.cast.media.QueueInsertItemsRequest", chrome.cast.media.$QueueInsertItemsRequest$);
chrome.cast.media.$QueueUpdateItemsRequest$ = function($itemsToUpdate$$) {
  this.type = "QUEUE_UPDATE";
  this.sessionId = this.requestId = null;
  this.items = $itemsToUpdate$$;
  this.customData = null;
};
$goog$exportSymbol$$("chrome.cast.media.QueueUpdateItemsRequest", chrome.cast.media.$QueueUpdateItemsRequest$);
chrome.cast.media.$QueueJumpRequest$ = function() {
  this.type = "QUEUE_UPDATE";
  this.customData = this.jump = this.currentItemId = this.sessionId = this.requestId = null;
};
$goog$exportSymbol$$("chrome.cast.media.QueueJumpRequest", chrome.cast.media.$QueueJumpRequest$);
chrome.cast.media.$QueueSetPropertiesRequest$ = function() {
  this.type = "QUEUE_UPDATE";
  this.customData = this.repeatMode = this.sessionId = this.requestId = null;
};
$goog$exportSymbol$$("chrome.cast.media.QueueSetPropertiesRequest", chrome.cast.media.$QueueSetPropertiesRequest$);
chrome.cast.media.$QueueRemoveItemsRequest$ = function($itemIdsToRemove$$) {
  this.type = "QUEUE_REMOVE";
  this.sessionId = this.requestId = null;
  this.itemIds = $itemIdsToRemove$$;
  this.customData = null;
};
$goog$exportSymbol$$("chrome.cast.media.QueueRemoveItemsRequest", chrome.cast.media.$QueueRemoveItemsRequest$);
chrome.cast.media.$QueueReorderItemsRequest$ = function($itemIdsToReorder$$) {
  this.type = "QUEUE_REORDER";
  this.sessionId = this.requestId = null;
  this.itemIds = $itemIdsToReorder$$;
  this.customData = this.insertBefore = null;
};
$goog$exportSymbol$$("chrome.cast.media.QueueReorderItemsRequest", chrome.cast.media.$QueueReorderItemsRequest$);
var $goog$debug$Error$$ = function($opt_msg$$) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, $goog$debug$Error$$);
  } else {
    var $stack$$ = Error().stack;
    $stack$$ && (this.stack = $stack$$);
  }
  $opt_msg$$ && (this.message = String($opt_msg$$));
};
$goog$inherits$$($goog$debug$Error$$, Error);
$goog$debug$Error$$.prototype.name = "CustomError";
var $goog$asserts$AssertionError$$ = function($messagePattern$$, $messageArgs$$) {
  $messageArgs$$.unshift($messagePattern$$);
  $goog$debug$Error$$.call(this, $goog$string$subs$$.apply(null, $messageArgs$$));
  $messageArgs$$.shift();
};
$goog$inherits$$($goog$asserts$AssertionError$$, $goog$debug$Error$$);
$goog$asserts$AssertionError$$.prototype.name = "AssertionError";
var $goog$asserts$doAssertFailure_$$ = function($defaultMessage$$, $defaultArgs$$, $givenMessage$$, $givenArgs$$) {
  var $message$jscomp$34$$ = "Assertion failed";
  if ($givenMessage$$) {
    $message$jscomp$34$$ += ": " + $givenMessage$$;
    var $args$jscomp$3$$ = $givenArgs$$;
  } else {
    $defaultMessage$$ && ($message$jscomp$34$$ += ": " + $defaultMessage$$, $args$jscomp$3$$ = $defaultArgs$$);
  }
  throw new $goog$asserts$AssertionError$$("" + $message$jscomp$34$$, $args$jscomp$3$$ || []);
}, $goog$asserts$assert$$ = function($condition$jscomp$1$$, $opt_message$jscomp$8$$, $var_args$jscomp$54$$) {
  $condition$jscomp$1$$ || $goog$asserts$doAssertFailure_$$("", null, $opt_message$jscomp$8$$, Array.prototype.slice.call(arguments, 2));
  return $condition$jscomp$1$$;
}, $goog$asserts$assertNumber$$ = function($value$jscomp$80$$, $opt_message$jscomp$10$$, $var_args$jscomp$56$$) {
  "number" == typeof $value$jscomp$80$$ || $goog$asserts$doAssertFailure_$$("Expected number but got %s: %s.", [$goog$typeOf$$($value$jscomp$80$$), $value$jscomp$80$$], $opt_message$jscomp$10$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$80$$;
};
var $goog$array$forEach$$ = Array.prototype.forEach ? function($arr$jscomp$12$$, $f$jscomp$1$$, $opt_obj$jscomp$3$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$12$$.length);
  Array.prototype.forEach.call($arr$jscomp$12$$, $f$jscomp$1$$, $opt_obj$jscomp$3$$);
} : function($arr$jscomp$13$$, $f$jscomp$2$$, $opt_obj$jscomp$4$$) {
  for (var $l$jscomp$2$$ = $arr$jscomp$13$$.length, $arr2$$ = $goog$isString$$($arr$jscomp$13$$) ? $arr$jscomp$13$$.split("") : $arr$jscomp$13$$, $i$jscomp$21$$ = 0; $i$jscomp$21$$ < $l$jscomp$2$$; $i$jscomp$21$$++) {
    $i$jscomp$21$$ in $arr2$$ && $f$jscomp$2$$.call($opt_obj$jscomp$4$$, $arr2$$[$i$jscomp$21$$], $i$jscomp$21$$, $arr$jscomp$13$$);
  }
}, $goog$array$findIndex$$ = function($arr$jscomp$30$$, $f$jscomp$18$$) {
  for (var $l$jscomp$8$$ = $arr$jscomp$30$$.length, $arr2$jscomp$6$$ = $goog$isString$$($arr$jscomp$30$$) ? $arr$jscomp$30$$.split("") : $arr$jscomp$30$$, $i$jscomp$28$$ = 0; $i$jscomp$28$$ < $l$jscomp$8$$; $i$jscomp$28$$++) {
    if ($i$jscomp$28$$ in $arr2$jscomp$6$$ && $f$jscomp$18$$.call(void 0, $arr2$jscomp$6$$[$i$jscomp$28$$], $i$jscomp$28$$, $arr$jscomp$30$$)) {
      return $i$jscomp$28$$;
    }
  }
  return -1;
}, $goog$array$concat$$ = function($var_args$jscomp$64$$) {
  return Array.prototype.concat.apply([], arguments);
}, $goog$array$toArray$$ = function($object$jscomp$2$$) {
  var $length$jscomp$19$$ = $object$jscomp$2$$.length;
  if (0 < $length$jscomp$19$$) {
    for (var $rv$jscomp$2$$ = Array($length$jscomp$19$$), $i$jscomp$37$$ = 0; $i$jscomp$37$$ < $length$jscomp$19$$; $i$jscomp$37$$++) {
      $rv$jscomp$2$$[$i$jscomp$37$$] = $object$jscomp$2$$[$i$jscomp$37$$];
    }
    return $rv$jscomp$2$$;
  }
  return [];
};
chrome.cast.media.$Media$ = function($sessionId$jscomp$5$$, $mediaSessionId$$) {
  this.sessionId = $sessionId$jscomp$5$$;
  this.mediaSessionId = $mediaSessionId$$;
  this.media = null;
  this.playbackRate = 1.0;
  this.playerState = chrome.cast.media.$PlayerState$.IDLE;
  this.currentTime = 0.0;
  this.$c$ = -1;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.Volume;
  this.items = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.customData = this.activeTrackIds = this.idleReason = null;
  this.repeatMode = chrome.cast.media.$RepeatMode$.OFF;
  this.$b$ = !1;
  this.$a$ = [];
};
$goog$exportSymbol$$("chrome.cast.media.Media", chrome.cast.media.$Media$);
chrome.cast.media.$Media$.prototype.$getStatus$ = function($getStatusRequest$$, $successCallback$jscomp$31$$, $errorCallback$jscomp$24$$) {
  $getStatusRequest$$ || ($getStatusRequest$$ = new chrome.cast.media.$GetStatusRequest$);
  $mr$cast$ApiInterface$instance$$.$a$(this, "MEDIA_GET_STATUS", $getStatusRequest$$, $successCallback$jscomp$31$$, $errorCallback$jscomp$24$$, chrome.cast.media.timeout.$getStatus$);
};
chrome.cast.media.$Media$.prototype.getStatus = chrome.cast.media.$Media$.prototype.$getStatus$;
chrome.cast.media.$Media$.prototype.play = function($playRequest$$, $successCallback$jscomp$32$$, $errorCallback$jscomp$25$$) {
  this.$playWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $playRequest$$, $successCallback$jscomp$32$$, $errorCallback$jscomp$25$$);
};
chrome.cast.media.$Media$.prototype.play = chrome.cast.media.$Media$.prototype.play;
chrome.cast.media.$Media$.prototype.$playWithContext$ = function($context$jscomp$3$$, $playRequest$jscomp$1$$, $successCallback$jscomp$33$$, $errorCallback$jscomp$26$$) {
  $playRequest$jscomp$1$$ || ($playRequest$jscomp$1$$ = new chrome.cast.media.$PlayRequest$);
  $context$jscomp$3$$.$a$(this, "PLAY", $playRequest$jscomp$1$$, $successCallback$jscomp$33$$, $errorCallback$jscomp$26$$, chrome.cast.media.timeout.play);
};
chrome.cast.media.$Media$.prototype.playWithContext = chrome.cast.media.$Media$.prototype.$playWithContext$;
chrome.cast.media.$Media$.prototype.pause = function($pauseRequest$$, $successCallback$jscomp$34$$, $errorCallback$jscomp$27$$) {
  this.$pauseWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $pauseRequest$$, $successCallback$jscomp$34$$, $errorCallback$jscomp$27$$);
};
chrome.cast.media.$Media$.prototype.pause = chrome.cast.media.$Media$.prototype.pause;
chrome.cast.media.$Media$.prototype.$pauseWithContext$ = function($context$jscomp$4$$, $pauseRequest$jscomp$1$$, $successCallback$jscomp$35$$, $errorCallback$jscomp$28$$) {
  $pauseRequest$jscomp$1$$ || ($pauseRequest$jscomp$1$$ = new chrome.cast.media.$PauseRequest$);
  $context$jscomp$4$$.$a$(this, "PAUSE", $pauseRequest$jscomp$1$$, $successCallback$jscomp$35$$, $errorCallback$jscomp$28$$, chrome.cast.media.timeout.pause);
};
chrome.cast.media.$Media$.prototype.pauseWithContext = chrome.cast.media.$Media$.prototype.$pauseWithContext$;
chrome.cast.media.$Media$.prototype.seek = function($seekRequest$$, $successCallback$jscomp$36$$, $errorCallback$jscomp$29$$) {
  $mr$cast$ApiInterface$instance$$.$a$(this, "SEEK", $seekRequest$$, $successCallback$jscomp$36$$, $errorCallback$jscomp$29$$, chrome.cast.media.timeout.seek);
};
chrome.cast.media.$Media$.prototype.seek = chrome.cast.media.$Media$.prototype.seek;
chrome.cast.media.$Media$.prototype.stop = function($stopRequest$$, $successCallback$jscomp$37$$, $errorCallback$jscomp$30$$) {
  $stopRequest$$ || ($stopRequest$$ = new chrome.cast.media.$StopRequest$);
  $mr$cast$ApiInterface$instance$$.$a$(this, "STOP_MEDIA", $stopRequest$$, $successCallback$jscomp$37$$, $errorCallback$jscomp$30$$, chrome.cast.media.timeout.stop);
};
chrome.cast.media.$Media$.prototype.stop = chrome.cast.media.$Media$.prototype.stop;
chrome.cast.media.$Media$.prototype.$setVolume$ = function($volumeRequest$$, $successCallback$jscomp$38$$, $errorCallback$jscomp$31$$) {
  $mr$cast$ApiInterface$instance$$.$a$(this, "MEDIA_SET_VOLUME", $volumeRequest$$, $successCallback$jscomp$38$$, $errorCallback$jscomp$31$$, chrome.cast.media.timeout.$setVolume$);
};
chrome.cast.media.$Media$.prototype.setVolume = chrome.cast.media.$Media$.prototype.$setVolume$;
chrome.cast.media.$Media$.prototype.$editTracksInfo$ = function($editTracksInfoRequest$$, $successCallback$jscomp$39$$, $errorCallback$jscomp$32$$) {
  $mr$cast$ApiInterface$instance$$.$a$(this, "EDIT_TRACKS_INFO", $editTracksInfoRequest$$, $successCallback$jscomp$39$$, $errorCallback$jscomp$32$$, chrome.cast.media.timeout.$editTracksInfo$);
};
chrome.cast.media.$Media$.prototype.editTracksInfo = chrome.cast.media.$Media$.prototype.$editTracksInfo$;
chrome.cast.media.$Media$.prototype.$queueInsertItems$ = function($queueInsertItemsRequest$$, $successCallback$jscomp$40$$, $errorCallback$jscomp$33$$) {
  $mr$cast$ApiInterface$instance$$.$a$(this, "QUEUE_INSERT", $queueInsertItemsRequest$$, $successCallback$jscomp$40$$, $errorCallback$jscomp$33$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queueInsertItems = chrome.cast.media.$Media$.prototype.$queueInsertItems$;
chrome.cast.media.$Media$.prototype.$queueAppendItem$ = function($item$jscomp$1$$, $successCallback$jscomp$41$$, $errorCallback$jscomp$34$$) {
  $mr$cast$ApiInterface$instance$$.$a$(this, "QUEUE_INSERT", new chrome.cast.media.$QueueInsertItemsRequest$([$item$jscomp$1$$]), $successCallback$jscomp$41$$, $errorCallback$jscomp$34$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queueAppendItem = chrome.cast.media.$Media$.prototype.$queueAppendItem$;
chrome.cast.media.$Media$.prototype.$queueUpdateItems$ = function($queueUpdateItemsRequest$$, $successCallback$jscomp$42$$, $errorCallback$jscomp$35$$) {
  $mr$cast$ApiInterface$instance$$.$a$(this, "QUEUE_UPDATE", $queueUpdateItemsRequest$$, $successCallback$jscomp$42$$, $errorCallback$jscomp$35$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queueUpdateItems = chrome.cast.media.$Media$.prototype.$queueUpdateItems$;
chrome.cast.media.$Media$.prototype.$queuePrev$ = function($successCallback$jscomp$43$$, $errorCallback$jscomp$36$$) {
  var $queueJumpRequest$$ = new chrome.cast.media.$QueueJumpRequest$;
  $queueJumpRequest$$.jump = -1;
  $mr$cast$ApiInterface$instance$$.$a$(this, "QUEUE_UPDATE", $queueJumpRequest$$, $successCallback$jscomp$43$$, $errorCallback$jscomp$36$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queuePrev = chrome.cast.media.$Media$.prototype.$queuePrev$;
chrome.cast.media.$Media$.prototype.$queueNext$ = function($successCallback$jscomp$44$$, $errorCallback$jscomp$37$$) {
  var $queueJumpRequest$jscomp$1$$ = new chrome.cast.media.$QueueJumpRequest$;
  $queueJumpRequest$jscomp$1$$.jump = 1;
  $mr$cast$ApiInterface$instance$$.$a$(this, "QUEUE_UPDATE", $queueJumpRequest$jscomp$1$$, $successCallback$jscomp$44$$, $errorCallback$jscomp$37$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queueNext = chrome.cast.media.$Media$.prototype.$queueNext$;
chrome.cast.media.$Media$.prototype.$queueJumpToItem$ = function($itemId$$, $successCallback$jscomp$45$$, $errorCallback$jscomp$38$$) {
  if (!(0 > $JSCompiler_StaticMethods_getIndexOfItem_$$(this, $itemId$$))) {
    var $queueJumpRequest$jscomp$2$$ = new chrome.cast.media.$QueueJumpRequest$;
    $queueJumpRequest$jscomp$2$$.currentItemId = $itemId$$;
    $mr$cast$ApiInterface$instance$$.$a$(this, "QUEUE_UPDATE", $queueJumpRequest$jscomp$2$$, $successCallback$jscomp$45$$, $errorCallback$jscomp$38$$, chrome.cast.media.timeout.$queue$);
  }
};
chrome.cast.media.$Media$.prototype.queueJumpToItem = chrome.cast.media.$Media$.prototype.$queueJumpToItem$;
chrome.cast.media.$Media$.prototype.$queueSetRepeatMode$ = function($repeatMode$$, $successCallback$jscomp$46$$, $errorCallback$jscomp$39$$) {
  var $queueSetPropertiesRequest$$ = new chrome.cast.media.$QueueSetPropertiesRequest$;
  $queueSetPropertiesRequest$$.repeatMode = $repeatMode$$;
  $mr$cast$ApiInterface$instance$$.$a$(this, "QUEUE_UPDATE", $queueSetPropertiesRequest$$, $successCallback$jscomp$46$$, $errorCallback$jscomp$39$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queueSetRepeatMode = chrome.cast.media.$Media$.prototype.$queueSetRepeatMode$;
chrome.cast.media.$Media$.prototype.$queueRemoveItems$ = function($queueRemoveItemsRequest$$, $successCallback$jscomp$47$$, $errorCallback$jscomp$40$$) {
  $mr$cast$ApiInterface$instance$$.$a$(this, "QUEUE_REMOVE", $queueRemoveItemsRequest$$, $successCallback$jscomp$47$$, $errorCallback$jscomp$40$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queueRemoveItems = chrome.cast.media.$Media$.prototype.$queueRemoveItems$;
chrome.cast.media.$Media$.prototype.$queueRemoveItem$ = function($itemId$jscomp$1$$, $successCallback$jscomp$48$$, $errorCallback$jscomp$41$$) {
  0 > $JSCompiler_StaticMethods_getIndexOfItem_$$(this, $itemId$jscomp$1$$) || $mr$cast$ApiInterface$instance$$.$a$(this, "QUEUE_REMOVE", new chrome.cast.media.$QueueRemoveItemsRequest$([$itemId$jscomp$1$$]), $successCallback$jscomp$48$$, $errorCallback$jscomp$41$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queueRemoveItem = chrome.cast.media.$Media$.prototype.$queueRemoveItem$;
chrome.cast.media.$Media$.prototype.$queueReorderItems$ = function($queueReorderItemsRequest$$, $successCallback$jscomp$49$$, $errorCallback$jscomp$42$$) {
  $mr$cast$ApiInterface$instance$$.$a$(this, "QUEUE_REORDER", $queueReorderItemsRequest$$, $successCallback$jscomp$49$$, $errorCallback$jscomp$42$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queueReorderItems = chrome.cast.media.$Media$.prototype.$queueReorderItems$;
chrome.cast.media.$Media$.prototype.$queueMoveItemToNewIndex$ = function($itemId$jscomp$2_queueReorderRequest$$, $indexToInsertBefore_newIndex$$, $successCallback$jscomp$50$$, $errorCallback$jscomp$43$$) {
  var $index$jscomp$58$$ = $JSCompiler_StaticMethods_getIndexOfItem_$$(this, $itemId$jscomp$2_queueReorderRequest$$);
  if (!(0 > $index$jscomp$58$$)) {
    if (0 > $indexToInsertBefore_newIndex$$) {
      $errorCallback$jscomp$43$$ && $errorCallback$jscomp$43$$(new chrome.cast.Error(chrome.cast.$ErrorCode$.INVALID_PARAMETER));
    } else {
      if ($index$jscomp$58$$ == $indexToInsertBefore_newIndex$$) {
        $successCallback$jscomp$50$$ && $successCallback$jscomp$50$$();
      } else {
        var $itemToInsertBefore$$ = null;
        $indexToInsertBefore_newIndex$$ = $indexToInsertBefore_newIndex$$ > $index$jscomp$58$$ ? $indexToInsertBefore_newIndex$$ + 1 : $indexToInsertBefore_newIndex$$;
        $indexToInsertBefore_newIndex$$ < this.items.length && ($itemToInsertBefore$$ = this.items[$indexToInsertBefore_newIndex$$]);
        $itemId$jscomp$2_queueReorderRequest$$ = new chrome.cast.media.$QueueReorderItemsRequest$([$itemId$jscomp$2_queueReorderRequest$$]);
        $itemId$jscomp$2_queueReorderRequest$$.insertBefore = $itemToInsertBefore$$ ? $itemToInsertBefore$$.itemId : null;
        $mr$cast$ApiInterface$instance$$.$a$(this, "QUEUE_REORDER", $itemId$jscomp$2_queueReorderRequest$$, $successCallback$jscomp$50$$, $errorCallback$jscomp$43$$, chrome.cast.media.timeout.$queue$);
      }
    }
  }
};
chrome.cast.media.$Media$.prototype.queueMoveItemToNewIndex = chrome.cast.media.$Media$.prototype.$queueMoveItemToNewIndex$;
chrome.cast.media.$Media$.prototype.$supportsCommand$ = function($command$jscomp$1$$) {
  return -1 < this.supportedMediaCommands.indexOf($command$jscomp$1$$);
};
chrome.cast.media.$Media$.prototype.supportsCommand = chrome.cast.media.$Media$.prototype.$supportsCommand$;
chrome.cast.media.$Media$.prototype.$getEstimatedTime$ = function() {
  if (this.playerState == chrome.cast.media.$PlayerState$.PLAYING && 0 <= this.$c$) {
    var $result$jscomp$6$$ = this.currentTime + (Date.now() - this.$c$) / 1000 * this.playbackRate;
    this.media && null != this.media.duration && $result$jscomp$6$$ > this.media.duration && ($result$jscomp$6$$ = this.media.duration);
    0 > $result$jscomp$6$$ && ($result$jscomp$6$$ = 0);
    return $result$jscomp$6$$;
  }
  return this.currentTime;
};
chrome.cast.media.$Media$.prototype.getEstimatedTime = chrome.cast.media.$Media$.prototype.$getEstimatedTime$;
chrome.cast.media.$Media$.prototype.$addUpdateListener$ = function($listener$jscomp$76$$) {
  this.$addUpdateListenerWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $listener$jscomp$76$$);
};
chrome.cast.media.$Media$.prototype.addUpdateListener = chrome.cast.media.$Media$.prototype.$addUpdateListener$;
chrome.cast.media.$Media$.prototype.$addUpdateListenerWithContext$ = function($context$jscomp$5$$, $listener$jscomp$77$$) {
  $context$jscomp$5$$.$addMediaUpdateListener$(this, $listener$jscomp$77$$);
};
chrome.cast.media.$Media$.prototype.addUpdateListenerWithContext = chrome.cast.media.$Media$.prototype.$addUpdateListenerWithContext$;
chrome.cast.media.$Media$.prototype.$removeUpdateListener$ = function($listener$jscomp$78$$) {
  this.$removeUpdateListenerWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $listener$jscomp$78$$);
};
chrome.cast.media.$Media$.prototype.removeUpdateListener = chrome.cast.media.$Media$.prototype.$removeUpdateListener$;
chrome.cast.media.$Media$.prototype.$removeUpdateListenerWithContext$ = function($context$jscomp$6$$, $listener$jscomp$79$$) {
  $mr$cast$ApiInterface$instance$$.$removeMediaUpdateListener$(this, $listener$jscomp$79$$);
};
chrome.cast.media.$Media$.prototype.removeUpdateListenerWithContext = chrome.cast.media.$Media$.prototype.$removeUpdateListenerWithContext$;
var $JSCompiler_StaticMethods_getIndexOfItem_$$ = function($JSCompiler_StaticMethods_getIndexOfItem_$self$$, $itemId$jscomp$3$$) {
  return $goog$array$findIndex$$($JSCompiler_StaticMethods_getIndexOfItem_$self$$.items, function($JSCompiler_StaticMethods_getIndexOfItem_$self$$) {
    return $JSCompiler_StaticMethods_getIndexOfItem_$self$$.itemId == $itemId$jscomp$3$$;
  });
};
var $mr$cast$ApiInterface$instance$$ = null;
var $mr$cast$AppMessage$$ = function($sessionId$jscomp$15$$, $namespaceName$$, $message$jscomp$35$$) {
  this.sessionId = $sessionId$jscomp$15$$;
  this.namespaceName = $namespaceName$$;
  this.message = $message$jscomp$35$$;
};
var $mr$cast$SetVolumeRequest$$ = function($volume$jscomp$1$$, $opt_expectedVolume$$) {
  this.type = "SET_VOLUME";
  this.requestId = 0;
  this.volume = $volume$jscomp$1$$;
  this.expectedVolume = $opt_expectedVolume$$ || null;
};
var $mr$cast$StopSessionRequest$$ = function($opt_sessionId$$) {
  this.type = "STOP";
  this.requestId = 0;
  this.sessionId = $opt_sessionId$$ || null;
};
chrome.cast.$Session$ = function($sessionId$jscomp$16$$, $appId$jscomp$1$$, $displayName$$, $appImages$jscomp$1$$, $receiver$jscomp$1$$) {
  this.sessionId = $sessionId$jscomp$16$$;
  this.appId = $appId$jscomp$1$$;
  this.displayName = $displayName$$;
  this.statusText = null;
  this.appImages = $appImages$jscomp$1$$;
  this.receiver = $receiver$jscomp$1$$;
  this.senderApps = [];
  this.namespaces = [];
  this.media = [];
  this.status = chrome.cast.$SessionStatus$.CONNECTED;
  this.transportId = "";
};
$goog$exportSymbol$$("chrome.cast.Session", chrome.cast.$Session$);
chrome.cast.$Session$.prototype.$setReceiverVolumeLevel$ = function($newLevel$$, $successCallback$jscomp$59$$, $errorCallback$jscomp$52$$) {
  this.$setReceiverVolumeLevelWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $newLevel$$, $successCallback$jscomp$59$$, $errorCallback$jscomp$52$$);
};
chrome.cast.$Session$.prototype.setReceiverVolumeLevel = chrome.cast.$Session$.prototype.$setReceiverVolumeLevel$;
chrome.cast.$Session$.prototype.$setReceiverVolumeLevelWithContext$ = function($context$jscomp$7$$, $newLevel$jscomp$1_volumeRequest$jscomp$2$$, $successCallback$jscomp$60$$, $errorCallback$jscomp$53$$) {
  $newLevel$jscomp$1_volumeRequest$jscomp$2$$ = new $mr$cast$SetVolumeRequest$$(new chrome.cast.Volume($newLevel$jscomp$1_volumeRequest$jscomp$2$$, null), this.receiver.volume);
  $context$jscomp$7$$.setReceiverVolume(this.sessionId, $newLevel$jscomp$1_volumeRequest$jscomp$2$$, $successCallback$jscomp$60$$, $errorCallback$jscomp$53$$);
};
chrome.cast.$Session$.prototype.setReceiverVolumeLevelWithContext = chrome.cast.$Session$.prototype.$setReceiverVolumeLevelWithContext$;
chrome.cast.$Session$.prototype.$setReceiverMuted$ = function($muted$$, $successCallback$jscomp$61$$, $errorCallback$jscomp$54$$) {
  this.$setReceiverMutedWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $muted$$, $successCallback$jscomp$61$$, $errorCallback$jscomp$54$$);
};
chrome.cast.$Session$.prototype.setReceiverMuted = chrome.cast.$Session$.prototype.$setReceiverMuted$;
chrome.cast.$Session$.prototype.$setReceiverMutedWithContext$ = function($context$jscomp$8_volumeRequest$jscomp$3$$, $muted$jscomp$1$$, $successCallback$jscomp$62$$, $errorCallback$jscomp$55$$) {
  $context$jscomp$8_volumeRequest$jscomp$3$$ = new $mr$cast$SetVolumeRequest$$(new chrome.cast.Volume(null, $muted$jscomp$1$$), this.receiver.volume);
  $mr$cast$ApiInterface$instance$$.setReceiverVolume(this.sessionId, $context$jscomp$8_volumeRequest$jscomp$3$$, $successCallback$jscomp$62$$, $errorCallback$jscomp$55$$);
};
chrome.cast.$Session$.prototype.setReceiverMutedWithContext = chrome.cast.$Session$.prototype.$setReceiverMutedWithContext$;
chrome.cast.$Session$.prototype.$leave$ = function($successCallback$jscomp$63$$, $errorCallback$jscomp$56$$) {
  $mr$cast$ApiInterface$instance$$.leaveSession(this.sessionId, $successCallback$jscomp$63$$, $errorCallback$jscomp$56$$);
};
chrome.cast.$Session$.prototype.leave = chrome.cast.$Session$.prototype.$leave$;
chrome.cast.$Session$.prototype.stop = function($successCallback$jscomp$64$$, $errorCallback$jscomp$57$$) {
  this.$stopWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $successCallback$jscomp$64$$, $errorCallback$jscomp$57$$);
};
chrome.cast.$Session$.prototype.stop = chrome.cast.$Session$.prototype.stop;
chrome.cast.$Session$.prototype.$stopWithContext$ = function($context$jscomp$9$$, $successCallback$jscomp$65$$, $errorCallback$jscomp$58$$) {
  $context$jscomp$9$$.$sendApiRequest$(new $mr$cast$StopSessionRequest$$(this.sessionId), $successCallback$jscomp$65$$, $errorCallback$jscomp$58$$, chrome.cast.timeout.stopSession);
};
chrome.cast.$Session$.prototype.stopWithContext = chrome.cast.$Session$.prototype.$stopWithContext$;
chrome.cast.$Session$.prototype.sendMessage = function($namespace$jscomp$6$$, $message$jscomp$36$$, $successCallback$jscomp$66$$, $errorCallback$jscomp$59$$) {
  this.$sendMessageWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $namespace$jscomp$6$$, $message$jscomp$36$$, $successCallback$jscomp$66$$, $errorCallback$jscomp$59$$);
};
chrome.cast.$Session$.prototype.sendMessage = chrome.cast.$Session$.prototype.sendMessage;
chrome.cast.$Session$.prototype.$sendMessageWithContext$ = function($context$jscomp$10$$, $namespace$jscomp$7$$, $message$jscomp$37$$, $successCallback$jscomp$67$$, $errorCallback$jscomp$60$$) {
  $context$jscomp$10$$.$sendAppRequest$(new $mr$cast$AppMessage$$(this.sessionId, $namespace$jscomp$7$$, $message$jscomp$37$$), $successCallback$jscomp$67$$, $errorCallback$jscomp$60$$);
};
chrome.cast.$Session$.prototype.sendMessageWithContext = chrome.cast.$Session$.prototype.$sendMessageWithContext$;
chrome.cast.$Session$.prototype.$addUpdateListener$ = function($listener$jscomp$90$$) {
  this.$addUpdateListenerWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $listener$jscomp$90$$);
};
chrome.cast.$Session$.prototype.addUpdateListener = chrome.cast.$Session$.prototype.$addUpdateListener$;
chrome.cast.$Session$.prototype.$addUpdateListenerWithContext$ = function($context$jscomp$11$$, $listener$jscomp$91$$) {
  $context$jscomp$11$$.$addSessionUpdateListener$(this.sessionId, $listener$jscomp$91$$);
};
chrome.cast.$Session$.prototype.addUpdateListenerWithContext = chrome.cast.$Session$.prototype.$addUpdateListenerWithContext$;
chrome.cast.$Session$.prototype.$removeUpdateListener$ = function($listener$jscomp$92$$) {
  this.$removeUpdateListenerWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $listener$jscomp$92$$);
};
chrome.cast.$Session$.prototype.removeUpdateListener = chrome.cast.$Session$.prototype.$removeUpdateListener$;
chrome.cast.$Session$.prototype.$removeUpdateListenerWithContext$ = function($context$jscomp$12$$, $listener$jscomp$93$$) {
  $context$jscomp$12$$.$removeSessionUpdateListener$(this.sessionId, $listener$jscomp$93$$);
};
chrome.cast.$Session$.prototype.removeUpdateListenerWithContext = chrome.cast.$Session$.prototype.$removeUpdateListenerWithContext$;
chrome.cast.$Session$.prototype.$addMessageListener$ = function($namespace$jscomp$8$$, $listener$jscomp$94$$) {
  this.$addMessageListenerWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $namespace$jscomp$8$$, $listener$jscomp$94$$);
};
chrome.cast.$Session$.prototype.addMessageListener = chrome.cast.$Session$.prototype.$addMessageListener$;
chrome.cast.$Session$.prototype.$addMessageListenerWithContext$ = function($context$jscomp$13$$, $namespace$jscomp$9$$, $listener$jscomp$95$$) {
  $context$jscomp$13$$.$addAppMessageListener$(this.sessionId, $namespace$jscomp$9$$, $listener$jscomp$95$$);
};
chrome.cast.$Session$.prototype.addMessageListenerWithContext = chrome.cast.$Session$.prototype.$addMessageListenerWithContext$;
chrome.cast.$Session$.prototype.$addMediaListener$ = function($listener$jscomp$96$$) {
  this.$addMediaListenerWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $listener$jscomp$96$$);
};
chrome.cast.$Session$.prototype.addMediaListener = chrome.cast.$Session$.prototype.$addMediaListener$;
chrome.cast.$Session$.prototype.$addMediaListenerWithContext$ = function($context$jscomp$14$$, $listener$jscomp$97$$) {
  $context$jscomp$14$$.$addMediaListener$(this.sessionId, $listener$jscomp$97$$);
};
chrome.cast.$Session$.prototype.addMediaListenerWithContext = chrome.cast.$Session$.prototype.$addMediaListenerWithContext$;
chrome.cast.$Session$.prototype.$removeMediaListener$ = function($listener$jscomp$98$$) {
  this.$removeMediaListenerWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $listener$jscomp$98$$);
};
chrome.cast.$Session$.prototype.removeMediaListener = chrome.cast.$Session$.prototype.$removeMediaListener$;
chrome.cast.$Session$.prototype.$removeMediaListenerWithContext$ = function($context$jscomp$15$$, $listener$jscomp$99$$) {
  $context$jscomp$15$$.$removeMediaListener$(this.sessionId, $listener$jscomp$99$$);
};
chrome.cast.$Session$.prototype.removeMediaListenerWithContext = chrome.cast.$Session$.prototype.$removeMediaListenerWithContext$;
chrome.cast.$Session$.prototype.$removeMessageListener$ = function($namespace$jscomp$10$$, $listener$jscomp$100$$) {
  this.$removeMessageListenerWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $namespace$jscomp$10$$, $listener$jscomp$100$$);
};
chrome.cast.$Session$.prototype.removeMessageListener = chrome.cast.$Session$.prototype.$removeMessageListener$;
chrome.cast.$Session$.prototype.$removeMessageListenerWithContext$ = function($context$jscomp$16$$, $namespace$jscomp$11$$, $listener$jscomp$101$$) {
  $context$jscomp$16$$.$removeAppMessageListener$(this.sessionId, $namespace$jscomp$11$$, $listener$jscomp$101$$);
};
chrome.cast.$Session$.prototype.removeMessageListenerWithContext = chrome.cast.$Session$.prototype.$removeMessageListenerWithContext$;
chrome.cast.$Session$.prototype.$loadMedia$ = function($loadRequest$$, $successCallback$jscomp$68$$, $errorCallback$jscomp$61$$) {
  $loadRequest$$.sessionId = this.sessionId;
  $mr$cast$ApiInterface$instance$$.$A$($loadRequest$$, "LOAD", $successCallback$jscomp$68$$, $errorCallback$jscomp$61$$);
};
chrome.cast.$Session$.prototype.loadMedia = chrome.cast.$Session$.prototype.$loadMedia$;
chrome.cast.$Session$.prototype.$queueLoad$ = function($queueLoadRequest$$, $successCallback$jscomp$69$$, $errorCallback$jscomp$62$$) {
  $queueLoadRequest$$.sessionId = this.sessionId;
  $mr$cast$ApiInterface$instance$$.$A$($queueLoadRequest$$, "QUEUE_LOAD", $successCallback$jscomp$69$$, $errorCallback$jscomp$62$$);
};
chrome.cast.$Session$.prototype.queueLoad = chrome.cast.$Session$.prototype.$queueLoad$;
var $goog$object$getValues$$ = function($obj$jscomp$52$$) {
  var $res$jscomp$4$$ = [], $i$jscomp$49$$ = 0, $key$jscomp$44$$;
  for ($key$jscomp$44$$ in $obj$jscomp$52$$) {
    $res$jscomp$4$$[$i$jscomp$49$$++] = $obj$jscomp$52$$[$key$jscomp$44$$];
  }
  return $res$jscomp$4$$;
};
var $goog$iter$StopIteration$$ = "StopIteration" in $goog$global$$ ? $goog$global$$.StopIteration : {message:"StopIteration", stack:""}, $goog$iter$Iterator$$ = function() {
};
$goog$iter$Iterator$$.prototype.next = function() {
  throw $goog$iter$StopIteration$$;
};
$goog$iter$Iterator$$.prototype.$__iterator__$ = function() {
  return this;
};
var $goog$iter$toIterator$$ = function($iterable$jscomp$3$$) {
  if ($iterable$jscomp$3$$ instanceof $goog$iter$Iterator$$) {
    return $iterable$jscomp$3$$;
  }
  if ("function" == typeof $iterable$jscomp$3$$.$__iterator__$) {
    return $iterable$jscomp$3$$.$__iterator__$(!1);
  }
  if ($goog$isArrayLike$$($iterable$jscomp$3$$)) {
    var $i$jscomp$62$$ = 0, $newIter$$ = new $goog$iter$Iterator$$;
    $newIter$$.next = function() {
      for (;;) {
        if ($i$jscomp$62$$ >= $iterable$jscomp$3$$.length) {
          throw $goog$iter$StopIteration$$;
        }
        if ($i$jscomp$62$$ in $iterable$jscomp$3$$) {
          return $iterable$jscomp$3$$[$i$jscomp$62$$++];
        }
        $i$jscomp$62$$++;
      }
    };
    return $newIter$$;
  }
  throw Error("Not implemented");
}, $goog$iter$forEach$$ = function($iterable$jscomp$4$$, $f$jscomp$39$$) {
  if ($goog$isArrayLike$$($iterable$jscomp$4$$)) {
    try {
      $goog$array$forEach$$($iterable$jscomp$4$$, $f$jscomp$39$$, void 0);
    } catch ($ex$jscomp$1$$) {
      if ($ex$jscomp$1$$ !== $goog$iter$StopIteration$$) {
        throw $ex$jscomp$1$$;
      }
    }
  } else {
    $iterable$jscomp$4$$ = $goog$iter$toIterator$$($iterable$jscomp$4$$);
    try {
      for (;;) {
        $f$jscomp$39$$.call(void 0, $iterable$jscomp$4$$.next(), void 0, $iterable$jscomp$4$$);
      }
    } catch ($ex$2$$) {
      if ($ex$2$$ !== $goog$iter$StopIteration$$) {
        throw $ex$2$$;
      }
    }
  }
};
var $goog$structs$Map$$ = function($opt_map$$, $var_args$jscomp$92$$) {
  this.$b$ = {};
  this.$a$ = [];
  this.$f$ = this.$c$ = 0;
  var $argLength$jscomp$2_res$jscomp$inline_451_values$jscomp$inline_245$$ = arguments.length;
  if (1 < $argLength$jscomp$2_res$jscomp$inline_451_values$jscomp$inline_245$$) {
    if ($argLength$jscomp$2_res$jscomp$inline_451_values$jscomp$inline_245$$ % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var $i$jscomp$64_key$jscomp$inline_453_keys$jscomp$inline_244$$ = 0; $i$jscomp$64_key$jscomp$inline_453_keys$jscomp$inline_244$$ < $argLength$jscomp$2_res$jscomp$inline_451_values$jscomp$inline_245$$; $i$jscomp$64_key$jscomp$inline_453_keys$jscomp$inline_244$$ += 2) {
      this.set(arguments[$i$jscomp$64_key$jscomp$inline_453_keys$jscomp$inline_244$$], arguments[$i$jscomp$64_key$jscomp$inline_453_keys$jscomp$inline_244$$ + 1]);
    }
  } else {
    if ($opt_map$$) {
      if ($opt_map$$ instanceof $goog$structs$Map$$) {
        $i$jscomp$64_key$jscomp$inline_453_keys$jscomp$inline_244$$ = $opt_map$$.$getKeys$(), $argLength$jscomp$2_res$jscomp$inline_451_values$jscomp$inline_245$$ = $opt_map$$.$getValues$();
      } else {
        var $argLength$jscomp$2_res$jscomp$inline_451_values$jscomp$inline_245$$ = [], $i$jscomp$inline_246_i$jscomp$inline_452$$ = 0;
        for ($i$jscomp$64_key$jscomp$inline_453_keys$jscomp$inline_244$$ in $opt_map$$) {
          $argLength$jscomp$2_res$jscomp$inline_451_values$jscomp$inline_245$$[$i$jscomp$inline_246_i$jscomp$inline_452$$++] = $i$jscomp$64_key$jscomp$inline_453_keys$jscomp$inline_244$$;
        }
        $i$jscomp$64_key$jscomp$inline_453_keys$jscomp$inline_244$$ = $argLength$jscomp$2_res$jscomp$inline_451_values$jscomp$inline_245$$;
        $argLength$jscomp$2_res$jscomp$inline_451_values$jscomp$inline_245$$ = $goog$object$getValues$$($opt_map$$);
      }
      for ($i$jscomp$inline_246_i$jscomp$inline_452$$ = 0; $i$jscomp$inline_246_i$jscomp$inline_452$$ < $i$jscomp$64_key$jscomp$inline_453_keys$jscomp$inline_244$$.length; $i$jscomp$inline_246_i$jscomp$inline_452$$++) {
        this.set($i$jscomp$64_key$jscomp$inline_453_keys$jscomp$inline_244$$[$i$jscomp$inline_246_i$jscomp$inline_452$$], $argLength$jscomp$2_res$jscomp$inline_451_values$jscomp$inline_245$$[$i$jscomp$inline_246_i$jscomp$inline_452$$]);
      }
    }
  }
};
$goog$structs$Map$$.prototype.$getValues$ = function() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for (var $rv$jscomp$8$$ = [], $i$jscomp$65$$ = 0; $i$jscomp$65$$ < this.$a$.length; $i$jscomp$65$$++) {
    $rv$jscomp$8$$.push(this.$b$[this.$a$[$i$jscomp$65$$]]);
  }
  return $rv$jscomp$8$$;
};
$goog$structs$Map$$.prototype.$getKeys$ = function() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  return this.$a$.concat();
};
$goog$structs$Map$$.prototype.clear = function() {
  this.$b$ = {};
  this.$f$ = this.$c$ = this.$a$.length = 0;
};
$goog$structs$Map$$.prototype.remove = function($key$jscomp$65$$) {
  return $goog$structs$Map$hasKey_$$(this.$b$, $key$jscomp$65$$) ? (delete this.$b$[$key$jscomp$65$$], this.$c$--, this.$f$++, this.$a$.length > 2 * this.$c$ && $JSCompiler_StaticMethods_cleanupKeysArray_$$(this), !0) : !1;
};
var $JSCompiler_StaticMethods_cleanupKeysArray_$$ = function($JSCompiler_StaticMethods_cleanupKeysArray_$self$$) {
  var $destIndex$$, $srcIndex$$;
  if ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length) {
    for ($destIndex$$ = $srcIndex$$ = 0; $srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length;) {
      var $key$jscomp$66$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$srcIndex$$];
      $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$b$, $key$jscomp$66$$) && ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$destIndex$$++] = $key$jscomp$66$$);
      $srcIndex$$++;
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length = $destIndex$$;
  }
  if ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length) {
    var $seen$jscomp$2$$ = {};
    for ($destIndex$$ = $srcIndex$$ = 0; $srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length;) {
      $key$jscomp$66$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$srcIndex$$], $goog$structs$Map$hasKey_$$($seen$jscomp$2$$, $key$jscomp$66$$) || ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$destIndex$$++] = $key$jscomp$66$$, $seen$jscomp$2$$[$key$jscomp$66$$] = 1), $srcIndex$$++;
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length = $destIndex$$;
  }
};
$goog$structs$Map$$.prototype.get = function($key$jscomp$67$$, $opt_val$jscomp$1$$) {
  return $goog$structs$Map$hasKey_$$(this.$b$, $key$jscomp$67$$) ? this.$b$[$key$jscomp$67$$] : $opt_val$jscomp$1$$;
};
$goog$structs$Map$$.prototype.set = function($key$jscomp$68$$, $value$jscomp$101$$) {
  $goog$structs$Map$hasKey_$$(this.$b$, $key$jscomp$68$$) || (this.$c$++, this.$a$.push($key$jscomp$68$$), this.$f$++);
  this.$b$[$key$jscomp$68$$] = $value$jscomp$101$$;
};
$goog$structs$Map$$.prototype.forEach = function($f$jscomp$49$$, $opt_obj$jscomp$44$$) {
  for (var $keys$jscomp$3$$ = this.$getKeys$(), $i$jscomp$69$$ = 0; $i$jscomp$69$$ < $keys$jscomp$3$$.length; $i$jscomp$69$$++) {
    var $key$jscomp$69$$ = $keys$jscomp$3$$[$i$jscomp$69$$], $value$jscomp$102$$ = this.get($key$jscomp$69$$);
    $f$jscomp$49$$.call($opt_obj$jscomp$44$$, $value$jscomp$102$$, $key$jscomp$69$$, this);
  }
};
$goog$structs$Map$$.prototype.$__iterator__$ = function($opt_keys$jscomp$1$$) {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  var $i$jscomp$72$$ = 0, $version$jscomp$7$$ = this.$f$, $selfObj$jscomp$4$$ = this, $newIter$jscomp$5$$ = new $goog$iter$Iterator$$;
  $newIter$jscomp$5$$.next = function() {
    if ($version$jscomp$7$$ != $selfObj$jscomp$4$$.$f$) {
      throw Error("The map has changed since the iterator was created");
    }
    if ($i$jscomp$72$$ >= $selfObj$jscomp$4$$.$a$.length) {
      throw $goog$iter$StopIteration$$;
    }
    var $newIter$jscomp$5$$ = $selfObj$jscomp$4$$.$a$[$i$jscomp$72$$++];
    return $opt_keys$jscomp$1$$ ? $newIter$jscomp$5$$ : $selfObj$jscomp$4$$.$b$[$newIter$jscomp$5$$];
  };
  return $newIter$jscomp$5$$;
};
var $goog$structs$Map$hasKey_$$ = function($obj$jscomp$75$$, $key$jscomp$73$$) {
  return Object.prototype.hasOwnProperty.call($obj$jscomp$75$$, $key$jscomp$73$$);
};
var $mr$cast$PendingRequest$$ = function($requestId$jscomp$1$$, $timeoutMs$$) {
  this.requestId = $requestId$jscomp$1$$;
  this.$f$ = $timeoutMs$$;
  this.$timeoutId$ = null;
};
$mr$cast$PendingRequest$$.prototype.$b$ = function() {
};
var $mr$cast$PendingRequestsManager$$ = function() {
  this.$a$ = new $goog$structs$Map$$;
}, $JSCompiler_StaticMethods_addRequest$$ = function($JSCompiler_StaticMethods_addRequest$self$$, $request$jscomp$14$$) {
  $JSCompiler_StaticMethods_addRequest$self$$.$a$.set($request$jscomp$14$$.requestId, $request$jscomp$14$$);
  $request$jscomp$14$$.$timeoutId$ = setTimeout(function() {
    $JSCompiler_StaticMethods_addRequest$self$$.$a$.remove($request$jscomp$14$$.requestId);
    $request$jscomp$14$$.$b$();
  }, $request$jscomp$14$$.$f$);
}, $JSCompiler_StaticMethods_removeRequest$$ = function($JSCompiler_StaticMethods_removeRequest$self$$, $requestId$jscomp$2$$) {
  var $request$jscomp$15$$ = $JSCompiler_StaticMethods_removeRequest$self$$.$a$.get($requestId$jscomp$2$$);
  if (!$request$jscomp$15$$) {
    return null;
  }
  clearTimeout($request$jscomp$15$$.$timeoutId$);
  $JSCompiler_StaticMethods_removeRequest$self$$.$a$.remove($requestId$jscomp$2$$);
  return $request$jscomp$15$$;
};
var $mr$Logger$$ = function($name$jscomp$79$$) {
  this.$a$ = $name$jscomp$79$$;
}, $mr$Logger$getInstance$$ = function($name$jscomp$80$$) {
  var $instance$jscomp$1$$ = $mr$Logger$instances_$$.get($name$jscomp$80$$);
  $instance$jscomp$1$$ || ($instance$jscomp$1$$ = new $mr$Logger$$($name$jscomp$80$$), $mr$Logger$instances_$$.set($name$jscomp$80$$, $instance$jscomp$1$$));
  return $instance$jscomp$1$$;
};
$mr$Logger$$.prototype.log = function($level$jscomp$9$$, $message$jscomp$42$$, $exception$jscomp$1$$) {
  if (!(1 > $level$jscomp$9$$)) {
    "function" == typeof $message$jscomp$42$$ && ($message$jscomp$42$$ = $message$jscomp$42$$());
    $message$jscomp$42$$ = $message$jscomp$42$$.replace($mr$Logger$URL_REGEXP_$$, "[Redacted URL]");
    $message$jscomp$42$$ = $message$jscomp$42$$.replace($mr$Logger$DOMAIN_OR_EMAIL_REGEXP_$$, "[Redacted domain/email]");
    var $record$jscomp$1$$ = {$logger$:this.$a$, level:$level$jscomp$9$$, time:Date.now(), message:$message$jscomp$42$$, $exception$:$exception$jscomp$1$$};
    $mr$Logger$handlers_$$.forEach(function($level$jscomp$9$$) {
      return $level$jscomp$9$$($record$jscomp$1$$);
    });
  }
};
$mr$Logger$$.prototype.error = function($message$jscomp$43$$, $exception$jscomp$2$$) {
  this.log(3, $message$jscomp$43$$, $exception$jscomp$2$$);
};
var $JSCompiler_StaticMethods_mr_Logger_prototype$info$$ = function($message$jscomp$45$$) {
  $mr$cast$Api$logger_$$.log(1, $message$jscomp$45$$, void 0);
}, $mr$Logger$handlers_$$ = [], $mr$Logger$instances_$$ = new Map, $mr$Logger$DOMAIN_OR_EMAIL_REGEXP_$$ = /(([\w.+-]+@)|((www|m|mail|ftp)[.]))[\w.-]+[.][\w-]{2,4}/gi, $mr$Logger$URL_REGEXP_$$ = /(data:|https?:\/\/)\S+/gi;
var $goog$labs$userAgent$util$userAgent_$$;
a: {
  var $navigator$jscomp$inline_251$$ = $goog$global$$.navigator;
  if ($navigator$jscomp$inline_251$$) {
    var $userAgent$jscomp$inline_252$$ = $navigator$jscomp$inline_251$$.userAgent;
    if ($userAgent$jscomp$inline_252$$) {
      $goog$labs$userAgent$util$userAgent_$$ = $userAgent$jscomp$inline_252$$;
      break a;
    }
  }
  $goog$labs$userAgent$util$userAgent_$$ = "";
}
var $goog$labs$userAgent$util$matchUserAgent$$ = function($str$jscomp$61$$) {
  return -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf($str$jscomp$61$$);
};
var $goog$Disposable$$ = function() {
  this.$b$ = this.$b$;
  this.$h$ = this.$h$;
};
$goog$Disposable$$.prototype.$b$ = !1;
var $goog$reflect$cache$$ = function($key$jscomp$77$$, $valueFn$$) {
  var $cacheObj$$ = $goog$userAgent$isVersionOrHigherCache_$$;
  return Object.prototype.hasOwnProperty.call($cacheObj$$, $key$jscomp$77$$) ? $cacheObj$$[$key$jscomp$77$$] : $cacheObj$$[$key$jscomp$77$$] = $valueFn$$($key$jscomp$77$$);
};
var $goog$userAgent$OPERA$$ = $goog$labs$userAgent$util$matchUserAgent$$("Opera"), $goog$userAgent$IE$$ = $goog$labs$userAgent$util$matchUserAgent$$("Trident") || $goog$labs$userAgent$util$matchUserAgent$$("MSIE"), $goog$userAgent$EDGE$$ = $goog$labs$userAgent$util$matchUserAgent$$("Edge"), $goog$userAgent$GECKO$$ = $goog$labs$userAgent$util$matchUserAgent$$("Gecko") && !(-1 != $goog$labs$userAgent$util$userAgent_$$.toLowerCase().indexOf("webkit") && !$goog$labs$userAgent$util$matchUserAgent$$("Edge")) && 
!($goog$labs$userAgent$util$matchUserAgent$$("Trident") || $goog$labs$userAgent$util$matchUserAgent$$("MSIE")) && !$goog$labs$userAgent$util$matchUserAgent$$("Edge"), $goog$userAgent$WEBKIT$$ = -1 != $goog$labs$userAgent$util$userAgent_$$.toLowerCase().indexOf("webkit") && !$goog$labs$userAgent$util$matchUserAgent$$("Edge"), $JSCompiler_inline_result$jscomp$14$$;
a: {
  var $version$jscomp$inline_261$$ = "", $arr$jscomp$inline_262$$ = function() {
    var $userAgent$jscomp$6$$ = $goog$labs$userAgent$util$userAgent_$$;
    if ($goog$userAgent$GECKO$$) {
      return /rv\:([^\);]+)(\)|;)/.exec($userAgent$jscomp$6$$);
    }
    if ($goog$userAgent$EDGE$$) {
      return /Edge\/([\d\.]+)/.exec($userAgent$jscomp$6$$);
    }
    if ($goog$userAgent$IE$$) {
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($userAgent$jscomp$6$$);
    }
    if ($goog$userAgent$WEBKIT$$) {
      return /WebKit\/(\S+)/.exec($userAgent$jscomp$6$$);
    }
    if ($goog$userAgent$OPERA$$) {
      return /(?:Version)[ \/]?(\S+)/.exec($userAgent$jscomp$6$$);
    }
  }();
  $arr$jscomp$inline_262$$ && ($version$jscomp$inline_261$$ = $arr$jscomp$inline_262$$ ? $arr$jscomp$inline_262$$[1] : "");
  if ($goog$userAgent$IE$$) {
    var $docMode$jscomp$inline_263$$, $doc$jscomp$inline_455$$ = $goog$global$$.document;
    $docMode$jscomp$inline_263$$ = $doc$jscomp$inline_455$$ ? $doc$jscomp$inline_455$$.documentMode : void 0;
    if (null != $docMode$jscomp$inline_263$$ && $docMode$jscomp$inline_263$$ > parseFloat($version$jscomp$inline_261$$)) {
      $JSCompiler_inline_result$jscomp$14$$ = String($docMode$jscomp$inline_263$$);
      break a;
    }
  }
  $JSCompiler_inline_result$jscomp$14$$ = $version$jscomp$inline_261$$;
}
var $goog$userAgent$VERSION$$ = $JSCompiler_inline_result$jscomp$14$$, $goog$userAgent$isVersionOrHigherCache_$$ = {}, $goog$userAgent$isVersionOrHigher$$ = function($version$jscomp$14$$) {
  return $goog$reflect$cache$$($version$jscomp$14$$, function() {
    for (var $order$jscomp$inline_267$$ = 0, $v1Subs$jscomp$inline_268$$ = $goog$string$trim$$(String($goog$userAgent$VERSION$$)).split("."), $v2Subs$jscomp$inline_269$$ = $goog$string$trim$$(String($version$jscomp$14$$)).split("."), $subCount$jscomp$inline_270$$ = Math.max($v1Subs$jscomp$inline_268$$.length, $v2Subs$jscomp$inline_269$$.length), $subIdx$jscomp$inline_271$$ = 0; 0 == $order$jscomp$inline_267$$ && $subIdx$jscomp$inline_271$$ < $subCount$jscomp$inline_270$$; $subIdx$jscomp$inline_271$$++) {
      var $v1Comp$jscomp$inline_274_v1Sub$jscomp$inline_272$$ = $v1Subs$jscomp$inline_268$$[$subIdx$jscomp$inline_271$$] || "", $v2Comp$jscomp$inline_275_v2Sub$jscomp$inline_273$$ = $v2Subs$jscomp$inline_269$$[$subIdx$jscomp$inline_271$$] || "";
      do {
        $v1Comp$jscomp$inline_274_v1Sub$jscomp$inline_272$$ = /(\d*)(\D*)(.*)/.exec($v1Comp$jscomp$inline_274_v1Sub$jscomp$inline_272$$) || ["", "", "", ""];
        $v2Comp$jscomp$inline_275_v2Sub$jscomp$inline_273$$ = /(\d*)(\D*)(.*)/.exec($v2Comp$jscomp$inline_275_v2Sub$jscomp$inline_273$$) || ["", "", "", ""];
        if (0 == $v1Comp$jscomp$inline_274_v1Sub$jscomp$inline_272$$[0].length && 0 == $v2Comp$jscomp$inline_275_v2Sub$jscomp$inline_273$$[0].length) {
          break;
        }
        $order$jscomp$inline_267$$ = $goog$string$compareElements_$$(0 == $v1Comp$jscomp$inline_274_v1Sub$jscomp$inline_272$$[1].length ? 0 : parseInt($v1Comp$jscomp$inline_274_v1Sub$jscomp$inline_272$$[1], 10), 0 == $v2Comp$jscomp$inline_275_v2Sub$jscomp$inline_273$$[1].length ? 0 : parseInt($v2Comp$jscomp$inline_275_v2Sub$jscomp$inline_273$$[1], 10)) || $goog$string$compareElements_$$(0 == $v1Comp$jscomp$inline_274_v1Sub$jscomp$inline_272$$[2].length, 0 == $v2Comp$jscomp$inline_275_v2Sub$jscomp$inline_273$$[2].length) || 
        $goog$string$compareElements_$$($v1Comp$jscomp$inline_274_v1Sub$jscomp$inline_272$$[2], $v2Comp$jscomp$inline_275_v2Sub$jscomp$inline_273$$[2]);
        $v1Comp$jscomp$inline_274_v1Sub$jscomp$inline_272$$ = $v1Comp$jscomp$inline_274_v1Sub$jscomp$inline_272$$[3];
        $v2Comp$jscomp$inline_275_v2Sub$jscomp$inline_273$$ = $v2Comp$jscomp$inline_275_v2Sub$jscomp$inline_273$$[3];
      } while (0 == $order$jscomp$inline_267$$);
    }
    return 0 <= $order$jscomp$inline_267$$;
  });
};
$goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("9");
!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersionOrHigher$$("528");
$goog$userAgent$GECKO$$ && $goog$userAgent$isVersionOrHigher$$("1.9b") || $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("8") || $goog$userAgent$OPERA$$ && $goog$userAgent$isVersionOrHigher$$("9.5") || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersionOrHigher$$("528");
$goog$userAgent$GECKO$$ && !$goog$userAgent$isVersionOrHigher$$("8") || $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("9");
var $goog$async$Throttle$$ = function($listener$jscomp$126$$, $interval$jscomp$4$$, $opt_handler$jscomp$10$$) {
  $goog$Disposable$$.call(this);
  this.$g$ = null != $opt_handler$jscomp$10$$ ? $goog$bind$$($listener$jscomp$126$$, $opt_handler$jscomp$10$$) : $listener$jscomp$126$$;
  this.$f$ = $interval$jscomp$4$$;
  this.$c$ = $goog$bind$$(this.$onTimer_$, this);
  this.$a$ = [];
};
$goog$inherits$$($goog$async$Throttle$$, $goog$Disposable$$);
$JSCompiler_prototypeAlias$$ = $goog$async$Throttle$$.prototype;
$JSCompiler_prototypeAlias$$.$shouldFire_$ = !1;
$JSCompiler_prototypeAlias$$.$pauseCount_$ = 0;
$JSCompiler_prototypeAlias$$.$timer_$ = null;
$JSCompiler_prototypeAlias$$.$fire$ = function($var_args$jscomp$94$$) {
  this.$a$ = arguments;
  this.$timer_$ || this.$pauseCount_$ ? this.$shouldFire_$ = !0 : $JSCompiler_StaticMethods_doAction_$$(this);
};
$JSCompiler_prototypeAlias$$.stop = function() {
  this.$timer_$ && ($goog$global$$.clearTimeout(this.$timer_$), this.$timer_$ = null, this.$shouldFire_$ = !1, this.$a$ = []);
};
$JSCompiler_prototypeAlias$$.pause = function() {
  this.$pauseCount_$++;
};
$JSCompiler_prototypeAlias$$.resume = function() {
  this.$pauseCount_$--;
  this.$pauseCount_$ || !this.$shouldFire_$ || this.$timer_$ || (this.$shouldFire_$ = !1, $JSCompiler_StaticMethods_doAction_$$(this));
};
$JSCompiler_prototypeAlias$$.$onTimer_$ = function() {
  this.$timer_$ = null;
  this.$shouldFire_$ && !this.$pauseCount_$ && (this.$shouldFire_$ = !1, $JSCompiler_StaticMethods_doAction_$$(this));
};
var $JSCompiler_StaticMethods_doAction_$$ = function($JSCompiler_StaticMethods_doAction_$self$$) {
  var $JSCompiler_inline_result$jscomp$20_listener$jscomp$inline_339$$ = $JSCompiler_StaticMethods_doAction_$self$$.$c$;
  var $opt_delay$jscomp$inline_340$$ = $JSCompiler_StaticMethods_doAction_$self$$.$f$;
  if ("function" != $goog$typeOf$$($JSCompiler_inline_result$jscomp$20_listener$jscomp$inline_339$$)) {
    if ($JSCompiler_inline_result$jscomp$20_listener$jscomp$inline_339$$ && "function" == typeof $JSCompiler_inline_result$jscomp$20_listener$jscomp$inline_339$$.handleEvent) {
      $JSCompiler_inline_result$jscomp$20_listener$jscomp$inline_339$$ = $goog$bind$$($JSCompiler_inline_result$jscomp$20_listener$jscomp$inline_339$$.handleEvent, $JSCompiler_inline_result$jscomp$20_listener$jscomp$inline_339$$);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  $JSCompiler_inline_result$jscomp$20_listener$jscomp$inline_339$$ = 2147483647 < Number($opt_delay$jscomp$inline_340$$) ? -1 : $goog$global$$.setTimeout($JSCompiler_inline_result$jscomp$20_listener$jscomp$inline_339$$, $opt_delay$jscomp$inline_340$$ || 0);
  $JSCompiler_StaticMethods_doAction_$self$$.$timer_$ = $JSCompiler_inline_result$jscomp$20_listener$jscomp$inline_339$$;
  $JSCompiler_StaticMethods_doAction_$self$$.$g$.apply(null, $JSCompiler_StaticMethods_doAction_$self$$.$a$);
};
var $goog$userAgent$product$SAFARI$$ = $goog$labs$userAgent$util$matchUserAgent$$("Safari") && !(($goog$labs$userAgent$util$matchUserAgent$$("Chrome") || $goog$labs$userAgent$util$matchUserAgent$$("CriOS")) && !$goog$labs$userAgent$util$matchUserAgent$$("Edge") || $goog$labs$userAgent$util$matchUserAgent$$("Coast") || $goog$labs$userAgent$util$matchUserAgent$$("Opera") || $goog$labs$userAgent$util$matchUserAgent$$("Edge") || $goog$labs$userAgent$util$matchUserAgent$$("Silk") || $goog$labs$userAgent$util$matchUserAgent$$("Android")) && 
!($goog$labs$userAgent$util$matchUserAgent$$("iPhone") && !$goog$labs$userAgent$util$matchUserAgent$$("iPod") && !$goog$labs$userAgent$util$matchUserAgent$$("iPad") || $goog$labs$userAgent$util$matchUserAgent$$("iPad") || $goog$labs$userAgent$util$matchUserAgent$$("iPod"));
var $goog$crypt$base64$byteToCharMap_$$ = null, $goog$crypt$base64$HAS_NATIVE_ENCODE_$$ = $goog$userAgent$GECKO$$ || $goog$userAgent$WEBKIT$$ && !$goog$userAgent$product$SAFARI$$ || $goog$userAgent$OPERA$$ || "function" == typeof $goog$global$$.btoa, $goog$crypt$base64$encodeString$$ = function($byteToCharMap$jscomp$inline_351_i$jscomp$inline_457_input$jscomp$10$$) {
  if ($goog$crypt$base64$HAS_NATIVE_ENCODE_$$) {
    var $JSCompiler_temp$jscomp$21_output$jscomp$inline_344$$ = $goog$global$$.btoa($byteToCharMap$jscomp$inline_351_i$jscomp$inline_457_input$jscomp$10$$);
  } else {
    $JSCompiler_temp$jscomp$21_output$jscomp$inline_344$$ = [];
    for (var $output$jscomp$inline_352_p$jscomp$inline_345$$ = 0, $i$jscomp$inline_346_i$jscomp$inline_353$$ = 0; $i$jscomp$inline_346_i$jscomp$inline_353$$ < $byteToCharMap$jscomp$inline_351_i$jscomp$inline_457_input$jscomp$10$$.length; $i$jscomp$inline_346_i$jscomp$inline_353$$++) {
      for (var $c$jscomp$inline_347_haveByte2$jscomp$inline_355$$ = $byteToCharMap$jscomp$inline_351_i$jscomp$inline_457_input$jscomp$10$$.charCodeAt($i$jscomp$inline_346_i$jscomp$inline_353$$); 255 < $c$jscomp$inline_347_haveByte2$jscomp$inline_355$$;) {
        $JSCompiler_temp$jscomp$21_output$jscomp$inline_344$$[$output$jscomp$inline_352_p$jscomp$inline_345$$++] = $c$jscomp$inline_347_haveByte2$jscomp$inline_355$$ & 255, $c$jscomp$inline_347_haveByte2$jscomp$inline_355$$ >>= 8;
      }
      $JSCompiler_temp$jscomp$21_output$jscomp$inline_344$$[$output$jscomp$inline_352_p$jscomp$inline_345$$++] = $c$jscomp$inline_347_haveByte2$jscomp$inline_355$$;
    }
    $goog$asserts$assert$$($goog$isArrayLike$$($JSCompiler_temp$jscomp$21_output$jscomp$inline_344$$), "encodeByteArray takes an array as a parameter");
    if (!$goog$crypt$base64$byteToCharMap_$$) {
      for ($goog$crypt$base64$byteToCharMap_$$ = {}, $byteToCharMap$jscomp$inline_351_i$jscomp$inline_457_input$jscomp$10$$ = 0; 65 > $byteToCharMap$jscomp$inline_351_i$jscomp$inline_457_input$jscomp$10$$; $byteToCharMap$jscomp$inline_351_i$jscomp$inline_457_input$jscomp$10$$++) {
        $goog$crypt$base64$byteToCharMap_$$[$byteToCharMap$jscomp$inline_351_i$jscomp$inline_457_input$jscomp$10$$] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt($byteToCharMap$jscomp$inline_351_i$jscomp$inline_457_input$jscomp$10$$);
      }
    }
    $byteToCharMap$jscomp$inline_351_i$jscomp$inline_457_input$jscomp$10$$ = $goog$crypt$base64$byteToCharMap_$$;
    $output$jscomp$inline_352_p$jscomp$inline_345$$ = [];
    for ($i$jscomp$inline_346_i$jscomp$inline_353$$ = 0; $i$jscomp$inline_346_i$jscomp$inline_353$$ < $JSCompiler_temp$jscomp$21_output$jscomp$inline_344$$.length; $i$jscomp$inline_346_i$jscomp$inline_353$$ += 3) {
      var $byte1$jscomp$inline_354_outByte2$jscomp$inline_360$$ = $JSCompiler_temp$jscomp$21_output$jscomp$inline_344$$[$i$jscomp$inline_346_i$jscomp$inline_353$$], $byte2$jscomp$inline_356_outByte3$jscomp$inline_361$$ = ($c$jscomp$inline_347_haveByte2$jscomp$inline_355$$ = $i$jscomp$inline_346_i$jscomp$inline_353$$ + 1 < $JSCompiler_temp$jscomp$21_output$jscomp$inline_344$$.length) ? $JSCompiler_temp$jscomp$21_output$jscomp$inline_344$$[$i$jscomp$inline_346_i$jscomp$inline_353$$ + 1] : 0, $haveByte3$jscomp$inline_357$$ = 
      $i$jscomp$inline_346_i$jscomp$inline_353$$ + 2 < $JSCompiler_temp$jscomp$21_output$jscomp$inline_344$$.length, $byte3$jscomp$inline_358_outByte4$jscomp$inline_362$$ = $haveByte3$jscomp$inline_357$$ ? $JSCompiler_temp$jscomp$21_output$jscomp$inline_344$$[$i$jscomp$inline_346_i$jscomp$inline_353$$ + 2] : 0, $outByte1$jscomp$inline_359$$ = $byte1$jscomp$inline_354_outByte2$jscomp$inline_360$$ >> 2, $byte1$jscomp$inline_354_outByte2$jscomp$inline_360$$ = ($byte1$jscomp$inline_354_outByte2$jscomp$inline_360$$ & 
      3) << 4 | $byte2$jscomp$inline_356_outByte3$jscomp$inline_361$$ >> 4, $byte2$jscomp$inline_356_outByte3$jscomp$inline_361$$ = ($byte2$jscomp$inline_356_outByte3$jscomp$inline_361$$ & 15) << 2 | $byte3$jscomp$inline_358_outByte4$jscomp$inline_362$$ >> 6, $byte3$jscomp$inline_358_outByte4$jscomp$inline_362$$ = $byte3$jscomp$inline_358_outByte4$jscomp$inline_362$$ & 63;
      $haveByte3$jscomp$inline_357$$ || ($byte3$jscomp$inline_358_outByte4$jscomp$inline_362$$ = 64, $c$jscomp$inline_347_haveByte2$jscomp$inline_355$$ || ($byte2$jscomp$inline_356_outByte3$jscomp$inline_361$$ = 64));
      $output$jscomp$inline_352_p$jscomp$inline_345$$.push($byteToCharMap$jscomp$inline_351_i$jscomp$inline_457_input$jscomp$10$$[$outByte1$jscomp$inline_359$$], $byteToCharMap$jscomp$inline_351_i$jscomp$inline_457_input$jscomp$10$$[$byte1$jscomp$inline_354_outByte2$jscomp$inline_360$$], $byteToCharMap$jscomp$inline_351_i$jscomp$inline_457_input$jscomp$10$$[$byte2$jscomp$inline_356_outByte3$jscomp$inline_361$$], $byteToCharMap$jscomp$inline_351_i$jscomp$inline_457_input$jscomp$10$$[$byte3$jscomp$inline_358_outByte4$jscomp$inline_362$$]);
    }
    $JSCompiler_temp$jscomp$21_output$jscomp$inline_344$$ = $output$jscomp$inline_352_p$jscomp$inline_345$$.join("");
  }
  return $JSCompiler_temp$jscomp$21_output$jscomp$inline_344$$;
};
var $goog$structs$getValues$$ = function($col$jscomp$1$$) {
  if ($col$jscomp$1$$.$getValues$ && "function" == typeof $col$jscomp$1$$.$getValues$) {
    return $col$jscomp$1$$.$getValues$();
  }
  if ($goog$isString$$($col$jscomp$1$$)) {
    return $col$jscomp$1$$.split("");
  }
  if ($goog$isArrayLike$$($col$jscomp$1$$)) {
    for (var $rv$jscomp$13$$ = [], $l$jscomp$12$$ = $col$jscomp$1$$.length, $i$jscomp$103$$ = 0; $i$jscomp$103$$ < $l$jscomp$12$$; $i$jscomp$103$$++) {
      $rv$jscomp$13$$.push($col$jscomp$1$$[$i$jscomp$103$$]);
    }
    return $rv$jscomp$13$$;
  }
  return $goog$object$getValues$$($col$jscomp$1$$);
};
var $goog$structs$Set$$ = function($opt_values$jscomp$1_values$jscomp$inline_366$$) {
  this.$a$ = new $goog$structs$Map$$;
  if ($opt_values$jscomp$1_values$jscomp$inline_366$$) {
    $opt_values$jscomp$1_values$jscomp$inline_366$$ = $goog$structs$getValues$$($opt_values$jscomp$1_values$jscomp$inline_366$$);
    for (var $l$jscomp$inline_367$$ = $opt_values$jscomp$1_values$jscomp$inline_366$$.length, $i$jscomp$inline_368$$ = 0; $i$jscomp$inline_368$$ < $l$jscomp$inline_367$$; $i$jscomp$inline_368$$++) {
      this.add($opt_values$jscomp$1_values$jscomp$inline_366$$[$i$jscomp$inline_368$$]);
    }
  }
}, $goog$structs$Set$getKey_$$ = function($val$jscomp$35$$) {
  var $type$jscomp$148$$ = typeof $val$jscomp$35$$;
  return "object" == $type$jscomp$148$$ && $val$jscomp$35$$ || "function" == $type$jscomp$148$$ ? "o" + ($val$jscomp$35$$[$goog$UID_PROPERTY_$$] || ($val$jscomp$35$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$)) : $type$jscomp$148$$.substr(0, 1) + $val$jscomp$35$$;
};
$JSCompiler_prototypeAlias$$ = $goog$structs$Set$$.prototype;
$JSCompiler_prototypeAlias$$.add = function($element$jscomp$9$$) {
  this.$a$.set($goog$structs$Set$getKey_$$($element$jscomp$9$$), $element$jscomp$9$$);
};
$JSCompiler_prototypeAlias$$.removeAll = function($col$jscomp$12_values$jscomp$16$$) {
  $col$jscomp$12_values$jscomp$16$$ = $goog$structs$getValues$$($col$jscomp$12_values$jscomp$16$$);
  for (var $l$jscomp$20$$ = $col$jscomp$12_values$jscomp$16$$.length, $i$jscomp$111$$ = 0; $i$jscomp$111$$ < $l$jscomp$20$$; $i$jscomp$111$$++) {
    this.remove($col$jscomp$12_values$jscomp$16$$[$i$jscomp$111$$]);
  }
};
$JSCompiler_prototypeAlias$$.remove = function($element$jscomp$10$$) {
  return this.$a$.remove($goog$structs$Set$getKey_$$($element$jscomp$10$$));
};
$JSCompiler_prototypeAlias$$.clear = function() {
  this.$a$.clear();
};
$JSCompiler_prototypeAlias$$.contains = function($element$jscomp$11_key$jscomp$inline_371$$) {
  $element$jscomp$11_key$jscomp$inline_371$$ = $goog$structs$Set$getKey_$$($element$jscomp$11_key$jscomp$inline_371$$);
  return $goog$structs$Map$hasKey_$$(this.$a$.$b$, $element$jscomp$11_key$jscomp$inline_371$$);
};
$JSCompiler_prototypeAlias$$.$getValues$ = function() {
  return this.$a$.$getValues$();
};
$JSCompiler_prototypeAlias$$.$__iterator__$ = function() {
  return this.$a$.$__iterator__$(!1);
};
var $mr$cast$ApiCallbackInfo$$ = function($sequenceNumber$$, $successCallback$jscomp$70$$, $errorCallback$jscomp$63$$, $opt_timeoutMillis$jscomp$2$$) {
  $mr$cast$PendingRequest$$.call(this, $sequenceNumber$$, $opt_timeoutMillis$jscomp$2$$ || 6E5);
  this.$c$ = $successCallback$jscomp$70$$;
  this.$a$ = $errorCallback$jscomp$63$$;
};
$$jscomp$inherits$$($mr$cast$ApiCallbackInfo$$, $mr$cast$PendingRequest$$);
$mr$cast$ApiCallbackInfo$$.prototype.$b$ = function() {
  this.$a$(new chrome.cast.Error(chrome.cast.$ErrorCode$.TIMEOUT));
};
var $mr$cast$InternalMessage$$ = function($type$jscomp$149$$, $message$jscomp$49$$, $opt_sequenceNumber$$, $opt_timeoutMillis$jscomp$3$$) {
  this.type = $type$jscomp$149$$;
  this.message = $message$jscomp$49$$;
  this.sequenceNumber = void 0 !== $opt_sequenceNumber$$ ? $opt_sequenceNumber$$ : -1;
  this.timeoutMillis = $opt_timeoutMillis$jscomp$3$$ || 0;
  this.clientId = "";
};
var $mr$cast$ExtensionMessenger$$ = function($callback$jscomp$415$$, $opt_clientId$$) {
  this.$c$ = $callback$jscomp$415$$;
  this.$b$ = $opt_clientId$$ || String(Date.now()) + String(Math.floor(1e5 * Math.random()));
  this.$a$ = null;
}, $JSCompiler_StaticMethods_sendToBackground$$ = function($JSCompiler_StaticMethods_sendToBackground$self$$, $message$jscomp$51_msg$jscomp$1$$) {
  if (!$JSCompiler_StaticMethods_sendToBackground$self$$.$a$) {
    return $mr$cast$ExtensionMessenger$logger_$$.error("No active session"), "No active session";
  }
  $message$jscomp$51_msg$jscomp$1$$.clientId = $JSCompiler_StaticMethods_sendToBackground$self$$.$b$;
  $message$jscomp$51_msg$jscomp$1$$ = JSON.stringify($message$jscomp$51_msg$jscomp$1$$);
  if (32768 < $message$jscomp$51_msg$jscomp$1$$.length) {
    return $mr$cast$ExtensionMessenger$logger_$$.error("Message length over limit"), "Message length over limit";
  }
  $mr$cast$ExtensionMessenger$logger_$$.log(0, "Send " + $message$jscomp$51_msg$jscomp$1$$, void 0);
  $JSCompiler_StaticMethods_sendToBackground$self$$.$a$.send($message$jscomp$51_msg$jscomp$1$$);
  return null;
};
$mr$cast$ExtensionMessenger$$.prototype.connect = function($connection$$) {
  this.$a$ = $connection$$;
  this.$a$.onmessage = $goog$bind$$(this.$f$, this);
  $JSCompiler_StaticMethods_sendToBackground$$(this, new $mr$cast$InternalMessage$$("client_connect", this.$b$));
};
$mr$cast$ExtensionMessenger$$.prototype.disconnect = function() {
  this.$a$.close();
  this.$a$ = null;
};
$mr$cast$ExtensionMessenger$$.prototype.$f$ = function($e$jscomp$30_message$jscomp$53$$) {
  $mr$cast$ExtensionMessenger$logger_$$.log(0, "Receive " + $e$jscomp$30_message$jscomp$53$$.data, void 0);
  $e$jscomp$30_message$jscomp$53$$ = JSON.parse($e$jscomp$30_message$jscomp$53$$.data);
  if ($e$jscomp$30_message$jscomp$53$$.clientId == this.$b$) {
    this.$c$.onMessage($e$jscomp$30_message$jscomp$53$$);
  }
};
var $mr$cast$ExtensionMessenger$logger_$$ = $mr$Logger$getInstance$$("mr.cast.ExtensionMessenger");
var $goog$uri$utils$splitRe_$$ = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/, $goog$uri$utils$parseQueryData$$ = function($encodedQuery_pairs$jscomp$2$$, $callback$jscomp$416$$) {
  if ($encodedQuery_pairs$jscomp$2$$) {
    $encodedQuery_pairs$jscomp$2$$ = $encodedQuery_pairs$jscomp$2$$.split("&");
    for (var $i$jscomp$113$$ = 0; $i$jscomp$113$$ < $encodedQuery_pairs$jscomp$2$$.length; $i$jscomp$113$$++) {
      var $indexOfEquals$$ = $encodedQuery_pairs$jscomp$2$$[$i$jscomp$113$$].indexOf("="), $value$jscomp$116$$ = null;
      if (0 <= $indexOfEquals$$) {
        var $name$jscomp$81$$ = $encodedQuery_pairs$jscomp$2$$[$i$jscomp$113$$].substring(0, $indexOfEquals$$);
        $value$jscomp$116$$ = $encodedQuery_pairs$jscomp$2$$[$i$jscomp$113$$].substring($indexOfEquals$$ + 1);
      } else {
        $name$jscomp$81$$ = $encodedQuery_pairs$jscomp$2$$[$i$jscomp$113$$];
      }
      $callback$jscomp$416$$($name$jscomp$81$$, $value$jscomp$116$$ ? decodeURIComponent($value$jscomp$116$$.replace(/\+/g, " ")) : "");
    }
  }
};
var $goog$Uri$$ = function($opt_uri$$, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_377_opt_ignoreCase$$) {
  this.$f$ = this.$h$ = this.$b$ = "";
  this.$g$ = null;
  this.$i$ = this.$j$ = "";
  this.$a$ = !1;
  if ($opt_uri$$ instanceof $goog$Uri$$) {
    this.$a$ = void 0 !== $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_377_opt_ignoreCase$$ ? $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_377_opt_ignoreCase$$ : $opt_uri$$.$a$;
    $JSCompiler_StaticMethods_setScheme$$(this, $opt_uri$$.$b$);
    this.$h$ = $opt_uri$$.$h$;
    $JSCompiler_StaticMethods_setDomain$$(this, $opt_uri$$.$f$);
    $JSCompiler_StaticMethods_setPort$$(this, $opt_uri$$.$g$);
    $JSCompiler_StaticMethods_setPath$$(this, $opt_uri$$.$j$);
    $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_377_opt_ignoreCase$$ = $opt_uri$$.$c$;
    var $m_rv$jscomp$inline_378$$ = new $goog$Uri$QueryData$$;
    $m_rv$jscomp$inline_378$$.$c$ = $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_377_opt_ignoreCase$$.$c$;
    $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_377_opt_ignoreCase$$.$a$ && ($m_rv$jscomp$inline_378$$.$a$ = new $goog$structs$Map$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_377_opt_ignoreCase$$.$a$), $m_rv$jscomp$inline_378$$.$b$ = $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_377_opt_ignoreCase$$.$b$);
    $JSCompiler_StaticMethods_setQueryData$$(this, $m_rv$jscomp$inline_378$$);
    $JSCompiler_StaticMethods_setFragment$$(this, $opt_uri$$.$i$);
  } else {
    $opt_uri$$ && ($m_rv$jscomp$inline_378$$ = String($opt_uri$$).match($goog$uri$utils$splitRe_$$)) ? (this.$a$ = !!$JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_377_opt_ignoreCase$$, $JSCompiler_StaticMethods_setScheme$$(this, $m_rv$jscomp$inline_378$$[1] || "", !0), this.$h$ = $goog$Uri$decodeOrEmpty_$$($m_rv$jscomp$inline_378$$[2] || ""), $JSCompiler_StaticMethods_setDomain$$(this, $m_rv$jscomp$inline_378$$[3] || "", !0), $JSCompiler_StaticMethods_setPort$$(this, 
    $m_rv$jscomp$inline_378$$[4]), $JSCompiler_StaticMethods_setPath$$(this, $m_rv$jscomp$inline_378$$[5] || "", !0), $JSCompiler_StaticMethods_setQueryData$$(this, $m_rv$jscomp$inline_378$$[6] || "", !0), $JSCompiler_StaticMethods_setFragment$$(this, $m_rv$jscomp$inline_378$$[7] || "", !0)) : (this.$a$ = !!$JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_377_opt_ignoreCase$$, this.$c$ = new $goog$Uri$QueryData$$(null, 0, this.$a$));
  }
};
$goog$Uri$$.prototype.toString = function() {
  var $out$jscomp$3$$ = [], $scheme$jscomp$3_userInfo$$ = this.$b$;
  $scheme$jscomp$3_userInfo$$ && $out$jscomp$3$$.push($goog$Uri$encodeSpecialChars_$$($scheme$jscomp$3_userInfo$$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$, !0), ":");
  var $domain$jscomp$2_fragment$jscomp$1_path$jscomp$19_port$jscomp$4_query$jscomp$6$$ = this.$f$;
  if ($domain$jscomp$2_fragment$jscomp$1_path$jscomp$19_port$jscomp$4_query$jscomp$6$$ || "file" == $scheme$jscomp$3_userInfo$$) {
    $out$jscomp$3$$.push("//"), ($scheme$jscomp$3_userInfo$$ = this.$h$) && $out$jscomp$3$$.push($goog$Uri$encodeSpecialChars_$$($scheme$jscomp$3_userInfo$$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$, !0), "@"), $out$jscomp$3$$.push(encodeURIComponent(String($domain$jscomp$2_fragment$jscomp$1_path$jscomp$19_port$jscomp$4_query$jscomp$6$$)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), $domain$jscomp$2_fragment$jscomp$1_path$jscomp$19_port$jscomp$4_query$jscomp$6$$ = this.$g$, null != $domain$jscomp$2_fragment$jscomp$1_path$jscomp$19_port$jscomp$4_query$jscomp$6$$ && 
    $out$jscomp$3$$.push(":", String($domain$jscomp$2_fragment$jscomp$1_path$jscomp$19_port$jscomp$4_query$jscomp$6$$));
  }
  if ($domain$jscomp$2_fragment$jscomp$1_path$jscomp$19_port$jscomp$4_query$jscomp$6$$ = this.$j$) {
    this.$f$ && "/" != $domain$jscomp$2_fragment$jscomp$1_path$jscomp$19_port$jscomp$4_query$jscomp$6$$.charAt(0) && $out$jscomp$3$$.push("/"), $out$jscomp$3$$.push($goog$Uri$encodeSpecialChars_$$($domain$jscomp$2_fragment$jscomp$1_path$jscomp$19_port$jscomp$4_query$jscomp$6$$, "/" == $domain$jscomp$2_fragment$jscomp$1_path$jscomp$19_port$jscomp$4_query$jscomp$6$$.charAt(0) ? $goog$Uri$reDisallowedInAbsolutePath_$$ : $goog$Uri$reDisallowedInRelativePath_$$, !0));
  }
  ($domain$jscomp$2_fragment$jscomp$1_path$jscomp$19_port$jscomp$4_query$jscomp$6$$ = this.$c$.toString()) && $out$jscomp$3$$.push("?", $domain$jscomp$2_fragment$jscomp$1_path$jscomp$19_port$jscomp$4_query$jscomp$6$$);
  ($domain$jscomp$2_fragment$jscomp$1_path$jscomp$19_port$jscomp$4_query$jscomp$6$$ = this.$i$) && $out$jscomp$3$$.push("#", $goog$Uri$encodeSpecialChars_$$($domain$jscomp$2_fragment$jscomp$1_path$jscomp$19_port$jscomp$4_query$jscomp$6$$, $goog$Uri$reDisallowedInFragment_$$));
  return $out$jscomp$3$$.join("");
};
var $JSCompiler_StaticMethods_setScheme$$ = function($JSCompiler_StaticMethods_setScheme$self$$, $newScheme$$, $opt_decode$$) {
  $JSCompiler_StaticMethods_setScheme$self$$.$b$ = $opt_decode$$ ? $goog$Uri$decodeOrEmpty_$$($newScheme$$, !0) : $newScheme$$;
  $JSCompiler_StaticMethods_setScheme$self$$.$b$ && ($JSCompiler_StaticMethods_setScheme$self$$.$b$ = $JSCompiler_StaticMethods_setScheme$self$$.$b$.replace(/:$/, ""));
}, $JSCompiler_StaticMethods_setDomain$$ = function($JSCompiler_StaticMethods_setDomain$self$$, $newDomain$$, $opt_decode$jscomp$2$$) {
  $JSCompiler_StaticMethods_setDomain$self$$.$f$ = $opt_decode$jscomp$2$$ ? $goog$Uri$decodeOrEmpty_$$($newDomain$$, !0) : $newDomain$$;
}, $JSCompiler_StaticMethods_setPort$$ = function($JSCompiler_StaticMethods_setPort$self$$, $newPort$$) {
  if ($newPort$$) {
    $newPort$$ = Number($newPort$$);
    if (isNaN($newPort$$) || 0 > $newPort$$) {
      throw Error("Bad port number " + $newPort$$);
    }
    $JSCompiler_StaticMethods_setPort$self$$.$g$ = $newPort$$;
  } else {
    $JSCompiler_StaticMethods_setPort$self$$.$g$ = null;
  }
}, $JSCompiler_StaticMethods_setPath$$ = function($JSCompiler_StaticMethods_setPath$self$$, $newPath$$, $opt_decode$jscomp$3$$) {
  $JSCompiler_StaticMethods_setPath$self$$.$j$ = $opt_decode$jscomp$3$$ ? $goog$Uri$decodeOrEmpty_$$($newPath$$, !0) : $newPath$$;
}, $JSCompiler_StaticMethods_setQueryData$$ = function($JSCompiler_StaticMethods_setQueryData$self$$, $queryData$jscomp$6$$, $opt_decode$jscomp$4$$) {
  $queryData$jscomp$6$$ instanceof $goog$Uri$QueryData$$ ? ($JSCompiler_StaticMethods_setQueryData$self$$.$c$ = $queryData$jscomp$6$$, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$$($JSCompiler_StaticMethods_setQueryData$self$$.$c$, $JSCompiler_StaticMethods_setQueryData$self$$.$a$)) : ($opt_decode$jscomp$4$$ || ($queryData$jscomp$6$$ = $goog$Uri$encodeSpecialChars_$$($queryData$jscomp$6$$, $goog$Uri$reDisallowedInQuery_$$)), $JSCompiler_StaticMethods_setQueryData$self$$.$c$ = 
  new $goog$Uri$QueryData$$($queryData$jscomp$6$$, 0, $JSCompiler_StaticMethods_setQueryData$self$$.$a$));
}, $JSCompiler_StaticMethods_setFragment$$ = function($JSCompiler_StaticMethods_setFragment$self$$, $newFragment$$, $opt_decode$jscomp$6$$) {
  $JSCompiler_StaticMethods_setFragment$self$$.$i$ = $opt_decode$jscomp$6$$ ? $goog$Uri$decodeOrEmpty_$$($newFragment$$) : $newFragment$$;
}, $goog$Uri$decodeOrEmpty_$$ = function($val$jscomp$36$$, $opt_preserveReserved$jscomp$1$$) {
  return $val$jscomp$36$$ ? $opt_preserveReserved$jscomp$1$$ ? decodeURI($val$jscomp$36$$.replace(/%25/g, "%2525")) : decodeURIComponent($val$jscomp$36$$) : "";
}, $goog$Uri$encodeSpecialChars_$$ = function($encoded_unescapedPart$$, $extra$$, $opt_removeDoubleEncoding$$) {
  return $goog$isString$$($encoded_unescapedPart$$) ? ($encoded_unescapedPart$$ = encodeURI($encoded_unescapedPart$$).replace($extra$$, $goog$Uri$encodeChar_$$), $opt_removeDoubleEncoding$$ && ($encoded_unescapedPart$$ = $encoded_unescapedPart$$.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), $encoded_unescapedPart$$) : null;
}, $goog$Uri$encodeChar_$$ = function($ch$jscomp$4_n$jscomp$8$$) {
  $ch$jscomp$4_n$jscomp$8$$ = $ch$jscomp$4_n$jscomp$8$$.charCodeAt(0);
  return "%" + ($ch$jscomp$4_n$jscomp$8$$ >> 4 & 15).toString(16) + ($ch$jscomp$4_n$jscomp$8$$ & 15).toString(16);
}, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$ = /[#\/\?@]/g, $goog$Uri$reDisallowedInRelativePath_$$ = /[\#\?:]/g, $goog$Uri$reDisallowedInAbsolutePath_$$ = /[\#\?]/g, $goog$Uri$reDisallowedInQuery_$$ = /[\#\?@]/g, $goog$Uri$reDisallowedInFragment_$$ = /#/g, $goog$Uri$QueryData$$ = function($opt_query$jscomp$1$$, $opt_uri$jscomp$1$$, $opt_ignoreCase$jscomp$3$$) {
  this.$b$ = this.$a$ = null;
  this.$c$ = $opt_query$jscomp$1$$ || null;
  this.$f$ = !!$opt_ignoreCase$jscomp$3$$;
}, $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$ = function($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$a$ || ($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$a$ = new $goog$structs$Map$$, $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$b$ = 0, $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$c$ && $goog$uri$utils$parseQueryData$$($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$c$, function($name$jscomp$84$$, $value$jscomp$121$$) {
    $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.add(decodeURIComponent($name$jscomp$84$$.replace(/\+/g, " ")), $value$jscomp$121$$);
  }));
};
$goog$Uri$QueryData$$.prototype.add = function($key$jscomp$89$$, $value$jscomp$123$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  this.$c$ = null;
  $key$jscomp$89$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$jscomp$89$$);
  var $values$jscomp$21$$ = this.$a$.get($key$jscomp$89$$);
  $values$jscomp$21$$ || this.$a$.set($key$jscomp$89$$, $values$jscomp$21$$ = []);
  $values$jscomp$21$$.push($value$jscomp$123$$);
  this.$b$ = $goog$asserts$assertNumber$$(this.$b$) + 1;
  return this;
};
$goog$Uri$QueryData$$.prototype.remove = function($key$jscomp$90$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  $key$jscomp$90$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$jscomp$90$$);
  return $goog$structs$Map$hasKey_$$(this.$a$.$b$, $key$jscomp$90$$) ? (this.$c$ = null, this.$b$ = $goog$asserts$assertNumber$$(this.$b$) - this.$a$.get($key$jscomp$90$$).length, this.$a$.remove($key$jscomp$90$$)) : !1;
};
$goog$Uri$QueryData$$.prototype.clear = function() {
  this.$a$ = this.$c$ = null;
  this.$b$ = 0;
};
var $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$$ = function($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$self$$, $key$jscomp$91$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$self$$);
  $key$jscomp$91$$ = $JSCompiler_StaticMethods_getKeyName_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$self$$, $key$jscomp$91$$);
  return $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$self$$.$a$.$b$, $key$jscomp$91$$);
};
$JSCompiler_prototypeAlias$$ = $goog$Uri$QueryData$$.prototype;
$JSCompiler_prototypeAlias$$.forEach = function($f$jscomp$56$$, $opt_scope$jscomp$4$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  this.$a$.forEach(function($values$jscomp$22$$, $key$jscomp$92$$) {
    $goog$array$forEach$$($values$jscomp$22$$, function($values$jscomp$22$$) {
      $f$jscomp$56$$.call($opt_scope$jscomp$4$$, $values$jscomp$22$$, $key$jscomp$92$$, this);
    }, this);
  }, this);
};
$JSCompiler_prototypeAlias$$.$getKeys$ = function() {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  for (var $vals$jscomp$1$$ = this.$a$.$getValues$(), $keys$jscomp$12$$ = this.$a$.$getKeys$(), $rv$jscomp$17$$ = [], $i$jscomp$117$$ = 0; $i$jscomp$117$$ < $keys$jscomp$12$$.length; $i$jscomp$117$$++) {
    for (var $val$jscomp$37$$ = $vals$jscomp$1$$[$i$jscomp$117$$], $j$jscomp$8$$ = 0; $j$jscomp$8$$ < $val$jscomp$37$$.length; $j$jscomp$8$$++) {
      $rv$jscomp$17$$.push($keys$jscomp$12$$[$i$jscomp$117$$]);
    }
  }
  return $rv$jscomp$17$$;
};
$JSCompiler_prototypeAlias$$.$getValues$ = function($opt_key$jscomp$6_values$jscomp$23$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  var $rv$jscomp$18$$ = [];
  if ($goog$isString$$($opt_key$jscomp$6_values$jscomp$23$$)) {
    $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$$(this, $opt_key$jscomp$6_values$jscomp$23$$) && ($rv$jscomp$18$$ = $goog$array$concat$$($rv$jscomp$18$$, this.$a$.get($JSCompiler_StaticMethods_getKeyName_$$(this, $opt_key$jscomp$6_values$jscomp$23$$))));
  } else {
    $opt_key$jscomp$6_values$jscomp$23$$ = this.$a$.$getValues$();
    for (var $i$jscomp$118$$ = 0; $i$jscomp$118$$ < $opt_key$jscomp$6_values$jscomp$23$$.length; $i$jscomp$118$$++) {
      $rv$jscomp$18$$ = $goog$array$concat$$($rv$jscomp$18$$, $opt_key$jscomp$6_values$jscomp$23$$[$i$jscomp$118$$]);
    }
  }
  return $rv$jscomp$18$$;
};
$JSCompiler_prototypeAlias$$.set = function($key$jscomp$93$$, $value$jscomp$126$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  this.$c$ = null;
  $key$jscomp$93$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$jscomp$93$$);
  $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$$(this, $key$jscomp$93$$) && (this.$b$ = $goog$asserts$assertNumber$$(this.$b$) - this.$a$.get($key$jscomp$93$$).length);
  this.$a$.set($key$jscomp$93$$, [$value$jscomp$126$$]);
  this.$b$ = $goog$asserts$assertNumber$$(this.$b$) + 1;
  return this;
};
$JSCompiler_prototypeAlias$$.get = function($key$jscomp$94_values$jscomp$24$$, $opt_default$jscomp$1$$) {
  $key$jscomp$94_values$jscomp$24$$ = $key$jscomp$94_values$jscomp$24$$ ? this.$getValues$($key$jscomp$94_values$jscomp$24$$) : [];
  return 0 < $key$jscomp$94_values$jscomp$24$$.length ? String($key$jscomp$94_values$jscomp$24$$[0]) : $opt_default$jscomp$1$$;
};
$JSCompiler_prototypeAlias$$.toString = function() {
  if (this.$c$) {
    return this.$c$;
  }
  if (!this.$a$) {
    return "";
  }
  for (var $sb$jscomp$2$$ = [], $keys$jscomp$13$$ = this.$a$.$getKeys$(), $i$jscomp$119$$ = 0; $i$jscomp$119$$ < $keys$jscomp$13$$.length; $i$jscomp$119$$++) {
    for (var $key$jscomp$96_val$jscomp$38$$ = $keys$jscomp$13$$[$i$jscomp$119$$], $encodedKey$$ = encodeURIComponent(String($key$jscomp$96_val$jscomp$38$$)), $key$jscomp$96_val$jscomp$38$$ = this.$getValues$($key$jscomp$96_val$jscomp$38$$), $j$jscomp$9$$ = 0; $j$jscomp$9$$ < $key$jscomp$96_val$jscomp$38$$.length; $j$jscomp$9$$++) {
      var $param$jscomp$3$$ = $encodedKey$$;
      "" !== $key$jscomp$96_val$jscomp$38$$[$j$jscomp$9$$] && ($param$jscomp$3$$ += "=" + encodeURIComponent(String($key$jscomp$96_val$jscomp$38$$[$j$jscomp$9$$])));
      $sb$jscomp$2$$.push($param$jscomp$3$$);
    }
  }
  return this.$c$ = $sb$jscomp$2$$.join("&");
};
var $JSCompiler_StaticMethods_getKeyName_$$ = function($JSCompiler_StaticMethods_getKeyName_$self$$, $arg$jscomp$6_keyName$$) {
  $arg$jscomp$6_keyName$$ = String($arg$jscomp$6_keyName$$);
  $JSCompiler_StaticMethods_getKeyName_$self$$.$f$ && ($arg$jscomp$6_keyName$$ = $arg$jscomp$6_keyName$$.toLowerCase());
  return $arg$jscomp$6_keyName$$;
}, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$$ = function($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$, $ignoreCase$jscomp$1$$) {
  $ignoreCase$jscomp$1$$ && !$JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.$f$ && ($JSCompiler_StaticMethods_ensureKeyMapInitialized_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$), $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.$c$ = null, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.$a$.forEach(function($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$, 
  $ignoreCase$jscomp$1$$) {
    var $value$jscomp$128$$ = $ignoreCase$jscomp$1$$.toLowerCase();
    $ignoreCase$jscomp$1$$ != $value$jscomp$128$$ && (this.remove($ignoreCase$jscomp$1$$), this.remove($value$jscomp$128$$), 0 < $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.length && (this.$c$ = null, this.$a$.set($JSCompiler_StaticMethods_getKeyName_$$(this, $value$jscomp$128$$), $goog$array$toArray$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$)), this.$b$ = $goog$asserts$assertNumber$$(this.$b$) + $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.length));
  }, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$));
  $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.$f$ = $ignoreCase$jscomp$1$$;
};
var $mr$cast$PresentationUrl$$ = function($appInfos$$, $opt_clientId$jscomp$1$$, $opt_autoJoinPolicy$jscomp$1$$, $opt_defaultActionPolicy$jscomp$1$$, $opt_launchTimeout$$, $opt_appName$$, $opt_dialPostData$$, $opt_invisibleSender$$, $opt_broadcastNamespace$$, $opt_broadcastMessage$$) {
  this.$l$ = $appInfos$$;
  this.$j$ = $opt_clientId$jscomp$1$$ || null;
  this.$b$ = $opt_autoJoinPolicy$jscomp$1$$ || null;
  this.$g$ = $opt_defaultActionPolicy$jscomp$1$$ || null;
  this.$i$ = void 0 !== $opt_launchTimeout$$ ? $opt_launchTimeout$$ : null;
  this.$a$ = $opt_appName$$ || null;
  this.$h$ = $opt_dialPostData$$ || null;
  this.$m$ = $opt_invisibleSender$$ || !1;
  this.$f$ = $opt_broadcastNamespace$$ || null;
  this.$c$ = $opt_broadcastMessage$$ || null;
};
$mr$cast$PresentationUrl$$.prototype.toString = function() {
  var $uri$jscomp$48$$ = new $goog$Uri$$;
  $JSCompiler_StaticMethods_setScheme$$($uri$jscomp$48$$, "https");
  $JSCompiler_StaticMethods_setDomain$$($uri$jscomp$48$$, "google.com");
  $JSCompiler_StaticMethods_setPath$$($uri$jscomp$48$$, "/cast");
  var $fragments$$ = [];
  $goog$array$forEach$$(this.$l$, function($uri$jscomp$48$$) {
    var $appInfo$jscomp$2$$ = "__castAppId__=" + $uri$jscomp$48$$.appId;
    $uri$jscomp$48$$.capabilities && 0 < $uri$jscomp$48$$.capabilities.length && ($appInfo$jscomp$2$$ = $appInfo$jscomp$2$$ + "(" + $uri$jscomp$48$$.capabilities.join(","), $appInfo$jscomp$2$$ += ")");
    $fragments$$.push($appInfo$jscomp$2$$);
  });
  this.$j$ && $fragments$$.push("__castClientId__=" + this.$j$);
  this.$b$ && $fragments$$.push("__castAutoJoinPolicy__=" + this.$b$);
  this.$g$ && $fragments$$.push("__castDefaultActionPolicy__=" + this.$g$);
  null != this.$i$ && $fragments$$.push("__castLaunchTimeout__=" + this.$i$);
  this.$a$ && $fragments$$.push("__dialAppName__=" + this.$a$);
  this.$h$ && $fragments$$.push("__dialPostData__=" + this.$h$);
  this.$m$ && $fragments$$.push("__castInvisibleSender__=true");
  this.$f$ && ($fragments$$.push("__castBroadcastNamespace__=" + this.$f$), $fragments$$.push("__castBroadcastId__=" + Math.random()));
  this.$c$ && $fragments$$.push("__castBroadcastMessage__=" + encodeURIComponent(JSON.stringify(this.$c$)));
  $JSCompiler_StaticMethods_setFragment$$($uri$jscomp$48$$, $fragments$$.join("/"));
  return $uri$jscomp$48$$.toString();
};
var $mr$cast$SessionMediaUpdater$$ = function() {
  this.$a$ = {};
  this.$b$ = {};
}, $JSCompiler_StaticMethods_removeSessionById$$ = function($JSCompiler_StaticMethods_removeSessionById$self$$, $sessionId$jscomp$18$$, $finalSessionStatus$$) {
  var $existingSession$$ = $JSCompiler_StaticMethods_removeSessionById$self$$.$a$[$sessionId$jscomp$18$$];
  return $existingSession$$ ? ($existingSession$$.status = $finalSessionStatus$$, $existingSession$$.media.forEach(function($sessionId$jscomp$18$$) {
    delete $JSCompiler_StaticMethods_removeSessionById$self$$.$b$[$sessionId$jscomp$18$$.sessionId + "#" + $sessionId$jscomp$18$$.mediaSessionId];
  }), delete $JSCompiler_StaticMethods_removeSessionById$self$$.$a$[$sessionId$jscomp$18$$], !0) : !1;
}, $JSCompiler_StaticMethods_createOrUpdateSession$$ = function($JSCompiler_StaticMethods_createOrUpdateSession$self$$, $session$$) {
  var $existingSession$jscomp$1_newSession$$ = $JSCompiler_StaticMethods_createOrUpdateSession$self$$.$a$[$session$$.sessionId];
  if ($existingSession$jscomp$1_newSession$$) {
    return $existingSession$jscomp$1_newSession$$.statusText = $session$$.statusText, $existingSession$jscomp$1_newSession$$.namespaces = $session$$.namespaces || [], $existingSession$jscomp$1_newSession$$.receiver.volume = $session$$.receiver.volume, $existingSession$jscomp$1_newSession$$;
  }
  var $existingSession$jscomp$1_newSession$$ = new chrome.cast.$Session$($session$$.sessionId, $session$$.appId, $session$$.displayName, $session$$.appImages, $session$$.receiver), $key$jscomp$102$$;
  for ($key$jscomp$102$$ in $session$$) {
    "media" == $key$jscomp$102$$ ? $existingSession$jscomp$1_newSession$$.media = $session$$.media.map(function($session$$) {
      $session$$ = $JSCompiler_StaticMethods_createOrUpdateMedia$$($JSCompiler_StaticMethods_createOrUpdateSession$self$$, $session$$);
      $session$$.$f$ = !1;
      $session$$.$b$ = !0;
      return $session$$;
    }) : $session$$.hasOwnProperty($key$jscomp$102$$) && ($existingSession$jscomp$1_newSession$$[$key$jscomp$102$$] = $session$$[$key$jscomp$102$$]);
  }
  return $JSCompiler_StaticMethods_createOrUpdateSession$self$$.$a$[$session$$.sessionId] = $existingSession$jscomp$1_newSession$$;
}, $JSCompiler_StaticMethods_createOrUpdateMedia$$ = function($JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$, $$jscomp$inline_482_newState$$) {
  var $$jscomp$inline_392_itemIdToIndex$jscomp$inline_479_key$4$jscomp$inline_393_mediaKey$$ = $$jscomp$inline_482_newState$$.sessionId + "#" + $$jscomp$inline_482_newState$$.mediaSessionId, $media$jscomp$5$$ = $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.$b$[$$jscomp$inline_392_itemIdToIndex$jscomp$inline_479_key$4$jscomp$inline_393_mediaKey$$];
  $media$jscomp$5$$ || ($media$jscomp$5$$ = new chrome.cast.media.$Media$($$jscomp$inline_482_newState$$.sessionId, $$jscomp$inline_482_newState$$.mediaSessionId), $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.$b$[$$jscomp$inline_392_itemIdToIndex$jscomp$inline_479_key$4$jscomp$inline_393_mediaKey$$] = $media$jscomp$5$$, ($JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$ = $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.$a$[$$jscomp$inline_482_newState$$.sessionId]) && 
  $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.media.push($media$jscomp$5$$));
  $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$ = $media$jscomp$5$$;
  $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.currentItemId = null;
  $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.loadingItemId = null;
  $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.preloadedItemId = null;
  for (var $$jscomp$inline_391_key$jscomp$inline_390_newItemsWithMediaInfo$jscomp$inline_477$$ in $$jscomp$inline_482_newState$$) {
    "items" != $$jscomp$inline_391_key$jscomp$inline_390_newItemsWithMediaInfo$jscomp$inline_477$$ && $$jscomp$inline_482_newState$$.hasOwnProperty($$jscomp$inline_391_key$jscomp$inline_390_newItemsWithMediaInfo$jscomp$inline_477$$) && ("volume" == $$jscomp$inline_391_key$jscomp$inline_390_newItemsWithMediaInfo$jscomp$inline_477$$ ? ($JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.volume.level = $$jscomp$inline_482_newState$$.volume.level, $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.volume.muted = 
    $$jscomp$inline_482_newState$$.volume.muted) : $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$[$$jscomp$inline_391_key$jscomp$inline_390_newItemsWithMediaInfo$jscomp$inline_477$$] = $$jscomp$inline_482_newState$$[$$jscomp$inline_391_key$jscomp$inline_390_newItemsWithMediaInfo$jscomp$inline_477$$]);
  }
  $$jscomp$inline_391_key$jscomp$inline_390_newItemsWithMediaInfo$jscomp$inline_477$$ = $$jscomp$makeIterator$$(["idleReason", "extendedStatus"]);
  for ($$jscomp$inline_392_itemIdToIndex$jscomp$inline_479_key$4$jscomp$inline_393_mediaKey$$ = $$jscomp$inline_391_key$jscomp$inline_390_newItemsWithMediaInfo$jscomp$inline_477$$.next(); !$$jscomp$inline_392_itemIdToIndex$jscomp$inline_479_key$4$jscomp$inline_393_mediaKey$$.done; $$jscomp$inline_392_itemIdToIndex$jscomp$inline_479_key$4$jscomp$inline_393_mediaKey$$ = $$jscomp$inline_391_key$jscomp$inline_390_newItemsWithMediaInfo$jscomp$inline_477$$.next()) {
    $$jscomp$inline_392_itemIdToIndex$jscomp$inline_479_key$4$jscomp$inline_393_mediaKey$$ = $$jscomp$inline_392_itemIdToIndex$jscomp$inline_479_key$4$jscomp$inline_393_mediaKey$$.value, $$jscomp$inline_482_newState$$.hasOwnProperty($$jscomp$inline_392_itemIdToIndex$jscomp$inline_479_key$4$jscomp$inline_393_mediaKey$$) || ($JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$[$$jscomp$inline_392_itemIdToIndex$jscomp$inline_479_key$4$jscomp$inline_393_mediaKey$$] = 
    null);
  }
  "currentTime" in $$jscomp$inline_482_newState$$ && ($JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.$c$ = Date.now());
  if ($JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.playerState == chrome.cast.media.$PlayerState$.IDLE && null == $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.loadingItemId) {
    $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.currentItemId = null, $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.loadingItemId = null, $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.preloadedItemId = null, $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.items = null;
  } else {
    if ($$jscomp$inline_482_newState$$.hasOwnProperty("items") && $$jscomp$inline_482_newState$$.items) {
      $$jscomp$inline_391_key$jscomp$inline_390_newItemsWithMediaInfo$jscomp$inline_477$$ = [];
      var $$jscomp$inline_483_items$jscomp$inline_478_newItem$jscomp$inline_484$$ = $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.items, $$jscomp$inline_392_itemIdToIndex$jscomp$inline_479_key$4$jscomp$inline_393_mediaKey$$ = {};
      if ($$jscomp$inline_483_items$jscomp$inline_478_newItem$jscomp$inline_484$$) {
        for (var $i$jscomp$inline_480_itemId$jscomp$inline_485$$ = 0; $i$jscomp$inline_480_itemId$jscomp$inline_485$$ < $$jscomp$inline_483_items$jscomp$inline_478_newItem$jscomp$inline_484$$.length; $i$jscomp$inline_480_itemId$jscomp$inline_485$$++) {
          $$jscomp$inline_392_itemIdToIndex$jscomp$inline_479_key$4$jscomp$inline_393_mediaKey$$[$$jscomp$inline_483_items$jscomp$inline_478_newItem$jscomp$inline_484$$[$i$jscomp$inline_480_itemId$jscomp$inline_485$$].itemId] = $i$jscomp$inline_480_itemId$jscomp$inline_485$$;
        }
      }
      $$jscomp$inline_482_newState$$ = $$jscomp$makeIterator$$($$jscomp$inline_482_newState$$.items);
      for ($$jscomp$inline_483_items$jscomp$inline_478_newItem$jscomp$inline_484$$ = $$jscomp$inline_482_newState$$.next(); !$$jscomp$inline_483_items$jscomp$inline_478_newItem$jscomp$inline_484$$.done; $$jscomp$inline_483_items$jscomp$inline_478_newItem$jscomp$inline_484$$ = $$jscomp$inline_482_newState$$.next()) {
        $$jscomp$inline_483_items$jscomp$inline_478_newItem$jscomp$inline_484$$ = $$jscomp$inline_483_items$jscomp$inline_478_newItem$jscomp$inline_484$$.value;
        if (!$$jscomp$inline_483_items$jscomp$inline_478_newItem$jscomp$inline_484$$.media) {
          var $i$jscomp$inline_480_itemId$jscomp$inline_485$$ = $$jscomp$inline_483_items$jscomp$inline_478_newItem$jscomp$inline_484$$.itemId, $oldItem$jscomp$inline_486$$ = $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.items ? $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.items[$$jscomp$inline_392_itemIdToIndex$jscomp$inline_479_key$4$jscomp$inline_393_mediaKey$$[$i$jscomp$inline_480_itemId$jscomp$inline_485$$]] : 
          null;
          $oldItem$jscomp$inline_486$$ && $oldItem$jscomp$inline_486$$.media ? $$jscomp$inline_483_items$jscomp$inline_478_newItem$jscomp$inline_484$$.media = $oldItem$jscomp$inline_486$$.media : $i$jscomp$inline_480_itemId$jscomp$inline_485$$ == $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.currentItemId && $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.media && ($$jscomp$inline_483_items$jscomp$inline_478_newItem$jscomp$inline_484$$.media = 
          $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.media);
        }
        $$jscomp$inline_391_key$jscomp$inline_390_newItemsWithMediaInfo$jscomp$inline_477$$.push($mr$cast$SessionMediaUpdater$createQueueItem_$$($$jscomp$inline_483_items$jscomp$inline_478_newItem$jscomp$inline_484$$));
      }
      $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_388_session$jscomp$1$$.items = $$jscomp$inline_391_key$jscomp$inline_390_newItemsWithMediaInfo$jscomp$inline_477$$;
    }
  }
  return $media$jscomp$5$$;
}, $JSCompiler_StaticMethods_removeMedia$$ = function($JSCompiler_StaticMethods_removeMedia$self_session$jscomp$2$$, $index$jscomp$70_media$jscomp$8$$) {
  delete $JSCompiler_StaticMethods_removeMedia$self_session$jscomp$2$$.$b$[$index$jscomp$70_media$jscomp$8$$.sessionId + "#" + $index$jscomp$70_media$jscomp$8$$.mediaSessionId];
  if ($JSCompiler_StaticMethods_removeMedia$self_session$jscomp$2$$ = $JSCompiler_StaticMethods_removeMedia$self_session$jscomp$2$$.$a$[$index$jscomp$70_media$jscomp$8$$.sessionId]) {
    $index$jscomp$70_media$jscomp$8$$ = $JSCompiler_StaticMethods_removeMedia$self_session$jscomp$2$$.media.indexOf($index$jscomp$70_media$jscomp$8$$), -1 != $index$jscomp$70_media$jscomp$8$$ && $JSCompiler_StaticMethods_removeMedia$self_session$jscomp$2$$.media.splice($index$jscomp$70_media$jscomp$8$$, 1);
  }
}, $mr$cast$SessionMediaUpdater$createQueueItem_$$ = function($newState$jscomp$3$$) {
  var $item$jscomp$10$$ = new chrome.cast.media.$QueueItem$($newState$jscomp$3$$.media), $key$jscomp$104$$;
  for ($key$jscomp$104$$ in $newState$jscomp$3$$) {
    $newState$jscomp$3$$.hasOwnProperty($key$jscomp$104$$) && ($item$jscomp$10$$[$key$jscomp$104$$] = $newState$jscomp$3$$[$key$jscomp$104$$]);
  }
  return $item$jscomp$10$$;
};
var $mr$cast$Api$$ = function() {
  this.$i$ = new $mr$cast$ExtensionMessenger$$(this);
  this.$b$ = null;
  this.$s$ = new $mr$cast$SessionMediaUpdater$$;
  this.$f$ = 0;
  this.$u$ = new $mr$cast$PendingRequestsManager$$;
  this.$j$ = new $goog$structs$Map$$;
  this.$w$ = !1;
  this.$h$ = new $goog$structs$Map$$;
  this.$m$ = new $goog$structs$Map$$;
  this.$o$ = [];
  this.$C$ = this.$createOrUpdateMedia_$.bind(this);
  this.$c$ = null;
  this.$l$ = 0;
  this.$g$ = null;
  this.$B$ = new $goog$async$Throttle$$(this.$D$, 200, this);
  this.$v$ = null;
}, $mr$cast$Api$invokeErrorCallback$$ = function($errorCallback$jscomp$64$$) {
  var $error$jscomp$3$$ = new chrome.cast.Error(chrome.cast.$ErrorCode$.INVALID_PARAMETER, "Already requesting session");
  $errorCallback$jscomp$64$$ && $errorCallback$jscomp$64$$($error$jscomp$3$$);
}, $JSCompiler_StaticMethods_sendToExtension_$$ = function($JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_496_callbackInfo$$, $error$jscomp$inline_400_message$jscomp$54$$, $opt_callbackInfo$$, $errorMessage$jscomp$2_opt_sequenceNumber$jscomp$1$$) {
  $opt_callbackInfo$$ && $JSCompiler_StaticMethods_addRequest$$($JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_496_callbackInfo$$.$u$, $opt_callbackInfo$$);
  void 0 !== $errorMessage$jscomp$2_opt_sequenceNumber$jscomp$1$$ ? $error$jscomp$inline_400_message$jscomp$54$$.sequenceNumber = $errorMessage$jscomp$2_opt_sequenceNumber$jscomp$1$$ : ($error$jscomp$inline_400_message$jscomp$54$$.sequenceNumber = $JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_496_callbackInfo$$.$f$, $JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_496_callbackInfo$$.$f$ = ($JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_496_callbackInfo$$.$f$ + 
  1) % 9007199254740992);
  $errorMessage$jscomp$2_opt_sequenceNumber$jscomp$1$$ = $JSCompiler_StaticMethods_sendToBackground$$($JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_496_callbackInfo$$.$i$, $error$jscomp$inline_400_message$jscomp$54$$);
  $opt_callbackInfo$$ && $errorMessage$jscomp$2_opt_sequenceNumber$jscomp$1$$ && ($JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_496_callbackInfo$$ = $JSCompiler_StaticMethods_removeRequest$$($JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_496_callbackInfo$$.$u$, $error$jscomp$inline_400_message$jscomp$54$$.sequenceNumber), $error$jscomp$inline_400_message$jscomp$54$$ = new chrome.cast.Error(chrome.cast.$ErrorCode$.INVALID_PARAMETER, $errorMessage$jscomp$2_opt_sequenceNumber$jscomp$1$$), 
  ($JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_496_callbackInfo$$ = $JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_496_callbackInfo$$.$a$) && $JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_496_callbackInfo$$($error$jscomp$inline_400_message$jscomp$54$$));
};
$mr$cast$Api$$.prototype.$initialize$ = function($apiConfig$jscomp$1_request$jscomp$17$$, $successCallback$jscomp$72$$) {
  var $$jscomp$this$jscomp$3$$ = this;
  $mr$cast$ApiInterface$instance$$ = this;
  this.$b$ || (this.$b$ = $apiConfig$jscomp$1_request$jscomp$17$$, $apiConfig$jscomp$1_request$jscomp$17$$.invisibleSender || ($apiConfig$jscomp$1_request$jscomp$17$$ = new PresentationRequest($JSCompiler_StaticMethods_getPresentationUrl_$$(this)), $apiConfig$jscomp$1_request$jscomp$17$$.getAvailability().then(function($apiConfig$jscomp$1_request$jscomp$17$$) {
    $apiConfig$jscomp$1_request$jscomp$17$$.onchange = function() {
      $$jscomp$this$jscomp$3$$.$w$ = !!$apiConfig$jscomp$1_request$jscomp$17$$.value;
      $$jscomp$this$jscomp$3$$.$b$.receiverListener($apiConfig$jscomp$1_request$jscomp$17$$.value ? chrome.cast.$ReceiverAvailability$.AVAILABLE : chrome.cast.$ReceiverAvailability$.UNAVAILABLE);
    };
    $apiConfig$jscomp$1_request$jscomp$17$$.onchange();
  }, function() {
    $$jscomp$this$jscomp$3$$.$b$.receiverListener(chrome.cast.$ReceiverAvailability$.AVAILABLE);
  }), $apiConfig$jscomp$1_request$jscomp$17$$.onconnectionavailable = function($apiConfig$jscomp$1_request$jscomp$17$$) {
    $JSCompiler_StaticMethods_onConnection_$$($$jscomp$this$jscomp$3$$, $apiConfig$jscomp$1_request$jscomp$17$$.connection);
  }, this.$v$ = ($goog$global$$.navigator || null).presentation.defaultRequest = $apiConfig$jscomp$1_request$jscomp$17$$, $apiConfig$jscomp$1_request$jscomp$17$$.reconnect(chrome.cast.$AUTO_JOIN_PRESENTATION_ID$).then(function($apiConfig$jscomp$1_request$jscomp$17$$) {
    $JSCompiler_StaticMethods_onConnection_$$($$jscomp$this$jscomp$3$$, $apiConfig$jscomp$1_request$jscomp$17$$);
  }, $goog$nullFunction$$)));
  $successCallback$jscomp$72$$ && $successCallback$jscomp$72$$(void 0);
};
$mr$cast$Api$$.prototype.$setPageContext$ = function($win$jscomp$1$$) {
  $win$jscomp$1$$.navigator.presentation.defaultRequest = this.$v$;
};
var $JSCompiler_StaticMethods_onConnection_$$ = function($JSCompiler_StaticMethods_onConnection_$self$$, $connection$jscomp$2$$, $errorCallback$jscomp$67$$) {
  $errorCallback$jscomp$67$$ = void 0 === $errorCallback$jscomp$67$$ ? null : $errorCallback$jscomp$67$$;
  $connection$jscomp$2$$.onclose = function($connection$jscomp$2$$) {
    $JSCompiler_StaticMethods_onConnection_$self$$.$c$ = null;
    switch($connection$jscomp$2$$.reason) {
      case "closed":
        $JSCompiler_StaticMethods_removeSessionById_$$($JSCompiler_StaticMethods_onConnection_$self$$, chrome.cast.$SessionStatus$.DISCONNECTED);
        break;
      case "error":
        $errorCallback$jscomp$67$$ && ($connection$jscomp$2$$ = new chrome.cast.Error(chrome.cast.$ErrorCode$.SESSION_ERROR), $errorCallback$jscomp$67$$ && $errorCallback$jscomp$67$$($connection$jscomp$2$$));
    }
  };
  $connection$jscomp$2$$.onterminate = function() {
    $JSCompiler_StaticMethods_removeSessionById_$$($JSCompiler_StaticMethods_onConnection_$self$$, chrome.cast.$SessionStatus$.STOPPED);
  };
  "connected" == $connection$jscomp$2$$.state ? $JSCompiler_StaticMethods_onConnection_$self$$.$i$.connect($connection$jscomp$2$$) : $connection$jscomp$2$$.onconnect = function() {
    $JSCompiler_StaticMethods_onConnection_$self$$.$i$.connect($connection$jscomp$2$$);
  };
}, $JSCompiler_StaticMethods_broadcastOrSendMessage$$ = function($request$jscomp$18$$) {
  var $JSCompiler_StaticMethods_broadcastOrSendMessage$self$$ = $mr$cast$Api$api$$;
  $mr$cast$Api$ALLOWED_BROADCAST_TYPES_$$.has($request$jscomp$18$$.type) ? $JSCompiler_StaticMethods_broadcastOrSendMessage$self$$.$w$ && ($JSCompiler_StaticMethods_broadcastOrSendMessage$self$$.$g$ ? ($request$jscomp$18$$.sessionId = $JSCompiler_StaticMethods_broadcastOrSendMessage$self$$.$g$, $JSCompiler_StaticMethods_sendMediaRequest_$$($JSCompiler_StaticMethods_broadcastOrSendMessage$self$$, null, $request$jscomp$18$$.type, $request$jscomp$18$$, function() {
    $JSCompiler_StaticMethods_mr_Logger_prototype$info$$("Send Broadcast directly succeeded");
  }, function($request$jscomp$18$$) {
    $mr$cast$Api$logger_$$.error("Send Broadcast directly failed with code " + $request$jscomp$18$$.code);
  })) : $JSCompiler_StaticMethods_broadcastOrSendMessage$self$$.$B$.$fire$($JSCompiler_StaticMethods_getPresentationUrl_$$($JSCompiler_StaticMethods_broadcastOrSendMessage$self$$, void 0, "urn:x-cast:com.google.cast.media", $request$jscomp$18$$))) : $mr$cast$Api$logger_$$.error("Unsupported broadcast message type - " + $request$jscomp$18$$.type);
};
$mr$cast$Api$$.prototype.$D$ = function($p$jscomp$4_url$jscomp$31$$) {
  $JSCompiler_StaticMethods_mr_Logger_prototype$info$$("Broadcast request " + $p$jscomp$4_url$jscomp$31$$);
  ($p$jscomp$4_url$jscomp$31$$ = (new PresentationRequest($p$jscomp$4_url$jscomp$31$$)).getAvailability()) ? $p$jscomp$4_url$jscomp$31$$.then(function() {
    $JSCompiler_StaticMethods_mr_Logger_prototype$info$$("Broadcast succeeded");
  }, function() {
    $mr$cast$Api$logger_$$.log(2, "Broadcast failed", void 0);
  }) : $mr$cast$Api$logger_$$.error("presentationRequest.getAvailability return undefined");
};
$mr$cast$Api$$.prototype.requestSession = function($successCallback$jscomp$73$$, $errorCallback$jscomp$68$$, $opt_sessionRequest$jscomp$1_presentationUrl$jscomp$2$$) {
  var $$jscomp$this$jscomp$5$$ = this;
  this.$c$ ? $mr$cast$Api$invokeErrorCallback$$($errorCallback$jscomp$68$$) : ($opt_sessionRequest$jscomp$1_presentationUrl$jscomp$2$$ = $JSCompiler_StaticMethods_getPresentationUrl_$$(this, $opt_sessionRequest$jscomp$1_presentationUrl$jscomp$2$$), this.$c$ = $successCallback$jscomp$73$$, (new PresentationRequest($opt_sessionRequest$jscomp$1_presentationUrl$jscomp$2$$.toString())).start().then(function($successCallback$jscomp$73$$) {
    $JSCompiler_StaticMethods_onConnection_$$($$jscomp$this$jscomp$5$$, $successCallback$jscomp$73$$, $errorCallback$jscomp$68$$);
  }).catch(function($successCallback$jscomp$73$$) {
    $$jscomp$this$jscomp$5$$.$c$ = null;
    $successCallback$jscomp$73$$ = new chrome.cast.Error("AbortError" == $successCallback$jscomp$73$$.name || "NotAllowedError" == $successCallback$jscomp$73$$.name ? chrome.cast.$ErrorCode$.CANCEL : chrome.cast.$ErrorCode$.SESSION_ERROR);
    $errorCallback$jscomp$68$$ && $errorCallback$jscomp$68$$($successCallback$jscomp$73$$);
  }));
};
var $JSCompiler_StaticMethods_getPresentationUrl_$$ = function($JSCompiler_StaticMethods_getPresentationUrl_$self$$, $opt_sessionRequest$jscomp$2$$, $opt_broadcastNamespace$jscomp$1$$, $opt_broadcastRequest$$) {
  var $dialName$$ = null, $dialPostData$jscomp$1$$ = null, $sessionRequest$jscomp$1$$ = $opt_sessionRequest$jscomp$2$$ || $JSCompiler_StaticMethods_getPresentationUrl_$self$$.$b$.sessionRequest, $dialRequest$$ = $sessionRequest$jscomp$1$$.dialRequest;
  $dialRequest$$ && ($dialName$$ = $dialRequest$$.appName, ($dialPostData$jscomp$1$$ = $dialRequest$$.launchParameter) && !$dialPostData$jscomp$1$$.match($mr$cast$Api$BASE_64_REG_EX_$$) && ($dialPostData$jscomp$1$$ = $goog$crypt$base64$encodeString$$($dialPostData$jscomp$1$$)));
  var $appInfoArray$$ = [];
  $appInfoArray$$.push({appId:$sessionRequest$jscomp$1$$.appId, capabilities:$sessionRequest$jscomp$1$$.capabilities});
  $opt_sessionRequest$jscomp$2$$ || $goog$array$forEach$$($JSCompiler_StaticMethods_getPresentationUrl_$self$$.$b$.additionalSessionRequests, function($JSCompiler_StaticMethods_getPresentationUrl_$self$$) {
    $appInfoArray$$.push({appId:$JSCompiler_StaticMethods_getPresentationUrl_$self$$.appId, capabilities:$JSCompiler_StaticMethods_getPresentationUrl_$self$$.capabilities});
  });
  return (new $mr$cast$PresentationUrl$$($appInfoArray$$, $JSCompiler_StaticMethods_getPresentationUrl_$self$$.$i$.$b$, $JSCompiler_StaticMethods_getPresentationUrl_$self$$.$b$.autoJoinPolicy, $JSCompiler_StaticMethods_getPresentationUrl_$self$$.$b$.defaultActionPolicy, $sessionRequest$jscomp$1$$.requestSessionTimeout, $dialName$$, $dialPostData$jscomp$1$$, $JSCompiler_StaticMethods_getPresentationUrl_$self$$.$b$.invisibleSender, $opt_broadcastNamespace$jscomp$1$$, $opt_broadcastRequest$$)).toString();
};
$mr$cast$Api$$.prototype.$A$ = function($request$jscomp$20$$, $type$jscomp$150$$, $successCallback$jscomp$74$$, $errorCallback$jscomp$69$$) {
  var $$jscomp$this$jscomp$6$$ = this;
  this.$l$++;
  $JSCompiler_StaticMethods_sendMediaRequest_$$(this, null, $type$jscomp$150$$, $request$jscomp$20$$, function($request$jscomp$20$$) {
    $$jscomp$this$jscomp$6$$.$l$--;
    $request$jscomp$20$$.$b$ = !0;
    $successCallback$jscomp$74$$ && $successCallback$jscomp$74$$($request$jscomp$20$$);
  }, function($request$jscomp$20$$) {
    $$jscomp$this$jscomp$6$$.$l$--;
    $errorCallback$jscomp$69$$($request$jscomp$20$$);
  }, chrome.cast.media.timeout.load);
};
$mr$cast$Api$$.prototype.$a$ = function($media$jscomp$11$$, $type$jscomp$151$$, $request$jscomp$21$$, $successCallback$jscomp$75$$, $errorCallback$jscomp$70$$, $opt_timeoutMillis$jscomp$5$$) {
  var $$jscomp$this$jscomp$7$$ = this;
  $JSCompiler_StaticMethods_sendMediaRequest_$$(this, $media$jscomp$11$$, $type$jscomp$151$$, $request$jscomp$21$$, function($media$jscomp$11$$) {
    $$jscomp$this$jscomp$7$$.$callMediaListeners_$($media$jscomp$11$$);
    $successCallback$jscomp$75$$ && $successCallback$jscomp$75$$(void 0);
  }, $errorCallback$jscomp$70$$, $opt_timeoutMillis$jscomp$5$$);
};
var $JSCompiler_StaticMethods_sendMediaRequest_$$ = function($JSCompiler_StaticMethods_sendMediaRequest_$self$$, $media$jscomp$13$$, $type$jscomp$152$$, $request$jscomp$22$$, $successCallback$jscomp$76$$, $errorCallback$jscomp$71$$, $opt_timeoutMillis$jscomp$6$$) {
  $request$jscomp$22$$.type = $type$jscomp$152$$;
  null != $media$jscomp$13$$ && ($request$jscomp$22$$.mediaSessionId = $media$jscomp$13$$.mediaSessionId, $request$jscomp$22$$.sessionId = $media$jscomp$13$$.sessionId);
  $JSCompiler_StaticMethods_sendMediaRequest_$self$$.$sendApiRequest$($request$jscomp$22$$, function($JSCompiler_StaticMethods_sendMediaRequest_$self$$) {
    $JSCompiler_StaticMethods_sendMediaRequest_$self$$.status && 1 == $JSCompiler_StaticMethods_sendMediaRequest_$self$$.status.length ? $successCallback$jscomp$76$$ && $successCallback$jscomp$76$$($JSCompiler_StaticMethods_sendMediaRequest_$self$$.status[0]) : ($JSCompiler_StaticMethods_sendMediaRequest_$self$$ = new chrome.cast.Error(chrome.cast.$ErrorCode$.SESSION_ERROR), $errorCallback$jscomp$71$$ && $errorCallback$jscomp$71$$($JSCompiler_StaticMethods_sendMediaRequest_$self$$));
  }, $errorCallback$jscomp$71$$, $opt_timeoutMillis$jscomp$6$$);
};
$JSCompiler_prototypeAlias$$ = $mr$cast$Api$$.prototype;
$JSCompiler_prototypeAlias$$.setReceiverVolume = function($sessionId$jscomp$19$$, $volumeRequest$jscomp$4$$, $successCallback$jscomp$77$$, $errorCallback$jscomp$72$$) {
  $volumeRequest$jscomp$4$$.sessionId = $sessionId$jscomp$19$$;
  $JSCompiler_StaticMethods_sendToExtension_$$(this, new $mr$cast$InternalMessage$$("v2_message", $volumeRequest$jscomp$4$$, void 0, chrome.cast.timeout.setReceiverVolume), new $mr$cast$ApiCallbackInfo$$(this.$f$, $successCallback$jscomp$77$$, $errorCallback$jscomp$72$$, chrome.cast.timeout.sendCustomMessage));
};
$JSCompiler_prototypeAlias$$.$requestSessionById$ = function($sessionId$jscomp$20$$) {
  var $$jscomp$this$jscomp$8$$ = this;
  (new PresentationRequest($JSCompiler_StaticMethods_getPresentationUrl_$$(this))).reconnect(chrome.cast.$PRESENTATION_ID_PREFIX$ + $sessionId$jscomp$20$$).then(function($sessionId$jscomp$20$$) {
    $JSCompiler_StaticMethods_onConnection_$$($$jscomp$this$jscomp$8$$, $sessionId$jscomp$20$$);
  }, $goog$nullFunction$$);
};
$JSCompiler_prototypeAlias$$.leaveSession = function($sessionId$jscomp$21$$, $successCallback$jscomp$78$$, $errorCallback$jscomp$73$$) {
  $JSCompiler_StaticMethods_sendToExtension_$$(this, new $mr$cast$InternalMessage$$("leave_session", $sessionId$jscomp$21$$, void 0, chrome.cast.timeout.leaveSession), new $mr$cast$ApiCallbackInfo$$(this.$f$, $successCallback$jscomp$78$$, $errorCallback$jscomp$73$$, chrome.cast.timeout.leaveSession));
};
$JSCompiler_prototypeAlias$$.$sendAppRequest$ = function($request$jscomp$24$$, $successCallback$jscomp$79$$, $errorCallback$jscomp$74$$) {
  $JSCompiler_StaticMethods_sendToExtension_$$(this, new $mr$cast$InternalMessage$$("app_message", $request$jscomp$24$$, void 0, chrome.cast.timeout.sendCustomMessage), new $mr$cast$ApiCallbackInfo$$(this.$f$, $successCallback$jscomp$79$$, $errorCallback$jscomp$74$$, chrome.cast.timeout.sendCustomMessage));
};
$JSCompiler_prototypeAlias$$.$sendApiRequest$ = function($request$jscomp$25$$, $successCallback$jscomp$80$$, $errorCallback$jscomp$75$$, $opt_timeoutMillis$jscomp$7$$) {
  $JSCompiler_StaticMethods_sendToExtension_$$(this, new $mr$cast$InternalMessage$$("v2_message", $request$jscomp$25$$, void 0, $opt_timeoutMillis$jscomp$7$$), new $mr$cast$ApiCallbackInfo$$(this.$f$, $successCallback$jscomp$80$$, $errorCallback$jscomp$75$$, $opt_timeoutMillis$jscomp$7$$));
};
var $mr$cast$Api$mapSetAdd_$$ = function($map$jscomp$4$$, $key$jscomp$105$$, $value$jscomp$130$$) {
  var $values$jscomp$26$$ = $map$jscomp$4$$.get($key$jscomp$105$$);
  $values$jscomp$26$$ || ($values$jscomp$26$$ = new $goog$structs$Set$$, $map$jscomp$4$$.set($key$jscomp$105$$, $values$jscomp$26$$));
  $values$jscomp$26$$.add($value$jscomp$130$$);
};
$JSCompiler_prototypeAlias$$ = $mr$cast$Api$$.prototype;
$JSCompiler_prototypeAlias$$.$addSessionUpdateListener$ = function($sessionId$jscomp$22$$, $listener$jscomp$127$$) {
  $mr$cast$Api$mapSetAdd_$$(this.$j$, $sessionId$jscomp$22$$, $listener$jscomp$127$$);
};
$JSCompiler_prototypeAlias$$.$removeSessionUpdateListener$ = function($sessionId$jscomp$23_values$jscomp$inline_422$$, $listener$jscomp$128$$) {
  ($sessionId$jscomp$23_values$jscomp$inline_422$$ = this.$j$.get($sessionId$jscomp$23_values$jscomp$inline_422$$)) && $sessionId$jscomp$23_values$jscomp$inline_422$$.remove($listener$jscomp$128$$);
};
$JSCompiler_prototypeAlias$$.$addReceiverActionListener$ = function($listener$jscomp$129$$) {
  this.$o$.push($listener$jscomp$129$$);
};
$JSCompiler_prototypeAlias$$.$removeReceiverActionListener$ = function($index$jscomp$71_listener$jscomp$130$$) {
  $index$jscomp$71_listener$jscomp$130$$ = this.$o$.indexOf($index$jscomp$71_listener$jscomp$130$$);
  0 <= $index$jscomp$71_listener$jscomp$130$$ && this.$o$.splice($index$jscomp$71_listener$jscomp$130$$, 1);
};
$JSCompiler_prototypeAlias$$.$addAppMessageListener$ = function($listeners$jscomp$1_sessionId$jscomp$24$$, $namespace$jscomp$15$$, $listener$jscomp$131$$) {
  var $namespaceListeners$$ = this.$h$.get($listeners$jscomp$1_sessionId$jscomp$24$$);
  $namespaceListeners$$ || ($namespaceListeners$$ = new $goog$structs$Map$$, this.$h$.set($listeners$jscomp$1_sessionId$jscomp$24$$, $namespaceListeners$$));
  $listeners$jscomp$1_sessionId$jscomp$24$$ = $namespaceListeners$$.get($namespace$jscomp$15$$);
  $listeners$jscomp$1_sessionId$jscomp$24$$ || ($listeners$jscomp$1_sessionId$jscomp$24$$ = new $goog$structs$Set$$, $namespaceListeners$$.set($namespace$jscomp$15$$, $listeners$jscomp$1_sessionId$jscomp$24$$));
  $listeners$jscomp$1_sessionId$jscomp$24$$.add($listener$jscomp$131$$);
};
$JSCompiler_prototypeAlias$$.$removeAppMessageListener$ = function($namespaceListeners$jscomp$1_sessionId$jscomp$25$$, $listeners$jscomp$2_namespace$jscomp$16$$, $listener$jscomp$132$$) {
  ($namespaceListeners$jscomp$1_sessionId$jscomp$25$$ = this.$h$.get($namespaceListeners$jscomp$1_sessionId$jscomp$25$$)) && ($listeners$jscomp$2_namespace$jscomp$16$$ = $namespaceListeners$jscomp$1_sessionId$jscomp$25$$.get($listeners$jscomp$2_namespace$jscomp$16$$)) && $listeners$jscomp$2_namespace$jscomp$16$$.remove($listener$jscomp$132$$);
};
$JSCompiler_prototypeAlias$$.$addMediaListener$ = function($sessionId$jscomp$26$$, $listener$jscomp$133$$) {
  $mr$cast$Api$mapSetAdd_$$(this.$m$, $sessionId$jscomp$26$$, $listener$jscomp$133$$);
};
$JSCompiler_prototypeAlias$$.$removeMediaListener$ = function($sessionId$jscomp$27_values$jscomp$inline_427$$, $listener$jscomp$134$$) {
  ($sessionId$jscomp$27_values$jscomp$inline_427$$ = this.$m$.get($sessionId$jscomp$27_values$jscomp$inline_427$$)) && $sessionId$jscomp$27_values$jscomp$inline_427$$.remove($listener$jscomp$134$$);
};
$JSCompiler_prototypeAlias$$.$addMediaUpdateListener$ = function($media$jscomp$14$$, $listener$jscomp$135$$) {
  -1 == $media$jscomp$14$$.$a$.indexOf($listener$jscomp$135$$) && $media$jscomp$14$$.$a$.push($listener$jscomp$135$$);
};
$JSCompiler_prototypeAlias$$.$removeMediaUpdateListener$ = function($media$jscomp$15$$, $index$jscomp$72_listener$jscomp$136$$) {
  $index$jscomp$72_listener$jscomp$136$$ = $media$jscomp$15$$.$a$.indexOf($index$jscomp$72_listener$jscomp$136$$);
  -1 != $index$jscomp$72_listener$jscomp$136$$ && $media$jscomp$15$$.$a$.splice($index$jscomp$72_listener$jscomp$136$$, 1);
};
$JSCompiler_prototypeAlias$$.$callMediaListeners_$ = function($media$jscomp$17$$) {
  if ($media$jscomp$17$$.$b$) {
    var $isAlive$$ = $media$jscomp$17$$.playerState != chrome.cast.media.$PlayerState$.IDLE || null != $media$jscomp$17$$.loadingItemId;
    $media$jscomp$17$$.$a$.forEach(function($media$jscomp$17$$) {
      $media$jscomp$17$$($isAlive$$);
    });
    $isAlive$$ || $JSCompiler_StaticMethods_removeMedia$$(this.$s$, $media$jscomp$17$$);
  } else {
    if (!(0 < this.$l$)) {
      $media$jscomp$17$$.$b$ = !0;
      var $listeners$jscomp$3$$ = this.$m$.get($media$jscomp$17$$.sessionId);
      $listeners$jscomp$3$$ && $goog$iter$forEach$$($listeners$jscomp$3$$.$__iterator__$(), function($isAlive$$) {
        $isAlive$$($media$jscomp$17$$);
      });
    }
  }
};
$JSCompiler_prototypeAlias$$.$createOrUpdateMedia_$ = function($newState$jscomp$4$$) {
  return $JSCompiler_StaticMethods_createOrUpdateMedia$$(this.$s$, $newState$jscomp$4$$);
};
var $JSCompiler_StaticMethods_removeSessionById_$$ = function($JSCompiler_StaticMethods_removeSessionById_$self$$, $finalSessionStatus$jscomp$1_listeners$jscomp$4$$) {
  if ($JSCompiler_StaticMethods_removeSessionById_$self$$.$g$) {
    var $sessionId$jscomp$28$$ = $JSCompiler_StaticMethods_removeSessionById_$self$$.$g$;
    $JSCompiler_StaticMethods_removeSessionById_$self$$.$g$ = null;
    $JSCompiler_StaticMethods_removeSessionById_$self$$.$i$.disconnect();
    var $isAlive$jscomp$1$$ = $finalSessionStatus$jscomp$1_listeners$jscomp$4$$ != chrome.cast.$SessionStatus$.STOPPED;
    $JSCompiler_StaticMethods_removeSessionById$$($JSCompiler_StaticMethods_removeSessionById_$self$$.$s$, $sessionId$jscomp$28$$, $finalSessionStatus$jscomp$1_listeners$jscomp$4$$) && ($JSCompiler_StaticMethods_removeSessionById_$self$$.$h$.remove($sessionId$jscomp$28$$), $JSCompiler_StaticMethods_removeSessionById_$self$$.$m$.remove($sessionId$jscomp$28$$), $finalSessionStatus$jscomp$1_listeners$jscomp$4$$ = $JSCompiler_StaticMethods_removeSessionById_$self$$.$j$.get($sessionId$jscomp$28$$)) && 
    ($JSCompiler_StaticMethods_removeSessionById_$self$$.$j$.remove($sessionId$jscomp$28$$), $goog$iter$forEach$$($finalSessionStatus$jscomp$1_listeners$jscomp$4$$.$__iterator__$(), function($JSCompiler_StaticMethods_removeSessionById_$self$$) {
      $JSCompiler_StaticMethods_removeSessionById_$self$$($isAlive$jscomp$1$$);
    }));
  }
};
$mr$cast$Api$$.prototype.onMessage = function($message$jscomp$62$$) {
  switch($message$jscomp$62$$.type) {
    case "new_session":
    case "update_session":
      $message$jscomp$62$$.message = $JSCompiler_StaticMethods_createOrUpdateSession$$(this.$s$, $message$jscomp$62$$.message);
      break;
    case "v2_message":
      var $callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$ = $message$jscomp$62$$.message;
      $callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$ && "MEDIA_STATUS" == $callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$.type && $callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$.status && ($callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$.status = 
      $callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$.status.map(this.$C$));
  }
  if ($callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$ = $JSCompiler_StaticMethods_removeRequest$$(this.$u$, $message$jscomp$62$$.sequenceNumber)) {
    "error" == $message$jscomp$62$$.type ? ($callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$ = $callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$.$a$) && $callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$($message$jscomp$62$$.message) : ($callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$ = 
    $callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$.$c$) && $callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$($message$jscomp$62$$.message);
  }
  if ($callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$ = $message$jscomp$62$$.message) {
    switch($message$jscomp$62$$.type) {
      case "receiver_action":
        $JSCompiler_StaticMethods_onReceiverAction_$$(this, $callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$);
        break;
      case "new_session":
        this.$g$ = $callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$.sessionId;
        this.$c$ ? (this.$c$($callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$), this.$c$ = null) : this.$b$ && this.$b$.sessionListener($callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$);
        break;
      case "update_session":
        $JSCompiler_StaticMethods_onUpdateSession_$$(this, $callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$);
        break;
      case "app_message":
        $JSCompiler_StaticMethods_onAppMessage_$$(this, $callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$);
        break;
      case "v2_message":
        "MEDIA_STATUS" == $callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$.type && $callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$.status.forEach(this.$callMediaListeners_$.bind(this));
        break;
      case "custom_dial_launch":
        $JSCompiler_StaticMethods_onCustomDialLaunchRequest_$$(this, $message$jscomp$62$$.sequenceNumber, $callback$jscomp$inline_520_callback$jscomp$inline_523_callbackInfo$jscomp$inline_438_payload_v2Message$jscomp$inline_434$$);
    }
  }
};
var $JSCompiler_StaticMethods_onUpdateSession_$$ = function($JSCompiler_StaticMethods_onUpdateSession_$self_listeners$jscomp$5$$, $session$jscomp$4$$) {
  ($JSCompiler_StaticMethods_onUpdateSession_$self_listeners$jscomp$5$$ = $JSCompiler_StaticMethods_onUpdateSession_$self_listeners$jscomp$5$$.$j$.get($session$jscomp$4$$.sessionId)) && $goog$iter$forEach$$($JSCompiler_StaticMethods_onUpdateSession_$self_listeners$jscomp$5$$.$__iterator__$(), function($JSCompiler_StaticMethods_onUpdateSession_$self_listeners$jscomp$5$$) {
    $JSCompiler_StaticMethods_onUpdateSession_$self_listeners$jscomp$5$$(!0);
  });
}, $JSCompiler_StaticMethods_onReceiverAction_$$ = function($JSCompiler_StaticMethods_onReceiverAction_$self$$, $receiverAction$$) {
  $JSCompiler_StaticMethods_onReceiverAction_$self$$.$o$.forEach(function($JSCompiler_StaticMethods_onReceiverAction_$self$$) {
    $JSCompiler_StaticMethods_onReceiverAction_$self$$($receiverAction$$.receiver, $receiverAction$$.action);
  });
}, $JSCompiler_StaticMethods_onAppMessage_$$ = function($JSCompiler_StaticMethods_onAppMessage_$self_listeners$jscomp$6_namespaceListeners$jscomp$2$$, $message$jscomp$63$$) {
  ($JSCompiler_StaticMethods_onAppMessage_$self_listeners$jscomp$6_namespaceListeners$jscomp$2$$ = $JSCompiler_StaticMethods_onAppMessage_$self_listeners$jscomp$6_namespaceListeners$jscomp$2$$.$h$.get($message$jscomp$63$$.sessionId)) && ($JSCompiler_StaticMethods_onAppMessage_$self_listeners$jscomp$6_namespaceListeners$jscomp$2$$ = $JSCompiler_StaticMethods_onAppMessage_$self_listeners$jscomp$6_namespaceListeners$jscomp$2$$.get($message$jscomp$63$$.namespaceName)) && $goog$iter$forEach$$($JSCompiler_StaticMethods_onAppMessage_$self_listeners$jscomp$6_namespaceListeners$jscomp$2$$.$__iterator__$(), 
  function($JSCompiler_StaticMethods_onAppMessage_$self_listeners$jscomp$6_namespaceListeners$jscomp$2$$) {
    $JSCompiler_StaticMethods_onAppMessage_$self_listeners$jscomp$6_namespaceListeners$jscomp$2$$($message$jscomp$63$$.namespaceName, $message$jscomp$63$$.message);
  });
}, $JSCompiler_StaticMethods_sendCustomDialLaunchResponse_$$ = function($JSCompiler_StaticMethods_sendCustomDialLaunchResponse_$self$$, $sequenceNumber$jscomp$1$$, $opt_response$$) {
  $JSCompiler_StaticMethods_sendToExtension_$$($JSCompiler_StaticMethods_sendCustomDialLaunchResponse_$self$$, new $mr$cast$InternalMessage$$("custom_dial_launch", $opt_response$$, void 0, chrome.cast.timeout.sendCustomMessage), null, $sequenceNumber$jscomp$1$$);
}, $JSCompiler_StaticMethods_onCustomDialLaunchRequest_$$ = function($JSCompiler_StaticMethods_onCustomDialLaunchRequest_$self$$, $sequenceNumber$jscomp$2$$, $request$jscomp$26$$) {
  $JSCompiler_StaticMethods_onCustomDialLaunchRequest_$self$$.$b$.customDialLaunchCallback ? $JSCompiler_StaticMethods_onCustomDialLaunchRequest_$self$$.$b$.customDialLaunchCallback($request$jscomp$26$$).then(function($request$jscomp$26$$) {
    $JSCompiler_StaticMethods_sendCustomDialLaunchResponse_$$($JSCompiler_StaticMethods_onCustomDialLaunchRequest_$self$$, $sequenceNumber$jscomp$2$$, $request$jscomp$26$$);
  }, function() {
    $JSCompiler_StaticMethods_sendCustomDialLaunchResponse_$$($JSCompiler_StaticMethods_onCustomDialLaunchRequest_$self$$, $sequenceNumber$jscomp$2$$);
  }) : $JSCompiler_StaticMethods_sendCustomDialLaunchResponse_$$($JSCompiler_StaticMethods_onCustomDialLaunchRequest_$self$$, $sequenceNumber$jscomp$2$$);
}, $mr$cast$Api$BASE_64_REG_EX_$$ = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, $mr$cast$Api$ALLOWED_BROADCAST_TYPES_$$ = new Set(["PRECACHE"]), $mr$cast$Api$api$$ = new $mr$cast$Api$$, $mr$cast$Api$logger_$$ = $mr$Logger$getInstance$$("mr.cast.Api");
chrome.cast.$initialize$ = function($apiConfig$jscomp$2$$, $successCallback$jscomp$81$$, $errorCallback$jscomp$76$$) {
  $mr$cast$Api$api$$.$initialize$($apiConfig$jscomp$2$$, $successCallback$jscomp$81$$, $errorCallback$jscomp$76$$);
};
$goog$exportSymbol$$("chrome.cast.initialize", chrome.cast.$initialize$);
chrome.cast.$initializeWithContext$ = function($apiConfig$jscomp$3$$, $successCallback$jscomp$82$$, $errorCallback$jscomp$77$$) {
  var $api$jscomp$16$$ = new $mr$cast$Api$$;
  $api$jscomp$16$$.$initialize$($apiConfig$jscomp$3$$, $successCallback$jscomp$82$$, $errorCallback$jscomp$77$$);
  return $api$jscomp$16$$;
};
$goog$exportSymbol$$("chrome.cast.initializeWithContext", chrome.cast.$initializeWithContext$);
chrome.cast.$setPageContext$ = function($win$jscomp$2$$) {
  $mr$cast$Api$api$$.$setPageContext$($win$jscomp$2$$);
};
$goog$exportSymbol$$("chrome.cast.setPageContext", chrome.cast.$setPageContext$);
chrome.cast.requestSession = function($successCallback$jscomp$83$$, $errorCallback$jscomp$78$$, $opt_sessionRequest$jscomp$3$$) {
  $mr$cast$Api$api$$.requestSession($successCallback$jscomp$83$$, $errorCallback$jscomp$78$$, $opt_sessionRequest$jscomp$3$$);
};
$goog$exportSymbol$$("chrome.cast.requestSession", chrome.cast.requestSession);
chrome.cast.$precache$ = function($data$jscomp$48$$) {
  $JSCompiler_StaticMethods_broadcastOrSendMessage$$(new chrome.cast.media.$PrecacheRequest$($data$jscomp$48$$));
};
$goog$exportSymbol$$("chrome.cast.precache", chrome.cast.$precache$);
chrome.cast.$requestSessionById$ = function($sessionId$jscomp$29$$) {
  chrome.cast.$requestSessionByIdWithContext$($mr$cast$Api$api$$, $sessionId$jscomp$29$$);
};
$goog$exportSymbol$$("chrome.cast.requestSessionById", chrome.cast.$requestSessionById$);
chrome.cast.$requestSessionByIdWithContext$ = function($context$jscomp$20$$, $sessionId$jscomp$30$$) {
  $context$jscomp$20$$.$requestSessionById$($sessionId$jscomp$30$$);
};
$goog$exportSymbol$$("chrome.cast.requestSessionByIdWithContext", chrome.cast.$requestSessionByIdWithContext$);
chrome.cast.$addReceiverActionListener$ = function($listener$jscomp$143$$) {
  $mr$cast$Api$api$$.$addReceiverActionListener$($listener$jscomp$143$$);
};
$goog$exportSymbol$$("chrome.cast.addReceiverActionListener", chrome.cast.$addReceiverActionListener$);
chrome.cast.$removeReceiverActionListener$ = function($listener$jscomp$144$$) {
  $mr$cast$Api$api$$.$removeReceiverActionListener$($listener$jscomp$144$$);
};
$goog$exportSymbol$$("chrome.cast.removeReceiverActionListener", chrome.cast.$removeReceiverActionListener$);
chrome.cast.$logMessage$ = function() {
};
$goog$exportSymbol$$("chrome.cast.logMessage", chrome.cast.$logMessage$);
chrome.cast.$setCustomReceivers$ = function($receivers$$, $successCallback$jscomp$84$$) {
  $successCallback$jscomp$84$$();
};
$goog$exportSymbol$$("chrome.cast.setCustomReceivers", chrome.cast.$setCustomReceivers$);
chrome.cast.$setReceiverDisplayStatus$ = function($receiver$jscomp$2$$, $successCallback$jscomp$85$$) {
  $successCallback$jscomp$85$$();
};
$goog$exportSymbol$$("chrome.cast.setReceiverDisplayStatus", chrome.cast.$setReceiverDisplayStatus$);
chrome.cast.unescape = function($escaped$$) {
  return -1 != $escaped$$.indexOf("&") ? "document" in $goog$global$$ ? $goog$string$unescapeEntitiesUsingDom_$$($escaped$$) : $goog$string$unescapePureXmlEntities_$$($escaped$$) : $escaped$$;
};
$goog$exportSymbol$$("chrome.cast.unescape", chrome.cast.unescape);
chrome.cast.isAvailable = !1;
$goog$exportSymbol$$("chrome.cast.isAvailable", chrome.cast.isAvailable);
chrome.cast.$setupCastApiCalled_$ = !1;
chrome.cast.$setupCastApi_$ = function() {
  if (!chrome.cast.$setupCastApiCalled_$) {
    chrome.cast.$setupCastApiCalled_$ = !0;
    chrome.cast.isAvailable = !0;
    var $callback$jscomp$418$$ = window.__onGCastApiAvailable;
    $callback$jscomp$418$$ && "function" == typeof $callback$jscomp$418$$ && $callback$jscomp$418$$(!0);
  }
};
"complete" == document.readyState ? chrome.cast.$setupCastApi_$() : (window.addEventListener("load", chrome.cast.$setupCastApi_$, !1), window.addEventListener("DOMContentLoaded", chrome.cast.$setupCastApi_$, !1));
}).call(this);
(function(){'use strict';var $JSCompiler_prototypeAlias$$, $goog$$ = $goog$$ || {};
$goog$$.global = this;
$goog$$.$isDef$ = function($val$jscomp$1$$) {
  return void 0 !== $val$jscomp$1$$;
};
$goog$$.$isString$ = function($val$jscomp$2$$) {
  return "string" == typeof $val$jscomp$2$$;
};
$goog$$.$isBoolean$ = function($val$jscomp$3$$) {
  return "boolean" == typeof $val$jscomp$3$$;
};
$goog$$.$isNumber$ = function($val$jscomp$4$$) {
  return "number" == typeof $val$jscomp$4$$;
};
$goog$$.$exportPath_$ = function($name$jscomp$65_parts$$, $opt_object$$, $cur_opt_objectToExportTo$$) {
  $name$jscomp$65_parts$$ = $name$jscomp$65_parts$$.split(".");
  $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$ || $goog$$.global;
  $name$jscomp$65_parts$$[0] in $cur_opt_objectToExportTo$$ || !$cur_opt_objectToExportTo$$.execScript || $cur_opt_objectToExportTo$$.execScript("var " + $name$jscomp$65_parts$$[0]);
  for (var $part$$; $name$jscomp$65_parts$$.length && ($part$$ = $name$jscomp$65_parts$$.shift());) {
    !$name$jscomp$65_parts$$.length && $goog$$.$isDef$($opt_object$$) ? $cur_opt_objectToExportTo$$[$part$$] = $opt_object$$ : $cur_opt_objectToExportTo$$[$part$$] && $cur_opt_objectToExportTo$$[$part$$] !== Object.prototype[$part$$] ? $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$[$part$$] : $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$[$part$$] = {};
  }
};
$goog$$.define = function($name$jscomp$66$$, $defaultValue$jscomp$2$$) {
  $goog$$.$exportPath_$($name$jscomp$66$$, $defaultValue$jscomp$2$$);
};
$goog$$.$DEBUG$ = !0;
$goog$$.$LOCALE$ = "en";
$goog$$.$TRUSTED_SITE$ = !0;
$goog$$.$STRICT_MODE_COMPATIBLE$ = !1;
$goog$$.$DISALLOW_TEST_ONLY_CODE$ = !$goog$$.$DEBUG$;
$goog$$.$ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING$ = !1;
$goog$$.$provide$ = function($name$jscomp$67$$) {
  if ($goog$$.$isInModuleLoader_$()) {
    throw Error("goog.provide can not be used within a goog.module.");
  }
  $goog$$.$constructNamespace_$($name$jscomp$67$$);
};
$goog$$.$constructNamespace_$ = function($name$jscomp$68$$, $opt_obj$jscomp$1$$) {
  $goog$$.$exportPath_$($name$jscomp$68$$, $opt_obj$jscomp$1$$);
};
$goog$$.$VALID_MODULE_RE_$ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
$goog$$.$module$ = function($name$jscomp$69$$) {
  if (!$goog$$.$isString$($name$jscomp$69$$) || !$name$jscomp$69$$ || -1 == $name$jscomp$69$$.search($goog$$.$VALID_MODULE_RE_$)) {
    throw Error("Invalid module identifier");
  }
  if (!$goog$$.$isInModuleLoader_$()) {
    throw Error("Module " + $name$jscomp$69$$ + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
  }
  if ($goog$$.$moduleLoaderState_$.$moduleName$) {
    throw Error("goog.module may only be called once per module.");
  }
  $goog$$.$moduleLoaderState_$.$moduleName$ = $name$jscomp$69$$;
};
$goog$$.$module$.get = function() {
  return null;
};
$goog$$.$module$.$a$ = function() {
  return null;
};
$goog$$.$moduleLoaderState_$ = null;
$goog$$.$isInModuleLoader_$ = function() {
  return null != $goog$$.$moduleLoaderState_$;
};
$goog$$.$module$.$declareLegacyNamespace$ = function() {
  $goog$$.$moduleLoaderState_$.$declareLegacyNamespace$ = !0;
};
$goog$$.$setTestOnly$ = function($opt_message$jscomp$7$$) {
  if ($goog$$.$DISALLOW_TEST_ONLY_CODE$) {
    throw $opt_message$jscomp$7$$ = $opt_message$jscomp$7$$ || "", Error("Importing test-only code into non-debug environment" + ($opt_message$jscomp$7$$ ? ": " + $opt_message$jscomp$7$$ : "."));
  }
};
$goog$$.$forwardDeclare$ = function() {
};
$goog$$.$getObjectByName$ = function($name$jscomp$74_parts$jscomp$1$$) {
  $name$jscomp$74_parts$jscomp$1$$ = $name$jscomp$74_parts$jscomp$1$$.split(".");
  for (var $cur$jscomp$1$$ = $goog$$.global, $part$jscomp$1$$; $part$jscomp$1$$ = $name$jscomp$74_parts$jscomp$1$$.shift();) {
    if ($goog$$.$isDefAndNotNull$($cur$jscomp$1$$[$part$jscomp$1$$])) {
      $cur$jscomp$1$$ = $cur$jscomp$1$$[$part$jscomp$1$$];
    } else {
      return null;
    }
  }
  return $cur$jscomp$1$$;
};
$goog$$.$globalize$ = function($obj$jscomp$26$$, $global_opt_global$$) {
  $global_opt_global$$ = $global_opt_global$$ || $goog$$.global;
  for (var $x$jscomp$74$$ in $obj$jscomp$26$$) {
    $global_opt_global$$[$x$jscomp$74$$] = $obj$jscomp$26$$[$x$jscomp$74$$];
  }
};
$goog$$.$addDependency$ = function($path$jscomp$6_relPath$$, $provides_require$$, $requires$$, $j_opt_loadFlags$$) {
  if ($goog$$.$DEPENDENCIES_ENABLED$) {
    var $provide$$;
    $path$jscomp$6_relPath$$ = $path$jscomp$6_relPath$$.replace(/\\/g, "/");
    var $deps$$ = $goog$$.$dependencies_$;
    $j_opt_loadFlags$$ && "boolean" !== typeof $j_opt_loadFlags$$ || ($j_opt_loadFlags$$ = $j_opt_loadFlags$$ ? {module:"goog"} : {});
    for (var $i$jscomp$3$$ = 0; $provide$$ = $provides_require$$[$i$jscomp$3$$]; $i$jscomp$3$$++) {
      $deps$$.$nameToPath$[$provide$$] = $path$jscomp$6_relPath$$, $deps$$.$loadFlags$[$path$jscomp$6_relPath$$] = $j_opt_loadFlags$$;
    }
    for ($j_opt_loadFlags$$ = 0; $provides_require$$ = $requires$$[$j_opt_loadFlags$$]; $j_opt_loadFlags$$++) {
      $path$jscomp$6_relPath$$ in $deps$$.$requires$ || ($deps$$.$requires$[$path$jscomp$6_relPath$$] = {}), $deps$$.$requires$[$path$jscomp$6_relPath$$][$provides_require$$] = !0;
    }
  }
};
$goog$$.$useStrictRequires$ = !1;
$goog$$.$ENABLE_DEBUG_LOADER$ = !0;
$goog$$.$logToConsole_$ = function($msg$$) {
  $goog$$.global.console && $goog$$.global.console.error($msg$$);
};
$goog$$.$require$ = function() {
};
$goog$$.$basePath$ = "";
$goog$$.$nullFunction$ = function() {
};
$goog$$.$abstractMethod$ = function() {
  throw Error("unimplemented abstract method");
};
$goog$$.$addSingletonGetter$ = function() {
  var $ctor$$ = chrome.cast.$games$.$internal$.$RequestIdGenerator$;
  $ctor$$.$instance_$ = void 0;
  $ctor$$.$getInstance$ = function() {
    if ($ctor$$.$instance_$) {
      return $ctor$$.$instance_$;
    }
    $goog$$.$DEBUG$ && ($goog$$.$instantiatedSingletons_$[$goog$$.$instantiatedSingletons_$.length] = $ctor$$);
    return $ctor$$.$instance_$ = new $ctor$$;
  };
};
$goog$$.$instantiatedSingletons_$ = [];
$goog$$.$LOAD_MODULE_USING_EVAL$ = !0;
$goog$$.$SEAL_MODULE_EXPORTS$ = $goog$$.$DEBUG$;
$goog$$.$loadedModules_$ = {};
$goog$$.$DEPENDENCIES_ENABLED$ = !1;
$goog$$.$TRANSPILE$ = "detect";
$goog$$.$TRANSPILER$ = "transpile.js";
$goog$$.$DEPENDENCIES_ENABLED$ && ($goog$$.$dependencies_$ = {$loadFlags$:{}, $nameToPath$:{}, $requires$:{}, $visited$:{}, $written$:{}, $deferred$:{}}, $goog$$.$inHtmlDocument_$ = function() {
  var $doc$$ = $goog$$.global.document;
  return null != $doc$$ && "write" in $doc$$;
}, $goog$$.$findBasePath_$ = function() {
  var $scripts$$;
  if ($goog$$.$isDef$($goog$$.global.$CLOSURE_BASE_PATH$) && $goog$$.$isString$($goog$$.global.$CLOSURE_BASE_PATH$)) {
    $goog$$.$basePath$ = $goog$$.global.$CLOSURE_BASE_PATH$;
  } else {
    if ($goog$$.$inHtmlDocument_$()) {
      var $doc$jscomp$1_i$jscomp$4$$ = $goog$$.global.document, $currentScript_src$jscomp$3$$ = $doc$jscomp$1_i$jscomp$4$$.currentScript;
      $currentScript_src$jscomp$3$$ ? $scripts$$ = [$currentScript_src$jscomp$3$$] : $scripts$$ = $doc$jscomp$1_i$jscomp$4$$.getElementsByTagName("SCRIPT");
      for ($doc$jscomp$1_i$jscomp$4$$ = $scripts$$.length - 1; 0 <= $doc$jscomp$1_i$jscomp$4$$; --$doc$jscomp$1_i$jscomp$4$$) {
        var $currentScript_src$jscomp$3$$ = $scripts$$[$doc$jscomp$1_i$jscomp$4$$].src, $l_qmark$$ = $currentScript_src$jscomp$3$$.lastIndexOf("?"), $l_qmark$$ = -1 == $l_qmark$$ ? $currentScript_src$jscomp$3$$.length : $l_qmark$$;
        if ("base.js" == $currentScript_src$jscomp$3$$.substr($l_qmark$$ - 7, 7)) {
          $goog$$.$basePath$ = $currentScript_src$jscomp$3$$.substr(0, $l_qmark$$ - 7);
          break;
        }
      }
    }
  }
}, $goog$$.$importScript_$ = function($src$jscomp$4$$, $opt_sourceText$$) {
  ($goog$$.global.$CLOSURE_IMPORT_SCRIPT$ || $goog$$.$writeScriptTag_$)($src$jscomp$4$$, $opt_sourceText$$) && ($goog$$.$dependencies_$.$written$[$src$jscomp$4$$] = !0);
}, $goog$$.$IS_OLD_IE_$ = !($goog$$.global.atob || !$goog$$.global.document || !$goog$$.global.document.all), $goog$$.$oldIeWaiting_$ = !1, $goog$$.$importProcessedScript_$ = function($src$jscomp$5$$, $isModule$$, $needsTranspile$$) {
  $goog$$.$importScript_$("", 'goog.retrieveAndExec_("' + $src$jscomp$5$$ + '", ' + $isModule$$ + ", " + $needsTranspile$$ + ");");
}, $goog$$.$queuedModules_$ = [], $goog$$.$wrapModule_$ = function($srcUrl$$, $scriptText$$) {
  return $goog$$.$LOAD_MODULE_USING_EVAL$ && $goog$$.$isDef$($goog$$.global.JSON) ? "goog.loadModule(" + $goog$$.global.JSON.stringify($scriptText$$ + "\n//# sourceURL=" + $srcUrl$$ + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + $scriptText$$ + "\n;return exports});\n//# sourceURL=" + $srcUrl$$ + "\n";
}, $goog$$.$loadQueuedModules_$ = function() {
  var $count$jscomp$10$$ = $goog$$.$queuedModules_$.length;
  if (0 < $count$jscomp$10$$) {
    var $queue$$ = $goog$$.$queuedModules_$;
    $goog$$.$queuedModules_$ = [];
    for (var $i$jscomp$5$$ = 0; $i$jscomp$5$$ < $count$jscomp$10$$; $i$jscomp$5$$++) {
      $goog$$.$maybeProcessDeferredPath_$($queue$$[$i$jscomp$5$$]);
    }
  }
  $goog$$.$oldIeWaiting_$ = !1;
}, $goog$$.$maybeProcessDeferredDep_$ = function($name$jscomp$76$$) {
  $goog$$.$isDeferredModule_$($name$jscomp$76$$) && $goog$$.$allDepsAreAvailable_$($name$jscomp$76$$) && $goog$$.$maybeProcessDeferredPath_$($goog$$.$basePath$ + $goog$$.$getPathFromDeps_$($name$jscomp$76$$));
}, $goog$$.$isDeferredModule_$ = function($name$jscomp$77_path$jscomp$10$$) {
  var $loadFlags$$ = ($name$jscomp$77_path$jscomp$10$$ = $goog$$.$getPathFromDeps_$($name$jscomp$77_path$jscomp$10$$)) && $goog$$.$dependencies_$.$loadFlags$[$name$jscomp$77_path$jscomp$10$$] || {}, $languageLevel$$ = $loadFlags$$.lang || "es3";
  return $name$jscomp$77_path$jscomp$10$$ && ("goog" == $loadFlags$$.module || $goog$$.$needsTranspile_$($languageLevel$$)) ? $goog$$.$basePath$ + $name$jscomp$77_path$jscomp$10$$ in $goog$$.$dependencies_$.$deferred$ : !1;
}, $goog$$.$allDepsAreAvailable_$ = function($name$jscomp$78_path$jscomp$11$$) {
  if (($name$jscomp$78_path$jscomp$11$$ = $goog$$.$getPathFromDeps_$($name$jscomp$78_path$jscomp$11$$)) && $name$jscomp$78_path$jscomp$11$$ in $goog$$.$dependencies_$.$requires$) {
    for (var $requireName$$ in $goog$$.$dependencies_$.$requires$[$name$jscomp$78_path$jscomp$11$$]) {
      if (!$goog$$.$isProvided_$($requireName$$) && !$goog$$.$isDeferredModule_$($requireName$$)) {
        return !1;
      }
    }
  }
  return !0;
}, $goog$$.$maybeProcessDeferredPath_$ = function($abspath$jscomp$1$$) {
  if ($abspath$jscomp$1$$ in $goog$$.$dependencies_$.$deferred$) {
    var $src$jscomp$6$$ = $goog$$.$dependencies_$.$deferred$[$abspath$jscomp$1$$];
    delete $goog$$.$dependencies_$.$deferred$[$abspath$jscomp$1$$];
    $goog$$.$globalEval$($src$jscomp$6$$);
  }
}, $goog$$.$loadModuleFromUrl$ = function() {
}, $goog$$.$writeScriptSrcNode_$ = function($src$jscomp$7$$) {
  $goog$$.global.document.write('<script type="text/javascript" src="' + $src$jscomp$7$$ + '">\x3c/script>');
}, $goog$$.$appendScriptSrcNode_$ = function($src$jscomp$8$$) {
  var $doc$jscomp$2$$ = $goog$$.global.document, $scriptEl$$ = $doc$jscomp$2$$.createElement("script");
  $scriptEl$$.type = "text/javascript";
  $scriptEl$$.src = $src$jscomp$8$$;
  $scriptEl$$.defer = !1;
  $scriptEl$$.async = !1;
  $doc$jscomp$2$$.head.appendChild($scriptEl$$);
}, $goog$$.$writeScriptTag_$ = function($src$jscomp$9$$, $opt_sourceText$jscomp$1_state$jscomp$1$$) {
  if ($goog$$.$inHtmlDocument_$()) {
    var $doc$jscomp$3$$ = $goog$$.global.document;
    if (!$goog$$.$ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING$ && "complete" == $doc$jscomp$3$$.readyState) {
      if (/\bdeps.js$/.test($src$jscomp$9$$)) {
        return !1;
      }
      throw Error('Cannot write "' + $src$jscomp$9$$ + '" after document load');
    }
    void 0 === $opt_sourceText$jscomp$1_state$jscomp$1$$ ? $goog$$.$IS_OLD_IE_$ ? ($goog$$.$oldIeWaiting_$ = !0, $opt_sourceText$jscomp$1_state$jscomp$1$$ = " onreadystatechange='goog.onScriptLoad_(this, " + ++$goog$$.$lastNonModuleScriptIndex_$ + ")' ", $doc$jscomp$3$$.write('<script type="text/javascript" src="' + $src$jscomp$9$$ + '"' + $opt_sourceText$jscomp$1_state$jscomp$1$$ + ">\x3c/script>")) : $goog$$.$ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING$ ? $goog$$.$appendScriptSrcNode_$($src$jscomp$9$$) : 
    $goog$$.$writeScriptSrcNode_$($src$jscomp$9$$) : $doc$jscomp$3$$.write('<script type="text/javascript">' + $goog$$.$protectScriptTag_$($opt_sourceText$jscomp$1_state$jscomp$1$$) + "\x3c/script>");
    return !0;
  }
  return !1;
}, $goog$$.$protectScriptTag_$ = function($str$jscomp$10$$) {
  return $str$jscomp$10$$.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
}, $goog$$.$needsTranspile_$ = function($lang$$) {
  if ("always" == $goog$$.$TRANSPILE$) {
    return !0;
  }
  if ("never" == $goog$$.$TRANSPILE$) {
    return !1;
  }
  $goog$$.$requiresTranspilation_$ || ($goog$$.$requiresTranspilation_$ = $goog$$.$createRequiresTranspilation_$());
  if ($lang$$ in $goog$$.$requiresTranspilation_$) {
    return $goog$$.$requiresTranspilation_$[$lang$$];
  }
  throw Error("Unknown language mode: " + $lang$$);
}, $goog$$.$requiresTranspilation_$ = null, $goog$$.$lastNonModuleScriptIndex_$ = 0, $goog$$.$onScriptLoad_$ = function($script$jscomp$1$$, $scriptIndex$$) {
  "complete" == $script$jscomp$1$$.readyState && $goog$$.$lastNonModuleScriptIndex_$ == $scriptIndex$$ && $goog$$.$loadQueuedModules_$();
  return !0;
}, $goog$$.$writeScripts_$ = function($path$jscomp$12_pathToLoad$$) {
  function $visitNode$$($path$jscomp$12_pathToLoad$$) {
    if (!($path$jscomp$12_pathToLoad$$ in $deps$jscomp$1$$.$written$ || $path$jscomp$12_pathToLoad$$ in $deps$jscomp$1$$.$visited$)) {
      $deps$jscomp$1$$.$visited$[$path$jscomp$12_pathToLoad$$] = !0;
      if ($path$jscomp$12_pathToLoad$$ in $deps$jscomp$1$$.$requires$) {
        for (var $i$jscomp$6$$ in $deps$jscomp$1$$.$requires$[$path$jscomp$12_pathToLoad$$]) {
          if (!$goog$$.$isProvided_$($i$jscomp$6$$)) {
            if ($i$jscomp$6$$ in $deps$jscomp$1$$.$nameToPath$) {
              $visitNode$$($deps$jscomp$1$$.$nameToPath$[$i$jscomp$6$$]);
            } else {
              throw Error("Undefined nameToPath for " + $i$jscomp$6$$);
            }
          }
        }
      }
      $path$jscomp$12_pathToLoad$$ in $seenScript$$ || ($seenScript$$[$path$jscomp$12_pathToLoad$$] = !0, $scripts$jscomp$1$$.push($path$jscomp$12_pathToLoad$$));
    }
  }
  var $scripts$jscomp$1$$ = [], $seenScript$$ = {}, $deps$jscomp$1$$ = $goog$$.$dependencies_$;
  $visitNode$$($path$jscomp$12_pathToLoad$$);
  for (var $i$jscomp$6$$ = 0; $i$jscomp$6$$ < $scripts$jscomp$1$$.length; $i$jscomp$6$$++) {
    $path$jscomp$12_pathToLoad$$ = $scripts$jscomp$1$$[$i$jscomp$6$$], $goog$$.$dependencies_$.$written$[$path$jscomp$12_pathToLoad$$] = !0;
  }
  var $moduleState$$ = $goog$$.$moduleLoaderState_$;
  $goog$$.$moduleLoaderState_$ = null;
  for ($i$jscomp$6$$ = 0; $i$jscomp$6$$ < $scripts$jscomp$1$$.length; $i$jscomp$6$$++) {
    if ($path$jscomp$12_pathToLoad$$ = $scripts$jscomp$1$$[$i$jscomp$6$$]) {
      var $loadFlags$jscomp$1$$ = $deps$jscomp$1$$.$loadFlags$[$path$jscomp$12_pathToLoad$$] || {}, $needsTranspile$jscomp$1$$ = $goog$$.$needsTranspile_$($loadFlags$jscomp$1$$.lang || "es3");
      "goog" == $loadFlags$jscomp$1$$.module || $needsTranspile$jscomp$1$$ ? $goog$$.$importProcessedScript_$($goog$$.$basePath$ + $path$jscomp$12_pathToLoad$$, "goog" == $loadFlags$jscomp$1$$.module, $needsTranspile$jscomp$1$$) : $goog$$.$importScript_$($goog$$.$basePath$ + $path$jscomp$12_pathToLoad$$);
    } else {
      throw $goog$$.$moduleLoaderState_$ = $moduleState$$, Error("Undefined script input");
    }
  }
  $goog$$.$moduleLoaderState_$ = $moduleState$$;
}, $goog$$.$getPathFromDeps_$ = function($rule$jscomp$2$$) {
  return $rule$jscomp$2$$ in $goog$$.$dependencies_$.$nameToPath$ ? $goog$$.$dependencies_$.$nameToPath$[$rule$jscomp$2$$] : null;
}, $goog$$.$findBasePath_$(), $goog$$.global.$CLOSURE_NO_DEPS$ || $goog$$.$importScript_$($goog$$.$basePath$ + "deps.js"));
$goog$$.$hasBadLetScoping$ = null;
$goog$$.$useSafari10Workaround$ = function() {
  if (null == $goog$$.$hasBadLetScoping$) {
    try {
      var $hasBadLetScoping$$ = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";');
    } catch ($e$jscomp$7$$) {
      $hasBadLetScoping$$ = !1;
    }
    $goog$$.$hasBadLetScoping$ = $hasBadLetScoping$$;
  }
  return $goog$$.$hasBadLetScoping$;
};
$goog$$.$workaroundSafari10EvalBug$ = function($moduleDef$$) {
  return "(function(){" + $moduleDef$$ + "\n;})();\n";
};
$goog$$.$loadModule$ = function($moduleDef$jscomp$1$$) {
  var $previousState$$ = $goog$$.$moduleLoaderState_$;
  try {
    $goog$$.$moduleLoaderState_$ = {$moduleName$:void 0, $declareLegacyNamespace$:!1};
    if ($goog$$.$isFunction$($moduleDef$jscomp$1$$)) {
      var $exports$$ = $moduleDef$jscomp$1$$.call(void 0, {});
    } else {
      if ($goog$$.$isString$($moduleDef$jscomp$1$$)) {
        $goog$$.$useSafari10Workaround$() && ($moduleDef$jscomp$1$$ = $goog$$.$workaroundSafari10EvalBug$($moduleDef$jscomp$1$$)), $exports$$ = $goog$$.$loadModuleFromSource_$.call(void 0, $moduleDef$jscomp$1$$);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var $moduleName$jscomp$1$$ = $goog$$.$moduleLoaderState_$.$moduleName$;
    if (!$goog$$.$isString$($moduleName$jscomp$1$$) || !$moduleName$jscomp$1$$) {
      throw Error('Invalid module name "' + $moduleName$jscomp$1$$ + '"');
    }
    $goog$$.$moduleLoaderState_$.$declareLegacyNamespace$ ? $goog$$.$constructNamespace_$($moduleName$jscomp$1$$, $exports$$) : $goog$$.$SEAL_MODULE_EXPORTS$ && Object.seal && "object" == typeof $exports$$ && null != $exports$$ && Object.seal($exports$$);
    $goog$$.$loadedModules_$[$moduleName$jscomp$1$$] = $exports$$;
  } finally {
    $goog$$.$moduleLoaderState_$ = $previousState$$;
  }
};
$goog$$.$loadModuleFromSource_$ = function($JSCompiler_OptimizeArgumentsArray_p0$$) {
  eval($JSCompiler_OptimizeArgumentsArray_p0$$);
  return {};
};
$goog$$.$normalizePath_$ = function($components_path$jscomp$14$$) {
  $components_path$jscomp$14$$ = $components_path$jscomp$14$$.split("/");
  for (var $i$jscomp$7$$ = 0; $i$jscomp$7$$ < $components_path$jscomp$14$$.length;) {
    "." == $components_path$jscomp$14$$[$i$jscomp$7$$] ? $components_path$jscomp$14$$.splice($i$jscomp$7$$, 1) : $i$jscomp$7$$ && ".." == $components_path$jscomp$14$$[$i$jscomp$7$$] && $components_path$jscomp$14$$[$i$jscomp$7$$ - 1] && ".." != $components_path$jscomp$14$$[$i$jscomp$7$$ - 1] ? $components_path$jscomp$14$$.splice(--$i$jscomp$7$$, 2) : $i$jscomp$7$$++;
  }
  return $components_path$jscomp$14$$.join("/");
};
$goog$$.$loadFileSync_$ = function($src$jscomp$10$$) {
  if ($goog$$.global.$CLOSURE_LOAD_FILE_SYNC$) {
    return $goog$$.global.$CLOSURE_LOAD_FILE_SYNC$($src$jscomp$10$$);
  }
  try {
    var $xhr$$ = new $goog$$.global.XMLHttpRequest;
    $xhr$$.open("get", $src$jscomp$10$$, !1);
    $xhr$$.send();
    return 0 == $xhr$$.status || 200 == $xhr$$.status ? $xhr$$.responseText : null;
  } catch ($err$jscomp$3$$) {
    return null;
  }
};
$goog$$.$retrieveAndExec_$ = function() {
};
$goog$$.$transpile_$ = function($code$jscomp$3$$, $path$jscomp$15$$) {
  var $jscomp$$ = $goog$$.global.$jscomp;
  $jscomp$$ || ($goog$$.global.$jscomp = $jscomp$$ = {});
  var $transpile$$ = $jscomp$$.$transpile$;
  if (!$transpile$$) {
    var $transpilerPath$$ = $goog$$.$basePath$ + $goog$$.$TRANSPILER$, $transpilerCode$$ = $goog$$.$loadFileSync_$($transpilerPath$$);
    if ($transpilerCode$$) {
      eval($transpilerCode$$ + "\n//# sourceURL=" + $transpilerPath$$);
      if ($goog$$.global.$gwtExport && $goog$$.global.$gwtExport.$jscomp && !$goog$$.global.$gwtExport.$jscomp.transpile) {
        throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify($goog$$.global.$gwtExport));
      }
      $goog$$.global.$jscomp.$transpile$ = $goog$$.global.$gwtExport.$jscomp.transpile;
      $jscomp$$ = $goog$$.global.$jscomp;
      $transpile$$ = $jscomp$$.$transpile$;
    }
  }
  if (!$transpile$$) {
    var $suffix$$ = " requires transpilation but no transpiler was found.", $suffix$$ = $suffix$$ + ' Please add "//javascript/closure:transpiler" as a data dependency to ensure it is included.', $transpile$$ = $jscomp$$.$transpile$ = function($code$jscomp$3$$, $path$jscomp$15$$) {
      $goog$$.$logToConsole_$($path$jscomp$15$$ + $suffix$$);
      return $code$jscomp$3$$;
    };
  }
  return $transpile$$($code$jscomp$3$$, $path$jscomp$15$$);
};
$goog$$.$typeOf$ = function($value$jscomp$77$$) {
  var $s$jscomp$2$$ = typeof $value$jscomp$77$$;
  if ("object" == $s$jscomp$2$$) {
    if ($value$jscomp$77$$) {
      if ($value$jscomp$77$$ instanceof Array) {
        return "array";
      }
      if ($value$jscomp$77$$ instanceof Object) {
        return $s$jscomp$2$$;
      }
      var $className$jscomp$1$$ = Object.prototype.toString.call($value$jscomp$77$$);
      if ("[object Window]" == $className$jscomp$1$$) {
        return "object";
      }
      if ("[object Array]" == $className$jscomp$1$$ || "number" == typeof $value$jscomp$77$$.length && "undefined" != typeof $value$jscomp$77$$.splice && "undefined" != typeof $value$jscomp$77$$.propertyIsEnumerable && !$value$jscomp$77$$.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == $className$jscomp$1$$ || "undefined" != typeof $value$jscomp$77$$.call && "undefined" != typeof $value$jscomp$77$$.propertyIsEnumerable && !$value$jscomp$77$$.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == $s$jscomp$2$$ && "undefined" == typeof $value$jscomp$77$$.call) {
      return "object";
    }
  }
  return $s$jscomp$2$$;
};
$goog$$.$isNull$ = function($val$jscomp$5$$) {
  return null === $val$jscomp$5$$;
};
$goog$$.$isDefAndNotNull$ = function($val$jscomp$6$$) {
  return null != $val$jscomp$6$$;
};
$goog$$.isArray = function($val$jscomp$7$$) {
  return "array" == $goog$$.$typeOf$($val$jscomp$7$$);
};
$goog$$.$isArrayLike$ = function($val$jscomp$8$$) {
  var $type$jscomp$108$$ = $goog$$.$typeOf$($val$jscomp$8$$);
  return "array" == $type$jscomp$108$$ || "object" == $type$jscomp$108$$ && "number" == typeof $val$jscomp$8$$.length;
};
$goog$$.$isDateLike$ = function($val$jscomp$9$$) {
  return $goog$$.$isObject$($val$jscomp$9$$) && "function" == typeof $val$jscomp$9$$.getFullYear;
};
$goog$$.$isFunction$ = function($val$jscomp$10$$) {
  return "function" == $goog$$.$typeOf$($val$jscomp$10$$);
};
$goog$$.$isObject$ = function($val$jscomp$11$$) {
  var $type$jscomp$109$$ = typeof $val$jscomp$11$$;
  return "object" == $type$jscomp$109$$ && null != $val$jscomp$11$$ || "function" == $type$jscomp$109$$;
};
$goog$$.$getUid$ = function($obj$jscomp$27$$) {
  return $obj$jscomp$27$$[$goog$$.$UID_PROPERTY_$] || ($obj$jscomp$27$$[$goog$$.$UID_PROPERTY_$] = ++$goog$$.$uidCounter_$);
};
$goog$$.$hasUid$ = function($obj$jscomp$28$$) {
  return !!$obj$jscomp$28$$[$goog$$.$UID_PROPERTY_$];
};
$goog$$.$removeUid$ = function($obj$jscomp$29$$) {
  null !== $obj$jscomp$29$$ && "removeAttribute" in $obj$jscomp$29$$ && $obj$jscomp$29$$.removeAttribute($goog$$.$UID_PROPERTY_$);
  try {
    delete $obj$jscomp$29$$[$goog$$.$UID_PROPERTY_$];
  } catch ($ex$$) {
  }
};
$goog$$.$UID_PROPERTY_$ = "closure_uid_" + (1e9 * Math.random() >>> 0);
$goog$$.$uidCounter_$ = 0;
$goog$$.$getHashCode$ = $goog$$.$getUid$;
$goog$$.$removeHashCode$ = $goog$$.$removeUid$;
$goog$$.$cloneObject$ = function($obj$jscomp$30$$) {
  var $clone_type$jscomp$110$$ = $goog$$.$typeOf$($obj$jscomp$30$$);
  if ("object" == $clone_type$jscomp$110$$ || "array" == $clone_type$jscomp$110$$) {
    if ($obj$jscomp$30$$.clone) {
      return $obj$jscomp$30$$.clone();
    }
    var $clone_type$jscomp$110$$ = "array" == $clone_type$jscomp$110$$ ? [] : {}, $key$jscomp$29$$;
    for ($key$jscomp$29$$ in $obj$jscomp$30$$) {
      $clone_type$jscomp$110$$[$key$jscomp$29$$] = $goog$$.$cloneObject$($obj$jscomp$30$$[$key$jscomp$29$$]);
    }
    return $clone_type$jscomp$110$$;
  }
  return $obj$jscomp$30$$;
};
$goog$$.$bindNative_$ = function($fn$jscomp$2$$, $selfObj$jscomp$1$$, $var_args$jscomp$46$$) {
  return $fn$jscomp$2$$.call.apply($fn$jscomp$2$$.bind, arguments);
};
$goog$$.$bindJs_$ = function($fn$jscomp$3$$, $selfObj$jscomp$2$$, $var_args$jscomp$47$$) {
  if (!$fn$jscomp$3$$) {
    throw Error();
  }
  if (2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $var_args$jscomp$47$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($var_args$jscomp$47$$, $boundArgs$$);
      return $fn$jscomp$3$$.apply($selfObj$jscomp$2$$, $var_args$jscomp$47$$);
    };
  }
  return function() {
    return $fn$jscomp$3$$.apply($selfObj$jscomp$2$$, arguments);
  };
};
$goog$$.bind = function($fn$jscomp$4$$, $selfObj$jscomp$3$$, $var_args$jscomp$48$$) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$$.bind = $goog$$.$bindNative_$ : $goog$$.bind = $goog$$.$bindJs_$;
  return $goog$$.bind.apply(null, arguments);
};
$goog$$.$partial$ = function($fn$jscomp$5$$, $var_args$jscomp$49$$) {
  var $args$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $var_args$jscomp$49$$ = $args$$.slice();
    $var_args$jscomp$49$$.push.apply($var_args$jscomp$49$$, arguments);
    return $fn$jscomp$5$$.apply(this, $var_args$jscomp$49$$);
  };
};
$goog$$.$mixin$ = function($target$jscomp$57$$, $source$jscomp$12$$) {
  for (var $x$jscomp$75$$ in $source$jscomp$12$$) {
    $target$jscomp$57$$[$x$jscomp$75$$] = $source$jscomp$12$$[$x$jscomp$75$$];
  }
};
$goog$$.now = $goog$$.$TRUSTED_SITE$ && Date.now || function() {
  return +new Date;
};
$goog$$.$globalEval$ = function($script$jscomp$2$$) {
  if ($goog$$.global.execScript) {
    $goog$$.global.execScript($script$jscomp$2$$, "JavaScript");
  } else {
    if ($goog$$.global.eval) {
      if (null == $goog$$.$evalWorksForGlobals_$) {
        if ($goog$$.global.eval("var _evalTest_ = 1;"), "undefined" != typeof $goog$$.global._evalTest_) {
          try {
            delete $goog$$.global._evalTest_;
          } catch ($ignore$$) {
          }
          $goog$$.$evalWorksForGlobals_$ = !0;
        } else {
          $goog$$.$evalWorksForGlobals_$ = !1;
        }
      }
      if ($goog$$.$evalWorksForGlobals_$) {
        $goog$$.global.eval($script$jscomp$2$$);
      } else {
        var $doc$jscomp$4$$ = $goog$$.global.document, $scriptElt$$ = $doc$jscomp$4$$.createElement("SCRIPT");
        $scriptElt$$.type = "text/javascript";
        $scriptElt$$.defer = !1;
        $scriptElt$$.appendChild($doc$jscomp$4$$.createTextNode($script$jscomp$2$$));
        $doc$jscomp$4$$.body.appendChild($scriptElt$$);
        $doc$jscomp$4$$.body.removeChild($scriptElt$$);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
$goog$$.$evalWorksForGlobals_$ = null;
$goog$$.$getCssName$ = function($className$jscomp$2_result$$, $opt_modifier$$) {
  if ("." == String($className$jscomp$2_result$$).charAt(0)) {
    throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + $className$jscomp$2_result$$);
  }
  var $getMapping$$ = function($className$jscomp$2_result$$) {
    return $goog$$.$cssNameMapping_$[$className$jscomp$2_result$$] || $className$jscomp$2_result$$;
  }, $rename_renameByParts$$ = function($className$jscomp$2_result$$) {
    $className$jscomp$2_result$$ = $className$jscomp$2_result$$.split("-");
    for (var $opt_modifier$$ = [], $rename_renameByParts$$ = 0; $rename_renameByParts$$ < $className$jscomp$2_result$$.length; $rename_renameByParts$$++) {
      $opt_modifier$$.push($getMapping$$($className$jscomp$2_result$$[$rename_renameByParts$$]));
    }
    return $opt_modifier$$.join("-");
  }, $rename_renameByParts$$ = $goog$$.$cssNameMapping_$ ? "BY_WHOLE" == $goog$$.$cssNameMappingStyle_$ ? $getMapping$$ : $rename_renameByParts$$ : function($className$jscomp$2_result$$) {
    return $className$jscomp$2_result$$;
  };
  $className$jscomp$2_result$$ = $opt_modifier$$ ? $className$jscomp$2_result$$ + "-" + $rename_renameByParts$$($opt_modifier$$) : $rename_renameByParts$$($className$jscomp$2_result$$);
  return $goog$$.global.$CLOSURE_CSS_NAME_MAP_FN$ ? $goog$$.global.$CLOSURE_CSS_NAME_MAP_FN$($className$jscomp$2_result$$) : $className$jscomp$2_result$$;
};
$goog$$.$setCssNameMapping$ = function($mapping$$, $opt_style$$) {
  $goog$$.$cssNameMapping_$ = $mapping$$;
  $goog$$.$cssNameMappingStyle_$ = $opt_style$$;
};
$goog$$.$getMsg$ = function($str$jscomp$11$$, $opt_values$$) {
  $opt_values$$ && ($str$jscomp$11$$ = $str$jscomp$11$$.replace(/\{\$([^}]+)}/g, function($str$jscomp$11$$, $key$jscomp$30$$) {
    return null != $opt_values$$ && $key$jscomp$30$$ in $opt_values$$ ? $opt_values$$[$key$jscomp$30$$] : $str$jscomp$11$$;
  }));
  return $str$jscomp$11$$;
};
$goog$$.$getMsgWithFallback$ = function($a$jscomp$1$$) {
  return $a$jscomp$1$$;
};
$goog$$.$exportSymbol$ = function($publicPath$$, $object$$) {
  $goog$$.$exportPath_$($publicPath$$, $object$$, void 0);
};
$goog$$.$exportProperty$ = function($object$jscomp$1$$, $publicName$$, $symbol$jscomp$1$$) {
  $object$jscomp$1$$[$publicName$$] = $symbol$jscomp$1$$;
};
$goog$$.$inherits$ = function($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$;
  $childCtor$$.$base$ = function($childCtor$$, $tempCtor$$, $var_args$jscomp$50$$) {
    for (var $me$$ = Array(arguments.length - 2), $methodName$$ = 2; $methodName$$ < arguments.length; $methodName$$++) {
      $me$$[$methodName$$ - 2] = arguments[$methodName$$];
    }
    return $parentCtor$$.prototype[$tempCtor$$].apply($childCtor$$, $me$$);
  };
};
$goog$$.$base$ = function($me$jscomp$1$$, $opt_methodName$$, $var_args$jscomp$51$$) {
  var $caller$$ = arguments.callee.caller;
  if ($goog$$.$STRICT_MODE_COMPATIBLE$ || $goog$$.$DEBUG$ && !$caller$$) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if ($caller$$.$superClass_$) {
    for (var $args$jscomp$2_ctorArgs$$ = Array(arguments.length - 1), $foundCaller_i$jscomp$10$$ = 1; $foundCaller_i$jscomp$10$$ < arguments.length; $foundCaller_i$jscomp$10$$++) {
      $args$jscomp$2_ctorArgs$$[$foundCaller_i$jscomp$10$$ - 1] = arguments[$foundCaller_i$jscomp$10$$];
    }
    return $caller$$.$superClass_$.constructor.apply($me$jscomp$1$$, $args$jscomp$2_ctorArgs$$);
  }
  $args$jscomp$2_ctorArgs$$ = Array(arguments.length - 2);
  for ($foundCaller_i$jscomp$10$$ = 2; $foundCaller_i$jscomp$10$$ < arguments.length; $foundCaller_i$jscomp$10$$++) {
    $args$jscomp$2_ctorArgs$$[$foundCaller_i$jscomp$10$$ - 2] = arguments[$foundCaller_i$jscomp$10$$];
  }
  for (var $foundCaller_i$jscomp$10$$ = !1, $ctor$jscomp$1$$ = $me$jscomp$1$$.constructor; $ctor$jscomp$1$$; $ctor$jscomp$1$$ = $ctor$jscomp$1$$.$superClass_$ && $ctor$jscomp$1$$.$superClass_$.constructor) {
    if ($ctor$jscomp$1$$.prototype[$opt_methodName$$] === $caller$$) {
      $foundCaller_i$jscomp$10$$ = !0;
    } else {
      if ($foundCaller_i$jscomp$10$$) {
        return $ctor$jscomp$1$$.prototype[$opt_methodName$$].apply($me$jscomp$1$$, $args$jscomp$2_ctorArgs$$);
      }
    }
  }
  if ($me$jscomp$1$$[$opt_methodName$$] === $caller$$) {
    return $me$jscomp$1$$.constructor.prototype[$opt_methodName$$].apply($me$jscomp$1$$, $args$jscomp$2_ctorArgs$$);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
$goog$$.scope = function($fn$jscomp$6$$) {
  if ($goog$$.$isInModuleLoader_$()) {
    throw Error("goog.scope is not supported within a goog.module.");
  }
  $fn$jscomp$6$$.call($goog$$.global);
};
$goog$$.$defineClass$ = function($superClass$$, $def$$) {
  var $cls_constructor$$ = $def$$.constructor, $statics$$ = $def$$.$statics$;
  $cls_constructor$$ && $cls_constructor$$ != Object.prototype.constructor || ($cls_constructor$$ = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  $cls_constructor$$ = $goog$$.$defineClass$.$f$($cls_constructor$$, $superClass$$);
  $superClass$$ && $goog$$.$inherits$($cls_constructor$$, $superClass$$);
  delete $def$$.constructor;
  delete $def$$.$statics$;
  $goog$$.$defineClass$.$b$($cls_constructor$$.prototype, $def$$);
  null != $statics$$ && ($statics$$ instanceof Function ? $statics$$($cls_constructor$$) : $goog$$.$defineClass$.$b$($cls_constructor$$, $statics$$));
  return $cls_constructor$$;
};
$goog$$.$defineClass$.$c$ = $goog$$.$DEBUG$;
$goog$$.$defineClass$.$f$ = function($ctr$$, $superClass$jscomp$1$$) {
  if (!$goog$$.$defineClass$.$c$) {
    return $ctr$$;
  }
  var $superclassSealable$$ = !$goog$$.$defineClass$.$g$($superClass$jscomp$1$$), $wrappedCtr$$ = function() {
    var $superClass$jscomp$1$$ = $ctr$$.apply(this, arguments) || this;
    $superClass$jscomp$1$$[$goog$$.$UID_PROPERTY_$] = $superClass$jscomp$1$$[$goog$$.$UID_PROPERTY_$];
    this.constructor === $wrappedCtr$$ && $superclassSealable$$ && Object.seal instanceof Function && Object.seal($superClass$jscomp$1$$);
    return $superClass$jscomp$1$$;
  };
  return $wrappedCtr$$;
};
$goog$$.$defineClass$.$g$ = function($ctr$jscomp$1$$) {
  return $ctr$jscomp$1$$ && $ctr$jscomp$1$$.prototype && $ctr$jscomp$1$$.prototype[$goog$$.$UNSEALABLE_CONSTRUCTOR_PROPERTY_$];
};
$goog$$.$defineClass$.$a$ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
$goog$$.$defineClass$.$b$ = function($target$jscomp$58$$, $source$jscomp$13$$) {
  for (var $key$jscomp$31$$ in $source$jscomp$13$$) {
    Object.prototype.hasOwnProperty.call($source$jscomp$13$$, $key$jscomp$31$$) && ($target$jscomp$58$$[$key$jscomp$31$$] = $source$jscomp$13$$[$key$jscomp$31$$]);
  }
  for (var $i$jscomp$11$$ = 0; $i$jscomp$11$$ < $goog$$.$defineClass$.$a$.length; $i$jscomp$11$$++) {
    $key$jscomp$31$$ = $goog$$.$defineClass$.$a$[$i$jscomp$11$$], Object.prototype.hasOwnProperty.call($source$jscomp$13$$, $key$jscomp$31$$) && ($target$jscomp$58$$[$key$jscomp$31$$] = $source$jscomp$13$$[$key$jscomp$31$$]);
  }
};
$goog$$.$tagUnsealableClass$ = function() {
};
$goog$$.$UNSEALABLE_CONSTRUCTOR_PROPERTY_$ = "goog_defineClass_legacy_unsealable";
$goog$$.$createRequiresTranspilation_$ = function() {
  function $addNewerLanguageTranspilationCheck$$($addNewerLanguageTranspilationCheck$$, $evalCheck$$) {
    $transpilationRequiredForAllLaterModes$$ ? $requiresTranspilation$$[$addNewerLanguageTranspilationCheck$$] = !0 : $evalCheck$$() ? $requiresTranspilation$$[$addNewerLanguageTranspilationCheck$$] = !1 : $transpilationRequiredForAllLaterModes$$ = $requiresTranspilation$$[$addNewerLanguageTranspilationCheck$$] = !0;
  }
  function $evalCheck$$($addNewerLanguageTranspilationCheck$$) {
    try {
      return !!eval($addNewerLanguageTranspilationCheck$$);
    } catch ($ignored$$) {
      return !1;
    }
  }
  var $requiresTranspilation$$ = {es3:!1}, $transpilationRequiredForAllLaterModes$$ = !1, $userAgent$$ = $goog$$.global.navigator && $goog$$.global.navigator.userAgent ? $goog$$.global.navigator.userAgent : "";
  $addNewerLanguageTranspilationCheck$$("es5", function() {
    return $evalCheck$$("[1,].length==1");
  });
  $addNewerLanguageTranspilationCheck$$("es6", function() {
    var $addNewerLanguageTranspilationCheck$$ = $userAgent$$.match(/Edge\/(\d+)(\.\d)*/i);
    return $addNewerLanguageTranspilationCheck$$ && 15 > Number($addNewerLanguageTranspilationCheck$$[1]) ? !1 : $evalCheck$$('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()');
  });
  $addNewerLanguageTranspilationCheck$$("es6-impl", function() {
    return !0;
  });
  $addNewerLanguageTranspilationCheck$$("es7", function() {
    return $evalCheck$$("2 ** 2 == 4");
  });
  $addNewerLanguageTranspilationCheck$$("es8", function() {
    return $evalCheck$$("async () => 1, true");
  });
  return $requiresTranspilation$$;
};
var chrome = chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.$games$ = {};
$goog$$.$exportSymbol$("chrome.cast.games", chrome.cast.$games$);
chrome.cast.$games$.$NAMESPACE$ = "urn:x-cast:com.google.cast.games";
$goog$$.$exportProperty$(chrome.cast.$games$, "NAMESPACE", chrome.cast.$games$.$NAMESPACE$);
chrome.cast.$games$.$SDK_VERSION_NUMBER$ = "1.0.0";
$goog$$.$exportProperty$(chrome.cast.$games$, "SDK_VERSION_NUMBER", chrome.cast.$games$.$SDK_VERSION_NUMBER$);
chrome.cast.$games$.$GameplayState$ = {UNKNOWN:0, LOADING:1, RUNNING:2, PAUSED:3, SHOWING_INFO_SCREEN:4};
$goog$$.$exportProperty$(chrome.cast.$games$, "GameplayState", chrome.cast.$games$.$GameplayState$);
chrome.cast.$games$.$LobbyState$ = {UNKNOWN:0, OPEN:1, CLOSED:2};
$goog$$.$exportProperty$(chrome.cast.$games$, "LobbyState", chrome.cast.$games$.$LobbyState$);
chrome.cast.$games$.$GameManagerErrorCode$ = {INVALID_REQUEST:"invalid_request", NOT_ALLOWED:"not_allowed", INCORRECT_VERSION:"incorrect_version", TOO_MANY_PLAYERS:"too_many_players", $CAST_ERROR$:"cast_error"};
$goog$$.$exportProperty$(chrome.cast.$games$, "GameManagerErrorCode", chrome.cast.$games$.$GameManagerErrorCode$);
chrome.cast.$games$.$internal$ = {};
chrome.cast.$games$.$internal$.$StatusCode$ = {SUCCESS:0, INVALID_REQUEST:1, NOT_ALLOWED:2, INCORRECT_VERSION:3, TOO_MANY_PLAYERS:4};
chrome.cast.$games$.$internal$.$StatusCode$.$getGameManagerErrorCode$ = function($statusCode$$) {
  switch($statusCode$$) {
    case chrome.cast.$games$.$internal$.$StatusCode$.INVALID_REQUEST:
      return chrome.cast.$games$.$GameManagerErrorCode$.INVALID_REQUEST;
    case chrome.cast.$games$.$internal$.$StatusCode$.NOT_ALLOWED:
      return chrome.cast.$games$.$GameManagerErrorCode$.NOT_ALLOWED;
    case chrome.cast.$games$.$internal$.$StatusCode$.INCORRECT_VERSION:
      return chrome.cast.$games$.$GameManagerErrorCode$.INCORRECT_VERSION;
    case chrome.cast.$games$.$internal$.$StatusCode$.TOO_MANY_PLAYERS:
      return chrome.cast.$games$.$GameManagerErrorCode$.TOO_MANY_PLAYERS;
    default:
      throw Error("Cannot get error code for status code " + $statusCode$$);
  }
};
chrome.cast.$games$.$internal$.$GameManagerMessage$ = function() {
  this.type = chrome.cast.$games$.$internal$.$GameManagerMessageType$.GAME_MANAGER_PROCESSED_RESULT;
  this.requestId = 0;
  this.playerId = "";
  this.playerToken = null;
  this.statusCode = chrome.cast.$games$.$internal$.$StatusCode$.SUCCESS;
  this.errorDescription = "";
  this.gameplayState = chrome.cast.$games$.$GameplayState$.UNKNOWN;
  this.lobbyState = chrome.cast.$games$.$LobbyState$.UNKNOWN;
  this.players = [];
  this.gameData = null;
  this.gameStatusText = "";
  this.extraMessageData = this.gameManagerConfig = null;
};
$goog$$.$exportSymbol$("chrome.cast.games.internal.GameManagerMessage", chrome.cast.$games$.$internal$.$GameManagerMessage$);
chrome.cast.$games$.$internal$.$GameManagerMessageType$ = {UNKNOWN:0, GAME_MANAGER_PROCESSED_RESULT:1, GAME_MESSAGE:2};
$goog$$.$exportSymbol$("chrome.cast.games.internal.GameManagerMessageType", chrome.cast.$games$.$internal$.$GameManagerMessageType$);
chrome.cast.$games$.PlayerState = {UNKNOWN:0, DROPPED:1, QUIT:2, AVAILABLE:3, READY:4, IDLE:5, PLAYING:6};
$goog$$.$exportProperty$(chrome.cast.$games$, "PlayerState", chrome.cast.$games$.PlayerState);
chrome.cast.$games$.$internal$.$RequestIdGenerator$ = function() {
  this.$a$ = 1000 * Math.floor(1e5 * Math.random());
};
$goog$$.$addSingletonGetter$();
chrome.cast.$games$.$internal$.$GameManagerRequestType$ = {UNKNOWN:0, $PLAYER_AVAILABLE$:1, $PLAYER_READY$:2, $PLAYER_IDLE$:3, $PLAYER_PLAYING$:4, $PLAYER_QUIT$:5, $GAME_REQUEST$:6, GAME_MESSAGE:7, $GET_GAME_MANAGER_CONFIG$:1100};
$goog$$.$exportSymbol$("chrome.cast.games.internal.GameManagerRequestType", chrome.cast.$games$.$internal$.$GameManagerRequestType$);
chrome.cast.$games$.$internal$.$GameManagerRequest$ = function() {
  this.type = chrome.cast.$games$.$internal$.$GameManagerRequestType$.UNKNOWN;
  var $JSCompiler_StaticMethods_getNextRequestId$self$jscomp$inline_13$$ = chrome.cast.$games$.$internal$.$RequestIdGenerator$.$getInstance$(), $nextId$jscomp$inline_14$$ = $JSCompiler_StaticMethods_getNextRequestId$self$jscomp$inline_13$$.$a$++;
  0 == $nextId$jscomp$inline_14$$ && ($nextId$jscomp$inline_14$$ = $JSCompiler_StaticMethods_getNextRequestId$self$jscomp$inline_13$$.$a$++);
  this.requestId = $nextId$jscomp$inline_14$$;
  this.playerId = "";
  this.extraMessageData = this.playerToken = null;
};
chrome.cast.$games$.$internal$.$GameManagerRequestType$.$getGameManagerRequestType$ = function($targetPlayerState$$) {
  var $PlayerState$$ = chrome.cast.$games$.PlayerState, $GameManagerRequestType$$ = chrome.cast.$games$.$internal$.$GameManagerRequestType$;
  switch($targetPlayerState$$) {
    case $PlayerState$$.QUIT:
      return $GameManagerRequestType$$.$PLAYER_QUIT$;
    case $PlayerState$$.AVAILABLE:
      return $GameManagerRequestType$$.$PLAYER_AVAILABLE$;
    case $PlayerState$$.READY:
      return $GameManagerRequestType$$.$PLAYER_READY$;
    case $PlayerState$$.IDLE:
      return $GameManagerRequestType$$.$PLAYER_IDLE$;
    case $PlayerState$$.PLAYING:
      return $GameManagerRequestType$$.$PLAYER_PLAYING$;
    default:
      throw Error("No mapping to a game manager request type for player state: " + $targetPlayerState$$);
  }
};
chrome.cast.$games$.$GameManagerError$ = function($errorCode$$, $errorDescription$$, $result$jscomp$1$$, $castError$$) {
  this.errorCode = $errorCode$$;
  this.errorDescription = $errorDescription$$;
  this.result = $result$jscomp$1$$;
  this.castError = $castError$$;
};
$goog$$.$exportProperty$(chrome.cast.$games$, "GameManagerError", chrome.cast.$games$.$GameManagerError$);
chrome.cast.$games$.$GameManagerResult$ = function($playerId$$, $requestId$jscomp$1$$, $extraMessageData$$) {
  this.playerId = $playerId$$;
  this.requestId = $requestId$jscomp$1$$;
  this.extraMessageData = $extraMessageData$$;
};
$goog$$.$exportProperty$(chrome.cast.$games$, "GameManagerResult", chrome.cast.$games$.$GameManagerResult$);
$goog$$.json = {};
$goog$$.json.$USE_NATIVE_JSON$ = !1;
$goog$$.json.$TRY_NATIVE_JSON$ = !1;
$goog$$.json.$isValid$ = function($s$jscomp$3$$) {
  return /^\s*$/.test($s$jscomp$3$$) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test($s$jscomp$3$$.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
};
$goog$$.json.$errorLogger_$ = $goog$$.$nullFunction$;
$goog$$.json.$setErrorLogger$ = function($errorLogger$$) {
  $goog$$.json.$errorLogger_$ = $errorLogger$$;
};
$goog$$.json.parse = $goog$$.json.$USE_NATIVE_JSON$ ? $goog$$.global.JSON.parse : function($o_s$jscomp$4$$) {
  if ($goog$$.json.$TRY_NATIVE_JSON$) {
    try {
      return $goog$$.global.JSON.parse($o_s$jscomp$4$$);
    } catch ($ex$jscomp$1$$) {
      var $error$jscomp$2$$ = $ex$jscomp$1$$;
    }
  }
  $o_s$jscomp$4$$ = String($o_s$jscomp$4$$);
  if ($goog$$.json.$isValid$($o_s$jscomp$4$$)) {
    try {
      var $result$jscomp$2$$ = eval("(" + $o_s$jscomp$4$$ + ")");
      $error$jscomp$2$$ && $goog$$.json.$errorLogger_$("Invalid JSON: " + $o_s$jscomp$4$$, $error$jscomp$2$$);
      return $result$jscomp$2$$;
    } catch ($ex$0$$) {
    }
  }
  throw Error("Invalid JSON string: " + $o_s$jscomp$4$$);
};
$goog$$.json.$unsafeParse$ = $goog$$.json.$USE_NATIVE_JSON$ ? $goog$$.global.JSON.parse : function($s$jscomp$5$$) {
  if ($goog$$.json.$TRY_NATIVE_JSON$) {
    try {
      return $goog$$.global.JSON.parse($s$jscomp$5$$);
    } catch ($ex$jscomp$2$$) {
      var $error$jscomp$3$$ = $ex$jscomp$2$$;
    }
  }
  var $result$jscomp$3$$ = eval("(" + $s$jscomp$5$$ + ")");
  $error$jscomp$3$$ && $goog$$.json.$errorLogger_$("Invalid JSON: " + $s$jscomp$5$$, $error$jscomp$3$$);
  return $result$jscomp$3$$;
};
$goog$$.json.$serialize$ = $goog$$.json.$USE_NATIVE_JSON$ ? $goog$$.global.JSON.stringify : function($object$jscomp$2$$, $opt_replacer$jscomp$1$$) {
  return (new $goog$$.json.$Serializer$($opt_replacer$jscomp$1$$)).$serialize$($object$jscomp$2$$);
};
$goog$$.json.$Serializer$ = function($opt_replacer$jscomp$2$$) {
  this.$a$ = $opt_replacer$jscomp$2$$;
};
$goog$$.json.$Serializer$.prototype.$serialize$ = function($object$jscomp$3$$) {
  var $sb$$ = [];
  $JSCompiler_StaticMethods_serializeInternal$$(this, $object$jscomp$3$$, $sb$$);
  return $sb$$.join("");
};
var $JSCompiler_StaticMethods_serializeInternal$$ = function($JSCompiler_StaticMethods_serializeInternal$self$$, $l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$, $sb$jscomp$1$$) {
  if (null == $l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$) {
    $sb$jscomp$1$$.push("null");
  } else {
    if ("object" == typeof $l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$) {
      if ($goog$$.isArray($l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$)) {
        var $arr$jscomp$inline_17_key$jscomp$inline_28$$ = $l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$;
        $l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$ = $arr$jscomp$inline_17_key$jscomp$inline_28$$.length;
        $sb$jscomp$1$$.push("[");
        for (var $sep$jscomp$inline_20_value$jscomp$inline_22_value$jscomp$inline_29$$ = "", $i$jscomp$inline_21_sep$jscomp$inline_27$$ = 0; $i$jscomp$inline_21_sep$jscomp$inline_27$$ < $l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$; $i$jscomp$inline_21_sep$jscomp$inline_27$$++) {
          $sb$jscomp$1$$.push($sep$jscomp$inline_20_value$jscomp$inline_22_value$jscomp$inline_29$$), $sep$jscomp$inline_20_value$jscomp$inline_22_value$jscomp$inline_29$$ = $arr$jscomp$inline_17_key$jscomp$inline_28$$[$i$jscomp$inline_21_sep$jscomp$inline_27$$], $JSCompiler_StaticMethods_serializeInternal$$($JSCompiler_StaticMethods_serializeInternal$self$$, $JSCompiler_StaticMethods_serializeInternal$self$$.$a$ ? $JSCompiler_StaticMethods_serializeInternal$self$$.$a$.call($arr$jscomp$inline_17_key$jscomp$inline_28$$, 
          String($i$jscomp$inline_21_sep$jscomp$inline_27$$), $sep$jscomp$inline_20_value$jscomp$inline_22_value$jscomp$inline_29$$) : $sep$jscomp$inline_20_value$jscomp$inline_22_value$jscomp$inline_29$$, $sb$jscomp$1$$), $sep$jscomp$inline_20_value$jscomp$inline_22_value$jscomp$inline_29$$ = ",";
        }
        $sb$jscomp$1$$.push("]");
        return;
      }
      if ($l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$ instanceof String || $l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$ instanceof Number || $l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$ instanceof Boolean) {
        $l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$ = $l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$.valueOf();
      } else {
        $sb$jscomp$1$$.push("{");
        $i$jscomp$inline_21_sep$jscomp$inline_27$$ = "";
        for ($arr$jscomp$inline_17_key$jscomp$inline_28$$ in $l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$) {
          Object.prototype.hasOwnProperty.call($l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$, $arr$jscomp$inline_17_key$jscomp$inline_28$$) && ($sep$jscomp$inline_20_value$jscomp$inline_22_value$jscomp$inline_29$$ = $l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$[$arr$jscomp$inline_17_key$jscomp$inline_28$$], "function" != typeof $sep$jscomp$inline_20_value$jscomp$inline_22_value$jscomp$inline_29$$ && ($sb$jscomp$1$$.push($i$jscomp$inline_21_sep$jscomp$inline_27$$), $JSCompiler_StaticMethods_serializeString_$$($arr$jscomp$inline_17_key$jscomp$inline_28$$, 
          $sb$jscomp$1$$), $sb$jscomp$1$$.push(":"), $JSCompiler_StaticMethods_serializeInternal$$($JSCompiler_StaticMethods_serializeInternal$self$$, $JSCompiler_StaticMethods_serializeInternal$self$$.$a$ ? $JSCompiler_StaticMethods_serializeInternal$self$$.$a$.call($l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$, $arr$jscomp$inline_17_key$jscomp$inline_28$$, $sep$jscomp$inline_20_value$jscomp$inline_22_value$jscomp$inline_29$$) : $sep$jscomp$inline_20_value$jscomp$inline_22_value$jscomp$inline_29$$, 
          $sb$jscomp$1$$), $i$jscomp$inline_21_sep$jscomp$inline_27$$ = ","));
        }
        $sb$jscomp$1$$.push("}");
        return;
      }
    }
    switch(typeof $l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$) {
      case "string":
        $JSCompiler_StaticMethods_serializeString_$$($l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$, $sb$jscomp$1$$);
        break;
      case "number":
        $sb$jscomp$1$$.push(isFinite($l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$) && !isNaN($l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$) ? String($l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$) : "null");
        break;
      case "boolean":
        $sb$jscomp$1$$.push(String($l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$));
        break;
      case "function":
        $sb$jscomp$1$$.push("null");
        break;
      default:
        throw Error("Unknown type: " + typeof $l$jscomp$inline_19_obj$jscomp$inline_25_object$jscomp$4$$);
    }
  }
};
$goog$$.json.$Serializer$.$a$ = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
$goog$$.json.$Serializer$.$b$ = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
var $JSCompiler_StaticMethods_serializeString_$$ = function($s$jscomp$6$$, $sb$jscomp$2$$) {
  $sb$jscomp$2$$.push('"', $s$jscomp$6$$.replace($goog$$.json.$Serializer$.$b$, function($s$jscomp$6$$) {
    var $sb$jscomp$2$$ = $goog$$.json.$Serializer$.$a$[$s$jscomp$6$$];
    $sb$jscomp$2$$ || ($sb$jscomp$2$$ = "\\u" + ($s$jscomp$6$$.charCodeAt(0) | 65536).toString(16).substr(1), $goog$$.json.$Serializer$.$a$[$s$jscomp$6$$] = $sb$jscomp$2$$);
    return $sb$jscomp$2$$;
  }), '"');
};
$goog$$.debug = {};
$goog$$.debug.Error = function($opt_msg$$) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, $goog$$.debug.Error);
  } else {
    var $stack$$ = Error().stack;
    $stack$$ && (this.stack = $stack$$);
  }
  $opt_msg$$ && (this.message = String($opt_msg$$));
};
$goog$$.$inherits$($goog$$.debug.Error, Error);
$goog$$.debug.Error.prototype.name = "CustomError";
$goog$$.$dom$ = {};
$goog$$.$dom$.$NodeType$ = {$ELEMENT$:1, $ATTRIBUTE$:2, TEXT:3, $CDATA_SECTION$:4, $ENTITY_REFERENCE$:5, $ENTITY$:6, $PROCESSING_INSTRUCTION$:7, $COMMENT$:8, $DOCUMENT$:9, $DOCUMENT_TYPE$:10, $DOCUMENT_FRAGMENT$:11, $NOTATION$:12};
$goog$$.$string$ = {};
$goog$$.$string$.$DETECT_DOUBLE_ESCAPING$ = !1;
$goog$$.$string$.$FORCE_NON_DOM_HTML_UNESCAPING$ = !1;
$goog$$.$string$.$Unicode$ = {$NBSP$:"\u00a0"};
$goog$$.$string$.startsWith = function($str$jscomp$12$$, $prefix$jscomp$2$$) {
  return 0 == $str$jscomp$12$$.lastIndexOf($prefix$jscomp$2$$, 0);
};
$goog$$.$string$.endsWith = function($str$jscomp$13$$, $suffix$jscomp$1$$) {
  var $l$jscomp$2$$ = $str$jscomp$13$$.length - $suffix$jscomp$1$$.length;
  return 0 <= $l$jscomp$2$$ && $str$jscomp$13$$.indexOf($suffix$jscomp$1$$, $l$jscomp$2$$) == $l$jscomp$2$$;
};
$goog$$.$string$.$caseInsensitiveStartsWith$ = function($str$jscomp$14$$, $prefix$jscomp$3$$) {
  return 0 == $goog$$.$string$.$caseInsensitiveCompare$($prefix$jscomp$3$$, $str$jscomp$14$$.substr(0, $prefix$jscomp$3$$.length));
};
$goog$$.$string$.$caseInsensitiveEndsWith$ = function($str$jscomp$15$$, $suffix$jscomp$2$$) {
  return 0 == $goog$$.$string$.$caseInsensitiveCompare$($suffix$jscomp$2$$, $str$jscomp$15$$.substr($str$jscomp$15$$.length - $suffix$jscomp$2$$.length, $suffix$jscomp$2$$.length));
};
$goog$$.$string$.$caseInsensitiveEquals$ = function($str1$$, $str2$$) {
  return $str1$$.toLowerCase() == $str2$$.toLowerCase();
};
$goog$$.$string$.$subs$ = function($str$jscomp$16$$, $var_args$jscomp$52$$) {
  for (var $splitParts$$ = $str$jscomp$16$$.split("%s"), $returnString$$ = "", $subsArguments$$ = Array.prototype.slice.call(arguments, 1); $subsArguments$$.length && 1 < $splitParts$$.length;) {
    $returnString$$ += $splitParts$$.shift() + $subsArguments$$.shift();
  }
  return $returnString$$ + $splitParts$$.join("%s");
};
$goog$$.$string$.$collapseWhitespace$ = function($str$jscomp$17$$) {
  return $str$jscomp$17$$.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
$goog$$.$string$.$isEmptyOrWhitespace$ = function($str$jscomp$18$$) {
  return /^[\s\xa0]*$/.test($str$jscomp$18$$);
};
$goog$$.$string$.$isEmptyString$ = function($str$jscomp$19$$) {
  return 0 == $str$jscomp$19$$.length;
};
$goog$$.$string$.$isEmpty$ = $goog$$.$string$.$isEmptyOrWhitespace$;
$goog$$.$string$.$isEmptyOrWhitespaceSafe$ = function($str$jscomp$20$$) {
  return $goog$$.$string$.$isEmptyOrWhitespace$($goog$$.$string$.$makeSafe$($str$jscomp$20$$));
};
$goog$$.$string$.$isEmptySafe$ = $goog$$.$string$.$isEmptyOrWhitespaceSafe$;
$goog$$.$string$.$isBreakingWhitespace$ = function($str$jscomp$21$$) {
  return !/[^\t\n\r ]/.test($str$jscomp$21$$);
};
$goog$$.$string$.$isAlpha$ = function($str$jscomp$22$$) {
  return !/[^a-zA-Z]/.test($str$jscomp$22$$);
};
$goog$$.$string$.$isNumeric$ = function($str$jscomp$23$$) {
  return !/[^0-9]/.test($str$jscomp$23$$);
};
$goog$$.$string$.$isAlphaNumeric$ = function($str$jscomp$24$$) {
  return !/[^a-zA-Z0-9]/.test($str$jscomp$24$$);
};
$goog$$.$string$.$isSpace$ = function($ch$$) {
  return " " == $ch$$;
};
$goog$$.$string$.$isUnicodeChar$ = function($ch$jscomp$1$$) {
  return 1 == $ch$jscomp$1$$.length && " " <= $ch$jscomp$1$$ && "~" >= $ch$jscomp$1$$ || "\u0080" <= $ch$jscomp$1$$ && "\ufffd" >= $ch$jscomp$1$$;
};
$goog$$.$string$.$stripNewlines$ = function($str$jscomp$25$$) {
  return $str$jscomp$25$$.replace(/(\r\n|\r|\n)+/g, " ");
};
$goog$$.$string$.$canonicalizeNewlines$ = function($str$jscomp$26$$) {
  return $str$jscomp$26$$.replace(/(\r\n|\r|\n)/g, "\n");
};
$goog$$.$string$.$normalizeWhitespace$ = function($str$jscomp$27$$) {
  return $str$jscomp$27$$.replace(/\xa0|\s/g, " ");
};
$goog$$.$string$.$normalizeSpaces$ = function($str$jscomp$28$$) {
  return $str$jscomp$28$$.replace(/\xa0|[ \t]+/g, " ");
};
$goog$$.$string$.$collapseBreakingSpaces$ = function($str$jscomp$29$$) {
  return $str$jscomp$29$$.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
$goog$$.$string$.trim = $goog$$.$TRUSTED_SITE$ && String.prototype.trim ? function($str$jscomp$30$$) {
  return $str$jscomp$30$$.trim();
} : function($str$jscomp$31$$) {
  return $str$jscomp$31$$.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
$goog$$.$string$.trimLeft = function($str$jscomp$32$$) {
  return $str$jscomp$32$$.replace(/^[\s\xa0]+/, "");
};
$goog$$.$string$.trimRight = function($str$jscomp$33$$) {
  return $str$jscomp$33$$.replace(/[\s\xa0]+$/, "");
};
$goog$$.$string$.$caseInsensitiveCompare$ = function($str1$jscomp$1_test1$$, $str2$jscomp$1_test2$$) {
  $str1$jscomp$1_test1$$ = String($str1$jscomp$1_test1$$).toLowerCase();
  $str2$jscomp$1_test2$$ = String($str2$jscomp$1_test2$$).toLowerCase();
  return $str1$jscomp$1_test1$$ < $str2$jscomp$1_test2$$ ? -1 : $str1$jscomp$1_test1$$ == $str2$jscomp$1_test2$$ ? 0 : 1;
};
$goog$$.$string$.$numberAwareCompare_$ = function($num1_str1$jscomp$2$$, $num2_str2$jscomp$2$$, $a$jscomp$2_tokenizerRegExp$$) {
  if ($num1_str1$jscomp$2$$ == $num2_str2$jscomp$2$$) {
    return 0;
  }
  if (!$num1_str1$jscomp$2$$) {
    return -1;
  }
  if (!$num2_str2$jscomp$2$$) {
    return 1;
  }
  for (var $tokens1$$ = $num1_str1$jscomp$2$$.toLowerCase().match($a$jscomp$2_tokenizerRegExp$$), $tokens2$$ = $num2_str2$jscomp$2$$.toLowerCase().match($a$jscomp$2_tokenizerRegExp$$), $count$jscomp$11$$ = Math.min($tokens1$$.length, $tokens2$$.length), $i$jscomp$13$$ = 0; $i$jscomp$13$$ < $count$jscomp$11$$; $i$jscomp$13$$++) {
    $a$jscomp$2_tokenizerRegExp$$ = $tokens1$$[$i$jscomp$13$$];
    var $b$jscomp$1$$ = $tokens2$$[$i$jscomp$13$$];
    if ($a$jscomp$2_tokenizerRegExp$$ != $b$jscomp$1$$) {
      return $num1_str1$jscomp$2$$ = parseInt($a$jscomp$2_tokenizerRegExp$$, 10), !isNaN($num1_str1$jscomp$2$$) && ($num2_str2$jscomp$2$$ = parseInt($b$jscomp$1$$, 10), !isNaN($num2_str2$jscomp$2$$) && $num1_str1$jscomp$2$$ - $num2_str2$jscomp$2$$) ? $num1_str1$jscomp$2$$ - $num2_str2$jscomp$2$$ : $a$jscomp$2_tokenizerRegExp$$ < $b$jscomp$1$$ ? -1 : 1;
    }
  }
  return $tokens1$$.length != $tokens2$$.length ? $tokens1$$.length - $tokens2$$.length : $num1_str1$jscomp$2$$ < $num2_str2$jscomp$2$$ ? -1 : 1;
};
$goog$$.$string$.$intAwareCompare$ = function($str1$jscomp$3$$, $str2$jscomp$3$$) {
  return $goog$$.$string$.$numberAwareCompare_$($str1$jscomp$3$$, $str2$jscomp$3$$, /\d+|\D+/g);
};
$goog$$.$string$.$floatAwareCompare$ = function($str1$jscomp$4$$, $str2$jscomp$4$$) {
  return $goog$$.$string$.$numberAwareCompare_$($str1$jscomp$4$$, $str2$jscomp$4$$, /\d+|\.\d+|\D+/g);
};
$goog$$.$string$.$numerateCompare$ = $goog$$.$string$.$floatAwareCompare$;
$goog$$.$string$.$urlEncode$ = function($str$jscomp$34$$) {
  return encodeURIComponent(String($str$jscomp$34$$));
};
$goog$$.$string$.$urlDecode$ = function($str$jscomp$35$$) {
  return decodeURIComponent($str$jscomp$35$$.replace(/\+/g, " "));
};
$goog$$.$string$.$newLineToBr$ = function($str$jscomp$36$$, $opt_xml$$) {
  return $str$jscomp$36$$.replace(/(\r\n|\r|\n)/g, $opt_xml$$ ? "<br />" : "<br>");
};
$goog$$.$string$.$htmlEscape$ = function($str$jscomp$37$$) {
  if (!$goog$$.$string$.$ALL_RE_$.test($str$jscomp$37$$)) {
    return $str$jscomp$37$$;
  }
  -1 != $str$jscomp$37$$.indexOf("&") && ($str$jscomp$37$$ = $str$jscomp$37$$.replace($goog$$.$string$.$AMP_RE_$, "&amp;"));
  -1 != $str$jscomp$37$$.indexOf("<") && ($str$jscomp$37$$ = $str$jscomp$37$$.replace($goog$$.$string$.$LT_RE_$, "&lt;"));
  -1 != $str$jscomp$37$$.indexOf(">") && ($str$jscomp$37$$ = $str$jscomp$37$$.replace($goog$$.$string$.$GT_RE_$, "&gt;"));
  -1 != $str$jscomp$37$$.indexOf('"') && ($str$jscomp$37$$ = $str$jscomp$37$$.replace($goog$$.$string$.$QUOT_RE_$, "&quot;"));
  -1 != $str$jscomp$37$$.indexOf("'") && ($str$jscomp$37$$ = $str$jscomp$37$$.replace($goog$$.$string$.$SINGLE_QUOTE_RE_$, "&#39;"));
  -1 != $str$jscomp$37$$.indexOf("\x00") && ($str$jscomp$37$$ = $str$jscomp$37$$.replace($goog$$.$string$.$NULL_RE_$, "&#0;"));
  $goog$$.$string$.$DETECT_DOUBLE_ESCAPING$ && -1 != $str$jscomp$37$$.indexOf("e") && ($str$jscomp$37$$ = $str$jscomp$37$$.replace($goog$$.$string$.$E_RE_$, "&#101;"));
  return $str$jscomp$37$$;
};
$goog$$.$string$.$AMP_RE_$ = /&/g;
$goog$$.$string$.$LT_RE_$ = /</g;
$goog$$.$string$.$GT_RE_$ = />/g;
$goog$$.$string$.$QUOT_RE_$ = /"/g;
$goog$$.$string$.$SINGLE_QUOTE_RE_$ = /'/g;
$goog$$.$string$.$NULL_RE_$ = /\x00/g;
$goog$$.$string$.$E_RE_$ = /e/g;
$goog$$.$string$.$ALL_RE_$ = $goog$$.$string$.$DETECT_DOUBLE_ESCAPING$ ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
$goog$$.$string$.$unescapeEntities$ = function($str$jscomp$38$$) {
  return $goog$$.$string$.contains($str$jscomp$38$$, "&") ? !$goog$$.$string$.$FORCE_NON_DOM_HTML_UNESCAPING$ && "document" in $goog$$.global ? $goog$$.$string$.$unescapeEntitiesUsingDom_$($str$jscomp$38$$) : $goog$$.$string$.$unescapePureXmlEntities_$($str$jscomp$38$$) : $str$jscomp$38$$;
};
$goog$$.$string$.$unescapeEntitiesWithDocument$ = function($str$jscomp$39$$, $document$jscomp$1$$) {
  return $goog$$.$string$.contains($str$jscomp$39$$, "&") ? $goog$$.$string$.$unescapeEntitiesUsingDom_$($str$jscomp$39$$, $document$jscomp$1$$) : $str$jscomp$39$$;
};
$goog$$.$string$.$unescapeEntitiesUsingDom_$ = function($str$jscomp$40$$, $opt_document$$) {
  var $seen$$ = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'};
  var $div$$ = $opt_document$$ ? $opt_document$$.createElement("div") : $goog$$.global.document.createElement("div");
  return $str$jscomp$40$$.replace($goog$$.$string$.$HTML_ENTITY_PATTERN_$, function($str$jscomp$40$$, $opt_document$$) {
    var $s$jscomp$7$$ = $seen$$[$str$jscomp$40$$];
    if ($s$jscomp$7$$) {
      return $s$jscomp$7$$;
    }
    "#" == $opt_document$$.charAt(0) && ($opt_document$$ = Number("0" + $opt_document$$.substr(1)), isNaN($opt_document$$) || ($s$jscomp$7$$ = String.fromCharCode($opt_document$$)));
    $s$jscomp$7$$ || ($div$$.innerHTML = $str$jscomp$40$$ + " ", $s$jscomp$7$$ = $div$$.firstChild.nodeValue.slice(0, -1));
    return $seen$$[$str$jscomp$40$$] = $s$jscomp$7$$;
  });
};
$goog$$.$string$.$unescapePureXmlEntities_$ = function($str$jscomp$41$$) {
  return $str$jscomp$41$$.replace(/&([^;]+);/g, function($str$jscomp$41$$, $entity$jscomp$1_n$jscomp$5$$) {
    switch($entity$jscomp$1_n$jscomp$5$$) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        return "#" != $entity$jscomp$1_n$jscomp$5$$.charAt(0) || ($entity$jscomp$1_n$jscomp$5$$ = Number("0" + $entity$jscomp$1_n$jscomp$5$$.substr(1)), isNaN($entity$jscomp$1_n$jscomp$5$$)) ? $str$jscomp$41$$ : String.fromCharCode($entity$jscomp$1_n$jscomp$5$$);
    }
  });
};
$goog$$.$string$.$HTML_ENTITY_PATTERN_$ = /&([^;\s<&]+);?/g;
$goog$$.$string$.$whitespaceEscape$ = function($str$jscomp$42$$, $opt_xml$jscomp$1$$) {
  return $goog$$.$string$.$newLineToBr$($str$jscomp$42$$.replace(/  /g, " &#160;"), $opt_xml$jscomp$1$$);
};
$goog$$.$string$.$preserveSpaces$ = function($str$jscomp$43$$) {
  return $str$jscomp$43$$.replace(/(^|[\n ]) /g, "$1" + $goog$$.$string$.$Unicode$.$NBSP$);
};
$goog$$.$string$.$stripQuotes$ = function($str$jscomp$44$$, $quoteChars$$) {
  for (var $length$jscomp$15$$ = $quoteChars$$.length, $i$jscomp$14$$ = 0; $i$jscomp$14$$ < $length$jscomp$15$$; $i$jscomp$14$$++) {
    var $quoteChar$$ = 1 == $length$jscomp$15$$ ? $quoteChars$$ : $quoteChars$$.charAt($i$jscomp$14$$);
    if ($str$jscomp$44$$.charAt(0) == $quoteChar$$ && $str$jscomp$44$$.charAt($str$jscomp$44$$.length - 1) == $quoteChar$$) {
      return $str$jscomp$44$$.substring(1, $str$jscomp$44$$.length - 1);
    }
  }
  return $str$jscomp$44$$;
};
$goog$$.$string$.truncate = function($str$jscomp$45$$, $chars$$, $opt_protectEscapedCharacters$$) {
  $opt_protectEscapedCharacters$$ && ($str$jscomp$45$$ = $goog$$.$string$.$unescapeEntities$($str$jscomp$45$$));
  $str$jscomp$45$$.length > $chars$$ && ($str$jscomp$45$$ = $str$jscomp$45$$.substring(0, $chars$$ - 3) + "...");
  $opt_protectEscapedCharacters$$ && ($str$jscomp$45$$ = $goog$$.$string$.$htmlEscape$($str$jscomp$45$$));
  return $str$jscomp$45$$;
};
$goog$$.$string$.$truncateMiddle$ = function($str$jscomp$46$$, $chars$jscomp$1$$, $opt_protectEscapedCharacters$jscomp$1$$, $half_opt_trailingChars$$) {
  $opt_protectEscapedCharacters$jscomp$1$$ && ($str$jscomp$46$$ = $goog$$.$string$.$unescapeEntities$($str$jscomp$46$$));
  $half_opt_trailingChars$$ && $str$jscomp$46$$.length > $chars$jscomp$1$$ ? ($half_opt_trailingChars$$ > $chars$jscomp$1$$ && ($half_opt_trailingChars$$ = $chars$jscomp$1$$), $str$jscomp$46$$ = $str$jscomp$46$$.substring(0, $chars$jscomp$1$$ - $half_opt_trailingChars$$) + "..." + $str$jscomp$46$$.substring($str$jscomp$46$$.length - $half_opt_trailingChars$$)) : $str$jscomp$46$$.length > $chars$jscomp$1$$ && ($half_opt_trailingChars$$ = Math.floor($chars$jscomp$1$$ / 2), $str$jscomp$46$$ = $str$jscomp$46$$.substring(0, 
  $half_opt_trailingChars$$ + $chars$jscomp$1$$ % 2) + "..." + $str$jscomp$46$$.substring($str$jscomp$46$$.length - $half_opt_trailingChars$$));
  $opt_protectEscapedCharacters$jscomp$1$$ && ($str$jscomp$46$$ = $goog$$.$string$.$htmlEscape$($str$jscomp$46$$));
  return $str$jscomp$46$$;
};
$goog$$.$string$.$specialEscapeChars_$ = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\", "<":"<"};
$goog$$.$string$.$jsEscapeCache_$ = {"'":"\\'"};
$goog$$.$string$.quote = function($s$jscomp$9$$) {
  $s$jscomp$9$$ = String($s$jscomp$9$$);
  for (var $sb$jscomp$6$$ = ['"'], $i$jscomp$15$$ = 0; $i$jscomp$15$$ < $s$jscomp$9$$.length; $i$jscomp$15$$++) {
    var $ch$jscomp$2$$ = $s$jscomp$9$$.charAt($i$jscomp$15$$), $cc$$ = $ch$jscomp$2$$.charCodeAt(0);
    $sb$jscomp$6$$[$i$jscomp$15$$ + 1] = $goog$$.$string$.$specialEscapeChars_$[$ch$jscomp$2$$] || (31 < $cc$$ && 127 > $cc$$ ? $ch$jscomp$2$$ : $goog$$.$string$.$escapeChar$($ch$jscomp$2$$));
  }
  $sb$jscomp$6$$.push('"');
  return $sb$jscomp$6$$.join("");
};
$goog$$.$string$.$escapeString$ = function($str$jscomp$47$$) {
  for (var $sb$jscomp$7$$ = [], $i$jscomp$16$$ = 0; $i$jscomp$16$$ < $str$jscomp$47$$.length; $i$jscomp$16$$++) {
    $sb$jscomp$7$$[$i$jscomp$16$$] = $goog$$.$string$.$escapeChar$($str$jscomp$47$$.charAt($i$jscomp$16$$));
  }
  return $sb$jscomp$7$$.join("");
};
$goog$$.$string$.$escapeChar$ = function($c$jscomp$1$$) {
  if ($c$jscomp$1$$ in $goog$$.$string$.$jsEscapeCache_$) {
    return $goog$$.$string$.$jsEscapeCache_$[$c$jscomp$1$$];
  }
  if ($c$jscomp$1$$ in $goog$$.$string$.$specialEscapeChars_$) {
    return $goog$$.$string$.$jsEscapeCache_$[$c$jscomp$1$$] = $goog$$.$string$.$specialEscapeChars_$[$c$jscomp$1$$];
  }
  var $cc$jscomp$1$$ = $c$jscomp$1$$.charCodeAt(0);
  if (31 < $cc$jscomp$1$$ && 127 > $cc$jscomp$1$$) {
    var $rv$jscomp$1$$ = $c$jscomp$1$$;
  } else {
    if (256 > $cc$jscomp$1$$) {
      if ($rv$jscomp$1$$ = "\\x", 16 > $cc$jscomp$1$$ || 256 < $cc$jscomp$1$$) {
        $rv$jscomp$1$$ += "0";
      }
    } else {
      $rv$jscomp$1$$ = "\\u", 4096 > $cc$jscomp$1$$ && ($rv$jscomp$1$$ += "0");
    }
    $rv$jscomp$1$$ += $cc$jscomp$1$$.toString(16).toUpperCase();
  }
  return $goog$$.$string$.$jsEscapeCache_$[$c$jscomp$1$$] = $rv$jscomp$1$$;
};
$goog$$.$string$.contains = function($str$jscomp$48$$, $subString$$) {
  return -1 != $str$jscomp$48$$.indexOf($subString$$);
};
$goog$$.$string$.$caseInsensitiveContains$ = function() {
  return $goog$$.$string$.contains($goog$$.$labs$.userAgent.$util$.$getUserAgent$().toLowerCase(), "webkit");
};
$goog$$.$string$.$countOf$ = function($s$jscomp$10$$, $ss$$) {
  return $s$jscomp$10$$ && $ss$$ ? $s$jscomp$10$$.split($ss$$).length - 1 : 0;
};
$goog$$.$string$.$removeAt$ = function($s$jscomp$11$$, $index$jscomp$46$$, $stringLength$$) {
  var $resultStr$$ = $s$jscomp$11$$;
  0 <= $index$jscomp$46$$ && $index$jscomp$46$$ < $s$jscomp$11$$.length && 0 < $stringLength$$ && ($resultStr$$ = $s$jscomp$11$$.substr(0, $index$jscomp$46$$) + $s$jscomp$11$$.substr($index$jscomp$46$$ + $stringLength$$, $s$jscomp$11$$.length - $index$jscomp$46$$ - $stringLength$$));
  return $resultStr$$;
};
$goog$$.$string$.remove = function($str$jscomp$50$$, $substr$$) {
  return $str$jscomp$50$$.replace($substr$$, "");
};
$goog$$.$string$.removeAll = function($s$jscomp$12$$, $re$jscomp$1_ss$jscomp$1$$) {
  $re$jscomp$1_ss$jscomp$1$$ = new RegExp($goog$$.$string$.$regExpEscape$($re$jscomp$1_ss$jscomp$1$$), "g");
  return $s$jscomp$12$$.replace($re$jscomp$1_ss$jscomp$1$$, "");
};
$goog$$.$string$.$replaceAll$ = function($s$jscomp$13$$, $re$jscomp$2_ss$jscomp$2$$, $replacement$$) {
  $re$jscomp$2_ss$jscomp$2$$ = new RegExp($goog$$.$string$.$regExpEscape$($re$jscomp$2_ss$jscomp$2$$), "g");
  return $s$jscomp$13$$.replace($re$jscomp$2_ss$jscomp$2$$, $replacement$$.replace(/\$/g, "$$$$"));
};
$goog$$.$string$.$regExpEscape$ = function($s$jscomp$14$$) {
  return String($s$jscomp$14$$).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
$goog$$.$string$.repeat = String.prototype.repeat ? function($string$jscomp$3$$, $length$jscomp$16$$) {
  return $string$jscomp$3$$.repeat($length$jscomp$16$$);
} : function($string$jscomp$4$$, $length$jscomp$17$$) {
  return Array($length$jscomp$17$$ + 1).join($string$jscomp$4$$);
};
$goog$$.$string$.$padNumber$ = function($num$jscomp$5_s$jscomp$15$$, $length$jscomp$18$$, $index$jscomp$47_opt_precision$jscomp$1$$) {
  $num$jscomp$5_s$jscomp$15$$ = $goog$$.$isDef$($index$jscomp$47_opt_precision$jscomp$1$$) ? $num$jscomp$5_s$jscomp$15$$.toFixed($index$jscomp$47_opt_precision$jscomp$1$$) : String($num$jscomp$5_s$jscomp$15$$);
  $index$jscomp$47_opt_precision$jscomp$1$$ = $num$jscomp$5_s$jscomp$15$$.indexOf(".");
  -1 == $index$jscomp$47_opt_precision$jscomp$1$$ && ($index$jscomp$47_opt_precision$jscomp$1$$ = $num$jscomp$5_s$jscomp$15$$.length);
  return $goog$$.$string$.repeat("0", Math.max(0, $length$jscomp$18$$ - $index$jscomp$47_opt_precision$jscomp$1$$)) + $num$jscomp$5_s$jscomp$15$$;
};
$goog$$.$string$.$makeSafe$ = function($obj$jscomp$32$$) {
  return null == $obj$jscomp$32$$ ? "" : String($obj$jscomp$32$$);
};
$goog$$.$string$.$buildString$ = function($var_args$jscomp$53$$) {
  return Array.prototype.join.call(arguments, "");
};
$goog$$.$string$.$getRandomString$ = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ $goog$$.now()).toString(36);
};
$goog$$.$string$.$compareVersions$ = function($v1Subs_version1$$, $v2Subs_version2$$) {
  var $order$$ = 0;
  $v1Subs_version1$$ = $goog$$.$string$.trim(String($v1Subs_version1$$)).split(".");
  $v2Subs_version2$$ = $goog$$.$string$.trim(String($v2Subs_version2$$)).split(".");
  for (var $subCount$$ = Math.max($v1Subs_version1$$.length, $v2Subs_version2$$.length), $subIdx$$ = 0; 0 == $order$$ && $subIdx$$ < $subCount$$; $subIdx$$++) {
    var $v1Comp_v1Sub$$ = $v1Subs_version1$$[$subIdx$$] || "", $v2Comp_v2Sub$$ = $v2Subs_version2$$[$subIdx$$] || "";
    do {
      $v1Comp_v1Sub$$ = /(\d*)(\D*)(.*)/.exec($v1Comp_v1Sub$$) || ["", "", "", ""];
      $v2Comp_v2Sub$$ = /(\d*)(\D*)(.*)/.exec($v2Comp_v2Sub$$) || ["", "", "", ""];
      if (0 == $v1Comp_v1Sub$$[0].length && 0 == $v2Comp_v2Sub$$[0].length) {
        break;
      }
      $order$$ = $goog$$.$string$.$compareElements_$(0 == $v1Comp_v1Sub$$[1].length ? 0 : parseInt($v1Comp_v1Sub$$[1], 10), 0 == $v2Comp_v2Sub$$[1].length ? 0 : parseInt($v2Comp_v2Sub$$[1], 10)) || $goog$$.$string$.$compareElements_$(0 == $v1Comp_v1Sub$$[2].length, 0 == $v2Comp_v2Sub$$[2].length) || $goog$$.$string$.$compareElements_$($v1Comp_v1Sub$$[2], $v2Comp_v2Sub$$[2]);
      $v1Comp_v1Sub$$ = $v1Comp_v1Sub$$[3];
      $v2Comp_v2Sub$$ = $v2Comp_v2Sub$$[3];
    } while (0 == $order$$);
  }
  return $order$$;
};
$goog$$.$string$.$compareElements_$ = function($left$jscomp$3$$, $right$jscomp$2$$) {
  return $left$jscomp$3$$ < $right$jscomp$2$$ ? -1 : $left$jscomp$3$$ > $right$jscomp$2$$ ? 1 : 0;
};
$goog$$.$string$.$hashCode$ = function($str$jscomp$51$$) {
  for (var $result$jscomp$4$$ = 0, $i$jscomp$17$$ = 0; $i$jscomp$17$$ < $str$jscomp$51$$.length; ++$i$jscomp$17$$) {
    $result$jscomp$4$$ = 31 * $result$jscomp$4$$ + $str$jscomp$51$$.charCodeAt($i$jscomp$17$$) >>> 0;
  }
  return $result$jscomp$4$$;
};
$goog$$.$string$.$uniqueStringCounter_$ = 2147483648 * Math.random() | 0;
$goog$$.$string$.$createUniqueString$ = function() {
  return "goog_" + $goog$$.$string$.$uniqueStringCounter_$++;
};
$goog$$.$string$.$toNumber$ = function($str$jscomp$52$$) {
  var $num$jscomp$6$$ = Number($str$jscomp$52$$);
  return 0 == $num$jscomp$6$$ && $goog$$.$string$.$isEmptyOrWhitespace$($str$jscomp$52$$) ? NaN : $num$jscomp$6$$;
};
$goog$$.$string$.$isLowerCamelCase$ = function($str$jscomp$53$$) {
  return /^[a-z]+([A-Z][a-z]*)*$/.test($str$jscomp$53$$);
};
$goog$$.$string$.$isUpperCamelCase$ = function($str$jscomp$54$$) {
  return /^([A-Z][a-z]*)+$/.test($str$jscomp$54$$);
};
$goog$$.$string$.$toCamelCase$ = function($str$jscomp$55$$) {
  return String($str$jscomp$55$$).replace(/\-([a-z])/g, function($str$jscomp$55$$, $match$jscomp$1$$) {
    return $match$jscomp$1$$.toUpperCase();
  });
};
$goog$$.$string$.$toSelectorCase$ = function($str$jscomp$56$$) {
  return String($str$jscomp$56$$).replace(/([A-Z])/g, "-$1").toLowerCase();
};
$goog$$.$string$.$toTitleCase$ = function($str$jscomp$57$$, $delimiters_opt_delimiters$$) {
  $delimiters_opt_delimiters$$ = $goog$$.$isString$($delimiters_opt_delimiters$$) ? $goog$$.$string$.$regExpEscape$($delimiters_opt_delimiters$$) : "\\s";
  return $str$jscomp$57$$.replace(new RegExp("(^" + ($delimiters_opt_delimiters$$ ? "|[" + $delimiters_opt_delimiters$$ + "]+" : "") + ")([a-z])", "g"), function($str$jscomp$57$$, $delimiters_opt_delimiters$$, $p2$$) {
    return $delimiters_opt_delimiters$$ + $p2$$.toUpperCase();
  });
};
$goog$$.$string$.$capitalize$ = function($str$jscomp$58$$) {
  return String($str$jscomp$58$$.charAt(0)).toUpperCase() + String($str$jscomp$58$$.substr(1)).toLowerCase();
};
$goog$$.$string$.parseInt = function($value$jscomp$81$$) {
  isFinite($value$jscomp$81$$) && ($value$jscomp$81$$ = String($value$jscomp$81$$));
  return $goog$$.$isString$($value$jscomp$81$$) ? /^\s*-?0x/i.test($value$jscomp$81$$) ? parseInt($value$jscomp$81$$, 16) : parseInt($value$jscomp$81$$, 10) : NaN;
};
$goog$$.$string$.$splitLimit$ = function($parts$jscomp$3_str$jscomp$59$$, $separator$$, $limit$$) {
  $parts$jscomp$3_str$jscomp$59$$ = $parts$jscomp$3_str$jscomp$59$$.split($separator$$);
  for (var $returnVal$$ = []; 0 < $limit$$ && $parts$jscomp$3_str$jscomp$59$$.length;) {
    $returnVal$$.push($parts$jscomp$3_str$jscomp$59$$.shift()), $limit$$--;
  }
  $parts$jscomp$3_str$jscomp$59$$.length && $returnVal$$.push($parts$jscomp$3_str$jscomp$59$$.join($separator$$));
  return $returnVal$$;
};
$goog$$.$string$.$lastComponent$ = function($str$jscomp$60$$, $separators$$) {
  if ($separators$$) {
    "string" == typeof $separators$$ && ($separators$$ = [$separators$$]);
  } else {
    return $str$jscomp$60$$;
  }
  for (var $lastSeparatorIndex$$ = -1, $i$jscomp$18$$ = 0; $i$jscomp$18$$ < $separators$$.length; $i$jscomp$18$$++) {
    if ("" != $separators$$[$i$jscomp$18$$]) {
      var $currentSeparatorIndex$$ = $str$jscomp$60$$.lastIndexOf($separators$$[$i$jscomp$18$$]);
      $currentSeparatorIndex$$ > $lastSeparatorIndex$$ && ($lastSeparatorIndex$$ = $currentSeparatorIndex$$);
    }
  }
  return -1 == $lastSeparatorIndex$$ ? $str$jscomp$60$$ : $str$jscomp$60$$.slice($lastSeparatorIndex$$ + 1);
};
$goog$$.$string$.$editDistance$ = function($a$jscomp$3$$, $b$jscomp$2$$) {
  var $v0$$ = [], $v1$$ = [];
  if ($a$jscomp$3$$ == $b$jscomp$2$$) {
    return 0;
  }
  if (!$a$jscomp$3$$.length || !$b$jscomp$2$$.length) {
    return Math.max($a$jscomp$3$$.length, $b$jscomp$2$$.length);
  }
  for (var $i$jscomp$19$$ = 0; $i$jscomp$19$$ < $b$jscomp$2$$.length + 1; $i$jscomp$19$$++) {
    $v0$$[$i$jscomp$19$$] = $i$jscomp$19$$;
  }
  for ($i$jscomp$19$$ = 0; $i$jscomp$19$$ < $a$jscomp$3$$.length; $i$jscomp$19$$++) {
    $v1$$[0] = $i$jscomp$19$$ + 1;
    for (var $j$jscomp$1$$ = 0; $j$jscomp$1$$ < $b$jscomp$2$$.length; $j$jscomp$1$$++) {
      $v1$$[$j$jscomp$1$$ + 1] = Math.min($v1$$[$j$jscomp$1$$] + 1, $v0$$[$j$jscomp$1$$ + 1] + 1, $v0$$[$j$jscomp$1$$] + Number($a$jscomp$3$$[$i$jscomp$19$$] != $b$jscomp$2$$[$j$jscomp$1$$]));
    }
    for ($j$jscomp$1$$ = 0; $j$jscomp$1$$ < $v0$$.length; $j$jscomp$1$$++) {
      $v0$$[$j$jscomp$1$$] = $v1$$[$j$jscomp$1$$];
    }
  }
  return $v1$$[$b$jscomp$2$$.length];
};
$goog$$.$asserts$ = {};
$goog$$.$asserts$.$ENABLE_ASSERTS$ = $goog$$.$DEBUG$;
$goog$$.$asserts$.$AssertionError$ = function($messagePattern$$, $messageArgs$$) {
  $messageArgs$$.unshift($messagePattern$$);
  $goog$$.debug.Error.call(this, $goog$$.$string$.$subs$.apply(null, $messageArgs$$));
  $messageArgs$$.shift();
};
$goog$$.$inherits$($goog$$.$asserts$.$AssertionError$, $goog$$.debug.Error);
$goog$$.$asserts$.$AssertionError$.prototype.name = "AssertionError";
$goog$$.$asserts$.$DEFAULT_ERROR_HANDLER$ = function($e$jscomp$8$$) {
  throw $e$jscomp$8$$;
};
$goog$$.$asserts$.$errorHandler_$ = $goog$$.$asserts$.$DEFAULT_ERROR_HANDLER$;
$goog$$.$asserts$.$doAssertFailure_$ = function($defaultMessage_e$jscomp$9$$, $defaultArgs$$, $givenMessage$$, $givenArgs$$) {
  var $message$jscomp$37$$ = "Assertion failed";
  if ($givenMessage$$) {
    $message$jscomp$37$$ += ": " + $givenMessage$$;
    var $args$jscomp$3$$ = $givenArgs$$;
  } else {
    $defaultMessage_e$jscomp$9$$ && ($message$jscomp$37$$ += ": " + $defaultMessage_e$jscomp$9$$, $args$jscomp$3$$ = $defaultArgs$$);
  }
  $defaultMessage_e$jscomp$9$$ = new $goog$$.$asserts$.$AssertionError$("" + $message$jscomp$37$$, $args$jscomp$3$$ || []);
  $goog$$.$asserts$.$errorHandler_$($defaultMessage_e$jscomp$9$$);
};
$goog$$.$asserts$.$setErrorHandler$ = function($errorHandler$jscomp$1$$) {
  $goog$$.$asserts$.$ENABLE_ASSERTS$ && ($goog$$.$asserts$.$errorHandler_$ = $errorHandler$jscomp$1$$);
};
$goog$$.$asserts$.assert = function($condition$jscomp$1$$, $opt_message$jscomp$8$$, $var_args$jscomp$54$$) {
  $goog$$.$asserts$.$ENABLE_ASSERTS$ && !$condition$jscomp$1$$ && $goog$$.$asserts$.$doAssertFailure_$("", null, $opt_message$jscomp$8$$, Array.prototype.slice.call(arguments, 2));
  return $condition$jscomp$1$$;
};
$goog$$.$asserts$.$fail$ = function($opt_message$jscomp$9$$, $var_args$jscomp$55$$) {
  $goog$$.$asserts$.$ENABLE_ASSERTS$ && $goog$$.$asserts$.$errorHandler_$(new $goog$$.$asserts$.$AssertionError$("Failure" + ($opt_message$jscomp$9$$ ? ": " + $opt_message$jscomp$9$$ : ""), Array.prototype.slice.call(arguments, 1)));
};
$goog$$.$asserts$.$assertNumber$ = function($value$jscomp$82$$, $opt_message$jscomp$10$$, $var_args$jscomp$56$$) {
  $goog$$.$asserts$.$ENABLE_ASSERTS$ && !$goog$$.$isNumber$($value$jscomp$82$$) && $goog$$.$asserts$.$doAssertFailure_$("Expected number but got %s: %s.", [$goog$$.$typeOf$($value$jscomp$82$$), $value$jscomp$82$$], $opt_message$jscomp$10$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$82$$;
};
$goog$$.$asserts$.$assertString$ = function($value$jscomp$83$$, $opt_message$jscomp$11$$, $var_args$jscomp$57$$) {
  $goog$$.$asserts$.$ENABLE_ASSERTS$ && !$goog$$.$isString$($value$jscomp$83$$) && $goog$$.$asserts$.$doAssertFailure_$("Expected string but got %s: %s.", [$goog$$.$typeOf$($value$jscomp$83$$), $value$jscomp$83$$], $opt_message$jscomp$11$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$83$$;
};
$goog$$.$asserts$.$assertFunction$ = function($value$jscomp$84$$, $opt_message$jscomp$12$$, $var_args$jscomp$58$$) {
  $goog$$.$asserts$.$ENABLE_ASSERTS$ && !$goog$$.$isFunction$($value$jscomp$84$$) && $goog$$.$asserts$.$doAssertFailure_$("Expected function but got %s: %s.", [$goog$$.$typeOf$($value$jscomp$84$$), $value$jscomp$84$$], $opt_message$jscomp$12$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$84$$;
};
$goog$$.$asserts$.$assertObject$ = function($value$jscomp$85$$, $opt_message$jscomp$13$$, $var_args$jscomp$59$$) {
  $goog$$.$asserts$.$ENABLE_ASSERTS$ && !$goog$$.$isObject$($value$jscomp$85$$) && $goog$$.$asserts$.$doAssertFailure_$("Expected object but got %s: %s.", [$goog$$.$typeOf$($value$jscomp$85$$), $value$jscomp$85$$], $opt_message$jscomp$13$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$85$$;
};
$goog$$.$asserts$.$assertArray$ = function($value$jscomp$86$$, $opt_message$jscomp$14$$, $var_args$jscomp$60$$) {
  $goog$$.$asserts$.$ENABLE_ASSERTS$ && !$goog$$.isArray($value$jscomp$86$$) && $goog$$.$asserts$.$doAssertFailure_$("Expected array but got %s: %s.", [$goog$$.$typeOf$($value$jscomp$86$$), $value$jscomp$86$$], $opt_message$jscomp$14$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$86$$;
};
$goog$$.$asserts$.$assertBoolean$ = function($value$jscomp$87$$, $opt_message$jscomp$15$$, $var_args$jscomp$61$$) {
  $goog$$.$asserts$.$ENABLE_ASSERTS$ && !$goog$$.$isBoolean$($value$jscomp$87$$) && $goog$$.$asserts$.$doAssertFailure_$("Expected boolean but got %s: %s.", [$goog$$.$typeOf$($value$jscomp$87$$), $value$jscomp$87$$], $opt_message$jscomp$15$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$87$$;
};
$goog$$.$asserts$.$assertElement$ = function($value$jscomp$88$$, $opt_message$jscomp$16$$, $var_args$jscomp$62$$) {
  !$goog$$.$asserts$.$ENABLE_ASSERTS$ || $goog$$.$isObject$($value$jscomp$88$$) && $value$jscomp$88$$.nodeType == $goog$$.$dom$.$NodeType$.$ELEMENT$ || $goog$$.$asserts$.$doAssertFailure_$("Expected Element but got %s: %s.", [$goog$$.$typeOf$($value$jscomp$88$$), $value$jscomp$88$$], $opt_message$jscomp$16$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$88$$;
};
$goog$$.$asserts$.$assertInstanceof$ = function($value$jscomp$89$$, $type$jscomp$111$$, $opt_message$jscomp$17$$, $var_args$jscomp$63$$) {
  !$goog$$.$asserts$.$ENABLE_ASSERTS$ || $value$jscomp$89$$ instanceof $type$jscomp$111$$ || $goog$$.$asserts$.$doAssertFailure_$("Expected instanceof %s but got %s.", [$goog$$.$asserts$.$getType_$($type$jscomp$111$$), $goog$$.$asserts$.$getType_$($value$jscomp$89$$)], $opt_message$jscomp$17$$, Array.prototype.slice.call(arguments, 3));
  return $value$jscomp$89$$;
};
$goog$$.$asserts$.$assertObjectPrototypeIsIntact$ = function() {
  for (var $key$jscomp$33$$ in Object.prototype) {
    $goog$$.$asserts$.$fail$($key$jscomp$33$$ + " should not be enumerable in Object.prototype.");
  }
};
$goog$$.$asserts$.$getType_$ = function($value$jscomp$90$$) {
  return $value$jscomp$90$$ instanceof Function ? $value$jscomp$90$$.displayName || $value$jscomp$90$$.name || "unknown type name" : $value$jscomp$90$$ instanceof Object ? $value$jscomp$90$$.constructor.displayName || $value$jscomp$90$$.constructor.name || Object.prototype.toString.call($value$jscomp$90$$) : null === $value$jscomp$90$$ ? "null" : typeof $value$jscomp$90$$;
};
$goog$$.$array$ = {};
$goog$$.$NATIVE_ARRAY_PROTOTYPES$ = $goog$$.$TRUSTED_SITE$;
$goog$$.$array$.$ASSUME_NATIVE_FUNCTIONS$ = !1;
$goog$$.$array$.$peek$ = function($array$jscomp$5$$) {
  return $array$jscomp$5$$[$array$jscomp$5$$.length - 1];
};
$goog$$.$array$.$last$ = $goog$$.$array$.$peek$;
$goog$$.$array$.indexOf = $goog$$.$NATIVE_ARRAY_PROTOTYPES$ && ($goog$$.$array$.$ASSUME_NATIVE_FUNCTIONS$ || Array.prototype.indexOf) ? function($arr$jscomp$9$$, $obj$jscomp$33$$, $opt_fromIndex$jscomp$10$$) {
  $goog$$.$asserts$.assert(null != $arr$jscomp$9$$.length);
  return Array.prototype.indexOf.call($arr$jscomp$9$$, $obj$jscomp$33$$, $opt_fromIndex$jscomp$10$$);
} : function($arr$jscomp$10$$, $obj$jscomp$34$$, $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$) {
  $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$ = null == $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$ ? 0 : 0 > $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$ ? Math.max(0, $arr$jscomp$10$$.length + $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$) : $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$;
  if ($goog$$.$isString$($arr$jscomp$10$$)) {
    return $goog$$.$isString$($obj$jscomp$34$$) && 1 == $obj$jscomp$34$$.length ? $arr$jscomp$10$$.indexOf($obj$jscomp$34$$, $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$) : -1;
  }
  for (; $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$ < $arr$jscomp$10$$.length; $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$++) {
    if ($fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$ in $arr$jscomp$10$$ && $arr$jscomp$10$$[$fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$] === $obj$jscomp$34$$) {
      return $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$;
    }
  }
  return -1;
};
$goog$$.$array$.lastIndexOf = $goog$$.$NATIVE_ARRAY_PROTOTYPES$ && ($goog$$.$array$.$ASSUME_NATIVE_FUNCTIONS$ || Array.prototype.lastIndexOf) ? function($arr$jscomp$11$$, $obj$jscomp$35$$, $opt_fromIndex$jscomp$12$$) {
  $goog$$.$asserts$.assert(null != $arr$jscomp$11$$.length);
  return Array.prototype.lastIndexOf.call($arr$jscomp$11$$, $obj$jscomp$35$$, null == $opt_fromIndex$jscomp$12$$ ? $arr$jscomp$11$$.length - 1 : $opt_fromIndex$jscomp$12$$);
} : function($arr$jscomp$12$$, $obj$jscomp$36$$, $fromIndex$jscomp$2_i$jscomp$21_opt_fromIndex$jscomp$13$$) {
  $fromIndex$jscomp$2_i$jscomp$21_opt_fromIndex$jscomp$13$$ = null == $fromIndex$jscomp$2_i$jscomp$21_opt_fromIndex$jscomp$13$$ ? $arr$jscomp$12$$.length - 1 : $fromIndex$jscomp$2_i$jscomp$21_opt_fromIndex$jscomp$13$$;
  0 > $fromIndex$jscomp$2_i$jscomp$21_opt_fromIndex$jscomp$13$$ && ($fromIndex$jscomp$2_i$jscomp$21_opt_fromIndex$jscomp$13$$ = Math.max(0, $arr$jscomp$12$$.length + $fromIndex$jscomp$2_i$jscomp$21_opt_fromIndex$jscomp$13$$));
  if ($goog$$.$isString$($arr$jscomp$12$$)) {
    return $goog$$.$isString$($obj$jscomp$36$$) && 1 == $obj$jscomp$36$$.length ? $arr$jscomp$12$$.lastIndexOf($obj$jscomp$36$$, $fromIndex$jscomp$2_i$jscomp$21_opt_fromIndex$jscomp$13$$) : -1;
  }
  for (; 0 <= $fromIndex$jscomp$2_i$jscomp$21_opt_fromIndex$jscomp$13$$; $fromIndex$jscomp$2_i$jscomp$21_opt_fromIndex$jscomp$13$$--) {
    if ($fromIndex$jscomp$2_i$jscomp$21_opt_fromIndex$jscomp$13$$ in $arr$jscomp$12$$ && $arr$jscomp$12$$[$fromIndex$jscomp$2_i$jscomp$21_opt_fromIndex$jscomp$13$$] === $obj$jscomp$36$$) {
      return $fromIndex$jscomp$2_i$jscomp$21_opt_fromIndex$jscomp$13$$;
    }
  }
  return -1;
};
$goog$$.$array$.forEach = $goog$$.$NATIVE_ARRAY_PROTOTYPES$ && ($goog$$.$array$.$ASSUME_NATIVE_FUNCTIONS$ || Array.prototype.forEach) ? function($arr$jscomp$13$$, $f$jscomp$1$$, $opt_obj$jscomp$3$$) {
  $goog$$.$asserts$.assert(null != $arr$jscomp$13$$.length);
  Array.prototype.forEach.call($arr$jscomp$13$$, $f$jscomp$1$$, $opt_obj$jscomp$3$$);
} : function($arr$jscomp$14$$, $f$jscomp$2$$, $opt_obj$jscomp$4$$) {
  for (var $l$jscomp$3$$ = $arr$jscomp$14$$.length, $arr2$$ = $goog$$.$isString$($arr$jscomp$14$$) ? $arr$jscomp$14$$.split("") : $arr$jscomp$14$$, $i$jscomp$22$$ = 0; $i$jscomp$22$$ < $l$jscomp$3$$; $i$jscomp$22$$++) {
    $i$jscomp$22$$ in $arr2$$ && $f$jscomp$2$$.call($opt_obj$jscomp$4$$, $arr2$$[$i$jscomp$22$$], $i$jscomp$22$$, $arr$jscomp$14$$);
  }
};
$goog$$.$array$.$forEachRight$ = function($arr$jscomp$15$$, $f$jscomp$3$$) {
  for (var $arr2$jscomp$1$$ = $goog$$.$isString$($arr$jscomp$15$$) ? $arr$jscomp$15$$.split("") : $arr$jscomp$15$$, $i$jscomp$23$$ = $arr$jscomp$15$$.length - 1; 0 <= $i$jscomp$23$$; --$i$jscomp$23$$) {
    $i$jscomp$23$$ in $arr2$jscomp$1$$ && $f$jscomp$3$$.call(void 0, $arr2$jscomp$1$$[$i$jscomp$23$$], $i$jscomp$23$$, $arr$jscomp$15$$);
  }
};
$goog$$.$array$.filter = $goog$$.$NATIVE_ARRAY_PROTOTYPES$ && ($goog$$.$array$.$ASSUME_NATIVE_FUNCTIONS$ || Array.prototype.filter) ? function($arr$jscomp$16$$, $f$jscomp$4$$, $opt_obj$jscomp$6$$) {
  $goog$$.$asserts$.assert(null != $arr$jscomp$16$$.length);
  return Array.prototype.filter.call($arr$jscomp$16$$, $f$jscomp$4$$, $opt_obj$jscomp$6$$);
} : function($arr$jscomp$17$$, $f$jscomp$5$$, $opt_obj$jscomp$7$$) {
  for (var $l$jscomp$5$$ = $arr$jscomp$17$$.length, $res$$ = [], $resLength$$ = 0, $arr2$jscomp$2$$ = $goog$$.$isString$($arr$jscomp$17$$) ? $arr$jscomp$17$$.split("") : $arr$jscomp$17$$, $i$jscomp$24$$ = 0; $i$jscomp$24$$ < $l$jscomp$5$$; $i$jscomp$24$$++) {
    if ($i$jscomp$24$$ in $arr2$jscomp$2$$) {
      var $val$jscomp$12$$ = $arr2$jscomp$2$$[$i$jscomp$24$$];
      $f$jscomp$5$$.call($opt_obj$jscomp$7$$, $val$jscomp$12$$, $i$jscomp$24$$, $arr$jscomp$17$$) && ($res$$[$resLength$$++] = $val$jscomp$12$$);
    }
  }
  return $res$$;
};
$goog$$.$array$.map = $goog$$.$NATIVE_ARRAY_PROTOTYPES$ && ($goog$$.$array$.$ASSUME_NATIVE_FUNCTIONS$ || Array.prototype.map) ? function($arr$jscomp$18$$, $f$jscomp$6$$, $opt_obj$jscomp$8$$) {
  $goog$$.$asserts$.assert(null != $arr$jscomp$18$$.length);
  return Array.prototype.map.call($arr$jscomp$18$$, $f$jscomp$6$$, $opt_obj$jscomp$8$$);
} : function($arr$jscomp$19$$, $f$jscomp$7$$, $opt_obj$jscomp$9$$) {
  for (var $l$jscomp$6$$ = $arr$jscomp$19$$.length, $res$jscomp$1$$ = Array($l$jscomp$6$$), $arr2$jscomp$3$$ = $goog$$.$isString$($arr$jscomp$19$$) ? $arr$jscomp$19$$.split("") : $arr$jscomp$19$$, $i$jscomp$25$$ = 0; $i$jscomp$25$$ < $l$jscomp$6$$; $i$jscomp$25$$++) {
    $i$jscomp$25$$ in $arr2$jscomp$3$$ && ($res$jscomp$1$$[$i$jscomp$25$$] = $f$jscomp$7$$.call($opt_obj$jscomp$9$$, $arr2$jscomp$3$$[$i$jscomp$25$$], $i$jscomp$25$$, $arr$jscomp$19$$));
  }
  return $res$jscomp$1$$;
};
$goog$$.$array$.reduce = $goog$$.$NATIVE_ARRAY_PROTOTYPES$ && ($goog$$.$array$.$ASSUME_NATIVE_FUNCTIONS$ || Array.prototype.reduce) ? function($arr$jscomp$20$$, $f$jscomp$8$$, $val$jscomp$13$$, $opt_obj$jscomp$10$$) {
  $goog$$.$asserts$.assert(null != $arr$jscomp$20$$.length);
  $opt_obj$jscomp$10$$ && ($f$jscomp$8$$ = $goog$$.bind($f$jscomp$8$$, $opt_obj$jscomp$10$$));
  return Array.prototype.reduce.call($arr$jscomp$20$$, $f$jscomp$8$$, $val$jscomp$13$$);
} : function($arr$jscomp$21$$, $f$jscomp$9$$, $val$jscomp$14$$, $opt_obj$jscomp$11$$) {
  var $rval$$ = $val$jscomp$14$$;
  $goog$$.$array$.forEach($arr$jscomp$21$$, function($val$jscomp$14$$, $index$jscomp$48$$) {
    $rval$$ = $f$jscomp$9$$.call($opt_obj$jscomp$11$$, $rval$$, $val$jscomp$14$$, $index$jscomp$48$$, $arr$jscomp$21$$);
  });
  return $rval$$;
};
$goog$$.$array$.reduceRight = $goog$$.$NATIVE_ARRAY_PROTOTYPES$ && ($goog$$.$array$.$ASSUME_NATIVE_FUNCTIONS$ || Array.prototype.reduceRight) ? function($arr$jscomp$22$$, $f$jscomp$10$$, $val$jscomp$16$$, $opt_obj$jscomp$12$$) {
  $goog$$.$asserts$.assert(null != $arr$jscomp$22$$.length);
  $goog$$.$asserts$.assert(null != $f$jscomp$10$$);
  $opt_obj$jscomp$12$$ && ($f$jscomp$10$$ = $goog$$.bind($f$jscomp$10$$, $opt_obj$jscomp$12$$));
  return Array.prototype.reduceRight.call($arr$jscomp$22$$, $f$jscomp$10$$, $val$jscomp$16$$);
} : function($arr$jscomp$23$$, $f$jscomp$11$$, $val$jscomp$17$$, $opt_obj$jscomp$13$$) {
  var $rval$jscomp$1$$ = $val$jscomp$17$$;
  $goog$$.$array$.$forEachRight$($arr$jscomp$23$$, function($val$jscomp$17$$, $index$jscomp$49$$) {
    $rval$jscomp$1$$ = $f$jscomp$11$$.call($opt_obj$jscomp$13$$, $rval$jscomp$1$$, $val$jscomp$17$$, $index$jscomp$49$$, $arr$jscomp$23$$);
  });
  return $rval$jscomp$1$$;
};
$goog$$.$array$.some = $goog$$.$NATIVE_ARRAY_PROTOTYPES$ && ($goog$$.$array$.$ASSUME_NATIVE_FUNCTIONS$ || Array.prototype.some) ? function($arr$jscomp$24$$, $f$jscomp$12$$, $opt_obj$jscomp$14$$) {
  $goog$$.$asserts$.assert(null != $arr$jscomp$24$$.length);
  return Array.prototype.some.call($arr$jscomp$24$$, $f$jscomp$12$$, $opt_obj$jscomp$14$$);
} : function($arr$jscomp$25$$, $f$jscomp$13$$, $opt_obj$jscomp$15$$) {
  for (var $l$jscomp$7$$ = $arr$jscomp$25$$.length, $arr2$jscomp$4$$ = $goog$$.$isString$($arr$jscomp$25$$) ? $arr$jscomp$25$$.split("") : $arr$jscomp$25$$, $i$jscomp$26$$ = 0; $i$jscomp$26$$ < $l$jscomp$7$$; $i$jscomp$26$$++) {
    if ($i$jscomp$26$$ in $arr2$jscomp$4$$ && $f$jscomp$13$$.call($opt_obj$jscomp$15$$, $arr2$jscomp$4$$[$i$jscomp$26$$], $i$jscomp$26$$, $arr$jscomp$25$$)) {
      return !0;
    }
  }
  return !1;
};
$goog$$.$array$.every = $goog$$.$NATIVE_ARRAY_PROTOTYPES$ && ($goog$$.$array$.$ASSUME_NATIVE_FUNCTIONS$ || Array.prototype.every) ? function($arr$jscomp$26$$, $f$jscomp$14$$, $opt_obj$jscomp$16$$) {
  $goog$$.$asserts$.assert(null != $arr$jscomp$26$$.length);
  return Array.prototype.every.call($arr$jscomp$26$$, $f$jscomp$14$$, $opt_obj$jscomp$16$$);
} : function($arr$jscomp$27$$, $f$jscomp$15$$, $opt_obj$jscomp$17$$) {
  for (var $l$jscomp$8$$ = $arr$jscomp$27$$.length, $arr2$jscomp$5$$ = $goog$$.$isString$($arr$jscomp$27$$) ? $arr$jscomp$27$$.split("") : $arr$jscomp$27$$, $i$jscomp$27$$ = 0; $i$jscomp$27$$ < $l$jscomp$8$$; $i$jscomp$27$$++) {
    if ($i$jscomp$27$$ in $arr2$jscomp$5$$ && !$f$jscomp$15$$.call($opt_obj$jscomp$17$$, $arr2$jscomp$5$$[$i$jscomp$27$$], $i$jscomp$27$$, $arr$jscomp$27$$)) {
      return !1;
    }
  }
  return !0;
};
$goog$$.$array$.count = function($arr$jscomp$28$$, $f$jscomp$16$$, $opt_obj$jscomp$18$$) {
  var $count$jscomp$12$$ = 0;
  $goog$$.$array$.forEach($arr$jscomp$28$$, function($arr$jscomp$28$$, $index$jscomp$50$$, $arr$jscomp$29$$) {
    $f$jscomp$16$$.call($opt_obj$jscomp$18$$, $arr$jscomp$28$$, $index$jscomp$50$$, $arr$jscomp$29$$) && ++$count$jscomp$12$$;
  }, $opt_obj$jscomp$18$$);
  return $count$jscomp$12$$;
};
$goog$$.$array$.find = function($arr$jscomp$30$$, $f$jscomp$17_i$jscomp$28$$, $opt_obj$jscomp$19$$) {
  $f$jscomp$17_i$jscomp$28$$ = $goog$$.$array$.findIndex($arr$jscomp$30$$, $f$jscomp$17_i$jscomp$28$$, $opt_obj$jscomp$19$$);
  return 0 > $f$jscomp$17_i$jscomp$28$$ ? null : $goog$$.$isString$($arr$jscomp$30$$) ? $arr$jscomp$30$$.charAt($f$jscomp$17_i$jscomp$28$$) : $arr$jscomp$30$$[$f$jscomp$17_i$jscomp$28$$];
};
$goog$$.$array$.findIndex = function($arr$jscomp$31$$, $f$jscomp$18$$, $opt_obj$jscomp$20$$) {
  for (var $l$jscomp$9$$ = $arr$jscomp$31$$.length, $arr2$jscomp$6$$ = $goog$$.$isString$($arr$jscomp$31$$) ? $arr$jscomp$31$$.split("") : $arr$jscomp$31$$, $i$jscomp$29$$ = 0; $i$jscomp$29$$ < $l$jscomp$9$$; $i$jscomp$29$$++) {
    if ($i$jscomp$29$$ in $arr2$jscomp$6$$ && $f$jscomp$18$$.call($opt_obj$jscomp$20$$, $arr2$jscomp$6$$[$i$jscomp$29$$], $i$jscomp$29$$, $arr$jscomp$31$$)) {
      return $i$jscomp$29$$;
    }
  }
  return -1;
};
$goog$$.$array$.$findRight$ = function($arr$jscomp$32$$, $f$jscomp$19_i$jscomp$30$$, $opt_obj$jscomp$21$$) {
  $f$jscomp$19_i$jscomp$30$$ = $goog$$.$array$.$findIndexRight$($arr$jscomp$32$$, $f$jscomp$19_i$jscomp$30$$, $opt_obj$jscomp$21$$);
  return 0 > $f$jscomp$19_i$jscomp$30$$ ? null : $goog$$.$isString$($arr$jscomp$32$$) ? $arr$jscomp$32$$.charAt($f$jscomp$19_i$jscomp$30$$) : $arr$jscomp$32$$[$f$jscomp$19_i$jscomp$30$$];
};
$goog$$.$array$.$findIndexRight$ = function($arr$jscomp$33$$, $f$jscomp$20$$, $opt_obj$jscomp$22$$) {
  for (var $arr2$jscomp$7$$ = $goog$$.$isString$($arr$jscomp$33$$) ? $arr$jscomp$33$$.split("") : $arr$jscomp$33$$, $i$jscomp$31$$ = $arr$jscomp$33$$.length - 1; 0 <= $i$jscomp$31$$; $i$jscomp$31$$--) {
    if ($i$jscomp$31$$ in $arr2$jscomp$7$$ && $f$jscomp$20$$.call($opt_obj$jscomp$22$$, $arr2$jscomp$7$$[$i$jscomp$31$$], $i$jscomp$31$$, $arr$jscomp$33$$)) {
      return $i$jscomp$31$$;
    }
  }
  return -1;
};
$goog$$.$array$.contains = function($arr$jscomp$34$$, $obj$jscomp$37$$) {
  return 0 <= $goog$$.$array$.indexOf($arr$jscomp$34$$, $obj$jscomp$37$$);
};
$goog$$.$array$.$isEmpty$ = function($arr$jscomp$35$$) {
  return 0 == $arr$jscomp$35$$.length;
};
$goog$$.$array$.clear = function($arr$jscomp$36$$) {
  if (!$goog$$.isArray($arr$jscomp$36$$)) {
    for (var $i$jscomp$32$$ = $arr$jscomp$36$$.length - 1; 0 <= $i$jscomp$32$$; $i$jscomp$32$$--) {
      delete $arr$jscomp$36$$[$i$jscomp$32$$];
    }
  }
  $arr$jscomp$36$$.length = 0;
};
$goog$$.$array$.insert = function($arr$jscomp$37$$, $obj$jscomp$38$$) {
  $goog$$.$array$.contains($arr$jscomp$37$$, $obj$jscomp$38$$) || $arr$jscomp$37$$.push($obj$jscomp$38$$);
};
$goog$$.$array$.$insertAt$ = function($arr$jscomp$38$$, $obj$jscomp$39$$, $opt_i$$) {
  $goog$$.$array$.splice($arr$jscomp$38$$, $opt_i$$, 0, $obj$jscomp$39$$);
};
$goog$$.$array$.$insertArrayAt$ = function($arr$jscomp$39$$, $elementsToAdd$$, $opt_i$jscomp$1$$) {
  $goog$$.$partial$($goog$$.$array$.splice, $arr$jscomp$39$$, $opt_i$jscomp$1$$, 0).apply(null, $elementsToAdd$$);
};
$goog$$.$array$.insertBefore = function($arr$jscomp$40$$, $obj$jscomp$40$$, $opt_obj2$$) {
  var $i$jscomp$33$$;
  2 == arguments.length || 0 > ($i$jscomp$33$$ = $goog$$.$array$.indexOf($arr$jscomp$40$$, $opt_obj2$$)) ? $arr$jscomp$40$$.push($obj$jscomp$40$$) : $goog$$.$array$.$insertAt$($arr$jscomp$40$$, $obj$jscomp$40$$, $i$jscomp$33$$);
};
$goog$$.$array$.remove = function($arr$jscomp$41$$, $i$jscomp$34_obj$jscomp$41$$) {
  $i$jscomp$34_obj$jscomp$41$$ = $goog$$.$array$.indexOf($arr$jscomp$41$$, $i$jscomp$34_obj$jscomp$41$$);
  var $rv$jscomp$2$$;
  ($rv$jscomp$2$$ = 0 <= $i$jscomp$34_obj$jscomp$41$$) && $goog$$.$array$.$removeAt$($arr$jscomp$41$$, $i$jscomp$34_obj$jscomp$41$$);
  return $rv$jscomp$2$$;
};
$goog$$.$array$.$removeLast$ = function($arr$jscomp$42$$, $i$jscomp$35_obj$jscomp$42$$) {
  $i$jscomp$35_obj$jscomp$42$$ = $goog$$.$array$.lastIndexOf($arr$jscomp$42$$, $i$jscomp$35_obj$jscomp$42$$);
  return 0 <= $i$jscomp$35_obj$jscomp$42$$ ? ($goog$$.$array$.$removeAt$($arr$jscomp$42$$, $i$jscomp$35_obj$jscomp$42$$), !0) : !1;
};
$goog$$.$array$.$removeAt$ = function($arr$jscomp$43$$, $i$jscomp$36$$) {
  $goog$$.$asserts$.assert(null != $arr$jscomp$43$$.length);
  return 1 == Array.prototype.splice.call($arr$jscomp$43$$, $i$jscomp$36$$, 1).length;
};
$goog$$.$array$.$removeIf$ = function($arr$jscomp$44$$, $f$jscomp$21_i$jscomp$37$$, $opt_obj$jscomp$23$$) {
  $f$jscomp$21_i$jscomp$37$$ = $goog$$.$array$.findIndex($arr$jscomp$44$$, $f$jscomp$21_i$jscomp$37$$, $opt_obj$jscomp$23$$);
  return 0 <= $f$jscomp$21_i$jscomp$37$$ ? ($goog$$.$array$.$removeAt$($arr$jscomp$44$$, $f$jscomp$21_i$jscomp$37$$), !0) : !1;
};
$goog$$.$array$.$removeAllIf$ = function($arr$jscomp$45$$, $f$jscomp$22$$, $opt_obj$jscomp$24$$) {
  var $removedCount$$ = 0;
  $goog$$.$array$.$forEachRight$($arr$jscomp$45$$, function($val$jscomp$19$$, $index$jscomp$51$$) {
    $f$jscomp$22$$.call($opt_obj$jscomp$24$$, $val$jscomp$19$$, $index$jscomp$51$$, $arr$jscomp$45$$) && $goog$$.$array$.$removeAt$($arr$jscomp$45$$, $index$jscomp$51$$) && $removedCount$$++;
  });
  return $removedCount$$;
};
$goog$$.$array$.concat = function($var_args$jscomp$64$$) {
  return Array.prototype.concat.apply([], arguments);
};
$goog$$.$array$.join = function($var_args$jscomp$65$$) {
  return Array.prototype.concat.apply([], arguments);
};
$goog$$.$array$.$toArray$ = function($object$jscomp$5$$) {
  var $length$jscomp$19$$ = $object$jscomp$5$$.length;
  if (0 < $length$jscomp$19$$) {
    for (var $rv$jscomp$3$$ = Array($length$jscomp$19$$), $i$jscomp$38$$ = 0; $i$jscomp$38$$ < $length$jscomp$19$$; $i$jscomp$38$$++) {
      $rv$jscomp$3$$[$i$jscomp$38$$] = $object$jscomp$5$$[$i$jscomp$38$$];
    }
    return $rv$jscomp$3$$;
  }
  return [];
};
$goog$$.$array$.clone = $goog$$.$array$.$toArray$;
$goog$$.$array$.extend = function($arr1$$, $var_args$jscomp$66$$) {
  for (var $i$jscomp$39$$ = 1; $i$jscomp$39$$ < arguments.length; $i$jscomp$39$$++) {
    var $arr2$jscomp$8$$ = arguments[$i$jscomp$39$$];
    if ($goog$$.$isArrayLike$($arr2$jscomp$8$$)) {
      var $len1$$ = $arr1$$.length || 0, $len2$$ = $arr2$jscomp$8$$.length || 0;
      $arr1$$.length = $len1$$ + $len2$$;
      for (var $j$jscomp$2$$ = 0; $j$jscomp$2$$ < $len2$$; $j$jscomp$2$$++) {
        $arr1$$[$len1$$ + $j$jscomp$2$$] = $arr2$jscomp$8$$[$j$jscomp$2$$];
      }
    } else {
      $arr1$$.push($arr2$jscomp$8$$);
    }
  }
};
$goog$$.$array$.splice = function($arr$jscomp$46$$, $index$jscomp$52$$, $howMany$$, $var_args$jscomp$67$$) {
  $goog$$.$asserts$.assert(null != $arr$jscomp$46$$.length);
  return Array.prototype.splice.apply($arr$jscomp$46$$, $goog$$.$array$.slice(arguments, 1));
};
$goog$$.$array$.slice = function($arr$jscomp$47$$, $start$jscomp$9$$, $opt_end$jscomp$10$$) {
  $goog$$.$asserts$.assert(null != $arr$jscomp$47$$.length);
  return 2 >= arguments.length ? Array.prototype.slice.call($arr$jscomp$47$$, $start$jscomp$9$$) : Array.prototype.slice.call($arr$jscomp$47$$, $start$jscomp$9$$, $opt_end$jscomp$10$$);
};
$goog$$.$array$.$removeDuplicates$ = function($arr$jscomp$48$$, $opt_rv_returnArray$$) {
  $opt_rv_returnArray$$ = $opt_rv_returnArray$$ || $arr$jscomp$48$$;
  for (var $seen$jscomp$1$$ = {}, $cursorInsert$$ = 0, $cursorRead$$ = 0; $cursorRead$$ < $arr$jscomp$48$$.length;) {
    var $current$$ = $arr$jscomp$48$$[$cursorRead$$++];
    var $item$jscomp$inline_126_key$jscomp$34$$ = $current$$;
    $item$jscomp$inline_126_key$jscomp$34$$ = $goog$$.$isObject$($item$jscomp$inline_126_key$jscomp$34$$) ? "o" + $goog$$.$getUid$($item$jscomp$inline_126_key$jscomp$34$$) : (typeof $item$jscomp$inline_126_key$jscomp$34$$).charAt(0) + $item$jscomp$inline_126_key$jscomp$34$$;
    Object.prototype.hasOwnProperty.call($seen$jscomp$1$$, $item$jscomp$inline_126_key$jscomp$34$$) || ($seen$jscomp$1$$[$item$jscomp$inline_126_key$jscomp$34$$] = !0, $opt_rv_returnArray$$[$cursorInsert$$++] = $current$$);
  }
  $opt_rv_returnArray$$.length = $cursorInsert$$;
};
$goog$$.$array$.$binarySearch$ = function($arr$jscomp$49$$, $target$jscomp$59$$, $opt_compareFn$$) {
  return $goog$$.$array$.$binarySearch_$($arr$jscomp$49$$, $opt_compareFn$$ || $goog$$.$array$.$defaultCompare$, !1, $target$jscomp$59$$);
};
$goog$$.$array$.$binarySelect$ = function($arr$jscomp$50$$, $evaluator$$, $opt_obj$jscomp$25$$) {
  return $goog$$.$array$.$binarySearch_$($arr$jscomp$50$$, $evaluator$$, !0, void 0, $opt_obj$jscomp$25$$);
};
$goog$$.$array$.$binarySearch_$ = function($arr$jscomp$51$$, $compareFn$$, $isEvaluator$$, $opt_target$$, $opt_selfObj$jscomp$1$$) {
  for (var $left$jscomp$4$$ = 0, $right$jscomp$3$$ = $arr$jscomp$51$$.length, $found$$; $left$jscomp$4$$ < $right$jscomp$3$$;) {
    var $middle$$ = $left$jscomp$4$$ + $right$jscomp$3$$ >> 1, $compareResult$$;
    $isEvaluator$$ ? $compareResult$$ = $compareFn$$.call($opt_selfObj$jscomp$1$$, $arr$jscomp$51$$[$middle$$], $middle$$, $arr$jscomp$51$$) : $compareResult$$ = $compareFn$$($opt_target$$, $arr$jscomp$51$$[$middle$$]);
    0 < $compareResult$$ ? $left$jscomp$4$$ = $middle$$ + 1 : ($right$jscomp$3$$ = $middle$$, $found$$ = !$compareResult$$);
  }
  return $found$$ ? $left$jscomp$4$$ : ~$left$jscomp$4$$;
};
$goog$$.$array$.sort = function($arr$jscomp$52$$, $opt_compareFn$jscomp$1$$) {
  $arr$jscomp$52$$.sort($opt_compareFn$jscomp$1$$ || $goog$$.$array$.$defaultCompare$);
};
$goog$$.$array$.$stableSort$ = function($arr$jscomp$53$$, $opt_compareFn$jscomp$2$$) {
  for (var $compArr$$ = Array($arr$jscomp$53$$.length), $i$jscomp$40$$ = 0; $i$jscomp$40$$ < $arr$jscomp$53$$.length; $i$jscomp$40$$++) {
    $compArr$$[$i$jscomp$40$$] = {index:$i$jscomp$40$$, value:$arr$jscomp$53$$[$i$jscomp$40$$]};
  }
  var $valueCompareFn$$ = $opt_compareFn$jscomp$2$$ || $goog$$.$array$.$defaultCompare$;
  $goog$$.$array$.sort($compArr$$, function($arr$jscomp$53$$, $opt_compareFn$jscomp$2$$) {
    return $valueCompareFn$$($arr$jscomp$53$$.value, $opt_compareFn$jscomp$2$$.value) || $arr$jscomp$53$$.index - $opt_compareFn$jscomp$2$$.index;
  });
  for ($i$jscomp$40$$ = 0; $i$jscomp$40$$ < $arr$jscomp$53$$.length; $i$jscomp$40$$++) {
    $arr$jscomp$53$$[$i$jscomp$40$$] = $compArr$$[$i$jscomp$40$$].value;
  }
};
$goog$$.$array$.$sortByKey$ = function($arr$jscomp$54$$, $keyFn$$, $opt_compareFn$jscomp$3$$) {
  var $keyCompareFn$$ = $opt_compareFn$jscomp$3$$ || $goog$$.$array$.$defaultCompare$;
  $goog$$.$array$.sort($arr$jscomp$54$$, function($arr$jscomp$54$$, $opt_compareFn$jscomp$3$$) {
    return $keyCompareFn$$($keyFn$$($arr$jscomp$54$$), $keyFn$$($opt_compareFn$jscomp$3$$));
  });
};
$goog$$.$array$.$sortObjectsByKey$ = function($arr$jscomp$55$$, $key$jscomp$35$$, $opt_compareFn$jscomp$4$$) {
  $goog$$.$array$.$sortByKey$($arr$jscomp$55$$, function($arr$jscomp$55$$) {
    return $arr$jscomp$55$$[$key$jscomp$35$$];
  }, $opt_compareFn$jscomp$4$$);
};
$goog$$.$array$.$isSorted$ = function($arr$jscomp$56$$) {
  for (var $compare$$ = $goog$$.$array$.$defaultCompare$, $i$jscomp$41$$ = 1; $i$jscomp$41$$ < $arr$jscomp$56$$.length; $i$jscomp$41$$++) {
    if (0 < $compare$$($arr$jscomp$56$$[$i$jscomp$41$$ - 1], $arr$jscomp$56$$[$i$jscomp$41$$])) {
      return !1;
    }
  }
  return !0;
};
$goog$$.$array$.$equals$ = function($arr1$jscomp$1$$, $arr2$jscomp$9$$, $equalsFn_opt_equalsFn$$) {
  if (!$goog$$.$isArrayLike$($arr1$jscomp$1$$) || !$goog$$.$isArrayLike$($arr2$jscomp$9$$) || $arr1$jscomp$1$$.length != $arr2$jscomp$9$$.length) {
    return !1;
  }
  var $l$jscomp$11$$ = $arr1$jscomp$1$$.length;
  $equalsFn_opt_equalsFn$$ = $equalsFn_opt_equalsFn$$ || $goog$$.$array$.$defaultCompareEquality$;
  for (var $i$jscomp$42$$ = 0; $i$jscomp$42$$ < $l$jscomp$11$$; $i$jscomp$42$$++) {
    if (!$equalsFn_opt_equalsFn$$($arr1$jscomp$1$$[$i$jscomp$42$$], $arr2$jscomp$9$$[$i$jscomp$42$$])) {
      return !1;
    }
  }
  return !0;
};
$goog$$.$array$.$compare3$ = function($arr1$jscomp$2$$, $arr2$jscomp$10$$, $compare$jscomp$1_opt_compareFn$jscomp$6$$) {
  $compare$jscomp$1_opt_compareFn$jscomp$6$$ = $compare$jscomp$1_opt_compareFn$jscomp$6$$ || $goog$$.$array$.$defaultCompare$;
  for (var $l$jscomp$12$$ = Math.min($arr1$jscomp$2$$.length, $arr2$jscomp$10$$.length), $i$jscomp$43$$ = 0; $i$jscomp$43$$ < $l$jscomp$12$$; $i$jscomp$43$$++) {
    var $result$jscomp$5$$ = $compare$jscomp$1_opt_compareFn$jscomp$6$$($arr1$jscomp$2$$[$i$jscomp$43$$], $arr2$jscomp$10$$[$i$jscomp$43$$]);
    if (0 != $result$jscomp$5$$) {
      return $result$jscomp$5$$;
    }
  }
  return $goog$$.$array$.$defaultCompare$($arr1$jscomp$2$$.length, $arr2$jscomp$10$$.length);
};
$goog$$.$array$.$defaultCompare$ = function($a$jscomp$5$$, $b$jscomp$4$$) {
  return $a$jscomp$5$$ > $b$jscomp$4$$ ? 1 : $a$jscomp$5$$ < $b$jscomp$4$$ ? -1 : 0;
};
$goog$$.$array$.$inverseDefaultCompare$ = function($a$jscomp$6$$, $b$jscomp$5$$) {
  return -$goog$$.$array$.$defaultCompare$($a$jscomp$6$$, $b$jscomp$5$$);
};
$goog$$.$array$.$defaultCompareEquality$ = function($a$jscomp$7$$, $b$jscomp$6$$) {
  return $a$jscomp$7$$ === $b$jscomp$6$$;
};
$goog$$.$array$.$binaryInsert$ = function($array$jscomp$6$$, $value$jscomp$91$$, $index$jscomp$53_opt_compareFn$jscomp$7$$) {
  $index$jscomp$53_opt_compareFn$jscomp$7$$ = $goog$$.$array$.$binarySearch$($array$jscomp$6$$, $value$jscomp$91$$, $index$jscomp$53_opt_compareFn$jscomp$7$$);
  return 0 > $index$jscomp$53_opt_compareFn$jscomp$7$$ ? ($goog$$.$array$.$insertAt$($array$jscomp$6$$, $value$jscomp$91$$, -($index$jscomp$53_opt_compareFn$jscomp$7$$ + 1)), !0) : !1;
};
$goog$$.$array$.$binaryRemove$ = function($array$jscomp$7$$, $index$jscomp$54_value$jscomp$92$$, $opt_compareFn$jscomp$8$$) {
  $index$jscomp$54_value$jscomp$92$$ = $goog$$.$array$.$binarySearch$($array$jscomp$7$$, $index$jscomp$54_value$jscomp$92$$, $opt_compareFn$jscomp$8$$);
  return 0 <= $index$jscomp$54_value$jscomp$92$$ ? $goog$$.$array$.$removeAt$($array$jscomp$7$$, $index$jscomp$54_value$jscomp$92$$) : !1;
};
$goog$$.$array$.$bucket$ = function($array$jscomp$8$$, $sorter$$, $opt_obj$jscomp$26$$) {
  for (var $buckets$$ = {}, $i$jscomp$44$$ = 0; $i$jscomp$44$$ < $array$jscomp$8$$.length; $i$jscomp$44$$++) {
    var $value$jscomp$93$$ = $array$jscomp$8$$[$i$jscomp$44$$], $key$jscomp$36$$ = $sorter$$.call($opt_obj$jscomp$26$$, $value$jscomp$93$$, $i$jscomp$44$$, $array$jscomp$8$$);
    $goog$$.$isDef$($key$jscomp$36$$) && ($buckets$$[$key$jscomp$36$$] || ($buckets$$[$key$jscomp$36$$] = [])).push($value$jscomp$93$$);
  }
  return $buckets$$;
};
$goog$$.$array$.$toObject$ = function($arr$jscomp$57$$, $keyFunc$$, $opt_obj$jscomp$27$$) {
  var $ret$$ = {};
  $goog$$.$array$.forEach($arr$jscomp$57$$, function($element$jscomp$7$$, $index$jscomp$55$$) {
    $ret$$[$keyFunc$$.call($opt_obj$jscomp$27$$, $element$jscomp$7$$, $index$jscomp$55$$, $arr$jscomp$57$$)] = $element$jscomp$7$$;
  });
  return $ret$$;
};
$goog$$.$array$.$range$ = function($i$jscomp$45_startOrEnd$$, $opt_end$jscomp$11$$, $opt_step_step$$) {
  var $array$jscomp$9$$ = [], $start$jscomp$10$$ = 0, $end$jscomp$4$$ = $i$jscomp$45_startOrEnd$$;
  $opt_step_step$$ = $opt_step_step$$ || 1;
  void 0 !== $opt_end$jscomp$11$$ && ($start$jscomp$10$$ = $i$jscomp$45_startOrEnd$$, $end$jscomp$4$$ = $opt_end$jscomp$11$$);
  if (0 > $opt_step_step$$ * ($end$jscomp$4$$ - $start$jscomp$10$$)) {
    return [];
  }
  if (0 < $opt_step_step$$) {
    for ($i$jscomp$45_startOrEnd$$ = $start$jscomp$10$$; $i$jscomp$45_startOrEnd$$ < $end$jscomp$4$$; $i$jscomp$45_startOrEnd$$ += $opt_step_step$$) {
      $array$jscomp$9$$.push($i$jscomp$45_startOrEnd$$);
    }
  } else {
    for ($i$jscomp$45_startOrEnd$$ = $start$jscomp$10$$; $i$jscomp$45_startOrEnd$$ > $end$jscomp$4$$; $i$jscomp$45_startOrEnd$$ += $opt_step_step$$) {
      $array$jscomp$9$$.push($i$jscomp$45_startOrEnd$$);
    }
  }
  return $array$jscomp$9$$;
};
$goog$$.$array$.repeat = function($value$jscomp$94$$, $n$jscomp$6$$) {
  for (var $array$jscomp$10$$ = [], $i$jscomp$46$$ = 0; $i$jscomp$46$$ < $n$jscomp$6$$; $i$jscomp$46$$++) {
    $array$jscomp$10$$[$i$jscomp$46$$] = $value$jscomp$94$$;
  }
  return $array$jscomp$10$$;
};
$goog$$.$array$.flatten = function($var_args$jscomp$68$$) {
  for (var $result$jscomp$6$$ = [], $i$jscomp$47$$ = 0; $i$jscomp$47$$ < arguments.length; $i$jscomp$47$$++) {
    var $element$jscomp$8$$ = arguments[$i$jscomp$47$$];
    if ($goog$$.isArray($element$jscomp$8$$)) {
      for (var $c$jscomp$2$$ = 0; $c$jscomp$2$$ < $element$jscomp$8$$.length; $c$jscomp$2$$ += 8192) {
        for (var $chunk$jscomp$5_recurseResult$$ = $goog$$.$array$.slice($element$jscomp$8$$, $c$jscomp$2$$, $c$jscomp$2$$ + 8192), $chunk$jscomp$5_recurseResult$$ = $goog$$.$array$.flatten.apply(null, $chunk$jscomp$5_recurseResult$$), $r$jscomp$1$$ = 0; $r$jscomp$1$$ < $chunk$jscomp$5_recurseResult$$.length; $r$jscomp$1$$++) {
          $result$jscomp$6$$.push($chunk$jscomp$5_recurseResult$$[$r$jscomp$1$$]);
        }
      }
    } else {
      $result$jscomp$6$$.push($element$jscomp$8$$);
    }
  }
  return $result$jscomp$6$$;
};
$goog$$.$array$.rotate = function($array$jscomp$11$$, $n$jscomp$7$$) {
  $goog$$.$asserts$.assert(null != $array$jscomp$11$$.length);
  $array$jscomp$11$$.length && ($n$jscomp$7$$ %= $array$jscomp$11$$.length, 0 < $n$jscomp$7$$ ? Array.prototype.unshift.apply($array$jscomp$11$$, $array$jscomp$11$$.splice(-$n$jscomp$7$$, $n$jscomp$7$$)) : 0 > $n$jscomp$7$$ && Array.prototype.push.apply($array$jscomp$11$$, $array$jscomp$11$$.splice(0, -$n$jscomp$7$$)));
  return $array$jscomp$11$$;
};
$goog$$.$array$.$moveItem$ = function($arr$jscomp$58$$, $fromIndex$jscomp$3_removedItems$$, $toIndex$$) {
  $goog$$.$asserts$.assert(0 <= $fromIndex$jscomp$3_removedItems$$ && $fromIndex$jscomp$3_removedItems$$ < $arr$jscomp$58$$.length);
  $goog$$.$asserts$.assert(0 <= $toIndex$$ && $toIndex$$ < $arr$jscomp$58$$.length);
  $fromIndex$jscomp$3_removedItems$$ = Array.prototype.splice.call($arr$jscomp$58$$, $fromIndex$jscomp$3_removedItems$$, 1);
  Array.prototype.splice.call($arr$jscomp$58$$, $toIndex$$, 0, $fromIndex$jscomp$3_removedItems$$[0]);
};
$goog$$.$array$.$zip$ = function($var_args$jscomp$69$$) {
  if (!arguments.length) {
    return [];
  }
  for (var $result$jscomp$7$$ = [], $minLen$$ = arguments[0].length, $i$jscomp$48$$ = 1; $i$jscomp$48$$ < arguments.length; $i$jscomp$48$$++) {
    arguments[$i$jscomp$48$$].length < $minLen$$ && ($minLen$$ = arguments[$i$jscomp$48$$].length);
  }
  for ($i$jscomp$48$$ = 0; $i$jscomp$48$$ < $minLen$$; $i$jscomp$48$$++) {
    for (var $value$jscomp$95$$ = [], $j$jscomp$3$$ = 0; $j$jscomp$3$$ < arguments.length; $j$jscomp$3$$++) {
      $value$jscomp$95$$.push(arguments[$j$jscomp$3$$][$i$jscomp$48$$]);
    }
    $result$jscomp$7$$.push($value$jscomp$95$$);
  }
  return $result$jscomp$7$$;
};
$goog$$.$array$.$shuffle$ = function($arr$jscomp$59$$, $opt_randFn_randFn$$) {
  $opt_randFn_randFn$$ = $opt_randFn_randFn$$ || Math.random;
  for (var $i$jscomp$49$$ = $arr$jscomp$59$$.length - 1; 0 < $i$jscomp$49$$; $i$jscomp$49$$--) {
    var $j$jscomp$4$$ = Math.floor($opt_randFn_randFn$$() * ($i$jscomp$49$$ + 1)), $tmp$$ = $arr$jscomp$59$$[$i$jscomp$49$$];
    $arr$jscomp$59$$[$i$jscomp$49$$] = $arr$jscomp$59$$[$j$jscomp$4$$];
    $arr$jscomp$59$$[$j$jscomp$4$$] = $tmp$$;
  }
};
$goog$$.$array$.$copyByIndex$ = function($arr$jscomp$60$$, $index_arr$$) {
  var $result$jscomp$8$$ = [];
  $goog$$.$array$.forEach($index_arr$$, function($index_arr$$) {
    $result$jscomp$8$$.push($arr$jscomp$60$$[$index_arr$$]);
  });
  return $result$jscomp$8$$;
};
$goog$$.$array$.$concatMap$ = function($arr$jscomp$61$$, $f$jscomp$23$$, $opt_obj$jscomp$28$$) {
  return $goog$$.$array$.concat.apply([], $goog$$.$array$.map($arr$jscomp$61$$, $f$jscomp$23$$, $opt_obj$jscomp$28$$));
};
$goog$$.$labs$ = {};
$goog$$.$labs$.userAgent = {};
$goog$$.$labs$.userAgent.$util$ = {};
$goog$$.$labs$.userAgent.$util$.$getNativeUserAgentString_$ = function() {
  var $navigator$jscomp$1_userAgent$jscomp$1$$ = $goog$$.$labs$.userAgent.$util$.$getNavigator_$();
  return $navigator$jscomp$1_userAgent$jscomp$1$$ && ($navigator$jscomp$1_userAgent$jscomp$1$$ = $navigator$jscomp$1_userAgent$jscomp$1$$.userAgent) ? $navigator$jscomp$1_userAgent$jscomp$1$$ : "";
};
$goog$$.$labs$.userAgent.$util$.$getNavigator_$ = function() {
  return $goog$$.global.navigator;
};
$goog$$.$labs$.userAgent.$util$.$userAgent_$ = $goog$$.$labs$.userAgent.$util$.$getNativeUserAgentString_$();
$goog$$.$labs$.userAgent.$util$.$setUserAgent$ = function($opt_userAgent$$) {
  $goog$$.$labs$.userAgent.$util$.$userAgent_$ = $opt_userAgent$$ || $goog$$.$labs$.userAgent.$util$.$getNativeUserAgentString_$();
};
$goog$$.$labs$.userAgent.$util$.$getUserAgent$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$userAgent_$;
};
$goog$$.$labs$.userAgent.$util$.$matchUserAgent$ = function($str$jscomp$61$$) {
  return $goog$$.$string$.contains($goog$$.$labs$.userAgent.$util$.$getUserAgent$(), $str$jscomp$61$$);
};
$goog$$.$labs$.userAgent.$util$.$matchUserAgentIgnoreCase$ = function() {
  return $goog$$.$string$.$caseInsensitiveContains$();
};
$goog$$.$labs$.userAgent.$util$.$extractVersionTuples$ = function($userAgent$jscomp$4$$) {
  for (var $versionRegExp$$ = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, $data$jscomp$45$$ = [], $match$jscomp$2$$; $match$jscomp$2$$ = $versionRegExp$$.exec($userAgent$jscomp$4$$);) {
    $data$jscomp$45$$.push([$match$jscomp$2$$[1], $match$jscomp$2$$[2], $match$jscomp$2$$[3] || void 0]);
  }
  return $data$jscomp$45$$;
};
$goog$$.object = {};
$goog$$.object.is = function($v$$, $v2$$) {
  return $v$$ === $v2$$ ? 0 !== $v$$ || 1 / $v$$ === 1 / $v2$$ : $v$$ !== $v$$ && $v2$$ !== $v2$$;
};
$goog$$.object.forEach = function($obj$jscomp$44$$, $f$jscomp$24$$, $opt_obj$jscomp$29$$) {
  for (var $key$jscomp$37$$ in $obj$jscomp$44$$) {
    $f$jscomp$24$$.call($opt_obj$jscomp$29$$, $obj$jscomp$44$$[$key$jscomp$37$$], $key$jscomp$37$$, $obj$jscomp$44$$);
  }
};
$goog$$.object.filter = function($obj$jscomp$45$$, $f$jscomp$25$$, $opt_obj$jscomp$30$$) {
  var $res$jscomp$2$$ = {}, $key$jscomp$38$$;
  for ($key$jscomp$38$$ in $obj$jscomp$45$$) {
    $f$jscomp$25$$.call($opt_obj$jscomp$30$$, $obj$jscomp$45$$[$key$jscomp$38$$], $key$jscomp$38$$, $obj$jscomp$45$$) && ($res$jscomp$2$$[$key$jscomp$38$$] = $obj$jscomp$45$$[$key$jscomp$38$$]);
  }
  return $res$jscomp$2$$;
};
$goog$$.object.map = function($obj$jscomp$46$$, $f$jscomp$26$$, $opt_obj$jscomp$31$$) {
  var $res$jscomp$3$$ = {}, $key$jscomp$39$$;
  for ($key$jscomp$39$$ in $obj$jscomp$46$$) {
    $res$jscomp$3$$[$key$jscomp$39$$] = $f$jscomp$26$$.call($opt_obj$jscomp$31$$, $obj$jscomp$46$$[$key$jscomp$39$$], $key$jscomp$39$$, $obj$jscomp$46$$);
  }
  return $res$jscomp$3$$;
};
$goog$$.object.some = function($obj$jscomp$47$$, $f$jscomp$27$$, $opt_obj$jscomp$32$$) {
  for (var $key$jscomp$40$$ in $obj$jscomp$47$$) {
    if ($f$jscomp$27$$.call($opt_obj$jscomp$32$$, $obj$jscomp$47$$[$key$jscomp$40$$], $key$jscomp$40$$, $obj$jscomp$47$$)) {
      return !0;
    }
  }
  return !1;
};
$goog$$.object.every = function($obj$jscomp$48$$, $f$jscomp$28$$, $opt_obj$jscomp$33$$) {
  for (var $key$jscomp$41$$ in $obj$jscomp$48$$) {
    if (!$f$jscomp$28$$.call($opt_obj$jscomp$33$$, $obj$jscomp$48$$[$key$jscomp$41$$], $key$jscomp$41$$, $obj$jscomp$48$$)) {
      return !1;
    }
  }
  return !0;
};
$goog$$.object.$getCount$ = function($obj$jscomp$49$$) {
  var $rv$jscomp$4$$ = 0, $key$jscomp$42$$;
  for ($key$jscomp$42$$ in $obj$jscomp$49$$) {
    $rv$jscomp$4$$++;
  }
  return $rv$jscomp$4$$;
};
$goog$$.object.$getAnyKey$ = function($obj$jscomp$50$$) {
  for (var $key$jscomp$43$$ in $obj$jscomp$50$$) {
    return $key$jscomp$43$$;
  }
};
$goog$$.object.$getAnyValue$ = function($obj$jscomp$51$$) {
  for (var $key$jscomp$44$$ in $obj$jscomp$51$$) {
    return $obj$jscomp$51$$[$key$jscomp$44$$];
  }
};
$goog$$.object.contains = function($obj$jscomp$52$$, $val$jscomp$20$$) {
  return $goog$$.object.$containsValue$($obj$jscomp$52$$, $val$jscomp$20$$);
};
$goog$$.object.$getValues$ = function($obj$jscomp$53$$) {
  var $res$jscomp$4$$ = [], $i$jscomp$50$$ = 0, $key$jscomp$45$$;
  for ($key$jscomp$45$$ in $obj$jscomp$53$$) {
    $res$jscomp$4$$[$i$jscomp$50$$++] = $obj$jscomp$53$$[$key$jscomp$45$$];
  }
  return $res$jscomp$4$$;
};
$goog$$.object.$getKeys$ = function($obj$jscomp$54$$) {
  var $res$jscomp$5$$ = [], $i$jscomp$51$$ = 0, $key$jscomp$46$$;
  for ($key$jscomp$46$$ in $obj$jscomp$54$$) {
    $res$jscomp$5$$[$i$jscomp$51$$++] = $key$jscomp$46$$;
  }
  return $res$jscomp$5$$;
};
$goog$$.object.$getValueByKeys$ = function($obj$jscomp$55$$, $var_args$jscomp$70$$) {
  for (var $i$jscomp$52_isArrayLike$$ = $goog$$.$isArrayLike$($var_args$jscomp$70$$), $keys$jscomp$1$$ = $i$jscomp$52_isArrayLike$$ ? $var_args$jscomp$70$$ : arguments, $i$jscomp$52_isArrayLike$$ = $i$jscomp$52_isArrayLike$$ ? 0 : 1; $i$jscomp$52_isArrayLike$$ < $keys$jscomp$1$$.length && ($obj$jscomp$55$$ = $obj$jscomp$55$$[$keys$jscomp$1$$[$i$jscomp$52_isArrayLike$$]], $goog$$.$isDef$($obj$jscomp$55$$)); $i$jscomp$52_isArrayLike$$++) {
  }
  return $obj$jscomp$55$$;
};
$goog$$.object.$containsKey$ = function($obj$jscomp$56$$, $key$jscomp$47$$) {
  return null !== $obj$jscomp$56$$ && $key$jscomp$47$$ in $obj$jscomp$56$$;
};
$goog$$.object.$containsValue$ = function($obj$jscomp$57$$, $val$jscomp$21$$) {
  for (var $key$jscomp$48$$ in $obj$jscomp$57$$) {
    if ($obj$jscomp$57$$[$key$jscomp$48$$] == $val$jscomp$21$$) {
      return !0;
    }
  }
  return !1;
};
$goog$$.object.$findKey$ = function($obj$jscomp$58$$, $f$jscomp$29$$, $opt_this$jscomp$12$$) {
  for (var $key$jscomp$49$$ in $obj$jscomp$58$$) {
    if ($f$jscomp$29$$.call($opt_this$jscomp$12$$, $obj$jscomp$58$$[$key$jscomp$49$$], $key$jscomp$49$$, $obj$jscomp$58$$)) {
      return $key$jscomp$49$$;
    }
  }
};
$goog$$.object.$findValue$ = function($obj$jscomp$59$$, $f$jscomp$30_key$jscomp$50$$, $opt_this$jscomp$13$$) {
  return ($f$jscomp$30_key$jscomp$50$$ = $goog$$.object.$findKey$($obj$jscomp$59$$, $f$jscomp$30_key$jscomp$50$$, $opt_this$jscomp$13$$)) && $obj$jscomp$59$$[$f$jscomp$30_key$jscomp$50$$];
};
$goog$$.object.$isEmpty$ = function($obj$jscomp$60$$) {
  for (var $key$jscomp$51$$ in $obj$jscomp$60$$) {
    return !1;
  }
  return !0;
};
$goog$$.object.clear = function($obj$jscomp$61$$) {
  for (var $i$jscomp$53$$ in $obj$jscomp$61$$) {
    delete $obj$jscomp$61$$[$i$jscomp$53$$];
  }
};
$goog$$.object.remove = function($obj$jscomp$62$$, $key$jscomp$52$$) {
  var $rv$jscomp$5$$;
  ($rv$jscomp$5$$ = $key$jscomp$52$$ in $obj$jscomp$62$$) && delete $obj$jscomp$62$$[$key$jscomp$52$$];
  return $rv$jscomp$5$$;
};
$goog$$.object.add = function($obj$jscomp$63$$, $key$jscomp$53$$, $val$jscomp$22$$) {
  if (null !== $obj$jscomp$63$$ && $key$jscomp$53$$ in $obj$jscomp$63$$) {
    throw Error('The object already contains the key "' + $key$jscomp$53$$ + '"');
  }
  $goog$$.object.set($obj$jscomp$63$$, $key$jscomp$53$$, $val$jscomp$22$$);
};
$goog$$.object.get = function($obj$jscomp$64$$, $key$jscomp$54$$, $opt_val$$) {
  return null !== $obj$jscomp$64$$ && $key$jscomp$54$$ in $obj$jscomp$64$$ ? $obj$jscomp$64$$[$key$jscomp$54$$] : $opt_val$$;
};
$goog$$.object.set = function($obj$jscomp$65$$, $key$jscomp$55$$, $value$jscomp$96$$) {
  $obj$jscomp$65$$[$key$jscomp$55$$] = $value$jscomp$96$$;
};
$goog$$.object.$setIfUndefined$ = function($obj$jscomp$66$$, $key$jscomp$56$$, $value$jscomp$97$$) {
  return $key$jscomp$56$$ in $obj$jscomp$66$$ ? $obj$jscomp$66$$[$key$jscomp$56$$] : $obj$jscomp$66$$[$key$jscomp$56$$] = $value$jscomp$97$$;
};
$goog$$.object.$setWithReturnValueIfNotSet$ = function($obj$jscomp$67$$, $key$jscomp$57$$, $f$jscomp$31_val$jscomp$23$$) {
  if ($key$jscomp$57$$ in $obj$jscomp$67$$) {
    return $obj$jscomp$67$$[$key$jscomp$57$$];
  }
  $f$jscomp$31_val$jscomp$23$$ = $f$jscomp$31_val$jscomp$23$$();
  return $obj$jscomp$67$$[$key$jscomp$57$$] = $f$jscomp$31_val$jscomp$23$$;
};
$goog$$.object.$equals$ = function($a$jscomp$8$$, $b$jscomp$7$$) {
  for (var $k$$ in $a$jscomp$8$$) {
    if (!($k$$ in $b$jscomp$7$$) || $a$jscomp$8$$[$k$$] !== $b$jscomp$7$$[$k$$]) {
      return !1;
    }
  }
  for ($k$$ in $b$jscomp$7$$) {
    if (!($k$$ in $a$jscomp$8$$)) {
      return !1;
    }
  }
  return !0;
};
$goog$$.object.clone = function($obj$jscomp$68$$) {
  var $res$jscomp$6$$ = {}, $key$jscomp$58$$;
  for ($key$jscomp$58$$ in $obj$jscomp$68$$) {
    $res$jscomp$6$$[$key$jscomp$58$$] = $obj$jscomp$68$$[$key$jscomp$58$$];
  }
  return $res$jscomp$6$$;
};
$goog$$.object.$unsafeClone$ = function($obj$jscomp$69$$) {
  var $clone$jscomp$1_type$jscomp$112$$ = $goog$$.$typeOf$($obj$jscomp$69$$);
  if ("object" == $clone$jscomp$1_type$jscomp$112$$ || "array" == $clone$jscomp$1_type$jscomp$112$$) {
    if ($goog$$.$isFunction$($obj$jscomp$69$$.clone)) {
      return $obj$jscomp$69$$.clone();
    }
    var $clone$jscomp$1_type$jscomp$112$$ = "array" == $clone$jscomp$1_type$jscomp$112$$ ? [] : {}, $key$jscomp$59$$;
    for ($key$jscomp$59$$ in $obj$jscomp$69$$) {
      $clone$jscomp$1_type$jscomp$112$$[$key$jscomp$59$$] = $goog$$.object.$unsafeClone$($obj$jscomp$69$$[$key$jscomp$59$$]);
    }
    return $clone$jscomp$1_type$jscomp$112$$;
  }
  return $obj$jscomp$69$$;
};
$goog$$.object.$transpose$ = function($obj$jscomp$70$$) {
  var $transposed$$ = {}, $key$jscomp$60$$;
  for ($key$jscomp$60$$ in $obj$jscomp$70$$) {
    $transposed$$[$obj$jscomp$70$$[$key$jscomp$60$$]] = $key$jscomp$60$$;
  }
  return $transposed$$;
};
$goog$$.object.$PROTOTYPE_FIELDS_$ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
$goog$$.object.extend = function($target$jscomp$60$$, $var_args$jscomp$71$$) {
  for (var $key$jscomp$61$$, $source$jscomp$14$$, $i$jscomp$54$$ = 1; $i$jscomp$54$$ < arguments.length; $i$jscomp$54$$++) {
    $source$jscomp$14$$ = arguments[$i$jscomp$54$$];
    for ($key$jscomp$61$$ in $source$jscomp$14$$) {
      $target$jscomp$60$$[$key$jscomp$61$$] = $source$jscomp$14$$[$key$jscomp$61$$];
    }
    for (var $j$jscomp$5$$ = 0; $j$jscomp$5$$ < $goog$$.object.$PROTOTYPE_FIELDS_$.length; $j$jscomp$5$$++) {
      $key$jscomp$61$$ = $goog$$.object.$PROTOTYPE_FIELDS_$[$j$jscomp$5$$], Object.prototype.hasOwnProperty.call($source$jscomp$14$$, $key$jscomp$61$$) && ($target$jscomp$60$$[$key$jscomp$61$$] = $source$jscomp$14$$[$key$jscomp$61$$]);
    }
  }
};
$goog$$.object.create = function($var_args$jscomp$72$$) {
  var $argLength$$ = arguments.length;
  if (1 == $argLength$$ && $goog$$.isArray(arguments[0])) {
    return $goog$$.object.create.apply(null, arguments[0]);
  }
  if ($argLength$$ % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var $rv$jscomp$6$$ = {}, $i$jscomp$55$$ = 0; $i$jscomp$55$$ < $argLength$$; $i$jscomp$55$$ += 2) {
    $rv$jscomp$6$$[arguments[$i$jscomp$55$$]] = arguments[$i$jscomp$55$$ + 1];
  }
  return $rv$jscomp$6$$;
};
$goog$$.object.$createSet$ = function($var_args$jscomp$73$$) {
  var $argLength$jscomp$1$$ = arguments.length;
  if (1 == $argLength$jscomp$1$$ && $goog$$.isArray(arguments[0])) {
    return $goog$$.object.$createSet$.apply(null, arguments[0]);
  }
  for (var $rv$jscomp$7$$ = {}, $i$jscomp$56$$ = 0; $i$jscomp$56$$ < $argLength$jscomp$1$$; $i$jscomp$56$$++) {
    $rv$jscomp$7$$[arguments[$i$jscomp$56$$]] = !0;
  }
  return $rv$jscomp$7$$;
};
$goog$$.object.$createImmutableView$ = function($obj$jscomp$71$$) {
  var $result$jscomp$9$$ = $obj$jscomp$71$$;
  Object.isFrozen && !Object.isFrozen($obj$jscomp$71$$) && ($result$jscomp$9$$ = Object.create($obj$jscomp$71$$), Object.freeze($result$jscomp$9$$));
  return $result$jscomp$9$$;
};
$goog$$.object.$isImmutableView$ = function($obj$jscomp$72$$) {
  return !!Object.isFrozen && Object.isFrozen($obj$jscomp$72$$);
};
$goog$$.object.$getAllPropertyNames$ = function($obj$jscomp$73_proto$jscomp$3$$, $opt_includeObjectPrototype$$, $opt_includeFunctionPrototype$$) {
  if (!$obj$jscomp$73_proto$jscomp$3$$) {
    return [];
  }
  if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) {
    return $goog$$.object.$getKeys$($obj$jscomp$73_proto$jscomp$3$$);
  }
  for (var $visitedSet$$ = {}; $obj$jscomp$73_proto$jscomp$3$$ && ($obj$jscomp$73_proto$jscomp$3$$ !== Object.prototype || $opt_includeObjectPrototype$$) && ($obj$jscomp$73_proto$jscomp$3$$ !== Function.prototype || $opt_includeFunctionPrototype$$);) {
    for (var $names$$ = Object.getOwnPropertyNames($obj$jscomp$73_proto$jscomp$3$$), $i$jscomp$57$$ = 0; $i$jscomp$57$$ < $names$$.length; $i$jscomp$57$$++) {
      $visitedSet$$[$names$$[$i$jscomp$57$$]] = !0;
    }
    $obj$jscomp$73_proto$jscomp$3$$ = Object.getPrototypeOf($obj$jscomp$73_proto$jscomp$3$$);
  }
  return $goog$$.object.$getKeys$($visitedSet$$);
};
$goog$$.$labs$.userAgent.browser = {};
$goog$$.$labs$.userAgent.browser.$matchOpera_$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Opera");
};
$goog$$.$labs$.userAgent.browser.$matchIE_$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Trident") || $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("MSIE");
};
$goog$$.$labs$.userAgent.browser.$matchEdge_$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Edge");
};
$goog$$.$labs$.userAgent.browser.$matchFirefox_$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Firefox");
};
$goog$$.$labs$.userAgent.browser.$matchSafari_$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Safari") && !($goog$$.$labs$.userAgent.browser.$matchChrome_$() || $goog$$.$labs$.userAgent.browser.$matchCoast_$() || $goog$$.$labs$.userAgent.browser.$matchOpera_$() || $goog$$.$labs$.userAgent.browser.$matchEdge_$() || $goog$$.$labs$.userAgent.browser.$isSilk$() || $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Android"));
};
$goog$$.$labs$.userAgent.browser.$matchCoast_$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Coast");
};
$goog$$.$labs$.userAgent.browser.$matchIosWebview_$ = function() {
  return ($goog$$.$labs$.userAgent.$util$.$matchUserAgent$("iPad") || $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("iPhone")) && !$goog$$.$labs$.userAgent.browser.$matchSafari_$() && !$goog$$.$labs$.userAgent.browser.$matchChrome_$() && !$goog$$.$labs$.userAgent.browser.$matchCoast_$() && $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("AppleWebKit");
};
$goog$$.$labs$.userAgent.browser.$matchChrome_$ = function() {
  return ($goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Chrome") || $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("CriOS")) && !$goog$$.$labs$.userAgent.browser.$matchEdge_$();
};
$goog$$.$labs$.userAgent.browser.$matchAndroidBrowser_$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Android") && !($goog$$.$labs$.userAgent.browser.$isChrome$() || $goog$$.$labs$.userAgent.browser.$isFirefox$() || $goog$$.$labs$.userAgent.browser.$isOpera$() || $goog$$.$labs$.userAgent.browser.$isSilk$());
};
$goog$$.$labs$.userAgent.browser.$isOpera$ = $goog$$.$labs$.userAgent.browser.$matchOpera_$;
$goog$$.$labs$.userAgent.browser.$isIE$ = $goog$$.$labs$.userAgent.browser.$matchIE_$;
$goog$$.$labs$.userAgent.browser.$isEdge$ = $goog$$.$labs$.userAgent.browser.$matchEdge_$;
$goog$$.$labs$.userAgent.browser.$isFirefox$ = $goog$$.$labs$.userAgent.browser.$matchFirefox_$;
$goog$$.$labs$.userAgent.browser.$isSafari$ = $goog$$.$labs$.userAgent.browser.$matchSafari_$;
$goog$$.$labs$.userAgent.browser.$isCoast$ = $goog$$.$labs$.userAgent.browser.$matchCoast_$;
$goog$$.$labs$.userAgent.browser.$isIosWebview$ = $goog$$.$labs$.userAgent.browser.$matchIosWebview_$;
$goog$$.$labs$.userAgent.browser.$isChrome$ = $goog$$.$labs$.userAgent.browser.$matchChrome_$;
$goog$$.$labs$.userAgent.browser.$isAndroidBrowser$ = $goog$$.$labs$.userAgent.browser.$matchAndroidBrowser_$;
$goog$$.$labs$.userAgent.browser.$isSilk$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Silk");
};
$goog$$.$labs$.userAgent.browser.$getVersion$ = function() {
  function $lookUpValueWithKeys$$($lookUpValueWithKeys$$) {
    $lookUpValueWithKeys$$ = $goog$$.$array$.find($lookUpValueWithKeys$$, $versionMapHasKey$$);
    return $versionMap$$[$lookUpValueWithKeys$$] || "";
  }
  var $tuple_userAgentString_versionTuples$$ = $goog$$.$labs$.userAgent.$util$.$getUserAgent$();
  if ($goog$$.$labs$.userAgent.browser.$isIE$()) {
    return $goog$$.$labs$.userAgent.browser.$getIEVersion_$($tuple_userAgentString_versionTuples$$);
  }
  var $tuple_userAgentString_versionTuples$$ = $goog$$.$labs$.userAgent.$util$.$extractVersionTuples$($tuple_userAgentString_versionTuples$$), $versionMap$$ = {};
  $goog$$.$array$.forEach($tuple_userAgentString_versionTuples$$, function($lookUpValueWithKeys$$) {
    $versionMap$$[$lookUpValueWithKeys$$[0]] = $lookUpValueWithKeys$$[1];
  });
  var $versionMapHasKey$$ = $goog$$.$partial$($goog$$.object.$containsKey$, $versionMap$$);
  return $goog$$.$labs$.userAgent.browser.$isOpera$() ? $lookUpValueWithKeys$$(["Version", "Opera"]) : $goog$$.$labs$.userAgent.browser.$isEdge$() ? $lookUpValueWithKeys$$(["Edge"]) : $goog$$.$labs$.userAgent.browser.$isChrome$() ? $lookUpValueWithKeys$$(["Chrome", "CriOS"]) : ($tuple_userAgentString_versionTuples$$ = $tuple_userAgentString_versionTuples$$[2]) && $tuple_userAgentString_versionTuples$$[1] || "";
};
$goog$$.$labs$.userAgent.browser.$isVersionOrHigher$ = function($version$jscomp$7$$) {
  return 0 <= $goog$$.$string$.$compareVersions$($goog$$.$labs$.userAgent.browser.$getVersion$(), $version$jscomp$7$$);
};
$goog$$.$labs$.userAgent.browser.$getIEVersion_$ = function($tridentVersion_userAgent$jscomp$5$$) {
  var $rv$jscomp$8_version$jscomp$8$$ = /rv: *([\d\.]*)/.exec($tridentVersion_userAgent$jscomp$5$$);
  if ($rv$jscomp$8_version$jscomp$8$$ && $rv$jscomp$8_version$jscomp$8$$[1]) {
    return $rv$jscomp$8_version$jscomp$8$$[1];
  }
  var $rv$jscomp$8_version$jscomp$8$$ = "", $msie$$ = /MSIE +([\d\.]+)/.exec($tridentVersion_userAgent$jscomp$5$$);
  if ($msie$$ && $msie$$[1]) {
    if ($tridentVersion_userAgent$jscomp$5$$ = /Trident\/(\d.\d)/.exec($tridentVersion_userAgent$jscomp$5$$), "7.0" == $msie$$[1]) {
      if ($tridentVersion_userAgent$jscomp$5$$ && $tridentVersion_userAgent$jscomp$5$$[1]) {
        switch($tridentVersion_userAgent$jscomp$5$$[1]) {
          case "4.0":
            $rv$jscomp$8_version$jscomp$8$$ = "8.0";
            break;
          case "5.0":
            $rv$jscomp$8_version$jscomp$8$$ = "9.0";
            break;
          case "6.0":
            $rv$jscomp$8_version$jscomp$8$$ = "10.0";
            break;
          case "7.0":
            $rv$jscomp$8_version$jscomp$8$$ = "11.0";
        }
      } else {
        $rv$jscomp$8_version$jscomp$8$$ = "7.0";
      }
    } else {
      $rv$jscomp$8_version$jscomp$8$$ = $msie$$[1];
    }
  }
  return $rv$jscomp$8_version$jscomp$8$$;
};
$goog$$.$labs$.userAgent.$engine$ = {};
$goog$$.$labs$.userAgent.$engine$.$isPresto$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Presto");
};
$goog$$.$labs$.userAgent.$engine$.$isTrident$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Trident") || $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("MSIE");
};
$goog$$.$labs$.userAgent.$engine$.$isEdge$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Edge");
};
$goog$$.$labs$.userAgent.$engine$.$isWebKit$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgentIgnoreCase$() && !$goog$$.$labs$.userAgent.$engine$.$isEdge$();
};
$goog$$.$labs$.userAgent.$engine$.$isGecko$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Gecko") && !$goog$$.$labs$.userAgent.$engine$.$isWebKit$() && !$goog$$.$labs$.userAgent.$engine$.$isTrident$() && !$goog$$.$labs$.userAgent.$engine$.$isEdge$();
};
$goog$$.$labs$.userAgent.$engine$.$getVersion$ = function() {
  var $browserTuple_tuples_userAgentString$jscomp$1$$ = $goog$$.$labs$.userAgent.$util$.$getUserAgent$();
  if ($browserTuple_tuples_userAgentString$jscomp$1$$) {
    var $browserTuple_tuples_userAgentString$jscomp$1$$ = $goog$$.$labs$.userAgent.$util$.$extractVersionTuples$($browserTuple_tuples_userAgentString$jscomp$1$$), $engineTuple$$ = $goog$$.$labs$.userAgent.$engine$.$getEngineTuple_$($browserTuple_tuples_userAgentString$jscomp$1$$);
    if ($engineTuple$$) {
      return "Gecko" == $engineTuple$$[0] ? $goog$$.$labs$.userAgent.$engine$.$getVersionForKey_$($browserTuple_tuples_userAgentString$jscomp$1$$) : $engineTuple$$[1];
    }
    var $browserTuple_tuples_userAgentString$jscomp$1$$ = $browserTuple_tuples_userAgentString$jscomp$1$$[0], $info$jscomp$1_match$jscomp$3$$;
    if ($browserTuple_tuples_userAgentString$jscomp$1$$ && ($info$jscomp$1_match$jscomp$3$$ = $browserTuple_tuples_userAgentString$jscomp$1$$[2]) && ($info$jscomp$1_match$jscomp$3$$ = /Trident\/([^\s;]+)/.exec($info$jscomp$1_match$jscomp$3$$))) {
      return $info$jscomp$1_match$jscomp$3$$[1];
    }
  }
  return "";
};
$goog$$.$labs$.userAgent.$engine$.$getEngineTuple_$ = function($tuples$jscomp$1$$) {
  if (!$goog$$.$labs$.userAgent.$engine$.$isEdge$()) {
    return $tuples$jscomp$1$$[1];
  }
  for (var $i$jscomp$58$$ = 0; $i$jscomp$58$$ < $tuples$jscomp$1$$.length; $i$jscomp$58$$++) {
    var $tuple$jscomp$2$$ = $tuples$jscomp$1$$[$i$jscomp$58$$];
    if ("Edge" == $tuple$jscomp$2$$[0]) {
      return $tuple$jscomp$2$$;
    }
  }
};
$goog$$.$labs$.userAgent.$engine$.$isVersionOrHigher$ = function($version$jscomp$9$$) {
  return 0 <= $goog$$.$string$.$compareVersions$($goog$$.$labs$.userAgent.$engine$.$getVersion$(), $version$jscomp$9$$);
};
$goog$$.$labs$.userAgent.$engine$.$getVersionForKey_$ = function($pair_tuples$jscomp$2$$) {
  return ($pair_tuples$jscomp$2$$ = $goog$$.$array$.find($pair_tuples$jscomp$2$$, function($pair_tuples$jscomp$2$$) {
    return "Firefox" == $pair_tuples$jscomp$2$$[0];
  })) && $pair_tuples$jscomp$2$$[1] || "";
};
$goog$$.$labs$.userAgent.platform = {};
$goog$$.$labs$.userAgent.platform.$isAndroid$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Android");
};
$goog$$.$labs$.userAgent.platform.$isIpod$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("iPod");
};
$goog$$.$labs$.userAgent.platform.$isIphone$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("iPhone") && !$goog$$.$labs$.userAgent.$util$.$matchUserAgent$("iPod") && !$goog$$.$labs$.userAgent.$util$.$matchUserAgent$("iPad");
};
$goog$$.$labs$.userAgent.platform.$isIpad$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("iPad");
};
$goog$$.$labs$.userAgent.platform.$isIos$ = function() {
  return $goog$$.$labs$.userAgent.platform.$isIphone$() || $goog$$.$labs$.userAgent.platform.$isIpad$() || $goog$$.$labs$.userAgent.platform.$isIpod$();
};
$goog$$.$labs$.userAgent.platform.$isMacintosh$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Macintosh");
};
$goog$$.$labs$.userAgent.platform.$isLinux$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Linux");
};
$goog$$.$labs$.userAgent.platform.$isWindows$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Windows");
};
$goog$$.$labs$.userAgent.platform.$isChromeOS$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("CrOS");
};
$goog$$.$labs$.userAgent.platform.$getVersion$ = function() {
  var $match$jscomp$4_userAgentString$jscomp$2$$ = $goog$$.$labs$.userAgent.$util$.$getUserAgent$();
  var $re$jscomp$3_version$jscomp$10$$ = "";
  $goog$$.$labs$.userAgent.platform.$isWindows$() ? ($re$jscomp$3_version$jscomp$10$$ = /Windows (?:NT|Phone) ([0-9.]+)/, $re$jscomp$3_version$jscomp$10$$ = ($match$jscomp$4_userAgentString$jscomp$2$$ = $re$jscomp$3_version$jscomp$10$$.exec($match$jscomp$4_userAgentString$jscomp$2$$)) ? $match$jscomp$4_userAgentString$jscomp$2$$[1] : "0.0") : $goog$$.$labs$.userAgent.platform.$isIos$() ? ($re$jscomp$3_version$jscomp$10$$ = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, $re$jscomp$3_version$jscomp$10$$ = 
  ($match$jscomp$4_userAgentString$jscomp$2$$ = $re$jscomp$3_version$jscomp$10$$.exec($match$jscomp$4_userAgentString$jscomp$2$$)) && $match$jscomp$4_userAgentString$jscomp$2$$[1].replace(/_/g, ".")) : $goog$$.$labs$.userAgent.platform.$isMacintosh$() ? ($re$jscomp$3_version$jscomp$10$$ = /Mac OS X ([0-9_.]+)/, $re$jscomp$3_version$jscomp$10$$ = ($match$jscomp$4_userAgentString$jscomp$2$$ = $re$jscomp$3_version$jscomp$10$$.exec($match$jscomp$4_userAgentString$jscomp$2$$)) ? $match$jscomp$4_userAgentString$jscomp$2$$[1].replace(/_/g, 
  ".") : "10") : $goog$$.$labs$.userAgent.platform.$isAndroid$() ? ($re$jscomp$3_version$jscomp$10$$ = /Android\s+([^\);]+)(\)|;)/, $re$jscomp$3_version$jscomp$10$$ = ($match$jscomp$4_userAgentString$jscomp$2$$ = $re$jscomp$3_version$jscomp$10$$.exec($match$jscomp$4_userAgentString$jscomp$2$$)) && $match$jscomp$4_userAgentString$jscomp$2$$[1]) : $goog$$.$labs$.userAgent.platform.$isChromeOS$() && ($re$jscomp$3_version$jscomp$10$$ = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, $re$jscomp$3_version$jscomp$10$$ = 
  ($match$jscomp$4_userAgentString$jscomp$2$$ = $re$jscomp$3_version$jscomp$10$$.exec($match$jscomp$4_userAgentString$jscomp$2$$)) && $match$jscomp$4_userAgentString$jscomp$2$$[1]);
  return $re$jscomp$3_version$jscomp$10$$ || "";
};
$goog$$.$labs$.userAgent.platform.$isVersionOrHigher$ = function($version$jscomp$11$$) {
  return 0 <= $goog$$.$string$.$compareVersions$($goog$$.$labs$.userAgent.platform.$getVersion$(), $version$jscomp$11$$);
};
$goog$$.$reflect$ = {};
$goog$$.$reflect$.object = function($type$jscomp$113$$, $object$jscomp$6$$) {
  return $object$jscomp$6$$;
};
$goog$$.$reflect$.$sinkValue$ = function($x$jscomp$77$$) {
  $goog$$.$reflect$.$sinkValue$[" "]($x$jscomp$77$$);
  return $x$jscomp$77$$;
};
$goog$$.$reflect$.$sinkValue$[" "] = $goog$$.$nullFunction$;
$goog$$.$reflect$.$canAccessProperty$ = function($obj$jscomp$74$$) {
  try {
    return $goog$$.$reflect$.$sinkValue$($obj$jscomp$74$$.nodeName), !0;
  } catch ($e$jscomp$10$$) {
  }
  return !1;
};
$goog$$.$reflect$.cache = function($cacheObj$$, $key$jscomp$65$$, $valueFn$$, $opt_keyFn_storedKey$$) {
  $opt_keyFn_storedKey$$ = $opt_keyFn_storedKey$$ ? $opt_keyFn_storedKey$$($key$jscomp$65$$) : $key$jscomp$65$$;
  return Object.prototype.hasOwnProperty.call($cacheObj$$, $opt_keyFn_storedKey$$) ? $cacheObj$$[$opt_keyFn_storedKey$$] : $cacheObj$$[$opt_keyFn_storedKey$$] = $valueFn$$($key$jscomp$65$$);
};
$goog$$.userAgent = {};
$goog$$.userAgent.$ASSUME_IE$ = !1;
$goog$$.userAgent.$ASSUME_EDGE$ = !1;
$goog$$.userAgent.$ASSUME_GECKO$ = !1;
$goog$$.userAgent.$ASSUME_WEBKIT$ = !1;
$goog$$.userAgent.$ASSUME_MOBILE_WEBKIT$ = !1;
$goog$$.userAgent.$ASSUME_OPERA$ = !1;
$goog$$.userAgent.$ASSUME_ANY_VERSION$ = !1;
$goog$$.userAgent.$BROWSER_KNOWN_$ = $goog$$.userAgent.$ASSUME_IE$ || $goog$$.userAgent.$ASSUME_EDGE$ || $goog$$.userAgent.$ASSUME_GECKO$ || $goog$$.userAgent.$ASSUME_MOBILE_WEBKIT$ || $goog$$.userAgent.$ASSUME_WEBKIT$ || $goog$$.userAgent.$ASSUME_OPERA$;
$goog$$.userAgent.$getUserAgentString$ = function() {
  return $goog$$.$labs$.userAgent.$util$.$getUserAgent$();
};
$goog$$.userAgent.$getNavigator$ = function() {
  return $goog$$.global.navigator || null;
};
$goog$$.userAgent.$OPERA$ = $goog$$.userAgent.$BROWSER_KNOWN_$ ? $goog$$.userAgent.$ASSUME_OPERA$ : $goog$$.$labs$.userAgent.browser.$isOpera$();
$goog$$.userAgent.$IE$ = $goog$$.userAgent.$BROWSER_KNOWN_$ ? $goog$$.userAgent.$ASSUME_IE$ : $goog$$.$labs$.userAgent.browser.$isIE$();
$goog$$.userAgent.$EDGE$ = $goog$$.userAgent.$BROWSER_KNOWN_$ ? $goog$$.userAgent.$ASSUME_EDGE$ : $goog$$.$labs$.userAgent.$engine$.$isEdge$();
$goog$$.userAgent.$EDGE_OR_IE$ = $goog$$.userAgent.$EDGE$ || $goog$$.userAgent.$IE$;
$goog$$.userAgent.$GECKO$ = $goog$$.userAgent.$BROWSER_KNOWN_$ ? $goog$$.userAgent.$ASSUME_GECKO$ : $goog$$.$labs$.userAgent.$engine$.$isGecko$();
$goog$$.userAgent.$WEBKIT$ = $goog$$.userAgent.$BROWSER_KNOWN_$ ? $goog$$.userAgent.$ASSUME_WEBKIT$ || $goog$$.userAgent.$ASSUME_MOBILE_WEBKIT$ : $goog$$.$labs$.userAgent.$engine$.$isWebKit$();
$goog$$.userAgent.$isMobile_$ = function() {
  return $goog$$.userAgent.$WEBKIT$ && $goog$$.$labs$.userAgent.$util$.$matchUserAgent$("Mobile");
};
$goog$$.userAgent.$MOBILE$ = $goog$$.userAgent.$ASSUME_MOBILE_WEBKIT$ || $goog$$.userAgent.$isMobile_$();
$goog$$.userAgent.$SAFARI$ = $goog$$.userAgent.$WEBKIT$;
$goog$$.userAgent.$determinePlatform_$ = function() {
  var $navigator$jscomp$2$$ = $goog$$.userAgent.$getNavigator$();
  return $navigator$jscomp$2$$ && $navigator$jscomp$2$$.platform || "";
};
$goog$$.userAgent.$PLATFORM$ = $goog$$.userAgent.$determinePlatform_$();
$goog$$.userAgent.$ASSUME_MAC$ = !1;
$goog$$.userAgent.$ASSUME_WINDOWS$ = !1;
$goog$$.userAgent.$ASSUME_LINUX$ = !1;
$goog$$.userAgent.$ASSUME_X11$ = !1;
$goog$$.userAgent.$ASSUME_ANDROID$ = !1;
$goog$$.userAgent.$ASSUME_IPHONE$ = !1;
$goog$$.userAgent.$ASSUME_IPAD$ = !1;
$goog$$.userAgent.$ASSUME_IPOD$ = !1;
$goog$$.userAgent.$PLATFORM_KNOWN_$ = $goog$$.userAgent.$ASSUME_MAC$ || $goog$$.userAgent.$ASSUME_WINDOWS$ || $goog$$.userAgent.$ASSUME_LINUX$ || $goog$$.userAgent.$ASSUME_X11$ || $goog$$.userAgent.$ASSUME_ANDROID$ || $goog$$.userAgent.$ASSUME_IPHONE$ || $goog$$.userAgent.$ASSUME_IPAD$ || $goog$$.userAgent.$ASSUME_IPOD$;
$goog$$.userAgent.$MAC$ = $goog$$.userAgent.$PLATFORM_KNOWN_$ ? $goog$$.userAgent.$ASSUME_MAC$ : $goog$$.$labs$.userAgent.platform.$isMacintosh$();
$goog$$.userAgent.$WINDOWS$ = $goog$$.userAgent.$PLATFORM_KNOWN_$ ? $goog$$.userAgent.$ASSUME_WINDOWS$ : $goog$$.$labs$.userAgent.platform.$isWindows$();
$goog$$.userAgent.$isLegacyLinux_$ = function() {
  return $goog$$.$labs$.userAgent.platform.$isLinux$() || $goog$$.$labs$.userAgent.platform.$isChromeOS$();
};
$goog$$.userAgent.$LINUX$ = $goog$$.userAgent.$PLATFORM_KNOWN_$ ? $goog$$.userAgent.$ASSUME_LINUX$ : $goog$$.userAgent.$isLegacyLinux_$();
$goog$$.userAgent.$isX11_$ = function() {
  var $navigator$jscomp$3$$ = $goog$$.userAgent.$getNavigator$();
  return !!$navigator$jscomp$3$$ && $goog$$.$string$.contains($navigator$jscomp$3$$.appVersion || "", "X11");
};
$goog$$.userAgent.$X11$ = $goog$$.userAgent.$PLATFORM_KNOWN_$ ? $goog$$.userAgent.$ASSUME_X11$ : $goog$$.userAgent.$isX11_$();
$goog$$.userAgent.ANDROID = $goog$$.userAgent.$PLATFORM_KNOWN_$ ? $goog$$.userAgent.$ASSUME_ANDROID$ : $goog$$.$labs$.userAgent.platform.$isAndroid$();
$goog$$.userAgent.$IPHONE$ = $goog$$.userAgent.$PLATFORM_KNOWN_$ ? $goog$$.userAgent.$ASSUME_IPHONE$ : $goog$$.$labs$.userAgent.platform.$isIphone$();
$goog$$.userAgent.$IPAD$ = $goog$$.userAgent.$PLATFORM_KNOWN_$ ? $goog$$.userAgent.$ASSUME_IPAD$ : $goog$$.$labs$.userAgent.platform.$isIpad$();
$goog$$.userAgent.$IPOD$ = $goog$$.userAgent.$PLATFORM_KNOWN_$ ? $goog$$.userAgent.$ASSUME_IPOD$ : $goog$$.$labs$.userAgent.platform.$isIpod$();
$goog$$.userAgent.IOS = $goog$$.userAgent.$PLATFORM_KNOWN_$ ? $goog$$.userAgent.$ASSUME_IPHONE$ || $goog$$.userAgent.$ASSUME_IPAD$ || $goog$$.userAgent.$ASSUME_IPOD$ : $goog$$.$labs$.userAgent.platform.$isIos$();
$goog$$.userAgent.$determineVersion_$ = function() {
  var $version$jscomp$12$$ = "", $arr$jscomp$62_docMode$$ = $goog$$.userAgent.$getVersionRegexResult_$();
  $arr$jscomp$62_docMode$$ && ($version$jscomp$12$$ = $arr$jscomp$62_docMode$$ ? $arr$jscomp$62_docMode$$[1] : "");
  return $goog$$.userAgent.$IE$ && ($arr$jscomp$62_docMode$$ = $goog$$.userAgent.$getDocumentMode_$(), null != $arr$jscomp$62_docMode$$ && $arr$jscomp$62_docMode$$ > parseFloat($version$jscomp$12$$)) ? String($arr$jscomp$62_docMode$$) : $version$jscomp$12$$;
};
$goog$$.userAgent.$getVersionRegexResult_$ = function() {
  var $userAgent$jscomp$6$$ = $goog$$.userAgent.$getUserAgentString$();
  if ($goog$$.userAgent.$GECKO$) {
    return /rv\:([^\);]+)(\)|;)/.exec($userAgent$jscomp$6$$);
  }
  if ($goog$$.userAgent.$EDGE$) {
    return /Edge\/([\d\.]+)/.exec($userAgent$jscomp$6$$);
  }
  if ($goog$$.userAgent.$IE$) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($userAgent$jscomp$6$$);
  }
  if ($goog$$.userAgent.$WEBKIT$) {
    return /WebKit\/(\S+)/.exec($userAgent$jscomp$6$$);
  }
  if ($goog$$.userAgent.$OPERA$) {
    return /(?:Version)[ \/]?(\S+)/.exec($userAgent$jscomp$6$$);
  }
};
$goog$$.userAgent.$getDocumentMode_$ = function() {
  var $doc$jscomp$5$$ = $goog$$.global.document;
  return $doc$jscomp$5$$ ? $doc$jscomp$5$$.documentMode : void 0;
};
$goog$$.userAgent.VERSION = $goog$$.userAgent.$determineVersion_$();
$goog$$.userAgent.compare = function($v1$jscomp$1$$, $v2$jscomp$1$$) {
  return $goog$$.$string$.$compareVersions$($v1$jscomp$1$$, $v2$jscomp$1$$);
};
$goog$$.userAgent.$isVersionOrHigherCache_$ = {};
$goog$$.userAgent.$isVersionOrHigher$ = function($version$jscomp$13$$) {
  return $goog$$.userAgent.$ASSUME_ANY_VERSION$ || $goog$$.$reflect$.cache($goog$$.userAgent.$isVersionOrHigherCache_$, $version$jscomp$13$$, function() {
    return 0 <= $goog$$.$string$.$compareVersions$($goog$$.userAgent.VERSION, $version$jscomp$13$$);
  });
};
$goog$$.userAgent.$isVersion$ = $goog$$.userAgent.$isVersionOrHigher$;
$goog$$.userAgent.$isDocumentModeOrHigher$ = function($documentMode$$) {
  return Number($goog$$.userAgent.$DOCUMENT_MODE$) >= $documentMode$$;
};
$goog$$.userAgent.$isDocumentMode$ = $goog$$.userAgent.$isDocumentModeOrHigher$;
var $JSCompiler_inline_result$jscomp$4$$;
var $doc$jscomp$inline_34$$ = $goog$$.global.document;
$JSCompiler_inline_result$jscomp$4$$ = $doc$jscomp$inline_34$$ && $goog$$.userAgent.$IE$ ? $goog$$.userAgent.$getDocumentMode_$() || ("CSS1Compat" == $doc$jscomp$inline_34$$.compatMode ? parseInt($goog$$.userAgent.VERSION, 10) : 5) : void 0;
$goog$$.userAgent.$DOCUMENT_MODE$ = $JSCompiler_inline_result$jscomp$4$$;
$goog$$.debug.$LOGGING_ENABLED$ = $goog$$.$DEBUG$;
$goog$$.debug.$FORCE_SLOPPY_STACKS$ = !1;
$goog$$.debug.$catchErrors$ = function($logFunc$$, $opt_cancel$$, $opt_target$jscomp$1_target$jscomp$61$$) {
  $opt_target$jscomp$1_target$jscomp$61$$ = $opt_target$jscomp$1_target$jscomp$61$$ || $goog$$.global;
  var $oldErrorHandler$$ = $opt_target$jscomp$1_target$jscomp$61$$.onerror, $retVal$$ = !!$opt_cancel$$;
  $goog$$.userAgent.$WEBKIT$ && !$goog$$.userAgent.$isVersionOrHigher$("535.3") && ($retVal$$ = !$retVal$$);
  $opt_target$jscomp$1_target$jscomp$61$$.onerror = function($opt_cancel$$, $opt_target$jscomp$1_target$jscomp$61$$, $line$$, $opt_col$$, $opt_error$jscomp$2$$) {
    $oldErrorHandler$$ && $oldErrorHandler$$($opt_cancel$$, $opt_target$jscomp$1_target$jscomp$61$$, $line$$, $opt_col$$, $opt_error$jscomp$2$$);
    $logFunc$$({message:$opt_cancel$$, fileName:$opt_target$jscomp$1_target$jscomp$61$$, $line$:$line$$, $col$:$opt_col$$, error:$opt_error$jscomp$2$$});
    return $retVal$$;
  };
};
$goog$$.debug.$expose$ = function($obj$jscomp$75$$, $opt_showFn$$) {
  if ("undefined" == typeof $obj$jscomp$75$$) {
    return "undefined";
  }
  if (null == $obj$jscomp$75$$) {
    return "NULL";
  }
  var $str$jscomp$63$$ = [], $x$jscomp$78$$;
  for ($x$jscomp$78$$ in $obj$jscomp$75$$) {
    if ($opt_showFn$$ || !$goog$$.$isFunction$($obj$jscomp$75$$[$x$jscomp$78$$])) {
      var $s$jscomp$16$$ = $x$jscomp$78$$ + " = ";
      try {
        $s$jscomp$16$$ += $obj$jscomp$75$$[$x$jscomp$78$$];
      } catch ($e$jscomp$11$$) {
        $s$jscomp$16$$ += "*** " + $e$jscomp$11$$ + " ***";
      }
      $str$jscomp$63$$.push($s$jscomp$16$$);
    }
  }
  return $str$jscomp$63$$.join("\n");
};
$goog$$.debug.$deepExpose$ = function($i$jscomp$59_obj$jscomp$76$$, $opt_showFn$jscomp$1$$) {
  var $str$jscomp$64$$ = [], $uidsToCleanup$$ = [], $ancestorUids$$ = {}, $helper$$ = function($i$jscomp$59_obj$jscomp$76$$, $space$$) {
    var $obj$jscomp$77$$ = $space$$ + "  ";
    try {
      if ($goog$$.$isDef$($i$jscomp$59_obj$jscomp$76$$)) {
        if ($goog$$.$isNull$($i$jscomp$59_obj$jscomp$76$$)) {
          $str$jscomp$64$$.push("NULL");
        } else {
          if ($goog$$.$isString$($i$jscomp$59_obj$jscomp$76$$)) {
            $str$jscomp$64$$.push('"' + $i$jscomp$59_obj$jscomp$76$$.replace(/\n/g, "\n" + $space$$) + '"');
          } else {
            if ($goog$$.$isFunction$($i$jscomp$59_obj$jscomp$76$$)) {
              $str$jscomp$64$$.push(String($i$jscomp$59_obj$jscomp$76$$).replace(/\n/g, "\n" + $space$$));
            } else {
              if ($goog$$.$isObject$($i$jscomp$59_obj$jscomp$76$$)) {
                $goog$$.$hasUid$($i$jscomp$59_obj$jscomp$76$$) || $uidsToCleanup$$.push($i$jscomp$59_obj$jscomp$76$$);
                var $uid$$ = $goog$$.$getUid$($i$jscomp$59_obj$jscomp$76$$);
                if ($ancestorUids$$[$uid$$]) {
                  $str$jscomp$64$$.push("*** reference loop detected (id=" + $uid$$ + ") ***");
                } else {
                  $ancestorUids$$[$uid$$] = !0;
                  $str$jscomp$64$$.push("{");
                  for (var $x$jscomp$79$$ in $i$jscomp$59_obj$jscomp$76$$) {
                    if ($opt_showFn$jscomp$1$$ || !$goog$$.$isFunction$($i$jscomp$59_obj$jscomp$76$$[$x$jscomp$79$$])) {
                      $str$jscomp$64$$.push("\n"), $str$jscomp$64$$.push($obj$jscomp$77$$), $str$jscomp$64$$.push($x$jscomp$79$$ + " = "), $helper$$($i$jscomp$59_obj$jscomp$76$$[$x$jscomp$79$$], $obj$jscomp$77$$);
                    }
                  }
                  $str$jscomp$64$$.push("\n" + $space$$ + "}");
                  delete $ancestorUids$$[$uid$$];
                }
              } else {
                $str$jscomp$64$$.push($i$jscomp$59_obj$jscomp$76$$);
              }
            }
          }
        }
      } else {
        $str$jscomp$64$$.push("undefined");
      }
    } catch ($e$jscomp$12$$) {
      $str$jscomp$64$$.push("*** " + $e$jscomp$12$$ + " ***");
    }
  };
  $helper$$($i$jscomp$59_obj$jscomp$76$$, "");
  for ($i$jscomp$59_obj$jscomp$76$$ = 0; $i$jscomp$59_obj$jscomp$76$$ < $uidsToCleanup$$.length; $i$jscomp$59_obj$jscomp$76$$++) {
    $goog$$.$removeUid$($uidsToCleanup$$[$i$jscomp$59_obj$jscomp$76$$]);
  }
  return $str$jscomp$64$$.join("");
};
$goog$$.debug.$exposeArray$ = function($arr$jscomp$63$$) {
  for (var $str$jscomp$66$$ = [], $i$jscomp$60$$ = 0; $i$jscomp$60$$ < $arr$jscomp$63$$.length; $i$jscomp$60$$++) {
    $goog$$.isArray($arr$jscomp$63$$[$i$jscomp$60$$]) ? $str$jscomp$66$$.push($goog$$.debug.$exposeArray$($arr$jscomp$63$$[$i$jscomp$60$$])) : $str$jscomp$66$$.push($arr$jscomp$63$$[$i$jscomp$60$$]);
  }
  return "[ " + $str$jscomp$66$$.join(", ") + " ]";
};
$goog$$.debug.$normalizeErrorObject$ = function($err$jscomp$4$$) {
  var $href$$ = $goog$$.$getObjectByName$("window.location.href");
  if ($goog$$.$isString$($err$jscomp$4$$)) {
    return {message:$err$jscomp$4$$, name:"Unknown error", lineNumber:"Not available", fileName:$href$$, stack:"Not available"};
  }
  var $threwError$$ = !1;
  try {
    var $lineNumber$$ = $err$jscomp$4$$.lineNumber || $err$jscomp$4$$.$line$ || "Not available";
  } catch ($e$jscomp$13$$) {
    $lineNumber$$ = "Not available", $threwError$$ = !0;
  }
  try {
    var $fileName$$ = $err$jscomp$4$$.fileName || $err$jscomp$4$$.filename || $err$jscomp$4$$.sourceURL || $goog$$.global.$googDebugFname || $href$$;
  } catch ($e$1$$) {
    $fileName$$ = "Not available", $threwError$$ = !0;
  }
  return !$threwError$$ && $err$jscomp$4$$.lineNumber && $err$jscomp$4$$.fileName && $err$jscomp$4$$.stack && $err$jscomp$4$$.message && $err$jscomp$4$$.name ? $err$jscomp$4$$ : {message:$err$jscomp$4$$.message || "Not available", name:$err$jscomp$4$$.name || "UnknownError", lineNumber:$lineNumber$$, fileName:$fileName$$, stack:$err$jscomp$4$$.stack || "Not available"};
};
$goog$$.debug.$enhanceError$ = function($err$jscomp$5_error$jscomp$4$$, $opt_message$jscomp$18$$) {
  $err$jscomp$5_error$jscomp$4$$ instanceof Error || ($err$jscomp$5_error$jscomp$4$$ = Error($err$jscomp$5_error$jscomp$4$$), Error.captureStackTrace && Error.captureStackTrace($err$jscomp$5_error$jscomp$4$$, $goog$$.debug.$enhanceError$));
  $err$jscomp$5_error$jscomp$4$$.stack || ($err$jscomp$5_error$jscomp$4$$.stack = $goog$$.debug.$getStacktrace$($goog$$.debug.$enhanceError$));
  if ($opt_message$jscomp$18$$) {
    for (var $x$jscomp$80$$ = 0; $err$jscomp$5_error$jscomp$4$$["message" + $x$jscomp$80$$];) {
      ++$x$jscomp$80$$;
    }
    $err$jscomp$5_error$jscomp$4$$["message" + $x$jscomp$80$$] = String($opt_message$jscomp$18$$);
  }
  return $err$jscomp$5_error$jscomp$4$$;
};
$goog$$.debug.$getStacktraceSimple$ = function($opt_depth$$) {
  if (!$goog$$.debug.$FORCE_SLOPPY_STACKS$) {
    var $sb$jscomp$8_stack$jscomp$1$$ = $goog$$.debug.$getNativeStackTrace_$($goog$$.debug.$getStacktraceSimple$);
    if ($sb$jscomp$8_stack$jscomp$1$$) {
      return $sb$jscomp$8_stack$jscomp$1$$;
    }
  }
  for (var $sb$jscomp$8_stack$jscomp$1$$ = [], $fn$jscomp$7$$ = arguments.callee.caller, $depth$jscomp$1$$ = 0; $fn$jscomp$7$$ && (!$opt_depth$$ || $depth$jscomp$1$$ < $opt_depth$$);) {
    $sb$jscomp$8_stack$jscomp$1$$.push($goog$$.debug.getFunctionName($fn$jscomp$7$$));
    $sb$jscomp$8_stack$jscomp$1$$.push("()\n");
    try {
      $fn$jscomp$7$$ = $fn$jscomp$7$$.caller;
    } catch ($e$jscomp$14$$) {
      $sb$jscomp$8_stack$jscomp$1$$.push("[exception trying to get caller]\n");
      break;
    }
    $depth$jscomp$1$$++;
    if ($depth$jscomp$1$$ >= $goog$$.debug.$MAX_STACK_DEPTH$) {
      $sb$jscomp$8_stack$jscomp$1$$.push("[...long stack...]");
      break;
    }
  }
  $opt_depth$$ && $depth$jscomp$1$$ >= $opt_depth$$ ? $sb$jscomp$8_stack$jscomp$1$$.push("[...reached max depth limit...]") : $sb$jscomp$8_stack$jscomp$1$$.push("[end]");
  return $sb$jscomp$8_stack$jscomp$1$$.join("");
};
$goog$$.debug.$MAX_STACK_DEPTH$ = 50;
$goog$$.debug.$getNativeStackTrace_$ = function($fn$jscomp$8_stack$jscomp$2$$) {
  var $tempErr$$ = Error();
  if (Error.captureStackTrace) {
    return Error.captureStackTrace($tempErr$$, $fn$jscomp$8_stack$jscomp$2$$), String($tempErr$$.stack);
  }
  try {
    throw $tempErr$$;
  } catch ($e$jscomp$15$$) {
    $tempErr$$ = $e$jscomp$15$$;
  }
  return ($fn$jscomp$8_stack$jscomp$2$$ = $tempErr$$.stack) ? String($fn$jscomp$8_stack$jscomp$2$$) : null;
};
$goog$$.debug.$getStacktrace$ = function($fn$jscomp$9$$) {
  var $stack$jscomp$3$$;
  $goog$$.debug.$FORCE_SLOPPY_STACKS$ || ($stack$jscomp$3$$ = $goog$$.debug.$getNativeStackTrace_$($fn$jscomp$9$$ || $goog$$.debug.$getStacktrace$));
  $stack$jscomp$3$$ || ($stack$jscomp$3$$ = $goog$$.debug.$getStacktraceHelper_$($fn$jscomp$9$$ || arguments.callee.caller, []));
  return $stack$jscomp$3$$;
};
$goog$$.debug.$getStacktraceHelper_$ = function($fn$jscomp$10$$, $visited$$) {
  var $sb$jscomp$9$$ = [];
  if ($goog$$.$array$.contains($visited$$, $fn$jscomp$10$$)) {
    $sb$jscomp$9$$.push("[...circular reference...]");
  } else {
    if ($fn$jscomp$10$$ && $visited$$.length < $goog$$.debug.$MAX_STACK_DEPTH$) {
      $sb$jscomp$9$$.push($goog$$.debug.getFunctionName($fn$jscomp$10$$) + "(");
      for (var $args$jscomp$4$$ = $fn$jscomp$10$$.arguments, $i$jscomp$61$$ = 0; $args$jscomp$4$$ && $i$jscomp$61$$ < $args$jscomp$4$$.length; $i$jscomp$61$$++) {
        0 < $i$jscomp$61$$ && $sb$jscomp$9$$.push(", ");
        var $arg$jscomp$6_argDesc$$ = $args$jscomp$4$$[$i$jscomp$61$$];
        switch(typeof $arg$jscomp$6_argDesc$$) {
          case "object":
            $arg$jscomp$6_argDesc$$ = $arg$jscomp$6_argDesc$$ ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            $arg$jscomp$6_argDesc$$ = String($arg$jscomp$6_argDesc$$);
            break;
          case "boolean":
            $arg$jscomp$6_argDesc$$ = $arg$jscomp$6_argDesc$$ ? "true" : "false";
            break;
          case "function":
            $arg$jscomp$6_argDesc$$ = ($arg$jscomp$6_argDesc$$ = $goog$$.debug.getFunctionName($arg$jscomp$6_argDesc$$)) ? $arg$jscomp$6_argDesc$$ : "[fn]";
            break;
          default:
            $arg$jscomp$6_argDesc$$ = typeof $arg$jscomp$6_argDesc$$;
        }
        40 < $arg$jscomp$6_argDesc$$.length && ($arg$jscomp$6_argDesc$$ = $arg$jscomp$6_argDesc$$.substr(0, 40) + "...");
        $sb$jscomp$9$$.push($arg$jscomp$6_argDesc$$);
      }
      $visited$$.push($fn$jscomp$10$$);
      $sb$jscomp$9$$.push(")\n");
      try {
        $sb$jscomp$9$$.push($goog$$.debug.$getStacktraceHelper_$($fn$jscomp$10$$.caller, $visited$$));
      } catch ($e$jscomp$16$$) {
        $sb$jscomp$9$$.push("[exception trying to get caller]\n");
      }
    } else {
      $fn$jscomp$10$$ ? $sb$jscomp$9$$.push("[...long stack...]") : $sb$jscomp$9$$.push("[end]");
    }
  }
  return $sb$jscomp$9$$.join("");
};
$goog$$.debug.$setFunctionResolver$ = function($resolver$jscomp$1$$) {
  $goog$$.debug.$fnNameResolver_$ = $resolver$jscomp$1$$;
};
$goog$$.debug.getFunctionName = function($fn$jscomp$11_functionSource$$) {
  if ($goog$$.debug.$fnNameCache_$[$fn$jscomp$11_functionSource$$]) {
    return $goog$$.debug.$fnNameCache_$[$fn$jscomp$11_functionSource$$];
  }
  if ($goog$$.debug.$fnNameResolver_$) {
    var $matches_name$jscomp$79$$ = $goog$$.debug.$fnNameResolver_$($fn$jscomp$11_functionSource$$);
    if ($matches_name$jscomp$79$$) {
      return $goog$$.debug.$fnNameCache_$[$fn$jscomp$11_functionSource$$] = $matches_name$jscomp$79$$;
    }
  }
  $fn$jscomp$11_functionSource$$ = String($fn$jscomp$11_functionSource$$);
  $goog$$.debug.$fnNameCache_$[$fn$jscomp$11_functionSource$$] || ($matches_name$jscomp$79$$ = /function ([^\(]+)/.exec($fn$jscomp$11_functionSource$$), $goog$$.debug.$fnNameCache_$[$fn$jscomp$11_functionSource$$] = $matches_name$jscomp$79$$ ? $matches_name$jscomp$79$$[1] : "[Anonymous]");
  return $goog$$.debug.$fnNameCache_$[$fn$jscomp$11_functionSource$$];
};
$goog$$.debug.$makeWhitespaceVisible$ = function($string$jscomp$5$$) {
  return $string$jscomp$5$$.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
};
$goog$$.debug.$runtimeType$ = function($value$jscomp$99$$) {
  return $value$jscomp$99$$ instanceof Function ? $value$jscomp$99$$.displayName || $value$jscomp$99$$.name || "unknown type name" : $value$jscomp$99$$ instanceof Object ? $value$jscomp$99$$.constructor.displayName || $value$jscomp$99$$.constructor.name || Object.prototype.toString.call($value$jscomp$99$$) : null === $value$jscomp$99$$ ? "null" : typeof $value$jscomp$99$$;
};
$goog$$.debug.$fnNameCache_$ = {};
$goog$$.debug.$LogRecord$ = function($level$jscomp$9$$, $msg$jscomp$1$$, $loggerName$$, $opt_time$$, $opt_sequenceNumber$$) {
  "number" == typeof $opt_sequenceNumber$$ || $goog$$.debug.$LogRecord$.$a$++;
  $opt_time$$ || $goog$$.now();
  this.$b$ = $msg$jscomp$1$$;
  delete this.$a$;
};
$goog$$.debug.$LogRecord$.prototype.$a$ = null;
$goog$$.debug.$LogRecord$.$b$ = !0;
$goog$$.debug.$LogRecord$.$a$ = 0;
$goog$$.debug.$LogRecord$.prototype.getMessage = function() {
  return this.$b$;
};
$goog$$.debug.$LogBuffer$ = function() {
  $goog$$.$asserts$.assert(!1, "Cannot use goog.debug.LogBuffer without defining goog.debug.LogBuffer.CAPACITY.");
  this.clear();
};
$goog$$.debug.$LogBuffer$.$getInstance$ = function() {
  $goog$$.debug.$LogBuffer$.$instance_$ || ($goog$$.debug.$LogBuffer$.$instance_$ = new $goog$$.debug.$LogBuffer$);
  return $goog$$.debug.$LogBuffer$.$instance_$;
};
$goog$$.debug.$LogBuffer$.$a$ = 0;
$goog$$.debug.$LogBuffer$.$b$ = function() {
  return !1;
};
$goog$$.debug.$LogBuffer$.prototype.clear = function() {
};
$goog$$.debug.$Logger$ = function($name$jscomp$80$$) {
  this.$g$ = $name$jscomp$80$$;
  this.$a$ = this.$f$ = this.$b$ = this.$c$ = null;
};
$goog$$.debug.$Logger$.$ROOT_LOGGER_NAME$ = "";
$goog$$.debug.$Logger$.$b$ = !0;
$goog$$.debug.$Logger$.$Level$ = function($name$jscomp$81$$, $value$jscomp$100$$) {
  this.name = $name$jscomp$81$$;
  this.value = $value$jscomp$100$$;
};
$goog$$.debug.$Logger$.$Level$.prototype.toString = function() {
  return this.name;
};
$goog$$.debug.$Logger$.$Level$.$l$ = new $goog$$.debug.$Logger$.$Level$("OFF", Infinity);
$goog$$.debug.$Logger$.$Level$.$s$ = new $goog$$.debug.$Logger$.$Level$("SHOUT", 1200);
$goog$$.debug.$Logger$.$Level$.$f$ = new $goog$$.debug.$Logger$.$Level$("SEVERE", 1000);
$goog$$.debug.$Logger$.$Level$.$i$ = new $goog$$.debug.$Logger$.$Level$("WARNING", 900);
$goog$$.debug.$Logger$.$Level$.$h$ = new $goog$$.debug.$Logger$.$Level$("INFO", 800);
$goog$$.debug.$Logger$.$Level$.$b$ = new $goog$$.debug.$Logger$.$Level$("CONFIG", 700);
$goog$$.debug.$Logger$.$Level$.$g$ = new $goog$$.debug.$Logger$.$Level$("FINE", 500);
$goog$$.debug.$Logger$.$Level$.$m$ = new $goog$$.debug.$Logger$.$Level$("FINER", 400);
$goog$$.debug.$Logger$.$Level$.$o$ = new $goog$$.debug.$Logger$.$Level$("FINEST", 300);
$goog$$.debug.$Logger$.$Level$.ALL = new $goog$$.debug.$Logger$.$Level$("ALL", 0);
$goog$$.debug.$Logger$.$Level$.$c$ = [$goog$$.debug.$Logger$.$Level$.$l$, $goog$$.debug.$Logger$.$Level$.$s$, $goog$$.debug.$Logger$.$Level$.$f$, $goog$$.debug.$Logger$.$Level$.$i$, $goog$$.debug.$Logger$.$Level$.$h$, $goog$$.debug.$Logger$.$Level$.$b$, $goog$$.debug.$Logger$.$Level$.$g$, $goog$$.debug.$Logger$.$Level$.$m$, $goog$$.debug.$Logger$.$Level$.$o$, $goog$$.debug.$Logger$.$Level$.ALL];
$goog$$.debug.$Logger$.$Level$.$a$ = null;
$goog$$.debug.$Logger$.$Level$.$j$ = function() {
  $goog$$.debug.$Logger$.$Level$.$a$ = {};
  for (var $i$jscomp$63$$ = 0, $level$jscomp$13$$; $level$jscomp$13$$ = $goog$$.debug.$Logger$.$Level$.$c$[$i$jscomp$63$$]; $i$jscomp$63$$++) {
    $goog$$.debug.$Logger$.$Level$.$a$[$level$jscomp$13$$.value] = $level$jscomp$13$$, $goog$$.debug.$Logger$.$Level$.$a$[$level$jscomp$13$$.name] = $level$jscomp$13$$;
  }
};
$goog$$.debug.$Logger$.$Level$.$u$ = function($name$jscomp$82$$) {
  $goog$$.debug.$Logger$.$Level$.$a$ || $goog$$.debug.$Logger$.$Level$.$j$();
  return $goog$$.debug.$Logger$.$Level$.$a$[$name$jscomp$82$$] || null;
};
$goog$$.debug.$Logger$.$Level$.$v$ = function($value$jscomp$101$$) {
  $goog$$.debug.$Logger$.$Level$.$a$ || $goog$$.debug.$Logger$.$Level$.$j$();
  if ($value$jscomp$101$$ in $goog$$.debug.$Logger$.$Level$.$a$) {
    return $goog$$.debug.$Logger$.$Level$.$a$[$value$jscomp$101$$];
  }
  for (var $i$jscomp$64$$ = 0; $i$jscomp$64$$ < $goog$$.debug.$Logger$.$Level$.$c$.length; ++$i$jscomp$64$$) {
    var $level$jscomp$14$$ = $goog$$.debug.$Logger$.$Level$.$c$[$i$jscomp$64$$];
    if ($level$jscomp$14$$.value <= $value$jscomp$101$$) {
      return $level$jscomp$14$$;
    }
  }
  return null;
};
$goog$$.debug.$Logger$.$getLogger$ = function($name$jscomp$83$$) {
  return $goog$$.debug.$LogManager$.$getLogger$($name$jscomp$83$$);
};
$goog$$.debug.$Logger$.$a$ = function($msg$jscomp$5$$) {
  $goog$$.global.console && ($goog$$.global.console.timeStamp ? $goog$$.global.console.timeStamp($msg$jscomp$5$$) : $goog$$.global.console.markTimeline && $goog$$.global.console.markTimeline($msg$jscomp$5$$));
  $goog$$.global.msWriteProfilerMark && $goog$$.global.msWriteProfilerMark($msg$jscomp$5$$);
};
$goog$$.debug.$Logger$.prototype.$addHandler$ = function($handler$jscomp$10$$) {
  $goog$$.debug.$LOGGING_ENABLED$ && (this.$a$ || (this.$a$ = []), this.$a$.push($handler$jscomp$10$$));
};
$goog$$.debug.$Logger$.prototype.$removeHandler$ = function($handler$jscomp$11$$) {
  if ($goog$$.debug.$LOGGING_ENABLED$) {
    var $handlers$$ = this.$a$;
    return !!$handlers$$ && $goog$$.$array$.remove($handlers$$, $handler$jscomp$11$$);
  }
  return !1;
};
$goog$$.debug.$Logger$.prototype.getChildren = function() {
  this.$f$ || (this.$f$ = {});
  return this.$f$;
};
var $JSCompiler_StaticMethods_getEffectiveLevel$$ = function($JSCompiler_StaticMethods_getEffectiveLevel$self$$) {
  if (!$goog$$.debug.$LOGGING_ENABLED$) {
    return $goog$$.debug.$Logger$.$Level$.$l$;
  }
  if ($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$b$) {
    return $JSCompiler_StaticMethods_getEffectiveLevel$self$$.$b$;
  }
  if ($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$c$) {
    return $JSCompiler_StaticMethods_getEffectiveLevel$$($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$c$);
  }
  $goog$$.$asserts$.$fail$("Root logger has no level set.");
  return null;
};
$JSCompiler_prototypeAlias$$ = $goog$$.debug.$Logger$.prototype;
$JSCompiler_prototypeAlias$$.log = function($level$jscomp$17_logRecord$jscomp$inline_40$$, $handler$jscomp$inline_118_msg$jscomp$6$$, $opt_exception_target$jscomp$inline_44$$) {
  if ($goog$$.debug.$LOGGING_ENABLED$ && $goog$$.debug.$LOGGING_ENABLED$ && $level$jscomp$17_logRecord$jscomp$inline_40$$.value >= $JSCompiler_StaticMethods_getEffectiveLevel$$(this).value) {
    for ($goog$$.$isFunction$($handler$jscomp$inline_118_msg$jscomp$6$$) && ($handler$jscomp$inline_118_msg$jscomp$6$$ = $handler$jscomp$inline_118_msg$jscomp$6$$()), $level$jscomp$17_logRecord$jscomp$inline_40$$ = new $goog$$.debug.$LogRecord$($level$jscomp$17_logRecord$jscomp$inline_40$$, String($handler$jscomp$inline_118_msg$jscomp$6$$), this.$g$), $opt_exception_target$jscomp$inline_44$$ && ($level$jscomp$17_logRecord$jscomp$inline_40$$.$a$ = $opt_exception_target$jscomp$inline_44$$), $goog$$.debug.$Logger$.$a$("log:" + 
    $level$jscomp$17_logRecord$jscomp$inline_40$$.getMessage()), $opt_exception_target$jscomp$inline_44$$ = this; $opt_exception_target$jscomp$inline_44$$;) {
      var $JSCompiler_StaticMethods_callPublish_$self$jscomp$inline_115$$ = $opt_exception_target$jscomp$inline_44$$, $logRecord$jscomp$inline_116$$ = $level$jscomp$17_logRecord$jscomp$inline_40$$;
      if ($JSCompiler_StaticMethods_callPublish_$self$jscomp$inline_115$$.$a$) {
        for (var $i$jscomp$inline_117$$ = 0; $handler$jscomp$inline_118_msg$jscomp$6$$ = $JSCompiler_StaticMethods_callPublish_$self$jscomp$inline_115$$.$a$[$i$jscomp$inline_117$$]; $i$jscomp$inline_117$$++) {
          $handler$jscomp$inline_118_msg$jscomp$6$$($logRecord$jscomp$inline_116$$);
        }
      }
      $opt_exception_target$jscomp$inline_44$$ = $opt_exception_target$jscomp$inline_44$$.$c$;
    }
  }
};
$JSCompiler_prototypeAlias$$.$warning$ = function($msg$jscomp$10$$, $opt_exception$jscomp$4$$) {
  $goog$$.debug.$LOGGING_ENABLED$ && this.log($goog$$.debug.$Logger$.$Level$.$i$, $msg$jscomp$10$$, $opt_exception$jscomp$4$$);
};
$JSCompiler_prototypeAlias$$.info = function($msg$jscomp$11$$, $opt_exception$jscomp$5$$) {
  $goog$$.debug.$LOGGING_ENABLED$ && this.log($goog$$.debug.$Logger$.$Level$.$h$, $msg$jscomp$11$$, $opt_exception$jscomp$5$$);
};
$JSCompiler_prototypeAlias$$.config = function($msg$jscomp$12$$, $opt_exception$jscomp$6$$) {
  $goog$$.debug.$LOGGING_ENABLED$ && this.log($goog$$.debug.$Logger$.$Level$.$b$, $msg$jscomp$12$$, $opt_exception$jscomp$6$$);
};
$JSCompiler_prototypeAlias$$.$fine$ = function($msg$jscomp$13$$, $opt_exception$jscomp$7$$) {
  $goog$$.debug.$LOGGING_ENABLED$ && this.log($goog$$.debug.$Logger$.$Level$.$g$, $msg$jscomp$13$$, $opt_exception$jscomp$7$$);
};
$goog$$.debug.$LogManager$ = {};
$goog$$.debug.$LogManager$.$loggers_$ = {};
$goog$$.debug.$LogManager$.$rootLogger_$ = null;
$goog$$.debug.$LogManager$.initialize = function() {
  $goog$$.debug.$LogManager$.$rootLogger_$ || ($goog$$.debug.$LogManager$.$rootLogger_$ = new $goog$$.debug.$Logger$($goog$$.debug.$Logger$.$ROOT_LOGGER_NAME$), $goog$$.debug.$LogManager$.$loggers_$[$goog$$.debug.$Logger$.$ROOT_LOGGER_NAME$] = $goog$$.debug.$LogManager$.$rootLogger_$, $goog$$.debug.$LOGGING_ENABLED$ && ($goog$$.debug.$LogManager$.$rootLogger_$.$b$ = $goog$$.debug.$Logger$.$Level$.$b$));
};
$goog$$.debug.$LogManager$.$getLoggers$ = function() {
  return $goog$$.debug.$LogManager$.$loggers_$;
};
$goog$$.debug.$LogManager$.$getRoot$ = function() {
  $goog$$.debug.$LogManager$.initialize();
  return $goog$$.debug.$LogManager$.$rootLogger_$;
};
$goog$$.debug.$LogManager$.$getLogger$ = function($name$jscomp$85$$) {
  $goog$$.debug.$LogManager$.initialize();
  return $goog$$.debug.$LogManager$.$loggers_$[$name$jscomp$85$$] || $goog$$.debug.$LogManager$.$createLogger_$($name$jscomp$85$$);
};
$goog$$.debug.$LogManager$.$createFunctionForCatchErrors$ = function($opt_logger$$) {
  return function($info$jscomp$2$$) {
    var $JSCompiler_StaticMethods_severe$self$jscomp$inline_51$$ = $opt_logger$$ || $goog$$.debug.$LogManager$.$getRoot$();
    $goog$$.debug.$LOGGING_ENABLED$ && $JSCompiler_StaticMethods_severe$self$jscomp$inline_51$$.log($goog$$.debug.$Logger$.$Level$.$f$, "Error: " + $info$jscomp$2$$.message + " (" + $info$jscomp$2$$.fileName + " @ Line: " + $info$jscomp$2$$.$line$ + ")", void 0);
  };
};
$goog$$.debug.$LogManager$.$createLogger_$ = function($name$jscomp$86$$) {
  var $logger$jscomp$2$$ = new $goog$$.debug.$Logger$($name$jscomp$86$$), $lastDotIndex_parentLogger$$ = $name$jscomp$86$$.lastIndexOf("."), $leafName$$ = $name$jscomp$86$$.substr($lastDotIndex_parentLogger$$ + 1), $lastDotIndex_parentLogger$$ = $goog$$.debug.$LogManager$.$getLogger$($name$jscomp$86$$.substr(0, $lastDotIndex_parentLogger$$));
  $lastDotIndex_parentLogger$$.getChildren()[$leafName$$] = $logger$jscomp$2$$;
  $logger$jscomp$2$$.$c$ = $lastDotIndex_parentLogger$$;
  return $goog$$.debug.$LogManager$.$loggers_$[$name$jscomp$86$$] = $logger$jscomp$2$$;
};
$goog$$.log = {};
$goog$$.log.$ENABLED$ = $goog$$.debug.$LOGGING_ENABLED$;
$goog$$.log.$ROOT_LOGGER_NAME$ = $goog$$.debug.$Logger$.$ROOT_LOGGER_NAME$;
$goog$$.log.$Logger$ = $goog$$.debug.$Logger$;
$goog$$.log.$Level$ = $goog$$.debug.$Logger$.$Level$;
$goog$$.log.$LogRecord$ = $goog$$.debug.$LogRecord$;
$goog$$.log.$getLogger$ = function($logger$jscomp$3_name$jscomp$87$$, $opt_level$jscomp$1$$) {
  return $goog$$.log.$ENABLED$ ? ($logger$jscomp$3_name$jscomp$87$$ = $goog$$.debug.$LogManager$.$getLogger$($logger$jscomp$3_name$jscomp$87$$), $opt_level$jscomp$1$$ && $logger$jscomp$3_name$jscomp$87$$ && $goog$$.debug.$LOGGING_ENABLED$ && ($logger$jscomp$3_name$jscomp$87$$.$b$ = $opt_level$jscomp$1$$), $logger$jscomp$3_name$jscomp$87$$) : null;
};
$goog$$.log.$addHandler$ = function($logger$jscomp$4$$, $handler$jscomp$14$$) {
  $goog$$.log.$ENABLED$ && $logger$jscomp$4$$ && $logger$jscomp$4$$.$addHandler$($handler$jscomp$14$$);
};
$goog$$.log.$removeHandler$ = function($logger$jscomp$5$$, $handler$jscomp$15$$) {
  return $goog$$.log.$ENABLED$ && $logger$jscomp$5$$ ? $logger$jscomp$5$$.$removeHandler$($handler$jscomp$15$$) : !1;
};
$goog$$.log.log = function($logger$jscomp$6$$, $level$jscomp$19$$, $msg$jscomp$16$$, $opt_exception$jscomp$10$$) {
  $goog$$.log.$ENABLED$ && $logger$jscomp$6$$ && $logger$jscomp$6$$.log($level$jscomp$19$$, $msg$jscomp$16$$, $opt_exception$jscomp$10$$);
};
$goog$$.log.error = function($logger$jscomp$7$$, $msg$jscomp$17$$, $opt_exception$jscomp$11$$) {
  $goog$$.log.$ENABLED$ && $logger$jscomp$7$$ && $goog$$.debug.$LOGGING_ENABLED$ && $logger$jscomp$7$$.log($goog$$.debug.$Logger$.$Level$.$f$, $msg$jscomp$17$$, $opt_exception$jscomp$11$$);
};
$goog$$.log.$warning$ = function($logger$jscomp$8$$, $msg$jscomp$18$$, $opt_exception$jscomp$12$$) {
  $goog$$.log.$ENABLED$ && $logger$jscomp$8$$ && $logger$jscomp$8$$.$warning$($msg$jscomp$18$$, $opt_exception$jscomp$12$$);
};
$goog$$.log.info = function($logger$jscomp$9$$, $msg$jscomp$19$$, $opt_exception$jscomp$13$$) {
  $goog$$.log.$ENABLED$ && $logger$jscomp$9$$ && $logger$jscomp$9$$.info($msg$jscomp$19$$, $opt_exception$jscomp$13$$);
};
$goog$$.log.$fine$ = function($logger$jscomp$10$$, $msg$jscomp$20$$, $opt_exception$jscomp$14$$) {
  $goog$$.log.$ENABLED$ && $logger$jscomp$10$$ && $logger$jscomp$10$$.$fine$($msg$jscomp$20$$, $opt_exception$jscomp$14$$);
};
$goog$$.$functions$ = {};
$goog$$.$functions$.$constant$ = function($retValue$$) {
  return function() {
    return $retValue$$;
  };
};
$goog$$.$functions$.$FALSE$ = $goog$$.$functions$.$constant$(!1);
$goog$$.$functions$.$TRUE$ = $goog$$.$functions$.$constant$(!0);
$goog$$.$functions$.$NULL$ = $goog$$.$functions$.$constant$(null);
$goog$$.$functions$.identity = function($opt_returnValue$jscomp$1$$) {
  return $opt_returnValue$jscomp$1$$;
};
$goog$$.$functions$.error = function($message$jscomp$39$$) {
  return function() {
    throw Error($message$jscomp$39$$);
  };
};
$goog$$.$functions$.$fail$ = function($err$jscomp$6$$) {
  return function() {
    throw $err$jscomp$6$$;
  };
};
$goog$$.$functions$.lock = function($f$jscomp$32$$, $opt_numArgs$$) {
  $opt_numArgs$$ = $opt_numArgs$$ || 0;
  return function() {
    return $f$jscomp$32$$.apply(this, Array.prototype.slice.call(arguments, 0, $opt_numArgs$$));
  };
};
$goog$$.$functions$.$nth$ = function($n$jscomp$8$$) {
  return function() {
    return arguments[$n$jscomp$8$$];
  };
};
$goog$$.$functions$.$partialRight$ = function($fn$jscomp$12$$, $var_args$jscomp$75$$) {
  var $rightArgs$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $var_args$jscomp$75$$ = Array.prototype.slice.call(arguments);
    $var_args$jscomp$75$$.push.apply($var_args$jscomp$75$$, $rightArgs$$);
    return $fn$jscomp$12$$.apply(this, $var_args$jscomp$75$$);
  };
};
$goog$$.$functions$.$withReturnValue$ = function($f$jscomp$33$$, $retValue$jscomp$1$$) {
  return $goog$$.$functions$.$sequence$($f$jscomp$33$$, $goog$$.$functions$.$constant$($retValue$jscomp$1$$));
};
$goog$$.$functions$.$equalTo$ = function($value$jscomp$102$$, $opt_useLooseComparison$$) {
  return function($other$jscomp$3$$) {
    return $opt_useLooseComparison$$ ? $value$jscomp$102$$ == $other$jscomp$3$$ : $value$jscomp$102$$ === $other$jscomp$3$$;
  };
};
$goog$$.$functions$.$compose$ = function($fn$jscomp$13$$, $var_args$jscomp$76$$) {
  var $functions$$ = arguments, $length$jscomp$20$$ = $functions$$.length;
  return function() {
    var $fn$jscomp$13$$;
    $length$jscomp$20$$ && ($fn$jscomp$13$$ = $functions$$[$length$jscomp$20$$ - 1].apply(this, arguments));
    for (var $var_args$jscomp$76$$ = $length$jscomp$20$$ - 2; 0 <= $var_args$jscomp$76$$; $var_args$jscomp$76$$--) {
      $fn$jscomp$13$$ = $functions$$[$var_args$jscomp$76$$].call(this, $fn$jscomp$13$$);
    }
    return $fn$jscomp$13$$;
  };
};
$goog$$.$functions$.$sequence$ = function($var_args$jscomp$77$$) {
  var $functions$jscomp$1$$ = arguments, $length$jscomp$21$$ = $functions$jscomp$1$$.length;
  return function() {
    for (var $var_args$jscomp$77$$, $i$jscomp$68$$ = 0; $i$jscomp$68$$ < $length$jscomp$21$$; $i$jscomp$68$$++) {
      $var_args$jscomp$77$$ = $functions$jscomp$1$$[$i$jscomp$68$$].apply(this, arguments);
    }
    return $var_args$jscomp$77$$;
  };
};
$goog$$.$functions$.$and$ = function($var_args$jscomp$78$$) {
  var $functions$jscomp$2$$ = arguments, $length$jscomp$22$$ = $functions$jscomp$2$$.length;
  return function() {
    for (var $var_args$jscomp$78$$ = 0; $var_args$jscomp$78$$ < $length$jscomp$22$$; $var_args$jscomp$78$$++) {
      if (!$functions$jscomp$2$$[$var_args$jscomp$78$$].apply(this, arguments)) {
        return !1;
      }
    }
    return !0;
  };
};
$goog$$.$functions$.$or$ = function($var_args$jscomp$79$$) {
  var $functions$jscomp$3$$ = arguments, $length$jscomp$23$$ = $functions$jscomp$3$$.length;
  return function() {
    for (var $var_args$jscomp$79$$ = 0; $var_args$jscomp$79$$ < $length$jscomp$23$$; $var_args$jscomp$79$$++) {
      if ($functions$jscomp$3$$[$var_args$jscomp$79$$].apply(this, arguments)) {
        return !0;
      }
    }
    return !1;
  };
};
$goog$$.$functions$.$not$ = function($f$jscomp$34$$) {
  return function() {
    return !$f$jscomp$34$$.apply(this, arguments);
  };
};
$goog$$.$functions$.create = function($constructor$jscomp$1$$, $var_args$jscomp$80$$) {
  var $obj$jscomp$78_temp$$ = function() {
  };
  $obj$jscomp$78_temp$$.prototype = $constructor$jscomp$1$$.prototype;
  $obj$jscomp$78_temp$$ = new $obj$jscomp$78_temp$$;
  $constructor$jscomp$1$$.apply($obj$jscomp$78_temp$$, Array.prototype.slice.call(arguments, 1));
  return $obj$jscomp$78_temp$$;
};
$goog$$.$functions$.$CACHE_RETURN_VALUE$ = !0;
$goog$$.$functions$.$cacheReturnValue$ = function($fn$jscomp$14$$) {
  var $called$$ = !1, $value$jscomp$103$$;
  return function() {
    if (!$goog$$.$functions$.$CACHE_RETURN_VALUE$) {
      return $fn$jscomp$14$$();
    }
    $called$$ || ($value$jscomp$103$$ = $fn$jscomp$14$$(), $called$$ = !0);
    return $value$jscomp$103$$;
  };
};
$goog$$.$functions$.once = function($f$jscomp$35$$) {
  var $inner$$ = $f$jscomp$35$$;
  return function() {
    if ($inner$$) {
      var $f$jscomp$35$$ = $inner$$;
      $inner$$ = null;
      $f$jscomp$35$$();
    }
  };
};
$goog$$.$functions$.$debounce$ = function($f$jscomp$36$$, $interval$$, $opt_scope$$) {
  var $timeout$$ = 0;
  return function($var_args$jscomp$81$$) {
    $goog$$.global.clearTimeout($timeout$$);
    var $args$jscomp$5$$ = arguments;
    $timeout$$ = $goog$$.global.setTimeout(function() {
      $f$jscomp$36$$.apply($opt_scope$$, $args$jscomp$5$$);
    }, $interval$$);
  };
};
$goog$$.$functions$.$throttle$ = function($f$jscomp$37$$, $interval$jscomp$1$$, $opt_scope$jscomp$1$$) {
  var $timeout$jscomp$1$$ = 0, $shouldFire$$ = !1, $args$jscomp$6$$ = [], $handleTimeout$$ = function() {
    $timeout$jscomp$1$$ = 0;
    $shouldFire$$ && ($shouldFire$$ = !1, $fire$$());
  }, $fire$$ = function() {
    $timeout$jscomp$1$$ = $goog$$.global.setTimeout($handleTimeout$$, $interval$jscomp$1$$);
    $f$jscomp$37$$.apply($opt_scope$jscomp$1$$, $args$jscomp$6$$);
  };
  return function($f$jscomp$37$$) {
    $args$jscomp$6$$ = arguments;
    $timeout$jscomp$1$$ ? $shouldFire$$ = !0 : $fire$$();
  };
};
$goog$$.$functions$.$rateLimit$ = function($f$jscomp$38$$, $interval$jscomp$2$$, $opt_scope$jscomp$2$$) {
  var $timeout$jscomp$2$$ = 0, $handleTimeout$jscomp$1$$ = function() {
    $timeout$jscomp$2$$ = 0;
  };
  return function($var_args$jscomp$83$$) {
    $timeout$jscomp$2$$ || ($timeout$jscomp$2$$ = $goog$$.global.setTimeout($handleTimeout$jscomp$1$$, $interval$jscomp$2$$), $f$jscomp$38$$.apply($opt_scope$jscomp$2$$, arguments));
  };
};
$goog$$.$math$ = {};
$goog$$.$math$.$randomInt$ = function($a$jscomp$9$$) {
  return Math.floor(Math.random() * $a$jscomp$9$$);
};
$goog$$.$math$.$uniformRandom$ = function($a$jscomp$10$$, $b$jscomp$8$$) {
  return $a$jscomp$10$$ + Math.random() * ($b$jscomp$8$$ - $a$jscomp$10$$);
};
$goog$$.$math$.$clamp$ = function($value$jscomp$104$$, $min$$, $max$$) {
  return Math.min(Math.max($value$jscomp$104$$, $min$$), $max$$);
};
$goog$$.$math$.$modulo$ = function($a$jscomp$11_r$jscomp$2$$, $b$jscomp$9$$) {
  $a$jscomp$11_r$jscomp$2$$ %= $b$jscomp$9$$;
  return 0 > $a$jscomp$11_r$jscomp$2$$ * $b$jscomp$9$$ ? $a$jscomp$11_r$jscomp$2$$ + $b$jscomp$9$$ : $a$jscomp$11_r$jscomp$2$$;
};
$goog$$.$math$.$lerp$ = function($a$jscomp$12$$, $b$jscomp$10$$, $x$jscomp$81$$) {
  return $a$jscomp$12$$ + $x$jscomp$81$$ * ($b$jscomp$10$$ - $a$jscomp$12$$);
};
$goog$$.$math$.$nearlyEquals$ = function($a$jscomp$13$$, $b$jscomp$11$$, $opt_tolerance$$) {
  return Math.abs($a$jscomp$13$$ - $b$jscomp$11$$) <= ($opt_tolerance$$ || 0.000001);
};
$goog$$.$math$.$standardAngle$ = function($angle$jscomp$1$$) {
  return $goog$$.$math$.$modulo$($angle$jscomp$1$$, 360);
};
$goog$$.$math$.$standardAngleInRadians$ = function($angle$jscomp$2$$) {
  return $goog$$.$math$.$modulo$($angle$jscomp$2$$, 2 * Math.PI);
};
$goog$$.$math$.$toRadians$ = function($angleDegrees$$) {
  return $angleDegrees$$ * Math.PI / 180;
};
$goog$$.$math$.$toDegrees$ = function($angleRadians$$) {
  return 180 * $angleRadians$$ / Math.PI;
};
$goog$$.$math$.$angleDx$ = function($degrees$$, $radius$jscomp$6$$) {
  return $radius$jscomp$6$$ * Math.cos($goog$$.$math$.$toRadians$($degrees$$));
};
$goog$$.$math$.$angleDy$ = function($degrees$jscomp$1$$, $radius$jscomp$7$$) {
  return $radius$jscomp$7$$ * Math.sin($goog$$.$math$.$toRadians$($degrees$jscomp$1$$));
};
$goog$$.$math$.angle = function($x1$jscomp$5$$, $y1$jscomp$5$$, $x2$jscomp$3$$, $y2$jscomp$3$$) {
  return $goog$$.$math$.$standardAngle$($goog$$.$math$.$toDegrees$(Math.atan2($y2$jscomp$3$$ - $y1$jscomp$5$$, $x2$jscomp$3$$ - $x1$jscomp$5$$)));
};
$goog$$.$math$.$angleDifference$ = function($d_startAngle$jscomp$4$$, $endAngle$jscomp$4$$) {
  $d_startAngle$jscomp$4$$ = $goog$$.$math$.$standardAngle$($endAngle$jscomp$4$$) - $goog$$.$math$.$standardAngle$($d_startAngle$jscomp$4$$);
  180 < $d_startAngle$jscomp$4$$ ? $d_startAngle$jscomp$4$$ -= 360 : -180 >= $d_startAngle$jscomp$4$$ && ($d_startAngle$jscomp$4$$ = 360 + $d_startAngle$jscomp$4$$);
  return $d_startAngle$jscomp$4$$;
};
$goog$$.$math$.sign = function($x$jscomp$82$$) {
  return 0 < $x$jscomp$82$$ ? 1 : 0 > $x$jscomp$82$$ ? -1 : $x$jscomp$82$$;
};
$goog$$.$math$.$longestCommonSubsequence$ = function($array1$$, $array2$$, $compare$jscomp$2_opt_compareFn$jscomp$9$$, $collect_opt_collectorFn$$) {
  $compare$jscomp$2_opt_compareFn$jscomp$9$$ = $compare$jscomp$2_opt_compareFn$jscomp$9$$ || function($array1$$, $array2$$) {
    return $array1$$ == $array2$$;
  };
  $collect_opt_collectorFn$$ = $collect_opt_collectorFn$$ || function($array2$$) {
    return $array1$$[$array2$$];
  };
  for (var $length1$$ = $array1$$.length, $length2$$ = $array2$$.length, $arr$jscomp$64$$ = [], $i$jscomp$71$$ = 0; $i$jscomp$71$$ < $length1$$ + 1; $i$jscomp$71$$++) {
    $arr$jscomp$64$$[$i$jscomp$71$$] = [], $arr$jscomp$64$$[$i$jscomp$71$$][0] = 0;
  }
  for (var $j$jscomp$6$$ = 0; $j$jscomp$6$$ < $length2$$ + 1; $j$jscomp$6$$++) {
    $arr$jscomp$64$$[0][$j$jscomp$6$$] = 0;
  }
  for ($i$jscomp$71$$ = 1; $i$jscomp$71$$ <= $length1$$; $i$jscomp$71$$++) {
    for ($j$jscomp$6$$ = 1; $j$jscomp$6$$ <= $length2$$; $j$jscomp$6$$++) {
      $compare$jscomp$2_opt_compareFn$jscomp$9$$($array1$$[$i$jscomp$71$$ - 1], $array2$$[$j$jscomp$6$$ - 1]) ? $arr$jscomp$64$$[$i$jscomp$71$$][$j$jscomp$6$$] = $arr$jscomp$64$$[$i$jscomp$71$$ - 1][$j$jscomp$6$$ - 1] + 1 : $arr$jscomp$64$$[$i$jscomp$71$$][$j$jscomp$6$$] = Math.max($arr$jscomp$64$$[$i$jscomp$71$$ - 1][$j$jscomp$6$$], $arr$jscomp$64$$[$i$jscomp$71$$][$j$jscomp$6$$ - 1]);
    }
  }
  for (var $result$jscomp$12$$ = [], $i$jscomp$71$$ = $length1$$, $j$jscomp$6$$ = $length2$$; 0 < $i$jscomp$71$$ && 0 < $j$jscomp$6$$;) {
    $compare$jscomp$2_opt_compareFn$jscomp$9$$($array1$$[$i$jscomp$71$$ - 1], $array2$$[$j$jscomp$6$$ - 1]) ? ($result$jscomp$12$$.unshift($collect_opt_collectorFn$$($i$jscomp$71$$ - 1, $j$jscomp$6$$ - 1)), $i$jscomp$71$$--, $j$jscomp$6$$--) : $arr$jscomp$64$$[$i$jscomp$71$$ - 1][$j$jscomp$6$$] > $arr$jscomp$64$$[$i$jscomp$71$$][$j$jscomp$6$$ - 1] ? $i$jscomp$71$$-- : $j$jscomp$6$$--;
  }
  return $result$jscomp$12$$;
};
$goog$$.$math$.$sum$ = function($var_args$jscomp$84$$) {
  return $goog$$.$array$.reduce(arguments, function($var_args$jscomp$84$$, $value$jscomp$105$$) {
    return $var_args$jscomp$84$$ + $value$jscomp$105$$;
  }, 0);
};
$goog$$.$math$.$average$ = function($var_args$jscomp$85$$) {
  return $goog$$.$math$.$sum$.apply(null, arguments) / arguments.length;
};
$goog$$.$math$.$sampleVariance$ = function($var_args$jscomp$86$$) {
  var $sampleSize$$ = arguments.length;
  if (2 > $sampleSize$$) {
    return 0;
  }
  var $mean$$ = $goog$$.$math$.$average$.apply(null, arguments);
  return $goog$$.$math$.$sum$.apply(null, $goog$$.$array$.map(arguments, function($var_args$jscomp$86$$) {
    return Math.pow($var_args$jscomp$86$$ - $mean$$, 2);
  })) / ($sampleSize$$ - 1);
};
$goog$$.$math$.$standardDeviation$ = function($var_args$jscomp$87$$) {
  return Math.sqrt($goog$$.$math$.$sampleVariance$.apply(null, arguments));
};
$goog$$.$math$.$isInt$ = function($num$jscomp$7$$) {
  return isFinite($num$jscomp$7$$) && 0 == $num$jscomp$7$$ % 1;
};
$goog$$.$math$.$isFiniteNumber$ = function($num$jscomp$8$$) {
  return isFinite($num$jscomp$8$$);
};
$goog$$.$math$.$isNegativeZero$ = function($num$jscomp$9$$) {
  return 0 == $num$jscomp$9$$ && 0 > 1 / $num$jscomp$9$$;
};
$goog$$.$math$.$log10Floor$ = function($num$jscomp$10$$) {
  if (0 < $num$jscomp$10$$) {
    var $x$jscomp$83$$ = Math.round(Math.log($num$jscomp$10$$) * Math.LOG10E);
    return $x$jscomp$83$$ - (parseFloat("1e" + $x$jscomp$83$$) > $num$jscomp$10$$ ? 1 : 0);
  }
  return 0 == $num$jscomp$10$$ ? -Infinity : NaN;
};
$goog$$.$math$.$safeFloor$ = function($num$jscomp$11$$, $opt_epsilon$$) {
  $goog$$.$asserts$.assert(!$goog$$.$isDef$($opt_epsilon$$) || 0 < $opt_epsilon$$);
  return Math.floor($num$jscomp$11$$ + ($opt_epsilon$$ || 2e-15));
};
$goog$$.$math$.$safeCeil$ = function($num$jscomp$12$$, $opt_epsilon$jscomp$1$$) {
  $goog$$.$asserts$.assert(!$goog$$.$isDef$($opt_epsilon$jscomp$1$$) || 0 < $opt_epsilon$jscomp$1$$);
  return Math.ceil($num$jscomp$12$$ - ($opt_epsilon$jscomp$1$$ || 2e-15));
};
$goog$$.$iter$ = {};
$goog$$.$iter$.$StopIteration$ = "StopIteration" in $goog$$.global ? $goog$$.global.StopIteration : {message:"StopIteration", stack:""};
$goog$$.$iter$.Iterator = function() {
};
$goog$$.$iter$.Iterator.prototype.$a$ = function() {
  throw $goog$$.$iter$.$StopIteration$;
};
$goog$$.$iter$.Iterator.prototype.$__iterator__$ = function() {
  return this;
};
$goog$$.$iter$.$toIterator$ = function($iterable$jscomp$2$$) {
  if ($iterable$jscomp$2$$ instanceof $goog$$.$iter$.Iterator) {
    return $iterable$jscomp$2$$;
  }
  if ("function" == typeof $iterable$jscomp$2$$.$__iterator__$) {
    return $iterable$jscomp$2$$.$__iterator__$(!1);
  }
  if ($goog$$.$isArrayLike$($iterable$jscomp$2$$)) {
    var $i$jscomp$72$$ = 0, $newIter$$ = new $goog$$.$iter$.Iterator;
    $newIter$$.$a$ = function() {
      for (;;) {
        if ($i$jscomp$72$$ >= $iterable$jscomp$2$$.length) {
          throw $goog$$.$iter$.$StopIteration$;
        }
        if ($i$jscomp$72$$ in $iterable$jscomp$2$$) {
          return $iterable$jscomp$2$$[$i$jscomp$72$$++];
        }
        $i$jscomp$72$$++;
      }
    };
    return $newIter$$;
  }
  throw Error("Not implemented");
};
$goog$$.$iter$.forEach = function($iterable$jscomp$3$$, $f$jscomp$39$$, $opt_obj$jscomp$34$$) {
  if ($goog$$.$isArrayLike$($iterable$jscomp$3$$)) {
    try {
      $goog$$.$array$.forEach($iterable$jscomp$3$$, $f$jscomp$39$$, $opt_obj$jscomp$34$$);
    } catch ($ex$jscomp$3$$) {
      if ($ex$jscomp$3$$ !== $goog$$.$iter$.$StopIteration$) {
        throw $ex$jscomp$3$$;
      }
    }
  } else {
    $iterable$jscomp$3$$ = $goog$$.$iter$.$toIterator$($iterable$jscomp$3$$);
    try {
      for (;;) {
        $f$jscomp$39$$.call($opt_obj$jscomp$34$$, $iterable$jscomp$3$$.$a$(), void 0, $iterable$jscomp$3$$);
      }
    } catch ($ex$2$$) {
      if ($ex$2$$ !== $goog$$.$iter$.$StopIteration$) {
        throw $ex$2$$;
      }
    }
  }
};
$goog$$.$iter$.filter = function($iterable$jscomp$4_newIter$jscomp$1$$, $f$jscomp$40$$, $opt_obj$jscomp$35$$) {
  var $iterator$jscomp$6$$ = $goog$$.$iter$.$toIterator$($iterable$jscomp$4_newIter$jscomp$1$$);
  $iterable$jscomp$4_newIter$jscomp$1$$ = new $goog$$.$iter$.Iterator;
  $iterable$jscomp$4_newIter$jscomp$1$$.$a$ = function() {
    for (;;) {
      var $iterable$jscomp$4_newIter$jscomp$1$$ = $iterator$jscomp$6$$.$a$();
      if ($f$jscomp$40$$.call($opt_obj$jscomp$35$$, $iterable$jscomp$4_newIter$jscomp$1$$, void 0, $iterator$jscomp$6$$)) {
        return $iterable$jscomp$4_newIter$jscomp$1$$;
      }
    }
  };
  return $iterable$jscomp$4_newIter$jscomp$1$$;
};
$goog$$.$iter$.$filterFalse$ = function($iterable$jscomp$5$$, $f$jscomp$41$$, $opt_obj$jscomp$36$$) {
  return $goog$$.$iter$.filter($iterable$jscomp$5$$, $goog$$.$functions$.$not$($f$jscomp$41$$), $opt_obj$jscomp$36$$);
};
$goog$$.$iter$.$range$ = function($startOrStop$$, $opt_stop$$, $opt_step$jscomp$1$$) {
  var $start$jscomp$11$$ = 0, $stop$$ = $startOrStop$$, $step$jscomp$1$$ = $opt_step$jscomp$1$$ || 1;
  1 < arguments.length && ($start$jscomp$11$$ = $startOrStop$$, $stop$$ = $opt_stop$$);
  if (0 == $step$jscomp$1$$) {
    throw Error("Range step argument must not be zero");
  }
  var $newIter$jscomp$2$$ = new $goog$$.$iter$.Iterator;
  $newIter$jscomp$2$$.$a$ = function() {
    if (0 < $step$jscomp$1$$ && $start$jscomp$11$$ >= $stop$$ || 0 > $step$jscomp$1$$ && $start$jscomp$11$$ <= $stop$$) {
      throw $goog$$.$iter$.$StopIteration$;
    }
    var $startOrStop$$ = $start$jscomp$11$$;
    $start$jscomp$11$$ += $step$jscomp$1$$;
    return $startOrStop$$;
  };
  return $newIter$jscomp$2$$;
};
$goog$$.$iter$.join = function($iterable$jscomp$6$$, $deliminator$$) {
  return $goog$$.$iter$.$toArray$($iterable$jscomp$6$$).join($deliminator$$);
};
$goog$$.$iter$.map = function($iterable$jscomp$7_newIter$jscomp$3$$, $f$jscomp$42$$, $opt_obj$jscomp$37$$) {
  var $iterator$jscomp$7$$ = $goog$$.$iter$.$toIterator$($iterable$jscomp$7_newIter$jscomp$3$$);
  $iterable$jscomp$7_newIter$jscomp$3$$ = new $goog$$.$iter$.Iterator;
  $iterable$jscomp$7_newIter$jscomp$3$$.$a$ = function() {
    var $iterable$jscomp$7_newIter$jscomp$3$$ = $iterator$jscomp$7$$.$a$();
    return $f$jscomp$42$$.call($opt_obj$jscomp$37$$, $iterable$jscomp$7_newIter$jscomp$3$$, void 0, $iterator$jscomp$7$$);
  };
  return $iterable$jscomp$7_newIter$jscomp$3$$;
};
$goog$$.$iter$.reduce = function($iterable$jscomp$8$$, $f$jscomp$43$$, $val$jscomp$27$$, $opt_obj$jscomp$38$$) {
  var $rval$jscomp$2$$ = $val$jscomp$27$$;
  $goog$$.$iter$.forEach($iterable$jscomp$8$$, function($iterable$jscomp$8$$) {
    $rval$jscomp$2$$ = $f$jscomp$43$$.call($opt_obj$jscomp$38$$, $rval$jscomp$2$$, $iterable$jscomp$8$$);
  });
  return $rval$jscomp$2$$;
};
$goog$$.$iter$.some = function($iterable$jscomp$9$$, $f$jscomp$44$$, $opt_obj$jscomp$39$$) {
  $iterable$jscomp$9$$ = $goog$$.$iter$.$toIterator$($iterable$jscomp$9$$);
  try {
    for (;;) {
      if ($f$jscomp$44$$.call($opt_obj$jscomp$39$$, $iterable$jscomp$9$$.$a$(), void 0, $iterable$jscomp$9$$)) {
        return !0;
      }
    }
  } catch ($ex$jscomp$4$$) {
    if ($ex$jscomp$4$$ !== $goog$$.$iter$.$StopIteration$) {
      throw $ex$jscomp$4$$;
    }
  }
  return !1;
};
$goog$$.$iter$.every = function($iterable$jscomp$10$$, $f$jscomp$45$$, $opt_obj$jscomp$40$$) {
  $iterable$jscomp$10$$ = $goog$$.$iter$.$toIterator$($iterable$jscomp$10$$);
  try {
    for (;;) {
      if (!$f$jscomp$45$$.call($opt_obj$jscomp$40$$, $iterable$jscomp$10$$.$a$(), void 0, $iterable$jscomp$10$$)) {
        return !1;
      }
    }
  } catch ($ex$jscomp$5$$) {
    if ($ex$jscomp$5$$ !== $goog$$.$iter$.$StopIteration$) {
      throw $ex$jscomp$5$$;
    }
  }
  return !0;
};
$goog$$.$iter$.$chain$ = function($var_args$jscomp$88$$) {
  return $goog$$.$iter$.$chainFromIterable$(arguments);
};
$goog$$.$iter$.$chainFromIterable$ = function($iter_iterable$jscomp$11$$) {
  var $iterator$jscomp$8$$ = $goog$$.$iter$.$toIterator$($iter_iterable$jscomp$11$$);
  $iter_iterable$jscomp$11$$ = new $goog$$.$iter$.Iterator;
  var $current$jscomp$1$$ = null;
  $iter_iterable$jscomp$11$$.$a$ = function() {
    for (;;) {
      if (null == $current$jscomp$1$$) {
        var $iter_iterable$jscomp$11$$ = $iterator$jscomp$8$$.$a$();
        $current$jscomp$1$$ = $goog$$.$iter$.$toIterator$($iter_iterable$jscomp$11$$);
      }
      try {
        return $current$jscomp$1$$.$a$();
      } catch ($ex$jscomp$6$$) {
        if ($ex$jscomp$6$$ !== $goog$$.$iter$.$StopIteration$) {
          throw $ex$jscomp$6$$;
        }
        $current$jscomp$1$$ = null;
      }
    }
  };
  return $iter_iterable$jscomp$11$$;
};
$goog$$.$iter$.$dropWhile$ = function($iterable$jscomp$12_newIter$jscomp$4$$, $f$jscomp$46$$, $opt_obj$jscomp$41$$) {
  var $iterator$jscomp$9$$ = $goog$$.$iter$.$toIterator$($iterable$jscomp$12_newIter$jscomp$4$$);
  $iterable$jscomp$12_newIter$jscomp$4$$ = new $goog$$.$iter$.Iterator;
  var $dropping$$ = !0;
  $iterable$jscomp$12_newIter$jscomp$4$$.$a$ = function() {
    for (;;) {
      var $iterable$jscomp$12_newIter$jscomp$4$$ = $iterator$jscomp$9$$.$a$();
      if (!$dropping$$ || !$f$jscomp$46$$.call($opt_obj$jscomp$41$$, $iterable$jscomp$12_newIter$jscomp$4$$, void 0, $iterator$jscomp$9$$)) {
        return $dropping$$ = !1, $iterable$jscomp$12_newIter$jscomp$4$$;
      }
    }
  };
  return $iterable$jscomp$12_newIter$jscomp$4$$;
};
$goog$$.$iter$.$takeWhile$ = function($iter$jscomp$1_iterable$jscomp$13$$, $f$jscomp$47$$, $opt_obj$jscomp$42$$) {
  var $iterator$jscomp$10$$ = $goog$$.$iter$.$toIterator$($iter$jscomp$1_iterable$jscomp$13$$);
  $iter$jscomp$1_iterable$jscomp$13$$ = new $goog$$.$iter$.Iterator;
  $iter$jscomp$1_iterable$jscomp$13$$.$a$ = function() {
    var $iter$jscomp$1_iterable$jscomp$13$$ = $iterator$jscomp$10$$.$a$();
    if ($f$jscomp$47$$.call($opt_obj$jscomp$42$$, $iter$jscomp$1_iterable$jscomp$13$$, void 0, $iterator$jscomp$10$$)) {
      return $iter$jscomp$1_iterable$jscomp$13$$;
    }
    throw $goog$$.$iter$.$StopIteration$;
  };
  return $iter$jscomp$1_iterable$jscomp$13$$;
};
$goog$$.$iter$.$toArray$ = function($iterable$jscomp$14$$) {
  if ($goog$$.$isArrayLike$($iterable$jscomp$14$$)) {
    return $goog$$.$array$.$toArray$($iterable$jscomp$14$$);
  }
  $iterable$jscomp$14$$ = $goog$$.$iter$.$toIterator$($iterable$jscomp$14$$);
  var $array$jscomp$12$$ = [];
  $goog$$.$iter$.forEach($iterable$jscomp$14$$, function($iterable$jscomp$14$$) {
    $array$jscomp$12$$.push($iterable$jscomp$14$$);
  });
  return $array$jscomp$12$$;
};
$goog$$.$iter$.$equals$ = function($iterable1_pairs$jscomp$1$$, $iterable2$$, $opt_equalsFn$jscomp$1$$) {
  $iterable1_pairs$jscomp$1$$ = $goog$$.$iter$.$zipLongest$({}, $iterable1_pairs$jscomp$1$$, $iterable2$$);
  var $equalsFn$jscomp$1$$ = $opt_equalsFn$jscomp$1$$ || $goog$$.$array$.$defaultCompareEquality$;
  return $goog$$.$iter$.every($iterable1_pairs$jscomp$1$$, function($iterable1_pairs$jscomp$1$$) {
    return $equalsFn$jscomp$1$$($iterable1_pairs$jscomp$1$$[0], $iterable1_pairs$jscomp$1$$[1]);
  });
};
$goog$$.$iter$.$nextOrValue$ = function($iterable$jscomp$15$$) {
  try {
    $goog$$.$iter$.$toIterator$($iterable$jscomp$15$$).$a$();
  } catch ($e$jscomp$17$$) {
    if ($e$jscomp$17$$ != $goog$$.$iter$.$StopIteration$) {
      throw $e$jscomp$17$$;
    }
  }
};
$goog$$.$iter$.product = function($var_args$jscomp$89$$) {
  if ($goog$$.$array$.some(arguments, function($var_args$jscomp$89$$) {
    return !$var_args$jscomp$89$$.length;
  }) || !arguments.length) {
    return new $goog$$.$iter$.Iterator;
  }
  var $iter$jscomp$2$$ = new $goog$$.$iter$.Iterator, $arrays$$ = arguments, $indicies$$ = $goog$$.$array$.repeat(0, $arrays$$.length);
  $iter$jscomp$2$$.$a$ = function() {
    if ($indicies$$) {
      for (var $var_args$jscomp$89$$ = $goog$$.$array$.map($indicies$$, function($var_args$jscomp$89$$, $iter$jscomp$2$$) {
        return $arrays$$[$iter$jscomp$2$$][$var_args$jscomp$89$$];
      }), $iter$jscomp$2$$ = $indicies$$.length - 1; 0 <= $iter$jscomp$2$$; $iter$jscomp$2$$--) {
        $goog$$.$asserts$.assert($indicies$$);
        if ($indicies$$[$iter$jscomp$2$$] < $arrays$$[$iter$jscomp$2$$].length - 1) {
          $indicies$$[$iter$jscomp$2$$]++;
          break;
        }
        if (0 == $iter$jscomp$2$$) {
          $indicies$$ = null;
          break;
        }
        $indicies$$[$iter$jscomp$2$$] = 0;
      }
      return $var_args$jscomp$89$$;
    }
    throw $goog$$.$iter$.$StopIteration$;
  };
  return $iter$jscomp$2$$;
};
$goog$$.$iter$.$cycle$ = function($iter$jscomp$3_iterable$jscomp$16$$) {
  var $baseIterator$$ = $goog$$.$iter$.$toIterator$($iter$jscomp$3_iterable$jscomp$16$$), $cache$$ = [], $cacheIndex$$ = 0;
  $iter$jscomp$3_iterable$jscomp$16$$ = new $goog$$.$iter$.Iterator;
  var $useCache$$ = !1;
  $iter$jscomp$3_iterable$jscomp$16$$.$a$ = function() {
    var $iter$jscomp$3_iterable$jscomp$16$$ = null;
    if (!$useCache$$) {
      try {
        return $iter$jscomp$3_iterable$jscomp$16$$ = $baseIterator$$.$a$(), $cache$$.push($iter$jscomp$3_iterable$jscomp$16$$), $iter$jscomp$3_iterable$jscomp$16$$;
      } catch ($e$jscomp$18$$) {
        if ($e$jscomp$18$$ != $goog$$.$iter$.$StopIteration$ || $goog$$.$array$.$isEmpty$($cache$$)) {
          throw $e$jscomp$18$$;
        }
        $useCache$$ = !0;
      }
    }
    $iter$jscomp$3_iterable$jscomp$16$$ = $cache$$[$cacheIndex$$];
    $cacheIndex$$ = ($cacheIndex$$ + 1) % $cache$$.length;
    return $iter$jscomp$3_iterable$jscomp$16$$;
  };
  return $iter$jscomp$3_iterable$jscomp$16$$;
};
$goog$$.$iter$.count = function($iter$jscomp$4_opt_start$$, $opt_step$jscomp$2$$) {
  var $counter$$ = $iter$jscomp$4_opt_start$$ || 0, $step$jscomp$2$$ = $goog$$.$isDef$($opt_step$jscomp$2$$) ? $opt_step$jscomp$2$$ : 1;
  $iter$jscomp$4_opt_start$$ = new $goog$$.$iter$.Iterator;
  $iter$jscomp$4_opt_start$$.$a$ = function() {
    var $iter$jscomp$4_opt_start$$ = $counter$$;
    $counter$$ += $step$jscomp$2$$;
    return $iter$jscomp$4_opt_start$$;
  };
  return $iter$jscomp$4_opt_start$$;
};
$goog$$.$iter$.repeat = function($value$jscomp$106$$) {
  var $iter$jscomp$5$$ = new $goog$$.$iter$.Iterator;
  $iter$jscomp$5$$.$a$ = $goog$$.$functions$.$constant$($value$jscomp$106$$);
  return $iter$jscomp$5$$;
};
$goog$$.$iter$.$accumulate$ = function($iter$jscomp$6_iterable$jscomp$17$$) {
  var $iterator$jscomp$11$$ = $goog$$.$iter$.$toIterator$($iter$jscomp$6_iterable$jscomp$17$$), $total$$ = 0;
  $iter$jscomp$6_iterable$jscomp$17$$ = new $goog$$.$iter$.Iterator;
  $iter$jscomp$6_iterable$jscomp$17$$.$a$ = function() {
    return $total$$ += $iterator$jscomp$11$$.$a$();
  };
  return $iter$jscomp$6_iterable$jscomp$17$$;
};
$goog$$.$iter$.$zip$ = function($var_args$jscomp$90$$) {
  var $args$jscomp$7$$ = arguments, $iter$jscomp$7$$ = new $goog$$.$iter$.Iterator;
  if (0 < $args$jscomp$7$$.length) {
    var $iterators$$ = $goog$$.$array$.map($args$jscomp$7$$, $goog$$.$iter$.$toIterator$);
    $iter$jscomp$7$$.$a$ = function() {
      return $goog$$.$array$.map($iterators$$, function($var_args$jscomp$90$$) {
        return $var_args$jscomp$90$$.$a$();
      });
    };
  }
  return $iter$jscomp$7$$;
};
$goog$$.$iter$.$zipLongest$ = function($fillValue$jscomp$1$$, $var_args$jscomp$91$$) {
  var $args$jscomp$8$$ = $goog$$.$array$.slice(arguments, 1), $iter$jscomp$8$$ = new $goog$$.$iter$.Iterator;
  if (0 < $args$jscomp$8$$.length) {
    var $iterators$jscomp$1$$ = $goog$$.$array$.map($args$jscomp$8$$, $goog$$.$iter$.$toIterator$);
    $iter$jscomp$8$$.$a$ = function() {
      var $var_args$jscomp$91$$ = !1, $args$jscomp$8$$ = $goog$$.$array$.map($iterators$jscomp$1$$, function($args$jscomp$8$$) {
        try {
          var $iter$jscomp$8$$ = $args$jscomp$8$$.$a$();
          $var_args$jscomp$91$$ = !0;
        } catch ($ex$jscomp$7$$) {
          if ($ex$jscomp$7$$ !== $goog$$.$iter$.$StopIteration$) {
            throw $ex$jscomp$7$$;
          }
          $iter$jscomp$8$$ = $fillValue$jscomp$1$$;
        }
        return $iter$jscomp$8$$;
      });
      if (!$var_args$jscomp$91$$) {
        throw $goog$$.$iter$.$StopIteration$;
      }
      return $args$jscomp$8$$;
    };
  }
  return $iter$jscomp$8$$;
};
$goog$$.$iter$.$compress$ = function($iterable$jscomp$18$$, $selectors$jscomp$11$$) {
  var $selectorIterator$$ = $goog$$.$iter$.$toIterator$($selectors$jscomp$11$$);
  return $goog$$.$iter$.filter($iterable$jscomp$18$$, function() {
    return !!$selectorIterator$$.$a$();
  });
};
$goog$$.$iter$.$GroupByIterator_$ = function($iterable$jscomp$19$$, $opt_keyFunc$$) {
  this.$f$ = $goog$$.$iter$.$toIterator$($iterable$jscomp$19$$);
  this.$g$ = $opt_keyFunc$$ || $goog$$.$functions$.identity;
};
$goog$$.$inherits$($goog$$.$iter$.$GroupByIterator_$, $goog$$.$iter$.Iterator);
$goog$$.$iter$.$GroupByIterator_$.prototype.$a$ = function() {
  for (; this.$b$ == this.$h$;) {
    this.$c$ = this.$f$.$a$(), this.$b$ = this.$g$(this.$c$);
  }
  for (var $JSCompiler_temp_const$jscomp$8$$ = this.$h$ = this.$b$, $targetKey$jscomp$inline_67$$ = this.$h$, $arr$jscomp$inline_68$$ = []; this.$b$ == $targetKey$jscomp$inline_67$$;) {
    $arr$jscomp$inline_68$$.push(this.$c$);
    try {
      this.$c$ = this.$f$.$a$();
    } catch ($ex$jscomp$inline_69$$) {
      if ($ex$jscomp$inline_69$$ !== $goog$$.$iter$.$StopIteration$) {
        throw $ex$jscomp$inline_69$$;
      }
      break;
    }
    this.$b$ = this.$g$(this.$c$);
  }
  return [$JSCompiler_temp_const$jscomp$8$$, $arr$jscomp$inline_68$$];
};
$goog$$.$iter$.$groupBy$ = function($iterable$jscomp$20$$, $opt_keyFunc$jscomp$1$$) {
  return new $goog$$.$iter$.$GroupByIterator_$($iterable$jscomp$20$$, $opt_keyFunc$jscomp$1$$);
};
$goog$$.$iter$.$starMap$ = function($iter$jscomp$9_iterable$jscomp$21$$, $f$jscomp$48$$, $opt_obj$jscomp$43$$) {
  var $iterator$jscomp$12$$ = $goog$$.$iter$.$toIterator$($iter$jscomp$9_iterable$jscomp$21$$);
  $iter$jscomp$9_iterable$jscomp$21$$ = new $goog$$.$iter$.Iterator;
  $iter$jscomp$9_iterable$jscomp$21$$.$a$ = function() {
    var $iter$jscomp$9_iterable$jscomp$21$$ = $goog$$.$iter$.$toArray$($iterator$jscomp$12$$.$a$());
    return $f$jscomp$48$$.apply($opt_obj$jscomp$43$$, $goog$$.$array$.concat($iter$jscomp$9_iterable$jscomp$21$$, void 0, $iterator$jscomp$12$$));
  };
  return $iter$jscomp$9_iterable$jscomp$21$$;
};
$goog$$.$iter$.tee = function($iterable$jscomp$22$$, $opt_num$$) {
  var $iterator$jscomp$13$$ = $goog$$.$iter$.$toIterator$($iterable$jscomp$22$$), $buffers$jscomp$1$$ = $goog$$.$array$.map($goog$$.$array$.$range$($goog$$.$isNumber$($opt_num$$) ? $opt_num$$ : 2), function() {
    return [];
  }), $addNextIteratorValueToBuffers$$ = function() {
    var $iterable$jscomp$22$$ = $iterator$jscomp$13$$.$a$();
    $goog$$.$array$.forEach($buffers$jscomp$1$$, function($opt_num$$) {
      $opt_num$$.push($iterable$jscomp$22$$);
    });
  };
  return $goog$$.$array$.map($buffers$jscomp$1$$, function($iterable$jscomp$22$$) {
    var $opt_num$$ = new $goog$$.$iter$.Iterator;
    $opt_num$$.$a$ = function() {
      $goog$$.$array$.$isEmpty$($iterable$jscomp$22$$) && $addNextIteratorValueToBuffers$$();
      $goog$$.$asserts$.assert(!$goog$$.$array$.$isEmpty$($iterable$jscomp$22$$));
      return $iterable$jscomp$22$$.shift();
    };
    return $opt_num$$;
  });
};
$goog$$.$iter$.$enumerate$ = function($iterable$jscomp$23$$, $opt_start$jscomp$1$$) {
  return $goog$$.$iter$.$zip$($goog$$.$iter$.count($opt_start$jscomp$1$$), $iterable$jscomp$23$$);
};
$goog$$.$iter$.limit = function($iter$jscomp$11_iterable$jscomp$24$$, $limitSize$$) {
  $goog$$.$asserts$.assert($goog$$.$math$.$isInt$($limitSize$$) && 0 <= $limitSize$$);
  var $iterator$jscomp$14$$ = $goog$$.$iter$.$toIterator$($iter$jscomp$11_iterable$jscomp$24$$);
  $iter$jscomp$11_iterable$jscomp$24$$ = new $goog$$.$iter$.Iterator;
  var $remaining$$ = $limitSize$$;
  $iter$jscomp$11_iterable$jscomp$24$$.$a$ = function() {
    if (0 < $remaining$$--) {
      return $iterator$jscomp$14$$.$a$();
    }
    throw $goog$$.$iter$.$StopIteration$;
  };
  return $iter$jscomp$11_iterable$jscomp$24$$;
};
$goog$$.$iter$.$consume$ = function($iterable$jscomp$25_iterator$jscomp$15$$, $count$jscomp$13$$) {
  $goog$$.$asserts$.assert($goog$$.$math$.$isInt$($count$jscomp$13$$) && 0 <= $count$jscomp$13$$);
  for ($iterable$jscomp$25_iterator$jscomp$15$$ = $goog$$.$iter$.$toIterator$($iterable$jscomp$25_iterator$jscomp$15$$); 0 < $count$jscomp$13$$--;) {
    $goog$$.$iter$.$nextOrValue$($iterable$jscomp$25_iterator$jscomp$15$$);
  }
  return $iterable$jscomp$25_iterator$jscomp$15$$;
};
$goog$$.$iter$.slice = function($iterable$jscomp$26_iterator$jscomp$16$$, $start$jscomp$12$$, $opt_end$jscomp$12$$) {
  $goog$$.$asserts$.assert($goog$$.$math$.$isInt$($start$jscomp$12$$) && 0 <= $start$jscomp$12$$);
  $iterable$jscomp$26_iterator$jscomp$16$$ = $goog$$.$iter$.$consume$($iterable$jscomp$26_iterator$jscomp$16$$, $start$jscomp$12$$);
  $goog$$.$isNumber$($opt_end$jscomp$12$$) && ($goog$$.$asserts$.assert($goog$$.$math$.$isInt$($opt_end$jscomp$12$$) && $opt_end$jscomp$12$$ >= $start$jscomp$12$$), $iterable$jscomp$26_iterator$jscomp$16$$ = $goog$$.$iter$.limit($iterable$jscomp$26_iterator$jscomp$16$$, $opt_end$jscomp$12$$ - $start$jscomp$12$$));
  return $iterable$jscomp$26_iterator$jscomp$16$$;
};
$goog$$.$iter$.$hasDuplicates_$ = function($arr$jscomp$69$$) {
  var $deduped$$ = [];
  $goog$$.$array$.$removeDuplicates$($arr$jscomp$69$$, $deduped$$);
  return $arr$jscomp$69$$.length != $deduped$$.length;
};
$goog$$.$iter$.$permutations$ = function($elements_iterable$jscomp$27$$, $opt_length$jscomp$10_product_sets$$) {
  $elements_iterable$jscomp$27$$ = $goog$$.$iter$.$toArray$($elements_iterable$jscomp$27$$);
  $opt_length$jscomp$10_product_sets$$ = $goog$$.$array$.repeat($elements_iterable$jscomp$27$$, $goog$$.$isNumber$($opt_length$jscomp$10_product_sets$$) ? $opt_length$jscomp$10_product_sets$$ : $elements_iterable$jscomp$27$$.length);
  $opt_length$jscomp$10_product_sets$$ = $goog$$.$iter$.product.apply(void 0, $opt_length$jscomp$10_product_sets$$);
  return $goog$$.$iter$.filter($opt_length$jscomp$10_product_sets$$, function($elements_iterable$jscomp$27$$) {
    return !$goog$$.$iter$.$hasDuplicates_$($elements_iterable$jscomp$27$$);
  });
};
$goog$$.$iter$.$combinations$ = function($indexes_iterable$jscomp$28$$, $indexIterator_iter$jscomp$12_length$jscomp$25$$) {
  function $getIndexFromElements$$($indexes_iterable$jscomp$28$$) {
    return $elements$jscomp$1$$[$indexes_iterable$jscomp$28$$];
  }
  var $elements$jscomp$1$$ = $goog$$.$iter$.$toArray$($indexes_iterable$jscomp$28$$);
  $indexes_iterable$jscomp$28$$ = $goog$$.$iter$.$range$($elements$jscomp$1$$.length);
  $indexIterator_iter$jscomp$12_length$jscomp$25$$ = $goog$$.$iter$.$permutations$($indexes_iterable$jscomp$28$$, $indexIterator_iter$jscomp$12_length$jscomp$25$$);
  var $sortedIndexIterator$$ = $goog$$.$iter$.filter($indexIterator_iter$jscomp$12_length$jscomp$25$$, function($indexes_iterable$jscomp$28$$) {
    return $goog$$.$array$.$isSorted$($indexes_iterable$jscomp$28$$);
  });
  $indexIterator_iter$jscomp$12_length$jscomp$25$$ = new $goog$$.$iter$.Iterator;
  $indexIterator_iter$jscomp$12_length$jscomp$25$$.$a$ = function() {
    return $goog$$.$array$.map($sortedIndexIterator$$.$a$(), $getIndexFromElements$$);
  };
  return $indexIterator_iter$jscomp$12_length$jscomp$25$$;
};
$goog$$.$iter$.$combinationsWithReplacement$ = function($indexes$jscomp$1_iterable$jscomp$29$$, $indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$jscomp$1$$) {
  function $getIndexFromElements$jscomp$1$$($indexes$jscomp$1_iterable$jscomp$29$$) {
    return $elements$jscomp$2$$[$indexes$jscomp$1_iterable$jscomp$29$$];
  }
  var $elements$jscomp$2$$ = $goog$$.$iter$.$toArray$($indexes$jscomp$1_iterable$jscomp$29$$);
  $indexes$jscomp$1_iterable$jscomp$29$$ = $goog$$.$array$.$range$($elements$jscomp$2$$.length);
  $indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$jscomp$1$$ = $goog$$.$array$.repeat($indexes$jscomp$1_iterable$jscomp$29$$, $indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$jscomp$1$$);
  $indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$jscomp$1$$ = $goog$$.$iter$.product.apply(void 0, $indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$jscomp$1$$);
  var $sortedIndexIterator$jscomp$1$$ = $goog$$.$iter$.filter($indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$jscomp$1$$, function($indexes$jscomp$1_iterable$jscomp$29$$) {
    return $goog$$.$array$.$isSorted$($indexes$jscomp$1_iterable$jscomp$29$$);
  });
  $indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$jscomp$1$$ = new $goog$$.$iter$.Iterator;
  $indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$jscomp$1$$.$a$ = function() {
    return $goog$$.$array$.map($sortedIndexIterator$jscomp$1$$.$a$(), $getIndexFromElements$jscomp$1$$);
  };
  return $indexIterator$jscomp$1_iter$jscomp$13_length$jscomp$26_sets$jscomp$1$$;
};
$goog$$.$structs$ = {};
$goog$$.$structs$.Map = function($opt_map$$, $var_args$jscomp$92$$) {
  this.$map_$ = {};
  this.$a$ = [];
  this.$c$ = this.$b$ = 0;
  var $argLength$jscomp$2_keys$jscomp$inline_73$$ = arguments.length;
  if (1 < $argLength$jscomp$2_keys$jscomp$inline_73$$) {
    if ($argLength$jscomp$2_keys$jscomp$inline_73$$ % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var $i$jscomp$74_values$jscomp$inline_74$$ = 0; $i$jscomp$74_values$jscomp$inline_74$$ < $argLength$jscomp$2_keys$jscomp$inline_73$$; $i$jscomp$74_values$jscomp$inline_74$$ += 2) {
      this.set(arguments[$i$jscomp$74_values$jscomp$inline_74$$], arguments[$i$jscomp$74_values$jscomp$inline_74$$ + 1]);
    }
  } else {
    if ($opt_map$$) {
      $opt_map$$ instanceof $goog$$.$structs$.Map ? ($argLength$jscomp$2_keys$jscomp$inline_73$$ = $opt_map$$.$getKeys$(), $i$jscomp$74_values$jscomp$inline_74$$ = $opt_map$$.$getValues$()) : ($argLength$jscomp$2_keys$jscomp$inline_73$$ = $goog$$.object.$getKeys$($opt_map$$), $i$jscomp$74_values$jscomp$inline_74$$ = $goog$$.object.$getValues$($opt_map$$));
      for (var $i$jscomp$inline_75$$ = 0; $i$jscomp$inline_75$$ < $argLength$jscomp$2_keys$jscomp$inline_73$$.length; $i$jscomp$inline_75$$++) {
        this.set($argLength$jscomp$2_keys$jscomp$inline_73$$[$i$jscomp$inline_75$$], $i$jscomp$74_values$jscomp$inline_74$$[$i$jscomp$inline_75$$]);
      }
    }
  }
};
$JSCompiler_prototypeAlias$$ = $goog$$.$structs$.Map.prototype;
$JSCompiler_prototypeAlias$$.$getCount$ = function() {
  return this.$b$;
};
$JSCompiler_prototypeAlias$$.$getValues$ = function() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for (var $rv$jscomp$10$$ = [], $i$jscomp$75$$ = 0; $i$jscomp$75$$ < this.$a$.length; $i$jscomp$75$$++) {
    $rv$jscomp$10$$.push(this.$map_$[this.$a$[$i$jscomp$75$$]]);
  }
  return $rv$jscomp$10$$;
};
$JSCompiler_prototypeAlias$$.$getKeys$ = function() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  return this.$a$.concat();
};
$JSCompiler_prototypeAlias$$.$containsKey$ = function($key$jscomp$67$$) {
  return $goog$$.$structs$.Map.$a$(this.$map_$, $key$jscomp$67$$);
};
$JSCompiler_prototypeAlias$$.$containsValue$ = function($val$jscomp$33$$) {
  for (var $i$jscomp$76$$ = 0; $i$jscomp$76$$ < this.$a$.length; $i$jscomp$76$$++) {
    var $key$jscomp$68$$ = this.$a$[$i$jscomp$76$$];
    if ($goog$$.$structs$.Map.$a$(this.$map_$, $key$jscomp$68$$) && this.$map_$[$key$jscomp$68$$] == $val$jscomp$33$$) {
      return !0;
    }
  }
  return !1;
};
$JSCompiler_prototypeAlias$$.$equals$ = function($otherMap$$, $equalityFn_opt_equalityFn$$) {
  if (this === $otherMap$$) {
    return !0;
  }
  if (this.$b$ != $otherMap$$.$getCount$()) {
    return !1;
  }
  $equalityFn_opt_equalityFn$$ = $equalityFn_opt_equalityFn$$ || $goog$$.$structs$.Map.$b$;
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for (var $key$jscomp$69$$, $i$jscomp$77$$ = 0; $key$jscomp$69$$ = this.$a$[$i$jscomp$77$$]; $i$jscomp$77$$++) {
    if (!$equalityFn_opt_equalityFn$$(this.get($key$jscomp$69$$), $otherMap$$.get($key$jscomp$69$$))) {
      return !1;
    }
  }
  return !0;
};
$goog$$.$structs$.Map.$b$ = function($a$jscomp$15$$, $b$jscomp$13$$) {
  return $a$jscomp$15$$ === $b$jscomp$13$$;
};
$goog$$.$structs$.Map.prototype.$isEmpty$ = function() {
  return 0 == this.$b$;
};
$goog$$.$structs$.Map.prototype.clear = function() {
  this.$map_$ = {};
  this.$c$ = this.$b$ = this.$a$.length = 0;
};
$goog$$.$structs$.Map.prototype.remove = function($key$jscomp$70$$) {
  return $goog$$.$structs$.Map.$a$(this.$map_$, $key$jscomp$70$$) ? (delete this.$map_$[$key$jscomp$70$$], this.$b$--, this.$c$++, this.$a$.length > 2 * this.$b$ && $JSCompiler_StaticMethods_cleanupKeysArray_$$(this), !0) : !1;
};
var $JSCompiler_StaticMethods_cleanupKeysArray_$$ = function($JSCompiler_StaticMethods_cleanupKeysArray_$self$$) {
  var $destIndex$$, $srcIndex$$;
  if ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$b$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length) {
    for ($destIndex$$ = $srcIndex$$ = 0; $srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length;) {
      var $key$jscomp$71$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$srcIndex$$];
      $goog$$.$structs$.Map.$a$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$map_$, $key$jscomp$71$$) && ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$destIndex$$++] = $key$jscomp$71$$);
      $srcIndex$$++;
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length = $destIndex$$;
  }
  if ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$b$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length) {
    var $seen$jscomp$2$$ = {};
    for ($destIndex$$ = $srcIndex$$ = 0; $srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length;) {
      $key$jscomp$71$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$srcIndex$$], $goog$$.$structs$.Map.$a$($seen$jscomp$2$$, $key$jscomp$71$$) || ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$destIndex$$++] = $key$jscomp$71$$, $seen$jscomp$2$$[$key$jscomp$71$$] = 1), $srcIndex$$++;
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length = $destIndex$$;
  }
};
$JSCompiler_prototypeAlias$$ = $goog$$.$structs$.Map.prototype;
$JSCompiler_prototypeAlias$$.get = function($key$jscomp$72$$, $opt_val$jscomp$1$$) {
  return $goog$$.$structs$.Map.$a$(this.$map_$, $key$jscomp$72$$) ? this.$map_$[$key$jscomp$72$$] : $opt_val$jscomp$1$$;
};
$JSCompiler_prototypeAlias$$.set = function($key$jscomp$73$$, $value$jscomp$107$$) {
  $goog$$.$structs$.Map.$a$(this.$map_$, $key$jscomp$73$$) || (this.$b$++, this.$a$.push($key$jscomp$73$$), this.$c$++);
  this.$map_$[$key$jscomp$73$$] = $value$jscomp$107$$;
};
$JSCompiler_prototypeAlias$$.forEach = function($f$jscomp$49$$, $opt_obj$jscomp$44$$) {
  for (var $keys$jscomp$4$$ = this.$getKeys$(), $i$jscomp$79$$ = 0; $i$jscomp$79$$ < $keys$jscomp$4$$.length; $i$jscomp$79$$++) {
    var $key$jscomp$74$$ = $keys$jscomp$4$$[$i$jscomp$79$$], $value$jscomp$108$$ = this.get($key$jscomp$74$$);
    $f$jscomp$49$$.call($opt_obj$jscomp$44$$, $value$jscomp$108$$, $key$jscomp$74$$, this);
  }
};
$JSCompiler_prototypeAlias$$.clone = function() {
  return new $goog$$.$structs$.Map(this);
};
$JSCompiler_prototypeAlias$$.$transpose$ = function() {
  for (var $transposed$jscomp$1$$ = new $goog$$.$structs$.Map, $i$jscomp$80$$ = 0; $i$jscomp$80$$ < this.$a$.length; $i$jscomp$80$$++) {
    var $key$jscomp$75$$ = this.$a$[$i$jscomp$80$$];
    $transposed$jscomp$1$$.set(this.$map_$[$key$jscomp$75$$], $key$jscomp$75$$);
  }
  return $transposed$jscomp$1$$;
};
$JSCompiler_prototypeAlias$$.$toObject$ = function() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for (var $obj$jscomp$79$$ = {}, $i$jscomp$81$$ = 0; $i$jscomp$81$$ < this.$a$.length; $i$jscomp$81$$++) {
    var $key$jscomp$76$$ = this.$a$[$i$jscomp$81$$];
    $obj$jscomp$79$$[$key$jscomp$76$$] = this.$map_$[$key$jscomp$76$$];
  }
  return $obj$jscomp$79$$;
};
$JSCompiler_prototypeAlias$$.$__iterator__$ = function($opt_keys$jscomp$1$$) {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  var $i$jscomp$82$$ = 0, $version$jscomp$14$$ = this.$c$, $selfObj$jscomp$4$$ = this, $newIter$jscomp$5$$ = new $goog$$.$iter$.Iterator;
  $newIter$jscomp$5$$.$a$ = function() {
    if ($version$jscomp$14$$ != $selfObj$jscomp$4$$.$c$) {
      throw Error("The map has changed since the iterator was created");
    }
    if ($i$jscomp$82$$ >= $selfObj$jscomp$4$$.$a$.length) {
      throw $goog$$.$iter$.$StopIteration$;
    }
    var $newIter$jscomp$5$$ = $selfObj$jscomp$4$$.$a$[$i$jscomp$82$$++];
    return $opt_keys$jscomp$1$$ ? $newIter$jscomp$5$$ : $selfObj$jscomp$4$$.$map_$[$newIter$jscomp$5$$];
  };
  return $newIter$jscomp$5$$;
};
$goog$$.$structs$.Map.$a$ = function($obj$jscomp$80$$, $key$jscomp$78$$) {
  return Object.prototype.hasOwnProperty.call($obj$jscomp$80$$, $key$jscomp$78$$);
};
chrome.cast.$games$.$internal$.$GameManagerSession$ = function($session$$) {
  this.$h$ = $session$$;
  this.$l$ = $goog$$.log.$getLogger$("chrome.cast.games.internal.GameManagerSession");
  this.$f$ = null;
  this.$o$ = new $goog$$.$structs$.Map;
  this.$a$ = new $goog$$.$structs$.Map;
  this.$c$ = new $goog$$.$structs$.Map;
  this.$b$ = new $goog$$.$structs$.Map;
  this.$m$ = new $goog$$.$structs$.Map;
  this.$j$ = this.$g$ = this.$i$ = null;
  this.$h$.addMessageListener(chrome.cast.$games$.$NAMESPACE$, $goog$$.bind(this.$s$, this));
};
chrome.cast.$games$.$internal$.$GameManagerSession$.$a$ = 60000;
chrome.cast.$games$.$internal$.$GameManagerSession$.prototype.$dispose$ = function() {
  this.$h$.removeMessageListener(chrome.cast.$games$.$NAMESPACE$, $goog$$.bind(this.$s$, this));
  for (var $requestIds$$ = this.$c$.$getKeys$(), $i$jscomp$83$$ = 0; $i$jscomp$83$$ < $requestIds$$.length; $i$jscomp$83$$++) {
    $JSCompiler_StaticMethods_removeResponse_$$(this, $requestIds$$[$i$jscomp$83$$]);
  }
  this.$g$ = this.$i$ = null;
};
var $JSCompiler_StaticMethods_sendGameManagerInitializeRequest$$ = function($JSCompiler_StaticMethods_sendGameManagerInitializeRequest$self$$, $castErrorCallback_initializationSuccessCallback$$, $errorCallback$jscomp$60$$) {
  var $request$jscomp$10$$ = new chrome.cast.$games$.$internal$.$GameManagerRequest$;
  $request$jscomp$10$$.type = chrome.cast.$games$.$internal$.$GameManagerRequestType$.$GET_GAME_MANAGER_CONFIG$;
  if (!$request$jscomp$10$$.requestId) {
    throw Error("Missing requestId field from request.");
  }
  if (!$castErrorCallback_initializationSuccessCallback$$) {
    throw Error("No success callback provided.");
  }
  $JSCompiler_StaticMethods_sendGameManagerInitializeRequest$self$$.$f$ = $castErrorCallback_initializationSuccessCallback$$;
  $castErrorCallback_initializationSuccessCallback$$ = $goog$$.$nullFunction$;
  $errorCallback$jscomp$60$$ && ($JSCompiler_StaticMethods_sendGameManagerInitializeRequest$self$$.$a$.set($request$jscomp$10$$.requestId, $errorCallback$jscomp$60$$), $castErrorCallback_initializationSuccessCallback$$ = function($JSCompiler_StaticMethods_sendGameManagerInitializeRequest$self$$) {
    $errorCallback$jscomp$60$$(new chrome.cast.$games$.$GameManagerError$(chrome.cast.$games$.$GameManagerErrorCode$.$CAST_ERROR$, $JSCompiler_StaticMethods_sendGameManagerInitializeRequest$self$$.description, null, $JSCompiler_StaticMethods_sendGameManagerInitializeRequest$self$$));
    $JSCompiler_StaticMethods_removeResponse_$$(this, $request$jscomp$10$$.requestId);
  }.bind($JSCompiler_StaticMethods_sendGameManagerInitializeRequest$self$$));
  var $timeoutId$$ = $goog$$.global.setTimeout($goog$$.bind($JSCompiler_StaticMethods_sendGameManagerInitializeRequest$self$$.$u$, $JSCompiler_StaticMethods_sendGameManagerInitializeRequest$self$$, $request$jscomp$10$$.requestId), 60000);
  $JSCompiler_StaticMethods_sendGameManagerInitializeRequest$self$$.$c$.set($request$jscomp$10$$.requestId, $timeoutId$$);
  $JSCompiler_StaticMethods_sendGameManagerInitializeRequest$self$$.$b$.set($request$jscomp$10$$.requestId, $request$jscomp$10$$.type);
  $JSCompiler_StaticMethods_sendGameManagerInitializeRequest$self$$.$h$.sendMessage(chrome.cast.$games$.$NAMESPACE$, $request$jscomp$10$$, $goog$$.$nullFunction$, $castErrorCallback_initializationSuccessCallback$$);
}, $JSCompiler_StaticMethods_sendGameManagerRequest$$ = function($JSCompiler_StaticMethods_sendGameManagerRequest$self$$, $castErrorCallback$jscomp$1_playerId$jscomp$1$$, $requestType_timeoutId$jscomp$1$$, $extraMessageData$jscomp$1$$, $successCallback$jscomp$67$$, $errorCallback$jscomp$61$$) {
  if ($requestType_timeoutId$jscomp$1$$ == chrome.cast.$games$.$internal$.$GameManagerRequestType$.UNKNOWN) {
    throw Error("Cannot send an UNKNOWN game manager request.");
  }
  if (!$castErrorCallback$jscomp$1_playerId$jscomp$1$$ && $requestType_timeoutId$jscomp$1$$ != chrome.cast.$games$.$internal$.$GameManagerRequestType$.$PLAYER_AVAILABLE$ && $requestType_timeoutId$jscomp$1$$ != chrome.cast.$games$.$internal$.$GameManagerRequestType$.$GET_GAME_MANAGER_CONFIG$) {
    throw Error("Missing player ID for game manager request type:" + $requestType_timeoutId$jscomp$1$$);
  }
  var $request$jscomp$11$$ = new chrome.cast.$games$.$internal$.$GameManagerRequest$;
  $request$jscomp$11$$.type = $requestType_timeoutId$jscomp$1$$;
  $request$jscomp$11$$.playerId = $castErrorCallback$jscomp$1_playerId$jscomp$1$$ ? $castErrorCallback$jscomp$1_playerId$jscomp$1$$ : "";
  $request$jscomp$11$$.playerToken = $JSCompiler_StaticMethods_sendGameManagerRequest$self$$.$m$.get($request$jscomp$11$$.playerId, null);
  $request$jscomp$11$$.extraMessageData = $extraMessageData$jscomp$1$$;
  if (!$request$jscomp$11$$.requestId) {
    throw Error("Missing requestId field from request");
  }
  $successCallback$jscomp$67$$ && $JSCompiler_StaticMethods_sendGameManagerRequest$self$$.$o$.set($request$jscomp$11$$.requestId, $successCallback$jscomp$67$$);
  $castErrorCallback$jscomp$1_playerId$jscomp$1$$ = $goog$$.$nullFunction$;
  $errorCallback$jscomp$61$$ && ($JSCompiler_StaticMethods_sendGameManagerRequest$self$$.$a$.set($request$jscomp$11$$.requestId, $errorCallback$jscomp$61$$), $castErrorCallback$jscomp$1_playerId$jscomp$1$$ = function($JSCompiler_StaticMethods_sendGameManagerRequest$self$$) {
    $errorCallback$jscomp$61$$(new chrome.cast.$games$.$GameManagerError$(chrome.cast.$games$.$GameManagerErrorCode$.$CAST_ERROR$, $JSCompiler_StaticMethods_sendGameManagerRequest$self$$.description, null, $JSCompiler_StaticMethods_sendGameManagerRequest$self$$));
    $JSCompiler_StaticMethods_removeResponse_$$(this, $request$jscomp$11$$.requestId);
  }.bind($JSCompiler_StaticMethods_sendGameManagerRequest$self$$));
  $request$jscomp$11$$.type != chrome.cast.$games$.$internal$.$GameManagerRequestType$.GAME_MESSAGE && ($requestType_timeoutId$jscomp$1$$ = $goog$$.global.setTimeout($goog$$.bind($JSCompiler_StaticMethods_sendGameManagerRequest$self$$.$u$, $JSCompiler_StaticMethods_sendGameManagerRequest$self$$, $request$jscomp$11$$.requestId), 60000), $JSCompiler_StaticMethods_sendGameManagerRequest$self$$.$c$.set($request$jscomp$11$$.requestId, $requestType_timeoutId$jscomp$1$$));
  $JSCompiler_StaticMethods_sendGameManagerRequest$self$$.$b$.set($request$jscomp$11$$.requestId, $request$jscomp$11$$.type);
  $JSCompiler_StaticMethods_sendGameManagerRequest$self$$.$h$.sendMessage(chrome.cast.$games$.$NAMESPACE$, $request$jscomp$11$$, $goog$$.$nullFunction$, $castErrorCallback$jscomp$1_playerId$jscomp$1$$);
};
chrome.cast.$games$.$internal$.$GameManagerSession$.prototype.$getLastUsedPlayerId$ = function() {
  return this.$j$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$internal$.$GameManagerSession$.prototype, "getLastUsedPlayerId", chrome.cast.$games$.$internal$.$GameManagerSession$.prototype.$getLastUsedPlayerId$);
chrome.cast.$games$.$internal$.$GameManagerSession$.prototype.$s$ = function($namespace$jscomp$10_parsed$$, $message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$) {
  if ($namespace$jscomp$10_parsed$$ != chrome.cast.$games$.$NAMESPACE$) {
    throw Error("Incoming message has unexpected namespace: " + $namespace$jscomp$10_parsed$$);
  }
  $namespace$jscomp$10_parsed$$ = $goog$$.json.parse($message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$);
  $message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$ = $namespace$jscomp$10_parsed$$.type;
  if ($message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$ != chrome.cast.$games$.$internal$.$GameManagerMessageType$.GAME_MANAGER_PROCESSED_RESULT && $message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$ != chrome.cast.$games$.$internal$.$GameManagerMessageType$.GAME_MESSAGE) {
    $goog$$.log.error(this.$l$, "Ignoring message, type is not GAME_MANAGER_PROCESSED_RESULT or  GAME_MESSAGE Type: " + $message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$);
  } else {
    if ($namespace$jscomp$10_parsed$$.gameManagerConfig && $namespace$jscomp$10_parsed$$.gameManagerConfig.version != chrome.cast.$games$.$SDK_VERSION_NUMBER$ && ($namespace$jscomp$10_parsed$$.statusCode = chrome.cast.$games$.$internal$.$StatusCode$.INCORRECT_VERSION, $namespace$jscomp$10_parsed$$.errorDescription = "Incorrect version of the GameManager SDK. Sender: " + chrome.cast.$games$.$SDK_VERSION_NUMBER$ + "Receiver: " + $namespace$jscomp$10_parsed$$.gameManagerConfig.version), $namespace$jscomp$10_parsed$$.statusCode != 
    chrome.cast.$games$.$internal$.$StatusCode$.SUCCESS) {
      if ($message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$ = $namespace$jscomp$10_parsed$$.requestId, this.$a$.$containsKey$($message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$)) {
        var $errorCallback$jscomp$inline_80_playerToken_requestType$jscomp$inline_87$$ = this.$a$.get($message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$), $result$jscomp$inline_81_successCallback$jscomp$inline_88$$ = new chrome.cast.$games$.$GameManagerResult$($namespace$jscomp$10_parsed$$.playerId, $namespace$jscomp$10_parsed$$.requestId, $namespace$jscomp$10_parsed$$.extraMessageData), $errorCode$jscomp$inline_82$$ = chrome.cast.$games$.$internal$.$StatusCode$.$getGameManagerErrorCode$($namespace$jscomp$10_parsed$$.statusCode);
        $errorCallback$jscomp$inline_80_playerToken_requestType$jscomp$inline_87$$(new chrome.cast.$games$.$GameManagerError$($errorCode$jscomp$inline_82$$, $namespace$jscomp$10_parsed$$.errorDescription, $result$jscomp$inline_81_successCallback$jscomp$inline_88$$, null));
        $JSCompiler_StaticMethods_removeResponse_$$(this, $message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$);
      } else {
        $goog$$.log.info(this.$l$, "Ignoring error message, no callback for request ID: " + $message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$);
      }
    } else {
      $message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$ = $namespace$jscomp$10_parsed$$.playerId;
      $errorCallback$jscomp$inline_80_playerToken_requestType$jscomp$inline_87$$ = $namespace$jscomp$10_parsed$$.playerToken;
      $message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$ && $errorCallback$jscomp$inline_80_playerToken_requestType$jscomp$inline_87$$ && this.$m$.set($message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$, $errorCallback$jscomp$inline_80_playerToken_requestType$jscomp$inline_87$$);
      this.$i$ && this.$i$($namespace$jscomp$10_parsed$$);
      if ($namespace$jscomp$10_parsed$$.requestId) {
        if (this.$j$ = $message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$ || this.$j$, $message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$ = $namespace$jscomp$10_parsed$$.requestId, $errorCallback$jscomp$inline_80_playerToken_requestType$jscomp$inline_87$$ = this.$b$.get($message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$), $result$jscomp$inline_81_successCallback$jscomp$inline_88$$ = 
        this.$o$.get($namespace$jscomp$10_parsed$$.requestId), $JSCompiler_StaticMethods_removeResponse_$$(this, $message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$), $errorCallback$jscomp$inline_80_playerToken_requestType$jscomp$inline_87$$ == chrome.cast.$games$.$internal$.$GameManagerRequestType$.$GET_GAME_MANAGER_CONFIG$) {
          if (!this.$f$) {
            throw Error("Got a response for a GET_GAME_MANAGER_CONFIG request but no initialization callback was set.");
          }
          this.$f$();
          this.$f$ = null;
        } else {
          $result$jscomp$inline_81_successCallback$jscomp$inline_88$$ ? $result$jscomp$inline_81_successCallback$jscomp$inline_88$$(new chrome.cast.$games$.$GameManagerResult$($namespace$jscomp$10_parsed$$.playerId, $namespace$jscomp$10_parsed$$.requestId, $namespace$jscomp$10_parsed$$.extraMessageData)) : $goog$$.log.info(this.$l$, "Ignoring message, no callback for request ID: " + $message$jscomp$40_playerId$jscomp$4_requestId$jscomp$inline_79_requestId$jscomp$inline_86_type$jscomp$114$$);
        }
      }
      this.$g$ && this.$g$();
    }
  }
};
chrome.cast.$games$.$internal$.$GameManagerSession$.prototype.$u$ = function($requestId$jscomp$5$$) {
  var $errorDescription$jscomp$1_requestType$jscomp$2$$ = this.$b$.get($requestId$jscomp$5$$), $errorDescription$jscomp$1_requestType$jscomp$2$$ = "Did not receive a response to player request within a time period. request ID=" + $requestId$jscomp$5$$ + " request type =" + $errorDescription$jscomp$1_requestType$jscomp$2$$;
  if (this.$a$.$containsKey$($requestId$jscomp$5$$)) {
    var $callback$jscomp$411$$ = this.$a$.get($requestId$jscomp$5$$), $castError$jscomp$3$$ = new chrome.cast.Error(chrome.cast.ErrorCode.TIMEOUT, $errorDescription$jscomp$1_requestType$jscomp$2$$, null);
    $callback$jscomp$411$$(new chrome.cast.$games$.$GameManagerError$(chrome.cast.$games$.$GameManagerErrorCode$.$CAST_ERROR$, $errorDescription$jscomp$1_requestType$jscomp$2$$, null, $castError$jscomp$3$$));
    $JSCompiler_StaticMethods_removeResponse_$$(this, $requestId$jscomp$5$$);
  } else {
    throw Error($errorDescription$jscomp$1_requestType$jscomp$2$$);
  }
};
var $JSCompiler_StaticMethods_removeResponse_$$ = function($JSCompiler_StaticMethods_removeResponse_$self$$, $requestId$jscomp$6$$) {
  $JSCompiler_StaticMethods_removeResponse_$self$$.$o$.remove($requestId$jscomp$6$$);
  $JSCompiler_StaticMethods_removeResponse_$self$$.$a$.remove($requestId$jscomp$6$$);
  var $timeoutId$jscomp$2$$ = $JSCompiler_StaticMethods_removeResponse_$self$$.$c$.get($requestId$jscomp$6$$);
  $goog$$.global.clearTimeout($timeoutId$jscomp$2$$);
  $JSCompiler_StaticMethods_removeResponse_$self$$.$c$.remove($requestId$jscomp$6$$);
  $JSCompiler_StaticMethods_removeResponse_$self$$.$b$.remove($requestId$jscomp$6$$);
};
$goog$$.debug.$entryPointRegistry$ = {};
$goog$$.debug.$EntryPointMonitor$ = function() {
};
$goog$$.debug.$entryPointRegistry$.$refList_$ = [];
$goog$$.debug.$entryPointRegistry$.$monitors_$ = [];
$goog$$.debug.$entryPointRegistry$.$monitorsMayExist_$ = !1;
$goog$$.debug.$entryPointRegistry$.register = function($callback$jscomp$412$$) {
  $goog$$.debug.$entryPointRegistry$.$refList_$[$goog$$.debug.$entryPointRegistry$.$refList_$.length] = $callback$jscomp$412$$;
  if ($goog$$.debug.$entryPointRegistry$.$monitorsMayExist_$) {
    for (var $monitors$$ = $goog$$.debug.$entryPointRegistry$.$monitors_$, $i$jscomp$84$$ = 0; $i$jscomp$84$$ < $monitors$$.length; $i$jscomp$84$$++) {
      $callback$jscomp$412$$($goog$$.bind($monitors$$[$i$jscomp$84$$].$a$, $monitors$$[$i$jscomp$84$$]));
    }
  }
};
$goog$$.debug.$entryPointRegistry$.$monitorAll$ = function($monitor$$) {
  $goog$$.debug.$entryPointRegistry$.$monitorsMayExist_$ = !0;
  for (var $transformer$$ = $goog$$.bind($monitor$$.$a$, $monitor$$), $i$jscomp$85$$ = 0; $i$jscomp$85$$ < $goog$$.debug.$entryPointRegistry$.$refList_$.length; $i$jscomp$85$$++) {
    $goog$$.debug.$entryPointRegistry$.$refList_$[$i$jscomp$85$$]($transformer$$);
  }
  $goog$$.debug.$entryPointRegistry$.$monitors_$.push($monitor$$);
};
$goog$$.debug.$entryPointRegistry$.$unmonitorAllIfPossible$ = function($monitor$jscomp$1_transformer$jscomp$1$$) {
  var $monitors$jscomp$1$$ = $goog$$.debug.$entryPointRegistry$.$monitors_$;
  $goog$$.$asserts$.assert($monitor$jscomp$1_transformer$jscomp$1$$ == $monitors$jscomp$1$$[$monitors$jscomp$1$$.length - 1], "Only the most recent monitor can be unwrapped.");
  $monitor$jscomp$1_transformer$jscomp$1$$ = $goog$$.bind($monitor$jscomp$1_transformer$jscomp$1$$.$b$, $monitor$jscomp$1_transformer$jscomp$1$$);
  for (var $i$jscomp$86$$ = 0; $i$jscomp$86$$ < $goog$$.debug.$entryPointRegistry$.$refList_$.length; $i$jscomp$86$$++) {
    $goog$$.debug.$entryPointRegistry$.$refList_$[$i$jscomp$86$$]($monitor$jscomp$1_transformer$jscomp$1$$);
  }
  $monitors$jscomp$1$$.length--;
};
$goog$$.$disposable$ = {};
$goog$$.$disposable$.$IDisposable$ = function() {
};
$goog$$.$Disposable$ = function() {
  0 != $goog$$.$Disposable$.$b$.OFF && ($goog$$.$Disposable$.$a$[$goog$$.$getUid$(this)] = this);
  this.$b$ = this.$b$;
  this.$c$ = this.$c$;
};
$goog$$.$Disposable$.$b$ = {OFF:0, $PERMANENT$:1, $INTERACTIVE$:2};
$goog$$.$Disposable$.$f$ = 0;
$goog$$.$Disposable$.$c$ = !0;
$goog$$.$Disposable$.$a$ = {};
$goog$$.$Disposable$.$h$ = function() {
  var $ret$jscomp$3$$ = [], $id$jscomp$43$$;
  for ($id$jscomp$43$$ in $goog$$.$Disposable$.$a$) {
    $goog$$.$Disposable$.$a$.hasOwnProperty($id$jscomp$43$$) && $ret$jscomp$3$$.push($goog$$.$Disposable$.$a$[Number($id$jscomp$43$$)]);
  }
  return $ret$jscomp$3$$;
};
$goog$$.$Disposable$.$g$ = function() {
  $goog$$.$Disposable$.$a$ = {};
};
$goog$$.$Disposable$.prototype.$b$ = !1;
$goog$$.$Disposable$.prototype.isDisposed = function() {
  return this.$b$;
};
$goog$$.$Disposable$.prototype.$dispose$ = function() {
  if (!this.$b$ && (this.$b$ = !0, this.$disposeInternal$(), 0 != $goog$$.$Disposable$.$b$.OFF)) {
    var $uid$jscomp$1$$ = $goog$$.$getUid$(this);
    if (0 == $goog$$.$Disposable$.$b$.$PERMANENT$ && !$goog$$.$Disposable$.$a$.hasOwnProperty($uid$jscomp$1$$)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    delete $goog$$.$Disposable$.$a$[$uid$jscomp$1$$];
  }
};
$goog$$.$Disposable$.prototype.$disposeInternal$ = function() {
  if (this.$c$) {
    for (; this.$c$.length;) {
      this.$c$.shift()();
    }
  }
};
$goog$$.$Disposable$.isDisposed = function($obj$jscomp$81$$) {
  return $obj$jscomp$81$$ && "function" == typeof $obj$jscomp$81$$.isDisposed ? $obj$jscomp$81$$.isDisposed() : !1;
};
$goog$$.$dispose$ = function($obj$jscomp$82$$) {
  $obj$jscomp$82$$ && "function" == typeof $obj$jscomp$82$$.$dispose$ && $obj$jscomp$82$$.$dispose$();
};
$goog$$.$disposeAll$ = function($var_args$jscomp$93$$) {
  for (var $i$jscomp$87$$ = 0, $len$$ = arguments.length; $i$jscomp$87$$ < $len$$; ++$i$jscomp$87$$) {
    var $disposable$jscomp$1$$ = arguments[$i$jscomp$87$$];
    $goog$$.$isArrayLike$($disposable$jscomp$1$$) ? $goog$$.$disposeAll$.apply(null, $disposable$jscomp$1$$) : $goog$$.$dispose$($disposable$jscomp$1$$);
  }
};
$goog$$.events = {};
$goog$$.events.$BrowserFeature$ = {$HAS_W3C_BUTTON$:!$goog$$.userAgent.$IE$ || $goog$$.userAgent.$isDocumentModeOrHigher$(9), $HAS_W3C_EVENT_SUPPORT$:!$goog$$.userAgent.$IE$ || $goog$$.userAgent.$isDocumentModeOrHigher$(9), $SET_KEY_CODE_TO_PREVENT_DEFAULT$:$goog$$.userAgent.$IE$ && !$goog$$.userAgent.$isVersionOrHigher$("9"), $HAS_NAVIGATOR_ONLINE_PROPERTY$:!$goog$$.userAgent.$WEBKIT$ || $goog$$.userAgent.$isVersionOrHigher$("528"), $HAS_HTML5_NETWORK_EVENT_SUPPORT$:$goog$$.userAgent.$GECKO$ && 
$goog$$.userAgent.$isVersionOrHigher$("1.9b") || $goog$$.userAgent.$IE$ && $goog$$.userAgent.$isVersionOrHigher$("8") || $goog$$.userAgent.$OPERA$ && $goog$$.userAgent.$isVersionOrHigher$("9.5") || $goog$$.userAgent.$WEBKIT$ && $goog$$.userAgent.$isVersionOrHigher$("528"), $HTML5_NETWORK_EVENTS_FIRE_ON_BODY$:$goog$$.userAgent.$GECKO$ && !$goog$$.userAgent.$isVersionOrHigher$("8") || $goog$$.userAgent.$IE$ && !$goog$$.userAgent.$isVersionOrHigher$("9"), $TOUCH_ENABLED$:"ontouchstart" in $goog$$.global || 
!!($goog$$.global.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!$goog$$.global.navigator || !$goog$$.global.navigator.msMaxTouchPoints)};
$goog$$.events.$EventId$ = function($eventId$$) {
  this.id = $eventId$$;
};
$goog$$.events.$EventId$.prototype.toString = function() {
  return this.id;
};
$goog$$.events.Event = function($type$jscomp$115$$, $opt_target$jscomp$2$$) {
  this.type = $type$jscomp$115$$ instanceof $goog$$.events.$EventId$ ? String($type$jscomp$115$$) : $type$jscomp$115$$;
  this.$a$ = this.$f$ = $opt_target$jscomp$2$$;
  this.$b$ = !1;
  this.$returnValue_$ = !0;
};
$goog$$.events.Event.prototype.$h$ = function() {
  this.$b$ = !0;
};
$goog$$.events.Event.prototype.$g$ = function() {
  this.$returnValue_$ = !1;
};
$goog$$.events.Event.$b$ = function($e$jscomp$19$$) {
  $e$jscomp$19$$.$h$();
};
$goog$$.events.Event.$a$ = function($e$jscomp$20$$) {
  $e$jscomp$20$$.$g$();
};
$goog$$.events.$getVendorPrefixedName_$ = function($eventName$$) {
  return $goog$$.userAgent.$WEBKIT$ ? "webkit" + $eventName$$ : $goog$$.userAgent.$OPERA$ ? "o" + $eventName$$.toLowerCase() : $eventName$$.toLowerCase();
};
$goog$$.events.$EventType$ = {$CLICK$:"click", $RIGHTCLICK$:"rightclick", $DBLCLICK$:"dblclick", $MOUSEDOWN$:"mousedown", $MOUSEUP$:"mouseup", $MOUSEOVER$:"mouseover", $MOUSEOUT$:"mouseout", $MOUSEMOVE$:"mousemove", $MOUSEENTER$:"mouseenter", $MOUSELEAVE$:"mouseleave", $SELECTIONCHANGE$:"selectionchange", $SELECTSTART$:"selectstart", $WHEEL$:"wheel", $KEYPRESS$:"keypress", $KEYDOWN$:"keydown", $KEYUP$:"keyup", $BLUR$:"blur", $FOCUS$:"focus", $DEACTIVATE$:"deactivate", $FOCUSIN$:$goog$$.userAgent.$IE$ ? 
"focusin" : "DOMFocusIn", $FOCUSOUT$:$goog$$.userAgent.$IE$ ? "focusout" : "DOMFocusOut", $CHANGE$:"change", $RESET$:"reset", $SELECT$:"select", $SUBMIT$:"submit", $INPUT$:"input", $PROPERTYCHANGE$:"propertychange", $DRAGSTART$:"dragstart", $DRAG$:"drag", $DRAGENTER$:"dragenter", $DRAGOVER$:"dragover", $DRAGLEAVE$:"dragleave", $DROP$:"drop", $DRAGEND$:"dragend", $TOUCHSTART$:"touchstart", $TOUCHMOVE$:"touchmove", $TOUCHEND$:"touchend", $TOUCHCANCEL$:"touchcancel", $BEFOREUNLOAD$:"beforeunload", $CONSOLEMESSAGE$:"consolemessage", 
$CONTEXTMENU$:"contextmenu", $DEVICEMOTION$:"devicemotion", $DEVICEORIENTATION$:"deviceorientation", $DOMCONTENTLOADED$:"DOMContentLoaded", ERROR:"error", $HELP$:"help", LOAD:"load", $LOSECAPTURE$:"losecapture", $ORIENTATIONCHANGE$:"orientationchange", $READYSTATECHANGE$:"readystatechange", $RESIZE$:"resize", $SCROLL$:"scroll", $UNLOAD$:"unload", $CANPLAY$:"canplay", $CANPLAYTHROUGH$:"canplaythrough", $DURATIONCHANGE$:"durationchange", $EMPTIED$:"emptied", $ENDED$:"ended", $LOADEDDATA$:"loadeddata", 
$LOADEDMETADATA$:"loadedmetadata", PAUSE:"pause", $PLAY$:"play", PLAYING:"playing", $RATECHANGE$:"ratechange", $SEEKED$:"seeked", $SEEKING$:"seeking", $STALLED$:"stalled", $SUSPEND$:"suspend", $TIMEUPDATE$:"timeupdate", $VOLUMECHANGE$:"volumechange", $WAITING$:"waiting", $SOURCEOPEN$:"sourceopen", $SOURCEENDED$:"sourceended", $SOURCECLOSED$:"sourceclosed", $ABORT$:"abort", $UPDATE$:"update", $UPDATESTART$:"updatestart", $UPDATEEND$:"updateend", $HASHCHANGE$:"hashchange", $PAGEHIDE$:"pagehide", $PAGESHOW$:"pageshow", 
$POPSTATE$:"popstate", $COPY$:"copy", $PASTE$:"paste", $CUT$:"cut", $BEFORECOPY$:"beforecopy", $BEFORECUT$:"beforecut", $BEFOREPASTE$:"beforepaste", $ONLINE$:"online", $OFFLINE$:"offline", $MESSAGE$:"message", $CONNECT$:"connect", $INSTALL$:"install", $ACTIVATE$:"activate", $FETCH$:"fetch", $FOREIGNFETCH$:"foreignfetch", $MESSAGEERROR$:"messageerror", $STATECHANGE$:"statechange", $UPDATEFOUND$:"updatefound", $CONTROLLERCHANGE$:"controllerchange", $ANIMATIONSTART$:$goog$$.events.$getVendorPrefixedName_$("AnimationStart"), 
$ANIMATIONEND$:$goog$$.events.$getVendorPrefixedName_$("AnimationEnd"), $ANIMATIONITERATION$:$goog$$.events.$getVendorPrefixedName_$("AnimationIteration"), $TRANSITIONEND$:$goog$$.events.$getVendorPrefixedName_$("TransitionEnd"), $POINTERDOWN$:"pointerdown", $POINTERUP$:"pointerup", $POINTERCANCEL$:"pointercancel", $POINTERMOVE$:"pointermove", $POINTEROVER$:"pointerover", $POINTEROUT$:"pointerout", $POINTERENTER$:"pointerenter", $POINTERLEAVE$:"pointerleave", $GOTPOINTERCAPTURE$:"gotpointercapture", 
$LOSTPOINTERCAPTURE$:"lostpointercapture", $MSGESTURECHANGE$:"MSGestureChange", $MSGESTUREEND$:"MSGestureEnd", $MSGESTUREHOLD$:"MSGestureHold", $MSGESTURESTART$:"MSGestureStart", $MSGESTURETAP$:"MSGestureTap", $MSGOTPOINTERCAPTURE$:"MSGotPointerCapture", $MSINERTIASTART$:"MSInertiaStart", $MSLOSTPOINTERCAPTURE$:"MSLostPointerCapture", $MSPOINTERCANCEL$:"MSPointerCancel", $MSPOINTERDOWN$:"MSPointerDown", $MSPOINTERENTER$:"MSPointerEnter", $MSPOINTERHOVER$:"MSPointerHover", $MSPOINTERLEAVE$:"MSPointerLeave", 
$MSPOINTERMOVE$:"MSPointerMove", $MSPOINTEROUT$:"MSPointerOut", $MSPOINTEROVER$:"MSPointerOver", $MSPOINTERUP$:"MSPointerUp", TEXT:"text", $TEXTINPUT$:$goog$$.userAgent.$IE$ ? "textinput" : "textInput", $COMPOSITIONSTART$:"compositionstart", $COMPOSITIONUPDATE$:"compositionupdate", $COMPOSITIONEND$:"compositionend", $BEFOREINPUT$:"beforeinput", $EXIT$:"exit", $LOADABORT$:"loadabort", $LOADCOMMIT$:"loadcommit", $LOADREDIRECT$:"loadredirect", $LOADSTART$:"loadstart", $LOADSTOP$:"loadstop", $RESPONSIVE$:"responsive", 
$SIZECHANGED$:"sizechanged", $UNRESPONSIVE$:"unresponsive", $VISIBILITYCHANGE$:"visibilitychange", $STORAGE$:"storage", $DOMSUBTREEMODIFIED$:"DOMSubtreeModified", $DOMNODEINSERTED$:"DOMNodeInserted", $DOMNODEREMOVED$:"DOMNodeRemoved", $DOMNODEREMOVEDFROMDOCUMENT$:"DOMNodeRemovedFromDocument", $DOMNODEINSERTEDINTODOCUMENT$:"DOMNodeInsertedIntoDocument", $DOMATTRMODIFIED$:"DOMAttrModified", $DOMCHARACTERDATAMODIFIED$:"DOMCharacterDataModified", $BEFOREPRINT$:"beforeprint", $AFTERPRINT$:"afterprint"};
$goog$$.events.$BrowserEvent$ = function($opt_e$$, $opt_currentTarget$$) {
  $goog$$.events.Event.call(this, $opt_e$$ ? $opt_e$$.type : "");
  this.relatedTarget = this.$a$ = this.$f$ = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.$c$ = null;
  $opt_e$$ && this.init($opt_e$$, $opt_currentTarget$$);
};
$goog$$.$inherits$($goog$$.events.$BrowserEvent$, $goog$$.events.Event);
$goog$$.events.$BrowserEvent$.$b$ = {$LEFT$:0, $MIDDLE$:1, $RIGHT$:2};
$goog$$.events.$BrowserEvent$.$a$ = [1, 4, 2];
$goog$$.events.$BrowserEvent$.prototype.init = function($e$jscomp$21$$, $opt_currentTarget$jscomp$1_relatedTarget$$) {
  var $type$jscomp$116$$ = this.type = $e$jscomp$21$$.type, $relevantTouch$$ = $e$jscomp$21$$.changedTouches ? $e$jscomp$21$$.changedTouches[0] : null;
  this.$f$ = $e$jscomp$21$$.target || $e$jscomp$21$$.srcElement;
  this.$a$ = $opt_currentTarget$jscomp$1_relatedTarget$$;
  ($opt_currentTarget$jscomp$1_relatedTarget$$ = $e$jscomp$21$$.relatedTarget) ? $goog$$.userAgent.$GECKO$ && ($goog$$.$reflect$.$canAccessProperty$($opt_currentTarget$jscomp$1_relatedTarget$$) || ($opt_currentTarget$jscomp$1_relatedTarget$$ = null)) : $type$jscomp$116$$ == $goog$$.events.$EventType$.$MOUSEOVER$ ? $opt_currentTarget$jscomp$1_relatedTarget$$ = $e$jscomp$21$$.fromElement : $type$jscomp$116$$ == $goog$$.events.$EventType$.$MOUSEOUT$ && ($opt_currentTarget$jscomp$1_relatedTarget$$ = 
  $e$jscomp$21$$.toElement);
  this.relatedTarget = $opt_currentTarget$jscomp$1_relatedTarget$$;
  $goog$$.$isNull$($relevantTouch$$) ? (this.clientX = void 0 !== $e$jscomp$21$$.clientX ? $e$jscomp$21$$.clientX : $e$jscomp$21$$.pageX, this.clientY = void 0 !== $e$jscomp$21$$.clientY ? $e$jscomp$21$$.clientY : $e$jscomp$21$$.pageY, this.screenX = $e$jscomp$21$$.screenX || 0, this.screenY = $e$jscomp$21$$.screenY || 0) : (this.clientX = void 0 !== $relevantTouch$$.clientX ? $relevantTouch$$.clientX : $relevantTouch$$.pageX, this.clientY = void 0 !== $relevantTouch$$.clientY ? $relevantTouch$$.clientY : 
  $relevantTouch$$.pageY, this.screenX = $relevantTouch$$.screenX || 0, this.screenY = $relevantTouch$$.screenY || 0);
  this.button = $e$jscomp$21$$.button;
  this.key = $e$jscomp$21$$.key || "";
  this.ctrlKey = $e$jscomp$21$$.ctrlKey;
  this.altKey = $e$jscomp$21$$.altKey;
  this.shiftKey = $e$jscomp$21$$.shiftKey;
  this.metaKey = $e$jscomp$21$$.metaKey;
  this.$c$ = $e$jscomp$21$$;
  $e$jscomp$21$$.defaultPrevented && this.$g$();
};
$goog$$.events.$BrowserEvent$.prototype.$h$ = function() {
  $goog$$.events.$BrowserEvent$.$superClass_$.$h$.call(this);
  this.$c$.stopPropagation ? this.$c$.stopPropagation() : this.$c$.cancelBubble = !0;
};
$goog$$.events.$BrowserEvent$.prototype.$g$ = function() {
  $goog$$.events.$BrowserEvent$.$superClass_$.$g$.call(this);
  var $be$$ = this.$c$;
  if ($be$$.preventDefault) {
    $be$$.preventDefault();
  } else {
    if ($be$$.returnValue = !1, $goog$$.events.$BrowserFeature$.$SET_KEY_CODE_TO_PREVENT_DEFAULT$) {
      try {
        if ($be$$.ctrlKey || 112 <= $be$$.keyCode && 123 >= $be$$.keyCode) {
          $be$$.keyCode = -1;
        }
      } catch ($ex$jscomp$9$$) {
      }
    }
  }
};
$goog$$.events.$Listenable$ = function() {
};
$goog$$.events.$Listenable$.$g$ = "closure_listenable_" + (1e6 * Math.random() | 0);
$goog$$.events.$Listenable$.$i$ = function() {
  $goog$$.events.EventTarget.prototype[$goog$$.events.$Listenable$.$g$] = !0;
};
$goog$$.events.$Listenable$.$a$ = function($obj$jscomp$83$$) {
  return !(!$obj$jscomp$83$$ || !$obj$jscomp$83$$[$goog$$.events.$Listenable$.$g$]);
};
$goog$$.events.$ListenableKey$ = function() {
};
$goog$$.events.$ListenableKey$.$a$ = 0;
$goog$$.events.$ListenableKey$.$b$ = function() {
  return ++$goog$$.events.$ListenableKey$.$a$;
};
$goog$$.events.Listener = function($listener$jscomp$94$$, $proxy$$, $src$jscomp$12$$, $type$jscomp$117$$, $capture$$, $opt_handler$jscomp$1$$) {
  this.listener = $listener$jscomp$94$$;
  this.proxy = $proxy$$;
  this.src = $src$jscomp$12$$;
  this.type = $type$jscomp$117$$;
  this.capture = !!$capture$$;
  this.$handler$ = $opt_handler$jscomp$1$$;
  this.key = $goog$$.events.$ListenableKey$.$b$();
  this.removed = this.$callOnce$ = !1;
};
$goog$$.events.Listener.$a$ = !1;
var $JSCompiler_StaticMethods_markAsRemoved$$ = function($JSCompiler_StaticMethods_markAsRemoved$self$$) {
  $JSCompiler_StaticMethods_markAsRemoved$self$$.removed = !0;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.listener = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.proxy = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.src = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.$handler$ = null;
};
$goog$$.events.$ListenerMap$ = function($src$jscomp$13$$) {
  this.src = $src$jscomp$13$$;
  this.$a$ = {};
  this.$b$ = 0;
};
$goog$$.events.$ListenerMap$.prototype.add = function($listenerArray_type$jscomp$119$$, $listener$jscomp$95_listenerObj$$, $callOnce$$, $opt_useCapture$jscomp$5$$, $opt_listenerScope$$) {
  var $typeStr$$ = $listenerArray_type$jscomp$119$$.toString();
  $listenerArray_type$jscomp$119$$ = this.$a$[$typeStr$$];
  $listenerArray_type$jscomp$119$$ || ($listenerArray_type$jscomp$119$$ = this.$a$[$typeStr$$] = [], this.$b$++);
  var $index$jscomp$59$$ = $goog$$.events.$ListenerMap$.$a$($listenerArray_type$jscomp$119$$, $listener$jscomp$95_listenerObj$$, $opt_useCapture$jscomp$5$$, $opt_listenerScope$$);
  -1 < $index$jscomp$59$$ ? ($listener$jscomp$95_listenerObj$$ = $listenerArray_type$jscomp$119$$[$index$jscomp$59$$], $callOnce$$ || ($listener$jscomp$95_listenerObj$$.$callOnce$ = !1)) : ($listener$jscomp$95_listenerObj$$ = new $goog$$.events.Listener($listener$jscomp$95_listenerObj$$, null, this.src, $typeStr$$, !!$opt_useCapture$jscomp$5$$, $opt_listenerScope$$), $listener$jscomp$95_listenerObj$$.$callOnce$ = $callOnce$$, $listenerArray_type$jscomp$119$$.push($listener$jscomp$95_listenerObj$$));
  return $listener$jscomp$95_listenerObj$$;
};
$goog$$.events.$ListenerMap$.prototype.remove = function($type$jscomp$120_typeStr$jscomp$1$$, $index$jscomp$60_listener$jscomp$96$$, $opt_useCapture$jscomp$6$$, $opt_listenerScope$jscomp$1$$) {
  $type$jscomp$120_typeStr$jscomp$1$$ = $type$jscomp$120_typeStr$jscomp$1$$.toString();
  if (!($type$jscomp$120_typeStr$jscomp$1$$ in this.$a$)) {
    return !1;
  }
  var $listenerArray$jscomp$1$$ = this.$a$[$type$jscomp$120_typeStr$jscomp$1$$];
  $index$jscomp$60_listener$jscomp$96$$ = $goog$$.events.$ListenerMap$.$a$($listenerArray$jscomp$1$$, $index$jscomp$60_listener$jscomp$96$$, $opt_useCapture$jscomp$6$$, $opt_listenerScope$jscomp$1$$);
  return -1 < $index$jscomp$60_listener$jscomp$96$$ ? ($JSCompiler_StaticMethods_markAsRemoved$$($listenerArray$jscomp$1$$[$index$jscomp$60_listener$jscomp$96$$]), $goog$$.$array$.$removeAt$($listenerArray$jscomp$1$$, $index$jscomp$60_listener$jscomp$96$$), 0 == $listenerArray$jscomp$1$$.length && (delete this.$a$[$type$jscomp$120_typeStr$jscomp$1$$], this.$b$--), !0) : !1;
};
var $JSCompiler_StaticMethods_removeByKey$$ = function($JSCompiler_StaticMethods_removeByKey$self$$, $listener$jscomp$97$$) {
  var $type$jscomp$121$$ = $listener$jscomp$97$$.type;
  if (!($type$jscomp$121$$ in $JSCompiler_StaticMethods_removeByKey$self$$.$a$)) {
    return !1;
  }
  var $removed$$ = $goog$$.$array$.remove($JSCompiler_StaticMethods_removeByKey$self$$.$a$[$type$jscomp$121$$], $listener$jscomp$97$$);
  $removed$$ && ($JSCompiler_StaticMethods_markAsRemoved$$($listener$jscomp$97$$), 0 == $JSCompiler_StaticMethods_removeByKey$self$$.$a$[$type$jscomp$121$$].length && (delete $JSCompiler_StaticMethods_removeByKey$self$$.$a$[$type$jscomp$121$$], $JSCompiler_StaticMethods_removeByKey$self$$.$b$--));
  return $removed$$;
};
$goog$$.events.$ListenerMap$.prototype.removeAll = function($opt_type$jscomp$8_typeStr$jscomp$2$$) {
  $opt_type$jscomp$8_typeStr$jscomp$2$$ = $opt_type$jscomp$8_typeStr$jscomp$2$$ && $opt_type$jscomp$8_typeStr$jscomp$2$$.toString();
  var $count$jscomp$15$$ = 0, $type$jscomp$122$$;
  for ($type$jscomp$122$$ in this.$a$) {
    if (!$opt_type$jscomp$8_typeStr$jscomp$2$$ || $type$jscomp$122$$ == $opt_type$jscomp$8_typeStr$jscomp$2$$) {
      for (var $listenerArray$jscomp$2$$ = this.$a$[$type$jscomp$122$$], $i$jscomp$88$$ = 0; $i$jscomp$88$$ < $listenerArray$jscomp$2$$.length; $i$jscomp$88$$++) {
        ++$count$jscomp$15$$, $JSCompiler_StaticMethods_markAsRemoved$$($listenerArray$jscomp$2$$[$i$jscomp$88$$]);
      }
      delete this.$a$[$type$jscomp$122$$];
      this.$b$--;
    }
  }
  return $count$jscomp$15$$;
};
$goog$$.events.$ListenerMap$.prototype.$getListeners$ = function($listenerArray$jscomp$3_type$jscomp$123$$, $capture$jscomp$1$$) {
  $listenerArray$jscomp$3_type$jscomp$123$$ = this.$a$[$listenerArray$jscomp$3_type$jscomp$123$$.toString()];
  var $rv$jscomp$11$$ = [];
  if ($listenerArray$jscomp$3_type$jscomp$123$$) {
    for (var $i$jscomp$89$$ = 0; $i$jscomp$89$$ < $listenerArray$jscomp$3_type$jscomp$123$$.length; ++$i$jscomp$89$$) {
      var $listenerObj$jscomp$2$$ = $listenerArray$jscomp$3_type$jscomp$123$$[$i$jscomp$89$$];
      $listenerObj$jscomp$2$$.capture == $capture$jscomp$1$$ && $rv$jscomp$11$$.push($listenerObj$jscomp$2$$);
    }
  }
  return $rv$jscomp$11$$;
};
$goog$$.events.$ListenerMap$.prototype.$getListener$ = function($listenerArray$jscomp$4_type$jscomp$124$$, $listener$jscomp$98$$, $capture$jscomp$2$$, $opt_listenerScope$jscomp$2$$) {
  $listenerArray$jscomp$4_type$jscomp$124$$ = this.$a$[$listenerArray$jscomp$4_type$jscomp$124$$.toString()];
  var $i$jscomp$90$$ = -1;
  $listenerArray$jscomp$4_type$jscomp$124$$ && ($i$jscomp$90$$ = $goog$$.events.$ListenerMap$.$a$($listenerArray$jscomp$4_type$jscomp$124$$, $listener$jscomp$98$$, $capture$jscomp$2$$, $opt_listenerScope$jscomp$2$$));
  return -1 < $i$jscomp$90$$ ? $listenerArray$jscomp$4_type$jscomp$124$$[$i$jscomp$90$$] : null;
};
$goog$$.events.$ListenerMap$.prototype.hasListener = function($opt_type$jscomp$9$$, $opt_capture$$) {
  var $hasType$$ = $goog$$.$isDef$($opt_type$jscomp$9$$), $typeStr$jscomp$3$$ = $hasType$$ ? $opt_type$jscomp$9$$.toString() : "", $hasCapture$$ = $goog$$.$isDef$($opt_capture$$);
  return $goog$$.object.some(this.$a$, function($opt_type$jscomp$9$$) {
    for (var $listenerArray$jscomp$5$$ = 0; $listenerArray$jscomp$5$$ < $opt_type$jscomp$9$$.length; ++$listenerArray$jscomp$5$$) {
      if (!($hasType$$ && $opt_type$jscomp$9$$[$listenerArray$jscomp$5$$].type != $typeStr$jscomp$3$$ || $hasCapture$$ && $opt_type$jscomp$9$$[$listenerArray$jscomp$5$$].capture != $opt_capture$$)) {
        return !0;
      }
    }
    return !1;
  });
};
$goog$$.events.$ListenerMap$.$a$ = function($listenerArray$jscomp$6$$, $listener$jscomp$99$$, $opt_useCapture$jscomp$7$$, $opt_listenerScope$jscomp$3$$) {
  for (var $i$jscomp$92$$ = 0; $i$jscomp$92$$ < $listenerArray$jscomp$6$$.length; ++$i$jscomp$92$$) {
    var $listenerObj$jscomp$3$$ = $listenerArray$jscomp$6$$[$i$jscomp$92$$];
    if (!$listenerObj$jscomp$3$$.removed && $listenerObj$jscomp$3$$.listener == $listener$jscomp$99$$ && $listenerObj$jscomp$3$$.capture == !!$opt_useCapture$jscomp$7$$ && $listenerObj$jscomp$3$$.$handler$ == $opt_listenerScope$jscomp$3$$) {
      return $i$jscomp$92$$;
    }
  }
  return -1;
};
$goog$$.events.$LISTENER_MAP_PROP_$ = "closure_lm_" + (1e6 * Math.random() | 0);
$goog$$.events.$onString_$ = "on";
$goog$$.events.$onStringMap_$ = {};
$goog$$.events.$CaptureSimulationMode$ = {$OFF_AND_FAIL$:0, $OFF_AND_SILENT$:1, $ON$:2};
$goog$$.events.$CAPTURE_SIMULATION_MODE$ = 2;
$goog$$.events.$listenerCountEstimate_$ = 0;
$goog$$.events.listen = function($src$jscomp$14$$, $type$jscomp$126$$, $listener$jscomp$100$$, $opt_capt$$, $opt_handler$jscomp$2$$) {
  if ($goog$$.isArray($type$jscomp$126$$)) {
    for (var $i$jscomp$93$$ = 0; $i$jscomp$93$$ < $type$jscomp$126$$.length; $i$jscomp$93$$++) {
      $goog$$.events.listen($src$jscomp$14$$, $type$jscomp$126$$[$i$jscomp$93$$], $listener$jscomp$100$$, $opt_capt$$, $opt_handler$jscomp$2$$);
    }
    return null;
  }
  $listener$jscomp$100$$ = $goog$$.events.$wrapListener$($listener$jscomp$100$$);
  return $goog$$.events.$Listenable$.$a$($src$jscomp$14$$) ? $src$jscomp$14$$.listen($type$jscomp$126$$, $listener$jscomp$100$$, $opt_capt$$, $opt_handler$jscomp$2$$) : $goog$$.events.$listen_$($src$jscomp$14$$, $type$jscomp$126$$, $listener$jscomp$100$$, !1, $opt_capt$$, $opt_handler$jscomp$2$$);
};
$goog$$.events.$listen_$ = function($src$jscomp$15$$, $type$jscomp$127$$, $listener$jscomp$101_listenerObj$jscomp$4$$, $callOnce$jscomp$1_proxy$jscomp$1$$, $opt_capt$jscomp$1$$, $opt_handler$jscomp$3$$) {
  if (!$type$jscomp$127$$) {
    throw Error("Invalid event type");
  }
  var $capture$jscomp$3$$ = !!$opt_capt$jscomp$1$$;
  if ($capture$jscomp$3$$ && !$goog$$.events.$BrowserFeature$.$HAS_W3C_EVENT_SUPPORT$) {
    if ($goog$$.events.$CAPTURE_SIMULATION_MODE$ == $goog$$.events.$CaptureSimulationMode$.$OFF_AND_FAIL$) {
      return $goog$$.$asserts$.$fail$("Can not register capture listener in IE8-."), null;
    }
    if ($goog$$.events.$CAPTURE_SIMULATION_MODE$ == $goog$$.events.$CaptureSimulationMode$.$OFF_AND_SILENT$) {
      return null;
    }
  }
  var $listenerMap$$ = $goog$$.events.$getListenerMap_$($src$jscomp$15$$);
  $listenerMap$$ || ($src$jscomp$15$$[$goog$$.events.$LISTENER_MAP_PROP_$] = $listenerMap$$ = new $goog$$.events.$ListenerMap$($src$jscomp$15$$));
  $listener$jscomp$101_listenerObj$jscomp$4$$ = $listenerMap$$.add($type$jscomp$127$$, $listener$jscomp$101_listenerObj$jscomp$4$$, $callOnce$jscomp$1_proxy$jscomp$1$$, $opt_capt$jscomp$1$$, $opt_handler$jscomp$3$$);
  if ($listener$jscomp$101_listenerObj$jscomp$4$$.proxy) {
    return $listener$jscomp$101_listenerObj$jscomp$4$$;
  }
  $callOnce$jscomp$1_proxy$jscomp$1$$ = $goog$$.events.$getProxy$();
  $listener$jscomp$101_listenerObj$jscomp$4$$.proxy = $callOnce$jscomp$1_proxy$jscomp$1$$;
  $callOnce$jscomp$1_proxy$jscomp$1$$.src = $src$jscomp$15$$;
  $callOnce$jscomp$1_proxy$jscomp$1$$.listener = $listener$jscomp$101_listenerObj$jscomp$4$$;
  if ($src$jscomp$15$$.addEventListener) {
    $src$jscomp$15$$.addEventListener($type$jscomp$127$$.toString(), $callOnce$jscomp$1_proxy$jscomp$1$$, $capture$jscomp$3$$);
  } else {
    if ($src$jscomp$15$$.attachEvent) {
      $src$jscomp$15$$.attachEvent($goog$$.events.$getOnString_$($type$jscomp$127$$.toString()), $callOnce$jscomp$1_proxy$jscomp$1$$);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  $goog$$.events.$listenerCountEstimate_$++;
  return $listener$jscomp$101_listenerObj$jscomp$4$$;
};
$goog$$.events.$getProxy$ = function() {
  var $proxyCallbackFunction$$ = $goog$$.events.$handleBrowserEvent_$, $f$jscomp$50$$ = $goog$$.events.$BrowserFeature$.$HAS_W3C_EVENT_SUPPORT$ ? function($eventObject$$) {
    return $proxyCallbackFunction$$.call($f$jscomp$50$$.src, $f$jscomp$50$$.listener, $eventObject$$);
  } : function($eventObject$jscomp$1_v$jscomp$1$$) {
    $eventObject$jscomp$1_v$jscomp$1$$ = $proxyCallbackFunction$$.call($f$jscomp$50$$.src, $f$jscomp$50$$.listener, $eventObject$jscomp$1_v$jscomp$1$$);
    if (!$eventObject$jscomp$1_v$jscomp$1$$) {
      return $eventObject$jscomp$1_v$jscomp$1$$;
    }
  };
  return $f$jscomp$50$$;
};
$goog$$.events.$listenOnce$ = function($src$jscomp$16$$, $type$jscomp$128$$, $listener$jscomp$102$$, $opt_capt$jscomp$2$$, $opt_handler$jscomp$4$$) {
  if ($goog$$.isArray($type$jscomp$128$$)) {
    for (var $i$jscomp$94$$ = 0; $i$jscomp$94$$ < $type$jscomp$128$$.length; $i$jscomp$94$$++) {
      $goog$$.events.$listenOnce$($src$jscomp$16$$, $type$jscomp$128$$[$i$jscomp$94$$], $listener$jscomp$102$$, $opt_capt$jscomp$2$$, $opt_handler$jscomp$4$$);
    }
    return null;
  }
  $listener$jscomp$102$$ = $goog$$.events.$wrapListener$($listener$jscomp$102$$);
  return $goog$$.events.$Listenable$.$a$($src$jscomp$16$$) ? $src$jscomp$16$$.$listenOnce$($type$jscomp$128$$, $listener$jscomp$102$$, $opt_capt$jscomp$2$$, $opt_handler$jscomp$4$$) : $goog$$.events.$listen_$($src$jscomp$16$$, $type$jscomp$128$$, $listener$jscomp$102$$, !0, $opt_capt$jscomp$2$$, $opt_handler$jscomp$4$$);
};
$goog$$.events.$listenWithWrapper$ = function($src$jscomp$17$$, $wrapper$$, $listener$jscomp$103$$, $opt_capt$jscomp$3$$, $opt_handler$jscomp$5$$) {
  $wrapper$$.listen($src$jscomp$17$$, $listener$jscomp$103$$, $opt_capt$jscomp$3$$, $opt_handler$jscomp$5$$);
};
$goog$$.events.$unlisten$ = function($listenerMap$jscomp$1_src$jscomp$18$$, $listenerObj$jscomp$5_type$jscomp$129$$, $listener$jscomp$104$$, $opt_capt$jscomp$4$$, $opt_handler$jscomp$6$$) {
  if ($goog$$.isArray($listenerObj$jscomp$5_type$jscomp$129$$)) {
    for (var $i$jscomp$95$$ = 0; $i$jscomp$95$$ < $listenerObj$jscomp$5_type$jscomp$129$$.length; $i$jscomp$95$$++) {
      $goog$$.events.$unlisten$($listenerMap$jscomp$1_src$jscomp$18$$, $listenerObj$jscomp$5_type$jscomp$129$$[$i$jscomp$95$$], $listener$jscomp$104$$, $opt_capt$jscomp$4$$, $opt_handler$jscomp$6$$);
    }
    return null;
  }
  $listener$jscomp$104$$ = $goog$$.events.$wrapListener$($listener$jscomp$104$$);
  if ($goog$$.events.$Listenable$.$a$($listenerMap$jscomp$1_src$jscomp$18$$)) {
    return $listenerMap$jscomp$1_src$jscomp$18$$.$unlisten$($listenerObj$jscomp$5_type$jscomp$129$$, $listener$jscomp$104$$, $opt_capt$jscomp$4$$, $opt_handler$jscomp$6$$);
  }
  if (!$listenerMap$jscomp$1_src$jscomp$18$$) {
    return !1;
  }
  if ($listenerMap$jscomp$1_src$jscomp$18$$ = $goog$$.events.$getListenerMap_$($listenerMap$jscomp$1_src$jscomp$18$$)) {
    if ($listenerObj$jscomp$5_type$jscomp$129$$ = $listenerMap$jscomp$1_src$jscomp$18$$.$getListener$($listenerObj$jscomp$5_type$jscomp$129$$, $listener$jscomp$104$$, !!$opt_capt$jscomp$4$$, $opt_handler$jscomp$6$$)) {
      return $goog$$.events.$unlistenByKey$($listenerObj$jscomp$5_type$jscomp$129$$);
    }
  }
  return !1;
};
$goog$$.events.$unlistenByKey$ = function($key$jscomp$79$$) {
  if ($goog$$.$isNumber$($key$jscomp$79$$) || !$key$jscomp$79$$ || $key$jscomp$79$$.removed) {
    return !1;
  }
  var $src$jscomp$19$$ = $key$jscomp$79$$.src;
  if ($goog$$.events.$Listenable$.$a$($src$jscomp$19$$)) {
    return $src$jscomp$19$$.$unlistenByKey$($key$jscomp$79$$);
  }
  var $listenerMap$jscomp$2_type$jscomp$130$$ = $key$jscomp$79$$.type, $proxy$jscomp$2$$ = $key$jscomp$79$$.proxy;
  $src$jscomp$19$$.removeEventListener ? $src$jscomp$19$$.removeEventListener($listenerMap$jscomp$2_type$jscomp$130$$, $proxy$jscomp$2$$, $key$jscomp$79$$.capture) : $src$jscomp$19$$.detachEvent && $src$jscomp$19$$.detachEvent($goog$$.events.$getOnString_$($listenerMap$jscomp$2_type$jscomp$130$$), $proxy$jscomp$2$$);
  $goog$$.events.$listenerCountEstimate_$--;
  ($listenerMap$jscomp$2_type$jscomp$130$$ = $goog$$.events.$getListenerMap_$($src$jscomp$19$$)) ? ($JSCompiler_StaticMethods_removeByKey$$($listenerMap$jscomp$2_type$jscomp$130$$, $key$jscomp$79$$), 0 == $listenerMap$jscomp$2_type$jscomp$130$$.$b$ && ($listenerMap$jscomp$2_type$jscomp$130$$.src = null, $src$jscomp$19$$[$goog$$.events.$LISTENER_MAP_PROP_$] = null)) : $JSCompiler_StaticMethods_markAsRemoved$$($key$jscomp$79$$);
  return !0;
};
$goog$$.events.$unlistenWithWrapper$ = function($src$jscomp$20$$, $wrapper$jscomp$1$$, $listener$jscomp$106$$, $opt_capt$jscomp$5$$, $opt_handler$jscomp$7$$) {
  $wrapper$jscomp$1$$.$unlisten$($src$jscomp$20$$, $listener$jscomp$106$$, $opt_capt$jscomp$5$$, $opt_handler$jscomp$7$$);
};
$goog$$.events.removeAll = function($listenerMap$jscomp$3_obj$jscomp$84$$, $opt_type$jscomp$10_typeStr$jscomp$4$$) {
  if (!$listenerMap$jscomp$3_obj$jscomp$84$$) {
    return 0;
  }
  if ($goog$$.events.$Listenable$.$a$($listenerMap$jscomp$3_obj$jscomp$84$$)) {
    return $listenerMap$jscomp$3_obj$jscomp$84$$.$eventTargetListeners_$ ? $listenerMap$jscomp$3_obj$jscomp$84$$.$eventTargetListeners_$.removeAll($opt_type$jscomp$10_typeStr$jscomp$4$$) : 0;
  }
  $listenerMap$jscomp$3_obj$jscomp$84$$ = $goog$$.events.$getListenerMap_$($listenerMap$jscomp$3_obj$jscomp$84$$);
  if (!$listenerMap$jscomp$3_obj$jscomp$84$$) {
    return 0;
  }
  var $count$jscomp$16$$ = 0;
  $opt_type$jscomp$10_typeStr$jscomp$4$$ = $opt_type$jscomp$10_typeStr$jscomp$4$$ && $opt_type$jscomp$10_typeStr$jscomp$4$$.toString();
  for (var $type$jscomp$131$$ in $listenerMap$jscomp$3_obj$jscomp$84$$.$a$) {
    if (!$opt_type$jscomp$10_typeStr$jscomp$4$$ || $type$jscomp$131$$ == $opt_type$jscomp$10_typeStr$jscomp$4$$) {
      for (var $listeners$$ = $listenerMap$jscomp$3_obj$jscomp$84$$.$a$[$type$jscomp$131$$].concat(), $i$jscomp$96$$ = 0; $i$jscomp$96$$ < $listeners$$.length; ++$i$jscomp$96$$) {
        $goog$$.events.$unlistenByKey$($listeners$$[$i$jscomp$96$$]) && ++$count$jscomp$16$$;
      }
    }
  }
  return $count$jscomp$16$$;
};
$goog$$.events.$getListeners$ = function($listenerMap$jscomp$4_obj$jscomp$85$$, $type$jscomp$132$$, $capture$jscomp$5$$) {
  return $goog$$.events.$Listenable$.$a$($listenerMap$jscomp$4_obj$jscomp$85$$) ? $listenerMap$jscomp$4_obj$jscomp$85$$.$getListeners$($type$jscomp$132$$, $capture$jscomp$5$$) : $listenerMap$jscomp$4_obj$jscomp$85$$ ? ($listenerMap$jscomp$4_obj$jscomp$85$$ = $goog$$.events.$getListenerMap_$($listenerMap$jscomp$4_obj$jscomp$85$$)) ? $listenerMap$jscomp$4_obj$jscomp$85$$.$getListeners$($type$jscomp$132$$, $capture$jscomp$5$$) : [] : [];
};
$goog$$.events.$getListener$ = function($listenerMap$jscomp$5_src$jscomp$21$$, $type$jscomp$133$$, $listener$jscomp$107$$, $capture$jscomp$6_opt_capt$jscomp$6$$, $opt_handler$jscomp$8$$) {
  $listener$jscomp$107$$ = $goog$$.events.$wrapListener$($listener$jscomp$107$$);
  $capture$jscomp$6_opt_capt$jscomp$6$$ = !!$capture$jscomp$6_opt_capt$jscomp$6$$;
  return $goog$$.events.$Listenable$.$a$($listenerMap$jscomp$5_src$jscomp$21$$) ? $listenerMap$jscomp$5_src$jscomp$21$$.$getListener$($type$jscomp$133$$, $listener$jscomp$107$$, $capture$jscomp$6_opt_capt$jscomp$6$$, $opt_handler$jscomp$8$$) : $listenerMap$jscomp$5_src$jscomp$21$$ ? ($listenerMap$jscomp$5_src$jscomp$21$$ = $goog$$.events.$getListenerMap_$($listenerMap$jscomp$5_src$jscomp$21$$)) ? $listenerMap$jscomp$5_src$jscomp$21$$.$getListener$($type$jscomp$133$$, $listener$jscomp$107$$, $capture$jscomp$6_opt_capt$jscomp$6$$, 
  $opt_handler$jscomp$8$$) : null : null;
};
$goog$$.events.hasListener = function($listenerMap$jscomp$6_obj$jscomp$86$$, $opt_type$jscomp$11$$, $opt_capture$jscomp$1$$) {
  if ($goog$$.events.$Listenable$.$a$($listenerMap$jscomp$6_obj$jscomp$86$$)) {
    return $listenerMap$jscomp$6_obj$jscomp$86$$.hasListener($opt_type$jscomp$11$$, $opt_capture$jscomp$1$$);
  }
  $listenerMap$jscomp$6_obj$jscomp$86$$ = $goog$$.events.$getListenerMap_$($listenerMap$jscomp$6_obj$jscomp$86$$);
  return !!$listenerMap$jscomp$6_obj$jscomp$86$$ && $listenerMap$jscomp$6_obj$jscomp$86$$.hasListener($opt_type$jscomp$11$$, $opt_capture$jscomp$1$$);
};
$goog$$.events.$expose$ = function($e$jscomp$22$$) {
  var $str$jscomp$67$$ = [], $key$jscomp$80$$;
  for ($key$jscomp$80$$ in $e$jscomp$22$$) {
    $e$jscomp$22$$[$key$jscomp$80$$] && $e$jscomp$22$$[$key$jscomp$80$$].id ? $str$jscomp$67$$.push($key$jscomp$80$$ + " = " + $e$jscomp$22$$[$key$jscomp$80$$] + " (" + $e$jscomp$22$$[$key$jscomp$80$$].id + ")") : $str$jscomp$67$$.push($key$jscomp$80$$ + " = " + $e$jscomp$22$$[$key$jscomp$80$$]);
  }
  return $str$jscomp$67$$.join("\n");
};
$goog$$.events.$getOnString_$ = function($type$jscomp$134$$) {
  return $type$jscomp$134$$ in $goog$$.events.$onStringMap_$ ? $goog$$.events.$onStringMap_$[$type$jscomp$134$$] : $goog$$.events.$onStringMap_$[$type$jscomp$134$$] = $goog$$.events.$onString_$ + $type$jscomp$134$$;
};
$goog$$.events.$fireListeners$ = function($obj$jscomp$87$$, $type$jscomp$135$$, $capture$jscomp$7$$, $eventObject$jscomp$2$$) {
  return $goog$$.events.$Listenable$.$a$($obj$jscomp$87$$) ? $obj$jscomp$87$$.$fireListeners$($type$jscomp$135$$, $capture$jscomp$7$$, $eventObject$jscomp$2$$) : $goog$$.events.$fireListeners_$($obj$jscomp$87$$, $type$jscomp$135$$, $capture$jscomp$7$$, $eventObject$jscomp$2$$);
};
$goog$$.events.$fireListeners_$ = function($i$jscomp$97_listenerMap$jscomp$7_obj$jscomp$88$$, $listenerArray$jscomp$7_type$jscomp$136$$, $capture$jscomp$8$$, $eventObject$jscomp$3$$) {
  var $retval$$ = !0;
  if ($i$jscomp$97_listenerMap$jscomp$7_obj$jscomp$88$$ = $goog$$.events.$getListenerMap_$($i$jscomp$97_listenerMap$jscomp$7_obj$jscomp$88$$)) {
    if ($listenerArray$jscomp$7_type$jscomp$136$$ = $i$jscomp$97_listenerMap$jscomp$7_obj$jscomp$88$$.$a$[$listenerArray$jscomp$7_type$jscomp$136$$.toString()]) {
      for ($listenerArray$jscomp$7_type$jscomp$136$$ = $listenerArray$jscomp$7_type$jscomp$136$$.concat(), $i$jscomp$97_listenerMap$jscomp$7_obj$jscomp$88$$ = 0; $i$jscomp$97_listenerMap$jscomp$7_obj$jscomp$88$$ < $listenerArray$jscomp$7_type$jscomp$136$$.length; $i$jscomp$97_listenerMap$jscomp$7_obj$jscomp$88$$++) {
        var $listener$jscomp$108_result$jscomp$15$$ = $listenerArray$jscomp$7_type$jscomp$136$$[$i$jscomp$97_listenerMap$jscomp$7_obj$jscomp$88$$];
        $listener$jscomp$108_result$jscomp$15$$ && $listener$jscomp$108_result$jscomp$15$$.capture == $capture$jscomp$8$$ && !$listener$jscomp$108_result$jscomp$15$$.removed && ($listener$jscomp$108_result$jscomp$15$$ = $goog$$.events.$fireListener$($listener$jscomp$108_result$jscomp$15$$, $eventObject$jscomp$3$$), $retval$$ = $retval$$ && !1 !== $listener$jscomp$108_result$jscomp$15$$);
      }
    }
  }
  return $retval$$;
};
$goog$$.events.$fireListener$ = function($listener$jscomp$109$$, $eventObject$jscomp$4$$) {
  var $listenerFn$$ = $listener$jscomp$109$$.listener, $listenerHandler$$ = $listener$jscomp$109$$.$handler$ || $listener$jscomp$109$$.src;
  $listener$jscomp$109$$.$callOnce$ && $goog$$.events.$unlistenByKey$($listener$jscomp$109$$);
  return $listenerFn$$.call($listenerHandler$$, $eventObject$jscomp$4$$);
};
$goog$$.events.$getTotalListenerCount$ = function() {
  return $goog$$.events.$listenerCountEstimate_$;
};
$goog$$.events.dispatchEvent = function($src$jscomp$22$$, $e$jscomp$23$$) {
  $goog$$.$asserts$.assert($goog$$.events.$Listenable$.$a$($src$jscomp$22$$), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance.");
  return $src$jscomp$22$$.dispatchEvent($e$jscomp$23$$);
};
$goog$$.events.$protectBrowserEventEntryPoint$ = function($errorHandler$jscomp$2$$) {
  $goog$$.events.$handleBrowserEvent_$ = $errorHandler$jscomp$2$$.$protectEntryPoint$($goog$$.events.$handleBrowserEvent_$);
};
$goog$$.events.$handleBrowserEvent_$ = function($listener$jscomp$110_result$jscomp$16$$, $evt$jscomp$25_opt_evt$$) {
  if ($listener$jscomp$110_result$jscomp$16$$.removed) {
    return !0;
  }
  if (!$goog$$.events.$BrowserFeature$.$HAS_W3C_EVENT_SUPPORT$) {
    var $ancestors_ieEvent$$ = $evt$jscomp$25_opt_evt$$ || $goog$$.$getObjectByName$("window.event");
    $evt$jscomp$25_opt_evt$$ = new $goog$$.events.$BrowserEvent$($ancestors_ieEvent$$, this);
    var $retval$jscomp$1$$ = !0;
    if ($goog$$.events.$CAPTURE_SIMULATION_MODE$ == $goog$$.events.$CaptureSimulationMode$.$ON$) {
      if (!$goog$$.events.$isMarkedIeEvent_$($ancestors_ieEvent$$)) {
        $goog$$.events.$markIeEvent_$($ancestors_ieEvent$$);
        for (var $ancestors_ieEvent$$ = [], $parent$jscomp$3_type$jscomp$137$$ = $evt$jscomp$25_opt_evt$$.$a$; $parent$jscomp$3_type$jscomp$137$$; $parent$jscomp$3_type$jscomp$137$$ = $parent$jscomp$3_type$jscomp$137$$.parentNode) {
          $ancestors_ieEvent$$.push($parent$jscomp$3_type$jscomp$137$$);
        }
        for (var $parent$jscomp$3_type$jscomp$137$$ = $listener$jscomp$110_result$jscomp$16$$.type, $i$jscomp$98$$ = $ancestors_ieEvent$$.length - 1; !$evt$jscomp$25_opt_evt$$.$b$ && 0 <= $i$jscomp$98$$; $i$jscomp$98$$--) {
          $evt$jscomp$25_opt_evt$$.$a$ = $ancestors_ieEvent$$[$i$jscomp$98$$], $listener$jscomp$110_result$jscomp$16$$ = $goog$$.events.$fireListeners_$($ancestors_ieEvent$$[$i$jscomp$98$$], $parent$jscomp$3_type$jscomp$137$$, !0, $evt$jscomp$25_opt_evt$$), $retval$jscomp$1$$ = $retval$jscomp$1$$ && $listener$jscomp$110_result$jscomp$16$$;
        }
        for ($i$jscomp$98$$ = 0; !$evt$jscomp$25_opt_evt$$.$b$ && $i$jscomp$98$$ < $ancestors_ieEvent$$.length; $i$jscomp$98$$++) {
          $evt$jscomp$25_opt_evt$$.$a$ = $ancestors_ieEvent$$[$i$jscomp$98$$], $listener$jscomp$110_result$jscomp$16$$ = $goog$$.events.$fireListeners_$($ancestors_ieEvent$$[$i$jscomp$98$$], $parent$jscomp$3_type$jscomp$137$$, !1, $evt$jscomp$25_opt_evt$$), $retval$jscomp$1$$ = $retval$jscomp$1$$ && $listener$jscomp$110_result$jscomp$16$$;
        }
      }
    } else {
      $retval$jscomp$1$$ = $goog$$.events.$fireListener$($listener$jscomp$110_result$jscomp$16$$, $evt$jscomp$25_opt_evt$$);
    }
    return $retval$jscomp$1$$;
  }
  return $goog$$.events.$fireListener$($listener$jscomp$110_result$jscomp$16$$, new $goog$$.events.$BrowserEvent$($evt$jscomp$25_opt_evt$$, this));
};
$goog$$.events.$markIeEvent_$ = function($e$jscomp$24$$) {
  var $useReturnValue$$ = !1;
  if (0 == $e$jscomp$24$$.keyCode) {
    try {
      $e$jscomp$24$$.keyCode = -1;
      return;
    } catch ($ex$jscomp$10$$) {
      $useReturnValue$$ = !0;
    }
  }
  if ($useReturnValue$$ || void 0 == $e$jscomp$24$$.returnValue) {
    $e$jscomp$24$$.returnValue = !0;
  }
};
$goog$$.events.$isMarkedIeEvent_$ = function($e$jscomp$25$$) {
  return 0 > $e$jscomp$25$$.keyCode || void 0 != $e$jscomp$25$$.returnValue;
};
$goog$$.events.$uniqueIdCounter_$ = 0;
$goog$$.events.$getUniqueId$ = function($identifier$jscomp$2$$) {
  return $identifier$jscomp$2$$ + "_" + $goog$$.events.$uniqueIdCounter_$++;
};
$goog$$.events.$getListenerMap_$ = function($listenerMap$jscomp$8_src$jscomp$23$$) {
  $listenerMap$jscomp$8_src$jscomp$23$$ = $listenerMap$jscomp$8_src$jscomp$23$$[$goog$$.events.$LISTENER_MAP_PROP_$];
  return $listenerMap$jscomp$8_src$jscomp$23$$ instanceof $goog$$.events.$ListenerMap$ ? $listenerMap$jscomp$8_src$jscomp$23$$ : null;
};
$goog$$.events.$LISTENER_WRAPPER_PROP_$ = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
$goog$$.events.$wrapListener$ = function($listener$jscomp$111$$) {
  $goog$$.$asserts$.assert($listener$jscomp$111$$, "Listener can not be null.");
  if ($goog$$.$isFunction$($listener$jscomp$111$$)) {
    return $listener$jscomp$111$$;
  }
  $goog$$.$asserts$.assert($listener$jscomp$111$$.handleEvent, "An object listener must have handleEvent method.");
  $listener$jscomp$111$$[$goog$$.events.$LISTENER_WRAPPER_PROP_$] || ($listener$jscomp$111$$[$goog$$.events.$LISTENER_WRAPPER_PROP_$] = function($e$jscomp$26$$) {
    return $listener$jscomp$111$$.handleEvent($e$jscomp$26$$);
  });
  return $listener$jscomp$111$$[$goog$$.events.$LISTENER_WRAPPER_PROP_$];
};
$goog$$.debug.$entryPointRegistry$.register(function($transformer$jscomp$2$$) {
  $goog$$.events.$handleBrowserEvent_$ = $transformer$jscomp$2$$($goog$$.events.$handleBrowserEvent_$);
});
$goog$$.events.EventTarget = function() {
  $goog$$.$Disposable$.call(this);
  this.$eventTargetListeners_$ = new $goog$$.events.$ListenerMap$(this);
  this.$h$ = this;
  this.$f$ = null;
};
$goog$$.$inherits$($goog$$.events.EventTarget, $goog$$.$Disposable$);
$goog$$.events.$Listenable$.$i$();
$goog$$.events.EventTarget.$b$ = 1000;
$JSCompiler_prototypeAlias$$ = $goog$$.events.EventTarget.prototype;
$JSCompiler_prototypeAlias$$.addEventListener = function($type$jscomp$138$$, $handler$jscomp$16$$, $opt_capture$jscomp$2$$, $opt_handlerScope$$) {
  $goog$$.events.listen(this, $type$jscomp$138$$, $handler$jscomp$16$$, $opt_capture$jscomp$2$$, $opt_handlerScope$$);
};
$JSCompiler_prototypeAlias$$.removeEventListener = function($type$jscomp$139$$, $handler$jscomp$17$$, $opt_capture$jscomp$3$$, $opt_handlerScope$jscomp$1$$) {
  $goog$$.events.$unlisten$(this, $type$jscomp$139$$, $handler$jscomp$17$$, $opt_capture$jscomp$3$$, $opt_handlerScope$jscomp$1$$);
};
$JSCompiler_prototypeAlias$$.dispatchEvent = function($e$jscomp$27$$) {
  $JSCompiler_StaticMethods_assertInitialized_$$(this);
  var $ancestor$$ = this.$f$;
  if ($ancestor$$) {
    var $ancestorsTree$$ = [];
    for (var $ancestorCount$$ = 1; $ancestor$$; $ancestor$$ = $ancestor$$.$f$) {
      $ancestorsTree$$.push($ancestor$$), $goog$$.$asserts$.assert(1000 > ++$ancestorCount$$, "infinite loop");
    }
  }
  return $goog$$.events.EventTarget.$a$(this.$h$, $e$jscomp$27$$, $ancestorsTree$$);
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function() {
  $goog$$.events.EventTarget.$superClass_$.$disposeInternal$.call(this);
  this.$eventTargetListeners_$ && this.$eventTargetListeners_$.removeAll(void 0);
  this.$f$ = null;
};
$JSCompiler_prototypeAlias$$.listen = function($type$jscomp$140$$, $listener$jscomp$112$$, $opt_useCapture$jscomp$8$$, $opt_listenerScope$jscomp$4$$) {
  $JSCompiler_StaticMethods_assertInitialized_$$(this);
  return this.$eventTargetListeners_$.add(String($type$jscomp$140$$), $listener$jscomp$112$$, !1, $opt_useCapture$jscomp$8$$, $opt_listenerScope$jscomp$4$$);
};
$JSCompiler_prototypeAlias$$.$listenOnce$ = function($type$jscomp$141$$, $listener$jscomp$113$$, $opt_useCapture$jscomp$9$$, $opt_listenerScope$jscomp$5$$) {
  return this.$eventTargetListeners_$.add(String($type$jscomp$141$$), $listener$jscomp$113$$, !0, $opt_useCapture$jscomp$9$$, $opt_listenerScope$jscomp$5$$);
};
$JSCompiler_prototypeAlias$$.$unlisten$ = function($type$jscomp$142$$, $listener$jscomp$114$$, $opt_useCapture$jscomp$10$$, $opt_listenerScope$jscomp$6$$) {
  return this.$eventTargetListeners_$.remove(String($type$jscomp$142$$), $listener$jscomp$114$$, $opt_useCapture$jscomp$10$$, $opt_listenerScope$jscomp$6$$);
};
$JSCompiler_prototypeAlias$$.$unlistenByKey$ = function($key$jscomp$81$$) {
  return $JSCompiler_StaticMethods_removeByKey$$(this.$eventTargetListeners_$, $key$jscomp$81$$);
};
$JSCompiler_prototypeAlias$$.$fireListeners$ = function($listenerArray$jscomp$8_type$jscomp$143$$, $capture$jscomp$9$$, $eventObject$jscomp$5$$) {
  $listenerArray$jscomp$8_type$jscomp$143$$ = this.$eventTargetListeners_$.$a$[String($listenerArray$jscomp$8_type$jscomp$143$$)];
  if (!$listenerArray$jscomp$8_type$jscomp$143$$) {
    return !0;
  }
  $listenerArray$jscomp$8_type$jscomp$143$$ = $listenerArray$jscomp$8_type$jscomp$143$$.concat();
  for (var $rv$jscomp$12$$ = !0, $i$jscomp$99$$ = 0; $i$jscomp$99$$ < $listenerArray$jscomp$8_type$jscomp$143$$.length; ++$i$jscomp$99$$) {
    var $listener$jscomp$115$$ = $listenerArray$jscomp$8_type$jscomp$143$$[$i$jscomp$99$$];
    if ($listener$jscomp$115$$ && !$listener$jscomp$115$$.removed && $listener$jscomp$115$$.capture == $capture$jscomp$9$$) {
      var $listenerFn$jscomp$1$$ = $listener$jscomp$115$$.listener, $listenerHandler$jscomp$1$$ = $listener$jscomp$115$$.$handler$ || $listener$jscomp$115$$.src;
      $listener$jscomp$115$$.$callOnce$ && this.$unlistenByKey$($listener$jscomp$115$$);
      $rv$jscomp$12$$ = !1 !== $listenerFn$jscomp$1$$.call($listenerHandler$jscomp$1$$, $eventObject$jscomp$5$$) && $rv$jscomp$12$$;
    }
  }
  return $rv$jscomp$12$$ && 0 != $eventObject$jscomp$5$$.$returnValue_$;
};
$JSCompiler_prototypeAlias$$.$getListeners$ = function($type$jscomp$144$$, $capture$jscomp$10$$) {
  return this.$eventTargetListeners_$.$getListeners$(String($type$jscomp$144$$), $capture$jscomp$10$$);
};
$JSCompiler_prototypeAlias$$.$getListener$ = function($type$jscomp$145$$, $listener$jscomp$116$$, $capture$jscomp$11$$, $opt_listenerScope$jscomp$7$$) {
  return this.$eventTargetListeners_$.$getListener$(String($type$jscomp$145$$), $listener$jscomp$116$$, $capture$jscomp$11$$, $opt_listenerScope$jscomp$7$$);
};
$JSCompiler_prototypeAlias$$.hasListener = function($opt_type$jscomp$13$$, $opt_capture$jscomp$4$$) {
  return this.$eventTargetListeners_$.hasListener($goog$$.$isDef$($opt_type$jscomp$13$$) ? String($opt_type$jscomp$13$$) : void 0, $opt_capture$jscomp$4$$);
};
var $JSCompiler_StaticMethods_assertInitialized_$$ = function($JSCompiler_StaticMethods_assertInitialized_$self$$) {
  $goog$$.$asserts$.assert($JSCompiler_StaticMethods_assertInitialized_$self$$.$eventTargetListeners_$, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
};
$goog$$.events.EventTarget.$a$ = function($target$jscomp$64$$, $e$jscomp$28$$, $opt_ancestorsTree$$) {
  var $type$jscomp$146$$ = $e$jscomp$28$$.type || $e$jscomp$28$$;
  if ($goog$$.$isString$($e$jscomp$28$$)) {
    $e$jscomp$28$$ = new $goog$$.events.Event($e$jscomp$28$$, $target$jscomp$64$$);
  } else {
    if ($e$jscomp$28$$ instanceof $goog$$.events.Event) {
      $e$jscomp$28$$.$f$ = $e$jscomp$28$$.$f$ || $target$jscomp$64$$;
    } else {
      var $oldEvent_rv$jscomp$13$$ = $e$jscomp$28$$;
      $e$jscomp$28$$ = new $goog$$.events.Event($type$jscomp$146$$, $target$jscomp$64$$);
      $goog$$.object.extend($e$jscomp$28$$, $oldEvent_rv$jscomp$13$$);
    }
  }
  var $oldEvent_rv$jscomp$13$$ = !0;
  if ($opt_ancestorsTree$$) {
    for (var $i$jscomp$100$$ = $opt_ancestorsTree$$.length - 1; !$e$jscomp$28$$.$b$ && 0 <= $i$jscomp$100$$; $i$jscomp$100$$--) {
      var $currentTarget$$ = $e$jscomp$28$$.$a$ = $opt_ancestorsTree$$[$i$jscomp$100$$];
      $oldEvent_rv$jscomp$13$$ = $currentTarget$$.$fireListeners$($type$jscomp$146$$, !0, $e$jscomp$28$$) && $oldEvent_rv$jscomp$13$$;
    }
  }
  $e$jscomp$28$$.$b$ || ($currentTarget$$ = $e$jscomp$28$$.$a$ = $target$jscomp$64$$, $oldEvent_rv$jscomp$13$$ = $currentTarget$$.$fireListeners$($type$jscomp$146$$, !0, $e$jscomp$28$$) && $oldEvent_rv$jscomp$13$$, $e$jscomp$28$$.$b$ || ($oldEvent_rv$jscomp$13$$ = $currentTarget$$.$fireListeners$($type$jscomp$146$$, !1, $e$jscomp$28$$) && $oldEvent_rv$jscomp$13$$));
  if ($opt_ancestorsTree$$) {
    for ($i$jscomp$100$$ = 0; !$e$jscomp$28$$.$b$ && $i$jscomp$100$$ < $opt_ancestorsTree$$.length; $i$jscomp$100$$++) {
      $currentTarget$$ = $e$jscomp$28$$.$a$ = $opt_ancestorsTree$$[$i$jscomp$100$$], $oldEvent_rv$jscomp$13$$ = $currentTarget$$.$fireListeners$($type$jscomp$146$$, !1, $e$jscomp$28$$) && $oldEvent_rv$jscomp$13$$;
    }
  }
  return $oldEvent_rv$jscomp$13$$;
};
$goog$$.$setTestOnly$("goog.testing.stacktrace");
$goog$$.$testing$ = {};
$goog$$.$testing$.$stacktrace$ = {};
$goog$$.$testing$.$stacktrace$.$Frame$ = function($context$jscomp$18$$, $name$jscomp$88$$, $alias$$, $path$jscomp$17$$) {
  this.$b$ = $context$jscomp$18$$;
  this.$a$ = $name$jscomp$88$$;
  this.$c$ = $alias$$;
  this.$f$ = $path$jscomp$17$$;
};
var $JSCompiler_StaticMethods_isAnonymous$$ = function($JSCompiler_StaticMethods_isAnonymous$self$$) {
  return !$JSCompiler_StaticMethods_isAnonymous$self$$.$a$ || "[object Object]" == $JSCompiler_StaticMethods_isAnonymous$self$$.$b$;
}, $JSCompiler_StaticMethods_toCanonicalString$$ = function($JSCompiler_StaticMethods_toCanonicalString$self$$) {
  var $htmlEscape$$ = $goog$$.$testing$.$stacktrace$.$htmlEscape_$, $canonical_deobfuscate$$ = $goog$$.$testing$.$stacktrace$.$maybeDeobfuscateFunctionName_$, $canonical_deobfuscate$$ = [$JSCompiler_StaticMethods_toCanonicalString$self$$.$b$ ? $htmlEscape$$($JSCompiler_StaticMethods_toCanonicalString$self$$.$b$) + "." : "", $JSCompiler_StaticMethods_toCanonicalString$self$$.$a$ ? $htmlEscape$$($canonical_deobfuscate$$($JSCompiler_StaticMethods_toCanonicalString$self$$.$a$)) : "anonymous", $JSCompiler_StaticMethods_toCanonicalString$self$$.$c$ ? 
  " [as " + $htmlEscape$$($canonical_deobfuscate$$($JSCompiler_StaticMethods_toCanonicalString$self$$.$c$)) + "]" : ""];
  $JSCompiler_StaticMethods_toCanonicalString$self$$.$f$ && ($canonical_deobfuscate$$.push(" at "), $canonical_deobfuscate$$.push($htmlEscape$$($JSCompiler_StaticMethods_toCanonicalString$self$$.$f$)));
  return $canonical_deobfuscate$$.join("");
};
$goog$$.$testing$.$stacktrace$.$MAX_DEPTH_$ = 20;
$goog$$.$testing$.$stacktrace$.$MAX_FIREFOX_FRAMESTRING_LENGTH_$ = 500000;
$goog$$.$testing$.$stacktrace$.$IDENTIFIER_PATTERN_$ = "[a-zA-Z_$][\\w$]*";
$goog$$.$testing$.$stacktrace$.$V8_ALIAS_PATTERN_$ = "(?: \\[as (" + $goog$$.$testing$.$stacktrace$.$IDENTIFIER_PATTERN_$ + ")\\])?";
$goog$$.$testing$.$stacktrace$.$V8_CONTEXT_PATTERN_$ = "(?:((?:new )?(?:\\[object Object\\]|" + $goog$$.$testing$.$stacktrace$.$IDENTIFIER_PATTERN_$ + "(?:\\." + $goog$$.$testing$.$stacktrace$.$IDENTIFIER_PATTERN_$ + ")*))\\.)?";
$goog$$.$testing$.$stacktrace$.$V8_FUNCTION_NAME_PATTERN_$ = "(?:new )?(?:" + $goog$$.$testing$.$stacktrace$.$IDENTIFIER_PATTERN_$ + "|<anonymous>)";
$goog$$.$testing$.$stacktrace$.$V8_FUNCTION_CALL_PATTERN_$ = " " + $goog$$.$testing$.$stacktrace$.$V8_CONTEXT_PATTERN_$ + "(" + $goog$$.$testing$.$stacktrace$.$V8_FUNCTION_NAME_PATTERN_$ + ")" + $goog$$.$testing$.$stacktrace$.$V8_ALIAS_PATTERN_$;
$goog$$.$testing$.$stacktrace$.$URL_PATTERN_$ = "((?:http|https|file)://[^\\s)]+|javascript:.*)";
$goog$$.$testing$.$stacktrace$.$CHROME_URL_PATTERN_$ = " (?:\\(unknown source\\)|\\(native\\)|\\((.+)\\)|(.+))";
$goog$$.$testing$.$stacktrace$.$V8_STACK_FRAME_REGEXP_$ = new RegExp("^    at(?:" + $goog$$.$testing$.$stacktrace$.$V8_FUNCTION_CALL_PATTERN_$ + ")?" + $goog$$.$testing$.$stacktrace$.$CHROME_URL_PATTERN_$ + "$");
$goog$$.$testing$.$stacktrace$.$FIREFOX_FUNCTION_CALL_PATTERN_$ = "(" + $goog$$.$testing$.$stacktrace$.$IDENTIFIER_PATTERN_$ + "(?:\\." + $goog$$.$testing$.$stacktrace$.$IDENTIFIER_PATTERN_$ + ")*)?(\\(.*\\))?@";
$goog$$.$testing$.$stacktrace$.$FIREFOX_STACK_FRAME_REGEXP_$ = new RegExp("^" + $goog$$.$testing$.$stacktrace$.$FIREFOX_FUNCTION_CALL_PATTERN_$ + "(?::0|" + $goog$$.$testing$.$stacktrace$.$URL_PATTERN_$ + ")$");
$goog$$.$testing$.$stacktrace$.$OPERA_ANONYMOUS_FUNCTION_NAME_PATTERN_$ = "<anonymous function(?:\\: (?:(" + $goog$$.$testing$.$stacktrace$.$IDENTIFIER_PATTERN_$ + "(?:\\." + $goog$$.$testing$.$stacktrace$.$IDENTIFIER_PATTERN_$ + ")*)\\.)?(" + $goog$$.$testing$.$stacktrace$.$IDENTIFIER_PATTERN_$ + "))?>";
$goog$$.$testing$.$stacktrace$.$OPERA_FUNCTION_CALL_PATTERN_$ = "(?:(?:(" + $goog$$.$testing$.$stacktrace$.$IDENTIFIER_PATTERN_$ + ")|" + $goog$$.$testing$.$stacktrace$.$OPERA_ANONYMOUS_FUNCTION_NAME_PATTERN_$ + ")(\\(.*\\)))?@";
$goog$$.$testing$.$stacktrace$.$OPERA_STACK_FRAME_REGEXP_$ = new RegExp("^" + $goog$$.$testing$.$stacktrace$.$OPERA_FUNCTION_CALL_PATTERN_$ + $goog$$.$testing$.$stacktrace$.$URL_PATTERN_$ + "?$");
$goog$$.$testing$.$stacktrace$.$FUNCTION_SOURCE_REGEXP_$ = new RegExp("^function (" + $goog$$.$testing$.$stacktrace$.$IDENTIFIER_PATTERN_$ + ")");
$goog$$.$testing$.$stacktrace$.$IE_FUNCTION_CALL_PATTERN_$ = "(" + $goog$$.$testing$.$stacktrace$.$IDENTIFIER_PATTERN_$ + "(?:\\." + $goog$$.$testing$.$stacktrace$.$IDENTIFIER_PATTERN_$ + ")*(?:\\s+\\w+)*)";
$goog$$.$testing$.$stacktrace$.$IE_STACK_FRAME_REGEXP_$ = new RegExp("^   at " + $goog$$.$testing$.$stacktrace$.$IE_FUNCTION_CALL_PATTERN_$ + "\\s*\\((eval code:[^)]*|Unknown script code:[^)]*|" + $goog$$.$testing$.$stacktrace$.$URL_PATTERN_$ + ")\\)?$");
$goog$$.$testing$.$stacktrace$.$followCallChain_$ = function() {
  for (var $frames$$ = [], $fn$jscomp$15$$ = arguments.callee.caller, $depth$jscomp$2$$ = 0; $fn$jscomp$15$$ && $depth$jscomp$2$$ < $goog$$.$testing$.$stacktrace$.$MAX_DEPTH_$;) {
    var $match$jscomp$5$$ = Function.prototype.toString.call($fn$jscomp$15$$).match($goog$$.$testing$.$stacktrace$.$FUNCTION_SOURCE_REGEXP_$);
    $frames$$.push(new $goog$$.$testing$.$stacktrace$.$Frame$("", $match$jscomp$5$$ ? $match$jscomp$5$$[1] : "", "", ""));
    try {
      $fn$jscomp$15$$ = $fn$jscomp$15$$.caller;
    } catch ($e$jscomp$29$$) {
      break;
    }
    $depth$jscomp$2$$++;
  }
  return $frames$$;
};
$goog$$.$testing$.$stacktrace$.$parseStackFrame_$ = function($frameStr$$) {
  var $m$$ = $frameStr$$.match($goog$$.$testing$.$stacktrace$.$V8_STACK_FRAME_REGEXP_$);
  return $m$$ ? new $goog$$.$testing$.$stacktrace$.$Frame$($m$$[1] || "", $m$$[2] || "", $m$$[3] || "", $m$$[4] || $m$$[5] || $m$$[6] || "") : $frameStr$$.length > $goog$$.$testing$.$stacktrace$.$MAX_FIREFOX_FRAMESTRING_LENGTH_$ ? null : ($m$$ = $frameStr$$.match($goog$$.$testing$.$stacktrace$.$FIREFOX_STACK_FRAME_REGEXP_$)) ? new $goog$$.$testing$.$stacktrace$.$Frame$("", $m$$[1] || "", "", $m$$[3] || "") : ($m$$ = $frameStr$$.match($goog$$.$testing$.$stacktrace$.$OPERA_STACK_FRAME_REGEXP_$)) ? 
  new $goog$$.$testing$.$stacktrace$.$Frame$($m$$[2] || "", $m$$[1] || $m$$[3] || "", "", $m$$[5] || "") : ($m$$ = $frameStr$$.match($goog$$.$testing$.$stacktrace$.$IE_STACK_FRAME_REGEXP_$)) ? new $goog$$.$testing$.$stacktrace$.$Frame$("", $m$$[1] || "", "", $m$$[2] || "") : null;
};
$goog$$.$testing$.$stacktrace$.$setDeobfuscateFunctionName$ = function($fn$jscomp$16$$) {
  $goog$$.$testing$.$stacktrace$.$deobfuscateFunctionName_$ = $fn$jscomp$16$$;
};
$goog$$.$testing$.$stacktrace$.$maybeDeobfuscateFunctionName_$ = function($name$jscomp$89$$) {
  return $goog$$.$testing$.$stacktrace$.$deobfuscateFunctionName_$ ? $goog$$.$testing$.$stacktrace$.$deobfuscateFunctionName_$($name$jscomp$89$$) : $name$jscomp$89$$;
};
$goog$$.$testing$.$stacktrace$.$htmlEscape_$ = function($text$jscomp$12$$) {
  return $text$jscomp$12$$.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
};
$goog$$.$testing$.$stacktrace$.$framesToString_$ = function($frames$jscomp$1$$) {
  for (var $lastIndex$$ = $frames$jscomp$1$$.length - 1; $frames$jscomp$1$$[$lastIndex$$] && $JSCompiler_StaticMethods_isAnonymous$$($frames$jscomp$1$$[$lastIndex$$]);) {
    $lastIndex$$--;
  }
  for (var $privateAssertIndex$$ = -1, $i$jscomp$101$$ = 0; $i$jscomp$101$$ < $frames$jscomp$1$$.length; $i$jscomp$101$$++) {
    if ($frames$jscomp$1$$[$i$jscomp$101$$] && "_assert" == $frames$jscomp$1$$[$i$jscomp$101$$].$a$) {
      $privateAssertIndex$$ = $i$jscomp$101$$;
      break;
    }
  }
  for (var $canonical$jscomp$1$$ = [], $i$jscomp$101$$ = $privateAssertIndex$$ + 1; $i$jscomp$101$$ <= $lastIndex$$; $i$jscomp$101$$++) {
    $canonical$jscomp$1$$.push("> "), $frames$jscomp$1$$[$i$jscomp$101$$] ? $canonical$jscomp$1$$.push($JSCompiler_StaticMethods_toCanonicalString$$($frames$jscomp$1$$[$i$jscomp$101$$])) : $canonical$jscomp$1$$.push("(unknown)"), $canonical$jscomp$1$$.push("\n");
  }
  return $canonical$jscomp$1$$.join("");
};
$goog$$.$testing$.$stacktrace$.$parse_$ = function($lines_stack$jscomp$4$$) {
  $lines_stack$jscomp$4$$ = $lines_stack$jscomp$4$$.replace(/\s*$/, "").split("\n");
  for (var $frames$jscomp$2$$ = [], $i$jscomp$102$$ = 0; $i$jscomp$102$$ < $lines_stack$jscomp$4$$.length; $i$jscomp$102$$++) {
    $frames$jscomp$2$$.push($goog$$.$testing$.$stacktrace$.$parseStackFrame_$($lines_stack$jscomp$4$$[$i$jscomp$102$$]));
  }
  return $frames$jscomp$2$$;
};
$goog$$.$testing$.$stacktrace$.$canonicalize$ = function($frames$jscomp$3_stack$jscomp$5$$) {
  $frames$jscomp$3_stack$jscomp$5$$ = $goog$$.$testing$.$stacktrace$.$parse_$($frames$jscomp$3_stack$jscomp$5$$);
  return $goog$$.$testing$.$stacktrace$.$framesToString_$($frames$jscomp$3_stack$jscomp$5$$);
};
$goog$$.$testing$.$stacktrace$.$getNativeStack_$ = function() {
  var $tmpError$$ = Error();
  if ($tmpError$$.stack) {
    return $tmpError$$.stack;
  }
  try {
    null.x();
  } catch ($e$jscomp$30$$) {
    return $e$jscomp$30$$.stack;
  }
  return "";
};
$goog$$.$testing$.$stacktrace$.get = function() {
  var $stack$jscomp$6$$ = $goog$$.$testing$.$stacktrace$.$getNativeStack_$(), $frames$jscomp$4$$;
  $stack$jscomp$6$$ ? $goog$$.isArray($stack$jscomp$6$$) ? $frames$jscomp$4$$ = $goog$$.$testing$.$stacktrace$.$callSitesToFrames_$($stack$jscomp$6$$) : $frames$jscomp$4$$ = $goog$$.$testing$.$stacktrace$.$parse_$($stack$jscomp$6$$) : $frames$jscomp$4$$ = $goog$$.$testing$.$stacktrace$.$followCallChain_$();
  return $goog$$.$testing$.$stacktrace$.$framesToString_$($frames$jscomp$4$$);
};
$goog$$.$testing$.$stacktrace$.$callSitesToFrames_$ = function($stack$jscomp$7$$) {
  for (var $frames$jscomp$5$$ = [], $i$jscomp$103$$ = 0; $i$jscomp$103$$ < $stack$jscomp$7$$.length; $i$jscomp$103$$++) {
    var $callSite_path$jscomp$18$$ = $stack$jscomp$7$$[$i$jscomp$103$$], $functionName$jscomp$1$$ = $callSite_path$jscomp$18$$.getFunctionName() || "unknown", $fileName$jscomp$1$$ = $callSite_path$jscomp$18$$.getFileName(), $callSite_path$jscomp$18$$ = $fileName$jscomp$1$$ ? $fileName$jscomp$1$$ + ":" + $callSite_path$jscomp$18$$.getLineNumber() + ":" + $callSite_path$jscomp$18$$.getColumnNumber() : "unknown";
    $frames$jscomp$5$$.push(new $goog$$.$testing$.$stacktrace$.$Frame$("", $functionName$jscomp$1$$, "", $callSite_path$jscomp$18$$));
  }
  return $frames$jscomp$5$$;
};
$goog$$.$exportSymbol$("setDeobfuscateFunctionName", $goog$$.$testing$.$stacktrace$.$setDeobfuscateFunctionName$);
$goog$$.$setTestOnly$();
$goog$$.$testing$.$JsUnitException$ = function($comment$$, $opt_message$jscomp$19$$) {
  this.$isJsUnitException$ = !0;
  this.message = ($comment$$ ? $comment$$ : "") + ($comment$$ && $opt_message$jscomp$19$$ ? "\n" : "") + ($opt_message$jscomp$19$$ ? $opt_message$jscomp$19$$ : "");
  $goog$$.$testing$.$stacktrace$.get();
  this.comment = $comment$$ || null;
  Error.captureStackTrace ? Error.captureStackTrace(this, $goog$$.$testing$.$JsUnitException$) : this.stack = Error().stack || "";
};
$goog$$.$inherits$($goog$$.$testing$.$JsUnitException$, Error);
$goog$$.$testing$.$JsUnitException$.prototype.toString = function() {
  return this.message;
};
$goog$$.$testing$.$asserts$ = {};
$goog$$.$setTestOnly$();
var $DOUBLE_EQUALITY_PREDICATE$$ = function($var1$$, $var2$$) {
  return $var1$$ == $var2$$;
}, $TO_STRING_EQUALITY_PREDICATE$$ = function($var1$jscomp$1$$, $var2$jscomp$1$$) {
  return $var1$jscomp$1$$.toString() === $var2$jscomp$1$$.toString();
}, $PRIMITIVE_EQUALITY_PREDICATES$$ = {String:$DOUBLE_EQUALITY_PREDICATE$$, Number:$DOUBLE_EQUALITY_PREDICATE$$, Boolean:$DOUBLE_EQUALITY_PREDICATE$$, Date:function($date1$$, $date2$$) {
  return $date1$$.getTime() == $date2$$.getTime();
}, RegExp:$TO_STRING_EQUALITY_PREDICATE$$, Function:$TO_STRING_EQUALITY_PREDICATE$$};
$goog$$.$testing$.$asserts$.$numberRoughEqualityPredicate_$ = function($var1$jscomp$2$$, $var2$jscomp$2$$, $tolerance$$) {
  return Math.abs($var1$jscomp$2$$ - $var2$jscomp$2$$) <= $tolerance$$;
};
$goog$$.$testing$.$asserts$.$primitiveRoughEqualityPredicates_$ = {Number:$goog$$.$testing$.$asserts$.$numberRoughEqualityPredicate_$};
var _trueTypeOf = function($something$$) {
  var $result$jscomp$17$$ = typeof $something$$;
  try {
    switch($result$jscomp$17$$) {
      case "object":
        if (null == $something$$) {
          $result$jscomp$17$$ = "null";
          break;
        }
      case "function":
        switch($something$$.constructor) {
          case (new String("")).constructor:
            $result$jscomp$17$$ = "String";
            break;
          case (new Boolean(!0)).constructor:
            $result$jscomp$17$$ = "Boolean";
            break;
          case (new Number(0)).constructor:
            $result$jscomp$17$$ = "Number";
            break;
          case [].constructor:
            $result$jscomp$17$$ = "Array";
            break;
          case RegExp().constructor:
            $result$jscomp$17$$ = "RegExp";
            break;
          case (new Date).constructor:
            $result$jscomp$17$$ = "Date";
            break;
          case Function:
            $result$jscomp$17$$ = "Function";
            break;
          default:
            var $m$jscomp$1$$ = $something$$.constructor.toString().match(/function\s*([^( ]+)\(/);
            $m$jscomp$1$$ && ($result$jscomp$17$$ = $m$jscomp$1$$[1]);
        }
    }
  } catch ($e$jscomp$31$$) {
  } finally {
    $result$jscomp$17$$ = $result$jscomp$17$$.substr(0, 1).toUpperCase() + $result$jscomp$17$$.substr(1);
  }
  return $result$jscomp$17$$;
}, _displayStringForValue = function($aVar$$) {
  try {
    var $result$jscomp$18$$ = "<" + String($aVar$$) + ">";
  } catch ($ex$jscomp$11$$) {
    $result$jscomp$18$$ = "<toString failed: " + $ex$jscomp$11$$.message + ">";
  }
  null !== $aVar$$ && void 0 !== $aVar$$ && ($result$jscomp$18$$ += " (" + _trueTypeOf($aVar$$) + ")");
  return $result$jscomp$18$$;
}, $fail$$ = function($failureMessage$$) {
  $goog$$.$testing$.$asserts$.$raiseException$("Call to fail()", $failureMessage$$);
}, $commentArg$$ = function($expectedNumberOfNonCommentArgs$jscomp$1$$, $args$jscomp$11$$) {
  return $args$jscomp$11$$.length == $expectedNumberOfNonCommentArgs$jscomp$1$$ + 1 ? $args$jscomp$11$$[0] : null;
}, $nonCommentArg$$ = function($desiredNonCommentArgIndex$$, $expectedNumberOfNonCommentArgs$jscomp$2$$, $args$jscomp$12$$) {
  return $args$jscomp$12$$.length == $expectedNumberOfNonCommentArgs$jscomp$2$$ + 1 ? $args$jscomp$12$$[$desiredNonCommentArgIndex$$] : $args$jscomp$12$$[$desiredNonCommentArgIndex$$ - 1];
}, _validateArguments = function($expectedNumberOfNonCommentArgs$jscomp$3$$, $args$jscomp$13$$) {
  _assert(null, $args$jscomp$13$$.length == $expectedNumberOfNonCommentArgs$jscomp$3$$ || $args$jscomp$13$$.length == $expectedNumberOfNonCommentArgs$jscomp$3$$ + 1 && $goog$$.$isString$($args$jscomp$13$$[0]), "Incorrect arguments passed to assert function");
}, _getCurrentTestCase = function() {
  var $testRunner$$ = $goog$$.global.G_testRunner;
  return $testRunner$$ ? $testRunner$$.$testCase$ : null;
}, _assert = function($comment$jscomp$1$$, $booleanValue$$, $failureMessage$jscomp$1$$) {
  $booleanValue$$ || $goog$$.$testing$.$asserts$.$raiseException$($comment$jscomp$1$$, $failureMessage$jscomp$1$$);
};
$goog$$.$testing$.$asserts$.$getDefaultErrorMsg_$ = function($expected$$, $actual$$) {
  var $msg$jscomp$21$$ = "Expected " + _displayStringForValue($expected$$) + " but was " + _displayStringForValue($actual$$);
  if ("string" == typeof $expected$$ && "string" == typeof $actual$$) {
    for (var $limit$jscomp$1_printString$$ = Math.min($expected$$.length, $actual$$.length), $commonPrefix$$ = 0; $commonPrefix$$ < $limit$jscomp$1_printString$$ && $expected$$.charAt($commonPrefix$$) == $actual$$.charAt($commonPrefix$$);) {
      $commonPrefix$$++;
    }
    for (var $commonSuffix$$ = 0; $commonSuffix$$ < $limit$jscomp$1_printString$$ && $expected$$.charAt($expected$$.length - $commonSuffix$$ - 1) == $actual$$.charAt($actual$$.length - $commonSuffix$$ - 1);) {
      $commonSuffix$$++;
    }
    $commonPrefix$$ + $commonSuffix$$ > $limit$jscomp$1_printString$$ && ($commonSuffix$$ = 0);
    if (2 < $commonPrefix$$ || 2 < $commonSuffix$$) {
      $limit$jscomp$1_printString$$ = function($expected$$) {
        var $actual$$ = Math.max(0, $commonPrefix$$ - 2), $msg$jscomp$21$$ = Math.min($expected$$.length, $expected$$.length - ($commonSuffix$$ - 2));
        return (0 < $actual$$ ? "..." : "") + $expected$$.substring($actual$$, $msg$jscomp$21$$) + ($msg$jscomp$21$$ < $expected$$.length ? "..." : "");
      }, $msg$jscomp$21$$ += "\nDifference was at position " + $commonPrefix$$ + ". Expected [" + $limit$jscomp$1_printString$$($expected$$) + "] vs. actual [" + $limit$jscomp$1_printString$$($actual$$) + "]";
    }
  }
  return $msg$jscomp$21$$;
};
var $assert$$ = function($a$jscomp$16$$, $opt_b$$) {
  _validateArguments(1, arguments);
  var $comment$jscomp$2$$ = $commentArg$$(1, arguments), $booleanValue$jscomp$1$$ = $nonCommentArg$$(1, 1, arguments);
  _assert($comment$jscomp$2$$, $goog$$.$isBoolean$($booleanValue$jscomp$1$$), "Bad argument to assert(boolean)");
  _assert($comment$jscomp$2$$, $booleanValue$jscomp$1$$, "Call to assert(boolean) with false");
}, $assertTrue$$ = function($a$jscomp$19$$, $opt_b$jscomp$3$$) {
  _validateArguments(1, arguments);
  var $comment$jscomp$5$$ = $commentArg$$(1, arguments), $booleanValue$jscomp$2$$ = $nonCommentArg$$(1, 1, arguments);
  _assert($comment$jscomp$5$$, $goog$$.$isBoolean$($booleanValue$jscomp$2$$), "Bad argument to assertTrue(boolean)");
  _assert($comment$jscomp$5$$, $booleanValue$jscomp$2$$, "Call to assertTrue(boolean) with false");
}, $assertEquals$$ = function($a$jscomp$21$$, $b$jscomp$14$$, $opt_c$$) {
  _validateArguments(2, arguments);
  var $var1$jscomp$3$$ = $nonCommentArg$$(1, 2, arguments), $var2$jscomp$3$$ = $nonCommentArg$$(2, 2, arguments);
  _assert($commentArg$$(2, arguments), $var1$jscomp$3$$ === $var2$jscomp$3$$, $goog$$.$testing$.$asserts$.$getDefaultErrorMsg_$($var1$jscomp$3$$, $var2$jscomp$3$$));
}, $assertNotNull$$ = function($a$jscomp$24$$, $opt_b$jscomp$6$$) {
  _validateArguments(1, arguments);
  _assert($commentArg$$(1, arguments), null !== $nonCommentArg$$(1, 1, arguments), "Expected not to be " + _displayStringForValue(null));
}, $assertNotUndefined$$ = function($a$jscomp$26$$, $opt_b$jscomp$8$$) {
  _validateArguments(1, arguments);
  _assert($commentArg$$(1, arguments), void 0 !== $nonCommentArg$$(1, 1, arguments), "Expected not to be " + _displayStringForValue(void 0));
};
$goog$$.$testing$.$asserts$.$callWithoutLogging$ = function($fn$jscomp$17$$) {
  var $testRunner$jscomp$1$$ = $goog$$.global.G_testRunner, $oldLogTestFailure$$ = $testRunner$jscomp$1$$.logTestFailure;
  try {
    $testRunner$jscomp$1$$.logTestFailure = void 0, $fn$jscomp$17$$();
  } finally {
    $testRunner$jscomp$1$$.logTestFailure = $oldLogTestFailure$$;
  }
};
$goog$$.$testing$.$asserts$.$EQUALITY_PREDICATE_CANT_PROCESS$ = null;
$goog$$.$testing$.$asserts$.$EQUALITY_PREDICATE_VARS_ARE_EQUAL$ = "";
$goog$$.$testing$.$asserts$.$findDifferences$ = function($expected$jscomp$1$$, $actual$jscomp$1$$, $opt_equalityPredicate$$) {
  function $innerAssertWithCycleCheck$$($expected$jscomp$1$$, $actual$jscomp$1$$, $opt_equalityPredicate$$) {
    for (var $innerAssertWithCycleCheck$$ = 0; $innerAssertWithCycleCheck$$ < $seen1$$.length; ++$innerAssertWithCycleCheck$$) {
      var $var1$jscomp$5$$ = $seen1$$[$innerAssertWithCycleCheck$$] === $expected$jscomp$1$$, $equalityPredicate$$ = $seen2$$[$innerAssertWithCycleCheck$$] === $actual$jscomp$1$$;
      if ($var1$jscomp$5$$ || $equalityPredicate$$) {
        $var1$jscomp$5$$ && $equalityPredicate$$ || $failures$$.push("Asymmetric cycle detected at " + $opt_equalityPredicate$$);
        return;
      }
    }
    $seen1$$.push($expected$jscomp$1$$);
    $seen2$$.push($actual$jscomp$1$$);
    $innerAssertImplementation$$($expected$jscomp$1$$, $actual$jscomp$1$$, $opt_equalityPredicate$$);
    $seen1$$.pop();
    $seen2$$.pop();
  }
  function $innerAssertImplementation$$($expected$jscomp$1$$, $actual$jscomp$1$$, $opt_equalityPredicate$$) {
    if ($expected$jscomp$1$$ !== $actual$jscomp$1$$) {
      var $innerAssertImplementation$$ = _trueTypeOf($expected$jscomp$1$$), $seen1$$ = _trueTypeOf($actual$jscomp$1$$);
      if ($innerAssertImplementation$$ == $seen1$$) {
        var $seen2$$ = "Array" == $innerAssertImplementation$$, $var1$jscomp$6$$ = $equalityPredicate$$($innerAssertImplementation$$, $expected$jscomp$1$$, $actual$jscomp$1$$);
        if ($var1$jscomp$6$$ != $goog$$.$testing$.$asserts$.$EQUALITY_PREDICATE_CANT_PROCESS$) {
          $var1$jscomp$6$$ != $goog$$.$testing$.$asserts$.$EQUALITY_PREDICATE_VARS_ARE_EQUAL$ && $failures$$.push($opt_equalityPredicate$$ + ": " + $var1$jscomp$6$$);
        } else {
          if ($seen2$$ && $expected$jscomp$1$$.length != $actual$jscomp$1$$.length) {
            $failures$$.push($opt_equalityPredicate$$ + ": Expected " + $expected$jscomp$1$$.length + "-element array but got a " + $actual$jscomp$1$$.length + "-element array");
          } else {
            if ("String" == $innerAssertImplementation$$) {
              $expected$jscomp$1$$ != $actual$jscomp$1$$ && $failures$$.push($opt_equalityPredicate$$ + ': Expected String "' + $expected$jscomp$1$$ + '" but got "' + $actual$jscomp$1$$ + '"');
            } else {
              var $var2$jscomp$6$$ = $opt_equalityPredicate$$ + ($seen2$$ ? "[%s]" : $opt_equalityPredicate$$ ? ".%s" : "%s");
              if ("undefined" != typeof Map && $expected$jscomp$1$$ instanceof Map || "undefined" != typeof Set && $expected$jscomp$1$$ instanceof Set) {
                $expected$jscomp$1$$.forEach(function($expected$jscomp$1$$, $innerAssertImplementation$$) {
                  $actual$jscomp$1$$.has($innerAssertImplementation$$) ? $actual$jscomp$1$$.get && $innerAssertWithCycleCheck$$($expected$jscomp$1$$, $actual$jscomp$1$$.get($innerAssertImplementation$$), $var2$jscomp$6$$.replace("%s", $innerAssertImplementation$$)) : $failures$$.push($innerAssertImplementation$$ + " not present in actual " + ($opt_equalityPredicate$$ || $seen1$$));
                }), $actual$jscomp$1$$.forEach(function($actual$jscomp$1$$, $innerAssertWithCycleCheck$$) {
                  $expected$jscomp$1$$.has($innerAssertWithCycleCheck$$) || $failures$$.push($innerAssertWithCycleCheck$$ + " not present in expected " + ($opt_equalityPredicate$$ || $innerAssertImplementation$$));
                });
              } else {
                if ($expected$jscomp$1$$.__iterator__) {
                  $goog$$.$isFunction$($expected$jscomp$1$$.$equals$) ? $expected$jscomp$1$$.$equals$($actual$jscomp$1$$) || $failures$$.push("equals() returned false for " + ($opt_equalityPredicate$$ || $innerAssertImplementation$$)) : $expected$jscomp$1$$.$map_$ ? $innerAssertWithCycleCheck$$($expected$jscomp$1$$.$map_$, $actual$jscomp$1$$.$map_$, $var2$jscomp$6$$.replace("%s", "map_")) : $failures$$.push("unable to check " + ($opt_equalityPredicate$$ || $innerAssertImplementation$$) + " for equality: it has an iterator we do not know how to handle. please add an equals method");
                } else {
                  for (var $prop$jscomp$6$$ in $expected$jscomp$1$$) {
                    $seen2$$ && $goog$$.$testing$.$asserts$.$isArrayIndexProp_$($prop$jscomp$6$$) || ($prop$jscomp$6$$ in $actual$jscomp$1$$ ? $innerAssertWithCycleCheck$$($expected$jscomp$1$$[$prop$jscomp$6$$], $actual$jscomp$1$$[$prop$jscomp$6$$], $var2$jscomp$6$$.replace("%s", $prop$jscomp$6$$)) : $failures$$.push("property " + $prop$jscomp$6$$ + " not present in actual " + ($opt_equalityPredicate$$ || $seen1$$)));
                  }
                  for ($prop$jscomp$6$$ in $actual$jscomp$1$$) {
                    $seen2$$ && $goog$$.$testing$.$asserts$.$isArrayIndexProp_$($prop$jscomp$6$$) || $prop$jscomp$6$$ in $expected$jscomp$1$$ || $failures$$.push("property " + $prop$jscomp$6$$ + " not present in expected " + ($opt_equalityPredicate$$ || $innerAssertImplementation$$));
                  }
                  if ($seen2$$) {
                    for ($prop$jscomp$6$$ = 0; $prop$jscomp$6$$ < $expected$jscomp$1$$.length; $prop$jscomp$6$$++) {
                      $innerAssertWithCycleCheck$$($expected$jscomp$1$$[$prop$jscomp$6$$], $actual$jscomp$1$$[$prop$jscomp$6$$], $var2$jscomp$6$$.replace("%s", String($prop$jscomp$6$$)));
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        $failures$$.push($opt_equalityPredicate$$ + " " + $goog$$.$testing$.$asserts$.$getDefaultErrorMsg_$($expected$jscomp$1$$, $actual$jscomp$1$$));
      }
    }
  }
  var $failures$$ = [], $seen1$$ = [], $seen2$$ = [], $equalityPredicate$$ = $opt_equalityPredicate$$ || function($expected$jscomp$1$$, $actual$jscomp$1$$, $opt_equalityPredicate$$) {
    return ($expected$jscomp$1$$ = $PRIMITIVE_EQUALITY_PREDICATES$$[$expected$jscomp$1$$]) ? $expected$jscomp$1$$($actual$jscomp$1$$, $opt_equalityPredicate$$) ? $goog$$.$testing$.$asserts$.$EQUALITY_PREDICATE_VARS_ARE_EQUAL$ : $goog$$.$testing$.$asserts$.$getDefaultErrorMsg_$($actual$jscomp$1$$, $opt_equalityPredicate$$) : $goog$$.$testing$.$asserts$.$EQUALITY_PREDICATE_CANT_PROCESS$;
  };
  $innerAssertWithCycleCheck$$($expected$jscomp$1$$, $actual$jscomp$1$$, "");
  return 0 == $failures$$.length ? null : $goog$$.$testing$.$asserts$.$getDefaultErrorMsg_$($expected$jscomp$1$$, $actual$jscomp$1$$) + "\n   " + $failures$$.join("\n   ");
};
var $assertObjectEquals$$ = function($a$jscomp$31$$, $b$jscomp$16$$, $opt_c$jscomp$2$$) {
  _validateArguments(2, arguments);
  var $failureMessage$jscomp$2$$ = $commentArg$$(2, arguments) ? $commentArg$$(2, arguments) : "", $differences$$ = $goog$$.$testing$.$asserts$.$findDifferences$($nonCommentArg$$(1, 2, arguments), $nonCommentArg$$(2, 2, arguments));
  _assert($failureMessage$jscomp$2$$, !$differences$$, $differences$$);
}, $assertRoughlyEquals$$ = function($a$jscomp$43$$, $b$jscomp$26$$, $c$jscomp$6$$, $opt_d$jscomp$3$$) {
  _validateArguments(3, arguments);
  var $expected$jscomp$3$$ = $nonCommentArg$$(1, 3, arguments), $actual$jscomp$3$$ = $nonCommentArg$$(2, 3, arguments), $tolerance$jscomp$3$$ = $nonCommentArg$$(3, 3, arguments);
  _assert($commentArg$$(3, arguments), $goog$$.$testing$.$asserts$.$numberRoughEqualityPredicate_$($expected$jscomp$3$$, $actual$jscomp$3$$, $tolerance$jscomp$3$$), "Expected " + $expected$jscomp$3$$ + ", but got " + $actual$jscomp$3$$ + " which was more than " + $tolerance$jscomp$3$$ + " away");
};
$goog$$.$testing$.$asserts$.$toArray_$ = function($arrayLike$jscomp$1$$) {
  for (var $ret$jscomp$4$$ = [], $i$jscomp$108$$ = 0; $i$jscomp$108$$ < $arrayLike$jscomp$1$$.length; $i$jscomp$108$$++) {
    $ret$jscomp$4$$[$i$jscomp$108$$] = $arrayLike$jscomp$1$$[$i$jscomp$108$$];
  }
  return $ret$jscomp$4$$;
};
$goog$$.$testing$.$asserts$.$indexOf_$ = function($container$jscomp$8$$, $contained$jscomp$2$$) {
  if ($container$jscomp$8$$.indexOf) {
    return $container$jscomp$8$$.indexOf($contained$jscomp$2$$);
  }
  for (var $i$jscomp$109$$ = 0; $i$jscomp$109$$ < $container$jscomp$8$$.length; $i$jscomp$109$$++) {
    if ($container$jscomp$8$$[$i$jscomp$109$$] === $contained$jscomp$2$$) {
      return $i$jscomp$109$$;
    }
  }
  return -1;
};
$goog$$.$testing$.$asserts$.$contains_$ = function($container$jscomp$9$$, $contained$jscomp$3$$) {
  return -1 != $goog$$.$testing$.$asserts$.$indexOf_$($container$jscomp$9$$, $contained$jscomp$3$$);
};
var $standardizeHTML$$ = function($html$$) {
  var $translator$$ = document.createElement("DIV");
  $translator$$.innerHTML = $html$$;
  return $translator$$.innerHTML.replace(/^\s+|\s+$/g, "");
};
$goog$$.$testing$.$asserts$.$raiseException$ = function($comment$jscomp$7_e$jscomp$35$$, $opt_message$jscomp$20_testCase$jscomp$2$$) {
  $comment$jscomp$7_e$jscomp$35$$ = new $goog$$.$testing$.$JsUnitException$($comment$jscomp$7_e$jscomp$35$$, $opt_message$jscomp$20_testCase$jscomp$2$$);
  if ($opt_message$jscomp$20_testCase$jscomp$2$$ = _getCurrentTestCase()) {
    $opt_message$jscomp$20_testCase$jscomp$2$$.$raiseAssertionException$($comment$jscomp$7_e$jscomp$35$$);
  } else {
    throw $goog$$.global.console.error("Failed to save thrown exception: no test case is installed."), $comment$jscomp$7_e$jscomp$35$$;
  }
};
$goog$$.$testing$.$asserts$.$isArrayIndexProp_$ = function($prop$jscomp$7$$) {
  return ($prop$jscomp$7$$ | 0) == $prop$jscomp$7$$;
};
$goog$$.$exportSymbol$("fail", $fail$$);
$goog$$.$exportSymbol$("assert", $assert$$);
$goog$$.$exportSymbol$("assertThrows", function($a$jscomp$17$$, $opt_b$jscomp$1$$) {
  _validateArguments(1, arguments);
  var $func$jscomp$7_startIndex$jscomp$1_testCase$$ = $nonCommentArg$$(1, 1, arguments), $comment$jscomp$3$$ = $commentArg$$(1, arguments);
  _assert($comment$jscomp$3$$, "function" == typeof $func$jscomp$7_startIndex$jscomp$1_testCase$$, "Argument passed to assertThrows is not a function");
  try {
    $func$jscomp$7_startIndex$jscomp$1_testCase$$();
  } catch ($e$jscomp$32$$) {
    return $e$jscomp$32$$ && $goog$$.$isString$($e$jscomp$32$$.stacktrace) && $goog$$.$isString$($e$jscomp$32$$.message) && ($func$jscomp$7_startIndex$jscomp$1_testCase$$ = $e$jscomp$32$$.message.length - $e$jscomp$32$$.stacktrace.length, $e$jscomp$32$$.message.indexOf($e$jscomp$32$$.stacktrace, $func$jscomp$7_startIndex$jscomp$1_testCase$$) == $func$jscomp$7_startIndex$jscomp$1_testCase$$ && ($e$jscomp$32$$.message = $e$jscomp$32$$.message.substr(0, $func$jscomp$7_startIndex$jscomp$1_testCase$$ - 
    14))), $func$jscomp$7_startIndex$jscomp$1_testCase$$ = _getCurrentTestCase(), $e$jscomp$32$$ && $e$jscomp$32$$.isJsUnitException && $func$jscomp$7_startIndex$jscomp$1_testCase$$ && $func$jscomp$7_startIndex$jscomp$1_testCase$$.$failOnUnreportedAsserts$ && $goog$$.$testing$.$asserts$.$raiseException$($comment$jscomp$3$$, "Function passed to assertThrows caught a JsUnitException (usually from an assert or call to fail()). If this is expected, use assertThrowsJsUnitException instead."), $e$jscomp$32$$;
  }
  $goog$$.$testing$.$asserts$.$raiseException$($comment$jscomp$3$$, "No exception thrown from function passed to assertThrows");
});
$goog$$.$exportSymbol$("assertNotThrows", function($a$jscomp$18$$, $opt_b$jscomp$2$$) {
  _validateArguments(1, arguments);
  var $comment$jscomp$4$$ = $commentArg$$(1, arguments), $func$jscomp$8$$ = $nonCommentArg$$(1, 1, arguments);
  _assert($comment$jscomp$4$$, "function" == typeof $func$jscomp$8$$, "Argument passed to assertNotThrows is not a function");
  try {
    return $func$jscomp$8$$();
  } catch ($e$jscomp$33$$) {
    $goog$$.$testing$.$asserts$.$raiseException$(($comment$jscomp$4$$ ? $comment$jscomp$4$$ + "\n" : "") + "A non expected exception was thrown from function passed to assertNotThrows", $e$jscomp$33$$.stack || $e$jscomp$33$$.stacktrace || $e$jscomp$33$$.toString());
  }
});
$goog$$.$exportSymbol$("assertThrowsJsUnitException", function($callback$jscomp$414_msg$jscomp$22_testCase$jscomp$1$$, $opt_expectedMessage$$) {
  try {
    $goog$$.$testing$.$asserts$.$callWithoutLogging$($callback$jscomp$414_msg$jscomp$22_testCase$jscomp$1$$);
  } catch ($e$jscomp$34$$) {
    return ($callback$jscomp$414_msg$jscomp$22_testCase$jscomp$1$$ = _getCurrentTestCase()) ? $callback$jscomp$414_msg$jscomp$22_testCase$jscomp$1$$.$invalidateAssertionException$($e$jscomp$34$$) : $goog$$.global.console.error("Failed to remove expected exception: no test case is installed."), $e$jscomp$34$$.$isJsUnitException$ || $fail$$("Expected a JsUnitException"), "undefined" != typeof $opt_expectedMessage$$ && $e$jscomp$34$$.message != $opt_expectedMessage$$ && $fail$$("Expected message [" + 
    $opt_expectedMessage$$ + "] but got [" + $e$jscomp$34$$.message + "]"), $e$jscomp$34$$;
  }
  $callback$jscomp$414_msg$jscomp$22_testCase$jscomp$1$$ = "Expected a failure";
  "undefined" != typeof $opt_expectedMessage$$ && ($callback$jscomp$414_msg$jscomp$22_testCase$jscomp$1$$ += ": " + $opt_expectedMessage$$);
  throw new $goog$$.$testing$.$JsUnitException$($callback$jscomp$414_msg$jscomp$22_testCase$jscomp$1$$);
});
$goog$$.$exportSymbol$("assertTrue", $assertTrue$$);
$goog$$.$exportSymbol$("assertFalse", function($a$jscomp$20$$, $opt_b$jscomp$4$$) {
  _validateArguments(1, arguments);
  var $comment$jscomp$6$$ = $commentArg$$(1, arguments), $booleanValue$jscomp$3$$ = $nonCommentArg$$(1, 1, arguments);
  _assert($comment$jscomp$6$$, $goog$$.$isBoolean$($booleanValue$jscomp$3$$), "Bad argument to assertFalse(boolean)");
  _assert($comment$jscomp$6$$, !$booleanValue$jscomp$3$$, "Call to assertFalse(boolean) with true");
});
$goog$$.$exportSymbol$("assertEquals", $assertEquals$$);
$goog$$.$exportSymbol$("assertNotEquals", function($a$jscomp$22$$, $b$jscomp$15$$, $opt_c$jscomp$1$$) {
  _validateArguments(2, arguments);
  var $var2$jscomp$4$$ = $nonCommentArg$$(2, 2, arguments);
  _assert($commentArg$$(2, arguments), $nonCommentArg$$(1, 2, arguments) !== $var2$jscomp$4$$, "Expected not to be " + _displayStringForValue($var2$jscomp$4$$));
});
$goog$$.$exportSymbol$("assertNull", function($a$jscomp$23$$, $opt_b$jscomp$5$$) {
  _validateArguments(1, arguments);
  var $aVar$jscomp$1$$ = $nonCommentArg$$(1, 1, arguments);
  _assert($commentArg$$(1, arguments), null === $aVar$jscomp$1$$, $goog$$.$testing$.$asserts$.$getDefaultErrorMsg_$(null, $aVar$jscomp$1$$));
});
$goog$$.$exportSymbol$("assertNotNull", $assertNotNull$$);
$goog$$.$exportSymbol$("assertUndefined", function($a$jscomp$25$$, $opt_b$jscomp$7$$) {
  _validateArguments(1, arguments);
  var $aVar$jscomp$3$$ = $nonCommentArg$$(1, 1, arguments);
  _assert($commentArg$$(1, arguments), void 0 === $aVar$jscomp$3$$, $goog$$.$testing$.$asserts$.$getDefaultErrorMsg_$(void 0, $aVar$jscomp$3$$));
});
$goog$$.$exportSymbol$("assertNotUndefined", $assertNotUndefined$$);
$goog$$.$exportSymbol$("assertNotNullNorUndefined", function($a$jscomp$27$$, $opt_b$jscomp$9$$) {
  _validateArguments(1, arguments);
  $assertNotNull$$.apply(null, arguments);
  $assertNotUndefined$$.apply(null, arguments);
});
$goog$$.$exportSymbol$("assertNonEmptyString", function($a$jscomp$28$$, $opt_b$jscomp$10$$) {
  _validateArguments(1, arguments);
  var $aVar$jscomp$5$$ = $nonCommentArg$$(1, 1, arguments);
  _assert($commentArg$$(1, arguments), void 0 !== $aVar$jscomp$5$$ && null !== $aVar$jscomp$5$$ && "string" == typeof $aVar$jscomp$5$$ && "" !== $aVar$jscomp$5$$, "Expected non-empty string but was " + _displayStringForValue($aVar$jscomp$5$$));
});
$goog$$.$exportSymbol$("assertNaN", function($a$jscomp$29$$, $opt_b$jscomp$11$$) {
  _validateArguments(1, arguments);
  _assert($commentArg$$(1, arguments), isNaN($nonCommentArg$$(1, 1, arguments)), "Expected NaN");
});
$goog$$.$exportSymbol$("assertNotNaN", function($a$jscomp$30$$, $opt_b$jscomp$12$$) {
  _validateArguments(1, arguments);
  _assert($commentArg$$(1, arguments), !isNaN($nonCommentArg$$(1, 1, arguments)), "Expected not NaN");
});
$goog$$.$exportSymbol$("assertObjectEquals", $assertObjectEquals$$);
$goog$$.$exportSymbol$("assertObjectRoughlyEquals", function($a$jscomp$32$$, $b$jscomp$17$$, $c$jscomp$3$$, $opt_d$$) {
  _validateArguments(3, arguments);
  var $tolerance$jscomp$1$$ = $nonCommentArg$$(3, 3, arguments), $failureMessage$jscomp$3$$ = $commentArg$$(3, arguments) ? $commentArg$$(3, arguments) : "", $differences$jscomp$1$$ = $goog$$.$testing$.$asserts$.$findDifferences$($nonCommentArg$$(1, 3, arguments), $nonCommentArg$$(2, 3, arguments), function($a$jscomp$32$$, $b$jscomp$17$$, $c$jscomp$3$$) {
    return ($a$jscomp$32$$ = $goog$$.$testing$.$asserts$.$primitiveRoughEqualityPredicates_$[$a$jscomp$32$$]) ? $a$jscomp$32$$($b$jscomp$17$$, $c$jscomp$3$$, $tolerance$jscomp$1$$) ? $goog$$.$testing$.$asserts$.$EQUALITY_PREDICATE_VARS_ARE_EQUAL$ : $goog$$.$testing$.$asserts$.$getDefaultErrorMsg_$($b$jscomp$17$$, $c$jscomp$3$$) + " which was more than " + $tolerance$jscomp$1$$ + " away" : $goog$$.$testing$.$asserts$.$EQUALITY_PREDICATE_CANT_PROCESS$;
  });
  _assert($failureMessage$jscomp$3$$, !$differences$jscomp$1$$, $differences$jscomp$1$$);
});
$goog$$.$exportSymbol$("assertObjectNotEquals", function($a$jscomp$33$$, $b$jscomp$18$$, $opt_c$jscomp$3$$) {
  _validateArguments(2, arguments);
  var $failureMessage$jscomp$4$$ = $commentArg$$(2, arguments) ? $commentArg$$(2, arguments) : "", $differences$jscomp$2$$ = $goog$$.$testing$.$asserts$.$findDifferences$($nonCommentArg$$(1, 2, arguments), $nonCommentArg$$(2, 2, arguments));
  _assert($failureMessage$jscomp$4$$, $differences$jscomp$2$$, "Objects should not be equal");
});
$goog$$.$exportSymbol$("assertArrayEquals", function($a$jscomp$34$$, $b$jscomp$19$$, $opt_c$jscomp$4$$) {
  _validateArguments(2, arguments);
  var $v1$jscomp$5$$ = $nonCommentArg$$(1, 2, arguments), $v2$jscomp$5$$ = $nonCommentArg$$(2, 2, arguments), $failureMessage$jscomp$5$$ = $commentArg$$(2, arguments) ? $commentArg$$(2, arguments) : "", $typeOfVar1$jscomp$1_typeOfVar2$jscomp$1$$ = _trueTypeOf($v1$jscomp$5$$);
  _assert($failureMessage$jscomp$5$$, "Array" == $typeOfVar1$jscomp$1_typeOfVar2$jscomp$1$$, "Expected an array for assertArrayEquals but found a " + $typeOfVar1$jscomp$1_typeOfVar2$jscomp$1$$);
  $typeOfVar1$jscomp$1_typeOfVar2$jscomp$1$$ = _trueTypeOf($v2$jscomp$5$$);
  _assert($failureMessage$jscomp$5$$, "Array" == $typeOfVar1$jscomp$1_typeOfVar2$jscomp$1$$, "Expected an array for assertArrayEquals but found a " + $typeOfVar1$jscomp$1_typeOfVar2$jscomp$1$$);
  $assertObjectEquals$$($failureMessage$jscomp$5$$, Array.prototype.concat.call($v1$jscomp$5$$), Array.prototype.concat.call($v2$jscomp$5$$));
});
$goog$$.$exportSymbol$("assertElementsEquals", function($a$jscomp$35$$, $b$jscomp$20$$, $opt_c$jscomp$5$$) {
  _validateArguments(2, arguments);
  var $v1$jscomp$6$$ = $nonCommentArg$$(1, 2, arguments), $v2$jscomp$6$$ = $nonCommentArg$$(2, 2, arguments), $failureMessage$jscomp$6$$ = $commentArg$$(2, arguments) ? $commentArg$$(2, arguments) : "";
  if ($v1$jscomp$6$$) {
    $assertEquals$$("length mismatch: " + $failureMessage$jscomp$6$$, $v1$jscomp$6$$.length, $v2$jscomp$6$$.length);
    for (var $i$jscomp$105$$ = 0; $i$jscomp$105$$ < $v1$jscomp$6$$.length; ++$i$jscomp$105$$) {
      $assertEquals$$("mismatch at index " + $i$jscomp$105$$ + ": " + $failureMessage$jscomp$6$$, $v1$jscomp$6$$[$i$jscomp$105$$], $v2$jscomp$6$$[$i$jscomp$105$$]);
    }
  } else {
    $assert$$($failureMessage$jscomp$6$$, !$v2$jscomp$6$$);
  }
});
$goog$$.$exportSymbol$("assertElementsRoughlyEqual", function($a$jscomp$36$$, $b$jscomp$21$$, $c$jscomp$4$$, $opt_d$jscomp$1$$) {
  _validateArguments(3, arguments);
  var $v1$jscomp$7$$ = $nonCommentArg$$(1, 3, arguments), $v2$jscomp$7$$ = $nonCommentArg$$(2, 3, arguments), $tolerance$jscomp$2$$ = $nonCommentArg$$(3, 3, arguments), $failureMessage$jscomp$7$$ = $commentArg$$(3, arguments) ? $commentArg$$(3, arguments) : "";
  if ($v1$jscomp$7$$) {
    $assertEquals$$("length mismatch: " + $failureMessage$jscomp$7$$, $v1$jscomp$7$$.length, $v2$jscomp$7$$.length);
    for (var $i$jscomp$106$$ = 0; $i$jscomp$106$$ < $v1$jscomp$7$$.length; ++$i$jscomp$106$$) {
      $assertRoughlyEquals$$($failureMessage$jscomp$7$$, $v1$jscomp$7$$[$i$jscomp$106$$], $v2$jscomp$7$$[$i$jscomp$106$$], $tolerance$jscomp$2$$);
    }
  } else {
    $assert$$($failureMessage$jscomp$7$$, !$v2$jscomp$7$$);
  }
});
$goog$$.$exportSymbol$("assertSameElements", function($a$jscomp$37$$, $b$jscomp$22$$, $opt_c$jscomp$6$$) {
  _validateArguments(2, arguments);
  var $expected$jscomp$2$$ = $nonCommentArg$$(1, 2, arguments), $actual$jscomp$2$$ = $nonCommentArg$$(2, 2, arguments), $message$jscomp$43$$ = $commentArg$$(2, arguments);
  $assertTrue$$("Bad arguments to assertSameElements(opt_message, expected: ArrayLike, actual: ArrayLike)", $goog$$.$isArrayLike$($expected$jscomp$2$$) && $goog$$.$isArrayLike$($actual$jscomp$2$$));
  $expected$jscomp$2$$ = $goog$$.$testing$.$asserts$.$toArray_$($expected$jscomp$2$$);
  $actual$jscomp$2$$ = $goog$$.$testing$.$asserts$.$toArray_$($actual$jscomp$2$$);
  _assert($message$jscomp$43$$, $expected$jscomp$2$$.length == $actual$jscomp$2$$.length, "Expected " + $expected$jscomp$2$$.length + " elements: [" + $expected$jscomp$2$$ + "], got " + $actual$jscomp$2$$.length + " elements: [" + $actual$jscomp$2$$ + "]");
  for (var $toFind$$ = $goog$$.$testing$.$asserts$.$toArray_$($expected$jscomp$2$$), $i$jscomp$107$$ = 0; $i$jscomp$107$$ < $actual$jscomp$2$$.length; $i$jscomp$107$$++) {
    var $index$jscomp$61$$ = $goog$$.$testing$.$asserts$.$indexOf_$($toFind$$, $actual$jscomp$2$$[$i$jscomp$107$$]);
    _assert($message$jscomp$43$$, -1 != $index$jscomp$61$$, "Expected [" + $expected$jscomp$2$$ + "], got [" + $actual$jscomp$2$$ + "]");
    $toFind$$.splice($index$jscomp$61$$, 1);
  }
});
$goog$$.$exportSymbol$("assertEvaluatesToTrue", function($a$jscomp$38$$, $opt_b$jscomp$13$$) {
  _validateArguments(1, arguments);
  $nonCommentArg$$(1, 1, arguments) || _assert($commentArg$$(1, arguments), !1, "Expected to evaluate to true");
});
$goog$$.$exportSymbol$("assertEvaluatesToFalse", function($a$jscomp$39$$, $opt_b$jscomp$14$$) {
  _validateArguments(1, arguments);
  $nonCommentArg$$(1, 1, arguments) && _assert($commentArg$$(1, arguments), !1, "Expected to evaluate to false");
});
$goog$$.$exportSymbol$("assertHTMLEquals", function($a$jscomp$40$$, $b$jscomp$23$$, $opt_c$jscomp$7$$) {
  _validateArguments(2, arguments);
  var $var2$jscomp$9_var2Standardized$$ = $nonCommentArg$$(2, 2, arguments), $var1Standardized$$ = $standardizeHTML$$($nonCommentArg$$(1, 2, arguments)), $var2$jscomp$9_var2Standardized$$ = $standardizeHTML$$($var2$jscomp$9_var2Standardized$$);
  _assert($commentArg$$(2, arguments), $var1Standardized$$ === $var2$jscomp$9_var2Standardized$$, $goog$$.$testing$.$asserts$.$getDefaultErrorMsg_$($var1Standardized$$, $var2$jscomp$9_var2Standardized$$));
});
$goog$$.$exportSymbol$("assertHashEquals", function($a$jscomp$42$$, $b$jscomp$25$$, $opt_c$jscomp$8$$) {
  _validateArguments(2, arguments);
  var $var1$jscomp$10$$ = $nonCommentArg$$(1, 2, arguments), $var2$jscomp$10$$ = $nonCommentArg$$(2, 2, arguments), $message$jscomp$44$$ = $commentArg$$(2, arguments), $key$jscomp$84$$;
  for ($key$jscomp$84$$ in $var1$jscomp$10$$) {
    _assert($message$jscomp$44$$, $key$jscomp$84$$ in $var2$jscomp$10$$, "Expected hash had key " + $key$jscomp$84$$ + " that was not found"), _assert($message$jscomp$44$$, $var1$jscomp$10$$[$key$jscomp$84$$] == $var2$jscomp$10$$[$key$jscomp$84$$], "Value for key " + $key$jscomp$84$$ + " mismatch - expected = " + $var1$jscomp$10$$[$key$jscomp$84$$] + ", actual = " + $var2$jscomp$10$$[$key$jscomp$84$$]);
  }
  for ($key$jscomp$84$$ in $var2$jscomp$10$$) {
    _assert($message$jscomp$44$$, $key$jscomp$84$$ in $var1$jscomp$10$$, "Actual hash had key " + $key$jscomp$84$$ + " that was not expected");
  }
});
$goog$$.$exportSymbol$("assertRoughlyEquals", $assertRoughlyEquals$$);
$goog$$.$exportSymbol$("assertContains", function($a$jscomp$44$$, $b$jscomp$27$$, $opt_c$jscomp$9$$) {
  _validateArguments(2, arguments);
  var $contained$$ = $nonCommentArg$$(1, 2, arguments), $container$jscomp$6$$ = $nonCommentArg$$(2, 2, arguments);
  _assert($commentArg$$(2, arguments), $goog$$.$testing$.$asserts$.$contains_$($container$jscomp$6$$, $contained$$), "Expected '" + $container$jscomp$6$$ + "' to contain '" + $contained$$ + "'");
});
$goog$$.$exportSymbol$("assertNotContains", function($a$jscomp$45$$, $b$jscomp$28$$, $opt_c$jscomp$10$$) {
  _validateArguments(2, arguments);
  var $contained$jscomp$1$$ = $nonCommentArg$$(1, 2, arguments), $container$jscomp$7$$ = $nonCommentArg$$(2, 2, arguments);
  _assert($commentArg$$(2, arguments), !$goog$$.$testing$.$asserts$.$contains_$($container$jscomp$7$$, $contained$jscomp$1$$), "Expected '" + $container$jscomp$7$$ + "' not to contain '" + $contained$jscomp$1$$ + "'");
});
$goog$$.$exportSymbol$("assertRegExp", function($a$jscomp$46$$, $b$jscomp$29$$, $opt_c$jscomp$11$$) {
  _validateArguments(2, arguments);
  var $regexp$jscomp$3$$ = $nonCommentArg$$(1, 2, arguments), $string$jscomp$6$$ = $nonCommentArg$$(2, 2, arguments);
  "string" == typeof $regexp$jscomp$3$$ && ($regexp$jscomp$3$$ = new RegExp($regexp$jscomp$3$$));
  _assert($commentArg$$(2, arguments), $regexp$jscomp$3$$.test($string$jscomp$6$$), "Expected '" + $string$jscomp$6$$ + "' to match RegExp " + $regexp$jscomp$3$$.toString());
});
chrome.cast.$games$.$GameManagerEventType$ = {UNKNOWN:"unknown", STATE_CHANGED:"state_changed", GAME_MESSAGE_RECEIVED:"game_message_received"};
$goog$$.$exportProperty$(chrome.cast.$games$, "GameManagerEventType", chrome.cast.$games$.$GameManagerEventType$);
chrome.cast.$games$.$GameManagerEvent$ = function() {
};
$goog$$.$exportProperty$(chrome.cast.$games$, "GameManagerEvent", chrome.cast.$games$.$GameManagerEvent$);
chrome.cast.$games$.$GameManagerStateChangedEvent$ = function($currentState$$, $previousState$jscomp$1$$) {
  this.type = chrome.cast.$games$.$GameManagerEventType$.STATE_CHANGED;
  this.currentState = $currentState$$;
  this.previousState = $previousState$jscomp$1$$;
};
$goog$$.$exportProperty$(chrome.cast.$games$, "GameManagerStateChangedEvent", chrome.cast.$games$.$GameManagerStateChangedEvent$);
chrome.cast.$games$.$GameManagerGameMessageReceivedEvent$ = function($playerId$jscomp$5$$, $gameMessage$$) {
  this.type = chrome.cast.$games$.$GameManagerEventType$.GAME_MESSAGE_RECEIVED;
  this.playerId = $playerId$jscomp$5$$;
  this.gameMessage = $gameMessage$$;
};
$goog$$.$exportProperty$(chrome.cast.$games$, "GameManagerGameMessageReceivedEvent", chrome.cast.$games$.$GameManagerGameMessageReceivedEvent$);
chrome.cast.$games$.$GameManagerInstanceResult$ = function($gameManagerClient$$) {
  this.gameManagerClient = $gameManagerClient$$;
};
$goog$$.$exportProperty$(chrome.cast.$games$, "GameManagerInstanceResult", chrome.cast.$games$.$GameManagerInstanceResult$);
chrome.cast.$games$.$GameManagerState$ = function($applicationName_i$jscomp$110$$, $maxPlayers_player$$, $lobbyState$$, $gameplayState$$, $gameData$$, $gameStatusText$$, $players$$) {
  this.$h$ = $applicationName_i$jscomp$110$$;
  this.$i$ = $maxPlayers_player$$;
  this.$g$ = $lobbyState$$;
  this.$f$ = $gameplayState$$;
  this.$b$ = $gameData$$;
  this.$c$ = $gameStatusText$$;
  this.$a$ = new $goog$$.$structs$.Map;
  for ($applicationName_i$jscomp$110$$ = 0; $applicationName_i$jscomp$110$$ < $players$$.length; $applicationName_i$jscomp$110$$++) {
    $maxPlayers_player$$ = $players$$[$applicationName_i$jscomp$110$$], this.$a$.set($maxPlayers_player$$.$b$, $maxPlayers_player$$);
  }
};
$goog$$.$exportProperty$(chrome.cast.$games$, "GameManagerState", chrome.cast.$games$.$GameManagerState$);
chrome.cast.$games$.$GameManagerState$.prototype.$getApplicationName$ = function() {
  return this.$h$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "getApplicationName", chrome.cast.$games$.$GameManagerState$.prototype.$getApplicationName$);
chrome.cast.$games$.$GameManagerState$.prototype.$getMaxPlayers$ = function() {
  return this.$i$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "getMaxPlayers", chrome.cast.$games$.$GameManagerState$.prototype.$getMaxPlayers$);
chrome.cast.$games$.$GameManagerState$.prototype.$getLobbyState$ = function() {
  return this.$g$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "getLobbyState", chrome.cast.$games$.$GameManagerState$.prototype.$getLobbyState$);
chrome.cast.$games$.$GameManagerState$.prototype.$getGameplayState$ = function() {
  return this.$f$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "getGameplayState", chrome.cast.$games$.$GameManagerState$.prototype.$getGameplayState$);
chrome.cast.$games$.$GameManagerState$.prototype.$getGameData$ = function() {
  return this.$b$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "getGameData", chrome.cast.$games$.$GameManagerState$.prototype.$getGameData$);
chrome.cast.$games$.$GameManagerState$.prototype.$getGameStatusText$ = function() {
  return this.$c$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "getGameStatusText", chrome.cast.$games$.$GameManagerState$.prototype.$getGameStatusText$);
chrome.cast.$games$.$GameManagerState$.prototype.$getPlayers$ = function() {
  return this.$a$.$getValues$();
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "getPlayers", chrome.cast.$games$.$GameManagerState$.prototype.$getPlayers$);
chrome.cast.$games$.$GameManagerState$.prototype.$getPlayer$ = function($playerId$jscomp$6$$) {
  return this.$a$.get($playerId$jscomp$6$$, null);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "getPlayer", chrome.cast.$games$.$GameManagerState$.prototype.$getPlayer$);
chrome.cast.$games$.$GameManagerState$.prototype.$getControllablePlayers$ = function() {
  for (var $controllablePlayers$$ = [], $players$jscomp$1$$ = this.$a$.$getValues$(), $i$jscomp$111$$ = 0; $i$jscomp$111$$ < $players$jscomp$1$$.length; $i$jscomp$111$$++) {
    var $player$jscomp$1$$ = $players$jscomp$1$$[$i$jscomp$111$$];
    $player$jscomp$1$$.$c$ && $controllablePlayers$$.push($player$jscomp$1$$);
  }
  return $controllablePlayers$$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "getControllablePlayers", chrome.cast.$games$.$GameManagerState$.prototype.$getControllablePlayers$);
chrome.cast.$games$.$GameManagerState$.prototype.$getConnectedPlayers$ = function() {
  for (var $connectedPlayers$$ = [], $players$jscomp$2$$ = this.$a$.$getValues$(), $i$jscomp$112$$ = 0; $i$jscomp$112$$ < $players$jscomp$2$$.length; $i$jscomp$112$$++) {
    var $player$jscomp$2$$ = $players$jscomp$2$$[$i$jscomp$112$$];
    $player$jscomp$2$$.isConnected() && $connectedPlayers$$.push($player$jscomp$2$$);
  }
  return $connectedPlayers$$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "getConnectedPlayers", chrome.cast.$games$.$GameManagerState$.prototype.$getConnectedPlayers$);
chrome.cast.$games$.$GameManagerState$.prototype.$getConnectedControllablePlayers$ = function() {
  for (var $connectedControllablePlayers$$ = [], $players$jscomp$3$$ = this.$a$.$getValues$(), $i$jscomp$113$$ = 0; $i$jscomp$113$$ < $players$jscomp$3$$.length; $i$jscomp$113$$++) {
    var $player$jscomp$3$$ = $players$jscomp$3$$[$i$jscomp$113$$];
    $player$jscomp$3$$.isConnected() && $player$jscomp$3$$.$c$ && $connectedControllablePlayers$$.push($player$jscomp$3$$);
  }
  return $connectedControllablePlayers$$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "getConnectedControllablePlayers", chrome.cast.$games$.$GameManagerState$.prototype.$getConnectedControllablePlayers$);
chrome.cast.$games$.$GameManagerState$.prototype.$getPlayersInState$ = function($playerState$$) {
  for (var $playersInState$$ = [], $players$jscomp$4$$ = this.$a$.$getValues$(), $i$jscomp$114$$ = 0; $i$jscomp$114$$ < $players$jscomp$4$$.length; $i$jscomp$114$$++) {
    var $player$jscomp$4$$ = $players$jscomp$4$$[$i$jscomp$114$$];
    $player$jscomp$4$$.$a$ == $playerState$$ && $playersInState$$.push($player$jscomp$4$$);
  }
  return $playersInState$$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "getPlayersInState", chrome.cast.$games$.$GameManagerState$.prototype.$getPlayersInState$);
chrome.cast.$games$.$GameManagerState$.prototype.$hasLobbyStateChanged$ = function($otherState$$) {
  return this.$g$ != $otherState$$.$g$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "hasLobbyStateChanged", chrome.cast.$games$.$GameManagerState$.prototype.$hasLobbyStateChanged$);
chrome.cast.$games$.$GameManagerState$.prototype.$hasGameplayStateChanged$ = function($otherState$jscomp$1$$) {
  return this.$f$ != $otherState$jscomp$1$$.$f$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "hasGameplayStateChanged", chrome.cast.$games$.$GameManagerState$.prototype.$hasGameplayStateChanged$);
chrome.cast.$games$.$GameManagerState$.prototype.$hasGameDataChanged$ = function($otherState$jscomp$2$$) {
  return null != $goog$$.$testing$.$asserts$.$findDifferences$(this.$b$, $otherState$jscomp$2$$.$b$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "hasGameDataChanged", chrome.cast.$games$.$GameManagerState$.prototype.$hasGameDataChanged$);
chrome.cast.$games$.$GameManagerState$.prototype.$hasGameStatusTextChanged$ = function($otherState$jscomp$3$$) {
  return this.$c$ != $otherState$jscomp$3$$.$c$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "hasGameStatusTextChanged", chrome.cast.$games$.$GameManagerState$.prototype.$hasGameStatusTextChanged$);
chrome.cast.$games$.$GameManagerState$.prototype.$hasPlayerChanged$ = function($player2_playerId$jscomp$7$$, $otherState$jscomp$4$$) {
  var $player1$$ = this.$getPlayer$($player2_playerId$jscomp$7$$);
  $player2_playerId$jscomp$7$$ = $otherState$jscomp$4$$.$getPlayer$($player2_playerId$jscomp$7$$);
  return null == $player1$$ && null == $player2_playerId$jscomp$7$$ ? !1 : null != $player1$$ && null != $player2_playerId$jscomp$7$$ ? !$player1$$.$equals$($player2_playerId$jscomp$7$$) : !0;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "hasPlayerChanged", chrome.cast.$games$.$GameManagerState$.prototype.$hasPlayerChanged$);
chrome.cast.$games$.$GameManagerState$.prototype.$hasPlayerStateChanged$ = function($player2$jscomp$1_playerId$jscomp$8$$, $otherState$jscomp$5$$) {
  var $player1$jscomp$1$$ = this.$getPlayer$($player2$jscomp$1_playerId$jscomp$8$$);
  $player2$jscomp$1_playerId$jscomp$8$$ = $otherState$jscomp$5$$.$getPlayer$($player2$jscomp$1_playerId$jscomp$8$$);
  return null == $player1$jscomp$1$$ && null == $player2$jscomp$1_playerId$jscomp$8$$ ? !1 : null != $player1$jscomp$1$$ && null != $player2$jscomp$1_playerId$jscomp$8$$ ? $player1$jscomp$1$$.$a$ != $player2$jscomp$1_playerId$jscomp$8$$.$a$ : !0;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "hasPlayerStateChanged", chrome.cast.$games$.$GameManagerState$.prototype.$hasPlayerStateChanged$);
chrome.cast.$games$.$GameManagerState$.prototype.$hasPlayerDataChanged$ = function($player2$jscomp$2_playerId$jscomp$9$$, $otherState$jscomp$6$$) {
  var $player1$jscomp$2$$ = this.$getPlayer$($player2$jscomp$2_playerId$jscomp$9$$);
  $player2$jscomp$2_playerId$jscomp$9$$ = $otherState$jscomp$6$$.$getPlayer$($player2$jscomp$2_playerId$jscomp$9$$);
  return null == $player1$jscomp$2$$ && null == $player2$jscomp$2_playerId$jscomp$9$$ ? !1 : null != $player1$jscomp$2$$ && null != $player2$jscomp$2_playerId$jscomp$9$$ ? null != $goog$$.$testing$.$asserts$.$findDifferences$($player1$jscomp$2$$.$f$, $player2$jscomp$2_playerId$jscomp$9$$.$f$) : !0;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "hasPlayerDataChanged", chrome.cast.$games$.$GameManagerState$.prototype.$hasPlayerDataChanged$);
chrome.cast.$games$.$GameManagerState$.prototype.$getListOfChangedPlayers$ = function($otherState$jscomp$7_theirPlayers$$) {
  for (var $myPlayer$$, $theirPlayer$$, $changedPlayers$$ = [], $myPlayers$$ = this.$getPlayers$(), $i$jscomp$115$$ = 0; $i$jscomp$115$$ < $myPlayers$$.length; $i$jscomp$115$$++) {
    $myPlayer$$ = $myPlayers$$[$i$jscomp$115$$], $theirPlayer$$ = $otherState$jscomp$7_theirPlayers$$.$getPlayer$($myPlayer$$.$b$), null != $theirPlayer$$ && $myPlayer$$.$equals$($theirPlayer$$) || $changedPlayers$$.push($myPlayer$$.$b$);
  }
  $otherState$jscomp$7_theirPlayers$$ = $otherState$jscomp$7_theirPlayers$$.$getPlayers$();
  for ($i$jscomp$115$$ = 0; $i$jscomp$115$$ < $otherState$jscomp$7_theirPlayers$$.length; $i$jscomp$115$$++) {
    $theirPlayer$$ = $otherState$jscomp$7_theirPlayers$$[$i$jscomp$115$$], $myPlayer$$ = this.$getPlayer$($theirPlayer$$.$b$), null != $myPlayer$$ || $goog$$.$array$.contains($changedPlayers$$, $theirPlayer$$.$b$) || $changedPlayers$$.push($theirPlayer$$.$b$);
  }
  return $changedPlayers$$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "getListOfChangedPlayers", chrome.cast.$games$.$GameManagerState$.prototype.$getListOfChangedPlayers$);
chrome.cast.$games$.$GameManagerState$.prototype.$equals$ = function($otherState$jscomp$8$$) {
  return this.$h$ == $otherState$jscomp$8$$.$h$ && this.$i$ == $otherState$jscomp$8$$.$i$ && this.$g$ == $otherState$jscomp$8$$.$g$ && this.$f$ == $otherState$jscomp$8$$.$f$ && this.$c$ == $otherState$jscomp$8$$.$c$ && 0 == this.$getListOfChangedPlayers$($otherState$jscomp$8$$).length && !$goog$$.$testing$.$asserts$.$findDifferences$(this.$b$, $otherState$jscomp$8$$.$b$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerState$.prototype, "equals", chrome.cast.$games$.$GameManagerState$.prototype.$equals$);
chrome.cast.$games$.$PlayerInfo$ = function($playerId$jscomp$10$$, $playerState$jscomp$1$$, $playerData$$, $isControllable$$) {
  this.$b$ = $playerId$jscomp$10$$;
  this.$a$ = $playerState$jscomp$1$$;
  this.$f$ = $playerData$$;
  this.$c$ = $isControllable$$;
};
$goog$$.$exportProperty$(chrome.cast.$games$, "PlayerInfo", chrome.cast.$games$.$PlayerInfo$);
chrome.cast.$games$.$PlayerInfo$.prototype.$getPlayerId$ = function() {
  return this.$b$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$PlayerInfo$.prototype, "getPlayerId", chrome.cast.$games$.$PlayerInfo$.prototype.$getPlayerId$);
chrome.cast.$games$.$PlayerInfo$.prototype.$getPlayerState$ = function() {
  return this.$a$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$PlayerInfo$.prototype, "getPlayerState", chrome.cast.$games$.$PlayerInfo$.prototype.$getPlayerState$);
chrome.cast.$games$.$PlayerInfo$.prototype.$getPlayerData$ = function() {
  return this.$f$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$PlayerInfo$.prototype, "getPlayerData", chrome.cast.$games$.$PlayerInfo$.prototype.$getPlayerData$);
chrome.cast.$games$.$PlayerInfo$.prototype.$isControllable$ = function() {
  return this.$c$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$PlayerInfo$.prototype, "isControllable", chrome.cast.$games$.$PlayerInfo$.prototype.$isControllable$);
chrome.cast.$games$.$PlayerInfo$.prototype.isConnected = function() {
  return this.$a$ == chrome.cast.$games$.PlayerState.IDLE || this.$a$ == chrome.cast.$games$.PlayerState.AVAILABLE || this.$a$ == chrome.cast.$games$.PlayerState.PLAYING || this.$a$ == chrome.cast.$games$.PlayerState.READY;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$PlayerInfo$.prototype, "isConnected", chrome.cast.$games$.$PlayerInfo$.prototype.isConnected);
chrome.cast.$games$.$PlayerInfo$.prototype.$equals$ = function($other$jscomp$4$$) {
  return this.$b$ == $other$jscomp$4$$.$b$ && this.$a$ == $other$jscomp$4$$.$a$ && this.$c$ == $other$jscomp$4$$.$c$ && !$goog$$.$testing$.$asserts$.$findDifferences$(this.$f$, $other$jscomp$4$$.$f$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$PlayerInfo$.prototype, "equals", chrome.cast.$games$.$PlayerInfo$.prototype.$equals$);
chrome.cast.$games$.$GameManagerClient$ = function($JSCompiler_StaticMethods_setUpdateCallbacks$self$jscomp$inline_90_session$jscomp$1$$) {
  this.$a$ = new chrome.cast.$games$.$internal$.$GameManagerSession$($JSCompiler_StaticMethods_setUpdateCallbacks$self$jscomp$inline_90_session$jscomp$1$$);
  this.$f$ = new $goog$$.events.EventTarget;
  this.$g$ = this.$b$ = this.$c$ = null;
  this.$l$ = this.$j$ = !1;
  this.$m$ = $goog$$.bind(this.$s$, this);
  this.$o$ = $goog$$.bind(this.$u$, this);
  this.$i$ = this.$h$ = null;
  $JSCompiler_StaticMethods_setUpdateCallbacks$self$jscomp$inline_90_session$jscomp$1$$ = this.$a$;
  var $postUpdateStateMessageCallback$jscomp$inline_92$$ = this.$o$;
  $JSCompiler_StaticMethods_setUpdateCallbacks$self$jscomp$inline_90_session$jscomp$1$$.$i$ = this.$m$;
  $JSCompiler_StaticMethods_setUpdateCallbacks$self$jscomp$inline_90_session$jscomp$1$$.$g$ = $postUpdateStateMessageCallback$jscomp$inline_92$$;
};
$goog$$.$exportProperty$(chrome.cast.$games$, "GameManagerClient", chrome.cast.$games$.$GameManagerClient$);
chrome.cast.$games$.$GameManagerClient$.$getInstanceFor$ = function($session$jscomp$2$$, $successCallback$jscomp$69$$, $errorCallback$jscomp$63$$) {
  $JSCompiler_StaticMethods_initialize_$$(new chrome.cast.$games$.$GameManagerClient$($session$jscomp$2$$), $successCallback$jscomp$69$$, $errorCallback$jscomp$63$$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$, "getInstanceFor", chrome.cast.$games$.$GameManagerClient$.$getInstanceFor$);
var $JSCompiler_StaticMethods_initialize_$$ = function($JSCompiler_StaticMethods_initialize_$self$$, $successCallback$jscomp$70$$, $errorCallback$jscomp$64$$) {
  if ($JSCompiler_StaticMethods_initialize_$self$$.$j$) {
    throw Error("Attempted to initialize the GameManagerClient more than once.");
  }
  if ($JSCompiler_StaticMethods_initialize_$self$$.isDisposed()) {
    throw Error("Attempted to initialize the GameManagerClient after it was disposed.");
  }
  $JSCompiler_StaticMethods_initialize_$self$$.$j$ = !0;
  $JSCompiler_StaticMethods_sendGameManagerInitializeRequest$$($JSCompiler_StaticMethods_initialize_$self$$.$a$, function() {
    $successCallback$jscomp$70$$(new chrome.cast.$games$.$GameManagerInstanceResult$($JSCompiler_StaticMethods_initialize_$self$$));
  }, $errorCallback$jscomp$64$$);
};
chrome.cast.$games$.$GameManagerClient$.prototype.$dispose$ = function() {
  this.isDisposed() || (this.$a$.$dispose$(), this.$f$.$dispose$(), this.$a$ = null, this.$l$ = !0);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "dispose", chrome.cast.$games$.$GameManagerClient$.prototype.$dispose$);
chrome.cast.$games$.$GameManagerClient$.prototype.isDisposed = function() {
  return this.$l$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "isDisposed", chrome.cast.$games$.$GameManagerClient$.prototype.isDisposed);
chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerAvailableRequest$ = function($extraMessageData$jscomp$2$$, $successCallback$jscomp$71$$, $errorCallback$jscomp$65$$) {
  var $playerId$jscomp$11$$ = this.$a$.$getLastUsedPlayerId$();
  $JSCompiler_StaticMethods_sendPlayerRequest_$$(this, $playerId$jscomp$11$$, chrome.cast.$games$.PlayerState.AVAILABLE, $extraMessageData$jscomp$2$$, $successCallback$jscomp$71$$, $errorCallback$jscomp$65$$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "sendPlayerAvailableRequest", chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerAvailableRequest$);
chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerAvailableRequestWithPlayerId$ = function($playerId$jscomp$12$$, $extraMessageData$jscomp$3$$, $successCallback$jscomp$72$$, $errorCallback$jscomp$66$$) {
  $JSCompiler_StaticMethods_sendPlayerRequest_$$(this, $playerId$jscomp$12$$, chrome.cast.$games$.PlayerState.AVAILABLE, $extraMessageData$jscomp$3$$, $successCallback$jscomp$72$$, $errorCallback$jscomp$66$$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "sendPlayerAvailableRequestWithPlayerId", chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerAvailableRequestWithPlayerId$);
chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerReadyRequest$ = function($extraMessageData$jscomp$4$$, $successCallback$jscomp$73$$, $errorCallback$jscomp$67$$) {
  var $playerId$jscomp$13$$ = this.$a$.$getLastUsedPlayerId$();
  if (!$playerId$jscomp$13$$) {
    throw Error("Cannot send player request - no last used player ID found.To register a new player, use setPlayerAvailableRequest()");
  }
  $JSCompiler_StaticMethods_sendPlayerRequest_$$(this, $playerId$jscomp$13$$, chrome.cast.$games$.PlayerState.READY, $extraMessageData$jscomp$4$$, $successCallback$jscomp$73$$, $errorCallback$jscomp$67$$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "sendPlayerReadyRequest", chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerReadyRequest$);
chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerReadyRequestWithPlayerId$ = function($playerId$jscomp$14$$, $extraMessageData$jscomp$5$$, $successCallback$jscomp$74$$, $errorCallback$jscomp$68$$) {
  if (!$playerId$jscomp$14$$) {
    throw Error("Cannot send player request - no player ID provided.To register a new player, use setPlayerAvailableRequest()");
  }
  $JSCompiler_StaticMethods_sendPlayerRequest_$$(this, $playerId$jscomp$14$$, chrome.cast.$games$.PlayerState.READY, $extraMessageData$jscomp$5$$, $successCallback$jscomp$74$$, $errorCallback$jscomp$68$$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "sendPlayerReadyRequestWithPlayerId", chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerReadyRequestWithPlayerId$);
chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerIdleRequest$ = function($extraMessageData$jscomp$6$$, $successCallback$jscomp$75$$, $errorCallback$jscomp$69$$) {
  var $playerId$jscomp$15$$ = this.$a$.$getLastUsedPlayerId$();
  if (!$playerId$jscomp$15$$) {
    throw Error("Cannot send player request - no last used player ID found.To register a new player, use setPlayerAvailableRequest()");
  }
  $JSCompiler_StaticMethods_sendPlayerRequest_$$(this, $playerId$jscomp$15$$, chrome.cast.$games$.PlayerState.IDLE, $extraMessageData$jscomp$6$$, $successCallback$jscomp$75$$, $errorCallback$jscomp$69$$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "sendPlayerIdleRequest", chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerIdleRequest$);
chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerIdleRequestWithPlayerId$ = function($playerId$jscomp$16$$, $extraMessageData$jscomp$7$$, $successCallback$jscomp$76$$, $errorCallback$jscomp$70$$) {
  if (!$playerId$jscomp$16$$) {
    throw Error("Cannot send player request - no player ID provided.To register a new player, use setPlayerAvailableRequest()");
  }
  $JSCompiler_StaticMethods_sendPlayerRequest_$$(this, $playerId$jscomp$16$$, chrome.cast.$games$.PlayerState.IDLE, $extraMessageData$jscomp$7$$, $successCallback$jscomp$76$$, $errorCallback$jscomp$70$$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "sendPlayerIdleRequestWithPlayerId", chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerIdleRequestWithPlayerId$);
chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerPlayingRequest$ = function($extraMessageData$jscomp$8$$, $successCallback$jscomp$77$$, $errorCallback$jscomp$71$$) {
  var $playerId$jscomp$17$$ = this.$a$.$getLastUsedPlayerId$();
  if (!$playerId$jscomp$17$$) {
    throw Error("Cannot send player request - no last used player ID found.To register a new player, use setPlayerAvailableRequest()");
  }
  $JSCompiler_StaticMethods_sendPlayerRequest_$$(this, $playerId$jscomp$17$$, chrome.cast.$games$.PlayerState.PLAYING, $extraMessageData$jscomp$8$$, $successCallback$jscomp$77$$, $errorCallback$jscomp$71$$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "sendPlayerPlayingRequest", chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerPlayingRequest$);
chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerPlayingRequestWithPlayerId$ = function($playerId$jscomp$18$$, $extraMessageData$jscomp$9$$, $successCallback$jscomp$78$$, $errorCallback$jscomp$72$$) {
  if (!$playerId$jscomp$18$$) {
    throw Error("Cannot send player request - no player ID provided.To register a new player, use setPlayerAvailableRequest()");
  }
  $JSCompiler_StaticMethods_sendPlayerRequest_$$(this, $playerId$jscomp$18$$, chrome.cast.$games$.PlayerState.PLAYING, $extraMessageData$jscomp$9$$, $successCallback$jscomp$78$$, $errorCallback$jscomp$72$$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "sendPlayerPlayingRequestWithPlayerId", chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerPlayingRequestWithPlayerId$);
chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerQuitRequest$ = function($extraMessageData$jscomp$10$$, $successCallback$jscomp$79$$, $errorCallback$jscomp$73$$) {
  var $playerId$jscomp$19$$ = this.$a$.$getLastUsedPlayerId$();
  if (!$playerId$jscomp$19$$) {
    throw Error("Cannot send player request - no last used player ID found.To register a new player, use setPlayerAvailableRequest()");
  }
  $JSCompiler_StaticMethods_sendPlayerRequest_$$(this, $playerId$jscomp$19$$, chrome.cast.$games$.PlayerState.QUIT, $extraMessageData$jscomp$10$$, $successCallback$jscomp$79$$, $errorCallback$jscomp$73$$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "sendPlayerQuitRequest", chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerQuitRequest$);
chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerQuitRequestWithPlayerId$ = function($playerId$jscomp$20$$, $extraMessageData$jscomp$11$$, $successCallback$jscomp$80$$, $errorCallback$jscomp$74$$) {
  if (!$playerId$jscomp$20$$) {
    throw Error("Cannot send player request - no player ID provided.To register a new player, use setPlayerAvailableRequest()");
  }
  $JSCompiler_StaticMethods_sendPlayerRequest_$$(this, $playerId$jscomp$20$$, chrome.cast.$games$.PlayerState.QUIT, $extraMessageData$jscomp$11$$, $successCallback$jscomp$80$$, $errorCallback$jscomp$74$$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "sendPlayerQuitRequestWithPlayerId", chrome.cast.$games$.$GameManagerClient$.prototype.$sendPlayerQuitRequestWithPlayerId$);
var $JSCompiler_StaticMethods_sendPlayerRequest_$$ = function($JSCompiler_StaticMethods_sendPlayerRequest_$self$$, $playerId$jscomp$21$$, $playerState$jscomp$2_requestType$jscomp$3$$, $extraMessageData$jscomp$12$$, $successCallback$jscomp$81$$, $errorCallback$jscomp$75$$) {
  $JSCompiler_StaticMethods_checkState_$$($JSCompiler_StaticMethods_sendPlayerRequest_$self$$);
  $playerState$jscomp$2_requestType$jscomp$3$$ = chrome.cast.$games$.$internal$.$GameManagerRequestType$.$getGameManagerRequestType$($playerState$jscomp$2_requestType$jscomp$3$$);
  $JSCompiler_StaticMethods_sendGameManagerRequest$$($JSCompiler_StaticMethods_sendPlayerRequest_$self$$.$a$, $playerId$jscomp$21$$, $playerState$jscomp$2_requestType$jscomp$3$$, $extraMessageData$jscomp$12$$, $successCallback$jscomp$81$$, $errorCallback$jscomp$75$$);
};
chrome.cast.$games$.$GameManagerClient$.prototype.$sendGameRequest$ = function($extraMessageData$jscomp$13$$, $successCallback$jscomp$82$$, $errorCallback$jscomp$76$$) {
  var $playerId$jscomp$22$$ = this.$a$.$getLastUsedPlayerId$();
  if (!$playerId$jscomp$22$$) {
    throw Error("Cannot send game request - no last used player ID found.");
  }
  this.$sendGameRequestWithPlayerId$($playerId$jscomp$22$$, $extraMessageData$jscomp$13$$, $successCallback$jscomp$82$$, $errorCallback$jscomp$76$$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "sendGameRequest", chrome.cast.$games$.$GameManagerClient$.prototype.$sendGameRequest$);
chrome.cast.$games$.$GameManagerClient$.prototype.$sendGameRequestWithPlayerId$ = function($playerId$jscomp$23$$, $extraMessageData$jscomp$14$$, $successCallback$jscomp$83$$, $errorCallback$jscomp$77$$) {
  $JSCompiler_StaticMethods_checkState_$$(this);
  $JSCompiler_StaticMethods_sendGameManagerRequest$$(this.$a$, $playerId$jscomp$23$$, chrome.cast.$games$.$internal$.$GameManagerRequestType$.$GAME_REQUEST$, $extraMessageData$jscomp$14$$, $successCallback$jscomp$83$$, $errorCallback$jscomp$77$$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "sendGameRequestWithPlayerId", chrome.cast.$games$.$GameManagerClient$.prototype.$sendGameRequestWithPlayerId$);
chrome.cast.$games$.$GameManagerClient$.prototype.$sendGameMessage$ = function($extraMessageData$jscomp$15$$) {
  var $playerId$jscomp$24$$ = this.$a$.$getLastUsedPlayerId$();
  if (!$playerId$jscomp$24$$) {
    throw Error("Cannot send game message - no last used player ID found.");
  }
  this.$sendGameMessageWithPlayerId$($playerId$jscomp$24$$, $extraMessageData$jscomp$15$$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "sendGameMessage", chrome.cast.$games$.$GameManagerClient$.prototype.$sendGameMessage$);
chrome.cast.$games$.$GameManagerClient$.prototype.$sendGameMessageWithPlayerId$ = function($playerId$jscomp$25$$, $extraMessageData$jscomp$16$$) {
  $JSCompiler_StaticMethods_checkState_$$(this);
  $JSCompiler_StaticMethods_sendGameManagerRequest$$(this.$a$, $playerId$jscomp$25$$, chrome.cast.$games$.$internal$.$GameManagerRequestType$.GAME_MESSAGE, $extraMessageData$jscomp$16$$, null, null);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "sendGameMessageWithPlayerId", chrome.cast.$games$.$GameManagerClient$.prototype.$sendGameMessageWithPlayerId$);
chrome.cast.$games$.$GameManagerClient$.prototype.addEventListener = function($type$jscomp$149$$, $listener$jscomp$117$$) {
  this.$f$.listen($type$jscomp$149$$, $listener$jscomp$117$$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "addEventListener", chrome.cast.$games$.$GameManagerClient$.prototype.addEventListener);
chrome.cast.$games$.$GameManagerClient$.prototype.removeEventListener = function($type$jscomp$150$$, $listener$jscomp$118$$) {
  this.$f$.$unlisten$($type$jscomp$150$$, $listener$jscomp$118$$);
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "removeEventListener", chrome.cast.$games$.$GameManagerClient$.prototype.removeEventListener);
chrome.cast.$games$.$GameManagerClient$.prototype.getCurrentState = function() {
  $JSCompiler_StaticMethods_checkState_$$(this);
  return this.$b$;
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "getCurrentState", chrome.cast.$games$.$GameManagerClient$.prototype.getCurrentState);
chrome.cast.$games$.$GameManagerClient$.prototype.$getLastUsedPlayerId$ = function() {
  $JSCompiler_StaticMethods_checkState_$$(this);
  return this.$a$.$getLastUsedPlayerId$();
};
$goog$$.$exportProperty$(chrome.cast.$games$.$GameManagerClient$.prototype, "getLastUsedPlayerId", chrome.cast.$games$.$GameManagerClient$.prototype.$getLastUsedPlayerId$);
chrome.cast.$games$.$GameManagerClient$.prototype.$s$ = function($gameManagerResponse$$) {
  if ($gameManagerResponse$$.statusCode != chrome.cast.$games$.$internal$.$StatusCode$.SUCCESS) {
    throw Error("Expecting a successful response message but got an error for request ID " + $gameManagerResponse$$.requestId);
  }
  if (null != this.$c$ || $gameManagerResponse$$.gameManagerConfig) {
    if ($gameManagerResponse$$.gameManagerConfig && (this.$c$ = $gameManagerResponse$$.gameManagerConfig), null != this.$c$) {
      this.$g$ = this.$b$;
      for (var $player$jscomp$5_players$jscomp$5$$ = [], $i$jscomp$116$$ = 0; $i$jscomp$116$$ < $gameManagerResponse$$.players.length; $i$jscomp$116$$++) {
        var $playerFromMessage$$ = $gameManagerResponse$$.players[$i$jscomp$116$$], $playerId$jscomp$26$$ = $playerFromMessage$$.playerId;
        $player$jscomp$5_players$jscomp$5$$.push(new chrome.cast.$games$.$PlayerInfo$($playerId$jscomp$26$$, $playerFromMessage$$.playerState, $playerFromMessage$$.playerData, this.$a$.$m$.$containsKey$($playerId$jscomp$26$$)));
      }
      this.$b$ = new chrome.cast.$games$.$GameManagerState$(this.$c$.applicationName, this.$c$.maxPlayers, $gameManagerResponse$$.lobbyState, $gameManagerResponse$$.gameplayState, $gameManagerResponse$$.gameData, $gameManagerResponse$$.gameStatusText, $player$jscomp$5_players$jscomp$5$$);
      $player$jscomp$5_players$jscomp$5$$ = this.$b$.$getPlayer$($gameManagerResponse$$.playerId);
      null != $player$jscomp$5_players$jscomp$5$$ && $player$jscomp$5_players$jscomp$5$$.$c$ && $gameManagerResponse$$.type == chrome.cast.$games$.$internal$.$GameManagerMessageType$.GAME_MESSAGE && (this.$h$ = $gameManagerResponse$$.playerId, this.$i$ = $gameManagerResponse$$.extraMessageData);
    }
  }
};
chrome.cast.$games$.$GameManagerClient$.prototype.$u$ = function() {
  null == this.$g$ || this.$b$.$equals$(this.$g$) || this.$f$.dispatchEvent(new chrome.cast.$games$.$GameManagerStateChangedEvent$(this.$b$, this.$g$));
  null != this.$h$ && null != this.$i$ && this.$f$.dispatchEvent(new chrome.cast.$games$.$GameManagerGameMessageReceivedEvent$(this.$h$, this.$i$));
  this.$i$ = this.$h$ = this.$g$ = null;
};
var $JSCompiler_StaticMethods_checkState_$$ = function($JSCompiler_StaticMethods_checkState_$self$$) {
  if (null == $JSCompiler_StaticMethods_checkState_$self$$.$c$) {
    throw Error("Attempted to perform an operation on the GameManagerClient before it was initialized.");
  }
  if ($JSCompiler_StaticMethods_checkState_$self$$.isDisposed()) {
    throw Error("Attempted to perform an operation on the GameManagerClient after it was disposed.");
  }
};
chrome.cast.$games$.$internal$.$GameManagerConfig$ = function() {
  this.applicationName = "[APPLICATION_NAME_NOT_SET]";
  this.maxPlayers = -1;
  this.version = "[INVALID_VERSION]";
};
$goog$$.$exportSymbol$("chrome.cast.games.internal.GameManagerConfig", chrome.cast.$games$.$internal$.$GameManagerConfig$);
chrome.cast.$games$.$internal$.$PlayerInfoMessageComponent$ = function() {
  this.playerId = "";
  this.playerState = chrome.cast.$games$.PlayerState.UNKNOWN;
  this.playerData = null;
};
$goog$$.$exportSymbol$("chrome.cast.games.internal.PlayerInfoMessageComponent", chrome.cast.$games$.$internal$.$PlayerInfoMessageComponent$);
}).call(this);
