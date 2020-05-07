$(document).ready(function(){
  /*$('#green').click(function(){
    $('#text').css('color', 'green');
  });
  $('#red').click(function(){
    $('#text').css('color', 'red');
  });
  $('#blue').click(function(){
    $('#text').css('color', 'blue');
  });*/

  /*$('.color').click(function(){
    var color = $(this).attr('id');
    $('#text').css('color',color);
  });*/
  
/*On cible tous les éléments avec la classe color. Au clic, la fonction se déclenche:
Cette fonction cible tous les éléments avec l'ID text, et elle change leur css.
Ce css change la couleur par l'id de l'élément ciblé (par le clic).  */
  $('.color').click(function(){
    $('#text').css('color',this.id);
  });
});