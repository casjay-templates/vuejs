(function () {
  'use strict';
  var e = {
      917: function (e, t, r) {
        var n = r(963),
          a = r(252);
        const o = { id: 'nav', class: 'nav d-flex justify-content-center mx-5' },
          s = (0, a._)('img', { src: 'logo.png', height: '64', width: '64', alt: 'Home' }, null, -1),
          l = (0, a.uE)(
            '<br><br><br><hr><div class="footer col-sm-12"><div class="footer-custom" align="center"><br> Copyright 1999 - 2023 <br><a href="https://casjay.pro" target="_blank" rel="noopener noreferrer">Casjays Developments</a> and <a href="https://malaks-us.github.io/jason" target="_blank" rel="noopener noreferrer">Jason M. Hempstead-Malak</a><br> Hosting by <a href="https://casjay.pro/hosting" target="_blank" rel="noopener noreferrer">Casjays Developments: Hosting</a><br> and powered by <a href="https://casjaysdev.pro" target="_blank" rel="noopener noreferrer">CasjaysDev.pro</a><br><br><a href="https://www.patreon.com/casjay" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/patreon-donate-orange.svg" border="0" alt="Casjays Patreon Page"></a><a href="https://www.paypal.me/casjaysdev" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Donate-PayPal-green.svg?casjay@yahoo.com" alt="Casjays Paypal Page"></a><br><br><a href="https://help.casjay.pro" target="_blank" rel="noopener noreferrer">CasjaysDev Support</a> | <a href="https://bugs.casjay.pro" target="_blank" rel="noopener noreferrer">CasjaysDev Bugs</a><br><a href="https://status.casjay.pro" target="_blank" rel="noopener noreferrer">System Status</a> | <a href="https://servers.casjay.pro" target="_blank" rel="noopener noreferrer">Service Status</a> | <a href="https://status.casjaysdev.pro" target="_blank" rel="noopener noreferrer">Complete Status</a><br><a href="https://casjaysdev.pro/domains.html" target="_blank" rel="noopener noreferrer">Casjays Developments Domains</a><br><br> Casjays Developments privacy policy can be found at<br><a href="https://casjaysdev.pro/policy/" target="_blank" rel="noopener noreferrer">https://casjaysdev.pro/policy</a><br><div class="text-center" style="color:royalblue;"><br> Made with 💜💜💜💜💜💜 by <br><a href="http://github.com/casjay" target="_blank" rel="noopener"> Jason M. Hempstead (Casjay)</a><br> This site is powered by an <a href="https://github.com/casjay-templates" target="_blank" rel="noopener noreferrer"> open source </a>theme </div><br></div><br><br></div><br><br><br><br>',
            9,
          );
        function i(e, t) {
          const r = (0, a.up)('router-link'),
            n = (0, a.up)('router-view');
          return (
            (0, a.wg)(),
            (0, a.iD)(
              a.HY,
              null,
              [
                (0, a._)('div', o, [
                  (0, a.Wm)(
                    r,
                    {
                      to: '/',
                      type: 'button',
                      style: { width: '100px', color: '#ffffff' },
                      class: 'm-2 text-left justify-content-between btn btn-outline-danger',
                    },
                    { default: (0, a.w5)(() => [s]), _: 1 },
                  ),
                ]),
                (0, a.Wm)(n),
                l,
              ],
              64,
            )
          );
        }
        var c = r(744);
        const u = {},
          p = (0, c.Z)(u, [['render', i]]);
        var f = p,
          h = r(201);
        const d = { class: 'home' };
        function g(e, t, r, n, o, s) {
          const l = (0, a.up)('Welcome');
          return (0, a.wg)(), (0, a.iD)('div', d, [(0, a.Wm)(l)]);
        }
        var b = r(655),
          m = r(124),
          v = r(577);
        const y = { key: 0 },
          w = { key: 1 },
          j = { class: 'row text-center' },
          _ = { class: 'col-md-6 offset-md-3' },
          k = { class: 'text-center' },
          D = { class: 'fs-4' },
          P = (0, a._)('br', null, null, -1),
          x = { class: 'fs-2' },
          S = (0, a._)('br', null, null, -1),
          C = (0, a._)('br', null, null, -1),
          H = (0, a._)('h1', null, 'Bio', -1),
          O = (0, a._)('br', null, null, -1),
          E = (0, a._)('br', null, null, -1),
          L = (0, a._)('h2', null, 'Email', -1),
          z = ['href'],
          W = (0, a._)('br', null, null, -1),
          Z = (0, a._)('br', null, null, -1),
          M = (0, a._)('div', { class: 'mb-5' }, null, -1);
        function N(e, t, r, n, o, s) {
          const l = (0, a.up)('spinner');
          return (
            (0, a.wg)(),
            (0, a.iD)(
              a.HY,
              null,
              [
                '' == e.setProfile || 1 == e.isLoading
                  ? ((0, a.wg)(), (0, a.iD)('div', y, [(0, a.Wm)(l)]))
                  : ((0, a.wg)(),
                    (0, a.iD)('div', w, [
                      (0, a._)('div', j, [
                        (0, a._)('div', _, [
                          (0, a._)('div', k, [(0, a._)('h1', null, (0, v.zw)(e.setProfile.name), 1), (0, a._)('p', D, (0, v.zw)(e.setProfile.tagLine), 1), P]),
                          (0, a._)('span', x, [
                            ((0, a.wg)(!0),
                            (0, a.iD)(
                              a.HY,
                              null,
                              (0, a.Ko)(e.setProfile.contents, (e) => ((0, a.wg)(), (0, a.iD)('span', { key: e }, (0, v.zw)(e), 1))),
                              128,
                            )),
                            S,
                            C,
                          ]),
                          H,
                          ((0, a.wg)(!0),
                          (0, a.iD)(
                            a.HY,
                            null,
                            (0, a.Ko)(e.setProfile.bio, (e) => ((0, a.wg)(), (0, a.iD)('div', { class: 'fs-3', key: e }, (0, v.zw)(e), 1))),
                            128,
                          )),
                          O,
                          E,
                          L,
                          ((0, a.wg)(!0),
                          (0, a.iD)(
                            a.HY,
                            null,
                            (0, a.Ko)(
                              e.setProfile.email,
                              (e) => (
                                (0, a.wg)(), (0, a.iD)('span', { class: 'fs-4', key: e }, [(0, a._)('a', { href: `mailto:${e}` }, (0, v.zw)(e), 9, z), W])
                              ),
                            ),
                            128,
                          )),
                          Z,
                        ]),
                      ]),
                    ])),
                M,
              ],
              64,
            )
          );
        }
        var T = r(154);
        const Y = { key: 0 },
          B = ['width', 'height', 'stroke'],
          A = (0, a.uE)(
            '<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g>',
            1,
          ),
          K = [A];
        function $(e, t, r, n, o, s) {
          return (
            (0, a.wg)(),
            (0, a.iD)(
              a.HY,
              null,
              [
                null == e.msg || 'false' == e.msg ? ((0, a.wg)(), (0, a.iD)('div', Y, [(0, a._)('h2', null, (0, v.zw)(e.msgSpinner), 1)])) : (0, a.kq)('', !0),
                ((0, a.wg)(),
                (0, a.iD)('svg', { viewBox: '0 0 38 38', xmlns: 'http://www.w3.org/2000/svg', width: e.width, height: e.height, stroke: e.color }, K, 8, B)),
              ],
              64,
            )
          );
        }
        var q = (0, a.aZ)({
          name: 'show-spinner',
          props: {
            msg: { type: String, default: 'false' },
            msgSpinner: { type: String, default: '' },
            loading: { type: Boolean },
            color: { type: String, default: '#000' },
            height: { type: Number, default: 96 },
            width: { type: Number, default: 96 },
          },
        });
        const F = (0, c.Z)(q, [['render', $]]);
        var J = F;
        const R = { NODE_ENV: 'production', BASE_URL: '/vuejs/' }.API_URL || './api/profile.json';
        let U = class extends m.w3 {};
        U = (0, b.gn)(
          [
            (0, m.Ei)({
              props: { msg: String, msgSpinner: { type: String } },
              components: { Spinner: J },
              computed: {},
              methods: {
                isLoading() {
                  this.isLoading = !0;
                },
              },
              data() {
                return { setProfile: [] };
              },
              mounted() {
                T.Z.get(R, { timeout: 5e3 })
                  .then((e) => {
                    if (((this.status = e.status), (this.setProfile = e.data), 200 !== this.status)) throw new Error('An error has occured');
                    this.setProfile || (this.isLoading = !0);
                  })
                  .catch((e) => e),
                  (this.isLoading = !1);
              },
            }),
          ],
          U,
        );
        var I = U;
        const V = (0, c.Z)(I, [['render', N]]);
        var G = V;
        let Q = class extends m.w3 {};
        Q = (0, b.gn)([(0, m.Ei)({ props: {}, components: { Welcome: G } })], Q);
        var X = Q;
        const ee = (0, c.Z)(X, [['render', g]]);
        var te = ee;
        const re = { class: 'container' },
          ne = (0, a.uE)(
            '<div class="jumbotron"><h1><i class="fa fa-frown-o red"></i><a href="https://www.google.com/search?q=server+error+404" target="_blank" rel="noopener noreferrer">404 Not Found</a></h1><br><p class="lead"> We apologize but we can&#39;t seem to be able to find what you&#39;re looking for!<br></p><div class="container"><div class="body-content"><img alt="error" src="https://raw.githubusercontent.com/casjay-templates/default-web-assets/main/icons/errors/404.gif"><br></div></div><a href="/" class="btn btn-secondary btn-outline-danger btn-lg btn-block">return to homepage </a></div>',
            1,
          ),
          ae = [ne];
        function oe(e, t, r, n, o, s) {
          return (0, a.wg)(), (0, a.iD)('div', re, ae);
        }
        class se extends m.w3 {}
        const le = (0, c.Z)(se, [['render', oe]]);
        var ie = le;
        const ce = [
            { component: te, path: '/', name: 'Home', meta: { title: 'Home' } },
            { component: ie, path: '/error/404' },
            { path: '/:catchAll(.*)', redirect: '/error/404' },
          ],
          ue = (0, h.p7)({ history: (0, h.PO)('/vuejs'), routes: ce });
        ue.afterEach((e) => {
          const t = '';
          document.title = `${t} ${e.meta.title}`;
        });
        var pe = ue,
          fe = r(907),
          he = (0, fe.MT)({ state: {}, mutations: {}, actions: {}, modules: {} });
        (0, n.ri)(f).use(he).use(pe).mount('#app');
      },
    },
    t = {};
  function r(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var o = (t[n] = { exports: {} });
    return e[n](o, o.exports, r), o.exports;
  }
  (r.m = e),
    (function () {
      var e = [];
      r.O = function (t, n, a, o) {
        if (!n) {
          var s = 1 / 0;
          for (u = 0; u < e.length; u++) {
            (n = e[u][0]), (a = e[u][1]), (o = e[u][2]);
            for (var l = !0, i = 0; i < n.length; i++)
              (!1 & o || s >= o) &&
              Object.keys(r.O).every(function (e) {
                return r.O[e](n[i]);
              })
                ? n.splice(i--, 1)
                : ((l = !1), o < s && (s = o));
            if (l) {
              e.splice(u--, 1);
              var c = a();
              void 0 !== c && (t = c);
            }
          }
          return t;
        }
        o = o || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
        e[u] = [n, a, o];
      };
    })(),
    (function () {
      r.d = function (e, t) {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      };
    })(),
    (function () {
      r.g = (function () {
        if ('object' === typeof globalThis) return globalThis;
        try {
          return this || new Function('return this')();
        } catch (e) {
          if ('object' === typeof window) return window;
        }
      })();
    })(),
    (function () {
      r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = { 143: 0 };
      r.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, n) {
          var a,
            o,
            s = n[0],
            l = n[1],
            i = n[2],
            c = 0;
          if (
            s.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in l) r.o(l, a) && (r.m[a] = l[a]);
            if (i) var u = i(r);
          }
          for (t && t(n); c < s.length; c++) (o = s[c]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return r.O(u);
        },
        n = (self['webpackChunkvuejs_template'] = self['webpackChunkvuejs_template'] || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var n = r.O(void 0, [998], function () {
    return r(917);
  });
  n = r.O(n);
})();
//# sourceMappingURL=app.2f6c62f2.js.map
