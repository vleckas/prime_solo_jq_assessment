$(document).ready(function() {

// SETUP
  var $list = $('ul');                            
  var $newLine = $('#newLine'); 
  var $removeLine = $('#removeLine'); 
  var $changeColor = $('#changeColor');



// ITEM COUNTER
  function updateCount() {                       
    var items = $('li').length; 				
    $('#counter').html(items);                  
  }
  updateCount();                                 


// ADDING A NEW LIST ITEM
  $newLine.on('click', function(e) {       
    e.preventDefault();                         
    var text = $('li').html('Line #');           
    $list.append('<li>' + text + '</li>');                  
    updateCount();                             
  });

  $removeLine.on('click', function(e) {      
   	e.preventDefault();                                 
 	$list.remove();              
    updateCount();      
  });       

    $changeColor.on('click', function(e) {       
    e.preventDefault();                                                     
  });                 

});