//Aqui va el Grueso de la pagina que voy a cargar 

<template >
    <div class="container-fluid " style="background-color: antiquewhite;">
        
        <section style="width: auto; float: left; max-width: 55vw; display: inline-block; " class="container-fluid" >
        
                <H3>Usuarios</H3> 
                <div style="display:flex">
                    <ol v-for="item in $store.state.productos" :key="item.id"> Name :{{ item.name }} Points : ( {{item.points}}  )  <button v-on:click="addItem(item)">+</button> </ol>
            
                </div>
                

            
        </section>
        <aside style="width: 40vw; float: right; margin-top: 0px;background-color: blue; display: block; " class="container-fluid">
                <h4>Render Users</h4>
                
                <ol   v-for="item in $store.state.Carrito" :key="item.id"> Name :{{ item.name }} Price : ( {{item.price}} $ ) ×  {{item.qty}}  <button v-on:click="removeItem(item)">-</button> </ol>

        </aside>
        
    </div>
</template>
<script>
export default {
    name : 'PaginaTienda' ,
     methods: {
    
    addItem(item) {

        let counter = 0

        if (this.$store.state.Carrito.length == 0) {

            this.$store.state.Carrito.push({name: item.name , price : item.price , qty : 1 })
            
        } else if (this.$store.state.Carrito.length > 0){
           
           this.$store.state.Carrito.forEach(element => {

                if(element.name === item.name){
                    
                    counter++

                }

                
                
            });
            if ( counter > 0) {

                     this.$store.state.Carrito.forEach(element => {

                if(element.name === item.name){
                    
                    element.qty++

                }

                
                
            });

            }else if( counter == 0) {
               this.$store.state.Carrito.push({name: item.name , price : item.price , qty : 1 })
            }
        }

        
      /*   if(this.$store.state.Carrito.length = 0){

            this.$store.state.Carrito.push({name: item.name , price : item.price , qty: 1})

        }else{
            this.$store.state.Carrito.forEach(element => {

                if(element.name === item.name){
                    element.qty++
                }else{
                    this.$store.state.Carrito.push({name: item.name , price : item.price , qty: 1})
                    
                }
                
            });

        }
 */
    //    this.$store.commit('addItem', item)   this.$store.state.Carrito.indexOf(item)
    },
    removeItem(item) {
        
        this.$store.state.Carrito.splice(this.$store.state.Carrito.indexOf(item), 1);
    },
    total(){
        let total = 0 ;

        this.$store.state.Carrito.forEach(element => {

            total += (element.price * element.qty)
            
        });

        return total
    }

  }
}

</script>
