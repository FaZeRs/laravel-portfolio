webpackJsonp([0],{

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_vue_vue_type_template_id_fc7e570a___ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vue_vue_type_script_lang_js___ = __webpack_require__(617);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(52);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__services_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__services_vue_vue_type_template_id_fc7e570a___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__services_vue_vue_type_template_id_fc7e570a___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/var/www/html/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('fc7e570a', component.options)
    } else {
      api.reload('fc7e570a', component.options)
    }
    module.hot.accept("./services.vue?vue&type=template&id=fc7e570a&", function () {
      api.rerender('fc7e570a', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/pages/services.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_script_lang_js___ = __webpack_require__(618);
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  layout: 'default',
  metaInfo: function metaInfo() {
    return { title: this.$t('services') };
  },

  data: function data() {
    return {
      title: window.config.appName,
      webDevelopment: __webpack_require__(633),
      seoOptimization: __webpack_require__(634),
      serverManagement: __webpack_require__(635),
      workProcess1: __webpack_require__(636),
      workProcess2: __webpack_require__(637),
      workProcess3: __webpack_require__(638),
      workProcess4: __webpack_require__(639),
      arrowLeft: __webpack_require__(640)
    };
  }
});

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_template_id_fc7e570a___ = __webpack_require__(632);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_template_id_fc7e570a___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_template_id_fc7e570a___["b"]; });


