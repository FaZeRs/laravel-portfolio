webpackJsonp([1],{

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_portfolio_vue__ = __webpack_require__(594);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54c5180a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_portfolio_vue__ = __webpack_require__(616);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_portfolio_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54c5180a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_portfolio_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54c5180a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_portfolio_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/portfolio.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54c5180a", Component.options)
  } else {
    hotAPI.reload("data-v-54c5180a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 594:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  layout: 'default',
  metaInfo: function metaInfo() {
    return { title: this.$t('portfolio') };
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
          thumb: __webpack_require__(610),
          src: __webpack_require__(611)
        },
        link: 'http://balticprobiotics.lv'
      }, {
        id: 2,
        name: 'Nauris Linde',
        categories: ['all', 'laravel', 'open-source'],
        tech: ['Vue.js', 'Vuetify', 'Laravel'],
        image: {
          thumb: __webpack_require__(612),
          src: __webpack_require__(613)
        },
        link: 'https://naurislinde.com'
      }, {
        id: 3,
        name: 'Laravel Boilerplate CMS',
        categories: ['all', 'laravel', 'open-source'],
        tech: ['Laravel', 'Bootstrap', 'MySQL'],
        image: {
          thumb: __webpack_require__(614),
          src: __webpack_require__(615)
        },
        github: 'https://github.com/FaZeRs/Boilerplate'
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

/***/ 610:
/***/ (function(module, exports) {

module.exports = "/images/baltic_probiotics_thumb.png?986ccbccacf24c4d88086374b2d44a87";

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports = "/images/baltic_probiotics.png?7c597e2f694d8cd91c2be9b747f36b87";

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = "/images/naurislinde_thumb.png?9d4e6d9b26a81671429482733ae16ed8";

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = "/images/naurislinde.png?2ee2b01d90ea55f20219699ecddcaf0e";

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = "/images/boilerplate_thumb.png?7b3597fed900de965ced51415df1c3b9";

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = "/images/boilerplate.png?76459720248bb6f1e8acb786aab380c3";

/***/ }),

/***/ 616:
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
                          attrs: { xs4: "" }
                        },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-media", {
                                directives: [
                                  {
                                    name: "img",
                                    rawName: "v-img",
                                    value: { src: project.image.src },
                                    expression: "{src: project.image.src}"
                                  }
                                ],
                                attrs: {
                                  src: project.image.thumb,
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
                                  _c("div", [
                                    _c("h3", { staticClass: "headline" }, [
                                      _vm._v(_vm._s(project.name))
                                    ]),
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
                                            staticClass: "text-xs-center"
                                          },
                                          [
                                            _c("v-chip", [_vm._v(_vm._s(tech))])
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

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-54c5180a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});