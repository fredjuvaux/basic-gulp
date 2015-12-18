<div id="page" class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <?php include 'includes/site-header.tpl.php'; ?>
  <div id="main">
    <div class="container">
      <section id="content">
          <?php if ($breadcrumb || $title|| $messages || $tabs || $action_links): ?>
            <div id="content-header">
              <?php print $breadcrumb; ?>
              <?php if ($page['highlighted']): ?>
                <div id="highlighted"><?php print render($page['highlighted']) ?></div>
              <?php endif; ?>
              <?php print render($title_prefix); ?>
              <?php if ($title): ?>
                <h1 class="title"><?php print $title; ?></h1>
              <?php endif; ?>
              <?php print render($title_suffix); ?>
              <?php print $messages; ?>
              <?php print render($page['help']); ?>
              <?php if (render($tabs)): ?>
                <div class="tabs"><?php print render($tabs); ?></div>
              <?php endif; ?>
              <?php if ($action_links): ?>
                <ul class="action-links"><?php print render($action_links); ?></ul>
              <?php endif; ?>
            </div> <!-- /#content-header -->
          <?php endif; ?>
          <div id="content-area">
            <?php print render($page['content']) ?>
          </div>
          <?php print $feed_icons; ?>
      </section> <!-- /content-inner /content -->
      <?php if ($page['sidebar_first']): ?>
        <aside id="sidebar-first">
          <?php print render($page['sidebar_first']); ?>
        </aside>
      <?php endif; ?> <!-- /sidebar-first -->
      <?php if ($page['sidebar_second']): ?>
        <aside id="sidebar-second">
          <?php print render($page['sidebar_second']); ?>
        </aside>
      <?php endif; ?> <!-- /sidebar-second -->
    </div>
  </div> <!-- /main -->
  <?php include 'includes/site-footer.tpl.php'; ?>
</div> <!-- /page -->
