$(document).ready(function(){
  /*Avec les fonctions:
  $('#green').mouseover(function(){
    $('#text').css('color', 'green');
  });
  $('#red').mouseover(function(){
    $('#text').css('color', 'red');
  });
  $('#blue').mouseover(function(){
    $('#text').css('color', 'blue');
  });
  $('#blue, #red, #green').mouseout(function(){
    $('#text').css('color', 'black');
  });*/
  
  //Avec this:
  $('.color').mouseover(function(){
    $('#text').css('color',this.id);
  });
  $('#blue, #red, #green').mouseout(function(){
    $('#text').css('color', 'black');
  });
  
  /*Avec les conditions:
  $('div').mouseover(function(){
    if($(this).hasClass('green')){
      $('#text').css('color', 'red');
    }
    else if ($(this).hasClass('blue')){
      $('#text').css('color', 'blue');
    }
    else ($(this).hasClass('red')){
      $('#text').css('color', 'red');
    }
  });
  $('#blue, #red, #green').mouseout(function(){
    $('#text').css('color', 'black');
  });*/ 
});