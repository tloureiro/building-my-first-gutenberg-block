wp.blocks.registerBlockType( 'my-prefix/basic-block-esnext', {
		title: 'Basic Block Esnext',
		category: 'common',

		edit() {
			return <p>Hello Block</p>;
		},
		save() {
			return <p>Hello Block</p>;
		},
} );
