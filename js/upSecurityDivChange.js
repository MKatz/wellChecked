// function removeBoldClassFromButtons () {
//   $('#container-margin').find('.bold').removeClass('bold');
// }

// $('#btnClickWhat').click(function() {
//   $('#change').html('WCSI provides conditioned monitoring when any or anything comes on your site. Planned or unplanned transporters, service groups, contractors, employees, cows (yes, anything).');
  
//   removeBoldClassFromButtons();
  
//   $(this).addClass('bold')
// });

// $('#btnClickHow').click(function() {
//   $('#change').html('Until a solution exists to provide "Eyes On" your remote unmanned assets, the bottom line is "You, as a producter, have no idea what is going on until you send someone out there!" The risk is high.<br></br><a href="#">WCSI has the solution that works... click here for a demo.</a>');
//   removeBoldClassFromButtons();
//   $(this).addClass('bold');
// });


// $('#btnClickWhy').click(function() {
//   $('#change').html('content');
//   removeBoldClassFromButtons();
//   $(this).addClass('bold');
// });

// $('#btnClickHome').click(function() {
//   $('#change').html('Safety and Security - The ability to protext individuals working at the site, secure a facility from harm, visual employee and contractors are condustion themselves per standards, notify appropriate parties when a event transpires.<br></br>Eric Sharpe of Energy Ink Magazines writes that property crime in North Dakota rose 19% from 2011 to 2012. He added, "part of the problem is oil companies are so busy they dont have the time or personnel to properly sevure their own property", and that the theft did not look to be stopping.<br></br>Additionally, the incidents of vandalism has increased significantly. A single incident of copper theft can result in tens of thousands of dollars in lost production and repair costs as can an incident of vandalism. The risks experienced on a producing field are tough enough without willful human attacks. Being able to sense movement on a site and alert operators to the intruders increases deterrence and will lead to convictions.');
//   removeBoldClassFromButtons();
//   $(this).addClass('bold');
// });


// $(document).ready(function() {
//   $('#clickWhat').click(function(){
//       $('#what').removeClass('hidden');
//   });
//   $('clickWhat').click(function(){
//       $('#what').parent().toggleClass('hidden'); return false;
//   });
// });

// $(document).ready(function(){
//     $("#clickWhy").click(function(){
//         $("#why").removeClass('hidden')
//     });
//     $('#clickWhy').click(function(){
//       $('#why').parent().toggleClass('hidden'); return false;
//     });
// });



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
