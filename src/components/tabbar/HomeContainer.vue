<template>
    <ul>
        <li>
            <img>
            <input type="button" value="+" @click="add">
<!--            <h1>{{ $store.state.count }}</h1>-->
            <input type="button" value="-" @click="del">
            <HelloWorld @func="show"></HelloWorld>
            <h1></h1>
        </li>
    </ul>
</template>

<script>
import HelloWorld from '../HelloWorld.vue'
    export default {
        name: "HomeContainer",
        data() {
            return {
                getLunbo: [],
                imgUrl: '',
                msgFormson:null
            }
        },
        created() {
            this.axios.get("api/getnewslist", {timeout: 1000}).then(
                res => {
                    console.log(res);
                    if (res.data.status === 0) {
                        this.getLunbo = res.data.message;
                        console.log(this.imgUrl);
                        this.getLunbo.concat()
                    } else {
                        console.log("error")
                    }
                }
            );

        },
        methods: {
            add() {
                this.$store.commit('increment')
                localStorage.setItem("count",this.$store.state.count)
                console.log(this.$store.state.count)

            },
            del(){
                this.$store.commit('jianshao')
            },
            show(data){
                this.msgFormson = data;
            }
        },
        components:{
            HelloWorld
        },
        watch:{
            msgFormson(newval,oldval){
                console.log(newval,oldval);
            }
        }
    }
</script>

<style scoped>
    p {
        height: 200px;
        transform: translateY(200px);
    }
</style>
