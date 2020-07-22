
$(function(){
  $('#visitor-mapping2').vectorMap({
    map: 'world_mill',
    backgroundColor:"#65A7CE"

  });
});

$(function(){
  $(".sortable1").sortable({
    cursor: "move",
    handle: ".box-header",
    connectWith:".sortable1",
    placeholder:"ui-state-placeholder",
    forcePlaceholderSize: true,
    containment:".containment"
  });
})

$(function(){
  $(".list-sort").sortable({
    cursor: "move",
    handle: ".handle",
    placeholder:"ui-state-placeholder"
  })
})

CKEDITOR.replace('text-tool')

$("#datepicker").datepicker();

$('#daterangepicker,#calendar-map').daterangepicker({
  ranges   : {
    'Today'       : [moment(), moment()],
    'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month'  : [moment().startOf('month'), moment().endOf('month')],
    'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  },
  startDate: moment().subtract(29, 'days'),
  endDate  : moment()
}, function (start, end) {
  window.alert('You chose: ' + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
});

$(function() {
    // ------------------------------------------------------- //
    // Multi Level dropdowns
    // ------------------------------------------------------ //
    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
      event.preventDefault();
      event.stopPropagation();

      $(this).siblings().toggleClass("show");


      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
      });

    });
  });



