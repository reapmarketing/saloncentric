jQuery( function($) {

	// unWrappers
/* 	$( '.productBlockContainer').unwrap(); */
	$( '.productContainer' ).unwrap();
	$( '.listing' ).unwrap();

	// Remove <br> from login page
	if( $('.page_headers').text("My Account") ){
		$('br').first().remove();
	}

});
