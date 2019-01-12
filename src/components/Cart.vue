<template>
    <div>
        <p>{{name}}</p>
        <table border="1">
            <tr>
                <th>#</th>
                <th>课程名</th>
                <th>单价</th>
                <th>数量</th>
                <th>价格</th>
            </tr>
            <tr v-for="(c,i) in cart" :key="c.id" :class="{active:c.active}">
                <td>
                    <input type="checkbox" v-model="c.active">
                </td>
                <td>{{c.text}}</td>
                <td>￥{{c.price}}</td>
                <td>
                    <button @click="minus(i)">-</button>
                    {{c.count}}
                    <button @click="add(i)">+</button>
                </td>
                <td>￥{{c.price*c.count}}</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2">{{activeCount}}/{{count}}</td>
                <td colspan="2">￥{{total}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name:'Cart',
        //props:['name','cart'],
        props:['name'],
        data() {
            return {
                cart: [],
            }
        },
        created() {
            //监听父组件添加商品的事件
            //this.$root.$on('addCart',good...;
            this.$bus.$on('addCart',good =>{
                const ret = this.cart.find(v=>v.id === good.id);
                if (ret) {
                    ret.count += 1;
                }else{
                    this.cart.push({
                    ...good,//...属性展开运算符,脱壳{}
                    count:1,
                    active:true
                    });
                }
            });
            
             this.cart =  JSON.parse(window.localStorage.getItem("cart"));
        },
        methods: {
            minus(i) {
                const count = this.cart[i].count;
                if(count > 1){
                    this.cart[i].count -= 1;
                }else{
                    this.remove(i);
                }
            },
            add(i){
                this.cart[i].count += 1;
            },
            remove(i){
                if(window.confirm('确定删除吗？')){
                    /**
                     * splice方法用于删除原数组的一部分成员，
                     * 并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。
                     * splice的第一个参数是删除的起始位置（从0开始），第二个参数是被删除的元素个数。
                     */
                    this.cart.splice(i,1);
                }
            }
        },
        computed: {
            activeCount() {
                // filter方法用于过滤数组成员，满足条件的成员组成一个新数组返回。
                // 它的参数是一个函数，所有数组成员依次执行该函数，
                // 返回结果为true的成员组成一个新数组返回。该方法不会改变原数组。
                return this.cart.filter(v=>v.active).length;
            },
            count(){
                return this.cart.length;
            },
            total(){
                let num = 0;
                this.cart.forEach(c => {
                    if (c.active) {                        
                        num += c.price * c.count;
                    }
                });
                return num;               
            }
        },
        //数据监视
        watch:{
            //监视复杂数据类型，无法监视的原因是因为复杂数据类型，监视的是对象的地址，而对象的地址没有改变，改变的是对象中属性的值，简单数据类型值改变了地址就改变了
            /*stus:function(){
                console.log('不能监视成功！');
            }*/

            //深度监视：object||array
            /* eslint-disable */
            cart:{
                deep:true,//深度
                handler:function(){
                    window.localStorage.setItem("cart",JSON.stringify(this.cart));
                }
            }
        }
    }
</script>

<style scoped>
    .active{
        color: green;
    }
</style>