webpackJsonp([3],{

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue_vue_type_template_id_1a7d0805___ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_vue_vue_type_script_lang_js___ = __webpack_require__(613);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(52);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__index_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__index_vue_vue_type_template_id_1a7d0805___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__index_vue_vue_type_template_id_1a7d0805___["b" /* staticRenderFns */],
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
      api.createRecord('1a7d0805', component.options)
    } else {
      api.reload('1a7d0805', component.options)
    }
    module.hot.accept("./index.vue?vue&type=template&id=1a7d0805&", function () {
      api.rerender('1a7d0805', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/pages/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___ = __webpack_require__(614);
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ 614:
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
      myPhoto: __webpack_require__(627),
      jumbotronBg: __webpack_require__(191)
    };
  },
  metaInfo: function metaInfo() {
    return { title: this.$t('home') };
  }
});

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a7d0805___ = __webpack_require__(626);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a7d0805___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a7d0805___["b"]; });


/***/ }),

/***/ 626:
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



/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = "/images/my-photo.png?aef6aec949d3660bb8725f47b8c05048";

/***/ })

});