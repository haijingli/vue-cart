<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <span v-if="showMessage">{{message}}</span>
    
    <!-- <p>
      <input v-model="text" type="text" />
      <button @click="addGood">添加购物车</button>
    </p>

    <ul>
      <li v-for="good in goods" :key="good.id">
        <span>{{good.id}}、</span>
        <span>{{good.text}}</span>
        <span>￥{{good.price}}</span>
      </li>
    </ul> -->

    <ul>
      <li v-for="(good,index) in goods" :key="good.id">
        <span>{{good.id}}、</span>
        <span>{{good.text}}</span>
        <span>￥{{good.price}}</span>
        <button @click="addGoodtoCart(index)">添加购物车</button>
      </li>
    </ul>

    <!--将上面的购物车组件化,将商品添加到购物车组件中-->
    <!-- <cart :name="name" :cart="cart"></cart> -->

    <!-- 添加购物车的逻辑写到购物车组件中，此处不需要传递cart，cart将在购物车组件中定义 -->
    <cart :name="name"></cart>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Cart from './components/Cart.vue';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    HelloWorld,
    //cart:Cart,简写形式Cart
    Cart
  },
  data() {
    return {
      message: 'hello,vue',
      showMessage:false,
      // goods:[
      //   {id:1,text:'web全栈架构师',price:'1000'},
      //   {id:2,text:'python全栈架构师',price:'1000'}
      // ],
      goods:[],//数据从请求中axios获取
      text:'',
      name:'我的购物车',
      // cart:[]
    }
  },
  async created() {
    setTimeout(() => {
      this.showMessage = true;
    }, 1000);

    try {      
      
      //查询产品列表
       /* eslint-disable */ 
      const ret = await axios.get('/api/goods');
      console.log(ret);
      this.goods = ret.data.list;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    addGood() {
      this.goods.push({
        id:3,
        text:this.text,
        price:'1000'
      })
    },
    addGoodtoCart(i){
      //获取goods中索引为i的商品
      const good = this.goods[i];
      /**
       * 数组实例的find方法，用于找出第一个符合条件的数组成员。
       * 它的参数是一个回调函数，所有数组成员依次执行该回调函数，
       * 直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
       */
      // const ret = this.cart.find(v=>v.id === good.id);
      // if (ret) {
      //   ret.count += 1;
      // }else{
      //   this.cart.push({
      //     ...good,//...属性展开运算符
      //     count:1,
      //     active:true
      //   });
      // }

      //添加商品到购物车的逻辑，应该在购物车中实现，父组件只做事件派发，将上面的业务逻辑处理移动到购物车组件中
      //此处也可以用根Vue派发,此处用总线$bus方式是把事件派发独立出来
      //this.$root.$emit('addCart',good);
      this.$bus.$emit('addCart',good);
      
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
