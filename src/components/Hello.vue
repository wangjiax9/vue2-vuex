<template>
  <div class="hello">
    <h1>hello hello hello</h1>
    <h2>{{title}}</h2>
    <h3>{{groups.name}}</h3>
    <button @click="ct()">改变标题</button>
    <button @click="changeTitle('hahahahah')">changTitle</button>
  </div>
</template>

<script>

import { mapState,mapActions } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
 computed:{ 
   ...mapState([
     'title',
     'groups'
     ]),
 },
 methods:{
   ...mapActions([
     'changeTitle'
   ]),
   ct () {
     console.log('I am ct')
     let title = 'honghong lielie'
     this.$store.dispatch('changeTitle',title)
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
