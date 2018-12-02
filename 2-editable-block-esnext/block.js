const imageStyle = {
  width: '250px',
  height: '250px',
  'border-radius': '50%'
}

const textStyle = {
	'background-color': 'black',
	color: 'white',
	'font-family': '"Comic Sans MS", cursive, sans-serif',
	'font-size': '29px',
	'text-align': 'center',
  width: '250px'
}

wp.blocks.registerBlockType( 'my-prefix/editable-block-esnext', {
		title: 'Editable Block Esnext',
		category: 'common',

		attributes: {
			content: {
				source: 'html',
				selector: 'div',
			},
    },

		edit({ attributes, setAttributes }) {
			return (
				<wp.element.Fragment>

					<img style={ imageStyle } src="https://scontent-yyz1-1.cdninstagram.com/vp/2dbc2b4520c19cc4e2a1c7a004a28057/5C913A40/t51.2885-19/s320x320/43173294_293159084635194_1888323324199567360_n.jpg" />
					<wp.editor.RichText
						style={ textStyle }
						tagName="div"
						value={attributes.content}
						onChange={ ( content ) => setAttributes( { content } ) }
					/>

				</wp.element.Fragment>
			)
		},
		save({ attributes }) {
			return (
				<wp.element.Fragment>

					<img style={ imageStyle } src="https://scontent-yyz1-1.cdninstagram.com/vp/2dbc2b4520c19cc4e2a1c7a004a28057/5C913A40/t51.2885-19/s320x320/43173294_293159084635194_1888323324199567360_n.jpg" />
					<wp.editor.RichText.Content 
						style={ textStyle } 
						tagName="div" 
						value={ attributes.content } 
					/>

				</wp.element.Fragment>
			);
		},
} );
