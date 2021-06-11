import Vue from 'vue'
import { VueMaskDirective } from 'v-mask'

Vue.directive('mask', function (el, binding) {
  if (!binding.value) {
    return
  }

  VueMaskDirective.bind(el, binding)
})
