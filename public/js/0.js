(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/portfolio.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/portfolio.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'default',
  metaInfo: function metaInfo() {
    return {
      title: this.$t('portfolio')
    };
  },
  data: function data() {
    return {
      title: window.config.appName,
      projects: [{
        id: 1,
        name: 'Baltic Probiotics',
        categories: ['all', 'wordpress'],
        tech: ['Wordpress'],
        image: {
          thumb: __webpack_require__(/*! ../../img/baltic_probiotics_thumb.png */ "./resources/img/baltic_probiotics_thumb.png"),
          src: __webpack_require__(/*! ../../img/baltic_probiotics.png */ "./resources/img/baltic_probiotics.png")
        },
        link: 'https://balticprobiotics.lv'
      }, {
        id: 2,
        name: 'Nauris Linde',
        categories: ['all', 'laravel', 'open-source'],
        tech: ['Vue.js', 'Vuetify', 'Laravel'],
        image: {
          thumb: __webpack_require__(/*! ../../img/naurislinde_thumb.png */ "./resources/img/naurislinde_thumb.png"),
          src: __webpack_require__(/*! ../../img/naurislinde.png */ "./resources/img/naurislinde.png")
        },
        link: 'https://naurislinde.com'
      }, {
        id: 3,
        name: 'Laravel Boilerplate CMS',
        categories: ['all', 'laravel', 'open-source'],
        tech: ['Laravel', 'Bootstrap', 'MySQL'],
        image: {
          thumb: __webpack_require__(/*! ../../img/boilerplate_thumb.png */ "./resources/img/boilerplate_thumb.png"),
          src: __webpack_require__(/*! ../../img/boilerplate.png */ "./resources/img/boilerplate.png")
        },
        github: 'https://github.com/FaZeRs/Boilerplate'
      }, {
        id: 4,
        name: 'Kurzemes bizness',
        categories: ['all', 'wordpress'],
        tech: ['Wordpress'],
        image: {
          thumb: __webpack_require__(/*! ../../img/kurzemes_bizness_thumb.png */ "./resources/img/kurzemes_bizness_thumb.png"),
          src: __webpack_require__(/*! ../../img/kurzemes_bizness.png */ "./resources/img/kurzemes_bizness.png")
        },
        link: 'https://kurzemesbizness.lv/'
      }],
      currentCategory: 'all'
    };
  },
  computed: {
    filteredProjects: function filteredProjects() {
      var filter = this.currentCategory;
      return this.projects.filter(function (project) {
        return project.categories.indexOf(filter) !== -1;
      });
    }
  },
  methods: {
    filter: function filter(category) {
      this.currentCategory = category;
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/portfolio.vue?vue&type=template&id=e0736ba2&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/portfolio.vue?vue&type=template&id=e0736ba2& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
            { attrs: { "align-center": "" } },
            [
              _c(
                "v-flex",
                { staticClass: "text-xs-center", attrs: { xs12: "" } },
                [
                  _c("h2", { staticClass: "section-title mb-5" }, [
                    _vm._v(_vm._s(_vm.$t("my_work")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    { staticClass: "mb-2", attrs: { row: "", wrap: "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm12: "", "text-xs-center": "" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { small: "" },
                              on: {
                                click: function($event) {
                                  _vm.filter("all")
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("All")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { small: "" },
                              on: {
                                click: function($event) {
                                  _vm.filter("wordpress")
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("Wordpress")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { small: "" },
                              on: {
                                click: function($event) {
                                  _vm.filter("laravel")
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("Laravel")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { small: "" },
                              on: {
                                click: function($event) {
                                  _vm.filter("open-source")
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("Open source")))]
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
                    { attrs: { row: "", wrap: "" } },
                    _vm._l(_vm.filteredProjects, function(project, index) {
                      return _c(
                        "v-flex",
                        {
                          key: index,
                          class: [project.category],
                          attrs: { xs12: "", sm6: "", md4: "" }
                        },
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
                                        directives: [
                                          {
                                            name: "img",
                                            rawName: "v-img",
                                            value: { src: project.image.src },
                                            expression:
                                              "{src: project.image.src}"
                                          }
                                        ],
                                        attrs: {
                                          src: project.image.thumb,
                                          alt: project.name,
                                          "lazy-src": project.image.thumb,
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
                                          _c("div", [
                                            _c(
                                              "h3",
                                              { staticClass: "headline" },
                                              [_vm._v(_vm._s(project.name))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "grey--text" },
                                              _vm._l(project.tech, function(
                                                tech,
                                                index
                                              ) {
                                                return _c(
                                                  "span",
                                                  {
                                                    key: index,
                                                    staticClass:
                                                      "text-xs-center"
                                                  },
                                                  [
                                                    _c("v-chip", [
                                                      _vm._v(_vm._s(tech))
                                                    ])
                                                  ],
                                                  1
                                                )
                                              })
                                            )
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-actions",
                                        [
                                          _c("v-spacer"),
                                          _vm._v(" "),
                                          project.link
                                            ? _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    href: project.link,
                                                    target: "_blank",
                                                    icon: ""
                                                  }
                                                },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("open_in_browser")
                                                  ])
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          project.github
                                            ? _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    href: project.github,
                                                    target: "_blank",
                                                    icon: ""
                                                  }
                                                },
                                                [
                                                  _c("font-awesome-icon", {
                                                    attrs: {
                                                      icon: ["fab", "github"],
                                                      size: "lg"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            : _vm._e()
                                        ],
                                        1
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
                    })
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

/***/ "./resources/img/baltic_probiotics.png":
/*!*********************************************!*\
  !*** ./resources/img/baltic_probiotics.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/baltic_probiotics.png?a428ab0a3d46de5613d390ec7c7007d6";

/***/ }),

/***/ "./resources/img/baltic_probiotics_thumb.png":
/*!***************************************************!*\
  !*** ./resources/img/baltic_probiotics_thumb.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/baltic_probiotics_thumb.png?467ae436896db40344f953af7906e4f6";

/***/ }),

/***/ "./resources/img/boilerplate.png":
/*!***************************************!*\
  !*** ./resources/img/boilerplate.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/boilerplate.png?0b92fc9980fd0c7e3eb87b6fdb0d4c2e";

/***/ }),

/***/ "./resources/img/boilerplate_thumb.png":
/*!*********************************************!*\
  !*** ./resources/img/boilerplate_thumb.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/boilerplate_thumb.png?5560b841dfba227a54912dbad375d179";

/***/ }),

/***/ "./resources/img/kurzemes_bizness.png":
/*!********************************************!*\
  !*** ./resources/img/kurzemes_bizness.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/kurzemes_bizness.png?c2283ddeefc4369a73eec7c292bce6d8";

/***/ }),

/***/ "./resources/img/kurzemes_bizness_thumb.png":
/*!**************************************************!*\
  !*** ./resources/img/kurzemes_bizness_thumb.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/kurzemes_bizness_thumb.png?59df1d9435fa5265cc9a6fe3e570bdd6";

/***/ }),

/***/ "./resources/img/naurislinde.png":
/*!***************************************!*\
  !*** ./resources/img/naurislinde.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/naurislinde.png?1e5acaabce0f47b98a5829385874a251";

/***/ }),

/***/ "./resources/img/naurislinde_thumb.png":
/*!*********************************************!*\
  !*** ./resources/img/naurislinde_thumb.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/naurislinde_thumb.png?867e0d316ea82e4ed77d9836c187d0ff";

/***/ }),

/***/ "./resources/js/pages/portfolio.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/portfolio.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _portfolio_vue_vue_type_template_id_e0736ba2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.vue?vue&type=template&id=e0736ba2& */ "./resources/js/pages/portfolio.vue?vue&type=template&id=e0736ba2&");
/* harmony import */ var _portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio.vue?vue&type=script&lang=js& */ "./resources/js/pages/portfolio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _portfolio_vue_vue_type_template_id_e0736ba2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _portfolio_vue_vue_type_template_id_e0736ba2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/portfolio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/portfolio.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/portfolio.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./portfolio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/portfolio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/portfolio.vue?vue&type=template&id=e0736ba2&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/portfolio.vue?vue&type=template&id=e0736ba2& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_portfolio_vue_vue_type_template_id_e0736ba2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./portfolio.vue?vue&type=template&id=e0736ba2& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/portfolio.vue?vue&type=template&id=e0736ba2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_portfolio_vue_vue_type_template_id_e0736ba2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_portfolio_vue_vue_type_template_id_e0736ba2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);