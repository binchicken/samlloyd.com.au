$(document).on('click', '.panel-heading span.clickable', function(e) {
  var $this = $(this);
  if (!$this.hasClass('panel-collapsed')) {
    $this.parents('.panel').find('.panel-body').slideUp();
    $this.addClass('panel-collapsed');
    $this.find('i').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
  } else {
    $this.parents('.panel').find('.panel-body').slideDown();
    $this.removeClass('panel-collapsed');
    $this.find('i').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');
  }
});
$(document).on('click', '.panel div.clickable', function(e) {
  var $this = $(this);
  if (!$this.hasClass('panel-collapsed')) {
    $this.parents('.panel').find('.panel-body').slideUp();
    $this.addClass('panel-collapsed');
    $this.find('i').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
  } else {
    $this.parents('.panel').find('.panel-body').slideDown();
    $this.removeClass('panel-collapsed');
    $this.find('i').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');
  }
});
$(document).ready(function() {
  $('.panel-heading span.clickable').click();
  $('.panel div.clickable').click();
});
