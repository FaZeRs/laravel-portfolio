(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContactForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-recaptcha */ "./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  $_veeValidate: {
    validator: 'new'
  },
  components: {
    VueRecaptcha: vue_recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"]
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
          return "Laukam ".concat(field, " j\u0101b\u016Bt der\u012Bgai e-pasta adresei.");
        },
        required: function required(field) {
          return "Lauks ".concat(field, " ir oblig\u0101ts.");
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

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/contact/send', {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/contact.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/contact.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/components/ContactForm */ "./resources/js/components/ContactForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: this.$t('contact')
    };
  },
  components: {
    ContactForm: _components_ContactForm__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      title: window.config.appName
    };
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactForm.vue?vue&type=template&id=76db242e&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContactForm.vue?vue&type=template&id=76db242e& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/contact.vue?vue&type=template&id=c886f672&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/contact.vue?vue&type=template&id=c886f672& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (VueRecaptcha);


/***/ }),

/***/ "./resources/js/components/ContactForm.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ContactForm.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactForm_vue_vue_type_template_id_76db242e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactForm.vue?vue&type=template&id=76db242e& */ "./resources/js/components/ContactForm.vue?vue&type=template&id=76db242e&");
/* harmony import */ var _ContactForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactForm.vue?vue&type=script&lang=js& */ "./resources/js/components/ContactForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _var_www_html_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _var_www_html_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_var_www_html_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactForm_vue_vue_type_template_id_76db242e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactForm_vue_vue_type_template_id_76db242e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */








_var_www_html_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VFlex"],VForm: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VForm"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VLayout"],VTextField: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VTextField"],VTextarea: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VTextarea"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ContactForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ContactForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ContactForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ContactForm.vue?vue&type=template&id=76db242e&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ContactForm.vue?vue&type=template&id=76db242e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_template_id_76db242e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactForm.vue?vue&type=template&id=76db242e& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactForm.vue?vue&type=template&id=76db242e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_template_id_76db242e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_template_id_76db242e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/contact.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/contact.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_vue_vue_type_template_id_c886f672___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.vue?vue&type=template&id=c886f672& */ "./resources/js/pages/contact.vue?vue&type=template&id=c886f672&");
/* harmony import */ var _contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.vue?vue&type=script&lang=js& */ "./resources/js/pages/contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _var_www_html_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _var_www_html_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_var_www_html_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _contact_vue_vue_type_template_id_c886f672___WEBPACK_IMPORTED_MODULE_0__["render"],
  _contact_vue_vue_type_template_id_c886f672___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */







_var_www_html_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VCard"],VContainer: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VContainer"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VFlex"],VHover: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VHover"],VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VIcon"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VLayout"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/contact.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/contact.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/contact.vue?vue&type=template&id=c886f672&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/contact.vue?vue&type=template&id=c886f672& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_c886f672___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./contact.vue?vue&type=template&id=c886f672& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/contact.vue?vue&type=template&id=c886f672&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_c886f672___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_c886f672___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);