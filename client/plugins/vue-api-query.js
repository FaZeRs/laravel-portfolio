import { Model } from 'vue-api-query'

export default function (ctx, inject) {
  Model.$http = ctx.$axios
}
