var Jw = Object.defineProperty;
var Rf = e => {
    throw TypeError(e)
}
;
var Xw = (e, t, n) => t in e ? Jw(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var Ko = (e, t, n) => Xw(e, typeof t != "symbol" ? t + "" : t, n)
  , Ol = (e, t, n) => t.has(e) || Rf("Cannot " + n);
var T = (e, t, n) => (Ol(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , te = (e, t, n) => t.has(e) ? Rf("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , G = (e, t, n, r) => (Ol(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Ne = (e, t, n) => (Ol(e, t, "access private method"),
n);
var di = (e, t, n, r) => ({
    set _(o) {
        G(e, t, o, n)
    },
    get _() {
        return T(e, t, r)
    }
});
function Zw(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const i of s.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
var gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function em(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function ex(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var o = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, o.get ? o : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
var tm = {
    exports: {}
}
  , Fa = {}
  , nm = {
    exports: {}
}
  , Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qs = Symbol.for("react.element")
  , tx = Symbol.for("react.portal")
  , nx = Symbol.for("react.fragment")
  , rx = Symbol.for("react.strict_mode")
  , ox = Symbol.for("react.profiler")
  , sx = Symbol.for("react.provider")
  , ix = Symbol.for("react.context")
  , ax = Symbol.for("react.forward_ref")
  , lx = Symbol.for("react.suspense")
  , ux = Symbol.for("react.memo")
  , cx = Symbol.for("react.lazy")
  , Af = Symbol.iterator;
function dx(e) {
    return e === null || typeof e != "object" ? null : (e = Af && e[Af] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var rm = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , om = Object.assign
  , sm = {};
function Io(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = sm,
    this.updater = n || rm
}
Io.prototype.isReactComponent = {};
Io.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Io.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function im() {}
im.prototype = Io.prototype;
function Xc(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = sm,
    this.updater = n || rm
}
var Zc = Xc.prototype = new im;
Zc.constructor = Xc;
om(Zc, Io.prototype);
Zc.isPureReactComponent = !0;
var jf = Array.isArray
  , am = Object.prototype.hasOwnProperty
  , ed = {
    current: null
}
  , lm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function um(e, t, n) {
    var r, o = {}, s = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            am.call(t, r) && !lm.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: Qs,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: ed.current
    }
}
function fx(e, t) {
    return {
        $$typeof: Qs,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function td(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Qs
}
function hx(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Nf = /\/+/g;
function Il(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? hx("" + e.key) : t.toString(36)
}
function Bi(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (s) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Qs:
            case tx:
                i = !0
            }
        }
    if (i)
        return i = e,
        o = o(i),
        e = r === "" ? "." + Il(i, 0) : r,
        jf(o) ? (n = "",
        e != null && (n = e.replace(Nf, "$&/") + "/"),
        Bi(o, t, n, "", function(u) {
            return u
        })) : o != null && (td(o) && (o = fx(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Nf, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    jf(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + Il(s, a);
            i += Bi(s, t, n, l, o)
        }
    else if (l = dx(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(s = e.next()).done; )
            s = s.value,
            l = r + Il(s, a++),
            i += Bi(s, t, n, l, o);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function fi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Bi(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }),
    r
}
function px(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Be = {
    current: null
}
  , Vi = {
    transition: null
}
  , mx = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: Vi,
    ReactCurrentOwner: ed
};
function cm() {
    throw Error("act(...) is not supported in production builds of React.")
}
Y.Children = {
    map: fi,
    forEach: function(e, t, n) {
        fi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return fi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return fi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!td(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Y.Component = Io;
Y.Fragment = nx;
Y.Profiler = ox;
Y.PureComponent = Xc;
Y.StrictMode = rx;
Y.Suspense = lx;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mx;
Y.act = cm;
Y.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = om({}, e.props)
      , o = e.key
      , s = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        i = ed.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            am.call(t, l) && !lm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: Qs,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: i
    }
}
;
Y.createContext = function(e) {
    return e = {
        $$typeof: ix,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: sx,
        _context: e
    },
    e.Consumer = e
}
;
Y.createElement = um;
Y.createFactory = function(e) {
    var t = um.bind(null, e);
    return t.type = e,
    t
}
;
Y.createRef = function() {
    return {
        current: null
    }
}
;
Y.forwardRef = function(e) {
    return {
        $$typeof: ax,
        render: e
    }
}
;
Y.isValidElement = td;
Y.lazy = function(e) {
    return {
        $$typeof: cx,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: px
    }
}
;
Y.memo = function(e, t) {
    return {
        $$typeof: ux,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Y.startTransition = function(e) {
    var t = Vi.transition;
    Vi.transition = {};
    try {
        e()
    } finally {
        Vi.transition = t
    }
}
;
Y.unstable_act = cm;
Y.useCallback = function(e, t) {
    return Be.current.useCallback(e, t)
}
;
Y.useContext = function(e) {
    return Be.current.useContext(e)
}
;
Y.useDebugValue = function() {}
;
Y.useDeferredValue = function(e) {
    return Be.current.useDeferredValue(e)
}
;
Y.useEffect = function(e, t) {
    return Be.current.useEffect(e, t)
}
;
Y.useId = function() {
    return Be.current.useId()
}
;
Y.useImperativeHandle = function(e, t, n) {
    return Be.current.useImperativeHandle(e, t, n)
}
;
Y.useInsertionEffect = function(e, t) {
    return Be.current.useInsertionEffect(e, t)
}
;
Y.useLayoutEffect = function(e, t) {
    return Be.current.useLayoutEffect(e, t)
}
;
Y.useMemo = function(e, t) {
    return Be.current.useMemo(e, t)
}
;
Y.useReducer = function(e, t, n) {
    return Be.current.useReducer(e, t, n)
}
;
Y.useRef = function(e) {
    return Be.current.useRef(e)
}
;
Y.useState = function(e) {
    return Be.current.useState(e)
}
;
Y.useSyncExternalStore = function(e, t, n) {
    return Be.current.useSyncExternalStore(e, t, n)
}
;
Y.useTransition = function() {
    return Be.current.useTransition()
}
;
Y.version = "18.3.1";
nm.exports = Y;
var p = nm.exports;
const I = em(p)
  , dm = Zw({
    __proto__: null,
    default: I
}, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gx = p
  , vx = Symbol.for("react.element")
  , yx = Symbol.for("react.fragment")
  , wx = Object.prototype.hasOwnProperty
  , xx = gx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , bx = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function fm(e, t, n) {
    var r, o = {}, s = null, i = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (r in t)
        wx.call(t, r) && !bx.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: vx,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: xx.current
    }
}
Fa.Fragment = yx;
Fa.jsx = fm;
Fa.jsxs = fm;
tm.exports = Fa;
var b = tm.exports
  , hm = {
    exports: {}
}
  , ut = {}
  , pm = {
    exports: {}
}
  , mm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(k, j) {
        var z = k.length;
        k.push(j);
        e: for (; 0 < z; ) {
            var M = z - 1 >>> 1
              , U = k[M];
            if (0 < o(U, j))
                k[M] = j,
                k[z] = U,
                z = M;
            else
                break e
        }
    }
    function n(k) {
        return k.length === 0 ? null : k[0]
    }
    function r(k) {
        if (k.length === 0)
            return null;
        var j = k[0]
          , z = k.pop();
        if (z !== j) {
            k[0] = z;
            e: for (var M = 0, U = k.length, X = U >>> 1; M < X; ) {
                var he = 2 * (M + 1) - 1
                  , Xe = k[he]
                  , ne = he + 1
                  , wt = k[ne];
                if (0 > o(Xe, z))
                    ne < U && 0 > o(wt, Xe) ? (k[M] = wt,
                    k[ne] = z,
                    M = ne) : (k[M] = Xe,
                    k[he] = z,
                    M = he);
                else if (ne < U && 0 > o(wt, z))
                    k[M] = wt,
                    k[ne] = z,
                    M = ne;
                else
                    break e
            }
        }
        return j
    }
    function o(k, j) {
        var z = k.sortIndex - j.sortIndex;
        return z !== 0 ? z : k.id - j.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var i = Date
          , a = i.now();
        e.unstable_now = function() {
            return i.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , f = null
      , d = 3
      , m = !1
      , y = !1
      , h = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , v = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function x(k) {
        for (var j = n(u); j !== null; ) {
            if (j.callback === null)
                r(u);
            else if (j.startTime <= k)
                r(u),
                j.sortIndex = j.expirationTime,
                t(l, j);
            else
                break;
            j = n(u)
        }
    }
    function _(k) {
        if (h = !1,
        x(k),
        !y)
            if (n(l) !== null)
                y = !0,
                F(S);
            else {
                var j = n(u);
                j !== null && V(_, j.startTime - k)
            }
    }
    function S(k, j) {
        y = !1,
        h && (h = !1,
        g(P),
        P = -1),
        m = !0;
        var z = d;
        try {
            for (x(j),
            f = n(l); f !== null && (!(f.expirationTime > j) || k && !A()); ) {
                var M = f.callback;
                if (typeof M == "function") {
                    f.callback = null,
                    d = f.priorityLevel;
                    var U = M(f.expirationTime <= j);
                    j = e.unstable_now(),
                    typeof U == "function" ? f.callback = U : f === n(l) && r(l),
                    x(j)
                } else
                    r(l);
                f = n(l)
            }
            if (f !== null)
                var X = !0;
            else {
                var he = n(u);
                he !== null && V(_, he.startTime - j),
                X = !1
            }
            return X
        } finally {
            f = null,
            d = z,
            m = !1
        }
    }
    var E = !1
      , C = null
      , P = -1
      , L = 5
      , O = -1;
    function A() {
        return !(e.unstable_now() - O < L)
    }
    function N() {
        if (C !== null) {
            var k = e.unstable_now();
            O = k;
            var j = !0;
            try {
                j = C(!0, k)
            } finally {
                j ? B() : (E = !1,
                C = null)
            }
        } else
            E = !1
    }
    var B;
    if (typeof v == "function")
        B = function() {
            v(N)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var D = new MessageChannel
          , H = D.port2;
        D.port1.onmessage = N,
        B = function() {
            H.postMessage(null)
        }
    } else
        B = function() {
            w(N, 0)
        }
        ;
    function F(k) {
        C = k,
        E || (E = !0,
        B())
    }
    function V(k, j) {
        P = w(function() {
            k(e.unstable_now())
        }, j)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(k) {
        k.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        y || m || (y = !0,
        F(S))
    }
    ,
    e.unstable_forceFrameRate = function(k) {
        0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < k ? Math.floor(1e3 / k) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return d
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(k) {
        switch (d) {
        case 1:
        case 2:
        case 3:
            var j = 3;
            break;
        default:
            j = d
        }
        var z = d;
        d = j;
        try {
            return k()
        } finally {
            d = z
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(k, j) {
        switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            k = 3
        }
        var z = d;
        d = k;
        try {
            return j()
        } finally {
            d = z
        }
    }
    ,
    e.unstable_scheduleCallback = function(k, j, z) {
        var M = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay,
        z = typeof z == "number" && 0 < z ? M + z : M) : z = M,
        k) {
        case 1:
            var U = -1;
            break;
        case 2:
            U = 250;
            break;
        case 5:
            U = 1073741823;
            break;
        case 4:
            U = 1e4;
            break;
        default:
            U = 5e3
        }
        return U = z + U,
        k = {
            id: c++,
            callback: j,
            priorityLevel: k,
            startTime: z,
            expirationTime: U,
            sortIndex: -1
        },
        z > M ? (k.sortIndex = z,
        t(u, k),
        n(l) === null && k === n(u) && (h ? (g(P),
        P = -1) : h = !0,
        V(_, z - M))) : (k.sortIndex = U,
        t(l, k),
        y || m || (y = !0,
        F(S))),
        k
    }
    ,
    e.unstable_shouldYield = A,
    e.unstable_wrapCallback = function(k) {
        var j = d;
        return function() {
            var z = d;
            d = j;
            try {
                return k.apply(this, arguments)
            } finally {
                d = z
            }
        }
    }
}
)(mm);
pm.exports = mm;
var _x = pm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sx = p
  , at = _x;
function R(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var gm = new Set
  , Ss = {};
function Cr(e, t) {
    _o(e, t),
    _o(e + "Capture", t)
}
function _o(e, t) {
    for (Ss[e] = t,
    e = 0; e < t.length; e++)
        gm.add(t[e])
}
var rn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ru = Object.prototype.hasOwnProperty
  , Ex = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Of = {}
  , If = {};
function kx(e) {
    return Ru.call(If, e) ? !0 : Ru.call(Of, e) ? !1 : Ex.test(e) ? If[e] = !0 : (Of[e] = !0,
    !1)
}
function Cx(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Px(e, t, n, r) {
    if (t === null || typeof t > "u" || Cx(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ve(e, t, n, r, o, s, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = i
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    je[e] = new Ve(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    je[t] = new Ve(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    je[e] = new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    je[e] = new Ve(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    je[e] = new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    je[e] = new Ve(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    je[e] = new Ve(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    je[e] = new Ve(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    je[e] = new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var nd = /[\-:]([a-z])/g;
function rd(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(nd, rd);
    je[t] = new Ve(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(nd, rd);
    je[t] = new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(nd, rd);
    je[t] = new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    je[e] = new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)
});
je.xlinkHref = new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    je[e] = new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function od(e, t, n, r) {
    var o = je.hasOwnProperty(t) ? je[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Px(t, n, o, r) && (n = null),
    r || o === null ? kx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var cn = Sx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , hi = Symbol.for("react.element")
  , Hr = Symbol.for("react.portal")
  , Wr = Symbol.for("react.fragment")
  , sd = Symbol.for("react.strict_mode")
  , Au = Symbol.for("react.profiler")
  , vm = Symbol.for("react.provider")
  , ym = Symbol.for("react.context")
  , id = Symbol.for("react.forward_ref")
  , ju = Symbol.for("react.suspense")
  , Nu = Symbol.for("react.suspense_list")
  , ad = Symbol.for("react.memo")
  , En = Symbol.for("react.lazy")
  , wm = Symbol.for("react.offscreen")
  , Lf = Symbol.iterator;
function qo(e) {
    return e === null || typeof e != "object" ? null : (e = Lf && e[Lf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ge = Object.assign, Ll;
function os(e) {
    if (Ll === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ll = t && t[1] || ""
        }
    return `
` + Ll + e
}
var Dl = !1;
function $l(e, t) {
    if (!e || Dl)
        return "";
    Dl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), s = r.stack.split(`
`), i = o.length - 1, a = s.length - 1; 1 <= i && 0 <= a && o[i] !== s[a]; )
                a--;
            for (; 1 <= i && 0 <= a; i--,
            a--)
                if (o[i] !== s[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--,
                            a--,
                            0 > a || o[i] !== s[a]) {
                                var l = `
` + o[i].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        Dl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? os(e) : ""
}
function Tx(e) {
    switch (e.tag) {
    case 5:
        return os(e.type);
    case 16:
        return os("Lazy");
    case 13:
        return os("Suspense");
    case 19:
        return os("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = $l(e.type, !1),
        e;
    case 11:
        return e = $l(e.type.render, !1),
        e;
    case 1:
        return e = $l(e.type, !0),
        e;
    default:
        return ""
    }
}
function Ou(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Wr:
        return "Fragment";
    case Hr:
        return "Portal";
    case Au:
        return "Profiler";
    case sd:
        return "StrictMode";
    case ju:
        return "Suspense";
    case Nu:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case ym:
            return (e.displayName || "Context") + ".Consumer";
        case vm:
            return (e._context.displayName || "Context") + ".Provider";
        case id:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case ad:
            return t = e.displayName || null,
            t !== null ? t : Ou(e.type) || "Memo";
        case En:
            t = e._payload,
            e = e._init;
            try {
                return Ou(e(t))
            } catch {}
        }
    return null
}
function Rx(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Ou(t);
    case 8:
        return t === sd ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Kn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function xm(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Ax(e) {
    var t = xm(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(i) {
                r = "" + i,
                s.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function pi(e) {
    e._valueTracker || (e._valueTracker = Ax(e))
}
function bm(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = xm(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function ia(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Iu(e, t) {
    var n = t.checked;
    return ge({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Df(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Kn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function _m(e, t) {
    t = t.checked,
    t != null && od(e, "checked", t, !1)
}
function Lu(e, t) {
    _m(e, t);
    var n = Kn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Du(e, t.type, n) : t.hasOwnProperty("defaultValue") && Du(e, t.type, Kn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function $f(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Du(e, t, n) {
    (t !== "number" || ia(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ss = Array.isArray;
function no(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Kn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function $u(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(R(91));
    return ge({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Mf(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(R(92));
            if (ss(n)) {
                if (1 < n.length)
                    throw Error(R(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Kn(n)
    }
}
function Sm(e, t) {
    var n = Kn(t.value)
      , r = Kn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Ff(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Em(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Mu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Em(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var mi, km = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (mi = mi || document.createElement("div"),
        mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = mi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Es(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var us = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , jx = ["Webkit", "ms", "Moz", "O"];
Object.keys(us).forEach(function(e) {
    jx.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        us[t] = us[e]
    })
});
function Cm(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || us.hasOwnProperty(e) && us[e] ? ("" + t).trim() : t + "px"
}
function Pm(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Cm(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var Nx = ge({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Fu(e, t) {
    if (t) {
        if (Nx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(R(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(R(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(R(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(R(62))
    }
}
function zu(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Uu = null;
function ld(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Bu = null
  , ro = null
  , oo = null;
function zf(e) {
    if (e = Xs(e)) {
        if (typeof Bu != "function")
            throw Error(R(280));
        var t = e.stateNode;
        t && (t = Ha(t),
        Bu(e.stateNode, e.type, t))
    }
}
function Tm(e) {
    ro ? oo ? oo.push(e) : oo = [e] : ro = e
}
function Rm() {
    if (ro) {
        var e = ro
          , t = oo;
        if (oo = ro = null,
        zf(e),
        t)
            for (e = 0; e < t.length; e++)
                zf(t[e])
    }
}
function Am(e, t) {
    return e(t)
}
function jm() {}
var Ml = !1;
function Nm(e, t, n) {
    if (Ml)
        return e(t, n);
    Ml = !0;
    try {
        return Am(e, t, n)
    } finally {
        Ml = !1,
        (ro !== null || oo !== null) && (jm(),
        Rm())
    }
}
function ks(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ha(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(R(231, t, typeof n));
    return n
}
var Vu = !1;
if (rn)
    try {
        var Go = {};
        Object.defineProperty(Go, "passive", {
            get: function() {
                Vu = !0
            }
        }),
        window.addEventListener("test", Go, Go),
        window.removeEventListener("test", Go, Go)
    } catch {
        Vu = !1
    }
function Ox(e, t, n, r, o, s, i, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var cs = !1
  , aa = null
  , la = !1
  , Hu = null
  , Ix = {
    onError: function(e) {
        cs = !0,
        aa = e
    }
};
function Lx(e, t, n, r, o, s, i, a, l) {
    cs = !1,
    aa = null,
    Ox.apply(Ix, arguments)
}
function Dx(e, t, n, r, o, s, i, a, l) {
    if (Lx.apply(this, arguments),
    cs) {
        if (cs) {
            var u = aa;
            cs = !1,
            aa = null
        } else
            throw Error(R(198));
        la || (la = !0,
        Hu = u)
    }
}
function Pr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Om(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Uf(e) {
    if (Pr(e) !== e)
        throw Error(R(188))
}
function $x(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Pr(e),
        t === null)
            throw Error(R(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s; ) {
                if (s === n)
                    return Uf(o),
                    e;
                if (s === r)
                    return Uf(o),
                    t;
                s = s.sibling
            }
            throw Error(R(188))
        }
        if (n.return !== r.return)
            n = o,
            r = s;
        else {
            for (var i = !1, a = o.child; a; ) {
                if (a === n) {
                    i = !0,
                    n = o,
                    r = s;
                    break
                }
                if (a === r) {
                    i = !0,
                    r = o,
                    n = s;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = s.child; a; ) {
                    if (a === n) {
                        i = !0,
                        n = s,
                        r = o;
                        break
                    }
                    if (a === r) {
                        i = !0,
                        r = s,
                        n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!i)
                    throw Error(R(189))
            }
        }
        if (n.alternate !== r)
            throw Error(R(190))
    }
    if (n.tag !== 3)
        throw Error(R(188));
    return n.stateNode.current === n ? e : t
}
function Im(e) {
    return e = $x(e),
    e !== null ? Lm(e) : null
}
function Lm(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Lm(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Dm = at.unstable_scheduleCallback
  , Bf = at.unstable_cancelCallback
  , Mx = at.unstable_shouldYield
  , Fx = at.unstable_requestPaint
  , we = at.unstable_now
  , zx = at.unstable_getCurrentPriorityLevel
  , ud = at.unstable_ImmediatePriority
  , $m = at.unstable_UserBlockingPriority
  , ua = at.unstable_NormalPriority
  , Ux = at.unstable_LowPriority
  , Mm = at.unstable_IdlePriority
  , za = null
  , Wt = null;
function Bx(e) {
    if (Wt && typeof Wt.onCommitFiberRoot == "function")
        try {
            Wt.onCommitFiberRoot(za, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Tt = Math.clz32 ? Math.clz32 : Wx
  , Vx = Math.log
  , Hx = Math.LN2;
function Wx(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Vx(e) / Hx | 0) | 0
}
var gi = 64
  , vi = 4194304;
function is(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function ca(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , s = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var a = i & ~o;
        a !== 0 ? r = is(a) : (s &= i,
        s !== 0 && (r = is(s)))
    } else
        i = n & ~o,
        i !== 0 ? r = is(i) : s !== 0 && (r = is(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    s = t & -t,
    o >= s || o === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Tt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function Kx(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function qx(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var i = 31 - Tt(s)
          , a = 1 << i
          , l = o[i];
        l === -1 ? (!(a & n) || a & r) && (o[i] = Kx(a, t)) : l <= t && (e.expiredLanes |= a),
        s &= ~a
    }
}
function Wu(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Fm() {
    var e = gi;
    return gi <<= 1,
    !(gi & 4194240) && (gi = 64),
    e
}
function Fl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Ys(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Tt(t),
    e[t] = n
}
function Gx(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Tt(n)
          , s = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~s
    }
}
function cd(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Tt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var re = 0;
function zm(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Um, dd, Bm, Vm, Hm, Ku = !1, yi = [], Mn = null, Fn = null, zn = null, Cs = new Map, Ps = new Map, Pn = [], Qx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Vf(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Mn = null;
        break;
    case "dragenter":
    case "dragleave":
        Fn = null;
        break;
    case "mouseover":
    case "mouseout":
        zn = null;
        break;
    case "pointerover":
    case "pointerout":
        Cs.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Ps.delete(t.pointerId)
    }
}
function Qo(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    },
    t !== null && (t = Xs(t),
    t !== null && dd(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function Yx(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Mn = Qo(Mn, e, t, n, r, o),
        !0;
    case "dragenter":
        return Fn = Qo(Fn, e, t, n, r, o),
        !0;
    case "mouseover":
        return zn = Qo(zn, e, t, n, r, o),
        !0;
    case "pointerover":
        var s = o.pointerId;
        return Cs.set(s, Qo(Cs.get(s) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return s = o.pointerId,
        Ps.set(s, Qo(Ps.get(s) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function Wm(e) {
    var t = ur(e.target);
    if (t !== null) {
        var n = Pr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Om(n),
                t !== null) {
                    e.blockedOn = t,
                    Hm(e.priority, function() {
                        Bm(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Hi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = qu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Uu = r,
            n.target.dispatchEvent(r),
            Uu = null
        } else
            return t = Xs(n),
            t !== null && dd(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Hf(e, t, n) {
    Hi(e) && n.delete(t)
}
function Jx() {
    Ku = !1,
    Mn !== null && Hi(Mn) && (Mn = null),
    Fn !== null && Hi(Fn) && (Fn = null),
    zn !== null && Hi(zn) && (zn = null),
    Cs.forEach(Hf),
    Ps.forEach(Hf)
}
function Yo(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Ku || (Ku = !0,
    at.unstable_scheduleCallback(at.unstable_NormalPriority, Jx)))
}
function Ts(e) {
    function t(o) {
        return Yo(o, e)
    }
    if (0 < yi.length) {
        Yo(yi[0], e);
        for (var n = 1; n < yi.length; n++) {
            var r = yi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Mn !== null && Yo(Mn, e),
    Fn !== null && Yo(Fn, e),
    zn !== null && Yo(zn, e),
    Cs.forEach(t),
    Ps.forEach(t),
    n = 0; n < Pn.length; n++)
        r = Pn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Pn.length && (n = Pn[0],
    n.blockedOn === null); )
        Wm(n),
        n.blockedOn === null && Pn.shift()
}
var so = cn.ReactCurrentBatchConfig
  , da = !0;
function Xx(e, t, n, r) {
    var o = re
      , s = so.transition;
    so.transition = null;
    try {
        re = 1,
        fd(e, t, n, r)
    } finally {
        re = o,
        so.transition = s
    }
}
function Zx(e, t, n, r) {
    var o = re
      , s = so.transition;
    so.transition = null;
    try {
        re = 4,
        fd(e, t, n, r)
    } finally {
        re = o,
        so.transition = s
    }
}
function fd(e, t, n, r) {
    if (da) {
        var o = qu(e, t, n, r);
        if (o === null)
            Ql(e, t, r, fa, n),
            Vf(e, r);
        else if (Yx(o, e, t, n, r))
            r.stopPropagation();
        else if (Vf(e, r),
        t & 4 && -1 < Qx.indexOf(e)) {
            for (; o !== null; ) {
                var s = Xs(o);
                if (s !== null && Um(s),
                s = qu(e, t, n, r),
                s === null && Ql(e, t, r, fa, n),
                s === o)
                    break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else
            Ql(e, t, r, null, n)
    }
}
var fa = null;
function qu(e, t, n, r) {
    if (fa = null,
    e = ld(r),
    e = ur(e),
    e !== null)
        if (t = Pr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Om(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return fa = e,
    null
}
function Km(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (zx()) {
        case ud:
            return 1;
        case $m:
            return 4;
        case ua:
        case Ux:
            return 16;
        case Mm:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Ln = null
  , hd = null
  , Wi = null;
function qm() {
    if (Wi)
        return Wi;
    var e, t = hd, n = t.length, r, o = "value"in Ln ? Ln.value : Ln.textContent, s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[s - r]; r++)
        ;
    return Wi = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Ki(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function wi() {
    return !0
}
function Wf() {
    return !1
}
function ct(e) {
    function t(n, r, o, s, i) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = s,
        this.target = i,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? wi : Wf,
        this.isPropagationStopped = Wf,
        this
    }
    return ge(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = wi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = wi)
        },
        persist: function() {},
        isPersistent: wi
    }),
    t
}
var Lo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, pd = ct(Lo), Js = ge({}, Lo, {
    view: 0,
    detail: 0
}), e1 = ct(Js), zl, Ul, Jo, Ua = ge({}, Js, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: md,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Jo && (Jo && e.type === "mousemove" ? (zl = e.screenX - Jo.screenX,
        Ul = e.screenY - Jo.screenY) : Ul = zl = 0,
        Jo = e),
        zl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Ul
    }
}), Kf = ct(Ua), t1 = ge({}, Ua, {
    dataTransfer: 0
}), n1 = ct(t1), r1 = ge({}, Js, {
    relatedTarget: 0
}), Bl = ct(r1), o1 = ge({}, Lo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), s1 = ct(o1), i1 = ge({}, Lo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), a1 = ct(i1), l1 = ge({}, Lo, {
    data: 0
}), qf = ct(l1), u1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, c1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, d1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function f1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = d1[e]) ? !!t[e] : !1
}
function md() {
    return f1
}
var h1 = ge({}, Js, {
    key: function(e) {
        if (e.key) {
            var t = u1[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ki(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? c1[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: md,
    charCode: function(e) {
        return e.type === "keypress" ? Ki(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ki(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , p1 = ct(h1)
  , m1 = ge({}, Ua, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Gf = ct(m1)
  , g1 = ge({}, Js, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: md
})
  , v1 = ct(g1)
  , y1 = ge({}, Lo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , w1 = ct(y1)
  , x1 = ge({}, Ua, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , b1 = ct(x1)
  , _1 = [9, 13, 27, 32]
  , gd = rn && "CompositionEvent"in window
  , ds = null;
rn && "documentMode"in document && (ds = document.documentMode);
var S1 = rn && "TextEvent"in window && !ds
  , Gm = rn && (!gd || ds && 8 < ds && 11 >= ds)
  , Qf = " "
  , Yf = !1;
function Qm(e, t) {
    switch (e) {
    case "keyup":
        return _1.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Ym(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Kr = !1;
function E1(e, t) {
    switch (e) {
    case "compositionend":
        return Ym(t);
    case "keypress":
        return t.which !== 32 ? null : (Yf = !0,
        Qf);
    case "textInput":
        return e = t.data,
        e === Qf && Yf ? null : e;
    default:
        return null
    }
}
function k1(e, t) {
    if (Kr)
        return e === "compositionend" || !gd && Qm(e, t) ? (e = qm(),
        Wi = hd = Ln = null,
        Kr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Gm && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var C1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Jf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!C1[e.type] : t === "textarea"
}
function Jm(e, t, n, r) {
    Tm(r),
    t = ha(t, "onChange"),
    0 < t.length && (n = new pd("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var fs = null
  , Rs = null;
function P1(e) {
    lg(e, 0)
}
function Ba(e) {
    var t = Qr(e);
    if (bm(t))
        return e
}
function T1(e, t) {
    if (e === "change")
        return t
}
var Xm = !1;
if (rn) {
    var Vl;
    if (rn) {
        var Hl = "oninput"in document;
        if (!Hl) {
            var Xf = document.createElement("div");
            Xf.setAttribute("oninput", "return;"),
            Hl = typeof Xf.oninput == "function"
        }
        Vl = Hl
    } else
        Vl = !1;
    Xm = Vl && (!document.documentMode || 9 < document.documentMode)
}
function Zf() {
    fs && (fs.detachEvent("onpropertychange", Zm),
    Rs = fs = null)
}
function Zm(e) {
    if (e.propertyName === "value" && Ba(Rs)) {
        var t = [];
        Jm(t, Rs, e, ld(e)),
        Nm(P1, t)
    }
}
function R1(e, t, n) {
    e === "focusin" ? (Zf(),
    fs = t,
    Rs = n,
    fs.attachEvent("onpropertychange", Zm)) : e === "focusout" && Zf()
}
function A1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ba(Rs)
}
function j1(e, t) {
    if (e === "click")
        return Ba(t)
}
function N1(e, t) {
    if (e === "input" || e === "change")
        return Ba(t)
}
function O1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var jt = typeof Object.is == "function" ? Object.is : O1;
function As(e, t) {
    if (jt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Ru.call(t, o) || !jt(e[o], t[o]))
            return !1
    }
    return !0
}
function eh(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function th(e, t) {
    var n = eh(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = eh(n)
    }
}
function eg(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? eg(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function tg() {
    for (var e = window, t = ia(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = ia(e.document)
    }
    return t
}
function vd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function I1(e) {
    var t = tg()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && eg(n.ownerDocument.documentElement, n)) {
        if (r !== null && vd(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o),
                !e.extend && s > r && (o = r,
                r = s,
                s = o),
                o = th(n, s);
                var i = th(n, r);
                o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var L1 = rn && "documentMode"in document && 11 >= document.documentMode
  , qr = null
  , Gu = null
  , hs = null
  , Qu = !1;
function nh(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Qu || qr == null || qr !== ia(r) || (r = qr,
    "selectionStart"in r && vd(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    hs && As(hs, r) || (hs = r,
    r = ha(Gu, "onSelect"),
    0 < r.length && (t = new pd("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = qr)))
}
function xi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Gr = {
    animationend: xi("Animation", "AnimationEnd"),
    animationiteration: xi("Animation", "AnimationIteration"),
    animationstart: xi("Animation", "AnimationStart"),
    transitionend: xi("Transition", "TransitionEnd")
}
  , Wl = {}
  , ng = {};
rn && (ng = document.createElement("div").style,
"AnimationEvent"in window || (delete Gr.animationend.animation,
delete Gr.animationiteration.animation,
delete Gr.animationstart.animation),
"TransitionEvent"in window || delete Gr.transitionend.transition);
function Va(e) {
    if (Wl[e])
        return Wl[e];
    if (!Gr[e])
        return e;
    var t = Gr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in ng)
            return Wl[e] = t[n];
    return e
}
var rg = Va("animationend")
  , og = Va("animationiteration")
  , sg = Va("animationstart")
  , ig = Va("transitionend")
  , ag = new Map
  , rh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Zn(e, t) {
    ag.set(e, t),
    Cr(t, [e])
}
for (var Kl = 0; Kl < rh.length; Kl++) {
    var ql = rh[Kl]
      , D1 = ql.toLowerCase()
      , $1 = ql[0].toUpperCase() + ql.slice(1);
    Zn(D1, "on" + $1)
}
Zn(rg, "onAnimationEnd");
Zn(og, "onAnimationIteration");
Zn(sg, "onAnimationStart");
Zn("dblclick", "onDoubleClick");
Zn("focusin", "onFocus");
Zn("focusout", "onBlur");
Zn(ig, "onTransitionEnd");
_o("onMouseEnter", ["mouseout", "mouseover"]);
_o("onMouseLeave", ["mouseout", "mouseover"]);
_o("onPointerEnter", ["pointerout", "pointerover"]);
_o("onPointerLeave", ["pointerout", "pointerover"]);
Cr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Cr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Cr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Cr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Cr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Cr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , M1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
function oh(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Dx(r, t, void 0, e),
    e.currentTarget = null
}
function lg(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== s && o.isPropagationStopped())
                        break e;
                    oh(o, a, u),
                    s = l
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (a = r[i],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== s && o.isPropagationStopped())
                        break e;
                    oh(o, a, u),
                    s = l
                }
        }
    }
    if (la)
        throw e = Hu,
        la = !1,
        Hu = null,
        e
}
function ce(e, t) {
    var n = t[ec];
    n === void 0 && (n = t[ec] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ug(t, e, 2, !1),
    n.add(r))
}
function Gl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    ug(n, e, r, t)
}
var bi = "_reactListening" + Math.random().toString(36).slice(2);
function js(e) {
    if (!e[bi]) {
        e[bi] = !0,
        gm.forEach(function(n) {
            n !== "selectionchange" && (M1.has(n) || Gl(n, !1, e),
            Gl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[bi] || (t[bi] = !0,
        Gl("selectionchange", !1, t))
    }
}
function ug(e, t, n, r) {
    switch (Km(t)) {
    case 1:
        var o = Xx;
        break;
    case 4:
        o = Zx;
        break;
    default:
        o = fd
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !Vu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Ql(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var l = i.tag;
                        if ((l === 3 || l === 4) && (l = i.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        i = i.return
                    }
                for (; a !== null; ) {
                    if (i = ur(a),
                    i === null)
                        return;
                    if (l = i.tag,
                    l === 5 || l === 6) {
                        r = s = i;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Nm(function() {
        var u = s
          , c = ld(n)
          , f = [];
        e: {
            var d = ag.get(e);
            if (d !== void 0) {
                var m = pd
                  , y = e;
                switch (e) {
                case "keypress":
                    if (Ki(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    m = p1;
                    break;
                case "focusin":
                    y = "focus",
                    m = Bl;
                    break;
                case "focusout":
                    y = "blur",
                    m = Bl;
                    break;
                case "beforeblur":
                case "afterblur":
                    m = Bl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    m = Kf;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    m = n1;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    m = v1;
                    break;
                case rg:
                case og:
                case sg:
                    m = s1;
                    break;
                case ig:
                    m = w1;
                    break;
                case "scroll":
                    m = e1;
                    break;
                case "wheel":
                    m = b1;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    m = a1;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    m = Gf
                }
                var h = (t & 4) !== 0
                  , w = !h && e === "scroll"
                  , g = h ? d !== null ? d + "Capture" : null : d;
                h = [];
                for (var v = u, x; v !== null; ) {
                    x = v;
                    var _ = x.stateNode;
                    if (x.tag === 5 && _ !== null && (x = _,
                    g !== null && (_ = ks(v, g),
                    _ != null && h.push(Ns(v, _, x)))),
                    w)
                        break;
                    v = v.return
                }
                0 < h.length && (d = new m(d,y,null,n,c),
                f.push({
                    event: d,
                    listeners: h
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (d = e === "mouseover" || e === "pointerover",
                m = e === "mouseout" || e === "pointerout",
                d && n !== Uu && (y = n.relatedTarget || n.fromElement) && (ur(y) || y[on]))
                    break e;
                if ((m || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
                m ? (y = n.relatedTarget || n.toElement,
                m = u,
                y = y ? ur(y) : null,
                y !== null && (w = Pr(y),
                y !== w || y.tag !== 5 && y.tag !== 6) && (y = null)) : (m = null,
                y = u),
                m !== y)) {
                    if (h = Kf,
                    _ = "onMouseLeave",
                    g = "onMouseEnter",
                    v = "mouse",
                    (e === "pointerout" || e === "pointerover") && (h = Gf,
                    _ = "onPointerLeave",
                    g = "onPointerEnter",
                    v = "pointer"),
                    w = m == null ? d : Qr(m),
                    x = y == null ? d : Qr(y),
                    d = new h(_,v + "leave",m,n,c),
                    d.target = w,
                    d.relatedTarget = x,
                    _ = null,
                    ur(c) === u && (h = new h(g,v + "enter",y,n,c),
                    h.target = x,
                    h.relatedTarget = w,
                    _ = h),
                    w = _,
                    m && y)
                        t: {
                            for (h = m,
                            g = y,
                            v = 0,
                            x = h; x; x = Ir(x))
                                v++;
                            for (x = 0,
                            _ = g; _; _ = Ir(_))
                                x++;
                            for (; 0 < v - x; )
                                h = Ir(h),
                                v--;
                            for (; 0 < x - v; )
                                g = Ir(g),
                                x--;
                            for (; v--; ) {
                                if (h === g || g !== null && h === g.alternate)
                                    break t;
                                h = Ir(h),
                                g = Ir(g)
                            }
                            h = null
                        }
                    else
                        h = null;
                    m !== null && sh(f, d, m, h, !1),
                    y !== null && w !== null && sh(f, w, y, h, !0)
                }
            }
            e: {
                if (d = u ? Qr(u) : window,
                m = d.nodeName && d.nodeName.toLowerCase(),
                m === "select" || m === "input" && d.type === "file")
                    var S = T1;
                else if (Jf(d))
                    if (Xm)
                        S = N1;
                    else {
                        S = A1;
                        var E = R1
                    }
                else
                    (m = d.nodeName) && m.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = j1);
                if (S && (S = S(e, u))) {
                    Jm(f, S, n, c);
                    break e
                }
                E && E(e, d, u),
                e === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && Du(d, "number", d.value)
            }
            switch (E = u ? Qr(u) : window,
            e) {
            case "focusin":
                (Jf(E) || E.contentEditable === "true") && (qr = E,
                Gu = u,
                hs = null);
                break;
            case "focusout":
                hs = Gu = qr = null;
                break;
            case "mousedown":
                Qu = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Qu = !1,
                nh(f, n, c);
                break;
            case "selectionchange":
                if (L1)
                    break;
            case "keydown":
            case "keyup":
                nh(f, n, c)
            }
            var C;
            if (gd)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                Kr ? Qm(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (Gm && n.locale !== "ko" && (Kr || P !== "onCompositionStart" ? P === "onCompositionEnd" && Kr && (C = qm()) : (Ln = c,
            hd = "value"in Ln ? Ln.value : Ln.textContent,
            Kr = !0)),
            E = ha(u, P),
            0 < E.length && (P = new qf(P,e,null,n,c),
            f.push({
                event: P,
                listeners: E
            }),
            C ? P.data = C : (C = Ym(n),
            C !== null && (P.data = C)))),
            (C = S1 ? E1(e, n) : k1(e, n)) && (u = ha(u, "onBeforeInput"),
            0 < u.length && (c = new qf("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = C))
        }
        lg(f, t)
    })
}
function Ns(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ha(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , s = o.stateNode;
        o.tag === 5 && s !== null && (o = s,
        s = ks(e, n),
        s != null && r.unshift(Ns(e, s, o)),
        s = ks(e, t),
        s != null && r.push(Ns(e, s, o))),
        e = e.return
    }
    return r
}
function Ir(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function sh(e, t, n, r, o) {
    for (var s = t._reactName, i = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        o ? (l = ks(n, s),
        l != null && i.unshift(Ns(n, l, a))) : o || (l = ks(n, s),
        l != null && i.push(Ns(n, l, a)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var F1 = /\r\n?/g
  , z1 = /\u0000|\uFFFD/g;
function ih(e) {
    return (typeof e == "string" ? e : "" + e).replace(F1, `
`).replace(z1, "")
}
function _i(e, t, n) {
    if (t = ih(t),
    ih(e) !== t && n)
        throw Error(R(425))
}
function pa() {}
var Yu = null
  , Ju = null;
function Xu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Zu = typeof setTimeout == "function" ? setTimeout : void 0
  , U1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , ah = typeof Promise == "function" ? Promise : void 0
  , B1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ah < "u" ? function(e) {
    return ah.resolve(null).then(e).catch(V1)
}
: Zu;
function V1(e) {
    setTimeout(function() {
        throw e
    })
}
function Yl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    Ts(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Ts(t)
}
function Un(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function lh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Do = Math.random().toString(36).slice(2)
  , Vt = "__reactFiber$" + Do
  , Os = "__reactProps$" + Do
  , on = "__reactContainer$" + Do
  , ec = "__reactEvents$" + Do
  , H1 = "__reactListeners$" + Do
  , W1 = "__reactHandles$" + Do;
function ur(e) {
    var t = e[Vt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[on] || n[Vt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = lh(e); e !== null; ) {
                    if (n = e[Vt])
                        return n;
                    e = lh(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Xs(e) {
    return e = e[Vt] || e[on],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Qr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(R(33))
}
function Ha(e) {
    return e[Os] || null
}
var tc = []
  , Yr = -1;
function er(e) {
    return {
        current: e
    }
}
function de(e) {
    0 > Yr || (e.current = tc[Yr],
    tc[Yr] = null,
    Yr--)
}
function ae(e, t) {
    Yr++,
    tc[Yr] = e.current,
    e.current = t
}
var qn = {}
  , $e = er(qn)
  , Qe = er(!1)
  , wr = qn;
function So(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return qn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, s;
    for (s in n)
        o[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function Ye(e) {
    return e = e.childContextTypes,
    e != null
}
function ma() {
    de(Qe),
    de($e)
}
function uh(e, t, n) {
    if ($e.current !== qn)
        throw Error(R(168));
    ae($e, t),
    ae(Qe, n)
}
function cg(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(R(108, Rx(e) || "Unknown", o));
    return ge({}, n, r)
}
function ga(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qn,
    wr = $e.current,
    ae($e, e),
    ae(Qe, Qe.current),
    !0
}
function ch(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(R(169));
    n ? (e = cg(e, t, wr),
    r.__reactInternalMemoizedMergedChildContext = e,
    de(Qe),
    de($e),
    ae($e, e)) : de(Qe),
    ae(Qe, n)
}
var Zt = null
  , Wa = !1
  , Jl = !1;
function dg(e) {
    Zt === null ? Zt = [e] : Zt.push(e)
}
function K1(e) {
    Wa = !0,
    dg(e)
}
function tr() {
    if (!Jl && Zt !== null) {
        Jl = !0;
        var e = 0
          , t = re;
        try {
            var n = Zt;
            for (re = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Zt = null,
            Wa = !1
        } catch (o) {
            throw Zt !== null && (Zt = Zt.slice(e + 1)),
            Dm(ud, tr),
            o
        } finally {
            re = t,
            Jl = !1
        }
    }
    return null
}
var Jr = []
  , Xr = 0
  , va = null
  , ya = 0
  , ft = []
  , ht = 0
  , xr = null
  , en = 1
  , tn = "";
function sr(e, t) {
    Jr[Xr++] = ya,
    Jr[Xr++] = va,
    va = e,
    ya = t
}
function fg(e, t, n) {
    ft[ht++] = en,
    ft[ht++] = tn,
    ft[ht++] = xr,
    xr = e;
    var r = en;
    e = tn;
    var o = 32 - Tt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var s = 32 - Tt(t) + o;
    if (30 < s) {
        var i = o - o % 5;
        s = (r & (1 << i) - 1).toString(32),
        r >>= i,
        o -= i,
        en = 1 << 32 - Tt(t) + o | n << o | r,
        tn = s + e
    } else
        en = 1 << s | n << o | r,
        tn = e
}
function yd(e) {
    e.return !== null && (sr(e, 1),
    fg(e, 1, 0))
}
function wd(e) {
    for (; e === va; )
        va = Jr[--Xr],
        Jr[Xr] = null,
        ya = Jr[--Xr],
        Jr[Xr] = null;
    for (; e === xr; )
        xr = ft[--ht],
        ft[ht] = null,
        tn = ft[--ht],
        ft[ht] = null,
        en = ft[--ht],
        ft[ht] = null
}
var st = null
  , ot = null
  , fe = !1
  , Pt = null;
function hg(e, t) {
    var n = pt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function dh(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        st = e,
        ot = Un(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        st = e,
        ot = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = xr !== null ? {
            id: en,
            overflow: tn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = pt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        st = e,
        ot = null,
        !0) : !1;
    default:
        return !1
    }
}
function nc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function rc(e) {
    if (fe) {
        var t = ot;
        if (t) {
            var n = t;
            if (!dh(e, t)) {
                if (nc(e))
                    throw Error(R(418));
                t = Un(n.nextSibling);
                var r = st;
                t && dh(e, t) ? hg(r, n) : (e.flags = e.flags & -4097 | 2,
                fe = !1,
                st = e)
            }
        } else {
            if (nc(e))
                throw Error(R(418));
            e.flags = e.flags & -4097 | 2,
            fe = !1,
            st = e
        }
    }
}
function fh(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    st = e
}
function Si(e) {
    if (e !== st)
        return !1;
    if (!fe)
        return fh(e),
        fe = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Xu(e.type, e.memoizedProps)),
    t && (t = ot)) {
        if (nc(e))
            throw pg(),
            Error(R(418));
        for (; t; )
            hg(e, t),
            t = Un(t.nextSibling)
    }
    if (fh(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(R(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ot = Un(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ot = null
        }
    } else
        ot = st ? Un(e.stateNode.nextSibling) : null;
    return !0
}
function pg() {
    for (var e = ot; e; )
        e = Un(e.nextSibling)
}
function Eo() {
    ot = st = null,
    fe = !1
}
function xd(e) {
    Pt === null ? Pt = [e] : Pt.push(e)
}
var q1 = cn.ReactCurrentBatchConfig;
function Xo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(R(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(R(147, e));
            var o = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(i) {
                var a = o.refs;
                i === null ? delete a[s] : a[s] = i
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(R(284));
        if (!n._owner)
            throw Error(R(290, e))
    }
    return e
}
function Ei(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function hh(e) {
    var t = e._init;
    return t(e._payload)
}
function mg(e) {
    function t(g, v) {
        if (e) {
            var x = g.deletions;
            x === null ? (g.deletions = [v],
            g.flags |= 16) : x.push(v)
        }
    }
    function n(g, v) {
        if (!e)
            return null;
        for (; v !== null; )
            t(g, v),
            v = v.sibling;
        return null
    }
    function r(g, v) {
        for (g = new Map; v !== null; )
            v.key !== null ? g.set(v.key, v) : g.set(v.index, v),
            v = v.sibling;
        return g
    }
    function o(g, v) {
        return g = Wn(g, v),
        g.index = 0,
        g.sibling = null,
        g
    }
    function s(g, v, x) {
        return g.index = x,
        e ? (x = g.alternate,
        x !== null ? (x = x.index,
        x < v ? (g.flags |= 2,
        v) : x) : (g.flags |= 2,
        v)) : (g.flags |= 1048576,
        v)
    }
    function i(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function a(g, v, x, _) {
        return v === null || v.tag !== 6 ? (v = ou(x, g.mode, _),
        v.return = g,
        v) : (v = o(v, x),
        v.return = g,
        v)
    }
    function l(g, v, x, _) {
        var S = x.type;
        return S === Wr ? c(g, v, x.props.children, _, x.key) : v !== null && (v.elementType === S || typeof S == "object" && S !== null && S.$$typeof === En && hh(S) === v.type) ? (_ = o(v, x.props),
        _.ref = Xo(g, v, x),
        _.return = g,
        _) : (_ = Zi(x.type, x.key, x.props, null, g.mode, _),
        _.ref = Xo(g, v, x),
        _.return = g,
        _)
    }
    function u(g, v, x, _) {
        return v === null || v.tag !== 4 || v.stateNode.containerInfo !== x.containerInfo || v.stateNode.implementation !== x.implementation ? (v = su(x, g.mode, _),
        v.return = g,
        v) : (v = o(v, x.children || []),
        v.return = g,
        v)
    }
    function c(g, v, x, _, S) {
        return v === null || v.tag !== 7 ? (v = vr(x, g.mode, _, S),
        v.return = g,
        v) : (v = o(v, x),
        v.return = g,
        v)
    }
    function f(g, v, x) {
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return v = ou("" + v, g.mode, x),
            v.return = g,
            v;
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case hi:
                return x = Zi(v.type, v.key, v.props, null, g.mode, x),
                x.ref = Xo(g, null, v),
                x.return = g,
                x;
            case Hr:
                return v = su(v, g.mode, x),
                v.return = g,
                v;
            case En:
                var _ = v._init;
                return f(g, _(v._payload), x)
            }
            if (ss(v) || qo(v))
                return v = vr(v, g.mode, x, null),
                v.return = g,
                v;
            Ei(g, v)
        }
        return null
    }
    function d(g, v, x, _) {
        var S = v !== null ? v.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return S !== null ? null : a(g, v, "" + x, _);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case hi:
                return x.key === S ? l(g, v, x, _) : null;
            case Hr:
                return x.key === S ? u(g, v, x, _) : null;
            case En:
                return S = x._init,
                d(g, v, S(x._payload), _)
            }
            if (ss(x) || qo(x))
                return S !== null ? null : c(g, v, x, _, null);
            Ei(g, x)
        }
        return null
    }
    function m(g, v, x, _, S) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
            return g = g.get(x) || null,
            a(v, g, "" + _, S);
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
            case hi:
                return g = g.get(_.key === null ? x : _.key) || null,
                l(v, g, _, S);
            case Hr:
                return g = g.get(_.key === null ? x : _.key) || null,
                u(v, g, _, S);
            case En:
                var E = _._init;
                return m(g, v, x, E(_._payload), S)
            }
            if (ss(_) || qo(_))
                return g = g.get(x) || null,
                c(v, g, _, S, null);
            Ei(v, _)
        }
        return null
    }
    function y(g, v, x, _) {
        for (var S = null, E = null, C = v, P = v = 0, L = null; C !== null && P < x.length; P++) {
            C.index > P ? (L = C,
            C = null) : L = C.sibling;
            var O = d(g, C, x[P], _);
            if (O === null) {
                C === null && (C = L);
                break
            }
            e && C && O.alternate === null && t(g, C),
            v = s(O, v, P),
            E === null ? S = O : E.sibling = O,
            E = O,
            C = L
        }
        if (P === x.length)
            return n(g, C),
            fe && sr(g, P),
            S;
        if (C === null) {
            for (; P < x.length; P++)
                C = f(g, x[P], _),
                C !== null && (v = s(C, v, P),
                E === null ? S = C : E.sibling = C,
                E = C);
            return fe && sr(g, P),
            S
        }
        for (C = r(g, C); P < x.length; P++)
            L = m(C, g, P, x[P], _),
            L !== null && (e && L.alternate !== null && C.delete(L.key === null ? P : L.key),
            v = s(L, v, P),
            E === null ? S = L : E.sibling = L,
            E = L);
        return e && C.forEach(function(A) {
            return t(g, A)
        }),
        fe && sr(g, P),
        S
    }
    function h(g, v, x, _) {
        var S = qo(x);
        if (typeof S != "function")
            throw Error(R(150));
        if (x = S.call(x),
        x == null)
            throw Error(R(151));
        for (var E = S = null, C = v, P = v = 0, L = null, O = x.next(); C !== null && !O.done; P++,
        O = x.next()) {
            C.index > P ? (L = C,
            C = null) : L = C.sibling;
            var A = d(g, C, O.value, _);
            if (A === null) {
                C === null && (C = L);
                break
            }
            e && C && A.alternate === null && t(g, C),
            v = s(A, v, P),
            E === null ? S = A : E.sibling = A,
            E = A,
            C = L
        }
        if (O.done)
            return n(g, C),
            fe && sr(g, P),
            S;
        if (C === null) {
            for (; !O.done; P++,
            O = x.next())
                O = f(g, O.value, _),
                O !== null && (v = s(O, v, P),
                E === null ? S = O : E.sibling = O,
                E = O);
            return fe && sr(g, P),
            S
        }
        for (C = r(g, C); !O.done; P++,
        O = x.next())
            O = m(C, g, P, O.value, _),
            O !== null && (e && O.alternate !== null && C.delete(O.key === null ? P : O.key),
            v = s(O, v, P),
            E === null ? S = O : E.sibling = O,
            E = O);
        return e && C.forEach(function(N) {
            return t(g, N)
        }),
        fe && sr(g, P),
        S
    }
    function w(g, v, x, _) {
        if (typeof x == "object" && x !== null && x.type === Wr && x.key === null && (x = x.props.children),
        typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case hi:
                e: {
                    for (var S = x.key, E = v; E !== null; ) {
                        if (E.key === S) {
                            if (S = x.type,
                            S === Wr) {
                                if (E.tag === 7) {
                                    n(g, E.sibling),
                                    v = o(E, x.props.children),
                                    v.return = g,
                                    g = v;
                                    break e
                                }
                            } else if (E.elementType === S || typeof S == "object" && S !== null && S.$$typeof === En && hh(S) === E.type) {
                                n(g, E.sibling),
                                v = o(E, x.props),
                                v.ref = Xo(g, E, x),
                                v.return = g,
                                g = v;
                                break e
                            }
                            n(g, E);
                            break
                        } else
                            t(g, E);
                        E = E.sibling
                    }
                    x.type === Wr ? (v = vr(x.props.children, g.mode, _, x.key),
                    v.return = g,
                    g = v) : (_ = Zi(x.type, x.key, x.props, null, g.mode, _),
                    _.ref = Xo(g, v, x),
                    _.return = g,
                    g = _)
                }
                return i(g);
            case Hr:
                e: {
                    for (E = x.key; v !== null; ) {
                        if (v.key === E)
                            if (v.tag === 4 && v.stateNode.containerInfo === x.containerInfo && v.stateNode.implementation === x.implementation) {
                                n(g, v.sibling),
                                v = o(v, x.children || []),
                                v.return = g,
                                g = v;
                                break e
                            } else {
                                n(g, v);
                                break
                            }
                        else
                            t(g, v);
                        v = v.sibling
                    }
                    v = su(x, g.mode, _),
                    v.return = g,
                    g = v
                }
                return i(g);
            case En:
                return E = x._init,
                w(g, v, E(x._payload), _)
            }
            if (ss(x))
                return y(g, v, x, _);
            if (qo(x))
                return h(g, v, x, _);
            Ei(g, x)
        }
        return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x,
        v !== null && v.tag === 6 ? (n(g, v.sibling),
        v = o(v, x),
        v.return = g,
        g = v) : (n(g, v),
        v = ou(x, g.mode, _),
        v.return = g,
        g = v),
        i(g)) : n(g, v)
    }
    return w
}
var ko = mg(!0)
  , gg = mg(!1)
  , wa = er(null)
  , xa = null
  , Zr = null
  , bd = null;
function _d() {
    bd = Zr = xa = null
}
function Sd(e) {
    var t = wa.current;
    de(wa),
    e._currentValue = t
}
function oc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function io(e, t) {
    xa = e,
    bd = Zr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ge = !0),
    e.firstContext = null)
}
function vt(e) {
    var t = e._currentValue;
    if (bd !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Zr === null) {
            if (xa === null)
                throw Error(R(308));
            Zr = e,
            xa.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Zr = Zr.next = e;
    return t
}
var cr = null;
function Ed(e) {
    cr === null ? cr = [e] : cr.push(e)
}
function vg(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    Ed(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    sn(e, r)
}
function sn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var kn = !1;
function kd(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function yg(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function nn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Bn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    Z & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        sn(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    Ed(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    sn(e, n)
}
function qi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        cd(e, n)
    }
}
function ph(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = i : s = s.next = i,
                n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else
            o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ba(e, t, n, r) {
    var o = e.updateQueue;
    kn = !1;
    var s = o.firstBaseUpdate
      , i = o.lastBaseUpdate
      , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        i === null ? s = u : i.next = u,
        i = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== i && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (s !== null) {
        var f = o.baseState;
        i = 0,
        c = u = l = null,
        a = s;
        do {
            var d = a.lane
              , m = a.eventTime;
            if ((r & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: m,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var y = e
                      , h = a;
                    switch (d = t,
                    m = n,
                    h.tag) {
                    case 1:
                        if (y = h.payload,
                        typeof y == "function") {
                            f = y.call(m, f, d);
                            break e
                        }
                        f = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = h.payload,
                        d = typeof y == "function" ? y.call(m, f, d) : y,
                        d == null)
                            break e;
                        f = ge({}, f, d);
                        break e;
                    case 2:
                        kn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                d = o.effects,
                d === null ? o.effects = [a] : d.push(a))
            } else
                m = {
                    eventTime: m,
                    lane: d,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = m,
                l = f) : c = c.next = m,
                i |= d;
            if (a = a.next,
            a === null) {
                if (a = o.shared.pending,
                a === null)
                    break;
                d = a,
                a = d.next,
                d.next = null,
                o.lastBaseUpdate = d,
                o.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = f),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = c,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                i |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            s === null && (o.shared.lanes = 0);
        _r |= i,
        e.lanes = i,
        e.memoizedState = f
    }
}
function mh(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(R(191, o));
                o.call(r)
            }
        }
}
var Zs = {}
  , Kt = er(Zs)
  , Is = er(Zs)
  , Ls = er(Zs);
function dr(e) {
    if (e === Zs)
        throw Error(R(174));
    return e
}
function Cd(e, t) {
    switch (ae(Ls, t),
    ae(Is, e),
    ae(Kt, Zs),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Mu(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Mu(t, e)
    }
    de(Kt),
    ae(Kt, t)
}
function Co() {
    de(Kt),
    de(Is),
    de(Ls)
}
function wg(e) {
    dr(Ls.current);
    var t = dr(Kt.current)
      , n = Mu(t, e.type);
    t !== n && (ae(Is, e),
    ae(Kt, n))
}
function Pd(e) {
    Is.current === e && (de(Kt),
    de(Is))
}
var pe = er(0);
function _a(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Xl = [];
function Td() {
    for (var e = 0; e < Xl.length; e++)
        Xl[e]._workInProgressVersionPrimary = null;
    Xl.length = 0
}
var Gi = cn.ReactCurrentDispatcher
  , Zl = cn.ReactCurrentBatchConfig
  , br = 0
  , me = null
  , _e = null
  , Ce = null
  , Sa = !1
  , ps = !1
  , Ds = 0
  , G1 = 0;
function Oe() {
    throw Error(R(321))
}
function Rd(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!jt(e[n], t[n]))
            return !1;
    return !0
}
function Ad(e, t, n, r, o, s) {
    if (br = s,
    me = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Gi.current = e === null || e.memoizedState === null ? X1 : Z1,
    e = n(r, o),
    ps) {
        s = 0;
        do {
            if (ps = !1,
            Ds = 0,
            25 <= s)
                throw Error(R(301));
            s += 1,
            Ce = _e = null,
            t.updateQueue = null,
            Gi.current = eb,
            e = n(r, o)
        } while (ps)
    }
    if (Gi.current = Ea,
    t = _e !== null && _e.next !== null,
    br = 0,
    Ce = _e = me = null,
    Sa = !1,
    t)
        throw Error(R(300));
    return e
}
function jd() {
    var e = Ds !== 0;
    return Ds = 0,
    e
}
function Ft() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ce === null ? me.memoizedState = Ce = e : Ce = Ce.next = e,
    Ce
}
function yt() {
    if (_e === null) {
        var e = me.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = _e.next;
    var t = Ce === null ? me.memoizedState : Ce.next;
    if (t !== null)
        Ce = t,
        _e = e;
    else {
        if (e === null)
            throw Error(R(310));
        _e = e,
        e = {
            memoizedState: _e.memoizedState,
            baseState: _e.baseState,
            baseQueue: _e.baseQueue,
            queue: _e.queue,
            next: null
        },
        Ce === null ? me.memoizedState = Ce = e : Ce = Ce.next = e
    }
    return Ce
}
function $s(e, t) {
    return typeof t == "function" ? t(e) : t
}
function eu(e) {
    var t = yt()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = _e
      , o = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var i = o.next;
            o.next = s.next,
            s.next = i
        }
        r.baseQueue = o = s,
        n.pending = null
    }
    if (o !== null) {
        s = o.next,
        r = r.baseState;
        var a = i = null
          , l = null
          , u = s;
        do {
            var c = u.lane;
            if ((br & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = f,
                i = r) : l = l.next = f,
                me.lanes |= c,
                _r |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? i = r : l.next = a,
        jt(r, t.memoizedState) || (Ge = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            s = o.lane,
            me.lanes |= s,
            _r |= s,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function tu(e) {
    var t = yt()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var i = o = o.next;
        do
            s = e(s, i.action),
            i = i.next;
        while (i !== o);
        jt(s, t.memoizedState) || (Ge = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function xg() {}
function bg(e, t) {
    var n = me
      , r = yt()
      , o = t()
      , s = !jt(r.memoizedState, o);
    if (s && (r.memoizedState = o,
    Ge = !0),
    r = r.queue,
    Nd(Eg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || Ce !== null && Ce.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Ms(9, Sg.bind(null, n, r, o, t), void 0, null),
        Pe === null)
            throw Error(R(349));
        br & 30 || _g(n, t, o)
    }
    return o
}
function _g(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = me.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    me.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Sg(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    kg(t) && Cg(e)
}
function Eg(e, t, n) {
    return n(function() {
        kg(t) && Cg(e)
    })
}
function kg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !jt(e, n)
    } catch {
        return !0
    }
}
function Cg(e) {
    var t = sn(e, 1);
    t !== null && Rt(t, e, 1, -1)
}
function gh(e) {
    var t = Ft();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $s,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = J1.bind(null, me, e),
    [t.memoizedState, e]
}
function Ms(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = me.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    me.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Pg() {
    return yt().memoizedState
}
function Qi(e, t, n, r) {
    var o = Ft();
    me.flags |= e,
    o.memoizedState = Ms(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ka(e, t, n, r) {
    var o = yt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (_e !== null) {
        var i = _e.memoizedState;
        if (s = i.destroy,
        r !== null && Rd(r, i.deps)) {
            o.memoizedState = Ms(t, n, s, r);
            return
        }
    }
    me.flags |= e,
    o.memoizedState = Ms(1 | t, n, s, r)
}
function vh(e, t) {
    return Qi(8390656, 8, e, t)
}
function Nd(e, t) {
    return Ka(2048, 8, e, t)
}
function Tg(e, t) {
    return Ka(4, 2, e, t)
}
function Rg(e, t) {
    return Ka(4, 4, e, t)
}
function Ag(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function jg(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ka(4, 4, Ag.bind(null, t, e), n)
}
function Od() {}
function Ng(e, t) {
    var n = yt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Rd(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Og(e, t) {
    var n = yt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Rd(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Ig(e, t, n) {
    return br & 21 ? (jt(n, t) || (n = Fm(),
    me.lanes |= n,
    _r |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ge = !0),
    e.memoizedState = n)
}
function Q1(e, t) {
    var n = re;
    re = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Zl.transition;
    Zl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        re = n,
        Zl.transition = r
    }
}
function Lg() {
    return yt().memoizedState
}
function Y1(e, t, n) {
    var r = Hn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Dg(e))
        $g(t, n);
    else if (n = vg(e, t, n, r),
    n !== null) {
        var o = Ue();
        Rt(n, e, r, o),
        Mg(n, t, r)
    }
}
function J1(e, t, n) {
    var r = Hn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Dg(e))
        $g(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var i = t.lastRenderedState
                  , a = s(i, n);
                if (o.hasEagerState = !0,
                o.eagerState = a,
                jt(a, i)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    Ed(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = vg(e, t, o, r),
        n !== null && (o = Ue(),
        Rt(n, e, r, o),
        Mg(n, t, r))
    }
}
function Dg(e) {
    var t = e.alternate;
    return e === me || t !== null && t === me
}
function $g(e, t) {
    ps = Sa = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Mg(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        cd(e, n)
    }
}
var Ea = {
    readContext: vt,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1
}
  , X1 = {
    readContext: vt,
    useCallback: function(e, t) {
        return Ft().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: vt,
    useEffect: vh,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Qi(4194308, 4, Ag.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Qi(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Qi(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Ft();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Ft();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Y1.bind(null, me, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Ft();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: gh,
    useDebugValue: Od,
    useDeferredValue: function(e) {
        return Ft().memoizedState = e
    },
    useTransition: function() {
        var e = gh(!1)
          , t = e[0];
        return e = Q1.bind(null, e[1]),
        Ft().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = me
          , o = Ft();
        if (fe) {
            if (n === void 0)
                throw Error(R(407));
            n = n()
        } else {
            if (n = t(),
            Pe === null)
                throw Error(R(349));
            br & 30 || _g(r, t, n)
        }
        o.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return o.queue = s,
        vh(Eg.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        Ms(9, Sg.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Ft()
          , t = Pe.identifierPrefix;
        if (fe) {
            var n = tn
              , r = en;
            n = (r & ~(1 << 32 - Tt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Ds++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = G1++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Z1 = {
    readContext: vt,
    useCallback: Ng,
    useContext: vt,
    useEffect: Nd,
    useImperativeHandle: jg,
    useInsertionEffect: Tg,
    useLayoutEffect: Rg,
    useMemo: Og,
    useReducer: eu,
    useRef: Pg,
    useState: function() {
        return eu($s)
    },
    useDebugValue: Od,
    useDeferredValue: function(e) {
        var t = yt();
        return Ig(t, _e.memoizedState, e)
    },
    useTransition: function() {
        var e = eu($s)[0]
          , t = yt().memoizedState;
        return [e, t]
    },
    useMutableSource: xg,
    useSyncExternalStore: bg,
    useId: Lg,
    unstable_isNewReconciler: !1
}
  , eb = {
    readContext: vt,
    useCallback: Ng,
    useContext: vt,
    useEffect: Nd,
    useImperativeHandle: jg,
    useInsertionEffect: Tg,
    useLayoutEffect: Rg,
    useMemo: Og,
    useReducer: tu,
    useRef: Pg,
    useState: function() {
        return tu($s)
    },
    useDebugValue: Od,
    useDeferredValue: function(e) {
        var t = yt();
        return _e === null ? t.memoizedState = e : Ig(t, _e.memoizedState, e)
    },
    useTransition: function() {
        var e = tu($s)[0]
          , t = yt().memoizedState;
        return [e, t]
    },
    useMutableSource: xg,
    useSyncExternalStore: bg,
    useId: Lg,
    unstable_isNewReconciler: !1
};
function _t(e, t) {
    if (e && e.defaultProps) {
        t = ge({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function sc(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ge({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var qa = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Pr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ue()
          , o = Hn(e)
          , s = nn(r, o);
        s.payload = t,
        n != null && (s.callback = n),
        t = Bn(e, s, o),
        t !== null && (Rt(t, e, o, r),
        qi(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ue()
          , o = Hn(e)
          , s = nn(r, o);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = Bn(e, s, o),
        t !== null && (Rt(t, e, o, r),
        qi(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ue()
          , r = Hn(e)
          , o = nn(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Bn(e, o, r),
        t !== null && (Rt(t, e, r, n),
        qi(t, e, r))
    }
};
function yh(e, t, n, r, o, s, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !As(n, r) || !As(o, s) : !0
}
function Fg(e, t, n) {
    var r = !1
      , o = qn
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = vt(s) : (o = Ye(t) ? wr : $e.current,
    r = t.contextTypes,
    s = (r = r != null) ? So(e, o) : qn),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = qa,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function wh(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && qa.enqueueReplaceState(t, t.state, null)
}
function ic(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    kd(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = vt(s) : (s = Ye(t) ? wr : $e.current,
    o.context = So(e, s)),
    o.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (sc(e, t, s, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && qa.enqueueReplaceState(o, o.state, null),
    ba(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Po(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Tx(r),
            r = r.return;
        while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function nu(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ac(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var tb = typeof WeakMap == "function" ? WeakMap : Map;
function zg(e, t, n) {
    n = nn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Ca || (Ca = !0,
        vc = r),
        ac(e, t)
    }
    ,
    n
}
function Ug(e, t, n) {
    n = nn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            ac(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        ac(e, t),
        typeof r != "function" && (Vn === null ? Vn = new Set([this]) : Vn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function xh(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new tb;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = mb.bind(null, e, t, n),
    t.then(e, e))
}
function bh(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function _h(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = nn(-1, 1),
    t.tag = 2,
    Bn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var nb = cn.ReactCurrentOwner
  , Ge = !1;
function Fe(e, t, n, r) {
    t.child = e === null ? gg(t, null, n, r) : ko(t, e.child, n, r)
}
function Sh(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return io(t, o),
    r = Ad(e, t, n, r, s, o),
    n = jd(),
    e !== null && !Ge ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    an(e, t, o)) : (fe && n && yd(t),
    t.flags |= 1,
    Fe(e, t, r, o),
    t.child)
}
function Eh(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Ud(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        Bg(e, t, s, r, o)) : (e = Zi(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & o)) {
        var i = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : As,
        n(i, r) && e.ref === t.ref)
            return an(e, t, o)
    }
    return t.flags |= 1,
    e = Wn(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Bg(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (As(s, r) && e.ref === t.ref)
            if (Ge = !1,
            t.pendingProps = r = s,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Ge = !0);
            else
                return t.lanes = e.lanes,
                an(e, t, o)
    }
    return lc(e, t, n, r, o)
}
function Vg(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ae(to, nt),
            nt |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ae(to, nt),
                nt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            ae(to, nt),
            nt |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        ae(to, nt),
        nt |= r;
    return Fe(e, t, o, n),
    t.child
}
function Hg(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function lc(e, t, n, r, o) {
    var s = Ye(n) ? wr : $e.current;
    return s = So(t, s),
    io(t, o),
    n = Ad(e, t, n, r, s, o),
    r = jd(),
    e !== null && !Ge ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    an(e, t, o)) : (fe && r && yd(t),
    t.flags |= 1,
    Fe(e, t, n, o),
    t.child)
}
function kh(e, t, n, r, o) {
    if (Ye(n)) {
        var s = !0;
        ga(t)
    } else
        s = !1;
    if (io(t, o),
    t.stateNode === null)
        Yi(e, t),
        Fg(t, n, r),
        ic(t, n, r, o),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , a = t.memoizedProps;
        i.props = a;
        var l = i.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = vt(u) : (u = Ye(n) ? wr : $e.current,
        u = So(t, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== u) && wh(t, i, r, u),
        kn = !1;
        var d = t.memoizedState;
        i.state = d,
        ba(t, r, i, o),
        l = t.memoizedState,
        a !== r || d !== l || Qe.current || kn ? (typeof c == "function" && (sc(t, n, c, r),
        l = t.memoizedState),
        (a = kn || yh(t, n, a, r, d, l, u)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        i.props = r,
        i.state = l,
        i.context = u,
        r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        yg(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : _t(t.type, a),
        i.props = u,
        f = t.pendingProps,
        d = i.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = vt(l) : (l = Ye(n) ? wr : $e.current,
        l = So(t, l));
        var m = n.getDerivedStateFromProps;
        (c = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== f || d !== l) && wh(t, i, r, l),
        kn = !1,
        d = t.memoizedState,
        i.state = d,
        ba(t, r, i, o);
        var y = t.memoizedState;
        a !== f || d !== y || Qe.current || kn ? (typeof m == "function" && (sc(t, n, m, r),
        y = t.memoizedState),
        (u = kn || yh(t, n, u, r, d, y, l) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, l),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, l)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = y),
        i.props = r,
        i.state = y,
        i.context = l,
        r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return uc(e, t, n, r, s, o)
}
function uc(e, t, n, r, o, s) {
    Hg(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return o && ch(t, n, !1),
        an(e, t, s);
    r = t.stateNode,
    nb.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = ko(t, e.child, null, s),
    t.child = ko(t, null, a, s)) : Fe(e, t, a, s),
    t.memoizedState = r.state,
    o && ch(t, n, !0),
    t.child
}
function Wg(e) {
    var t = e.stateNode;
    t.pendingContext ? uh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && uh(e, t.context, !1),
    Cd(e, t.containerInfo)
}
function Ch(e, t, n, r, o) {
    return Eo(),
    xd(o),
    t.flags |= 256,
    Fe(e, t, n, r),
    t.child
}
var cc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function dc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Kg(e, t, n) {
    var r = t.pendingProps, o = pe.current, s = !1, i = (t.flags & 128) !== 0, a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    ae(pe, o & 1),
    e === null)
        return rc(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = i) : s = Ya(i, r, 0, null),
        e = vr(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = dc(n),
        t.memoizedState = cc,
        e) : Id(t, i));
    if (o = e.memoizedState,
    o !== null && (a = o.dehydrated,
    a !== null))
        return rb(e, t, i, r, a, o, n);
    if (s) {
        s = r.fallback,
        i = t.mode,
        o = e.child,
        a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Wn(o, l),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        a !== null ? s = Wn(a, s) : (s = vr(s, i, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        i = e.child.memoizedState,
        i = i === null ? dc(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        s.memoizedState = i,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = cc,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = Wn(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Id(e, t) {
    return t = Ya({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function ki(e, t, n, r) {
    return r !== null && xd(r),
    ko(t, e.child, null, n),
    e = Id(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function rb(e, t, n, r, o, s, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = nu(Error(R(422))),
        ki(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        o = t.mode,
        r = Ya({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        s = vr(s, o, i, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && ko(t, e.child, null, i),
        t.child.memoizedState = dc(i),
        t.memoizedState = cc,
        s);
    if (!(t.mode & 1))
        return ki(e, t, i, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        s = Error(R(419)),
        r = nu(s, r, void 0),
        ki(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0,
    Ge || a) {
        if (r = Pe,
        r !== null) {
            switch (i & -i) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | i) ? 0 : o,
            o !== 0 && o !== s.retryLane && (s.retryLane = o,
            sn(e, o),
            Rt(r, e, o, -1))
        }
        return zd(),
        r = nu(Error(R(421))),
        ki(e, t, i, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = gb.bind(null, e),
    o._reactRetry = t,
    null) : (e = s.treeContext,
    ot = Un(o.nextSibling),
    st = t,
    fe = !0,
    Pt = null,
    e !== null && (ft[ht++] = en,
    ft[ht++] = tn,
    ft[ht++] = xr,
    en = e.id,
    tn = e.overflow,
    xr = t),
    t = Id(t, r.children),
    t.flags |= 4096,
    t)
}
function Ph(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    oc(e.return, t, n)
}
function ru(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = o)
}
function qg(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , s = r.tail;
    if (Fe(e, t, r.children, n),
    r = pe.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Ph(e, n, t);
                else if (e.tag === 19)
                    Ph(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ae(pe, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && _a(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            ru(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && _a(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            ru(t, !0, n, null, s);
            break;
        case "together":
            ru(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Yi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function an(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    _r |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(R(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Wn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Wn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function ob(e, t, n) {
    switch (t.tag) {
    case 3:
        Wg(t),
        Eo();
        break;
    case 5:
        wg(t);
        break;
    case 1:
        Ye(t.type) && ga(t);
        break;
    case 4:
        Cd(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        ae(wa, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ae(pe, pe.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Kg(e, t, n) : (ae(pe, pe.current & 1),
            e = an(e, t, n),
            e !== null ? e.sibling : null);
        ae(pe, pe.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return qg(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        ae(pe, pe.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Vg(e, t, n)
    }
    return an(e, t, n)
}
var Gg, fc, Qg, Yg;
Gg = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
fc = function() {}
;
Qg = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        dr(Kt.current);
        var s = null;
        switch (n) {
        case "input":
            o = Iu(e, o),
            r = Iu(e, r),
            s = [];
            break;
        case "select":
            o = ge({}, o, {
                value: void 0
            }),
            r = ge({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            o = $u(e, o),
            r = $u(e, r),
            s = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = pa)
        }
        Fu(n, r);
        var i;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (i in a)
                        a.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ss.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (i in a)
                            !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in l)
                            l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}),
                            n[i] = l[i])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ss.hasOwnProperty(u) ? (l != null && u === "onScroll" && ce("scroll", e),
                    s || a === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Yg = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Zo(e, t) {
    if (!fe)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function sb(e, t, n) {
    var r = t.pendingProps;
    switch (wd(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Ie(t),
        null;
    case 1:
        return Ye(t.type) && ma(),
        Ie(t),
        null;
    case 3:
        return r = t.stateNode,
        Co(),
        de(Qe),
        de($e),
        Td(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Si(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Pt !== null && (xc(Pt),
        Pt = null))),
        fc(e, t),
        Ie(t),
        null;
    case 5:
        Pd(t);
        var o = dr(Ls.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Qg(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(R(166));
                return Ie(t),
                null
            }
            if (e = dr(Kt.current),
            Si(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[Vt] = t,
                r[Os] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ce("cancel", r),
                    ce("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ce("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < as.length; o++)
                        ce(as[o], r);
                    break;
                case "source":
                    ce("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ce("error", r),
                    ce("load", r);
                    break;
                case "details":
                    ce("toggle", r);
                    break;
                case "input":
                    Df(r, s),
                    ce("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    ce("invalid", r);
                    break;
                case "textarea":
                    Mf(r, s),
                    ce("invalid", r)
                }
                Fu(n, s),
                o = null;
                for (var i in s)
                    if (s.hasOwnProperty(i)) {
                        var a = s[i];
                        i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && _i(r.textContent, a, e),
                        o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && _i(r.textContent, a, e),
                        o = ["children", "" + a]) : Ss.hasOwnProperty(i) && a != null && i === "onScroll" && ce("scroll", r)
                    }
                switch (n) {
                case "input":
                    pi(r),
                    $f(r, s, !0);
                    break;
                case "textarea":
                    pi(r),
                    Ff(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = pa)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Em(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[Vt] = t,
                e[Os] = r,
                Gg(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = zu(n, r),
                    n) {
                    case "dialog":
                        ce("cancel", e),
                        ce("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ce("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < as.length; o++)
                            ce(as[o], e);
                        o = r;
                        break;
                    case "source":
                        ce("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ce("error", e),
                        ce("load", e),
                        o = r;
                        break;
                    case "details":
                        ce("toggle", e),
                        o = r;
                        break;
                    case "input":
                        Df(e, r),
                        o = Iu(e, r),
                        ce("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = ge({}, r, {
                            value: void 0
                        }),
                        ce("invalid", e);
                        break;
                    case "textarea":
                        Mf(e, r),
                        o = $u(e, r),
                        ce("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Fu(n, o),
                    a = o;
                    for (s in a)
                        if (a.hasOwnProperty(s)) {
                            var l = a[s];
                            s === "style" ? Pm(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && km(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Es(e, l) : typeof l == "number" && Es(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Ss.hasOwnProperty(s) ? l != null && s === "onScroll" && ce("scroll", e) : l != null && od(e, s, l, i))
                        }
                    switch (n) {
                    case "input":
                        pi(e),
                        $f(e, r, !1);
                        break;
                    case "textarea":
                        pi(e),
                        Ff(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Kn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? no(e, !!r.multiple, s, !1) : r.defaultValue != null && no(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = pa)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Ie(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Yg(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(R(166));
            if (n = dr(Ls.current),
            dr(Kt.current),
            Si(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Vt] = t,
                (s = r.nodeValue !== n) && (e = st,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        _i(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && _i(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Vt] = t,
                t.stateNode = r
        }
        return Ie(t),
        null;
    case 13:
        if (de(pe),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (fe && ot !== null && t.mode & 1 && !(t.flags & 128))
                pg(),
                Eo(),
                t.flags |= 98560,
                s = !1;
            else if (s = Si(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(R(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(R(317));
                    s[Vt] = t
                } else
                    Eo(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Ie(t),
                s = !1
            } else
                Pt !== null && (xc(Pt),
                Pt = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || pe.current & 1 ? Se === 0 && (Se = 3) : zd())),
        t.updateQueue !== null && (t.flags |= 4),
        Ie(t),
        null);
    case 4:
        return Co(),
        fc(e, t),
        e === null && js(t.stateNode.containerInfo),
        Ie(t),
        null;
    case 10:
        return Sd(t.type._context),
        Ie(t),
        null;
    case 17:
        return Ye(t.type) && ma(),
        Ie(t),
        null;
    case 19:
        if (de(pe),
        s = t.memoizedState,
        s === null)
            return Ie(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = s.rendering,
        i === null)
            if (r)
                Zo(s, !1);
            else {
                if (Se !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = _a(e),
                        i !== null) {
                            for (t.flags |= 128,
                            Zo(s, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                i = s.alternate,
                                i === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = i.childLanes,
                                s.lanes = i.lanes,
                                s.child = i.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = i.memoizedProps,
                                s.memoizedState = i.memoizedState,
                                s.updateQueue = i.updateQueue,
                                s.type = i.type,
                                e = i.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ae(pe, pe.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && we() > To && (t.flags |= 128,
                r = !0,
                Zo(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = _a(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Zo(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !i.alternate && !fe)
                        return Ie(t),
                        null
                } else
                    2 * we() - s.renderingStartTime > To && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Zo(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = s.last,
            n !== null ? n.sibling = i : t.child = i,
            s.last = i)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = we(),
        t.sibling = null,
        n = pe.current,
        ae(pe, r ? n & 1 | 2 : n & 1),
        t) : (Ie(t),
        null);
    case 22:
    case 23:
        return Fd(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? nt & 1073741824 && (Ie(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(R(156, t.tag))
}
function ib(e, t) {
    switch (wd(t),
    t.tag) {
    case 1:
        return Ye(t.type) && ma(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Co(),
        de(Qe),
        de($e),
        Td(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Pd(t),
        null;
    case 13:
        if (de(pe),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(R(340));
            Eo()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return de(pe),
        null;
    case 4:
        return Co(),
        null;
    case 10:
        return Sd(t.type._context),
        null;
    case 22:
    case 23:
        return Fd(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Ci = !1
  , De = !1
  , ab = typeof WeakSet == "function" ? WeakSet : Set
  , $ = null;
function eo(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ye(e, t, r)
            }
        else
            n.current = null
}
function hc(e, t, n) {
    try {
        n()
    } catch (r) {
        ye(e, t, r)
    }
}
var Th = !1;
function lb(e, t) {
    if (Yu = da,
    e = tg(),
    vd(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , f = e
                      , d = null;
                    t: for (; ; ) {
                        for (var m; f !== n || o !== 0 && f.nodeType !== 3 || (a = i + o),
                        f !== s || r !== 0 && f.nodeType !== 3 || (l = i + r),
                        f.nodeType === 3 && (i += f.nodeValue.length),
                        (m = f.firstChild) !== null; )
                            d = f,
                            f = m;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (d === n && ++u === o && (a = i),
                            d === s && ++c === r && (l = i),
                            (m = f.nextSibling) !== null)
                                break;
                            f = d,
                            d = f.parentNode
                        }
                        f = m
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ju = {
        focusedElem: e,
        selectionRange: n
    },
    da = !1,
    $ = t; $ !== null; )
        if (t = $,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            $ = e;
        else
            for (; $ !== null; ) {
                t = $;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var h = y.memoizedProps
                                  , w = y.memoizedState
                                  , g = t.stateNode
                                  , v = g.getSnapshotBeforeUpdate(t.elementType === t.type ? h : _t(t.type, h), w);
                                g.__reactInternalSnapshotBeforeUpdate = v
                            }
                            break;
                        case 3:
                            var x = t.stateNode.containerInfo;
                            x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(R(163))
                        }
                } catch (_) {
                    ye(t, t.return, _)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    $ = e;
                    break
                }
                $ = t.return
            }
    return y = Th,
    Th = !1,
    y
}
function ms(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0,
                s !== void 0 && hc(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}
function Ga(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function pc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Jg(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Jg(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Vt],
    delete t[Os],
    delete t[ec],
    delete t[H1],
    delete t[W1])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Xg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Rh(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Xg(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function mc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = pa));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (mc(e, t, n),
        e = e.sibling; e !== null; )
            mc(e, t, n),
            e = e.sibling
}
function gc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (gc(e, t, n),
        e = e.sibling; e !== null; )
            gc(e, t, n),
            e = e.sibling
}
var Re = null
  , kt = !1;
function vn(e, t, n) {
    for (n = n.child; n !== null; )
        Zg(e, t, n),
        n = n.sibling
}
function Zg(e, t, n) {
    if (Wt && typeof Wt.onCommitFiberUnmount == "function")
        try {
            Wt.onCommitFiberUnmount(za, n)
        } catch {}
    switch (n.tag) {
    case 5:
        De || eo(n, t);
    case 6:
        var r = Re
          , o = kt;
        Re = null,
        vn(e, t, n),
        Re = r,
        kt = o,
        Re !== null && (kt ? (e = Re,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Re.removeChild(n.stateNode));
        break;
    case 18:
        Re !== null && (kt ? (e = Re,
        n = n.stateNode,
        e.nodeType === 8 ? Yl(e.parentNode, n) : e.nodeType === 1 && Yl(e, n),
        Ts(e)) : Yl(Re, n.stateNode));
        break;
    case 4:
        r = Re,
        o = kt,
        Re = n.stateNode.containerInfo,
        kt = !0,
        vn(e, t, n),
        Re = r,
        kt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!De && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var s = o
                  , i = s.destroy;
                s = s.tag,
                i !== void 0 && (s & 2 || s & 4) && hc(n, t, i),
                o = o.next
            } while (o !== r)
        }
        vn(e, t, n);
        break;
    case 1:
        if (!De && (eo(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                ye(n, t, a)
            }
        vn(e, t, n);
        break;
    case 21:
        vn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (De = (r = De) || n.memoizedState !== null,
        vn(e, t, n),
        De = r) : vn(e, t, n);
        break;
    default:
        vn(e, t, n)
    }
}
function Ah(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new ab),
        t.forEach(function(r) {
            var o = vb.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function xt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e
                  , i = t
                  , a = i;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Re = a.stateNode,
                        kt = !1;
                        break e;
                    case 3:
                        Re = a.stateNode.containerInfo,
                        kt = !0;
                        break e;
                    case 4:
                        Re = a.stateNode.containerInfo,
                        kt = !0;
                        break e
                    }
                    a = a.return
                }
                if (Re === null)
                    throw Error(R(160));
                Zg(s, i, o),
                Re = null,
                kt = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                ye(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            ev(t, e),
            t = t.sibling
}
function ev(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (xt(t, e),
        $t(e),
        r & 4) {
            try {
                ms(3, e, e.return),
                Ga(3, e)
            } catch (h) {
                ye(e, e.return, h)
            }
            try {
                ms(5, e, e.return)
            } catch (h) {
                ye(e, e.return, h)
            }
        }
        break;
    case 1:
        xt(t, e),
        $t(e),
        r & 512 && n !== null && eo(n, n.return);
        break;
    case 5:
        if (xt(t, e),
        $t(e),
        r & 512 && n !== null && eo(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Es(o, "")
            } catch (h) {
                ye(e, e.return, h)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var s = e.memoizedProps
              , i = n !== null ? n.memoizedProps : s
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && s.type === "radio" && s.name != null && _m(o, s),
                    zu(a, i);
                    var u = zu(a, s);
                    for (i = 0; i < l.length; i += 2) {
                        var c = l[i]
                          , f = l[i + 1];
                        c === "style" ? Pm(o, f) : c === "dangerouslySetInnerHTML" ? km(o, f) : c === "children" ? Es(o, f) : od(o, c, f, u)
                    }
                    switch (a) {
                    case "input":
                        Lu(o, s);
                        break;
                    case "textarea":
                        Sm(o, s);
                        break;
                    case "select":
                        var d = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!s.multiple;
                        var m = s.value;
                        m != null ? no(o, !!s.multiple, m, !1) : d !== !!s.multiple && (s.defaultValue != null ? no(o, !!s.multiple, s.defaultValue, !0) : no(o, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    o[Os] = s
                } catch (h) {
                    ye(e, e.return, h)
                }
        }
        break;
    case 6:
        if (xt(t, e),
        $t(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(R(162));
            o = e.stateNode,
            s = e.memoizedProps;
            try {
                o.nodeValue = s
            } catch (h) {
                ye(e, e.return, h)
            }
        }
        break;
    case 3:
        if (xt(t, e),
        $t(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Ts(t.containerInfo)
            } catch (h) {
                ye(e, e.return, h)
            }
        break;
    case 4:
        xt(t, e),
        $t(e);
        break;
    case 13:
        xt(t, e),
        $t(e),
        o = e.child,
        o.flags & 8192 && (s = o.memoizedState !== null,
        o.stateNode.isHidden = s,
        !s || o.alternate !== null && o.alternate.memoizedState !== null || ($d = we())),
        r & 4 && Ah(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (De = (u = De) || c,
        xt(t, e),
        De = u) : xt(t, e),
        $t(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for ($ = e,
                c = e.child; c !== null; ) {
                    for (f = $ = c; $ !== null; ) {
                        switch (d = $,
                        m = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            ms(4, d, d.return);
                            break;
                        case 1:
                            eo(d, d.return);
                            var y = d.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = d,
                                n = d.return;
                                try {
                                    t = r,
                                    y.props = t.memoizedProps,
                                    y.state = t.memoizedState,
                                    y.componentWillUnmount()
                                } catch (h) {
                                    ye(r, n, h)
                                }
                            }
                            break;
                        case 5:
                            eo(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                Nh(f);
                                continue
                            }
                        }
                        m !== null ? (m.return = d,
                        $ = m) : Nh(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            o = f.stateNode,
                            u ? (s = o.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode,
                            l = f.memoizedProps.style,
                            i = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = Cm("display", i))
                        } catch (h) {
                            ye(e, e.return, h)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (h) {
                            ye(e, e.return, h)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        xt(t, e),
        $t(e),
        r & 4 && Ah(e);
        break;
    case 21:
        break;
    default:
        xt(t, e),
        $t(e)
    }
}
function $t(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Xg(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(R(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Es(o, ""),
                r.flags &= -33);
                var s = Rh(e);
                gc(e, s, o);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , a = Rh(e);
                mc(e, a, i);
                break;
            default:
                throw Error(R(161))
            }
        } catch (l) {
            ye(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function ub(e, t, n) {
    $ = e,
    tv(e)
}
function tv(e, t, n) {
    for (var r = (e.mode & 1) !== 0; $ !== null; ) {
        var o = $
          , s = o.child;
        if (o.tag === 22 && r) {
            var i = o.memoizedState !== null || Ci;
            if (!i) {
                var a = o.alternate
                  , l = a !== null && a.memoizedState !== null || De;
                a = Ci;
                var u = De;
                if (Ci = i,
                (De = l) && !u)
                    for ($ = o; $ !== null; )
                        i = $,
                        l = i.child,
                        i.tag === 22 && i.memoizedState !== null ? Oh(o) : l !== null ? (l.return = i,
                        $ = l) : Oh(o);
                for (; s !== null; )
                    $ = s,
                    tv(s),
                    s = s.sibling;
                $ = o,
                Ci = a,
                De = u
            }
            jh(e)
        } else
            o.subtreeFlags & 8772 && s !== null ? (s.return = o,
            $ = s) : jh(e)
    }
}
function jh(e) {
    for (; $ !== null; ) {
        var t = $;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        De || Ga(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !De)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : _t(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && mh(t, s, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            mh(t, i, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && Ts(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(R(163))
                    }
                De || t.flags & 512 && pc(t)
            } catch (d) {
                ye(t, t.return, d)
            }
        }
        if (t === e) {
            $ = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            $ = n;
            break
        }
        $ = t.return
    }
}
function Nh(e) {
    for (; $ !== null; ) {
        var t = $;
        if (t === e) {
            $ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            $ = n;
            break
        }
        $ = t.return
    }
}
function Oh(e) {
    for (; $ !== null; ) {
        var t = $;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ga(4, t)
                } catch (l) {
                    ye(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        ye(t, o, l)
                    }
                }
                var s = t.return;
                try {
                    pc(t)
                } catch (l) {
                    ye(t, s, l)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    pc(t)
                } catch (l) {
                    ye(t, i, l)
                }
            }
        } catch (l) {
            ye(t, t.return, l)
        }
        if (t === e) {
            $ = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            $ = a;
            break
        }
        $ = t.return
    }
}
var cb = Math.ceil
  , ka = cn.ReactCurrentDispatcher
  , Ld = cn.ReactCurrentOwner
  , mt = cn.ReactCurrentBatchConfig
  , Z = 0
  , Pe = null
  , be = null
  , Ae = 0
  , nt = 0
  , to = er(0)
  , Se = 0
  , Fs = null
  , _r = 0
  , Qa = 0
  , Dd = 0
  , gs = null
  , We = null
  , $d = 0
  , To = 1 / 0
  , Jt = null
  , Ca = !1
  , vc = null
  , Vn = null
  , Pi = !1
  , Dn = null
  , Pa = 0
  , vs = 0
  , yc = null
  , Ji = -1
  , Xi = 0;
function Ue() {
    return Z & 6 ? we() : Ji !== -1 ? Ji : Ji = we()
}
function Hn(e) {
    return e.mode & 1 ? Z & 2 && Ae !== 0 ? Ae & -Ae : q1.transition !== null ? (Xi === 0 && (Xi = Fm()),
    Xi) : (e = re,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Km(e.type)),
    e) : 1
}
function Rt(e, t, n, r) {
    if (50 < vs)
        throw vs = 0,
        yc = null,
        Error(R(185));
    Ys(e, n, r),
    (!(Z & 2) || e !== Pe) && (e === Pe && (!(Z & 2) && (Qa |= n),
    Se === 4 && Tn(e, Ae)),
    Je(e, r),
    n === 1 && Z === 0 && !(t.mode & 1) && (To = we() + 500,
    Wa && tr()))
}
function Je(e, t) {
    var n = e.callbackNode;
    qx(e, t);
    var r = ca(e, e === Pe ? Ae : 0);
    if (r === 0)
        n !== null && Bf(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Bf(n),
        t === 1)
            e.tag === 0 ? K1(Ih.bind(null, e)) : dg(Ih.bind(null, e)),
            B1(function() {
                !(Z & 6) && tr()
            }),
            n = null;
        else {
            switch (zm(r)) {
            case 1:
                n = ud;
                break;
            case 4:
                n = $m;
                break;
            case 16:
                n = ua;
                break;
            case 536870912:
                n = Mm;
                break;
            default:
                n = ua
            }
            n = uv(n, nv.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function nv(e, t) {
    if (Ji = -1,
    Xi = 0,
    Z & 6)
        throw Error(R(327));
    var n = e.callbackNode;
    if (ao() && e.callbackNode !== n)
        return null;
    var r = ca(e, e === Pe ? Ae : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Ta(e, r);
    else {
        t = r;
        var o = Z;
        Z |= 2;
        var s = ov();
        (Pe !== e || Ae !== t) && (Jt = null,
        To = we() + 500,
        gr(e, t));
        do
            try {
                hb();
                break
            } catch (a) {
                rv(e, a)
            }
        while (!0);
        _d(),
        ka.current = s,
        Z = o,
        be !== null ? t = 0 : (Pe = null,
        Ae = 0,
        t = Se)
    }
    if (t !== 0) {
        if (t === 2 && (o = Wu(e),
        o !== 0 && (r = o,
        t = wc(e, o))),
        t === 1)
            throw n = Fs,
            gr(e, 0),
            Tn(e, r),
            Je(e, we()),
            n;
        if (t === 6)
            Tn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !db(o) && (t = Ta(e, r),
            t === 2 && (s = Wu(e),
            s !== 0 && (r = s,
            t = wc(e, s))),
            t === 1))
                throw n = Fs,
                gr(e, 0),
                Tn(e, r),
                Je(e, we()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(R(345));
            case 2:
                ir(e, We, Jt);
                break;
            case 3:
                if (Tn(e, r),
                (r & 130023424) === r && (t = $d + 500 - we(),
                10 < t)) {
                    if (ca(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Ue(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Zu(ir.bind(null, e, We, Jt), t);
                    break
                }
                ir(e, We, Jt);
                break;
            case 4:
                if (Tn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var i = 31 - Tt(r);
                    s = 1 << i,
                    i = t[i],
                    i > o && (o = i),
                    r &= ~s
                }
                if (r = o,
                r = we() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * cb(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Zu(ir.bind(null, e, We, Jt), r);
                    break
                }
                ir(e, We, Jt);
                break;
            case 5:
                ir(e, We, Jt);
                break;
            default:
                throw Error(R(329))
            }
        }
    }
    return Je(e, we()),
    e.callbackNode === n ? nv.bind(null, e) : null
}
function wc(e, t) {
    var n = gs;
    return e.current.memoizedState.isDehydrated && (gr(e, t).flags |= 256),
    e = Ta(e, t),
    e !== 2 && (t = We,
    We = n,
    t !== null && xc(t)),
    e
}
function xc(e) {
    We === null ? We = e : We.push.apply(We, e)
}
function db(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!jt(s(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Tn(e, t) {
    for (t &= ~Dd,
    t &= ~Qa,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Tt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Ih(e) {
    if (Z & 6)
        throw Error(R(327));
    ao();
    var t = ca(e, 0);
    if (!(t & 1))
        return Je(e, we()),
        null;
    var n = Ta(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Wu(e);
        r !== 0 && (t = r,
        n = wc(e, r))
    }
    if (n === 1)
        throw n = Fs,
        gr(e, 0),
        Tn(e, t),
        Je(e, we()),
        n;
    if (n === 6)
        throw Error(R(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    ir(e, We, Jt),
    Je(e, we()),
    null
}
function Md(e, t) {
    var n = Z;
    Z |= 1;
    try {
        return e(t)
    } finally {
        Z = n,
        Z === 0 && (To = we() + 500,
        Wa && tr())
    }
}
function Sr(e) {
    Dn !== null && Dn.tag === 0 && !(Z & 6) && ao();
    var t = Z;
    Z |= 1;
    var n = mt.transition
      , r = re;
    try {
        if (mt.transition = null,
        re = 1,
        e)
            return e()
    } finally {
        re = r,
        mt.transition = n,
        Z = t,
        !(Z & 6) && tr()
    }
}
function Fd() {
    nt = to.current,
    de(to)
}
function gr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    U1(n)),
    be !== null)
        for (n = be.return; n !== null; ) {
            var r = n;
            switch (wd(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ma();
                break;
            case 3:
                Co(),
                de(Qe),
                de($e),
                Td();
                break;
            case 5:
                Pd(r);
                break;
            case 4:
                Co();
                break;
            case 13:
                de(pe);
                break;
            case 19:
                de(pe);
                break;
            case 10:
                Sd(r.type._context);
                break;
            case 22:
            case 23:
                Fd()
            }
            n = n.return
        }
    if (Pe = e,
    be = e = Wn(e.current, null),
    Ae = nt = t,
    Se = 0,
    Fs = null,
    Dd = Qa = _r = 0,
    We = gs = null,
    cr !== null) {
        for (t = 0; t < cr.length; t++)
            if (n = cr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , s = n.pending;
                if (s !== null) {
                    var i = s.next;
                    s.next = o,
                    r.next = i
                }
                n.pending = r
            }
        cr = null
    }
    return e
}
function rv(e, t) {
    do {
        var n = be;
        try {
            if (_d(),
            Gi.current = Ea,
            Sa) {
                for (var r = me.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                Sa = !1
            }
            if (br = 0,
            Ce = _e = me = null,
            ps = !1,
            Ds = 0,
            Ld.current = null,
            n === null || n.return === null) {
                Se = 1,
                Fs = t,
                be = null;
                break
            }
            e: {
                var s = e
                  , i = n.return
                  , a = n
                  , l = t;
                if (t = Ae,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue,
                        c.memoizedState = d.memoizedState,
                        c.lanes = d.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var m = bh(i);
                    if (m !== null) {
                        m.flags &= -257,
                        _h(m, i, a, s, t),
                        m.mode & 1 && xh(s, u, t),
                        t = m,
                        l = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var h = new Set;
                            h.add(l),
                            t.updateQueue = h
                        } else
                            y.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            xh(s, u, t),
                            zd();
                            break e
                        }
                        l = Error(R(426))
                    }
                } else if (fe && a.mode & 1) {
                    var w = bh(i);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        _h(w, i, a, s, t),
                        xd(Po(l, a));
                        break e
                    }
                }
                s = l = Po(l, a),
                Se !== 4 && (Se = 2),
                gs === null ? gs = [s] : gs.push(s),
                s = i;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var g = zg(s, l, t);
                        ph(s, g);
                        break e;
                    case 1:
                        a = l;
                        var v = s.type
                          , x = s.stateNode;
                        if (!(s.flags & 128) && (typeof v.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Vn === null || !Vn.has(x)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var _ = Ug(s, a, t);
                            ph(s, _);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            iv(n)
        } catch (S) {
            t = S,
            be === n && n !== null && (be = n = n.return);
            continue
        }
        break
    } while (!0)
}
function ov() {
    var e = ka.current;
    return ka.current = Ea,
    e === null ? Ea : e
}
function zd() {
    (Se === 0 || Se === 3 || Se === 2) && (Se = 4),
    Pe === null || !(_r & 268435455) && !(Qa & 268435455) || Tn(Pe, Ae)
}
function Ta(e, t) {
    var n = Z;
    Z |= 2;
    var r = ov();
    (Pe !== e || Ae !== t) && (Jt = null,
    gr(e, t));
    do
        try {
            fb();
            break
        } catch (o) {
            rv(e, o)
        }
    while (!0);
    if (_d(),
    Z = n,
    ka.current = r,
    be !== null)
        throw Error(R(261));
    return Pe = null,
    Ae = 0,
    Se
}
function fb() {
    for (; be !== null; )
        sv(be)
}
function hb() {
    for (; be !== null && !Mx(); )
        sv(be)
}
function sv(e) {
    var t = lv(e.alternate, e, nt);
    e.memoizedProps = e.pendingProps,
    t === null ? iv(e) : be = t,
    Ld.current = null
}
function iv(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = ib(n, t),
            n !== null) {
                n.flags &= 32767,
                be = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Se = 6,
                be = null;
                return
            }
        } else if (n = sb(n, t, nt),
        n !== null) {
            be = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            be = t;
            return
        }
        be = t = e
    } while (t !== null);
    Se === 0 && (Se = 5)
}
function ir(e, t, n) {
    var r = re
      , o = mt.transition;
    try {
        mt.transition = null,
        re = 1,
        pb(e, t, n, r)
    } finally {
        mt.transition = o,
        re = r
    }
    return null
}
function pb(e, t, n, r) {
    do
        ao();
    while (Dn !== null);
    if (Z & 6)
        throw Error(R(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(R(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (Gx(e, s),
    e === Pe && (be = Pe = null,
    Ae = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pi || (Pi = !0,
    uv(ua, function() {
        return ao(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = mt.transition,
        mt.transition = null;
        var i = re;
        re = 1;
        var a = Z;
        Z |= 4,
        Ld.current = null,
        lb(e, n),
        ev(n, e),
        I1(Ju),
        da = !!Yu,
        Ju = Yu = null,
        e.current = n,
        ub(n),
        Fx(),
        Z = a,
        re = i,
        mt.transition = s
    } else
        e.current = n;
    if (Pi && (Pi = !1,
    Dn = e,
    Pa = o),
    s = e.pendingLanes,
    s === 0 && (Vn = null),
    Bx(n.stateNode),
    Je(e, we()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (Ca)
        throw Ca = !1,
        e = vc,
        vc = null,
        e;
    return Pa & 1 && e.tag !== 0 && ao(),
    s = e.pendingLanes,
    s & 1 ? e === yc ? vs++ : (vs = 0,
    yc = e) : vs = 0,
    tr(),
    null
}
function ao() {
    if (Dn !== null) {
        var e = zm(Pa)
          , t = mt.transition
          , n = re;
        try {
            if (mt.transition = null,
            re = 16 > e ? 16 : e,
            Dn === null)
                var r = !1;
            else {
                if (e = Dn,
                Dn = null,
                Pa = 0,
                Z & 6)
                    throw Error(R(331));
                var o = Z;
                for (Z |= 4,
                $ = e.current; $ !== null; ) {
                    var s = $
                      , i = s.child;
                    if ($.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for ($ = u; $ !== null; ) {
                                    var c = $;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ms(8, c, s)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        $ = f;
                                    else
                                        for (; $ !== null; ) {
                                            c = $;
                                            var d = c.sibling
                                              , m = c.return;
                                            if (Jg(c),
                                            c === u) {
                                                $ = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = m,
                                                $ = d;
                                                break
                                            }
                                            $ = m
                                        }
                                }
                            }
                            var y = s.alternate;
                            if (y !== null) {
                                var h = y.child;
                                if (h !== null) {
                                    y.child = null;
                                    do {
                                        var w = h.sibling;
                                        h.sibling = null,
                                        h = w
                                    } while (h !== null)
                                }
                            }
                            $ = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && i !== null)
                        i.return = s,
                        $ = i;
                    else
                        e: for (; $ !== null; ) {
                            if (s = $,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ms(9, s, s.return)
                                }
                            var g = s.sibling;
                            if (g !== null) {
                                g.return = s.return,
                                $ = g;
                                break e
                            }
                            $ = s.return
                        }
                }
                var v = e.current;
                for ($ = v; $ !== null; ) {
                    i = $;
                    var x = i.child;
                    if (i.subtreeFlags & 2064 && x !== null)
                        x.return = i,
                        $ = x;
                    else
                        e: for (i = v; $ !== null; ) {
                            if (a = $,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ga(9, a)
                                    }
                                } catch (S) {
                                    ye(a, a.return, S)
                                }
                            if (a === i) {
                                $ = null;
                                break e
                            }
                            var _ = a.sibling;
                            if (_ !== null) {
                                _.return = a.return,
                                $ = _;
                                break e
                            }
                            $ = a.return
                        }
                }
                if (Z = o,
                tr(),
                Wt && typeof Wt.onPostCommitFiberRoot == "function")
                    try {
                        Wt.onPostCommitFiberRoot(za, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            re = n,
            mt.transition = t
        }
    }
    return !1
}
function Lh(e, t, n) {
    t = Po(n, t),
    t = zg(e, t, 1),
    e = Bn(e, t, 1),
    t = Ue(),
    e !== null && (Ys(e, 1, t),
    Je(e, t))
}
function ye(e, t, n) {
    if (e.tag === 3)
        Lh(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Lh(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vn === null || !Vn.has(r))) {
                    e = Po(n, e),
                    e = Ug(t, e, 1),
                    t = Bn(t, e, 1),
                    e = Ue(),
                    t !== null && (Ys(t, 1, e),
                    Je(t, e));
                    break
                }
            }
            t = t.return
        }
}
function mb(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ue(),
    e.pingedLanes |= e.suspendedLanes & n,
    Pe === e && (Ae & n) === n && (Se === 4 || Se === 3 && (Ae & 130023424) === Ae && 500 > we() - $d ? gr(e, 0) : Dd |= n),
    Je(e, t)
}
function av(e, t) {
    t === 0 && (e.mode & 1 ? (t = vi,
    vi <<= 1,
    !(vi & 130023424) && (vi = 4194304)) : t = 1);
    var n = Ue();
    e = sn(e, t),
    e !== null && (Ys(e, t, n),
    Je(e, n))
}
function gb(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    av(e, n)
}
function vb(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(R(314))
    }
    r !== null && r.delete(t),
    av(e, n)
}
var lv;
lv = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Qe.current)
            Ge = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ge = !1,
                ob(e, t, n);
            Ge = !!(e.flags & 131072)
        }
    else
        Ge = !1,
        fe && t.flags & 1048576 && fg(t, ya, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Yi(e, t),
        e = t.pendingProps;
        var o = So(t, $e.current);
        io(t, n),
        o = Ad(null, t, r, e, o, n);
        var s = jd();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ye(r) ? (s = !0,
        ga(t)) : s = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        kd(t),
        o.updater = qa,
        t.stateNode = o,
        o._reactInternals = t,
        ic(t, r, e, n),
        t = uc(null, t, r, !0, s, n)) : (t.tag = 0,
        fe && s && yd(t),
        Fe(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Yi(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = wb(r),
            e = _t(r, e),
            o) {
            case 0:
                t = lc(null, t, r, e, n);
                break e;
            case 1:
                t = kh(null, t, r, e, n);
                break e;
            case 11:
                t = Sh(null, t, r, e, n);
                break e;
            case 14:
                t = Eh(null, t, r, _t(r.type, e), n);
                break e
            }
            throw Error(R(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : _t(r, o),
        lc(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : _t(r, o),
        kh(e, t, r, o, n);
    case 3:
        e: {
            if (Wg(t),
            e === null)
                throw Error(R(387));
            r = t.pendingProps,
            s = t.memoizedState,
            o = s.element,
            yg(e, t),
            ba(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    o = Po(Error(R(423)), t),
                    t = Ch(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = Po(Error(R(424)), t),
                    t = Ch(e, t, r, n, o);
                    break e
                } else
                    for (ot = Un(t.stateNode.containerInfo.firstChild),
                    st = t,
                    fe = !0,
                    Pt = null,
                    n = gg(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Eo(),
                r === o) {
                    t = an(e, t, n);
                    break e
                }
                Fe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return wg(t),
        e === null && rc(t),
        r = t.type,
        o = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        i = o.children,
        Xu(r, o) ? i = null : s !== null && Xu(r, s) && (t.flags |= 32),
        Hg(e, t),
        Fe(e, t, i, n),
        t.child;
    case 6:
        return e === null && rc(t),
        null;
    case 13:
        return Kg(e, t, n);
    case 4:
        return Cd(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = ko(t, null, r, n) : Fe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : _t(r, o),
        Sh(e, t, r, o, n);
    case 7:
        return Fe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Fe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Fe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            s = t.memoizedProps,
            i = o.value,
            ae(wa, r._currentValue),
            r._currentValue = i,
            s !== null)
                if (jt(s.value, i)) {
                    if (s.children === o.children && !Qe.current) {
                        t = an(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var a = s.dependencies;
                        if (a !== null) {
                            i = s.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (s.tag === 1) {
                                        l = nn(-1, n & -n),
                                        l.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    s.lanes |= n,
                                    l = s.alternate,
                                    l !== null && (l.lanes |= n),
                                    oc(s.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (s.tag === 10)
                            i = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (i = s.return,
                            i === null)
                                throw Error(R(341));
                            i.lanes |= n,
                            a = i.alternate,
                            a !== null && (a.lanes |= n),
                            oc(i, n, t),
                            i = s.sibling
                        } else
                            i = s.child;
                        if (i !== null)
                            i.return = s;
                        else
                            for (i = s; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (s = i.sibling,
                                s !== null) {
                                    s.return = i.return,
                                    i = s;
                                    break
                                }
                                i = i.return
                            }
                        s = i
                    }
            Fe(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        io(t, n),
        o = vt(o),
        r = r(o),
        t.flags |= 1,
        Fe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = _t(r, t.pendingProps),
        o = _t(r.type, o),
        Eh(e, t, r, o, n);
    case 15:
        return Bg(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : _t(r, o),
        Yi(e, t),
        t.tag = 1,
        Ye(r) ? (e = !0,
        ga(t)) : e = !1,
        io(t, n),
        Fg(t, r, o),
        ic(t, r, o, n),
        uc(null, t, r, !0, e, n);
    case 19:
        return qg(e, t, n);
    case 22:
        return Vg(e, t, n)
    }
    throw Error(R(156, t.tag))
}
;
function uv(e, t) {
    return Dm(e, t)
}
function yb(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function pt(e, t, n, r) {
    return new yb(e,t,n,r)
}
function Ud(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function wb(e) {
    if (typeof e == "function")
        return Ud(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === id)
            return 11;
        if (e === ad)
            return 14
    }
    return 2
}
function Wn(e, t) {
    var n = e.alternate;
    return n === null ? (n = pt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Zi(e, t, n, r, o, s) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        Ud(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case Wr:
            return vr(n.children, o, s, t);
        case sd:
            i = 8,
            o |= 8;
            break;
        case Au:
            return e = pt(12, n, t, o | 2),
            e.elementType = Au,
            e.lanes = s,
            e;
        case ju:
            return e = pt(13, n, t, o),
            e.elementType = ju,
            e.lanes = s,
            e;
        case Nu:
            return e = pt(19, n, t, o),
            e.elementType = Nu,
            e.lanes = s,
            e;
        case wm:
            return Ya(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case vm:
                    i = 10;
                    break e;
                case ym:
                    i = 9;
                    break e;
                case id:
                    i = 11;
                    break e;
                case ad:
                    i = 14;
                    break e;
                case En:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(R(130, e == null ? e : typeof e, ""))
        }
    return t = pt(i, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function vr(e, t, n, r) {
    return e = pt(7, e, r, t),
    e.lanes = n,
    e
}
function Ya(e, t, n, r) {
    return e = pt(22, e, r, t),
    e.elementType = wm,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function ou(e, t, n) {
    return e = pt(6, e, null, t),
    e.lanes = n,
    e
}
function su(e, t, n) {
    return t = pt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function xb(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Fl(0),
    this.expirationTimes = Fl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Fl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Bd(e, t, n, r, o, s, i, a, l) {
    return e = new xb(e,t,n,a,l),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = pt(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    kd(s),
    e
}
function bb(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Hr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function cv(e) {
    if (!e)
        return qn;
    e = e._reactInternals;
    e: {
        if (Pr(e) !== e || e.tag !== 1)
            throw Error(R(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ye(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(R(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ye(n))
            return cg(e, n, t)
    }
    return t
}
function dv(e, t, n, r, o, s, i, a, l) {
    return e = Bd(n, r, !0, e, o, s, i, a, l),
    e.context = cv(null),
    n = e.current,
    r = Ue(),
    o = Hn(n),
    s = nn(r, o),
    s.callback = t ?? null,
    Bn(n, s, o),
    e.current.lanes = o,
    Ys(e, o, r),
    Je(e, r),
    e
}
function Ja(e, t, n, r) {
    var o = t.current
      , s = Ue()
      , i = Hn(o);
    return n = cv(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = nn(s, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Bn(o, t, i),
    e !== null && (Rt(e, o, i, s),
    qi(e, o, i)),
    i
}
function Ra(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Dh(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Vd(e, t) {
    Dh(e, t),
    (e = e.alternate) && Dh(e, t)
}
function _b() {
    return null
}
var fv = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Hd(e) {
    this._internalRoot = e
}
Xa.prototype.render = Hd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(R(409));
    Ja(e, t, null, null)
}
;
Xa.prototype.unmount = Hd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Sr(function() {
            Ja(null, e, null, null)
        }),
        t[on] = null
    }
}
;
function Xa(e) {
    this._internalRoot = e
}
Xa.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Vm();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Pn.length && t !== 0 && t < Pn[n].priority; n++)
            ;
        Pn.splice(n, 0, e),
        n === 0 && Wm(e)
    }
}
;
function Wd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Za(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function $h() {}
function Sb(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = Ra(i);
                s.call(u)
            }
        }
        var i = dv(t, r, e, 0, null, !1, !1, "", $h);
        return e._reactRootContainer = i,
        e[on] = i.current,
        js(e.nodeType === 8 ? e.parentNode : e),
        Sr(),
        i
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Ra(l);
            a.call(u)
        }
    }
    var l = Bd(e, 0, !1, null, null, !1, !1, "", $h);
    return e._reactRootContainer = l,
    e[on] = l.current,
    js(e.nodeType === 8 ? e.parentNode : e),
    Sr(function() {
        Ja(t, l, n, r)
    }),
    l
}
function el(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var i = s;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = Ra(i);
                a.call(l)
            }
        }
        Ja(t, i, e, o)
    } else
        i = Sb(n, t, e, o, r);
    return Ra(i)
}
Um = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = is(t.pendingLanes);
            n !== 0 && (cd(t, n | 1),
            Je(t, we()),
            !(Z & 6) && (To = we() + 500,
            tr()))
        }
        break;
    case 13:
        Sr(function() {
            var r = sn(e, 1);
            if (r !== null) {
                var o = Ue();
                Rt(r, e, 1, o)
            }
        }),
        Vd(e, 1)
    }
}
;
dd = function(e) {
    if (e.tag === 13) {
        var t = sn(e, 134217728);
        if (t !== null) {
            var n = Ue();
            Rt(t, e, 134217728, n)
        }
        Vd(e, 134217728)
    }
}
;
Bm = function(e) {
    if (e.tag === 13) {
        var t = Hn(e)
          , n = sn(e, t);
        if (n !== null) {
            var r = Ue();
            Rt(n, e, t, r)
        }
        Vd(e, t)
    }
}
;
Vm = function() {
    return re
}
;
Hm = function(e, t) {
    var n = re;
    try {
        return re = e,
        t()
    } finally {
        re = n
    }
}
;
Bu = function(e, t, n) {
    switch (t) {
    case "input":
        if (Lu(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Ha(r);
                    if (!o)
                        throw Error(R(90));
                    bm(r),
                    Lu(r, o)
                }
            }
        }
        break;
    case "textarea":
        Sm(e, n);
        break;
    case "select":
        t = n.value,
        t != null && no(e, !!n.multiple, t, !1)
    }
}
;
Am = Md;
jm = Sr;
var Eb = {
    usingClientEntryPoint: !1,
    Events: [Xs, Qr, Ha, Tm, Rm, Md]
}
  , es = {
    findFiberByHostInstance: ur,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , kb = {
    bundleType: es.bundleType,
    version: es.version,
    rendererPackageName: es.rendererPackageName,
    rendererConfig: es.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: cn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Im(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: es.findFiberByHostInstance || _b,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ti.isDisabled && Ti.supportsFiber)
        try {
            za = Ti.inject(kb),
            Wt = Ti
        } catch {}
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Eb;
ut.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Wd(t))
        throw Error(R(200));
    return bb(e, t, null, n)
}
;
ut.createRoot = function(e, t) {
    if (!Wd(e))
        throw Error(R(299));
    var n = !1
      , r = ""
      , o = fv;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Bd(e, 1, !1, null, null, n, !1, r, o),
    e[on] = t.current,
    js(e.nodeType === 8 ? e.parentNode : e),
    new Hd(t)
}
;
ut.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","),
        Error(R(268, e)));
    return e = Im(t),
    e = e === null ? null : e.stateNode,
    e
}
;
ut.flushSync = function(e) {
    return Sr(e)
}
;
ut.hydrate = function(e, t, n) {
    if (!Za(t))
        throw Error(R(200));
    return el(null, e, t, !0, n)
}
;
ut.hydrateRoot = function(e, t, n) {
    if (!Wd(e))
        throw Error(R(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , s = ""
      , i = fv;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = dv(t, null, e, 1, n ?? null, o, !1, s, i),
    e[on] = t.current,
    js(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Xa(t)
}
;
ut.render = function(e, t, n) {
    if (!Za(t))
        throw Error(R(200));
    return el(null, e, t, !1, n)
}
;
ut.unmountComponentAtNode = function(e) {
    if (!Za(e))
        throw Error(R(40));
    return e._reactRootContainer ? (Sr(function() {
        el(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[on] = null
        })
    }),
    !0) : !1
}
;
ut.unstable_batchedUpdates = Md;
ut.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Za(n))
        throw Error(R(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(R(38));
    return el(e, t, n, !1, r)
}
;
ut.version = "18.3.1-next-f1338f8080-20240426";
function hv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hv)
        } catch (e) {
            console.error(e)
        }
}
hv(),
hm.exports = ut;
var ei = hm.exports;
const pv = em(ei);
var mv, Mh = ei;
mv = Mh.createRoot,
Mh.hydrateRoot;
const Cb = 1
  , Pb = 1e6;
let iu = 0;
function Tb() {
    return iu = (iu + 1) % Number.MAX_SAFE_INTEGER,
    iu.toString()
}
const au = new Map
  , Fh = e => {
    if (au.has(e))
        return;
    const t = setTimeout( () => {
        au.delete(e),
        ys({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , Pb);
    au.set(e, t)
}
  , Rb = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, Cb)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Fh(n) : e.toasts.forEach(r => {
                Fh(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , ea = [];
let ta = {
    toasts: []
};
function ys(e) {
    ta = Rb(ta, e),
    ea.forEach(t => {
        t(ta)
    }
    )
}
function Ab({...e}) {
    const t = Tb()
      , n = o => ys({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => ys({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return ys({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function ti() {
    const [e,t] = p.useState(ta);
    return p.useEffect( () => (ea.push(t),
    () => {
        const n = ea.indexOf(t);
        n > -1 && ea.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: Ab,
        dismiss: n => ys({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function Q(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function jb(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function gv(...e) {
    return t => e.forEach(n => jb(n, t))
}
function xe(...e) {
    return p.useCallback(gv(...e), e)
}
function Nb(e, t=[]) {
    let n = [];
    function r(s, i) {
        const a = p.createContext(i)
          , l = n.length;
        n = [...n, i];
        function u(f) {
            const {scope: d, children: m, ...y} = f
              , h = (d == null ? void 0 : d[e][l]) || a
              , w = p.useMemo( () => y, Object.values(y));
            return b.jsx(h.Provider, {
                value: w,
                children: m
            })
        }
        function c(f, d) {
            const m = (d == null ? void 0 : d[e][l]) || a
              , y = p.useContext(m);
            if (y)
                return y;
            if (i !== void 0)
                return i;
            throw new Error(`\`${f}\` must be used within \`${s}\``)
        }
        return u.displayName = s + "Provider",
        [u, c]
    }
    const o = () => {
        const s = n.map(i => p.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return p.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, Ob(o, ...t)]
}
function Ob(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const f = l(s)[`__scope${u}`];
                return {
                    ...a,
                    ...f
                }
            }
            , {});
            return p.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var Ro = p.forwardRef( (e, t) => {
    const {children: n, ...r} = e
      , o = p.Children.toArray(n)
      , s = o.find(Ib);
    if (s) {
        const i = s.props.children
          , a = o.map(l => l === s ? p.Children.count(i) > 1 ? p.Children.only(null) : p.isValidElement(i) ? i.props.children : null : l);
        return b.jsx(bc, {
            ...r,
            ref: t,
            children: p.isValidElement(i) ? p.cloneElement(i, void 0, a) : null
        })
    }
    return b.jsx(bc, {
        ...r,
        ref: t,
        children: n
    })
}
);
Ro.displayName = "Slot";
var bc = p.forwardRef( (e, t) => {
    const {children: n, ...r} = e;
    if (p.isValidElement(n)) {
        const o = Db(n);
        return p.cloneElement(n, {
            ...Lb(r, n.props),
            ref: t ? gv(t, o) : o
        })
    }
    return p.Children.count(n) > 1 ? p.Children.only(null) : null
}
);
bc.displayName = "SlotClone";
var vv = ({children: e}) => b.jsx(b.Fragment, {
    children: e
});
function Ib(e) {
    return p.isValidElement(e) && e.type === vv
}
function Lb(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
            s(...a),
            o(...a)
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function Db(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function Kd(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Nb(t)
      , [o,s] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , i = m => {
        const {scope: y, children: h} = m
          , w = I.useRef(null)
          , g = I.useRef(new Map).current;
        return b.jsx(o, {
            scope: y,
            itemMap: g,
            collectionRef: w,
            children: h
        })
    }
    ;
    i.displayName = t;
    const a = e + "CollectionSlot"
      , l = I.forwardRef( (m, y) => {
        const {scope: h, children: w} = m
          , g = s(a, h)
          , v = xe(y, g.collectionRef);
        return b.jsx(Ro, {
            ref: v,
            children: w
        })
    }
    );
    l.displayName = a;
    const u = e + "CollectionItemSlot"
      , c = "data-radix-collection-item"
      , f = I.forwardRef( (m, y) => {
        const {scope: h, children: w, ...g} = m
          , v = I.useRef(null)
          , x = xe(y, v)
          , _ = s(u, h);
        return I.useEffect( () => (_.itemMap.set(v, {
            ref: v,
            ...g
        }),
        () => void _.itemMap.delete(v))),
        b.jsx(Ro, {
            [c]: "",
            ref: x,
            children: w
        })
    }
    );
    f.displayName = u;
    function d(m) {
        const y = s(e + "CollectionConsumer", m);
        return I.useCallback( () => {
            const w = y.collectionRef.current;
            if (!w)
                return [];
            const g = Array.from(w.querySelectorAll(`[${c}]`));
            return Array.from(y.itemMap.values()).sort( (_, S) => g.indexOf(_.ref.current) - g.indexOf(S.ref.current))
        }
        , [y.collectionRef, y.itemMap])
    }
    return [{
        Provider: i,
        Slot: l,
        ItemSlot: f
    }, d, r]
}
function $b(e, t) {
    const n = p.createContext(t)
      , r = s => {
        const {children: i, ...a} = s
          , l = p.useMemo( () => a, Object.values(a));
        return b.jsx(n.Provider, {
            value: l,
            children: i
        })
    }
    ;
    r.displayName = e + "Provider";
    function o(s) {
        const i = p.useContext(n);
        if (i)
            return i;
        if (t !== void 0)
            return t;
        throw new Error(`\`${s}\` must be used within \`${e}\``)
    }
    return [r, o]
}
function ni(e, t=[]) {
    let n = [];
    function r(s, i) {
        const a = p.createContext(i)
          , l = n.length;
        n = [...n, i];
        const u = f => {
            var g;
            const {scope: d, children: m, ...y} = f
              , h = ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[l]) || a
              , w = p.useMemo( () => y, Object.values(y));
            return b.jsx(h.Provider, {
                value: w,
                children: m
            })
        }
        ;
        u.displayName = s + "Provider";
        function c(f, d) {
            var h;
            const m = ((h = d == null ? void 0 : d[e]) == null ? void 0 : h[l]) || a
              , y = p.useContext(m);
            if (y)
                return y;
            if (i !== void 0)
                return i;
            throw new Error(`\`${f}\` must be used within \`${s}\``)
        }
        return [u, c]
    }
    const o = () => {
        const s = n.map(i => p.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return p.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, Mb(o, ...t)]
}
function Mb(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const f = l(s)[`__scope${u}`];
                return {
                    ...a,
                    ...f
                }
            }
            , {});
            return p.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var Fb = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , ee = Fb.reduce( (e, t) => {
    const n = p.forwardRef( (r, o) => {
        const {asChild: s, ...i} = r
          , a = s ? Ro : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        b.jsx(a, {
            ...i,
            ref: o
        })
    }
    );
    return n.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: n
    }
}
, {});
function yv(e, t) {
    e && ei.flushSync( () => e.dispatchEvent(t))
}
function lt(e) {
    const t = p.useRef(e);
    return p.useEffect( () => {
        t.current = e
    }
    ),
    p.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function zb(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = lt(e);
    p.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var Ub = "DismissableLayer", _c = "dismissableLayer.update", Bb = "dismissableLayer.pointerDownOutside", Vb = "dismissableLayer.focusOutside", zh, wv = p.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), tl = p.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: i, onDismiss: a, ...l} = e
      , u = p.useContext(wv)
      , [c,f] = p.useState(null)
      , d = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,m] = p.useState({})
      , y = xe(t, C => f(C))
      , h = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , g = h.indexOf(w)
      , v = c ? h.indexOf(c) : -1
      , x = u.layersWithOutsidePointerEventsDisabled.size > 0
      , _ = v >= g
      , S = Wb(C => {
        const P = C.target
          , L = [...u.branches].some(O => O.contains(P));
        !_ || L || (o == null || o(C),
        i == null || i(C),
        C.defaultPrevented || a == null || a())
    }
    , d)
      , E = Kb(C => {
        const P = C.target;
        [...u.branches].some(O => O.contains(P)) || (s == null || s(C),
        i == null || i(C),
        C.defaultPrevented || a == null || a())
    }
    , d);
    return zb(C => {
        v === u.layers.size - 1 && (r == null || r(C),
        !C.defaultPrevented && a && (C.preventDefault(),
        a()))
    }
    , d),
    p.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (zh = d.body.style.pointerEvents,
            d.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Uh(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = zh)
            }
    }
    , [c, d, n, u]),
    p.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        Uh())
    }
    , [c, u]),
    p.useEffect( () => {
        const C = () => m({});
        return document.addEventListener(_c, C),
        () => document.removeEventListener(_c, C)
    }
    , []),
    b.jsx(ee.div, {
        ...l,
        ref: y,
        style: {
            pointerEvents: x ? _ ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: Q(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Q(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Q(e.onPointerDownCapture, S.onPointerDownCapture)
    })
}
);
tl.displayName = Ub;
var Hb = "DismissableLayerBranch"
  , xv = p.forwardRef( (e, t) => {
    const n = p.useContext(wv)
      , r = p.useRef(null)
      , o = xe(t, r);
    return p.useEffect( () => {
        const s = r.current;
        if (s)
            return n.branches.add(s),
            () => {
                n.branches.delete(s)
            }
    }
    , [n.branches]),
    b.jsx(ee.div, {
        ...e,
        ref: o
    })
}
);
xv.displayName = Hb;
function Wb(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = lt(e)
      , r = p.useRef(!1)
      , o = p.useRef( () => {}
    );
    return p.useEffect( () => {
        const s = a => {
            if (a.target && !r.current) {
                let l = function() {
                    bv(Bb, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , i = window.setTimeout( () => {
            t.addEventListener("pointerdown", s)
        }
        , 0);
        return () => {
            window.clearTimeout(i),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function Kb(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = lt(e)
      , r = p.useRef(!1);
    return p.useEffect( () => {
        const o = s => {
            s.target && !r.current && bv(Vb, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Uh() {
    const e = new CustomEvent(_c);
    document.dispatchEvent(e)
}
function bv(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? yv(o, s) : o.dispatchEvent(s)
}
var qb = tl
  , Gb = xv
  , Gn = globalThis != null && globalThis.document ? p.useLayoutEffect : () => {}
  , Qb = "Portal"
  , qd = p.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [o,s] = p.useState(!1);
    Gn( () => s(!0), []);
    const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return i ? pv.createPortal(b.jsx(ee.div, {
        ...r,
        ref: t
    }), i) : null
}
);
qd.displayName = Qb;
function Yb(e, t) {
    return p.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Tr = e => {
    const {present: t, children: n} = e
      , r = Jb(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : p.Children.only(n)
      , s = xe(r.ref, Xb(o));
    return typeof n == "function" || r.isPresent ? p.cloneElement(o, {
        ref: s
    }) : null
}
;
Tr.displayName = "Presence";
function Jb(e) {
    const [t,n] = p.useState()
      , r = p.useRef({})
      , o = p.useRef(e)
      , s = p.useRef("none")
      , i = e ? "mounted" : "unmounted"
      , [a,l] = Yb(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return p.useEffect( () => {
        const u = Ri(r.current);
        s.current = a === "mounted" ? u : "none"
    }
    , [a]),
    Gn( () => {
        const u = r.current
          , c = o.current;
        if (c !== e) {
            const d = s.current
              , m = Ri(u);
            e ? l("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && d !== m ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    Gn( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , f = m => {
                const h = Ri(r.current).includes(m.animationName);
                if (m.target === t && h && (l("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , d = m => {
                m.target === t && (s.current = Ri(r.current))
            }
            ;
            return t.addEventListener("animationstart", d),
            t.addEventListener("animationcancel", f),
            t.addEventListener("animationend", f),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", d),
                t.removeEventListener("animationcancel", f),
                t.removeEventListener("animationend", f)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: p.useCallback(u => {
            u && (r.current = getComputedStyle(u)),
            n(u)
        }
        , [])
    }
}
function Ri(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function Xb(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function ri({prop: e, defaultProp: t, onChange: n= () => {}
}) {
    const [r,o] = Zb({
        defaultProp: t,
        onChange: n
    })
      , s = e !== void 0
      , i = s ? e : r
      , a = lt(n)
      , l = p.useCallback(u => {
        if (s) {
            const f = typeof u == "function" ? u(e) : u;
            f !== e && a(f)
        } else
            o(u)
    }
    , [s, e, o, a]);
    return [i, l]
}
function Zb({defaultProp: e, onChange: t}) {
    const n = p.useState(e)
      , [r] = n
      , o = p.useRef(r)
      , s = lt(t);
    return p.useEffect( () => {
        o.current !== r && (s(r),
        o.current = r)
    }
    , [r, o, s]),
    n
}
var e_ = "VisuallyHidden"
  , nl = p.forwardRef( (e, t) => b.jsx(ee.span, {
    ...e,
    ref: t,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
    }
}));
nl.displayName = e_;
var t_ = nl
  , Gd = "ToastProvider"
  , [Qd,n_,r_] = Kd("Toast")
  , [_v,aj] = ni("Toast", [r_])
  , [o_,rl] = _v(Gd)
  , Sv = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: s=50, children: i} = e
      , [a,l] = p.useState(null)
      , [u,c] = p.useState(0)
      , f = p.useRef(!1)
      , d = p.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Gd}\`. Expected non-empty \`string\`.`),
    b.jsx(Qd.Provider, {
        scope: t,
        children: b.jsx(o_, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: s,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: p.useCallback( () => c(m => m + 1), []),
            onToastRemove: p.useCallback( () => c(m => m - 1), []),
            isFocusedToastEscapeKeyDownRef: f,
            isClosePausedRef: d,
            children: i
        })
    })
}
;
Sv.displayName = Gd;
var Ev = "ToastViewport"
  , s_ = ["F8"]
  , Sc = "toast.viewportPause"
  , Ec = "toast.viewportResume"
  , kv = p.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=s_, label: o="Notifications ({hotkey})", ...s} = e
      , i = rl(Ev, n)
      , a = n_(n)
      , l = p.useRef(null)
      , u = p.useRef(null)
      , c = p.useRef(null)
      , f = p.useRef(null)
      , d = xe(t, f, i.onViewportChange)
      , m = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , y = i.toastCount > 0;
    p.useEffect( () => {
        const w = g => {
            var x;
            r.length !== 0 && r.every(_ => g[_] || g.code === _) && ((x = f.current) == null || x.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    p.useEffect( () => {
        const w = l.current
          , g = f.current;
        if (y && w && g) {
            const v = () => {
                if (!i.isClosePausedRef.current) {
                    const E = new CustomEvent(Sc);
                    g.dispatchEvent(E),
                    i.isClosePausedRef.current = !0
                }
            }
              , x = () => {
                if (i.isClosePausedRef.current) {
                    const E = new CustomEvent(Ec);
                    g.dispatchEvent(E),
                    i.isClosePausedRef.current = !1
                }
            }
              , _ = E => {
                !w.contains(E.relatedTarget) && x()
            }
              , S = () => {
                w.contains(document.activeElement) || x()
            }
            ;
            return w.addEventListener("focusin", v),
            w.addEventListener("focusout", _),
            w.addEventListener("pointermove", v),
            w.addEventListener("pointerleave", S),
            window.addEventListener("blur", v),
            window.addEventListener("focus", x),
            () => {
                w.removeEventListener("focusin", v),
                w.removeEventListener("focusout", _),
                w.removeEventListener("pointermove", v),
                w.removeEventListener("pointerleave", S),
                window.removeEventListener("blur", v),
                window.removeEventListener("focus", x)
            }
        }
    }
    , [y, i.isClosePausedRef]);
    const h = p.useCallback( ({tabbingDirection: w}) => {
        const v = a().map(x => {
            const _ = x.ref.current
              , S = [_, ...y_(_)];
            return w === "forwards" ? S : S.reverse()
        }
        );
        return (w === "forwards" ? v.reverse() : v).flat()
    }
    , [a]);
    return p.useEffect( () => {
        const w = f.current;
        if (w) {
            const g = v => {
                var S, E, C;
                const x = v.altKey || v.ctrlKey || v.metaKey;
                if (v.key === "Tab" && !x) {
                    const P = document.activeElement
                      , L = v.shiftKey;
                    if (v.target === w && L) {
                        (S = u.current) == null || S.focus();
                        return
                    }
                    const N = h({
                        tabbingDirection: L ? "backwards" : "forwards"
                    })
                      , B = N.findIndex(D => D === P);
                    lu(N.slice(B + 1)) ? v.preventDefault() : L ? (E = u.current) == null || E.focus() : (C = c.current) == null || C.focus()
                }
            }
            ;
            return w.addEventListener("keydown", g),
            () => w.removeEventListener("keydown", g)
        }
    }
    , [a, h]),
    b.jsxs(Gb, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", m),
        tabIndex: -1,
        style: {
            pointerEvents: y ? void 0 : "none"
        },
        children: [y && b.jsx(kc, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = h({
                    tabbingDirection: "forwards"
                });
                lu(w)
            }
        }), b.jsx(Qd.Slot, {
            scope: n,
            children: b.jsx(ee.ol, {
                tabIndex: -1,
                ...s,
                ref: d
            })
        }), y && b.jsx(kc, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const w = h({
                    tabbingDirection: "backwards"
                });
                lu(w)
            }
        })]
    })
}
);
kv.displayName = Ev;
var Cv = "ToastFocusProxy"
  , kc = p.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , s = rl(Cv, n);
    return b.jsx(nl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: i => {
            var u;
            const a = i.relatedTarget;
            !((u = s.viewport) != null && u.contains(a)) && r()
        }
    })
}
);
kc.displayName = Cv;
var ol = "Toast"
  , i_ = "toast.swipeStart"
  , a_ = "toast.swipeMove"
  , l_ = "toast.swipeCancel"
  , u_ = "toast.swipeEnd"
  , Pv = p.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i} = e
      , [a=!0,l] = ri({
        prop: r,
        defaultProp: o,
        onChange: s
    });
    return b.jsx(Tr, {
        present: n || a,
        children: b.jsx(f_, {
            open: a,
            ...i,
            ref: t,
            onClose: () => l(!1),
            onPause: lt(e.onPause),
            onResume: lt(e.onResume),
            onSwipeStart: Q(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: Q(e.onSwipeMove, u => {
                const {x: c, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
            }
            ),
            onSwipeCancel: Q(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: Q(e.onSwipeEnd, u => {
                const {x: c, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
                l(!1)
            }
            )
        })
    })
}
);
Pv.displayName = ol;
var [c_,d_] = _v(ol, {
    onClose() {}
})
  , f_ = p.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: s, onClose: i, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: f, onSwipeCancel: d, onSwipeEnd: m, ...y} = e
      , h = rl(ol, n)
      , [w,g] = p.useState(null)
      , v = xe(t, D => g(D))
      , x = p.useRef(null)
      , _ = p.useRef(null)
      , S = o || h.duration
      , E = p.useRef(0)
      , C = p.useRef(S)
      , P = p.useRef(0)
      , {onToastAdd: L, onToastRemove: O} = h
      , A = lt( () => {
        var H;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((H = h.viewport) == null || H.focus()),
        i()
    }
    )
      , N = p.useCallback(D => {
        !D || D === 1 / 0 || (window.clearTimeout(P.current),
        E.current = new Date().getTime(),
        P.current = window.setTimeout(A, D))
    }
    , [A]);
    p.useEffect( () => {
        const D = h.viewport;
        if (D) {
            const H = () => {
                N(C.current),
                u == null || u()
            }
              , F = () => {
                const V = new Date().getTime() - E.current;
                C.current = C.current - V,
                window.clearTimeout(P.current),
                l == null || l()
            }
            ;
            return D.addEventListener(Sc, F),
            D.addEventListener(Ec, H),
            () => {
                D.removeEventListener(Sc, F),
                D.removeEventListener(Ec, H)
            }
        }
    }
    , [h.viewport, S, l, u, N]),
    p.useEffect( () => {
        s && !h.isClosePausedRef.current && N(S)
    }
    , [s, S, h.isClosePausedRef, N]),
    p.useEffect( () => (L(),
    () => O()), [L, O]);
    const B = p.useMemo( () => w ? Iv(w) : null, [w]);
    return h.viewport ? b.jsxs(b.Fragment, {
        children: [B && b.jsx(h_, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: B
        }), b.jsx(c_, {
            scope: n,
            onClose: A,
            children: ei.createPortal(b.jsx(Qd.ItemSlot, {
                scope: n,
                children: b.jsx(qb, {
                    asChild: !0,
                    onEscapeKeyDown: Q(a, () => {
                        h.isFocusedToastEscapeKeyDownRef.current || A(),
                        h.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: b.jsx(ee.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": h.swipeDirection,
                        ...y,
                        ref: v,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: Q(e.onKeyDown, D => {
                            D.key === "Escape" && (a == null || a(D.nativeEvent),
                            D.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0,
                            A()))
                        }
                        ),
                        onPointerDown: Q(e.onPointerDown, D => {
                            D.button === 0 && (x.current = {
                                x: D.clientX,
                                y: D.clientY
                            })
                        }
                        ),
                        onPointerMove: Q(e.onPointerMove, D => {
                            if (!x.current)
                                return;
                            const H = D.clientX - x.current.x
                              , F = D.clientY - x.current.y
                              , V = !!_.current
                              , k = ["left", "right"].includes(h.swipeDirection)
                              , j = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max
                              , z = k ? j(0, H) : 0
                              , M = k ? 0 : j(0, F)
                              , U = D.pointerType === "touch" ? 10 : 2
                              , X = {
                                x: z,
                                y: M
                            }
                              , he = {
                                originalEvent: D,
                                delta: X
                            };
                            V ? (_.current = X,
                            Ai(a_, f, he, {
                                discrete: !1
                            })) : Bh(X, h.swipeDirection, U) ? (_.current = X,
                            Ai(i_, c, he, {
                                discrete: !1
                            }),
                            D.target.setPointerCapture(D.pointerId)) : (Math.abs(H) > U || Math.abs(F) > U) && (x.current = null)
                        }
                        ),
                        onPointerUp: Q(e.onPointerUp, D => {
                            const H = _.current
                              , F = D.target;
                            if (F.hasPointerCapture(D.pointerId) && F.releasePointerCapture(D.pointerId),
                            _.current = null,
                            x.current = null,
                            H) {
                                const V = D.currentTarget
                                  , k = {
                                    originalEvent: D,
                                    delta: H
                                };
                                Bh(H, h.swipeDirection, h.swipeThreshold) ? Ai(u_, m, k, {
                                    discrete: !0
                                }) : Ai(l_, d, k, {
                                    discrete: !0
                                }),
                                V.addEventListener("click", j => j.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), h.viewport)
        })]
    }) : null
}
)
  , h_ = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = rl(ol, t)
      , [s,i] = p.useState(!1)
      , [a,l] = p.useState(!1);
    return g_( () => i(!0)),
    p.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : b.jsx(qd, {
        asChild: !0,
        children: b.jsx(nl, {
            ...r,
            children: s && b.jsxs(b.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , p_ = "ToastTitle"
  , Tv = p.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return b.jsx(ee.div, {
        ...r,
        ref: t
    })
}
);
Tv.displayName = p_;
var m_ = "ToastDescription"
  , Rv = p.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return b.jsx(ee.div, {
        ...r,
        ref: t
    })
}
);
Rv.displayName = m_;
var Av = "ToastAction"
  , jv = p.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? b.jsx(Ov, {
        altText: n,
        asChild: !0,
        children: b.jsx(Yd, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Av}\`. Expected non-empty \`string\`.`),
    null)
}
);
jv.displayName = Av;
var Nv = "ToastClose"
  , Yd = p.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = d_(Nv, n);
    return b.jsx(Ov, {
        asChild: !0,
        children: b.jsx(ee.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: Q(e.onClick, o.onClose)
        })
    })
}
);
Yd.displayName = Nv;
var Ov = p.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return b.jsx(ee.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function Iv(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        v_(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , s = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (s) {
                    const i = r.dataset.radixToastAnnounceAlt;
                    i && t.push(i)
                } else
                    t.push(...Iv(r))
        }
    }
    ),
    t
}
function Ai(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , s = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? yv(o, s) : o.dispatchEvent(s)
}
var Bh = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n
}
;
function g_(e= () => {}
) {
    const t = lt(e);
    Gn( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function v_(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function y_(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function lu(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var w_ = Sv
  , Lv = kv
  , Dv = Pv
  , $v = Tv
  , Mv = Rv
  , Fv = jv
  , zv = Yd;
function Uv(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = Uv(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Bv() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Uv(e)) && (r && (r += " "),
        r += t);
    return r
}
const Vh = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Hh = Bv
  , Jd = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Hh(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: s} = t
      , i = Object.keys(o).map(u => {
        const c = n == null ? void 0 : n[u]
          , f = s == null ? void 0 : s[u];
        if (c === null)
            return null;
        const d = Vh(c) || Vh(f);
        return o[u][d]
    }
    )
      , a = n && Object.entries(n).reduce( (u, c) => {
        let[f,d] = c;
        return d === void 0 || (u[f] = d),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: f, className: d, ...m} = c;
        return Object.entries(m).every(y => {
            let[h,w] = y;
            return Array.isArray(w) ? w.includes({
                ...s,
                ...a
            }[h]) : {
                ...s,
                ...a
            }[h] === w
        }
        ) ? [...u, f, d] : u
    }
    , []);
    return Hh(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x_ = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Vv = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var b_ = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __ = p.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: s, iconNode: i, ...a}, l) => p.createElement("svg", {
    ref: l,
    ...b_,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Vv("lucide", o),
    ...a
}, [...i.map( ([u,c]) => p.createElement(u, c)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dn = (e, t) => {
    const n = p.forwardRef( ({className: r, ...o}, s) => p.createElement(__, {
        ref: s,
        iconNode: t,
        className: Vv(`lucide-${x_(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S_ = dn("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E_ = dn("CircleCheckBig", [["path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335",
    key: "yps3ct"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k_ = dn("Pause", [["rect", {
    x: "14",
    y: "4",
    width: "4",
    height: "16",
    rx: "1",
    key: "zuxfzm"
}], ["rect", {
    x: "6",
    y: "4",
    width: "4",
    height: "16",
    rx: "1",
    key: "1okwgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C_ = dn("Play", [["polygon", {
    points: "6 3 20 12 6 21 6 3",
    key: "1oa8hb"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P_ = dn("Volume1", [["path", {
    d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
    key: "uqj9uw"
}], ["path", {
    d: "M16 9a5 5 0 0 1 0 6",
    key: "1q6k2b"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T_ = dn("Volume2", [["path", {
    d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
    key: "uqj9uw"
}], ["path", {
    d: "M16 9a5 5 0 0 1 0 6",
    key: "1q6k2b"
}], ["path", {
    d: "M19.364 18.364a9 9 0 0 0 0-12.728",
    key: "ijwkga"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R_ = dn("VolumeX", [["path", {
    d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
    key: "uqj9uw"
}], ["line", {
    x1: "22",
    x2: "16",
    y1: "9",
    y2: "15",
    key: "1ewh16"
}], ["line", {
    x1: "16",
    x2: "22",
    y1: "9",
    y2: "15",
    key: "5ykzw1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A_ = dn("Volume", [["path", {
    d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
    key: "uqj9uw"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hv = dn("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , Xd = "-"
  , j_ = e => {
    const t = O_(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: i => {
            const a = i.split(Xd);
            return a[0] === "" && a.length !== 1 && a.shift(),
            Wv(a, t) || N_(i)
        }
        ,
        getConflictingClassGroupIds: (i, a) => {
            const l = n[i] || [];
            return a && r[i] ? [...l, ...r[i]] : l
        }
    }
}
  , Wv = (e, t) => {
    var i;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? Wv(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const s = e.join(Xd);
    return (i = t.validators.find( ({validator: a}) => a(s))) == null ? void 0 : i.classGroupId
}
  , Wh = /^\[(.+)\]$/
  , N_ = e => {
    if (Wh.test(e)) {
        const t = Wh.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , O_ = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return L_(Object.entries(e.classGroups), n).forEach( ([s,i]) => {
        Cc(i, r, s, t)
    }
    ),
    r
}
  , Cc = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const s = o === "" ? t : Kh(t, o);
            s.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (I_(o)) {
                Cc(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([s,i]) => {
            Cc(i, Kh(t, s), n, r)
        }
        )
    }
    )
}
  , Kh = (e, t) => {
    let n = e;
    return t.split(Xd).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , I_ = e => e.isThemeGetter
  , L_ = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([i,a]) => [t + i, a])) : s);
    return [n, o]
}
) : e
  , D_ = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (s, i) => {
        n.set(s, i),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(s) {
            let i = n.get(s);
            if (i !== void 0)
                return i;
            if ((i = r.get(s)) !== void 0)
                return o(s, i),
                i
        },
        set(s, i) {
            n.has(s) ? n.set(s, i) : o(s, i)
        }
    }
}
  , Kv = "!"
  , $_ = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , s = t.length
      , i = a => {
        const l = [];
        let u = 0, c = 0, f;
        for (let w = 0; w < a.length; w++) {
            let g = a[w];
            if (u === 0) {
                if (g === o && (r || a.slice(w, w + s) === t)) {
                    l.push(a.slice(c, w)),
                    c = w + s;
                    continue
                }
                if (g === "/") {
                    f = w;
                    continue
                }
            }
            g === "[" ? u++ : g === "]" && u--
        }
        const d = l.length === 0 ? a : a.substring(c)
          , m = d.startsWith(Kv)
          , y = m ? d.substring(1) : d
          , h = f && f > c ? f - c : void 0;
        return {
            modifiers: l,
            hasImportantModifier: m,
            baseClassName: y,
            maybePostfixModifierPosition: h
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: i
    }) : i
}
  , M_ = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , F_ = e => ({
    cache: D_(e.cacheSize),
    parseClassName: $_(e),
    ...j_(e)
})
  , z_ = /\s+/
  , U_ = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , s = []
      , i = e.trim().split(z_);
    let a = "";
    for (let l = i.length - 1; l >= 0; l -= 1) {
        const u = i[l]
          , {modifiers: c, hasImportantModifier: f, baseClassName: d, maybePostfixModifierPosition: m} = n(u);
        let y = !!m
          , h = r(y ? d.substring(0, m) : d);
        if (!h) {
            if (!y) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (h = r(d),
            !h) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            y = !1
        }
        const w = M_(c).join(":")
          , g = f ? w + Kv : w
          , v = g + h;
        if (s.includes(v))
            continue;
        s.push(v);
        const x = o(h, y);
        for (let _ = 0; _ < x.length; ++_) {
            const S = x[_];
            s.push(g + S)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function B_() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = qv(t)) && (r && (r += " "),
        r += n);
    return r
}
const qv = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = qv(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function V_(e, ...t) {
    let n, r, o, s = i;
    function i(l) {
        const u = t.reduce( (c, f) => f(c), e());
        return n = F_(u),
        r = n.cache.get,
        o = n.cache.set,
        s = a,
        a(l)
    }
    function a(l) {
        const u = r(l);
        if (u)
            return u;
        const c = U_(l, n);
        return o(l, c),
        c
    }
    return function() {
        return s(B_.apply(null, arguments))
    }
}
const ue = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , Gv = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , H_ = /^\d+\/\d+$/
  , W_ = new Set(["px", "full", "screen"])
  , K_ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , q_ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , G_ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , Q_ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Y_ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Qt = e => lo(e) || W_.has(e) || H_.test(e)
  , yn = e => $o(e, "length", oS)
  , lo = e => !!e && !Number.isNaN(Number(e))
  , uu = e => $o(e, "number", lo)
  , ts = e => !!e && Number.isInteger(Number(e))
  , J_ = e => e.endsWith("%") && lo(e.slice(0, -1))
  , K = e => Gv.test(e)
  , wn = e => K_.test(e)
  , X_ = new Set(["length", "size", "percentage"])
  , Z_ = e => $o(e, X_, Qv)
  , eS = e => $o(e, "position", Qv)
  , tS = new Set(["image", "url"])
  , nS = e => $o(e, tS, iS)
  , rS = e => $o(e, "", sS)
  , ns = () => !0
  , $o = (e, t, n) => {
    const r = Gv.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , oS = e => q_.test(e) && !G_.test(e)
  , Qv = () => !1
  , sS = e => Q_.test(e)
  , iS = e => Y_.test(e)
  , aS = () => {
    const e = ue("colors")
      , t = ue("spacing")
      , n = ue("blur")
      , r = ue("brightness")
      , o = ue("borderColor")
      , s = ue("borderRadius")
      , i = ue("borderSpacing")
      , a = ue("borderWidth")
      , l = ue("contrast")
      , u = ue("grayscale")
      , c = ue("hueRotate")
      , f = ue("invert")
      , d = ue("gap")
      , m = ue("gradientColorStops")
      , y = ue("gradientColorStopPositions")
      , h = ue("inset")
      , w = ue("margin")
      , g = ue("opacity")
      , v = ue("padding")
      , x = ue("saturate")
      , _ = ue("scale")
      , S = ue("sepia")
      , E = ue("skew")
      , C = ue("space")
      , P = ue("translate")
      , L = () => ["auto", "contain", "none"]
      , O = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , A = () => ["auto", K, t]
      , N = () => [K, t]
      , B = () => ["", Qt, yn]
      , D = () => ["auto", lo, K]
      , H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , F = () => ["solid", "dashed", "dotted", "double", "none"]
      , V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , j = () => ["", "0", K]
      , z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , M = () => [lo, K];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [ns],
            spacing: [Qt, yn],
            blur: ["none", "", wn, K],
            brightness: M(),
            borderColor: [e],
            borderRadius: ["none", "", "full", wn, K],
            borderSpacing: N(),
            borderWidth: B(),
            contrast: M(),
            grayscale: j(),
            hueRotate: M(),
            invert: j(),
            gap: N(),
            gradientColorStops: [e],
            gradientColorStopPositions: [J_, yn],
            inset: A(),
            margin: A(),
            opacity: M(),
            padding: N(),
            saturate: M(),
            scale: M(),
            sepia: j(),
            skew: M(),
            space: N(),
            translate: N()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", K]
            }],
            container: ["container"],
            columns: [{
                columns: [wn]
            }],
            "break-after": [{
                "break-after": z()
            }],
            "break-before": [{
                "break-before": z()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...H(), K]
            }],
            overflow: [{
                overflow: O()
            }],
            "overflow-x": [{
                "overflow-x": O()
            }],
            "overflow-y": [{
                "overflow-y": O()
            }],
            overscroll: [{
                overscroll: L()
            }],
            "overscroll-x": [{
                "overscroll-x": L()
            }],
            "overscroll-y": [{
                "overscroll-y": L()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [h]
            }],
            "inset-x": [{
                "inset-x": [h]
            }],
            "inset-y": [{
                "inset-y": [h]
            }],
            start: [{
                start: [h]
            }],
            end: [{
                end: [h]
            }],
            top: [{
                top: [h]
            }],
            right: [{
                right: [h]
            }],
            bottom: [{
                bottom: [h]
            }],
            left: [{
                left: [h]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", ts, K]
            }],
            basis: [{
                basis: A()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", K]
            }],
            grow: [{
                grow: j()
            }],
            shrink: [{
                shrink: j()
            }],
            order: [{
                order: ["first", "last", "none", ts, K]
            }],
            "grid-cols": [{
                "grid-cols": [ns]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", ts, K]
                }, K]
            }],
            "col-start": [{
                "col-start": D()
            }],
            "col-end": [{
                "col-end": D()
            }],
            "grid-rows": [{
                "grid-rows": [ns]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [ts, K]
                }, K]
            }],
            "row-start": [{
                "row-start": D()
            }],
            "row-end": [{
                "row-end": D()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", K]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", K]
            }],
            gap: [{
                gap: [d]
            }],
            "gap-x": [{
                "gap-x": [d]
            }],
            "gap-y": [{
                "gap-y": [d]
            }],
            "justify-content": [{
                justify: ["normal", ...k()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...k(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...k(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [v]
            }],
            px: [{
                px: [v]
            }],
            py: [{
                py: [v]
            }],
            ps: [{
                ps: [v]
            }],
            pe: [{
                pe: [v]
            }],
            pt: [{
                pt: [v]
            }],
            pr: [{
                pr: [v]
            }],
            pb: [{
                pb: [v]
            }],
            pl: [{
                pl: [v]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [C]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [C]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", K, t]
            }],
            "min-w": [{
                "min-w": [K, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [K, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [wn]
                }, wn]
            }],
            h: [{
                h: [K, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [K, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", wn, yn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", uu]
            }],
            "font-family": [{
                font: [ns]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", K]
            }],
            "line-clamp": [{
                "line-clamp": ["none", lo, uu]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Qt, K]
            }],
            "list-image": [{
                "list-image": ["none", K]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", K]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [g]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [g]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...F(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Qt, yn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Qt, K]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: N()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", K]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", K]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [g]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...H(), eS]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Z_]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, nS]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [y]
            }],
            "gradient-via-pos": [{
                via: [y]
            }],
            "gradient-to-pos": [{
                to: [y]
            }],
            "gradient-from": [{
                from: [m]
            }],
            "gradient-via": [{
                via: [m]
            }],
            "gradient-to": [{
                to: [m]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [g]
            }],
            "border-style": [{
                border: [...F(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [g]
            }],
            "divide-style": [{
                divide: F()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...F()]
            }],
            "outline-offset": [{
                "outline-offset": [Qt, K]
            }],
            "outline-w": [{
                outline: [Qt, yn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: B()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [g]
            }],
            "ring-offset-w": [{
                "ring-offset": [Qt, yn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", wn, rS]
            }],
            "shadow-color": [{
                shadow: [ns]
            }],
            opacity: [{
                opacity: [g]
            }],
            "mix-blend": [{
                "mix-blend": [...V(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": V()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", wn, K]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [f]
            }],
            saturate: [{
                saturate: [x]
            }],
            sepia: [{
                sepia: [S]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [f]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [g]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [x]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [S]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [i]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [i]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [i]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", K]
            }],
            duration: [{
                duration: M()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", K]
            }],
            delay: [{
                delay: M()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", K]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [_]
            }],
            "scale-x": [{
                "scale-x": [_]
            }],
            "scale-y": [{
                "scale-y": [_]
            }],
            rotate: [{
                rotate: [ts, K]
            }],
            "translate-x": [{
                "translate-x": [P]
            }],
            "translate-y": [{
                "translate-y": [P]
            }],
            "skew-x": [{
                "skew-x": [E]
            }],
            "skew-y": [{
                "skew-y": [E]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", K]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", K]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": N()
            }],
            "scroll-mx": [{
                "scroll-mx": N()
            }],
            "scroll-my": [{
                "scroll-my": N()
            }],
            "scroll-ms": [{
                "scroll-ms": N()
            }],
            "scroll-me": [{
                "scroll-me": N()
            }],
            "scroll-mt": [{
                "scroll-mt": N()
            }],
            "scroll-mr": [{
                "scroll-mr": N()
            }],
            "scroll-mb": [{
                "scroll-mb": N()
            }],
            "scroll-ml": [{
                "scroll-ml": N()
            }],
            "scroll-p": [{
                "scroll-p": N()
            }],
            "scroll-px": [{
                "scroll-px": N()
            }],
            "scroll-py": [{
                "scroll-py": N()
            }],
            "scroll-ps": [{
                "scroll-ps": N()
            }],
            "scroll-pe": [{
                "scroll-pe": N()
            }],
            "scroll-pt": [{
                "scroll-pt": N()
            }],
            "scroll-pr": [{
                "scroll-pr": N()
            }],
            "scroll-pb": [{
                "scroll-pb": N()
            }],
            "scroll-pl": [{
                "scroll-pl": N()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", K]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Qt, yn, uu]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , lS = V_(aS);
function oe(...e) {
    return lS(Bv(e))
}
const uS = w_
  , Yv = p.forwardRef( ({className: e, ...t}, n) => b.jsx(Lv, {
    ref: n,
    className: oe("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Yv.displayName = Lv.displayName;
const cS = Jd("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Jv = p.forwardRef( ({className: e, variant: t, ...n}, r) => b.jsx(Dv, {
    ref: r,
    className: oe(cS({
        variant: t
    }), e),
    ...n
}));
Jv.displayName = Dv.displayName;
const dS = p.forwardRef( ({className: e, ...t}, n) => b.jsx(Fv, {
    ref: n,
    className: oe("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
dS.displayName = Fv.displayName;
const Xv = p.forwardRef( ({className: e, ...t}, n) => b.jsx(zv, {
    ref: n,
    className: oe("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: b.jsx(Hv, {
        className: "h-4 w-4"
    })
}));
Xv.displayName = zv.displayName;
const Zv = p.forwardRef( ({className: e, ...t}, n) => b.jsx($v, {
    ref: n,
    className: oe("text-sm font-semibold", e),
    ...t
}));
Zv.displayName = $v.displayName;
const ey = p.forwardRef( ({className: e, ...t}, n) => b.jsx(Mv, {
    ref: n,
    className: oe("text-sm opacity-90", e),
    ...t
}));
ey.displayName = Mv.displayName;
function fS() {
    const {toasts: e} = ti();
    return b.jsxs(uS, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...s}) {
            return b.jsxs(Jv, {
                ...s,
                children: [b.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && b.jsx(Zv, {
                        children: n
                    }), r && b.jsx(ey, {
                        children: r
                    })]
                }), o, b.jsx(Xv, {})]
            }, t)
        }), b.jsx(Yv, {})]
    })
}
var qh = ["light", "dark"]
  , hS = "(prefers-color-scheme: dark)"
  , pS = p.createContext(void 0)
  , mS = {
    setTheme: e => {}
    ,
    themes: []
}
  , gS = () => {
    var e;
    return (e = p.useContext(pS)) != null ? e : mS
}
;
p.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: s, value: i, attrs: a, nonce: l}) => {
    let u = s === "system"
      , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(y => `'${y}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , f = o ? qh.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , d = (y, h=!1, w=!0) => {
        let g = i ? i[y] : y
          , v = h ? y + "|| ''" : `'${g}'`
          , x = "";
        return o && w && !h && qh.includes(y) && (x += `d.style.colorScheme = '${y}';`),
        n === "class" ? h || g ? x += `c.add(${v})` : x += "null" : g && (x += `d[s](n,${v})`),
        x
    }
      , m = e ? `!function(){${c}${d(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${hS}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${d(i ? "x[e]" : "e", !0)}}${u ? "" : "else{" + d(s, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${d(i ? "x[e]" : "e", !0)}}else{${d(s, !1, !1)};}${f}}catch(t){}}();`;
    return p.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: m
        }
    })
}
);
var vS = e => {
    switch (e) {
    case "success":
        return xS;
    case "info":
        return _S;
    case "warning":
        return bS;
    case "error":
        return SS;
    default:
        return null
    }
}
  , yS = Array(12).fill(0)
  , wS = ({visible: e}) => I.createElement("div", {
    className: "sonner-loading-wrapper",
    "data-visible": e
}, I.createElement("div", {
    className: "sonner-spinner"
}, yS.map( (t, n) => I.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${n}`
}))))
  , xS = I.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, I.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , bS = I.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, I.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , _S = I.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, I.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , SS = I.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, I.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , ES = () => {
    let[e,t] = I.useState(document.hidden);
    return I.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Pc = 1
  , kS = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Pc++
              , s = this.toasts.find(a => a.id === o)
              , i = e.dismissible === void 0 ? !0 : e.dismissible;
            return s ? this.toasts = this.toasts.map(a => a.id === o ? (this.publish({
                ...a,
                ...e,
                id: o,
                title: n
            }),
            {
                ...a,
                ...e,
                id: o,
                dismissible: i,
                title: n
            }) : a) : this.addToast({
                title: n,
                ...r,
                dismissible: i,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e()
              , o = n !== void 0;
            return r.then(async s => {
                if (PS(s) && !s.ok) {
                    o = !1;
                    let i = typeof t.error == "function" ? await t.error(`HTTP error! status: ${s.status}`) : t.error
                      , a = typeof t.description == "function" ? await t.description(`HTTP error! status: ${s.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: i,
                        description: a
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let i = typeof t.success == "function" ? await t.success(s) : t.success
                      , a = typeof t.description == "function" ? await t.description(s) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: i,
                        description: a
                    })
                }
            }
            ).catch(async s => {
                if (t.error !== void 0) {
                    o = !1;
                    let i = typeof t.error == "function" ? await t.error(s) : t.error
                      , a = typeof t.description == "function" ? await t.description(s) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: i,
                        description: a
                    })
                }
            }
            ).finally( () => {
                var s;
                o && (this.dismiss(n),
                n = void 0),
                (s = t.finally) == null || s.call(t)
            }
            ),
            n
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Pc++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.subscribers = [],
        this.toasts = []
    }
}
  , tt = new kS
  , CS = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Pc++;
    return tt.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , PS = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , TS = CS
  , RS = () => tt.toasts;
Object.assign(TS, {
    success: tt.success,
    info: tt.info,
    warning: tt.warning,
    error: tt.error,
    custom: tt.custom,
    message: tt.message,
    promise: tt.promise,
    dismiss: tt.dismiss,
    loading: tt.loading
}, {
    getHistory: RS
});
function AS(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
AS(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ji(e) {
    return e.label !== void 0
}
var jS = 3
  , NS = "32px"
  , OS = 4e3
  , IS = 356
  , LS = 14
  , DS = 20
  , $S = 200;
function MS(...e) {
    return e.filter(Boolean).join(" ")
}
var FS = e => {
    var t, n, r, o, s, i, a, l, u, c;
    let {invert: f, toast: d, unstyled: m, interacting: y, setHeights: h, visibleToasts: w, heights: g, index: v, toasts: x, expanded: _, removeToast: S, defaultRichColors: E, closeButton: C, style: P, cancelButtonStyle: L, actionButtonStyle: O, className: A="", descriptionClassName: N="", duration: B, position: D, gap: H, loadingIcon: F, expandByDefault: V, classNames: k, icons: j, closeButtonAriaLabel: z="Close toast", pauseWhenPageIsHidden: M, cn: U} = e
      , [X,he] = I.useState(!1)
      , [Xe,ne] = I.useState(!1)
      , [wt,fn] = I.useState(!1)
      , [hn,pn] = I.useState(!1)
      , [ai,Ar] = I.useState(0)
      , [rr,Wo] = I.useState(0)
      , li = I.useRef(null)
      , mn = I.useRef(null)
      , Rl = v === 0
      , Al = v + 1 <= w
      , Te = d.type
      , jr = d.dismissible !== !1
      , Hw = d.className || ""
      , Ww = d.descriptionClassName || ""
      , ui = I.useMemo( () => g.findIndex(W => W.toastId === d.id) || 0, [g, d.id])
      , Kw = I.useMemo( () => {
        var W;
        return (W = d.closeButton) != null ? W : C
    }
    , [d.closeButton, C])
      , Ef = I.useMemo( () => d.duration || B || OS, [d.duration, B])
      , jl = I.useRef(0)
      , Nr = I.useRef(0)
      , kf = I.useRef(0)
      , Or = I.useRef(null)
      , [Cf,qw] = D.split("-")
      , Pf = I.useMemo( () => g.reduce( (W, le, se) => se >= ui ? W : W + le.height, 0), [g, ui])
      , Tf = ES()
      , Gw = d.invert || f
      , Nl = Te === "loading";
    Nr.current = I.useMemo( () => ui * H + Pf, [ui, Pf]),
    I.useEffect( () => {
        he(!0)
    }
    , []),
    I.useLayoutEffect( () => {
        if (!X)
            return;
        let W = mn.current
          , le = W.style.height;
        W.style.height = "auto";
        let se = W.getBoundingClientRect().height;
        W.style.height = le,
        Wo(se),
        h(Lt => Lt.find(Dt => Dt.toastId === d.id) ? Lt.map(Dt => Dt.toastId === d.id ? {
            ...Dt,
            height: se
        } : Dt) : [{
            toastId: d.id,
            height: se,
            position: d.position
        }, ...Lt])
    }
    , [X, d.title, d.description, h, d.id]);
    let gn = I.useCallback( () => {
        ne(!0),
        Ar(Nr.current),
        h(W => W.filter(le => le.toastId !== d.id)),
        setTimeout( () => {
            S(d)
        }
        , $S)
    }
    , [d, S, h, Nr]);
    I.useEffect( () => {
        if (d.promise && Te === "loading" || d.duration === 1 / 0 || d.type === "loading")
            return;
        let W, le = Ef;
        return _ || y || M && Tf ? ( () => {
            if (kf.current < jl.current) {
                let se = new Date().getTime() - jl.current;
                le = le - se
            }
            kf.current = new Date().getTime()
        }
        )() : le !== 1 / 0 && (jl.current = new Date().getTime(),
        W = setTimeout( () => {
            var se;
            (se = d.onAutoClose) == null || se.call(d, d),
            gn()
        }
        , le)),
        () => clearTimeout(W)
    }
    , [_, y, V, d, Ef, gn, d.promise, Te, M, Tf]),
    I.useEffect( () => {
        let W = mn.current;
        if (W) {
            let le = W.getBoundingClientRect().height;
            return Wo(le),
            h(se => [{
                toastId: d.id,
                height: le,
                position: d.position
            }, ...se]),
            () => h(se => se.filter(Lt => Lt.toastId !== d.id))
        }
    }
    , [h, d.id]),
    I.useEffect( () => {
        d.delete && gn()
    }
    , [gn, d.delete]);
    function Qw() {
        return j != null && j.loading ? I.createElement("div", {
            className: "sonner-loader",
            "data-visible": Te === "loading"
        }, j.loading) : F ? I.createElement("div", {
            className: "sonner-loader",
            "data-visible": Te === "loading"
        }, F) : I.createElement(wS, {
            visible: Te === "loading"
        })
    }
    return I.createElement("li", {
        "aria-live": d.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabIndex: 0,
        ref: mn,
        className: U(A, Hw, k == null ? void 0 : k.toast, (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast, k == null ? void 0 : k.default, k == null ? void 0 : k[Te], (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[Te]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = d.richColors) != null ? r : E,
        "data-styled": !(d.jsx || d.unstyled || m),
        "data-mounted": X,
        "data-promise": !!d.promise,
        "data-removed": Xe,
        "data-visible": Al,
        "data-y-position": Cf,
        "data-x-position": qw,
        "data-index": v,
        "data-front": Rl,
        "data-swiping": wt,
        "data-dismissible": jr,
        "data-type": Te,
        "data-invert": Gw,
        "data-swipe-out": hn,
        "data-expanded": !!(_ || V && X),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": x.length - v,
            "--offset": `${Xe ? ai : Nr.current}px`,
            "--initial-height": V ? "auto" : `${rr}px`,
            ...P,
            ...d.style
        },
        onPointerDown: W => {
            Nl || !jr || (li.current = new Date,
            Ar(Nr.current),
            W.target.setPointerCapture(W.pointerId),
            W.target.tagName !== "BUTTON" && (fn(!0),
            Or.current = {
                x: W.clientX,
                y: W.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var W, le, se, Lt;
            if (hn || !jr)
                return;
            Or.current = null;
            let Dt = Number(((W = mn.current) == null ? void 0 : W.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0)
              , ci = new Date().getTime() - ((le = li.current) == null ? void 0 : le.getTime())
              , Yw = Math.abs(Dt) / ci;
            if (Math.abs(Dt) >= DS || Yw > .11) {
                Ar(Nr.current),
                (se = d.onDismiss) == null || se.call(d, d),
                gn(),
                pn(!0);
                return
            }
            (Lt = mn.current) == null || Lt.style.setProperty("--swipe-amount", "0px"),
            fn(!1)
        }
        ,
        onPointerMove: W => {
            var le;
            if (!Or.current || !jr)
                return;
            let se = W.clientY - Or.current.y
              , Lt = W.clientX - Or.current.x
              , Dt = (Cf === "top" ? Math.min : Math.max)(0, se)
              , ci = W.pointerType === "touch" ? 10 : 2;
            Math.abs(Dt) > ci ? (le = mn.current) == null || le.style.setProperty("--swipe-amount", `${se}px`) : Math.abs(Lt) > ci && (Or.current = null)
        }
    }, Kw && !d.jsx ? I.createElement("button", {
        "aria-label": z,
        "data-disabled": Nl,
        "data-close-button": !0,
        onClick: Nl || !jr ? () => {}
        : () => {
            var W;
            gn(),
            (W = d.onDismiss) == null || W.call(d, d)
        }
        ,
        className: U(k == null ? void 0 : k.closeButton, (o = d == null ? void 0 : d.classNames) == null ? void 0 : o.closeButton)
    }, I.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, I.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), I.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))) : null, d.jsx || I.isValidElement(d.title) ? d.jsx || d.title : I.createElement(I.Fragment, null, Te || d.icon || d.promise ? I.createElement("div", {
        "data-icon": "",
        className: U(k == null ? void 0 : k.icon, (s = d == null ? void 0 : d.classNames) == null ? void 0 : s.icon)
    }, d.promise || d.type === "loading" && !d.icon ? d.icon || Qw() : null, d.type !== "loading" ? d.icon || (j == null ? void 0 : j[Te]) || vS(Te) : null) : null, I.createElement("div", {
        "data-content": "",
        className: U(k == null ? void 0 : k.content, (i = d == null ? void 0 : d.classNames) == null ? void 0 : i.content)
    }, I.createElement("div", {
        "data-title": "",
        className: U(k == null ? void 0 : k.title, (a = d == null ? void 0 : d.classNames) == null ? void 0 : a.title)
    }, d.title), d.description ? I.createElement("div", {
        "data-description": "",
        className: U(N, Ww, k == null ? void 0 : k.description, (l = d == null ? void 0 : d.classNames) == null ? void 0 : l.description)
    }, d.description) : null), I.isValidElement(d.cancel) ? d.cancel : d.cancel && ji(d.cancel) ? I.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: d.cancelButtonStyle || L,
        onClick: W => {
            var le, se;
            ji(d.cancel) && jr && ((se = (le = d.cancel).onClick) == null || se.call(le, W),
            gn())
        }
        ,
        className: U(k == null ? void 0 : k.cancelButton, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.cancelButton)
    }, d.cancel.label) : null, I.isValidElement(d.action) ? d.action : d.action && ji(d.action) ? I.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: d.actionButtonStyle || O,
        onClick: W => {
            var le, se;
            ji(d.action) && (W.defaultPrevented || ((se = (le = d.action).onClick) == null || se.call(le, W),
            gn()))
        }
        ,
        className: U(k == null ? void 0 : k.actionButton, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.actionButton)
    }, d.action.label) : null))
}
;
function Gh() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var zS = e => {
    let {invert: t, position: n="bottom-right", hotkey: r=["altKey", "KeyT"], expand: o, closeButton: s, className: i, offset: a, theme: l="light", richColors: u, duration: c, style: f, visibleToasts: d=jS, toastOptions: m, dir: y=Gh(), gap: h=LS, loadingIcon: w, icons: g, containerAriaLabel: v="Notifications", pauseWhenPageIsHidden: x, cn: _=MS} = e
      , [S,E] = I.useState([])
      , C = I.useMemo( () => Array.from(new Set([n].concat(S.filter(M => M.position).map(M => M.position)))), [S, n])
      , [P,L] = I.useState([])
      , [O,A] = I.useState(!1)
      , [N,B] = I.useState(!1)
      , [D,H] = I.useState(l !== "system" ? l : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , F = I.useRef(null)
      , V = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , k = I.useRef(null)
      , j = I.useRef(!1)
      , z = I.useCallback(M => {
        var U;
        (U = S.find(X => X.id === M.id)) != null && U.delete || tt.dismiss(M.id),
        E(X => X.filter( ({id: he}) => he !== M.id))
    }
    , [S]);
    return I.useEffect( () => tt.subscribe(M => {
        if (M.dismiss) {
            E(U => U.map(X => X.id === M.id ? {
                ...X,
                delete: !0
            } : X));
            return
        }
        setTimeout( () => {
            pv.flushSync( () => {
                E(U => {
                    let X = U.findIndex(he => he.id === M.id);
                    return X !== -1 ? [...U.slice(0, X), {
                        ...U[X],
                        ...M
                    }, ...U.slice(X + 1)] : [M, ...U]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    I.useEffect( () => {
        if (l !== "system") {
            H(l);
            return
        }
        l === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H("dark") : H("light")),
        typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({matches: M}) => {
            H(M ? "dark" : "light")
        }
        )
    }
    , [l]),
    I.useEffect( () => {
        S.length <= 1 && A(!1)
    }
    , [S]),
    I.useEffect( () => {
        let M = U => {
            var X, he;
            r.every(Xe => U[Xe] || U.code === Xe) && (A(!0),
            (X = F.current) == null || X.focus()),
            U.code === "Escape" && (document.activeElement === F.current || (he = F.current) != null && he.contains(document.activeElement)) && A(!1)
        }
        ;
        return document.addEventListener("keydown", M),
        () => document.removeEventListener("keydown", M)
    }
    , [r]),
    I.useEffect( () => {
        if (F.current)
            return () => {
                k.current && (k.current.focus({
                    preventScroll: !0
                }),
                k.current = null,
                j.current = !1)
            }
    }
    , [F.current]),
    S.length ? I.createElement("section", {
        "aria-label": `${v} ${V}`,
        tabIndex: -1
    }, C.map( (M, U) => {
        var X;
        let[he,Xe] = M.split("-");
        return I.createElement("ol", {
            key: M,
            dir: y === "auto" ? Gh() : y,
            tabIndex: -1,
            ref: F,
            className: i,
            "data-sonner-toaster": !0,
            "data-theme": D,
            "data-y-position": he,
            "data-x-position": Xe,
            style: {
                "--front-toast-height": `${((X = P[0]) == null ? void 0 : X.height) || 0}px`,
                "--offset": typeof a == "number" ? `${a}px` : a || NS,
                "--width": `${IS}px`,
                "--gap": `${h}px`,
                ...f
            },
            onBlur: ne => {
                j.current && !ne.currentTarget.contains(ne.relatedTarget) && (j.current = !1,
                k.current && (k.current.focus({
                    preventScroll: !0
                }),
                k.current = null))
            }
            ,
            onFocus: ne => {
                ne.target instanceof HTMLElement && ne.target.dataset.dismissible === "false" || j.current || (j.current = !0,
                k.current = ne.relatedTarget)
            }
            ,
            onMouseEnter: () => A(!0),
            onMouseMove: () => A(!0),
            onMouseLeave: () => {
                N || A(!1)
            }
            ,
            onPointerDown: ne => {
                ne.target instanceof HTMLElement && ne.target.dataset.dismissible === "false" || B(!0)
            }
            ,
            onPointerUp: () => B(!1)
        }, S.filter(ne => !ne.position && U === 0 || ne.position === M).map( (ne, wt) => {
            var fn, hn;
            return I.createElement(FS, {
                key: ne.id,
                icons: g,
                index: wt,
                toast: ne,
                defaultRichColors: u,
                duration: (fn = m == null ? void 0 : m.duration) != null ? fn : c,
                className: m == null ? void 0 : m.className,
                descriptionClassName: m == null ? void 0 : m.descriptionClassName,
                invert: t,
                visibleToasts: d,
                closeButton: (hn = m == null ? void 0 : m.closeButton) != null ? hn : s,
                interacting: N,
                position: M,
                style: m == null ? void 0 : m.style,
                unstyled: m == null ? void 0 : m.unstyled,
                classNames: m == null ? void 0 : m.classNames,
                cancelButtonStyle: m == null ? void 0 : m.cancelButtonStyle,
                actionButtonStyle: m == null ? void 0 : m.actionButtonStyle,
                removeToast: z,
                toasts: S.filter(pn => pn.position == ne.position),
                heights: P.filter(pn => pn.position == ne.position),
                setHeights: L,
                expandByDefault: o,
                gap: h,
                loadingIcon: w,
                expanded: O,
                pauseWhenPageIsHidden: x,
                cn: _
            })
        }
        ))
    }
    )) : null
}
;
const US = ({...e}) => {
    const {theme: t="system"} = gS();
    return b.jsx(zS, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var BS = dm.useId || ( () => {}
)
  , VS = 0;
function ws(e) {
    const [t,n] = p.useState(BS());
    return Gn( () => {
        e || n(r => r ?? String(VS++))
    }
    , [e]),
    e || (t ? `radix-${t}` : "")
}
const HS = ["top", "right", "bottom", "left"]
  , Qn = Math.min
  , rt = Math.max
  , Aa = Math.round
  , Ni = Math.floor
  , Yn = e => ({
    x: e,
    y: e
})
  , WS = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , KS = {
    start: "end",
    end: "start"
};
function Tc(e, t, n) {
    return rt(e, Qn(t, n))
}
function ln(e, t) {
    return typeof e == "function" ? e(t) : e
}
function un(e) {
    return e.split("-")[0]
}
function Mo(e) {
    return e.split("-")[1]
}
function Zd(e) {
    return e === "x" ? "y" : "x"
}
function ef(e) {
    return e === "y" ? "height" : "width"
}
function Jn(e) {
    return ["top", "bottom"].includes(un(e)) ? "y" : "x"
}
function tf(e) {
    return Zd(Jn(e))
}
function qS(e, t, n) {
    n === void 0 && (n = !1);
    const r = Mo(e)
      , o = tf(e)
      , s = ef(o);
    let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (i = ja(i)),
    [i, ja(i)]
}
function GS(e) {
    const t = ja(e);
    return [Rc(e), t, Rc(t)]
}
function Rc(e) {
    return e.replace(/start|end/g, t => KS[t])
}
function QS(e, t, n) {
    const r = ["left", "right"]
      , o = ["right", "left"]
      , s = ["top", "bottom"]
      , i = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
        return t ? s : i;
    default:
        return []
    }
}
function YS(e, t, n, r) {
    const o = Mo(e);
    let s = QS(un(e), n === "start", r);
    return o && (s = s.map(i => i + "-" + o),
    t && (s = s.concat(s.map(Rc)))),
    s
}
function ja(e) {
    return e.replace(/left|right|bottom|top/g, t => WS[t])
}
function JS(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function ty(e) {
    return typeof e != "number" ? JS(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Na(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Qh(e, t, n) {
    let {reference: r, floating: o} = e;
    const s = Jn(t)
      , i = tf(t)
      , a = ef(i)
      , l = un(t)
      , u = s === "y"
      , c = r.x + r.width / 2 - o.width / 2
      , f = r.y + r.height / 2 - o.height / 2
      , d = r[a] / 2 - o[a] / 2;
    let m;
    switch (l) {
    case "top":
        m = {
            x: c,
            y: r.y - o.height
        };
        break;
    case "bottom":
        m = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        m = {
            x: r.x + r.width,
            y: f
        };
        break;
    case "left":
        m = {
            x: r.x - o.width,
            y: f
        };
        break;
    default:
        m = {
            x: r.x,
            y: r.y
        }
    }
    switch (Mo(t)) {
    case "start":
        m[i] -= d * (n && u ? -1 : 1);
        break;
    case "end":
        m[i] += d * (n && u ? -1 : 1);
        break
    }
    return m
}
const XS = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: s=[], platform: i} = n
      , a = s.filter(Boolean)
      , l = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: c, y: f} = Qh(u, r, l)
      , d = r
      , m = {}
      , y = 0;
    for (let h = 0; h < a.length; h++) {
        const {name: w, fn: g} = a[h]
          , {x: v, y: x, data: _, reset: S} = await g({
            x: c,
            y: f,
            initialPlacement: r,
            placement: d,
            strategy: o,
            middlewareData: m,
            rects: u,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = v ?? c,
        f = x ?? f,
        m = {
            ...m,
            [w]: {
                ...m[w],
                ..._
            }
        },
        S && y <= 50 && (y++,
        typeof S == "object" && (S.placement && (d = S.placement),
        S.rects && (u = S.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : S.rects),
        {x: c, y: f} = Qh(u, d, l)),
        h = -1)
    }
    return {
        x: c,
        y: f,
        placement: d,
        strategy: o,
        middlewareData: m
    }
}
;
async function zs(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: s, rects: i, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: f="floating", altBoundary: d=!1, padding: m=0} = ln(t, e)
      , y = ty(m)
      , w = a[d ? f === "floating" ? "reference" : "floating" : f]
      , g = Na(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    }))
      , v = f === "floating" ? {
        x: r,
        y: o,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference
      , x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating))
      , _ = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , S = Na(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: v,
        offsetParent: x,
        strategy: l
    }) : v);
    return {
        top: (g.top - S.top + y.top) / _.y,
        bottom: (S.bottom - g.bottom + y.bottom) / _.y,
        left: (g.left - S.left + y.left) / _.x,
        right: (S.right - g.right + y.right) / _.x
    }
}
const ZS = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: s, platform: i, elements: a, middlewareData: l} = t
          , {element: u, padding: c=0} = ln(e, t) || {};
        if (u == null)
            return {};
        const f = ty(c)
          , d = {
            x: n,
            y: r
        }
          , m = tf(o)
          , y = ef(m)
          , h = await i.getDimensions(u)
          , w = m === "y"
          , g = w ? "top" : "left"
          , v = w ? "bottom" : "right"
          , x = w ? "clientHeight" : "clientWidth"
          , _ = s.reference[y] + s.reference[m] - d[m] - s.floating[y]
          , S = d[m] - s.reference[m]
          , E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
        let C = E ? E[x] : 0;
        (!C || !await (i.isElement == null ? void 0 : i.isElement(E))) && (C = a.floating[x] || s.floating[y]);
        const P = _ / 2 - S / 2
          , L = C / 2 - h[y] / 2 - 1
          , O = Qn(f[g], L)
          , A = Qn(f[v], L)
          , N = O
          , B = C - h[y] - A
          , D = C / 2 - h[y] / 2 + P
          , H = Tc(N, D, B)
          , F = !l.arrow && Mo(o) != null && D !== H && s.reference[y] / 2 - (D < N ? O : A) - h[y] / 2 < 0
          , V = F ? D < N ? D - N : D - B : 0;
        return {
            [m]: d[m] + V,
            data: {
                [m]: H,
                centerOffset: D - H - V,
                ...F && {
                    alignmentOffset: V
                }
            },
            reset: F
        }
    }
})
  , eE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: s, rects: i, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: f=!0, fallbackPlacements: d, fallbackStrategy: m="bestFit", fallbackAxisSideDirection: y="none", flipAlignment: h=!0, ...w} = ln(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset)
                return {};
            const g = un(o)
              , v = Jn(a)
              , x = un(a) === a
              , _ = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , S = d || (x || !h ? [ja(a)] : GS(a))
              , E = y !== "none";
            !d && E && S.push(...YS(a, h, y, _));
            const C = [a, ...S]
              , P = await zs(t, w)
              , L = [];
            let O = ((r = s.flip) == null ? void 0 : r.overflows) || [];
            if (c && L.push(P[g]),
            f) {
                const D = qS(o, i, _);
                L.push(P[D[0]], P[D[1]])
            }
            if (O = [...O, {
                placement: o,
                overflows: L
            }],
            !L.every(D => D <= 0)) {
                var A, N;
                const D = (((A = s.flip) == null ? void 0 : A.index) || 0) + 1
                  , H = C[D];
                if (H)
                    return {
                        data: {
                            index: D,
                            overflows: O
                        },
                        reset: {
                            placement: H
                        }
                    };
                let F = (N = O.filter(V => V.overflows[0] <= 0).sort( (V, k) => V.overflows[1] - k.overflows[1])[0]) == null ? void 0 : N.placement;
                if (!F)
                    switch (m) {
                    case "bestFit":
                        {
                            var B;
                            const V = (B = O.filter(k => {
                                if (E) {
                                    const j = Jn(k.placement);
                                    return j === v || j === "y"
                                }
                                return !0
                            }
                            ).map(k => [k.placement, k.overflows.filter(j => j > 0).reduce( (j, z) => j + z, 0)]).sort( (k, j) => k[1] - j[1])[0]) == null ? void 0 : B[0];
                            V && (F = V);
                            break
                        }
                    case "initialPlacement":
                        F = a;
                        break
                    }
                if (o !== F)
                    return {
                        reset: {
                            placement: F
                        }
                    }
            }
            return {}
        }
    }
};
function Yh(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Jh(e) {
    return HS.some(t => e[t] >= 0)
}
const tE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = ln(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const s = await zs(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , i = Yh(s, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: i,
                            referenceHidden: Jh(i)
                        }
                    }
                }
            case "escaped":
                {
                    const s = await zs(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , i = Yh(s, n.floating);
                    return {
                        data: {
                            escapedOffsets: i,
                            escaped: Jh(i)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function nE(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , i = un(n)
      , a = Mo(n)
      , l = Jn(n) === "y"
      , u = ["left", "top"].includes(i) ? -1 : 1
      , c = s && l ? -1 : 1
      , f = ln(t, e);
    let {mainAxis: d, crossAxis: m, alignmentAxis: y} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return a && typeof y == "number" && (m = a === "end" ? y * -1 : y),
    l ? {
        x: m * c,
        y: d * u
    } : {
        x: d * u,
        y: m * c
    }
}
const rE = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: s, placement: i, middlewareData: a} = t
              , l = await nE(t, e);
            return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: s + l.y,
                data: {
                    ...l,
                    placement: i
                }
            }
        }
    }
}
  , oE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: s=!0, crossAxis: i=!1, limiter: a={
                fn: w => {
                    let {x: g, y: v} = w;
                    return {
                        x: g,
                        y: v
                    }
                }
            }, ...l} = ln(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await zs(t, l)
              , f = Jn(un(o))
              , d = Zd(f);
            let m = u[d]
              , y = u[f];
            if (s) {
                const w = d === "y" ? "top" : "left"
                  , g = d === "y" ? "bottom" : "right"
                  , v = m + c[w]
                  , x = m - c[g];
                m = Tc(v, m, x)
            }
            if (i) {
                const w = f === "y" ? "top" : "left"
                  , g = f === "y" ? "bottom" : "right"
                  , v = y + c[w]
                  , x = y - c[g];
                y = Tc(v, y, x)
            }
            const h = a.fn({
                ...t,
                [d]: m,
                [f]: y
            });
            return {
                ...h,
                data: {
                    x: h.x - n,
                    y: h.y - r,
                    enabled: {
                        [d]: s,
                        [f]: i
                    }
                }
            }
        }
    }
}
  , sE = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: s, middlewareData: i} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = ln(e, t)
              , c = {
                x: n,
                y: r
            }
              , f = Jn(o)
              , d = Zd(f);
            let m = c[d]
              , y = c[f];
            const h = ln(a, t)
              , w = typeof h == "number" ? {
                mainAxis: h,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...h
            };
            if (l) {
                const x = d === "y" ? "height" : "width"
                  , _ = s.reference[d] - s.floating[x] + w.mainAxis
                  , S = s.reference[d] + s.reference[x] - w.mainAxis;
                m < _ ? m = _ : m > S && (m = S)
            }
            if (u) {
                var g, v;
                const x = d === "y" ? "width" : "height"
                  , _ = ["top", "left"].includes(un(o))
                  , S = s.reference[f] - s.floating[x] + (_ && ((g = i.offset) == null ? void 0 : g[f]) || 0) + (_ ? 0 : w.crossAxis)
                  , E = s.reference[f] + s.reference[x] + (_ ? 0 : ((v = i.offset) == null ? void 0 : v[f]) || 0) - (_ ? w.crossAxis : 0);
                y < S ? y = S : y > E && (y = E)
            }
            return {
                [d]: m,
                [f]: y
            }
        }
    }
}
  , iE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: s, platform: i, elements: a} = t
              , {apply: l= () => {}
            , ...u} = ln(e, t)
              , c = await zs(t, u)
              , f = un(o)
              , d = Mo(o)
              , m = Jn(o) === "y"
              , {width: y, height: h} = s.floating;
            let w, g;
            f === "top" || f === "bottom" ? (w = f,
            g = d === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = f,
            w = d === "end" ? "top" : "bottom");
            const v = h - c.top - c.bottom
              , x = y - c.left - c.right
              , _ = Qn(h - c[w], v)
              , S = Qn(y - c[g], x)
              , E = !t.middlewareData.shift;
            let C = _
              , P = S;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (C = v),
            E && !d) {
                const O = rt(c.left, 0)
                  , A = rt(c.right, 0)
                  , N = rt(c.top, 0)
                  , B = rt(c.bottom, 0);
                m ? P = y - 2 * (O !== 0 || A !== 0 ? O + A : rt(c.left, c.right)) : C = h - 2 * (N !== 0 || B !== 0 ? N + B : rt(c.top, c.bottom))
            }
            await l({
                ...t,
                availableWidth: P,
                availableHeight: C
            });
            const L = await i.getDimensions(a.floating);
            return y !== L.width || h !== L.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function sl() {
    return typeof window < "u"
}
function Fo(e) {
    return ny(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function it(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Gt(e) {
    var t;
    return (t = (ny(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function ny(e) {
    return sl() ? e instanceof Node || e instanceof it(e).Node : !1
}
function Nt(e) {
    return sl() ? e instanceof Element || e instanceof it(e).Element : !1
}
function qt(e) {
    return sl() ? e instanceof HTMLElement || e instanceof it(e).HTMLElement : !1
}
function Xh(e) {
    return !sl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof it(e).ShadowRoot
}
function oi(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = Ot(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function aE(e) {
    return ["table", "td", "th"].includes(Fo(e))
}
function il(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function nf(e) {
    const t = rf()
      , n = Nt(e) ? Ot(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function lE(e) {
    let t = Xn(e);
    for (; qt(t) && !Ao(t); ) {
        if (nf(t))
            return t;
        if (il(t))
            return null;
        t = Xn(t)
    }
    return null
}
function rf() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Ao(e) {
    return ["html", "body", "#document"].includes(Fo(e))
}
function Ot(e) {
    return it(e).getComputedStyle(e)
}
function al(e) {
    return Nt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Xn(e) {
    if (Fo(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Xh(e) && e.host || Gt(e);
    return Xh(t) ? t.host : t
}
function ry(e) {
    const t = Xn(e);
    return Ao(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : qt(t) && oi(t) ? t : ry(t)
}
function Us(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = ry(e)
      , s = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , i = it(o);
    if (s) {
        const a = Ac(i);
        return t.concat(i, i.visualViewport || [], oi(o) ? o : [], a && n ? Us(a) : [])
    }
    return t.concat(o, Us(o, [], n))
}
function Ac(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function oy(e) {
    const t = Ot(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = qt(e)
      , s = o ? e.offsetWidth : n
      , i = o ? e.offsetHeight : r
      , a = Aa(n) !== s || Aa(r) !== i;
    return a && (n = s,
    r = i),
    {
        width: n,
        height: r,
        $: a
    }
}
function of(e) {
    return Nt(e) ? e : e.contextElement
}
function uo(e) {
    const t = of(e);
    if (!qt(t))
        return Yn(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: s} = oy(t);
    let i = (s ? Aa(n.width) : n.width) / r
      , a = (s ? Aa(n.height) : n.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: i,
        y: a
    }
}
const uE = Yn(0);
function sy(e) {
    const t = it(e);
    return !rf() || !t.visualViewport ? uE : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function cE(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== it(e) ? !1 : t
}
function Er(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , s = of(e);
    let i = Yn(1);
    t && (r ? Nt(r) && (i = uo(r)) : i = uo(e));
    const a = cE(s, n, r) ? sy(s) : Yn(0);
    let l = (o.left + a.x) / i.x
      , u = (o.top + a.y) / i.y
      , c = o.width / i.x
      , f = o.height / i.y;
    if (s) {
        const d = it(s)
          , m = r && Nt(r) ? it(r) : r;
        let y = d
          , h = Ac(y);
        for (; h && r && m !== y; ) {
            const w = uo(h)
              , g = h.getBoundingClientRect()
              , v = Ot(h)
              , x = g.left + (h.clientLeft + parseFloat(v.paddingLeft)) * w.x
              , _ = g.top + (h.clientTop + parseFloat(v.paddingTop)) * w.y;
            l *= w.x,
            u *= w.y,
            c *= w.x,
            f *= w.y,
            l += x,
            u += _,
            y = it(h),
            h = Ac(y)
        }
    }
    return Na({
        width: c,
        height: f,
        x: l,
        y: u
    })
}
function dE(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const s = o === "fixed"
      , i = Gt(r)
      , a = t ? il(t.floating) : !1;
    if (r === i || a && s)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Yn(1);
    const c = Yn(0)
      , f = qt(r);
    if ((f || !f && !s) && ((Fo(r) !== "body" || oi(i)) && (l = al(r)),
    qt(r))) {
        const d = Er(r);
        u = uo(r),
        c.x = d.x + r.clientLeft,
        c.y = d.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y
    }
}
function fE(e) {
    return Array.from(e.getClientRects())
}
function jc(e, t) {
    const n = al(e).scrollLeft;
    return t ? t.left + n : Er(Gt(e)).left + n
}
function hE(e) {
    const t = Gt(e)
      , n = al(e)
      , r = e.ownerDocument.body
      , o = rt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , s = rt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + jc(e);
    const a = -n.scrollTop;
    return Ot(r).direction === "rtl" && (i += rt(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: s,
        x: i,
        y: a
    }
}
function pE(e, t) {
    const n = it(e)
      , r = Gt(e)
      , o = n.visualViewport;
    let s = r.clientWidth
      , i = r.clientHeight
      , a = 0
      , l = 0;
    if (o) {
        s = o.width,
        i = o.height;
        const u = rf();
        (!u || u && t === "fixed") && (a = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: s,
        height: i,
        x: a,
        y: l
    }
}
function mE(e, t) {
    const n = Er(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , s = qt(e) ? uo(e) : Yn(1)
      , i = e.clientWidth * s.x
      , a = e.clientHeight * s.y
      , l = o * s.x
      , u = r * s.y;
    return {
        width: i,
        height: a,
        x: l,
        y: u
    }
}
function Zh(e, t, n) {
    let r;
    if (t === "viewport")
        r = pE(e, n);
    else if (t === "document")
        r = hE(Gt(e));
    else if (Nt(t))
        r = mE(t, n);
    else {
        const o = sy(e);
        r = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return Na(r)
}
function iy(e, t) {
    const n = Xn(e);
    return n === t || !Nt(n) || Ao(n) ? !1 : Ot(n).position === "fixed" || iy(n, t)
}
function gE(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Us(e, [], !1).filter(a => Nt(a) && Fo(a) !== "body")
      , o = null;
    const s = Ot(e).position === "fixed";
    let i = s ? Xn(e) : e;
    for (; Nt(i) && !Ao(i); ) {
        const a = Ot(i)
          , l = nf(i);
        !l && a.position === "fixed" && (o = null),
        (s ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || oi(i) && !l && iy(e, i)) ? r = r.filter(c => c !== i) : o = a,
        i = Xn(i)
    }
    return t.set(e, r),
    r
}
function vE(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const i = [...n === "clippingAncestors" ? il(t) ? [] : gE(t, this._c) : [].concat(n), r]
      , a = i[0]
      , l = i.reduce( (u, c) => {
        const f = Zh(t, c, o);
        return u.top = rt(f.top, u.top),
        u.right = Qn(f.right, u.right),
        u.bottom = Qn(f.bottom, u.bottom),
        u.left = rt(f.left, u.left),
        u
    }
    , Zh(t, a, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function yE(e) {
    const {width: t, height: n} = oy(e);
    return {
        width: t,
        height: n
    }
}
function wE(e, t, n) {
    const r = qt(t)
      , o = Gt(t)
      , s = n === "fixed"
      , i = Er(e, !0, s, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Yn(0);
    if (r || !r && !s)
        if ((Fo(t) !== "body" || oi(o)) && (a = al(t)),
        r) {
            const m = Er(t, !0, s, t);
            l.x = m.x + t.clientLeft,
            l.y = m.y + t.clientTop
        } else
            o && (l.x = jc(o));
    let u = 0
      , c = 0;
    if (o && !r && !s) {
        const m = o.getBoundingClientRect();
        c = m.top + a.scrollTop,
        u = m.left + a.scrollLeft - jc(o, m)
    }
    const f = i.left + a.scrollLeft - l.x - u
      , d = i.top + a.scrollTop - l.y - c;
    return {
        x: f,
        y: d,
        width: i.width,
        height: i.height
    }
}
function cu(e) {
    return Ot(e).position === "static"
}
function ep(e, t) {
    if (!qt(e) || Ot(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Gt(e) === n && (n = n.ownerDocument.body),
    n
}
function ay(e, t) {
    const n = it(e);
    if (il(e))
        return n;
    if (!qt(e)) {
        let o = Xn(e);
        for (; o && !Ao(o); ) {
            if (Nt(o) && !cu(o))
                return o;
            o = Xn(o)
        }
        return n
    }
    let r = ep(e, t);
    for (; r && aE(r) && cu(r); )
        r = ep(r, t);
    return r && Ao(r) && cu(r) && !nf(r) ? n : r || lE(e) || n
}
const xE = async function(e) {
    const t = this.getOffsetParent || ay
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: wE(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function bE(e) {
    return Ot(e).direction === "rtl"
}
const _E = {
    convertOffsetParentRelativeRectToViewportRelativeRect: dE,
    getDocumentElement: Gt,
    getClippingRect: vE,
    getOffsetParent: ay,
    getElementRects: xE,
    getClientRects: fE,
    getDimensions: yE,
    getScale: uo,
    isElement: Nt,
    isRTL: bE
};
function SE(e, t) {
    let n = null, r;
    const o = Gt(e);
    function s() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function i(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        s();
        const {left: u, top: c, width: f, height: d} = e.getBoundingClientRect();
        if (a || t(),
        !f || !d)
            return;
        const m = Ni(c)
          , y = Ni(o.clientWidth - (u + f))
          , h = Ni(o.clientHeight - (c + d))
          , w = Ni(u)
          , v = {
            rootMargin: -m + "px " + -y + "px " + -h + "px " + -w + "px",
            threshold: rt(0, Qn(1, l)) || 1
        };
        let x = !0;
        function _(S) {
            const E = S[0].intersectionRatio;
            if (E !== l) {
                if (!x)
                    return i();
                E ? i(!1, E) : r = setTimeout( () => {
                    i(!1, 1e-7)
                }
                , 1e3)
            }
            x = !1
        }
        try {
            n = new IntersectionObserver(_,{
                ...v,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(_,v)
        }
        n.observe(e)
    }
    return i(!0),
    s
}
function EE(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: s=!0, elementResize: i=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = of(e)
      , c = o || s ? [...u ? Us(u) : [], ...Us(t)] : [];
    c.forEach(g => {
        o && g.addEventListener("scroll", n, {
            passive: !0
        }),
        s && g.addEventListener("resize", n)
    }
    );
    const f = u && a ? SE(u, n) : null;
    let d = -1
      , m = null;
    i && (m = new ResizeObserver(g => {
        let[v] = g;
        v && v.target === u && m && (m.unobserve(t),
        cancelAnimationFrame(d),
        d = requestAnimationFrame( () => {
            var x;
            (x = m) == null || x.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && m.observe(u),
    m.observe(t));
    let y, h = l ? Er(e) : null;
    l && w();
    function w() {
        const g = Er(e);
        h && (g.x !== h.x || g.y !== h.y || g.width !== h.width || g.height !== h.height) && n(),
        h = g,
        y = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var g;
        c.forEach(v => {
            o && v.removeEventListener("scroll", n),
            s && v.removeEventListener("resize", n)
        }
        ),
        f == null || f(),
        (g = m) == null || g.disconnect(),
        m = null,
        l && cancelAnimationFrame(y)
    }
}
const kE = rE
  , CE = oE
  , PE = eE
  , TE = iE
  , RE = tE
  , tp = ZS
  , AE = sE
  , jE = (e, t, n) => {
    const r = new Map
      , o = {
        platform: _E,
        ...n
    }
      , s = {
        ...o.platform,
        _c: r
    };
    return XS(e, t, {
        ...o,
        platform: s
    })
}
;
var na = typeof document < "u" ? p.useLayoutEffect : p.useEffect;
function Oa(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Oa(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !Oa(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function ly(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function np(e, t) {
    const n = ly(e);
    return Math.round(t * n) / n
}
function du(e) {
    const t = p.useRef(e);
    return na( () => {
        t.current = e
    }
    ),
    t
}
function NE(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: s, floating: i}={}, transform: a=!0, whileElementsMounted: l, open: u} = e
      , [c,f] = p.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [d,m] = p.useState(r);
    Oa(d, r) || m(r);
    const [y,h] = p.useState(null)
      , [w,g] = p.useState(null)
      , v = p.useCallback(k => {
        k !== E.current && (E.current = k,
        h(k))
    }
    , [])
      , x = p.useCallback(k => {
        k !== C.current && (C.current = k,
        g(k))
    }
    , [])
      , _ = s || y
      , S = i || w
      , E = p.useRef(null)
      , C = p.useRef(null)
      , P = p.useRef(c)
      , L = l != null
      , O = du(l)
      , A = du(o)
      , N = du(u)
      , B = p.useCallback( () => {
        if (!E.current || !C.current)
            return;
        const k = {
            placement: t,
            strategy: n,
            middleware: d
        };
        A.current && (k.platform = A.current),
        jE(E.current, C.current, k).then(j => {
            const z = {
                ...j,
                isPositioned: N.current !== !1
            };
            D.current && !Oa(P.current, z) && (P.current = z,
            ei.flushSync( () => {
                f(z)
            }
            ))
        }
        )
    }
    , [d, t, n, A, N]);
    na( () => {
        u === !1 && P.current.isPositioned && (P.current.isPositioned = !1,
        f(k => ({
            ...k,
            isPositioned: !1
        })))
    }
    , [u]);
    const D = p.useRef(!1);
    na( () => (D.current = !0,
    () => {
        D.current = !1
    }
    ), []),
    na( () => {
        if (_ && (E.current = _),
        S && (C.current = S),
        _ && S) {
            if (O.current)
                return O.current(_, S, B);
            B()
        }
    }
    , [_, S, B, O, L]);
    const H = p.useMemo( () => ({
        reference: E,
        floating: C,
        setReference: v,
        setFloating: x
    }), [v, x])
      , F = p.useMemo( () => ({
        reference: _,
        floating: S
    }), [_, S])
      , V = p.useMemo( () => {
        const k = {
            position: n,
            left: 0,
            top: 0
        };
        if (!F.floating)
            return k;
        const j = np(F.floating, c.x)
          , z = np(F.floating, c.y);
        return a ? {
            ...k,
            transform: "translate(" + j + "px, " + z + "px)",
            ...ly(F.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: j,
            top: z
        }
    }
    , [n, a, F.floating, c.x, c.y]);
    return p.useMemo( () => ({
        ...c,
        update: B,
        refs: H,
        elements: F,
        floatingStyles: V
    }), [c, B, H, F, V])
}
const OE = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? tp({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? tp({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , IE = (e, t) => ({
    ...kE(e),
    options: [e, t]
})
  , LE = (e, t) => ({
    ...CE(e),
    options: [e, t]
})
  , DE = (e, t) => ({
    ...AE(e),
    options: [e, t]
})
  , $E = (e, t) => ({
    ...PE(e),
    options: [e, t]
})
  , ME = (e, t) => ({
    ...TE(e),
    options: [e, t]
})
  , FE = (e, t) => ({
    ...RE(e),
    options: [e, t]
})
  , zE = (e, t) => ({
    ...OE(e),
    options: [e, t]
});
var UE = "Arrow"
  , uy = p.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...s} = e;
    return b.jsx(ee.svg, {
        ...s,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : b.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
uy.displayName = UE;
var BE = uy;
function VE(e, t=[]) {
    let n = [];
    function r(s, i) {
        const a = p.createContext(i)
          , l = n.length;
        n = [...n, i];
        function u(f) {
            const {scope: d, children: m, ...y} = f
              , h = (d == null ? void 0 : d[e][l]) || a
              , w = p.useMemo( () => y, Object.values(y));
            return b.jsx(h.Provider, {
                value: w,
                children: m
            })
        }
        function c(f, d) {
            const m = (d == null ? void 0 : d[e][l]) || a
              , y = p.useContext(m);
            if (y)
                return y;
            if (i !== void 0)
                return i;
            throw new Error(`\`${f}\` must be used within \`${s}\``)
        }
        return u.displayName = s + "Provider",
        [u, c]
    }
    const o = () => {
        const s = n.map(i => p.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return p.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, HE(o, ...t)]
}
function HE(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const f = l(s)[`__scope${u}`];
                return {
                    ...a,
                    ...f
                }
            }
            , {});
            return p.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function cy(e) {
    const [t,n] = p.useState(void 0);
    return Gn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const s = o[0];
                let i, a;
                if ("borderBoxSize"in s) {
                    const l = s.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    i = u.inlineSize,
                    a = u.blockSize
                } else
                    i = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: i,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var dy = "Popper"
  , [fy,hy] = VE(dy)
  , [lj,py] = fy(dy)
  , my = "PopperAnchor"
  , gy = p.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , s = py(my, n)
      , i = p.useRef(null)
      , a = xe(t, i);
    return p.useEffect( () => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current)
    }
    ),
    r ? null : b.jsx(ee.div, {
        ...o,
        ref: a
    })
}
);
gy.displayName = my;
var sf = "PopperContent"
  , [WE,KE] = fy(sf)
  , vy = p.forwardRef( (e, t) => {
    var wt, fn, hn, pn, ai, Ar;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: s="center", alignOffset: i=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: f="partial", hideWhenDetached: d=!1, updatePositionStrategy: m="optimized", onPlaced: y, ...h} = e
      , w = py(sf, n)
      , [g,v] = p.useState(null)
      , x = xe(t, rr => v(rr))
      , [_,S] = p.useState(null)
      , E = cy(_)
      , C = (E == null ? void 0 : E.width) ?? 0
      , P = (E == null ? void 0 : E.height) ?? 0
      , L = r + (s !== "center" ? "-" + s : "")
      , O = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , A = Array.isArray(u) ? u : [u]
      , N = A.length > 0
      , B = {
        padding: O,
        boundary: A.filter(GE),
        altBoundary: N
    }
      , {refs: D, floatingStyles: H, placement: F, isPositioned: V, middlewareData: k} = NE({
        strategy: "fixed",
        placement: L,
        whileElementsMounted: (...rr) => EE(...rr, {
            animationFrame: m === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [IE({
            mainAxis: o + P,
            alignmentAxis: i
        }), l && LE({
            mainAxis: !0,
            crossAxis: !1,
            limiter: f === "partial" ? DE() : void 0,
            ...B
        }), l && $E({
            ...B
        }), ME({
            ...B,
            apply: ({elements: rr, rects: Wo, availableWidth: li, availableHeight: mn}) => {
                const {width: Rl, height: Al} = Wo.reference
                  , Te = rr.floating.style;
                Te.setProperty("--radix-popper-available-width", `${li}px`),
                Te.setProperty("--radix-popper-available-height", `${mn}px`),
                Te.setProperty("--radix-popper-anchor-width", `${Rl}px`),
                Te.setProperty("--radix-popper-anchor-height", `${Al}px`)
            }
        }), _ && zE({
            element: _,
            padding: a
        }), QE({
            arrowWidth: C,
            arrowHeight: P
        }), d && FE({
            strategy: "referenceHidden",
            ...B
        })]
    })
      , [j,z] = xy(F)
      , M = lt(y);
    Gn( () => {
        V && (M == null || M())
    }
    , [V, M]);
    const U = (wt = k.arrow) == null ? void 0 : wt.x
      , X = (fn = k.arrow) == null ? void 0 : fn.y
      , he = ((hn = k.arrow) == null ? void 0 : hn.centerOffset) !== 0
      , [Xe,ne] = p.useState();
    return Gn( () => {
        g && ne(window.getComputedStyle(g).zIndex)
    }
    , [g]),
    b.jsx("div", {
        ref: D.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...H,
            transform: V ? H.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Xe,
            "--radix-popper-transform-origin": [(pn = k.transformOrigin) == null ? void 0 : pn.x, (ai = k.transformOrigin) == null ? void 0 : ai.y].join(" "),
            ...((Ar = k.hide) == null ? void 0 : Ar.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: b.jsx(WE, {
            scope: n,
            placedSide: j,
            onArrowChange: S,
            arrowX: U,
            arrowY: X,
            shouldHideArrow: he,
            children: b.jsx(ee.div, {
                "data-side": j,
                "data-align": z,
                ...h,
                ref: x,
                style: {
                    ...h.style,
                    animation: V ? void 0 : "none"
                }
            })
        })
    })
}
);
vy.displayName = sf;
var yy = "PopperArrow"
  , qE = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , wy = p.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , s = KE(yy, r)
      , i = qE[s.placedSide];
    return b.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [i]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: b.jsx(BE, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
wy.displayName = yy;
function GE(e) {
    return e !== null
}
var QE = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, g, v;
        const {placement: n, rects: r, middlewareData: o} = t
          , i = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , a = i ? 0 : e.arrowWidth
          , l = i ? 0 : e.arrowHeight
          , [u,c] = xy(n)
          , f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , d = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + a / 2
          , m = (((v = o.arrow) == null ? void 0 : v.y) ?? 0) + l / 2;
        let y = ""
          , h = "";
        return u === "bottom" ? (y = i ? f : `${d}px`,
        h = `${-l}px`) : u === "top" ? (y = i ? f : `${d}px`,
        h = `${r.floating.height + l}px`) : u === "right" ? (y = `${-l}px`,
        h = i ? f : `${m}px`) : u === "left" && (y = `${r.floating.width + l}px`,
        h = i ? f : `${m}px`),
        {
            data: {
                x: y,
                y: h
            }
        }
    }
});
function xy(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var YE = gy
  , JE = vy
  , XE = wy
  , [ll,uj] = ni("Tooltip", [hy])
  , af = hy()
  , by = "TooltipProvider"
  , ZE = 700
  , rp = "tooltip.open"
  , [ek,_y] = ll(by)
  , Sy = e => {
    const {__scopeTooltip: t, delayDuration: n=ZE, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: s} = e
      , [i,a] = p.useState(!0)
      , l = p.useRef(!1)
      , u = p.useRef(0);
    return p.useEffect( () => {
        const c = u.current;
        return () => window.clearTimeout(c)
    }
    , []),
    b.jsx(ek, {
        scope: t,
        isOpenDelayed: i,
        delayDuration: n,
        onOpen: p.useCallback( () => {
            window.clearTimeout(u.current),
            a(!1)
        }
        , []),
        onClose: p.useCallback( () => {
            window.clearTimeout(u.current),
            u.current = window.setTimeout( () => a(!0), r)
        }
        , [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: p.useCallback(c => {
            l.current = c
        }
        , []),
        disableHoverableContent: o,
        children: s
    })
}
;
Sy.displayName = by;
var Ey = "Tooltip"
  , [cj,ul] = ll(Ey)
  , Nc = "TooltipTrigger"
  , tk = p.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = ul(Nc, n)
      , s = _y(Nc, n)
      , i = af(n)
      , a = p.useRef(null)
      , l = xe(t, a, o.onTriggerChange)
      , u = p.useRef(!1)
      , c = p.useRef(!1)
      , f = p.useCallback( () => u.current = !1, []);
    return p.useEffect( () => () => document.removeEventListener("pointerup", f), [f]),
    b.jsx(YE, {
        asChild: !0,
        ...i,
        children: b.jsx(ee.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: Q(e.onPointerMove, d => {
                d.pointerType !== "touch" && !c.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: Q(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: Q(e.onPointerDown, () => {
                u.current = !0,
                document.addEventListener("pointerup", f, {
                    once: !0
                })
            }
            ),
            onFocus: Q(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: Q(e.onBlur, o.onClose),
            onClick: Q(e.onClick, o.onClose)
        })
    })
}
);
tk.displayName = Nc;
var nk = "TooltipPortal"
  , [dj,rk] = ll(nk, {
    forceMount: void 0
})
  , jo = "TooltipContent"
  , ky = p.forwardRef( (e, t) => {
    const n = rk(jo, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...s} = e
      , i = ul(jo, e.__scopeTooltip);
    return b.jsx(Tr, {
        present: r || i.open,
        children: i.disableHoverableContent ? b.jsx(Cy, {
            side: o,
            ...s,
            ref: t
        }) : b.jsx(ok, {
            side: o,
            ...s,
            ref: t
        })
    })
}
)
  , ok = p.forwardRef( (e, t) => {
    const n = ul(jo, e.__scopeTooltip)
      , r = _y(jo, e.__scopeTooltip)
      , o = p.useRef(null)
      , s = xe(t, o)
      , [i,a] = p.useState(null)
      , {trigger: l, onClose: u} = n
      , c = o.current
      , {onPointerInTransitChange: f} = r
      , d = p.useCallback( () => {
        a(null),
        f(!1)
    }
    , [f])
      , m = p.useCallback( (y, h) => {
        const w = y.currentTarget
          , g = {
            x: y.clientX,
            y: y.clientY
        }
          , v = lk(g, w.getBoundingClientRect())
          , x = uk(g, v)
          , _ = ck(h.getBoundingClientRect())
          , S = fk([...x, ..._]);
        a(S),
        f(!0)
    }
    , [f]);
    return p.useEffect( () => () => d(), [d]),
    p.useEffect( () => {
        if (l && c) {
            const y = w => m(w, c)
              , h = w => m(w, l);
            return l.addEventListener("pointerleave", y),
            c.addEventListener("pointerleave", h),
            () => {
                l.removeEventListener("pointerleave", y),
                c.removeEventListener("pointerleave", h)
            }
        }
    }
    , [l, c, m, d]),
    p.useEffect( () => {
        if (i) {
            const y = h => {
                const w = h.target
                  , g = {
                    x: h.clientX,
                    y: h.clientY
                }
                  , v = (l == null ? void 0 : l.contains(w)) || (c == null ? void 0 : c.contains(w))
                  , x = !dk(g, i);
                v ? d() : x && (d(),
                u())
            }
            ;
            return document.addEventListener("pointermove", y),
            () => document.removeEventListener("pointermove", y)
        }
    }
    , [l, c, i, u, d]),
    b.jsx(Cy, {
        ...e,
        ref: s
    })
}
)
  , [sk,ik] = ll(Ey, {
    isInside: !1
})
  , Cy = p.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: s, onPointerDownOutside: i, ...a} = e
      , l = ul(jo, n)
      , u = af(n)
      , {onClose: c} = l;
    return p.useEffect( () => (document.addEventListener(rp, c),
    () => document.removeEventListener(rp, c)), [c]),
    p.useEffect( () => {
        if (l.trigger) {
            const f = d => {
                const m = d.target;
                m != null && m.contains(l.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", f, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", f, {
                capture: !0
            })
        }
    }
    , [l.trigger, c]),
    b.jsx(tl, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: f => f.preventDefault(),
        onDismiss: c,
        children: b.jsxs(JE, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [b.jsx(vv, {
                children: r
            }), b.jsx(sk, {
                scope: n,
                isInside: !0,
                children: b.jsx(t_, {
                    id: l.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
ky.displayName = jo;
var Py = "TooltipArrow"
  , ak = p.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = af(n);
    return ik(Py, n).isInside ? null : b.jsx(XE, {
        ...o,
        ...r,
        ref: t
    })
}
);
ak.displayName = Py;
function lk(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
    case s:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function uk(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function ck(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function dk(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
        const a = t[s].x
          , l = t[s].y
          , u = t[i].x
          , c = t[i].y;
        l > r != c > r && n < (u - a) * (r - l) / (c - l) + a && (o = !o)
    }
    return o
}
function fk(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    hk(t)
}
function hk(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1]
              , i = t[t.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1]
              , i = n[n.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var pk = Sy
  , Ty = ky;
const mk = pk
  , gk = p.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => b.jsx(Ty, {
    ref: r,
    sideOffset: t,
    className: oe("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
gk.displayName = Ty.displayName;
var cl = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , dl = typeof window > "u" || "Deno"in globalThis;
function St() {}
function vk(e, t) {
    return typeof e == "function" ? e(t) : e
}
function yk(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function wk(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function op(e, t) {
    return typeof e == "function" ? e(t) : e
}
function xk(e, t) {
    return typeof e == "function" ? e(t) : e
}
function sp(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: s, queryKey: i, stale: a} = e;
    if (i) {
        if (r) {
            if (t.queryHash !== lf(i, t.options))
                return !1
        } else if (!Vs(t.queryKey, i))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || s && !s(t))
}
function ip(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Bs(t.options.mutationKey) !== Bs(s))
                return !1
        } else if (!Vs(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function lf(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Bs)(e)
}
function Bs(e) {
    return JSON.stringify(e, (t, n) => Oc(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function Vs(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Vs(e[n], t[n])) : !1
}
function Ry(e, t) {
    if (e === t)
        return e;
    const n = ap(e) && ap(t);
    if (n || Oc(e) && Oc(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , s = n ? t : Object.keys(t)
          , i = s.length
          , a = n ? [] : {};
        let l = 0;
        for (let u = 0; u < i; u++) {
            const c = n ? u : s[u];
            (!n && r.includes(c) || n) && e[c] === void 0 && t[c] === void 0 ? (a[c] = void 0,
            l++) : (a[c] = Ry(e[c], t[c]),
            a[c] === e[c] && e[c] !== void 0 && l++)
        }
        return o === i && l === o ? e : a
    }
    return t
}
function ap(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Oc(e) {
    if (!lp(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!lp(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function lp(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function bk(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function _k(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Ry(e, t) : t
}
function Sk(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function Ek(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var uf = Symbol();
function Ay(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === uf ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var fr, An, ho, Kp, kk = (Kp = class extends cl {
    constructor() {
        super();
        te(this, fr);
        te(this, An);
        te(this, ho);
        G(this, ho, t => {
            if (!dl && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        T(this, An) || this.setEventListener(T(this, ho))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = T(this, An)) == null || t.call(this),
        G(this, An, void 0))
    }
    setEventListener(t) {
        var n;
        G(this, ho, t),
        (n = T(this, An)) == null || n.call(this),
        G(this, An, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        T(this, fr) !== t && (G(this, fr, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof T(this, fr) == "boolean" ? T(this, fr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
fr = new WeakMap,
An = new WeakMap,
ho = new WeakMap,
Kp), jy = new kk, po, jn, mo, qp, Ck = (qp = class extends cl {
    constructor() {
        super();
        te(this, po, !0);
        te(this, jn);
        te(this, mo);
        G(this, mo, t => {
            if (!dl && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        T(this, jn) || this.setEventListener(T(this, mo))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = T(this, jn)) == null || t.call(this),
        G(this, jn, void 0))
    }
    setEventListener(t) {
        var n;
        G(this, mo, t),
        (n = T(this, jn)) == null || n.call(this),
        G(this, jn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        T(this, po) !== t && (G(this, po, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return T(this, po)
    }
}
,
po = new WeakMap,
jn = new WeakMap,
mo = new WeakMap,
qp), Ia = new Ck;
function Pk() {
    let e, t;
    const n = new Promise( (o, s) => {
        e = o,
        t = s
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function Tk(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Ny(e) {
    return (e ?? "online") === "online" ? Ia.isOnline() : !0
}
var Oy = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function fu(e) {
    return e instanceof Oy
}
function Iy(e) {
    let t = !1, n = 0, r = !1, o;
    const s = Pk()
      , i = h => {
        var w;
        r || (d(new Oy(h)),
        (w = e.abort) == null || w.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => jy.isFocused() && (e.networkMode === "always" || Ia.isOnline()) && e.canRun()
      , c = () => Ny(e.networkMode) && e.canRun()
      , f = h => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, h),
        o == null || o(),
        s.resolve(h))
    }
      , d = h => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, h),
        o == null || o(),
        s.reject(h))
    }
      , m = () => new Promise(h => {
        var w;
        o = g => {
            (r || u()) && h(g)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var h;
        o = void 0,
        r || (h = e.onContinue) == null || h.call(e)
    }
    )
      , y = () => {
        if (r)
            return;
        let h;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            h = w ?? e.fn()
        } catch (g) {
            h = Promise.reject(g)
        }
        Promise.resolve(h).then(f).catch(g => {
            var E;
            if (r)
                return;
            const v = e.retry ?? (dl ? 0 : 3)
              , x = e.retryDelay ?? Tk
              , _ = typeof x == "function" ? x(n, g) : x
              , S = v === !0 || typeof v == "number" && n < v || typeof v == "function" && v(n, g);
            if (t || !S) {
                d(g);
                return
            }
            n++,
            (E = e.onFail) == null || E.call(e, n, g),
            bk(_).then( () => u() ? void 0 : m()).then( () => {
                t ? d(g) : y()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        cancel: i,
        continue: () => (o == null || o(),
        s),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? y() : m().then(y),
        s)
    }
}
function Rk() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , o = a => setTimeout(a, 0);
    const s = a => {
        t ? e.push(a) : o( () => {
            n(a)
        }
        )
    }
      , i = () => {
        const a = e;
        e = [],
        a.length && o( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || i()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            s( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            o = a
        }
    }
}
var ze = Rk(), hr, Gp, Ly = (Gp = class {
    constructor() {
        te(this, hr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        yk(this.gcTime) && G(this, hr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (dl ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        T(this, hr) && (clearTimeout(T(this, hr)),
        G(this, hr, void 0))
    }
}
,
hr = new WeakMap,
Gp), go, vo, dt, Le, qs, pr, Et, Yt, Qp, Ak = (Qp = class extends Ly {
    constructor(t) {
        super();
        te(this, Et);
        te(this, go);
        te(this, vo);
        te(this, dt);
        te(this, Le);
        te(this, qs);
        te(this, pr);
        G(this, pr, !1),
        G(this, qs, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        G(this, dt, t.cache),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        G(this, go, Nk(this.options)),
        this.state = t.state ?? T(this, go),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = T(this, Le)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...T(this, qs),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && T(this, dt).remove(this)
    }
    setData(t, n) {
        const r = _k(this.state.data, t, this.options);
        return Ne(this, Et, Yt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Ne(this, Et, Yt).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = T(this, Le)) == null ? void 0 : r.promise;
        return (o = T(this, Le)) == null || o.cancel(t),
        n ? n.then(St).catch(St) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(T(this, go))
    }
    isActive() {
        return this.observers.some(t => xk(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === uf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !wk(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = T(this, Le)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = T(this, Le)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        T(this, dt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (T(this, Le) && (T(this, pr) ? T(this, Le).cancel({
            revert: !0
        }) : T(this, Le).cancelRetry()),
        this.scheduleGc()),
        T(this, dt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ne(this, Et, Yt).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var l, u, c;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (T(this, Le))
                return T(this, Le).continueRetry(),
                T(this, Le).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(d => d.options.queryFn);
            f && this.setOptions(f.options)
        }
        const r = new AbortController
          , o = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (G(this, pr, !0),
                r.signal)
            })
        }
          , s = () => {
            const f = Ay(this.options, n)
              , d = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            return o(d),
            G(this, pr, !1),
            this.options.persister ? this.options.persister(f, d, this) : f(d)
        }
          , i = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: s
        };
        o(i),
        (l = this.options.behavior) == null || l.onFetch(i, this),
        G(this, vo, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = i.fetchOptions) == null ? void 0 : u.meta)) && Ne(this, Et, Yt).call(this, {
            type: "fetch",
            meta: (c = i.fetchOptions) == null ? void 0 : c.meta
        });
        const a = f => {
            var d, m, y, h;
            fu(f) && f.silent || Ne(this, Et, Yt).call(this, {
                type: "error",
                error: f
            }),
            fu(f) || ((m = (d = T(this, dt).config).onError) == null || m.call(d, f, this),
            (h = (y = T(this, dt).config).onSettled) == null || h.call(y, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return G(this, Le, Iy({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: i.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: f => {
                var d, m, y, h;
                if (f === void 0) {
                    a(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (w) {
                    a(w);
                    return
                }
                (m = (d = T(this, dt).config).onSuccess) == null || m.call(d, f, this),
                (h = (y = T(this, dt).config).onSettled) == null || h.call(y, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: a,
            onFail: (f, d) => {
                Ne(this, Et, Yt).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: d
                })
            }
            ,
            onPause: () => {
                Ne(this, Et, Yt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ne(this, Et, Yt).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: i.options.retry,
            retryDelay: i.options.retryDelay,
            networkMode: i.options.networkMode,
            canRun: () => !0
        })),
        T(this, Le).start()
    }
}
,
go = new WeakMap,
vo = new WeakMap,
dt = new WeakMap,
Le = new WeakMap,
qs = new WeakMap,
pr = new WeakMap,
Et = new WeakSet,
Yt = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...jk(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return fu(o) && o.revert && T(this, vo) ? {
                ...T(this, vo),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    ze.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        T(this, dt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Qp);
function jk(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Ny(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Nk(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var zt, Yp, Ok = (Yp = class extends cl {
    constructor(t={}) {
        super();
        te(this, zt);
        this.config = t,
        G(this, zt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , s = n.queryHash ?? lf(o, n);
        let i = this.get(s);
        return i || (i = new Ak({
            cache: this,
            queryKey: o,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(i)),
        i
    }
    add(t) {
        T(this, zt).has(t.queryHash) || (T(this, zt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = T(this, zt).get(t.queryHash);
        n && (t.destroy(),
        n === t && T(this, zt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        ze.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return T(this, zt).get(t)
    }
    getAll() {
        return [...T(this, zt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => sp(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => sp(t, r)) : n
    }
    notify(t) {
        ze.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        ze.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        ze.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
zt = new WeakMap,
Yp), Ut, Me, mr, Bt, xn, Jp, Ik = (Jp = class extends Ly {
    constructor(t) {
        super();
        te(this, Bt);
        te(this, Ut);
        te(this, Me);
        te(this, mr);
        this.mutationId = t.mutationId,
        G(this, Me, t.mutationCache),
        G(this, Ut, []),
        this.state = t.state || Lk(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        T(this, Ut).includes(t) || (T(this, Ut).push(t),
        this.clearGcTimeout(),
        T(this, Me).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        G(this, Ut, T(this, Ut).filter(n => n !== t)),
        this.scheduleGc(),
        T(this, Me).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        T(this, Ut).length || (this.state.status === "pending" ? this.scheduleGc() : T(this, Me).remove(this))
    }
    continue() {
        var t;
        return ((t = T(this, mr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var o, s, i, a, l, u, c, f, d, m, y, h, w, g, v, x, _, S, E, C;
        G(this, mr, Iy({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (P, L) => {
                Ne(this, Bt, xn).call(this, {
                    type: "failed",
                    failureCount: P,
                    error: L
                })
            }
            ,
            onPause: () => {
                Ne(this, Bt, xn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ne(this, Bt, xn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => T(this, Me).canRun(this)
        }));
        const n = this.state.status === "pending"
          , r = !T(this, mr).canStart();
        try {
            if (!n) {
                Ne(this, Bt, xn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: r
                }),
                await ((s = (o = T(this, Me).config).onMutate) == null ? void 0 : s.call(o, t, this));
                const L = await ((a = (i = this.options).onMutate) == null ? void 0 : a.call(i, t));
                L !== this.state.context && Ne(this, Bt, xn).call(this, {
                    type: "pending",
                    context: L,
                    variables: t,
                    isPaused: r
                })
            }
            const P = await T(this, mr).start();
            return await ((u = (l = T(this, Me).config).onSuccess) == null ? void 0 : u.call(l, P, t, this.state.context, this)),
            await ((f = (c = this.options).onSuccess) == null ? void 0 : f.call(c, P, t, this.state.context)),
            await ((m = (d = T(this, Me).config).onSettled) == null ? void 0 : m.call(d, P, null, this.state.variables, this.state.context, this)),
            await ((h = (y = this.options).onSettled) == null ? void 0 : h.call(y, P, null, t, this.state.context)),
            Ne(this, Bt, xn).call(this, {
                type: "success",
                data: P
            }),
            P
        } catch (P) {
            try {
                throw await ((g = (w = T(this, Me).config).onError) == null ? void 0 : g.call(w, P, t, this.state.context, this)),
                await ((x = (v = this.options).onError) == null ? void 0 : x.call(v, P, t, this.state.context)),
                await ((S = (_ = T(this, Me).config).onSettled) == null ? void 0 : S.call(_, void 0, P, this.state.variables, this.state.context, this)),
                await ((C = (E = this.options).onSettled) == null ? void 0 : C.call(E, void 0, P, t, this.state.context)),
                P
            } finally {
                Ne(this, Bt, xn).call(this, {
                    type: "error",
                    error: P
                })
            }
        } finally {
            T(this, Me).runNext(this)
        }
    }
}
,
Ut = new WeakMap,
Me = new WeakMap,
mr = new WeakMap,
Bt = new WeakSet,
xn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    ze.batch( () => {
        T(this, Ut).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        T(this, Me).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Jp);
function Lk() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var et, Gs, Xp, Dk = (Xp = class extends cl {
    constructor(t={}) {
        super();
        te(this, et);
        te(this, Gs);
        this.config = t,
        G(this, et, new Map),
        G(this, Gs, Date.now())
    }
    build(t, n, r) {
        const o = new Ik({
            mutationCache: this,
            mutationId: ++di(this, Gs)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        const n = Oi(t)
          , r = T(this, et).get(n) ?? [];
        r.push(t),
        T(this, et).set(n, r),
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var r;
        const n = Oi(t);
        if (T(this, et).has(n)) {
            const o = (r = T(this, et).get(n)) == null ? void 0 : r.filter(s => s !== t);
            o && (o.length === 0 ? T(this, et).delete(n) : T(this, et).set(n, o))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var r;
        const n = (r = T(this, et).get(Oi(t))) == null ? void 0 : r.find(o => o.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var r;
        const n = (r = T(this, et).get(Oi(t))) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve()
    }
    clear() {
        ze.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    getAll() {
        return [...T(this, et).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => ip(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => ip(t, n))
    }
    notify(t) {
        ze.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return ze.batch( () => Promise.all(t.map(n => n.continue().catch(St))))
    }
}
,
et = new WeakMap,
Gs = new WeakMap,
Xp);
function Oi(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
}
function up(e) {
    return {
        onFetch: (t, n) => {
            var c, f, d, m, y;
            const r = t.options
              , o = (d = (f = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : d.direction
              , s = ((m = t.state.data) == null ? void 0 : m.pages) || []
              , i = ((y = t.state.data) == null ? void 0 : y.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let h = !1;
                const w = x => {
                    Object.defineProperty(x, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? h = !0 : t.signal.addEventListener("abort", () => {
                            h = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , g = Ay(t.options, t.fetchOptions)
                  , v = async (x, _, S) => {
                    if (h)
                        return Promise.reject();
                    if (_ == null && x.pages.length)
                        return Promise.resolve(x);
                    const E = {
                        queryKey: t.queryKey,
                        pageParam: _,
                        direction: S ? "backward" : "forward",
                        meta: t.options.meta
                    };
                    w(E);
                    const C = await g(E)
                      , {maxPages: P} = t.options
                      , L = S ? Ek : Sk;
                    return {
                        pages: L(x.pages, C, P),
                        pageParams: L(x.pageParams, _, P)
                    }
                }
                ;
                if (o && s.length) {
                    const x = o === "backward"
                      , _ = x ? $k : cp
                      , S = {
                        pages: s,
                        pageParams: i
                    }
                      , E = _(r, S);
                    a = await v(S, E, x)
                } else {
                    const x = e ?? s.length;
                    do {
                        const _ = l === 0 ? i[0] ?? r.initialPageParam : cp(r, a);
                        if (l > 0 && _ == null)
                            break;
                        a = await v(a, _),
                        l++
                    } while (l < x)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var h, w;
                return (w = (h = t.options).persister) == null ? void 0 : w.call(h, u, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function cp(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function $k(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var ve, Nn, On, yo, wo, In, xo, bo, Zp, Mk = (Zp = class {
    constructor(e={}) {
        te(this, ve);
        te(this, Nn);
        te(this, On);
        te(this, yo);
        te(this, wo);
        te(this, In);
        te(this, xo);
        te(this, bo);
        G(this, ve, e.queryCache || new Ok),
        G(this, Nn, e.mutationCache || new Dk),
        G(this, On, e.defaultOptions || {}),
        G(this, yo, new Map),
        G(this, wo, new Map),
        G(this, In, 0)
    }
    mount() {
        di(this, In)._++,
        T(this, In) === 1 && (G(this, xo, jy.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            T(this, ve).onFocus())
        }
        )),
        G(this, bo, Ia.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            T(this, ve).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        di(this, In)._--,
        T(this, In) === 0 && ((e = T(this, xo)) == null || e.call(this),
        G(this, xo, void 0),
        (t = T(this, bo)) == null || t.call(this),
        G(this, bo, void 0))
    }
    isFetching(e) {
        return T(this, ve).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return T(this, Nn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = T(this, ve).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0)
            return this.fetchQuery(e);
        {
            const n = this.defaultQueryOptions(e)
              , r = T(this, ve).build(this, n);
            return e.revalidateIfStale && r.isStaleByTime(op(n.staleTime, r)) && this.prefetchQuery(n),
            Promise.resolve(t)
        }
    }
    getQueriesData(e) {
        return T(this, ve).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = T(this, ve).get(r.queryHash)
          , s = o == null ? void 0 : o.state.data
          , i = vk(t, s);
        if (i !== void 0)
            return T(this, ve).build(this, r).setData(i, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return ze.batch( () => T(this, ve).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = T(this, ve).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = T(this, ve);
        ze.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = T(this, ve)
          , r = {
            type: "active",
            ...e
        };
        return ze.batch( () => (n.findAll(e).forEach(o => {
            o.reset()
        }
        ),
        this.refetchQueries(r, t)))
    }
    cancelQueries(e={}, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = ze.batch( () => T(this, ve).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(St).catch(St)
    }
    invalidateQueries(e={}, t={}) {
        return ze.batch( () => {
            if (T(this, ve).findAll(e).forEach(r => {
                r.invalidate()
            }
            ),
            e.refetchType === "none")
                return Promise.resolve();
            const n = {
                ...e,
                type: e.refetchType ?? e.type ?? "active"
            };
            return this.refetchQueries(n, t)
        }
        )
    }
    refetchQueries(e={}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
        }
          , r = ze.batch( () => T(this, ve).findAll(e).filter(o => !o.isDisabled()).map(o => {
            let s = o.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(St)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(r).then(St)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = T(this, ve).build(this, t);
        return n.isStaleByTime(op(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(St).catch(St)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = up(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(St).catch(St)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = up(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Ia.isOnline() ? T(this, Nn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return T(this, ve)
    }
    getMutationCache() {
        return T(this, Nn)
    }
    getDefaultOptions() {
        return T(this, On)
    }
    setDefaultOptions(e) {
        G(this, On, e)
    }
    setQueryDefaults(e, t) {
        T(this, yo).set(Bs(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...T(this, yo).values()];
        let n = {};
        return t.forEach(r => {
            Vs(e, r.queryKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        T(this, wo).set(Bs(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...T(this, wo).values()];
        let n = {};
        return t.forEach(r => {
            Vs(e, r.mutationKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...T(this, On).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = lf(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.enabled !== !0 && t.queryFn === uf && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...T(this, On).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        T(this, ve).clear(),
        T(this, Nn).clear()
    }
}
,
ve = new WeakMap,
Nn = new WeakMap,
On = new WeakMap,
yo = new WeakMap,
wo = new WeakMap,
In = new WeakMap,
xo = new WeakMap,
bo = new WeakMap,
Zp), Fk = p.createContext(void 0), zk = ({client: e, children: t}) => (p.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
b.jsx(Fk.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Hs() {
    return Hs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Hs.apply(this, arguments)
}
var $n;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)($n || ($n = {}));
const dp = "popstate";
function Uk(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: s, search: i, hash: a} = r.location;
        return Ic("", {
            pathname: s,
            search: i,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : $y(o)
    }
    return Vk(t, n, null, e)
}
function Ee(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Dy(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Bk() {
    return Math.random().toString(36).substr(2, 8)
}
function fp(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Ic(e, t, n, r) {
    return n === void 0 && (n = null),
    Hs({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? zo(t) : t, {
        state: n,
        key: t && t.key || r || Bk()
    })
}
function $y(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function zo(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function Vk(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: s=!1} = r
      , i = o.history
      , a = $n.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    i.replaceState(Hs({}, i.state, {
        idx: u
    }), ""));
    function c() {
        return (i.state || {
            idx: null
        }).idx
    }
    function f() {
        a = $n.Pop;
        let w = c()
          , g = w == null ? null : w - u;
        u = w,
        l && l({
            action: a,
            location: h.location,
            delta: g
        })
    }
    function d(w, g) {
        a = $n.Push;
        let v = Ic(h.location, w, g);
        u = c() + 1;
        let x = fp(v, u)
          , _ = h.createHref(v);
        try {
            i.pushState(x, "", _)
        } catch (S) {
            if (S instanceof DOMException && S.name === "DataCloneError")
                throw S;
            o.location.assign(_)
        }
        s && l && l({
            action: a,
            location: h.location,
            delta: 1
        })
    }
    function m(w, g) {
        a = $n.Replace;
        let v = Ic(h.location, w, g);
        u = c();
        let x = fp(v, u)
          , _ = h.createHref(v);
        i.replaceState(x, "", _),
        s && l && l({
            action: a,
            location: h.location,
            delta: 0
        })
    }
    function y(w) {
        let g = o.location.origin !== "null" ? o.location.origin : o.location.href
          , v = typeof w == "string" ? w : $y(w);
        return v = v.replace(/ $/, "%20"),
        Ee(g, "No window.location.(origin|href) available to create URL for href: " + v),
        new URL(v,g)
    }
    let h = {
        get action() {
            return a
        },
        get location() {
            return e(o, i)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(dp, f),
            l = w,
            () => {
                o.removeEventListener(dp, f),
                l = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: y,
        encodeLocation(w) {
            let g = y(w);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: d,
        replace: m,
        go(w) {
            return i.go(w)
        }
    };
    return h
}
var hp;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(hp || (hp = {}));
function Hk(e, t, n) {
    return n === void 0 && (n = "/"),
    Wk(e, t, n, !1)
}
function Wk(e, t, n, r) {
    let o = typeof t == "string" ? zo(t) : t
      , s = zy(o.pathname || "/", n);
    if (s == null)
        return null;
    let i = My(e);
    Kk(i);
    let a = null;
    for (let l = 0; a == null && l < i.length; ++l) {
        let u = rC(s);
        a = tC(i[l], u, r)
    }
    return a
}
function My(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (s, i, a) => {
        let l = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: i,
            route: s
        };
        l.relativePath.startsWith("/") && (Ee(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = yr([r, l.relativePath])
          , c = n.concat(l);
        s.children && s.children.length > 0 && (Ee(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        My(s.children, t, c, u)),
        !(s.path == null && !s.index) && t.push({
            path: u,
            score: Zk(u, s.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (s, i) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?")))
            o(s, i);
        else
            for (let l of Fy(s.path))
                o(s, i, l)
    }
    ),
    t
}
function Fy(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [s, ""] : [s];
    let i = Fy(r.join("/"))
      , a = [];
    return a.push(...i.map(l => l === "" ? s : [s, l].join("/"))),
    o && a.push(...i),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function Kk(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : eC(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const qk = /^:[\w-]+$/
  , Gk = 3
  , Qk = 2
  , Yk = 1
  , Jk = 10
  , Xk = -2
  , pp = e => e === "*";
function Zk(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(pp) && (r += Xk),
    t && (r += Qk),
    n.filter(o => !pp(o)).reduce( (o, s) => o + (qk.test(s) ? Gk : s === "" ? Yk : Jk), r)
}
function eC(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function tC(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , s = "/"
      , i = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , c = s === "/" ? t : t.slice(s.length) || "/"
          , f = mp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, c)
          , d = l.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = mp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
        !f)
            return null;
        Object.assign(o, f.params),
        i.push({
            params: o,
            pathname: yr([s, f.pathname]),
            pathnameBase: uC(yr([s, f.pathnameBase])),
            route: d
        }),
        f.pathnameBase !== "/" && (s = yr([s, f.pathnameBase]))
    }
    return i
}
function mp(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = nC(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let s = o[0]
      , i = s.replace(/(.)\/+$/, "$1")
      , a = o.slice(1);
    return {
        params: r.reduce( (u, c, f) => {
            let {paramName: d, isOptional: m} = c;
            if (d === "*") {
                let h = a[f] || "";
                i = s.slice(0, s.length - h.length).replace(/(.)\/+$/, "$1")
            }
            const y = a[f];
            return m && !y ? u[d] = void 0 : u[d] = (y || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: s,
        pathnameBase: i,
        pattern: e
    }
}
function nC(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Dy(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function rC(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Dy(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function zy(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function oC(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? zo(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : sC(n, t) : t,
        search: cC(r),
        hash: dC(o)
    }
}
function sC(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function hu(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function iC(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function aC(e, t) {
    let n = iC(e);
    return t ? n.map( (r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function lC(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = zo(e) : (o = Hs({}, e),
    Ee(!o.pathname || !o.pathname.includes("?"), hu("?", "pathname", "search", o)),
    Ee(!o.pathname || !o.pathname.includes("#"), hu("#", "pathname", "hash", o)),
    Ee(!o.search || !o.search.includes("#"), hu("#", "search", "hash", o)));
    let s = e === "" || o.pathname === "", i = s ? "/" : o.pathname, a;
    if (i == null)
        a = n;
    else {
        let f = t.length - 1;
        if (!r && i.startsWith("..")) {
            let d = i.split("/");
            for (; d[0] === ".."; )
                d.shift(),
                f -= 1;
            o.pathname = d.join("/")
        }
        a = f >= 0 ? t[f] : "/"
    }
    let l = oC(o, a)
      , u = i && i !== "/" && i.endsWith("/")
      , c = (s || i === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"),
    l
}
const yr = e => e.join("/").replace(/\/\/+/g, "/")
  , uC = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , cC = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , dC = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function fC(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Uy = ["post", "put", "patch", "delete"];
new Set(Uy);
const hC = ["get", ...Uy];
new Set(hC);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ws() {
    return Ws = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ws.apply(this, arguments)
}
const cf = p.createContext(null)
  , pC = p.createContext(null)
  , fl = p.createContext(null)
  , hl = p.createContext(null)
  , Uo = p.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , By = p.createContext(null);
function pl() {
    return p.useContext(hl) != null
}
function ml() {
    return pl() || Ee(!1),
    p.useContext(hl).location
}
function Vy(e) {
    p.useContext(fl).static || p.useLayoutEffect(e)
}
function Hy() {
    let {isDataRoute: e} = p.useContext(Uo);
    return e ? PC() : mC()
}
function mC() {
    pl() || Ee(!1);
    let e = p.useContext(cf)
      , {basename: t, future: n, navigator: r} = p.useContext(fl)
      , {matches: o} = p.useContext(Uo)
      , {pathname: s} = ml()
      , i = JSON.stringify(aC(o, n.v7_relativeSplatPath))
      , a = p.useRef(!1);
    return Vy( () => {
        a.current = !0
    }
    ),
    p.useCallback(function(u, c) {
        if (c === void 0 && (c = {}),
        !a.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let f = lC(u, JSON.parse(i), s, c.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : yr([t, f.pathname])),
        (c.replace ? r.replace : r.push)(f, c.state, c)
    }, [t, r, i, s, e])
}
function gC(e, t) {
    return vC(e, t)
}
function vC(e, t, n, r) {
    pl() || Ee(!1);
    let {navigator: o} = p.useContext(fl)
      , {matches: s} = p.useContext(Uo)
      , i = s[s.length - 1]
      , a = i ? i.params : {};
    i && i.pathname;
    let l = i ? i.pathnameBase : "/";
    i && i.route;
    let u = ml(), c;
    if (t) {
        var f;
        let w = typeof t == "string" ? zo(t) : t;
        l === "/" || (f = w.pathname) != null && f.startsWith(l) || Ee(!1),
        c = w
    } else
        c = u;
    let d = c.pathname || "/"
      , m = d;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        m = "/" + d.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let y = Hk(e, {
        pathname: m
    })
      , h = _C(y && y.map(w => Object.assign({}, w, {
        params: Object.assign({}, a, w.params),
        pathname: yr([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : yr([l, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), s, n, r);
    return t && h ? p.createElement(hl.Provider, {
        value: {
            location: Ws({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: $n.Pop
        }
    }, h) : h
}
function yC() {
    let e = CC()
      , t = fC(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return p.createElement(p.Fragment, null, p.createElement("h2", null, "Unexpected Application Error!"), p.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? p.createElement("pre", {
        style: o
    }, n) : null, null)
}
const wC = p.createElement(yC, null);
class xC extends p.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? p.createElement(Uo.Provider, {
            value: this.props.routeContext
        }, p.createElement(By.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function bC(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = p.useContext(cf);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    p.createElement(Uo.Provider, {
        value: t
    }, r)
}
function _C(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let i = e
      , a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
        let c = i.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
        c >= 0 || Ee(!1),
        i = i.slice(0, Math.min(i.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < i.length; c++) {
            let f = i[c];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
            f.route.id) {
                let {loaderData: d, errors: m} = n
                  , y = f.route.loader && d[f.route.id] === void 0 && (!m || m[f.route.id] === void 0);
                if (f.route.lazy || y) {
                    l = !0,
                    u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight( (c, f, d) => {
        let m, y = !1, h = null, w = null;
        n && (m = a && f.route.id ? a[f.route.id] : void 0,
        h = f.route.errorElement || wC,
        l && (u < 0 && d === 0 ? (y = !0,
        w = null) : u === d && (y = !0,
        w = f.route.hydrateFallbackElement || null)));
        let g = t.concat(i.slice(0, d + 1))
          , v = () => {
            let x;
            return m ? x = h : y ? x = w : f.route.Component ? x = p.createElement(f.route.Component, null) : f.route.element ? x = f.route.element : x = c,
            p.createElement(bC, {
                match: f,
                routeContext: {
                    outlet: c,
                    matches: g,
                    isDataRoute: n != null
                },
                children: x
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0) ? p.createElement(xC, {
            location: n.location,
            revalidation: n.revalidation,
            component: h,
            error: m,
            children: v(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : v()
    }
    , null)
}
var Wy = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Wy || {})
  , La = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(La || {});
function SC(e) {
    let t = p.useContext(cf);
    return t || Ee(!1),
    t
}
function EC(e) {
    let t = p.useContext(pC);
    return t || Ee(!1),
    t
}
function kC(e) {
    let t = p.useContext(Uo);
    return t || Ee(!1),
    t
}
function Ky(e) {
    let t = kC()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Ee(!1),
    n.route.id
}
function CC() {
    var e;
    let t = p.useContext(By)
      , n = EC(La.UseRouteError)
      , r = Ky(La.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function PC() {
    let {router: e} = SC(Wy.UseNavigateStable)
      , t = Ky(La.UseNavigateStable)
      , n = p.useRef(!1);
    return Vy( () => {
        n.current = !0
    }
    ),
    p.useCallback(function(o, s) {
        s === void 0 && (s = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Ws({
            fromRouteId: t
        }, s)))
    }, [e, t])
}
function ra(e) {
    Ee(!1)
}
function TC(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=$n.Pop, navigator: s, static: i=!1, future: a} = e;
    pl() && Ee(!1);
    let l = t.replace(/^\/*/, "/")
      , u = p.useMemo( () => ({
        basename: l,
        navigator: s,
        static: i,
        future: Ws({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, s, i]);
    typeof r == "string" && (r = zo(r));
    let {pathname: c="/", search: f="", hash: d="", state: m=null, key: y="default"} = r
      , h = p.useMemo( () => {
        let w = zy(c, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: f,
                hash: d,
                state: m,
                key: y
            },
            navigationType: o
        }
    }
    , [l, c, f, d, m, y, o]);
    return h == null ? null : p.createElement(fl.Provider, {
        value: u
    }, p.createElement(hl.Provider, {
        children: n,
        value: h
    }))
}
function RC(e) {
    let {children: t, location: n} = e;
    return gC(Lc(t), n)
}
new Promise( () => {}
);
function Lc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return p.Children.forEach(e, (r, o) => {
        if (!p.isValidElement(r))
            return;
        let s = [...t, o];
        if (r.type === p.Fragment) {
            n.push.apply(n, Lc(r.props.children, s));
            return
        }
        r.type !== ra && Ee(!1),
        !r.props.index || !r.props.children || Ee(!1);
        let i = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = Lc(r.props.children, s)),
        n.push(i)
    }
    ),
    n
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Dc(e) {
    return e === void 0 && (e = ""),
    new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce( (t, n) => {
        let r = e[n];
        return t.concat(Array.isArray(r) ? r.map(o => [n, o]) : [[n, r]])
    }
    , []))
}
function AC(e, t) {
    let n = Dc(e);
    return t && t.forEach( (r, o) => {
        n.has(o) || t.getAll(o).forEach(s => {
            n.append(o, s)
        }
        )
    }
    ),
    n
}
const jC = "6";
try {
    window.__reactRouterVersion = jC
} catch {}
const NC = "startTransition"
  , gp = dm[NC];
function OC(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , s = p.useRef();
    s.current == null && (s.current = Uk({
        window: o,
        v5Compat: !0
    }));
    let i = s.current
      , [a,l] = p.useState({
        action: i.action,
        location: i.location
    })
      , {v7_startTransition: u} = r || {}
      , c = p.useCallback(f => {
        u && gp ? gp( () => l(f)) : l(f)
    }
    , [l, u]);
    return p.useLayoutEffect( () => i.listen(c), [i, c]),
    p.createElement(TC, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: i,
        future: r
    })
}
var vp;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(vp || (vp = {}));
var yp;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(yp || (yp = {}));
function IC(e) {
    let t = p.useRef(Dc(e))
      , n = p.useRef(!1)
      , r = ml()
      , o = p.useMemo( () => AC(r.search, n.current ? null : t.current), [r.search])
      , s = Hy()
      , i = p.useCallback( (a, l) => {
        const u = Dc(typeof a == "function" ? a(o) : a);
        n.current = !0,
        s("?" + u, l)
    }
    , [s, o]);
    return [o, i]
}
const LC = "modulepreload"
  , DC = function(e) {
    return "/" + e
}
  , wp = {}
  , No = function(t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const i = document.querySelector("meta[property=csp-nonce]")
          , a = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
        o = Promise.allSettled(n.map(l => {
            if (l = DC(l),
            l in wp)
                return;
            wp[l] = !0;
            const u = l.endsWith(".css")
              , c = u ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${l}"]${c}`))
                return;
            const f = document.createElement("link");
            if (f.rel = u ? "stylesheet" : LC,
            u || (f.as = "script"),
            f.crossOrigin = "",
            f.href = l,
            a && f.setAttribute("nonce", a),
            document.head.appendChild(f),
            u)
                return new Promise( (d, m) => {
                    f.addEventListener("load", d),
                    f.addEventListener("error", () => m(new Error(`Unable to preload CSS for ${l}`)))
                }
                )
        }
        ))
    }
    function s(i) {
        const a = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (a.payload = i,
        window.dispatchEvent(a),
        !a.defaultPrevented)
            throw i
    }
    return o.then(i => {
        for (const a of i || [])
            a.status === "rejected" && s(a.reason);
        return t().catch(s)
    }
    )
}
  , $C = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = (...n) => No(async () => {
        const {default: r} = await Promise.resolve().then( () => Bo);
        return {
            default: r
        }
    }
    , void 0).then( ({default: r}) => r(...n)) : t = fetch,
    (...n) => t(...n)
}
;
class df extends Error {
    constructor(t, n="FunctionsError", r) {
        super(t),
        this.name = n,
        this.context = r
    }
}
class MC extends df {
    constructor(t) {
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", t)
    }
}
class FC extends df {
    constructor(t) {
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", t)
    }
}
class zC extends df {
    constructor(t) {
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", t)
    }
}
var $c;
(function(e) {
    e.Any = "any",
    e.ApNortheast1 = "ap-northeast-1",
    e.ApNortheast2 = "ap-northeast-2",
    e.ApSouth1 = "ap-south-1",
    e.ApSoutheast1 = "ap-southeast-1",
    e.ApSoutheast2 = "ap-southeast-2",
    e.CaCentral1 = "ca-central-1",
    e.EuCentral1 = "eu-central-1",
    e.EuWest1 = "eu-west-1",
    e.EuWest2 = "eu-west-2",
    e.EuWest3 = "eu-west-3",
    e.SaEast1 = "sa-east-1",
    e.UsEast1 = "us-east-1",
    e.UsWest1 = "us-west-1",
    e.UsWest2 = "us-west-2"
}
)($c || ($c = {}));
var UC = function(e, t, n, r) {
    function o(s) {
        return s instanceof n ? s : new n(function(i) {
            i(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, i) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (f) {
                i(f)
            }
        }
        function l(c) {
            try {
                u(r.throw(c))
            } catch (f) {
                i(f)
            }
        }
        function u(c) {
            c.done ? s(c.value) : o(c.value).then(a, l)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
};
class BC {
    constructor(t, {headers: n={}, customFetch: r, region: o=$c.Any}={}) {
        this.url = t,
        this.headers = n,
        this.region = o,
        this.fetch = $C(r)
    }
    setAuth(t) {
        this.headers.Authorization = `Bearer ${t}`
    }
    invoke(t, n={}) {
        var r;
        return UC(this, void 0, void 0, function*() {
            try {
                const {headers: o, method: s, body: i} = n;
                let a = {}
                  , {region: l} = n;
                l || (l = this.region),
                l && l !== "any" && (a["x-region"] = l);
                let u;
                i && (o && !Object.prototype.hasOwnProperty.call(o, "Content-Type") || !o) && (typeof Blob < "u" && i instanceof Blob || i instanceof ArrayBuffer ? (a["Content-Type"] = "application/octet-stream",
                u = i) : typeof i == "string" ? (a["Content-Type"] = "text/plain",
                u = i) : typeof FormData < "u" && i instanceof FormData ? u = i : (a["Content-Type"] = "application/json",
                u = JSON.stringify(i)));
                const c = yield this.fetch(`${this.url}/${t}`, {
                    method: s || "POST",
                    headers: Object.assign(Object.assign(Object.assign({}, a), this.headers), o),
                    body: u
                }).catch(y => {
                    throw new MC(y)
                }
                )
                  , f = c.headers.get("x-relay-error");
                if (f && f === "true")
                    throw new FC(c);
                if (!c.ok)
                    throw new zC(c);
                let d = ((r = c.headers.get("Content-Type")) !== null && r !== void 0 ? r : "text/plain").split(";")[0].trim(), m;
                return d === "application/json" ? m = yield c.json() : d === "application/octet-stream" ? m = yield c.blob() : d === "text/event-stream" ? m = c : d === "multipart/form-data" ? m = yield c.formData() : m = yield c.text(),
                {
                    data: m,
                    error: null
                }
            } catch (o) {
                return {
                    data: null,
                    error: o
                }
            }
        })
    }
}
var Ke = {}
  , ff = {}
  , gl = {}
  , si = {}
  , vl = {}
  , yl = {}
  , VC = function() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}
  , Oo = VC();
const HC = Oo.fetch
  , qy = Oo.fetch.bind(Oo)
  , Gy = Oo.Headers
  , WC = Oo.Request
  , KC = Oo.Response
  , Bo = Object.freeze(Object.defineProperty({
    __proto__: null,
    Headers: Gy,
    Request: WC,
    Response: KC,
    default: qy,
    fetch: HC
}, Symbol.toStringTag, {
    value: "Module"
}))
  , qC = ex(Bo);
var wl = {};
Object.defineProperty(wl, "__esModule", {
    value: !0
});
let GC = class extends Error {
    constructor(t) {
        super(t.message),
        this.name = "PostgrestError",
        this.details = t.details,
        this.hint = t.hint,
        this.code = t.code
    }
}
;
wl.default = GC;
var Qy = gt && gt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(yl, "__esModule", {
    value: !0
});
const QC = Qy(qC)
  , YC = Qy(wl);
let JC = class {
    constructor(t) {
        this.shouldThrowOnError = !1,
        this.method = t.method,
        this.url = t.url,
        this.headers = t.headers,
        this.schema = t.schema,
        this.body = t.body,
        this.shouldThrowOnError = t.shouldThrowOnError,
        this.signal = t.signal,
        this.isMaybeSingle = t.isMaybeSingle,
        t.fetch ? this.fetch = t.fetch : typeof fetch > "u" ? this.fetch = QC.default : this.fetch = fetch
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    setHeader(t, n) {
        return this.headers = Object.assign({}, this.headers),
        this.headers[t] = n,
        this
    }
    then(t, n) {
        this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema),
        this.method !== "GET" && this.method !== "HEAD" && (this.headers["Content-Type"] = "application/json");
        const r = this.fetch;
        let o = r(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async s => {
            var i, a, l;
            let u = null
              , c = null
              , f = null
              , d = s.status
              , m = s.statusText;
            if (s.ok) {
                if (this.method !== "HEAD") {
                    const g = await s.text();
                    g === "" || (this.headers.Accept === "text/csv" || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? c = g : c = JSON.parse(g))
                }
                const h = (i = this.headers.Prefer) === null || i === void 0 ? void 0 : i.match(/count=(exact|planned|estimated)/)
                  , w = (a = s.headers.get("content-range")) === null || a === void 0 ? void 0 : a.split("/");
                h && w && w.length > 1 && (f = parseInt(w[1])),
                this.isMaybeSingle && this.method === "GET" && Array.isArray(c) && (c.length > 1 ? (u = {
                    code: "PGRST116",
                    details: `Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message: "JSON object requested, multiple (or no) rows returned"
                },
                c = null,
                f = null,
                d = 406,
                m = "Not Acceptable") : c.length === 1 ? c = c[0] : c = null)
            } else {
                const h = await s.text();
                try {
                    u = JSON.parse(h),
                    Array.isArray(u) && s.status === 404 && (c = [],
                    u = null,
                    d = 200,
                    m = "OK")
                } catch {
                    s.status === 404 && h === "" ? (d = 204,
                    m = "No Content") : u = {
                        message: h
                    }
                }
                if (u && this.isMaybeSingle && (!((l = u == null ? void 0 : u.details) === null || l === void 0) && l.includes("0 rows")) && (u = null,
                d = 200,
                m = "OK"),
                u && this.shouldThrowOnError)
                    throw new YC.default(u)
            }
            return {
                error: u,
                data: c,
                count: f,
                status: d,
                statusText: m
            }
        }
        );
        return this.shouldThrowOnError || (o = o.catch(s => {
            var i, a, l;
            return {
                error: {
                    message: `${(i = s == null ? void 0 : s.name) !== null && i !== void 0 ? i : "FetchError"}: ${s == null ? void 0 : s.message}`,
                    details: `${(a = s == null ? void 0 : s.stack) !== null && a !== void 0 ? a : ""}`,
                    hint: "",
                    code: `${(l = s == null ? void 0 : s.code) !== null && l !== void 0 ? l : ""}`
                },
                data: null,
                count: null,
                status: 0,
                statusText: ""
            }
        }
        )),
        o.then(t, n)
    }
    returns() {
        return this
    }
    overrideTypes() {
        return this
    }
}
;
yl.default = JC;
var XC = gt && gt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(vl, "__esModule", {
    value: !0
});
const ZC = XC(yl);
let eP = class extends ZC.default {
    select(t) {
        let n = !1;
        const r = (t ?? "*").split("").map(o => /\s/.test(o) && !n ? "" : (o === '"' && (n = !n),
        o)).join("");
        return this.url.searchParams.set("select", r),
        this.headers.Prefer && (this.headers.Prefer += ","),
        this.headers.Prefer += "return=representation",
        this
    }
    order(t, {ascending: n=!0, nullsFirst: r, foreignTable: o, referencedTable: s=o}={}) {
        const i = s ? `${s}.order` : "order"
          , a = this.url.searchParams.get(i);
        return this.url.searchParams.set(i, `${a ? `${a},` : ""}${t}.${n ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`),
        this
    }
    limit(t, {foreignTable: n, referencedTable: r=n}={}) {
        const o = typeof r > "u" ? "limit" : `${r}.limit`;
        return this.url.searchParams.set(o, `${t}`),
        this
    }
    range(t, n, {foreignTable: r, referencedTable: o=r}={}) {
        const s = typeof o > "u" ? "offset" : `${o}.offset`
          , i = typeof o > "u" ? "limit" : `${o}.limit`;
        return this.url.searchParams.set(s, `${t}`),
        this.url.searchParams.set(i, `${n - t + 1}`),
        this
    }
    abortSignal(t) {
        return this.signal = t,
        this
    }
    single() {
        return this.headers.Accept = "application/vnd.pgrst.object+json",
        this
    }
    maybeSingle() {
        return this.method === "GET" ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json",
        this.isMaybeSingle = !0,
        this
    }
    csv() {
        return this.headers.Accept = "text/csv",
        this
    }
    geojson() {
        return this.headers.Accept = "application/geo+json",
        this
    }
    explain({analyze: t=!1, verbose: n=!1, settings: r=!1, buffers: o=!1, wal: s=!1, format: i="text"}={}) {
        var a;
        const l = [t ? "analyze" : null, n ? "verbose" : null, r ? "settings" : null, o ? "buffers" : null, s ? "wal" : null].filter(Boolean).join("|")
          , u = (a = this.headers.Accept) !== null && a !== void 0 ? a : "application/json";
        return this.headers.Accept = `application/vnd.pgrst.plan+${i}; for="${u}"; options=${l};`,
        i === "json" ? this : this
    }
    rollback() {
        var t;
        return ((t = this.headers.Prefer) !== null && t !== void 0 ? t : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback",
        this
    }
    returns() {
        return this
    }
}
;
vl.default = eP;
var tP = gt && gt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(si, "__esModule", {
    value: !0
});
const nP = tP(vl);
let rP = class extends nP.default {
    eq(t, n) {
        return this.url.searchParams.append(t, `eq.${n}`),
        this
    }
    neq(t, n) {
        return this.url.searchParams.append(t, `neq.${n}`),
        this
    }
    gt(t, n) {
        return this.url.searchParams.append(t, `gt.${n}`),
        this
    }
    gte(t, n) {
        return this.url.searchParams.append(t, `gte.${n}`),
        this
    }
    lt(t, n) {
        return this.url.searchParams.append(t, `lt.${n}`),
        this
    }
    lte(t, n) {
        return this.url.searchParams.append(t, `lte.${n}`),
        this
    }
    like(t, n) {
        return this.url.searchParams.append(t, `like.${n}`),
        this
    }
    likeAllOf(t, n) {
        return this.url.searchParams.append(t, `like(all).{${n.join(",")}}`),
        this
    }
    likeAnyOf(t, n) {
        return this.url.searchParams.append(t, `like(any).{${n.join(",")}}`),
        this
    }
    ilike(t, n) {
        return this.url.searchParams.append(t, `ilike.${n}`),
        this
    }
    ilikeAllOf(t, n) {
        return this.url.searchParams.append(t, `ilike(all).{${n.join(",")}}`),
        this
    }
    ilikeAnyOf(t, n) {
        return this.url.searchParams.append(t, `ilike(any).{${n.join(",")}}`),
        this
    }
    is(t, n) {
        return this.url.searchParams.append(t, `is.${n}`),
        this
    }
    in(t, n) {
        const r = Array.from(new Set(n)).map(o => typeof o == "string" && new RegExp("[,()]").test(o) ? `"${o}"` : `${o}`).join(",");
        return this.url.searchParams.append(t, `in.(${r})`),
        this
    }
    contains(t, n) {
        return typeof n == "string" ? this.url.searchParams.append(t, `cs.${n}`) : Array.isArray(n) ? this.url.searchParams.append(t, `cs.{${n.join(",")}}`) : this.url.searchParams.append(t, `cs.${JSON.stringify(n)}`),
        this
    }
    containedBy(t, n) {
        return typeof n == "string" ? this.url.searchParams.append(t, `cd.${n}`) : Array.isArray(n) ? this.url.searchParams.append(t, `cd.{${n.join(",")}}`) : this.url.searchParams.append(t, `cd.${JSON.stringify(n)}`),
        this
    }
    rangeGt(t, n) {
        return this.url.searchParams.append(t, `sr.${n}`),
        this
    }
    rangeGte(t, n) {
        return this.url.searchParams.append(t, `nxl.${n}`),
        this
    }
    rangeLt(t, n) {
        return this.url.searchParams.append(t, `sl.${n}`),
        this
    }
    rangeLte(t, n) {
        return this.url.searchParams.append(t, `nxr.${n}`),
        this
    }
    rangeAdjacent(t, n) {
        return this.url.searchParams.append(t, `adj.${n}`),
        this
    }
    overlaps(t, n) {
        return typeof n == "string" ? this.url.searchParams.append(t, `ov.${n}`) : this.url.searchParams.append(t, `ov.{${n.join(",")}}`),
        this
    }
    textSearch(t, n, {config: r, type: o}={}) {
        let s = "";
        o === "plain" ? s = "pl" : o === "phrase" ? s = "ph" : o === "websearch" && (s = "w");
        const i = r === void 0 ? "" : `(${r})`;
        return this.url.searchParams.append(t, `${s}fts${i}.${n}`),
        this
    }
    match(t) {
        return Object.entries(t).forEach( ([n,r]) => {
            this.url.searchParams.append(n, `eq.${r}`)
        }
        ),
        this
    }
    not(t, n, r) {
        return this.url.searchParams.append(t, `not.${n}.${r}`),
        this
    }
    or(t, {foreignTable: n, referencedTable: r=n}={}) {
        const o = r ? `${r}.or` : "or";
        return this.url.searchParams.append(o, `(${t})`),
        this
    }
    filter(t, n, r) {
        return this.url.searchParams.append(t, `${n}.${r}`),
        this
    }
}
;
si.default = rP;
var oP = gt && gt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(gl, "__esModule", {
    value: !0
});
const rs = oP(si);
let sP = class {
    constructor(t, {headers: n={}, schema: r, fetch: o}) {
        this.url = t,
        this.headers = n,
        this.schema = r,
        this.fetch = o
    }
    select(t, {head: n=!1, count: r}={}) {
        const o = n ? "HEAD" : "GET";
        let s = !1;
        const i = (t ?? "*").split("").map(a => /\s/.test(a) && !s ? "" : (a === '"' && (s = !s),
        a)).join("");
        return this.url.searchParams.set("select", i),
        r && (this.headers.Prefer = `count=${r}`),
        new rs.default({
            method: o,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    insert(t, {count: n, defaultToNull: r=!0}={}) {
        const o = "POST"
          , s = [];
        if (this.headers.Prefer && s.push(this.headers.Prefer),
        n && s.push(`count=${n}`),
        r || s.push("missing=default"),
        this.headers.Prefer = s.join(","),
        Array.isArray(t)) {
            const i = t.reduce( (a, l) => a.concat(Object.keys(l)), []);
            if (i.length > 0) {
                const a = [...new Set(i)].map(l => `"${l}"`);
                this.url.searchParams.set("columns", a.join(","))
            }
        }
        return new rs.default({
            method: o,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    upsert(t, {onConflict: n, ignoreDuplicates: r=!1, count: o, defaultToNull: s=!0}={}) {
        const i = "POST"
          , a = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
        if (n !== void 0 && this.url.searchParams.set("on_conflict", n),
        this.headers.Prefer && a.push(this.headers.Prefer),
        o && a.push(`count=${o}`),
        s || a.push("missing=default"),
        this.headers.Prefer = a.join(","),
        Array.isArray(t)) {
            const l = t.reduce( (u, c) => u.concat(Object.keys(c)), []);
            if (l.length > 0) {
                const u = [...new Set(l)].map(c => `"${c}"`);
                this.url.searchParams.set("columns", u.join(","))
            }
        }
        return new rs.default({
            method: i,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    update(t, {count: n}={}) {
        const r = "PATCH"
          , o = [];
        return this.headers.Prefer && o.push(this.headers.Prefer),
        n && o.push(`count=${n}`),
        this.headers.Prefer = o.join(","),
        new rs.default({
            method: r,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    delete({count: t}={}) {
        const n = "DELETE"
          , r = [];
        return t && r.push(`count=${t}`),
        this.headers.Prefer && r.unshift(this.headers.Prefer),
        this.headers.Prefer = r.join(","),
        new rs.default({
            method: n,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
}
;
gl.default = sP;
var xl = {}
  , bl = {};
Object.defineProperty(bl, "__esModule", {
    value: !0
});
bl.version = void 0;
bl.version = "0.0.0-automated";
Object.defineProperty(xl, "__esModule", {
    value: !0
});
xl.DEFAULT_HEADERS = void 0;
const iP = bl;
xl.DEFAULT_HEADERS = {
    "X-Client-Info": `postgrest-js/${iP.version}`
};
var Yy = gt && gt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(ff, "__esModule", {
    value: !0
});
const aP = Yy(gl)
  , lP = Yy(si)
  , uP = xl;
let cP = class Jy {
    constructor(t, {headers: n={}, schema: r, fetch: o}={}) {
        this.url = t,
        this.headers = Object.assign(Object.assign({}, uP.DEFAULT_HEADERS), n),
        this.schemaName = r,
        this.fetch = o
    }
    from(t) {
        const n = new URL(`${this.url}/${t}`);
        return new aP.default(n,{
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        })
    }
    schema(t) {
        return new Jy(this.url,{
            headers: this.headers,
            schema: t,
            fetch: this.fetch
        })
    }
    rpc(t, n={}, {head: r=!1, get: o=!1, count: s}={}) {
        let i;
        const a = new URL(`${this.url}/rpc/${t}`);
        let l;
        r || o ? (i = r ? "HEAD" : "GET",
        Object.entries(n).filter( ([c,f]) => f !== void 0).map( ([c,f]) => [c, Array.isArray(f) ? `{${f.join(",")}}` : `${f}`]).forEach( ([c,f]) => {
            a.searchParams.append(c, f)
        }
        )) : (i = "POST",
        l = n);
        const u = Object.assign({}, this.headers);
        return s && (u.Prefer = `count=${s}`),
        new lP.default({
            method: i,
            url: a,
            headers: u,
            schema: this.schemaName,
            body: l,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
}
;
ff.default = cP;
var Vo = gt && gt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Ke, "__esModule", {
    value: !0
});
Ke.PostgrestError = Ke.PostgrestBuilder = Ke.PostgrestTransformBuilder = Ke.PostgrestFilterBuilder = Ke.PostgrestQueryBuilder = Ke.PostgrestClient = void 0;
const Xy = Vo(ff);
Ke.PostgrestClient = Xy.default;
const Zy = Vo(gl);
Ke.PostgrestQueryBuilder = Zy.default;
const e0 = Vo(si);
Ke.PostgrestFilterBuilder = e0.default;
const t0 = Vo(vl);
Ke.PostgrestTransformBuilder = t0.default;
const n0 = Vo(yl);
Ke.PostgrestBuilder = n0.default;
const r0 = Vo(wl);
Ke.PostgrestError = r0.default;
var dP = Ke.default = {
    PostgrestClient: Xy.default,
    PostgrestQueryBuilder: Zy.default,
    PostgrestFilterBuilder: e0.default,
    PostgrestTransformBuilder: t0.default,
    PostgrestBuilder: n0.default,
    PostgrestError: r0.default
};
const {PostgrestClient: fP, PostgrestQueryBuilder: vj, PostgrestFilterBuilder: yj, PostgrestTransformBuilder: wj, PostgrestBuilder: xj, PostgrestError: bj} = dP
  , hP = "2.11.2"
  , pP = {
    "X-Client-Info": `realtime-js/${hP}`
}
  , mP = "1.0.0"
  , o0 = 1e4
  , gP = 1e3;
var co;
(function(e) {
    e[e.connecting = 0] = "connecting",
    e[e.open = 1] = "open",
    e[e.closing = 2] = "closing",
    e[e.closed = 3] = "closed"
}
)(co || (co = {}));
var Ze;
(function(e) {
    e.closed = "closed",
    e.errored = "errored",
    e.joined = "joined",
    e.joining = "joining",
    e.leaving = "leaving"
}
)(Ze || (Ze = {}));
var Ct;
(function(e) {
    e.close = "phx_close",
    e.error = "phx_error",
    e.join = "phx_join",
    e.reply = "phx_reply",
    e.leave = "phx_leave",
    e.access_token = "access_token"
}
)(Ct || (Ct = {}));
var Mc;
(function(e) {
    e.websocket = "websocket"
}
)(Mc || (Mc = {}));
var lr;
(function(e) {
    e.Connecting = "connecting",
    e.Open = "open",
    e.Closing = "closing",
    e.Closed = "closed"
}
)(lr || (lr = {}));
class vP {
    constructor() {
        this.HEADER_LENGTH = 1
    }
    decode(t, n) {
        return t.constructor === ArrayBuffer ? n(this._binaryDecode(t)) : n(typeof t == "string" ? JSON.parse(t) : {})
    }
    _binaryDecode(t) {
        const n = new DataView(t)
          , r = new TextDecoder;
        return this._decodeBroadcast(t, n, r)
    }
    _decodeBroadcast(t, n, r) {
        const o = n.getUint8(1)
          , s = n.getUint8(2);
        let i = this.HEADER_LENGTH + 2;
        const a = r.decode(t.slice(i, i + o));
        i = i + o;
        const l = r.decode(t.slice(i, i + s));
        i = i + s;
        const u = JSON.parse(r.decode(t.slice(i, t.byteLength)));
        return {
            ref: null,
            topic: a,
            event: l,
            payload: u
        }
    }
}
class s0 {
    constructor(t, n) {
        this.callback = t,
        this.timerCalc = n,
        this.timer = void 0,
        this.tries = 0,
        this.callback = t,
        this.timerCalc = n
    }
    reset() {
        this.tries = 0,
        clearTimeout(this.timer)
    }
    scheduleTimeout() {
        clearTimeout(this.timer),
        this.timer = setTimeout( () => {
            this.tries = this.tries + 1,
            this.callback()
        }
        , this.timerCalc(this.tries + 1))
    }
}
var ie;
(function(e) {
    e.abstime = "abstime",
    e.bool = "bool",
    e.date = "date",
    e.daterange = "daterange",
    e.float4 = "float4",
    e.float8 = "float8",
    e.int2 = "int2",
    e.int4 = "int4",
    e.int4range = "int4range",
    e.int8 = "int8",
    e.int8range = "int8range",
    e.json = "json",
    e.jsonb = "jsonb",
    e.money = "money",
    e.numeric = "numeric",
    e.oid = "oid",
    e.reltime = "reltime",
    e.text = "text",
    e.time = "time",
    e.timestamp = "timestamp",
    e.timestamptz = "timestamptz",
    e.timetz = "timetz",
    e.tsrange = "tsrange",
    e.tstzrange = "tstzrange"
}
)(ie || (ie = {}));
const xp = (e, t, n={}) => {
    var r;
    const o = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
    return Object.keys(t).reduce( (s, i) => (s[i] = yP(i, e, t, o),
    s), {})
}
  , yP = (e, t, n, r) => {
    const o = t.find(a => a.name === e)
      , s = o == null ? void 0 : o.type
      , i = n[e];
    return s && !r.includes(s) ? i0(s, i) : Fc(i)
}
  , i0 = (e, t) => {
    if (e.charAt(0) === "_") {
        const n = e.slice(1, e.length);
        return _P(t, n)
    }
    switch (e) {
    case ie.bool:
        return wP(t);
    case ie.float4:
    case ie.float8:
    case ie.int2:
    case ie.int4:
    case ie.int8:
    case ie.numeric:
    case ie.oid:
        return xP(t);
    case ie.json:
    case ie.jsonb:
        return bP(t);
    case ie.timestamp:
        return SP(t);
    case ie.abstime:
    case ie.date:
    case ie.daterange:
    case ie.int4range:
    case ie.int8range:
    case ie.money:
    case ie.reltime:
    case ie.text:
    case ie.time:
    case ie.timestamptz:
    case ie.timetz:
    case ie.tsrange:
    case ie.tstzrange:
        return Fc(t);
    default:
        return Fc(t)
    }
}
  , Fc = e => e
  , wP = e => {
    switch (e) {
    case "t":
        return !0;
    case "f":
        return !1;
    default:
        return e
    }
}
  , xP = e => {
    if (typeof e == "string") {
        const t = parseFloat(e);
        if (!Number.isNaN(t))
            return t
    }
    return e
}
  , bP = e => {
    if (typeof e == "string")
        try {
            return JSON.parse(e)
        } catch (t) {
            return console.log(`JSON parse error: ${t}`),
            e
        }
    return e
}
  , _P = (e, t) => {
    if (typeof e != "string")
        return e;
    const n = e.length - 1
      , r = e[n];
    if (e[0] === "{" && r === "}") {
        let s;
        const i = e.slice(1, n);
        try {
            s = JSON.parse("[" + i + "]")
        } catch {
            s = i ? i.split(",") : []
        }
        return s.map(a => i0(t, a))
    }
    return e
}
  , SP = e => typeof e == "string" ? e.replace(" ", "T") : e
  , a0 = e => {
    let t = e;
    return t = t.replace(/^ws/i, "http"),
    t = t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""),
    t.replace(/\/+$/, "")
}
;
class pu {
    constructor(t, n, r={}, o=o0) {
        this.channel = t,
        this.event = n,
        this.payload = r,
        this.timeout = o,
        this.sent = !1,
        this.timeoutTimer = void 0,
        this.ref = "",
        this.receivedResp = null,
        this.recHooks = [],
        this.refEvent = null
    }
    resend(t) {
        this.timeout = t,
        this._cancelRefEvent(),
        this.ref = "",
        this.refEvent = null,
        this.receivedResp = null,
        this.sent = !1,
        this.send()
    }
    send() {
        this._hasReceived("timeout") || (this.startTimeout(),
        this.sent = !0,
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        }))
    }
    updatePayload(t) {
        this.payload = Object.assign(Object.assign({}, this.payload), t)
    }
    receive(t, n) {
        var r;
        return this._hasReceived(t) && n((r = this.receivedResp) === null || r === void 0 ? void 0 : r.response),
        this.recHooks.push({
            status: t,
            callback: n
        }),
        this
    }
    startTimeout() {
        if (this.timeoutTimer)
            return;
        this.ref = this.channel.socket._makeRef(),
        this.refEvent = this.channel._replyEventName(this.ref);
        const t = n => {
            this._cancelRefEvent(),
            this._cancelTimeout(),
            this.receivedResp = n,
            this._matchReceive(n)
        }
        ;
        this.channel._on(this.refEvent, {}, t),
        this.timeoutTimer = setTimeout( () => {
            this.trigger("timeout", {})
        }
        , this.timeout)
    }
    trigger(t, n) {
        this.refEvent && this.channel._trigger(this.refEvent, {
            status: t,
            response: n
        })
    }
    destroy() {
        this._cancelRefEvent(),
        this._cancelTimeout()
    }
    _cancelRefEvent() {
        this.refEvent && this.channel._off(this.refEvent, {})
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer),
        this.timeoutTimer = void 0
    }
    _matchReceive({status: t, response: n}) {
        this.recHooks.filter(r => r.status === t).forEach(r => r.callback(n))
    }
    _hasReceived(t) {
        return this.receivedResp && this.receivedResp.status === t
    }
}
var bp;
(function(e) {
    e.SYNC = "sync",
    e.JOIN = "join",
    e.LEAVE = "leave"
}
)(bp || (bp = {}));
class xs {
    constructor(t, n) {
        this.channel = t,
        this.state = {},
        this.pendingDiffs = [],
        this.joinRef = null,
        this.caller = {
            onJoin: () => {}
            ,
            onLeave: () => {}
            ,
            onSync: () => {}
        };
        const r = (n == null ? void 0 : n.events) || {
            state: "presence_state",
            diff: "presence_diff"
        };
        this.channel._on(r.state, {}, o => {
            const {onJoin: s, onLeave: i, onSync: a} = this.caller;
            this.joinRef = this.channel._joinRef(),
            this.state = xs.syncState(this.state, o, s, i),
            this.pendingDiffs.forEach(l => {
                this.state = xs.syncDiff(this.state, l, s, i)
            }
            ),
            this.pendingDiffs = [],
            a()
        }
        ),
        this.channel._on(r.diff, {}, o => {
            const {onJoin: s, onLeave: i, onSync: a} = this.caller;
            this.inPendingSyncState() ? this.pendingDiffs.push(o) : (this.state = xs.syncDiff(this.state, o, s, i),
            a())
        }
        ),
        this.onJoin( (o, s, i) => {
            this.channel._trigger("presence", {
                event: "join",
                key: o,
                currentPresences: s,
                newPresences: i
            })
        }
        ),
        this.onLeave( (o, s, i) => {
            this.channel._trigger("presence", {
                event: "leave",
                key: o,
                currentPresences: s,
                leftPresences: i
            })
        }
        ),
        this.onSync( () => {
            this.channel._trigger("presence", {
                event: "sync"
            })
        }
        )
    }
    static syncState(t, n, r, o) {
        const s = this.cloneDeep(t)
          , i = this.transformState(n)
          , a = {}
          , l = {};
        return this.map(s, (u, c) => {
            i[u] || (l[u] = c)
        }
        ),
        this.map(i, (u, c) => {
            const f = s[u];
            if (f) {
                const d = c.map(w => w.presence_ref)
                  , m = f.map(w => w.presence_ref)
                  , y = c.filter(w => m.indexOf(w.presence_ref) < 0)
                  , h = f.filter(w => d.indexOf(w.presence_ref) < 0);
                y.length > 0 && (a[u] = y),
                h.length > 0 && (l[u] = h)
            } else
                a[u] = c
        }
        ),
        this.syncDiff(s, {
            joins: a,
            leaves: l
        }, r, o)
    }
    static syncDiff(t, n, r, o) {
        const {joins: s, leaves: i} = {
            joins: this.transformState(n.joins),
            leaves: this.transformState(n.leaves)
        };
        return r || (r = () => {}
        ),
        o || (o = () => {}
        ),
        this.map(s, (a, l) => {
            var u;
            const c = (u = t[a]) !== null && u !== void 0 ? u : [];
            if (t[a] = this.cloneDeep(l),
            c.length > 0) {
                const f = t[a].map(m => m.presence_ref)
                  , d = c.filter(m => f.indexOf(m.presence_ref) < 0);
                t[a].unshift(...d)
            }
            r(a, c, l)
        }
        ),
        this.map(i, (a, l) => {
            let u = t[a];
            if (!u)
                return;
            const c = l.map(f => f.presence_ref);
            u = u.filter(f => c.indexOf(f.presence_ref) < 0),
            t[a] = u,
            o(a, u, l),
            u.length === 0 && delete t[a]
        }
        ),
        t
    }
    static map(t, n) {
        return Object.getOwnPropertyNames(t).map(r => n(r, t[r]))
    }
    static transformState(t) {
        return t = this.cloneDeep(t),
        Object.getOwnPropertyNames(t).reduce( (n, r) => {
            const o = t[r];
            return "metas"in o ? n[r] = o.metas.map(s => (s.presence_ref = s.phx_ref,
            delete s.phx_ref,
            delete s.phx_ref_prev,
            s)) : n[r] = o,
            n
        }
        , {})
    }
    static cloneDeep(t) {
        return JSON.parse(JSON.stringify(t))
    }
    onJoin(t) {
        this.caller.onJoin = t
    }
    onLeave(t) {
        this.caller.onLeave = t
    }
    onSync(t) {
        this.caller.onSync = t
    }
    inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef()
    }
}
var _p;
(function(e) {
    e.ALL = "*",
    e.INSERT = "INSERT",
    e.UPDATE = "UPDATE",
    e.DELETE = "DELETE"
}
)(_p || (_p = {}));
var Sp;
(function(e) {
    e.BROADCAST = "broadcast",
    e.PRESENCE = "presence",
    e.POSTGRES_CHANGES = "postgres_changes",
    e.SYSTEM = "system"
}
)(Sp || (Sp = {}));
var Xt;
(function(e) {
    e.SUBSCRIBED = "SUBSCRIBED",
    e.TIMED_OUT = "TIMED_OUT",
    e.CLOSED = "CLOSED",
    e.CHANNEL_ERROR = "CHANNEL_ERROR"
}
)(Xt || (Xt = {}));
class hf {
    constructor(t, n={
        config: {}
    }, r) {
        this.topic = t,
        this.params = n,
        this.socket = r,
        this.bindings = {},
        this.state = Ze.closed,
        this.joinedOnce = !1,
        this.pushBuffer = [],
        this.subTopic = t.replace(/^realtime:/i, ""),
        this.params.config = Object.assign({
            broadcast: {
                ack: !1,
                self: !1
            },
            presence: {
                key: ""
            },
            private: !1
        }, n.config),
        this.timeout = this.socket.timeout,
        this.joinPush = new pu(this,Ct.join,this.params,this.timeout),
        this.rejoinTimer = new s0( () => this._rejoinUntilConnected(),this.socket.reconnectAfterMs),
        this.joinPush.receive("ok", () => {
            this.state = Ze.joined,
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach(o => o.send()),
            this.pushBuffer = []
        }
        ),
        this._onClose( () => {
            this.rejoinTimer.reset(),
            this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
            this.state = Ze.closed,
            this.socket._remove(this)
        }
        ),
        this._onError(o => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o),
            this.state = Ze.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this.joinPush.receive("timeout", () => {
            this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
            this.state = Ze.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this._on(Ct.reply, {}, (o, s) => {
            this._trigger(this._replyEventName(s), o)
        }
        ),
        this.presence = new xs(this),
        this.broadcastEndpointURL = a0(this.socket.endPoint) + "/api/broadcast",
        this.private = this.params.config.private || !1
    }
    subscribe(t, n=this.timeout) {
        var r, o;
        if (this.socket.isConnected() || this.socket.connect(),
        this.joinedOnce)
            throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
        {
            const {config: {broadcast: s, presence: i, private: a}} = this.params;
            this._onError(c => t == null ? void 0 : t(Xt.CHANNEL_ERROR, c)),
            this._onClose( () => t == null ? void 0 : t(Xt.CLOSED));
            const l = {}
              , u = {
                broadcast: s,
                presence: i,
                postgres_changes: (o = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map(c => c.filter)) !== null && o !== void 0 ? o : [],
                private: a
            };
            this.socket.accessTokenValue && (l.access_token = this.socket.accessTokenValue),
            this.updateJoinPayload(Object.assign({
                config: u
            }, l)),
            this.joinedOnce = !0,
            this._rejoin(n),
            this.joinPush.receive("ok", async ({postgres_changes: c}) => {
                var f;
                if (this.socket.setAuth(),
                c === void 0) {
                    t == null || t(Xt.SUBSCRIBED);
                    return
                } else {
                    const d = this.bindings.postgres_changes
                      , m = (f = d == null ? void 0 : d.length) !== null && f !== void 0 ? f : 0
                      , y = [];
                    for (let h = 0; h < m; h++) {
                        const w = d[h]
                          , {filter: {event: g, schema: v, table: x, filter: _}} = w
                          , S = c && c[h];
                        if (S && S.event === g && S.schema === v && S.table === x && S.filter === _)
                            y.push(Object.assign(Object.assign({}, w), {
                                id: S.id
                            }));
                        else {
                            this.unsubscribe(),
                            t == null || t(Xt.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                            return
                        }
                    }
                    this.bindings.postgres_changes = y,
                    t && t(Xt.SUBSCRIBED);
                    return
                }
            }
            ).receive("error", c => {
                t == null || t(Xt.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(c).join(", ") || "error")))
            }
            ).receive("timeout", () => {
                t == null || t(Xt.TIMED_OUT)
            }
            )
        }
        return this
    }
    presenceState() {
        return this.presence.state
    }
    async track(t, n={}) {
        return await this.send({
            type: "presence",
            event: "track",
            payload: t
        }, n.timeout || this.timeout)
    }
    async untrack(t={}) {
        return await this.send({
            type: "presence",
            event: "untrack"
        }, t)
    }
    on(t, n, r) {
        return this._on(t, n, r)
    }
    async send(t, n={}) {
        var r, o;
        if (!this._canPush() && t.type === "broadcast") {
            const {event: s, payload: i} = t
              , l = {
                method: "POST",
                headers: {
                    Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
                    apikey: this.socket.apiKey ? this.socket.apiKey : "",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [{
                        topic: this.subTopic,
                        event: s,
                        payload: i,
                        private: this.private
                    }]
                })
            };
            try {
                const u = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (r = n.timeout) !== null && r !== void 0 ? r : this.timeout);
                return await ((o = u.body) === null || o === void 0 ? void 0 : o.cancel()),
                u.ok ? "ok" : "error"
            } catch (u) {
                return u.name === "AbortError" ? "timed out" : "error"
            }
        } else
            return new Promise(s => {
                var i, a, l;
                const u = this._push(t.type, t, n.timeout || this.timeout);
                t.type === "broadcast" && !(!((l = (a = (i = this.params) === null || i === void 0 ? void 0 : i.config) === null || a === void 0 ? void 0 : a.broadcast) === null || l === void 0) && l.ack) && s("ok"),
                u.receive("ok", () => s("ok")),
                u.receive("error", () => s("error")),
                u.receive("timeout", () => s("timed out"))
            }
            )
    }
    updateJoinPayload(t) {
        this.joinPush.updatePayload(t)
    }
    unsubscribe(t=this.timeout) {
        this.state = Ze.leaving;
        const n = () => {
            this.socket.log("channel", `leave ${this.topic}`),
            this._trigger(Ct.close, "leave", this._joinRef())
        }
        ;
        return this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        new Promise(r => {
            const o = new pu(this,Ct.leave,{},t);
            o.receive("ok", () => {
                n(),
                r("ok")
            }
            ).receive("timeout", () => {
                n(),
                r("timed out")
            }
            ).receive("error", () => {
                r("error")
            }
            ),
            o.send(),
            this._canPush() || o.trigger("ok", {})
        }
        )
    }
    async _fetchWithTimeout(t, n, r) {
        const o = new AbortController
          , s = setTimeout( () => o.abort(), r)
          , i = await this.socket.fetch(t, Object.assign(Object.assign({}, n), {
            signal: o.signal
        }));
        return clearTimeout(s),
        i
    }
    _push(t, n, r=this.timeout) {
        if (!this.joinedOnce)
            throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let o = new pu(this,t,n,r);
        return this._canPush() ? o.send() : (o.startTimeout(),
        this.pushBuffer.push(o)),
        o
    }
    _onMessage(t, n, r) {
        return n
    }
    _isMember(t) {
        return this.topic === t
    }
    _joinRef() {
        return this.joinPush.ref
    }
    _trigger(t, n, r) {
        var o, s;
        const i = t.toLocaleLowerCase()
          , {close: a, error: l, leave: u, join: c} = Ct;
        if (r && [a, l, u, c].indexOf(i) >= 0 && r !== this._joinRef())
            return;
        let d = this._onMessage(i, n, r);
        if (n && !d)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
        ["insert", "update", "delete"].includes(i) ? (o = this.bindings.postgres_changes) === null || o === void 0 || o.filter(m => {
            var y, h, w;
            return ((y = m.filter) === null || y === void 0 ? void 0 : y.event) === "*" || ((w = (h = m.filter) === null || h === void 0 ? void 0 : h.event) === null || w === void 0 ? void 0 : w.toLocaleLowerCase()) === i
        }
        ).map(m => m.callback(d, r)) : (s = this.bindings[i]) === null || s === void 0 || s.filter(m => {
            var y, h, w, g, v, x;
            if (["broadcast", "presence", "postgres_changes"].includes(i))
                if ("id"in m) {
                    const _ = m.id
                      , S = (y = m.filter) === null || y === void 0 ? void 0 : y.event;
                    return _ && ((h = n.ids) === null || h === void 0 ? void 0 : h.includes(_)) && (S === "*" || (S == null ? void 0 : S.toLocaleLowerCase()) === ((w = n.data) === null || w === void 0 ? void 0 : w.type.toLocaleLowerCase()))
                } else {
                    const _ = (v = (g = m == null ? void 0 : m.filter) === null || g === void 0 ? void 0 : g.event) === null || v === void 0 ? void 0 : v.toLocaleLowerCase();
                    return _ === "*" || _ === ((x = n == null ? void 0 : n.event) === null || x === void 0 ? void 0 : x.toLocaleLowerCase())
                }
            else
                return m.type.toLocaleLowerCase() === i
        }
        ).map(m => {
            if (typeof d == "object" && "ids"in d) {
                const y = d.data
                  , {schema: h, table: w, commit_timestamp: g, type: v, errors: x} = y;
                d = Object.assign(Object.assign({}, {
                    schema: h,
                    table: w,
                    commit_timestamp: g,
                    eventType: v,
                    new: {},
                    old: {},
                    errors: x
                }), this._getPayloadRecords(y))
            }
            m.callback(d, r)
        }
        )
    }
    _isClosed() {
        return this.state === Ze.closed
    }
    _isJoined() {
        return this.state === Ze.joined
    }
    _isJoining() {
        return this.state === Ze.joining
    }
    _isLeaving() {
        return this.state === Ze.leaving
    }
    _replyEventName(t) {
        return `chan_reply_${t}`
    }
    _on(t, n, r) {
        const o = t.toLocaleLowerCase()
          , s = {
            type: o,
            filter: n,
            callback: r
        };
        return this.bindings[o] ? this.bindings[o].push(s) : this.bindings[o] = [s],
        this
    }
    _off(t, n) {
        const r = t.toLocaleLowerCase();
        return this.bindings[r] = this.bindings[r].filter(o => {
            var s;
            return !(((s = o.type) === null || s === void 0 ? void 0 : s.toLocaleLowerCase()) === r && hf.isEqual(o.filter, n))
        }
        ),
        this
    }
    static isEqual(t, n) {
        if (Object.keys(t).length !== Object.keys(n).length)
            return !1;
        for (const r in t)
            if (t[r] !== n[r])
                return !1;
        return !0
    }
    _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout(),
        this.socket.isConnected() && this._rejoin()
    }
    _onClose(t) {
        this._on(Ct.close, {}, t)
    }
    _onError(t) {
        this._on(Ct.error, {}, n => t(n))
    }
    _canPush() {
        return this.socket.isConnected() && this._isJoined()
    }
    _rejoin(t=this.timeout) {
        this._isLeaving() || (this.socket._leaveOpenTopic(this.topic),
        this.state = Ze.joining,
        this.joinPush.resend(t))
    }
    _getPayloadRecords(t) {
        const n = {
            new: {},
            old: {}
        };
        return (t.type === "INSERT" || t.type === "UPDATE") && (n.new = xp(t.columns, t.record)),
        (t.type === "UPDATE" || t.type === "DELETE") && (n.old = xp(t.columns, t.old_record)),
        n
    }
}
const EP = () => {}
  , kP = typeof WebSocket < "u"
  , CP = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class PP {
    constructor(t, n) {
        var r;
        this.accessTokenValue = null,
        this.apiKey = null,
        this.channels = [],
        this.endPoint = "",
        this.httpEndpoint = "",
        this.headers = pP,
        this.params = {},
        this.timeout = o0,
        this.heartbeatIntervalMs = 3e4,
        this.heartbeatTimer = void 0,
        this.pendingHeartbeatRef = null,
        this.ref = 0,
        this.logger = EP,
        this.conn = null,
        this.sendBuffer = [],
        this.serializer = new vP,
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        },
        this.accessToken = null,
        this._resolveFetch = s => {
            let i;
            return s ? i = s : typeof fetch > "u" ? i = (...a) => No(async () => {
                const {default: l} = await Promise.resolve().then( () => Bo);
                return {
                    default: l
                }
            }
            , void 0).then( ({default: l}) => l(...a)) : i = fetch,
            (...a) => i(...a)
        }
        ,
        this.endPoint = `${t}/${Mc.websocket}`,
        this.httpEndpoint = a0(t),
        n != null && n.transport ? this.transport = n.transport : this.transport = null,
        n != null && n.params && (this.params = n.params),
        n != null && n.headers && (this.headers = Object.assign(Object.assign({}, this.headers), n.headers)),
        n != null && n.timeout && (this.timeout = n.timeout),
        n != null && n.logger && (this.logger = n.logger),
        n != null && n.heartbeatIntervalMs && (this.heartbeatIntervalMs = n.heartbeatIntervalMs);
        const o = (r = n == null ? void 0 : n.params) === null || r === void 0 ? void 0 : r.apikey;
        if (o && (this.accessTokenValue = o,
        this.apiKey = o),
        this.reconnectAfterMs = n != null && n.reconnectAfterMs ? n.reconnectAfterMs : s => [1e3, 2e3, 5e3, 1e4][s - 1] || 1e4,
        this.encode = n != null && n.encode ? n.encode : (s, i) => i(JSON.stringify(s)),
        this.decode = n != null && n.decode ? n.decode : this.serializer.decode.bind(this.serializer),
        this.reconnectTimer = new s0(async () => {
            this.disconnect(),
            this.connect()
        }
        ,this.reconnectAfterMs),
        this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch),
        n != null && n.worker) {
            if (typeof window < "u" && !window.Worker)
                throw new Error("Web Worker is not supported");
            this.worker = (n == null ? void 0 : n.worker) || !1,
            this.workerUrl = n == null ? void 0 : n.workerUrl
        }
        this.accessToken = (n == null ? void 0 : n.accessToken) || null
    }
    connect() {
        if (!this.conn) {
            if (this.transport) {
                this.conn = new this.transport(this.endpointURL(),void 0,{
                    headers: this.headers
                });
                return
            }
            if (kP) {
                this.conn = new WebSocket(this.endpointURL()),
                this.setupConnection();
                return
            }
            this.conn = new TP(this.endpointURL(),void 0,{
                close: () => {
                    this.conn = null
                }
            }),
            No(async () => {
                const {default: t} = await import("./browser-B-J4rFwF.js").then(n => n.b);
                return {
                    default: t
                }
            }
            , []).then( ({default: t}) => {
                this.conn = new t(this.endpointURL(),void 0,{
                    headers: this.headers
                }),
                this.setupConnection()
            }
            )
        }
    }
    endpointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: mP
        }))
    }
    disconnect(t, n) {
        this.conn && (this.conn.onclose = function() {}
        ,
        t ? this.conn.close(t, n ?? "") : this.conn.close(),
        this.conn = null,
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.reconnectTimer.reset())
    }
    getChannels() {
        return this.channels
    }
    async removeChannel(t) {
        const n = await t.unsubscribe();
        return this.channels.length === 0 && this.disconnect(),
        n
    }
    async removeAllChannels() {
        const t = await Promise.all(this.channels.map(n => n.unsubscribe()));
        return this.disconnect(),
        t
    }
    log(t, n, r) {
        this.logger(t, n, r)
    }
    connectionState() {
        switch (this.conn && this.conn.readyState) {
        case co.connecting:
            return lr.Connecting;
        case co.open:
            return lr.Open;
        case co.closing:
            return lr.Closing;
        default:
            return lr.Closed
        }
    }
    isConnected() {
        return this.connectionState() === lr.Open
    }
    channel(t, n={
        config: {}
    }) {
        const r = new hf(`realtime:${t}`,n,this);
        return this.channels.push(r),
        r
    }
    push(t) {
        const {topic: n, event: r, payload: o, ref: s} = t
          , i = () => {
            this.encode(t, a => {
                var l;
                (l = this.conn) === null || l === void 0 || l.send(a)
            }
            )
        }
        ;
        this.log("push", `${n} ${r} (${s})`, o),
        this.isConnected() ? i() : this.sendBuffer.push(i)
    }
    async setAuth(t=null) {
        let n = t || this.accessToken && await this.accessToken() || this.accessTokenValue;
        if (n) {
            let r = null;
            try {
                r = JSON.parse(atob(n.split(".")[1]))
            } catch {}
            if (r && r.exp && !(Math.floor(Date.now() / 1e3) - r.exp < 0))
                return this.log("auth", `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${r.exp}`),
                Promise.reject(`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${r.exp}`);
            this.accessTokenValue = n,
            this.channels.forEach(o => {
                n && o.updateJoinPayload({
                    access_token: n
                }),
                o.joinedOnce && o._isJoined() && o._push(Ct.access_token, {
                    access_token: n
                })
            }
            )
        }
    }
    async sendHeartbeat() {
        var t;
        if (this.isConnected()) {
            if (this.pendingHeartbeatRef) {
                this.pendingHeartbeatRef = null,
                this.log("transport", "heartbeat timeout. Attempting to re-establish connection"),
                (t = this.conn) === null || t === void 0 || t.close(gP, "hearbeat timeout");
                return
            }
            this.pendingHeartbeatRef = this._makeRef(),
            this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef
            }),
            this.setAuth()
        }
    }
    flushSendBuffer() {
        this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(t => t()),
        this.sendBuffer = [])
    }
    _makeRef() {
        let t = this.ref + 1;
        return t === this.ref ? this.ref = 0 : this.ref = t,
        this.ref.toString()
    }
    _leaveOpenTopic(t) {
        let n = this.channels.find(r => r.topic === t && (r._isJoined() || r._isJoining()));
        n && (this.log("transport", `leaving duplicate topic "${t}"`),
        n.unsubscribe())
    }
    _remove(t) {
        this.channels = this.channels.filter(n => n._joinRef() !== t._joinRef())
    }
    setupConnection() {
        this.conn && (this.conn.binaryType = "arraybuffer",
        this.conn.onopen = () => this._onConnOpen(),
        this.conn.onerror = t => this._onConnError(t),
        this.conn.onmessage = t => this._onConnMessage(t),
        this.conn.onclose = t => this._onConnClose(t))
    }
    _onConnMessage(t) {
        this.decode(t.data, n => {
            let {topic: r, event: o, payload: s, ref: i} = n;
            i && i === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null),
            this.log("receive", `${s.status || ""} ${r} ${o} ${i && "(" + i + ")" || ""}`, s),
            this.channels.filter(a => a._isMember(r)).forEach(a => a._trigger(o, s, i)),
            this.stateChangeCallbacks.message.forEach(a => a(n))
        }
        )
    }
    async _onConnOpen() {
        if (this.log("transport", `connected to ${this.endpointURL()}`),
        this.flushSendBuffer(),
        this.reconnectTimer.reset(),
        !this.worker)
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.heartbeatTimer = setInterval( () => this.sendHeartbeat(), this.heartbeatIntervalMs);
        else {
            this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
            const t = this._workerObjectUrl(this.workerUrl);
            this.workerRef = new Worker(t),
            this.workerRef.onerror = n => {
                this.log("worker", "worker error", n.message),
                this.workerRef.terminate()
            }
            ,
            this.workerRef.onmessage = n => {
                n.data.event === "keepAlive" && this.sendHeartbeat()
            }
            ,
            this.workerRef.postMessage({
                event: "start",
                interval: this.heartbeatIntervalMs
            })
        }
        this.stateChangeCallbacks.open.forEach(t => t())
    }
    _onConnClose(t) {
        this.log("transport", "close", t),
        this._triggerChanError(),
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.reconnectTimer.scheduleTimeout(),
        this.stateChangeCallbacks.close.forEach(n => n(t))
    }
    _onConnError(t) {
        this.log("transport", t.message),
        this._triggerChanError(),
        this.stateChangeCallbacks.error.forEach(n => n(t))
    }
    _triggerChanError() {
        this.channels.forEach(t => t._trigger(Ct.error))
    }
    _appendParams(t, n) {
        if (Object.keys(n).length === 0)
            return t;
        const r = t.match(/\?/) ? "&" : "?"
          , o = new URLSearchParams(n);
        return `${t}${r}${o}`
    }
    _workerObjectUrl(t) {
        let n;
        if (t)
            n = t;
        else {
            const r = new Blob([CP],{
                type: "application/javascript"
            });
            n = URL.createObjectURL(r)
        }
        return n
    }
}
class TP {
    constructor(t, n, r) {
        this.binaryType = "arraybuffer",
        this.onclose = () => {}
        ,
        this.onerror = () => {}
        ,
        this.onmessage = () => {}
        ,
        this.onopen = () => {}
        ,
        this.readyState = co.connecting,
        this.send = () => {}
        ,
        this.url = null,
        this.url = t,
        this.close = r.close
    }
}
class pf extends Error {
    constructor(t) {
        super(t),
        this.__isStorageError = !0,
        this.name = "StorageError"
    }
}
function ke(e) {
    return typeof e == "object" && e !== null && "__isStorageError"in e
}
class RP extends pf {
    constructor(t, n) {
        super(t),
        this.name = "StorageApiError",
        this.status = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status
        }
    }
}
class zc extends pf {
    constructor(t, n) {
        super(t),
        this.name = "StorageUnknownError",
        this.originalError = n
    }
}
var AP = function(e, t, n, r) {
    function o(s) {
        return s instanceof n ? s : new n(function(i) {
            i(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, i) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (f) {
                i(f)
            }
        }
        function l(c) {
            try {
                u(r.throw(c))
            } catch (f) {
                i(f)
            }
        }
        function u(c) {
            c.done ? s(c.value) : o(c.value).then(a, l)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
};
const l0 = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = (...n) => No(async () => {
        const {default: r} = await Promise.resolve().then( () => Bo);
        return {
            default: r
        }
    }
    , void 0).then( ({default: r}) => r(...n)) : t = fetch,
    (...n) => t(...n)
}
  , jP = () => AP(void 0, void 0, void 0, function*() {
    return typeof Response > "u" ? (yield No( () => Promise.resolve().then( () => Bo), void 0)).Response : Response
})
  , Uc = e => {
    if (Array.isArray(e))
        return e.map(n => Uc(n));
    if (typeof e == "function" || e !== Object(e))
        return e;
    const t = {};
    return Object.entries(e).forEach( ([n,r]) => {
        const o = n.replace(/([-_][a-z])/gi, s => s.toUpperCase().replace(/[-_]/g, ""));
        t[o] = Uc(r)
    }
    ),
    t
}
;
var Rr = function(e, t, n, r) {
    function o(s) {
        return s instanceof n ? s : new n(function(i) {
            i(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, i) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (f) {
                i(f)
            }
        }
        function l(c) {
            try {
                u(r.throw(c))
            } catch (f) {
                i(f)
            }
        }
        function u(c) {
            c.done ? s(c.value) : o(c.value).then(a, l)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
};
const mu = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
  , NP = (e, t, n) => Rr(void 0, void 0, void 0, function*() {
    const r = yield jP();
    e instanceof r && !(n != null && n.noResolveJson) ? e.json().then(o => {
        t(new RP(mu(o),e.status || 500))
    }
    ).catch(o => {
        t(new zc(mu(o),o))
    }
    ) : t(new zc(mu(e),e))
})
  , OP = (e, t, n, r) => {
    const o = {
        method: e,
        headers: (t == null ? void 0 : t.headers) || {}
    };
    return e === "GET" ? o : (o.headers = Object.assign({
        "Content-Type": "application/json"
    }, t == null ? void 0 : t.headers),
    r && (o.body = JSON.stringify(r)),
    Object.assign(Object.assign({}, o), n))
}
;
function ii(e, t, n, r, o, s) {
    return Rr(this, void 0, void 0, function*() {
        return new Promise( (i, a) => {
            e(n, OP(t, r, o, s)).then(l => {
                if (!l.ok)
                    throw l;
                return r != null && r.noResolveJson ? l : l.json()
            }
            ).then(l => i(l)).catch(l => NP(l, a, r))
        }
        )
    })
}
function Da(e, t, n, r) {
    return Rr(this, void 0, void 0, function*() {
        return ii(e, "GET", t, n, r)
    })
}
function Cn(e, t, n, r, o) {
    return Rr(this, void 0, void 0, function*() {
        return ii(e, "POST", t, r, o, n)
    })
}
function IP(e, t, n, r, o) {
    return Rr(this, void 0, void 0, function*() {
        return ii(e, "PUT", t, r, o, n)
    })
}
function LP(e, t, n, r) {
    return Rr(this, void 0, void 0, function*() {
        return ii(e, "HEAD", t, Object.assign(Object.assign({}, n), {
            noResolveJson: !0
        }), r)
    })
}
function u0(e, t, n, r, o) {
    return Rr(this, void 0, void 0, function*() {
        return ii(e, "DELETE", t, r, o, n)
    })
}
var He = function(e, t, n, r) {
    function o(s) {
        return s instanceof n ? s : new n(function(i) {
            i(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, i) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (f) {
                i(f)
            }
        }
        function l(c) {
            try {
                u(r.throw(c))
            } catch (f) {
                i(f)
            }
        }
        function u(c) {
            c.done ? s(c.value) : o(c.value).then(a, l)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
};
const DP = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: "name",
        order: "asc"
    }
}
  , Ep = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1
};
class $P {
    constructor(t, n={}, r, o) {
        this.url = t,
        this.headers = n,
        this.bucketId = r,
        this.fetch = l0(o)
    }
    uploadOrUpdate(t, n, r, o) {
        return He(this, void 0, void 0, function*() {
            try {
                let s;
                const i = Object.assign(Object.assign({}, Ep), o);
                let a = Object.assign(Object.assign({}, this.headers), t === "POST" && {
                    "x-upsert": String(i.upsert)
                });
                const l = i.metadata;
                typeof Blob < "u" && r instanceof Blob ? (s = new FormData,
                s.append("cacheControl", i.cacheControl),
                l && s.append("metadata", this.encodeMetadata(l)),
                s.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (s = r,
                s.append("cacheControl", i.cacheControl),
                l && s.append("metadata", this.encodeMetadata(l))) : (s = r,
                a["cache-control"] = `max-age=${i.cacheControl}`,
                a["content-type"] = i.contentType,
                l && (a["x-metadata"] = this.toBase64(this.encodeMetadata(l)))),
                o != null && o.headers && (a = Object.assign(Object.assign({}, a), o.headers));
                const u = this._removeEmptyFolders(n)
                  , c = this._getFinalPath(u)
                  , f = yield this.fetch(`${this.url}/object/${c}`, Object.assign({
                    method: t,
                    body: s,
                    headers: a
                }, i != null && i.duplex ? {
                    duplex: i.duplex
                } : {}))
                  , d = yield f.json();
                return f.ok ? {
                    data: {
                        path: u,
                        id: d.Id,
                        fullPath: d.Key
                    },
                    error: null
                } : {
                    data: null,
                    error: d
                }
            } catch (s) {
                if (ke(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    upload(t, n, r) {
        return He(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("POST", t, n, r)
        })
    }
    uploadToSignedUrl(t, n, r, o) {
        return He(this, void 0, void 0, function*() {
            const s = this._removeEmptyFolders(t)
              , i = this._getFinalPath(s)
              , a = new URL(this.url + `/object/upload/sign/${i}`);
            a.searchParams.set("token", n);
            try {
                let l;
                const u = Object.assign({
                    upsert: Ep.upsert
                }, o)
                  , c = Object.assign(Object.assign({}, this.headers), {
                    "x-upsert": String(u.upsert)
                });
                typeof Blob < "u" && r instanceof Blob ? (l = new FormData,
                l.append("cacheControl", u.cacheControl),
                l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r,
                l.append("cacheControl", u.cacheControl)) : (l = r,
                c["cache-control"] = `max-age=${u.cacheControl}`,
                c["content-type"] = u.contentType);
                const f = yield this.fetch(a.toString(), {
                    method: "PUT",
                    body: l,
                    headers: c
                })
                  , d = yield f.json();
                return f.ok ? {
                    data: {
                        path: s,
                        fullPath: d.Key
                    },
                    error: null
                } : {
                    data: null,
                    error: d
                }
            } catch (l) {
                if (ke(l))
                    return {
                        data: null,
                        error: l
                    };
                throw l
            }
        })
    }
    createSignedUploadUrl(t, n) {
        return He(this, void 0, void 0, function*() {
            try {
                let r = this._getFinalPath(t);
                const o = Object.assign({}, this.headers);
                n != null && n.upsert && (o["x-upsert"] = "true");
                const s = yield Cn(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, {
                    headers: o
                })
                  , i = new URL(this.url + s.url)
                  , a = i.searchParams.get("token");
                if (!a)
                    throw new pf("No token returned by API");
                return {
                    data: {
                        signedUrl: i.toString(),
                        path: t,
                        token: a
                    },
                    error: null
                }
            } catch (r) {
                if (ke(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    update(t, n, r) {
        return He(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("PUT", t, n, r)
        })
    }
    move(t, n, r) {
        return He(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Cn(this.fetch, `${this.url}/object/move`, {
                        bucketId: this.bucketId,
                        sourceKey: t,
                        destinationKey: n,
                        destinationBucket: r == null ? void 0 : r.destinationBucket
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (o) {
                if (ke(o))
                    return {
                        data: null,
                        error: o
                    };
                throw o
            }
        })
    }
    copy(t, n, r) {
        return He(this, void 0, void 0, function*() {
            try {
                return {
                    data: {
                        path: (yield Cn(this.fetch, `${this.url}/object/copy`, {
                            bucketId: this.bucketId,
                            sourceKey: t,
                            destinationKey: n,
                            destinationBucket: r == null ? void 0 : r.destinationBucket
                        }, {
                            headers: this.headers
                        })).Key
                    },
                    error: null
                }
            } catch (o) {
                if (ke(o))
                    return {
                        data: null,
                        error: o
                    };
                throw o
            }
        })
    }
    createSignedUrl(t, n, r) {
        return He(this, void 0, void 0, function*() {
            try {
                let o = this._getFinalPath(t)
                  , s = yield Cn(this.fetch, `${this.url}/object/sign/${o}`, Object.assign({
                    expiresIn: n
                }, r != null && r.transform ? {
                    transform: r.transform
                } : {}), {
                    headers: this.headers
                });
                const i = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
                return s = {
                    signedUrl: encodeURI(`${this.url}${s.signedURL}${i}`)
                },
                {
                    data: s,
                    error: null
                }
            } catch (o) {
                if (ke(o))
                    return {
                        data: null,
                        error: o
                    };
                throw o
            }
        })
    }
    createSignedUrls(t, n, r) {
        return He(this, void 0, void 0, function*() {
            try {
                const o = yield Cn(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                    expiresIn: n,
                    paths: t
                }, {
                    headers: this.headers
                })
                  , s = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
                return {
                    data: o.map(i => Object.assign(Object.assign({}, i), {
                        signedUrl: i.signedURL ? encodeURI(`${this.url}${i.signedURL}${s}`) : null
                    })),
                    error: null
                }
            } catch (o) {
                if (ke(o))
                    return {
                        data: null,
                        error: o
                    };
                throw o
            }
        })
    }
    download(t, n) {
        return He(this, void 0, void 0, function*() {
            const o = typeof (n == null ? void 0 : n.transform) < "u" ? "render/image/authenticated" : "object"
              , s = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {})
              , i = s ? `?${s}` : "";
            try {
                const a = this._getFinalPath(t);
                return {
                    data: yield(yield Da(this.fetch, `${this.url}/${o}/${a}${i}`, {
                        headers: this.headers,
                        noResolveJson: !0
                    })).blob(),
                    error: null
                }
            } catch (a) {
                if (ke(a))
                    return {
                        data: null,
                        error: a
                    };
                throw a
            }
        })
    }
    info(t) {
        return He(this, void 0, void 0, function*() {
            const n = this._getFinalPath(t);
            try {
                const r = yield Da(this.fetch, `${this.url}/object/info/${n}`, {
                    headers: this.headers
                });
                return {
                    data: Uc(r),
                    error: null
                }
            } catch (r) {
                if (ke(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    exists(t) {
        return He(this, void 0, void 0, function*() {
            const n = this._getFinalPath(t);
            try {
                return yield LP(this.fetch, `${this.url}/object/${n}`, {
                    headers: this.headers
                }),
                {
                    data: !0,
                    error: null
                }
            } catch (r) {
                if (ke(r) && r instanceof zc) {
                    const o = r.originalError;
                    if ([400, 404].includes(o == null ? void 0 : o.status))
                        return {
                            data: !1,
                            error: r
                        }
                }
                throw r
            }
        })
    }
    getPublicUrl(t, n) {
        const r = this._getFinalPath(t)
          , o = []
          , s = n != null && n.download ? `download=${n.download === !0 ? "" : n.download}` : "";
        s !== "" && o.push(s);
        const a = typeof (n == null ? void 0 : n.transform) < "u" ? "render/image" : "object"
          , l = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {});
        l !== "" && o.push(l);
        let u = o.join("&");
        return u !== "" && (u = `?${u}`),
        {
            data: {
                publicUrl: encodeURI(`${this.url}/${a}/public/${r}${u}`)
            }
        }
    }
    remove(t) {
        return He(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield u0(this.fetch, `${this.url}/object/${this.bucketId}`, {
                        prefixes: t
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (ke(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    list(t, n, r) {
        return He(this, void 0, void 0, function*() {
            try {
                const o = Object.assign(Object.assign(Object.assign({}, DP), n), {
                    prefix: t || ""
                });
                return {
                    data: yield Cn(this.fetch, `${this.url}/object/list/${this.bucketId}`, o, {
                        headers: this.headers
                    }, r),
                    error: null
                }
            } catch (o) {
                if (ke(o))
                    return {
                        data: null,
                        error: o
                    };
                throw o
            }
        })
    }
    encodeMetadata(t) {
        return JSON.stringify(t)
    }
    toBase64(t) {
        return typeof Buffer < "u" ? Buffer.from(t).toString("base64") : btoa(t)
    }
    _getFinalPath(t) {
        return `${this.bucketId}/${t}`
    }
    _removeEmptyFolders(t) {
        return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
    }
    transformOptsToQueryString(t) {
        const n = [];
        return t.width && n.push(`width=${t.width}`),
        t.height && n.push(`height=${t.height}`),
        t.resize && n.push(`resize=${t.resize}`),
        t.format && n.push(`format=${t.format}`),
        t.quality && n.push(`quality=${t.quality}`),
        n.join("&")
    }
}
const MP = "2.7.1"
  , FP = {
    "X-Client-Info": `storage-js/${MP}`
};
var Lr = function(e, t, n, r) {
    function o(s) {
        return s instanceof n ? s : new n(function(i) {
            i(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, i) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (f) {
                i(f)
            }
        }
        function l(c) {
            try {
                u(r.throw(c))
            } catch (f) {
                i(f)
            }
        }
        function u(c) {
            c.done ? s(c.value) : o(c.value).then(a, l)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
};
class zP {
    constructor(t, n={}, r) {
        this.url = t,
        this.headers = Object.assign(Object.assign({}, FP), n),
        this.fetch = l0(r)
    }
    listBuckets() {
        return Lr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Da(this.fetch, `${this.url}/bucket`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (t) {
                if (ke(t))
                    return {
                        data: null,
                        error: t
                    };
                throw t
            }
        })
    }
    getBucket(t) {
        return Lr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Da(this.fetch, `${this.url}/bucket/${t}`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (ke(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    createBucket(t, n={
        public: !1
    }) {
        return Lr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Cn(this.fetch, `${this.url}/bucket`, {
                        id: t,
                        name: t,
                        public: n.public,
                        file_size_limit: n.fileSizeLimit,
                        allowed_mime_types: n.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (ke(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    updateBucket(t, n) {
        return Lr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield IP(this.fetch, `${this.url}/bucket/${t}`, {
                        id: t,
                        name: t,
                        public: n.public,
                        file_size_limit: n.fileSizeLimit,
                        allowed_mime_types: n.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (ke(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    emptyBucket(t) {
        return Lr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Cn(this.fetch, `${this.url}/bucket/${t}/empty`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (ke(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    deleteBucket(t) {
        return Lr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield u0(this.fetch, `${this.url}/bucket/${t}`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (ke(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
}
class UP extends zP {
    constructor(t, n={}, r) {
        super(t, n, r)
    }
    from(t) {
        return new $P(this.url,this.headers,t,this.fetch)
    }
}
const BP = "2.49.4";
let ls = "";
typeof Deno < "u" ? ls = "deno" : typeof document < "u" ? ls = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? ls = "react-native" : ls = "node";
const VP = {
    "X-Client-Info": `supabase-js-${ls}/${BP}`
}
  , HP = {
    headers: VP
}
  , WP = {
    schema: "public"
}
  , KP = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit"
}
  , qP = {};
var GP = function(e, t, n, r) {
    function o(s) {
        return s instanceof n ? s : new n(function(i) {
            i(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, i) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (f) {
                i(f)
            }
        }
        function l(c) {
            try {
                u(r.throw(c))
            } catch (f) {
                i(f)
            }
        }
        function u(c) {
            c.done ? s(c.value) : o(c.value).then(a, l)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
};
const QP = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = qy : t = fetch,
    (...n) => t(...n)
}
  , YP = () => typeof Headers > "u" ? Gy : Headers
  , JP = (e, t, n) => {
    const r = QP(n)
      , o = YP();
    return (s, i) => GP(void 0, void 0, void 0, function*() {
        var a;
        const l = (a = yield t()) !== null && a !== void 0 ? a : e;
        let u = new o(i == null ? void 0 : i.headers);
        return u.has("apikey") || u.set("apikey", e),
        u.has("Authorization") || u.set("Authorization", `Bearer ${l}`),
        r(s, Object.assign(Object.assign({}, i), {
            headers: u
        }))
    })
}
;
var XP = function(e, t, n, r) {
    function o(s) {
        return s instanceof n ? s : new n(function(i) {
            i(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, i) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (f) {
                i(f)
            }
        }
        function l(c) {
            try {
                u(r.throw(c))
            } catch (f) {
                i(f)
            }
        }
        function u(c) {
            c.done ? s(c.value) : o(c.value).then(a, l)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
};
function ZP(e) {
    return e.replace(/\/$/, "")
}
function eT(e, t) {
    const {db: n, auth: r, realtime: o, global: s} = e
      , {db: i, auth: a, realtime: l, global: u} = t
      , c = {
        db: Object.assign(Object.assign({}, i), n),
        auth: Object.assign(Object.assign({}, a), r),
        realtime: Object.assign(Object.assign({}, l), o),
        global: Object.assign(Object.assign({}, u), s),
        accessToken: () => XP(this, void 0, void 0, function*() {
            return ""
        })
    };
    return e.accessToken ? c.accessToken = e.accessToken : delete c.accessToken,
    c
}
const c0 = "2.69.1"
  , Ur = 30 * 1e3
  , Bc = 3
  , gu = Bc * Ur
  , tT = "http://localhost:9999"
  , nT = "supabase.auth.token"
  , rT = {
    "X-Client-Info": `gotrue-js/${c0}`
}
  , Vc = "X-Supabase-Api-Version"
  , d0 = {
    "2024-01-01": {
        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
        name: "2024-01-01"
    }
}
  , oT = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i
  , sT = 6e5;
class mf extends Error {
    constructor(t, n, r) {
        super(t),
        this.__isAuthError = !0,
        this.name = "AuthError",
        this.status = n,
        this.code = r
    }
}
function q(e) {
    return typeof e == "object" && e !== null && "__isAuthError"in e
}
class iT extends mf {
    constructor(t, n, r) {
        super(t, n, r),
        this.name = "AuthApiError",
        this.status = n,
        this.code = r
    }
}
function aT(e) {
    return q(e) && e.name === "AuthApiError"
}
class f0 extends mf {
    constructor(t, n) {
        super(t),
        this.name = "AuthUnknownError",
        this.originalError = n
    }
}
class nr extends mf {
    constructor(t, n, r, o) {
        super(t, r, o),
        this.name = n,
        this.status = r
    }
}
class bn extends nr {
    constructor() {
        super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
    }
}
function lT(e) {
    return q(e) && e.name === "AuthSessionMissingError"
}
class vu extends nr {
    constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
    }
}
class Ii extends nr {
    constructor(t) {
        super(t, "AuthInvalidCredentialsError", 400, void 0)
    }
}
class Li extends nr {
    constructor(t, n=null) {
        super(t, "AuthImplicitGrantRedirectError", 500, void 0),
        this.details = null,
        this.details = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
function uT(e) {
    return q(e) && e.name === "AuthImplicitGrantRedirectError"
}
class kp extends nr {
    constructor(t, n=null) {
        super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0),
        this.details = null,
        this.details = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
class Hc extends nr {
    constructor(t, n) {
        super(t, "AuthRetryableFetchError", n, void 0)
    }
}
function yu(e) {
    return q(e) && e.name === "AuthRetryableFetchError"
}
class Cp extends nr {
    constructor(t, n, r) {
        super(t, "AuthWeakPasswordError", n, "weak_password"),
        this.reasons = r
    }
}
class bs extends nr {
    constructor(t) {
        super(t, "AuthInvalidJwtError", 400, "invalid_jwt")
    }
}
const Pp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("")
  , Tp = ` 	
\r=`.split("")
  , cT = ( () => {
    const e = new Array(128);
    for (let t = 0; t < e.length; t += 1)
        e[t] = -1;
    for (let t = 0; t < Tp.length; t += 1)
        e[Tp[t].charCodeAt(0)] = -2;
    for (let t = 0; t < Pp.length; t += 1)
        e[Pp[t].charCodeAt(0)] = t;
    return e
}
)();
function h0(e, t, n) {
    const r = cT[e];
    if (r > -1)
        for (t.queue = t.queue << 6 | r,
        t.queuedBits += 6; t.queuedBits >= 8; )
            n(t.queue >> t.queuedBits - 8 & 255),
            t.queuedBits -= 8;
    else {
        if (r === -2)
            return;
        throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)
    }
}
function Rp(e) {
    const t = []
      , n = i => {
        t.push(String.fromCodePoint(i))
    }
      , r = {
        utf8seq: 0,
        codepoint: 0
    }
      , o = {
        queue: 0,
        queuedBits: 0
    }
      , s = i => {
        hT(i, r, n)
    }
    ;
    for (let i = 0; i < e.length; i += 1)
        h0(e.charCodeAt(i), o, s);
    return t.join("")
}
function dT(e, t) {
    if (e <= 127) {
        t(e);
        return
    } else if (e <= 2047) {
        t(192 | e >> 6),
        t(128 | e & 63);
        return
    } else if (e <= 65535) {
        t(224 | e >> 12),
        t(128 | e >> 6 & 63),
        t(128 | e & 63);
        return
    } else if (e <= 1114111) {
        t(240 | e >> 18),
        t(128 | e >> 12 & 63),
        t(128 | e >> 6 & 63),
        t(128 | e & 63);
        return
    }
    throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)
}
function fT(e, t) {
    for (let n = 0; n < e.length; n += 1) {
        let r = e.charCodeAt(n);
        if (r > 55295 && r <= 56319) {
            const o = (r - 55296) * 1024 & 65535;
            r = (e.charCodeAt(n + 1) - 56320 & 65535 | o) + 65536,
            n += 1
        }
        dT(r, t)
    }
}
function hT(e, t, n) {
    if (t.utf8seq === 0) {
        if (e <= 127) {
            n(e);
            return
        }
        for (let r = 1; r < 6; r += 1)
            if (!(e >> 7 - r & 1)) {
                t.utf8seq = r;
                break
            }
        if (t.utf8seq === 2)
            t.codepoint = e & 31;
        else if (t.utf8seq === 3)
            t.codepoint = e & 15;
        else if (t.utf8seq === 4)
            t.codepoint = e & 7;
        else
            throw new Error("Invalid UTF-8 sequence");
        t.utf8seq -= 1
    } else if (t.utf8seq > 0) {
        if (e <= 127)
            throw new Error("Invalid UTF-8 sequence");
        t.codepoint = t.codepoint << 6 | e & 63,
        t.utf8seq -= 1,
        t.utf8seq === 0 && n(t.codepoint)
    }
}
function pT(e) {
    const t = []
      , n = {
        queue: 0,
        queuedBits: 0
    }
      , r = o => {
        t.push(o)
    }
    ;
    for (let o = 0; o < e.length; o += 1)
        h0(e.charCodeAt(o), n, r);
    return new Uint8Array(t)
}
function mT(e) {
    const t = [];
    return fT(e, n => t.push(n)),
    new Uint8Array(t)
}
function gT(e) {
    return Math.round(Date.now() / 1e3) + e
}
function vT() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        const t = Math.random() * 16 | 0;
        return (e == "x" ? t : t & 3 | 8).toString(16)
    })
}
const Mt = () => typeof window < "u" && typeof document < "u"
  , or = {
    tested: !1,
    writable: !1
}
  , _s = () => {
    if (!Mt())
        return !1;
    try {
        if (typeof globalThis.localStorage != "object")
            return !1
    } catch {
        return !1
    }
    if (or.tested)
        return or.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
        globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        or.tested = !0,
        or.writable = !0
    } catch {
        or.tested = !0,
        or.writable = !1
    }
    return or.writable
}
;
function yT(e) {
    const t = {}
      , n = new URL(e);
    if (n.hash && n.hash[0] === "#")
        try {
            new URLSearchParams(n.hash.substring(1)).forEach( (o, s) => {
                t[s] = o
            }
            )
        } catch {}
    return n.searchParams.forEach( (r, o) => {
        t[o] = r
    }
    ),
    t
}
const p0 = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = (...n) => No(async () => {
        const {default: r} = await Promise.resolve().then( () => Bo);
        return {
            default: r
        }
    }
    , void 0).then( ({default: r}) => r(...n)) : t = fetch,
    (...n) => t(...n)
}
  , wT = e => typeof e == "object" && e !== null && "status"in e && "ok"in e && "json"in e && typeof e.json == "function"
  , m0 = async (e, t, n) => {
    await e.setItem(t, JSON.stringify(n))
}
  , Di = async (e, t) => {
    const n = await e.getItem(t);
    if (!n)
        return null;
    try {
        return JSON.parse(n)
    } catch {
        return n
    }
}
  , $i = async (e, t) => {
    await e.removeItem(t)
}
;
class _l {
    constructor() {
        this.promise = new _l.promiseConstructor( (t, n) => {
            this.resolve = t,
            this.reject = n
        }
        )
    }
}
_l.promiseConstructor = Promise;
function wu(e) {
    const t = e.split(".");
    if (t.length !== 3)
        throw new bs("Invalid JWT structure");
    for (let r = 0; r < t.length; r++)
        if (!oT.test(t[r]))
            throw new bs("JWT not in base64url format");
    return {
        header: JSON.parse(Rp(t[0])),
        payload: JSON.parse(Rp(t[1])),
        signature: pT(t[2]),
        raw: {
            header: t[0],
            payload: t[1]
        }
    }
}
async function xT(e) {
    return await new Promise(t => {
        setTimeout( () => t(null), e)
    }
    )
}
function bT(e, t) {
    return new Promise( (r, o) => {
        (async () => {
            for (let s = 0; s < 1 / 0; s++)
                try {
                    const i = await e(s);
                    if (!t(s, null, i)) {
                        r(i);
                        return
                    }
                } catch (i) {
                    if (!t(s, i)) {
                        o(i);
                        return
                    }
                }
        }
        )()
    }
    )
}
function _T(e) {
    return ("0" + e.toString(16)).substr(-2)
}
function ST() {
    const t = new Uint32Array(56);
    if (typeof crypto > "u") {
        const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
          , r = n.length;
        let o = "";
        for (let s = 0; s < 56; s++)
            o += n.charAt(Math.floor(Math.random() * r));
        return o
    }
    return crypto.getRandomValues(t),
    Array.from(t, _T).join("")
}
async function ET(e) {
    const n = new TextEncoder().encode(e)
      , r = await crypto.subtle.digest("SHA-256", n)
      , o = new Uint8Array(r);
    return Array.from(o).map(s => String.fromCharCode(s)).join("")
}
async function kT(e) {
    if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
        return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),
        e;
    const n = await ET(e);
    return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}
async function Dr(e, t, n=!1) {
    const r = ST();
    let o = r;
    n && (o += "/PASSWORD_RECOVERY"),
    await m0(e, `${t}-code-verifier`, o);
    const s = await kT(r);
    return [s, r === s ? "plain" : "s256"]
}
const CT = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function PT(e) {
    const t = e.headers.get(Vc);
    if (!t || !t.match(CT))
        return null;
    try {
        return new Date(`${t}T00:00:00.0Z`)
    } catch {
        return null
    }
}
function TT(e) {
    if (!e)
        throw new Error("Missing exp claim");
    const t = Math.floor(Date.now() / 1e3);
    if (e <= t)
        throw new Error("JWT has expired")
}
function RT(e) {
    switch (e) {
    case "RS256":
        return {
            name: "RSASSA-PKCS1-v1_5",
            hash: {
                name: "SHA-256"
            }
        };
    case "ES256":
        return {
            name: "ECDSA",
            namedCurve: "P-256",
            hash: {
                name: "SHA-256"
            }
        };
    default:
        throw new Error("Invalid alg claim")
    }
}
var AT = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
};
const ar = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
  , jT = [502, 503, 504];
async function Ap(e) {
    var t;
    if (!wT(e))
        throw new Hc(ar(e),0);
    if (jT.includes(e.status))
        throw new Hc(ar(e),e.status);
    let n;
    try {
        n = await e.json()
    } catch (s) {
        throw new f0(ar(s),s)
    }
    let r;
    const o = PT(e);
    if (o && o.getTime() >= d0["2024-01-01"].timestamp && typeof n == "object" && n && typeof n.code == "string" ? r = n.code : typeof n == "object" && n && typeof n.error_code == "string" && (r = n.error_code),
    r) {
        if (r === "weak_password")
            throw new Cp(ar(n),e.status,((t = n.weak_password) === null || t === void 0 ? void 0 : t.reasons) || []);
        if (r === "session_not_found")
            throw new bn
    } else if (typeof n == "object" && n && typeof n.weak_password == "object" && n.weak_password && Array.isArray(n.weak_password.reasons) && n.weak_password.reasons.length && n.weak_password.reasons.reduce( (s, i) => s && typeof i == "string", !0))
        throw new Cp(ar(n),e.status,n.weak_password.reasons);
    throw new iT(ar(n),e.status || 500,r)
}
const NT = (e, t, n, r) => {
    const o = {
        method: e,
        headers: (t == null ? void 0 : t.headers) || {}
    };
    return e === "GET" ? o : (o.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, t == null ? void 0 : t.headers),
    o.body = JSON.stringify(r),
    Object.assign(Object.assign({}, o), n))
}
;
async function J(e, t, n, r) {
    var o;
    const s = Object.assign({}, r == null ? void 0 : r.headers);
    s[Vc] || (s[Vc] = d0["2024-01-01"].name),
    r != null && r.jwt && (s.Authorization = `Bearer ${r.jwt}`);
    const i = (o = r == null ? void 0 : r.query) !== null && o !== void 0 ? o : {};
    r != null && r.redirectTo && (i.redirect_to = r.redirectTo);
    const a = Object.keys(i).length ? "?" + new URLSearchParams(i).toString() : ""
      , l = await OT(e, t, n + a, {
        headers: s,
        noResolveJson: r == null ? void 0 : r.noResolveJson
    }, {}, r == null ? void 0 : r.body);
    return r != null && r.xform ? r == null ? void 0 : r.xform(l) : {
        data: Object.assign({}, l),
        error: null
    }
}
async function OT(e, t, n, r, o, s) {
    const i = NT(t, r, o, s);
    let a;
    try {
        a = await e(n, Object.assign({}, i))
    } catch (l) {
        throw console.error(l),
        new Hc(ar(l),0)
    }
    if (a.ok || await Ap(a),
    r != null && r.noResolveJson)
        return a;
    try {
        return await a.json()
    } catch (l) {
        await Ap(l)
    }
}
function _n(e) {
    var t;
    let n = null;
    $T(e) && (n = Object.assign({}, e),
    e.expires_at || (n.expires_at = gT(e.expires_in)));
    const r = (t = e.user) !== null && t !== void 0 ? t : e;
    return {
        data: {
            session: n,
            user: r
        },
        error: null
    }
}
function jp(e) {
    const t = _n(e);
    return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce( (n, r) => n && typeof r == "string", !0) && (t.data.weak_password = e.weak_password),
    t
}
function Rn(e) {
    var t;
    return {
        data: {
            user: (t = e.user) !== null && t !== void 0 ? t : e
        },
        error: null
    }
}
function IT(e) {
    return {
        data: e,
        error: null
    }
}
function LT(e) {
    const {action_link: t, email_otp: n, hashed_token: r, redirect_to: o, verification_type: s} = e
      , i = AT(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"])
      , a = {
        action_link: t,
        email_otp: n,
        hashed_token: r,
        redirect_to: o,
        verification_type: s
    }
      , l = Object.assign({}, i);
    return {
        data: {
            properties: a,
            user: l
        },
        error: null
    }
}
function DT(e) {
    return e
}
function $T(e) {
    return e.access_token && e.refresh_token && e.expires_in
}
var MT = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
};
class FT {
    constructor({url: t="", headers: n={}, fetch: r}) {
        this.url = t,
        this.headers = n,
        this.fetch = p0(r),
        this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        }
    }
    async signOut(t, n="global") {
        try {
            return await J(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
                headers: this.headers,
                jwt: t,
                noResolveJson: !0
            }),
            {
                data: null,
                error: null
            }
        } catch (r) {
            if (q(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async inviteUserByEmail(t, n={}) {
        try {
            return await J(this.fetch, "POST", `${this.url}/invite`, {
                body: {
                    email: t,
                    data: n.data
                },
                headers: this.headers,
                redirectTo: n.redirectTo,
                xform: Rn
            })
        } catch (r) {
            if (q(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async generateLink(t) {
        try {
            const {options: n} = t
              , r = MT(t, ["options"])
              , o = Object.assign(Object.assign({}, r), n);
            return "newEmail"in r && (o.new_email = r == null ? void 0 : r.newEmail,
            delete o.newEmail),
            await J(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: o,
                headers: this.headers,
                xform: LT,
                redirectTo: n == null ? void 0 : n.redirectTo
            })
        } catch (n) {
            if (q(n))
                return {
                    data: {
                        properties: null,
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async createUser(t) {
        try {
            return await J(this.fetch, "POST", `${this.url}/admin/users`, {
                body: t,
                headers: this.headers,
                xform: Rn
            })
        } catch (n) {
            if (q(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async listUsers(t) {
        var n, r, o, s, i, a, l;
        try {
            const u = {
                nextPage: null,
                lastPage: 0,
                total: 0
            }
              , c = await J(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                    page: (r = (n = t == null ? void 0 : t.page) === null || n === void 0 ? void 0 : n.toString()) !== null && r !== void 0 ? r : "",
                    per_page: (s = (o = t == null ? void 0 : t.perPage) === null || o === void 0 ? void 0 : o.toString()) !== null && s !== void 0 ? s : ""
                },
                xform: DT
            });
            if (c.error)
                throw c.error;
            const f = await c.json()
              , d = (i = c.headers.get("x-total-count")) !== null && i !== void 0 ? i : 0
              , m = (l = (a = c.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
            return m.length > 0 && (m.forEach(y => {
                const h = parseInt(y.split(";")[0].split("=")[1].substring(0, 1))
                  , w = JSON.parse(y.split(";")[1].split("=")[1]);
                u[`${w}Page`] = h
            }
            ),
            u.total = parseInt(d)),
            {
                data: Object.assign(Object.assign({}, f), u),
                error: null
            }
        } catch (u) {
            if (q(u))
                return {
                    data: {
                        users: []
                    },
                    error: u
                };
            throw u
        }
    }
    async getUserById(t) {
        try {
            return await J(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                xform: Rn
            })
        } catch (n) {
            if (q(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async updateUserById(t, n) {
        try {
            return await J(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
                body: n,
                headers: this.headers,
                xform: Rn
            })
        } catch (r) {
            if (q(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async deleteUser(t, n=!1) {
        try {
            return await J(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: n
                },
                xform: Rn
            })
        } catch (r) {
            if (q(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async _listFactors(t) {
        try {
            const {data: n, error: r} = await J(this.fetch, "GET", `${this.url}/admin/users/${t.userId}/factors`, {
                headers: this.headers,
                xform: o => ({
                    data: {
                        factors: o
                    },
                    error: null
                })
            });
            return {
                data: n,
                error: r
            }
        } catch (n) {
            if (q(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _deleteFactor(t) {
        try {
            return {
                data: await J(this.fetch, "DELETE", `${this.url}/admin/users/${t.userId}/factors/${t.id}`, {
                    headers: this.headers
                }),
                error: null
            }
        } catch (n) {
            if (q(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
}
const zT = {
    getItem: e => _s() ? globalThis.localStorage.getItem(e) : null,
    setItem: (e, t) => {
        _s() && globalThis.localStorage.setItem(e, t)
    }
    ,
    removeItem: e => {
        _s() && globalThis.localStorage.removeItem(e)
    }
};
function Np(e={}) {
    return {
        getItem: t => e[t] || null,
        setItem: (t, n) => {
            e[t] = n
        }
        ,
        removeItem: t => {
            delete e[t]
        }
    }
}
function UT() {
    if (typeof globalThis != "object")
        try {
            Object.defineProperty(Object.prototype, "__magic__", {
                get: function() {
                    return this
                },
                configurable: !0
            }),
            __magic__.globalThis = __magic__,
            delete Object.prototype.__magic__
        } catch {
            typeof self < "u" && (self.globalThis = self)
        }
}
const $r = {
    debug: !!(globalThis && _s() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class g0 extends Error {
    constructor(t) {
        super(t),
        this.isAcquireTimeout = !0
    }
}
class BT extends g0 {
}
async function VT(e, t, n) {
    $r.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
    const r = new globalThis.AbortController;
    return t > 0 && setTimeout( () => {
        r.abort(),
        $r.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e)
    }
    , t),
    await Promise.resolve().then( () => globalThis.navigator.locks.request(e, t === 0 ? {
        mode: "exclusive",
        ifAvailable: !0
    } : {
        mode: "exclusive",
        signal: r.signal
    }, async o => {
        if (o) {
            $r.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, o.name);
            try {
                return await n()
            } finally {
                $r.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, o.name)
            }
        } else {
            if (t === 0)
                throw $r.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e),
                new BT(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
            if ($r.debug)
                try {
                    const s = await globalThis.navigator.locks.query();
                    console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(s, null, "  "))
                } catch (s) {
                    console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", s)
                }
            return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),
            await n()
        }
    }
    ))
}
UT();
const HT = {
    url: tT,
    storageKey: nT,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: rT,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1
};
async function Op(e, t, n) {
    return await n()
}
class Ks {
    constructor(t) {
        var n, r;
        this.memoryStorage = null,
        this.stateChangeEmitters = new Map,
        this.autoRefreshTicker = null,
        this.visibilityChangedCallback = null,
        this.refreshingDeferred = null,
        this.initializePromise = null,
        this.detectSessionInUrl = !0,
        this.hasCustomAuthorizationHeader = !1,
        this.suppressGetSessionWarning = !1,
        this.lockAcquired = !1,
        this.pendingInLock = [],
        this.broadcastChannel = null,
        this.logger = console.log,
        this.instanceID = Ks.nextInstanceID,
        Ks.nextInstanceID += 1,
        this.instanceID > 0 && Mt() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        const o = Object.assign(Object.assign({}, HT), t);
        if (this.logDebugMessages = !!o.debug,
        typeof o.debug == "function" && (this.logger = o.debug),
        this.persistSession = o.persistSession,
        this.storageKey = o.storageKey,
        this.autoRefreshToken = o.autoRefreshToken,
        this.admin = new FT({
            url: o.url,
            headers: o.headers,
            fetch: o.fetch
        }),
        this.url = o.url,
        this.headers = o.headers,
        this.fetch = p0(o.fetch),
        this.lock = o.lock || Op,
        this.detectSessionInUrl = o.detectSessionInUrl,
        this.flowType = o.flowType,
        this.hasCustomAuthorizationHeader = o.hasCustomAuthorizationHeader,
        o.lock ? this.lock = o.lock : Mt() && (!((n = globalThis == null ? void 0 : globalThis.navigator) === null || n === void 0) && n.locks) ? this.lock = VT : this.lock = Op,
        this.jwks = {
            keys: []
        },
        this.jwks_cached_at = Number.MIN_SAFE_INTEGER,
        this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
        },
        this.persistSession ? o.storage ? this.storage = o.storage : _s() ? this.storage = zT : (this.memoryStorage = {},
        this.storage = Np(this.memoryStorage)) : (this.memoryStorage = {},
        this.storage = Np(this.memoryStorage)),
        Mt() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
            } catch (s) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", s)
            }
            (r = this.broadcastChannel) === null || r === void 0 || r.addEventListener("message", async s => {
                this._debug("received broadcast notification from other tab or client", s),
                await this._notifyAllSubscribers(s.data.event, s.data.session, !1)
            }
            )
        }
        this.initialize()
    }
    _debug(...t) {
        return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${c0}) ${new Date().toISOString()}`, ...t),
        this
    }
    async initialize() {
        return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(),
        await this.initializePromise)
    }
    async _initialize() {
        var t;
        try {
            const n = yT(window.location.href);
            let r = "none";
            if (this._isImplicitGrantCallback(n) ? r = "implicit" : await this._isPKCECallback(n) && (r = "pkce"),
            Mt() && this.detectSessionInUrl && r !== "none") {
                const {data: o, error: s} = await this._getSessionFromURL(n, r);
                if (s) {
                    if (this._debug("#_initialize()", "error detecting session from URL", s),
                    uT(s)) {
                        const l = (t = s.details) === null || t === void 0 ? void 0 : t.code;
                        if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
                            return {
                                error: s
                            }
                    }
                    return await this._removeSession(),
                    {
                        error: s
                    }
                }
                const {session: i, redirectType: a} = o;
                return this._debug("#_initialize()", "detected session in URL", i, "redirect type", a),
                await this._saveSession(i),
                setTimeout(async () => {
                    a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i) : await this._notifyAllSubscribers("SIGNED_IN", i)
                }
                , 0),
                {
                    error: null
                }
            }
            return await this._recoverAndRefresh(),
            {
                error: null
            }
        } catch (n) {
            return q(n) ? {
                error: n
            } : {
                error: new f0("Unexpected error during initialization",n)
            }
        } finally {
            await this._handleVisibilityChange(),
            this._debug("#_initialize()", "end")
        }
    }
    async signInAnonymously(t) {
        var n, r, o;
        try {
            const s = await J(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                    data: (r = (n = t == null ? void 0 : t.options) === null || n === void 0 ? void 0 : n.data) !== null && r !== void 0 ? r : {},
                    gotrue_meta_security: {
                        captcha_token: (o = t == null ? void 0 : t.options) === null || o === void 0 ? void 0 : o.captchaToken
                    }
                },
                xform: _n
            })
              , {data: i, error: a} = s;
            if (a || !i)
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                };
            const l = i.session
              , u = i.user;
            return i.session && (await this._saveSession(i.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
            {
                data: {
                    user: u,
                    session: l
                },
                error: null
            }
        } catch (s) {
            if (q(s))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                };
            throw s
        }
    }
    async signUp(t) {
        var n, r, o;
        try {
            let s;
            if ("email"in t) {
                const {email: c, password: f, options: d} = t;
                let m = null
                  , y = null;
                this.flowType === "pkce" && ([m,y] = await Dr(this.storage, this.storageKey)),
                s = await J(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: d == null ? void 0 : d.emailRedirectTo,
                    body: {
                        email: c,
                        password: f,
                        data: (n = d == null ? void 0 : d.data) !== null && n !== void 0 ? n : {},
                        gotrue_meta_security: {
                            captcha_token: d == null ? void 0 : d.captchaToken
                        },
                        code_challenge: m,
                        code_challenge_method: y
                    },
                    xform: _n
                })
            } else if ("phone"in t) {
                const {phone: c, password: f, options: d} = t;
                s = await J(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: c,
                        password: f,
                        data: (r = d == null ? void 0 : d.data) !== null && r !== void 0 ? r : {},
                        channel: (o = d == null ? void 0 : d.channel) !== null && o !== void 0 ? o : "sms",
                        gotrue_meta_security: {
                            captcha_token: d == null ? void 0 : d.captchaToken
                        }
                    },
                    xform: _n
                })
            } else
                throw new Ii("You must provide either an email or phone number and a password");
            const {data: i, error: a} = s;
            if (a || !i)
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                };
            const l = i.session
              , u = i.user;
            return i.session && (await this._saveSession(i.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
            {
                data: {
                    user: u,
                    session: l
                },
                error: null
            }
        } catch (s) {
            if (q(s))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                };
            throw s
        }
    }
    async signInWithPassword(t) {
        try {
            let n;
            if ("email"in t) {
                const {email: s, password: i, options: a} = t;
                n = await J(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: s,
                        password: i,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: jp
                })
            } else if ("phone"in t) {
                const {phone: s, password: i, options: a} = t;
                n = await J(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: s,
                        password: i,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: jp
                })
            } else
                throw new Ii("You must provide either an email or phone number and a password");
            const {data: r, error: o} = n;
            return o ? {
                data: {
                    user: null,
                    session: null
                },
                error: o
            } : !r || !r.session || !r.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new vu
            } : (r.session && (await this._saveSession(r.session),
            await this._notifyAllSubscribers("SIGNED_IN", r.session)),
            {
                data: Object.assign({
                    user: r.user,
                    session: r.session
                }, r.weak_password ? {
                    weakPassword: r.weak_password
                } : null),
                error: o
            })
        } catch (n) {
            if (q(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async signInWithOAuth(t) {
        var n, r, o, s;
        return await this._handleProviderSignIn(t.provider, {
            redirectTo: (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo,
            scopes: (r = t.options) === null || r === void 0 ? void 0 : r.scopes,
            queryParams: (o = t.options) === null || o === void 0 ? void 0 : o.queryParams,
            skipBrowserRedirect: (s = t.options) === null || s === void 0 ? void 0 : s.skipBrowserRedirect
        })
    }
    async exchangeCodeForSession(t) {
        return await this.initializePromise,
        this._acquireLock(-1, async () => this._exchangeCodeForSession(t))
    }
    async _exchangeCodeForSession(t) {
        const n = await Di(this.storage, `${this.storageKey}-code-verifier`)
          , [r,o] = (n ?? "").split("/");
        try {
            const {data: s, error: i} = await J(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: {
                    auth_code: t,
                    code_verifier: r
                },
                xform: _n
            });
            if (await $i(this.storage, `${this.storageKey}-code-verifier`),
            i)
                throw i;
            return !s || !s.session || !s.user ? {
                data: {
                    user: null,
                    session: null,
                    redirectType: null
                },
                error: new vu
            } : (s.session && (await this._saveSession(s.session),
            await this._notifyAllSubscribers("SIGNED_IN", s.session)),
            {
                data: Object.assign(Object.assign({}, s), {
                    redirectType: o ?? null
                }),
                error: i
            })
        } catch (s) {
            if (q(s))
                return {
                    data: {
                        user: null,
                        session: null,
                        redirectType: null
                    },
                    error: s
                };
            throw s
        }
    }
    async signInWithIdToken(t) {
        try {
            const {options: n, provider: r, token: o, access_token: s, nonce: i} = t
              , a = await J(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider: r,
                    id_token: o,
                    access_token: s,
                    nonce: i,
                    gotrue_meta_security: {
                        captcha_token: n == null ? void 0 : n.captchaToken
                    }
                },
                xform: _n
            })
              , {data: l, error: u} = a;
            return u ? {
                data: {
                    user: null,
                    session: null
                },
                error: u
            } : !l || !l.session || !l.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new vu
            } : (l.session && (await this._saveSession(l.session),
            await this._notifyAllSubscribers("SIGNED_IN", l.session)),
            {
                data: l,
                error: u
            })
        } catch (n) {
            if (q(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async signInWithOtp(t) {
        var n, r, o, s, i;
        try {
            if ("email"in t) {
                const {email: a, options: l} = t;
                let u = null
                  , c = null;
                this.flowType === "pkce" && ([u,c] = await Dr(this.storage, this.storageKey));
                const {error: f} = await J(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email: a,
                        data: (n = l == null ? void 0 : l.data) !== null && n !== void 0 ? n : {},
                        create_user: (r = l == null ? void 0 : l.shouldCreateUser) !== null && r !== void 0 ? r : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        code_challenge: u,
                        code_challenge_method: c
                    },
                    redirectTo: l == null ? void 0 : l.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: f
                }
            }
            if ("phone"in t) {
                const {phone: a, options: l} = t
                  , {data: u, error: c} = await J(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone: a,
                        data: (o = l == null ? void 0 : l.data) !== null && o !== void 0 ? o : {},
                        create_user: (s = l == null ? void 0 : l.shouldCreateUser) !== null && s !== void 0 ? s : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        channel: (i = l == null ? void 0 : l.channel) !== null && i !== void 0 ? i : "sms"
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: u == null ? void 0 : u.message_id
                    },
                    error: c
                }
            }
            throw new Ii("You must provide either an email or phone number.")
        } catch (a) {
            if (q(a))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                };
            throw a
        }
    }
    async verifyOtp(t) {
        var n, r;
        try {
            let o, s;
            "options"in t && (o = (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo,
            s = (r = t.options) === null || r === void 0 ? void 0 : r.captchaToken);
            const {data: i, error: a} = await J(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, t), {
                    gotrue_meta_security: {
                        captcha_token: s
                    }
                }),
                redirectTo: o,
                xform: _n
            });
            if (a)
                throw a;
            if (!i)
                throw new Error("An error occurred on token verification.");
            const l = i.session
              , u = i.user;
            return l != null && l.access_token && (await this._saveSession(l),
            await this._notifyAllSubscribers(t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)),
            {
                data: {
                    user: u,
                    session: l
                },
                error: null
            }
        } catch (o) {
            if (q(o))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: o
                };
            throw o
        }
    }
    async signInWithSSO(t) {
        var n, r, o;
        try {
            let s = null
              , i = null;
            return this.flowType === "pkce" && ([s,i] = await Dr(this.storage, this.storageKey)),
            await J(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId"in t ? {
                    provider_id: t.providerId
                } : null), "domain"in t ? {
                    domain: t.domain
                } : null), {
                    redirect_to: (r = (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo) !== null && r !== void 0 ? r : void 0
                }), !((o = t == null ? void 0 : t.options) === null || o === void 0) && o.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: t.options.captchaToken
                    }
                } : null), {
                    skip_http_redirect: !0,
                    code_challenge: s,
                    code_challenge_method: i
                }),
                headers: this.headers,
                xform: IT
            })
        } catch (s) {
            if (q(s))
                return {
                    data: null,
                    error: s
                };
            throw s
        }
    }
    async reauthenticate() {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._reauthenticate())
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async t => {
                const {data: {session: n}, error: r} = t;
                if (r)
                    throw r;
                if (!n)
                    throw new bn;
                const {error: o} = await J(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: n.access_token
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: o
                }
            }
            )
        } catch (t) {
            if (q(t))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: t
                };
            throw t
        }
    }
    async resend(t) {
        try {
            const n = `${this.url}/resend`;
            if ("email"in t) {
                const {email: r, type: o, options: s} = t
                  , {error: i} = await J(this.fetch, "POST", n, {
                    headers: this.headers,
                    body: {
                        email: r,
                        type: o,
                        gotrue_meta_security: {
                            captcha_token: s == null ? void 0 : s.captchaToken
                        }
                    },
                    redirectTo: s == null ? void 0 : s.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                }
            } else if ("phone"in t) {
                const {phone: r, type: o, options: s} = t
                  , {data: i, error: a} = await J(this.fetch, "POST", n, {
                    headers: this.headers,
                    body: {
                        phone: r,
                        type: o,
                        gotrue_meta_security: {
                            captcha_token: s == null ? void 0 : s.captchaToken
                        }
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: i == null ? void 0 : i.message_id
                    },
                    error: a
                }
            }
            throw new Ii("You must provide either an email or phone number and a type")
        } catch (n) {
            if (q(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async getSession() {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => this._useSession(async n => n))
    }
    async _acquireLock(t, n) {
        this._debug("#_acquireLock", "begin", t);
        try {
            if (this.lockAcquired) {
                const r = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve()
                  , o = (async () => (await r,
                await n()))();
                return this.pendingInLock.push((async () => {
                    try {
                        await o
                    } catch {}
                }
                )()),
                o
            }
            return await this.lock(`lock:${this.storageKey}`, t, async () => {
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = !0;
                    const r = n();
                    for (this.pendingInLock.push((async () => {
                        try {
                            await r
                        } catch {}
                    }
                    )()),
                    await r; this.pendingInLock.length; ) {
                        const o = [...this.pendingInLock];
                        await Promise.all(o),
                        this.pendingInLock.splice(0, o.length)
                    }
                    return await r
                } finally {
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey),
                    this.lockAcquired = !1
                }
            }
            )
        } finally {
            this._debug("#_acquireLock", "end")
        }
    }
    async _useSession(t) {
        this._debug("#_useSession", "begin");
        try {
            const n = await this.__loadSession();
            return await t(n)
        } finally {
            this._debug("#_useSession", "end")
        }
    }
    async __loadSession() {
        this._debug("#__loadSession()", "begin"),
        this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
        try {
            let t = null;
            const n = await Di(this.storage, this.storageKey);
            if (this._debug("#getSession()", "session from storage", n),
            n !== null && (this._isValidSession(n) ? t = n : (this._debug("#getSession()", "session from storage is not valid"),
            await this._removeSession())),
            !t)
                return {
                    data: {
                        session: null
                    },
                    error: null
                };
            const r = t.expires_at ? t.expires_at * 1e3 - Date.now() < gu : !1;
            if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", t.expires_at),
            !r) {
                if (this.storage.isServer) {
                    let i = this.suppressGetSessionWarning;
                    t = new Proxy(t,{
                        get: (l, u, c) => (!i && u === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),
                        i = !0,
                        this.suppressGetSessionWarning = !0),
                        Reflect.get(l, u, c))
                    })
                }
                return {
                    data: {
                        session: t
                    },
                    error: null
                }
            }
            const {session: o, error: s} = await this._callRefreshToken(t.refresh_token);
            return s ? {
                data: {
                    session: null
                },
                error: s
            } : {
                data: {
                    session: o
                },
                error: null
            }
        } finally {
            this._debug("#__loadSession()", "end")
        }
    }
    async getUser(t) {
        return t ? await this._getUser(t) : (await this.initializePromise,
        await this._acquireLock(-1, async () => await this._getUser()))
    }
    async _getUser(t) {
        try {
            return t ? await J(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: t,
                xform: Rn
            }) : await this._useSession(async n => {
                var r, o, s;
                const {data: i, error: a} = n;
                if (a)
                    throw a;
                return !(!((r = i.session) === null || r === void 0) && r.access_token) && !this.hasCustomAuthorizationHeader ? {
                    data: {
                        user: null
                    },
                    error: new bn
                } : await J(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (s = (o = i.session) === null || o === void 0 ? void 0 : o.access_token) !== null && s !== void 0 ? s : void 0,
                    xform: Rn
                })
            }
            )
        } catch (n) {
            if (q(n))
                return lT(n) && (await this._removeSession(),
                await $i(this.storage, `${this.storageKey}-code-verifier`)),
                {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async updateUser(t, n={}) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._updateUser(t, n))
    }
    async _updateUser(t, n={}) {
        try {
            return await this._useSession(async r => {
                const {data: o, error: s} = r;
                if (s)
                    throw s;
                if (!o.session)
                    throw new bn;
                const i = o.session;
                let a = null
                  , l = null;
                this.flowType === "pkce" && t.email != null && ([a,l] = await Dr(this.storage, this.storageKey));
                const {data: u, error: c} = await J(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: n == null ? void 0 : n.emailRedirectTo,
                    body: Object.assign(Object.assign({}, t), {
                        code_challenge: a,
                        code_challenge_method: l
                    }),
                    jwt: i.access_token,
                    xform: Rn
                });
                if (c)
                    throw c;
                return i.user = u.user,
                await this._saveSession(i),
                await this._notifyAllSubscribers("USER_UPDATED", i),
                {
                    data: {
                        user: i.user
                    },
                    error: null
                }
            }
            )
        } catch (r) {
            if (q(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async setSession(t) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._setSession(t))
    }
    async _setSession(t) {
        try {
            if (!t.access_token || !t.refresh_token)
                throw new bn;
            const n = Date.now() / 1e3;
            let r = n
              , o = !0
              , s = null;
            const {payload: i} = wu(t.access_token);
            if (i.exp && (r = i.exp,
            o = r <= n),
            o) {
                const {session: a, error: l} = await this._callRefreshToken(t.refresh_token);
                if (l)
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: l
                    };
                if (!a)
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: null
                    };
                s = a
            } else {
                const {data: a, error: l} = await this._getUser(t.access_token);
                if (l)
                    throw l;
                s = {
                    access_token: t.access_token,
                    refresh_token: t.refresh_token,
                    user: a.user,
                    token_type: "bearer",
                    expires_in: r - n,
                    expires_at: r
                },
                await this._saveSession(s),
                await this._notifyAllSubscribers("SIGNED_IN", s)
            }
            return {
                data: {
                    user: s.user,
                    session: s
                },
                error: null
            }
        } catch (n) {
            if (q(n))
                return {
                    data: {
                        session: null,
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async refreshSession(t) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._refreshSession(t))
    }
    async _refreshSession(t) {
        try {
            return await this._useSession(async n => {
                var r;
                if (!t) {
                    const {data: i, error: a} = n;
                    if (a)
                        throw a;
                    t = (r = i.session) !== null && r !== void 0 ? r : void 0
                }
                if (!(t != null && t.refresh_token))
                    throw new bn;
                const {session: o, error: s} = await this._callRefreshToken(t.refresh_token);
                return s ? {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                } : o ? {
                    data: {
                        user: o.user,
                        session: o
                    },
                    error: null
                } : {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                }
            }
            )
        } catch (n) {
            if (q(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async _getSessionFromURL(t, n) {
        try {
            if (!Mt())
                throw new Li("No browser detected.");
            if (t.error || t.error_description || t.error_code)
                throw new Li(t.error_description || "Error in URL with unspecified error_description",{
                    error: t.error || "unspecified_error",
                    code: t.error_code || "unspecified_code"
                });
            switch (n) {
            case "implicit":
                if (this.flowType === "pkce")
                    throw new kp("Not a valid PKCE flow url.");
                break;
            case "pkce":
                if (this.flowType === "implicit")
                    throw new Li("Not a valid implicit grant flow url.");
                break;
            default:
            }
            if (n === "pkce") {
                if (this._debug("#_initialize()", "begin", "is PKCE flow", !0),
                !t.code)
                    throw new kp("No code detected.");
                const {data: v, error: x} = await this._exchangeCodeForSession(t.code);
                if (x)
                    throw x;
                const _ = new URL(window.location.href);
                return _.searchParams.delete("code"),
                window.history.replaceState(window.history.state, "", _.toString()),
                {
                    data: {
                        session: v.session,
                        redirectType: null
                    },
                    error: null
                }
            }
            const {provider_token: r, provider_refresh_token: o, access_token: s, refresh_token: i, expires_in: a, expires_at: l, token_type: u} = t;
            if (!s || !a || !i || !u)
                throw new Li("No session defined in URL");
            const c = Math.round(Date.now() / 1e3)
              , f = parseInt(a);
            let d = c + f;
            l && (d = parseInt(l));
            const m = d - c;
            m * 1e3 <= Ur && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${m}s, should have been closer to ${f}s`);
            const y = d - f;
            c - y >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", y, d, c) : c - y < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", y, d, c);
            const {data: h, error: w} = await this._getUser(s);
            if (w)
                throw w;
            const g = {
                provider_token: r,
                provider_refresh_token: o,
                access_token: s,
                expires_in: f,
                expires_at: d,
                refresh_token: i,
                token_type: u,
                user: h.user
            };
            return window.location.hash = "",
            this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
            {
                data: {
                    session: g,
                    redirectType: t.type
                },
                error: null
            }
        } catch (r) {
            if (q(r))
                return {
                    data: {
                        session: null,
                        redirectType: null
                    },
                    error: r
                };
            throw r
        }
    }
    _isImplicitGrantCallback(t) {
        return !!(t.access_token || t.error_description)
    }
    async _isPKCECallback(t) {
        const n = await Di(this.storage, `${this.storageKey}-code-verifier`);
        return !!(t.code && n)
    }
    async signOut(t={
        scope: "global"
    }) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._signOut(t))
    }
    async _signOut({scope: t}={
        scope: "global"
    }) {
        return await this._useSession(async n => {
            var r;
            const {data: o, error: s} = n;
            if (s)
                return {
                    error: s
                };
            const i = (r = o.session) === null || r === void 0 ? void 0 : r.access_token;
            if (i) {
                const {error: a} = await this.admin.signOut(i, t);
                if (a && !(aT(a) && (a.status === 404 || a.status === 401 || a.status === 403)))
                    return {
                        error: a
                    }
            }
            return t !== "others" && (await this._removeSession(),
            await $i(this.storage, `${this.storageKey}-code-verifier`)),
            {
                error: null
            }
        }
        )
    }
    onAuthStateChange(t) {
        const n = vT()
          , r = {
            id: n,
            callback: t,
            unsubscribe: () => {
                this._debug("#unsubscribe()", "state change callback with id removed", n),
                this.stateChangeEmitters.delete(n)
            }
        };
        return this._debug("#onAuthStateChange()", "registered callback with id", n),
        this.stateChangeEmitters.set(n, r),
        (async () => (await this.initializePromise,
        await this._acquireLock(-1, async () => {
            this._emitInitialSession(n)
        }
        )))(),
        {
            data: {
                subscription: r
            }
        }
    }
    async _emitInitialSession(t) {
        return await this._useSession(async n => {
            var r, o;
            try {
                const {data: {session: s}, error: i} = n;
                if (i)
                    throw i;
                await ((r = this.stateChangeEmitters.get(t)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", s)),
                this._debug("INITIAL_SESSION", "callback id", t, "session", s)
            } catch (s) {
                await ((o = this.stateChangeEmitters.get(t)) === null || o === void 0 ? void 0 : o.callback("INITIAL_SESSION", null)),
                this._debug("INITIAL_SESSION", "callback id", t, "error", s),
                console.error(s)
            }
        }
        )
    }
    async resetPasswordForEmail(t, n={}) {
        let r = null
          , o = null;
        this.flowType === "pkce" && ([r,o] = await Dr(this.storage, this.storageKey, !0));
        try {
            return await J(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email: t,
                    code_challenge: r,
                    code_challenge_method: o,
                    gotrue_meta_security: {
                        captcha_token: n.captchaToken
                    }
                },
                headers: this.headers,
                redirectTo: n.redirectTo
            })
        } catch (s) {
            if (q(s))
                return {
                    data: null,
                    error: s
                };
            throw s
        }
    }
    async getUserIdentities() {
        var t;
        try {
            const {data: n, error: r} = await this.getUser();
            if (r)
                throw r;
            return {
                data: {
                    identities: (t = n.user.identities) !== null && t !== void 0 ? t : []
                },
                error: null
            }
        } catch (n) {
            if (q(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async linkIdentity(t) {
        var n;
        try {
            const {data: r, error: o} = await this._useSession(async s => {
                var i, a, l, u, c;
                const {data: f, error: d} = s;
                if (d)
                    throw d;
                const m = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, t.provider, {
                    redirectTo: (i = t.options) === null || i === void 0 ? void 0 : i.redirectTo,
                    scopes: (a = t.options) === null || a === void 0 ? void 0 : a.scopes,
                    queryParams: (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
                    skipBrowserRedirect: !0
                });
                return await J(this.fetch, "GET", m, {
                    headers: this.headers,
                    jwt: (c = (u = f.session) === null || u === void 0 ? void 0 : u.access_token) !== null && c !== void 0 ? c : void 0
                })
            }
            );
            if (o)
                throw o;
            return Mt() && !(!((n = t.options) === null || n === void 0) && n.skipBrowserRedirect) && window.location.assign(r == null ? void 0 : r.url),
            {
                data: {
                    provider: t.provider,
                    url: r == null ? void 0 : r.url
                },
                error: null
            }
        } catch (r) {
            if (q(r))
                return {
                    data: {
                        provider: t.provider,
                        url: null
                    },
                    error: r
                };
            throw r
        }
    }
    async unlinkIdentity(t) {
        try {
            return await this._useSession(async n => {
                var r, o;
                const {data: s, error: i} = n;
                if (i)
                    throw i;
                return await J(this.fetch, "DELETE", `${this.url}/user/identities/${t.identity_id}`, {
                    headers: this.headers,
                    jwt: (o = (r = s.session) === null || r === void 0 ? void 0 : r.access_token) !== null && o !== void 0 ? o : void 0
                })
            }
            )
        } catch (n) {
            if (q(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _refreshAccessToken(t) {
        const n = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
        this._debug(n, "begin");
        try {
            const r = Date.now();
            return await bT(async o => (o > 0 && await xT(200 * Math.pow(2, o - 1)),
            this._debug(n, "refreshing attempt", o),
            await J(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                body: {
                    refresh_token: t
                },
                headers: this.headers,
                xform: _n
            })), (o, s) => {
                const i = 200 * Math.pow(2, o);
                return s && yu(s) && Date.now() + i - r < Ur
            }
            )
        } catch (r) {
            if (this._debug(n, "error", r),
            q(r))
                return {
                    data: {
                        session: null,
                        user: null
                    },
                    error: r
                };
            throw r
        } finally {
            this._debug(n, "end")
        }
    }
    _isValidSession(t) {
        return typeof t == "object" && t !== null && "access_token"in t && "refresh_token"in t && "expires_at"in t
    }
    async _handleProviderSignIn(t, n) {
        const r = await this._getUrlForProvider(`${this.url}/authorize`, t, {
            redirectTo: n.redirectTo,
            scopes: n.scopes,
            queryParams: n.queryParams
        });
        return this._debug("#_handleProviderSignIn()", "provider", t, "options", n, "url", r),
        Mt() && !n.skipBrowserRedirect && window.location.assign(r),
        {
            data: {
                provider: t,
                url: r
            },
            error: null
        }
    }
    async _recoverAndRefresh() {
        var t;
        const n = "#_recoverAndRefresh()";
        this._debug(n, "begin");
        try {
            const r = await Di(this.storage, this.storageKey);
            if (this._debug(n, "session from storage", r),
            !this._isValidSession(r)) {
                this._debug(n, "session is not valid"),
                r !== null && await this._removeSession();
                return
            }
            const o = ((t = r.expires_at) !== null && t !== void 0 ? t : 1 / 0) * 1e3 - Date.now() < gu;
            if (this._debug(n, `session has${o ? "" : " not"} expired with margin of ${gu}s`),
            o) {
                if (this.autoRefreshToken && r.refresh_token) {
                    const {error: s} = await this._callRefreshToken(r.refresh_token);
                    s && (console.error(s),
                    yu(s) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", s),
                    await this._removeSession()))
                }
            } else
                await this._notifyAllSubscribers("SIGNED_IN", r)
        } catch (r) {
            this._debug(n, "error", r),
            console.error(r);
            return
        } finally {
            this._debug(n, "end")
        }
    }
    async _callRefreshToken(t) {
        var n, r;
        if (!t)
            throw new bn;
        if (this.refreshingDeferred)
            return this.refreshingDeferred.promise;
        const o = `#_callRefreshToken(${t.substring(0, 5)}...)`;
        this._debug(o, "begin");
        try {
            this.refreshingDeferred = new _l;
            const {data: s, error: i} = await this._refreshAccessToken(t);
            if (i)
                throw i;
            if (!s.session)
                throw new bn;
            await this._saveSession(s.session),
            await this._notifyAllSubscribers("TOKEN_REFRESHED", s.session);
            const a = {
                session: s.session,
                error: null
            };
            return this.refreshingDeferred.resolve(a),
            a
        } catch (s) {
            if (this._debug(o, "error", s),
            q(s)) {
                const i = {
                    session: null,
                    error: s
                };
                return yu(s) || await this._removeSession(),
                (n = this.refreshingDeferred) === null || n === void 0 || n.resolve(i),
                i
            }
            throw (r = this.refreshingDeferred) === null || r === void 0 || r.reject(s),
            s
        } finally {
            this.refreshingDeferred = null,
            this._debug(o, "end")
        }
    }
    async _notifyAllSubscribers(t, n, r=!0) {
        const o = `#_notifyAllSubscribers(${t})`;
        this._debug(o, "begin", n, `broadcast = ${r}`);
        try {
            this.broadcastChannel && r && this.broadcastChannel.postMessage({
                event: t,
                session: n
            });
            const s = []
              , i = Array.from(this.stateChangeEmitters.values()).map(async a => {
                try {
                    await a.callback(t, n)
                } catch (l) {
                    s.push(l)
                }
            }
            );
            if (await Promise.all(i),
            s.length > 0) {
                for (let a = 0; a < s.length; a += 1)
                    console.error(s[a]);
                throw s[0]
            }
        } finally {
            this._debug(o, "end")
        }
    }
    async _saveSession(t) {
        this._debug("#_saveSession()", t),
        this.suppressGetSessionWarning = !0,
        await m0(this.storage, this.storageKey, t)
    }
    async _removeSession() {
        this._debug("#_removeSession()"),
        await $i(this.storage, this.storageKey),
        await this._notifyAllSubscribers("SIGNED_OUT", null)
    }
    _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const t = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            t && Mt() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", t)
        } catch (n) {
            console.error("removing visibilitychange callback failed", n)
        }
    }
    async _startAutoRefresh() {
        await this._stopAutoRefresh(),
        this._debug("#_startAutoRefresh()");
        const t = setInterval( () => this._autoRefreshTokenTick(), Ur);
        this.autoRefreshTicker = t,
        t && typeof t == "object" && typeof t.unref == "function" ? t.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(t),
        setTimeout(async () => {
            await this.initializePromise,
            await this._autoRefreshTokenTick()
        }
        , 0)
    }
    async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        const t = this.autoRefreshTicker;
        this.autoRefreshTicker = null,
        t && clearInterval(t)
    }
    async startAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._startAutoRefresh()
    }
    async stopAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._stopAutoRefresh()
    }
    async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async () => {
                try {
                    const t = Date.now();
                    try {
                        return await this._useSession(async n => {
                            const {data: {session: r}} = n;
                            if (!r || !r.refresh_token || !r.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return
                            }
                            const o = Math.floor((r.expires_at * 1e3 - t) / Ur);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${o} ticks, a tick lasts ${Ur}ms, refresh threshold is ${Bc} ticks`),
                            o <= Bc && await this._callRefreshToken(r.refresh_token)
                        }
                        )
                    } catch (n) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", n)
                    }
                } finally {
                    this._debug("#_autoRefreshTokenTick()", "end")
                }
            }
            )
        } catch (t) {
            if (t.isAcquireTimeout || t instanceof g0)
                this._debug("auto refresh token tick lock not available");
            else
                throw t
        }
    }
    async _handleVisibilityChange() {
        if (this._debug("#_handleVisibilityChange()"),
        !Mt() || !(window != null && window.addEventListener))
            return this.autoRefreshToken && this.startAutoRefresh(),
            !1;
        try {
            this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1),
            window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback),
            await this._onVisibilityChanged(!0)
        } catch (t) {
            console.error("_handleVisibilityChange", t)
        }
    }
    async _onVisibilityChanged(t) {
        const n = `#_onVisibilityChanged(${t})`;
        this._debug(n, "visibilityState", document.visibilityState),
        document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(),
        t || (await this.initializePromise,
        await this._acquireLock(-1, async () => {
            if (document.visibilityState !== "visible") {
                this._debug(n, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                return
            }
            await this._recoverAndRefresh()
        }
        ))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh()
    }
    async _getUrlForProvider(t, n, r) {
        const o = [`provider=${encodeURIComponent(n)}`];
        if (r != null && r.redirectTo && o.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
        r != null && r.scopes && o.push(`scopes=${encodeURIComponent(r.scopes)}`),
        this.flowType === "pkce") {
            const [s,i] = await Dr(this.storage, this.storageKey)
              , a = new URLSearchParams({
                code_challenge: `${encodeURIComponent(s)}`,
                code_challenge_method: `${encodeURIComponent(i)}`
            });
            o.push(a.toString())
        }
        if (r != null && r.queryParams) {
            const s = new URLSearchParams(r.queryParams);
            o.push(s.toString())
        }
        return r != null && r.skipBrowserRedirect && o.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
        `${t}?${o.join("&")}`
    }
    async _unenroll(t) {
        try {
            return await this._useSession(async n => {
                var r;
                const {data: o, error: s} = n;
                return s ? {
                    data: null,
                    error: s
                } : await J(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
                    headers: this.headers,
                    jwt: (r = o == null ? void 0 : o.session) === null || r === void 0 ? void 0 : r.access_token
                })
            }
            )
        } catch (n) {
            if (q(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _enroll(t) {
        try {
            return await this._useSession(async n => {
                var r, o;
                const {data: s, error: i} = n;
                if (i)
                    return {
                        data: null,
                        error: i
                    };
                const a = Object.assign({
                    friendly_name: t.friendlyName,
                    factor_type: t.factorType
                }, t.factorType === "phone" ? {
                    phone: t.phone
                } : {
                    issuer: t.issuer
                })
                  , {data: l, error: u} = await J(this.fetch, "POST", `${this.url}/factors`, {
                    body: a,
                    headers: this.headers,
                    jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
                });
                return u ? {
                    data: null,
                    error: u
                } : (t.factorType === "totp" && (!((o = l == null ? void 0 : l.totp) === null || o === void 0) && o.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
                {
                    data: l,
                    error: null
                })
            }
            )
        } catch (n) {
            if (q(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _verify(t) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async n => {
                    var r;
                    const {data: o, error: s} = n;
                    if (s)
                        return {
                            data: null,
                            error: s
                        };
                    const {data: i, error: a} = await J(this.fetch, "POST", `${this.url}/factors/${t.factorId}/verify`, {
                        body: {
                            code: t.code,
                            challenge_id: t.challengeId
                        },
                        headers: this.headers,
                        jwt: (r = o == null ? void 0 : o.session) === null || r === void 0 ? void 0 : r.access_token
                    });
                    return a ? {
                        data: null,
                        error: a
                    } : (await this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1e3) + i.expires_in
                    }, i)),
                    await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", i),
                    {
                        data: i,
                        error: a
                    })
                }
                )
            } catch (n) {
                if (q(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        }
        )
    }
    async _challenge(t) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async n => {
                    var r;
                    const {data: o, error: s} = n;
                    return s ? {
                        data: null,
                        error: s
                    } : await J(this.fetch, "POST", `${this.url}/factors/${t.factorId}/challenge`, {
                        body: {
                            channel: t.channel
                        },
                        headers: this.headers,
                        jwt: (r = o == null ? void 0 : o.session) === null || r === void 0 ? void 0 : r.access_token
                    })
                }
                )
            } catch (n) {
                if (q(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        }
        )
    }
    async _challengeAndVerify(t) {
        const {data: n, error: r} = await this._challenge({
            factorId: t.factorId
        });
        return r ? {
            data: null,
            error: r
        } : await this._verify({
            factorId: t.factorId,
            challengeId: n.id,
            code: t.code
        })
    }
    async _listFactors() {
        const {data: {user: t}, error: n} = await this.getUser();
        if (n)
            return {
                data: null,
                error: n
            };
        const r = (t == null ? void 0 : t.factors) || []
          , o = r.filter(i => i.factor_type === "totp" && i.status === "verified")
          , s = r.filter(i => i.factor_type === "phone" && i.status === "verified");
        return {
            data: {
                all: r,
                totp: o,
                phone: s
            },
            error: null
        }
    }
    async _getAuthenticatorAssuranceLevel() {
        return this._acquireLock(-1, async () => await this._useSession(async t => {
            var n, r;
            const {data: {session: o}, error: s} = t;
            if (s)
                return {
                    data: null,
                    error: s
                };
            if (!o)
                return {
                    data: {
                        currentLevel: null,
                        nextLevel: null,
                        currentAuthenticationMethods: []
                    },
                    error: null
                };
            const {payload: i} = wu(o.access_token);
            let a = null;
            i.aal && (a = i.aal);
            let l = a;
            ((r = (n = o.user.factors) === null || n === void 0 ? void 0 : n.filter(f => f.status === "verified")) !== null && r !== void 0 ? r : []).length > 0 && (l = "aal2");
            const c = i.amr || [];
            return {
                data: {
                    currentLevel: a,
                    nextLevel: l,
                    currentAuthenticationMethods: c
                },
                error: null
            }
        }
        ))
    }
    async fetchJwk(t, n={
        keys: []
    }) {
        let r = n.keys.find(i => i.kid === t);
        if (r || (r = this.jwks.keys.find(i => i.kid === t),
        r && this.jwks_cached_at + sT > Date.now()))
            return r;
        const {data: o, error: s} = await J(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
            headers: this.headers
        });
        if (s)
            throw s;
        if (!o.keys || o.keys.length === 0)
            throw new bs("JWKS is empty");
        if (this.jwks = o,
        this.jwks_cached_at = Date.now(),
        r = o.keys.find(i => i.kid === t),
        !r)
            throw new bs("No matching signing key found in JWKS");
        return r
    }
    async getClaims(t, n={
        keys: []
    }) {
        try {
            let r = t;
            if (!r) {
                const {data: m, error: y} = await this.getSession();
                if (y || !m.session)
                    return {
                        data: null,
                        error: y
                    };
                r = m.session.access_token
            }
            const {header: o, payload: s, signature: i, raw: {header: a, payload: l}} = wu(r);
            if (TT(s.exp),
            !o.kid || o.alg === "HS256" || !("crypto"in globalThis && "subtle"in globalThis.crypto)) {
                const {error: m} = await this.getUser(r);
                if (m)
                    throw m;
                return {
                    data: {
                        claims: s,
                        header: o,
                        signature: i
                    },
                    error: null
                }
            }
            const u = RT(o.alg)
              , c = await this.fetchJwk(o.kid, n)
              , f = await crypto.subtle.importKey("jwk", c, u, !0, ["verify"]);
            if (!await crypto.subtle.verify(u, f, i, mT(`${a}.${l}`)))
                throw new bs("Invalid JWT signature");
            return {
                data: {
                    claims: s,
                    header: o,
                    signature: i
                },
                error: null
            }
        } catch (r) {
            if (q(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
}
Ks.nextInstanceID = 0;
const WT = Ks;
class KT extends WT {
    constructor(t) {
        super(t)
    }
}
var qT = function(e, t, n, r) {
    function o(s) {
        return s instanceof n ? s : new n(function(i) {
            i(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, i) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (f) {
                i(f)
            }
        }
        function l(c) {
            try {
                u(r.throw(c))
            } catch (f) {
                i(f)
            }
        }
        function u(c) {
            c.done ? s(c.value) : o(c.value).then(a, l)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
};
class GT {
    constructor(t, n, r) {
        var o, s, i;
        if (this.supabaseUrl = t,
        this.supabaseKey = n,
        !t)
            throw new Error("supabaseUrl is required.");
        if (!n)
            throw new Error("supabaseKey is required.");
        const a = ZP(t);
        this.realtimeUrl = `${a}/realtime/v1`.replace(/^http/i, "ws"),
        this.authUrl = `${a}/auth/v1`,
        this.storageUrl = `${a}/storage/v1`,
        this.functionsUrl = `${a}/functions/v1`;
        const l = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`
          , u = {
            db: WP,
            realtime: qP,
            auth: Object.assign(Object.assign({}, KP), {
                storageKey: l
            }),
            global: HP
        }
          , c = eT(r ?? {}, u);
        this.storageKey = (o = c.auth.storageKey) !== null && o !== void 0 ? o : "",
        this.headers = (s = c.global.headers) !== null && s !== void 0 ? s : {},
        c.accessToken ? (this.accessToken = c.accessToken,
        this.auth = new Proxy({},{
            get: (f, d) => {
                throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(d)} is not possible`)
            }
        })) : this.auth = this._initSupabaseAuthClient((i = c.auth) !== null && i !== void 0 ? i : {}, this.headers, c.global.fetch),
        this.fetch = JP(n, this._getAccessToken.bind(this), c.global.fetch),
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, c.realtime)),
        this.rest = new fP(`${a}/rest/v1`,{
            headers: this.headers,
            schema: c.db.schema,
            fetch: this.fetch
        }),
        c.accessToken || this._listenForAuthEvents()
    }
    get functions() {
        return new BC(this.functionsUrl,{
            headers: this.headers,
            customFetch: this.fetch
        })
    }
    get storage() {
        return new UP(this.storageUrl,this.headers,this.fetch)
    }
    from(t) {
        return this.rest.from(t)
    }
    schema(t) {
        return this.rest.schema(t)
    }
    rpc(t, n={}, r={}) {
        return this.rest.rpc(t, n, r)
    }
    channel(t, n={
        config: {}
    }) {
        return this.realtime.channel(t, n)
    }
    getChannels() {
        return this.realtime.getChannels()
    }
    removeChannel(t) {
        return this.realtime.removeChannel(t)
    }
    removeAllChannels() {
        return this.realtime.removeAllChannels()
    }
    _getAccessToken() {
        var t, n;
        return qT(this, void 0, void 0, function*() {
            if (this.accessToken)
                return yield this.accessToken();
            const {data: r} = yield this.auth.getSession();
            return (n = (t = r.session) === null || t === void 0 ? void 0 : t.access_token) !== null && n !== void 0 ? n : null
        })
    }
    _initSupabaseAuthClient({autoRefreshToken: t, persistSession: n, detectSessionInUrl: r, storage: o, storageKey: s, flowType: i, lock: a, debug: l}, u, c) {
        const f = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new KT({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, f), u),
            storageKey: s,
            autoRefreshToken: t,
            persistSession: n,
            detectSessionInUrl: r,
            storage: o,
            flowType: i,
            lock: a,
            debug: l,
            fetch: c,
            hasCustomAuthorizationHeader: "Authorization"in this.headers
        })
    }
    _initRealtimeClient(t) {
        return new PP(this.realtimeUrl,Object.assign(Object.assign({}, t), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, t == null ? void 0 : t.params)
        }))
    }
    _listenForAuthEvents() {
        return this.auth.onAuthStateChange( (n, r) => {
            this._handleTokenChanged(n, "CLIENT", r == null ? void 0 : r.access_token)
        }
        )
    }
    _handleTokenChanged(t, n, r) {
        (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") && this.changedAccessToken !== r ? this.changedAccessToken = r : t === "SIGNED_OUT" && (this.realtime.setAuth(),
        n == "STORAGE" && this.auth.signOut(),
        this.changedAccessToken = void 0)
    }
}
const QT = (e, t, n) => new GT(e,t,n)
  , YT = "https://olsfodepjtchzqhrykbc.supabase.co"
  , JT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sc2ZvZGVwanRjaHpxaHJ5a2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNjA2MDMsImV4cCI6MjA2MjczNjYwM30.z39xyKcoSH2OZPRg6_dkH6lC3D3p_kLYsgKVWIDlPdo"
  , qe = QT(YT, JT)
  , v0 = p.createContext(void 0);
function XT({children: e}) {
    const [t,n] = p.useState(null)
      , [r,o] = p.useState(null)
      , [s,i] = p.useState(!0);
    p.useEffect( () => {
        const {data: {subscription: d}} = qe.auth.onAuthStateChange( (m, y) => {
            var h;
            console.log("Auth state changed:", m, (h = y == null ? void 0 : y.user) == null ? void 0 : h.email),
            o(y),
            n((y == null ? void 0 : y.user) ?? null)
        }
        );
        return qe.auth.getSession().then( ({data: {session: m}}) => {
            o(m),
            n((m == null ? void 0 : m.user) ?? null),
            i(!1)
        }
        ),
        () => d.unsubscribe()
    }
    , []);
    const a = () => {
        localStorage.removeItem("supabase.auth.token"),
        Object.keys(localStorage).forEach(d => {
            (d.startsWith("supabase.auth.") || d.includes("sb-")) && localStorage.removeItem(d)
        }
        ),
        Object.keys(sessionStorage || {}).forEach(d => {
            (d.startsWith("supabase.auth.") || d.includes("sb-")) && sessionStorage.removeItem(d)
        }
        )
    }
      , l = async (d, m) => {
        try {
            console.log("Attempting to sign in user:", d);
            const {error: y} = await qe.auth.signInWithPassword({
                email: d,
                password: m
            });
            return y ? (console.log("Sign in error:", y.message),
            {
                error: y
            }) : (console.log("Sign in successful"),
            {
                error: null
            })
        } catch (y) {
            return console.error("Exception during sign in:", y),
            {
                error: y
            }
        }
    }
      , u = async (d, m) => {
        var y;
        try {
            console.log("Attempting to sign up user:", d);
            const {data: h, error: w} = await qe.auth.signUp({
                email: d,
                password: m,
                options: {
                    emailRedirectTo: `${window.location.origin}/`
                }
            });
            return w ? (console.log("Sign up error:", w.message),
            {
                error: w,
                user: null
            }) : (console.log("Sign up successful, user:", (y = h == null ? void 0 : h.user) == null ? void 0 : y.id),
            {
                error: null,
                user: (h == null ? void 0 : h.user) || null
            })
        } catch (h) {
            return console.error("Exception during sign up:", h),
            {
                error: h,
                user: null
            }
        }
    }
      , c = async d => {
        try {
            const {error: m} = await qe.auth.resend({
                type: "signup",
                email: d,
                options: {
                    emailRedirectTo: `${window.location.origin}/`
                }
            });
            return {
                error: m
            }
        } catch (m) {
            return {
                error: m
            }
        }
    }
      , f = async () => {
        a();
        try {
            await qe.auth.signOut({
                scope: "global"
            })
        } catch (d) {
            console.error("Error during sign out:", d)
        }
        window.location.href = "/"
    }
    ;
    return b.jsx(v0.Provider, {
        value: {
            user: t,
            session: r,
            isLoading: s,
            signIn: l,
            signUp: u,
            signOut: f,
            resendConfirmation: c
        },
        children: e
    })
}
const Sl = () => {
    const e = p.useContext(v0);
    if (e === void 0)
        throw new Error("useAuth must be used within an AuthProvider");
    return e
}
  , ZT = Jd("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , At = p.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, s) => {
    const i = r ? Ro : "button";
    return b.jsx(i, {
        className: oe(ZT({
            variant: t,
            size: n,
            className: e
        })),
        ref: s,
        ...o
    })
}
);
At.displayName = "Button";
const y0 = p.forwardRef( ({className: e, ...t}, n) => b.jsx("textarea", {
    className: oe("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: n,
    ...t
}));
y0.displayName = "Textarea";
const El = p.forwardRef( ({className: e, ...t}, n) => b.jsx("div", {
    ref: n,
    className: oe("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
El.displayName = "Card";
const w0 = p.forwardRef( ({className: e, ...t}, n) => b.jsx("div", {
    ref: n,
    className: oe("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
w0.displayName = "CardHeader";
const x0 = p.forwardRef( ({className: e, ...t}, n) => b.jsx("h3", {
    ref: n,
    className: oe("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
x0.displayName = "CardTitle";
const b0 = p.forwardRef( ({className: e, ...t}, n) => b.jsx("p", {
    ref: n,
    className: oe("text-sm text-muted-foreground", e),
    ...t
}));
b0.displayName = "CardDescription";
const kl = p.forwardRef( ({className: e, ...t}, n) => b.jsx("div", {
    ref: n,
    className: oe("p-6 pt-0", e),
    ...t
}));
kl.displayName = "CardContent";
const _0 = p.forwardRef( ({className: e, ...t}, n) => b.jsx("div", {
    ref: n,
    className: oe("flex items-center p-6 pt-0", e),
    ...t
}));
_0.displayName = "CardFooter";
function S0(e, [t,n]) {
    return Math.min(n, Math.max(t, e))
}
var eR = p.createContext(void 0);
function gf(e) {
    const t = p.useContext(eR);
    return e || t || "ltr"
}
function tR(e) {
    const t = p.useRef({
        value: e,
        previous: e
    });
    return p.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
    t.current.value = e),
    t.current.previous), [e])
}
var E0 = ["PageUp", "PageDown"]
  , k0 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
  , C0 = {
    "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
    "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}
  , Ho = "Slider"
  , [Wc,nR,rR] = Kd(Ho)
  , [P0,_j] = ni(Ho, [rR])
  , [oR,Cl] = P0(Ho)
  , T0 = p.forwardRef( (e, t) => {
    const {name: n, min: r=0, max: o=100, step: s=1, orientation: i="horizontal", disabled: a=!1, minStepsBetweenThumbs: l=0, defaultValue: u=[r], value: c, onValueChange: f= () => {}
    , onValueCommit: d= () => {}
    , inverted: m=!1, form: y, ...h} = e
      , w = p.useRef(new Set)
      , g = p.useRef(0)
      , x = i === "horizontal" ? sR : iR
      , [_=[],S] = ri({
        prop: c,
        defaultProp: u,
        onChange: A => {
            var B;
            (B = [...w.current][g.current]) == null || B.focus(),
            f(A)
        }
    })
      , E = p.useRef(_);
    function C(A) {
        const N = dR(_, A);
        O(A, N)
    }
    function P(A) {
        O(A, g.current)
    }
    function L() {
        const A = E.current[g.current];
        _[g.current] !== A && d(_)
    }
    function O(A, N, {commit: B}={
        commit: !1
    }) {
        const D = mR(s)
          , H = gR(Math.round((A - r) / s) * s + r, D)
          , F = S0(H, [r, o]);
        S( (V=[]) => {
            const k = uR(V, F, N);
            if (pR(k, l * s)) {
                g.current = k.indexOf(F);
                const j = String(k) !== String(V);
                return j && B && d(k),
                j ? k : V
            } else
                return V
        }
        )
    }
    return b.jsx(oR, {
        scope: e.__scopeSlider,
        name: n,
        disabled: a,
        min: r,
        max: o,
        valueIndexToChangeRef: g,
        thumbs: w.current,
        values: _,
        orientation: i,
        form: y,
        children: b.jsx(Wc.Provider, {
            scope: e.__scopeSlider,
            children: b.jsx(Wc.Slot, {
                scope: e.__scopeSlider,
                children: b.jsx(x, {
                    "aria-disabled": a,
                    "data-disabled": a ? "" : void 0,
                    ...h,
                    ref: t,
                    onPointerDown: Q(h.onPointerDown, () => {
                        a || (E.current = _)
                    }
                    ),
                    min: r,
                    max: o,
                    inverted: m,
                    onSlideStart: a ? void 0 : C,
                    onSlideMove: a ? void 0 : P,
                    onSlideEnd: a ? void 0 : L,
                    onHomeKeyDown: () => !a && O(r, 0, {
                        commit: !0
                    }),
                    onEndKeyDown: () => !a && O(o, _.length - 1, {
                        commit: !0
                    }),
                    onStepKeyDown: ({event: A, direction: N}) => {
                        if (!a) {
                            const H = E0.includes(A.key) || A.shiftKey && k0.includes(A.key) ? 10 : 1
                              , F = g.current
                              , V = _[F]
                              , k = s * H * N;
                            O(V + k, F, {
                                commit: !0
                            })
                        }
                    }
                })
            })
        })
    })
}
);
T0.displayName = Ho;
var [R0,A0] = P0(Ho, {
    startEdge: "left",
    endEdge: "right",
    size: "width",
    direction: 1
})
  , sR = p.forwardRef( (e, t) => {
    const {min: n, max: r, dir: o, inverted: s, onSlideStart: i, onSlideMove: a, onSlideEnd: l, onStepKeyDown: u, ...c} = e
      , [f,d] = p.useState(null)
      , m = xe(t, x => d(x))
      , y = p.useRef()
      , h = gf(o)
      , w = h === "ltr"
      , g = w && !s || !w && s;
    function v(x) {
        const _ = y.current || f.getBoundingClientRect()
          , S = [0, _.width]
          , C = vf(S, g ? [n, r] : [r, n]);
        return y.current = _,
        C(x - _.left)
    }
    return b.jsx(R0, {
        scope: e.__scopeSlider,
        startEdge: g ? "left" : "right",
        endEdge: g ? "right" : "left",
        direction: g ? 1 : -1,
        size: "width",
        children: b.jsx(j0, {
            dir: h,
            "data-orientation": "horizontal",
            ...c,
            ref: m,
            style: {
                ...c.style,
                "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: x => {
                const _ = v(x.clientX);
                i == null || i(_)
            }
            ,
            onSlideMove: x => {
                const _ = v(x.clientX);
                a == null || a(_)
            }
            ,
            onSlideEnd: () => {
                y.current = void 0,
                l == null || l()
            }
            ,
            onStepKeyDown: x => {
                const S = C0[g ? "from-left" : "from-right"].includes(x.key);
                u == null || u({
                    event: x,
                    direction: S ? -1 : 1
                })
            }
        })
    })
}
)
  , iR = p.forwardRef( (e, t) => {
    const {min: n, max: r, inverted: o, onSlideStart: s, onSlideMove: i, onSlideEnd: a, onStepKeyDown: l, ...u} = e
      , c = p.useRef(null)
      , f = xe(t, c)
      , d = p.useRef()
      , m = !o;
    function y(h) {
        const w = d.current || c.current.getBoundingClientRect()
          , g = [0, w.height]
          , x = vf(g, m ? [r, n] : [n, r]);
        return d.current = w,
        x(h - w.top)
    }
    return b.jsx(R0, {
        scope: e.__scopeSlider,
        startEdge: m ? "bottom" : "top",
        endEdge: m ? "top" : "bottom",
        size: "height",
        direction: m ? 1 : -1,
        children: b.jsx(j0, {
            "data-orientation": "vertical",
            ...u,
            ref: f,
            style: {
                ...u.style,
                "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: h => {
                const w = y(h.clientY);
                s == null || s(w)
            }
            ,
            onSlideMove: h => {
                const w = y(h.clientY);
                i == null || i(w)
            }
            ,
            onSlideEnd: () => {
                d.current = void 0,
                a == null || a()
            }
            ,
            onStepKeyDown: h => {
                const g = C0[m ? "from-bottom" : "from-top"].includes(h.key);
                l == null || l({
                    event: h,
                    direction: g ? -1 : 1
                })
            }
        })
    })
}
)
  , j0 = p.forwardRef( (e, t) => {
    const {__scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: s, onHomeKeyDown: i, onEndKeyDown: a, onStepKeyDown: l, ...u} = e
      , c = Cl(Ho, n);
    return b.jsx(ee.span, {
        ...u,
        ref: t,
        onKeyDown: Q(e.onKeyDown, f => {
            f.key === "Home" ? (i(f),
            f.preventDefault()) : f.key === "End" ? (a(f),
            f.preventDefault()) : E0.concat(k0).includes(f.key) && (l(f),
            f.preventDefault())
        }
        ),
        onPointerDown: Q(e.onPointerDown, f => {
            const d = f.target;
            d.setPointerCapture(f.pointerId),
            f.preventDefault(),
            c.thumbs.has(d) ? d.focus() : r(f)
        }
        ),
        onPointerMove: Q(e.onPointerMove, f => {
            f.target.hasPointerCapture(f.pointerId) && o(f)
        }
        ),
        onPointerUp: Q(e.onPointerUp, f => {
            const d = f.target;
            d.hasPointerCapture(f.pointerId) && (d.releasePointerCapture(f.pointerId),
            s(f))
        }
        )
    })
}
)
  , N0 = "SliderTrack"
  , O0 = p.forwardRef( (e, t) => {
    const {__scopeSlider: n, ...r} = e
      , o = Cl(N0, n);
    return b.jsx(ee.span, {
        "data-disabled": o.disabled ? "" : void 0,
        "data-orientation": o.orientation,
        ...r,
        ref: t
    })
}
);
O0.displayName = N0;
var Kc = "SliderRange"
  , I0 = p.forwardRef( (e, t) => {
    const {__scopeSlider: n, ...r} = e
      , o = Cl(Kc, n)
      , s = A0(Kc, n)
      , i = p.useRef(null)
      , a = xe(t, i)
      , l = o.values.length
      , u = o.values.map(d => D0(d, o.min, o.max))
      , c = l > 1 ? Math.min(...u) : 0
      , f = 100 - Math.max(...u);
    return b.jsx(ee.span, {
        "data-orientation": o.orientation,
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: a,
        style: {
            ...e.style,
            [s.startEdge]: c + "%",
            [s.endEdge]: f + "%"
        }
    })
}
);
I0.displayName = Kc;
var qc = "SliderThumb"
  , L0 = p.forwardRef( (e, t) => {
    const n = nR(e.__scopeSlider)
      , [r,o] = p.useState(null)
      , s = xe(t, a => o(a))
      , i = p.useMemo( () => r ? n().findIndex(a => a.ref.current === r) : -1, [n, r]);
    return b.jsx(aR, {
        ...e,
        ref: s,
        index: i
    })
}
)
  , aR = p.forwardRef( (e, t) => {
    const {__scopeSlider: n, index: r, name: o, ...s} = e
      , i = Cl(qc, n)
      , a = A0(qc, n)
      , [l,u] = p.useState(null)
      , c = xe(t, v => u(v))
      , f = l ? i.form || !!l.closest("form") : !0
      , d = cy(l)
      , m = i.values[r]
      , y = m === void 0 ? 0 : D0(m, i.min, i.max)
      , h = cR(r, i.values.length)
      , w = d == null ? void 0 : d[a.size]
      , g = w ? fR(w, y, a.direction) : 0;
    return p.useEffect( () => {
        if (l)
            return i.thumbs.add(l),
            () => {
                i.thumbs.delete(l)
            }
    }
    , [l, i.thumbs]),
    b.jsxs("span", {
        style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [a.startEdge]: `calc(${y}% + ${g}px)`
        },
        children: [b.jsx(Wc.ItemSlot, {
            scope: e.__scopeSlider,
            children: b.jsx(ee.span, {
                role: "slider",
                "aria-label": e["aria-label"] || h,
                "aria-valuemin": i.min,
                "aria-valuenow": m,
                "aria-valuemax": i.max,
                "aria-orientation": i.orientation,
                "data-orientation": i.orientation,
                "data-disabled": i.disabled ? "" : void 0,
                tabIndex: i.disabled ? void 0 : 0,
                ...s,
                ref: c,
                style: m === void 0 ? {
                    display: "none"
                } : e.style,
                onFocus: Q(e.onFocus, () => {
                    i.valueIndexToChangeRef.current = r
                }
                )
            })
        }), f && b.jsx(lR, {
            name: o ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
            form: i.form,
            value: m
        }, r)]
    })
}
);
L0.displayName = qc;
var lR = e => {
    const {value: t, ...n} = e
      , r = p.useRef(null)
      , o = tR(t);
    return p.useEffect( () => {
        const s = r.current
          , i = window.HTMLInputElement.prototype
          , l = Object.getOwnPropertyDescriptor(i, "value").set;
        if (o !== t && l) {
            const u = new Event("input",{
                bubbles: !0
            });
            l.call(s, t),
            s.dispatchEvent(u)
        }
    }
    , [o, t]),
    b.jsx("input", {
        style: {
            display: "none"
        },
        ...n,
        ref: r,
        defaultValue: t
    })
}
;
function uR(e=[], t, n) {
    const r = [...e];
    return r[n] = t,
    r.sort( (o, s) => o - s)
}
function D0(e, t, n) {
    const s = 100 / (n - t) * (e - t);
    return S0(s, [0, 100])
}
function cR(e, t) {
    return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0
}
function dR(e, t) {
    if (e.length === 1)
        return 0;
    const n = e.map(o => Math.abs(o - t))
      , r = Math.min(...n);
    return n.indexOf(r)
}
function fR(e, t, n) {
    const r = e / 2
      , s = vf([0, 50], [0, r]);
    return (r - s(t) * n) * n
}
function hR(e) {
    return e.slice(0, -1).map( (t, n) => e[n + 1] - t)
}
function pR(e, t) {
    if (t > 0) {
        const n = hR(e);
        return Math.min(...n) >= t
    }
    return !0
}
function vf(e, t) {
    return n => {
        if (e[0] === e[1] || t[0] === t[1])
            return t[0];
        const r = (t[1] - t[0]) / (e[1] - e[0]);
        return t[0] + r * (n - e[0])
    }
}
function mR(e) {
    return (String(e).split(".")[1] || "").length
}
function gR(e, t) {
    const n = Math.pow(10, t);
    return Math.round(e * n) / n
}
var $0 = T0
  , vR = O0
  , yR = I0
  , wR = L0;
const M0 = p.forwardRef( ({className: e, ...t}, n) => b.jsxs($0, {
    ref: n,
    className: oe("relative flex w-full touch-none select-none items-center", e),
    ...t,
    children: [b.jsx(vR, {
        className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
        children: b.jsx(yR, {
            className: "absolute h-full bg-primary"
        })
    }), b.jsx(wR, {
        className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    })]
}));
M0.displayName = $0.displayName;
class xR {
    constructor() {
        Ko(this, "audioContext", null);
        Ko(this, "oscillator", null);
        Ko(this, "gainNode", null);
        Ko(this, "isPlaying", !1);
        this.initializeAudio()
    }
    initializeAudio() {
        this.audioContext || (this.audioContext = new (window.AudioContext || window.webkitAudioContext),
        this.gainNode = this.audioContext.createGain(),
        this.gainNode.connect(this.audioContext.destination),
        this.setVolume(.5))
    }
    playSound(t) {
        this.audioContext || this.initializeAudio(),
        this.oscillator && (this.oscillator.stop(),
        this.oscillator.disconnect()),
        this.oscillator = this.audioContext.createOscillator(),
        this.oscillator.type = "sine",
        this.oscillator.frequency.setValueAtTime(t, this.audioContext.currentTime),
        this.oscillator.connect(this.gainNode),
        this.oscillator.start(),
        this.isPlaying = !0
    }
    stopSound() {
        this.oscillator && this.isPlaying && (this.oscillator.stop(),
        this.oscillator.disconnect(),
        this.isPlaying = !1)
    }
    setVolume(t) {
        var n;
        if (this.gainNode) {
            const r = Math.min(Math.max(t, 0), 1);
            this.gainNode.gain.setValueAtTime(r, ((n = this.audioContext) == null ? void 0 : n.currentTime) || 0)
        }
    }
    resume() {
        this.audioContext && this.audioContext.state === "suspended" && this.audioContext.resume()
    }
    getPlayingState() {
        return this.isPlaying
    }
}
const bt = new xR
  , bR = ({isPlaying: e, onPlayPauseToggle: t}) => {
    const [n,r] = p.useState(.5)
      , o = i => {
        const a = i[0];
        r(a),
        bt.setVolume(a)
    }
      , s = () => n === 0 ? b.jsx(R_, {
        className: "h-5 w-5"
    }) : n < .3 ? b.jsx(A_, {
        className: "h-5 w-5"
    }) : n < .7 ? b.jsx(P_, {
        className: "h-5 w-5"
    }) : b.jsx(T_, {
        className: "h-5 w-5"
    });
    return b.jsxs("div", {
        className: "flex items-center w-full max-w-md mx-auto gap-8",
        children: [b.jsxs("div", {
            className: "flex items-center gap-4",
            children: [b.jsx(At, {
                onClick: t,
                variant: "outline",
                size: "icon",
                className: "rounded-full w-12 h-12 flex items-center justify-center bg-theme-blue hover:bg-theme-blue-light text-white",
                children: e ? b.jsx(k_, {
                    className: "h-5 w-5"
                }) : b.jsx(C_, {
                    className: "h-5 w-5"
                })
            }), b.jsx("div", {
                className: "text-lg font-medium",
                children: e ? "Playing" : "Paused"
            })]
        }), b.jsxs("div", {
            className: "flex items-center space-x-4 flex-grow",
            children: [b.jsx("div", {
                className: "flex-shrink-0",
                children: s()
            }), b.jsx(M0, {
                value: [n],
                min: 0,
                max: 1,
                step: .01,
                onValueChange: o,
                className: "flex-grow"
            })]
        })]
    })
}
  , Ip = ({isPlaying: e, emotion: t, variant: n="default"}) => {
    p.useRef(null);
    const r = () => {
        const i = {
            calm: {
                count: n === "hero" ? 40 : 20,
                maxHeight: n === "hero" ? 120 : 70,
                speed: 1
            },
            happy: {
                count: n === "hero" ? 50 : 30,
                maxHeight: n === "hero" ? 150 : 90,
                speed: 1.5
            },
            sad: {
                count: n === "hero" ? 25 : 15,
                maxHeight: n === "hero" ? 80 : 50,
                speed: .7
            },
            angry: {
                count: n === "hero" ? 45 : 25,
                maxHeight: n === "hero" ? 180 : 100,
                speed: 2
            },
            anxious: {
                count: n === "hero" ? 50 : 30,
                maxHeight: n === "hero" ? 140 : 80,
                speed: 1.8
            }
        }
          , {count: a, maxHeight: l} = i[t] || i.calm;
        return Array.from({
            length: a
        }, (u, c) => {
            const f = n === "hero" ? Math.abs(Math.sin(c * .3) * l) + Math.abs(Math.cos(c * .15) * 30) + 15 : Math.abs(Math.sin(c * .5) * l) + 10
              , d = e || n === "hero" ? f : Math.floor(Math.random() * 15) + 5;
            return b.jsx("div", {
                className: `sound-bar ${n === "hero" ? "hero-bar" : ""}`,
                style: {
                    height: `${d}%`,
                    animation: e || n === "hero" ? `sound-wave ${Math.random() * 1.5 + .8}s ease-in-out infinite` : "none",
                    animationDelay: `${c * .03}s`,
                    backgroundColor: o(t, c, a, n)
                }
            }, c)
        }
        )
    }
      , o = (i, a, l, u) => {
        const c = a / l
          , f = {
            calm: u === "hero" ? ["#3b82f6", "#60a5fa", "#93c5fd"] : ["#3b82f6", "#60a5fa"],
            happy: u === "hero" ? ["#3b82f6", "#4ade80", "#34d399"] : ["#3b82f6", "#4ade80"],
            sad: u === "hero" ? ["#3b82f6", "#6b7280", "#9ca3af"] : ["#3b82f6", "#6b7280"],
            angry: u === "hero" ? ["#ef4444", "#f97316", "#3b82f6"] : ["#ef4444", "#3b82f6"],
            anxious: u === "hero" ? ["#8b5cf6", "#a855f7", "#3b82f6"] : ["#8b5cf6", "#3b82f6"]
        }
          , d = f[i] || f.calm;
        return u === "hero" ? c < .25 ? d[0] : c < .5 ? d[1] : c < .75 ? d[2] || d[1] : d[0] : c < .33 ? d[0] : c > .66 ? d[1] : "#3b82f6"
    }
      , s = n === "hero" ? "sound-visualization-hero" : "sound-visualization";
    return b.jsx("div", {
        className: `relative w-full ${n === "hero" ? "max-w-4xl" : "max-w-xl"} mx-auto`,
        children: b.jsx("div", {
            className: s,
            children: r()
        })
    })
}
  , _R = ({selectedEmotion: e, onSelectEmotion: t}) => {
    const n = [{
        id: "calm",
        label: "Calm"
    }, {
        id: "anxious",
        label: "Anxious"
    }, {
        id: "angry",
        label: "Angry"
    }, {
        id: "sad",
        label: "Sad"
    }];
    return b.jsx("div", {
        className: "flex flex-wrap justify-center gap-4 my-6",
        children: n.map(r => b.jsx("button", {
            className: oe("px-6 py-2 rounded-md border transition-all duration-300", "bg-white/10 backdrop-blur-md border-white/20", "hover:bg-white/20 hover:border-white/30", e === r.id ? "bg-theme-blue/80 text-white border-theme-blue shadow-lg" : "text-foreground"),
            onClick: () => t(r.id),
            children: r.label
        }, r.id))
    })
}
;
var xu = "focusScope.autoFocusOnMount"
  , bu = "focusScope.autoFocusOnUnmount"
  , Lp = {
    bubbles: !1,
    cancelable: !0
}
  , SR = "FocusScope"
  , F0 = p.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...i} = e
      , [a,l] = p.useState(null)
      , u = lt(o)
      , c = lt(s)
      , f = p.useRef(null)
      , d = xe(t, h => l(h))
      , m = p.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    p.useEffect( () => {
        if (r) {
            let h = function(x) {
                if (m.paused || !a)
                    return;
                const _ = x.target;
                a.contains(_) ? f.current = _ : Sn(f.current, {
                    select: !0
                })
            }
              , w = function(x) {
                if (m.paused || !a)
                    return;
                const _ = x.relatedTarget;
                _ !== null && (a.contains(_) || Sn(f.current, {
                    select: !0
                }))
            }
              , g = function(x) {
                if (document.activeElement === document.body)
                    for (const S of x)
                        S.removedNodes.length > 0 && Sn(a)
            };
            document.addEventListener("focusin", h),
            document.addEventListener("focusout", w);
            const v = new MutationObserver(g);
            return a && v.observe(a, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", h),
                document.removeEventListener("focusout", w),
                v.disconnect()
            }
        }
    }
    , [r, a, m.paused]),
    p.useEffect( () => {
        if (a) {
            $p.add(m);
            const h = document.activeElement;
            if (!a.contains(h)) {
                const g = new CustomEvent(xu,Lp);
                a.addEventListener(xu, u),
                a.dispatchEvent(g),
                g.defaultPrevented || (ER(RR(z0(a)), {
                    select: !0
                }),
                document.activeElement === h && Sn(a))
            }
            return () => {
                a.removeEventListener(xu, u),
                setTimeout( () => {
                    const g = new CustomEvent(bu,Lp);
                    a.addEventListener(bu, c),
                    a.dispatchEvent(g),
                    g.defaultPrevented || Sn(h ?? document.body, {
                        select: !0
                    }),
                    a.removeEventListener(bu, c),
                    $p.remove(m)
                }
                , 0)
            }
        }
    }
    , [a, u, c, m]);
    const y = p.useCallback(h => {
        if (!n && !r || m.paused)
            return;
        const w = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey
          , g = document.activeElement;
        if (w && g) {
            const v = h.currentTarget
              , [x,_] = kR(v);
            x && _ ? !h.shiftKey && g === _ ? (h.preventDefault(),
            n && Sn(x, {
                select: !0
            })) : h.shiftKey && g === x && (h.preventDefault(),
            n && Sn(_, {
                select: !0
            })) : g === v && h.preventDefault()
        }
    }
    , [n, r, m.paused]);
    return b.jsx(ee.div, {
        tabIndex: -1,
        ...i,
        ref: d,
        onKeyDown: y
    })
}
);
F0.displayName = SR;
function ER(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (Sn(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function kR(e) {
    const t = z0(e)
      , n = Dp(t, e)
      , r = Dp(t.reverse(), e);
    return [n, r]
}
function z0(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Dp(e, t) {
    for (const n of e)
        if (!CR(n, {
            upTo: t
        }))
            return n
}
function CR(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function PR(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function Sn(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && PR(e) && t && e.select()
    }
}
var $p = TR();
function TR() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = Mp(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = Mp(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function Mp(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function RR(e) {
    return e.filter(t => t.tagName !== "A")
}
var _u = 0;
function AR() {
    p.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? Fp()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? Fp()),
        _u++,
        () => {
            _u === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            _u--
        }
    }
    , [])
}
function Fp() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var Ht = function() {
    return Ht = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
                Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s])
        }
        return t
    }
    ,
    Ht.apply(this, arguments)
};
function U0(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function jR(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, s; r < o; r++)
            (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)),
            s[r] = t[r]);
    return e.concat(s || Array.prototype.slice.call(t))
}
var oa = "right-scroll-bar-position"
  , sa = "width-before-scroll-bar"
  , NR = "with-scroll-bars-hidden"
  , OR = "--removed-body-scroll-bar-size";
function Su(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function IR(e, t) {
    var n = p.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                    n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var LR = typeof window < "u" ? p.useLayoutEffect : p.useEffect
  , zp = new WeakMap;
function DR(e, t) {
    var n = IR(null, function(r) {
        return e.forEach(function(o) {
            return Su(o, r)
        })
    });
    return LR(function() {
        var r = zp.get(n);
        if (r) {
            var o = new Set(r)
              , s = new Set(e)
              , i = n.current;
            o.forEach(function(a) {
                s.has(a) || Su(a, null)
            }),
            s.forEach(function(a) {
                o.has(a) || Su(a, i)
            })
        }
        zp.set(n, e)
    }, [e]),
    n
}
function $R(e) {
    return e
}
function MR(e, t) {
    t === void 0 && (t = $R);
    var n = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(s) {
            var i = t(s, r);
            return n.push(i),
            function() {
                n = n.filter(function(a) {
                    return a !== i
                })
            }
        },
        assignSyncMedium: function(s) {
            for (r = !0; n.length; ) {
                var i = n;
                n = [],
                i.forEach(s)
            }
            n = {
                push: function(a) {
                    return s(a)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(s) {
            r = !0;
            var i = [];
            if (n.length) {
                var a = n;
                n = [],
                a.forEach(s),
                i = n
            }
            var l = function() {
                var c = i;
                i = [],
                c.forEach(s)
            }
              , u = function() {
                return Promise.resolve().then(l)
            };
            u(),
            n = {
                push: function(c) {
                    i.push(c),
                    u()
                },
                filter: function(c) {
                    return i = i.filter(c),
                    n
                }
            }
        }
    };
    return o
}
function FR(e) {
    e === void 0 && (e = {});
    var t = MR(null);
    return t.options = Ht({
        async: !0,
        ssr: !1
    }, e),
    t
}
var B0 = function(e) {
    var t = e.sideCar
      , n = U0(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return p.createElement(r, Ht({}, n))
};
B0.isSideCarExport = !0;
function zR(e, t) {
    return e.useMedium(t),
    B0
}
var V0 = FR()
  , Eu = function() {}
  , Pl = p.forwardRef(function(e, t) {
    var n = p.useRef(null)
      , r = p.useState({
        onScrollCapture: Eu,
        onWheelCapture: Eu,
        onTouchMoveCapture: Eu
    })
      , o = r[0]
      , s = r[1]
      , i = e.forwardProps
      , a = e.children
      , l = e.className
      , u = e.removeScrollBar
      , c = e.enabled
      , f = e.shards
      , d = e.sideCar
      , m = e.noIsolation
      , y = e.inert
      , h = e.allowPinchZoom
      , w = e.as
      , g = w === void 0 ? "div" : w
      , v = e.gapMode
      , x = U0(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , _ = d
      , S = DR([n, t])
      , E = Ht(Ht({}, x), o);
    return p.createElement(p.Fragment, null, c && p.createElement(_, {
        sideCar: V0,
        removeScrollBar: u,
        shards: f,
        noIsolation: m,
        inert: y,
        setCallbacks: s,
        allowPinchZoom: !!h,
        lockRef: n,
        gapMode: v
    }), i ? p.cloneElement(p.Children.only(a), Ht(Ht({}, E), {
        ref: S
    })) : p.createElement(g, Ht({}, E, {
        className: l,
        ref: S
    }), a))
});
Pl.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Pl.classNames = {
    fullWidth: sa,
    zeroRight: oa
};
var UR = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function BR() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = UR();
    return t && e.setAttribute("nonce", t),
    e
}
function VR(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function HR(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var WR = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = BR()) && (VR(t, n),
            HR(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , KR = function() {
    var e = WR();
    return function(t, n) {
        p.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , H0 = function() {
    var e = KR()
      , t = function(n) {
        var r = n.styles
          , o = n.dynamic;
        return e(r, o),
        null
    };
    return t
}
  , qR = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , ku = function(e) {
    return parseInt(e || "", 10) || 0
}
  , GR = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [ku(n), ku(r), ku(o)]
}
  , QR = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return qR;
    var t = GR(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , YR = H0()
  , fo = "data-scroll-locked"
  , JR = function(e, t, n, r) {
    var o = e.left
      , s = e.top
      , i = e.right
      , a = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(NR, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(fo, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(oa, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(sa, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(oa, " .").concat(oa, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(sa, " .").concat(sa, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(fo, `] {
    `).concat(OR, ": ").concat(a, `px;
  }
`)
}
  , Up = function() {
    var e = parseInt(document.body.getAttribute(fo) || "0", 10);
    return isFinite(e) ? e : 0
}
  , XR = function() {
    p.useEffect(function() {
        return document.body.setAttribute(fo, (Up() + 1).toString()),
        function() {
            var e = Up() - 1;
            e <= 0 ? document.body.removeAttribute(fo) : document.body.setAttribute(fo, e.toString())
        }
    }, [])
}
  , ZR = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    XR();
    var s = p.useMemo(function() {
        return QR(o)
    }, [o]);
    return p.createElement(YR, {
        styles: JR(s, !t, o, n ? "" : "!important")
    })
}
  , Gc = !1;
if (typeof window < "u")
    try {
        var Mi = Object.defineProperty({}, "passive", {
            get: function() {
                return Gc = !0,
                !0
            }
        });
        window.addEventListener("test", Mi, Mi),
        window.removeEventListener("test", Mi, Mi)
    } catch {
        Gc = !1
    }
var Mr = Gc ? {
    passive: !1
} : !1
  , eA = function(e) {
    return e.tagName === "TEXTAREA"
}
  , W0 = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !eA(e) && n[t] === "visible")
}
  , tA = function(e) {
    return W0(e, "overflowY")
}
  , nA = function(e) {
    return W0(e, "overflowX")
}
  , Bp = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = K0(e, r);
        if (o) {
            var s = q0(e, r)
              , i = s[1]
              , a = s[2];
            if (i > a)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , rA = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , oA = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , K0 = function(e, t) {
    return e === "v" ? tA(t) : nA(t)
}
  , q0 = function(e, t) {
    return e === "v" ? rA(t) : oA(t)
}
  , sA = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , iA = function(e, t, n, r, o) {
    var s = sA(e, window.getComputedStyle(t).direction)
      , i = s * r
      , a = n.target
      , l = t.contains(a)
      , u = !1
      , c = i > 0
      , f = 0
      , d = 0;
    do {
        var m = q0(e, a)
          , y = m[0]
          , h = m[1]
          , w = m[2]
          , g = h - w - s * y;
        (y || g) && K0(e, a) && (f += g,
        d += y),
        a instanceof ShadowRoot ? a = a.host : a = a.parentNode
    } while (!l && a !== document.body || l && (t.contains(a) || t === a));
    return (c && (Math.abs(f) < 1 || !o) || !c && (Math.abs(d) < 1 || !o)) && (u = !0),
    u
}
  , Fi = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , Vp = function(e) {
    return [e.deltaX, e.deltaY]
}
  , Hp = function(e) {
    return e && "current"in e ? e.current : e
}
  , aA = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , lA = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , uA = 0
  , Fr = [];
function cA(e) {
    var t = p.useRef([])
      , n = p.useRef([0, 0])
      , r = p.useRef()
      , o = p.useState(uA++)[0]
      , s = p.useState(H0)[0]
      , i = p.useRef(e);
    p.useEffect(function() {
        i.current = e
    }, [e]),
    p.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var h = jR([e.lockRef.current], (e.shards || []).map(Hp), !0).filter(Boolean);
            return h.forEach(function(w) {
                return w.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                h.forEach(function(w) {
                    return w.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var a = p.useCallback(function(h, w) {
        if ("touches"in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
            return !i.current.allowPinchZoom;
        var g = Fi(h), v = n.current, x = "deltaX"in h ? h.deltaX : v[0] - g[0], _ = "deltaY"in h ? h.deltaY : v[1] - g[1], S, E = h.target, C = Math.abs(x) > Math.abs(_) ? "h" : "v";
        if ("touches"in h && C === "h" && E.type === "range")
            return !1;
        var P = Bp(C, E);
        if (!P)
            return !0;
        if (P ? S = C : (S = C === "v" ? "h" : "v",
        P = Bp(C, E)),
        !P)
            return !1;
        if (!r.current && "changedTouches"in h && (x || _) && (r.current = S),
        !S)
            return !0;
        var L = r.current || S;
        return iA(L, w, h, L === "h" ? x : _, !0)
    }, [])
      , l = p.useCallback(function(h) {
        var w = h;
        if (!(!Fr.length || Fr[Fr.length - 1] !== s)) {
            var g = "deltaY"in w ? Vp(w) : Fi(w)
              , v = t.current.filter(function(S) {
                return S.name === w.type && (S.target === w.target || w.target === S.shadowParent) && aA(S.delta, g)
            })[0];
            if (v && v.should) {
                w.cancelable && w.preventDefault();
                return
            }
            if (!v) {
                var x = (i.current.shards || []).map(Hp).filter(Boolean).filter(function(S) {
                    return S.contains(w.target)
                })
                  , _ = x.length > 0 ? a(w, x[0]) : !i.current.noIsolation;
                _ && w.cancelable && w.preventDefault()
            }
        }
    }, [])
      , u = p.useCallback(function(h, w, g, v) {
        var x = {
            name: h,
            delta: w,
            target: g,
            should: v,
            shadowParent: dA(g)
        };
        t.current.push(x),
        setTimeout(function() {
            t.current = t.current.filter(function(_) {
                return _ !== x
            })
        }, 1)
    }, [])
      , c = p.useCallback(function(h) {
        n.current = Fi(h),
        r.current = void 0
    }, [])
      , f = p.useCallback(function(h) {
        u(h.type, Vp(h), h.target, a(h, e.lockRef.current))
    }, [])
      , d = p.useCallback(function(h) {
        u(h.type, Fi(h), h.target, a(h, e.lockRef.current))
    }, []);
    p.useEffect(function() {
        return Fr.push(s),
        e.setCallbacks({
            onScrollCapture: f,
            onWheelCapture: f,
            onTouchMoveCapture: d
        }),
        document.addEventListener("wheel", l, Mr),
        document.addEventListener("touchmove", l, Mr),
        document.addEventListener("touchstart", c, Mr),
        function() {
            Fr = Fr.filter(function(h) {
                return h !== s
            }),
            document.removeEventListener("wheel", l, Mr),
            document.removeEventListener("touchmove", l, Mr),
            document.removeEventListener("touchstart", c, Mr)
        }
    }, []);
    var m = e.removeScrollBar
      , y = e.inert;
    return p.createElement(p.Fragment, null, y ? p.createElement(s, {
        styles: lA(o)
    }) : null, m ? p.createElement(ZR, {
        gapMode: e.gapMode
    }) : null)
}
function dA(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const fA = zR(V0, cA);
var G0 = p.forwardRef(function(e, t) {
    return p.createElement(Pl, Ht({}, e, {
        ref: t,
        sideCar: fA
    }))
});
G0.classNames = Pl.classNames;
var hA = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , zr = new WeakMap
  , zi = new WeakMap
  , Ui = {}
  , Cu = 0
  , Q0 = function(e) {
    return e && (e.host || Q0(e.parentNode))
}
  , pA = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = Q0(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , mA = function(e, t, n, r) {
    var o = pA(t, Array.isArray(e) ? e : [e]);
    Ui[n] || (Ui[n] = new WeakMap);
    var s = Ui[n]
      , i = []
      , a = new Set
      , l = new Set(o)
      , u = function(f) {
        !f || a.has(f) || (a.add(f),
        u(f.parentNode))
    };
    o.forEach(u);
    var c = function(f) {
        !f || l.has(f) || Array.prototype.forEach.call(f.children, function(d) {
            if (a.has(d))
                c(d);
            else
                try {
                    var m = d.getAttribute(r)
                      , y = m !== null && m !== "false"
                      , h = (zr.get(d) || 0) + 1
                      , w = (s.get(d) || 0) + 1;
                    zr.set(d, h),
                    s.set(d, w),
                    i.push(d),
                    h === 1 && y && zi.set(d, !0),
                    w === 1 && d.setAttribute(n, "true"),
                    y || d.setAttribute(r, "true")
                } catch (g) {
                    console.error("aria-hidden: cannot operate on ", d, g)
                }
        })
    };
    return c(t),
    a.clear(),
    Cu++,
    function() {
        i.forEach(function(f) {
            var d = zr.get(f) - 1
              , m = s.get(f) - 1;
            zr.set(f, d),
            s.set(f, m),
            d || (zi.has(f) || f.removeAttribute(r),
            zi.delete(f)),
            m || f.removeAttribute(n)
        }),
        Cu--,
        Cu || (zr = new WeakMap,
        zr = new WeakMap,
        zi = new WeakMap,
        Ui = {})
    }
}
  , gA = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = hA(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    mA(r, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , yf = "Dialog"
  , [Y0,Sj] = ni(yf)
  , [vA,It] = Y0(yf)
  , J0 = e => {
    const {__scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: s, modal: i=!0} = e
      , a = p.useRef(null)
      , l = p.useRef(null)
      , [u=!1,c] = ri({
        prop: r,
        defaultProp: o,
        onChange: s
    });
    return b.jsx(vA, {
        scope: t,
        triggerRef: a,
        contentRef: l,
        contentId: ws(),
        titleId: ws(),
        descriptionId: ws(),
        open: u,
        onOpenChange: c,
        onOpenToggle: p.useCallback( () => c(f => !f), [c]),
        modal: i,
        children: n
    })
}
;
J0.displayName = yf;
var X0 = "DialogTrigger"
  , yA = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = It(X0, n)
      , s = xe(t, o.triggerRef);
    return b.jsx(ee.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": bf(o.open),
        ...r,
        ref: s,
        onClick: Q(e.onClick, o.onOpenToggle)
    })
}
);
yA.displayName = X0;
var wf = "DialogPortal"
  , [wA,Z0] = Y0(wf, {
    forceMount: void 0
})
  , ew = e => {
    const {__scopeDialog: t, forceMount: n, children: r, container: o} = e
      , s = It(wf, t);
    return b.jsx(wA, {
        scope: t,
        forceMount: n,
        children: p.Children.map(r, i => b.jsx(Tr, {
            present: n || s.open,
            children: b.jsx(qd, {
                asChild: !0,
                container: o,
                children: i
            })
        }))
    })
}
;
ew.displayName = wf;
var $a = "DialogOverlay"
  , tw = p.forwardRef( (e, t) => {
    const n = Z0($a, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = It($a, e.__scopeDialog);
    return s.modal ? b.jsx(Tr, {
        present: r || s.open,
        children: b.jsx(xA, {
            ...o,
            ref: t
        })
    }) : null
}
);
tw.displayName = $a;
var xA = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = It($a, n);
    return b.jsx(G0, {
        as: Ro,
        allowPinchZoom: !0,
        shards: [o.contentRef],
        children: b.jsx(ee.div, {
            "data-state": bf(o.open),
            ...r,
            ref: t,
            style: {
                pointerEvents: "auto",
                ...r.style
            }
        })
    })
}
)
  , kr = "DialogContent"
  , nw = p.forwardRef( (e, t) => {
    const n = Z0(kr, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = It(kr, e.__scopeDialog);
    return b.jsx(Tr, {
        present: r || s.open,
        children: s.modal ? b.jsx(bA, {
            ...o,
            ref: t
        }) : b.jsx(_A, {
            ...o,
            ref: t
        })
    })
}
);
nw.displayName = kr;
var bA = p.forwardRef( (e, t) => {
    const n = It(kr, e.__scopeDialog)
      , r = p.useRef(null)
      , o = xe(t, n.contentRef, r);
    return p.useEffect( () => {
        const s = r.current;
        if (s)
            return gA(s)
    }
    , []),
    b.jsx(rw, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Q(e.onCloseAutoFocus, s => {
            var i;
            s.preventDefault(),
            (i = n.triggerRef.current) == null || i.focus()
        }
        ),
        onPointerDownOutside: Q(e.onPointerDownOutside, s => {
            const i = s.detail.originalEvent
              , a = i.button === 0 && i.ctrlKey === !0;
            (i.button === 2 || a) && s.preventDefault()
        }
        ),
        onFocusOutside: Q(e.onFocusOutside, s => s.preventDefault())
    })
}
)
  , _A = p.forwardRef( (e, t) => {
    const n = It(kr, e.__scopeDialog)
      , r = p.useRef(!1)
      , o = p.useRef(!1);
    return b.jsx(rw, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: s => {
            var i, a;
            (i = e.onCloseAutoFocus) == null || i.call(e, s),
            s.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(),
            s.preventDefault()),
            r.current = !1,
            o.current = !1
        }
        ,
        onInteractOutside: s => {
            var l, u;
            (l = e.onInteractOutside) == null || l.call(e, s),
            s.defaultPrevented || (r.current = !0,
            s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
            const i = s.target;
            ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && s.preventDefault(),
            s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault()
        }
    })
}
)
  , rw = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i} = e
      , a = It(kr, n)
      , l = p.useRef(null)
      , u = xe(t, l);
    return AR(),
    b.jsxs(b.Fragment, {
        children: [b.jsx(F0, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: b.jsx(tl, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": bf(a.open),
                ...i,
                ref: u,
                onDismiss: () => a.onOpenChange(!1)
            })
        }), b.jsxs(b.Fragment, {
            children: [b.jsx(SA, {
                titleId: a.titleId
            }), b.jsx(kA, {
                contentRef: l,
                descriptionId: a.descriptionId
            })]
        })]
    })
}
)
  , xf = "DialogTitle"
  , ow = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = It(xf, n);
    return b.jsx(ee.h2, {
        id: o.titleId,
        ...r,
        ref: t
    })
}
);
ow.displayName = xf;
var sw = "DialogDescription"
  , iw = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = It(sw, n);
    return b.jsx(ee.p, {
        id: o.descriptionId,
        ...r,
        ref: t
    })
}
);
iw.displayName = sw;
var aw = "DialogClose"
  , lw = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = It(aw, n);
    return b.jsx(ee.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: Q(e.onClick, () => o.onOpenChange(!1))
    })
}
);
lw.displayName = aw;
function bf(e) {
    return e ? "open" : "closed"
}
var uw = "DialogTitleWarning"
  , [Ej,cw] = $b(uw, {
    contentName: kr,
    titleName: xf,
    docsSlug: "dialog"
})
  , SA = ({titleId: e}) => {
    const t = cw(uw)
      , n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return p.useEffect( () => {
        e && (document.getElementById(e) || console.error(n))
    }
    , [n, e]),
    null
}
  , EA = "DialogDescriptionWarning"
  , kA = ({contentRef: e, descriptionId: t}) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${cw(EA).contentName}}.`;
    return p.useEffect( () => {
        var s;
        const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r))
    }
    , [r, e, t]),
    null
}
  , CA = J0
  , PA = ew
  , dw = tw
  , fw = nw
  , hw = ow
  , pw = iw
  , TA = lw;
const RA = CA
  , AA = PA
  , mw = p.forwardRef( ({className: e, ...t}, n) => b.jsx(dw, {
    ref: n,
    className: oe("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t
}));
mw.displayName = dw.displayName;
const gw = p.forwardRef( ({className: e, children: t, ...n}, r) => b.jsxs(AA, {
    children: [b.jsx(mw, {}), b.jsxs(fw, {
        ref: r,
        className: oe("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...n,
        children: [t, b.jsxs(TA, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [b.jsx(Hv, {
                className: "h-4 w-4"
            }), b.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
gw.displayName = fw.displayName;
const vw = ({className: e, ...t}) => b.jsx("div", {
    className: oe("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
});
vw.displayName = "DialogHeader";
const yw = p.forwardRef( ({className: e, ...t}, n) => b.jsx(hw, {
    ref: n,
    className: oe("text-lg font-semibold leading-none tracking-tight", e),
    ...t
}));
yw.displayName = hw.displayName;
const ww = p.forwardRef( ({className: e, ...t}, n) => b.jsx(pw, {
    ref: n,
    className: oe("text-sm text-muted-foreground", e),
    ...t
}));
ww.displayName = pw.displayName;
const Br = p.forwardRef( ({className: e, type: t, ...n}, r) => b.jsx("input", {
    type: t,
    className: oe("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
Br.displayName = "Input";
var jA = "Label"
  , xw = p.forwardRef( (e, t) => b.jsx(ee.label, {
    ...e,
    ref: t,
    onMouseDown: n => {
        var o;
        n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n),
        !n.defaultPrevented && n.detail > 1 && n.preventDefault())
    }
}));
xw.displayName = jA;
var bw = xw;
const NA = Jd("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , Vr = p.forwardRef( ({className: e, ...t}, n) => b.jsx(bw, {
    ref: n,
    className: oe(NA(), e),
    ...t
}));
Vr.displayName = bw.displayName;
function OA(e, t=[]) {
    let n = [];
    function r(s, i) {
        const a = p.createContext(i)
          , l = n.length;
        n = [...n, i];
        function u(f) {
            const {scope: d, children: m, ...y} = f
              , h = (d == null ? void 0 : d[e][l]) || a
              , w = p.useMemo( () => y, Object.values(y));
            return b.jsx(h.Provider, {
                value: w,
                children: m
            })
        }
        function c(f, d) {
            const m = (d == null ? void 0 : d[e][l]) || a
              , y = p.useContext(m);
            if (y)
                return y;
            if (i !== void 0)
                return i;
            throw new Error(`\`${f}\` must be used within \`${s}\``)
        }
        return u.displayName = s + "Provider",
        [u, c]
    }
    const o = () => {
        const s = n.map(i => p.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return p.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, IA(o, ...t)]
}
function IA(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const f = l(s)[`__scope${u}`];
                return {
                    ...a,
                    ...f
                }
            }
            , {});
            return p.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var Pu = "rovingFocusGroup.onEntryFocus"
  , LA = {
    bubbles: !1,
    cancelable: !0
}
  , Tl = "RovingFocusGroup"
  , [Qc,_w,DA] = Kd(Tl)
  , [$A,Sw] = OA(Tl, [DA])
  , [MA,FA] = $A(Tl)
  , Ew = p.forwardRef( (e, t) => b.jsx(Qc.Provider, {
    scope: e.__scopeRovingFocusGroup,
    children: b.jsx(Qc.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: b.jsx(zA, {
            ...e,
            ref: t
        })
    })
}));
Ew.displayName = Tl;
var zA = p.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, orientation: r, loop: o=!1, dir: s, currentTabStopId: i, defaultCurrentTabStopId: a, onCurrentTabStopIdChange: l, onEntryFocus: u, preventScrollOnEntryFocus: c=!1, ...f} = e
      , d = p.useRef(null)
      , m = xe(t, d)
      , y = gf(s)
      , [h=null,w] = ri({
        prop: i,
        defaultProp: a,
        onChange: l
    })
      , [g,v] = p.useState(!1)
      , x = lt(u)
      , _ = _w(n)
      , S = p.useRef(!1)
      , [E,C] = p.useState(0);
    return p.useEffect( () => {
        const P = d.current;
        if (P)
            return P.addEventListener(Pu, x),
            () => P.removeEventListener(Pu, x)
    }
    , [x]),
    b.jsx(MA, {
        scope: n,
        orientation: r,
        dir: y,
        loop: o,
        currentTabStopId: h,
        onItemFocus: p.useCallback(P => w(P), [w]),
        onItemShiftTab: p.useCallback( () => v(!0), []),
        onFocusableItemAdd: p.useCallback( () => C(P => P + 1), []),
        onFocusableItemRemove: p.useCallback( () => C(P => P - 1), []),
        children: b.jsx(ee.div, {
            tabIndex: g || E === 0 ? -1 : 0,
            "data-orientation": r,
            ...f,
            ref: m,
            style: {
                outline: "none",
                ...e.style
            },
            onMouseDown: Q(e.onMouseDown, () => {
                S.current = !0
            }
            ),
            onFocus: Q(e.onFocus, P => {
                const L = !S.current;
                if (P.target === P.currentTarget && L && !g) {
                    const O = new CustomEvent(Pu,LA);
                    if (P.currentTarget.dispatchEvent(O),
                    !O.defaultPrevented) {
                        const A = _().filter(F => F.focusable)
                          , N = A.find(F => F.active)
                          , B = A.find(F => F.id === h)
                          , H = [N, B, ...A].filter(Boolean).map(F => F.ref.current);
                        Pw(H, c)
                    }
                }
                S.current = !1
            }
            ),
            onBlur: Q(e.onBlur, () => v(!1))
        })
    })
}
)
  , kw = "RovingFocusGroupItem"
  , Cw = p.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, focusable: r=!0, active: o=!1, tabStopId: s, ...i} = e
      , a = ws()
      , l = s || a
      , u = FA(kw, n)
      , c = u.currentTabStopId === l
      , f = _w(n)
      , {onFocusableItemAdd: d, onFocusableItemRemove: m} = u;
    return p.useEffect( () => {
        if (r)
            return d(),
            () => m()
    }
    , [r, d, m]),
    b.jsx(Qc.ItemSlot, {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: b.jsx(ee.span, {
            tabIndex: c ? 0 : -1,
            "data-orientation": u.orientation,
            ...i,
            ref: t,
            onMouseDown: Q(e.onMouseDown, y => {
                r ? u.onItemFocus(l) : y.preventDefault()
            }
            ),
            onFocus: Q(e.onFocus, () => u.onItemFocus(l)),
            onKeyDown: Q(e.onKeyDown, y => {
                if (y.key === "Tab" && y.shiftKey) {
                    u.onItemShiftTab();
                    return
                }
                if (y.target !== y.currentTarget)
                    return;
                const h = VA(y, u.orientation, u.dir);
                if (h !== void 0) {
                    if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey)
                        return;
                    y.preventDefault();
                    let g = f().filter(v => v.focusable).map(v => v.ref.current);
                    if (h === "last")
                        g.reverse();
                    else if (h === "prev" || h === "next") {
                        h === "prev" && g.reverse();
                        const v = g.indexOf(y.currentTarget);
                        g = u.loop ? HA(g, v + 1) : g.slice(v + 1)
                    }
                    setTimeout( () => Pw(g))
                }
            }
            )
        })
    })
}
);
Cw.displayName = kw;
var UA = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function BA(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}
function VA(e, t, n) {
    const r = BA(e.key, n);
    if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
        return UA[r]
}
function Pw(e, t=!1) {
    const n = document.activeElement;
    for (const r of e)
        if (r === n || (r.focus({
            preventScroll: t
        }),
        document.activeElement !== n))
            return
}
function HA(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
var WA = Ew
  , KA = Cw
  , _f = "Tabs"
  , [qA,kj] = ni(_f, [Sw])
  , Tw = Sw()
  , [GA,Sf] = qA(_f)
  , Rw = p.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, onValueChange: o, defaultValue: s, orientation: i="horizontal", dir: a, activationMode: l="automatic", ...u} = e
      , c = gf(a)
      , [f,d] = ri({
        prop: r,
        onChange: o,
        defaultProp: s
    });
    return b.jsx(GA, {
        scope: n,
        baseId: ws(),
        value: f,
        onValueChange: d,
        orientation: i,
        dir: c,
        activationMode: l,
        children: b.jsx(ee.div, {
            dir: c,
            "data-orientation": i,
            ...u,
            ref: t
        })
    })
}
);
Rw.displayName = _f;
var Aw = "TabsList"
  , jw = p.forwardRef( (e, t) => {
    const {__scopeTabs: n, loop: r=!0, ...o} = e
      , s = Sf(Aw, n)
      , i = Tw(n);
    return b.jsx(WA, {
        asChild: !0,
        ...i,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: b.jsx(ee.div, {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...o,
            ref: t
        })
    })
}
);
jw.displayName = Aw;
var Nw = "TabsTrigger"
  , Ow = p.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, disabled: o=!1, ...s} = e
      , i = Sf(Nw, n)
      , a = Tw(n)
      , l = Dw(i.baseId, r)
      , u = $w(i.baseId, r)
      , c = r === i.value;
    return b.jsx(KA, {
        asChild: !0,
        ...a,
        focusable: !o,
        active: c,
        children: b.jsx(ee.button, {
            type: "button",
            role: "tab",
            "aria-selected": c,
            "aria-controls": u,
            "data-state": c ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...s,
            ref: t,
            onMouseDown: Q(e.onMouseDown, f => {
                !o && f.button === 0 && f.ctrlKey === !1 ? i.onValueChange(r) : f.preventDefault()
            }
            ),
            onKeyDown: Q(e.onKeyDown, f => {
                [" ", "Enter"].includes(f.key) && i.onValueChange(r)
            }
            ),
            onFocus: Q(e.onFocus, () => {
                const f = i.activationMode !== "manual";
                !c && !o && f && i.onValueChange(r)
            }
            )
        })
    })
}
);
Ow.displayName = Nw;
var Iw = "TabsContent"
  , Lw = p.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, forceMount: o, children: s, ...i} = e
      , a = Sf(Iw, n)
      , l = Dw(a.baseId, r)
      , u = $w(a.baseId, r)
      , c = r === a.value
      , f = p.useRef(c);
    return p.useEffect( () => {
        const d = requestAnimationFrame( () => f.current = !1);
        return () => cancelAnimationFrame(d)
    }
    , []),
    b.jsx(Tr, {
        present: o || c,
        children: ({present: d}) => b.jsx(ee.div, {
            "data-state": c ? "active" : "inactive",
            "data-orientation": a.orientation,
            role: "tabpanel",
            "aria-labelledby": l,
            hidden: !d,
            id: u,
            tabIndex: 0,
            ...i,
            ref: t,
            style: {
                ...e.style,
                animationDuration: f.current ? "0s" : void 0
            },
            children: d && s
        })
    })
}
);
Lw.displayName = Iw;
function Dw(e, t) {
    return `${e}-trigger-${t}`
}
function $w(e, t) {
    return `${e}-content-${t}`
}
var QA = Rw
  , Mw = jw
  , Fw = Ow
  , zw = Lw;
const YA = QA
  , Uw = p.forwardRef( ({className: e, ...t}, n) => b.jsx(Mw, {
    ref: n,
    className: oe("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", e),
    ...t
}));
Uw.displayName = Mw.displayName;
const Yc = p.forwardRef( ({className: e, ...t}, n) => b.jsx(Fw, {
    ref: n,
    className: oe("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", e),
    ...t
}));
Yc.displayName = Fw.displayName;
const Jc = p.forwardRef( ({className: e, ...t}, n) => b.jsx(zw, {
    ref: n,
    className: oe("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e),
    ...t
}));
Jc.displayName = zw.displayName;
const JA = ({isOpen: e, onClose: t, onLoginSuccess: n, defaultTab: r="login"}) => {
    const [o,s] = p.useState("")
      , [i,a] = p.useState("")
      , [l,u] = p.useState("")
      , [c,f] = p.useState(!1)
      , [d,m] = p.useState(!1)
      , {toast: y} = ti()
      , {signIn: h, resendConfirmation: w} = Sl()
      , g = async _ => {
        var S;
        if (_.preventDefault(),
        !o || !i) {
            y({
                title: "Missing information",
                description: "Please enter both email and password.",
                variant: "destructive"
            });
            return
        }
        f(!0);
        try {
            const {error: E} = await h(o, i);
            E ? (S = E.message) != null && S.includes("Email not confirmed") ? (m(!0),
            y({
                title: "Email not confirmed",
                description: E.message,
                variant: "destructive"
            })) : y({
                title: "Login failed",
                description: E.message || "Please check your credentials and try again.",
                variant: "destructive"
            }) : (y({
                title: "Login successful!",
                description: "Welcome back!"
            }),
            m(!1),
            n())
        } catch (E) {
            y({
                title: "An error occurred",
                description: E.message || "Please try again later.",
                variant: "destructive"
            })
        } finally {
            f(!1)
        }
    }
      , v = async () => {
        if (!o) {
            y({
                title: "Email required",
                description: "Please enter your email address.",
                variant: "destructive"
            });
            return
        }
        f(!0);
        try {
            const {error: _} = await w(o);
            _ ? y({
                title: "Failed to resend confirmation",
                description: _.message,
                variant: "destructive"
            }) : (y({
                title: "Confirmation email sent!",
                description: "Please check your email for the confirmation link."
            }),
            m(!1))
        } catch (_) {
            y({
                title: "An error occurred",
                description: _.message || "Please try again later.",
                variant: "destructive"
            })
        } finally {
            f(!1)
        }
    }
      , x = async _ => {
        if (_.preventDefault(),
        !o || !i) {
            y({
                title: "Missing information",
                description: "Please enter both email and password.",
                variant: "destructive"
            });
            return
        }
        if (i.length < 6) {
            y({
                title: "Password too short",
                description: "Password must be at least 6 characters long.",
                variant: "destructive"
            });
            return
        }
        f(!0);
        try {
            console.log("Starting signup redirect process for:", o),
            sessionStorage.removeItem("pendingSignup");
            const S = {
                email: o.trim(),
                password: i
            };
            sessionStorage.setItem("pendingSignup", JSON.stringify(S)),
            console.log("Stored pending signup credentials"),
            console.log("Invoking create-checkout function...");
            const E = l ? {
                coupon_code: l.trim()
            } : {}
              , {data: C, error: P} = await qe.functions.invoke("create-checkout", {
                body: E
            });
            if (console.log("Function response:", {
                data: C,
                error: P
            }),
            P) {
                console.error("Error creating checkout session:", P),
                sessionStorage.removeItem("pendingSignup"),
                y({
                    title: "Error",
                    description: `Failed to start payment process: ${P.message}`,
                    variant: "destructive"
                });
                return
            }
            C != null && C.url ? (console.log("Redirecting to Stripe checkout:", C.url),
            t(),
            window.location.href = C.url) : (console.error("No URL returned from checkout function"),
            sessionStorage.removeItem("pendingSignup"),
            y({
                title: "Error",
                description: "No checkout URL received",
                variant: "destructive"
            }))
        } catch (S) {
            console.error("Error in handleSignUpRedirect:", S),
            sessionStorage.removeItem("pendingSignup"),
            y({
                title: "An error occurred",
                description: S.message || "Please try again later.",
                variant: "destructive"
            })
        } finally {
            f(!1)
        }
    }
    ;
    return b.jsx(RA, {
        open: e,
        onOpenChange: t,
        children: b.jsxs(gw, {
            className: "sm:max-w-[425px] bg-background text-foreground",
            children: [b.jsxs(vw, {
                children: [b.jsx(yw, {
                    children: "Account"
                }), b.jsx(ww, {
                    children: "Login to your existing account or purchase access to create a new one."
                })]
            }), b.jsxs(YA, {
                defaultValue: r,
                className: "w-full",
                children: [b.jsxs(Uw, {
                    className: "grid w-full grid-cols-2",
                    children: [b.jsx(Yc, {
                        value: "login",
                        children: "Login"
                    }), b.jsx(Yc, {
                        value: "signup",
                        children: "Get Access"
                    })]
                }), b.jsx(Jc, {
                    value: "login",
                    children: b.jsxs("form", {
                        onSubmit: g,
                        className: "space-y-4",
                        children: [b.jsxs("div", {
                            className: "space-y-2",
                            children: [b.jsx(Vr, {
                                htmlFor: "email",
                                children: "Email"
                            }), b.jsx(Br, {
                                id: "email",
                                type: "email",
                                placeholder: "you@example.com",
                                value: o,
                                onChange: _ => s(_.target.value),
                                required: !0
                            })]
                        }), b.jsxs("div", {
                            className: "space-y-2",
                            children: [b.jsx(Vr, {
                                htmlFor: "password",
                                children: "Password"
                            }), b.jsx(Br, {
                                id: "password",
                                type: "password",
                                value: i,
                                onChange: _ => a(_.target.value),
                                required: !0
                            })]
                        }), d && b.jsxs("div", {
                            className: "p-3 bg-yellow-50 border border-yellow-200 rounded-md",
                            children: [b.jsx("p", {
                                className: "text-sm text-yellow-800 mb-2",
                                children: "Your email address needs to be confirmed before you can sign in."
                            }), b.jsx(At, {
                                type: "button",
                                variant: "outline",
                                size: "sm",
                                onClick: v,
                                disabled: c,
                                children: "Resend Confirmation Email"
                            })]
                        }), b.jsx(At, {
                            type: "submit",
                            className: "w-full",
                            disabled: c,
                            children: c ? "Signing in..." : "Sign In"
                        })]
                    })
                }), b.jsx(Jc, {
                    value: "signup",
                    children: b.jsxs("form", {
                        onSubmit: x,
                        className: "space-y-4",
                        children: [b.jsxs("div", {
                            className: "space-y-2",
                            children: [b.jsx(Vr, {
                                htmlFor: "signup-email",
                                children: "Email"
                            }), b.jsx(Br, {
                                id: "signup-email",
                                type: "email",
                                placeholder: "you@example.com",
                                value: o,
                                onChange: _ => s(_.target.value),
                                required: !0
                            })]
                        }), b.jsxs("div", {
                            className: "space-y-2",
                            children: [b.jsx(Vr, {
                                htmlFor: "signup-password",
                                children: "Password"
                            }), b.jsx(Br, {
                                id: "signup-password",
                                type: "password",
                                placeholder: "At least 6 characters",
                                value: i,
                                onChange: _ => a(_.target.value),
                                required: !0,
                                minLength: 6
                            })]
                        }), b.jsxs("div", {
                            className: "space-y-2",
                            children: [b.jsx(Vr, {
                                htmlFor: "coupon-code",
                                children: "Coupon Code (Optional)"
                            }), b.jsx(Br, {
                                id: "coupon-code",
                                type: "text",
                                placeholder: "Enter coupon code",
                                value: l,
                                onChange: _ => u(_.target.value)
                            })]
                        }), b.jsx("div", {
                            className: "text-sm text-muted-foreground mb-4",
                            children: "You'll be redirected to complete your $10 one-time payment, then your account will be created automatically."
                        }), b.jsx(At, {
                            type: "submit",
                            className: "w-full",
                            disabled: c,
                            children: c ? "Redirecting to Payment..." : "Purchase Access - $10"
                        })]
                    })
                })]
            })]
        })
    })
}
  , XA = ({onPaymentClick: e, isPaid: t}) => b.jsxs(El, {
    className: "w-full max-w-md bg-gray-800/90 backdrop-blur-xl border border-gray-600/50 shadow-2xl",
    children: [b.jsxs(w0, {
        className: "bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-md text-white rounded-t-lg border-b border-gray-600/30",
        children: [b.jsx(x0, {
            className: "text-2xl font-bold text-white",
            children: "Aurafy Premium"
        }), b.jsx(b0, {
            className: "text-gray-200",
            children: "Access to all Aurafy features"
        })]
    }), b.jsxs(kl, {
        className: "pt-6 pb-2",
        children: [b.jsxs("div", {
            className: "flex justify-center mb-6",
            children: [b.jsx("p", {
                className: "text-4xl font-bold text-theme-blue",
                children: "$10"
            }), b.jsx("span", {
                className: "text-gray-400 self-end mb-1 ml-1",
                children: "one-time"
            })]
        }), b.jsx("ul", {
            className: "space-y-2 mb-6",
            children: ["Unlimited sound therapy sessions", "All premium frequencies", "Advanced emotion analysis", "Save your favorite sounds"].map( (n, r) => b.jsxs("li", {
                className: "flex items-center gap-2",
                children: [b.jsx(S_, {
                    size: 18,
                    className: "text-green-400 flex-shrink-0"
                }), b.jsx("span", {
                    className: "text-gray-200",
                    children: n
                })]
            }, r))
        })]
    }), b.jsx(_0, {
        children: b.jsx(At, {
            className: "w-full bg-theme-blue/90 hover:bg-theme-blue text-white backdrop-blur-md border border-gray-600/30 transition-all duration-300 shadow-lg",
            size: "lg",
            onClick: e,
            disabled: t,
            children: t ? "Already Purchased" : "Purchase Now"
        })
    })]
});
function ZA() {
    const e = p.useRef(null)
      , t = p.useRef();
    return p.useEffect( () => {
        const n = e.current;
        if (!n)
            return;
        const r = n.getContext("2d");
        if (!r)
            return;
        let o = 0;
        const s = () => {
            n.width = n.offsetWidth,
            n.height = n.offsetHeight,
            r.clearRect(0, 0, n.width, n.height);
            const i = r.createImageData(n.width, n.height)
              , a = i.data
              , l = n.width * .3
              , u = n.height * .5
              , c = n.width * .7
              , f = n.height * .5
              , d = n.width / 2
              , m = n.height / 2
              , y = Math.sqrt(d * d + m * m);
            for (let h = 0; h < n.width; h += 1)
                for (let w = 0; w < n.height; w += 1) {
                    const g = Math.sqrt((h - l) ** 2 + (w - u) ** 2)
                      , v = Math.sqrt((h - c) ** 2 + (w - f) ** 2)
                      , x = Math.sin(g * .08 - o * .15)
                      , _ = Math.sin(v * .08 - o * .15)
                      , S = (x + _) / 2
                      , E = Math.sqrt((h - d) ** 2 + (w - m) ** 2)
                      , C = Math.max(0, 1 - E / y * .7)
                      , P = Math.min(h / 30, (n.width - h) / 30, 1)
                      , L = Math.min(w / 30, (n.height - w) / 30, 1)
                      , O = Math.min(P, L)
                      , A = Math.abs(S) * 160 * C * O
                      , N = (w * n.width + h) * 4;
                    N < a.length && A > 0 && (a[N] = A * .2,
                    a[N + 1] = A * .35,
                    a[N + 2] = A * .9,
                    a[N + 3] = A * .65)
                }
            r.putImageData(i, 0, 0),
            o += 1,
            t.current = requestAnimationFrame(s)
        }
        ;
        return s(),
        () => {
            t.current && cancelAnimationFrame(t.current)
        }
    }
    , []),
    b.jsx("div", {
        className: "absolute inset-0 w-full h-full opacity-75",
        children: b.jsx("canvas", {
            ref: e,
            className: "w-full h-full",
            style: {
                filter: "blur(0.3px)"
            }
        })
    })
}
const Ma = {
    calm: {
        baseFrequency: 432,
        description: "A soothing frequency to promote relaxation and peace."
    },
    happy: {
        baseFrequency: 528,
        description: "An uplifting frequency to enhance positivity and joy."
    },
    sad: {
        baseFrequency: 396,
        description: "A frequency to help process and release sadness and grief."
    },
    angry: {
        baseFrequency: 741,
        description: "A frequency to help process and transform anger."
    },
    anxious: {
        baseFrequency: 639,
        description: "A balancing frequency to soothe anxiety and restore harmony."
    }
};
function ej(e) {
    e = e.toLowerCase();
    const t = {
        calm: ["calm", "peaceful", "relaxed", "serene", "tranquil", "centered", "composed"],
        happy: ["happy", "joy", "excited", "pleased", "delighted", "content", "cheerful", "glad"],
        sad: ["sad", "unhappy", "depressed", "gloomy", "miserable", "downhearted", "sorrowful"],
        angry: ["angry", "furious", "mad", "irritated", "annoyed", "outraged", "incensed"],
        anxious: ["anxious", "nervous", "worried", "uneasy", "stressed", "concerned", "tense"]
    };
    for (const [n,r] of Object.entries(t))
        if (r.some(o => e.includes(o)))
            return n;
    return "calm"
}
function Wp(e) {
    const n = Ma[e] || Ma["calm"]
      , r = Math.random() * 20 - 10;
    return n.baseFrequency + r
}
function Tu(e) {
    var n;
    return ((n = Ma[e]) == null ? void 0 : n.description) || Ma["calm"].description
}
function Bw() {
    const [e,t] = p.useState(null)
      , [n,r] = p.useState(!0)
      , {user: o} = Sl()
      , {toast: s} = ti()
      , i = async () => {
        if (!o) {
            t(!1),
            r(!1);
            return
        }
        r(!0);
        try {
            console.log("Checking payment status for user:", o.email);
            const {data: l, error: u} = await qe.functions.invoke("check-payment-status");
            u ? (console.error("Error checking payment status:", u),
            u.message && !u.message.includes("403") && !u.message.includes("PGRST116") && s({
                title: "Error",
                description: "Failed to verify payment status",
                variant: "destructive"
            }),
            t(!1)) : (console.log("Payment status response:", l),
            t(l.hasPaid))
        } catch (l) {
            console.error("Error checking payment:", l),
            t(!1)
        } finally {
            r(!1)
        }
    }
      , a = async () => {
        if (!o) {
            s({
                title: "Sign in required",
                description: "Please sign in to purchase",
                variant: "destructive"
            });
            return
        }
        try {
            console.log("Creating checkout for existing user:", o.email);
            const {data: l, error: u} = await qe.functions.invoke("create-checkout");
            if (u) {
                console.error("Error creating checkout session:", u),
                s({
                    title: "Error",
                    description: "Failed to start payment process",
                    variant: "destructive"
                });
                return
            }
            l != null && l.url && (console.log("Redirecting to checkout:", l.url),
            window.location.href = l.url)
        } catch (l) {
            console.error("Error starting payment:", l),
            s({
                title: "Error",
                description: "Payment process failed to start",
                variant: "destructive"
            })
        }
    }
    ;
    return p.useEffect( () => {
        o ? i() : (t(!1),
        r(!1))
    }
    , [o]),
    {
        hasPaid: e,
        isLoading: n,
        checkPaymentStatus: i,
        handlePayment: a
    }
}
const Vw = () => b.jsxs("a", {
    href: "/",
    className: "flex items-center gap-3",
    children: [b.jsx("img", {
        src: "/lovable-uploads/5cf68e60-3c08-4876-bf7b-c025f15da32a.png",
        alt: "Aurafy Logo",
        className: "h-10 w-auto"
    }), b.jsx("h1", {
        className: "text-3xl font-bold text-white",
        children: "Aurafy"
    })]
})
  , tj = () => {
    const [e,t] = p.useState("")
      , [n,r] = p.useState("calm")
      , [o,s] = p.useState(!1)
      , [i,a] = p.useState(432)
      , [l,u] = p.useState(!1)
      , [c,f] = p.useState("login")
      , {toast: d} = ti()
      , {user: m, signOut: y} = Sl()
      , {hasPaid: h, isLoading: w, handlePayment: g} = Bw()
      , v = m && !w && h === !0;
    p.useEffect( () => () => {
        o && bt.stopSound()
    }
    , [o]),
    p.useEffect( () => {
        !v && o && (bt.stopSound(),
        s(!1))
    }
    , [v, o]);
    const x = () => {
        if (!v) {
            d({
                title: "Access restricted",
                description: "Please log in and subscribe to use this feature.",
                variant: "destructive"
            });
            return
        }
        if (!e.trim())
            return;
        const A = ej(e);
        r(A);
        const N = Wp(A);
        a(N),
        o && (bt.stopSound(),
        bt.playSound(N)),
        d({
            title: `Detected: ${A}`,
            description: Tu(A)
        })
    }
      , _ = A => {
        if (!v) {
            d({
                title: "Access restricted",
                description: "Please log in and subscribe to use this feature.",
                variant: "destructive"
            });
            return
        }
        r(A);
        const N = Wp(A);
        a(N),
        o && (bt.stopSound(),
        bt.playSound(N)),
        d({
            title: `Selected: ${A}`,
            description: Tu(A)
        })
    }
      , S = () => {
        if (!v) {
            d({
                title: "Access restricted",
                description: "Please log in and subscribe to use this feature.",
                variant: "destructive"
            });
            return
        }
        o ? (bt.stopSound(),
        s(!1)) : (bt.resume(),
        bt.playSound(i),
        s(!0))
    }
      , E = A => {
        if (A.preventDefault(),
        !v) {
            d({
                title: "Access restricted",
                description: "Please log in and subscribe to use this feature.",
                variant: "destructive"
            }),
            t("");
            return
        }
        x()
    }
      , C = () => {
        u(!1),
        d({
            title: "Welcome!",
            description: "You have successfully logged in."
        })
    }
      , P = async () => {
        o && (bt.stopSound(),
        s(!1)),
        await y(),
        d({
            title: "Logged out",
            description: "You have been logged out successfully."
        })
    }
      , L = () => {
        m ? g() : (f("signup"),
        u(!0))
    }
      , O = () => v ? b.jsx(El, {
        className: "w-full max-w-3xl bg-card/20 backdrop-blur-xl border border-white/20 shadow-2xl",
        children: b.jsxs(kl, {
            className: "p-6",
            children: [b.jsx(Ip, {
                isPlaying: o,
                emotion: n
            }), b.jsxs("div", {
                className: "mb-6 text-center",
                children: [b.jsxs("h3", {
                    className: "text-xl font-medium mb-1 text-theme-blue-light capitalize",
                    children: [n, " Frequency"]
                }), b.jsx("p", {
                    className: "text-sm text-muted-foreground mb-2",
                    children: Tu(n)
                }), b.jsxs("p", {
                    className: "text-md font-medium text-theme-blue",
                    children: ["Current Frequency: ", i.toFixed(1), " Hz"]
                })]
            }), b.jsx("div", {
                className: "flex justify-center mb-10",
                children: b.jsx(bR, {
                    isPlaying: o,
                    onPlayPauseToggle: S
                })
            }), b.jsx(_R, {
                selectedEmotion: n,
                onSelectEmotion: _
            }), b.jsx("form", {
                onSubmit: E,
                className: "space-y-6 mt-10",
                children: b.jsxs("div", {
                    className: "space-y-2",
                    children: [b.jsx("h2", {
                        className: "text-xl font-medium text-center",
                        children: "How are you feeling?"
                    }), b.jsxs("div", {
                        className: "flex flex-col gap-4",
                        children: [b.jsx(y0, {
                            value: e,
                            onChange: A => t(A.target.value),
                            placeholder: "Describe your mood in detail...",
                            className: "min-h-[120px] bg-white/10 backdrop-blur-md border border-white/20 focus:border-theme-blue-light focus:bg-white/15 transition-all duration-300"
                        }), b.jsx("div", {
                            className: "flex justify-center",
                            children: b.jsx(At, {
                                type: "submit",
                                className: "px-8 bg-theme-blue/80 hover:bg-theme-blue backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300",
                                children: "Generate"
                            })
                        })]
                    })]
                })
            })]
        })
    }) : w && m ? b.jsx("div", {
        className: "flex items-center justify-center h-64",
        children: b.jsx("div", {
            className: "bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20",
            children: b.jsx("p", {
                className: "text-lg",
                children: "Checking subscription status..."
            })
        })
    }) : b.jsxs("div", {
        className: "flex flex-col items-center space-y-12 max-w-4xl mx-auto",
        children: [b.jsxs("div", {
            className: "text-center space-y-6 pt-20 pb-16 relative",
            children: [b.jsx(ZA, {}), b.jsxs("div", {
                className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-6 relative z-10",
                children: [b.jsxs("div", {
                    className: "flex -space-x-2",
                    children: [b.jsx("div", {
                        className: "w-6 h-6 rounded-full bg-theme-blue/80 border-2 border-white/20"
                    }), b.jsx("div", {
                        className: "w-6 h-6 rounded-full bg-theme-blue-light/80 border-2 border-white/20"
                    }), b.jsx("div", {
                        className: "w-6 h-6 rounded-full bg-purple-500/80 border-2 border-white/20"
                    })]
                }), b.jsx("span", {
                    className: "text-sm text-muted-foreground",
                    children: "157 users are already using"
                })]
            }), b.jsxs("h1", {
                className: "text-5xl md:text-6xl font-bold text-white leading-tight relative z-10",
                children: ["Transform Your Emotional State", b.jsx("br", {}), b.jsx("span", {
                    className: "bg-gradient-to-r from-theme-blue to-theme-blue-light bg-clip-text text-transparent",
                    children: "with Sound Therapy"
                })]
            }), b.jsxs("p", {
                className: "text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed relative z-10",
                children: ["Pin your stories to your site and watch your conversions", b.jsx("br", {}), "grow with minimal effort."]
            })]
        }), b.jsxs("div", {
            className: "w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16",
            children: [b.jsxs("div", {
                className: "space-y-6 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10",
                children: [b.jsx("h2", {
                    className: "text-3xl font-semibold text-theme-blue",
                    children: "Experience the Power of Sound Therapy"
                }), b.jsx("ul", {
                    className: "space-y-4",
                    children: ["Reduce stress and anxiety with calming frequencies", "Enhance focus and motivation with energizing tones", "Improve sleep quality with relaxing sound patterns", "Balance emotions through targeted frequency therapy"].map( (A, N) => b.jsxs("li", {
                        className: "flex items-center gap-3",
                        children: [b.jsx("div", {
                            className: "w-2 h-2 rounded-full bg-theme-blue flex-shrink-0"
                        }), b.jsx("span", {
                            className: "text-lg",
                            children: A
                        })]
                    }, N))
                })]
            }), b.jsx("div", {
                className: "flex justify-center",
                children: b.jsx("div", {
                    className: "bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10",
                    children: b.jsx(Ip, {
                        isPlaying: !1,
                        emotion: "calm"
                    })
                })
            })]
        }), b.jsxs("div", {
            className: "w-full text-center space-y-8 !mt-24",
            children: [b.jsx("h2", {
                className: "text-4xl font-bold text-white",
                children: "Simple, One-Time Payment"
            }), b.jsx("p", {
                className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                children: "No subscriptions, no hidden fees. Get lifetime access to all premium features."
            }), b.jsx("div", {
                className: "flex justify-center pt-8",
                children: b.jsx("div", {
                    className: "bg-gray-900/80 backdrop-blur-xl rounded-xl p-8 border border-gray-700/50 shadow-2xl max-w-md w-full",
                    children: b.jsx(XA, {
                        onPaymentClick: L,
                        isPaid: !1
                    })
                })
            })]
        })]
    });
    return b.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-background via-background to-theme-blue/10 text-foreground relative overflow-hidden",
        children: [b.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-theme-blue/5 via-transparent to-theme-blue-light/5 backdrop-blur-[1px]"
        }), b.jsx("div", {
            className: "absolute top-20 left-10 w-72 h-72 bg-theme-blue/10 rounded-full blur-3xl"
        }), b.jsx("div", {
            className: "absolute bottom-20 right-10 w-96 h-96 bg-theme-blue-light/10 rounded-full blur-3xl"
        }), b.jsxs("div", {
            className: "relative z-10 w-full",
            children: [b.jsxs("div", {
                className: "max-w-6xl mx-auto px-4",
                children: [b.jsxs("header", {
                    className: "w-full flex justify-between items-center py-3 bg-white/10 backdrop-blur-md rounded-xl mt-4 px-6 border border-white/20 shadow-lg",
                    children: [b.jsx(Vw, {}), m ? b.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [b.jsx("span", {
                            className: "text-sm text-theme-blue bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20",
                            children: m.email
                        }), b.jsx(At, {
                            variant: "outline",
                            onClick: P,
                            className: "border-white/30 bg-white/[0.05] backdrop-blur-md text-white hover:bg-white/10 hover:text-white transition-all duration-300 shadow-lg",
                            children: "Sign Out"
                        })]
                    }) : b.jsx(At, {
                        variant: "outline",
                        onClick: () => {
                            f("login"),
                            u(!0)
                        }
                        ,
                        className: "border-white/30 bg-white/[0.05] backdrop-blur-md text-white hover:bg-white/10 hover:text-white transition-all duration-300 shadow-lg",
                        children: "Login"
                    })]
                }), b.jsx("main", {
                    className: "py-8",
                    children: O()
                })]
            }), b.jsx(JA, {
                isOpen: l,
                onClose: () => u(!1),
                onLoginSuccess: C,
                defaultTab: c
            })]
        })]
    })
}
  , nj = () => {
    const e = Hy()
      , [t] = IC()
      , {checkPaymentStatus: n} = Bw()
      , {signUp: r, signIn: o} = Sl()
      , {toast: s} = ti()
      , [i,a] = p.useState(!1)
      , [l,u] = p.useState(!1)
      , c = p.useRef(!1);
    return p.useEffect( () => {
        const f = async () => {
            var h, w;
            if (c.current) {
                console.log("Signup already processed, skipping...");
                return
            }
            const m = sessionStorage.getItem("pendingSignup")
              , y = t.get("session_id");
            if (console.log("Payment success page loaded:", {
                pendingSignup: !!m,
                sessionId: y
            }),
            m && !l) {
                c.current = !0,
                a(!0);
                try {
                    const {email: g, password: v} = JSON.parse(m);
                    console.log("Processing account creation for:", g),
                    console.log("Creating new account...");
                    const {error: x, user: _} = await r(g, v);
                    if (x)
                        if (console.error("Account creation error:", x),
                        (h = x.message) != null && h.includes("already registered") || (w = x.message) != null && w.includes("already exists")) {
                            console.log("User already exists, trying to sign in...");
                            const {error: S} = await o(g, v);
                            S ? (console.error("Sign in failed for existing user:", S),
                            s({
                                title: "Account exists but sign in failed",
                                description: "Please try signing in manually from the homepage.",
                                variant: "destructive"
                            })) : (console.log("Successfully signed in existing user"),
                            s({
                                title: "Welcome back!",
                                description: "You have been signed in successfully."
                            }),
                            setTimeout( () => {
                                d(y, g)
                            }
                            , 3e3))
                        } else
                            s({
                                title: "Account creation failed",
                                description: x.message || "Please contact support with your payment confirmation.",
                                variant: "destructive"
                            });
                    else
                        _ && (console.log("Account created successfully:", _.id),
                        s({
                            title: "Account created successfully!",
                            description: "Please check your email to confirm your account."
                        }),
                        setTimeout( () => {
                            d(y, g)
                        }
                        , 4e3))
                } catch (g) {
                    console.error("Error in createAccountAfterPayment:", g),
                    s({
                        title: "Account creation error",
                        description: g.message || "Please contact support.",
                        variant: "destructive"
                    })
                } finally {
                    a(!1)
                }
            } else
                n()
        }
          , d = async (m, y) => {
            try {
                if (console.log("Linking payment to user with session ID:", m, "for email:", y),
                !m) {
                    console.error("No session ID provided for payment linking");
                    return
                }
                await new Promise(x => setTimeout(x, 2e3));
                const {data: {user: h}, error: w} = await qe.auth.getUser();
                if (w || !h) {
                    if (console.error("No authenticated user found for payment linking:", w),
                    y) {
                        console.log("Attempting to link payment by email since no authenticated user found");
                        const {data: x, error: _} = await qe.from("user_payments").update({
                            user_id: null,
                            status: "completed"
                        }).eq("stripe_session_id", m).select().single();
                        _ ? console.error("Error updating payment status:", _) : console.log("Updated payment status, will link user_id later")
                    }
                    return
                }
                console.log("Linking payment for authenticated user:", h.id, "with email:", h.email);
                const {data: g, error: v} = await qe.from("user_payments").update({
                    user_id: h.id,
                    status: "completed"
                }).eq("stripe_session_id", m).select().single();
                if (v) {
                    console.error("Error linking payment to user:", v);
                    const {data: x, error: _} = await qe.from("user_payments").select("*").eq("stripe_session_id", m).single();
                    if (!_ && x)
                        if (console.log("Found payment record:", x),
                        x.user_id === h.id)
                            console.log("Payment already linked to this user");
                        else {
                            const {error: S} = await qe.from("user_payments").update({
                                user_id: h.id
                            }).eq("id", x.id);
                            S ? console.error("Force update failed:", S) : console.log("Successfully force-linked payment to user")
                        }
                    s({
                        title: "Payment linking issue",
                        description: "Your account was created but there may be an issue linking your payment. Please contact support if needed.",
                        variant: "destructive"
                    })
                } else
                    g ? (console.log("Successfully linked payment to user:", g),
                    s({
                        title: "Payment linked successfully!",
                        description: "Your account and payment are now connected."
                    })) : console.log("No payment record found to link");
                sessionStorage.removeItem("pendingSignup"),
                u(!0),
                setTimeout( () => {
                    n()
                }
                , 3e3)
            } catch (h) {
                console.error("Error linking payment to user:", h),
                s({
                    title: "Payment linking error",
                    description: "There was an issue linking your payment. Please contact support.",
                    variant: "destructive"
                })
            }
        }
        ;
        f()
    }
    , []),
    b.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-background via-background to-theme-blue/10 flex flex-col items-center justify-center p-4",
        children: b.jsx(El, {
            className: "w-full max-w-md border-green-500 bg-card/20 backdrop-blur-xl border border-white/20 shadow-2xl",
            children: b.jsxs(kl, {
                className: "pt-6 space-y-6 flex flex-col items-center",
                children: [b.jsx(Vw, {}), b.jsxs("div", {
                    className: "text-center space-y-2",
                    children: [b.jsx(E_, {
                        className: "h-16 w-16 text-green-500 mx-auto"
                    }), b.jsx("h1", {
                        className: "text-2xl font-bold text-green-500",
                        children: "Payment Successful!"
                    }), i ? b.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Creating your account and linking your payment..."
                    }) : l ? b.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Your account has been created and your payment has been linked! Please check your email to confirm your account if needed."
                    }) : b.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Thank you for your purchase! You now have access to all Aurafy Premium features."
                    })]
                }), b.jsx(At, {
                    onClick: () => e("/"),
                    className: "mt-6 w-full bg-theme-blue/80 hover:bg-theme-blue",
                    size: "lg",
                    disabled: i,
                    children: i ? "Setting up your account..." : "Continue to Aurafy"
                })]
            })
        })
    })
}
  , rj = () => {
    const e = ml();
    return p.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    b.jsx("div", {
        className: "min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4",
        children: b.jsxs("div", {
            className: "text-center space-y-6 max-w-md",
            children: [b.jsx("h1", {
                className: "text-6xl font-bold text-theme-blue",
                children: "404"
            }), b.jsx("p", {
                className: "text-xl",
                children: "Oops! We couldn't find the frequency you're looking for."
            }), b.jsx(At, {
                asChild: !0,
                children: b.jsx("a", {
                    href: "/",
                    className: "inline-block",
                    children: "Return Home"
                })
            })]
        })
    })
}
  , oj = new Mk
  , sj = () => b.jsx(zk, {
    client: oj,
    children: b.jsx(mk, {
        children: b.jsxs(XT, {
            children: [b.jsx(fS, {}), b.jsx(US, {}), b.jsx(OC, {
                children: b.jsxs(RC, {
                    children: [b.jsx(ra, {
                        path: "/",
                        element: b.jsx(tj, {})
                    }), b.jsx(ra, {
                        path: "/payment-success",
                        element: b.jsx(nj, {})
                    }), b.jsx(ra, {
                        path: "*",
                        element: b.jsx(rj, {})
                    })]
                })
            })]
        })
    })
});
document.title = "Aurafy - Sound Frequency for Emotion";
mv(document.getElementById("root")).render(b.jsx(sj, {}));
export {em as g};