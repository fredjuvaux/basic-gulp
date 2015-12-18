<div class="<?php print $classes; ?> <?php print $block->module . '_' .$block->delta; ?>"<?php print $attributes; ?> data-bid="<?php print $block->bid ?>">
    <?php print render($title_prefix); ?>
    <?php if ($block->subject): ?>
      <h3 class="title"<?php print $title_attributes; ?>><?php print $block->subject ?></h3>
    <?php endif;?>
    <?php print render($title_suffix); ?>

    <div class="block-content"><?php print $content; ?></div>
</div> <!-- /block -->
