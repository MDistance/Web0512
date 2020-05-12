### 核心概念
    容器 & 项目
    主轴 & 侧轴
### flex 容器上的属性
    flex-direction : 控制了主轴是哪一根;控制侧轴是哪一根;控制主轴的方向
        row : 主轴是x轴 方向是正方向 侧轴是y轴
        row-reverse: 主轴是x轴 方向是反方向 侧轴是y轴
        column: 主轴是y轴 方向是正方向 侧轴是x轴
        column-reverse: 主轴是y轴 方向是反方向 侧轴是x轴
    flex-wrap : 控制了侧轴的方向
        no-wrap 侧轴不产生堆砌  侧轴的方向是正方向
        wrap    侧轴产生堆砌  侧轴的方向是正方向
        wrap-reverse  侧轴产生堆砌 侧轴的方向是反方向
    flex-flow : 前面两个属性的简写形式


    justify-content : 分配主轴的富余空间               
    align-items     : 分配侧轴的富余空间的(以item为单位 优先级比较低 可是一直会启作用)
    align-content   : 分配侧轴的富余空间的(以content为单位 优先级比较高 可是只在侧轴产生堆砌的时候才起作用)
