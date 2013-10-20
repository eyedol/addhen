<?php defined('SYSPATH') OR die('No direct script access.');

if (is_file(APPPATH.'controller/controller'.EXT))
{
	// controller
	require APPPATH.'controller/controller'.EXT;
}

if (is_file(APPPATH.'view/view'.EXT))
{
	require APPPATH.'view/view'.EXT;
}

if (is_file(APPPATH.'config/config'.EXT))
{
	APPPATH.'config/config'.EXT;
}

date_default_timezone_set('UTC');

setlocale(LC_ALL, 'en_US.utf-8');

$config = new Config;

