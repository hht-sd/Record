# Vuex #
const store = new Vuex.Store({
    state:{
        count:0
        //state对象中定义变量，类似data;
    },
    mutations:{
        methodName(state,msg){
            state.count = msg;
        }
    }
})

使用：
this.$store.state.count;
赋值：
this.$store.commit(methodName,argument);

this.$store.commit('toShowLoginDialog', true);
this.$store.dispatch('toShowLoginDialog',false)
 

dispatch/commit主要区别是：

dispatch：含有异步操作，例如向后台提交数据，写法： this.$store.dispatch('mutations方法名',值)

commit：同步操作，写法：this.$store.commit('mutations方法名',值)



