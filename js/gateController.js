$('.siteEntrance').click(function(){
  // $('#gate1Door1').slideToggle('slow');
  $('#gate1Door1').hide('slide',{direction: 'left'}, 1000);
  $('#gate1Door2').hide('slide',{direction: 'right'}, 1000);
  $('#gate2Door1').hide('slide',{direction: 'up'}, 3000);
  $('#gate3Door1').hide('slide',{direction: 'left'}, 4000);
  $('#gate3Door2').hide('slide',{direction: 'right'}, 4000);
  $('#gate1Screen').addClass('not-showing');
})
