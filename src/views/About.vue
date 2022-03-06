<template>
  <div class="about">
    <h1>CHECKOUT </h1>
    <p>This is your checkout menu</p>

    <div id="response" style="border-radius: 50px; width: 500px; background-color: azure; " class="bordered mx-auto">
      <button v-on:click="printcheckout()" class="btn btn-warning">Import de Mi Carrito</button><br><br>
    </div>
    <button class="btn btn-primary" v-on:click="payment()">Pay {{total()}} $</button>
    </div>
</template>
<script>
export default {
    name : 'PaginaTienda' ,
     methods: {
       payment(){
         let assign
         assign ='<p class="btn btn-success p-5" >Payment successfull</p>'

         document.getElementById('response').innerHTML = assign;

         return console.log("payment done")
       },
        total(){
        let total = 0 ;

        this.$store.state.Carrito.forEach(element => {

            total += (element.price * element.qty)
            
        });

        return total
    },
      printcheckout(){
        let total ='' ;

        this.$store.state.Carrito.forEach(element => {

            total += `<div>
        <h3><b>Name : ${element.name}</b></h3>
        <p><i>Quantity : ${element.qty}</i></p>
        <b><p style="color: red;">Price : ${element.price}</p></b>
      </div>`
            
        });
        total += `<hr style="width:400px" class="mx-auto">  `
        document.getElementById('response').innerHTML = total;


        return console.log('OK')
      }

     }
     }
    
    </script>
