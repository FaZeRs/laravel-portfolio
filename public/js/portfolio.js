(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portfolio"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/portfolio.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/portfolio.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/store/actions.type */ "./resources/js/store/actions.type.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      category: 0
    };
  },
  computed: _objectSpread({
    listConfig: function listConfig() {
      var category = this.category;
      return {
        category: category
      };
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['categories', 'projects', 'locale'])),
  watch: {
    category: function category() {
      this.fetchProjects();
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.fetchCategories();
    this.fetchProjects();
    this.$store.subscribe(function (mutation, state) {
      if (mutation.type === 'setLocale') {
        _this.fetchCategories();

        _this.fetchProjects();
      }
    });
  },
  methods: {
    fetchCategories: function fetchCategories() {
      this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_1__["FETCH_CATEGORIES"], {});
    },
    fetchProjects: function fetchProjects() {
      this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_1__["FETCH_PROJECTS"], this.listConfig);
    },
    filter: function filter(category) {
      this.category = category;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/portfolio.vue?vue&type=template&id=e0736ba2&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/portfolio.vue?vue&type=template&id=e0736ba2& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
                                  return _vm.filter(0)
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("All")))]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.categories, function(category) {
                            return _c(
                              "v-btn",
                              {
                                key: category.id,
                                attrs: { small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.filter(category.id)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(category.title) +
                                    "\n            "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    _vm._l(_vm.projects, function(project) {
                      return _c(
                        "v-flex",
                        {
                          key: project.id,
                          class: [project.category.title],
                          attrs: { xs12: "", sm6: "", md4: "" }
                        },
                        [
                          _c("v-hover", {
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var hover = ref.hover
                                    return _c(
                                      "v-card",
                                      {
                                        class: "elevation-" + (hover ? 12 : 2)
                                      },
                                      [
                                        _c("v-img", {
                                          directives: [
                                            {
                                              name: "img",
                                              rawName: "v-img",
                                              value: { src: project.image },
                                              expression: "{src: project.image}"
                                            }
                                          ],
                                          attrs: {
                                            src: project.image,
                                            alt: project.title,
                                            "lazy-src": project.image,
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
                                              "div",
                                              [
                                                _c(
                                                  "h3",
                                                  { staticClass: "headline" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(project.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm._l(project.tags, function(
                                                  tag
                                                ) {
                                                  return _c(
                                                    "span",
                                                    {
                                                      key: tag.id,
                                                      staticClass:
                                                        "text-xs-center"
                                                    },
                                                    [
                                                      _c(
                                                        "v-chip",
                                                        {
                                                          attrs: {
                                                            color: tag.color,
                                                            dark: ""
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(tag.title)
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                })
                                              ],
                                              2
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-actions",
                                          [
                                            _c("v-spacer"),
                                            _vm._v(" "),
                                            _vm._l(project.links, function(
                                              link
                                            ) {
                                              return _c(
                                                "v-btn",
                                                {
                                                  key: link.id,
                                                  attrs: {
                                                    href: link.url,
                                                    target: "_blank",
                                                    icon: ""
                                                  }
                                                },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v(_vm._s(link.icon))
                                                  ])
                                                ],
                                                1
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      ],
                                      1
                                    )
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        ],
                        1
                      )
                    }),
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
/* harmony import */ var _var_www_html_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _var_www_html_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_var_www_html_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");





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

/* vuetify-loader */













_var_www_html_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardActions: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VCardActions"],VCardTitle: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VChip: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VChip"],VContainer: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VContainer"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VFlex"],VHover: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VHover"],VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VIcon"],VImg: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VImg"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VLayout"],VSpacer: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VSpacer"]})


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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./portfolio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/portfolio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/portfolio.vue?vue&type=template&id=e0736ba2&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/portfolio.vue?vue&type=template&id=e0736ba2& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_portfolio_vue_vue_type_template_id_e0736ba2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./portfolio.vue?vue&type=template&id=e0736ba2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/portfolio.vue?vue&type=template&id=e0736ba2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_portfolio_vue_vue_type_template_id_e0736ba2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_portfolio_vue_vue_type_template_id_e0736ba2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);