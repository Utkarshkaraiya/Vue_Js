
Vue.createApp({
data(){
    return {
      result:'Hello World!!',
      name:'This Is Utkarsh!!',
      flag:false,
      message:'',
     
      arr:[1,2,3,4,5],
      fname:'<h1>Utkarsh Karaiya</h1>',
      age:20
    }},
    methods:{
      
       decrement(){
            this.age--;
       }

    
},computed:{
     fullname(){ console.log("full name called")
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