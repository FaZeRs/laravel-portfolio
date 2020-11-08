import { configure, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import Vue from 'vue'

export default ({app}) => {
  extend('required', required)
  extend('email', email)

  let i18n = app.i18n
  configure({
    defaultMessage: (field, values) => {
      values._field_ = i18n.t(`fields.${field}`);
      return i18n.t(`validation.${values._rule_}`, values);
    }
  });
}