/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "v-container",
        { attrs: { "grid-list-md": "" } },
        [
          _c(
            "v-layout",
            [
              _c(
                "v-flex",
                { staticClass: "text-xs-center", attrs: { xs12: "" } },
                [
                  _c("h2", { staticClass: "section-title mb-5" }, [
                    _vm._v(_vm._s(_vm.$t("what_i_do")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    { attrs: { wrap: "", "justify-space-around": "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm4: "" } },
                        [
                          _c("v-hover", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var hover = ref.hover
                                  return _c(
                                    "v-card",
                                    { class: "elevation-" + (hover ? 12 : 2) },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src: _vm.webDevelopment,
                                          alt: _vm.$t("web_development"),
                                          "lazy-src": _vm.webDevelopment,
                                          height: "200",
                                          contain: ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-title",
                                        {
                                          staticClass: "justify-center",
                                          attrs: { "primary-title": "" }
                                        },
                                        [
                                          _c(
                                            "h3",
                                            { staticClass: "headline" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("web_development")
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                }
                              }
                            ])
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm4: "" } },
                        [
                          _c("v-hover", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var hover = ref.hover
                                  return _c(
                                    "v-card",
                                    { class: "elevation-" + (hover ? 12 : 2) },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src: _vm.seoOptimization,
                                          alt: _vm.$t("seo_optimization"),
                                          "lazy-src": _vm.seoOptimization,
                                          height: "200",
                                          contain: ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-title",
                                        {
                                          staticClass: "justify-center",
                                          attrs: { "primary-title": "" }
                                        },
                                        [
                                          _c(
                                            "h3",
                                            { staticClass: "headline" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("seo_optimization")
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                }
                              }
                            ])
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm4: "" } },
                        [
                          _c("v-hover", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var hover = ref.hover
                                  return _c(
                                    "v-card",
                                    { class: "elevation-" + (hover ? 12 : 2) },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src: _vm.serverManagement,
                                          alt: _vm.$t("server_management"),
                                          "lazy-src": _vm.serverManagement,
                                          height: "200",
                                          contain: ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-title",
                                        {
                                          staticClass: "justify-center",
                                          attrs: { "primary-title": "" }
                                        },
                                        [
                                          _c(
                                            "h3",
                                            { staticClass: "headline" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("server_management")
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-layout",
            { staticClass: "mt-5 mb-5 pa-5" },
            [
              _c(
                "v-flex",
                { staticClass: "text-xs-center", attrs: { xs12: "" } },
                [
                  _c("h2", { staticClass: "section-title mb-5" }, [
                    _vm._v(_vm._s(_vm.$t("how_i_work")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    {
                      attrs: {
                        row: "",
                        "fill-height": "",
                        "align-center": "",
                        wrap: ""
                      }
                    },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm5: "" } },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "elevation-0",
                              attrs: { color: "transparent" }
                            },
                            [
                              _c("v-img", {
                                attrs: {
                                  src: _vm.workProcess1,
                                  alt: _vm.$t("planing_and_research"),
                                  "lazy-src": _vm.workProcess1,
                                  height: "200",
                                  contain: ""
                                }
                              }),
                              _vm._v(" "),
                              _c("v-hover", {
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return _c(
                                        "div",
                                        {
                                          staticClass: "work-process-text mt-5",
                                          class: "elevation-" + (hover ? 12 : 1)
                                        },
                                        [
                                          _c(
                                            "h4",
                                            { staticClass: "block-title" },
                                            [
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "planing_and_research"
                                                    )
                                                  ) +
                                                  "\n                  "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    }
                                  }
                                ])
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        {
                          staticClass: "hidden-xs-only",
                          attrs: { xs12: "", sm2: "" }
                        },
                        [_c("img", { attrs: { src: _vm.arrowLeft, alt: "" } })]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm5: "" } },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "elevation-0",
                              attrs: { color: "transparent" }
                            },
                            [
                              _c("v-img", {
                                attrs: {
                                  src: _vm.workProcess2,
                                  alt: _vm.$t("design_and_development"),
                                  "lazy-src": _vm.workProcess2,
                                  height: "200",
                                  contain: ""
                                }
                              }),
                              _vm._v(" "),
                              _c("v-hover", {
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return _c(
                                        "div",
                                        {
                                          staticClass: "work-process-text mt-5",
                                          class: "elevation-" + (hover ? 12 : 1)
                                        },
                                        [
                                          _c(
                                            "h4",
                                            { staticClass: "block-title" },
                                            [
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "design_and_development"
                                                    )
                                                  ) +
                                                  "\n                  "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    }
                                  }
                                ])
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm5: "" } },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "elevation-0",
                              attrs: { color: "transparent" }
                            },
                            [
                              _c("v-img", {
                                attrs: {
                                  src: _vm.workProcess3,
                                  alt: _vm.$t("testing_and_bug_fixing"),
                                  "lazy-src": _vm.workProcess3,
                                  height: "200",
                                  contain: ""
                                }
                              }),
                              _vm._v(" "),
                              _c("v-hover", {
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return _c(
                                        "div",
                                        {
                                          staticClass: "work-process-text mt-5",
                                          class: "elevation-" + (hover ? 12 : 1)
                                        },
                                        [
                                          _c(
                                            "h4",
                                            { staticClass: "block-title" },
                                            [
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "testing_and_bug_fixing"
                                                    )
                                                  ) +
                                                  "\n                  "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    }
                                  }
                                ])
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        {
                          staticClass: "hidden-xs-only",
                          attrs: { xs12: "", sm2: "" }
                        },
                        [_c("img", { attrs: { src: _vm.arrowLeft, alt: "" } })]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm5: "" } },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "elevation-0",
                              attrs: { color: "transparent" }
                            },
                            [
                              _c("v-img", {
                                attrs: {
                                  src: _vm.workProcess4,
                                  alt: _vm.$t("project_launch_and_support"),
                                  "lazy-src": _vm.workProcess4,
                                  height: "200",
                                  contain: ""
                                }
                              }),
                              _vm._v(" "),
                              _c("v-hover", {
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return _c(
                                        "div",
                                        {
                                          staticClass: "work-process-text mt-5",
                                          class: "elevation-" + (hover ? 12 : 1)
                                        },
                                        [
                                          _c(
                                            "h4",
                                            { staticClass: "block-title" },
                                            [
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "project_launch_and_support"
                                                    )
                                                  ) +
                                                  "\n                  "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    }
                                  }
                                ])
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 633:
/***/ (function(module, exports) {

module.exports = "/images/web-development.png?78653efbf01901a2c6ba7d6a79711a10";

/***/ }),

/***/ 634:
/***/ (function(module, exports) {

module.exports = "/images/seo-optimization.png?1871e233b5dd84a644a144b1d406b31d";

/***/ }),

/***/ 635:
/***/ (function(module, exports) {

module.exports = "/images/server-management.png?e59cdf323e9eb2a1ab7df895aca22fab";

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

module.exports = "/images/Work-Process_1.png?77c92a315ba7ab0a04f4ce4f9b80c303";

/***/ }),

/***/ 637:
/***/ (function(module, exports) {

module.exports = "/images/Work-Process_2.png?0a22659290dd3032bcfb2029ce5abc30";

/***/ }),

/***/ 638:
/***/ (function(module, exports) {

module.exports = "/images/Work-Process_3.png?466157fd99a1db0b90930c8eaf571f39";

/***/ }),

/***/ 639:
/***/ (function(module, exports) {

module.exports = "/images/Work-Process_4.png?791743ee58fafb4aba1a0e7588445997";

/***/ }),

/***/ 640:
/***/ (function(module, exports) {

module.exports = "/images/arrow-left.png?b976d5f3688b34875e8dab13b39745ad";

/***/ })

});