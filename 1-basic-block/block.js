( function( blocks, element ) {

	blocks.registerBlockType( 'my-prefix/basic-block', {
		title: 'Basic Block',
		category: 'common',
		
		edit: function() {
			return element.createElement(
				'p',
				null,
				'Hello Block'
			);
		},
		save: function() {
			return element.createElement(
				'p',
				null,
				'Hello Block'
			);
		},
	} );
}(
	window.wp.blocks,
	window.wp.element
) );
