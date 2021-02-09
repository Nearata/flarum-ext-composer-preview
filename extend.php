<?php

/*
 * This file is part of glowingblue/composer-preview.
 *
 * Copyright (c) 2021 Rafael Horvat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace GlowingBlue\ComposerPreview;

use Flarum\Extend;

return [
	(new Extend\Frontend('forum'))
		->js(__DIR__ . '/js/dist/forum.js')
		->css(__DIR__ . '/resources/less/forum.less')
];
