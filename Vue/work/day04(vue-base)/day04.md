### vue特征
    1. 声明式编程(编程思想)
    2. 响应式数据
    3. 数据双向绑定
    4. 数据驱动(编程思想)
### vue配置
    el:
        vue的挂载节点;可以写一个选择器字符串
    data:
        vue的数据对象;所有在data中注册过的属性都是响应式的
        data中只定义数据;不要定义函数;因为data中的数据都是要进行响应式的;
            函数是不需要响应式的;因为我们开发时;没有修改函数值这种情况!!!
        data中的数据都会转绑给 vm 实例对象!!!
    methods:
        vue存放方法的对象;一般用作事件的回调函数.
        一个方法如果被用作事件的回调; 那么下述的写法 不是函数的调用;而是代表传参
            <div @click="fn(123)"></div>
    mounted:
        vue什么周期中一个钩子(回调函数);在vue初始化的过程中会被自动调用
        生命周期钩子不要定义成箭头函数;一旦定义成箭头函数 this的指向会产生偏差
    computed: 计算属性
        计算属性 跟 {{}} 做对比; 计算属性可以写更为复杂的逻辑;
        计算属性 会跟随其响应式依赖 同步更新
        计算属性 是可以使用缓存的
        计算属性的get方法 会在vue初始化的时候被执行一次 在其响应式依赖被更新 再执行一次
        计算属性的set方法 会在计算属性的值得到直接修改时 被调用 而且set的参数就是修改完的那个值
        计算属性 vs 方法
            <input type="text" v-model="计算属性的名称" />
            <input type="text" v-model="方法的调用" />
            计算属性有缓存 ; 方法不可能有缓存
            计算属性 会跟随其响应式依赖 同步更新 ; 方法只要界面产生更新就会被调用
            (不希望看到界面上出现方法的调用 这是不符合开发规范的 会导致很多问题)

        使用方式:
            计算属性 跟 data中的数据一样;可以直接在模板中使用!!!
        语法:
            computed:{
                计算属性名称1:{
                    get:function(){},
                    set:function(val){}
                },
                计算属性名称2:{
                    get:function(){},
                    set:function(val){}
                }
            }
        语法糖:省略set函数
             computed:{
                 计算属性名称:function(){}  // 本质上是get函数
             }
### vue指令
    {{}}
        插值表达式;里面可以写单一的js表达式
    v-model
        一般给输入型元素进行使用;用来实现数据双向绑定
    v-text
        用来指定元素的textcontent
    v-html
        用来指定元素的innerHtml
    v-on:事件名
        简写形式: @事件名;用来给元素绑定事件的
        需要事件对象
            默认回调没有参数时;回调函数的第一个参数就是event
            如果回调有参数;我们需要显示的传递$event来代表event对象
    v-bind:标签属性(排除vue指令)
        简写形式: :标签属性;用来将标签属性交给vue管理;标签的属性值来至于vue
    v-show
        控制元素的显示与隐藏
    v-if
    v-else-if
    v-else
        控制元素该不该出现在文档上
    v-for
        控制一个元素的循环;
        v-for指令的值有别于其他指令;其他指令的值一般都是一个单一的js表达式;
        可以v-for指令的值:
            (item,index) in 数组     :key="index"
            (val,key,index) in 对象  :key="index"
    v-pre
        用来跳过vue编译的
    v-cloak
        用来避免闪屏的
    v-once
        用来进行一次性解析的

### vue的编码习惯
    所有的代码最好都出现在配置项内部!!!
