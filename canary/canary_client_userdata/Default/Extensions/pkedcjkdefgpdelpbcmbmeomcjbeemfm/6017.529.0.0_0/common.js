'use strict';var $JSCompiler_prototypeAlias$$, $$jscomp$defineProperty$$ = "function" == typeof Object.defineProperties ? Object.defineProperty : function($target$jscomp$57$$, $property$jscomp$4$$, $descriptor$jscomp$1$$) {
  $target$jscomp$57$$ != Array.prototype && $target$jscomp$57$$ != Object.prototype && ($target$jscomp$57$$[$property$jscomp$4$$] = $descriptor$jscomp$1$$.value);
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
  var $index$jscomp$48$$ = 0;
  return $$jscomp$iteratorPrototype$$(function() {
    return $index$jscomp$48$$ < $array$jscomp$5$$.length ? {done:!1, value:$array$jscomp$5$$[$index$jscomp$48$$++]} : {done:!0};
  });
}, $$jscomp$iteratorPrototype$$ = function($iterator$jscomp$7_next$$) {
  $$jscomp$initSymbolIterator$$();
  $iterator$jscomp$7_next$$ = {next:$iterator$jscomp$7_next$$};
  $iterator$jscomp$7_next$$[$$jscomp$global$$.Symbol.iterator] = function() {
    return this;
  };
  return $iterator$jscomp$7_next$$;
}, $$jscomp$makeIterator$$ = function($iterable$jscomp$2$$) {
  $$jscomp$initSymbolIterator$$();
  var $iteratorFunction$$ = $iterable$jscomp$2$$[Symbol.iterator];
  return $iteratorFunction$$ ? $iteratorFunction$$.call($iterable$jscomp$2$$) : $$jscomp$arrayIterator$$($iterable$jscomp$2$$);
}, $$jscomp$inherits$$ = function($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$;
  for (var $p$$ in $parentCtor$$) {
    if (Object.defineProperties) {
      var $descriptor$jscomp$2$$ = Object.getOwnPropertyDescriptor($parentCtor$$, $p$$);
      $descriptor$jscomp$2$$ && Object.defineProperty($childCtor$$, $p$$, $descriptor$jscomp$2$$);
    } else {
      $childCtor$$[$p$$] = $parentCtor$$[$p$$];
    }
  }
}, $$jscomp$arrayFromIterable$$ = function($JSCompiler_temp$jscomp$79_iterable$jscomp$3_iterator$jscomp$inline_393$$) {
  if (!($JSCompiler_temp$jscomp$79_iterable$jscomp$3_iterator$jscomp$inline_393$$ instanceof Array)) {
    $JSCompiler_temp$jscomp$79_iterable$jscomp$3_iterator$jscomp$inline_393$$ = $$jscomp$makeIterator$$($JSCompiler_temp$jscomp$79_iterable$jscomp$3_iterator$jscomp$inline_393$$);
    for (var $i$jscomp$inline_394$$, $arr$jscomp$inline_395$$ = []; !($i$jscomp$inline_394$$ = $JSCompiler_temp$jscomp$79_iterable$jscomp$3_iterator$jscomp$inline_393$$.next()).done;) {
      $arr$jscomp$inline_395$$.push($i$jscomp$inline_394$$.value);
    }
    $JSCompiler_temp$jscomp$79_iterable$jscomp$3_iterator$jscomp$inline_393$$ = $arr$jscomp$inline_395$$;
  }
  return $JSCompiler_temp$jscomp$79_iterable$jscomp$3_iterator$jscomp$inline_393$$;
}, $goog$$ = $goog$$ || {}, $goog$global$$ = this, $goog$isDef$$ = function($val$jscomp$1$$) {
  return void 0 !== $val$jscomp$1$$;
}, $goog$isString$$ = function($val$jscomp$2$$) {
  return "string" == typeof $val$jscomp$2$$;
}, $goog$isBoolean$$ = function($val$jscomp$3$$) {
  return "boolean" == typeof $val$jscomp$3$$;
}, $goog$isNumber$$ = function($val$jscomp$4$$) {
  return "number" == typeof $val$jscomp$4$$;
}, $goog$getObjectByName$$ = function($name$jscomp$117_parts$jscomp$1$$, $cur$jscomp$1_opt_obj$jscomp$2$$) {
  $name$jscomp$117_parts$jscomp$1$$ = $name$jscomp$117_parts$jscomp$1$$.split(".");
  $cur$jscomp$1_opt_obj$jscomp$2$$ = $cur$jscomp$1_opt_obj$jscomp$2$$ || $goog$global$$;
  for (var $part$jscomp$1$$; $part$jscomp$1$$ = $name$jscomp$117_parts$jscomp$1$$.shift();) {
    if (null != $cur$jscomp$1_opt_obj$jscomp$2$$[$part$jscomp$1$$]) {
      $cur$jscomp$1_opt_obj$jscomp$2$$ = $cur$jscomp$1_opt_obj$jscomp$2$$[$part$jscomp$1$$];
    } else {
      return null;
    }
  }
  return $cur$jscomp$1_opt_obj$jscomp$2$$;
}, $goog$nullFunction$$ = function() {
}, $goog$addSingletonGetter$$ = function($ctor$$) {
  $ctor$$.$instance_$ = void 0;
  $ctor$$.$getInstance$ = function() {
    return $ctor$$.$instance_$ ? $ctor$$.$instance_$ : $ctor$$.$instance_$ = new $ctor$$;
  };
}, $goog$typeOf$$ = function($value$jscomp$95$$) {
  var $s$jscomp$4$$ = typeof $value$jscomp$95$$;
  if ("object" == $s$jscomp$4$$) {
    if ($value$jscomp$95$$) {
      if ($value$jscomp$95$$ instanceof Array) {
        return "array";
      }
      if ($value$jscomp$95$$ instanceof Object) {
        return $s$jscomp$4$$;
      }
      var $className$jscomp$5$$ = Object.prototype.toString.call($value$jscomp$95$$);
      if ("[object Window]" == $className$jscomp$5$$) {
        return "object";
      }
      if ("[object Array]" == $className$jscomp$5$$ || "number" == typeof $value$jscomp$95$$.length && "undefined" != typeof $value$jscomp$95$$.splice && "undefined" != typeof $value$jscomp$95$$.propertyIsEnumerable && !$value$jscomp$95$$.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == $className$jscomp$5$$ || "undefined" != typeof $value$jscomp$95$$.call && "undefined" != typeof $value$jscomp$95$$.propertyIsEnumerable && !$value$jscomp$95$$.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == $s$jscomp$4$$ && "undefined" == typeof $value$jscomp$95$$.call) {
      return "object";
    }
  }
  return $s$jscomp$4$$;
}, $goog$isNull$$ = function($val$jscomp$5$$) {
  return null === $val$jscomp$5$$;
}, $goog$isArray$$ = function($val$jscomp$7$$) {
  return "array" == $goog$typeOf$$($val$jscomp$7$$);
}, $goog$isArrayLike$$ = function($val$jscomp$8$$) {
  var $type$jscomp$118$$ = $goog$typeOf$$($val$jscomp$8$$);
  return "array" == $type$jscomp$118$$ || "object" == $type$jscomp$118$$ && "number" == typeof $val$jscomp$8$$.length;
}, $goog$isFunction$$ = function($val$jscomp$10$$) {
  return "function" == $goog$typeOf$$($val$jscomp$10$$);
}, $goog$isObject$$ = function($val$jscomp$11$$) {
  var $type$jscomp$119$$ = typeof $val$jscomp$11$$;
  return "object" == $type$jscomp$119$$ && null != $val$jscomp$11$$ || "function" == $type$jscomp$119$$;
}, $goog$removeUid$$ = function($obj$jscomp$31$$) {
  null !== $obj$jscomp$31$$ && "removeAttribute" in $obj$jscomp$31$$ && $obj$jscomp$31$$.removeAttribute($goog$UID_PROPERTY_$$);
  try {
    delete $obj$jscomp$31$$[$goog$UID_PROPERTY_$$];
  } catch ($ex$$) {
  }
}, $goog$UID_PROPERTY_$$ = "closure_uid_" + (1e9 * Math.random() >>> 0), $goog$uidCounter_$$ = 0, $goog$bindNative_$$ = function($fn$jscomp$10$$, $selfObj$jscomp$1$$, $var_args$jscomp$51$$) {
  return $fn$jscomp$10$$.call.apply($fn$jscomp$10$$.bind, arguments);
}, $goog$bindJs_$$ = function($fn$jscomp$11$$, $selfObj$jscomp$2$$, $var_args$jscomp$52$$) {
  if (!$fn$jscomp$11$$) {
    throw Error();
  }
  if (2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $var_args$jscomp$52$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($var_args$jscomp$52$$, $boundArgs$$);
      return $fn$jscomp$11$$.apply($selfObj$jscomp$2$$, $var_args$jscomp$52$$);
    };
  }
  return function() {
    return $fn$jscomp$11$$.apply($selfObj$jscomp$2$$, arguments);
  };
}, $goog$bind$$ = function($fn$jscomp$12$$, $selfObj$jscomp$3$$, $var_args$jscomp$53$$) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bind$$ = $goog$bindNative_$$ : $goog$bind$$ = $goog$bindJs_$$;
  return $goog$bind$$.apply(null, arguments);
}, $goog$partial$$ = function($fn$jscomp$13$$, $var_args$jscomp$54$$) {
  var $args$jscomp$3$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $var_args$jscomp$54$$ = $args$jscomp$3$$.slice();
    $var_args$jscomp$54$$.push.apply($var_args$jscomp$54$$, arguments);
    return $fn$jscomp$13$$.apply(this, $var_args$jscomp$54$$);
  };
}, $goog$now$$ = Date.now || function() {
  return +new Date;
}, $goog$exportSymbol$$ = function($parts$jscomp$inline_400_publicPath$$, $object$jscomp$5$$) {
  $parts$jscomp$inline_400_publicPath$$ = $parts$jscomp$inline_400_publicPath$$.split(".");
  var $cur$jscomp$inline_401$$ = $goog$global$$;
  $parts$jscomp$inline_400_publicPath$$[0] in $cur$jscomp$inline_401$$ || !$cur$jscomp$inline_401$$.execScript || $cur$jscomp$inline_401$$.execScript("var " + $parts$jscomp$inline_400_publicPath$$[0]);
  for (var $part$jscomp$inline_402$$; $parts$jscomp$inline_400_publicPath$$.length && ($part$jscomp$inline_402$$ = $parts$jscomp$inline_400_publicPath$$.shift());) {
    !$parts$jscomp$inline_400_publicPath$$.length && $goog$isDef$$($object$jscomp$5$$) ? $cur$jscomp$inline_401$$[$part$jscomp$inline_402$$] = $object$jscomp$5$$ : $cur$jscomp$inline_401$$[$part$jscomp$inline_402$$] && $cur$jscomp$inline_401$$[$part$jscomp$inline_402$$] !== Object.prototype[$part$jscomp$inline_402$$] ? $cur$jscomp$inline_401$$ = $cur$jscomp$inline_401$$[$part$jscomp$inline_402$$] : $cur$jscomp$inline_401$$ = $cur$jscomp$inline_401$$[$part$jscomp$inline_402$$] = {};
  }
}, $goog$inherits$$ = function($childCtor$jscomp$1$$, $parentCtor$jscomp$1$$) {
  function $tempCtor$jscomp$1$$() {
  }
  $tempCtor$jscomp$1$$.prototype = $parentCtor$jscomp$1$$.prototype;
  $childCtor$jscomp$1$$.$superClass_$ = $parentCtor$jscomp$1$$.prototype;
  $childCtor$jscomp$1$$.prototype = new $tempCtor$jscomp$1$$;
  $childCtor$jscomp$1$$.prototype.constructor = $childCtor$jscomp$1$$;
  $childCtor$jscomp$1$$.$base$ = function($childCtor$jscomp$1$$, $tempCtor$jscomp$1$$, $var_args$jscomp$55$$) {
    for (var $me$$ = Array(arguments.length - 2), $methodName$$ = 2; $methodName$$ < arguments.length; $methodName$$++) {
      $me$$[$methodName$$ - 2] = arguments[$methodName$$];
    }
    return $parentCtor$jscomp$1$$.prototype[$tempCtor$jscomp$1$$].apply($childCtor$jscomp$1$$, $me$$);
  };
};
var chrome = chrome || window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var mojo = {};
var $module$contents$mr$Assertions_AssertionError$$ = function($message$jscomp$34$$) {
  var $$jscomp$tmp$error$$ = Error.call(this);
  this.message = $$jscomp$tmp$error$$.message;
  "stack" in $$jscomp$tmp$error$$ && (this.stack = $$jscomp$tmp$error$$.stack);
  this.name = "AssertionError";
  this.message = void 0 === $message$jscomp$34$$ ? "" : $message$jscomp$34$$;
  Error.captureStackTrace ? Error.captureStackTrace(this, $module$contents$mr$Assertions_AssertionError$$) : this.stack = Error().stack;
};
$$jscomp$inherits$$($module$contents$mr$Assertions_AssertionError$$, Error);
var $mr$Assertions$assert$$ = function($condition$jscomp$1$$, $message$jscomp$35$$) {
  if (!$condition$jscomp$1$$) {
    throw new $module$contents$mr$Assertions_AssertionError$$($message$jscomp$35$$);
  }
  return $condition$jscomp$1$$;
}, $mr$Assertions$assertString$$ = function($value$jscomp$96$$) {
  if ("string" !== typeof $value$jscomp$96$$) {
    throw new $module$contents$mr$Assertions_AssertionError$$;
  }
  return $value$jscomp$96$$;
}, $mr$Assertions$rejectNotImplemented$$ = function() {
  return Promise.reject(Error("Not implemented"));
};
var $mr$Logger$$ = function($name$jscomp$122$$) {
  this.$a$ = $name$jscomp$122$$;
}, $mr$Logger$getInstance$$ = function($name$jscomp$123$$) {
  var $instance$jscomp$1$$ = $mr$Logger$instances_$$.get($name$jscomp$123$$);
  $instance$jscomp$1$$ || ($instance$jscomp$1$$ = new $mr$Logger$$($name$jscomp$123$$), $mr$Logger$instances_$$.set($name$jscomp$123$$, $instance$jscomp$1$$));
  return $instance$jscomp$1$$;
}, $mr$Logger$logRecord$$ = function($record$$) {
  $record$$.level >= $mr$Logger$level$$ && $mr$Logger$handlers_$$.forEach(function($handler$jscomp$11$$) {
    return $handler$jscomp$11$$($record$$);
  });
};
$mr$Logger$$.prototype.log = function($level$jscomp$9$$, $message$jscomp$37$$, $exception$jscomp$1$$) {
  if (!($level$jscomp$9$$ < $mr$Logger$level$$)) {
    "function" == typeof $message$jscomp$37$$ && ($message$jscomp$37$$ = $message$jscomp$37$$());
    $mr$Assertions$assert$$("string" == typeof $message$jscomp$37$$, "Expected message to be a string.");
    var $record$jscomp$1$$ = {$logger$:this.$a$, level:$level$jscomp$9$$, time:Date.now(), message:$message$jscomp$37$$, $exception$:$exception$jscomp$1$$};
    $mr$Logger$handlers_$$.forEach(function($level$jscomp$9$$) {
      return $level$jscomp$9$$($record$jscomp$1$$);
    });
  }
};
$mr$Logger$$.prototype.error = function($message$jscomp$38$$, $exception$jscomp$2$$) {
  this.log(3, $message$jscomp$38$$, $exception$jscomp$2$$);
};
var $JSCompiler_StaticMethods_mr_Logger_prototype$warning$$ = function($JSCompiler_StaticMethods_mr_Logger_prototype$warning$self$$, $message$jscomp$39$$, $exception$jscomp$3$$) {
  $JSCompiler_StaticMethods_mr_Logger_prototype$warning$self$$.log(2, $message$jscomp$39$$, $exception$jscomp$3$$);
}, $JSCompiler_StaticMethods_mr_Logger_prototype$info$$ = function($JSCompiler_StaticMethods_mr_Logger_prototype$info$self$$, $message$jscomp$40$$) {
  $JSCompiler_StaticMethods_mr_Logger_prototype$info$self$$.log(1, $message$jscomp$40$$, void 0);
}, $JSCompiler_StaticMethods_mr_Logger_prototype$fine$$ = function($JSCompiler_StaticMethods_mr_Logger_prototype$fine$self$$, $message$jscomp$41$$, $exception$jscomp$5$$) {
  $JSCompiler_StaticMethods_mr_Logger_prototype$fine$self$$.log(0, $message$jscomp$41$$, $exception$jscomp$5$$);
}, $mr$Logger$stringToLevel$$ = function($index$jscomp$49_levelName$$) {
  $index$jscomp$49_levelName$$ = $mr$Logger$LEVEL_NAMES_$$.indexOf($index$jscomp$49_levelName$$);
  return -1 == $index$jscomp$49_levelName$$ ? 0 : $index$jscomp$49_levelName$$;
}, $mr$Logger$numberToLevel$$ = function($levelValue$$) {
  return 600 >= $levelValue$$ ? 0 : 850 >= $levelValue$$ ? 1 : 950 >= $levelValue$$ ? 2 : 3;
}, $mr$Logger$handlers_$$ = [], $mr$Logger$instances_$$ = new Map, $mr$Logger$LEVEL_NAMES_$$ = ["FINE", "INFO", "WARNING", "SEVERE"], $mr$Logger$level$$ = 1;
var $mr$PromiseResolver$$ = function() {
  var $$jscomp$this$$ = this;
  this.$a$ = new Promise(function($resolve$$, $reject$$) {
    $$jscomp$this$$.$f$ = $resolve$$;
    $$jscomp$this$$.$b$ = $reject$$;
  });
};
$mr$PromiseResolver$$.prototype.resolve = function($value$jscomp$97$$) {
  this.$f$($value$jscomp$97$$);
};
$mr$PromiseResolver$$.prototype.reject = function($reason$jscomp$5$$) {
  this.$b$($reason$jscomp$5$$);
};
var $goog$string$caseInsensitiveEquals$$ = function($str1$$, $str2$$) {
  return $str1$$.toLowerCase() == $str2$$.toLowerCase();
}, $goog$string$subs$$ = function($str$jscomp$16$$, $var_args$jscomp$57$$) {
  for (var $splitParts$$ = $str$jscomp$16$$.split("%s"), $returnString$$ = "", $subsArguments$$ = Array.prototype.slice.call(arguments, 1); $subsArguments$$.length && 1 < $splitParts$$.length;) {
    $returnString$$ += $splitParts$$.shift() + $subsArguments$$.shift();
  }
  return $returnString$$ + $splitParts$$.join("%s");
}, $goog$string$isEmptyOrWhitespace$$ = function($str$jscomp$18$$) {
  return /^[\s\xa0]*$/.test($str$jscomp$18$$);
}, $goog$string$trim$$ = String.prototype.trim ? function($str$jscomp$30$$) {
  return $str$jscomp$30$$.trim();
} : function($str$jscomp$31$$) {
  return $str$jscomp$31$$.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}, $goog$string$AMP_RE_$$ = /&/g, $goog$string$LT_RE_$$ = /</g, $goog$string$GT_RE_$$ = />/g, $goog$string$QUOT_RE_$$ = /"/g, $goog$string$SINGLE_QUOTE_RE_$$ = /'/g, $goog$string$NULL_RE_$$ = /\x00/g, $goog$string$ALL_RE_$$ = /[\x00&<>"']/, $goog$string$repeat$$ = String.prototype.repeat ? function($string$jscomp$3$$, $length$jscomp$16$$) {
  return $string$jscomp$3$$.repeat($length$jscomp$16$$);
} : function($string$jscomp$4$$, $length$jscomp$17$$) {
  return Array($length$jscomp$17$$ + 1).join($string$jscomp$4$$);
}, $goog$string$padNumber$$ = function($num$jscomp$5_s$jscomp$13$$, $length$jscomp$18$$) {
  $num$jscomp$5_s$jscomp$13$$ = $goog$isDef$$(void 0) ? $num$jscomp$5_s$jscomp$13$$.toFixed(void 0) : String($num$jscomp$5_s$jscomp$13$$);
  var $index$jscomp$51$$ = $num$jscomp$5_s$jscomp$13$$.indexOf(".");
  -1 == $index$jscomp$51$$ && ($index$jscomp$51$$ = $num$jscomp$5_s$jscomp$13$$.length);
  return $goog$string$repeat$$("0", Math.max(0, $length$jscomp$18$$ - $index$jscomp$51$$)) + $num$jscomp$5_s$jscomp$13$$;
}, $goog$string$makeSafe$$ = function($obj$jscomp$33$$) {
  return null == $obj$jscomp$33$$ ? "" : String($obj$jscomp$33$$);
}, $goog$string$buildString$$ = function($var_args$jscomp$58$$) {
  return Array.prototype.join.call(arguments, "");
}, $goog$string$getRandomString$$ = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ $goog$now$$()).toString(36);
}, $goog$string$compareVersions$$ = function($v1Subs_version1$$, $v2Subs_version2$$) {
  var $order$$ = 0;
  $v1Subs_version1$$ = $goog$string$trim$$(String($v1Subs_version1$$)).split(".");
  $v2Subs_version2$$ = $goog$string$trim$$(String($v2Subs_version2$$)).split(".");
  for (var $subCount$$ = Math.max($v1Subs_version1$$.length, $v2Subs_version2$$.length), $subIdx$$ = 0; 0 == $order$$ && $subIdx$$ < $subCount$$; $subIdx$$++) {
    var $v1Comp_v1Sub$$ = $v1Subs_version1$$[$subIdx$$] || "", $v2Comp_v2Sub$$ = $v2Subs_version2$$[$subIdx$$] || "";
    do {
      $v1Comp_v1Sub$$ = /(\d*)(\D*)(.*)/.exec($v1Comp_v1Sub$$) || ["", "", "", ""];
      $v2Comp_v2Sub$$ = /(\d*)(\D*)(.*)/.exec($v2Comp_v2Sub$$) || ["", "", "", ""];
      if (0 == $v1Comp_v1Sub$$[0].length && 0 == $v2Comp_v2Sub$$[0].length) {
        break;
      }
      $order$$ = $goog$string$compareElements_$$(0 == $v1Comp_v1Sub$$[1].length ? 0 : parseInt($v1Comp_v1Sub$$[1], 10), 0 == $v2Comp_v2Sub$$[1].length ? 0 : parseInt($v2Comp_v2Sub$$[1], 10)) || $goog$string$compareElements_$$(0 == $v1Comp_v1Sub$$[2].length, 0 == $v2Comp_v2Sub$$[2].length) || $goog$string$compareElements_$$($v1Comp_v1Sub$$[2], $v2Comp_v2Sub$$[2]);
      $v1Comp_v1Sub$$ = $v1Comp_v1Sub$$[3];
      $v2Comp_v2Sub$$ = $v2Comp_v2Sub$$[3];
    } while (0 == $order$$);
  }
  return $order$$;
}, $goog$string$compareElements_$$ = function($left$jscomp$3$$, $right$jscomp$2$$) {
  return $left$jscomp$3$$ < $right$jscomp$2$$ ? -1 : $left$jscomp$3$$ > $right$jscomp$2$$ ? 1 : 0;
}, $goog$string$splitLimit$$ = function($parts$jscomp$3_str$jscomp$59$$, $separator$$, $limit$jscomp$1$$) {
  $parts$jscomp$3_str$jscomp$59$$ = $parts$jscomp$3_str$jscomp$59$$.split($separator$$);
  for (var $returnVal$$ = []; 0 < $limit$jscomp$1$$ && $parts$jscomp$3_str$jscomp$59$$.length;) {
    $returnVal$$.push($parts$jscomp$3_str$jscomp$59$$.shift()), $limit$jscomp$1$$--;
  }
  $parts$jscomp$3_str$jscomp$59$$.length && $returnVal$$.push($parts$jscomp$3_str$jscomp$59$$.join($separator$$));
  return $returnVal$$;
};
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
var $goog$dom$defaultDomHelper_$$;
var $goog$asserts$AssertionError$$ = function($messagePattern$$, $messageArgs$$) {
  $messageArgs$$.unshift($messagePattern$$);
  $goog$debug$Error$$.call(this, $goog$string$subs$$.apply(null, $messageArgs$$));
  $messageArgs$$.shift();
};
$goog$inherits$$($goog$asserts$AssertionError$$, $goog$debug$Error$$);
$goog$asserts$AssertionError$$.prototype.name = "AssertionError";
var $goog$asserts$doAssertFailure_$$ = function($defaultMessage$$, $defaultArgs$$, $givenMessage$$, $givenArgs$$) {
  var $message$jscomp$42$$ = "Assertion failed";
  if ($givenMessage$$) {
    $message$jscomp$42$$ += ": " + $givenMessage$$;
    var $args$jscomp$6$$ = $givenArgs$$;
  } else {
    $defaultMessage$$ && ($message$jscomp$42$$ += ": " + $defaultMessage$$, $args$jscomp$6$$ = $defaultArgs$$);
  }
  throw new $goog$asserts$AssertionError$$("" + $message$jscomp$42$$, $args$jscomp$6$$ || []);
}, $goog$asserts$assert$$ = function($condition$jscomp$2$$, $opt_message$jscomp$9$$, $var_args$jscomp$59$$) {
  $condition$jscomp$2$$ || $goog$asserts$doAssertFailure_$$("", null, $opt_message$jscomp$9$$, Array.prototype.slice.call(arguments, 2));
  return $condition$jscomp$2$$;
}, $goog$asserts$fail$$ = function($opt_message$jscomp$10$$, $var_args$jscomp$60$$) {
  throw new $goog$asserts$AssertionError$$("Failure" + ($opt_message$jscomp$10$$ ? ": " + $opt_message$jscomp$10$$ : ""), Array.prototype.slice.call(arguments, 1));
}, $goog$asserts$assertNumber$$ = function($value$jscomp$100$$, $opt_message$jscomp$11$$, $var_args$jscomp$61$$) {
  $goog$isNumber$$($value$jscomp$100$$) || $goog$asserts$doAssertFailure_$$("Expected number but got %s: %s.", [$goog$typeOf$$($value$jscomp$100$$), $value$jscomp$100$$], $opt_message$jscomp$11$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$100$$;
}, $goog$asserts$assertString$$ = function($value$jscomp$101$$, $opt_message$jscomp$12$$, $var_args$jscomp$62$$) {
  $goog$isString$$($value$jscomp$101$$) || $goog$asserts$doAssertFailure_$$("Expected string but got %s: %s.", [$goog$typeOf$$($value$jscomp$101$$), $value$jscomp$101$$], $opt_message$jscomp$12$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$101$$;
}, $goog$asserts$assertFunction$$ = function($value$jscomp$102$$, $opt_message$jscomp$13$$, $var_args$jscomp$63$$) {
  $goog$isFunction$$($value$jscomp$102$$) || $goog$asserts$doAssertFailure_$$("Expected function but got %s: %s.", [$goog$typeOf$$($value$jscomp$102$$), $value$jscomp$102$$], $opt_message$jscomp$13$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$102$$;
}, $goog$asserts$assertObject$$ = function($value$jscomp$103$$, $opt_message$jscomp$14$$, $var_args$jscomp$64$$) {
  $goog$isObject$$($value$jscomp$103$$) || $goog$asserts$doAssertFailure_$$("Expected object but got %s: %s.", [$goog$typeOf$$($value$jscomp$103$$), $value$jscomp$103$$], $opt_message$jscomp$14$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$103$$;
}, $goog$asserts$assertArray$$ = function($value$jscomp$104$$, $opt_message$jscomp$15$$, $var_args$jscomp$65$$) {
  $goog$isArray$$($value$jscomp$104$$) || $goog$asserts$doAssertFailure_$$("Expected array but got %s: %s.", [$goog$typeOf$$($value$jscomp$104$$), $value$jscomp$104$$], $opt_message$jscomp$15$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$104$$;
}, $goog$asserts$assertInstanceof$$ = function($value$jscomp$107$$, $type$jscomp$121$$, $opt_message$jscomp$18$$, $var_args$jscomp$68$$) {
  $value$jscomp$107$$ instanceof $type$jscomp$121$$ || $goog$asserts$doAssertFailure_$$("Expected instanceof %s but got %s.", [$goog$asserts$getType_$$($type$jscomp$121$$), $goog$asserts$getType_$$($value$jscomp$107$$)], $opt_message$jscomp$18$$, Array.prototype.slice.call(arguments, 3));
  return $value$jscomp$107$$;
}, $goog$asserts$getType_$$ = function($value$jscomp$108$$) {
  return $value$jscomp$108$$ instanceof Function ? $value$jscomp$108$$.displayName || $value$jscomp$108$$.name || "unknown type name" : $value$jscomp$108$$ instanceof Object ? $value$jscomp$108$$.constructor.displayName || $value$jscomp$108$$.constructor.name || Object.prototype.toString.call($value$jscomp$108$$) : null === $value$jscomp$108$$ ? "null" : typeof $value$jscomp$108$$;
};
var $goog$array$peek$$ = function($array$jscomp$6$$) {
  return $array$jscomp$6$$[$array$jscomp$6$$.length - 1];
}, $goog$array$indexOf$$ = Array.prototype.indexOf ? function($arr$jscomp$9$$, $obj$jscomp$34$$, $opt_fromIndex$jscomp$10$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$9$$.length);
  return Array.prototype.indexOf.call($arr$jscomp$9$$, $obj$jscomp$34$$, $opt_fromIndex$jscomp$10$$);
} : function($arr$jscomp$10$$, $obj$jscomp$35$$, $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$) {
  $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$ = null == $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$ ? 0 : 0 > $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$ ? Math.max(0, $arr$jscomp$10$$.length + $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$) : $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$;
  if ($goog$isString$$($arr$jscomp$10$$)) {
    return $goog$isString$$($obj$jscomp$35$$) && 1 == $obj$jscomp$35$$.length ? $arr$jscomp$10$$.indexOf($obj$jscomp$35$$, $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$) : -1;
  }
  for (; $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$ < $arr$jscomp$10$$.length; $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$++) {
    if ($fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$ in $arr$jscomp$10$$ && $arr$jscomp$10$$[$fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$] === $obj$jscomp$35$$) {
      return $fromIndex_i$jscomp$20_opt_fromIndex$jscomp$11$$;
    }
  }
  return -1;
}, $goog$array$forEach$$ = Array.prototype.forEach ? function($arr$jscomp$13$$, $f$jscomp$1$$, $opt_obj$jscomp$3$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$13$$.length);
  Array.prototype.forEach.call($arr$jscomp$13$$, $f$jscomp$1$$, $opt_obj$jscomp$3$$);
} : function($arr$jscomp$14$$, $f$jscomp$2$$, $opt_obj$jscomp$4$$) {
  for (var $l$jscomp$2$$ = $arr$jscomp$14$$.length, $arr2$$ = $goog$isString$$($arr$jscomp$14$$) ? $arr$jscomp$14$$.split("") : $arr$jscomp$14$$, $i$jscomp$22$$ = 0; $i$jscomp$22$$ < $l$jscomp$2$$; $i$jscomp$22$$++) {
    $i$jscomp$22$$ in $arr2$$ && $f$jscomp$2$$.call($opt_obj$jscomp$4$$, $arr2$$[$i$jscomp$22$$], $i$jscomp$22$$, $arr$jscomp$14$$);
  }
}, $goog$array$forEachRight$$ = function($arr$jscomp$15$$, $f$jscomp$3$$) {
  for (var $arr2$jscomp$1$$ = $goog$isString$$($arr$jscomp$15$$) ? $arr$jscomp$15$$.split("") : $arr$jscomp$15$$, $i$jscomp$23$$ = $arr$jscomp$15$$.length - 1; 0 <= $i$jscomp$23$$; --$i$jscomp$23$$) {
    $i$jscomp$23$$ in $arr2$jscomp$1$$ && $f$jscomp$3$$.call(void 0, $arr2$jscomp$1$$[$i$jscomp$23$$], $i$jscomp$23$$, $arr$jscomp$15$$);
  }
}, $goog$array$filter$$ = Array.prototype.filter ? function($arr$jscomp$16$$, $f$jscomp$4$$, $opt_obj$jscomp$6$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$16$$.length);
  return Array.prototype.filter.call($arr$jscomp$16$$, $f$jscomp$4$$, $opt_obj$jscomp$6$$);
} : function($arr$jscomp$17$$, $f$jscomp$5$$, $opt_obj$jscomp$7$$) {
  for (var $l$jscomp$4$$ = $arr$jscomp$17$$.length, $res$$ = [], $resLength$$ = 0, $arr2$jscomp$2$$ = $goog$isString$$($arr$jscomp$17$$) ? $arr$jscomp$17$$.split("") : $arr$jscomp$17$$, $i$jscomp$24$$ = 0; $i$jscomp$24$$ < $l$jscomp$4$$; $i$jscomp$24$$++) {
    if ($i$jscomp$24$$ in $arr2$jscomp$2$$) {
      var $val$jscomp$12$$ = $arr2$jscomp$2$$[$i$jscomp$24$$];
      $f$jscomp$5$$.call($opt_obj$jscomp$7$$, $val$jscomp$12$$, $i$jscomp$24$$, $arr$jscomp$17$$) && ($res$$[$resLength$$++] = $val$jscomp$12$$);
    }
  }
  return $res$$;
}, $goog$array$map$$ = Array.prototype.map ? function($arr$jscomp$18$$, $f$jscomp$6$$, $opt_obj$jscomp$8$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$18$$.length);
  return Array.prototype.map.call($arr$jscomp$18$$, $f$jscomp$6$$, $opt_obj$jscomp$8$$);
} : function($arr$jscomp$19$$, $f$jscomp$7$$, $opt_obj$jscomp$9$$) {
  for (var $l$jscomp$5$$ = $arr$jscomp$19$$.length, $res$jscomp$1$$ = Array($l$jscomp$5$$), $arr2$jscomp$3$$ = $goog$isString$$($arr$jscomp$19$$) ? $arr$jscomp$19$$.split("") : $arr$jscomp$19$$, $i$jscomp$25$$ = 0; $i$jscomp$25$$ < $l$jscomp$5$$; $i$jscomp$25$$++) {
    $i$jscomp$25$$ in $arr2$jscomp$3$$ && ($res$jscomp$1$$[$i$jscomp$25$$] = $f$jscomp$7$$.call($opt_obj$jscomp$9$$, $arr2$jscomp$3$$[$i$jscomp$25$$], $i$jscomp$25$$, $arr$jscomp$19$$));
  }
  return $res$jscomp$1$$;
}, $goog$array$reduce$$ = Array.prototype.reduce ? function($arr$jscomp$20$$, $f$jscomp$8$$, $val$jscomp$13$$, $opt_obj$jscomp$10$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$20$$.length);
  $opt_obj$jscomp$10$$ && ($f$jscomp$8$$ = $goog$bind$$($f$jscomp$8$$, $opt_obj$jscomp$10$$));
  return Array.prototype.reduce.call($arr$jscomp$20$$, $f$jscomp$8$$, $val$jscomp$13$$);
} : function($arr$jscomp$21$$, $f$jscomp$9$$, $val$jscomp$14$$, $opt_obj$jscomp$11$$) {
  var $rval$$ = $val$jscomp$14$$;
  $goog$array$forEach$$($arr$jscomp$21$$, function($val$jscomp$14$$, $index$jscomp$52$$) {
    $rval$$ = $f$jscomp$9$$.call($opt_obj$jscomp$11$$, $rval$$, $val$jscomp$14$$, $index$jscomp$52$$, $arr$jscomp$21$$);
  });
  return $rval$$;
}, $goog$array$some$$ = Array.prototype.some ? function($arr$jscomp$24$$, $f$jscomp$12$$, $opt_obj$jscomp$14$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$24$$.length);
  return Array.prototype.some.call($arr$jscomp$24$$, $f$jscomp$12$$, $opt_obj$jscomp$14$$);
} : function($arr$jscomp$25$$, $f$jscomp$13$$, $opt_obj$jscomp$15$$) {
  for (var $l$jscomp$6$$ = $arr$jscomp$25$$.length, $arr2$jscomp$4$$ = $goog$isString$$($arr$jscomp$25$$) ? $arr$jscomp$25$$.split("") : $arr$jscomp$25$$, $i$jscomp$26$$ = 0; $i$jscomp$26$$ < $l$jscomp$6$$; $i$jscomp$26$$++) {
    if ($i$jscomp$26$$ in $arr2$jscomp$4$$ && $f$jscomp$13$$.call($opt_obj$jscomp$15$$, $arr2$jscomp$4$$[$i$jscomp$26$$], $i$jscomp$26$$, $arr$jscomp$25$$)) {
      return !0;
    }
  }
  return !1;
}, $goog$array$every$$ = Array.prototype.every ? function($arr$jscomp$26$$, $f$jscomp$14$$, $opt_obj$jscomp$16$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$26$$.length);
  return Array.prototype.every.call($arr$jscomp$26$$, $f$jscomp$14$$, $opt_obj$jscomp$16$$);
} : function($arr$jscomp$27$$, $f$jscomp$15$$, $opt_obj$jscomp$17$$) {
  for (var $l$jscomp$7$$ = $arr$jscomp$27$$.length, $arr2$jscomp$5$$ = $goog$isString$$($arr$jscomp$27$$) ? $arr$jscomp$27$$.split("") : $arr$jscomp$27$$, $i$jscomp$27$$ = 0; $i$jscomp$27$$ < $l$jscomp$7$$; $i$jscomp$27$$++) {
    if ($i$jscomp$27$$ in $arr2$jscomp$5$$ && !$f$jscomp$15$$.call($opt_obj$jscomp$17$$, $arr2$jscomp$5$$[$i$jscomp$27$$], $i$jscomp$27$$, $arr$jscomp$27$$)) {
      return !1;
    }
  }
  return !0;
}, $goog$array$find$$ = function($arr$jscomp$30$$, $f$jscomp$17_i$jscomp$28$$, $opt_obj$jscomp$19$$) {
  $f$jscomp$17_i$jscomp$28$$ = $goog$array$findIndex$$($arr$jscomp$30$$, $f$jscomp$17_i$jscomp$28$$, $opt_obj$jscomp$19$$);
  return 0 > $f$jscomp$17_i$jscomp$28$$ ? null : $goog$isString$$($arr$jscomp$30$$) ? $arr$jscomp$30$$.charAt($f$jscomp$17_i$jscomp$28$$) : $arr$jscomp$30$$[$f$jscomp$17_i$jscomp$28$$];
}, $goog$array$findIndex$$ = function($arr$jscomp$31$$, $f$jscomp$18$$, $opt_obj$jscomp$20$$) {
  for (var $l$jscomp$8$$ = $arr$jscomp$31$$.length, $arr2$jscomp$6$$ = $goog$isString$$($arr$jscomp$31$$) ? $arr$jscomp$31$$.split("") : $arr$jscomp$31$$, $i$jscomp$29$$ = 0; $i$jscomp$29$$ < $l$jscomp$8$$; $i$jscomp$29$$++) {
    if ($i$jscomp$29$$ in $arr2$jscomp$6$$ && $f$jscomp$18$$.call($opt_obj$jscomp$20$$, $arr2$jscomp$6$$[$i$jscomp$29$$], $i$jscomp$29$$, $arr$jscomp$31$$)) {
      return $i$jscomp$29$$;
    }
  }
  return -1;
}, $goog$array$findRight$$ = function($arr$jscomp$32$$, $f$jscomp$19_i$jscomp$30$$, $opt_obj$jscomp$21$$) {
  a: {
    for (var $arr2$jscomp$inline_411$$ = $goog$isString$$($arr$jscomp$32$$) ? $arr$jscomp$32$$.split("") : $arr$jscomp$32$$, $i$jscomp$inline_412$$ = $arr$jscomp$32$$.length - 1; 0 <= $i$jscomp$inline_412$$; $i$jscomp$inline_412$$--) {
      if ($i$jscomp$inline_412$$ in $arr2$jscomp$inline_411$$ && $f$jscomp$19_i$jscomp$30$$.call($opt_obj$jscomp$21$$, $arr2$jscomp$inline_411$$[$i$jscomp$inline_412$$], $i$jscomp$inline_412$$, $arr$jscomp$32$$)) {
        $f$jscomp$19_i$jscomp$30$$ = $i$jscomp$inline_412$$;
        break a;
      }
    }
    $f$jscomp$19_i$jscomp$30$$ = -1;
  }
  return 0 > $f$jscomp$19_i$jscomp$30$$ ? null : $goog$isString$$($arr$jscomp$32$$) ? $arr$jscomp$32$$.charAt($f$jscomp$19_i$jscomp$30$$) : $arr$jscomp$32$$[$f$jscomp$19_i$jscomp$30$$];
}, $goog$array$contains$$ = function($arr$jscomp$34$$, $obj$jscomp$38$$) {
  return 0 <= $goog$array$indexOf$$($arr$jscomp$34$$, $obj$jscomp$38$$);
}, $goog$array$isEmpty$$ = function($arr$jscomp$35$$) {
  return 0 == $arr$jscomp$35$$.length;
}, $goog$array$clear$$ = function($arr$jscomp$36$$) {
  if (!$goog$isArray$$($arr$jscomp$36$$)) {
    for (var $i$jscomp$32$$ = $arr$jscomp$36$$.length - 1; 0 <= $i$jscomp$32$$; $i$jscomp$32$$--) {
      delete $arr$jscomp$36$$[$i$jscomp$32$$];
    }
  }
  $arr$jscomp$36$$.length = 0;
}, $goog$array$insert$$ = function($arr$jscomp$37$$, $obj$jscomp$39$$) {
  $goog$array$contains$$($arr$jscomp$37$$, $obj$jscomp$39$$) || $arr$jscomp$37$$.push($obj$jscomp$39$$);
}, $goog$array$insertBefore$$ = function($arr$jscomp$40$$, $obj$jscomp$41$$, $opt_obj2$$) {
  var $i$jscomp$33$$;
  2 == arguments.length || 0 > ($i$jscomp$33$$ = $goog$array$indexOf$$($arr$jscomp$40$$, $opt_obj2$$)) ? $arr$jscomp$40$$.push($obj$jscomp$41$$) : $goog$array$splice$$($arr$jscomp$40$$, $i$jscomp$33$$, 0, $obj$jscomp$41$$);
}, $goog$array$remove$$ = function($arr$jscomp$41$$, $i$jscomp$34_obj$jscomp$42$$) {
  $i$jscomp$34_obj$jscomp$42$$ = $goog$array$indexOf$$($arr$jscomp$41$$, $i$jscomp$34_obj$jscomp$42$$);
  var $rv$jscomp$1$$;
  ($rv$jscomp$1$$ = 0 <= $i$jscomp$34_obj$jscomp$42$$) && $goog$array$removeAt$$($arr$jscomp$41$$, $i$jscomp$34_obj$jscomp$42$$);
  return $rv$jscomp$1$$;
}, $goog$array$removeAt$$ = function($arr$jscomp$43$$, $i$jscomp$36$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$43$$.length);
  return 1 == Array.prototype.splice.call($arr$jscomp$43$$, $i$jscomp$36$$, 1).length;
}, $goog$array$removeIf$$ = function($arr$jscomp$44$$, $f$jscomp$21_i$jscomp$37$$, $opt_obj$jscomp$23$$) {
  $f$jscomp$21_i$jscomp$37$$ = $goog$array$findIndex$$($arr$jscomp$44$$, $f$jscomp$21_i$jscomp$37$$, $opt_obj$jscomp$23$$);
  return 0 <= $f$jscomp$21_i$jscomp$37$$ ? ($goog$array$removeAt$$($arr$jscomp$44$$, $f$jscomp$21_i$jscomp$37$$), !0) : !1;
}, $goog$array$removeAllIf$$ = function($arr$jscomp$45$$, $f$jscomp$22$$) {
  var $removedCount$$ = 0;
  $goog$array$forEachRight$$($arr$jscomp$45$$, function($val$jscomp$19$$, $index$jscomp$55$$) {
    $f$jscomp$22$$.call(void 0, $val$jscomp$19$$, $index$jscomp$55$$, $arr$jscomp$45$$) && $goog$array$removeAt$$($arr$jscomp$45$$, $index$jscomp$55$$) && $removedCount$$++;
  });
}, $goog$array$concat$$ = function($var_args$jscomp$69$$) {
  return Array.prototype.concat.apply([], arguments);
}, $goog$array$join$$ = function($var_args$jscomp$70$$) {
  return Array.prototype.concat.apply([], arguments);
}, $goog$array$toArray$$ = function($object$jscomp$7$$) {
  var $length$jscomp$19$$ = $object$jscomp$7$$.length;
  if (0 < $length$jscomp$19$$) {
    for (var $rv$jscomp$2$$ = Array($length$jscomp$19$$), $i$jscomp$38$$ = 0; $i$jscomp$38$$ < $length$jscomp$19$$; $i$jscomp$38$$++) {
      $rv$jscomp$2$$[$i$jscomp$38$$] = $object$jscomp$7$$[$i$jscomp$38$$];
    }
    return $rv$jscomp$2$$;
  }
  return [];
}, $goog$array$extend$$ = function($arr1$$, $var_args$jscomp$71$$) {
  for (var $i$jscomp$39$$ = 1; $i$jscomp$39$$ < arguments.length; $i$jscomp$39$$++) {
    var $arr2$jscomp$8$$ = arguments[$i$jscomp$39$$];
    if ($goog$isArrayLike$$($arr2$jscomp$8$$)) {
      var $len1$$ = $arr1$$.length || 0, $len2$$ = $arr2$jscomp$8$$.length || 0;
      $arr1$$.length = $len1$$ + $len2$$;
      for (var $j$jscomp$2$$ = 0; $j$jscomp$2$$ < $len2$$; $j$jscomp$2$$++) {
        $arr1$$[$len1$$ + $j$jscomp$2$$] = $arr2$jscomp$8$$[$j$jscomp$2$$];
      }
    } else {
      $arr1$$.push($arr2$jscomp$8$$);
    }
  }
}, $goog$array$splice$$ = function($arr$jscomp$46$$, $index$jscomp$56$$, $howMany$$, $var_args$jscomp$72$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$46$$.length);
  Array.prototype.splice.apply($arr$jscomp$46$$, $goog$array$slice$$(arguments, 1));
}, $goog$array$slice$$ = function($arr$jscomp$47$$, $start$jscomp$9$$, $opt_end$jscomp$10$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$47$$.length);
  return 2 >= arguments.length ? Array.prototype.slice.call($arr$jscomp$47$$, $start$jscomp$9$$) : Array.prototype.slice.call($arr$jscomp$47$$, $start$jscomp$9$$, $opt_end$jscomp$10$$);
}, $goog$array$removeDuplicates$$ = function($arr$jscomp$48$$, $opt_rv_returnArray$$) {
  $opt_rv_returnArray$$ = $opt_rv_returnArray$$ || $arr$jscomp$48$$;
  for (var $seen$jscomp$1$$ = {}, $cursorInsert$$ = 0, $cursorRead$$ = 0; $cursorRead$$ < $arr$jscomp$48$$.length;) {
    var $current$$ = $arr$jscomp$48$$[$cursorRead$$++];
    var $item$jscomp$inline_5147_key$jscomp$44$$ = $current$$;
    $item$jscomp$inline_5147_key$jscomp$44$$ = $goog$isObject$$($item$jscomp$inline_5147_key$jscomp$44$$) ? "o" + ($item$jscomp$inline_5147_key$jscomp$44$$[$goog$UID_PROPERTY_$$] || ($item$jscomp$inline_5147_key$jscomp$44$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$)) : (typeof $item$jscomp$inline_5147_key$jscomp$44$$).charAt(0) + $item$jscomp$inline_5147_key$jscomp$44$$;
    Object.prototype.hasOwnProperty.call($seen$jscomp$1$$, $item$jscomp$inline_5147_key$jscomp$44$$) || ($seen$jscomp$1$$[$item$jscomp$inline_5147_key$jscomp$44$$] = !0, $opt_rv_returnArray$$[$cursorInsert$$++] = $current$$);
  }
  $opt_rv_returnArray$$.length = $cursorInsert$$;
}, $goog$array$sort$$ = function($arr$jscomp$52$$, $opt_compareFn$jscomp$1$$) {
  $arr$jscomp$52$$.sort($opt_compareFn$jscomp$1$$ || $goog$array$defaultCompare$$);
}, $goog$array$sortByKey$$ = function($arr$jscomp$54$$, $keyFn$$) {
  var $keyCompareFn$$ = $goog$array$defaultCompare$$;
  $goog$array$sort$$($arr$jscomp$54$$, function($arr$jscomp$54$$, $b$jscomp$4$$) {
    return $keyCompareFn$$($keyFn$$($arr$jscomp$54$$), $keyFn$$($b$jscomp$4$$));
  });
}, $goog$array$sortObjectsByKey$$ = function($arr$jscomp$55$$) {
  $goog$array$sortByKey$$($arr$jscomp$55$$, function($arr$jscomp$55$$) {
    return $arr$jscomp$55$$.t;
  });
}, $goog$array$equals$$ = function($arr1$jscomp$1$$, $arr2$jscomp$9$$, $equalsFn_opt_equalsFn$$) {
  if (!$goog$isArrayLike$$($arr1$jscomp$1$$) || !$goog$isArrayLike$$($arr2$jscomp$9$$) || $arr1$jscomp$1$$.length != $arr2$jscomp$9$$.length) {
    return !1;
  }
  var $l$jscomp$10$$ = $arr1$jscomp$1$$.length;
  $equalsFn_opt_equalsFn$$ = $equalsFn_opt_equalsFn$$ || $goog$array$defaultCompareEquality$$;
  for (var $i$jscomp$42$$ = 0; $i$jscomp$42$$ < $l$jscomp$10$$; $i$jscomp$42$$++) {
    if (!$equalsFn_opt_equalsFn$$($arr1$jscomp$1$$[$i$jscomp$42$$], $arr2$jscomp$9$$[$i$jscomp$42$$])) {
      return !1;
    }
  }
  return !0;
}, $goog$array$defaultCompare$$ = function($a$jscomp$6$$, $b$jscomp$5$$) {
  return $a$jscomp$6$$ > $b$jscomp$5$$ ? 1 : $a$jscomp$6$$ < $b$jscomp$5$$ ? -1 : 0;
}, $goog$array$defaultCompareEquality$$ = function($a$jscomp$8$$, $b$jscomp$7$$) {
  return $a$jscomp$8$$ === $b$jscomp$7$$;
}, $goog$array$toObject$$ = function($arr$jscomp$57$$, $keyFunc$$, $opt_obj$jscomp$27$$) {
  var $ret$$ = {};
  $goog$array$forEach$$($arr$jscomp$57$$, function($element$jscomp$24$$, $index$jscomp$59$$) {
    $ret$$[$keyFunc$$.call($opt_obj$jscomp$27$$, $element$jscomp$24$$, $index$jscomp$59$$, $arr$jscomp$57$$)] = $element$jscomp$24$$;
  });
  return $ret$$;
};
var $goog$object$forEach$$ = function($obj$jscomp$45$$, $f$jscomp$24$$, $opt_obj$jscomp$29$$) {
  for (var $key$jscomp$47$$ in $obj$jscomp$45$$) {
    $f$jscomp$24$$.call($opt_obj$jscomp$29$$, $obj$jscomp$45$$[$key$jscomp$47$$], $key$jscomp$47$$, $obj$jscomp$45$$);
  }
}, $goog$object$some$$ = function($obj$jscomp$48$$, $f$jscomp$27$$) {
  for (var $key$jscomp$50$$ in $obj$jscomp$48$$) {
    if ($f$jscomp$27$$.call(void 0, $obj$jscomp$48$$[$key$jscomp$50$$], $key$jscomp$50$$, $obj$jscomp$48$$)) {
      return !0;
    }
  }
  return !1;
}, $goog$object$getCount$$ = function($obj$jscomp$50$$) {
  var $rv$jscomp$3$$ = 0, $key$jscomp$52$$;
  for ($key$jscomp$52$$ in $obj$jscomp$50$$) {
    $rv$jscomp$3$$++;
  }
  return $rv$jscomp$3$$;
}, $goog$object$getValues$$ = function($obj$jscomp$54$$) {
  var $res$jscomp$4$$ = [], $i$jscomp$50$$ = 0, $key$jscomp$55$$;
  for ($key$jscomp$55$$ in $obj$jscomp$54$$) {
    $res$jscomp$4$$[$i$jscomp$50$$++] = $obj$jscomp$54$$[$key$jscomp$55$$];
  }
  return $res$jscomp$4$$;
}, $goog$object$getKeys$$ = function($obj$jscomp$55$$) {
  var $res$jscomp$5$$ = [], $i$jscomp$51$$ = 0, $key$jscomp$56$$;
  for ($key$jscomp$56$$ in $obj$jscomp$55$$) {
    $res$jscomp$5$$[$i$jscomp$51$$++] = $key$jscomp$56$$;
  }
  return $res$jscomp$5$$;
}, $goog$object$containsValue$$ = function($obj$jscomp$58$$, $val$jscomp$21$$) {
  for (var $key$jscomp$58$$ in $obj$jscomp$58$$) {
    if ($obj$jscomp$58$$[$key$jscomp$58$$] == $val$jscomp$21$$) {
      return !0;
    }
  }
  return !1;
}, $goog$object$findValue$$ = function($obj$jscomp$60$$, $f$jscomp$30_key$jscomp$60$$, $opt_this$jscomp$13$$) {
  a: {
    for (var $key$jscomp$inline_421$$ in $obj$jscomp$60$$) {
      if ($f$jscomp$30_key$jscomp$60$$.call($opt_this$jscomp$13$$, $obj$jscomp$60$$[$key$jscomp$inline_421$$], $key$jscomp$inline_421$$, $obj$jscomp$60$$)) {
        $f$jscomp$30_key$jscomp$60$$ = $key$jscomp$inline_421$$;
        break a;
      }
    }
    $f$jscomp$30_key$jscomp$60$$ = void 0;
  }
  return $f$jscomp$30_key$jscomp$60$$ && $obj$jscomp$60$$[$f$jscomp$30_key$jscomp$60$$];
}, $goog$object$isEmpty$$ = function($obj$jscomp$61$$) {
  for (var $key$jscomp$61$$ in $obj$jscomp$61$$) {
    return !1;
  }
  return !0;
}, $goog$object$setIfUndefined$$ = function($obj$jscomp$67$$, $key$jscomp$66$$) {
  var $value$jscomp$115$$ = {$resolver$:$goog$Promise$withResolver$$(), $fired$:!1};
  return $key$jscomp$66$$ in $obj$jscomp$67$$ ? $obj$jscomp$67$$[$key$jscomp$66$$] : $obj$jscomp$67$$[$key$jscomp$66$$] = $value$jscomp$115$$;
}, $goog$object$clone$$ = function($obj$jscomp$69$$) {
  var $res$jscomp$6$$ = {}, $key$jscomp$68$$;
  for ($key$jscomp$68$$ in $obj$jscomp$69$$) {
    $res$jscomp$6$$[$key$jscomp$68$$] = $obj$jscomp$69$$[$key$jscomp$68$$];
  }
  return $res$jscomp$6$$;
}, $goog$object$unsafeClone$$ = function($obj$jscomp$70$$) {
  var $clone$jscomp$1_type$jscomp$122$$ = $goog$typeOf$$($obj$jscomp$70$$);
  if ("object" == $clone$jscomp$1_type$jscomp$122$$ || "array" == $clone$jscomp$1_type$jscomp$122$$) {
    if ($goog$isFunction$$($obj$jscomp$70$$.clone)) {
      return $obj$jscomp$70$$.clone();
    }
    var $clone$jscomp$1_type$jscomp$122$$ = "array" == $clone$jscomp$1_type$jscomp$122$$ ? [] : {}, $key$jscomp$69$$;
    for ($key$jscomp$69$$ in $obj$jscomp$70$$) {
      $clone$jscomp$1_type$jscomp$122$$[$key$jscomp$69$$] = $goog$object$unsafeClone$$($obj$jscomp$70$$[$key$jscomp$69$$]);
    }
    return $clone$jscomp$1_type$jscomp$122$$;
  }
  return $obj$jscomp$70$$;
}, $goog$object$transpose$$ = function($obj$jscomp$71$$) {
  var $transposed$$ = {}, $key$jscomp$70$$;
  for ($key$jscomp$70$$ in $obj$jscomp$71$$) {
    $transposed$$[$obj$jscomp$71$$[$key$jscomp$70$$]] = $key$jscomp$70$$;
  }
  return $transposed$$;
}, $goog$object$PROTOTYPE_FIELDS_$$ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), $goog$object$extend$$ = function($target$jscomp$61$$, $var_args$jscomp$76$$) {
  for (var $key$jscomp$71$$, $source$jscomp$15$$, $i$jscomp$54$$ = 1; $i$jscomp$54$$ < arguments.length; $i$jscomp$54$$++) {
    $source$jscomp$15$$ = arguments[$i$jscomp$54$$];
    for ($key$jscomp$71$$ in $source$jscomp$15$$) {
      $target$jscomp$61$$[$key$jscomp$71$$] = $source$jscomp$15$$[$key$jscomp$71$$];
    }
    for (var $j$jscomp$5$$ = 0; $j$jscomp$5$$ < $goog$object$PROTOTYPE_FIELDS_$$.length; $j$jscomp$5$$++) {
      $key$jscomp$71$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$jscomp$5$$], Object.prototype.hasOwnProperty.call($source$jscomp$15$$, $key$jscomp$71$$) && ($target$jscomp$61$$[$key$jscomp$71$$] = $source$jscomp$15$$[$key$jscomp$71$$]);
    }
  }
};
var $module$contents$mr$XhrManager_XhrManager$$ = function($maxRequests$$, $defaultTimeoutMillis$$, $defaultNumAttempts$$) {
  this.$f$ = $maxRequests$$;
  this.$h$ = $defaultTimeoutMillis$$;
  this.$g$ = $defaultNumAttempts$$;
  this.$a$ = 0;
  this.$b$ = [];
};
$module$contents$mr$XhrManager_XhrManager$$.prototype.send = function($entry$jscomp$4_url$jscomp$52$$, $method$jscomp$5$$, $body$jscomp$1$$, $overrides_timeoutMillis$$) {
  var $$jscomp$destructuring$var0_responseType$$ = void 0 === $overrides_timeoutMillis$$ ? {} : $overrides_timeoutMillis$$;
  $overrides_timeoutMillis$$ = void 0 === $$jscomp$destructuring$var0_responseType$$.timeoutMillis ? this.$h$ : $$jscomp$destructuring$var0_responseType$$.timeoutMillis;
  var $numAttempts$$ = void 0 === $$jscomp$destructuring$var0_responseType$$.$numAttempts$ ? this.$g$ : $$jscomp$destructuring$var0_responseType$$.$numAttempts$, $headers$$ = void 0 === $$jscomp$destructuring$var0_responseType$$.headers ? null : $$jscomp$destructuring$var0_responseType$$.headers, $$jscomp$destructuring$var0_responseType$$ = void 0 === $$jscomp$destructuring$var0_responseType$$.responseType ? "" : $$jscomp$destructuring$var0_responseType$$.responseType;
  $entry$jscomp$4_url$jscomp$52$$ = {$resolver$:new $mr$PromiseResolver$$, url:$entry$jscomp$4_url$jscomp$52$$, method:$method$jscomp$5$$, headers:$headers$$, responseType:$$jscomp$destructuring$var0_responseType$$, body:$body$jscomp$1$$, timeoutMillis:$overrides_timeoutMillis$$, $numAttemptsLeft$:$numAttempts$$};
  this.$a$ < this.$f$ ? $JSCompiler_StaticMethods_startRequest_$$(this, $entry$jscomp$4_url$jscomp$52$$) : this.$b$.push($entry$jscomp$4_url$jscomp$52$$);
  return $entry$jscomp$4_url$jscomp$52$$.$resolver$.$a$;
};
var $JSCompiler_StaticMethods_startNextRequestFromQueue_$$ = function($JSCompiler_StaticMethods_startNextRequestFromQueue_$self$$) {
  if (0 < $JSCompiler_StaticMethods_startNextRequestFromQueue_$self$$.$b$.length && $JSCompiler_StaticMethods_startNextRequestFromQueue_$self$$.$a$ < $JSCompiler_StaticMethods_startNextRequestFromQueue_$self$$.$f$) {
    var $request$jscomp$10$$ = $JSCompiler_StaticMethods_startNextRequestFromQueue_$self$$.$b$.shift();
    $JSCompiler_StaticMethods_startRequest_$$($JSCompiler_StaticMethods_startNextRequestFromQueue_$self$$, $request$jscomp$10$$);
  }
}, $JSCompiler_StaticMethods_startRequest_$$ = function($JSCompiler_StaticMethods_startRequest_$self$$, $request$jscomp$11$$) {
  $JSCompiler_StaticMethods_startRequest_$self$$.$a$++;
  $mr$Assertions$assert$$(0 < $request$jscomp$11$$.$numAttemptsLeft$, "request.numAttemptsLeft > 0");
  $request$jscomp$11$$.$numAttemptsLeft$--;
  $JSCompiler_StaticMethods_sendOneAttempt_$$($request$jscomp$11$$).then(function($response$jscomp$3$$) {
    $request$jscomp$11$$.$resolver$.resolve($response$jscomp$3$$);
    $JSCompiler_StaticMethods_startRequest_$self$$.$a$--;
    $JSCompiler_StaticMethods_startNextRequestFromQueue_$$($JSCompiler_StaticMethods_startRequest_$self$$);
  }, function($e$jscomp$10$$) {
    0 == $request$jscomp$11$$.$numAttemptsLeft$ ? $request$jscomp$11$$.$resolver$.reject($e$jscomp$10$$) : $JSCompiler_StaticMethods_startRequest_$self$$.$b$.push($request$jscomp$11$$);
    $JSCompiler_StaticMethods_startRequest_$self$$.$a$--;
    $JSCompiler_StaticMethods_startNextRequestFromQueue_$$($JSCompiler_StaticMethods_startRequest_$self$$);
  });
}, $JSCompiler_StaticMethods_sendOneAttempt_$$ = function($request$jscomp$12$$) {
  return new Promise(function($resolve$jscomp$1$$, $reject$jscomp$1$$) {
    var $xhr$jscomp$1$$ = new XMLHttpRequest;
    $xhr$jscomp$1$$.onreadystatechange = function() {
      $xhr$jscomp$1$$.readyState == XMLHttpRequest.DONE && $resolve$jscomp$1$$($xhr$jscomp$1$$);
    };
    $xhr$jscomp$1$$.timeout = $request$jscomp$12$$.timeoutMillis;
    $xhr$jscomp$1$$.ontimeout = function() {
      $reject$jscomp$1$$(Error("Timed out"));
    };
    $xhr$jscomp$1$$.open($request$jscomp$12$$.method, $request$jscomp$12$$.url, !0);
    null == $request$jscomp$12$$.headers ? $xhr$jscomp$1$$.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8") : $request$jscomp$12$$.headers.forEach(function($request$jscomp$12$$) {
      return $xhr$jscomp$1$$.setRequestHeader($request$jscomp$12$$[0], $request$jscomp$12$$[1]);
    });
    $xhr$jscomp$1$$.responseType = $request$jscomp$12$$.responseType;
    $xhr$jscomp$1$$.send($request$jscomp$12$$.body);
  });
};
var $goog$labs$userAgent$util$userAgent_$$;
a: {
  var $navigator$jscomp$inline_425$$ = $goog$global$$.navigator;
  if ($navigator$jscomp$inline_425$$) {
    var $userAgent$jscomp$inline_426$$ = $navigator$jscomp$inline_425$$.userAgent;
    if ($userAgent$jscomp$inline_426$$) {
      $goog$labs$userAgent$util$userAgent_$$ = $userAgent$jscomp$inline_426$$;
      break a;
    }
  }
  $goog$labs$userAgent$util$userAgent_$$ = "";
}
var $goog$labs$userAgent$util$matchUserAgent$$ = function($str$jscomp$61$$) {
  return -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf($str$jscomp$61$$);
};
var $goog$labs$userAgent$browser$matchChrome_$$ = function() {
  return ($goog$labs$userAgent$util$matchUserAgent$$("Chrome") || $goog$labs$userAgent$util$matchUserAgent$$("CriOS")) && !$goog$labs$userAgent$util$matchUserAgent$$("Edge");
};
var $mr$Retry$$ = function($onAttempt$$, $retryDelay$$, $maxAttempts$$) {
  this.$w$ = $onAttempt$$;
  this.$f$ = 0 < $retryDelay$$ ? $retryDelay$$ : 10;
  this.$o$ = 0 < $maxAttempts$$ ? $maxAttempts$$ : 1;
  this.$h$ = 1;
  this.$j$ = 0;
  this.$g$ = !1;
  this.$a$ = this.$b$ = null;
};
$mr$Retry$$.prototype.start = function() {
  if (null != this.$a$) {
    return Promise.reject(Error("Cannot call Retry.start more than once."));
  }
  this.$a$ = new $mr$PromiseResolver$$;
  this.$l$();
  return this.$a$.$a$;
};
$mr$Retry$$.prototype.$l$ = function() {
  var $$jscomp$this$jscomp$2$$ = this;
  this.$b$ = null;
  this.$g$ || (this.$j$++, this.$w$().then(function($result$jscomp$7$$) {
    $JSCompiler_StaticMethods_mr_Retry_prototype$cleanup_$$($$jscomp$this$jscomp$2$$);
    $$jscomp$this$jscomp$2$$.$a$.resolve($result$jscomp$7$$);
  }, function() {
    $$jscomp$this$jscomp$2$$.$j$ >= $$jscomp$this$jscomp$2$$.$o$ ? ($JSCompiler_StaticMethods_mr_Retry_prototype$cleanup_$$($$jscomp$this$jscomp$2$$), $$jscomp$this$jscomp$2$$.$a$.reject(Error("Max attempts reached"))) : ($$jscomp$this$jscomp$2$$.$b$ = setTimeout($$jscomp$this$jscomp$2$$.$l$.bind($$jscomp$this$jscomp$2$$), $$jscomp$this$jscomp$2$$.$f$), $$jscomp$this$jscomp$2$$.$f$ *= $$jscomp$this$jscomp$2$$.$h$);
  }));
};
var $JSCompiler_StaticMethods_setBackoffFactor$$ = function($JSCompiler_StaticMethods_setBackoffFactor$self$$, $backoffFactor$$) {
  $mr$Assertions$assert$$(1 <= $backoffFactor$$);
  $JSCompiler_StaticMethods_setBackoffFactor$self$$.$h$ = $backoffFactor$$;
  return $JSCompiler_StaticMethods_setBackoffFactor$self$$;
};
$mr$Retry$$.prototype.abort = function() {
  $JSCompiler_StaticMethods_mr_Retry_prototype$cleanup_$$(this);
  this.$a$.reject(Error("abort"));
};
var $JSCompiler_StaticMethods_mr_Retry_prototype$cleanup_$$ = function($JSCompiler_StaticMethods_mr_Retry_prototype$cleanup_$self$$) {
  null != $JSCompiler_StaticMethods_mr_Retry_prototype$cleanup_$self$$.$b$ && (clearTimeout($JSCompiler_StaticMethods_mr_Retry_prototype$cleanup_$self$$.$b$), $JSCompiler_StaticMethods_mr_Retry_prototype$cleanup_$self$$.$b$ = null);
  $JSCompiler_StaticMethods_mr_Retry_prototype$cleanup_$self$$.$g$ = !0;
};
var $mr$InternalMessage$$ = function($source$jscomp$16$$, $type$jscomp$123$$, $opt_message$jscomp$19$$) {
  this.source = $source$jscomp$16$$;
  this.type = $type$jscomp$123$$;
  this.message = $opt_message$jscomp$19$$;
};
var $module$contents$mr$DongleUtils_DongleUtils$requestDeviceToSendLogs$$ = function($ipAddress$$, $logId$$, $callback$jscomp$416$$) {
  null == $module$contents$mr$DongleUtils_DongleUtils$xhrManagerForSendLogs_$$ && ($module$contents$mr$DongleUtils_DongleUtils$xhrManagerForSendLogs_$$ = new $module$contents$mr$XhrManager_XhrManager$$(1, 3E5, 1));
  var $reportUrl$$ = "https://crash.corp.google.com/samples?stbtiq=" + $logId$$, $deviceUrl$$ = "http://" + $ipAddress$$ + ":8008/setup/send_log_report";
  $module$contents$mr$DongleUtils_DongleUtils$xhrManagerForSendLogs_$$.send($deviceUrl$$, "POST", JSON.stringify({uuid:$logId$$}), {headers:[["Content-Type", "application/json"]]}).then(function($ipAddress$$) {
    200 == $ipAddress$$.status ? $callback$jscomp$416$$("ok", $reportUrl$$) : $callback$jscomp$416$$("error", "Unable to POST to " + $deviceUrl$$ + ", " + ("error = " + $ipAddress$$.status));
  }, function($ipAddress$$) {
    $callback$jscomp$416$$("error", String($ipAddress$$));
  });
  return $reportUrl$$;
}, $module$contents$mr$DongleUtils_DongleUtils$getSetupInfo$$ = function($ipAddress$jscomp$1$$) {
  var $result$jscomp$8$$ = new $module$contents$mr$DongleUtils_DongleUtils$SetupInfo$$;
  if ("string" !== typeof $ipAddress$jscomp$1$$) {
    return Promise.resolve($result$jscomp$8$$);
  }
  null == $module$contents$mr$DongleUtils_DongleUtils$xhrManagerForSetupInfo_$$ && ($module$contents$mr$DongleUtils_DongleUtils$xhrManagerForSetupInfo_$$ = new $module$contents$mr$XhrManager_XhrManager$$(1, 3E3, 1));
  return $module$contents$mr$DongleUtils_DongleUtils$xhrManagerForSetupInfo_$$.send("http://" + $ipAddress$jscomp$1$$ + ":8008/setup/eureka_info", "GET", void 0, {responseType:"text"}).then(function($ipAddress$jscomp$1$$) {
    $ipAddress$jscomp$1$$ = JSON.parse($ipAddress$jscomp$1$$.responseText);
    "cast_build_revision" in $ipAddress$jscomp$1$$ ? $result$jscomp$8$$.$a$ = String($ipAddress$jscomp$1$$.cast_build_revision) : "build_version" in $ipAddress$jscomp$1$$ && ($result$jscomp$8$$.$a$ = String($ipAddress$jscomp$1$$.build_version));
    "connected" in $ipAddress$jscomp$1$$ && ($result$jscomp$8$$.$g$ = "true" == String($ipAddress$jscomp$1$$.connected));
    "ethernet_connected" in $ipAddress$jscomp$1$$ && ($result$jscomp$8$$.$f$ = "true" == String($ipAddress$jscomp$1$$.ethernet_connected));
    "has_update" in $ipAddress$jscomp$1$$ && ($result$jscomp$8$$.$b$ = "true" == String($ipAddress$jscomp$1$$.has_update));
    "uptime" in $ipAddress$jscomp$1$$ && ($ipAddress$jscomp$1$$ = Number($ipAddress$jscomp$1$$.uptime), Number.isFinite($ipAddress$jscomp$1$$) && ($result$jscomp$8$$.$h$ = $ipAddress$jscomp$1$$));
  }).catch(function($ipAddress$jscomp$1$$) {
    $JSCompiler_StaticMethods_mr_Logger_prototype$warning$$($mr$Logger$getInstance$$("mr.DongleUtils"), "Unable to fetch/parse setup info.", $ipAddress$jscomp$1$$);
  }).then(function() {
    return $result$jscomp$8$$;
  });
}, $module$contents$mr$DongleUtils_DongleUtils$SetupInfo$$ = function() {
  this.$h$ = this.$b$ = this.$f$ = this.$g$ = this.$a$ = null;
}, $module$contents$mr$DongleUtils_DongleUtils$xhrManagerForSendLogs_$$ = null, $module$contents$mr$DongleUtils_DongleUtils$xhrManagerForSetupInfo_$$ = null;
var $goog$string$Const$$ = function() {
  this.$a$ = "";
  this.$b$ = $goog$string$Const$TYPE_MARKER_$$;
};
$goog$string$Const$$.prototype.$implementsGoogStringTypedString$ = !0;
$goog$string$Const$$.prototype.$getTypedStringValue$ = function() {
  return this.$a$;
};
$goog$string$Const$$.prototype.toString = function() {
  return "Const{" + this.$a$ + "}";
};
var $goog$string$Const$TYPE_MARKER_$$ = {}, $goog$string$Const$create__googStringSecurityPrivate_$$ = function($s$jscomp$15$$) {
  var $stringConst$jscomp$1$$ = new $goog$string$Const$$;
  $stringConst$jscomp$1$$.$a$ = $s$jscomp$15$$;
  return $stringConst$jscomp$1$$;
};
$goog$string$Const$create__googStringSecurityPrivate_$$("");
var $goog$html$SafeScript$$ = function() {
  this.$a$ = $goog$html$SafeScript$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
};
$goog$html$SafeScript$$.prototype.$implementsGoogStringTypedString$ = !0;
var $goog$html$SafeScript$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {};
$goog$html$SafeScript$$.prototype.$getTypedStringValue$ = function() {
  return "";
};
$goog$html$SafeScript$$.prototype.toString = function() {
  return "SafeScript{}";
};
var $goog$html$SafeScript$unwrap$$ = function($safeScript$$) {
  if ($safeScript$$ instanceof $goog$html$SafeScript$$ && $safeScript$$.constructor === $goog$html$SafeScript$$ && $safeScript$$.$a$ === $goog$html$SafeScript$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$) {
    return "";
  }
  $goog$asserts$fail$$("expected object of type SafeScript, got '" + $safeScript$$ + "' of type " + $goog$typeOf$$($safeScript$$));
  return "type_error:SafeScript";
};
var $goog$html$SafeStyle$$ = function() {
  this.$a$ = $goog$html$SafeStyle$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
};
$goog$html$SafeStyle$$.prototype.$implementsGoogStringTypedString$ = !0;
var $goog$html$SafeStyle$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {};
$goog$html$SafeStyle$$.prototype.$getTypedStringValue$ = function() {
  return "";
};
$goog$html$SafeStyle$$.prototype.toString = function() {
  return "SafeStyle{}";
};
var $goog$html$SafeStyle$unwrap$$ = function($safeStyle$$) {
  if ($safeStyle$$ instanceof $goog$html$SafeStyle$$ && $safeStyle$$.constructor === $goog$html$SafeStyle$$ && $safeStyle$$.$a$ === $goog$html$SafeStyle$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$) {
    return "";
  }
  $goog$asserts$fail$$("expected object of type SafeStyle, got '" + $safeStyle$$ + "' of type " + $goog$typeOf$$($safeStyle$$));
  return "type_error:SafeStyle";
};
var $goog$i18n$bidi$ltrCharReg_$$ = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/, $goog$i18n$bidi$rtlDirCheckRe_$$ = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]/, $goog$i18n$bidi$isRequiredLtrRe_$$ = /^http:\/\/.*/, $goog$i18n$bidi$wordSeparatorRe_$$ = /\s+/, $goog$i18n$bidi$hasNumeralsRe_$$ = 
/[\d\u06f0-\u06f9]/;
var $goog$html$TrustedResourceUrl$$ = function() {
  this.$a$ = "";
  this.$b$ = $goog$html$TrustedResourceUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
};
$goog$html$TrustedResourceUrl$$.prototype.$implementsGoogStringTypedString$ = !0;
$goog$html$TrustedResourceUrl$$.prototype.$getTypedStringValue$ = function() {
  return this.$a$;
};
$goog$html$TrustedResourceUrl$$.prototype.toString = function() {
  return "TrustedResourceUrl{" + this.$a$ + "}";
};
var $goog$html$TrustedResourceUrl$unwrap$$ = function($trustedResourceUrl$$) {
  if ($trustedResourceUrl$$ instanceof $goog$html$TrustedResourceUrl$$ && $trustedResourceUrl$$.constructor === $goog$html$TrustedResourceUrl$$ && $trustedResourceUrl$$.$b$ === $goog$html$TrustedResourceUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$) {
    return $trustedResourceUrl$$.$a$;
  }
  $goog$asserts$fail$$("expected object of type TrustedResourceUrl, got '" + $trustedResourceUrl$$ + "' of type " + $goog$typeOf$$($trustedResourceUrl$$));
  return "type_error:TrustedResourceUrl";
}, $goog$html$TrustedResourceUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {};
var $goog$html$SafeUrl$$ = function() {
  this.$a$ = $goog$html$SafeUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
};
$goog$html$SafeUrl$$.prototype.$implementsGoogStringTypedString$ = !0;
$goog$html$SafeUrl$$.prototype.$getTypedStringValue$ = function() {
  return "";
};
$goog$html$SafeUrl$$.prototype.toString = function() {
  return "SafeUrl{}";
};
var $goog$html$SafeUrl$unwrap$$ = function($safeUrl$$) {
  if ($safeUrl$$ instanceof $goog$html$SafeUrl$$ && $safeUrl$$.constructor === $goog$html$SafeUrl$$ && $safeUrl$$.$a$ === $goog$html$SafeUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$) {
    return "";
  }
  $goog$asserts$fail$$("expected object of type SafeUrl, got '" + $safeUrl$$ + "' of type " + $goog$typeOf$$($safeUrl$$));
  return "type_error:SafeUrl";
}, $goog$html$SafeUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {};
var $goog$html$SafeHtml$$ = function() {
  this.$a$ = "";
  this.$b$ = $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
  this.$dir_$ = null;
};
$goog$html$SafeHtml$$.prototype.$implementsGoogStringTypedString$ = !0;
$goog$html$SafeHtml$$.prototype.$getTypedStringValue$ = function() {
  return this.$a$;
};
$goog$html$SafeHtml$$.prototype.toString = function() {
  return "SafeHtml{" + this.$a$ + "}";
};
var $goog$html$SafeHtml$unwrap$$ = function($safeHtml$$) {
  if ($safeHtml$$ instanceof $goog$html$SafeHtml$$ && $safeHtml$$.constructor === $goog$html$SafeHtml$$ && $safeHtml$$.$b$ === $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$) {
    return $safeHtml$$.$a$;
  }
  $goog$asserts$fail$$("expected object of type SafeHtml, got '" + $safeHtml$$ + "' of type " + $goog$typeOf$$($safeHtml$$));
  return "type_error:SafeHtml";
}, $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {}, $goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse$$ = function($html$jscomp$7$$) {
  var $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$self$jscomp$inline_436$$ = new $goog$html$SafeHtml$$;
  $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$self$jscomp$inline_436$$.$a$ = $html$jscomp$7$$;
  $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$self$jscomp$inline_436$$.$dir_$ = 0;
};
$goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse$$("<!DOCTYPE html>");
$goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse$$("");
$goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse$$("<br>");

