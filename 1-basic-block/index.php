<?php

/**
 * Plugin Name: A Basic Block
 * Description: A very basic block based on https://github.com/WordPress/gutenberg-examples
 */

defined( 'ABSPATH' ) || exit;

function register_basic_block() {

	wp_register_script(
		'basic-block',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' )
	);

	register_block_type( 'my-prefix/basic-block', array(
		'editor_script' => 'basic-block',
	) );

}
add_action( 'init', 'register_basic_block' );
