Vue.createApp({
data(){
    return {
      result:'Hello World!!',
      name:'This Is Utkarsh!!',
      flag:false,
      arr:[1,2,3,4,5] 
    }},
    methods:{
       fullname(){
            return `${this.result} ${this.name}`
       }
    
}

}).mount('#root')

// Vue.createApp({
//   data(){
//     return {
//       name:"utkarsh"
//     }
//   }
// }).mount("#root1")