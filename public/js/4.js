(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'default',
  data: function data() {
    return {
      appName: window.config.appName,
      myPhoto: __webpack_require__(/*! ../../img/my-photo.png */ "./resources/img/my-photo.png"),
      jumbotronBg: __webpack_require__(/*! ../../img/jumbotron-bg.jpg */ "./resources/img/jumbotron-bg.jpg")
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: this.$t('home')
    };
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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

/***/ "./resources/img/my-photo.png":
/*!************************************!*\
  !*** ./resources/img/my-photo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/my-photo.png?aef6aec949d3660bb8725f47b8c05048";

/***/ }),

/***/ "./resources/js/pages/index.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0b5dcf8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0b5dcf8e& */ "./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _var_www_html_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _var_www_html_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_var_www_html_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0b5dcf8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0b5dcf8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





_var_www_html_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAvatar: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VAvatar"],VContainer: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VContainer"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VFlex"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VLayout"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0b5dcf8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0b5dcf8e& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0b5dcf8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0b5dcf8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);