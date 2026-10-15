var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(() => {
  var Os = Object.defineProperty;
  var U = (l, e) => {
    for (var t in e) Os(l, t, { get: e[t], enumerable: true });
  };
  function W() {
  }
  function Bt(l) {
    return l();
  }
  function ot() {
    return /* @__PURE__ */ Object.create(null);
  }
  function v(l) {
    l.forEach(Bt);
  }
  function ut(l) {
    return typeof l == "function";
  }
  function O(l, e) {
    return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
  }
  var gt;
  function ce(l, e) {
    return l === e ? true : (gt || (gt = document.createElement("a")), gt.href = e, l === gt.href);
  }
  function Hl(l) {
    return Object.keys(l).length === 0;
  }
  var xt = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
  var Ct = class l {
    constructor(e) {
      __publicField(this, "_listeners", "WeakMap" in xt ? /* @__PURE__ */ new WeakMap() : void 0);
      __publicField(this, "_observer");
      __publicField(this, "options");
      this.options = e;
    }
    observe(e, t) {
      return this._listeners.set(e, t), this._getObserver().observe(e, this.options), () => {
        this._listeners.delete(e), this._observer.unobserve(e);
      };
    }
    _getObserver() {
      var _a2;
      return (_a2 = this._observer) != null ? _a2 : this._observer = new ResizeObserver((e) => {
        var _a3;
        for (let t of e) l.entries.set(t.target, t), (_a3 = this._listeners.get(t.target)) == null ? void 0 : _a3(t);
      });
    }
  };
  Ct.entries = "WeakMap" in xt ? /* @__PURE__ */ new WeakMap() : void 0;
  var Rl = false;
  function Sl() {
    Rl = true;
  }
  function Vl() {
    Rl = false;
  }
  function m(l, e) {
    l.appendChild(e);
  }
  function x(l, e, t) {
    l.insertBefore(e, t || null);
  }
  function B(l) {
    l.parentNode && l.parentNode.removeChild(l);
  }
  function $(l, e) {
    for (let t = 0; t < l.length; t += 1) l[t] && l[t].d(e);
  }
  function F(l) {
    return document.createElement(l);
  }
  function Ps(l) {
    return document.createElementNS("http://www.w3.org/2000/svg", l);
  }
  function Z(l) {
    return document.createTextNode(l);
  }
  function X() {
    return Z(" ");
  }
  function ee() {
    return Z("");
  }
  function M(l, e, t, s) {
    return l.addEventListener(e, t, s), () => l.removeEventListener(e, t, s);
  }
  function _(l, e, t) {
    t == null ? l.removeAttribute(e) : l.getAttribute(e) !== t && l.setAttribute(e, t);
  }
  function Dl(l) {
    return Array.from(l.childNodes);
  }
  function H(l, e) {
    e = "" + e, l.data !== e && (l.data = e);
  }
  function ge(l, e) {
    l.value = e != null ? e : "";
  }
  function w(l, e, t) {
    l.classList.toggle(e, !!t);
  }
  var It = class {
    constructor(e = false) {
      __publicField(this, "is_svg", false);
      __publicField(this, "e");
      __publicField(this, "n");
      __publicField(this, "t");
      __publicField(this, "a");
      this.is_svg = e, this.e = this.n = null;
    }
    c(e) {
      this.h(e);
    }
    m(e, t, s = null) {
      this.e || (this.is_svg ? this.e = Ps(t.nodeName) : this.e = F(t.nodeType === 11 ? "TEMPLATE" : t.nodeName), this.t = t.tagName !== "TEMPLATE" ? t : t.content, this.c(e)), this.i(s);
    }
    h(e) {
      this.e.innerHTML = e, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
    }
    i(e) {
      for (let t = 0; t < this.n.length; t += 1) x(this.t, this.n[t], e);
    }
    p(e) {
      this.d(), this.h(e), this.i(this.a);
    }
    d() {
      this.n.forEach(B);
    }
  };
  function Jl(l) {
    let e = {};
    return l.childNodes.forEach((t) => {
      e[t.slot || "default"] = true;
    }), e;
  }
  var te;
  function j(l) {
    te = l;
  }
  function ht() {
    if (!te) throw new Error("Function called outside component initialization");
    return te;
  }
  function Ut(l) {
    ht().$$.on_mount.push(l);
  }
  function yt(l) {
    ht().$$.on_destroy.push(l);
  }
  var se = [];
  var Ce = [], ue = [], Zt = [], sa = Promise.resolve(), Nt = false;
  function Tl() {
    Nt || (Nt = true, sa.then(dt));
  }
  function Ae(l) {
    ue.push(l);
  }
  function Yl(l) {
    Zt.push(l);
  }
  var Xt = /* @__PURE__ */ new Set(), oe = 0;
  function dt() {
    if (oe !== 0) return;
    let l = te;
    do {
      try {
        for (; oe < se.length; ) {
          let e = se[oe];
          oe++, j(e), aa(e.$$);
        }
      } catch (e) {
        throw se.length = 0, oe = 0, e;
      }
      for (j(null), se.length = 0, oe = 0; Ce.length; ) Ce.pop()();
      for (let e = 0; e < ue.length; e += 1) {
        let t = ue[e];
        Xt.has(t) || (Xt.add(t), t());
      }
      ue.length = 0;
    } while (se.length);
    for (; Zt.length; ) Zt.pop()();
    Nt = false, Xt.clear(), j(l);
  }
  function aa(l) {
    if (l.fragment !== null) {
      l.update(), v(l.before_update);
      let e = l.dirty;
      l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, e), l.after_update.forEach(Ae);
    }
  }
  function Ml(l) {
    let e = [], t = [];
    ue.forEach((s) => l.indexOf(s) === -1 ? e.push(s) : t.push(s)), t.forEach((s) => s()), ue = e;
  }
  var At = /* @__PURE__ */ new Set(), ae;
  function ie() {
    ae = { r: 0, c: [], p: ae };
  }
  function re() {
    ae.r || v(ae.c), ae = ae.p;
  }
  function k(l, e) {
    l && l.i && (At.delete(l), l.i(e));
  }
  function V(l, e, t, s) {
    if (l && l.o) {
      if (At.has(l)) return;
      At.add(l), ae.c.push(() => {
        At.delete(l), s && (t && l.d(1), s());
      }), l.o(e);
    } else s && s();
  }
  function S(l) {
    return (l == null ? void 0 : l.length) !== void 0 ? l : Array.from(l);
  }
  function wl(l, e) {
    V(l, 1, 1, () => {
      e.delete(l.key);
    });
  }
  function zl(l, e, t, s, a, i, r, n, c, C, u, A) {
    let o = l.length, d = i.length, g = o, I = {};
    for (; g--; ) I[l[g].key] = g;
    let Q = [], f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), h = [];
    for (g = d; g--; ) {
      let N = A(a, i, g), R = t(N), G = r.get(R);
      G ? s && h.push(() => G.p(N, e)) : (G = C(R, N), G.c()), f.set(R, Q[g] = G), R in I && p.set(R, Math.abs(g - I[R]));
    }
    let y = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Set();
    function z(N) {
      k(N, 1), N.m(n, u), r.set(N.key, N), u = N.first, d--;
    }
    for (; o && d; ) {
      let N = Q[d - 1], R = l[o - 1], G = N.key, J = R.key;
      N === R ? (u = N.first, o--, d--) : f.has(J) ? !r.has(G) || y.has(G) ? z(N) : q.has(J) ? o-- : p.get(G) > p.get(J) ? (q.add(G), z(N)) : (y.add(J), o--) : (c(R, r), o--);
    }
    for (; o--; ) {
      let N = l[o];
      f.has(N.key) || c(N, r);
    }
    for (; d; ) z(Q[d - 1]);
    return v(h), Q;
  }
  var ia = ["allowfullscreen", "allowpaymentrequest", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected"], ra = /* @__PURE__ */ new Set([...ia]);
  function Ol(l, e, t) {
    let s = l.$$.props[e];
    s !== void 0 && (l.$$.bound[s] = t, t(l.$$.ctx[s]));
  }
  function _t(l) {
    l && l.c();
  }
  function _e(l, e, t) {
    let { fragment: s, after_update: a } = l.$$;
    s && s.m(e, t), Ae(() => {
      let i = l.$$.on_mount.map(Bt).filter(ut);
      l.$$.on_destroy ? l.$$.on_destroy.push(...i) : v(i), l.$$.on_mount = [];
    }), a.forEach(Ae);
  }
  function be(l, e) {
    let t = l.$$;
    t.fragment !== null && (Ml(t.after_update), v(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
  }
  function ca(l, e) {
    l.$$.dirty[0] === -1 && (se.push(l), Tl(), l.$$.dirty.fill(0)), l.$$.dirty[e / 31 | 0] |= 1 << e % 31;
  }
  function K(l, e, t, s, a, i, r = null, n = [-1]) {
    let c = te;
    j(l);
    let C = l.$$ = { fragment: null, ctx: [], props: i, update: W, not_equal: a, bound: ot(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(e.context || (c ? c.$$.context : [])), callbacks: ot(), dirty: n, skip_bound: false, root: e.target || c.$$.root };
    r && r(C.root);
    let u = false;
    if (C.ctx = t ? t(l, e.props || {}, (A, o, ...d) => {
      let g = d.length ? d[0] : o;
      return C.ctx && a(C.ctx[A], C.ctx[A] = g) && (!C.skip_bound && C.bound[A] && C.bound[A](g), u && ca(l, A)), o;
    }) : [], C.update(), u = true, v(C.before_update), C.fragment = s ? s(C.ctx) : false, e.target) {
      if (e.hydrate) {
        Sl();
        let A = Dl(e.target);
        C.fragment && C.fragment.l(A), A.forEach(B);
      } else C.fragment && C.fragment.c();
      e.intro && k(l.$$.fragment), _e(l, e.target, e.anchor), Vl(), dt();
    }
    j(c);
  }
  var ga;
  typeof HTMLElement == "function" && (ga = class extends HTMLElement {
    constructor(l, e, t) {
      super();
      __publicField(this, "$$ctor");
      __publicField(this, "$$s");
      __publicField(this, "$$c");
      __publicField(this, "$$cn", false);
      __publicField(this, "$$d", {});
      __publicField(this, "$$r", false);
      __publicField(this, "$$p_d", {});
      __publicField(this, "$$l", {});
      __publicField(this, "$$l_u", /* @__PURE__ */ new Map());
      this.$$ctor = l, this.$$s = e, t && this.attachShadow({ mode: "open" });
    }
    addEventListener(l, e, t) {
      if (this.$$l[l] = this.$$l[l] || [], this.$$l[l].push(e), this.$$c) {
        let s = this.$$c.$on(l, e);
        this.$$l_u.set(e, s);
      }
      super.addEventListener(l, e, t);
    }
    removeEventListener(l, e, t) {
      if (super.removeEventListener(l, e, t), this.$$c) {
        let s = this.$$l_u.get(e);
        s && (s(), this.$$l_u.delete(e));
      }
      if (this.$$l[l]) {
        let s = this.$$l[l].indexOf(e);
        s >= 0 && this.$$l[l].splice(s, 1);
      }
    }
    async connectedCallback() {
      if (this.$$cn = true, !this.$$c) {
        let l = function(a) {
          return () => {
            let i;
            return { c: function() {
              i = F("slot"), a !== "default" && _(i, "name", a);
            }, m: function(c, C) {
              x(c, i, C);
            }, d: function(c) {
              c && B(i);
            } };
          };
        };
        if (await Promise.resolve(), !this.$$cn || this.$$c) return;
        let e = {}, t = Jl(this);
        for (let a of this.$$s) a in t && (e[a] = [l(a)]);
        for (let a of this.attributes) {
          let i = this.$$g_p(a.name);
          i in this.$$d || (this.$$d[i] = Et(i, a.value, this.$$p_d, "toProp"));
        }
        for (let a in this.$$p_d) !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
        this.$$c = new this.$$ctor({ target: this.shadowRoot || this, props: { ...this.$$d, $$slots: e, $$scope: { ctx: [] } } });
        let s = () => {
          this.$$r = true;
          for (let a in this.$$p_d) if (this.$$d[a] = this.$$c.$$.ctx[this.$$c.$$.props[a]], this.$$p_d[a].reflect) {
            let i = Et(a, this.$$d[a], this.$$p_d, "toAttribute");
            i == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, i);
          }
          this.$$r = false;
        };
        this.$$c.$$.after_update.push(s), s();
        for (let a in this.$$l) for (let i of this.$$l[a]) {
          let r = this.$$c.$on(a, i);
          this.$$l_u.set(i, r);
        }
        this.$$l = {};
      }
    }
    attributeChangedCallback(l, e, t) {
      var _a2;
      this.$$r || (l = this.$$g_p(l), this.$$d[l] = Et(l, t, this.$$p_d, "toProp"), (_a2 = this.$$c) == null ? void 0 : _a2.$set({ [l]: this.$$d[l] }));
    }
    disconnectedCallback() {
      this.$$cn = false, Promise.resolve().then(() => {
        !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
      });
    }
    $$g_p(l) {
      return Object.keys(this.$$p_d).find((e) => this.$$p_d[e].attribute === l || !this.$$p_d[e].attribute && e.toLowerCase() === l) || l;
    }
  });
  function Et(l, e, t, s) {
    var _a2;
    let a = (_a2 = t[l]) == null ? void 0 : _a2.type;
    if (e = a === "Boolean" && typeof e != "boolean" ? e != null : e, !s || !t[l]) return e;
    if (s === "toAttribute") switch (a) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e != null ? e : null;
      default:
        return e;
    }
    else switch (a) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
  }
  var T = class {
    constructor() {
      __publicField(this, "$$");
      __publicField(this, "$$set");
    }
    $destroy() {
      be(this, 1), this.$destroy = W;
    }
    $on(e, t) {
      if (!ut(t)) return W;
      let s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return s.push(t), () => {
        let a = s.indexOf(t);
        a !== -1 && s.splice(a, 1);
      };
    }
    $set(e) {
      this.$$set && !Hl(e) && (this.$$.skip_bound = true, this.$$set(e), this.$$.skip_bound = false);
    }
  };
  typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add("4");
  function D(l) {
    let e = typeof l == "string" ? l.charCodeAt(0) : l;
    return e >= 97 && e <= 122 || e >= 65 && e <= 90;
  }
  function le(l) {
    let e = typeof l == "string" ? l.charCodeAt(0) : l;
    return e >= 48 && e <= 57;
  }
  function P(l) {
    return D(l) || le(l);
  }
  var jl = ["art-lojban", "cel-gaulish", "no-bok", "no-nyn", "zh-guoyu", "zh-hakka", "zh-min", "zh-min-nan", "zh-xiang"];
  var Gt = { "en-gb-oed": "en-GB-oxendict", "i-ami": "ami", "i-bnn": "bnn", "i-default": null, "i-enochian": null, "i-hak": "hak", "i-klingon": "tlh", "i-lux": "lb", "i-mingo": null, "i-navajo": "nv", "i-pwn": "pwn", "i-tao": "tao", "i-tay": "tay", "i-tsu": "tsu", "sgn-be-fr": "sfb", "sgn-be-nl": "vgt", "sgn-ch-de": "sgg", "art-lojban": "jbo", "cel-gaulish": null, "no-bok": "nb", "no-nyn": "nn", "zh-guoyu": "cmn", "zh-hakka": "hak", "zh-min": null, "zh-min-nan": "nan", "zh-xiang": "hsn" };
  var ua = {}.hasOwnProperty;
  function bt(l, e = {}) {
    let t = Kl(), s = String(l), a = s.toLowerCase(), i = 0;
    if (l == null) throw new Error("Expected string, got `" + l + "`");
    if (ua.call(Gt, a)) {
      let n = Gt[a];
      return (e.normalize === void 0 || e.normalize === null || e.normalize) && typeof n == "string" ? bt(n) : (t[jl.includes(a) ? "regular" : "irregular"] = s, t);
    }
    for (; D(a.charCodeAt(i)) && i < 9; ) i++;
    if (i > 1 && i < 9) {
      if (t.language = s.slice(0, i), i < 4) {
        let n = 0;
        for (; a.charCodeAt(i) === 45 && D(a.charCodeAt(i + 1)) && D(a.charCodeAt(i + 2)) && D(a.charCodeAt(i + 3)) && !D(a.charCodeAt(i + 4)); ) {
          if (n > 2) return r(i, 3, "Too many extended language subtags, expected at most 3 subtags");
          t.extendedLanguageSubtags.push(s.slice(i + 1, i + 4)), i += 4, n++;
        }
      }
      for (a.charCodeAt(i) === 45 && D(a.charCodeAt(i + 1)) && D(a.charCodeAt(i + 2)) && D(a.charCodeAt(i + 3)) && D(a.charCodeAt(i + 4)) && !D(a.charCodeAt(i + 5)) && (t.script = s.slice(i + 1, i + 5), i += 5), a.charCodeAt(i) === 45 && (D(a.charCodeAt(i + 1)) && D(a.charCodeAt(i + 2)) && !D(a.charCodeAt(i + 3)) ? (t.region = s.slice(i + 1, i + 3), i += 3) : le(a.charCodeAt(i + 1)) && le(a.charCodeAt(i + 2)) && le(a.charCodeAt(i + 3)) && !le(a.charCodeAt(i + 4)) && (t.region = s.slice(i + 1, i + 4), i += 4)); a.charCodeAt(i) === 45; ) {
        let n = i + 1, c = n;
        for (; P(a.charCodeAt(c)); ) {
          if (c - n > 7) return r(c, 1, "Too long variant, expected at most 8 characters");
          c++;
        }
        if (c - n > 4 || c - n > 3 && le(a.charCodeAt(n))) t.variants.push(s.slice(n, c)), i = c;
        else break;
      }
      for (; a.charCodeAt(i) === 45 && !(a.charCodeAt(i + 1) === 120 || !P(a.charCodeAt(i + 1)) || a.charCodeAt(i + 2) !== 45 || !P(a.charCodeAt(i + 3))); ) {
        let n = i + 2, c = 0;
        for (; a.charCodeAt(n) === 45 && P(a.charCodeAt(n + 1)) && P(a.charCodeAt(n + 2)); ) {
          let C = n + 1;
          for (n = C + 2, c++; P(a.charCodeAt(n)); ) {
            if (n - C > 7) return r(n, 2, "Too long extension, expected at most 8 characters");
            n++;
          }
        }
        if (!c) return r(n, 4, "Empty extension, extensions must have at least 2 characters of content");
        t.extensions.push({ singleton: s.charAt(i + 1), extensions: s.slice(i + 3, n).split("-") }), i = n;
      }
    } else i = 0;
    if (i === 0 && a.charCodeAt(i) === 120 || a.charCodeAt(i) === 45 && a.charCodeAt(i + 1) === 120) {
      i = i ? i + 2 : 1;
      let n = i;
      for (; a.charCodeAt(n) === 45 && P(a.charCodeAt(n + 1)); ) {
        let c = i + 1;
        for (n = c; P(a.charCodeAt(n)); ) {
          if (n - c > 7) return r(n, 5, "Too long private-use area, expected at most 8 characters");
          n++;
        }
        t.privateuse.push(s.slice(i + 1, n)), i = n;
      }
    }
    if (i !== s.length) return r(i, 6, "Found superfluous content after tag");
    return t;
    function r(n, c, C) {
      return e.warning && e.warning(C, c, n), e.forgiving ? t : Kl();
    }
  }
  function Kl() {
    return { language: null, extendedLanguageSubtags: [], script: null, region: null, variants: [], extensions: [], privateuse: [], irregular: null, regular: null };
  }
  function Pl(l, e, t) {
    let s = l.slice();
    return s[9] = e[t][0], s[10] = e[t][1], s;
  }
  function Ca(l) {
    let e, t, s, a, i, r = l[0] && ql(l);
    return { c() {
      r && r.c(), e = X(), t = F("div"), s = F("p"), s.textContent = `${l[3](30)}`, a = X(), i = F("p"), i.textContent = `${l[3](40)}`, _(s, "class", "pagefind-ui__result-title pagefind-ui__loading svelte-j9e30"), _(i, "class", "pagefind-ui__result-excerpt pagefind-ui__loading svelte-j9e30"), _(t, "class", "pagefind-ui__result-inner svelte-j9e30");
    }, m(n, c) {
      r && r.m(n, c), x(n, e, c), x(n, t, c), m(t, s), m(t, a), m(t, i);
    }, p(n, c) {
      n[0] ? r || (r = ql(n), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null);
    }, d(n) {
      n && (B(e), B(t)), r && r.d(n);
    } };
  }
  function Ia(l) {
    var _a2;
    let e, t, s, a, i = ((_a2 = l[1].meta) == null ? void 0 : _a2.title) + "", r, n, c, C, u = l[1].excerpt + "", A, o = l[0] && $l(l), d = l[2].length && ts(l);
    return { c() {
      var _a3;
      o && o.c(), e = X(), t = F("div"), s = F("p"), a = F("a"), r = Z(i), c = X(), C = F("p"), A = X(), d && d.c(), _(a, "class", "pagefind-ui__result-link svelte-j9e30"), _(a, "href", n = ((_a3 = l[1].meta) == null ? void 0 : _a3.url) || l[1].url), _(s, "class", "pagefind-ui__result-title svelte-j9e30"), _(C, "class", "pagefind-ui__result-excerpt svelte-j9e30"), _(t, "class", "pagefind-ui__result-inner svelte-j9e30");
    }, m(g, I) {
      o && o.m(g, I), x(g, e, I), x(g, t, I), m(t, s), m(s, a), m(a, r), m(t, c), m(t, C), C.innerHTML = u, m(t, A), d && d.m(t, null);
    }, p(g, I) {
      var _a3, _b;
      g[0] ? o ? o.p(g, I) : (o = $l(g), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null), I & 2 && i !== (i = ((_a3 = g[1].meta) == null ? void 0 : _a3.title) + "") && H(r, i), I & 2 && n !== (n = ((_b = g[1].meta) == null ? void 0 : _b.url) || g[1].url) && _(a, "href", n), I & 2 && u !== (u = g[1].excerpt + "") && (C.innerHTML = u), g[2].length ? d ? d.p(g, I) : (d = ts(g), d.c(), d.m(t, null)) : d && (d.d(1), d = null);
    }, d(g) {
      g && (B(e), B(t)), o && o.d(g), d && d.d();
    } };
  }
  function ql(l) {
    let e;
    return { c() {
      e = F("div"), _(e, "class", "pagefind-ui__result-thumb pagefind-ui__loading svelte-j9e30");
    }, m(t, s) {
      x(t, e, s);
    }, d(t) {
      t && B(e);
    } };
  }
  function $l(l) {
    let e, t = l[1].meta.image && es(l);
    return { c() {
      e = F("div"), t && t.c(), _(e, "class", "pagefind-ui__result-thumb svelte-j9e30");
    }, m(s, a) {
      x(s, e, a), t && t.m(e, null);
    }, p(s, a) {
      s[1].meta.image ? t ? t.p(s, a) : (t = es(s), t.c(), t.m(e, null)) : t && (t.d(1), t = null);
    }, d(s) {
      s && B(e), t && t.d();
    } };
  }
  function es(l) {
    let e, t, s;
    return { c() {
      var _a2, _b, _c2;
      e = F("img"), _(e, "class", "pagefind-ui__result-image svelte-j9e30"), ce(e.src, t = (_a2 = l[1].meta) == null ? void 0 : _a2.image) || _(e, "src", t), _(e, "alt", s = ((_b = l[1].meta) == null ? void 0 : _b.image_alt) || ((_c2 = l[1].meta) == null ? void 0 : _c2.title));
    }, m(a, i) {
      x(a, e, i);
    }, p(a, i) {
      var _a2, _b, _c2;
      i & 2 && !ce(e.src, t = (_a2 = a[1].meta) == null ? void 0 : _a2.image) && _(e, "src", t), i & 2 && s !== (s = ((_b = a[1].meta) == null ? void 0 : _b.image_alt) || ((_c2 = a[1].meta) == null ? void 0 : _c2.title)) && _(e, "alt", s);
    }, d(a) {
      a && B(e);
    } };
  }
  function ts(l) {
    let e, t = S(l[2]), s = [];
    for (let a = 0; a < t.length; a += 1) s[a] = ls(Pl(l, t, a));
    return { c() {
      e = F("ul");
      for (let a = 0; a < s.length; a += 1) s[a].c();
      _(e, "class", "pagefind-ui__result-tags svelte-j9e30");
    }, m(a, i) {
      x(a, e, i);
      for (let r = 0; r < s.length; r += 1) s[r] && s[r].m(e, null);
    }, p(a, i) {
      if (i & 4) {
        t = S(a[2]);
        let r;
        for (r = 0; r < t.length; r += 1) {
          let n = Pl(a, t, r);
          s[r] ? s[r].p(n, i) : (s[r] = ls(n), s[r].c(), s[r].m(e, null));
        }
        for (; r < s.length; r += 1) s[r].d(1);
        s.length = t.length;
      }
    }, d(a) {
      a && B(e), $(s, a);
    } };
  }
  function ls(l) {
    let e, t = l[9].replace(/^(\w)/, ss) + "", s, a, i = l[10] + "", r, n, c;
    return { c() {
      e = F("li"), s = Z(t), a = Z(": "), r = Z(i), n = X(), _(e, "class", "pagefind-ui__result-tag svelte-j9e30"), _(e, "data-pagefind-ui-meta", c = l[9]);
    }, m(C, u) {
      x(C, e, u), m(e, s), m(e, a), m(e, r), m(e, n);
    }, p(C, u) {
      u & 4 && t !== (t = C[9].replace(/^(\w)/, ss) + "") && H(s, t), u & 4 && i !== (i = C[10] + "") && H(r, i), u & 4 && c !== (c = C[9]) && _(e, "data-pagefind-ui-meta", c);
    }, d(C) {
      C && B(e);
    } };
  }
  function da(l) {
    let e;
    function t(i, r) {
      return i[1] ? Ia : Ca;
    }
    let s = t(l, -1), a = s(l);
    return { c() {
      e = F("li"), a.c(), _(e, "class", "pagefind-ui__result svelte-j9e30");
    }, m(i, r) {
      x(i, e, r), a.m(e, null);
    }, p(i, [r]) {
      s === (s = t(i, r)) && a ? a.p(i, r) : (a.d(1), a = s(i), a && (a.c(), a.m(e, null)));
    }, i: W, o: W, d(i) {
      i && B(e), a.d();
    } };
  }
  var ss = (l) => l.toLocaleUpperCase();
  function Aa(l, e, t) {
    let { show_images: s = true } = e, { process_result: a = null } = e, { result: i = { data: async () => {
    } } } = e, r = ["title", "image", "image_alt", "url"], n, c = [], C = (o, d) => {
      if (!o || /^[a-z][a-z0-9+.-]*:/i.test(o) || /^\/\//.test(o) || o.startsWith("/")) return o;
      try {
        return new URL(o, new URL(d || "/", "https://p")).pathname;
      } catch (e2) {
        return o;
      }
    }, u = async (o) => {
      var _a2, _b;
      t(1, n = await o.data()), t(1, n = (_a2 = a == null ? void 0 : a(n)) != null ? _a2 : n), ((_b = n.meta) == null ? void 0 : _b.image) && t(1, n = { ...n, meta: { ...n.meta, image: C(n.meta.image, n.meta.url || n.url) } }), t(2, c = Object.entries(n.meta).filter(([d]) => !r.includes(d)));
    }, A = (o = 30) => ". ".repeat(Math.floor(10 + Math.random() * o));
    return l.$$set = (o) => {
      "show_images" in o && t(0, s = o.show_images), "process_result" in o && t(4, a = o.process_result), "result" in o && t(5, i = o.result);
    }, l.$$.update = () => {
      l.$$.dirty & 32 && u(i);
    }, [s, n, c, A, a, i];
  }
  var kt = class extends T {
    constructor(e) {
      super(), K(this, e, Aa, da, O, { show_images: 0, process_result: 4, result: 5 });
    }
  }, as = kt;
  function is(l, e, t) {
    let s = l.slice();
    return s[11] = e[t][0], s[12] = e[t][1], s;
  }
  function rs(l, e, t) {
    let s = l.slice();
    return s[15] = e[t], s;
  }
  function _a(l) {
    let e, t, s, a, i, r = l[0] && ns(l);
    return { c() {
      r && r.c(), e = X(), t = F("div"), s = F("p"), s.textContent = `${l[5](30)}`, a = X(), i = F("p"), i.textContent = `${l[5](40)}`, _(s, "class", "pagefind-ui__result-title pagefind-ui__loading svelte-4xnkmf"), _(i, "class", "pagefind-ui__result-excerpt pagefind-ui__loading svelte-4xnkmf"), _(t, "class", "pagefind-ui__result-inner svelte-4xnkmf");
    }, m(n, c) {
      r && r.m(n, c), x(n, e, c), x(n, t, c), m(t, s), m(t, a), m(t, i);
    }, p(n, c) {
      n[0] ? r || (r = ns(n), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null);
    }, d(n) {
      n && (B(e), B(t)), r && r.d(n);
    } };
  }
  function ba(l) {
    var _a2;
    let e, t, s, a, i = ((_a2 = l[1].meta) == null ? void 0 : _a2.title) + "", r, n, c, C, u, A = l[0] && cs(l), o = l[4] && os(l), d = S(l[3]), g = [];
    for (let Q = 0; Q < d.length; Q += 1) g[Q] = us(rs(l, d, Q));
    let I = l[2].length && Cs(l);
    return { c() {
      var _a3;
      A && A.c(), e = X(), t = F("div"), s = F("p"), a = F("a"), r = Z(i), c = X(), o && o.c(), C = X();
      for (let Q = 0; Q < g.length; Q += 1) g[Q].c();
      u = X(), I && I.c(), _(a, "class", "pagefind-ui__result-link svelte-4xnkmf"), _(a, "href", n = ((_a3 = l[1].meta) == null ? void 0 : _a3.url) || l[1].url), _(s, "class", "pagefind-ui__result-title svelte-4xnkmf"), _(t, "class", "pagefind-ui__result-inner svelte-4xnkmf");
    }, m(Q, f) {
      A && A.m(Q, f), x(Q, e, f), x(Q, t, f), m(t, s), m(s, a), m(a, r), m(t, c), o && o.m(t, null), m(t, C);
      for (let p = 0; p < g.length; p += 1) g[p] && g[p].m(t, null);
      m(t, u), I && I.m(t, null);
    }, p(Q, f) {
      var _a3, _b;
      if (Q[0] ? A ? A.p(Q, f) : (A = cs(Q), A.c(), A.m(e.parentNode, e)) : A && (A.d(1), A = null), f & 2 && i !== (i = ((_a3 = Q[1].meta) == null ? void 0 : _a3.title) + "") && H(r, i), f & 2 && n !== (n = ((_b = Q[1].meta) == null ? void 0 : _b.url) || Q[1].url) && _(a, "href", n), Q[4] ? o ? o.p(Q, f) : (o = os(Q), o.c(), o.m(t, C)) : o && (o.d(1), o = null), f & 8) {
        d = S(Q[3]);
        let p;
        for (p = 0; p < d.length; p += 1) {
          let h = rs(Q, d, p);
          g[p] ? g[p].p(h, f) : (g[p] = us(h), g[p].c(), g[p].m(t, u));
        }
        for (; p < g.length; p += 1) g[p].d(1);
        g.length = d.length;
      }
      Q[2].length ? I ? I.p(Q, f) : (I = Cs(Q), I.c(), I.m(t, null)) : I && (I.d(1), I = null);
    }, d(Q) {
      Q && (B(e), B(t)), A && A.d(Q), o && o.d(), $(g, Q), I && I.d();
    } };
  }
  function ns(l) {
    let e;
    return { c() {
      e = F("div"), _(e, "class", "pagefind-ui__result-thumb pagefind-ui__loading svelte-4xnkmf");
    }, m(t, s) {
      x(t, e, s);
    }, d(t) {
      t && B(e);
    } };
  }
  function cs(l) {
    let e, t = l[1].meta.image && gs(l);
    return { c() {
      e = F("div"), t && t.c(), _(e, "class", "pagefind-ui__result-thumb svelte-4xnkmf");
    }, m(s, a) {
      x(s, e, a), t && t.m(e, null);
    }, p(s, a) {
      s[1].meta.image ? t ? t.p(s, a) : (t = gs(s), t.c(), t.m(e, null)) : t && (t.d(1), t = null);
    }, d(s) {
      s && B(e), t && t.d();
    } };
  }
  function gs(l) {
    let e, t, s;
    return { c() {
      var _a2, _b, _c2;
      e = F("img"), _(e, "class", "pagefind-ui__result-image svelte-4xnkmf"), ce(e.src, t = (_a2 = l[1].meta) == null ? void 0 : _a2.image) || _(e, "src", t), _(e, "alt", s = ((_b = l[1].meta) == null ? void 0 : _b.image_alt) || ((_c2 = l[1].meta) == null ? void 0 : _c2.title));
    }, m(a, i) {
      x(a, e, i);
    }, p(a, i) {
      var _a2, _b, _c2;
      i & 2 && !ce(e.src, t = (_a2 = a[1].meta) == null ? void 0 : _a2.image) && _(e, "src", t), i & 2 && s !== (s = ((_b = a[1].meta) == null ? void 0 : _b.image_alt) || ((_c2 = a[1].meta) == null ? void 0 : _c2.title)) && _(e, "alt", s);
    }, d(a) {
      a && B(e);
    } };
  }
  function os(l) {
    let e, t = l[1].excerpt + "";
    return { c() {
      e = F("p"), _(e, "class", "pagefind-ui__result-excerpt svelte-4xnkmf");
    }, m(s, a) {
      x(s, e, a), e.innerHTML = t;
    }, p(s, a) {
      a & 2 && t !== (t = s[1].excerpt + "") && (e.innerHTML = t);
    }, d(s) {
      s && B(e);
    } };
  }
  function us(l) {
    let e, t, s, a = l[15].title + "", i, r, n, c, C = l[15].excerpt + "";
    return { c() {
      e = F("div"), t = F("p"), s = F("a"), i = Z(a), n = X(), c = F("p"), _(s, "class", "pagefind-ui__result-link svelte-4xnkmf"), _(s, "href", r = l[15].url), _(t, "class", "pagefind-ui__result-title svelte-4xnkmf"), _(c, "class", "pagefind-ui__result-excerpt svelte-4xnkmf"), _(e, "class", "pagefind-ui__result-nested svelte-4xnkmf");
    }, m(u, A) {
      x(u, e, A), m(e, t), m(t, s), m(s, i), m(e, n), m(e, c), c.innerHTML = C;
    }, p(u, A) {
      A & 8 && a !== (a = u[15].title + "") && H(i, a), A & 8 && r !== (r = u[15].url) && _(s, "href", r), A & 8 && C !== (C = u[15].excerpt + "") && (c.innerHTML = C);
    }, d(u) {
      u && B(e);
    } };
  }
  function Cs(l) {
    let e, t = S(l[2]), s = [];
    for (let a = 0; a < t.length; a += 1) s[a] = Is(is(l, t, a));
    return { c() {
      e = F("ul");
      for (let a = 0; a < s.length; a += 1) s[a].c();
      _(e, "class", "pagefind-ui__result-tags svelte-4xnkmf");
    }, m(a, i) {
      x(a, e, i);
      for (let r = 0; r < s.length; r += 1) s[r] && s[r].m(e, null);
    }, p(a, i) {
      if (i & 4) {
        t = S(a[2]);
        let r;
        for (r = 0; r < t.length; r += 1) {
          let n = is(a, t, r);
          s[r] ? s[r].p(n, i) : (s[r] = Is(n), s[r].c(), s[r].m(e, null));
        }
        for (; r < s.length; r += 1) s[r].d(1);
        s.length = t.length;
      }
    }, d(a) {
      a && B(e), $(s, a);
    } };
  }
  function Is(l) {
    let e, t = l[11].replace(/^(\w)/, ds) + "", s, a, i = l[12] + "", r, n, c;
    return { c() {
      e = F("li"), s = Z(t), a = Z(": "), r = Z(i), n = X(), _(e, "class", "pagefind-ui__result-tag svelte-4xnkmf"), _(e, "data-pagefind-ui-meta", c = l[11]);
    }, m(C, u) {
      x(C, e, u), m(e, s), m(e, a), m(e, r), m(e, n);
    }, p(C, u) {
      u & 4 && t !== (t = C[11].replace(/^(\w)/, ds) + "") && H(s, t), u & 4 && i !== (i = C[12] + "") && H(r, i), u & 4 && c !== (c = C[11]) && _(e, "data-pagefind-ui-meta", c);
    }, d(C) {
      C && B(e);
    } };
  }
  function Qa(l) {
    let e;
    function t(i, r) {
      return i[1] ? ba : _a;
    }
    let s = t(l, -1), a = s(l);
    return { c() {
      e = F("li"), a.c(), _(e, "class", "pagefind-ui__result svelte-4xnkmf");
    }, m(i, r) {
      x(i, e, r), a.m(e, null);
    }, p(i, [r]) {
      s === (s = t(i, r)) && a ? a.p(i, r) : (a.d(1), a = s(i), a && (a.c(), a.m(e, null)));
    }, i: W, o: W, d(i) {
      i && B(e), a.d();
    } };
  }
  var ds = (l) => l.toLocaleUpperCase();
  function ma(l, e, t) {
    let { show_images: s = true } = e, { process_result: a = null } = e, { result: i = { data: async () => {
    } } } = e, r = ["title", "image", "image_alt", "url"], n, c = [], C = [], u = false, A = (g, I) => {
      if (g.length <= I) return g;
      let Q = [...g].sort((f, p) => p.locations.length - f.locations.length).slice(0, 3).map((f) => f.url);
      return g.filter((f) => Q.includes(f.url));
    }, o = async (g) => {
      var _a2, _b, _c2, _d;
      t(1, n = await g.data()), t(1, n = (_a2 = a == null ? void 0 : a(n)) != null ? _a2 : n), t(2, c = Object.entries(n.meta).filter(([I]) => !r.includes(I))), Array.isArray(n.sub_results) && (t(4, u = ((_c2 = (_b = n.sub_results) == null ? void 0 : _b[0]) == null ? void 0 : _c2.url) === (((_d = n.meta) == null ? void 0 : _d.url) || n.url)), u ? t(3, C = A(n.sub_results.slice(1), 3)) : t(3, C = A([...n.sub_results], 3)));
    }, d = (g = 30) => ". ".repeat(Math.floor(10 + Math.random() * g));
    return l.$$set = (g) => {
      "show_images" in g && t(0, s = g.show_images), "process_result" in g && t(6, a = g.process_result), "result" in g && t(7, i = g.result);
    }, l.$$.update = () => {
      l.$$.dirty & 128 && o(i);
    }, [s, n, c, C, u, d, a, i];
  }
  var Lt = class extends T {
    constructor(e) {
      super(), K(this, e, ma, Qa, O, { show_images: 0, process_result: 6, result: 7 });
    }
  }, As = Lt;
  function _s(l, e, t) {
    let s = l.slice();
    return s[10] = e[t][0], s[11] = e[t][1], s[12] = e, s[13] = t, s;
  }
  function bs(l, e, t) {
    let s = l.slice();
    return s[14] = e[t][0], s[15] = e[t][1], s[16] = e, s[17] = t, s;
  }
  function Qs(l) {
    let e, t, s = l[4]("filters_label", l[5], l[6]) + "", a, i, r = S(Object.entries(l[1])), n = [];
    for (let c = 0; c < r.length; c += 1) n[c] = Fs(_s(l, r, c));
    return { c() {
      e = F("fieldset"), t = F("legend"), a = Z(s), i = X();
      for (let c = 0; c < n.length; c += 1) n[c].c();
      _(t, "class", "pagefind-ui__filter-panel-label svelte-1v2r7ls"), _(e, "class", "pagefind-ui__filter-panel svelte-1v2r7ls");
    }, m(c, C) {
      x(c, e, C), m(e, t), m(t, a), m(e, i);
      for (let u = 0; u < n.length; u += 1) n[u] && n[u].m(e, null);
    }, p(c, C) {
      if (C & 112 && s !== (s = c[4]("filters_label", c[5], c[6]) + "") && H(a, s), C & 143) {
        r = S(Object.entries(c[1]));
        let u;
        for (u = 0; u < r.length; u += 1) {
          let A = _s(c, r, u);
          n[u] ? n[u].p(A, C) : (n[u] = Fs(A), n[u].c(), n[u].m(e, null));
        }
        for (; u < n.length; u += 1) n[u].d(1);
        n.length = r.length;
      }
    }, d(c) {
      c && B(e), $(n, c);
    } };
  }
  function ms(l) {
    let e, t, s, a, i, r, n, c, C = l[14] + "", u, A = l[15] + "", o, d, g, I, Q, f;
    function p() {
      l[9].call(t, l[10], l[14]);
    }
    return { c() {
      e = F("div"), t = F("input"), r = X(), n = F("label"), c = new It(false), u = Z(" ("), o = Z(A), d = Z(")"), I = X(), _(t, "class", "pagefind-ui__filter-checkbox svelte-1v2r7ls"), _(t, "type", "checkbox"), _(t, "id", s = l[10] + "-" + l[14]), _(t, "name", a = l[10]), t.__value = i = l[14], ge(t, t.__value), c.a = u, _(n, "class", "pagefind-ui__filter-label svelte-1v2r7ls"), _(n, "for", g = l[10] + "-" + l[14]), _(e, "class", "pagefind-ui__filter-value svelte-1v2r7ls"), w(e, "pagefind-ui__filter-value--checked", l[0][`${l[10]}:${l[14]}`]);
    }, m(h, y) {
      x(h, e, y), m(e, t), t.checked = l[0][`${l[10]}:${l[14]}`], m(e, r), m(e, n), c.m(C, n), m(n, u), m(n, o), m(n, d), m(e, I), Q || (f = M(t, "change", p), Q = true);
    }, p(h, y) {
      l = h, y & 2 && s !== (s = l[10] + "-" + l[14]) && _(t, "id", s), y & 2 && a !== (a = l[10]) && _(t, "name", a), y & 2 && i !== (i = l[14]) && (t.__value = i, ge(t, t.__value)), y & 3 && (t.checked = l[0][`${l[10]}:${l[14]}`]), y & 2 && C !== (C = l[14] + "") && c.p(C), y & 2 && A !== (A = l[15] + "") && H(o, A), y & 2 && g !== (g = l[10] + "-" + l[14]) && _(n, "for", g), y & 3 && w(e, "pagefind-ui__filter-value--checked", l[0][`${l[10]}:${l[14]}`]);
    }, d(h) {
      h && B(e), Q = false, f();
    } };
  }
  function fs(l) {
    let e, t = (l[2] || l[15] || l[0][`${l[10]}:${l[14]}`]) && ms(l);
    return { c() {
      t && t.c(), e = ee();
    }, m(s, a) {
      t && t.m(s, a), x(s, e, a);
    }, p(s, a) {
      s[2] || s[15] || s[0][`${s[10]}:${s[14]}`] ? t ? t.p(s, a) : (t = ms(s), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    }, d(s) {
      s && B(e), t && t.d(s);
    } };
  }
  function Fs(l) {
    let e, t, s = l[10].replace(/^(\w)/, ps) + "", a, i, r, n = l[10] + "", c, C, u, A = S(Object.entries(l[11] || {})), o = [];
    for (let d = 0; d < A.length; d += 1) o[d] = fs(bs(l, A, d));
    return { c() {
      e = F("details"), t = F("summary"), a = X(), i = F("fieldset"), r = F("legend"), c = X();
      for (let d = 0; d < o.length; d += 1) o[d].c();
      C = X(), _(t, "class", "pagefind-ui__filter-name svelte-1v2r7ls"), _(r, "class", "pagefind-ui__filter-group-label svelte-1v2r7ls"), _(i, "class", "pagefind-ui__filter-group svelte-1v2r7ls"), _(e, "class", "pagefind-ui__filter-block svelte-1v2r7ls"), e.open = u = l[7] || l[3].map(Bs).includes(l[10].toLowerCase());
    }, m(d, g) {
      x(d, e, g), m(e, t), t.innerHTML = s, m(e, a), m(e, i), m(i, r), r.innerHTML = n, m(i, c);
      for (let I = 0; I < o.length; I += 1) o[I] && o[I].m(i, null);
      m(e, C);
    }, p(d, g) {
      if (g & 2 && s !== (s = d[10].replace(/^(\w)/, ps) + "") && (t.innerHTML = s), g & 2 && n !== (n = d[10] + "") && (r.innerHTML = n), g & 7) {
        A = S(Object.entries(d[11] || {}));
        let I;
        for (I = 0; I < A.length; I += 1) {
          let Q = bs(d, A, I);
          o[I] ? o[I].p(Q, g) : (o[I] = fs(Q), o[I].c(), o[I].m(i, null));
        }
        for (; I < o.length; I += 1) o[I].d(1);
        o.length = A.length;
      }
      g & 138 && u !== (u = d[7] || d[3].map(Bs).includes(d[10].toLowerCase())) && (e.open = u);
    }, d(d) {
      d && B(e), $(o, d);
    } };
  }
  function fa(l) {
    let e = l[1] && Object.entries(l[1]).length, t, s = e && Qs(l);
    return { c() {
      s && s.c(), t = ee();
    }, m(a, i) {
      s && s.m(a, i), x(a, t, i);
    }, p(a, [i]) {
      i & 2 && (e = a[1] && Object.entries(a[1]).length), e ? s ? s.p(a, i) : (s = Qs(a), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null);
    }, i: W, o: W, d(a) {
      a && B(t), s && s.d(a);
    } };
  }
  var ps = (l) => l.toLocaleUpperCase(), Bs = (l) => l.toLowerCase();
  function Fa(l, e, t) {
    let { available_filters: s = null } = e, { show_empty_filters: a = true } = e, { open_filters: i = [] } = e, { translate: r = () => "" } = e, { automatic_translations: n = {} } = e, { translations: c = {} } = e, { selected_filters: C = {} } = e, u = false, A = false;
    function o(d, g) {
      C[`${d}:${g}`] = this.checked, t(0, C);
    }
    return l.$$set = (d) => {
      "available_filters" in d && t(1, s = d.available_filters), "show_empty_filters" in d && t(2, a = d.show_empty_filters), "open_filters" in d && t(3, i = d.open_filters), "translate" in d && t(4, r = d.translate), "automatic_translations" in d && t(5, n = d.automatic_translations), "translations" in d && t(6, c = d.translations), "selected_filters" in d && t(0, C = d.selected_filters);
    }, l.$$.update = () => {
      var _a2;
      if (l.$$.dirty & 258 && s && !u) {
        t(8, u = true);
        let d = Object.entries(s || {});
        d.length === 1 && ((_a2 = Object.entries(d[0][1])) == null ? void 0 : _a2.length) <= 6 && t(7, A = true);
      }
    }, [C, s, a, i, r, n, c, A, u, o];
  }
  var Wt = class extends T {
    constructor(e) {
      super(), K(this, e, Fa, fa, O, { available_filters: 1, show_empty_filters: 2, open_filters: 3, translate: 4, automatic_translations: 5, translations: 6, selected_filters: 0 });
    }
  }, xs = Wt;
  var Ht = {};
  U(Ht, { comments: () => Ba, default: () => Ua, direction: () => xa, strings: () => ha, thanks_to: () => pa });
  var pa = "Jan Claasen <jan@cloudcannon.com>", Ba = "", xa = "ltr", ha = { placeholder: "Soek", clear_search: "Opruim", load_more: "Laai nog resultate", search_label: "Soek hierdie webwerf", filters_label: "Filters", zero_results: "Geen resultate vir [SEARCH_TERM]", many_results: "[COUNT] resultate vir [SEARCH_TERM]", one_result: "[COUNT] resultate vir [SEARCH_TERM]", total_zero_results: "Geen resultate", total_one_result: "[COUNT] resultaat", total_many_results: "[COUNT] resultate", alt_search: "Geen resultate vir [SEARCH_TERM]. Toon resultate vir [DIFFERENT_TERM] in plaas daarvan", search_suggestion: "Geen resultate vir [SEARCH_TERM]. Probeer eerder een van die volgende terme:", searching: "Soek vir [SEARCH_TERM]", results_label: "Soekresultate", keyboard_navigate: "navigeer", keyboard_select: "kies", keyboard_clear: "wis", keyboard_close: "sluit", keyboard_search: "soek", error_search: "Soek het misluk", filter_selected_one: "[COUNT] gekies", filter_selected_many: "[COUNT] gekies", input_hint: "Resultate sal verskyn terwyl jy tik", loading: "Laai" }, Ua = { thanks_to: pa, comments: Ba, direction: xa, strings: ha };
  var Rt = {};
  U(Rt, { comments: () => Xa, default: () => Ea, direction: () => Za, strings: () => Na, thanks_to: () => ya });
  var ya = "Jermanuts", Xa = "", Za = "rtl", Na = { placeholder: "بحث", clear_search: "امسح", load_more: "حمِّل المزيد من النتائج", search_label: "ابحث في هذا الموقع", filters_label: "تصفيات", zero_results: "لا توجد نتائج ل [SEARCH_TERM]", many_results: "[COUNT] نتائج ل [SEARCH_TERM]", one_result: "[COUNT] نتيجة ل [SEARCH_TERM]", total_zero_results: "لا توجد نتائج", total_one_result: "[COUNT] نتيجة", total_many_results: "[COUNT] نتائج", alt_search: "لا توجد نتائج ل [SEARCH_TERM]. يعرض النتائج ل [DIFFERENT_TERM] بدلاً من ذلك", search_suggestion: "لا توجد نتائج ل [SEARCH_TERM]. جرب أحد عمليات البحث التالية:", searching: "يبحث عن [SEARCH_TERM]...", results_label: "نتائج البحث", keyboard_navigate: "تنقل", keyboard_select: "اختيار", keyboard_clear: "امسح", keyboard_close: "إغلاق", keyboard_search: "بحث", error_search: "فشل البحث", filter_selected_one: "[COUNT] محدد", filter_selected_many: "[COUNT] محدد", input_hint: "ستظهر النتائج أثناء الكتابة", loading: "جارٍ التحميل" }, Ea = { thanks_to: ya, comments: Xa, direction: Za, strings: Na };
  var St = {};
  U(St, { comments: () => ka, default: () => Ha, direction: () => La, strings: () => Wa, thanks_to: () => Ga });
  var Ga = "Maruf Alom <mail@marufalom.com>", ka = "", La = "ltr", Wa = { placeholder: "অনুসন্ধান করুন", clear_search: "মুছে ফেলুন", load_more: "আরো ফলাফল দেখুন", search_label: "এই ওয়েবসাইটে অনুসন্ধান করুন", filters_label: "ফিল্টার", zero_results: "[SEARCH_TERM] এর জন্য কিছু খুঁজে পাওয়া যায়নি", many_results: "[COUNT]-টি ফলাফল পাওয়া গিয়েছে [SEARCH_TERM] এর জন্য", one_result: "[COUNT]-টি ফলাফল পাওয়া গিয়েছে [SEARCH_TERM] এর জন্য", total_zero_results: "কোন ফলাফল নেই", total_one_result: "[COUNT]-টি ফলাফল", total_many_results: "[COUNT]-টি ফলাফল", alt_search: "কোন কিছু খুঁজে পাওয়া যায়নি [SEARCH_TERM] এর জন্য. পরিবর্তে [DIFFERENT_TERM] এর জন্য দেখানো হচ্ছে", search_suggestion: "কোন কিছু খুঁজে পাওয়া যায়নি [SEARCH_TERM] এর বিষয়ে. নিন্মের বিষয়বস্তু খুঁজে দেখুন:", searching: "অনুসন্ধান চলছে [SEARCH_TERM]...", results_label: "অনুসন্ধানের ফলাফল", keyboard_navigate: "নেভিগেট", keyboard_select: "নির্বাচন", keyboard_clear: "মুছুন", keyboard_close: "বন্ধ", keyboard_search: "অনুসন্ধান", error_search: "অনুসন্ধান ব্যর্থ", filter_selected_one: "[COUNT]-টি নির্বাচিত", filter_selected_many: "[COUNT]-টি নির্বাচিত", input_hint: "টাইপ করার সাথে সাথে ফলাফল দেখা যাবে", loading: "লোড হচ্ছে" }, Ha = { thanks_to: Ga, comments: ka, direction: La, strings: Wa };
  var Vt = {};
  U(Vt, { comments: () => Sa, default: () => Ja, direction: () => Va, strings: () => Da, thanks_to: () => Ra });
  var Ra = "Pablo Villaverde <https://github.com/pvillaverde>", Sa = "", Va = "ltr", Da = { placeholder: "Cerca", clear_search: "Netejar", load_more: "Veure més resultats", search_label: "Cerca en aquest lloc", filters_label: "Filtres", zero_results: "No es van trobar resultats per [SEARCH_TERM]", many_results: "[COUNT] resultats trobats per [SEARCH_TERM]", one_result: "[COUNT] resultat trobat per [SEARCH_TERM]", total_zero_results: "Sense resultats", total_one_result: "[COUNT] resultat", total_many_results: "[COUNT] resultats", alt_search: "No es van trobar resultats per [SEARCH_TERM]. Mostrant al seu lloc resultats per [DIFFERENT_TERM]", search_suggestion: "No es van trobar resultats per [SEARCH_TERM]. Proveu una de les cerques següents:", searching: "Cercant [SEARCH_TERM]...", results_label: "Resultats de la cerca", keyboard_navigate: "navegar", keyboard_select: "triar", keyboard_clear: "netejar", keyboard_close: "tancar", keyboard_search: "cercar", error_search: "Error en la cerca", filter_selected_one: "[COUNT] seleccionat", filter_selected_many: "[COUNT] seleccionats", input_hint: "Els resultats apareixeran mentre escriviu", loading: "Carregant" }, Ja = { thanks_to: Ra, comments: Sa, direction: Va, strings: Da };
  var Dt = {};
  U(Dt, { comments: () => Ta, default: () => wa, direction: () => Ya, strings: () => Ma, thanks_to: () => va });
  var va = "Dalibor Hon <https://github.com/dallyh>", Ta = "", Ya = "ltr", Ma = { placeholder: "Hledat", clear_search: "Smazat", load_more: "Načíst další výsledky", search_label: "Prohledat tuto stránku", filters_label: "Filtry", zero_results: "Žádné výsledky pro [SEARCH_TERM]", many_results: "[COUNT] výsledků pro [SEARCH_TERM]", one_result: "[COUNT] výsledek pro [SEARCH_TERM]", total_zero_results: "Žádné výsledky", total_one_result: "[COUNT] výsledek", total_many_results: "[COUNT] výsledků", alt_search: "Žádné výsledky pro [SEARCH_TERM]. Zobrazují se výsledky pro [DIFFERENT_TERM]", search_suggestion: "Žádné výsledky pro [SEARCH_TERM]. Související výsledky hledání:", searching: "Hledám [SEARCH_TERM]...", results_label: "Výsledky hledání", keyboard_navigate: "navigovat", keyboard_select: "vybrat", keyboard_clear: "smazat", keyboard_close: "zavřít", keyboard_search: "hledat", error_search: "Hledání selhalo", filter_selected_one: "[COUNT] vybraný", filter_selected_many: "[COUNT] vybraných", input_hint: "Výsledky se zobrazí během psaní", loading: "Načítání" }, wa = { thanks_to: va, comments: Ta, direction: Ya, strings: Ma };
  var Jt = {};
  U(Jt, { comments: () => Oa, default: () => Pa, direction: () => ja, strings: () => Ka, thanks_to: () => za });
  var za = "Jonas Smedegaard <dr@jones.dk>", Oa = "", ja = "ltr", Ka = { placeholder: "Søg", clear_search: "Nulstil", load_more: "Indlæs flere resultater", search_label: "Søg på dette website", filters_label: "Filtre", zero_results: "Ingen resultater for [SEARCH_TERM]", many_results: "[COUNT] resultater for [SEARCH_TERM]", one_result: "[COUNT] resultat for [SEARCH_TERM]", total_zero_results: "Ingen resultater", total_one_result: "[COUNT] resultat", total_many_results: "[COUNT] resultater", alt_search: "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet", search_suggestion: "Ingen resultater for [SEARCH_TERM]. Prøv et af disse søgeord i stedet:", searching: "Søger efter [SEARCH_TERM]...", results_label: "Søgeresultater", keyboard_navigate: "naviger", keyboard_select: "vælg", keyboard_clear: "ryd", keyboard_close: "luk", keyboard_search: "søg", error_search: "Søgning mislykkedes", filter_selected_one: "[COUNT] valgt", filter_selected_many: "[COUNT] valgte", input_hint: "Resultater vises mens du skriver", loading: "Indlæser" }, Pa = { thanks_to: za, comments: Oa, direction: ja, strings: Ka };
  var vt = {};
  U(vt, { comments: () => $a, default: () => li, direction: () => ei, strings: () => ti, thanks_to: () => qa });
  var qa = "Jan Claasen <jan@cloudcannon.com>", $a = "", ei = "ltr", ti = { placeholder: "Suche", clear_search: "Löschen", load_more: "Mehr Ergebnisse laden", search_label: "Suche diese Seite", filters_label: "Filter", zero_results: "Keine Ergebnisse für [SEARCH_TERM]", many_results: "[COUNT] Ergebnisse für [SEARCH_TERM]", one_result: "[COUNT] Ergebnis für [SEARCH_TERM]", total_zero_results: "Keine Ergebnisse", total_one_result: "[COUNT] Ergebnis", total_many_results: "[COUNT] Ergebnisse", alt_search: "Keine Ergebnisse für [SEARCH_TERM]. Stattdessen werden Ergebnisse für [DIFFERENT_TERM] angezeigt", search_suggestion: "Keine Ergebnisse für [SEARCH_TERM]. Versuchen Sie eine der folgenden Suchen:", searching: "Suche nach [SEARCH_TERM] …", results_label: "Suchergebnisse", keyboard_navigate: "navigieren", keyboard_select: "auswählen", keyboard_clear: "löschen", keyboard_close: "schließen", keyboard_search: "suchen", error_search: "Suche fehlgeschlagen", filter_selected_one: "[COUNT] ausgewählt", filter_selected_many: "[COUNT] ausgewählt", input_hint: "Ergebnisse werden während der Eingabe angezeigt", loading: "Wird geladen" }, li = { thanks_to: qa, comments: $a, direction: ei, strings: ti };
  var Tt = {};
  U(Tt, { comments: () => ai, default: () => ni, direction: () => ii, strings: () => ri, thanks_to: () => si });
  var si = "George Papadopoulos", ai = "", ii = "ltr", ri = { placeholder: "Αναζήτηση", clear_search: "Καθαρισμός", load_more: "Φόρτωση περισσότερων αποτελεσμάτων", search_label: "Αναζήτηση σε αυτόν τον ιστότοπο", filters_label: "Φίλτρα", zero_results: "Δεν βρέθηκαν αποτελέσματα για [SEARCH_TERM]", many_results: "[COUNT] αποτελέσματα για [SEARCH_TERM]", one_result: "[COUNT] αποτέλεσμα για [SEARCH_TERM]", total_zero_results: "Δεν βρέθηκαν αποτελέσματα", total_one_result: "[COUNT] αποτέλεσμα", total_many_results: "[COUNT] αποτελέσματα", alt_search: "Δεν βρέθηκαν αποτελέσματα για [SEARCH_TERM]. Εμφανίζονται αποτελέσματα για [DIFFERENT_TERM]", search_suggestion: "Δεν βρέθηκαν αποτελέσματα για [SEARCH_TERM]. Δοκιμάστε μία από τις παρακάτω αναζητήσεις:", searching: "Αναζήτηση για [SEARCH_TERM]...", results_label: "Αποτελέσματα αναζήτησης", keyboard_navigate: "πλοήγηση", keyboard_select: "επιλογή", keyboard_clear: "καθαρισμός", keyboard_close: "κλείσιμο", keyboard_search: "αναζήτηση", error_search: "Η αναζήτηση απέτυχε", filter_selected_one: "[COUNT] επιλεγμένο", filter_selected_many: "[COUNT] επιλεγμένα", input_hint: "Τα αποτελέσματα θα εμφανίζονται καθώς πληκτρολογείτε", loading: "Φόρτωση" }, ni = { thanks_to: si, comments: ai, direction: ii, strings: ri };
  var Yt = {};
  U(Yt, { comments: () => gi, default: () => Ci, direction: () => oi, strings: () => ui, thanks_to: () => ci });
  var ci = "Liam Bigelow <liam@cloudcannon.com>", gi = "", oi = "ltr", ui = { placeholder: "Search", clear_search: "Clear", load_more: "Load more results", search_label: "Search this site", filters_label: "Filters", zero_results: "No results for [SEARCH_TERM]", many_results: "[COUNT] results for [SEARCH_TERM]", one_result: "[COUNT] result for [SEARCH_TERM]", total_zero_results: "No results", total_one_result: "[COUNT] result", total_many_results: "[COUNT] results", alt_search: "No results for [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead", search_suggestion: "No results for [SEARCH_TERM]. Try one of the following searches:", searching: "Searching for [SEARCH_TERM]...", results_label: "Search results", keyboard_navigate: "navigate", keyboard_select: "select", keyboard_clear: "clear", keyboard_close: "close", keyboard_search: "search", error_search: "Search failed", filter_selected_one: "[COUNT] selected", filter_selected_many: "[COUNT] selected", input_hint: "Results will appear as you type", loading: "Loading" }, Ci = { thanks_to: ci, comments: gi, direction: oi, strings: ui };
  var Mt = {};
  U(Mt, { comments: () => di, default: () => bi, direction: () => Ai, strings: () => _i, thanks_to: () => Ii });
  var Ii = "Pablo Villaverde <https://github.com/pvillaverde>", di = "", Ai = "ltr", _i = { placeholder: "Buscar", clear_search: "Limpiar", load_more: "Ver más resultados", search_label: "Buscar en este sitio", filters_label: "Filtros", zero_results: "No se encontraron resultados para [SEARCH_TERM]", many_results: "[COUNT] resultados encontrados para [SEARCH_TERM]", one_result: "[COUNT] resultado encontrado para [SEARCH_TERM]", total_zero_results: "Sin resultados", total_one_result: "[COUNT] resultado", total_many_results: "[COUNT] resultados", alt_search: "No se encontraron resultados para [SEARCH_TERM]. Mostrando en su lugar resultados para [DIFFERENT_TERM]", search_suggestion: "No se encontraron resultados para [SEARCH_TERM]. Prueba una de las siguientes búsquedas:", searching: "Buscando [SEARCH_TERM]...", results_label: "Resultados de búsqueda", keyboard_navigate: "navegar", keyboard_select: "elegir", keyboard_clear: "limpiar", keyboard_close: "cerrar", keyboard_search: "buscar", error_search: "Error en la búsqueda", filter_selected_one: "[COUNT] seleccionado", filter_selected_many: "[COUNT] seleccionados", input_hint: "Los resultados aparecerán mientras escribe", loading: "Cargando" }, bi = { thanks_to: Ii, comments: di, direction: Ai, strings: _i };
  var wt = {};
  U(wt, { comments: () => mi, default: () => pi, direction: () => fi, strings: () => Fi, thanks_to: () => Qi });
  var Qi = "Mikel Larreategi <mlarreaegi@codesyntax.com>", mi = "", fi = "ltr", Fi = { placeholder: "Bilatu", clear_search: "Garbitu", load_more: "Kargatu emaitza gehiagi", search_label: "Bilatu", filters_label: "Iragazkiak", zero_results: "Ez dago emaitzarik [SEARCH_TERM] bilaketarentzat", many_results: "[COUNT] emaitza [SEARCH_TERM] bilaketarentzat", one_result: "Emaitza bat [COUNT] [SEARCH_TERM] bilaketarentzat", total_zero_results: "Emaitzarik ez", total_one_result: "[COUNT] emaitza", total_many_results: "[COUNT] emaitza", alt_search: "Ez dago emaitzarik [SEARCH_TERM] bilaketarentzat. [DIFFERENT_TERM] bilaketaren emaitzak erakusten", search_suggestion: "Ez dago emaitzarik [SEARCH_TERM] bilaketarentzat. Saiatu hauetako beste bateikin:", searching: "[SEARCH_TERM] bilatzen...", results_label: "Bilaketaren emaitzak", keyboard_navigate: "nabigatu", keyboard_select: "hautatu", keyboard_clear: "garbitu", keyboard_close: "itxi", keyboard_search: "bilatu", error_search: "Bilaketak huts egin du", filter_selected_one: "[COUNT] hautatuta", filter_selected_many: "[COUNT] hautatuta", input_hint: "Emaitzak idatzi ahala agertuko dira", loading: "Kargatzen" }, pi = { thanks_to: Qi, comments: mi, direction: fi, strings: Fi };
  var zt = {};
  U(zt, { comments: () => xi, default: () => yi, direction: () => hi, strings: () => Ui, thanks_to: () => Bi });
  var Bi = "Ali Khaleqi Yekta <https://yekta.dev>", xi = "", hi = "rtl", Ui = { placeholder: "جستجو", clear_search: "پاکسازی", load_more: "بارگذاری نتایج بیشتر", search_label: "جستجو در سایت", filters_label: "فیلترها", zero_results: "نتیجه‌ای برای [SEARCH_TERM] یافت نشد", many_results: "[COUNT] نتیجه برای [SEARCH_TERM] یافت شد", one_result: "[COUNT] نتیجه برای [SEARCH_TERM] یافت شد", total_zero_results: "نتیجه‌ای یافت نشد", total_one_result: "[COUNT] نتیجه", total_many_results: "[COUNT] نتیجه", alt_search: "نتیجه‌ای برای [SEARCH_TERM] یافت نشد. در عوض نتایج برای [DIFFERENT_TERM] نمایش داده می‌شود", search_suggestion: "نتیجه‌ای برای [SEARCH_TERM] یافت نشد. یکی از جستجوهای زیر را امتحان کنید:", searching: "در حال جستجوی [SEARCH_TERM]...", results_label: "نتایج جستجو", keyboard_navigate: "پیمایش", keyboard_select: "انتخاب", keyboard_clear: "پاکسازی", keyboard_close: "بستن", keyboard_search: "جستجو", error_search: "جستجو ناموفق بود", filter_selected_one: "[COUNT] انتخاب شده", filter_selected_many: "[COUNT] انتخاب شده", input_hint: "نتایج هنگام تایپ نمایش داده می‌شوند", loading: "در حال بارگذاری" }, yi = { thanks_to: Bi, comments: xi, direction: hi, strings: Ui };
  var Ot = {};
  U(Ot, { comments: () => Zi, default: () => Gi, direction: () => Ni, strings: () => Ei, thanks_to: () => Xi });
  var Xi = "Valtteri Laitinen <dev@valtlai.fi>", Zi = "", Ni = "ltr", Ei = { placeholder: "Haku", clear_search: "Tyhjennä", load_more: "Lataa lisää tuloksia", search_label: "Hae tältä sivustolta", filters_label: "Suodattimet", zero_results: "Ei tuloksia haulle [SEARCH_TERM]", many_results: "[COUNT] tulosta haulle [SEARCH_TERM]", one_result: "[COUNT] tulos haulle [SEARCH_TERM]", total_zero_results: "Ei tuloksia", total_one_result: "[COUNT] tulos", total_many_results: "[COUNT] tulosta", alt_search: "Ei tuloksia haulle [SEARCH_TERM]. Näytetään tulokset sen sijaan haulle [DIFFERENT_TERM]", search_suggestion: "Ei tuloksia haulle [SEARCH_TERM]. Kokeile jotain seuraavista:", searching: "Haetaan [SEARCH_TERM]...", results_label: "Hakutulokset", keyboard_navigate: "siirry", keyboard_select: "valitse", keyboard_clear: "tyhjennä", keyboard_close: "sulje", keyboard_search: "hae", error_search: "Haku epäonnistui", filter_selected_one: "[COUNT] valittu", filter_selected_many: "[COUNT] valittu", input_hint: "Tulokset näkyvät kirjoittaessasi", loading: "Ladataan" }, Gi = { thanks_to: Xi, comments: Zi, direction: Ni, strings: Ei };
  var jt = {};
  U(jt, { comments: () => Li, default: () => Ri, direction: () => Wi, strings: () => Hi, thanks_to: () => ki });
  var ki = "Nicolas Friedli <nicolas@theologique.ch>", Li = "", Wi = "ltr", Hi = { placeholder: "Rechercher", clear_search: "Nettoyer", load_more: "Charger plus de résultats", search_label: "Recherche sur ce site", filters_label: "Filtres", zero_results: "Pas de résultat pour [SEARCH_TERM]", many_results: "[COUNT] résultats pour [SEARCH_TERM]", one_result: "[COUNT] résultat pour [SEARCH_TERM]", total_zero_results: "Pas de résultat", total_one_result: "[COUNT] résultat", total_many_results: "[COUNT] résultats", alt_search: "Pas de résultat pour [SEARCH_TERM]. Montre les résultats pour [DIFFERENT_TERM] à la place", search_suggestion: "Pas de résultat pour [SEARCH_TERM]. Essayer une des recherches suivantes:", searching: "Recherche [SEARCH_TERM]...", results_label: "Résultats de recherche", keyboard_navigate: "naviguer", keyboard_select: "choisir", keyboard_clear: "effacer", keyboard_close: "fermer", keyboard_search: "rechercher", error_search: "Échec de la recherche", filter_selected_one: "[COUNT] sélectionné", filter_selected_many: "[COUNT] sélectionnés", input_hint: "Les résultats apparaîtront au fur et à mesure de la saisie", loading: "Chargement" }, Ri = { thanks_to: ki, comments: Li, direction: Wi, strings: Hi };
  var Kt = {};
  U(Kt, { comments: () => Vi, default: () => vi, direction: () => Di, strings: () => Ji, thanks_to: () => Si });
  var Si = "Pablo Villaverde <https://github.com/pvillaverde>", Vi = "", Di = "ltr", Ji = { placeholder: "Buscar", clear_search: "Limpar", load_more: "Ver máis resultados", search_label: "Buscar neste sitio", filters_label: "Filtros", zero_results: "Non se atoparon resultados para [SEARCH_TERM]", many_results: "[COUNT] resultados atopados para [SEARCH_TERM]", one_result: "[COUNT] resultado atopado para [SEARCH_TERM]", total_zero_results: "Sen resultados", total_one_result: "[COUNT] resultado", total_many_results: "[COUNT] resultados", alt_search: "Non se atoparon resultados para [SEARCH_TERM]. Amosando no seu lugar resultados para [DIFFERENT_TERM]", search_suggestion: "Non se atoparon resultados para [SEARCH_TERM]. Probe unha das seguintes pesquisas:", searching: "Buscando [SEARCH_TERM]...", results_label: "Resultados da busca", keyboard_navigate: "navegar", keyboard_select: "escoller", keyboard_clear: "limpar", keyboard_close: "pechar", keyboard_search: "buscar", error_search: "Erro na busca", filter_selected_one: "[COUNT] seleccionado", filter_selected_many: "[COUNT] seleccionados", input_hint: "Os resultados aparecerán mentres escribe", loading: "Cargando" }, vi = { thanks_to: Si, comments: Vi, direction: Di, strings: Ji };
  var Pt = {};
  U(Pt, { comments: () => Yi, default: () => zi, direction: () => Mi, strings: () => wi, thanks_to: () => Ti });
  var Ti = "Nir Tamir <nirtamir2@gmail.com>", Yi = "", Mi = "rtl", wi = { placeholder: "חיפוש", clear_search: "ניקוי", load_more: "עוד תוצאות", search_label: "חיפוש באתר זה", filters_label: "מסננים", zero_results: "לא נמצאו תוצאות עבור [SEARCH_TERM]", many_results: "נמצאו [COUNT] תוצאות עבור [SEARCH_TERM]", one_result: "נמצאה תוצאה אחת עבור [SEARCH_TERM]", total_zero_results: "לא נמצאו תוצאות", total_one_result: "תוצאה [COUNT]", total_many_results: "[COUNT] תוצאות", alt_search: "לא נמצאו תוצאות עבור [SEARCH_TERM]. מוצגות תוצאות עבור [DIFFERENT_TERM]", search_suggestion: "לא נמצאו תוצאות עבור [SEARCH_TERM]. נסו אחד מהחיפושים הבאים:", searching: "מחפש את [SEARCH_TERM]...", results_label: "תוצאות חיפוש", keyboard_navigate: "ניווט", keyboard_select: "בחירה", keyboard_clear: "ניקוי", keyboard_close: "סגירה", keyboard_search: "חיפוש", error_search: "החיפוש נכשל", filter_selected_one: "[COUNT] נבחר", filter_selected_many: "[COUNT] נבחרו", input_hint: "התוצאות יופיעו תוך כדי הקלדה", loading: "טוען" }, zi = { thanks_to: Ti, comments: Yi, direction: Mi, strings: wi };
  var qt = {};
  U(qt, { comments: () => ji, default: () => qi, direction: () => Ki, strings: () => Pi, thanks_to: () => Oi });
  var Oi = "Amit Yadav <amit@thetechbasket.com>", ji = "", Ki = "ltr", Pi = { placeholder: "खोजें", clear_search: "साफ करें", load_more: "और अधिक परिणाम लोड करें", search_label: "इस साइट में खोजें", filters_label: "फ़िल्टर", zero_results: "कोई परिणाम [SEARCH_TERM] के लिए नहीं मिला", many_results: "[COUNT] परिणाम [SEARCH_TERM] के लिए मिले", one_result: "[COUNT] परिणाम [SEARCH_TERM] के लिए मिला", total_zero_results: "कोई परिणाम नहीं", total_one_result: "[COUNT] परिणाम", total_many_results: "[COUNT] परिणाम", alt_search: "[SEARCH_TERM] के लिए कोई परिणाम नहीं मिला। इसके बजाय [DIFFERENT_TERM] के लिए परिणाम दिखा रहा है", search_suggestion: "[SEARCH_TERM] के लिए कोई परिणाम नहीं मिला। निम्नलिखित खोजों में से कोई एक आज़माएं:", searching: "[SEARCH_TERM] की खोज की जा रही है...", results_label: "खोज परिणाम", keyboard_navigate: "नेविगेट", keyboard_select: "चुनें", keyboard_clear: "साफ़ करें", keyboard_close: "बंद करें", keyboard_search: "खोजें", error_search: "खोज विफल", filter_selected_one: "[COUNT] चयनित", filter_selected_many: "[COUNT] चयनित", input_hint: "टाइप करते समय परिणाम दिखाई देंगे", loading: "लोड हो रहा है" }, qi = { thanks_to: Oi, comments: ji, direction: Ki, strings: Pi };
  var $t = {};
  U($t, { comments: () => er, default: () => sr, direction: () => tr, strings: () => lr, thanks_to: () => $i });
  var $i = "Diomed <https://github.com/diomed>", er = "", tr = "ltr", lr = { placeholder: "Traži", clear_search: "Očisti", load_more: "Učitaj više rezultata", search_label: "Pretraži ovu stranicu", filters_label: "Filteri", zero_results: "Nema rezultata za [SEARCH_TERM]", many_results: "[COUNT] rezultata za [SEARCH_TERM]", one_result: "[COUNT] rezultat za [SEARCH_TERM]", total_zero_results: "Nema rezultata", total_one_result: "[COUNT] rezultat", total_many_results: "[COUNT] rezultata", alt_search: "Nema rezultata za [SEARCH_TERM]. Prikazujem rezultate za [DIFFERENT_TERM]", search_suggestion: "Nema rezultata za [SEARCH_TERM]. Pokušaj s jednom od ovih pretraga:", searching: "Pretražujem [SEARCH_TERM]...", results_label: "Rezultati pretrage", keyboard_navigate: "navigiraj", keyboard_select: "odaberi", keyboard_clear: "očisti", keyboard_close: "zatvori", keyboard_search: "traži", error_search: "Pretraga nije uspjela", filter_selected_one: "[COUNT] odabran", filter_selected_many: "[COUNT] odabranih", input_hint: "Rezultati će se pojaviti dok tipkate", loading: "Učitavanje" }, sr = { thanks_to: $i, comments: er, direction: tr, strings: lr };
  var el = {};
  U(el, { comments: () => ir, default: () => cr, direction: () => rr, strings: () => nr, thanks_to: () => ar });
  var ar = "Adam Laki <info@adamlaki.com>", ir = "", rr = "ltr", nr = { placeholder: "Keresés", clear_search: "Törlés", load_more: "További találatok betöltése", search_label: "Keresés az oldalon", filters_label: "Szűrés", zero_results: "Nincs találat a(z) [SEARCH_TERM] kifejezésre", many_results: "[COUNT] db találat a(z) [SEARCH_TERM] kifejezésre", one_result: "[COUNT] db találat a(z) [SEARCH_TERM] kifejezésre", total_zero_results: "Nincs találat", total_one_result: "[COUNT] találat", total_many_results: "[COUNT] találat", alt_search: "Nincs találat a(z) [SEARCH_TERM] kifejezésre. Találatok mutatása inkább a(z) [DIFFERENT_TERM] kifejezésre", search_suggestion: "Nincs találat a(z) [SEARCH_TERM] kifejezésre. Próbáld meg a következő keresések egyikét:", searching: "Keresés a(z) [SEARCH_TERM] kifejezésre...", results_label: "Keresési találatok", keyboard_navigate: "navigálás", keyboard_select: "kiválasztás", keyboard_clear: "törlés", keyboard_close: "bezárás", keyboard_search: "keresés", error_search: "A keresés sikertelen", filter_selected_one: "[COUNT] kiválasztva", filter_selected_many: "[COUNT] kiválasztva", input_hint: "A találatok gépelés közben jelennek meg", loading: "Betöltés" }, cr = { thanks_to: ar, comments: ir, direction: rr, strings: nr };
  var tl = {};
  U(tl, { comments: () => or, default: () => Ir, direction: () => ur, strings: () => Cr, thanks_to: () => gr });
  var gr = "Nixentric", or = "", ur = "ltr", Cr = { placeholder: "Cari", clear_search: "Bersihkan", load_more: "Muat lebih banyak hasil", search_label: "Telusuri situs ini", filters_label: "Filter", zero_results: "[SEARCH_TERM] tidak ditemukan", many_results: "Ditemukan [COUNT] hasil untuk [SEARCH_TERM]", one_result: "Ditemukan [COUNT] hasil untuk [SEARCH_TERM]", total_zero_results: "Tidak ada hasil", total_one_result: "[COUNT] hasil", total_many_results: "[COUNT] hasil", alt_search: "[SEARCH_TERM] tidak ditemukan. Menampilkan hasil [DIFFERENT_TERM] sebagai gantinya", search_suggestion: "[SEARCH_TERM] tidak ditemukan. Coba salah satu pencarian berikut ini:", searching: "Mencari [SEARCH_TERM]...", results_label: "Hasil pencarian", keyboard_navigate: "navigasi", keyboard_select: "pilih", keyboard_clear: "bersihkan", keyboard_close: "tutup", keyboard_search: "cari", error_search: "Pencarian gagal", filter_selected_one: "[COUNT] dipilih", filter_selected_many: "[COUNT] dipilih", input_hint: "Hasil akan muncul saat Anda mengetik", loading: "Memuat" }, Ir = { thanks_to: gr, comments: or, direction: ur, strings: Cr };
  var ll = {};
  U(ll, { comments: () => Ar, default: () => Qr, direction: () => _r, strings: () => br, thanks_to: () => dr });
  var dr = "Cosette Bruhns Alonso, Andrew Janco <apjanco@upenn.edu>", Ar = "", _r = "ltr", br = { placeholder: "Cerca", clear_search: "Cancella la cronologia", load_more: "Mostra più risultati", search_label: "Cerca nel sito", filters_label: "Filtri di ricerca", zero_results: "Nessun risultato per [SEARCH_TERM]", many_results: "[COUNT] risultati per [SEARCH_TERM]", one_result: "[COUNT] risultato per [SEARCH_TERM]", total_zero_results: "Nessun risultato", total_one_result: "[COUNT] risultato", total_many_results: "[COUNT] risultati", alt_search: "Nessun risultato per [SEARCH_TERM]. Mostrando risultati per [DIFFERENT_TERM] come alternativa.", search_suggestion: "Nessun risultato per [SEARCH_TERM]. Prova una delle seguenti ricerche:", searching: "Cercando [SEARCH_TERM]...", results_label: "Risultati della ricerca", keyboard_navigate: "naviga", keyboard_select: "seleziona", keyboard_clear: "cancella", keyboard_close: "chiudi", keyboard_search: "cerca", error_search: "Ricerca fallita", filter_selected_one: "[COUNT] selezionato", filter_selected_many: "[COUNT] selezionati", input_hint: "I risultati appariranno durante la digitazione", loading: "Caricamento" }, Qr = { thanks_to: dr, comments: Ar, direction: _r, strings: br };
  var sl = {};
  U(sl, { comments: () => fr, default: () => Br, direction: () => Fr, strings: () => pr, thanks_to: () => mr });
  var mr = "Tate", fr = "", Fr = "ltr", pr = { placeholder: "検索", clear_search: "クリア", load_more: "次を読み込む", search_label: "このサイトを検索", filters_label: "フィルタ", zero_results: "[SEARCH_TERM]の検索に一致する情報はありませんでした", many_results: "[SEARCH_TERM]の[COUNT]件の検索結果", one_result: "[SEARCH_TERM]の[COUNT]件の検索結果", total_zero_results: "結果なし", total_one_result: "[COUNT]件の結果", total_many_results: "[COUNT]件の結果", alt_search: "[SEARCH_TERM]の検索に一致する情報はありませんでした。[DIFFERENT_TERM]の検索結果を表示しています", search_suggestion: "[SEARCH_TERM]の検索に一致する情報はありませんでした。次のいずれかの検索を試してください", searching: "[SEARCH_TERM]を検索しています", results_label: "検索結果", keyboard_navigate: "移動", keyboard_select: "選択", keyboard_clear: "クリア", keyboard_close: "閉じる", keyboard_search: "検索", error_search: "検索に失敗しました", filter_selected_one: "[COUNT]件選択中", filter_selected_many: "[COUNT]件選択中", input_hint: "入力中に検索結果が表示されます", loading: "読み込み中" }, Br = { thanks_to: mr, comments: fr, direction: Fr, strings: pr };
  var al = {};
  U(al, { comments: () => hr, default: () => Xr, direction: () => Ur, strings: () => yr, thanks_to: () => xr });
  var xr = "Seokho Son <https://github.com/seokho-son>", hr = "", Ur = "ltr", yr = { placeholder: "검색어", clear_search: "비우기", load_more: "검색 결과 더 보기", search_label: "사이트 검색", filters_label: "필터", zero_results: "[SEARCH_TERM]에 대한 결과 없음", many_results: "[SEARCH_TERM]에 대한 결과 [COUNT]건", one_result: "[SEARCH_TERM]에 대한 결과 [COUNT]건", total_zero_results: "결과 없음", total_one_result: "결과 [COUNT]건", total_many_results: "결과 [COUNT]건", alt_search: "[SEARCH_TERM]에 대한 결과 없음. [DIFFERENT_TERM]에 대한 결과", search_suggestion: "[SEARCH_TERM]에 대한 결과 없음. 추천 검색어: ", searching: "[SEARCH_TERM] 검색 중...", results_label: "검색 결과", keyboard_navigate: "이동", keyboard_select: "선택", keyboard_clear: "비우기", keyboard_close: "닫기", keyboard_search: "검색", error_search: "검색 실패", filter_selected_one: "[COUNT]개 선택됨", filter_selected_many: "[COUNT]개 선택됨", input_hint: "입력하는 동안 결과가 표시됩니다", loading: "로딩 중" }, Xr = { thanks_to: xr, comments: hr, direction: Ur, strings: yr };
  var il = {};
  U(il, { comments: () => Nr, default: () => kr, direction: () => Er, strings: () => Gr, thanks_to: () => Zr });
  var Zr = "", Nr = "", Er = "ltr", Gr = { placeholder: "Rapu", clear_search: "Whakakore", load_more: "Whakauta ētahi otinga kē", search_label: "Rapu", filters_label: "Tātari", zero_results: "Otinga kore ki [SEARCH_TERM]", many_results: "[COUNT] otinga ki [SEARCH_TERM]", one_result: "[COUNT] otinga ki [SEARCH_TERM]", total_zero_results: "Kāore he otinga", total_one_result: "[COUNT] otinga", total_many_results: "[COUNT] ngā otinga", alt_search: "Otinga kore ki [SEARCH_TERM]. Otinga kē ki [DIFFERENT_TERM]", search_suggestion: "Otinga kore ki [SEARCH_TERM]. whakamātau ki ngā mea atu:", searching: "Rapu ki [SEARCH_TERM]...", results_label: "Ngā otinga rapu", keyboard_navigate: "whakatere", keyboard_select: "tīpako", keyboard_clear: "whakakore", keyboard_close: "kati", keyboard_search: "rapu", error_search: "Kāore i eke te rapu", filter_selected_one: "[COUNT] kua tīpakohia", filter_selected_many: "[COUNT] kua tīpakohia", input_hint: "Ka puta ngā otinga i a koe e patopato ana", loading: "E uta ana" }, kr = { thanks_to: Zr, comments: Nr, direction: Er, strings: Gr };
  var rl = {};
  U(rl, { comments: () => Wr, default: () => Sr, direction: () => Hr, strings: () => Rr, thanks_to: () => Lr });
  var Lr = "Harry Min Khant <https://harrymkt.github.io>", Wr = "", Hr = "ltr", Rr = { placeholder: "ရှာရန်", clear_search: "ရှာဖွေမှုကို ရှင်းလင်းပါ။", load_more: "နောက်ထပ်ရလဒ်များကို တင်ပါ။", search_label: "ဤဆိုက်တွင်ရှာဖွေပါ။", filters_label: "စစ်ထုတ်မှုများ", zero_results: "[SEARCH_TERM] အတွက် ရလဒ်များ မရှိပါ", many_results: "[SEARCH_TERM] အတွက် ရလဒ် [COUNT] ခု", one_result: "[SEARCH_TERM] အတွက် ရလဒ် [COUNT]", total_zero_results: "ရလဒ်များ မရှိပါ", total_one_result: "ရလဒ် [COUNT] ခု", total_many_results: "ရလဒ် [COUNT] ခု", alt_search: "[SEARCH_TERM] အတွက် ရလဒ်မရှိပါ။ ၎င်းအစား [DIFFERENT_TERM] အတွက် ရလဒ်များကို ပြသသည်။", search_suggestion: "[SEARCH_TERM] အတွက် ရလဒ်မရှိပါ။ အောက်ပါရှာဖွေမှုများထဲမှ တစ်ခုကို စမ်းကြည့်ပါ:", searching: "[SEARCH_TERM] ကို ရှာဖွေနေသည်...", results_label: "ရှာဖွေမှု ရလဒ်များ", keyboard_navigate: "လမ်းညွှန်", keyboard_select: "ရွေးချယ်", keyboard_clear: "ရှင်းလင်း", keyboard_close: "ပိတ်", keyboard_search: "ရှာရန်", error_search: "ရှာဖွေမှု မအောင်မြင်ပါ", filter_selected_one: "[COUNT] ခု ရွေးချယ်ထားသည်", filter_selected_many: "[COUNT] ခု ရွေးချယ်ထားသည်", input_hint: "ရိုက်နေစဉ် ရလဒ်များ ပေါ်လာပါမည်", loading: "တင်နေသည်" }, Sr = { thanks_to: Lr, comments: Wr, direction: Hr, strings: Rr };
  var nl = {};
  U(nl, { comments: () => Dr, default: () => Tr, direction: () => Jr, strings: () => vr, thanks_to: () => Vr });
  var Vr = "Eirik Mikkelsen", Dr = "", Jr = "ltr", vr = { placeholder: "Søk", clear_search: "Fjern", load_more: "Last flere resultater", search_label: "Søk på denne siden", filters_label: "Filtre", zero_results: "Ingen resultater for [SEARCH_TERM]", many_results: "[COUNT] resultater for [SEARCH_TERM]", one_result: "[COUNT] resultat for [SEARCH_TERM]", total_zero_results: "Ingen resultater", total_one_result: "[COUNT] resultat", total_many_results: "[COUNT] resultater", alt_search: "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet", search_suggestion: "Ingen resultater for [SEARCH_TERM]. Prøv en av disse søkeordene i stedet:", searching: "Søker etter [SEARCH_TERM]", results_label: "Søkeresultater", keyboard_navigate: "naviger", keyboard_select: "velg", keyboard_clear: "fjern", keyboard_close: "lukk", keyboard_search: "søk", error_search: "Søk feilet", filter_selected_one: "[COUNT] valgt", filter_selected_many: "[COUNT] valgte", input_hint: "Resultater vises mens du skriver", loading: "Laster" }, Tr = { thanks_to: Vr, comments: Dr, direction: Jr, strings: vr };
  var cl = {};
  U(cl, { comments: () => Mr, default: () => Or, direction: () => wr, strings: () => zr, thanks_to: () => Yr });
  var Yr = "Paul van Brouwershaven", Mr = "", wr = "ltr", zr = { placeholder: "Zoeken", clear_search: "Reset", load_more: "Meer resultaten laden", search_label: "Doorzoek deze site", filters_label: "Filters", zero_results: "Geen resultaten voor [SEARCH_TERM]", many_results: "[COUNT] resultaten voor [SEARCH_TERM]", one_result: "[COUNT] resultaat voor [SEARCH_TERM]", total_zero_results: "Geen resultaten", total_one_result: "[COUNT] resultaat", total_many_results: "[COUNT] resultaten", alt_search: "Geen resultaten voor [SEARCH_TERM]. In plaats daarvan worden resultaten voor [DIFFERENT_TERM] weergegeven", search_suggestion: "Geen resultaten voor [SEARCH_TERM]. Probeer een van de volgende zoekopdrachten:", searching: "Zoeken naar [SEARCH_TERM]...", results_label: "Zoekresultaten", keyboard_navigate: "navigeren", keyboard_select: "selecteren", keyboard_clear: "wissen", keyboard_close: "sluiten", keyboard_search: "zoeken", error_search: "Zoeken mislukt", filter_selected_one: "[COUNT] geselecteerd", filter_selected_many: "[COUNT] geselecteerd", input_hint: "Resultaten verschijnen terwijl u typt", loading: "Laden" }, Or = { thanks_to: Yr, comments: Mr, direction: wr, strings: zr };
  var gl = {};
  U(gl, { comments: () => Kr, default: () => $r, direction: () => Pr, strings: () => qr, thanks_to: () => jr });
  var jr = "Eirik Mikkelsen", Kr = "", Pr = "ltr", qr = { placeholder: "Søk", clear_search: "Fjern", load_more: "Last fleire resultat", search_label: "Søk på denne sida", filters_label: "Filter", zero_results: "Ingen resultat for [SEARCH_TERM]", many_results: "[COUNT] resultat for [SEARCH_TERM]", one_result: "[COUNT] resultat for [SEARCH_TERM]", total_zero_results: "Ingen resultat", total_one_result: "[COUNT] resultat", total_many_results: "[COUNT] resultat", alt_search: "Ingen resultat for [SEARCH_TERM]. Viser resultat for [DIFFERENT_TERM] i staden", search_suggestion: "Ingen resultat for [SEARCH_TERM]. Prøv eitt av desse søkeorda i staden:", searching: "Søker etter [SEARCH_TERM]", results_label: "Søkeresultat", keyboard_navigate: "naviger", keyboard_select: "vel", keyboard_clear: "fjern", keyboard_close: "lukk", keyboard_search: "søk", error_search: "Søk feila", filter_selected_one: "[COUNT] vald", filter_selected_many: "[COUNT] valde", input_hint: "Resultat visast medan du skriv", loading: "Lastar" }, $r = { thanks_to: jr, comments: Kr, direction: Pr, strings: qr };
  var ol = {};
  U(ol, { comments: () => tn, default: () => an, direction: () => ln, strings: () => sn, thanks_to: () => en });
  var en = "Christopher Wingate", tn = "", ln = "ltr", sn = { placeholder: "Søk", clear_search: "Fjern", load_more: "Last flere resultater", search_label: "Søk på denne siden", filters_label: "Filtre", zero_results: "Ingen resultater for [SEARCH_TERM]", many_results: "[COUNT] resultater for [SEARCH_TERM]", one_result: "[COUNT] resultat for [SEARCH_TERM]", total_zero_results: "Ingen resultater", total_one_result: "[COUNT] resultat", total_many_results: "[COUNT] resultater", alt_search: "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet", search_suggestion: "Ingen resultater for [SEARCH_TERM]. Prøv en av disse søkeordene i stedet:", searching: "Søker etter [SEARCH_TERM]", results_label: "Søkeresultater", keyboard_navigate: "naviger", keyboard_select: "velg", keyboard_clear: "fjern", keyboard_close: "lukk", keyboard_search: "søk", error_search: "Søk feilet", filter_selected_one: "[COUNT] valgt", filter_selected_many: "[COUNT] valgte", input_hint: "Resultater vises mens du skriver", loading: "Laster" }, an = { thanks_to: en, comments: tn, direction: ln, strings: sn };
  var ul = {};
  U(ul, { comments: () => nn, default: () => on, direction: () => cn, strings: () => gn, thanks_to: () => rn });
  var rn = "", nn = "", cn = "ltr", gn = { placeholder: "Szukaj", clear_search: "Wyczyść", load_more: "Załaduj więcej", search_label: "Przeszukaj tę stronę", filters_label: "Filtry", zero_results: "Brak wyników dla [SEARCH_TERM]", many_results: "[COUNT] wyników dla [SEARCH_TERM]", one_result: "[COUNT] wynik dla [SEARCH_TERM]", total_zero_results: "Brak wyników", total_one_result: "[COUNT] wynik", total_many_results: "[COUNT] wyników", alt_search: "Brak wyników dla [SEARCH_TERM]. Wyświetlam wyniki dla [DIFFERENT_TERM]", search_suggestion: "Brak wyników dla [SEARCH_TERM]. Pokrewne wyniki wyszukiwania:", searching: "Szukam [SEARCH_TERM]...", results_label: "Wyniki wyszukiwania", keyboard_navigate: "nawiguj", keyboard_select: "wybierz", keyboard_clear: "wyczyść", keyboard_close: "zamknij", keyboard_search: "szukaj", error_search: "Wyszukiwanie nie powiodło się", filter_selected_one: "[COUNT] wybrany", filter_selected_many: "[COUNT] wybranych", input_hint: "Wyniki pojawią się podczas pisania", loading: "Ładowanie" }, on = { thanks_to: rn, comments: nn, direction: cn, strings: gn };
  var Cl = {};
  U(Cl, { comments: () => Cn, default: () => An, direction: () => In, strings: () => dn, thanks_to: () => un });
  var un = "Jonatah", Cn = "", In = "ltr", dn = { placeholder: "Pesquisar", clear_search: "Limpar", load_more: "Ver mais resultados", search_label: "Pesquisar", filters_label: "Filtros", zero_results: "Nenhum resultado encontrado para [SEARCH_TERM]", many_results: "[COUNT] resultados encontrados para [SEARCH_TERM]", one_result: "[COUNT] resultado encontrado para [SEARCH_TERM]", total_zero_results: "Nenhum resultado", total_one_result: "[COUNT] resultado", total_many_results: "[COUNT] resultados", alt_search: "Nenhum resultado encontrado para [SEARCH_TERM]. Exibindo resultados para [DIFFERENT_TERM]", search_suggestion: "Nenhum resultado encontrado para [SEARCH_TERM]. Tente uma das seguintes pesquisas:", searching: "Pesquisando por [SEARCH_TERM]...", results_label: "Resultados da pesquisa", keyboard_navigate: "navegar", keyboard_select: "selecionar", keyboard_clear: "limpar", keyboard_close: "fechar", keyboard_search: "pesquisar", error_search: "Falha na pesquisa", filter_selected_one: "[COUNT] selecionado", filter_selected_many: "[COUNT] selecionados", input_hint: "Os resultados aparecerão enquanto você digita", loading: "Carregando" }, An = { thanks_to: un, comments: Cn, direction: In, strings: dn };
  var Il = {};
  U(Il, { comments: () => bn, default: () => fn, direction: () => Qn, strings: () => mn, thanks_to: () => _n });
  var _n = "Bogdan Mateescu <bogdan@surfverse.com>", bn = "", Qn = "ltr", mn = { placeholder: "Căutare", clear_search: "Ştergeţi", load_more: "Încărcați mai multe rezultate", search_label: "Căutați în acest site", filters_label: "Filtre", zero_results: "Niciun rezultat pentru [SEARCH_TERM]", many_results: "[COUNT] rezultate pentru [SEARCH_TERM]", one_result: "[COUNT] rezultat pentru [SEARCH_TERM]", total_zero_results: "Niciun rezultat", total_one_result: "[COUNT] rezultat", total_many_results: "[COUNT] rezultate", alt_search: "Niciun rezultat pentru [SEARCH_TERM]. Se afișează în schimb rezultatele pentru [DIFFERENT_TERM]", search_suggestion: "Niciun rezultat pentru [SEARCH_TERM]. Încercați una dintre următoarele căutări:", searching: "Se caută după: [SEARCH_TERM]...", results_label: "Rezultatele căutării", keyboard_navigate: "navigare", keyboard_select: "selectare", keyboard_clear: "ștergere", keyboard_close: "închidere", keyboard_search: "căutare", error_search: "Căutarea a eșuat", filter_selected_one: "[COUNT] selectat", filter_selected_many: "[COUNT] selectate", input_hint: "Rezultatele vor apărea pe măsură ce tastați", loading: "Se încarcă" }, fn = { thanks_to: _n, comments: bn, direction: Qn, strings: mn };
  var dl = {};
  U(dl, { comments: () => pn, default: () => hn, direction: () => Bn, strings: () => xn, thanks_to: () => Fn });
  var Fn = "Aleksandr Gordeev", pn = "", Bn = "ltr", xn = { placeholder: "Поиск", clear_search: "Очистить поле", load_more: "Загрузить еще", search_label: "Поиск по сайту", filters_label: "Фильтры", zero_results: "Ничего не найдено по запросу: [SEARCH_TERM]", many_results: "[COUNT] результатов по запросу: [SEARCH_TERM]", one_result: "[COUNT] результат по запросу: [SEARCH_TERM]", total_zero_results: "Ничего не найдено", total_one_result: "[COUNT] результат", total_many_results: "[COUNT] результатов", alt_search: "Ничего не найдено по запросу: [SEARCH_TERM]. Показаны результаты по запросу: [DIFFERENT_TERM]", search_suggestion: "Ничего не найдено по запросу: [SEARCH_TERM]. Попробуйте один из следующих вариантов", searching: "Поиск по запросу: [SEARCH_TERM]", results_label: "Результаты поиска", keyboard_navigate: "навигация", keyboard_select: "выбрать", keyboard_clear: "очистить", keyboard_close: "закрыть", keyboard_search: "поиск", error_search: "Ошибка поиска", filter_selected_one: "[COUNT] выбран", filter_selected_many: "[COUNT] выбрано", input_hint: "Результаты будут появляться по мере ввода", loading: "Загрузка" }, hn = { thanks_to: Fn, comments: pn, direction: Bn, strings: xn };
  var Al = {};
  U(Al, { comments: () => yn, default: () => Nn, direction: () => Xn, strings: () => Zn, thanks_to: () => Un });
  var Un = "Andrija Sagicc", yn = "", Xn = "ltr", Zn = { placeholder: "Претрага", clear_search: "Брисање", load_more: "Приказ више резултата", search_label: "Претрага сајта", filters_label: "Филтери", zero_results: "Нема резултата за [SEARCH_TERM]", many_results: "[COUNT] резултата за [SEARCH_TERM]", one_result: "[COUNT] резултата за [SEARCH_TERM]", total_zero_results: "Нема резултата", total_one_result: "[COUNT] резултат", total_many_results: "[COUNT] резултата", alt_search: "Нема резултата за [SEARCH_TERM]. Приказ додатник резултата за [DIFFERENT_TERM]", search_suggestion: "Нема резултата за [SEARCH_TERM]. Покушајте са неком од следећих претрага:", searching: "Претрага термина [SEARCH_TERM]...", results_label: "Резултати претраге", keyboard_navigate: "навигација", keyboard_select: "изабери", keyboard_clear: "обриши", keyboard_close: "затвори", keyboard_search: "претрага", error_search: "Претрага није успела", filter_selected_one: "[COUNT] изабран", filter_selected_many: "[COUNT] изабраних", input_hint: "Резултати ће се појављивати док куцате", loading: "Учитавање" }, Nn = { thanks_to: Un, comments: yn, direction: Xn, strings: Zn };
  var _l = {};
  U(_l, { comments: () => Gn, default: () => Wn, direction: () => kn, strings: () => Ln, thanks_to: () => En });
  var En = "Montazar Al-Jaber <montazar@nanawee.tech>", Gn = "", kn = "ltr", Ln = { placeholder: "Sök", clear_search: "Rensa", load_more: "Visa fler träffar", search_label: "Sök på denna sida", filters_label: "Filter", zero_results: "[SEARCH_TERM] gav inga träffar", many_results: "[SEARCH_TERM] gav [COUNT] träffar", one_result: "[SEARCH_TERM] gav [COUNT] träff", total_zero_results: "Inga träffar", total_one_result: "[COUNT] träff", total_many_results: "[COUNT] träffar", alt_search: "[SEARCH_TERM] gav inga träffar. Visar resultat för [DIFFERENT_TERM] istället", search_suggestion: "[SEARCH_TERM] gav inga träffar. Försök igen med en av följande sökord:", searching: "Söker efter [SEARCH_TERM]...", results_label: "Sökresultat", keyboard_navigate: "navigera", keyboard_select: "välj", keyboard_clear: "rensa", keyboard_close: "stäng", keyboard_search: "sök", error_search: "Sökningen misslyckades", filter_selected_one: "[COUNT] vald", filter_selected_many: "[COUNT] valda", input_hint: "Resultat visas medan du skriver", loading: "Läser in" }, Wn = { thanks_to: En, comments: Gn, direction: kn, strings: Ln };
  var bl = {};
  U(bl, { comments: () => Rn, default: () => Dn, direction: () => Sn, strings: () => Vn, thanks_to: () => Hn });
  var Hn = "Anonymous", Rn = "", Sn = "ltr", Vn = { placeholder: "Tafuta", clear_search: "Futa", load_more: "Pakia matokeo zaidi", search_label: "Tafuta tovuti hii", filters_label: "Vichujio", zero_results: "Hakuna matokeo ya [SEARCH_TERM]", many_results: "Matokeo [COUNT] ya [SEARCH_TERM]", one_result: "Tokeo [COUNT] la [SEARCH_TERM]", total_zero_results: "Hakuna matokeo", total_one_result: "Tokeo [COUNT]", total_many_results: "Matokeo [COUNT]", alt_search: "Hakuna mayokeo ya [SEARCH_TERM]. Badala yake, inaonyesha matokeo ya [DIFFERENT_TERM]", search_suggestion: "Hakuna matokeo ya [SEARCH_TERM]. Jaribu mojawapo ya utafutaji ufuatao:", searching: "Kutafuta [SEARCH_TERM]...", results_label: "Matokeo ya utafutaji", keyboard_navigate: "sogeza", keyboard_select: "chagua", keyboard_clear: "futa", keyboard_close: "funga", keyboard_search: "tafuta", error_search: "Utafutaji umeshindwa", filter_selected_one: "[COUNT] imechaguliwa", filter_selected_many: "[COUNT] zimechaguliwa", input_hint: "Matokeo yataonekana unapoandika", loading: "Inapakia" }, Dn = { thanks_to: Hn, comments: Rn, direction: Sn, strings: Vn };
  var Ql = {};
  U(Ql, { comments: () => vn, default: () => Mn, direction: () => Tn, strings: () => Yn, thanks_to: () => Jn });
  var Jn = "", vn = "", Tn = "ltr", Yn = { placeholder: "தேடுக", clear_search: "அழிக்குக", load_more: "மேலும் முடிவுகளைக் காட்டுக", search_label: "இந்த தளத்தில் தேடுக", filters_label: "வடிகட்டல்கள்", zero_results: "[SEARCH_TERM] க்கான முடிவுகள் இல்லை", many_results: "[SEARCH_TERM] க்கான [COUNT] முடிவுகள்", one_result: "[SEARCH_TERM] க்கான முடிவு", total_zero_results: "முடிவுகள் இல்லை", total_one_result: "[COUNT] முடிவு", total_many_results: "[COUNT] முடிவுகள்", alt_search: "[SEARCH_TERM] இத்தேடலுக்கான முடிவுகள் இல்லை, இந்த தேடல்களுக்கான ஒத்த முடிவுகள் [DIFFERENT_TERM]", search_suggestion: "[SEARCH_TERM] இத் தேடலுக்கான முடிவுகள் இல்லை.இதற்கு பதிலீடான தேடல்களை தேடுக:", searching: "[SEARCH_TERM] தேடப்படுகின்றது", results_label: "தேடல் முடிவுகள்", keyboard_navigate: "வழிநடத்து", keyboard_select: "தேர்ந்தெடு", keyboard_clear: "அழி", keyboard_close: "மூடு", keyboard_search: "தேடு", error_search: "தேடல் தோல்வி", filter_selected_one: "[COUNT] தேர்ந்தெடுக்கப்பட்டது", filter_selected_many: "[COUNT] தேர்ந்தெடுக்கப்பட்டன", input_hint: "நீங்கள் தட்டச்சு செய்யும்போது முடிவுகள் தோன்றும்", loading: "ஏற்றுகிறது" }, Mn = { thanks_to: Jn, comments: vn, direction: Tn, strings: Yn };
  var ml = {};
  U(ml, { comments: () => zn, default: () => Kn, direction: () => On, strings: () => jn, thanks_to: () => wn });
  var wn = "Patiphon Loetsuthakun <ptphon@gmail.com>", zn = "", On = "ltr", jn = { placeholder: "ค้นหา", clear_search: "ล้าง", load_more: "โหลดผลลัพธ์เพิ่มเติม", search_label: "ค้นหาบนเว็บไซต์", filters_label: "ตัวกรอง", zero_results: "ไม่พบผลลัพธ์สำหรับ [SEARCH_TERM]", many_results: "พบ [COUNT] ผลการค้นหาสำหรับ [SEARCH_TERM]", one_result: "พบ [COUNT] ผลการค้นหาสำหรับ [SEARCH_TERM]", total_zero_results: "ไม่พบผลลัพธ์", total_one_result: "[COUNT] ผลลัพธ์", total_many_results: "[COUNT] ผลลัพธ์", alt_search: "ไม่พบผลลัพธ์สำหรับ [SEARCH_TERM] แสดงผลลัพธ์จากการค้นหา [DIFFERENT_TERM] แทน", search_suggestion: "ไม่พบผลลัพธ์สำหรับ [SEARCH_TERM] ลองคำค้นหาเหล่านี้แทน:", searching: "กำลังค้นหา [SEARCH_TERM]...", results_label: "ผลการค้นหา", keyboard_navigate: "นำทาง", keyboard_select: "เลือก", keyboard_clear: "ล้าง", keyboard_close: "ปิด", keyboard_search: "ค้นหา", error_search: "การค้นหาล้มเหลว", filter_selected_one: "เลือกแล้ว [COUNT] รายการ", filter_selected_many: "เลือกแล้ว [COUNT] รายการ", input_hint: "ผลลัพธ์จะปรากฏขณะที่คุณพิมพ์", loading: "กำลังโหลด" }, Kn = { thanks_to: wn, comments: zn, direction: On, strings: jn };
  var fl = {};
  U(fl, { comments: () => qn, default: () => tc, direction: () => $n, strings: () => ec, thanks_to: () => Pn });
  var Pn = "Taylan Özgür Bildik", qn = "", $n = "ltr", ec = { placeholder: "Araştır", clear_search: "Temizle", load_more: "Daha fazla sonuç", search_label: "Site genelinde arama", filters_label: "Filtreler", zero_results: "[SEARCH_TERM] için sonuç yok", many_results: "[SEARCH_TERM] için [COUNT] sonuç bulundu", one_result: "[SEARCH_TERM] için [COUNT] sonuç bulundu", total_zero_results: "Sonuç yok", total_one_result: "[COUNT] sonuç", total_many_results: "[COUNT] sonuç", alt_search: "[SEARCH_TERM] için sonuç yok. Bunun yerine [DIFFERENT_TERM] için sonuçlar gösteriliyor", search_suggestion: "[SEARCH_TERM] için sonuç yok. Alternatif olarak aşağıdaki kelimelerden birini deneyebilirsiniz:", searching: "[SEARCH_TERM] araştırılıyor...", results_label: "Arama sonuçları", keyboard_navigate: "gezin", keyboard_select: "seç", keyboard_clear: "temizle", keyboard_close: "kapat", keyboard_search: "ara", error_search: "Arama başarısız", filter_selected_one: "[COUNT] seçili", filter_selected_many: "[COUNT] seçili", input_hint: "Sonuçlar siz yazarken görünecektir", loading: "Yükleniyor" }, tc = { thanks_to: Pn, comments: qn, direction: $n, strings: ec };
  var Fl = {};
  U(Fl, { comments: () => sc, default: () => rc, direction: () => ac, strings: () => ic, thanks_to: () => lc });
  var lc = "Vladyslav Lyshenko <vladdnepr1989@gmail.com>", sc = "", ac = "ltr", ic = { placeholder: "Пошук", clear_search: "Очистити поле", load_more: "Завантажити ще", search_label: "Пошук по сайту", filters_label: "Фільтри", zero_results: "Нічого не знайдено за запитом: [SEARCH_TERM]", many_results: "[COUNT] результатів на запит: [SEARCH_TERM]", one_result: "[COUNT] результат за запитом: [SEARCH_TERM]", total_zero_results: "Нічого не знайдено", total_one_result: "[COUNT] результат", total_many_results: "[COUNT] результатів", alt_search: "Нічого не знайдено на запит: [SEARCH_TERM]. Показано результати на запит: [DIFFERENT_TERM]", search_suggestion: "Нічого не знайдено на запит: [SEARCH_TERM]. Спробуйте один із таких варіантів", searching: "Пошук за запитом: [SEARCH_TERM]", results_label: "Результати пошуку", keyboard_navigate: "навігація", keyboard_select: "вибрати", keyboard_clear: "очистити", keyboard_close: "закрити", keyboard_search: "пошук", error_search: "Помилка пошуку", filter_selected_one: "[COUNT] вибрано", filter_selected_many: "[COUNT] вибрано", input_hint: "Результати з'являтимуться під час введення", loading: "Завантаження" }, rc = { thanks_to: lc, comments: sc, direction: ac, strings: ic };
  var pl = {};
  U(pl, { comments: () => cc, default: () => uc, direction: () => gc, strings: () => oc, thanks_to: () => nc });
  var nc = "Long Nhat Nguyen", cc = "", gc = "ltr", oc = { placeholder: "Tìm kiếm", clear_search: "Xóa", load_more: "Nhiều kết quả hơn", search_label: "Tìm kiếm trong trang này", filters_label: "Bộ lọc", zero_results: "Không tìm thấy kết quả cho [SEARCH_TERM]", many_results: "[COUNT] kết quả cho [SEARCH_TERM]", one_result: "[COUNT] kết quả cho [SEARCH_TERM]", total_zero_results: "Không có kết quả", total_one_result: "[COUNT] kết quả", total_many_results: "[COUNT] kết quả", alt_search: "Không tìm thấy kết quả cho [SEARCH_TERM]. Kiểm thị kết quả thay thế với [DIFFERENT_TERM]", search_suggestion: "Không tìm thấy kết quả cho [SEARCH_TERM]. Thử một trong các tìm kiếm:", searching: "Đang tìm kiếm cho [SEARCH_TERM]...", results_label: "Kết quả tìm kiếm", keyboard_navigate: "chuyển", keyboard_select: "chọn", keyboard_clear: "xóa", keyboard_close: "đóng", keyboard_search: "tìm kiếm", error_search: "Tìm kiếm thất bại", filter_selected_one: "Đã chọn [COUNT]", filter_selected_many: "Đã chọn [COUNT]", input_hint: "Kết quả sẽ xuất hiện khi bạn nhập", loading: "Đang tải" }, uc = { thanks_to: nc, comments: cc, direction: gc, strings: oc };
  var Bl = {};
  U(Bl, { comments: () => Ic, default: () => _c, direction: () => dc, strings: () => Ac, thanks_to: () => Cc });
  var Cc = "Amber Song", Ic = "", dc = "ltr", Ac = { placeholder: "搜索", clear_search: "清除", load_more: "加载更多结果", search_label: "站内搜索", filters_label: "筛选", zero_results: "未找到 [SEARCH_TERM] 的相关结果", many_results: "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果", one_result: "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果", total_zero_results: "无结果", total_one_result: "[COUNT] 个结果", total_many_results: "[COUNT] 个结果", alt_search: "未找到 [SEARCH_TERM] 的相关结果。改为显示 [DIFFERENT_TERM] 的相关结果", search_suggestion: "未找到 [SEARCH_TERM] 的相关结果。请尝试以下搜索。", searching: "正在搜索 [SEARCH_TERM]...", results_label: "搜索结果", keyboard_navigate: "导航", keyboard_select: "选择", keyboard_clear: "清除", keyboard_close: "关闭", keyboard_search: "搜索", error_search: "搜索失败", filter_selected_one: "已选择 [COUNT] 个", filter_selected_many: "已选择 [COUNT] 个", input_hint: "输入时将显示结果", loading: "加载中" }, _c = { thanks_to: Cc, comments: Ic, direction: dc, strings: Ac };
  var xl = {};
  U(xl, { comments: () => Qc, default: () => Fc, direction: () => mc, strings: () => fc, thanks_to: () => bc });
  var bc = "Amber Song", Qc = "", mc = "ltr", fc = { placeholder: "搜尋", clear_search: "清除", load_more: "載入更多結果", search_label: "站內搜尋", filters_label: "篩選", zero_results: "找不到 [SEARCH_TERM] 的相關結果", many_results: "找到 [COUNT] 個 [SEARCH_TERM] 的相關結果", one_result: "找到 [COUNT] 個 [SEARCH_TERM] 的相關結果", total_zero_results: "無結果", total_one_result: "[COUNT] 個結果", total_many_results: "[COUNT] 個結果", alt_search: "未找到 [SEARCH_TERM] 的相關結果。改為顯示 [DIFFERENT_TERM] 的相關結果", search_suggestion: "找不到 [SEARCH_TERM] 的相關結果。請嘗試以下的建議之一。", searching: "正在搜尋[SEARCH_TERM]...", results_label: "搜尋結果", keyboard_navigate: "導覽", keyboard_select: "選擇", keyboard_clear: "清除", keyboard_close: "關閉", keyboard_search: "搜尋", error_search: "搜尋失敗", filter_selected_one: "已選擇 [COUNT] 個", filter_selected_many: "已選擇 [COUNT] 個", input_hint: "輸入時將顯示結果", loading: "載入中" }, Fc = { thanks_to: bc, comments: Qc, direction: mc, strings: fc };
  var hl = {};
  U(hl, { comments: () => Bc, default: () => Uc, direction: () => xc, strings: () => hc, thanks_to: () => pc });
  var pc = "Amber Song", Bc = "", xc = "ltr", hc = { placeholder: "搜索", clear_search: "清除", load_more: "加载更多结果", search_label: "站内搜索", filters_label: "筛选", zero_results: "未找到 [SEARCH_TERM] 的相关结果", many_results: "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果", one_result: "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果", total_zero_results: "无结果", total_one_result: "[COUNT] 个结果", total_many_results: "[COUNT] 个结果", alt_search: "未找到 [SEARCH_TERM] 的相关结果。改为显示 [DIFFERENT_TERM] 的相关结果", search_suggestion: "未找到 [SEARCH_TERM] 的相关结果。请尝试以下搜索。", searching: "正在搜索 [SEARCH_TERM]...", results_label: "搜索结果", keyboard_navigate: "导航", keyboard_select: "选择", keyboard_clear: "清除", keyboard_close: "关闭", keyboard_search: "搜索", error_search: "搜索失败", filter_selected_one: "已选择 [COUNT] 个", filter_selected_many: "已选择 [COUNT] 个", input_hint: "输入时将显示结果", loading: "加载中" }, Uc = { thanks_to: pc, comments: Bc, direction: xc, strings: hc };
  var yc = [Ht, Rt, St, Vt, Dt, Jt, vt, Tt, Yt, Mt, wt, zt, Ot, jt, Kt, Pt, qt, $t, el, tl, ll, sl, al, il, rl, nl, cl, gl, ol, ul, Cl, Il, dl, Al, _l, bl, Ql, ml, fl, Fl, pl, Bl, xl, hl], hs = yc, Us = ["../../translations/af.json", "../../translations/ar.json", "../../translations/bn.json", "../../translations/ca.json", "../../translations/cs.json", "../../translations/da.json", "../../translations/de.json", "../../translations/el.json", "../../translations/en.json", "../../translations/es.json", "../../translations/eu.json", "../../translations/fa.json", "../../translations/fi.json", "../../translations/fr.json", "../../translations/gl.json", "../../translations/he.json", "../../translations/hi.json", "../../translations/hr.json", "../../translations/hu.json", "../../translations/id.json", "../../translations/it.json", "../../translations/ja.json", "../../translations/ko.json", "../../translations/mi.json", "../../translations/my.json", "../../translations/nb.json", "../../translations/nl.json", "../../translations/nn.json", "../../translations/no.json", "../../translations/pl.json", "../../translations/pt.json", "../../translations/ro.json", "../../translations/ru.json", "../../translations/sr.json", "../../translations/sv.json", "../../translations/sw.json", "../../translations/ta.json", "../../translations/th.json", "../../translations/tr.json", "../../translations/uk.json", "../../translations/vi.json", "../../translations/zh-cn.json", "../../translations/zh-tw.json", "../../translations/zh.json"];
  function ys(l, e, t) {
    let s = l.slice();
    return s[53] = e[t], s;
  }
  function Xs(l) {
    let e, t, s;
    function a(r) {
      l[38](r);
    }
    let i = { show_empty_filters: l[5], open_filters: l[6], available_filters: l[18], translate: l[20], automatic_translations: l[19], translations: l[7] };
    return l[0] !== void 0 && (i.selected_filters = l[0]), e = new xs({ props: i }), Ce.push(() => Ol(e, "selected_filters", a)), { c() {
      _t(e.$$.fragment);
    }, m(r, n) {
      _e(e, r, n), s = true;
    }, p(r, n) {
      let c = {};
      n[0] & 32 && (c.show_empty_filters = r[5]), n[0] & 64 && (c.open_filters = r[6]), n[0] & 262144 && (c.available_filters = r[18]), n[0] & 524288 && (c.automatic_translations = r[19]), n[0] & 128 && (c.translations = r[7]), !t && n[0] & 1 && (t = true, c.selected_filters = r[0], Yl(() => t = false)), e.$set(c);
    }, i(r) {
      s || (k(e.$$.fragment, r), s = true);
    }, o(r) {
      V(e.$$.fragment, r), s = false;
    }, d(r) {
      be(e, r);
    } };
  }
  function Zs(l) {
    let e, t, s, a, i = [Nc, Zc], r = [];
    function n(c, C) {
      return c[14] ? 0 : 1;
    }
    return t = n(l, [-1, -1]), s = r[t] = i[t](l), { c() {
      e = F("div"), s.c(), _(e, "class", "pagefind-ui__results-area svelte-e9gkc3");
    }, m(c, C) {
      x(c, e, C), r[t].m(e, null), a = true;
    }, p(c, C) {
      let u = t;
      t = n(c, C), t === u ? r[t].p(c, C) : (ie(), V(r[u], 1, 1, () => {
        r[u] = null;
      }), re(), s = r[t], s ? s.p(c, C) : (s = r[t] = i[t](c), s.c()), k(s, 1), s.m(e, null));
    }, i(c) {
      a || (k(s), a = true);
    }, o(c) {
      V(s), a = false;
    }, d(c) {
      c && B(e), r[t].d();
    } };
  }
  function Zc(l) {
    let e, t, s, a = [], i = /* @__PURE__ */ new Map(), r, n, c;
    function C(I, Q) {
      return I[13].results.length === 0 ? kc : I[13].results.length === 1 ? Gc : Ec;
    }
    let u = C(l, [-1, -1]), A = u(l), o = S(l[13].results.slice(0, l[17])), d = (I) => I[53].id;
    for (let I = 0; I < o.length; I += 1) {
      let Q = ys(l, o, I), f = d(Q);
      i.set(f, a[I] = Ns(f, Q));
    }
    let g = l[13].results.length > l[17] && Es(l);
    return { c() {
      e = F("p"), A.c(), t = X(), s = F("ol");
      for (let I = 0; I < a.length; I += 1) a[I].c();
      r = X(), g && g.c(), n = ee(), _(e, "class", "pagefind-ui__message svelte-e9gkc3"), _(s, "class", "pagefind-ui__results svelte-e9gkc3");
    }, m(I, Q) {
      x(I, e, Q), A.m(e, null), x(I, t, Q), x(I, s, Q);
      for (let f = 0; f < a.length; f += 1) a[f] && a[f].m(s, null);
      x(I, r, Q), g && g.m(I, Q), x(I, n, Q), c = true;
    }, p(I, Q) {
      u === (u = C(I, Q)) && A ? A.p(I, Q) : (A.d(1), A = u(I), A && (A.c(), A.m(e, null))), Q[0] & 139292 && (o = S(I[13].results.slice(0, I[17])), ie(), a = zl(a, Q, d, 1, I, o, i, s, wl, Ns, null, ys), re()), I[13].results.length > I[17] ? g ? g.p(I, Q) : (g = Es(I), g.c(), g.m(n.parentNode, n)) : g && (g.d(1), g = null);
    }, i(I) {
      if (!c) {
        for (let Q = 0; Q < o.length; Q += 1) k(a[Q]);
        c = true;
      }
    }, o(I) {
      for (let Q = 0; Q < a.length; Q += 1) V(a[Q]);
      c = false;
    }, d(I) {
      I && (B(e), B(t), B(s), B(r), B(n)), A.d();
      for (let Q = 0; Q < a.length; Q += 1) a[Q].d();
      g && g.d(I);
    } };
  }
  function Nc(l) {
    let e, t = l[16] && Gs(l);
    return { c() {
      t && t.c(), e = ee();
    }, m(s, a) {
      t && t.m(s, a), x(s, e, a);
    }, p(s, a) {
      s[16] ? t ? t.p(s, a) : (t = Gs(s), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    }, i: W, o: W, d(s) {
      s && B(e), t && t.d(s);
    } };
  }
  function Ec(l) {
    let e = l[20]("many_results", l[19], l[7]).replace(/\[SEARCH_TERM\]/, l[16]).replace(/\[COUNT\]/, new Intl.NumberFormat(l[7].language || l[19].language).format(l[13].results.length)) + "", t;
    return { c() {
      t = Z(e);
    }, m(s, a) {
      x(s, t, a);
    }, p(s, a) {
      a[0] & 598144 && e !== (e = s[20]("many_results", s[19], s[7]).replace(/\[SEARCH_TERM\]/, s[16]).replace(/\[COUNT\]/, new Intl.NumberFormat(s[7].language || s[19].language).format(s[13].results.length)) + "") && H(t, e);
    }, d(s) {
      s && B(t);
    } };
  }
  function Gc(l) {
    let e = l[20]("one_result", l[19], l[7]).replace(/\[SEARCH_TERM\]/, l[16]).replace(/\[COUNT\]/, new Intl.NumberFormat(l[7].language || l[19].language).format(1)) + "", t;
    return { c() {
      t = Z(e);
    }, m(s, a) {
      x(s, t, a);
    }, p(s, a) {
      a[0] & 589952 && e !== (e = s[20]("one_result", s[19], s[7]).replace(/\[SEARCH_TERM\]/, s[16]).replace(/\[COUNT\]/, new Intl.NumberFormat(s[7].language || s[19].language).format(1)) + "") && H(t, e);
    }, d(s) {
      s && B(t);
    } };
  }
  function kc(l) {
    let e = l[20]("zero_results", l[19], l[7]).replace(/\[SEARCH_TERM\]/, l[16]) + "", t;
    return { c() {
      t = Z(e);
    }, m(s, a) {
      x(s, t, a);
    }, p(s, a) {
      a[0] & 589952 && e !== (e = s[20]("zero_results", s[19], s[7]).replace(/\[SEARCH_TERM\]/, s[16]) + "") && H(t, e);
    }, d(s) {
      s && B(t);
    } };
  }
  function Lc(l) {
    let e, t;
    return e = new as({ props: { show_images: l[2], process_result: l[4], result: l[53] } }), { c() {
      _t(e.$$.fragment);
    }, m(s, a) {
      _e(e, s, a), t = true;
    }, p(s, a) {
      let i = {};
      a[0] & 4 && (i.show_images = s[2]), a[0] & 16 && (i.process_result = s[4]), a[0] & 139264 && (i.result = s[53]), e.$set(i);
    }, i(s) {
      t || (k(e.$$.fragment, s), t = true);
    }, o(s) {
      V(e.$$.fragment, s), t = false;
    }, d(s) {
      be(e, s);
    } };
  }
  function Wc(l) {
    let e, t;
    return e = new As({ props: { show_images: l[2], process_result: l[4], result: l[53] } }), { c() {
      _t(e.$$.fragment);
    }, m(s, a) {
      _e(e, s, a), t = true;
    }, p(s, a) {
      let i = {};
      a[0] & 4 && (i.show_images = s[2]), a[0] & 16 && (i.process_result = s[4]), a[0] & 139264 && (i.result = s[53]), e.$set(i);
    }, i(s) {
      t || (k(e.$$.fragment, s), t = true);
    }, o(s) {
      V(e.$$.fragment, s), t = false;
    }, d(s) {
      be(e, s);
    } };
  }
  function Ns(l, e) {
    let t, s, a, i, r, n = [Wc, Lc], c = [];
    function C(u, A) {
      return u[3] ? 0 : 1;
    }
    return s = C(e, [-1, -1]), a = c[s] = n[s](e), { key: l, first: null, c() {
      t = ee(), a.c(), i = ee(), this.first = t;
    }, m(u, A) {
      x(u, t, A), c[s].m(u, A), x(u, i, A), r = true;
    }, p(u, A) {
      e = u;
      let o = s;
      s = C(e, A), s === o ? c[s].p(e, A) : (ie(), V(c[o], 1, 1, () => {
        c[o] = null;
      }), re(), a = c[s], a ? a.p(e, A) : (a = c[s] = n[s](e), a.c()), k(a, 1), a.m(i.parentNode, i));
    }, i(u) {
      r || (k(a), r = true);
    }, o(u) {
      V(a), r = false;
    }, d(u) {
      u && (B(t), B(i)), c[s].d(u);
    } };
  }
  function Es(l) {
    let e, t = l[20]("load_more", l[19], l[7]) + "", s, a, i;
    return { c() {
      e = F("button"), s = Z(t), _(e, "type", "button"), _(e, "class", "pagefind-ui__button svelte-e9gkc3");
    }, m(r, n) {
      x(r, e, n), m(e, s), a || (i = M(e, "click", l[22]), a = true);
    }, p(r, n) {
      n[0] & 524416 && t !== (t = r[20]("load_more", r[19], r[7]) + "") && H(s, t);
    }, d(r) {
      r && B(e), a = false, i();
    } };
  }
  function Gs(l) {
    let e, t = l[20]("searching", l[19], l[7]).replace(/\[SEARCH_TERM\]/, l[16]) + "", s;
    return { c() {
      e = F("p"), s = Z(t), _(e, "class", "pagefind-ui__message svelte-e9gkc3");
    }, m(a, i) {
      x(a, e, i), m(e, s);
    }, p(a, i) {
      i[0] & 589952 && t !== (t = a[20]("searching", a[19], a[7]).replace(/\[SEARCH_TERM\]/, a[16]) + "") && H(s, t);
    }, d(a) {
      a && B(e);
    } };
  }
  function Hc(l) {
    let e, t, s, a, i, r, n, c = l[20]("clear_search", l[19], l[7]) + "", C, u, A, o, d, g, I, Q, f = l[12] && Xs(l), p = l[15] && Zs(l);
    return { c() {
      e = F("div"), t = F("form"), s = F("input"), r = X(), n = F("button"), C = Z(c), u = X(), A = F("div"), f && f.c(), o = X(), p && p.c(), _(s, "class", "pagefind-ui__search-input svelte-e9gkc3"), _(s, "type", "text"), _(s, "placeholder", a = l[20]("placeholder", l[19], l[7])), _(s, "title", i = l[20]("placeholder", l[19], l[7])), _(s, "autocapitalize", "none"), _(s, "enterkeyhint", "search"), s.autofocus = l[8], _(n, "class", "pagefind-ui__search-clear svelte-e9gkc3"), w(n, "pagefind-ui__suppressed", !l[9]), _(A, "class", "pagefind-ui__drawer svelte-e9gkc3"), w(A, "pagefind-ui__hidden", !l[15]), _(t, "class", "pagefind-ui__form svelte-e9gkc3"), _(t, "role", "search"), _(t, "aria-label", d = l[20]("search_label", l[19], l[7])), _(t, "action", "javascript:void(0);"), _(e, "class", "pagefind-ui svelte-e9gkc3"), w(e, "pagefind-ui--reset", l[1]);
    }, m(h, y) {
      x(h, e, y), m(e, t), m(t, s), ge(s, l[9]), l[35](s), m(t, r), m(t, n), m(n, C), l[36](n), m(t, u), m(t, A), f && f.m(A, null), m(A, o), p && p.m(A, null), g = true, l[8] && s.focus(), I || (Q = [M(s, "focus", l[21]), M(s, "keydown", l[33]), M(s, "input", l[34]), M(n, "click", l[37]), M(t, "submit", Rc)], I = true);
    }, p(h, y) {
      (!g || y[0] & 524416 && a !== (a = h[20]("placeholder", h[19], h[7]))) && _(s, "placeholder", a), (!g || y[0] & 524416 && i !== (i = h[20]("placeholder", h[19], h[7]))) && _(s, "title", i), (!g || y[0] & 256) && (s.autofocus = h[8]), y[0] & 512 && s.value !== h[9] && ge(s, h[9]), (!g || y[0] & 524416) && c !== (c = h[20]("clear_search", h[19], h[7]) + "") && H(C, c), (!g || y[0] & 512) && w(n, "pagefind-ui__suppressed", !h[9]), h[12] ? f ? (f.p(h, y), y[0] & 4096 && k(f, 1)) : (f = Xs(h), f.c(), k(f, 1), f.m(A, o)) : f && (ie(), V(f, 1, 1, () => {
        f = null;
      }), re()), h[15] ? p ? (p.p(h, y), y[0] & 32768 && k(p, 1)) : (p = Zs(h), p.c(), k(p, 1), p.m(A, null)) : p && (ie(), V(p, 1, 1, () => {
        p = null;
      }), re()), (!g || y[0] & 32768) && w(A, "pagefind-ui__hidden", !h[15]), (!g || y[0] & 524416 && d !== (d = h[20]("search_label", h[19], h[7]))) && _(t, "aria-label", d), (!g || y[0] & 2) && w(e, "pagefind-ui--reset", h[1]);
    }, i(h) {
      g || (k(f), k(p), g = true);
    }, o(h) {
      V(f), V(p), g = false;
    }, d(h) {
      h && B(e), l[35](null), l[36](null), f && f.d(), p && p.d(), I = false, v(Q);
    } };
  }
  var Rc = (l) => l.preventDefault();
  function Sc(l, e, t) {
    let s = {}, a = Us.map((b) => b.match(/([^\/]+)\.json$/)[1]);
    for (let b = 0; b < a.length; b++) s[a[b]] = { language: a[b], ...hs[b].strings };
    let { base_path: i = "/breakegg-guide/pagefind/" } = e, { page_size: r = 5 } = e, { reset_styles: n = true } = e, { show_images: c = true } = e, { show_sub_results: C = false } = e, { excerpt_length: u } = e, { process_result: A = null } = e, { process_term: o = null } = e, { show_empty_filters: d = true } = e, { open_filters: g = [] } = e, { debounce_timeout_ms: I = 300 } = e, { pagefind_options: Q = {} } = e, { merge_index: f = [] } = e, { trigger_search_term: p = "" } = e, { translations: h = {} } = e, { autofocus: y = false } = e, { focus_on_slash: q = false } = e, { sort: z = null } = e, { selected_filters: N = {} } = e, R = "", G, J, ct, Ls = 40, mt = false, Xl = [], ft = false, Ft = false, Zl = 0, Nl = "", pt = r, El = null, Ie = null, Gl = s.en, Ws = (b, E, L) => {
      var _a2, _b;
      return (_b = (_a2 = L[b]) != null ? _a2 : E[b]) != null ? _b : "";
    }, kl = (b) => {
      if (!q) return;
      let E = document.activeElement, L = E && (E.tagName === "INPUT" || E.tagName === "TEXTAREA" || E.isContentEditable);
      b.key === "/" && !L && (b.preventDefault(), J == null ? void 0 : J.focus());
    };
    Ut(() => {
      var _a2, _b, _c2;
      let b = ((_c2 = (_b = (_a2 = document == null ? void 0 : document.querySelector) == null ? void 0 : _a2.call(document, "html")) == null ? void 0 : _b.getAttribute) == null ? void 0 : _c2.call(_b, "lang")) || "en", E = bt(b.toLocaleLowerCase());
      t(19, Gl = s[`${E.language}-${E.script}-${E.region}`] || s[`${E.language}-${E.region}`] || s[`${E.language}`] || s.en), q && document.addEventListener("keydown", kl);
    }), yt(() => {
      var _a2;
      (_a2 = G == null ? void 0 : G.destroy) == null ? void 0 : _a2.call(G), G = null, q && document.removeEventListener("keydown", kl);
    });
    let Ll = async () => {
      var _a2;
      if (!mt && (t(12, mt = true), !G)) {
        let b;
        try {
          b = await import(`${i}pagefind.js?v=ecffba502d`);
        } catch (L) {
          console.error(L), console.error([`Pagefind couldn't be loaded from ${this.options.bundlePath}pagefind.js?v=ecffba502d`, "You can configure this by passing a bundlePath option to PagefindUI"].join(`
`)), (document == null ? void 0 : document.currentScript) && document.currentScript.tagName.toUpperCase() === "SCRIPT" ? console.error(`[DEBUG: Loaded from ${(_a2 = document.currentScript.src) != null ? _a2 : "bad script location"}]`) : console.error("no known script location");
        }
        u || t(24, u = C ? 12 : 30);
        let E = { ...Q || {}, excerptLength: u };
        await b.options(E);
        for (let L of f) {
          if (!L.bundlePath) throw new Error("mergeIndex requires a bundlePath parameter");
          let Y = L.bundlePath;
          delete L.bundlePath, await b.mergeIndex(Y, L);
        }
        G = b, Hs();
      }
    }, Hs = async () => {
      G && (El = await G.filters(), (!Ie || !Object.keys(Ie).length) && t(18, Ie = El));
    }, Rs = (b) => {
      let E = {};
      return Object.entries(b).filter(([, L]) => L).forEach(([L]) => {
        let [Y, ne] = L.split(/:(.*)$/);
        E[Y] = E[Y] || [], E[Y].push(ne);
      }), E;
    }, de, Ss = async (b, E) => {
      if (!b) {
        t(15, Ft = false), de && clearTimeout(de);
        return;
      }
      let L = Rs(E), Y = () => Vs(b, L);
      I > 0 && b ? (de && clearTimeout(de), de = setTimeout(Y, I), await Wl(), G.preload(b, { filters: L })) : Y(), Ds();
    }, Wl = async () => {
      for (; !G; ) Ll(), await new Promise((b) => setTimeout(b, 50));
    }, Vs = async (b, E) => {
      var _a2;
      t(16, Nl = b || ""), typeof o == "function" && (b = o(b)), t(14, ft = true), t(15, Ft = true), await Wl();
      let L = ++Zl, Y = { filters: E };
      z && typeof z == "object" && (Y.sort = z);
      let ne = await G.search(b, Y);
      Zl === L && (ne.filters && ((_a2 = Object.keys(ne.filters)) == null ? void 0 : _a2.length) && t(18, Ie = ne.filters), t(13, Xl = ne), t(14, ft = false), t(17, pt = r));
    }, Ds = () => {
      let b = ct.offsetWidth;
      b != Ls && t(10, J.style.paddingRight = `${b + 2}px`, J);
    }, Js = (b) => {
      b == null ? void 0 : b.preventDefault(), t(17, pt += r);
    }, vs = (b) => {
      b.key === "Escape" && (t(9, R = ""), J.blur()), b.key === "Enter" && b.preventDefault();
    };
    function Ts() {
      R = this.value, t(9, R), t(23, p);
    }
    function Ys(b) {
      Ce[b ? "unshift" : "push"](() => {
        J = b, t(10, J);
      });
    }
    function Ms(b) {
      Ce[b ? "unshift" : "push"](() => {
        ct = b, t(11, ct);
      });
    }
    let ws = () => {
      t(9, R = ""), J.blur();
    };
    function zs(b) {
      N = b, t(0, N);
    }
    return l.$$set = (b) => {
      "base_path" in b && t(25, i = b.base_path), "page_size" in b && t(26, r = b.page_size), "reset_styles" in b && t(1, n = b.reset_styles), "show_images" in b && t(2, c = b.show_images), "show_sub_results" in b && t(3, C = b.show_sub_results), "excerpt_length" in b && t(24, u = b.excerpt_length), "process_result" in b && t(4, A = b.process_result), "process_term" in b && t(27, o = b.process_term), "show_empty_filters" in b && t(5, d = b.show_empty_filters), "open_filters" in b && t(6, g = b.open_filters), "debounce_timeout_ms" in b && t(28, I = b.debounce_timeout_ms), "pagefind_options" in b && t(29, Q = b.pagefind_options), "merge_index" in b && t(30, f = b.merge_index), "trigger_search_term" in b && t(23, p = b.trigger_search_term), "translations" in b && t(7, h = b.translations), "autofocus" in b && t(8, y = b.autofocus), "focus_on_slash" in b && t(31, q = b.focus_on_slash), "sort" in b && t(32, z = b.sort), "selected_filters" in b && t(0, N = b.selected_filters);
    }, l.$$.update = () => {
      l.$$.dirty[0] & 8388608 && p && (t(9, R = p), t(23, p = "")), l.$$.dirty[0] & 513 && Ss(R, N);
    }, [N, n, c, C, A, d, g, h, y, R, J, ct, mt, Xl, ft, Ft, Nl, pt, Ie, Gl, Ws, Ll, Js, p, u, i, r, o, I, Q, f, q, z, vs, Ts, Ys, Ms, ws, zs];
  }
  var Ul = class extends T {
    constructor(e) {
      super(), K(this, e, Sc, Hc, O, { base_path: 25, page_size: 26, reset_styles: 1, show_images: 2, show_sub_results: 3, excerpt_length: 24, process_result: 4, process_term: 27, show_empty_filters: 5, open_filters: 6, debounce_timeout_ms: 28, pagefind_options: 29, merge_index: 30, trigger_search_term: 23, translations: 7, autofocus: 8, focus_on_slash: 31, sort: 32, selected_filters: 0 }, null, [-1, -1]);
    }
  }, ks = Ul;
  var yl;
  try {
    (document == null ? void 0 : document.currentScript) && document.currentScript.tagName.toUpperCase() === "SCRIPT" && (yl = new URL(document.currentScript.src).pathname.match(/^(.*\/)(?:pagefind-)?ui.js.*$/)[1]);
  } catch (e) {
    yl = "/breakegg-guide/pagefind/";
  }
  var Qt = class {
    constructor(e) {
      var _a2, _b, _c2, _d, _e2, _f, _g, _h, _i2, _j, _k, _l2, _m, _n2, _o, _p, _q;
      this._pfs = null;
      let t = (_a2 = e.element) != null ? _a2 : "[data-pagefind-ui]", s = (_b = e.bundlePath) != null ? _b : yl, a = (_c2 = e.pageSize) != null ? _c2 : 5, i = (_d = e.resetStyles) != null ? _d : true, r = (_e2 = e.showImages) != null ? _e2 : true, n = (_f = e.showSubResults) != null ? _f : false, c = (_g = e.excerptLength) != null ? _g : 0, C = (_h = e.processResult) != null ? _h : null, u = (_i2 = e.processTerm) != null ? _i2 : null, A = (_j = e.showEmptyFilters) != null ? _j : true, o = (_k = e.openFilters) != null ? _k : [], d = (_l2 = e.debounceTimeoutMs) != null ? _l2 : 300, g = (_m = e.mergeIndex) != null ? _m : [], I = (_n2 = e.translations) != null ? _n2 : [], Q = (_o = e.autofocus) != null ? _o : false, f = (_p = e.focusOnSlash) != null ? _p : false, p = (_q = e.sort) != null ? _q : null;
      delete e.element, delete e.bundlePath, delete e.pageSize, delete e.resetStyles, delete e.showImages, delete e.showSubResults, delete e.excerptLength, delete e.processResult, delete e.processTerm, delete e.showEmptyFilters, delete e.openFilters, delete e.debounceTimeoutMs, delete e.mergeIndex, delete e.translations, delete e.autofocus, delete e.focusOnSlash, delete e.sort;
      let h = t instanceof HTMLElement ? t : document.querySelector(t);
      h ? this._pfs = new ks({ target: h, props: { base_path: s, page_size: a, reset_styles: i, show_images: r, show_sub_results: n, excerpt_length: c, process_result: C, process_term: u, show_empty_filters: A, open_filters: o, debounce_timeout_ms: d, merge_index: g, translations: I, autofocus: Q, focus_on_slash: f, sort: p, pagefind_options: e } }) : console.error(`Pagefind UI couldn't find the selector ${t}`);
    }
    triggerSearch(e) {
      this._pfs.$$set({ trigger_search_term: e });
    }
    triggerFilters(e) {
      let t = {};
      for (let [s, a] of Object.entries(e)) if (Array.isArray(a)) for (let i of a) t[`${s}:${i}`] = true;
      else t[`${s}:${a}`] = true;
      this._pfs.$$set({ selected_filters: t });
    }
    destroy() {
      this._pfs.$destroy();
    }
  };
  window.PagefindUI = Qt;
})();
