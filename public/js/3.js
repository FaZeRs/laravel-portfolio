webpackJsonp([3],{

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(568);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a7d0805_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(48);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a7d0805_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a7d0805_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a7d0805", Component.options)
  } else {
    hotAPI.reload("data-v-1a7d0805", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 568:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  layout: 'default',
  data: function data() {
    return {
      appName: window.config.appName,
      myPhoto: __webpack_require__(574),
      jumbotronBg: __webpack_require__(176)
    };
  },
  metaInfo: function metaInfo() {
    return { title: this.$t('home') };
  }
});

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports = "/images/my-photo.png?971416618e922031cee4a0cc0d2d5fdc";

/***/ }),

/***/ 575:
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
            {
              attrs: {
                "align-center": "",
                "justify-space-around": "",
                row: "",
                wrap: ""
              }
            },
            [
              _c(
                "v-flex",
                { staticClass: "text-xs-center", attrs: { xs12: "", md4: "" } },
                [
                  _c(
                    "v-avatar",
                    { staticClass: "grey lighten-4", attrs: { size: "300px" } },
                    [
                      _c("img", {
                        attrs: { src: _vm.myPhoto, alt: "Nauris Linde" }
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { staticClass: "text-xs-center", attrs: { xs12: "", md6: "" } },
                [
                  _c("h2", { staticClass: "section-title" }, [
                    _vm._v(_vm._s(_vm.$t("about_me")))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "my-4 subheading text-xs-justify" }, [
                    _c("span", {
                      domProps: { innerHTML: _vm._s(_vm.$t("hello_i_am")) }
                    }),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "facebook-link",
                        attrs: {
                          href: "https://www.facebook.com/nauris.linde",
                          target: "_blank"
                        }
                      },
                      [_vm._v("Facebook")]
                    ),
                    _vm._v(",\n          "),
                    _c(
                      "a",
                      {
                        staticClass: "twitter-link",
                        attrs: {
                          href: "https://twitter.com/naurislinde",
                          target: "_blank"
                        }
                      },
                      [_vm._v("Twitter")]
                    ),
                    _vm._v(",\n          "),
                    _c(
                      "a",
                      {
                        staticClass: "linkedin-link",
                        attrs: {
                          href:
                            "https://www.linkedin.com/in/nauris-linde-4027aaaa",
                          target: "_blank"
                        }
                      },
                      [_vm._v("LinkedIn")]
                    ),
                    _vm._v(",\n          "),
                    _c(
                      "a",
                      {
                        staticClass: "github-link",
                        attrs: {
                          href: "https://github.com/FaZeRs",
                          target: "_blank"
                        }
                      },
                      [_vm._v("GitHub")]
                    ),
                    _vm._v(",\n          "),
                    _c(
                      "a",
                      {
                        staticClass: "upwork-link",
                        attrs: {
                          href:
                            "https://www.upwork.com/o/profiles/users/_~010151abb5cc799441/",
                          target: "_blank"
                        }
                      },
                      [_vm._v("UpWork")]
                    )
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
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1a7d0805", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});