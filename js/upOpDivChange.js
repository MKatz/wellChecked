function removeBoldClassFromButtons () {
  $('#container-margin').find('.bold').removeClass('bold');
}

$('#btnClickWhat').click(function() {
  $('#change').html('What if...<br></br><ul><li>One pumper can cover three times the well sites</li><li>An issue not caught by automation exists</li><li>Intrusion on your site is not known for 12 hours</li><li>Your asset management team does not have to watch cameras 24 hours to see an event</li><li>You could use one device for communication for 8+ wells</li><li>The reduction of human capital is realistic</li></ul>');
  
  removeBoldClassFromButtons();
  
  $(this).addClass('bold')
});

$('#btnClickHow').click(function() {
  $('#change').html('The following are the critical aspects of changing the paradigm:<br></br><ul><li>Increase coverage of visual inspection</li><li>Timely accurate notification</li><li>HSE immediate response conditions</li></ul><br></br>WCSIs solutions are a key component in changing the paradigm, not withstanding your desire to save money in LOE.<br></br><a href="#">Learn how... click here for a demo.</a>');
  removeBoldClassFromButtons();
  $(this).addClass('bold');
});


$('#btnClickWhy').click(function() {
  $('#change').html('content');
  removeBoldClassFromButtons();
  $(this).addClass('bold');
});

$('#btnClickHome').click(function() {
  $('#change').html('"The last mile" in the energy field relates primarily to unmanned assets in the upstream and midstream energy industry. Production chain performance maximizes product recovery the the downstream consumers. The current unmanned asset paradigm creates a "distance" between producer and source production. <br></br>Exception Based Monitoring (EBM) is the component in the last mile that can change the paradigm and reduce LOE. The use of visual monitoring at events and at defined intervals gives producers the ability to trust and understand the well site is healthy.');
  removeBoldClassFromButtons();
  $(this).addClass('bold');
});