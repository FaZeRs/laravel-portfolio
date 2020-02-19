(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portfolio"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/portfolio.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/portfolio.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  computed: {
    listConfig: function listConfig() {
      var category = this.category;
      return {
        category: category
      };
    },
    categories: function categories() {
      return this.$store.getters['project/categories'];
    },
    projects: function projects() {
      return this.$store.getters['project/projects'];
    },
    locale: function locale() {
      return this.$store.getters['lang/locale'];
    }
  },
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
      this.$store.dispatch('project/fetchCategories');
    },
    fetchProjects: function fetchProjects() {
      this.$store.dispatch('project/fetchProjects', this.listConfig);
    },
    filter: function filter(category) {
      this.category = category;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/portfolio.vue?vue&type=template&id=e0736ba2&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/portfolio.vue?vue&type=template&id=e0736ba2& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
                { staticClass: "text-center", attrs: { xs12: "" } },
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
                        { attrs: { xs12: "", sm12: "", "text-center": "" } },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "ma-2",
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
                                staticClass: "ma-2",
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
                                        project.image
                                          ? _c("v-img", {
                                              directives: [
                                                {
                                                  name: "img",
                                                  rawName: "v-img",
                                                  value: { src: project.image },
                                                  expression:
                                                    "{src: project.image}"
                                                }
                                              ],
                                              attrs: {
                                                src: project.image,
                                                alt: project.title,
                                                "lazy-src": project.image,
                                                height: "200",
                                                contain: ""
                                              }
                                            })
                                          : _vm._e(),
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
                                                      staticClass: "text-center"
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
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VHover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VHover */ "./node_modules/vuetify/lib/components/VHover/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");





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













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__["VChip"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VFlex"],VHover: vuetify_lib_components_VHover__WEBPACK_IMPORTED_MODULE_8__["VHover"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_10__["VImg"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VLayout"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"]})


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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./portfolio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/portfolio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/portfolio.vue?vue&type=template&id=e0736ba2&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/portfolio.vue?vue&type=template&id=e0736ba2& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portfolio_vue_vue_type_template_id_e0736ba2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./portfolio.vue?vue&type=template&id=e0736ba2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/portfolio.vue?vue&type=template&id=e0736ba2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portfolio_vue_vue_type_template_id_e0736ba2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portfolio_vue_vue_type_template_id_e0736ba2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);