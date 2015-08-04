$(document).ready(function(){
  
  $('#toggleUpstream').hide();
  $('#toggleMidstream').hide();
  $('#toggleDownstream').hide();

  // function removeBoldClassFromButtons () {
  //   $('.container-bold').find('.bold').removeClass('bold');
  // }

  $('.clickUpstream').click(function() {
    $('#toggleUpstream').slideToggle('slow');
    $('#toggleMidstream').hide();
    $('#toggleDownstream').hide();
    // removeBoldClassFromButtons();
    // $(this).addClass('bold');
    return false;
  });

  $('.clickMidstream').click(function() {
    $('#toggleUpstream').hide();
    $('#toggleMidstream').slideToggle('slow');
    $('#toggleDownstream').hide();
    // removeBoldClassFromButtons();
    // $(this).addClass('bold');
    return false;
  });

  $('.clickDownstream').click(function() {
    $('#toggleUpstream').hide();
    $('#toggleMidstream').hide();
    $('#toggleDownstream').slideToggle('slow');
    // removeBoldClassFromButtons();
    // $(this).addClass('bold');
    return false;
  });

});