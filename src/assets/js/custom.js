var sync1 = $(".slider");
var sync2 = $(".navigation-thumbs");

var thumbnailItemClass = '.owl-item';

var slides = sync1.owlCarousel({
	video:true,
  startPosition: 12,
  items:1,
  loop:true,
//   margin:10,
  autoplay:true,
  autoplayTimeout:6000,
  autoplayHoverPause:false,
  nav: true,
  dots: true
}).on('changed.owl.carousel', syncPosition);

function syncPosition(el) {
  $owl_slider = $(this).data('owl.carousel');
  var loop = $owl_slider.options.loop;

  if(loop){
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    if(current < 0) {
        current = count;
    }
    if(current > count) {
        current = 0;
    }
  }else{
    var current = el.item.index;
  }

  var owl_thumbnail = sync2.data('owl.carousel');
  var itemClass = "." + owl_thumbnail.options.itemClass;


  var thumbnailCurrentItem = sync2
  .find(itemClass)
  .removeClass("synced")
  .eq(current);

  thumbnailCurrentItem.addClass('synced');

  if (!thumbnailCurrentItem.hasClass('active')) {
    var duration = 300;
    sync2.trigger('to.owl.carousel',[current, duration, true]);
  }   
}
var thumbs = sync2.owlCarousel({
  startPosition: 12,
  items:4,
  loop:false,
  // margin:10,
  autoplay:false,
  nav: false,
  dots: false,
  onInitialized: function (e) {
    var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
    thumbnailCurrentItem.addClass('synced');
  },
})
.on('click', thumbnailItemClass, function(e) {
    e.preventDefault();
    var duration = 300;
    var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
    sync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
}).on("changed.owl.carousel", function (el) {
  var number = el.item.index;
  $owl_slider = sync1.data('owl.carousel');
  $owl_slider.to(number, 100, true);
});


// advertisement slider

$('.owl-carousel_advertisement').owlCarousel({
  loop:true,
  margin:10,
  items:1,
  dots: false,
  nav:true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  // navContainer: '.news_ad_display_container .custom-nav',
  // responsive:{
  //     0:{
  //         items:1
  //     },
  //     600:{
  //         items:1
  //     },
  //     1000:{
  //         items:1
  //     }
  // }
});


$('.owl-carousel_entertainment').owlCarousel({
  loop:true,
  margin:10,
  items:3,
  autoplay: true,
  autoplayTimeout : 5000,
  dots: true,
  nav: false,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  // navContainer: '.news_ad_display_container .custom-nav',
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      768:{
        items:2
      },
      1000:{
          items:2
      },
      1024:{
        items:2
      },
      1280:{
        items:3
      }

  }
});
// news list paging js starts
// $('#example').DataTable();

// $(document).ready(function() {
  // $('#example').DataTable({
  //   // "iDisplayLength": 50
  // });
  // $('#example').on( 'page.dt', function () {
  //   $('html, body').animate({
  //       // scrollTop: 0
  //       scrollTop: $('.news_display_wrapper_left_container').offset().top - 20 
  //   }, 'slow');
  // } );
// } );
// news list paging js ends
