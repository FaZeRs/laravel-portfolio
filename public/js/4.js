webpackJsonp([4],{

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_experience_vue__ = __webpack_require__(592);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4616ab72_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_experience_vue__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(51);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_experience_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4616ab72_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_experience_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4616ab72_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_experience_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/experience.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4616ab72", Component.options)
  } else {
    hotAPI.reload("data-v-4616ab72", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 592:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  layout: 'default',
  metaInfo: function metaInfo() {
    return { title: this.$t('experience') };
  },

  data: function data() {
    return {
      sem: __webpack_require__(599)
    };
  }
});

/***/ }),

/***/ 599:
/***/ (function(module, exports) {

module.exports = "/images/sem.png?1de51b3c9b78f2d488cb4a1319c59fe2";

/***/ }),

/***/ 600:
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
            { attrs: { "align-center": "" } },
            [
              _c(
                "v-flex",
                { staticClass: "text-xs-center", attrs: { xs12: "" } },
                [
                  _c("h2", { staticClass: "section-title mb-5" }, [
                    _vm._v(_vm._s(_vm.$t("education")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    {
                      staticClass: "text-xs-left",
                      attrs: { row: "", wrap: "" }
                    },
                    [
                      _c("v-flex", { attrs: { xs12: "", sm6: "" } }, [
                        _c("div", { staticClass: "edu-block h-full" }, [
                          _c("div", { staticClass: "edu-session" }, [
                            _c("span", [_vm._v("2015 - 2017")])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "pl-5" }, [
                            _c("h4", { staticClass: "block-title title" }, [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.$t("rtu_education")) +
                                  "\n                "
                              )
                            ]),
                            _vm._v(" "),
                            _c("h5", { staticClass: "mb-4 mt-3 subheading" }, [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.$t("rtu_address")) +
                                  "\n                "
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("v-flex", { attrs: { xs12: "", sm6: "" } }, [
                        _c("div", { staticClass: "edu-block h-full" }, [
                          _c("div", { staticClass: "edu-session" }, [
                            _c("span", [_vm._v("2011 - 2015")])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "pl-5" }, [
                            _c("h4", { staticClass: "block-title title" }, [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.$t("lvt_education")) +
                                  "\n                "
                              )
                            ]),
                            _vm._v(" "),
                            _c("h5", { staticClass: "mb-4 mt-3 subheading" }, [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.$t("lvt_address")) +
                                  "\n                "
                              )
                            ])
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
          ),
          _vm._v(" "),
          _c(
            "v-layout",
            { staticClass: "mt-5 mb-5", attrs: { "align-center": "" } },
            [
              _c(
                "v-flex",
                { staticClass: "text-xs-center", attrs: { xs12: "" } },
                [
                  _c("h2", { staticClass: "section-title mb-5" }, [
                    _vm._v(_vm._s(_vm.$t("experience")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    {
                      staticClass: "text-xs-left",
                      attrs: { row: "", wrap: "" }
                    },
                    [
                      _c("v-flex", { attrs: { xs12: "", sm6: "" } }, [
                        _c("div", { staticClass: "work-exp-block" }, [
                          _c("div", { staticClass: "working-duration title" }, [
                            _vm._v(
                              "\n                2016-" +
                                _vm._s(_vm.$t("present")) +
                                "\n              "
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "work-exp-logo" }, [
                            _c("img", {
                              attrs: { src: _vm.sem, alt: "SIA Sem.lv" }
                            })
                          ]),
                          _vm._v(" "),
                          _c("h4", { staticClass: "headline mt-3" }, [
                            _vm._v(_vm._s(_vm.$t("sem_position")))
                          ]),
                          _vm._v(" "),
                          _c("h6", { staticClass: "color-text title mt-2" }, [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: "https://sem.lv/",
                                  target: "_blank"
                                }
                              },
                              [_vm._v("SIA Sem.lv")]
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

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4616ab72", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});