'use strict';var $mr$WebRtcAnalytics$START_SUCCESS$$ = {TAB:0, $DESKTOP$:1, $OFFSCREEN_TAB$:2}, $mr$WebRtcAnalytics$recordMirrorStartSuccess$$ = function($type$jscomp$234$$) {
  $mr$Analytics$recordEnum$$("MediaRouter.WebRtc.Start.Success", $type$jscomp$234$$, $mr$WebRtcAnalytics$START_SUCCESS$$);
};
var $mr$mirror$webrtc$CloudWebRtcSession$$ = function($mirrorSettings$jscomp$13$$, $route$jscomp$89$$) {
  $mr$mirror$Session$$.call(this, $route$jscomp$89$$);
  this.$A$ = $mirrorSettings$jscomp$13$$;
  this.$a$ = new $mr$PromiseResolver$$;
  this.$j$ = $JSCompiler_StaticMethods_getInternalMessenger$$($route$jscomp$89$$.id);
  this.$f$ = new $mr$PromiseResolver$$;
  this.$w$ = !1;
  this.$h$ = null;
  this.$o$ = !1;
  this.$l$ = this.$b$ = null;
  $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$$(this);
  $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$$(this);
  $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$sendMessageToMrp_$$(this, new $mr$webrtc$Message$$("GET_TURN_CREDENTIALS"));
};
$$jscomp$inherits$$($mr$mirror$webrtc$CloudWebRtcSession$$, $mr$mirror$Session$$);
$mr$mirror$webrtc$CloudWebRtcSession$$.prototype.start = function($mediaStream$jscomp$16$$) {
  var $$jscomp$this$jscomp$249$$ = this;
  return this.$a$.$a$.then(function($pc$jscomp$5$$) {
    if ($pc$jscomp$5$$.$b$) {
      return Promise.reject(new $mr$mirror$Error$$("Mirroring already started"));
    }
    if ($$jscomp$this$jscomp$249$$.$h$) {
      return Promise.reject(new $mr$mirror$Error$$("Session permanently stopped"));
    }
    $$jscomp$this$jscomp$249$$.$b$ = new $mr$Timing$$("MediaRouter.WebRtc.Session.Launch");
    $pc$jscomp$5$$.$a$.addStream($mediaStream$jscomp$16$$);
    $pc$jscomp$5$$.start();
    return $$jscomp$this$jscomp$249$$.$f$.$a$;
  });
};
$mr$mirror$webrtc$CloudWebRtcSession$$.prototype.stop = function() {
  var $$jscomp$this$jscomp$250$$ = this;
  this.$f$.reject(new $mr$mirror$Error$$("Session stop requested."));
  this.$l$ && (this.$l$.$a$(), this.$l$ = null);
  if (this.$h$) {
    return this.$h$;
  }
  this.$o$ = this.$w$ = !1;
  this.$b$ = null;
  return this.$h$ = this.$a$.$a$.then(function($$jscomp$this$jscomp$250$$) {
    $$jscomp$this$jscomp$250$$.stop();
  }).then(function() {
    return $$jscomp$this$jscomp$250$$.$j$.$dispose$();
  }).catch(function($error$jscomp$162$$) {
    $$jscomp$this$jscomp$250$$.$j$.$dispose$();
    throw $error$jscomp$162$$;
  });
};
var $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$$ = function($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$) {
  $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$.$j$.onMessage = function($message$jscomp$532$$) {
    if (!$message$jscomp$532$$.type) {
      throw Error("Message has no type.");
    }
    switch($message$jscomp$532$$.type) {
      case "TURN_CREDENTIALS":
        $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$.$a$.resolve(new $mr$webrtc$PeerConnection$$($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$.$g$.id, $message$jscomp$532$$.data.credentials));
        break;
      case "ANSWER":
        $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$.$a$.$a$.then(function($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$) {
          $JSCompiler_StaticMethods_mr_webrtc_PeerConnection_prototype$setRemoteDescription$$($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$, $message$jscomp$532$$.data);
        });
        break;
      case "KNOCK_ANSWER":
        $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$.$o$ = !0;
        $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$.$a$.$a$.then(function($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$) {
          $JSCompiler_StaticMethods_mr_webrtc_PeerConnection_prototype$setRemoteDescription$$($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$, $message$jscomp$532$$.data);
        });
        break;
      case "STOP":
        $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$.$f$.reject(new $mr$mirror$Error$$("Stop signal received"));
        $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$.stop();
        break;
      default:
        throw new $mr$mirror$Error$$("Unknown message type: " + $message$jscomp$532$$.type);
    }
  };
}, $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$$ = function($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$) {
  $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$a$.$a$.then(function($pc$jscomp$9$$) {
    $JSCompiler_StaticMethods_setOnOfferDescriptionReady$$($pc$jscomp$9$$, function($pc$jscomp$9$$) {
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$sendMessageToMrp_$$($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$, new $mr$webrtc$Message$$("OFFER", new $mr$webrtc$OfferMessageData$$($pc$jscomp$9$$, $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$A$, $mr$webrtc$PeerConnection$MEDIA_CONSTRAINTS$$)));
    });
    $JSCompiler_StaticMethods_setOnDataChannelMessage$$($pc$jscomp$9$$, function($pc$jscomp$9$$) {
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$sendMessageToMrp_$$($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$, $mr$webrtc$Message$fromString$$($pc$jscomp$9$$));
    });
    $JSCompiler_StaticMethods_setOnConnectionSuccess$$($pc$jscomp$9$$, function() {
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$w$ = !0;
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$sendMessageToMrp_$$($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$, new $mr$webrtc$Message$$("SESSION_START_SUCCESS"));
      !$JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$o$ && $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$b$ && $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$b$.$a$();
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$b$ = null;
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$l$ = new $mr$LongTiming$$("MediaRouter.WebRtc.Session.Length");
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$f$.resolve($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$);
    });
    $JSCompiler_StaticMethods_setOnConnectionClosed$$($pc$jscomp$9$$, function() {
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$sendMessageToMrp_$$($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$, new $mr$webrtc$Message$$("SESSION_END"));
    });
    $JSCompiler_StaticMethods_setOnConnectionFailure$$($pc$jscomp$9$$, function($pc$jscomp$9$$) {
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$w$ || $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$f$.reject($pc$jscomp$9$$);
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$sendMessageToMrp_$$($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$, new $mr$webrtc$Message$$("SESSION_FAILURE"));
    });
  });
}, $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$sendMessageToMrp_$$ = function($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$sendMessageToMrp_$self$$, $message$jscomp$535$$) {
  $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$sendMessageToMrp_$self$$.$j$.sendMessage($message$jscomp$535$$, $mr$mirror$webrtc$CloudWebRtcSession$CLOUD_CHANNEL_EXTRA_INFO_$$);
}, $mr$mirror$webrtc$CloudWebRtcSession$CLOUD_CHANNEL_EXTRA_INFO_$$ = {channelType:"cloud"};
var $mr$mirror$webrtc$WebRtcService$$ = function() {
  $mr$mirror$Service$$.call(this, "webrtc");
};
$$jscomp$inherits$$($mr$mirror$webrtc$WebRtcService$$, $mr$mirror$Service$$);
$JSCompiler_prototypeAlias$$ = $mr$mirror$webrtc$WebRtcService$$.prototype;
$JSCompiler_prototypeAlias$$.$createMirrorSession$ = function($mirrorSettings$jscomp$14$$, $route$jscomp$90$$) {
  return new $mr$mirror$webrtc$CloudWebRtcSession$$($mirrorSettings$jscomp$14$$, $route$jscomp$90$$);
};
$JSCompiler_prototypeAlias$$.$recordTabMirrorStartSuccess$ = function() {
  $mr$WebRtcAnalytics$recordMirrorStartSuccess$$(0);
};
$JSCompiler_prototypeAlias$$.$recordDesktopMirrorStartSuccess$ = function() {
  $mr$WebRtcAnalytics$recordMirrorStartSuccess$$(1);
};
$JSCompiler_prototypeAlias$$.$recordOffscreenTabMirrorStartSuccess$ = function() {
  $mr$WebRtcAnalytics$recordMirrorStartSuccess$$(2);
};
$JSCompiler_prototypeAlias$$.$recordMirrorSessionEnded$ = function() {
  $mr$Analytics$recordEvent$$("MediaRouter.WebRtc.Session.End");
};
$JSCompiler_prototypeAlias$$.$recordMirrorStartFailure$ = function($reason$jscomp$40$$) {
  $mr$Analytics$recordEnum$$("MediaRouter.WebRtc.Start.Failure", $reason$jscomp$40$$, $mr$MirrorAnalytics$CapturingFailure$$);
};
$JSCompiler_prototypeAlias$$.$recordStreamEnded$ = function() {
  $mr$Analytics$recordEvent$$("MediaRouter.WebRtc.Stream.End");
};
var $mr$mirror$webrtc$WebRtcService$INSTANCE_$$ = new $mr$mirror$webrtc$WebRtcService$$;
$mr$Module$onModuleLoaded$$("mr.mirror.webrtc.WebRtcService", $mr$mirror$webrtc$WebRtcService$INSTANCE_$$);

