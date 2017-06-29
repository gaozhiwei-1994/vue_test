(function (window) {
  var MyPlugin = {}
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('myGlobalMethod()')
    }
    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        el.innerHTML = 'my-directive: '+binding.value
      }
    })
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (options) {
      console.log('Vue实例对象方法 $myMethod()')
    }
  }

  window.MyPlugin = MyPlugin
})(window)