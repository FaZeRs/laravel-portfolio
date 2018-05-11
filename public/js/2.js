webpackJsonp([2],{

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_contact_vue__ = __webpack_require__(573);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57a813ce_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_contact_vue__ = __webpack_require__(598);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_contact_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57a813ce_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_contact_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57a813ce_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_contact_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\pages\\contact.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57a813ce", Component.options)
  } else {
    hotAPI.reload("data-v-57a813ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ContactForm__ = __webpack_require__(595);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {
      title: this.$t('contact')
    };
  },

  components: {
    ContactForm: __WEBPACK_IMPORTED_MODULE_0__components_ContactForm__["a" /* default */]
  },
  data: function data() {
    return {
      title: window.config.appName
    };
  }
});

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_recaptcha__ = __webpack_require__(596);
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  $_veeValidate: {
    validator: 'new'
  },
  components: {
    VueRecaptcha: __WEBPACK_IMPORTED_MODULE_1_vue_recaptcha__["a" /* default */]
  },
  data: function data() {
    return {
      name: '',
      email: '',
      message: '',
      successful: false,
      sitekey: window.config.googleReCaptcha
    };
  },
  mounted: function mounted() {
    this.$validator.localize(this.$i18n.locale, this.dictionary);
  },
  created: function created() {
    this.$validator.localize('lv', {
      messages: {
        email: function email(field) {
          return 'Laukam ' + field + ' j\u0101b\u016Bt der\u012Bgai e-pasta adresei.';
        },
        required: function required(field) {
          return 'Lauks ' + field + ' ir oblig\u0101ts.';
        }
      },
      attributes: {
        email: 'e-pasts',
        name: 'vārds',
        message: 'vēstule'
      }
    });

    this.$validator.localize(this.$i18n.locale);
  },

  methods: {
    submit: function submit() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.$refs.recaptcha.execute();
        }
      });
    },

    onCaptchaVerified: function onCaptchaVerified(recaptchaToken) {
      var _this2 = this;

      this.$refs.recaptcha.reset();
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/contact/send', {
        name: this.name,
        email: this.email,
        message: this.message
      }).then(function () {
        _this2.successful = true;
      });

      this.name = '';
      this.email = '';
      this.message = '';
      this.successful = false;
      this.$validator.reset();
    },
    clear: function clear() {
      this.name = '';
      this.email = '';
      this.message = '';
      this.$validator.reset();
      this.$refs.recaptcha.reset();
    },

    onCaptchaExpired: function onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    }
  }
});

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_ContactForm_vue__ = __webpack_require__(574);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_998d9d46_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ContactForm_vue__ = __webpack_require__(597);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_ContactForm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_998d9d46_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ContactForm_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_998d9d46_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ContactForm_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\ContactForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-998d9d46", Component.options)
  } else {
    hotAPI.reload("data-v-998d9d46", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var defer = function defer() {
  var state = false; // Resolved or not
  var callbacks = [];
  var resolve = function resolve(val) {
    if (state) {
      return;
    }

    state = true;
    for (var i = 0, len = callbacks.length; i < len; i++) {
      callbacks[i](val);
    }
  };

  var then = function then(cb) {
    if (!state) {
      callbacks.push(cb);
      return;
    }
    cb();
  };

  var deferred = {
    resolved: function resolved() {
      return state;
    },

    resolve: resolve,
    promise: {
      then: then
    }
  };
  return deferred;
};

function createRecaptcha() {
  var deferred = defer();

  return {
    notify: function notify() {
      deferred.resolve();
    },
    wait: function wait() {
      return deferred.promise;
    },
    render: function render(ele, options, cb) {
      this.wait().then(function () {
        cb(window.grecaptcha.render(ele, options));
      });
    },
    reset: function reset(widgetId) {
      if (typeof widgetId === 'undefined') {
        return;
      }

      this.assertLoaded();
      this.wait().then(function () {
        return window.grecaptcha.reset(widgetId);
      });
    },
    execute: function execute(widgetId) {
      if (typeof widgetId === 'undefined') {
        return;
      }

      this.assertLoaded();
      this.wait().then(function () {
        return window.grecaptcha.execute(widgetId);
      });
    },
    checkRecaptchaLoad: function checkRecaptchaLoad() {
      if (window.hasOwnProperty('grecaptcha') && window.grecaptcha.hasOwnProperty('render')) {
        this.notify();
      }
    },
    assertLoaded: function assertLoaded() {
      if (!deferred.resolved()) {
        throw new Error('ReCAPTCHA has not been loaded');
      }
    }
  };
}

var recaptcha = createRecaptcha();

if (typeof window !== 'undefined') {
  window.vueRecaptchaApiLoaded = recaptcha.notify;
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var VueRecaptcha = {
  name: 'VueRecaptcha',
  props: {
    sitekey: {
      type: String,
      required: true
    },
    theme: {
      type: String
    },
    badge: {
      type: String
    },
    type: {
      type: String
    },
    size: {
      type: String
    },
    tabindex: {
      type: String
    }
  },
  mounted: function mounted() {
    var _this = this;

    recaptcha.checkRecaptchaLoad();
    var opts = _extends({}, this.$props, {
      callback: this.emitVerify,
      'expired-callback': this.emitExpired
    });
    var container = this.$slots.default ? this.$el.children[0] : this.$el;
    recaptcha.render(container, opts, function (id) {
      _this.$widgetId = id;
      _this.$emit('render', id);
    });
  },

  methods: {
    reset: function reset() {
      recaptcha.reset(this.$widgetId);
    },
    execute: function execute() {
      recaptcha.execute(this.$widgetId);
    },
    emitVerify: function emitVerify(response) {
      this.$emit('verify', response);
    },
    emitExpired: function emitExpired() {
      this.$emit('expired');
    }
  },
  render: function render(h) {
    return h('div', {}, this.$slots.default);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (VueRecaptcha);


/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-form",
    [
      _c(
        "v-alert",
        {
          attrs: {
            dismissible: "",
            outline: "",
            transition: "scale-transition",
            type: "success"
          },
          model: {
            value: _vm.successful,
            callback: function($$v) {
              _vm.successful = $$v
            },
            expression: "successful"
          }
        },
        [_vm._v("\n    " + _vm._s(_vm.$t("contact_success")) + "\n  ")]
      ),
      _vm._v(" "),
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "", sm6: "" } },
            [
              _c("v-text-field", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                attrs: {
                  label: _vm.$t("name"),
                  "error-messages": _vm.errors.collect("name"),
                  "data-vv-name": "name",
                  required: ""
                },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "", sm6: "" } },
            [
              _c("v-text-field", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required|email",
                    expression: "'required|email'"
                  }
                ],
                attrs: {
                  label: _vm.$t("email"),
                  "error-messages": _vm.errors.collect("email"),
                  "data-vv-name": "email",
                  required: ""
                },
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c("v-text-field", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                attrs: {
                  label: _vm.$t("message"),
                  "error-messages": _vm.errors.collect("message"),
                  "data-vv-name": "message",
                  "multi-line": ""
                },
                model: {
                  value: _vm.message,
                  callback: function($$v) {
                    _vm.message = $$v
                  },
                  expression: "message"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("vue-recaptcha", {
            ref: "recaptcha",
            attrs: { sitekey: _vm.sitekey, size: "invisible" },
            on: { verify: _vm.onCaptchaVerified, expired: _vm.onCaptchaExpired }
          }),
          _vm._v(" "),
          _c("v-btn", { on: { click: _vm.submit } }, [
            _vm._v(_vm._s(_vm.$t("send_message")))
          ]),
          _vm._v(" "),
          _c("v-btn", { on: { click: _vm.clear } }, [
            _vm._v(_vm._s(_vm.$t("clear")))
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-998d9d46", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 598:
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
                    _vm._v(_vm._s(_vm.$t("get_in_touch")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    {
                      staticClass: "text-xs-left",
                      attrs: { row: "", wrap: "", "justify-space-around": "" }
                    },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", md6: "" } },
                        [_c("contact-form")],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-flex", { attrs: { xs12: "", md4: "" } }, [
                        _c("div", { staticClass: "contact-block" }, [
                          _c("h4", { staticClass: "headline" }, [
                            _vm._v(_vm._s(_vm.$t("contact_information")))
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "flex pb-6" }, [
                            _c(
                              "div",
                              { staticClass: "con-text" },
                              [
                                _c("v-icon", [_vm._v("email")]),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: "mailto:naurislinde@gmail.com"
                                    }
                                  },
                                  [_vm._v("naurislinde@gmail.com")]
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "social mt-4" }, [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: "https://www.facebook.com/nauris.linde",
                                  target: "_blank"
                                }
                              },
                              [
                                _c(
                                  "font-awesome-layers",
                                  { staticClass: "fa-4x" },
                                  [
                                    _c("font-awesome-icon", {
                                      staticStyle: { color: "#3b5998" },
                                      attrs: { icon: "circle" }
                                    }),
                                    _vm._v(" "),
                                    _c("font-awesome-icon", {
                                      staticStyle: { color: "white" },
                                      attrs: {
                                        icon: ["fab", "facebook-f"],
                                        transform: "shrink-6"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: "https://twitter.com/naurislinde",
                                  target: "_blank"
                                }
                              },
                              [
                                _c(
                                  "font-awesome-layers",
                                  { staticClass: "fa-4x" },
                                  [
                                    _c("font-awesome-icon", {
                                      staticStyle: { color: "#55acee" },
                                      attrs: { icon: "circle" }
                                    }),
                                    _vm._v(" "),
                                    _c("font-awesome-icon", {
                                      staticStyle: { color: "white" },
                                      attrs: {
                                        icon: ["fab", "twitter"],
                                        transform: "shrink-6"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://www.linkedin.com/in/nauris-linde-4027aaaa",
                                  target: "_blank"
                                }
                              },
                              [
                                _c(
                                  "font-awesome-layers",
                                  { staticClass: "fa-4x" },
                                  [
                                    _c("font-awesome-icon", {
                                      staticStyle: { color: "#1985bc" },
                                      attrs: { icon: "circle" }
                                    }),
                                    _vm._v(" "),
                                    _c("font-awesome-icon", {
                                      staticStyle: { color: "white" },
                                      attrs: {
                                        icon: ["fab", "linkedin-in"],
                                        transform: "shrink-6"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: "https://github.com/FaZeRs",
                                  target: "_blank"
                                }
                              },
                              [
                                _c(
                                  "font-awesome-layers",
                                  { staticClass: "fa-4x" },
                                  [
                                    _c("font-awesome-icon", {
                                      staticStyle: { color: "#222222" },
                                      attrs: { icon: "circle" }
                                    }),
                                    _vm._v(" "),
                                    _c("font-awesome-icon", {
                                      staticStyle: { color: "white" },
                                      attrs: {
                                        icon: ["fab", "github"],
                                        transform: "shrink-6"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
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
    require("vue-hot-reload-api")      .rerender("data-v-57a813ce", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});