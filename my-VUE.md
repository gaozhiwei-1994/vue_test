##-------------------------------VUE--------------------------------------------##

##   简介
1. Vue是什么?
  1). 一位华裔前Google工程师开发的前端js库
	2). 一个MVVM框架
	3). 核心概念
	  * 数据绑定
	  * 组件
  4). 借鉴angular的模板和数据绑定技术
  5). 借鉴react的组件化和虚拟DOM技术
  6). 体积下, 运行效率高, 编码简洁, PC/移动端开发都合适
  7). 它本身只关注UI, 可以轻松引入vue插件和其它第三库开发项目
  8). vue包含一系列的扩展插件:
    * vue-cli
    * vue-resource
    * vue-router
    * vuex
2. 学习Vue?
  1). Vue.js官网:
    http://cn.vuejs.org/
  2). 尤雨溪知乎主页
    https://www.zhihu.com/people/evanyou/answers
  3). vue的github主页
    https://github.com/vuejs
  4). 掘金专题:
    http://gold.xitu.io/tag/Vue.js
  5). 安装Chrome开发插件:
    Vue.js devtools
  6). 安装Webstorm提示插件:
    settings ==> plugin ==> browser repositories ==> 搜索vue.js ==>下载并重启
    
##   起步
1. 引入Vue.js
2. 创建Vue对象
    el : 指定根element(选择器)
    data : 初始化数据(页面可以访问)
3. 双向数据绑定 : v-model
4. 显示数据 : {{xxx}}
5. 理解vue的mvvm实现
 #   列表
  1. 在data中初始数组数据
  2. 在页面中遍历显示: v-for
  
 #   事件
 1. 绑定监听的指令:
     v-on:xxx="函数名或函数调用"
     @xxx="函数名或函数调用"
 2. 定义事件处理的函数:
   methods : {
     函数名 : function(){...  
   }
   
##   模板语法
1. 表达式 :
  语法: {{exp}} 或 {{{exp}}}
  功能: 向页面输出数据
  可以调用对象的方法
2. 强制数据绑定:
  完整写法:
    v-bind:xxx='yyy'  //yyy会作为表达式解析执行
  简洁写法:
    :xxx='yyy'
3. 事件监听:
  完整写法:
    v-on:keyup='xxx'
    v-on:keyup='xxx(参数)'
    v-on:keyup.enter='xxx'
  简洁写法:
    @keyup='xxx'
    @keyup.enter='xxx'
    
##   计算属性
1. 计算属性
    1. 在computed属性对象中定义计算属性的方法
    2. 在页面中使用{{方法名}}来显示计算的结果
2. 监视属性:
    1. 通过通过vm对象的$watch()或watch配置来监视指定的属性
    2. 当属性变化时, 回调函数自动调用, 在函数内部进行计算
3. 计算属性高级:
    1. 通过get/set方法实现对属性数据的显示和监视
    2. 计算属性存在缓存, 多次读取只执行一次
    
##   class 与 style 绑定
1. 动态绑定class
    :class="a" a是一个data属性
    :class="{ 'class-a': isA, 'class-b': isB }"   其中isA/isB是布尔型data属性
    :class="[classA, classB]" 其中classA/classB是字符串值
2. 动态绑定style
    :style="{ color: activeColor, fontSize: fontSize + 'px' }"  其中activeColor/fontSize是data属性

##   条件渲染
切换一个元素:
  v-if
  v-else
  v-show
切换多个元素
  <template v-if="ok">  //不能用v-show
注意:
  如果需要频繁切换 v-show 较好，如果在运行时条件不大可能改变 v-if 较好
  
##   列表渲染
1. 遍历显示数组 : v-for / index   （注意元素下标是否改变）
2. 遍历显示对象 : v-for / key

##   方法 与 事件 处理器
1. 绑定监听:
  v-on:xxx="fun"
  @xxx="fun"
  @xxx="fun(参数)"
  默认事件形参: event
  隐含属性对象: $event
2. 事件修饰符:
  .prevent : 阻止事件的默认行为 event.preventDefault()
  .stop : 停止事件冒泡 event.stopPropagation()
3. 按键修饰符
  .keycode : 操作的是某个keycode值的健
  .enter : 操作的是enter键
  
##   表单控件绑定
1. 使用v-model对表单项数据双向绑定
  text/textarea
  checkbox : 绑定boolean/string值
  radio
  select   （v-model="selectedCity" 和  value 对应）
2. 失去焦点才更新: .lazy
3. 自动去除两端空格: .trim

##   过渡 动画
fade-enter-active: 进入的过程, 指定进入的transition
fade-leave-active: 离开的过程, 指定离开的transition
fade-enter: 进入前的状态: 指定隐藏时的样式
fade-leave-to: 离开后的状态: 指定隐藏时的样式
本质上切换的是class属性
注意：缩放动画，需要是一个行内块元素，否则会影响效果

##   生命周期
vue对象的生命周期
1. 初始化显示
  * new vue()
  * beforeCreate()
  * created() : 在此启动异步任务(ajax请求, 定时器)
  * beforeCompiled()
  * compiled()
  * beforeMount()
  * mounted()
2. 更新
  * beforeUpdate()
  * updated()
3. 销毁vue实例: vm.$destory()
  * beforeDestory(): 在此做一些收尾的工作: 如清理定时器
  * destoryed()
  
##   内置 指令
  v:text : 更新元素的 textContent
  v-html : 更新元素的 innerHTML
  v-if : 如果为true, 当前标签才会输出到页面
  v-else: 如果为false, 当前标签才会输出到页面
  v-show : 通过控制display样式来控制显示/隐藏
  v-for : 遍历数组/对象
  v-on : 绑定事件监听, 一般简写为@
  v-bind : 强制绑定解析表达式, 可以省略v-bind
  v-model : 双向数据绑定
  ref : 为某个元素注册一个唯一标识, vue对象通过$refs属性访问这个元素对象
  v-cloak : 使用它防止闪现表达式, 与css配合: [v-cloak] { display: none }
  
##   自定义 指令
1. 注册全局指令
  Vue.directive('upper-text', function(el, binding){
    el.innerHTML = binding.value.toupperCase();
  })
2. 注册局部指令
  directives : {
    'lower-text' : {
        bind (el, binding) {
          el.innerHTML = binding.value.toLowerCase()
        }
    }
  }
3. 使用指令:
  v-my-directive='xxx'
  
4. 官网解释：
  el: 指令所绑定的元素，可以用来直接操作 DOM 。
  binding: 一个对象，包含以下属性：
  name: 指令名，不包括 v- 前缀。
  value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。
  oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。
            无论值是否改变都可用。
  expression: 绑定值的字符串形式。 例如 v-my-directive="1 + 1" ，
              expression 的值是 "1 + 1"。
  arg: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。
  modifiers: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar,
             修饰符对象 modifiers 的值是 { foo: true, bar: true }。
             
##   插件

