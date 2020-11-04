<?php
/**
* Plugin Name: Chocolate Rain
* Plugin URI: vassgergo.live
* Description: It creates a chocolate rain
* Version: 1.0
* Author: Csömör
* Author URI: https://profiles.wordpress.org/csomorelwood/
**/

function register_the_magic() {
  wp_register_style('hhh', plugins_url('assets/css/style.css',__FILE__ ));
  wp_enqueue_style('hhh');
  
}
add_action( 'init','register_the_magic');

function chocolare_rain_script() {
  wp_register_script('chocolare_rain_script', plugin_dir_url( __FILE__ ) . '/assets/js/chocolate_rain.js' );
  wp_enqueue_script( 'chocolare_rain_script');
}
add_action('init', 'chocolare_rain_script');

