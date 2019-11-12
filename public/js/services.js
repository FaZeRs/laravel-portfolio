(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/services.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/services.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  metaInfo: function metaInfo() {
    return {
      title: this.$t('services')
    };
  },
  data: function data() {
    return {
      webDevelopment: __webpack_require__(/*! ../../img/web-development.png */ "./resources/img/web-development.png"),
      seoOptimization: __webpack_require__(/*! ../../img/seo-optimization.png */ "./resources/img/seo-optimization.png"),
      serverManagement: __webpack_require__(/*! ../../img/server-management.png */ "./resources/img/server-management.png"),
      workProcess1: __webpack_require__(/*! ../../img/Work-Process_1.png */ "./resources/img/Work-Process_1.png"),
      workProcess2: __webpack_require__(/*! ../../img/Work-Process_2.png */ "./resources/img/Work-Process_2.png"),
      workProcess3: __webpack_require__(/*! ../../img/Work-Process_3.png */ "./resources/img/Work-Process_3.png"),
      workProcess4: __webpack_require__(/*! ../../img/Work-Process_4.png */ "./resources/img/Work-Process_4.png"),
      arrowLeft: __webpack_require__(/*! ../../img/arrow-left.png */ "./resources/img/arrow-left.png")
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/services.vue?vue&type=template&id=ae6b3072&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/services.vue?vue&type=template&id=ae6b3072& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
            [
              _c(
                "v-flex",
                { staticClass: "text-center", attrs: { xs12: "" } },
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
                                    {
                                      staticClass: "pa-3",
                                      class: "elevation-" + (hover ? 12 : 2)
                                    },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src: _vm.webDevelopment,
                                          alt: _vm.$t("web_development"),
                                          "lazy-src": _vm.webDevelopment,
                                          height: "75",
                                          "aspect-ratio": "1",
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
                                    {
                                      staticClass: "pa-3",
                                      class: "elevation-" + (hover ? 12 : 2)
                                    },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src: _vm.seoOptimization,
                                          alt: _vm.$t("seo_optimization"),
                                          "lazy-src": _vm.seoOptimization,
                                          height: "75",
                                          "aspect-ratio": "1",
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
                                    {
                                      staticClass: "pa-3",
                                      class: "elevation-" + (hover ? 12 : 2)
                                    },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src: _vm.serverManagement,
                                          alt: _vm.$t("server_management"),
                                          "lazy-src": _vm.serverManagement,
                                          height: "75",
                                          "aspect-ratio": "1",
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
                { staticClass: "text-center", attrs: { xs12: "" } },
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

/***/ "./resources/img/Work-Process_1.png":
/*!******************************************!*\
  !*** ./resources/img/Work-Process_1.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Work-Process_1.png?77c92a315ba7ab0a04f4ce4f9b80c303";

/***/ }),

/***/ "./resources/img/Work-Process_2.png":
/*!******************************************!*\
  !*** ./resources/img/Work-Process_2.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Work-Process_2.png?0a22659290dd3032bcfb2029ce5abc30";

/***/ }),

/***/ "./resources/img/Work-Process_3.png":
/*!******************************************!*\
  !*** ./resources/img/Work-Process_3.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Work-Process_3.png?466157fd99a1db0b90930c8eaf571f39";

/***/ }),

/***/ "./resources/img/Work-Process_4.png":
/*!******************************************!*\
  !*** ./resources/img/Work-Process_4.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Work-Process_4.png?791743ee58fafb4aba1a0e7588445997";

/***/ }),

/***/ "./resources/img/arrow-left.png":
/*!**************************************!*\
  !*** ./resources/img/arrow-left.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/arrow-left.png?b976d5f3688b34875e8dab13b39745ad";

/***/ }),

/***/ "./resources/img/seo-optimization.png":
/*!********************************************!*\
  !*** ./resources/img/seo-optimization.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/seo-optimization.png?b61fcd8793a9b822101ff626b0684fc4";

/***/ }),

/***/ "./resources/img/server-management.png":
/*!*********************************************!*\
  !*** ./resources/img/server-management.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/server-management.png?c6d88086947dcb76fe3579551c4cb6b9";

/***/ }),

/***/ "./resources/img/web-development.png":
/*!*******************************************!*\
  !*** ./resources/img/web-development.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/web-development.png?de8e94fba6ae85d7088c55151ae6dbf6";

/***/ }),

/***/ "./resources/js/pages/services.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/services.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_vue_vue_type_template_id_ae6b3072___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.vue?vue&type=template&id=ae6b3072& */ "./resources/js/pages/services.vue?vue&type=template&id=ae6b3072&");
/* harmony import */ var _services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services.vue?vue&type=script&lang=js& */ "./resources/js/pages/services.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VHover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VHover */ "./node_modules/vuetify/lib/components/VHover/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _services_vue_vue_type_template_id_ae6b3072___WEBPACK_IMPORTED_MODULE_0__["render"],
  _services_vue_vue_type_template_id_ae6b3072___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */








_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VFlex"],VHover: vuetify_lib_components_VHover__WEBPACK_IMPORTED_MODULE_6__["VHover"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_7__["VImg"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VLayout"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/services.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/services.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/services.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./services.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/services.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/services.vue?vue&type=template&id=ae6b3072&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/services.vue?vue&type=template&id=ae6b3072& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_template_id_ae6b3072___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./services.vue?vue&type=template&id=ae6b3072& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/services.vue?vue&type=template&id=ae6b3072&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_template_id_ae6b3072___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_template_id_ae6b3072___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);