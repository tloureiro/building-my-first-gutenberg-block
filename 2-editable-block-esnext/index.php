<?php

/**
 * Plugin Name: An Editable Block (Esnext)
 * Description: A simple editable block based on https://github.com/WordPress/gutenberg-examples
 */

defined( 'ABSPATH' ) || exit;

function register_editable_block() {

	wp_register_script(
		'editable-block-esnext',
		plugins_url( 'block.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' )
	);

	register_block_type( 'my-prefix/editable-block-esnext', array(
		'editor_script' => 'editable-block-esnext',
	) );

}
add_action( 'init', 'register_editable_block' );
