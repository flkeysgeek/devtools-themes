'use strict';var $mr$CastStreamingAnalytics$START_SUCCESS$$ = {TAB:0, $DESKTOP$:1, $OFFSCREEN_TAB$:2}, $mr$CastStreamingAnalytics$recordMirrorStartSuccess$$ = function($type$jscomp$176$$) {
  $mr$Analytics$recordEnum$$("MediaRouter.CastStreaming.Start.Success", $type$jscomp$176$$, $mr$CastStreamingAnalytics$START_SUCCESS$$);
};
var $mr$mirror$cast$LogUploader$logger_$$ = $mr$Logger$getInstance$$("mr.mirror.cast.LogUploader"), $mr$mirror$cast$LogUploader$uploadLog$$ = function($blob$jscomp$9$$, $opt_feedbackId$$, $opt_callback$jscomp$158$$) {
  $mr$mirror$cast$LogUploader$uploadFile_$$("raw_events.log.gz", $blob$jscomp$9$$, $opt_feedbackId$$, $opt_callback$jscomp$158$$);
  return $opt_feedbackId$$ ? "https://crash-staging.corp.google.com/samples?stbtiq=" + $opt_feedbackId$$ : "";
}, $mr$mirror$cast$LogUploader$uploadFile_$$ = function($name$jscomp$170$$, $data$jscomp$76$$, $opt_feedbackId$jscomp$1$$, $opt_callback$jscomp$160$$) {
  if (0 == $data$jscomp$76$$.size) {
    $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($mr$mirror$cast$LogUploader$logger_$$, "Trying to upload an empty file to Crash"), $opt_callback$jscomp$160$$ && $opt_callback$jscomp$160$$(null);
  } else {
    var $formData$$ = new FormData;
    $formData$$.append("prod", "Cast");
    $formData$$.append("ver", chrome.runtime.getManifest().version);
    $formData$$.append($name$jscomp$170$$, $data$jscomp$76$$);
    $opt_feedbackId$jscomp$1$$ && $formData$$.append("comments", $opt_feedbackId$jscomp$1$$);
    $goog$net$XhrIo$send$$("https://clients2.google.com/cr/staging_report", function($name$jscomp$170$$) {
      $name$jscomp$170$$ = $name$jscomp$170$$.target;
      var $data$jscomp$76$$ = null;
      $JSCompiler_StaticMethods_isSuccess$$($name$jscomp$170$$) ? ($data$jscomp$76$$ = $JSCompiler_StaticMethods_getResponseText$$($name$jscomp$170$$), $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($mr$mirror$cast$LogUploader$logger_$$, "Upload to Crash succeeded: " + $data$jscomp$76$$)) : $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($mr$mirror$cast$LogUploader$logger_$$, "Upload to Crash failed. HTTP status: " + $name$jscomp$170$$.$getStatus$());
      $opt_callback$jscomp$160$$ && $opt_callback$jscomp$160$$($data$jscomp$76$$);
    }, "POST", $formData$$, void 0, 3E4);
  }
};
var $mr$mirror$cast$LogUtils$$ = function() {
  this.$a$ = 0;
  $mr$PersistentDataManager$register$$(this);
}, $mr$mirror$cast$LogUtils$getInstance$$ = function() {
  $mr$mirror$cast$LogUtils$instance_$$ || ($mr$mirror$cast$LogUtils$instance_$$ = new $mr$mirror$cast$LogUtils$$);
  return $mr$mirror$cast$LogUtils$instance_$$;
}, $JSCompiler_StaticMethods_shouldAutoUploadLog$$ = function() {
  var $JSCompiler_StaticMethods_shouldAutoUploadLog$self$$ = $mr$mirror$cast$LogUtils$getInstance$$(), $uploadSettings$$ = {fraction:1}, $autoSubmitTimeLimitMillis$$ = $uploadSettings$$.autoSubmitTimeLimitMillis, $nowMillis$$ = Date.now();
  return $JSCompiler_StaticMethods_shouldAutoUploadLog$self$$.$a$ && $autoSubmitTimeLimitMillis$$ && $nowMillis$$ - $JSCompiler_StaticMethods_shouldAutoUploadLog$self$$.$a$ < $autoSubmitTimeLimitMillis$$ ? !1 : Math.random() < $uploadSettings$$.fraction;
};
$mr$mirror$cast$LogUtils$$.prototype.$getStorageKey$ = function() {
  return "mirror.cast.LogUtils";
};
$mr$mirror$cast$LogUtils$$.prototype.$module$contents$mr$SinkUtils_SinkUtils_prototype$getData$ = function() {
  return [void 0, {lastAutoSubmitMillis:this.$a$}];
};
$mr$mirror$cast$LogUtils$$.prototype.$loadSavedData$ = function() {
  var $savedData$jscomp$18$$ = $mr$PersistentDataManager$getPersistentData$$(this);
  this.$a$ = $savedData$jscomp$18$$ && $savedData$jscomp$18$$.lastAutoSubmitMillis || 0;
};
var $mr$mirror$cast$LogUtils$instance_$$ = null;
$mr$Logger$getInstance$$("mr.mirror.cast.LogUtils");
var $mr$NetworkUtils$logger_$$ = $mr$Logger$getInstance$$("mr.NetworkUtils"), $mr$NetworkUtils$setTDLSState_$$ = function($ipAddress$jscomp$21$$, $state$jscomp$16$$) {
  return $mr$mirror$Config$isTDLSSupportedByPlatform$$ ? new Promise(function($resolve$jscomp$44$$, $reject$jscomp$44$$) {
    chrome.networkingPrivate.setWifiTDLSEnabledState($ipAddress$jscomp$21$$, $state$jscomp$16$$, function($ipAddress$jscomp$21$$) {
      chrome.runtime.lastError ? ($JSCompiler_StaticMethods_mr_Logger_prototype$warning$$($mr$NetworkUtils$logger_$$, "Unable to set TDLS state: state = " + $state$jscomp$16$$ + ", error = " + chrome.runtime.lastError.message), $reject$jscomp$44$$("Unable to set TDLS state to " + $state$jscomp$16$$ + ".")) : ($JSCompiler_StaticMethods_mr_Logger_prototype$info$$($mr$NetworkUtils$logger_$$, "TDLS state changed: state = " + $state$jscomp$16$$ + ", status = " + $ipAddress$jscomp$21$$), $resolve$jscomp$44$$($ipAddress$jscomp$21$$));
    });
  }) : Promise.reject("TDLS feature not enabled.");
};
var $module$exports$mr$Sequencer$$ = function() {
  this.$a$ = Promise.resolve(1);
}, $JSCompiler_StaticMethods_conductFrom$$ = function($JSCompiler_StaticMethods_conductFrom$self$$, $fromCheckpoint$$, $executor$$) {
  return $JSCompiler_StaticMethods_conduct$$($JSCompiler_StaticMethods_conductFrom$self$$, function($JSCompiler_StaticMethods_conductFrom$self$$) {
    return $JSCompiler_StaticMethods_conductFrom$self$$ == $fromCheckpoint$$;
  }, $executor$$);
}, $JSCompiler_StaticMethods_conductFromAny$$ = function($JSCompiler_StaticMethods_conductFromAny$self$$, $executor$jscomp$1$$) {
  var $possibleCheckpoints$$ = [3, 4];
  return $JSCompiler_StaticMethods_conduct$$($JSCompiler_StaticMethods_conductFromAny$self$$, function($JSCompiler_StaticMethods_conductFromAny$self$$) {
    return -1 != $possibleCheckpoints$$.indexOf($JSCompiler_StaticMethods_conductFromAny$self$$);
  }, $executor$jscomp$1$$);
}, $JSCompiler_StaticMethods_recover$$ = function($JSCompiler_StaticMethods_recover$self$$, $executor$jscomp$2$$) {
  $JSCompiler_StaticMethods_recover$self$$.$a$ = $JSCompiler_StaticMethods_recover$self$$.$a$.catch(function() {
    return 1;
  });
  return $JSCompiler_StaticMethods_conduct$$($JSCompiler_StaticMethods_recover$self$$, function() {
    return !0;
  }, $executor$jscomp$2$$);
}, $JSCompiler_StaticMethods_conduct$$ = function($JSCompiler_StaticMethods_conduct$self$$, $checkpointTest$$, $executor$jscomp$3$$) {
  var $opResolve$$, $opReject$$, $opPromise$$ = new Promise(function($JSCompiler_StaticMethods_conduct$self$$, $checkpointTest$$) {
    $opResolve$$ = $JSCompiler_StaticMethods_conduct$self$$;
    $opReject$$ = $checkpointTest$$;
  });
  $JSCompiler_StaticMethods_conduct$self$$.$a$ = $JSCompiler_StaticMethods_conduct$self$$.$a$.then(function($JSCompiler_StaticMethods_conduct$self$$) {
    if (!$checkpointTest$$($JSCompiler_StaticMethods_conduct$self$$)) {
      return $opReject$$(Error("Operation requires a different starting checkpoint than " + $JSCompiler_StaticMethods_conduct$self$$)), Promise.resolve($JSCompiler_StaticMethods_conduct$self$$);
    }
    var $opPromise$$ = new $module$exports$mr$Sequencer$Operation$$($JSCompiler_StaticMethods_conduct$self$$);
    try {
      var $startingCheckpoint$$ = $executor$jscomp$3$$($opPromise$$);
    } catch ($error$jscomp$60$$) {
      $startingCheckpoint$$ = Promise.reject($error$jscomp$60$$);
    }
    return $startingCheckpoint$$.then(function($JSCompiler_StaticMethods_conduct$self$$) {
      return $opResolve$$($JSCompiler_StaticMethods_conduct$self$$);
    }, function($JSCompiler_StaticMethods_conduct$self$$) {
      return $opReject$$($JSCompiler_StaticMethods_conduct$self$$);
    }).then(function() {
      if (null === $opPromise$$.$a$) {
        throw Error("A prior operation that started at " + ($JSCompiler_StaticMethods_conduct$self$$ + " did not complete."));
      }
      return $opPromise$$.$a$;
    });
  }, function($JSCompiler_StaticMethods_conduct$self$$) {
    $opReject$$($JSCompiler_StaticMethods_conduct$self$$);
    throw $JSCompiler_StaticMethods_conduct$self$$;
  });
  return $opPromise$$;
}, $module$exports$mr$Sequencer$Operation$$ = function($startingCheckpoint$jscomp$1$$) {
  this.$b$ = $startingCheckpoint$jscomp$1$$;
  this.$a$ = null;
}, $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$ = function($JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$self$$, $newCheckpoint$$) {
  $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$self$$.$a$ = "number" === typeof $newCheckpoint$$ ? $newCheckpoint$$ : $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$self$$.$b$;
};
var $module$contents$mr$mirror$cast$MessageType_MessageType$$ = {$OFFER$:"OFFER", $ANSWER$:"ANSWER", $PRESENTATION$:"PRESENTATION", $GET_STATUS$:"GET_STATUS", $STATUS_RESPONSE$:"STATUS_RESPONSE", $GET_CAPABILITIES$:"GET_CAPABILITIES", $CAPABILITIES_RESPONSE$:"CAPABILITIES_RESPONSE", $RPC$:"RPC"};
var $module$exports$mr$mirror$cast$ReceiverResponse$$ = function() {
  this.capabilities = this.status = this.$a$ = this.error = this.rpc = this.result = this.type = this.$b$ = this.sessionId = null;
}, $module$exports$mr$mirror$cast$ReceiverResponse$parse$$ = function($anything_byteView_humanReadableForm$$) {
  try {
    if ("string" !== typeof $anything_byteView_humanReadableForm$$) {
      throw SyntaxError("Cannot parse non-string as JSON");
    }
    var $response$jscomp$23$$;
    $module$exports$mr$mirror$cast$ReceiverResponse$processAsObject$$(JSON.parse($anything_byteView_humanReadableForm$$), function($anything_byteView_humanReadableForm$$) {
      $response$jscomp$23$$ = $module$exports$mr$mirror$cast$ReceiverResponse$coerce$$($anything_byteView_humanReadableForm$$);
    }, function() {
      throw Error("non-Object result from JSON parse");
    });
    return $goog$asserts$assert$$($response$jscomp$23$$);
  } catch ($err$jscomp$39$$) {
    var $parseError$$ = $err$jscomp$39$$ instanceof SyntaxError ? "JSON parse error: " + $err$jscomp$39$$.message : "Type coercion error: " + $err$jscomp$39$$.message;
  }
  "string" == typeof $anything_byteView_humanReadableForm$$ ? $anything_byteView_humanReadableForm$$ = "a string: " + $anything_byteView_humanReadableForm$$ : $anything_byteView_humanReadableForm$$ instanceof ArrayBuffer ? ($anything_byteView_humanReadableForm$$ = new Uint8Array($anything_byteView_humanReadableForm$$), $anything_byteView_humanReadableForm$$ = "an ArrayBuffer whose base64 is " + btoa(String.fromCharCode.apply(null, $anything_byteView_humanReadableForm$$))) : $anything_byteView_humanReadableForm$$ = 
  "of invalid data type " + typeof $anything_byteView_humanReadableForm$$;
  throw Error($parseError$$ + ". Input was " + $anything_byteView_humanReadableForm$$);
}, $module$exports$mr$mirror$cast$ReceiverResponse$coerce$$ = function($from$jscomp$2$$) {
  var $response$jscomp$24$$ = new $module$exports$mr$mirror$cast$ReceiverResponse$$;
  null != $from$jscomp$2$$.sessionId && ($response$jscomp$24$$.sessionId = String($from$jscomp$2$$.sessionId));
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumber$$($from$jscomp$2$$.seqNum, function($from$jscomp$2$$) {
    $response$jscomp$24$$.$b$ = $from$jscomp$2$$;
  }, function() {
    throw Error('"seqNum" must be a number');
  });
  if ("type" in $from$jscomp$2$$) {
    for (var $upcased$$ = String($from$jscomp$2$$.type).toUpperCase(), $$jscomp$iter$20$$ = $$jscomp$makeIterator$$(Object.keys($module$contents$mr$mirror$cast$MessageType_MessageType$$)), $$jscomp$key$key$jscomp$5$$ = $$jscomp$iter$20$$.next(); !$$jscomp$key$key$jscomp$5$$.done; $$jscomp$key$key$jscomp$5$$ = $$jscomp$iter$20$$.next()) {
      if ($module$contents$mr$mirror$cast$MessageType_MessageType$$[$$jscomp$key$key$jscomp$5$$.value] == $upcased$$) {
        $response$jscomp$24$$.type = $upcased$$;
        break;
      }
    }
    if (!$response$jscomp$24$$.type) {
      throw Error('not a known message "type"');
    }
  }
  "result" in $from$jscomp$2$$ && ($response$jscomp$24$$.result = String($from$jscomp$2$$.result));
  if ("rpc" in $from$jscomp$2$$) {
    if ("string" !== typeof $from$jscomp$2$$.rpc) {
      throw Error('"rpc" must be a String containing a base64 payload');
    }
    $response$jscomp$24$$.rpc = new Uint8Array([].concat($$jscomp$arrayFromIterable$$(atob($from$jscomp$2$$.rpc))).map(function($from$jscomp$2$$) {
      return $from$jscomp$2$$.charCodeAt(0);
    }));
  }
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsObject$$($from$jscomp$2$$.error, function($from$jscomp$2$$) {
    $response$jscomp$24$$.error = $module$exports$mr$mirror$cast$ReceiverResponse$Error$coerce$$($from$jscomp$2$$);
  }, function() {
    throw Error('"error" must be an Object');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsObject$$($from$jscomp$2$$.answer, function($from$jscomp$2$$) {
    $response$jscomp$24$$.$a$ = $module$exports$mr$mirror$cast$ReceiverResponse$Answer$coerce$$($from$jscomp$2$$);
  }, function() {
    throw Error('"answer" must be an Object');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsObject$$($from$jscomp$2$$.status, function($from$jscomp$2$$) {
    $response$jscomp$24$$.status = $module$exports$mr$mirror$cast$ReceiverResponse$Status$coerce$$($from$jscomp$2$$);
  }, function() {
    throw Error('"status" must be an Object');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsObject$$($from$jscomp$2$$.capabilities, function($from$jscomp$2$$) {
    $response$jscomp$24$$.capabilities = $module$exports$mr$mirror$cast$ReceiverResponse$Capabilities$coerce$$($from$jscomp$2$$);
  }, function() {
    throw Error('"capabilities" must be an Object');
  });
  return $response$jscomp$24$$;
}, $module$exports$mr$mirror$cast$ReceiverResponse$processAsObject$$ = function($thing$$, $process$$, $notAnObject$$) {
  void 0 !== $thing$$ && ($thing$$ instanceof Object ? $process$$($thing$$) : $notAnObject$$());
}, $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumber$$ = function($thing$jscomp$1$$, $process$jscomp$1$$, $notANumber$$) {
  void 0 !== $thing$jscomp$1$$ && ("number" !== typeof $thing$jscomp$1$$ ? $notANumber$$() : $process$jscomp$1$$($thing$jscomp$1$$));
}, $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumberArray$$ = function($thing$jscomp$2$$, $process$jscomp$2$$, $notAnArrayOfNumbers$$) {
  void 0 !== $thing$jscomp$2$$ && ($thing$jscomp$2$$ instanceof Array && $thing$jscomp$2$$.every(function($thing$jscomp$2$$) {
    return "number" === typeof $thing$jscomp$2$$;
  }) ? $process$jscomp$2$$($thing$jscomp$2$$) : $notAnArrayOfNumbers$$());
}, $module$exports$mr$mirror$cast$ReceiverResponse$processAsStringArray$$ = function($thing$jscomp$3$$, $process$jscomp$3$$, $notAnArray$$) {
  void 0 !== $thing$jscomp$3$$ && ($thing$jscomp$3$$ instanceof Array ? $process$jscomp$3$$($thing$jscomp$3$$.map(function($thing$jscomp$3$$) {
    return String($thing$jscomp$3$$);
  })) : $notAnArray$$());
}, $module$exports$mr$mirror$cast$ReceiverResponse$Answer$$ = function() {
  this.$h$ = null;
  this.$a$ = [];
  this.$b$ = [];
  this.$f$ = this.$g$ = this.$j$ = null;
}, $module$exports$mr$mirror$cast$ReceiverResponse$Answer$coerce$$ = function($from$jscomp$3$$) {
  var $answer$$ = new $module$exports$mr$mirror$cast$ReceiverResponse$Answer$$;
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumber$$($from$jscomp$3$$.udpPort, function($from$jscomp$3$$) {
    $answer$$.$h$ = $from$jscomp$3$$;
  }, function() {
    throw Error('"answer.udpPort" must be a number');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumberArray$$($from$jscomp$3$$.sendIndexes, function($from$jscomp$3$$) {
    $answer$$.$a$ = $from$jscomp$3$$;
  }, function() {
    throw Error('"answer.sendIndexes" must be an array of numbers');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumberArray$$($from$jscomp$3$$.ssrcs, function($from$jscomp$3$$) {
    $answer$$.$b$ = $from$jscomp$3$$;
  }, function() {
    throw Error('"answer.ssrcs" must be an array of numbers');
  });
  "IV" in $from$jscomp$3$$ && ($answer$$.$j$ = String($from$jscomp$3$$.IV));
  "receiverGetStatus" in $from$jscomp$3$$ && ($answer$$.$g$ = "true" == String($from$jscomp$3$$.receiverGetStatus).toLowerCase());
  "castMode" in $from$jscomp$3$$ && ($answer$$.$f$ = String($from$jscomp$3$$.castMode));
  return $answer$$;
}, $module$exports$mr$mirror$cast$ReceiverResponse$Error$$ = function() {
  this.details = this.description = this.code = null;
}, $module$exports$mr$mirror$cast$ReceiverResponse$Error$coerce$$ = function($from$jscomp$4$$) {
  var $error$jscomp$63$$ = new $module$exports$mr$mirror$cast$ReceiverResponse$Error$$;
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumber$$($from$jscomp$4$$.code, function($from$jscomp$4$$) {
    $error$jscomp$63$$.code = $from$jscomp$4$$;
  }, function() {
    throw Error('"error.code" must be a number');
  });
  "description" in $from$jscomp$4$$ && ($error$jscomp$63$$.description = String($from$jscomp$4$$.description));
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsObject$$($from$jscomp$4$$.details, function($from$jscomp$4$$) {
    $error$jscomp$63$$.details = $from$jscomp$4$$;
  }, function() {
    throw Error('"error.details" must be an Object');
  });
  return $error$jscomp$63$$;
}, $module$exports$mr$mirror$cast$ReceiverResponse$Status$$ = function() {
  this.$b$ = this.$a$ = null;
}, $module$exports$mr$mirror$cast$ReceiverResponse$Status$coerce$$ = function($from$jscomp$5$$) {
  var $status$jscomp$9$$ = new $module$exports$mr$mirror$cast$ReceiverResponse$Status$$;
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumber$$($from$jscomp$5$$.wifiSnr, function($from$jscomp$5$$) {
    $status$jscomp$9$$.$a$ = $from$jscomp$5$$;
  }, function() {
    throw Error('"status.wifiSnr" must be a number');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumberArray$$($from$jscomp$5$$.wifiSpeed, function($from$jscomp$5$$) {
    $status$jscomp$9$$.$b$ = $from$jscomp$5$$;
  }, function() {
    throw Error('"status.wifiSpeed" must be an array of numbers');
  });
  return $status$jscomp$9$$;
}, $module$exports$mr$mirror$cast$ReceiverResponse$Capabilities$$ = function() {
  this.$b$ = this.$a$ = null;
}, $module$exports$mr$mirror$cast$ReceiverResponse$Capabilities$coerce$$ = function($from$jscomp$6_keySystems$$) {
  var $capabilities$jscomp$9$$ = new $module$exports$mr$mirror$cast$ReceiverResponse$Capabilities$$;
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsStringArray$$($from$jscomp$6_keySystems$$.mediaCaps, function($from$jscomp$6_keySystems$$) {
    $capabilities$jscomp$9$$.$a$ = $from$jscomp$6_keySystems$$;
  }, function() {
    throw Error('"capabilities.mediaCaps" must be an array');
  });
  if ("keySystems" in $from$jscomp$6_keySystems$$) {
    $from$jscomp$6_keySystems$$ = $from$jscomp$6_keySystems$$.keySystems;
    if (!($from$jscomp$6_keySystems$$ instanceof Array)) {
      throw Error('"capabilities.keySystems" must be an array');
    }
    $capabilities$jscomp$9$$.$b$ = $from$jscomp$6_keySystems$$.map(function($from$jscomp$6_keySystems$$) {
      var $capabilities$jscomp$9$$;
      $module$exports$mr$mirror$cast$ReceiverResponse$processAsObject$$($from$jscomp$6_keySystems$$, function($from$jscomp$6_keySystems$$) {
        $capabilities$jscomp$9$$ = $module$exports$mr$mirror$cast$ReceiverResponse$KeySystem$coerce$$($from$jscomp$6_keySystems$$);
      }, function() {
        throw Error('"capabilities.keySystems" entries must be *Objects');
      });
      return $capabilities$jscomp$9$$;
    });
  }
  return $capabilities$jscomp$9$$;
}, $module$exports$mr$mirror$cast$ReceiverResponse$KeySystem$$ = function() {
  this.$f$ = this.$l$ = this.$j$ = this.$h$ = this.$w$ = this.$a$ = this.$o$ = this.$b$ = this.initDataTypes = this.$g$ = null;
}, $module$exports$mr$mirror$cast$ReceiverResponse$KeySystem$coerce$$ = function($from$jscomp$7$$) {
  var $keySystem$jscomp$2$$ = new $module$exports$mr$mirror$cast$ReceiverResponse$KeySystem$$;
  "keySystemName" in $from$jscomp$7$$ && ($keySystem$jscomp$2$$.$g$ = String($from$jscomp$7$$.keySystemName));
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsStringArray$$($from$jscomp$7$$.initDataTypes, function($from$jscomp$7$$) {
    $keySystem$jscomp$2$$.initDataTypes = $from$jscomp$7$$;
  }, function() {
    throw Error('"capabilities.initDataTypes" must be an array');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsStringArray$$($from$jscomp$7$$.codecs, function($from$jscomp$7$$) {
    $keySystem$jscomp$2$$.$b$ = $from$jscomp$7$$;
  }, function() {
    throw Error('"capabilities.codecs" must be an array');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsStringArray$$($from$jscomp$7$$.secureCodecs, function($from$jscomp$7$$) {
    $keySystem$jscomp$2$$.$o$ = $from$jscomp$7$$;
  }, function() {
    throw Error('"capabilities.secureCodecs" must be an array');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsStringArray$$($from$jscomp$7$$.audioRobustness, function($from$jscomp$7$$) {
    $keySystem$jscomp$2$$.$a$ = $from$jscomp$7$$;
  }, function() {
    throw Error('"capabilities.audioRobustness" must be an array');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsStringArray$$($from$jscomp$7$$.videoRobustness, function($from$jscomp$7$$) {
    $keySystem$jscomp$2$$.$w$ = $from$jscomp$7$$;
  }, function() {
    throw Error('"capabilities.videoRobustness" must be an array');
  });
  "persistentLicenseSessionSupport" in $from$jscomp$7$$ && ($keySystem$jscomp$2$$.$h$ = String($from$jscomp$7$$.persistentLicenseSessionSupport));
  "persistentReleaseMessageSessionSupport" in $from$jscomp$7$$ && ($keySystem$jscomp$2$$.$j$ = String($from$jscomp$7$$.persistentReleaseMessageSessionSupport));
  "persistentStateSupport" in $from$jscomp$7$$ && ($keySystem$jscomp$2$$.$l$ = String($from$jscomp$7$$.persistentStateSupport));
  "distinctiveIdentifierSupport" in $from$jscomp$7$$ && ($keySystem$jscomp$2$$.$f$ = String($from$jscomp$7$$.distinctiveIdentifierSupport));
  return $keySystem$jscomp$2$$;
};
var $module$exports$mr$mirror$cast$MessageDispatcher$$ = function($routeId$jscomp$116$$) {
  this.$logger_$ = $mr$Logger$getInstance$$("mr.mirror.cast.MessageDispatcher");
  this.$g$ = $routeId$jscomp$116$$;
  this.$a$ = null;
  this.$b$ = new Map;
  this.$f$ = 0;
}, $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$subscribe$$ = function($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$subscribe$self$$, $type$jscomp$177$$, $callback$jscomp$434$$) {
  if ($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$subscribe$self$$.$b$.has($type$jscomp$177$$)) {
    throw Error("Attempt to multiple-subscribe to the same response type: " + $type$jscomp$177$$);
  }
  $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$subscribe$self$$.$b$.set($type$jscomp$177$$, $callback$jscomp$434$$);
  $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$subscribe$self$$.$f$ = 0;
  $JSCompiler_StaticMethods_mr_Logger_prototype$fine$$($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$subscribe$self$$.$logger_$, "Added subscriber for " + $type$jscomp$177$$ + "-type messages.");
  $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$subscribe$self$$.$a$ || ($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$subscribe$self$$.$a$ = $JSCompiler_StaticMethods_getInternalMessenger$$($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$subscribe$self$$.$g$), $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$subscribe$self$$.$a$.onMessage = $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$subscribe$self$$.$h$.bind($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$subscribe$self$$));
}, $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$$ = function($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$self$$, $type$jscomp$178$$) {
  $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$self$$.$b$.delete($type$jscomp$178$$) && $JSCompiler_StaticMethods_mr_Logger_prototype$fine$$($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$self$$.$logger_$, function() {
    return "Removed subscriber of " + $type$jscomp$178$$ + "-type messages.";
  });
  0 == $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$self$$.$b$.size && $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$self$$.$a$ && ($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$self$$.$a$.$dispose$(), $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$self$$.$a$ = null);
};
$module$exports$mr$mirror$cast$MessageDispatcher$$.prototype.sendMessage = function($message$jscomp$152$$) {
  return this.$a$ ? "RPC" == $message$jscomp$152$$.type ? this.$a$.sendMessage($message$jscomp$152$$, {namespace:"urn:x-cast:com.google.cast.remoting"}) : this.$a$.sendMessage($message$jscomp$152$$, {namespace:"urn:x-cast:com.google.cast.webrtc"}) : Promise.reject(Error("Require at least one subscriber before sending messages."));
};
var $JSCompiler_StaticMethods_requestReply$$ = function($JSCompiler_StaticMethods_requestReply$self$$, $message$jscomp$153$$, $responseType$jscomp$1$$, $timeout$jscomp$7$$, $callback$jscomp$435$$) {
  var $timeoutId$$ = null, $stopProcessingReplies$$ = function() {
    $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$$($JSCompiler_StaticMethods_requestReply$self$$, $responseType$jscomp$1$$);
    null != $timeoutId$$ && (clearTimeout($timeoutId$$), $timeoutId$$ = null);
  };
  try {
    $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$subscribe$$($JSCompiler_StaticMethods_requestReply$self$$, $responseType$jscomp$1$$, function($JSCompiler_StaticMethods_requestReply$self$$) {
      $callback$jscomp$435$$($JSCompiler_StaticMethods_requestReply$self$$) && $stopProcessingReplies$$();
    });
  } catch ($error$jscomp$64$$) {
    $callback$jscomp$435$$(null, $error$jscomp$64$$);
    return;
  }
  $timeoutId$$ = setTimeout(function() {
    $stopProcessingReplies$$();
    $callback$jscomp$435$$(null, Error("timeout"));
  }, $timeout$jscomp$7$$);
  $JSCompiler_StaticMethods_requestReply$self$$.sendMessage($message$jscomp$153$$).catch(function($JSCompiler_StaticMethods_requestReply$self$$) {
    $stopProcessingReplies$$();
    $callback$jscomp$435$$(null, $JSCompiler_StaticMethods_requestReply$self$$);
  });
};
$module$exports$mr$mirror$cast$MessageDispatcher$$.prototype.$h$ = function($routeMessage$jscomp$3$$) {
  if ($routeMessage$jscomp$3$$ && "string" === typeof $routeMessage$jscomp$3$$.namespace_ && $routeMessage$jscomp$3$$.namespace_.startsWith("urn:x-cast:com.google.cast.")) {
    do {
      var $errorMessage$jscomp$2_response$jscomp$26$$ = void 0;
      try {
        $errorMessage$jscomp$2_response$jscomp$26$$ = $module$exports$mr$mirror$cast$ReceiverResponse$parse$$($routeMessage$jscomp$3$$.data);
      } catch ($parseError$jscomp$1$$) {
        $errorMessage$jscomp$2_response$jscomp$26$$ = $parseError$jscomp$1$$.message;
        break;
      }
      if ($errorMessage$jscomp$2_response$jscomp$26$$.type) {
        var $callback$jscomp$436$$ = this.$b$.get($errorMessage$jscomp$2_response$jscomp$26$$.type);
        if ($callback$jscomp$436$$) {
          try {
            $callback$jscomp$436$$($errorMessage$jscomp$2_response$jscomp$26$$);
            return;
          } catch ($error$jscomp$66$$) {
            $errorMessage$jscomp$2_response$jscomp$26$$ = "Error thrown during delivery. Response was: " + (JSON.stringify($errorMessage$jscomp$2_response$jscomp$26$$) + ". Error from subscriber callback ") + ("was: " + $error$jscomp$66$$.message + ".");
          }
        } else {
          $errorMessage$jscomp$2_response$jscomp$26$$ = "Message was ignored: " + JSON.stringify($errorMessage$jscomp$2_response$jscomp$26$$);
        }
      } else {
        $errorMessage$jscomp$2_response$jscomp$26$$ = "Message did not include response type: " + JSON.stringify($errorMessage$jscomp$2_response$jscomp$26$$);
      }
    } while (0);
    10 > this.$f$ ? $JSCompiler_StaticMethods_mr_Logger_prototype$warning$$(this.$logger_$, $errorMessage$jscomp$2_response$jscomp$26$$) : $JSCompiler_StaticMethods_mr_Logger_prototype$fine$$(this.$logger_$, $errorMessage$jscomp$2_response$jscomp$26$$);
    ++this.$f$;
  }
};
var $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$ = chrome.cast.streaming, $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$$ = function($mirrorInitData$jscomp$1$$, $mirrorSettings$jscomp$7$$, $seqNumGenerator$$, $messageDispatcher$$, $testHooks$$) {
  this.$I$ = $mirrorInitData$jscomp$1$$.sessionId;
  this.$w$ = $mirrorInitData$jscomp$1$$.$sinkIpAddress$;
  this.$J$ = $mirrorInitData$jscomp$1$$.$sinkModelName$;
  this.$f$ = $mirrorSettings$jscomp$7$$;
  this.$H$ = $seqNumGenerator$$;
  this.$F$ = $messageDispatcher$$;
  this.$K$ = $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$createTestHookRunner_$$($testHooks$$, "onAnswer", this.$w$);
  this.$L$ = $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$createTestHookRunner_$$($testHooks$$, "onSessionStop", this.$w$);
  this.$logger_$ = $mr$Logger$getInstance$$("mr.mirror.cast.StreamingLaunchWorkflow");
  this.$A$ = new $module$exports$mr$Sequencer$$;
  this.$l$ = this.$B$ = this.$o$ = this.$b$ = this.$a$ = this.$j$ = this.$h$ = this.$g$ = null;
};
$module$exports$mr$mirror$cast$StreamingLaunchWorkflow$$.prototype.start = function($audioTrack$$, $videoTrack$$, $client$jscomp$6$$) {
  var $$jscomp$this$jscomp$155$$ = this;
  if (!$audioTrack$$ && !$videoTrack$$) {
    return Promise.reject(Error("No tracks to stream"));
  }
  var $isRemotingAudio$$ = $audioTrack$$ instanceof $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$, $isRemotingVideo$$ = $videoTrack$$ instanceof $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$;
  ($isRemotingAudio$$ && $videoTrack$$ && !$isRemotingVideo$$ || $isRemotingVideo$$ && $audioTrack$$ && !$isRemotingAudio$$) && $goog$asserts$fail$$("Mixing remoting and non-remoting tracks");
  return $JSCompiler_StaticMethods_conductFrom$$(this.$A$, 1, function($isRemotingAudio$$) {
    $$jscomp$this$jscomp$155$$.$g$ = $audioTrack$$;
    $$jscomp$this$jscomp$155$$.$h$ = $videoTrack$$;
    $$jscomp$this$jscomp$155$$.$j$ = $client$jscomp$6$$;
    $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($$jscomp$this$jscomp$155$$.$logger_$, function() {
      return "Launching streaming for " + $JSCompiler_StaticMethods_getActivityDescription$$($$jscomp$this$jscomp$155$$) + " " + ("to a " + $$jscomp$this$jscomp$155$$.$J$ + ".");
    });
    return $JSCompiler_StaticMethods_createCastStreamingSession_$$($$jscomp$this$jscomp$155$$).then($$jscomp$this$jscomp$155$$.$D$.bind($$jscomp$this$jscomp$155$$)).then(function($audioTrack$$) {
      return $JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$$($$jscomp$this$jscomp$155$$, $audioTrack$$).then(function($videoTrack$$) {
        $$jscomp$this$jscomp$155$$.$K$();
        var $client$jscomp$6$$ = $JSCompiler_StaticMethods_selectOffersFromAnswer_$$($$jscomp$this$jscomp$155$$, $videoTrack$$, $audioTrack$$);
        $$jscomp$this$jscomp$155$$.$a$ = $JSCompiler_StaticMethods_destroyStreamIfNoOffers_$$($$jscomp$this$jscomp$155$$, $$jscomp$this$jscomp$155$$.$a$, $client$jscomp$6$$);
        $$jscomp$this$jscomp$155$$.$b$ = $JSCompiler_StaticMethods_destroyStreamIfNoOffers_$$($$jscomp$this$jscomp$155$$, $$jscomp$this$jscomp$155$$.$b$, $client$jscomp$6$$);
        if (!$$jscomp$this$jscomp$155$$.$a$ && !$$jscomp$this$jscomp$155$$.$b$) {
          throw Error("Receiver did not select any offers from: " + JSON.stringify($audioTrack$$));
        }
        $$jscomp$this$jscomp$155$$.$B$ = !!$videoTrack$$.$g$;
        $$jscomp$this$jscomp$155$$.$l$ = function($audioTrack$$, $videoTrack$$) {
          $audioTrack$$ == $$jscomp$this$jscomp$155$$.$a$ ? $$jscomp$this$jscomp$155$$.$j$.$onStreamingError$("Audio stream (id=" + $audioTrack$$ + ") error: " + $videoTrack$$) : $audioTrack$$ == $$jscomp$this$jscomp$155$$.$b$ && $$jscomp$this$jscomp$155$$.$j$.$onStreamingError$("Video stream (id=" + $audioTrack$$ + ") error: " + $videoTrack$$);
        };
        $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.onError.addListener($$jscomp$this$jscomp$155$$.$l$);
        return $JSCompiler_StaticMethods_startTransportAndRtpStreams_$$($$jscomp$this$jscomp$155$$, $videoTrack$$, $client$jscomp$6$$);
      });
    }).then(function() {
      $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($$jscomp$this$jscomp$155$$.$logger_$, function() {
        return "Launched streaming for " + $JSCompiler_StaticMethods_getActivityDescription$$($$jscomp$this$jscomp$155$$);
      });
      $$jscomp$this$jscomp$155$$.$j$.$didStartStreaming$($$jscomp$this$jscomp$155$$);
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($isRemotingAudio$$, 2);
      return {$audioStreamId$:null != $$jscomp$this$jscomp$155$$.$a$ ? $$jscomp$this$jscomp$155$$.$a$.toString(16) : null, $videoStreamId$:null != $$jscomp$this$jscomp$155$$.$b$ ? $$jscomp$this$jscomp$155$$.$b$.toString(16) : null};
    });
  });
};
$module$exports$mr$mirror$cast$StreamingLaunchWorkflow$$.prototype.stop = function() {
  var $$jscomp$this$jscomp$156$$ = this;
  return $JSCompiler_StaticMethods_recover$$(this.$A$, function($op$jscomp$2$$) {
    if (!$$jscomp$this$jscomp$156$$.$g$ && !$$jscomp$this$jscomp$156$$.$h$) {
      return $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$2$$, 1), Promise.resolve();
    }
    $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($$jscomp$this$jscomp$156$$.$logger_$, function() {
      return "Stopping streaming for " + $JSCompiler_StaticMethods_getActivityDescription$$($$jscomp$this$jscomp$156$$) + ".";
    });
    $$jscomp$this$jscomp$156$$.$l$ && ($module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.onError.removeListener($$jscomp$this$jscomp$156$$.$l$), $$jscomp$this$jscomp$156$$.$l$ = null);
    if ($$jscomp$this$jscomp$156$$.$j$) {
      var $collectionCompletePromise$$ = $$jscomp$this$jscomp$156$$.$j$.$willStopStreaming$();
      $$jscomp$this$jscomp$156$$.$j$ = null;
    } else {
      $collectionCompletePromise$$ = Promise.resolve();
    }
    return $collectionCompletePromise$$.then(function() {
      $$jscomp$this$jscomp$156$$.$a$ && ($module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.stop($$jscomp$this$jscomp$156$$.$a$), $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.destroy($$jscomp$this$jscomp$156$$.$a$), $$jscomp$this$jscomp$156$$.$a$ = null);
      $$jscomp$this$jscomp$156$$.$b$ && ($module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.stop($$jscomp$this$jscomp$156$$.$b$), $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.destroy($$jscomp$this$jscomp$156$$.$b$), $$jscomp$this$jscomp$156$$.$b$ = null);
      $$jscomp$this$jscomp$156$$.$o$ && ($module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.udpTransport.destroy($$jscomp$this$jscomp$156$$.$o$), $$jscomp$this$jscomp$156$$.$o$ = null);
      $$jscomp$this$jscomp$156$$.$L$();
      $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($$jscomp$this$jscomp$156$$.$logger_$, function() {
        return "Stopped streaming for " + $JSCompiler_StaticMethods_getActivityDescription$$($$jscomp$this$jscomp$156$$) + ".";
      });
      $$jscomp$this$jscomp$156$$.$g$ = null;
      $$jscomp$this$jscomp$156$$.$h$ = null;
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$2$$, 1);
    });
  });
};
var $JSCompiler_StaticMethods_takeEvents$$ = function($JSCompiler_StaticMethods_takeEvents$self$$, $tags$jscomp$1$$) {
  var $tagsJson$$ = JSON.stringify($tags$jscomp$1$$);
  return Promise.all([$JSCompiler_StaticMethods_takeEvents$self$$.$a$ && new Promise(function($tags$jscomp$1$$) {
    return $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.getRawEvents($JSCompiler_StaticMethods_takeEvents$self$$.$a$, $tagsJson$$, $tags$jscomp$1$$);
  }), $JSCompiler_StaticMethods_takeEvents$self$$.$b$ && new Promise(function($tags$jscomp$1$$) {
    return $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.getRawEvents($JSCompiler_StaticMethods_takeEvents$self$$.$b$, $tagsJson$$, $tags$jscomp$1$$);
  })]).catch(function($tags$jscomp$1$$) {
    $JSCompiler_StaticMethods_takeEvents$self$$.$logger_$.error("Unexpected error when calling getRawEvents()", $tags$jscomp$1$$);
    return [];
  }).then(function($JSCompiler_StaticMethods_takeEvents$self$$) {
    return new Blob($JSCompiler_StaticMethods_takeEvents$self$$.filter(function($JSCompiler_StaticMethods_takeEvents$self$$) {
      return !!$JSCompiler_StaticMethods_takeEvents$self$$;
    }), {type:"application/gzip"});
  });
}, $JSCompiler_StaticMethods_getStatsAndReset$$ = function($JSCompiler_StaticMethods_getStatsAndReset$self$$) {
  return Promise.all([$JSCompiler_StaticMethods_getStatsAndReset$self$$.$a$ && new Promise(function($resolve$jscomp$48$$) {
    return $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.getStats($JSCompiler_StaticMethods_getStatsAndReset$self$$.$a$, $resolve$jscomp$48$$);
  }), $JSCompiler_StaticMethods_getStatsAndReset$self$$.$b$ && new Promise(function($resolve$jscomp$49$$) {
    return $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.getStats($JSCompiler_StaticMethods_getStatsAndReset$self$$.$b$, $resolve$jscomp$49$$);
  })]).catch(function($error$jscomp$69$$) {
    $JSCompiler_StaticMethods_getStatsAndReset$self$$.$logger_$.error("Unexpected error when calling getStats()", $error$jscomp$69$$);
    return [];
  }).then(function($JSCompiler_StaticMethods_getStatsAndReset$self$$) {
    return Object.assign.apply(Object, [].concat([{}], $$jscomp$arrayFromIterable$$($JSCompiler_StaticMethods_getStatsAndReset$self$$.filter(function($JSCompiler_StaticMethods_getStatsAndReset$self$$) {
      return !!$JSCompiler_StaticMethods_getStatsAndReset$self$$;
    }))));
  });
}, $JSCompiler_StaticMethods_getActivityDescription$$ = function($JSCompiler_StaticMethods_getActivityDescription$self$$) {
  if ($JSCompiler_StaticMethods_getActivityDescription$self$$.$g$ && $JSCompiler_StaticMethods_getActivityDescription$self$$.$h$) {
    var $trackTypes$$ = "audio+video ";
  } else {
    if ($JSCompiler_StaticMethods_getActivityDescription$self$$.$g$) {
      $trackTypes$$ = "audio-only ";
    } else {
      if ($JSCompiler_StaticMethods_getActivityDescription$self$$.$h$) {
        $trackTypes$$ = "video-only ";
      } else {
        return "stopped";
      }
    }
  }
  return $JSCompiler_StaticMethods_getActivityDescription$self$$.$g$ instanceof $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ || $JSCompiler_StaticMethods_getActivityDescription$self$$.$h$ instanceof $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ ? $trackTypes$$ + "remoting" : $trackTypes$$ + "streaming";
}, $JSCompiler_StaticMethods_createCastStreamingSession_$$ = function($JSCompiler_StaticMethods_createCastStreamingSession_$self$$) {
  return new Promise(function($resolve$jscomp$50$$) {
    var $createCallback$$ = function($createCallback$$, $videoStreamId$$, $udpTransportId$$) {
      $createCallback$$ && !$JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$g$ && ($module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.destroy($createCallback$$), $createCallback$$ = null);
      $videoStreamId$$ && !$JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$h$ && ($module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.destroy($videoStreamId$$), $videoStreamId$$ = null);
      $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$logger_$, function() {
        return "Created Cast Streaming session: audioStreamId=" + $createCallback$$ + ", videoStreamId=" + $videoStreamId$$ + ".";
      });
      $JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$a$ = $createCallback$$;
      $JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$b$ = $videoStreamId$$;
      $JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$o$ = $udpTransportId$$;
      $resolve$jscomp$50$$();
    };
    $JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$g$ instanceof $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ || $JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$h$ instanceof $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ ? $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.session.create(null, null, $createCallback$$) : ($goog$asserts$assert$$($JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$g$ || 
    $JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$h$), $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.session.create($JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$g$, $JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$h$, $createCallback$$));
  });
};
$module$exports$mr$mirror$cast$StreamingLaunchWorkflow$$.prototype.$D$ = function() {
  for (var $aesKey$$ = $goog$crypt$byteArrayToHex$$(), $aesIv$$ = $goog$crypt$byteArrayToHex$$(), $candidates$$ = [], $$jscomp$iter$22$$ = $$jscomp$makeIterator$$([this.$a$, this.$b$]), $$jscomp$key$streamId_streamId$jscomp$10$$ = $$jscomp$iter$22$$.next(); !$$jscomp$key$streamId_streamId$jscomp$10$$.done; $$jscomp$key$streamId_streamId$jscomp$10$$ = $$jscomp$iter$22$$.next()) {
    if ($$jscomp$key$streamId_streamId$jscomp$10$$ = $$jscomp$key$streamId_streamId$jscomp$10$$.value) {
      for (var $isAudio$$ = $$jscomp$key$streamId_streamId$jscomp$10$$ == this.$a$, $payloadType$$ = $isAudio$$ ? 127 : 96, $randomSsrc$$ = $isAudio$$ ? Math.floor(499999 * Math.random()) + 1 : Math.floor(499999 * Math.random()) + 500001, $timebase$$ = $isAudio$$ ? 48000 : 90000, $$jscomp$iter$21$$ = $$jscomp$makeIterator$$($module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.getSupportedParams($$jscomp$key$streamId_streamId$jscomp$10$$)), $$jscomp$key$params_params$jscomp$22$$ = 
      $$jscomp$iter$21$$.next(); !$$jscomp$key$params_params$jscomp$22$$.done; $$jscomp$key$params_params$jscomp$22$$ = $$jscomp$iter$21$$.next()) {
        $$jscomp$key$params_params$jscomp$22$$ = $$jscomp$key$params_params$jscomp$22$$.value, $$jscomp$key$params_params$jscomp$22$$.payload.payloadType = $payloadType$$, $$jscomp$key$params_params$jscomp$22$$.payload.maxLatency = this.$f$.maxLatencyMillis, $$jscomp$key$params_params$jscomp$22$$.payload.minLatency = this.$f$.minLatencyMillis, $$jscomp$key$params_params$jscomp$22$$.payload.animatedLatency = this.$f$.animatedLatencyMillis, $$jscomp$key$params_params$jscomp$22$$.payload.ssrc = $randomSsrc$$, 
        $$jscomp$key$params_params$jscomp$22$$.payload.clockRate = $timebase$$, $$jscomp$key$params_params$jscomp$22$$.payload.aesKey = $aesKey$$, $$jscomp$key$params_params$jscomp$22$$.payload.aesIvMask = $aesIv$$, $isAudio$$ ? ($$jscomp$key$params_params$jscomp$22$$.payload.channels = 2, $$jscomp$key$params_params$jscomp$22$$.payload.maxBitrate = this.$f$.audioBitrate, $$jscomp$key$params_params$jscomp$22$$.payload.maxFrameRate = 100) : ($$jscomp$key$params_params$jscomp$22$$.payload.minBitrate = 
        this.$f$.minVideoBitrate, $$jscomp$key$params_params$jscomp$22$$.payload.maxBitrate = this.$f$.maxVideoBitrate, $$jscomp$key$params_params$jscomp$22$$.payload.maxFrameRate = this.$f$.maxFrameRate), $candidates$$.push(new $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$Offer_$$($$jscomp$key$streamId_streamId$jscomp$10$$, $$jscomp$key$params_params$jscomp$22$$));
      }
    }
  }
  return $candidates$$;
};
var $JSCompiler_StaticMethods_destroyStreamIfNoOffers_$$ = function($JSCompiler_StaticMethods_destroyStreamIfNoOffers_$self$$, $streamId$jscomp$11$$, $offers$$) {
  $streamId$jscomp$11$$ && !$offers$$.some(function($JSCompiler_StaticMethods_destroyStreamIfNoOffers_$self$$) {
    return $JSCompiler_StaticMethods_destroyStreamIfNoOffers_$self$$.$streamId$ == $streamId$jscomp$11$$;
  }) && ($JSCompiler_StaticMethods_mr_Logger_prototype$warning$$($JSCompiler_StaticMethods_destroyStreamIfNoOffers_$self$$.$logger_$, "Destroying RTP stream not selected by the receiver: id=" + $streamId$jscomp$11$$), $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.destroy($streamId$jscomp$11$$), $streamId$jscomp$11$$ = null);
  return $streamId$jscomp$11$$;
}, $JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$$ = function($JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$, $candidates$jscomp$1$$) {
  return new Promise(function($resolve$jscomp$51$$, $reject$jscomp$46$$) {
    for (var $streamList$$ = [], $index$jscomp$81$$ = 0; $index$jscomp$81$$ < $candidates$jscomp$1$$.length; ++$index$jscomp$81$$) {
      var $params$jscomp$23$$ = $candidates$jscomp$1$$[$index$jscomp$81$$].params, $stream$jscomp$12$$ = {index:$index$jscomp$81$$, codecName:$params$jscomp$23$$.payload.codecName.toLowerCase(), rtpProfile:"cast", rtpPayloadType:$params$jscomp$23$$.payload.payloadType, ssrc:$params$jscomp$23$$.payload.ssrc, targetDelay:$params$jscomp$23$$.payload.animatedLatency, aesKey:$params$jscomp$23$$.payload.aesKey, aesIvMask:$params$jscomp$23$$.payload.aesIvMask, timeBase:"1/" + $params$jscomp$23$$.payload.clockRate, 
      receiverRtcpEventLog:$JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$f$.enableLogging, rtpExtensions:["adaptive_playout_delay"]};
      $JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$f$.dscpEnabled && ($stream$jscomp$12$$.receiverRtcpDscp = 46);
      127 == $params$jscomp$23$$.payload.payloadType ? Object.assign($stream$jscomp$12$$, {type:"audio_source", bitRate:0 < $params$jscomp$23$$.payload.maxBitrate ? 1000 * $params$jscomp$23$$.payload.maxBitrate : 60 * $params$jscomp$23$$.payload.maxFrameRate + $params$jscomp$23$$.payload.clockRate * $params$jscomp$23$$.payload.channels, sampleRate:$params$jscomp$23$$.payload.clockRate, channels:$params$jscomp$23$$.payload.channels}) : Object.assign($stream$jscomp$12$$, {type:"video_source", renderMode:"video", 
      maxFrameRate:Math.round(1000 * $params$jscomp$23$$.payload.maxFrameRate) + "/1000", maxBitRate:1000 * $params$jscomp$23$$.payload.maxBitrate, resolutions:[{width:$JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$f$.maxWidth, height:$JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$f$.maxHeight}]});
      $streamList$$.push($stream$jscomp$12$$);
    }
    var $castMode$$ = $JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$g$ instanceof $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ || $JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$h$ instanceof $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ ? "remoting" : "mirroring", $offerMessage$$ = {type:"OFFER", sessionId:$JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$I$, seqNum:$JSCompiler_StaticMethods_getNext$$($JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$H$), 
    offer:{castMode:$castMode$$, receiverGetStatus:!0, supportedStreams:$streamList$$}};
    $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$logger_$, function() {
      return "Sending OFFER message: " + JSON.stringify($offerMessage$$);
    });
    $JSCompiler_StaticMethods_requestReply$$($JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$F$, $offerMessage$$, "ANSWER", 10000, function($candidates$jscomp$1$$, $streamList$$) {
      if (null == $candidates$jscomp$1$$) {
        $reject$jscomp$46$$($streamList$$);
      } else {
        if ("ok" == $candidates$jscomp$1$$.result && $candidates$jscomp$1$$.$a$) {
          if ($candidates$jscomp$1$$.$b$ != $offerMessage$$.seqNum) {
            return $JSCompiler_StaticMethods_mr_Logger_prototype$warning$$($JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$logger_$, "Ignoring ANSWER for OFFER with different seqNum: " + JSON.stringify($candidates$jscomp$1$$)), !1;
          }
          (($streamList$$ = $candidates$jscomp$1$$.$a$.$f$) && $streamList$$ != $castMode$$ || !$streamList$$ && "mirroring" != $castMode$$) && $JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$logger_$.error("Expected receiver to ANSWER with castMode=" + $castMode$$ + ", but got: " + $streamList$$);
          $JSCompiler_StaticMethods_mr_Logger_prototype$fine$$($JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$logger_$, function() {
            return "Received ANSWER: " + JSON.stringify($candidates$jscomp$1$$);
          });
          $resolve$jscomp$51$$($candidates$jscomp$1$$.$a$);
        } else {
          $reject$jscomp$46$$(Error("Non-OK ANSWER received: " + JSON.stringify($candidates$jscomp$1$$)));
        }
      }
      return !0;
    });
  });
}, $JSCompiler_StaticMethods_selectOffersFromAnswer_$$ = function($JSCompiler_StaticMethods_selectOffersFromAnswer_$self$$, $answer$jscomp$2$$, $candidates$jscomp$2$$) {
  if ($answer$jscomp$2$$.$a$.length != $answer$jscomp$2$$.$b$.length) {
    return $JSCompiler_StaticMethods_selectOffersFromAnswer_$self$$.$logger_$.error("sendIndexes.length != ssrcs.length in ANSWER: " + JSON.stringify($answer$jscomp$2$$)), [];
  }
  for (var $selectedOffers$jscomp$1$$ = [], $$jscomp$loop$76$$ = {}, $i$jscomp$276$$ = 0; $i$jscomp$276$$ < $answer$jscomp$2$$.$a$.length; $$jscomp$loop$76$$ = {candidate:$$jscomp$loop$76$$.candidate}, ++$i$jscomp$276$$) {
    var $index$jscomp$82$$ = $answer$jscomp$2$$.$a$[$i$jscomp$276$$];
    if (0 > $index$jscomp$82$$ || $index$jscomp$82$$ >= $candidates$jscomp$2$$.length) {
      return $JSCompiler_StaticMethods_selectOffersFromAnswer_$self$$.$logger_$.error("Receiver selected invalid index (" + $index$jscomp$82$$ + " < " + $candidates$jscomp$2$$.length + ") in ANSWER: " + JSON.stringify($answer$jscomp$2$$)), [];
    }
    $$jscomp$loop$76$$.candidate = $candidates$jscomp$2$$[$index$jscomp$82$$];
    if ($selectedOffers$jscomp$1$$.some(function($JSCompiler_StaticMethods_selectOffersFromAnswer_$self$$) {
      return function($answer$jscomp$2$$) {
        return $answer$jscomp$2$$.$streamId$ == $JSCompiler_StaticMethods_selectOffersFromAnswer_$self$$.candidate.$streamId$;
      };
    }($$jscomp$loop$76$$))) {
      return $JSCompiler_StaticMethods_selectOffersFromAnswer_$self$$.$logger_$.error("Receiver selected same RTP stream twice in ANSWER: " + JSON.stringify($answer$jscomp$2$$)), [];
    }
    $$jscomp$loop$76$$.candidate.params.payload.feedbackSsrc = $answer$jscomp$2$$.$b$[$index$jscomp$82$$];
    if ($selectedOffers$jscomp$1$$.some(function($JSCompiler_StaticMethods_selectOffersFromAnswer_$self$$) {
      return function($answer$jscomp$2$$) {
        return $answer$jscomp$2$$.params.payload.feedbackSsrc == $JSCompiler_StaticMethods_selectOffersFromAnswer_$self$$.candidate.params.payload.feedbackSsrc;
      };
    }($$jscomp$loop$76$$))) {
      return $JSCompiler_StaticMethods_selectOffersFromAnswer_$self$$.$logger_$.error("Receiver provided same SSRC for two different RTP streams in ANSWER: " + JSON.stringify($answer$jscomp$2$$)), [];
    }
    $selectedOffers$jscomp$1$$.push($$jscomp$loop$76$$.candidate);
  }
  return $selectedOffers$jscomp$1$$;
}, $JSCompiler_StaticMethods_startTransportAndRtpStreams_$$ = function($JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$, $answer$jscomp$3$$, $selectedOffers$jscomp$2$$) {
  var $rtpStreamStartedListener$$ = null, $cleanup$jscomp$5$$ = function() {
    $rtpStreamStartedListener$$ && ($module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.onStarted.removeListener($rtpStreamStartedListener$$), $rtpStreamStartedListener$$ = null);
  };
  return (new Promise(function($cleanup$jscomp$5$$, $reject$jscomp$47$$) {
    var $resolve$jscomp$52$$ = $answer$jscomp$3$$.$h$ || 2344;
    $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$.$logger_$, function() {
      return "Starting RTP streams to receiver at " + ($JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$.$w$ + ":" + $resolve$jscomp$52$$) + (" for selected offers: " + JSON.stringify($selectedOffers$jscomp$2$$));
    });
    var $$jscomp$iter$23_udpTransportId$jscomp$1$$ = $JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$.$o$ || -1;
    $JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$.$f$.dscpEnabled && ($JSCompiler_StaticMethods_mr_Logger_prototype$info$$($JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$.$logger_$, "Enabled DSCP in sender."), $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.udpTransport.setOptions($$jscomp$iter$23_udpTransportId$jscomp$1$$, {DSCP:!0}));
    $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.udpTransport.setDestination($$jscomp$iter$23_udpTransportId$jscomp$1$$, {address:$JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$.$w$, port:$resolve$jscomp$52$$});
    var $streamIdsNotYetStarted$$ = new Set($selectedOffers$jscomp$2$$.map(function($JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$) {
      return $JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$.$streamId$;
    }));
    $rtpStreamStartedListener$$ = function($JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$) {
      $streamIdsNotYetStarted$$.delete($JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$);
      0 == $streamIdsNotYetStarted$$.size && $cleanup$jscomp$5$$();
    };
    $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.onStarted.addListener($rtpStreamStartedListener$$);
    for (var $$jscomp$iter$23_udpTransportId$jscomp$1$$ = $$jscomp$makeIterator$$($selectedOffers$jscomp$2$$), $$jscomp$key$offer_offer$$ = $$jscomp$iter$23_udpTransportId$jscomp$1$$.next(); !$$jscomp$key$offer_offer$$.done; $$jscomp$key$offer_offer$$ = $$jscomp$iter$23_udpTransportId$jscomp$1$$.next()) {
      $$jscomp$key$offer_offer$$ = $$jscomp$key$offer_offer$$.value, $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.toggleLogging($$jscomp$key$offer_offer$$.$streamId$, $JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$.$f$.enableLogging), $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.start($$jscomp$key$offer_offer$$.$streamId$, $$jscomp$key$offer_offer$$.params);
    }
    setTimeout(function() {
      $reject$jscomp$47$$(Error("Timeout: RTP streams failed to start."));
    }, 10000);
  })).then($cleanup$jscomp$5$$).catch(function($JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$) {
    $cleanup$jscomp$5$$();
    throw $JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$;
  });
}, $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$createTestHookRunner_$$ = function($testHooks$jscomp$1$$, $method$jscomp$19$$, $receiverIpAddress$$) {
  var $$jscomp$this$jscomp$162$$ = this;
  return $testHooks$jscomp$1$$ && $method$jscomp$19$$ in $testHooks$jscomp$1$$ ? function() {
    try {
      $testHooks$jscomp$1$$[$method$jscomp$19$$]($receiverIpAddress$$);
    } catch ($error$jscomp$72$$) {
      $$jscomp$this$jscomp$162$$.$logger_$.error("Error from testHooks." + $method$jscomp$19$$, $error$jscomp$72$$);
    }
  } : function() {
  };
}, $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$Offer_$$ = function($streamId$jscomp$13$$, $params$jscomp$24$$) {
  this.$streamId$ = $streamId$jscomp$13$$;
  this.params = $params$jscomp$24$$;
}, $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ = function() {
};
var $module$exports$mr$mirror$cast$MediaRemoter$$ = function($mirrorRoute$$, $capabilities$jscomp$10_randomHex$jscomp$inline_1644_remotingRoute$jscomp$inline_1647_sinkId$jscomp$inline_1645$$, $mirrorSettings$jscomp$8$$, $seqNumGenerator$jscomp$1$$, $messageDispatcher$jscomp$1$$, $testHooks$jscomp$2$$) {
  $goog$asserts$assert$$($mirrorRoute$$.mediaSource && $mr$MediaSourceUtils$isTabMirrorSource$$($mirrorRoute$$.mediaSource));
  $goog$asserts$assert$$($mirrorRoute$$.$mirrorInitData$);
  $capabilities$jscomp$10_randomHex$jscomp$inline_1644_remotingRoute$jscomp$inline_1647_sinkId$jscomp$inline_1645$$ = Math.floor(16777216 * Math.random()).toString(16);
  $capabilities$jscomp$10_randomHex$jscomp$inline_1644_remotingRoute$jscomp$inline_1647_sinkId$jscomp$inline_1645$$ = "000000".substring($capabilities$jscomp$10_randomHex$jscomp$inline_1644_remotingRoute$jscomp$inline_1647_sinkId$jscomp$inline_1645$$.length) + $capabilities$jscomp$10_randomHex$jscomp$inline_1644_remotingRoute$jscomp$inline_1647_sinkId$jscomp$inline_1645$$;
  var $sourceUrn$jscomp$inline_1646$$ = $mirrorRoute$$.mediaSource.replace("urn:x-org.chromium.media:source:tab:", "urn:x-org.chromium.media:source:tab_content_remoting:");
  $goog$asserts$assert$$($sourceUrn$jscomp$inline_1646$$ != $mirrorRoute$$.mediaSource);
  $capabilities$jscomp$10_randomHex$jscomp$inline_1644_remotingRoute$jscomp$inline_1647_sinkId$jscomp$inline_1645$$ = $mr$Route$createRoute$$("undefined", "cast", $capabilities$jscomp$10_randomHex$jscomp$inline_1644_remotingRoute$jscomp$inline_1647_sinkId$jscomp$inline_1645$$, $sourceUrn$jscomp$inline_1646$$, !0, $mirrorRoute$$.description, $mirrorRoute$$.iconUrl);
  $capabilities$jscomp$10_randomHex$jscomp$inline_1644_remotingRoute$jscomp$inline_1647_sinkId$jscomp$inline_1645$$.forDisplay = !1;
  $capabilities$jscomp$10_randomHex$jscomp$inline_1644_remotingRoute$jscomp$inline_1647_sinkId$jscomp$inline_1645$$.offTheRecord = $mirrorRoute$$.offTheRecord;
  $capabilities$jscomp$10_randomHex$jscomp$inline_1644_remotingRoute$jscomp$inline_1647_sinkId$jscomp$inline_1645$$.$mirrorInitData$ = $mirrorRoute$$.$mirrorInitData$;
  this.$B$ = $capabilities$jscomp$10_randomHex$jscomp$inline_1644_remotingRoute$jscomp$inline_1647_sinkId$jscomp$inline_1645$$;
  this.$A$ = new $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$$($goog$asserts$assert$$(this.$B$.$mirrorInitData$), $mirrorSettings$jscomp$8$$, $seqNumGenerator$jscomp$1$$, $messageDispatcher$jscomp$1$$, $testHooks$jscomp$2$$);
  this.$l$ = $messageDispatcher$jscomp$1$$;
  this.$g$ = new $module$exports$mr$Sequencer$$;
  this.$b$ = new $module$exports$mr$mirror$cast$MediaRemoter$RpcPipe_$$;
  this.$logger_$ = $mr$Logger$getInstance$$("mr.mirror.cast.MediaRemoter");
  this.$a$ = this.$j$ = this.$h$ = this.$f$ = this.$o$ = null;
};
$JSCompiler_prototypeAlias$$ = $module$exports$mr$mirror$cast$MediaRemoter$$.prototype;
$JSCompiler_prototypeAlias$$.start = function($requestCallback$$, $client$jscomp$7$$) {
  var $$jscomp$this$jscomp$163$$ = this;
  return $JSCompiler_StaticMethods_conductFrom$$(this.$g$, 1, function($op$jscomp$3$$) {
    $$jscomp$this$jscomp$163$$.$o$ = $requestCallback$$;
    $$jscomp$this$jscomp$163$$.$f$ = $client$jscomp$7$$;
    $$jscomp$this$jscomp$163$$.$h$ = $JSCompiler_StaticMethods_registerRemoter$$($$jscomp$this$jscomp$163$$);
    $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$3$$, 2);
    return Promise.resolve();
  });
};
$JSCompiler_prototypeAlias$$.stop = function() {
  var $$jscomp$this$jscomp$164$$ = this;
  return $JSCompiler_StaticMethods_recover$$(this.$g$, function($op$jscomp$4$$) {
    $JSCompiler_StaticMethods_unregisterRemoter$$($$jscomp$this$jscomp$164$$);
    $$jscomp$this$jscomp$164$$.$a$ = null;
    $$jscomp$this$jscomp$164$$.$j$ = null;
    $$jscomp$this$jscomp$164$$.$h$ = null;
    $$jscomp$this$jscomp$164$$.$f$ = null;
    $$jscomp$this$jscomp$164$$.$o$ = null;
    return new Promise(function($resolve$jscomp$53$$) {
      window.setTimeout(function() {
        $JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$$($$jscomp$this$jscomp$164$$).then(function() {
          $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$4$$, 1);
          $resolve$jscomp$53$$();
        });
      }, 250);
    });
  });
};
$JSCompiler_prototypeAlias$$.$getRoute$ = function() {
  return this.$B$;
};
$JSCompiler_prototypeAlias$$.$processControlMessage$ = function($message$jscomp$155$$) {
  var $$jscomp$this$jscomp$165$$ = this;
  $goog$asserts$assert$$(this.$h$);
  $JSCompiler_StaticMethods_mr_Logger_prototype$fine$$(this.$logger_$, function() {
    return "Processing control message: " + $message$jscomp$155$$;
  });
  var $instruction_withVideo$$ = $message$jscomp$155$$.split(":"), $sessionId$jscomp$37$$ = ($instruction_withVideo$$.find(function($message$jscomp$155$$) {
    return $message$jscomp$155$$.startsWith("session=");
  }) || "").substring(8);
  if (0 == $sessionId$jscomp$37$$.length) {
    return this.$logger_$.error("Missing valid 'session' field in control message: " + $message$jscomp$155$$), Promise.resolve();
  }
  switch($instruction_withVideo$$[0]) {
    case "START_CAST_REMOTING":
      return $JSCompiler_StaticMethods_startRemoting_$$(this, $sessionId$jscomp$37$$).catch(function($message$jscomp$155$$) {
        $$jscomp$this$jscomp$165$$.$logger_$.error("Failed to start remoting", $message$jscomp$155$$);
        $JSCompiler_StaticMethods_sendFatalSessionMessageToBrowser_$$($$jscomp$this$jscomp$165$$, $sessionId$jscomp$37$$);
      });
    case "START_CAST_REMOTING_STREAMS":
      var $withAudio$$ = $instruction_withVideo$$.some(function($message$jscomp$155$$) {
        return "audio=Y" == $message$jscomp$155$$;
      }), $instruction_withVideo$$ = $instruction_withVideo$$.some(function($message$jscomp$155$$) {
        return "video=Y" == $message$jscomp$155$$;
      });
      return $JSCompiler_StaticMethods_startRemotingStreams_$$(this, $sessionId$jscomp$37$$, $withAudio$$, $instruction_withVideo$$).then(this.$w$.bind(this)).catch(function($message$jscomp$155$$) {
        $$jscomp$this$jscomp$165$$.$logger_$.error("Failed to start remoting streams", $message$jscomp$155$$);
        $JSCompiler_StaticMethods_sendFatalSessionMessageToBrowser_$$($$jscomp$this$jscomp$165$$, $sessionId$jscomp$37$$);
      });
    case "STOP_CAST_REMOTING":
      return $JSCompiler_StaticMethods_stopRemoting_$$(this, $sessionId$jscomp$37$$).catch(function($message$jscomp$155$$) {
        $$jscomp$this$jscomp$165$$.$logger_$.error("Failed to stop remoting", $message$jscomp$155$$);
        $JSCompiler_StaticMethods_sendFatalSessionMessageToBrowser_$$($$jscomp$this$jscomp$165$$, $sessionId$jscomp$37$$);
      }).then(function() {
        $$jscomp$this$jscomp$165$$.$w$("STOPPED_CAST_REMOTING:session=" + $sessionId$jscomp$37$$);
      });
    default:
      this.$logger_$.error("Unknown control message: " + $message$jscomp$155$$);
  }
  return Promise.resolve();
};
$JSCompiler_prototypeAlias$$.$sendMessageToSink$ = function($data$jscomp$77$$) {
  return $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$$(this.$b$, $data$jscomp$77$$);
};
$JSCompiler_prototypeAlias$$.$didStartStreaming$ = function($streamingMonitor$jscomp$1$$) {
  this.$f$ && this.$f$.$didStartStreaming$($streamingMonitor$jscomp$1$$);
};
$JSCompiler_prototypeAlias$$.$willStopStreaming$ = function() {
  return this.$f$ ? this.$f$.$willStopStreaming$() : Promise.resolve();
};
$JSCompiler_prototypeAlias$$.$onStreamingError$ = function($message$jscomp$156$$, $error$jscomp$76$$) {
  this.$logger_$.error("Error during streaming: " + $message$jscomp$156$$, $error$jscomp$76$$);
  null != this.$a$ && $JSCompiler_StaticMethods_sendFatalSessionMessageToBrowser_$$(this, this.$a$);
};
var $JSCompiler_StaticMethods_startRemoting_$$ = function($JSCompiler_StaticMethods_startRemoting_$self$$, $controlSessionId$$) {
  if (null != $JSCompiler_StaticMethods_startRemoting_$self$$.$a$) {
    return Promise.reject(Error("Attempt to start a second session (" + $controlSessionId$$ + ") during existing session (" + $JSCompiler_StaticMethods_startRemoting_$self$$.$a$ + ")."));
  }
  $JSCompiler_StaticMethods_startRemoting_$self$$.$a$ = $controlSessionId$$;
  var $infoLoggingIsOn$$ = !1;
  $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($JSCompiler_StaticMethods_startRemoting_$self$$.$logger_$, function() {
    $infoLoggingIsOn$$ = !0;
    return "Starting next media remoting session (id=" + $controlSessionId$$ + ").";
  });
  $infoLoggingIsOn$$ && $JSCompiler_StaticMethods_startReporting$$($JSCompiler_StaticMethods_startRemoting_$self$$.$b$, function($controlSessionId$$) {
    return $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($JSCompiler_StaticMethods_startRemoting_$self$$.$logger_$, $controlSessionId$$);
  });
  $JSCompiler_StaticMethods_startQueueingMessagesToReceiver$$($JSCompiler_StaticMethods_startRemoting_$self$$.$b$);
  return $JSCompiler_StaticMethods_conductFrom$$($JSCompiler_StaticMethods_startRemoting_$self$$.$g$, 2, function($controlSessionId$$) {
    return $goog$asserts$assert$$($JSCompiler_StaticMethods_startRemoting_$self$$.$o$)().then(function($infoLoggingIsOn$$) {
      $JSCompiler_StaticMethods_startRemoting_$self$$.$j$ = $infoLoggingIsOn$$;
      $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$subscribe$$($JSCompiler_StaticMethods_startRemoting_$self$$.$l$, "RPC", function($controlSessionId$$) {
        if ($controlSessionId$$.rpc) {
          var $infoLoggingIsOn$$ = $JSCompiler_StaticMethods_startRemoting_$self$$.$b$;
          $controlSessionId$$ = $controlSessionId$$.rpc;
          $infoLoggingIsOn$$.$f$ && (++$infoLoggingIsOn$$.$l$, $infoLoggingIsOn$$.$g$ += $controlSessionId$$.length, $infoLoggingIsOn$$.$f$($controlSessionId$$));
        }
      });
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($controlSessionId$$, 3);
    }).catch(function($infoLoggingIsOn$$) {
      return $JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$$($JSCompiler_StaticMethods_startRemoting_$self$$).then(function() {
        $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($controlSessionId$$);
        throw $infoLoggingIsOn$$;
      });
    });
  });
}, $JSCompiler_StaticMethods_startRemotingStreams_$$ = function($JSCompiler_StaticMethods_startRemotingStreams_$self$$, $controlSessionId$jscomp$1$$, $withAudio$jscomp$1$$, $withVideo$jscomp$1$$) {
  return $JSCompiler_StaticMethods_startRemotingStreams_$self$$.$a$ != $controlSessionId$jscomp$1$$ ? Promise.reject(Error("Cannot start streams for an unknown session (" + $controlSessionId$jscomp$1$$ + ") during existing session (" + $JSCompiler_StaticMethods_startRemotingStreams_$self$$.$a$ + ")")) : $JSCompiler_StaticMethods_conductFrom$$($JSCompiler_StaticMethods_startRemotingStreams_$self$$.$g$, 3, function($op$jscomp$6$$) {
    return $JSCompiler_StaticMethods_startRemotingStreams_$self$$.$A$.start($withAudio$jscomp$1$$ ? new $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ : null, $withVideo$jscomp$1$$ ? new $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ : null, $JSCompiler_StaticMethods_startRemotingStreams_$self$$).then(function($withAudio$jscomp$1$$) {
      var $withVideo$jscomp$1$$ = "STARTED_CAST_REMOTING_STREAMS:session=" + $controlSessionId$jscomp$1$$;
      $withAudio$jscomp$1$$.$audioStreamId$ && ($withVideo$jscomp$1$$ += ":audio_stream_id=" + $withAudio$jscomp$1$$.$audioStreamId$);
      $withAudio$jscomp$1$$.$videoStreamId$ && ($withVideo$jscomp$1$$ += ":video_stream_id=" + $withAudio$jscomp$1$$.$videoStreamId$);
      $JSCompiler_StaticMethods_startTwoWayMessaging$$($JSCompiler_StaticMethods_startRemotingStreams_$self$$.$b$, function($controlSessionId$jscomp$1$$) {
        return $JSCompiler_StaticMethods_startRemotingStreams_$self$$.$l$.sendMessage($controlSessionId$jscomp$1$$);
      }, function($controlSessionId$jscomp$1$$) {
        var $withAudio$jscomp$1$$ = $JSCompiler_StaticMethods_startRemotingStreams_$self$$.$h$;
        $withAudio$jscomp$1$$.$a$ && $withAudio$jscomp$1$$.$a$($controlSessionId$jscomp$1$$);
      });
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$6$$, 4);
      return $withVideo$jscomp$1$$;
    }).catch(function($controlSessionId$jscomp$1$$) {
      return $JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$$($JSCompiler_StaticMethods_startRemotingStreams_$self$$).then(function() {
        $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$6$$);
        throw $controlSessionId$jscomp$1$$;
      });
    });
  });
}, $JSCompiler_StaticMethods_stopRemoting_$$ = function($JSCompiler_StaticMethods_stopRemoting_$self$$, $controlSessionId$jscomp$2$$) {
  if ($JSCompiler_StaticMethods_stopRemoting_$self$$.$a$ != $controlSessionId$jscomp$2$$) {
    return Promise.reject(Error("Attempting to stop an unknown session (" + $controlSessionId$jscomp$2$$ + ") during existing session (" + $JSCompiler_StaticMethods_stopRemoting_$self$$.$a$ + ")."));
  }
  $JSCompiler_StaticMethods_stopRemoting_$self$$.$a$ = null;
  return new Promise(function($controlSessionId$jscomp$2$$, $reject$jscomp$48$$) {
    $JSCompiler_StaticMethods_conductFromAny$$($JSCompiler_StaticMethods_stopRemoting_$self$$.$g$, function($resolve$jscomp$54$$) {
      return $JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$$($JSCompiler_StaticMethods_stopRemoting_$self$$).then(function() {
        $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($resolve$jscomp$54$$, 5);
        $goog$asserts$assert$$($JSCompiler_StaticMethods_stopRemoting_$self$$.$j$)().then(function() {
          return $JSCompiler_StaticMethods_conductFrom$$($JSCompiler_StaticMethods_stopRemoting_$self$$.$g$, 5, function($JSCompiler_StaticMethods_stopRemoting_$self$$) {
            $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($JSCompiler_StaticMethods_stopRemoting_$self$$, 2);
            return Promise.resolve();
          });
        }).then($controlSessionId$jscomp$2$$, function($JSCompiler_StaticMethods_stopRemoting_$self$$) {
          return $reject$jscomp$48$$($JSCompiler_StaticMethods_stopRemoting_$self$$);
        });
        $JSCompiler_StaticMethods_stopRemoting_$self$$.$j$ = null;
      });
    }).catch(function($JSCompiler_StaticMethods_stopRemoting_$self$$) {
      return $reject$jscomp$48$$($JSCompiler_StaticMethods_stopRemoting_$self$$);
    });
  });
}, $JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$$ = function($JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$self$$) {
  return $JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$self$$.$A$.stop().then(function() {
    $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$$($JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$self$$.$l$, "RPC");
    $JSCompiler_StaticMethods_stopMessaging$$($JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$self$$.$b$);
    $JSCompiler_StaticMethods_stopReporting$$($JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$self$$.$b$);
  });
};
$module$exports$mr$mirror$cast$MediaRemoter$$.prototype.$w$ = function($message$jscomp$157$$) {
  this.$h$ ? ($JSCompiler_StaticMethods_mr_Logger_prototype$fine$$(this.$logger_$, function() {
    return "Sending control message to browser: " + $message$jscomp$157$$;
  }), $JSCompiler_StaticMethods_sendControlMessageToBrowser$$(this.$h$, $message$jscomp$157$$)) : $JSCompiler_StaticMethods_mr_Logger_prototype$fine$$(this.$logger_$, function() {
    return "Dropping control message to browser: " + $message$jscomp$157$$;
  });
};
var $JSCompiler_StaticMethods_sendFatalSessionMessageToBrowser_$$ = function($JSCompiler_StaticMethods_sendFatalSessionMessageToBrowser_$self$$, $controlSessionId$jscomp$3$$) {
  $JSCompiler_StaticMethods_sendFatalSessionMessageToBrowser_$self$$.$w$("FAILED_CAST_REMOTING:session=" + $controlSessionId$jscomp$3$$);
}, $module$exports$mr$mirror$cast$MediaRemoter$getCastProvider_$$ = function() {
  var $providerManager$jscomp$11$$ = $goog$asserts$assert$$($mr$Module$moduleById_$$.get("mr.ProviderManager") || null, "ProviderManager missing");
  return $goog$asserts$assert$$($JSCompiler_StaticMethods_getProviderByName$$($providerManager$jscomp$11$$, "cast"), "CastProvider missing");
}, $module$exports$mr$mirror$cast$MediaRemoter$RpcPipe_$$ = function() {
  this.$f$ = this.$b$ = this.$a$ = null;
  this.$w$ = this.$g$ = this.$l$ = this.$h$ = this.$o$ = 0;
  this.$j$ = null;
}, $JSCompiler_StaticMethods_startQueueingMessagesToReceiver$$ = function($JSCompiler_StaticMethods_startQueueingMessagesToReceiver$self$$) {
  $goog$asserts$assert$$(!$JSCompiler_StaticMethods_startQueueingMessagesToReceiver$self$$.$a$);
  $goog$asserts$assert$$(!$JSCompiler_StaticMethods_startQueueingMessagesToReceiver$self$$.$b$);
  $JSCompiler_StaticMethods_startQueueingMessagesToReceiver$self$$.$a$ = [];
  $JSCompiler_StaticMethods_resetStats_$$($JSCompiler_StaticMethods_startQueueingMessagesToReceiver$self$$, performance.now());
}, $JSCompiler_StaticMethods_startTwoWayMessaging$$ = function($JSCompiler_StaticMethods_startTwoWayMessaging$self$$, $messagesToSend_sendToReceiver$$, $sendToSource$$) {
  $goog$asserts$assert$$(!$JSCompiler_StaticMethods_startTwoWayMessaging$self$$.$b$);
  $goog$asserts$assert$$(!$JSCompiler_StaticMethods_startTwoWayMessaging$self$$.$f$);
  $JSCompiler_StaticMethods_startTwoWayMessaging$self$$.$b$ = $messagesToSend_sendToReceiver$$;
  $JSCompiler_StaticMethods_startTwoWayMessaging$self$$.$f$ = $sendToSource$$;
  $JSCompiler_StaticMethods_startTwoWayMessaging$self$$.$a$ ? ($messagesToSend_sendToReceiver$$ = $JSCompiler_StaticMethods_startTwoWayMessaging$self$$.$a$, $JSCompiler_StaticMethods_startTwoWayMessaging$self$$.$a$ = null, $messagesToSend_sendToReceiver$$.forEach(function($messagesToSend_sendToReceiver$$) {
    return $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$$($JSCompiler_StaticMethods_startTwoWayMessaging$self$$, $messagesToSend_sendToReceiver$$.data).then($messagesToSend_sendToReceiver$$.$sendResolved$, $messagesToSend_sendToReceiver$$.$sendRejected$);
  })) : $JSCompiler_StaticMethods_resetStats_$$($JSCompiler_StaticMethods_startTwoWayMessaging$self$$, performance.now());
}, $JSCompiler_StaticMethods_stopMessaging$$ = function($JSCompiler_StaticMethods_stopMessaging$self$$) {
  if ($JSCompiler_StaticMethods_stopMessaging$self$$.$a$) {
    var $error$jscomp$81$$ = Error("Stop before delivering pending message");
    $JSCompiler_StaticMethods_stopMessaging$self$$.$a$.forEach(function($JSCompiler_StaticMethods_stopMessaging$self$$) {
      return $JSCompiler_StaticMethods_stopMessaging$self$$.$sendRejected$($error$jscomp$81$$);
    });
    $JSCompiler_StaticMethods_stopMessaging$self$$.$a$ = null;
  }
  $JSCompiler_StaticMethods_stopMessaging$self$$.$b$ = null;
  $JSCompiler_StaticMethods_stopMessaging$self$$.$f$ = null;
}, $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$$ = function($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$self$$, $data$jscomp$78$$) {
  if ($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$self$$.$b$) {
    var $base64EncodedData$$ = btoa(String.fromCharCode.apply(null, $data$jscomp$78$$));
    ++$JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$self$$.$o$;
    $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$self$$.$h$ += $data$jscomp$78$$.length;
    return $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$self$$.$b$({type:"RPC", rpc:$base64EncodedData$$});
  }
  return $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$self$$.$a$ ? new Promise(function($base64EncodedData$$, $reject$jscomp$49$$) {
    $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$self$$.$a$.push({data:$data$jscomp$78$$, $sendResolved$:$base64EncodedData$$, $sendRejected$:$reject$jscomp$49$$});
  }) : Promise.reject(Error("RPC pipe not started"));
}, $JSCompiler_StaticMethods_startReporting$$ = function($JSCompiler_StaticMethods_startReporting$self$$, $reportCallback$$) {
  $JSCompiler_StaticMethods_stopReporting$$($JSCompiler_StaticMethods_startReporting$self$$);
  $JSCompiler_StaticMethods_startReporting$self$$.$j$ = setInterval(function() {
    if ($JSCompiler_StaticMethods_startReporting$self$$.$a$) {
      var $JSCompiler_inline_result$jscomp$210_now$jscomp$inline_1656$$ = $JSCompiler_StaticMethods_startReporting$self$$.$a$.length + " messages are waiting to send.";
    } else {
      $JSCompiler_inline_result$jscomp$210_now$jscomp$inline_1656$$ = performance.now();
      var $elapsedSeconds$jscomp$inline_1657_report$jscomp$inline_1658$$ = ($JSCompiler_inline_result$jscomp$210_now$jscomp$inline_1656$$ - $JSCompiler_StaticMethods_startReporting$self$$.$w$) / 1000.0, $elapsedSeconds$jscomp$inline_1657_report$jscomp$inline_1658$$ = "Over the past " + $elapsedSeconds$jscomp$inline_1657_report$jscomp$inline_1658$$.toFixed(1) + " seconds, sent " + ($JSCompiler_StaticMethods_startReporting$self$$.$o$ + " messages (" + Math.round($JSCompiler_StaticMethods_startReporting$self$$.$h$ / 
      $elapsedSeconds$jscomp$inline_1657_report$jscomp$inline_1658$$) + " bytes/sec) and ") + ("received " + $JSCompiler_StaticMethods_startReporting$self$$.$l$ + " messages (" + Math.round($JSCompiler_StaticMethods_startReporting$self$$.$g$ / $elapsedSeconds$jscomp$inline_1657_report$jscomp$inline_1658$$) + " ") + "bytes/sec).";
      $JSCompiler_StaticMethods_resetStats_$$($JSCompiler_StaticMethods_startReporting$self$$, $JSCompiler_inline_result$jscomp$210_now$jscomp$inline_1656$$);
      $JSCompiler_inline_result$jscomp$210_now$jscomp$inline_1656$$ = $elapsedSeconds$jscomp$inline_1657_report$jscomp$inline_1658$$;
    }
    $reportCallback$$($JSCompiler_inline_result$jscomp$210_now$jscomp$inline_1656$$);
  }, 3000);
}, $JSCompiler_StaticMethods_stopReporting$$ = function($JSCompiler_StaticMethods_stopReporting$self$$) {
  null != $JSCompiler_StaticMethods_stopReporting$self$$.$j$ && (clearInterval($JSCompiler_StaticMethods_stopReporting$self$$.$j$), $JSCompiler_StaticMethods_stopReporting$self$$.$j$ = null);
}, $JSCompiler_StaticMethods_resetStats_$$ = function($JSCompiler_StaticMethods_resetStats_$self$$, $from$jscomp$8$$) {
  $JSCompiler_StaticMethods_resetStats_$self$$.$o$ = 0;
  $JSCompiler_StaticMethods_resetStats_$self$$.$h$ = 0;
  $JSCompiler_StaticMethods_resetStats_$self$$.$l$ = 0;
  $JSCompiler_StaticMethods_resetStats_$self$$.$g$ = 0;
  $JSCompiler_StaticMethods_resetStats_$self$$.$w$ = $from$jscomp$8$$;
};
var $mr$MediaStreamUtils$getAudioTrack$$ = function($stream$jscomp$13$$) {
  return $stream$jscomp$13$$ && $stream$jscomp$13$$.getAudioTracks() && 0 < $stream$jscomp$13$$.getAudioTracks().length ? $stream$jscomp$13$$.getAudioTracks()[0] : null;
}, $mr$MediaStreamUtils$getVideoTrack$$ = function($stream$jscomp$14$$) {
  return $stream$jscomp$14$$ && $stream$jscomp$14$$.getVideoTracks() && 0 < $stream$jscomp$14$$.getVideoTracks().length ? $stream$jscomp$14$$.getVideoTracks()[0] : null;
};
var $module$exports$mr$mirror$cast$MediaStreamer$$ = function($mirrorInitData$jscomp$2$$, $mirrorSettings$jscomp$9$$, $seqNumGenerator$jscomp$2$$, $messageDispatcher$jscomp$2$$, $testHooks$jscomp$3$$) {
  this.$f$ = new $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$$($mirrorInitData$jscomp$2$$, $mirrorSettings$jscomp$9$$, $seqNumGenerator$jscomp$2$$, $messageDispatcher$jscomp$2$$, void 0 === $testHooks$jscomp$3$$ ? null : $testHooks$jscomp$3$$);
  this.$logger_$ = $mr$Logger$getInstance$$("mr.mirror.cast.MediaStreamer");
  this.$h$ = new $module$exports$mr$Sequencer$$;
  this.$g$ = this.$b$ = this.$a$ = this.$j$ = null;
};
$module$exports$mr$mirror$cast$MediaStreamer$$.prototype.start = function($mediaStream$jscomp$4$$, $client$jscomp$8$$) {
  var $$jscomp$this$jscomp$173$$ = this;
  return $JSCompiler_StaticMethods_conductFrom$$(this.$h$, 1, function($op$jscomp$9$$) {
    $$jscomp$this$jscomp$173$$.$j$ = $mediaStream$jscomp$4$$;
    $$jscomp$this$jscomp$173$$.$a$ = $mr$MediaStreamUtils$getAudioTrack$$($mediaStream$jscomp$4$$);
    $$jscomp$this$jscomp$173$$.$a$ && "ended" == $$jscomp$this$jscomp$173$$.$a$.readyState && ($$jscomp$this$jscomp$173$$.$a$ = null);
    $$jscomp$this$jscomp$173$$.$b$ = $mr$MediaStreamUtils$getVideoTrack$$($mediaStream$jscomp$4$$);
    $$jscomp$this$jscomp$173$$.$b$ && "ended" == $$jscomp$this$jscomp$173$$.$b$.readyState && ($$jscomp$this$jscomp$173$$.$b$ = null);
    if (!$$jscomp$this$jscomp$173$$.$a$ && !$$jscomp$this$jscomp$173$$.$b$) {
      return $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$9$$), Promise.reject(Error("No MediaStream tracks to stream."));
    }
    $$jscomp$this$jscomp$173$$.$g$ = $client$jscomp$8$$;
    return $$jscomp$this$jscomp$173$$.$f$.start($$jscomp$this$jscomp$173$$.$a$, $$jscomp$this$jscomp$173$$.$b$, $$jscomp$this$jscomp$173$$.$g$).then(function() {
      return $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$9$$, 2);
    });
  });
};
$module$exports$mr$mirror$cast$MediaStreamer$$.prototype.stop = function() {
  var $$jscomp$this$jscomp$174$$ = this;
  return $JSCompiler_StaticMethods_recover$$(this.$h$, function($op$jscomp$10$$) {
    return $$jscomp$this$jscomp$174$$.$f$.stop().then(function() {
      $$jscomp$this$jscomp$174$$.$a$ = null;
      $$jscomp$this$jscomp$174$$.$b$ = null;
      $$jscomp$this$jscomp$174$$.$j$ = null;
      $$jscomp$this$jscomp$174$$.$g$ = null;
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$10$$, 1);
    });
  });
};
var $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaStreamer_prototype$suspend$$ = function($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaStreamer_prototype$suspend$self$$) {
  return $JSCompiler_StaticMethods_conductFrom$$($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaStreamer_prototype$suspend$self$$.$h$, 2, function($op$jscomp$11$$) {
    $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaStreamer_prototype$suspend$self$$.$logger_$, "Suspending media streaming...");
    return $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaStreamer_prototype$suspend$self$$.$f$.stop().then(function() {
      $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaStreamer_prototype$suspend$self$$.$logger_$, "Suspended media streaming.");
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$11$$, 3);
    });
  });
};
$module$exports$mr$mirror$cast$MediaStreamer$$.prototype.resume = function() {
  var $$jscomp$this$jscomp$176$$ = this;
  return $JSCompiler_StaticMethods_conductFrom$$(this.$h$, 3, function($op$jscomp$12$$) {
    $$jscomp$this$jscomp$176$$.$a$ && "ended" == $$jscomp$this$jscomp$176$$.$a$.readyState && ($$jscomp$this$jscomp$176$$.$a$ = null);
    $$jscomp$this$jscomp$176$$.$b$ && "ended" == $$jscomp$this$jscomp$176$$.$b$.readyState && ($$jscomp$this$jscomp$176$$.$b$ = null);
    if (!$$jscomp$this$jscomp$176$$.$a$ && !$$jscomp$this$jscomp$176$$.$b$) {
      return Promise.reject(Error("Cannot resume: All tracks have ended."));
    }
    $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($$jscomp$this$jscomp$176$$.$logger_$, "Resuming media streaming...");
    return $$jscomp$this$jscomp$176$$.$f$.start($$jscomp$this$jscomp$176$$.$a$, $$jscomp$this$jscomp$176$$.$b$, $goog$asserts$assert$$($$jscomp$this$jscomp$176$$.$g$)).then(function() {
      $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($$jscomp$this$jscomp$176$$.$logger_$, "Resumed media streaming.");
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$12$$, 2);
    });
  });
};
var $module$exports$mr$mirror$cast$WifiStatusMonitor$$ = function($sessionId$jscomp$38$$, $seqNumGenerator$jscomp$3$$, $messageDispatcher$jscomp$3$$) {
  this.$h$ = $sessionId$jscomp$38$$;
  this.$g$ = $seqNumGenerator$jscomp$3$$;
  this.$f$ = $messageDispatcher$jscomp$3$$;
  this.$logger_$ = $mr$Logger$getInstance$$("mr.mirror.cast.WifiStatusMonitor");
  this.$a$ = null;
  this.$b$ = [];
};
$module$exports$mr$mirror$cast$WifiStatusMonitor$$.prototype.start = function() {
  var $$jscomp$this$jscomp$177$$ = this;
  null == this.$a$ && ($JSCompiler_StaticMethods_mr_Logger_prototype$fine$$(this.$logger_$, "Starting Wifi Status Monitoring."), this.$b$ = [], $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$subscribe$$(this.$f$, "STATUS_RESPONSE", function($response$jscomp$30$$) {
    return $JSCompiler_StaticMethods_onReceiverResponse_$$($$jscomp$this$jscomp$177$$, $response$jscomp$30$$);
  }), this.$a$ = setInterval(function() {
    return $JSCompiler_StaticMethods_sendStatusQuery_$$($$jscomp$this$jscomp$177$$);
  }, 12E4), $JSCompiler_StaticMethods_sendStatusQuery_$$(this));
};
$module$exports$mr$mirror$cast$WifiStatusMonitor$$.prototype.stop = function() {
  null != this.$a$ && ($JSCompiler_StaticMethods_mr_Logger_prototype$fine$$(this.$logger_$, "Stopping Wifi Status Monitoring."), clearInterval(this.$a$), this.$a$ = null, $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$$(this.$f$, "STATUS_RESPONSE"));
};
var $JSCompiler_StaticMethods_onReceiverResponse_$$ = function($JSCompiler_StaticMethods_onReceiverResponse_$self$$, $response$jscomp$31$$) {
  if (null != $JSCompiler_StaticMethods_onReceiverResponse_$self$$.$a$) {
    if ($response$jscomp$31$$.status) {
      var $dataPoint$$ = {};
      null != $response$jscomp$31$$.status.$a$ && ($dataPoint$$.wifiSnr = $response$jscomp$31$$.status.$a$);
      null != $response$jscomp$31$$.status.$b$ && ($dataPoint$$.wifiSpeed = $response$jscomp$31$$.status.$b$[3]);
      0 == Object.keys($dataPoint$$).length ? $JSCompiler_StaticMethods_mr_Logger_prototype$warning$$($JSCompiler_StaticMethods_onReceiverResponse_$self$$.$logger_$, function() {
        return "No status fields populated in response: " + JSON.stringify($response$jscomp$31$$);
      }) : ($dataPoint$$.timestamp = Date.now(), 30 == $JSCompiler_StaticMethods_onReceiverResponse_$self$$.$b$.length && $JSCompiler_StaticMethods_onReceiverResponse_$self$$.$b$.shift(), $JSCompiler_StaticMethods_onReceiverResponse_$self$$.$b$.push($dataPoint$$), $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($JSCompiler_StaticMethods_onReceiverResponse_$self$$.$logger_$, function() {
        return "Current Wifi status: " + JSON.stringify($dataPoint$$);
      }));
    } else {
      $JSCompiler_StaticMethods_mr_Logger_prototype$warning$$($JSCompiler_StaticMethods_onReceiverResponse_$self$$.$logger_$, function() {
        return "Ignoring response without status: " + JSON.stringify($response$jscomp$31$$);
      });
    }
  }
}, $JSCompiler_StaticMethods_sendStatusQuery_$$ = function($JSCompiler_StaticMethods_sendStatusQuery_$self$$) {
  $JSCompiler_StaticMethods_sendStatusQuery_$self$$.$f$.sendMessage({type:"GET_STATUS", sessionId:$JSCompiler_StaticMethods_sendStatusQuery_$self$$.$h$, seqNum:$JSCompiler_StaticMethods_getNext$$($JSCompiler_StaticMethods_sendStatusQuery_$self$$.$g$), get_status:["wifiSnr", "wifiSpeed"]});
};
var $module$exports$mr$mirror$cast$SessionMonitor$$ = function($mirrorSettings$jscomp$10$$, $mirrorInitData$jscomp$3$$, $maxRetentionBytes$$, $wifiMonitor$$) {
  this.$F$ = $mirrorInitData$jscomp$3$$.$sinkIpAddress$;
  this.$l$ = {extVersion:chrome.runtime.getManifest().version, extChannel:"internal", mirrorSettings:$JSCompiler_StaticMethods_toJsonString$$($mirrorSettings$jscomp$10$$), sender:navigator.userAgent || "UNKNOWN", receiverProductName:$mirrorInitData$jscomp$3$$.$sinkModelName$};
  this.$D$ = $maxRetentionBytes$$;
  this.$B$ = $wifiMonitor$$;
  this.$g$ = this.$b$ = this.$o$ = this.$j$ = this.$h$ = this.$w$ = this.$f$ = null;
  this.$a$ = [];
};
$module$exports$mr$mirror$cast$SessionMonitor$$.prototype.$didStartStreaming$ = function($streamingMonitor$jscomp$2$$) {
  null != this.$b$ && clearInterval(this.$b$);
  this.$f$ = $streamingMonitor$jscomp$2$$;
  this.$w$ = Date.now();
  this.$b$ = setInterval(this.$A$.bind(this, $streamingMonitor$jscomp$2$$), 9E5);
};
$module$exports$mr$mirror$cast$SessionMonitor$$.prototype.$willStopStreaming$ = function() {
  null != this.$b$ && (clearInterval(this.$b$), this.$b$ = null);
  if (null != this.$f$) {
    var $finalSnapshotPromise$$ = this.$A$(this.$f$);
    this.$f$ = null;
    return $finalSnapshotPromise$$;
  }
  return Promise.resolve();
};
$module$exports$mr$mirror$cast$SessionMonitor$$.prototype.$onStreamingError$ = function($message$jscomp$160$$, $error$jscomp$82$$) {
  null == this.$h$ && (this.$h$ = Date.now(), "function" === typeof $message$jscomp$160$$ ? this.$j$ = $message$jscomp$160$$() : "string" === typeof $message$jscomp$160$$ && (this.$j$ = $message$jscomp$160$$), $error$jscomp$82$$ && "string" === typeof $error$jscomp$82$$.stack && (this.$o$ = $error$jscomp$82$$.stack));
};
var $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$$ = function($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$, $bundleSizes$$) {
  return (null == $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$.$f$ ? Promise.resolve() : $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$.$A$($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$.$f$)).then(function() {
    var $bundles$$ = $bundleSizes$$.map(function($bundleSizes$$) {
      $bundleSizes$$ = $JSCompiler_StaticMethods_makeSliceOfSnapshots_$$($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$, $bundleSizes$$);
      var $bundles$$ = $bundleSizes$$.map(function($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$) {
        return $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$.events;
      }).filter(function($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$) {
        return null != $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$;
      }), $maxBytes_snapshotSlice$$ = ["["];
      $bundleSizes$$.map(function($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$) {
        return $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$.$stats$;
      }).forEach(function($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$, $bundleSizes$$) {
        0 < $bundleSizes$$ && $maxBytes_snapshotSlice$$.push(",");
        $maxBytes_snapshotSlice$$.push($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$);
      });
      $maxBytes_snapshotSlice$$.push("]");
      return {events:new Blob($bundles$$, {type:"application/gzip"}), $stats$:new Blob($maxBytes_snapshotSlice$$, {type:"application/json"})};
    });
    $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$.$a$ = [];
    return $bundles$$;
  });
};
$module$exports$mr$mirror$cast$SessionMonitor$$.prototype.$A$ = function($streamingMonitor$jscomp$3$$) {
  var $$jscomp$this$jscomp$179$$ = this;
  if (null != this.$g$) {
    return this.$g$;
  }
  var $tagsPromise$$ = $module$contents$mr$DongleUtils_DongleUtils$getSetupInfo$$(this.$F$).then(function($tagsPromise$$) {
    $tagsPromise$$ = {receiverVersion:$tagsPromise$$.$a$, receiverConnected:$tagsPromise$$.$g$, receiverOnEthernet:$tagsPromise$$.$f$, receiverHasUpdatePending:$tagsPromise$$.$b$, receiverUptimeSeconds:$tagsPromise$$.$h$};
    Object.assign($tagsPromise$$, $$jscomp$this$jscomp$179$$.$l$);
    var $info$jscomp$14_tags$jscomp$2$$ = Date.now();
    Object.assign($tagsPromise$$, {startTime:$$jscomp$this$jscomp$179$$.$w$, endTime:$info$jscomp$14_tags$jscomp$2$$, activity:$JSCompiler_StaticMethods_getActivityDescription$$($streamingMonitor$jscomp$3$$), receiverWifiStatus:Array.from($$jscomp$this$jscomp$179$$.$B$.$b$)});
    $$jscomp$this$jscomp$179$$.$w$ = $info$jscomp$14_tags$jscomp$2$$;
    null != $$jscomp$this$jscomp$179$$.$h$ && (Object.assign($tagsPromise$$, {streamingErrorTime:$$jscomp$this$jscomp$179$$.$h$, streamingErrorMessage:$$jscomp$this$jscomp$179$$.$j$, streamingErrorCause:$$jscomp$this$jscomp$179$$.$o$}), $$jscomp$this$jscomp$179$$.$h$ = null, $$jscomp$this$jscomp$179$$.$j$ = null, $$jscomp$this$jscomp$179$$.$o$ = null);
    return $tagsPromise$$;
  });
  return (this.$g$ = Promise.all([$tagsPromise$$.then(function($$jscomp$this$jscomp$179$$) {
    return $JSCompiler_StaticMethods_takeEvents$$($streamingMonitor$jscomp$3$$, $$jscomp$this$jscomp$179$$);
  }), $tagsPromise$$, $JSCompiler_StaticMethods_getStatsAndReset$$($streamingMonitor$jscomp$3$$)]).then(function($streamingMonitor$jscomp$3$$) {
    var $tagsPromise$$ = $$jscomp$makeIterator$$($streamingMonitor$jscomp$3$$);
    $streamingMonitor$jscomp$3$$ = $tagsPromise$$.next().value;
    var $$jscomp$destructuring$var18_events$jscomp$4$$ = $tagsPromise$$.next().value, $tagsPromise$$ = $tagsPromise$$.next().value;
    $$jscomp$this$jscomp$179$$.$a$.push({events:$streamingMonitor$jscomp$3$$, $stats$:new Blob([JSON.stringify(Object.assign({tags:$$jscomp$destructuring$var18_events$jscomp$4$$}, $tagsPromise$$))], {type:"application/json"})});
    $$jscomp$this$jscomp$179$$.$a$ = $JSCompiler_StaticMethods_makeSliceOfSnapshots_$$($$jscomp$this$jscomp$179$$, $$jscomp$this$jscomp$179$$.$D$);
    $$jscomp$this$jscomp$179$$.$g$ = null;
  })) || Promise.resolve();
};
var $JSCompiler_StaticMethods_makeSliceOfSnapshots_$$ = function($JSCompiler_StaticMethods_makeSliceOfSnapshots_$self$$, $maxBytes$jscomp$1$$) {
  $maxBytes$jscomp$1$$ -= 2;
  for (var $slice$$ = [], $i$jscomp$277$$ = $JSCompiler_StaticMethods_makeSliceOfSnapshots_$self$$.$a$.length - 1; 0 <= $i$jscomp$277$$; --$i$jscomp$277$$) {
    $maxBytes$jscomp$1$$ -= $JSCompiler_StaticMethods_makeSliceOfSnapshots_$self$$.$a$[$i$jscomp$277$$].$stats$.size + 1;
    if (0 > $maxBytes$jscomp$1$$) {
      break;
    }
    $slice$$.push({events:null, $stats$:$JSCompiler_StaticMethods_makeSliceOfSnapshots_$self$$.$a$[$i$jscomp$277$$].$stats$});
    if (null != $JSCompiler_StaticMethods_makeSliceOfSnapshots_$self$$.$a$[$i$jscomp$277$$].events) {
      var $blobSize$$ = $JSCompiler_StaticMethods_makeSliceOfSnapshots_$self$$.$a$[$i$jscomp$277$$].events.size;
      $maxBytes$jscomp$1$$ >= $blobSize$$ && ($slice$$[$slice$$.length - 1].events = $JSCompiler_StaticMethods_makeSliceOfSnapshots_$self$$.$a$[$i$jscomp$277$$].events, $maxBytes$jscomp$1$$ -= $blobSize$$);
    }
  }
  return $slice$$.reverse();
};
var $module$contents$mr$mirror$cast$Session_Session$$ = function($mirrorSettings$jscomp$11$$, $route$jscomp$84$$, $maxLogsRetentionBytes$$, $testHooks$jscomp$4$$) {
  $testHooks$jscomp$4$$ = void 0 === $testHooks$jscomp$4$$ ? null : $testHooks$jscomp$4$$;
  $mr$mirror$Session$$.call(this, $route$jscomp$84$$);
  var $mirrorInitData$jscomp$4$$ = $goog$asserts$assert$$($route$jscomp$84$$.$mirrorInitData$);
  this.$w$ = $mirrorInitData$jscomp$4$$.sessionId;
  this.$H$ = $mirrorInitData$jscomp$4$$.$sinkIpAddress$;
  this.$D$ = $mirrorSettings$jscomp$11$$;
  this.$I$ = $testHooks$jscomp$4$$;
  this.$logger_$ = $mr$Logger$getInstance$$("mr.mirror.cast.Session");
  this.$o$ = new $module$exports$mr$Sequencer$$;
  this.$l$ = new $mr$IdGenerator$$("mirror.cast.SeqNumGenerator");
  this.$j$ = new $module$exports$mr$mirror$cast$MessageDispatcher$$($route$jscomp$84$$.id);
  this.$h$ = new $module$exports$mr$mirror$cast$MediaStreamer$$($mirrorInitData$jscomp$4$$, this.$D$, this.$l$, this.$j$, this.$I$);
  this.$f$ = null;
  this.$a$ = new $module$exports$mr$mirror$cast$SessionMonitor$$($mirrorSettings$jscomp$11$$, $mirrorInitData$jscomp$4$$, $maxLogsRetentionBytes$$, new $module$exports$mr$mirror$cast$WifiStatusMonitor$$(this.$w$, this.$l$, this.$j$));
  this.$b$ = !1;
  this.$A$ = null;
};
$$jscomp$inherits$$($module$contents$mr$mirror$cast$Session_Session$$, $mr$mirror$Session$$);
$JSCompiler_prototypeAlias$$ = $module$contents$mr$mirror$cast$Session_Session$$.prototype;
$JSCompiler_prototypeAlias$$.start = function($mediaStream$jscomp$5$$) {
  var $$jscomp$this$jscomp$180$$ = this;
  return $JSCompiler_StaticMethods_conductFrom$$(this.$o$, 1, function($op$jscomp$13$$) {
    var $sessionStartTiming$$ = new $mr$Timing$$("MediaRouter.CastStreaming.Session.Launch");
    return $JSCompiler_StaticMethods_maybeEnableTdls_$$($$jscomp$this$jscomp$180$$).then(function($op$jscomp$13$$) {
      $$jscomp$this$jscomp$180$$.$b$ = $op$jscomp$13$$;
      return $$jscomp$this$jscomp$180$$.$h$.start($mediaStream$jscomp$5$$, $$jscomp$this$jscomp$180$$);
    }).then(function() {
      if ($$jscomp$this$jscomp$180$$.$h$.$f$.$B$) {
        var $mediaStream$jscomp$5$$ = $$jscomp$this$jscomp$180$$.$a$;
        $mediaStream$jscomp$5$$.$l$.tdlsIsOn = $$jscomp$this$jscomp$180$$.$b$;
        $mediaStream$jscomp$5$$.$B$.start();
        $JSCompiler_StaticMethods_maybeActivateMediaRemotingInTheBackground_$$($$jscomp$this$jscomp$180$$);
      } else {
        $$jscomp$this$jscomp$180$$.$a$.$l$.tdlsIsOn = $$jscomp$this$jscomp$180$$.$b$;
      }
      $sessionStartTiming$$.$a$();
      $$jscomp$this$jscomp$180$$.$A$ = new $mr$LongTiming$$("MediaRouter.CastStreaming.Session.Length");
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$13$$, 2);
      return $$jscomp$this$jscomp$180$$;
    });
  });
};
$JSCompiler_prototypeAlias$$.stop = function() {
  var $$jscomp$this$jscomp$181$$ = this;
  return $JSCompiler_StaticMethods_recover$$(this.$o$, function($op$jscomp$14$$) {
    $$jscomp$this$jscomp$181$$.$A$ && ($$jscomp$this$jscomp$181$$.$A$.$a$(), $$jscomp$this$jscomp$181$$.$A$ = null);
    $$jscomp$this$jscomp$181$$.$a$.$B$.stop();
    return $$jscomp$this$jscomp$181$$.$h$.stop().then(function() {
      return $$jscomp$this$jscomp$181$$.$f$ ? $$jscomp$this$jscomp$181$$.$f$.stop() : Promise.resolve();
    }).then(function() {
      $$jscomp$this$jscomp$181$$.$f$ = null;
      return $$jscomp$this$jscomp$181$$.$b$ ? $JSCompiler_StaticMethods_disableTdls_$$($$jscomp$this$jscomp$181$$) : Promise.resolve();
    }).then(function() {
      $$jscomp$this$jscomp$181$$.$b$ = !1;
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$14$$, 4);
    });
  });
};
$JSCompiler_prototypeAlias$$.$sendMetadataToSinkInternal$ = function() {
  var $message$jscomp$161$$ = {sessionId:this.$w$, seqNum:$JSCompiler_StaticMethods_getNext$$(this.$l$), type:"PRESENTATION", icons:[]};
  this.$F$ && ($message$jscomp$161$$.title = this.$F$);
  this.iconUrl && !this.$B$ && $message$jscomp$161$$.icons.push({url:this.iconUrl});
  $JSCompiler_StaticMethods_mr_Logger_prototype$info$$(this.$logger_$, "Sending session metadata update to receiver: " + this.$w$);
  this.$j$.sendMessage($message$jscomp$161$$);
};
$JSCompiler_prototypeAlias$$.$didStartStreaming$ = function($streamingMonitor$jscomp$4$$) {
  this.$a$.$didStartStreaming$($streamingMonitor$jscomp$4$$);
};
$JSCompiler_prototypeAlias$$.$willStopStreaming$ = function() {
  return this.$a$.$willStopStreaming$();
};
$JSCompiler_prototypeAlias$$.$onStreamingError$ = function($message$jscomp$162$$, $error$jscomp$83$$) {
  this.$a$.$onStreamingError$($message$jscomp$162$$, $error$jscomp$83$$);
  this.$logger_$.error($message$jscomp$162$$, $error$jscomp$83$$);
  this.stop();
};
var $JSCompiler_StaticMethods_module$contents$mr$mirror$cast$Session_Session_prototype$assembleBundlesAndClear$$ = function($JSCompiler_StaticMethods_module$contents$mr$mirror$cast$Session_Session_prototype$assembleBundlesAndClear$self$$, $bundleSizes$jscomp$1$$) {
  return $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$$($JSCompiler_StaticMethods_module$contents$mr$mirror$cast$Session_Session_prototype$assembleBundlesAndClear$self$$.$a$, $bundleSizes$jscomp$1$$);
}, $JSCompiler_StaticMethods_maybeEnableTdls_$$ = function($JSCompiler_StaticMethods_maybeEnableTdls_$self$$) {
  return $JSCompiler_StaticMethods_maybeEnableTdls_$self$$.$D$.useTdls ? $mr$NetworkUtils$setTDLSState_$$($JSCompiler_StaticMethods_maybeEnableTdls_$self$$.$H$, !0).then(function($status$jscomp$10$$) {
    if ("Connected" == $status$jscomp$10$$) {
      return $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($JSCompiler_StaticMethods_maybeEnableTdls_$self$$.$logger_$, "Successfully enabled TDLS."), !0;
    }
    $JSCompiler_StaticMethods_mr_Logger_prototype$warning$$($JSCompiler_StaticMethods_maybeEnableTdls_$self$$.$logger_$, "Did not enable TDLS: result=" + $status$jscomp$10$$);
    return !1;
  }).catch(function($error$jscomp$84$$) {
    $JSCompiler_StaticMethods_mr_Logger_prototype$warning$$($JSCompiler_StaticMethods_maybeEnableTdls_$self$$.$logger_$, "Error while calling enableTDLS()", $error$jscomp$84$$);
    return !1;
  }) : Promise.resolve(!1);
}, $JSCompiler_StaticMethods_disableTdls_$$ = function($JSCompiler_StaticMethods_disableTdls_$self$$) {
  return $mr$NetworkUtils$setTDLSState_$$($JSCompiler_StaticMethods_disableTdls_$self$$.$H$, !1).catch(function($error$jscomp$85$$) {
    return $JSCompiler_StaticMethods_disableTdls_$self$$.$logger_$.error("Error while turning TDLS back off", $error$jscomp$85$$);
  });
}, $JSCompiler_StaticMethods_maybeActivateMediaRemotingInTheBackground_$$ = function($JSCompiler_StaticMethods_maybeActivateMediaRemotingInTheBackground_$self$$) {
  $JSCompiler_StaticMethods_queryForCapabilities_$$($JSCompiler_StaticMethods_maybeActivateMediaRemotingInTheBackground_$self$$).then(function($capabilities$jscomp$11$$) {
    ($capabilities$jscomp$11$$.$a$ || []).includes("video") ? $JSCompiler_StaticMethods_spawnMediaRemoter_$$($JSCompiler_StaticMethods_maybeActivateMediaRemotingInTheBackground_$self$$) : $JSCompiler_StaticMethods_mr_Logger_prototype$warning$$($JSCompiler_StaticMethods_maybeActivateMediaRemotingInTheBackground_$self$$.$logger_$, function() {
      return "Receiver incapable of Media Remoting: " + JSON.stringify($capabilities$jscomp$11$$);
    });
  }).catch(function($error$jscomp$86$$) {
    $JSCompiler_StaticMethods_mr_Logger_prototype$warning$$($JSCompiler_StaticMethods_maybeActivateMediaRemotingInTheBackground_$self$$.$logger_$, "None/Invalid capabilites response. Media Remoting disabled.", $error$jscomp$86$$);
  });
}, $JSCompiler_StaticMethods_queryForCapabilities_$$ = function($JSCompiler_StaticMethods_queryForCapabilities_$self$$) {
  return new Promise(function($resolve$jscomp$56$$, $reject$jscomp$50$$) {
    var $queryMessage$$ = {type:"GET_CAPABILITIES", sessionId:$JSCompiler_StaticMethods_queryForCapabilities_$self$$.$w$, seqNum:$JSCompiler_StaticMethods_getNext$$($JSCompiler_StaticMethods_queryForCapabilities_$self$$.$l$)};
    $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($JSCompiler_StaticMethods_queryForCapabilities_$self$$.$logger_$, function() {
      return "Sending GET_CAPABILITIES message: " + JSON.stringify($queryMessage$$);
    });
    $JSCompiler_StaticMethods_requestReply$$($JSCompiler_StaticMethods_queryForCapabilities_$self$$.$j$, $queryMessage$$, "CAPABILITIES_RESPONSE", 30000, function($response$jscomp$32$$, $error$jscomp$87$$) {
      if (null == $response$jscomp$32$$) {
        return $reject$jscomp$50$$($error$jscomp$87$$), !0;
      }
      if ("ok" != $response$jscomp$32$$.result || !$response$jscomp$32$$.capabilities) {
        return $reject$jscomp$50$$(Error("Bad response: " + JSON.stringify($response$jscomp$32$$))), !0;
      }
      if ($response$jscomp$32$$.$b$ != $queryMessage$$.seqNum) {
        return $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($JSCompiler_StaticMethods_queryForCapabilities_$self$$.$logger_$, function() {
          return "Ignoring CAPABILITIES_RESPONSE with different seqNum: " + JSON.stringify($response$jscomp$32$$);
        }), !1;
      }
      $JSCompiler_StaticMethods_mr_Logger_prototype$fine$$($JSCompiler_StaticMethods_queryForCapabilities_$self$$.$logger_$, function() {
        return "Received CAPABILITIES_RESPONSE: " + JSON.stringify($response$jscomp$32$$);
      });
      $resolve$jscomp$56$$($response$jscomp$32$$.capabilities);
      return !0;
    });
  });
}, $JSCompiler_StaticMethods_spawnMediaRemoter_$$ = function($JSCompiler_StaticMethods_spawnMediaRemoter_$self$$) {
  $JSCompiler_StaticMethods_conductFrom$$($JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$o$, 2, function($op$jscomp$15$$) {
    $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$f$ = new $module$exports$mr$mirror$cast$MediaRemoter$$($JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$g$, 0, $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$D$, $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$l$, $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$j$, $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$I$);
    return $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$f$.start($JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$J$.bind($JSCompiler_StaticMethods_spawnMediaRemoter_$self$$), $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$).catch(function($op$jscomp$15$$) {
      $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$logger_$.error("Media Remoting start failed: " + $op$jscomp$15$$.message, $op$jscomp$15$$);
    }).then(function() {
      return $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$15$$);
    });
  });
};
$module$contents$mr$mirror$cast$Session_Session$$.prototype.$J$ = function() {
  var $$jscomp$this$jscomp$187$$ = this;
  return $JSCompiler_StaticMethods_conductFrom$$(this.$o$, 2, function($op$jscomp$16$$) {
    return new Promise(function($resolve$jscomp$57$$, $reject$jscomp$51$$) {
      $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaStreamer_prototype$suspend$$($$jscomp$this$jscomp$187$$.$h$).then(function() {
        $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$16$$, 3);
        $resolve$jscomp$57$$($$jscomp$this$jscomp$187$$.$K$.bind($$jscomp$this$jscomp$187$$));
      }).catch(function($op$jscomp$16$$) {
        $$jscomp$this$jscomp$187$$.$onStreamingError$("Failed to suspend MediaStreamer before starting remoting", $op$jscomp$16$$);
        $reject$jscomp$51$$($op$jscomp$16$$);
      });
    });
  });
};
$module$contents$mr$mirror$cast$Session_Session$$.prototype.$K$ = function() {
  var $$jscomp$this$jscomp$188$$ = this;
  return $JSCompiler_StaticMethods_conductFrom$$(this.$o$, 3, function($op$jscomp$17$$) {
    return new Promise(function($resolve$jscomp$58$$, $reject$jscomp$52$$) {
      $$jscomp$this$jscomp$188$$.$h$.resume().then(function() {
        $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$17$$, 2);
        $resolve$jscomp$58$$();
      }).catch(function($op$jscomp$17$$) {
        $$jscomp$this$jscomp$188$$.$onStreamingError$("Failed resume MediaStreamer after ending remoting mode", $op$jscomp$17$$);
        $reject$jscomp$52$$($op$jscomp$17$$);
      });
    });
  });
};
var $mr$mirror$cast$Service$$ = function() {
  $mr$mirror$Service$$.call(this, "cast_streaming");
  this.$f$ = null;
};
$$jscomp$inherits$$($mr$mirror$cast$Service$$, $mr$mirror$Service$$);
$JSCompiler_prototypeAlias$$ = $mr$mirror$cast$Service$$.prototype;
$JSCompiler_prototypeAlias$$.getName = function() {
  return "cast_streaming";
};
$JSCompiler_prototypeAlias$$.$createMirrorSession$ = function($mirrorSettings$jscomp$12$$, $route$jscomp$85$$) {
  return new $module$contents$mr$mirror$cast$Session_Session$$($mirrorSettings$jscomp$12$$, $route$jscomp$85$$, Math.max(20969472, 9351424), this.$f$);
};
$JSCompiler_prototypeAlias$$.$recordTabMirrorStartSuccess$ = function() {
  $mr$CastStreamingAnalytics$recordMirrorStartSuccess$$(0);
};
$JSCompiler_prototypeAlias$$.$recordDesktopMirrorStartSuccess$ = function() {
  $mr$CastStreamingAnalytics$recordMirrorStartSuccess$$(1);
};
$JSCompiler_prototypeAlias$$.$recordOffscreenTabMirrorStartSuccess$ = function() {
  $mr$CastStreamingAnalytics$recordMirrorStartSuccess$$(2);
};
$JSCompiler_prototypeAlias$$.$recordMirrorSessionEnded$ = function() {
  $mr$Analytics$recordEvent$$("MediaRouter.CastStreaming.Session.End");
};
$JSCompiler_prototypeAlias$$.$recordMirrorStartFailure$ = function($reason$jscomp$31$$) {
  $mr$Analytics$recordEnum$$("MediaRouter.CastStreaming.Start.Failure", $reason$jscomp$31$$, $mr$MirrorAnalytics$CapturingFailure$$);
};
$JSCompiler_prototypeAlias$$.$recordStreamEnded$ = function() {
  $mr$Analytics$recordEvent$$("MediaRouter.CastStreaming.Stream.End");
};
$JSCompiler_prototypeAlias$$.$beforeCleanUpSession$ = function($session$jscomp$32$$) {
  var $$jscomp$this$jscomp$189$$ = this;
  return (new Promise(function($session$jscomp$32$$) {
    return chrome.metricsPrivate.getIsCrashReportingEnabled($session$jscomp$32$$);
  })).then(function($crashReportingIsEnabled$$) {
    var $shouldAutoUploadEvents$$ = $crashReportingIsEnabled$$ && $JSCompiler_StaticMethods_shouldAutoUploadLog$$(), $bundleSizes$jscomp$2$$ = [9351424];
    $shouldAutoUploadEvents$$ && $bundleSizes$jscomp$2$$.push(20969472);
    return $JSCompiler_StaticMethods_module$contents$mr$mirror$cast$Session_Session_prototype$assembleBundlesAndClear$$($session$jscomp$32$$, $bundleSizes$jscomp$2$$).then(function($session$jscomp$32$$) {
      var $bundleSizes$jscomp$2$$ = $session$jscomp$32$$[$session$jscomp$32$$.length - 1];
      $session$jscomp$32$$ = $mr$PersistentDataManager$writeBlob$$($session$jscomp$32$$[0].events).catch(function($session$jscomp$32$$) {
        $$jscomp$this$jscomp$189$$.$logger$.error("Failed to persist events Blob.", $session$jscomp$32$$);
      });
      $session$jscomp$32$$ = Promise.all([$session$jscomp$32$$, new Promise(function($session$jscomp$32$$) {
        var $crashReportingIsEnabled$$ = new FileReader;
        $crashReportingIsEnabled$$.onloadend = function() {
          try {
            window.localStorage["e2eTestService.castStreamingMirrorStats"] = $crashReportingIsEnabled$$.result;
          } catch ($error$jscomp$92$$) {
            $JSCompiler_StaticMethods_mr_Logger_prototype$warning$$($$jscomp$this$jscomp$189$$.$logger$, "Failed to persist stats for E2E Test Service.", $error$jscomp$92$$);
          }
          $session$jscomp$32$$();
        };
        $crashReportingIsEnabled$$.readAsText($bundleSizes$jscomp$2$$.$stats$);
      })]);
      $shouldAutoUploadEvents$$ && 0 < $bundleSizes$jscomp$2$$.events.size ? $mr$mirror$cast$LogUploader$uploadLog$$($bundleSizes$jscomp$2$$.events, void 0, $$jscomp$this$jscomp$189$$.$onAutoUploadLogComplete_$.bind($$jscomp$this$jscomp$189$$)) : $crashReportingIsEnabled$$ && $mr$mirror$cast$LogUploader$uploadFile_$$("stats.json", $bundleSizes$jscomp$2$$.$stats$, void 0, void 0);
      return $session$jscomp$32$$;
    });
  });
};
$JSCompiler_prototypeAlias$$.$onAutoUploadLogComplete_$ = function($reportId$jscomp$4$$) {
  $reportId$jscomp$4$$ && ($mr$mirror$cast$LogUtils$getInstance$$().$a$ = Date.now(), window.localStorage["e2eTestService.castStreamingMirrorLogId"] = $reportId$jscomp$4$$);
};
$JSCompiler_prototypeAlias$$.$mr_mirror_Service_prototype$requestLogUpload$ = function($feedbackId$jscomp$2$$) {
  $JSCompiler_StaticMethods_mr_Logger_prototype$info$$(this.$logger$, "Received message to upload logs for " + $feedbackId$jscomp$2$$);
  return this.$a$ ? $JSCompiler_StaticMethods_module$contents$mr$mirror$cast$Session_Session_prototype$assembleBundlesAndClear$$(this.$a$, [20969472]).then(function($$jscomp$destructuring$var20_bundle$jscomp$2$$) {
    $$jscomp$destructuring$var20_bundle$jscomp$2$$ = $$jscomp$makeIterator$$($$jscomp$destructuring$var20_bundle$jscomp$2$$).next().value;
    return 0 == $$jscomp$destructuring$var20_bundle$jscomp$2$$.events.size ? "" : $mr$mirror$cast$LogUploader$uploadLog$$($$jscomp$destructuring$var20_bundle$jscomp$2$$.events, $feedbackId$jscomp$2$$);
  }) : Promise.resolve($JSCompiler_StaticMethods_maybeUploadSavedLogs_$$(this, $feedbackId$jscomp$2$$));
};
var $JSCompiler_StaticMethods_maybeUploadSavedLogs_$$ = function($JSCompiler_StaticMethods_maybeUploadSavedLogs_$self$$, $feedbackId$jscomp$3$$) {
  var $JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$ = window.localStorage.getItem("mr.temp.mirror.cast.Service.eventsBlob");
  if (null == $JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$ || 1 > $JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$.length) {
    $JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$ = null;
  } else {
    for (var $charCodes$jscomp$inline_1680_flagByte$jscomp$inline_1683$$ = new Uint16Array($JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$.length), $i$jscomp$inline_1681$$ = 0; $i$jscomp$inline_1681$$ < $JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$.length; ++$i$jscomp$inline_1681$$) {
      $charCodes$jscomp$inline_1680_flagByte$jscomp$inline_1683$$[$i$jscomp$inline_1681$$] = $JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$.charCodeAt($i$jscomp$inline_1681$$);
    }
    $JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$ = $charCodes$jscomp$inline_1680_flagByte$jscomp$inline_1683$$.buffer;
    $charCodes$jscomp$inline_1680_flagByte$jscomp$inline_1683$$ = (new Uint8Array($JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$, $JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$.byteLength - 1, 1))[0];
    $JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$ = new Uint8Array($JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$, 0, $JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$.byteLength - (0 == $charCodes$jscomp$inline_1680_flagByte$jscomp$inline_1683$$ ? 
    2 : 1));
    $JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$ = new Blob([$JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$], {type:"application/gzip"});
  }
  if (null != $JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$ && 0 != $JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$.size) {
    return $mr$PersistentDataManager$writeBlob$$(new Blob), $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($JSCompiler_StaticMethods_maybeUploadSavedLogs_$self$$.$logger$, "Uploading saved logs for feedback."), $mr$mirror$cast$LogUploader$uploadLog$$($JSCompiler_inline_result$jscomp$98_asString$jscomp$inline_1679_blob$jscomp$10_buffer$jscomp$inline_1682_viewOfPayload$jscomp$inline_1684$$, $feedbackId$jscomp$3$$);
  }
};
$mr$mirror$cast$Service$$.prototype.$l$ = function($testHooks$jscomp$5$$) {
  this.$f$ = $testHooks$jscomp$5$$;
};
var $mr$mirror$cast$Service$INSTANCE_$$ = new $mr$mirror$cast$Service$$;
$mr$Module$onModuleLoaded$$("mr.mirror.cast.Service", $mr$mirror$cast$Service$INSTANCE_$$);

