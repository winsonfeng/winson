<template>
    <div class="hello" >
        <p>{{content1}}</p>
        <input type="text" @change="chan" v-model="content1">
    </div>
</template>

<script>
    export default {
        name: 'helloworld',
        data() {
            return{
                content1:"真牛逼aa"
            }
        },
        created() {
        },
        methods:{
            chan(){
                this.$emit('func', this.content1)
            }
        }
        // mounted() {
        //     this.axios.post("http://api.komavideo.com/news/list").then( aa => {
        //         this.content1=aa.data;
        //     })
        // }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import 'assets/css/index.scss';
</style>
