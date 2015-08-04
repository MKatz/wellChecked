$(document).ready(function(){
  
  function removeBoldClassFromButtons () {
    $('.container-temp').find('.bold').removeClass('bold');
  }
  
  $('#clickWhat').click(function() {
    $('.toggleWhat').show();
    $('.toggleHow').hide();
    $('.toggleHome').hide();
    $('.toggleWhy').hide();
    removeBoldClassFromButtons();
    $(this).addClass('bold');
    return false;
  });
  
  $('#clickHow').click(function() {
    $('.toggleHow').show();
    $('.toggleHome').hide();
    $('.toggleWhy').hide();
    $('.toggleWhat').hide();
    removeBoldClassFromButtons();
    $(this).addClass('bold');
    return false;
  });
  
  $('#clickWhy').click(function() {
    $('.toggleWhy').show();
    $('.toggleWhat').hide();
    $('.toggleHow').hide();
    $('.toggleHome').hide();
    removeBoldClassFromButtons();
    $(this).addClass('bold');
    return false;
  });

  $('#clickHome').click(function() {
    $('.toggleHome').show();
    $('.toggleHow').hide();
    $('.toggleWhy').hide();
    $('.toggleWhat').hide();
    removeBoldClassFromButtons();
    return false;
  });
});