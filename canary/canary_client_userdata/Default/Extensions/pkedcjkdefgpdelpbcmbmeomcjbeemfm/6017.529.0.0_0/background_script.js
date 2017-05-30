'use strict';var $mr$TestProvider$$ = function($providerManagerCallbacks$jscomp$7$$) {
  this.$a$ = $providerManagerCallbacks$jscomp$7$$;
  this.$f$ = [new $mr$Sink$$("id1", "test-sink-1"), new $mr$Sink$$("id2", "test-sink-2")];
  this.$b$ = new Map;
  this.$g$ = new Map;
};
$JSCompiler_prototypeAlias$$ = $mr$TestProvider$$.prototype;
$JSCompiler_prototypeAlias$$.getName = function() {
  return "test";
};
$JSCompiler_prototypeAlias$$.$initialize$ = function() {
  setTimeout(this.$loadSinksAndComputeAvailability_$.bind(this));
};
$JSCompiler_prototypeAlias$$.$loadSinksAndComputeAvailability_$ = function() {
  var $$jscomp$this$jscomp$150$$ = this, $testData$$ = $JSCompiler_StaticMethods_GetTestData_$$(this, "initialSinks");
  $testData$$ && (this.$f$ = [], $testData$$.forEach(function($testData$$) {
    $$jscomp$this$jscomp$150$$.$f$.push(new $mr$Sink$$($testData$$.id, $testData$$.friendlyName));
  }));
  this.$a$.onSinkAvailabilityUpdated(this, 0 == this.$f$.length ? 0 : 1);
};
$JSCompiler_prototypeAlias$$.$module$contents$mr$DialProvider_DialProvider_prototype$getRoutes$ = function() {
  return Array.from(this.$b$.values());
};
$JSCompiler_prototypeAlias$$.$getAvailableSinks$ = function($sourceUrn$jscomp$105_testSinks$$) {
  var $testData$jscomp$1$$ = $JSCompiler_StaticMethods_GetTestData_$$(this, "getAvailableSinks");
  if (!$testData$jscomp$1$$) {
    return $JSCompiler_StaticMethods_isTestSource_$$($sourceUrn$jscomp$105_testSinks$$) ? new $mr$SinkList$$(this.$f$) : $mr$SinkList$EMPTY$$;
  }
  $sourceUrn$jscomp$105_testSinks$$ = $testData$jscomp$1$$[$sourceUrn$jscomp$105_testSinks$$];
  if (!$sourceUrn$jscomp$105_testSinks$$) {
    return $mr$SinkList$EMPTY$$;
  }
  var $sinks$jscomp$26$$ = [];
  $sourceUrn$jscomp$105_testSinks$$.forEach(function($sourceUrn$jscomp$105_testSinks$$) {
    $sinks$jscomp$26$$.push(new $mr$Sink$$($sourceUrn$jscomp$105_testSinks$$.id, $sourceUrn$jscomp$105_testSinks$$.friendlyName));
  });
  return new $mr$SinkList$$($sinks$jscomp$26$$);
};
$JSCompiler_prototypeAlias$$.startObservingMediaSinks = function() {
};
$JSCompiler_prototypeAlias$$.stopObservingMediaSinks = function() {
};
$JSCompiler_prototypeAlias$$.startObservingMediaRoutes = function() {
};
$JSCompiler_prototypeAlias$$.stopObservingMediaRoutes = function() {
};
$JSCompiler_prototypeAlias$$.$setDiscoveryEnabled$ = function() {
};
$JSCompiler_prototypeAlias$$.$module$contents$mr$DialProvider_DialProvider_prototype$getSinkById$ = function($id$jscomp$74$$) {
  return this.$f$.find(function($s$jscomp$31$$) {
    return $s$jscomp$31$$.id == $id$jscomp$74$$;
  }) || null;
};
$JSCompiler_prototypeAlias$$.createRoute = function($sourceUrn$jscomp$108$$, $sinkId$jscomp$63$$, $presentationId$jscomp$38$$, $offTheRecord$jscomp$17$$) {
  var $$jscomp$this$jscomp$151$$ = this, $rejectingPromise$$ = $JSCompiler_StaticMethods_GetRejectingPromise_$$(this, "createRoute");
  if ($rejectingPromise$$) {
    return $module$contents$mr$CancellablePromise_CancellablePromise$forPromise$$($rejectingPromise$$);
  }
  var $testData$jscomp$2$$ = $JSCompiler_StaticMethods_GetTestData_$$(this, "createRoute");
  return $testData$jscomp$2$$ && "delayMillis" in $testData$jscomp$2$$ ? new $module$contents$mr$CancellablePromise_CancellablePromise$$(function($rejectingPromise$$) {
    setTimeout(function() {
      $rejectingPromise$$($JSCompiler_StaticMethods_mr_TestProvider_prototype$doCreateRoute_$$($$jscomp$this$jscomp$151$$, $sourceUrn$jscomp$108$$, $sinkId$jscomp$63$$, $presentationId$jscomp$38$$, $offTheRecord$jscomp$17$$));
    }, $testData$jscomp$2$$.delayMillis);
  }) : $module$contents$mr$CancellablePromise_CancellablePromise$resolve$$($JSCompiler_StaticMethods_mr_TestProvider_prototype$doCreateRoute_$$(this, $sourceUrn$jscomp$108$$, $sinkId$jscomp$63$$, $presentationId$jscomp$38$$, $offTheRecord$jscomp$17$$));
};
var $JSCompiler_StaticMethods_mr_TestProvider_prototype$doCreateRoute_$$ = function($JSCompiler_StaticMethods_mr_TestProvider_prototype$doCreateRoute_$self$$, $sourceUrn$jscomp$109$$, $route$jscomp$78_sinkId$jscomp$64$$, $presentationId$jscomp$39$$, $offTheRecord$jscomp$18$$) {
  $route$jscomp$78_sinkId$jscomp$64$$ = $mr$Route$createRoute$$($presentationId$jscomp$39$$, $JSCompiler_StaticMethods_mr_TestProvider_prototype$doCreateRoute_$self$$.getName(), $route$jscomp$78_sinkId$jscomp$64$$, $sourceUrn$jscomp$109$$, !0, "Test Route", null);
  $route$jscomp$78_sinkId$jscomp$64$$.offTheRecord = $offTheRecord$jscomp$18$$;
  $JSCompiler_StaticMethods_mr_TestProvider_prototype$doCreateRoute_$self$$.$b$.set($route$jscomp$78_sinkId$jscomp$64$$.id, $route$jscomp$78_sinkId$jscomp$64$$);
  $JSCompiler_StaticMethods_mr_TestProvider_prototype$doCreateRoute_$self$$.$g$.set($presentationId$jscomp$39$$, $route$jscomp$78_sinkId$jscomp$64$$);
  $JSCompiler_StaticMethods_mr_TestProvider_prototype$doCreateRoute_$self$$.$a$.$onRouteAdded$($JSCompiler_StaticMethods_mr_TestProvider_prototype$doCreateRoute_$self$$, $route$jscomp$78_sinkId$jscomp$64$$);
  $JSCompiler_StaticMethods_mr_TestProvider_prototype$doCreateRoute_$self$$.$a$.$requestKeepAlive$("mr.TestProvider", !0);
  $mr$MediaSourceUtils$isPresentationSource$$($sourceUrn$jscomp$109$$) && ($route$jscomp$78_sinkId$jscomp$64$$.isOffscreenPresentation = !0, $JSCompiler_StaticMethods_captureOffscreenTab_$$($sourceUrn$jscomp$109$$, $presentationId$jscomp$39$$));
  return $route$jscomp$78_sinkId$jscomp$64$$;
}, $JSCompiler_StaticMethods_captureOffscreenTab_$$ = function($offscreenTabUrl$$, $presentationId$jscomp$40$$) {
  chrome.tabCapture.captureOffscreenTab($offscreenTabUrl$$, {video:!0, audio:!1, $videoConstraints$:{mandatory:{minWidth:180, minHeight:180, maxWidth:1920, maxHeight:1080, maxFrameRate:30}}, $presentationId$:$presentationId$jscomp$40$$}, function() {
  });
};
$JSCompiler_prototypeAlias$$ = $mr$TestProvider$$.prototype;
$JSCompiler_prototypeAlias$$.terminateRoute = function($routeId$jscomp$109$$) {
  var $route$jscomp$79$$ = this.$b$.get($routeId$jscomp$109$$);
  if (!$route$jscomp$79$$) {
    return Promise.reject(new $mr$RouteRequestError$$(3, "Route in test provider not found for routeId " + $routeId$jscomp$109$$));
  }
  this.$b$.delete($route$jscomp$79$$.id);
  this.$a$.$module$contents$mr$cast$DialProviderWrapper_DialProviderWrapper_prototype$onRouteRemoved$(this, $route$jscomp$79$$);
  0 == this.$b$.size && this.$a$.$requestKeepAlive$("mr.TestProvider", !1);
  $JSCompiler_StaticMethods_removeRouteFromMapping_$$(this, $routeId$jscomp$109$$);
  this.$a$.onPresentationConnectionStateChanged($routeId$jscomp$109$$, "terminated");
  return Promise.resolve();
};
$JSCompiler_prototypeAlias$$.sendRouteMessage = function($routeId$jscomp$110$$, $message$jscomp$150$$) {
  var $$jscomp$this$jscomp$152$$ = this;
  if ("true" == $JSCompiler_StaticMethods_GetTestData_$$(this, "closeRouteWithErrorOnSend")) {
    return setTimeout(function() {
      $$jscomp$this$jscomp$152$$.$a$.onPresentationConnectionClosed($routeId$jscomp$110$$, "error", "Foo");
      var $message$jscomp$150$$ = $$jscomp$this$jscomp$152$$.$b$.get($routeId$jscomp$110$$);
      $message$jscomp$150$$ && $$jscomp$this$jscomp$152$$.$a$.$module$contents$mr$cast$DialProviderWrapper_DialProviderWrapper_prototype$onRouteRemoved$($$jscomp$this$jscomp$152$$, $message$jscomp$150$$);
    }, 0), Promise.reject(Error("Send error. Closing connection."));
  }
  setTimeout(function() {
    $$jscomp$this$jscomp$152$$.$a$.$module$contents$mr$cast$DialProviderWrapper_DialProviderWrapper_prototype$onRouteMessage$($$jscomp$this$jscomp$152$$, $routeId$jscomp$110$$, "Pong: " + $message$jscomp$150$$);
  }, 0);
  return Promise.resolve();
};
$JSCompiler_prototypeAlias$$.sendRouteBinaryMessage = function($routeId$jscomp$111$$) {
  return Promise.reject(Error("Route " + $routeId$jscomp$111$$ + " does not support sending binary data."));
};
$JSCompiler_prototypeAlias$$.$getMirrorSettings$ = function() {
  throw Error("Not implemented.");
};
$JSCompiler_prototypeAlias$$.$getMirrorServiceName$ = function() {
  return null;
};
$JSCompiler_prototypeAlias$$.$canRoute$ = function($sourceUrn$jscomp$110_testData$jscomp$4$$, $sinkId$jscomp$67$$) {
  return $JSCompiler_StaticMethods_isTestSource_$$($sourceUrn$jscomp$110_testData$jscomp$4$$) ? ($sourceUrn$jscomp$110_testData$jscomp$4$$ = $JSCompiler_StaticMethods_GetTestData_$$(this, "canRoute")) ? "true" == $sourceUrn$jscomp$110_testData$jscomp$4$$ : !!this.$module$contents$mr$DialProvider_DialProvider_prototype$getSinkById$($sinkId$jscomp$67$$) : !1;
};
$JSCompiler_prototypeAlias$$.$canJoin$ = function($sourceUrn$jscomp$111_testData$jscomp$5$$, $presentationId$jscomp$41$$, $route$jscomp$81$$) {
  return $JSCompiler_StaticMethods_isTestSource_$$($sourceUrn$jscomp$111_testData$jscomp$5$$) ? ($sourceUrn$jscomp$111_testData$jscomp$5$$ = $JSCompiler_StaticMethods_GetTestData_$$(this, "canJoin")) ? "true" == $sourceUrn$jscomp$111_testData$jscomp$5$$ : $route$jscomp$81$$ ? this.$b$.has($route$jscomp$81$$.id) : !0 : !1;
};
$JSCompiler_prototypeAlias$$.connectRouteByRouteId = function($sourceUrn$jscomp$112_testData$jscomp$6$$, $existingRoute$jscomp$1_routeId$jscomp$112$$) {
  return $JSCompiler_StaticMethods_isTestSource_$$($sourceUrn$jscomp$112_testData$jscomp$6$$) ? ($sourceUrn$jscomp$112_testData$jscomp$6$$ = $JSCompiler_StaticMethods_GetRejectingPromise_$$(this, "connectRouteByRouteId")) ? $module$contents$mr$CancellablePromise_CancellablePromise$forPromise$$($sourceUrn$jscomp$112_testData$jscomp$6$$) : ($existingRoute$jscomp$1_routeId$jscomp$112$$ = this.$b$.get($existingRoute$jscomp$1_routeId$jscomp$112$$)) ? $module$contents$mr$CancellablePromise_CancellablePromise$resolve$$($existingRoute$jscomp$1_routeId$jscomp$112$$) : 
  $module$contents$mr$CancellablePromise_CancellablePromise$reject$$(Error("Presentation does not exist")) : $module$contents$mr$CancellablePromise_CancellablePromise$reject$$(Error("Invalid source"));
};
$JSCompiler_prototypeAlias$$.joinRoute = function($sourceUrn$jscomp$113_testData$jscomp$7$$, $existingRoute$jscomp$2_presentationId$jscomp$43$$, $offTheRecord$jscomp$19$$) {
  return $JSCompiler_StaticMethods_isTestSource_$$($sourceUrn$jscomp$113_testData$jscomp$7$$) ? ($sourceUrn$jscomp$113_testData$jscomp$7$$ = $JSCompiler_StaticMethods_GetRejectingPromise_$$(this, "joinRoute")) ? $module$contents$mr$CancellablePromise_CancellablePromise$forPromise$$($sourceUrn$jscomp$113_testData$jscomp$7$$) : ($existingRoute$jscomp$2_presentationId$jscomp$43$$ = this.$g$.get($existingRoute$jscomp$2_presentationId$jscomp$43$$)) ? $existingRoute$jscomp$2_presentationId$jscomp$43$$.offTheRecord != 
  $offTheRecord$jscomp$19$$ ? $module$contents$mr$CancellablePromise_CancellablePromise$reject$$(Error("Off-the-record mismatch")) : $module$contents$mr$CancellablePromise_CancellablePromise$resolve$$($existingRoute$jscomp$2_presentationId$jscomp$43$$) : $module$contents$mr$CancellablePromise_CancellablePromise$reject$$(Error("Presentation does not exist")) : $module$contents$mr$CancellablePromise_CancellablePromise$reject$$(Error("Invalid source"));
};
$JSCompiler_prototypeAlias$$.detachRoute = function($routeId$jscomp$113$$) {
  this.$a$.onPresentationConnectionClosed($routeId$jscomp$113$$, "closed", "Close route");
};
var $JSCompiler_StaticMethods_removeRouteFromMapping_$$ = function($JSCompiler_StaticMethods_removeRouteFromMapping_$self$$, $routeId$jscomp$114$$) {
  var $newPresentationIdToRoute$$ = new Map;
  $JSCompiler_StaticMethods_removeRouteFromMapping_$self$$.$g$.forEach(function($JSCompiler_StaticMethods_removeRouteFromMapping_$self$$, $presentationId$jscomp$44$$) {
    $JSCompiler_StaticMethods_removeRouteFromMapping_$self$$.id != $routeId$jscomp$114$$ && $newPresentationIdToRoute$$.set($presentationId$jscomp$44$$, $JSCompiler_StaticMethods_removeRouteFromMapping_$self$$);
  });
  $JSCompiler_StaticMethods_removeRouteFromMapping_$self$$.$g$.clear();
  $JSCompiler_StaticMethods_removeRouteFromMapping_$self$$.$g$ = $newPresentationIdToRoute$$;
}, $JSCompiler_StaticMethods_isTestSource_$$ = function($sourceUrn$jscomp$114$$) {
  return 0 <= $sourceUrn$jscomp$114$$.indexOf("__testprovider__=true");
}, $JSCompiler_StaticMethods_GetTestData_$$ = function($JSCompiler_StaticMethods_GetTestData_$self$$, $key$jscomp$151$$) {
  if ("testdata" in window.localStorage) {
    var $testdata$$ = JSON.parse(window.localStorage.testdata);
    if ($key$jscomp$151$$ in $testdata$$) {
      return $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($JSCompiler_StaticMethods_GetTestData_$self$$.$logger_$, $key$jscomp$151$$ + " : " + JSON.stringify($testdata$$[$key$jscomp$151$$])), $testdata$$[$key$jscomp$151$$];
    }
  }
  return null;
}, $JSCompiler_StaticMethods_GetRejectingPromise_$$ = function($JSCompiler_StaticMethods_GetRejectingPromise_$self_testData$jscomp$8$$, $key$jscomp$152$$) {
  return ($JSCompiler_StaticMethods_GetRejectingPromise_$self_testData$jscomp$8$$ = $JSCompiler_StaticMethods_GetTestData_$$($JSCompiler_StaticMethods_GetRejectingPromise_$self_testData$jscomp$8$$, $key$jscomp$152$$)) && "passed" in $JSCompiler_StaticMethods_GetRejectingPromise_$self_testData$jscomp$8$$ && "false" == $JSCompiler_StaticMethods_GetRejectingPromise_$self_testData$jscomp$8$$.passed && "errorMessage" in $JSCompiler_StaticMethods_GetRejectingPromise_$self_testData$jscomp$8$$ ? Promise.reject(Error($JSCompiler_StaticMethods_GetRejectingPromise_$self_testData$jscomp$8$$.errorMessage)) : 
  null;
};
$mr$TestProvider$$.prototype.searchSinks = function() {
  return $mr$Assertions$rejectNotImplemented$$();
};
$mr$TestProvider$$.prototype.createMediaRouteController = function() {
  $JSCompiler_StaticMethods_mr_Logger_prototype$info$$(this.$logger_$, "createMediaRouteController: not implemented");
  return $mr$Assertions$rejectNotImplemented$$();
};
$mr$TestProvider$$.prototype.provideSinks = function() {
};
$mr$TestProvider$$.prototype.$logger_$ = $mr$Logger$getInstance$$("mr.TestProvider");
var $mr$Init$wakeTiming_$$, $mr$Init$providerManager_$$, $mr$Init$logger_$$ = $mr$Logger$getInstance$$("mr.Init");
$mr$LogManager$getInstance$$().init();
$mr$Init$wakeTiming_$$ = new $mr$MediumTiming$$("MediaRouter.Provider.WakeDuration");
$mr$Init$providerManager_$$ = new $mr$ProviderManager$$;
var $promise$jscomp$inline_1641$$ = (new Promise(function($resolve$jscomp$43$$, $reject$jscomp$43$$) {
  switch(window.location.host) {
    case "enhhojjnijigcajfphajepfemndkmdlo":
      $resolve$jscomp$43$$();
      break;
    case "pkedcjkdefgpdelpbcmbmeomcjbeemfm":
      chrome.management.get("enhhojjnijigcajfphajepfemndkmdlo", function($result$jscomp$78$$) {
        chrome.runtime.lastError || !$result$jscomp$78$$.enabled ? $resolve$jscomp$43$$() : $reject$jscomp$43$$(Error("Dev extension is enabled"));
      });
      break;
    default:
      $reject$jscomp$43$$(Error("Unknown extension id"));
  }
})).then(function() {
  return chrome.mojoPrivate && chrome.mojoPrivate.requireAsync ? new Promise(function($resolve$jscomp$31$$) {
    chrome.mojoPrivate.requireAsync("media_router_bindings").then(function($mediaRouter$$) {
      mojo = $mediaRouter$$.$getMojoExports$ && $mediaRouter$$.$getMojoExports$();
      $mediaRouter$$.start().then(function($result$jscomp$36$$) {
        $resolve$jscomp$31$$({mrService:$mediaRouter$$, mrInstanceId:$result$jscomp$36$$.$instance_id$ || $result$jscomp$36$$, mrConfig:$result$jscomp$36$$.config});
      });
    });
  }) : Promise.reject(Error("No mojo service loaded"));
}).then(function($result$jscomp$79$$) {
  if (!$result$jscomp$79$$.mrService) {
    throw Error("Failed to get MR service");
  }
  var $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_1633_castProvider$jscomp$inline_5688_mrInstanceId$jscomp$2_providers$jscomp$inline_5157$$ = $result$jscomp$79$$.mrInstanceId;
  if (!$JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_1633_castProvider$jscomp$inline_5688_mrInstanceId$jscomp$2_providers$jscomp$inline_5157$$) {
    throw Error("Failed to get MR instance ID.");
  }
  $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($mr$Init$logger_$$, "MR instance ID: " + $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_1633_castProvider$jscomp$inline_5688_mrInstanceId$jscomp$2_providers$jscomp$inline_5157$$);
  var $mediaRouterService$jscomp$2$$ = $result$jscomp$79$$.mrService;
  if (!$mr$Init$providerManager_$$) {
    throw Error("providerManager not initialized.");
  }
  $mediaRouterService$jscomp$2$$.setHandlers($mr$Init$providerManager_$$);
  $mr$PersistentDataManager$isChromeReloaded$$($JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_1633_castProvider$jscomp$inline_5688_mrInstanceId$jscomp$2_providers$jscomp$inline_5157$$) && ($mr$Init$wakeTiming_$$.$b$ = "MediaRouter.Provider.FirstWakeDuration");
  chrome.runtime.onSuspend.addListener($mr$Init$wakeTiming_$$.$a$.bind($mr$Init$wakeTiming_$$));
  for (var $castDialWrapper$jscomp$inline_5689_otherChars$jscomp$inline_1627$$ = 0, $$jscomp$inline_1628$$ = $$jscomp$makeIterator$$(Object.keys($mr$PersistentData$storageObj_$$)), $$jscomp$key$key$jscomp$inline_1629_key$jscomp$inline_1630$$ = $$jscomp$inline_1628$$.next(); !$$jscomp$key$key$jscomp$inline_1629_key$jscomp$inline_1630$$.done; $$jscomp$key$key$jscomp$inline_1629_key$jscomp$inline_1630$$ = $$jscomp$inline_1628$$.next()) {
    var $$jscomp$key$key$jscomp$inline_1629_key$jscomp$inline_1630$$ = $$jscomp$key$key$jscomp$inline_1629_key$jscomp$inline_1630$$.value, $itemSize$jscomp$inline_1631$$ = $$jscomp$key$key$jscomp$inline_1629_key$jscomp$inline_1630$$.length + window.localStorage.getItem($$jscomp$key$key$jscomp$inline_1629_key$jscomp$inline_1630$$).length;
    $$jscomp$key$key$jscomp$inline_1629_key$jscomp$inline_1630$$.startsWith("mr.") ? $mr$PersistentDataManager$charsUsed_$$ += $itemSize$jscomp$inline_1631$$ : $castDialWrapper$jscomp$inline_5689_otherChars$jscomp$inline_1627$$ += $itemSize$jscomp$inline_1631$$;
  }
  $mr$PersistentDataManager$mrInstanceId_$$ = $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_1633_castProvider$jscomp$inline_5688_mrInstanceId$jscomp$2_providers$jscomp$inline_5157$$;
  (window.localStorage.getItem("version") && window.localStorage.getItem("version") !== chrome.runtime.getManifest().version || $mr$PersistentDataManager$isChromeReloaded$$($JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_1633_castProvider$jscomp$inline_5688_mrInstanceId$jscomp$2_providers$jscomp$inline_5157$$)) && $mr$PersistentDataManager$removeTemporary_$$();
  $JSCompiler_StaticMethods_mr_Logger_prototype$info$$($mr$PersistentDataManager$logger_$$, "initialize: " + $mr$PersistentDataManager$charsUsed_$$ + " chars used, " + $castDialWrapper$jscomp$inline_5689_otherChars$jscomp$inline_1627$$ + " other chars");
  chrome.runtime.onSuspend.addListener($mr$PersistentDataManager$onSuspend_$$);
  $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_1633_castProvider$jscomp$inline_5688_mrInstanceId$jscomp$2_providers$jscomp$inline_5157$$ = $mr$LogManager$getInstance$$();
  $mr$PersistentDataManager$register$$($JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_1633_castProvider$jscomp$inline_5688_mrInstanceId$jscomp$2_providers$jscomp$inline_5157$$);
  $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_1633_castProvider$jscomp$inline_5688_mrInstanceId$jscomp$2_providers$jscomp$inline_5157$$ = new $mr$CastProvider$$($mr$Init$providerManager_$$);
  $castDialWrapper$jscomp$inline_5689_otherChars$jscomp$inline_1627$$ = new $module$contents$mr$cast$DialProviderWrapper_DialProviderWrapper$$($mr$Init$providerManager_$$, $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_1633_castProvider$jscomp$inline_5688_mrInstanceId$jscomp$2_providers$jscomp$inline_5157$$);
  $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_1633_castProvider$jscomp$inline_5688_mrInstanceId$jscomp$2_providers$jscomp$inline_5157$$ = [$JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_1633_castProvider$jscomp$inline_5688_mrInstanceId$jscomp$2_providers$jscomp$inline_5157$$, $castDialWrapper$jscomp$inline_5689_otherChars$jscomp$inline_1627$$];
  $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_1633_castProvider$jscomp$inline_5688_mrInstanceId$jscomp$2_providers$jscomp$inline_5157$$.push(new $mr$CloudProvider$$($mr$Init$providerManager_$$));
  window.e2eTestService = new $mr$E2ETestService$$($mr$Init$providerManager_$$);
  $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_1633_castProvider$jscomp$inline_5688_mrInstanceId$jscomp$2_providers$jscomp$inline_5157$$.push(new $mr$TestProvider$$($mr$Init$providerManager_$$));
  $mr$Init$providerManager_$$.$initialize$($mediaRouterService$jscomp$2$$, $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_1633_castProvider$jscomp$inline_5688_mrInstanceId$jscomp$2_providers$jscomp$inline_5157$$, $result$jscomp$79$$.mrConfig);
}).then(void 0, function($error$jscomp$59$$) {
  $JSCompiler_StaticMethods_mr_Logger_prototype$warning$$($mr$Init$logger_$$, $error$jscomp$59$$.message);
  throw $error$jscomp$59$$;
});
[].concat($$jscomp$arrayFromIterable$$($mr$dial$EventListeners$getAllListeners$$()), $$jscomp$arrayFromIterable$$([].concat([$mr$InternalMessageListener$get$$(), $mr$ExternalMessageListener$get$$()], $$jscomp$arrayFromIterable$$([].concat([$mr$cast$EventListeners$getMdnsOnServiceListListener$$(), $mr$cast$EventListeners$getConnectedNetworkChangedListener$$()], $$jscomp$arrayFromIterable$$($mr$cast$EventListeners$getChannelListeners$$()))), $$jscomp$arrayFromIterable$$([$mr$CloudGcmEventListener$get$$()])))).forEach(function($eventListener$jscomp$inline_4484$$) {
  $mr$PersistentDataManager$register$$($eventListener$jscomp$inline_4484$$);
});
$mr$InternalMessageListener$get$$().addListener();
$mr$ExternalMessageListener$get$$().addListener();
$promise$jscomp$inline_1641$$.then(void 0, function() {
  return window.close();
});

