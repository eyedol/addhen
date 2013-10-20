<?php defined('SYSPATH') OR die('No direct script access.');
/**
 * Wrapper for configuration files.
 *
 *
 * @package    Config
 * @author     Henry Addo
 * @copyright  (c) 2013 Henry Addo
 * @license    https://github.com/eyedol/addhen/blob/master/LICENSE
 */
class Config {

	public $config;

	public function __construct($directory = 'config')
	{
		try
		{
			$this->config = $this->init_config(trim($directory, DIRECTORY_SEPARATOR));
		}
		catch(Exception $e)
		{
			echo sprintf("File Not Found Exception: %s", $e->getMessage());
		}
	}

	private function init_config($config_info)
	{
		if (file_exists($config_info))
		{
			return parse_ini_file($config_info, TRUE);
		}
		else
		{
			throw new Exception("Please create a config.ini file by copying the content of config.template.ini");
		}
	}

}