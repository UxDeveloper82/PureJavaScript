
document.querySelector('.btn').addEventListener('click', showDetails);

//Load Details
function showDetails(e){
    const xhr = new XMLHttpRequest();
    //open
    xhr.open('GET','products.json', true);
    xhr.onload = function(){
       if(this.status === 200){
           console.log(this.responseText);
           const product = JSON.parse(this.responseText);
           const output = `  <div class="modal-header">
           <button class="close" type="button" data-dismiss="modal" arial-label="close">
               <span aria-hidden="true">&times;</span>
           </button>
           <h4 class="modal-title text-center">${product.name}</h4>
       </div>
       <div class="modal-body">
           <div class="container-fluid">
                   <div class="row">
                       <div class="col-sm-6">
                           <div class="center-block">
                               <img class="details img-responsive" src="images/products/jeans.jpg" alt="Levis">
                           </div>                
                       </div>
                       <div class="col-sm-6">
                           <h4>Details</h4>
                           <p>${product.details}</p>
                           <hr> 
                           <p>Price : $34.99</p>
                           <p>Brand: Levis</p>
                           <form action="add_cart.php" method="post">
                                 <div class="form-group">
                                      <div class="form-group">
                                           <div class="col-xs-3">
                                               <label for="quantity">quantity:</label>
                                               <input type="text" class="form-control" id="quantity" name="quantity">
                                           </div>
                                           <p>Available: 3</p> 
                                      </div><br>
                                      <div class="form-group">
                                           <label for="size">Size:</label>
                                           <select name="size" id="size" class="form-control">
                                                 <option value=""></option>
                                                 <option value="28">28</option>
                                                 <option value="32">32</option>
                                                 <option value="36">36</option>
                                           </select>
                                      
                                      </div>
                                 </div>
                           </form>

                       </div>
                   </div>
               </div>
           </div>
           <div class="modal-footer">
               <button class="btn btn-default" data-dismiss="modal">close</button>
               <button class="btn btn-warning" type="submit"><span class="glyphicon glyphicon-shopping-cart"></span>Add to cart</button>
           </div>`;
       document.getElementById('products').innerHTML = output;  
       }
    }

   xhr.send(); 
   e.preventDefault();   

}

