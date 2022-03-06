//Aqui va el Grueso de la pagina que voy a cargar 

<template >
    <div  style="background-color:white;">
    <div class="container-fluid">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/BicycleLogo.jpg" class="d-block mx-auto " style="width:500px;">
                        <div class="carousel-caption">
                          
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/OptimizedImages/bicicletaVintage.jpg" class="d-block mx-auto " style="width:500px;" >
                        <div class="carousel-caption">
                            
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="btn btn-success">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="btn btn-success">Next</span>
                </button>
            </div>

        </div>
        
        <section style="width: 60vw; float: left;  padding-top: 4%;" class="container-fluid" >
                <H3><b>Productos:</b></H3> <br>
                    <div v-for="item in $store.state.productos" :key="item.id" class="container"> 
                        <div class="card row mx-auto" style="max-width: 60%;" >
                        <div v-if="item.image === 'bA'">
                            <img src="../assets/OptimizedImages/bicicletaAmarilla.jpg" class="card-img-top mx-auto" style="width:50%;">
                        </div>
                        <div v-else-if="item.image === 'bG'">
                            <img src="../assets/OptimizedImages/bicicletaGris.jpg" class="card-img-top mx-auto" style="width:50%;">
                        </div>
                          <div v-else-if="item.image === 'bAz'">
                            <img src="../assets/OptimizedImages/bicicletaAzul.jpg" class="card-img-top mx-auto" style="width:50%;">
                        </div>
                         <div v-else-if="item.image === 'bVin'">
                            <img src="../assets/OptimizedImages/bicicletaVintage.jpg" class="card-img-top mx-auto" style="width:50%;">
                        </div>
                        
                        <div class="card-body">
                            <h5 class="card-title"> Name :{{ item.name }}</h5>
                            <p class="card-text"><b>Price :</b>   {{item.price}} $ </p>
                             <button v-on:click="addItem(item)" class="btn btn-primary">Add</button>
                        </div>
                        </div><br>
                    </div>
                      

            
        </section>
        <aside style="background-color: #aca39c; float: right; padding: 4%; width: 30vw; margin-right: 2%; " class="container-fluid rounded">
                <h4>Tu Carrito <span>&#128373;&#127996;</span></h4>
                
                <ol   v-for="item in $store.state.Carrito" :key="item.id"> Name :{{ item.name }} Price : ( {{item.price}} $ ) ×  {{item.qty}}  <button v-on:click="removeItem(item)">-</button> </ol>
                <button class="btn-success btn" > Total {{total()}}  $ </button><br>
                <router-link to="/about" style="color:#2c2d3c;" >Checkout</router-link>
               
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
