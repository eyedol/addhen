<?php defined('SYSPATH') or die('No direct script access.');
/**
 * Abstract controller class
 *
 * @package    Controller
 * @author     Henry Addo
 * @copyright  (c) 2013 Henry Addo
 * @license    https://github.com/eyedol/addhen/blob/master/LICENSE
 */

abstract class Controller {

	/**
	 * @var  View  page template
	 */
	public $template = 'template';

	/**
	 * @var  boolean  auto render template
	 */
	public $auto_render = TRUE;

	/**
	 * Automatically executed before the controller action. Can be used to set
	 * class properties, do authorization checks, and execute other custom code.
	 *
	 * @return  void
	 */
	public function before()
	{
		// Nothing by default
		if ($this->auto_render === TRUE)
		{
			// Load the template
			$this->template = View::factory($this->template);
		}
	}

	/**
	 * Automatically executed after the controller action. Can be used to apply
	 * transformation to the response, add extra output, and execute
	 * other custom code.
	 *
	 * @return  void
	 */
	public function after()
	{
		if ($this->auto_render === TRUE)
		{
			$this->template->render();
		}
	}
}