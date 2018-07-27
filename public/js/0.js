webpackJsonp([0],{

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_vue_vue_type_template_id_fc7e570a___ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vue_vue_type_script_lang_js___ = __webpack_require__(606);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(51);





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
  var api = require("/var/www/node_modules/vue-hot-reload-api/dist/index.js")
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

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_script_lang_js___ = __webpack_require__(607);
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ 607:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  layout: 'default',
  metaInfo: function metaInfo() {
    return { title: this.$t('services') };
  },

  data: function data() {
    return {
      title: window.config.appName,
      webDevelopment: __webpack_require__(622),
      seoOptimization: __webpack_require__(623),
      serverManagement: __webpack_require__(624),
      workProcess1: __webpack_require__(625),
      workProcess2: __webpack_require__(626),
      workProcess3: __webpack_require__(627),
      workProcess4: __webpack_require__(628),
      arrowLeft: __webpack_require__(629)
    };
  }
});

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_template_id_fc7e570a___ = __webpack_require__(621);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_template_id_fc7e570a___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_template_id_fc7e570a___["b"]; });


/***/ }),

/***/ 621:
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
                          _c(
                            "v-card",
                            [
                              _c("v-card-media", {
                                attrs: {
                                  src: _vm.webDevelopment,
                                  height: "200px",
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
                                  _c("h3", { staticClass: "headline" }, [
                                    _vm._v(_vm._s(_vm.$t("web_development")))
                                  ])
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm4: "" } },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-media", {
                                attrs: {
                                  src: _vm.seoOptimization,
                                  height: "200px",
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
                                  _c("h3", { staticClass: "headline" }, [
                                    _vm._v(_vm._s(_vm.$t("seo_optimization")))
                                  ])
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm4: "" } },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-media", {
                                attrs: {
                                  src: _vm.serverManagement,
                                  height: "200px",
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
                                  _c("h3", { staticClass: "headline" }, [
                                    _vm._v(_vm._s(_vm.$t("server_management")))
                                  ])
                                ]
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
                      _c("v-flex", { attrs: { xs12: "", sm5: "" } }, [
                        _c("div", { staticClass: "work-process-icon mb-4" }, [
                          _c("img", {
                            attrs: {
                              src: _vm.workProcess1,
                              alt: _vm.$t("planing_and_research")
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "work-process-text" }, [
                          _c("h4", { staticClass: "block-title" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.$t("planing_and_research")) +
                                "\n              "
                            )
                          ])
                        ])
                      ]),
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
                      _c("v-flex", { attrs: { xs12: "", sm5: "" } }, [
                        _c("div", { staticClass: "work-process-icon mb-4" }, [
                          _c("img", {
                            attrs: {
                              src: _vm.workProcess2,
                              alt: _vm.$t("design_and_development")
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "work-process-text" }, [
                          _c("h4", { staticClass: "block-title" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.$t("design_and_development")) +
                                "\n              "
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("v-flex", { attrs: { xs12: "", sm5: "" } }, [
                        _c("div", { staticClass: "work-process-icon mb-4" }, [
                          _c("img", {
                            attrs: {
                              src: _vm.workProcess3,
                              alt: _vm.$t("testing_and_bug_fixing")
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "work-process-text" }, [
                          _c("h4", { staticClass: "block-title" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.$t("testing_and_bug_fixing")) +
                                "\n              "
                            )
                          ])
                        ])
                      ]),
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
                      _c("v-flex", { attrs: { xs12: "", sm5: "" } }, [
                        _c("div", { staticClass: "work-process-icon mb-4" }, [
                          _c("img", {
                            attrs: {
                              src: _vm.workProcess4,
                              alt: _vm.$t("project_launch_and_support")
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "work-process-text" }, [
                          _c("h4", { staticClass: "block-title" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.$t("project_launch_and_support")) +
                                "\n              "
                            )
                          ])
                        ])
                      ])
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

/***/ 622:
/***/ (function(module, exports) {

module.exports = "/images/web-development.png?a5546bdbe3c0708fd508eb77c8cc310c";

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "/images/seo-optimization.png?fde8803422d65f7f87adc294b423958a";

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = "/images/server-management.png?4e8262646486c4ffe47ec155c1f4136f";

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = "/images/Work-Process_1.png?9380b0abc12fec45c70a16d344f493c9";

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports = "/images/Work-Process_2.png?7bf4c4b35abea7073ac985e46dd8394a";

/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = "/images/Work-Process_3.png?835ea809a0a329a5d572d9e84d3d2cc1";

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports = "/images/Work-Process_4.png?6eb9df4c0e65390c0c475be8f59703c0";

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = "/images/arrow-left.png?3eea75503d5df0f42557018bf0072d9c";

/***/ })

});