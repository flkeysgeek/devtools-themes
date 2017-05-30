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
