// $('.grid').masonry({
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: 800
// });

// $('.grid').masonry({
//   // set itemSelector so .grid-sizer is not used in layout
//   itemSelector: '.grid-item',
//   // use element for option
//   columnWidth: '.grid-sizer',
//   percentPosition: true
// })

// docReady( function() {

//   var grid = document.querySelector('.grid');
//   var msnry = new Masonry( grid, {
//     columnWidth: 160
//   });

//   eventie.bind( grid, 'click', function( event ) {
//     // don't proceed if item was not clicked on
//     if ( !classie.has( event.target, 'grid-item' ) ) {
//       return;
//     }
//     // change size of item via class
//     classie.toggle( event.target, 'grid-item--gigante' );
//     // trigger layout
//     msnry.layout();
//   });

//   msnry.on( 'layoutComplete', function( laidOutItems ) {
//     console.log( 'Masonry layout complete with ' + laidOutItems.length + ' items' );
//   });
  
// });



$( function() {

  var $container = $('#container');

  $container.imagesLoaded( function() {
    $container.masonry({
      columnWidth: function( containerWidth ) {
        return containerWidth / 3
      }
    });
  });
  
});