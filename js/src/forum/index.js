/*
 * This file is part of zerosonesfun/composer-preview.
 *
 * Copyright (c) 2021 Rafael Horvat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import ComposerState from 'flarum/forum/states/ComposerState';
import ComposerBody from 'flarum/forum/components/ComposerBody';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';

app.initializers.add('zerosonesfun-composer-preview', () => {
	// For the `DiscussionComposer` add a property to the `ComposerState` used to
	// check if the preview is being whown or not. The will be accessible globally by
	// accessing `app.composer.showPreview`.
	extend(ComposerState.prototype, 'load', function (_, componentClass) {
    this.showPreview = false;
	});

	// Add an empty element to the `ComposerBody.headerItems`. This will be filled with content
	// once the preview is shown.
	extend(ComposerBody.prototype, 'headerItems', function (items) {
		items.add(
			'preview-discussion',
			<div
				className={`Composer-preview Post-body ${app.composer.showPreview ? '' : 'hidden'}`}
			></div>,
			50
		);
	});

	// Add a `jumpToPreview` method to the `DiscussionComposer`. Doing that implies
	// that the button for preview will be shown in the `controlItems` of the `TextEditor`.
	// This method will be the callback called when this button is clicked.
	DiscussionComposer.prototype.jumpToPreview = function (e) {
		// Prevent fof/upload to trigger the preview:
		if (!(e instanceof MouseEvent)) {
			return;
		}

		// Update the state
		this.composer.showPreview = !this.composer.showPreview;

		// If we need to show the preview...
		if (this.composer.showPreview) {
			// ... Set the content of the dedicated element using the `s9e.TextFormatter`
			s9e.TextFormatter.preview(
				this.composer.fields.content(),
				this.$('.Composer-preview')[0]
			);
		}
	};

	// To make that the preview container has the right size and position (including when the composer
	// is resized) we need to continually update it.
	extend(ComposerBody.prototype, 'oncreate', function () {
		this.composerPreviewInterval = setInterval(function () {
			if (app.composer.showPreview) {
				const $textarea = this.$('.TextEditor textarea');
				if ($textarea.offset()) {
					this.$('.Composer-preview').css({
						width: $textarea.width(),
						height: $textarea.height() + 10,
						top: $textarea.offset().top - $('.Composer').offset().top,
						left: $textarea.offset().left - $('.Composer').offset().left,
					});
				}
			}
		}, 100);
	});

  extend(ComposerBody.prototype, 'onremove', function () {
    clearInterval(this.composerPreviewInterval)
  })
});
