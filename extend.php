<?php

namespace Nearata\ComposerPreview;

use Flarum\Extend;

return [
	(new Extend\Frontend('forum'))
		->js(__DIR__ . '/js/dist/forum.js')
		->css(__DIR__ . '/less/forum.less')
];
