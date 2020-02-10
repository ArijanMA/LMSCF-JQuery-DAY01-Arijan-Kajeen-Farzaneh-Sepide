
$(document).ready(function() {

    var grocery = groceries.grocery;
    var divItem = '';
    //var item = value.name;
   
    $.each(grocery,function(i, item){
       
        divItem += '<div class="divGrocery">';
        divItem += '<img class="GroceryPic" src='+ item.image +' alt='+ item.name +'>';
        divItem += '<div class="divGroceryInfo">';
        divItem += '<p class="GroceryName">'+ item.name +'</p> ';
         console.log(item.status);
        if (item.status == "0") {
          divItem += '<p class="red">Not Avalable</p>';
       }else{
          divItem += '<p class="green">'+ item.status +'</p> ';
       }
        divItem += '</div>';
        divItem += '</div>';
    });
    $('#container').append(divItem);
  
});
