webpackJsonp([2],{

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_vue_vue_type_template_id_60abb193___ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_vue_vue_type_script_lang_js___ = __webpack_require__(621);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(52);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__contact_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__contact_vue_vue_type_template_id_60abb193___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__contact_vue_vue_type_template_id_60abb193___["b" /* staticRenderFns */],
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
      api.createRecord('60abb193', component.options)
    } else {
      api.reload('60abb193', component.options)
    }
    module.hot.accept("./contact.vue?vue&type=template&id=60abb193&", function () {
      api.rerender('60abb193', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/pages/contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_script_lang_js___ = __webpack_require__(622);
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ContactForm__ = __webpack_require__(651);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_script_lang_js___ = __webpack_require__(624);
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_recaptcha__ = __webpack_require__(654);
//
//
//
//
//
//
//
//
//
//
//
//
//
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
          if (_this.$refs.recaptcha) {
            _this.$refs.recaptcha.execute();
          } else {
            _this.send();
          }
        }
      });
    },

    onCaptchaVerified: function onCaptchaVerified(recaptchaToken) {
      this.$refs.recaptcha.reset();
      this.send();
    },
    send: function send() {
      var _this2 = this;

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
      if (this.$refs.recaptcha) {
        this.$refs.recaptcha.reset();
      }
    },

    onCaptchaExpired: function onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    }
  }
});

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_60abb193___ = __webpack_require__(650);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_60abb193___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_60abb193___["b"]; });


/***/ }),

/***/ 650:
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
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", md4: "" } },
                        [
                          _c("v-hover", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var hover = ref.hover
                                  return _c(
                                    "v-card",
                                    { class: "elevation-" + (hover ? 12 : 1) },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "contact-block" },
                                        [
                                          _c(
                                            "h4",
                                            { staticClass: "headline" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("contact_information")
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "flex pb-6" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "con-text" },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("email")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "a",
                                                    {
                                                      attrs: {
                                                        href:
                                                          "mailto:naurislinde@gmail.com"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "naurislinde@gmail.com"
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "social mt-4" },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  attrs: {
                                                    href:
                                                      "https://www.facebook.com/nauris.linde",
                                                    target: "_blank"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "font-awesome-layers",
                                                    { staticClass: "fa-4x" },
                                                    [
                                                      _c("font-awesome-icon", {
                                                        staticStyle: {
                                                          color: "#3b5998"
                                                        },
                                                        attrs: {
                                                          icon: "circle"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("font-awesome-icon", {
                                                        staticStyle: {
                                                          color: "white"
                                                        },
                                                        attrs: {
                                                          icon: [
                                                            "fab",
                                                            "facebook-f"
                                                          ],
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
                                                      "https://twitter.com/naurislinde",
                                                    target: "_blank"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "font-awesome-layers",
                                                    { staticClass: "fa-4x" },
                                                    [
                                                      _c("font-awesome-icon", {
                                                        staticStyle: {
                                                          color: "#55acee"
                                                        },
                                                        attrs: {
                                                          icon: "circle"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("font-awesome-icon", {
                                                        staticStyle: {
                                                          color: "white"
                                                        },
                                                        attrs: {
                                                          icon: [
                                                            "fab",
                                                            "twitter"
                                                          ],
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
                                                        staticStyle: {
                                                          color: "#1985bc"
                                                        },
                                                        attrs: {
                                                          icon: "circle"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("font-awesome-icon", {
                                                        staticStyle: {
                                                          color: "white"
                                                        },
                                                        attrs: {
                                                          icon: [
                                                            "fab",
                                                            "linkedin-in"
                                                          ],
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
                                                      "https://github.com/FaZeRs",
                                                    target: "_blank"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "font-awesome-layers",
                                                    { staticClass: "fa-4x" },
                                                    [
                                                      _c("font-awesome-icon", {
                                                        staticStyle: {
                                                          color: "#222222"
                                                        },
                                                        attrs: {
                                                          icon: "circle"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("font-awesome-icon", {
                                                        staticStyle: {
                                                          color: "white"
                                                        },
                                                        attrs: {
                                                          icon: [
                                                            "fab",
                                                            "github"
                                                          ],
                                                          transform: "shrink-6"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ContactForm_vue_vue_type_template_id_667ae69d___ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContactForm_vue_vue_type_script_lang_js___ = __webpack_require__(623);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(52);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__ContactForm_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__ContactForm_vue_vue_type_template_id_667ae69d___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__ContactForm_vue_vue_type_template_id_667ae69d___["b" /* staticRenderFns */],
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
      api.createRecord('667ae69d', component.options)
    } else {
      api.reload('667ae69d', component.options)
    }
    module.hot.accept("./ContactForm.vue?vue&type=template&id=667ae69d&", function () {
      api.rerender('667ae69d', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/ContactForm.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_template_id_667ae69d___ = __webpack_require__(653);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_template_id_667ae69d___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_template_id_667ae69d___["b"]; });


/***/ }),

/***/ 653:
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
              _c("v-textarea", {
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
                  "data-vv-name": "message"
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
          _vm.sitekey
            ? _c("vue-recaptcha", {
                ref: "recaptcha",
                attrs: { sitekey: _vm.sitekey, size: "invisible" },
                on: {
                  verify: _vm.onCaptchaVerified,
                  expired: _vm.onCaptchaExpired
                }
              })
            : _vm._e(),
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



/***/ }),

/***/ 654:
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


/***/ })

});