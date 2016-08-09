jQuery(document).ready(function($) {

	'use strict';
    //***************************
    // Sticky Header Function
    //***************************
	  jQuery(window).scroll(function() {
	      if (jQuery(this).scrollTop() > 170){  
	          jQuery('body').addClass("ec-sticky");
	      }
	      else{
	          jQuery('body').removeClass("ec-sticky");
	      }
	  });

	//***************************
    // Silk Slider Functions
    //***************************
	  jQuery('.wm-banner').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  infinite: true,
		  arrows: false,
		  fade: true,
		  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        infinite: true,
			      }
			    },
			    {
			      breakpoint: 800,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 400,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});
	  jQuery('.wm-members-slider-wrap').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  infinite: true,
		  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='flaticon-arrows-4'></i></span>",
    	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='flaticon-arrows-4'></i></span>",
		  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			        infinite: true,
			      }
			    },
			    {
			      breakpoint: 800,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 400,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 1100,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});
	jQuery('.wm-gallery-slider').slick({
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  variableWidth: true,
	  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='flaticon-arrows-4'></i></span>",
	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='flaticon-arrows-4'></i></span>",
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	jQuery('.wm-store-slider').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='flaticon-arrows-4'></i></span>",
	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='flaticon-arrows-4'></i></span>",
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 1100,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		  ]
	});
	jQuery('.widget_slider_wrap').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='flaticon-arrows'></i></span>",
	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='flaticon-arrows'></i></span>",
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	jQuery('.wm-banner-two').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  dots: true,
	  fade: true,
	  arrows: false,
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	jQuery('.wm-latest-album').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='flaticon-arrows'></i></span>",
	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='flaticon-arrows'></i></span>",
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	jQuery('.wm-twitter-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='flaticon-arrows'></i></span>",
	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='flaticon-arrows'></i></span>",
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	jQuery('.wm-banner-three').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  fade: true,
	  arrows: false,
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	jQuery('.wm-latest-releases-slider').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='flaticon-arrows'></i></span>",
	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='flaticon-arrows'></i></span>",
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	jQuery('.wm-ourvideo-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  dots: true,
	  fade: true,
	  arrows: false,
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	jQuery('.wm-artist-slider,.wm-ourband-slider').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='flaticon-arrows'></i></span>",
	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='flaticon-arrows'></i></span>",
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	jQuery('.wm-shop-medium').slick({
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='flaticon-arrows'></i></span>",
	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='flaticon-arrows'></i></span>",
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	jQuery('.wm-banner-four').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  dots: false,
	  fade: true,
	  arrows: false,
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	jQuery('.wm-bandmember-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='flaticon-arrows'></i></span>",
	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='flaticon-arrows'></i></span>",
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	// Thumb Slider
	 $('.wm-slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.wm-slider-nav').slick({
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  asNavFor: '.wm-slider-for',
	  dots: false,
	  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='flaticon-arrows'></i></span>",
	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='flaticon-arrows'></i></span>",
	  centerMode: false,
	  focusOnSelect: true,
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	// Blog Grid Slider
	jQuery('.wm-blog-grid-slider').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='flaticon-arrows'></i></span>",
	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='flaticon-arrows'></i></span>",
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	// Shop Grid Slider
	jQuery('.wm-shop-grid-slider').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='flaticon-arrows'></i></span>",
	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='flaticon-arrows'></i></span>",
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	// Blog Large Slider
	jQuery('.wm-block-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  prevArrow: "<span class='slick-arrow-left'><i class='flaticon-arrows'></i></span>",
	  nextArrow: "<span class='slick-arrow-right'><i class='flaticon-arrows'></i></span>",
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	// Event Single
	jQuery('.wm-slider-first').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  infinite: true,
	  prevArrow: "<span class='slick-arrow-left'><i class='flaticon-arrows'></i></span>",
	  nextArrow: "<span class='slick-arrow-right'><i class='flaticon-arrows'></i></span>",
	  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	// Widget Gallery
	jQuery('.widget-gallery-wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      infinite: true,
      prevArrow: "<span class='slick-arrow-left'><i class='flaticon-arrows'></i></span>",
      nextArrow: "<span class='slick-arrow-right'><i class='flaticon-arrows'></i></span>",
      responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
    jQuery('.wm-albumteam-slider,.wm-related-artist-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      infinite: true,
      prevArrow: "<span class='slick-arrow-left'><i class='flaticon-arrows'></i></span>",
      nextArrow: "<span class='slick-arrow-right'><i class='flaticon-arrows'></i></span>",
      responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
    // Shop Thumb Slider
	 $('.wm-shop-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.wm-shopslider-nav'
	});
	$('.wm-shopslider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.wm-shop-for',
	  dots: false,
	  prevArrow: "<span class='ec-bgcolor slick-arrow-left'><i class='flaticon-arrows'></i></span>",
	  nextArrow: "<span class='ec-bgcolor slick-arrow-right'><i class='flaticon-arrows'></i></span>",
	  centerMode: false,
	  focusOnSelect: true,
	  vertical: true,
	});
	//ShopGrid Slider
	jQuery('.wm-shopgrid-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      infinite: true,
      prevArrow: "<span class='slick-arrow-left'><i class='flaticon-arrows'></i></span>",
      nextArrow: "<span class='slick-arrow-right'><i class='flaticon-arrows'></i></span>",
      responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
    jQuery('.wm-happybayers').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      infinite: true,
      prevArrow: "<span class='slick-arrow-left'><i class='flaticon-arrows'></i></span>",
      nextArrow: "<span class='slick-arrow-right'><i class='flaticon-arrows'></i></span>",
      responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
    jQuery('.wm-partner-fancy-slide').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      infinite: true,
      prevArrow: "<span class='slick-arrow-left'><i class='flaticon-arrows'></i></span>",
      nextArrow: "<span class='slick-arrow-right'><i class='flaticon-arrows'></i></span>",
      responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    //***************************
    // Click to Top Button
    //***************************
    jQuery('.backtop-btn').on("click", function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //***************************
    // Countdown Function
    //***************************
    jQuery(function() {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        jQuery('#wm-countdown,#widget-Countdown-two,#widget-Countdown-one').countdown({
            until: austDay
        });
        jQuery('#year').text(austDay.getFullYear());
    });

    //***************************
    // WordCounter Function
    //***************************
    jQuery(".word-count").counterUp({
        delay: 10,
        time: 1000
    });

    //***************************
    // PrettyPhoto Function
    //***************************
    jQuery("area[data-rel^='prettyPhoto']").prettyPhoto();

    jQuery(".gallery:first a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        theme: 'facebook',
        social_tools: '',
        slideshow: 3000,
        autoplay_slideshow: false
    });
    jQuery(".gallery:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'fast',
        slideshow: 10000,
        hideflash: true
    });

    jQuery("#custom_content a[data-rel^='prettyPhoto']:first").prettyPhoto({
        custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
        changepicturecallback: function() {
            initialize();
        }
    });

    jQuery("#custom_content a[data-rel^='prettyPhoto']:last").prettyPhoto({
        custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
        changepicturecallback: function() {
            _bsap.exec();
        }
    });

    //***************************
    // Responsive Video Function
    //***************************
    jQuery(".wm-main-section").fitVids();

    //***************************
	// Skills Function
	//***************************
	jQuery('.skillbar').each(function() {
	    jQuery(this).appear(function() {
	        jQuery(this).find('.count-bar').animate({
	            width:jQuery(this).attr('data-percent')
	        },3000);
	        var percent = jQuery(this).attr('data-percent');
	        jQuery(this).find('.count').html('<span>' + percent + '</span>');
	    });
	});

	//***************************
	// Slide Toggle Function
	//***************************
	jQuery('a.wm-playlist-btn').on("click", function(){
        jQuery('.wm-banner-player .jp-playlist,.wm-footer-player .jp-playlist').slideToggle('slow');
        return false;
    });


	var clicked=true;
	jQuery(".jp-stop").on('click', function(){
	    if(clicked)
	    {
	        clicked=false;
	        jQuery(".wm-footer-player").css({"bottom": "-60px"});
	    }
	    else
	    {
	        clicked=true;
	        jQuery(".wm-footer-player").css({"bottom": "0px"});
	    }
	});

	//***************************
	// Faq Toggle Function
	//***************************
	jQuery('.wm-faqshare').on("click", function(e) {
	    e.preventDefault();
	    e.stopPropagation;
	    jQuery(this).closest('.wm-faq-fancy').find('.selected').removeClass('selected');
	    jQuery(this).closest('li').addClass('selected');
	});

	jQuery(".closebtn").on("click", function(){
	    jQuery(this).closest('li').removeClass('selected');
	}); 
	

    //***************************
    // Ui RangeSlider Function
    //***************************
    jQuery( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        jQuery( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    jQuery( "#amount" ).val( "$" + jQuery( "#slider-range" ).slider( "values", 0 ) +
      " - $" + jQuery( "#slider-range" ).slider( "values", 1 ) );

      jQuery(function() {
	    jQuery( "#slider-range-min" ).slider({
	      range: "min",
	      value: 37,
	      min: 1,
	      max: 700,
	      slide: function( event, ui ) {
	        jQuery( "#amount" ).val( "$" + ui.value );
	      }
	    });
	    jQuery( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );
	  });

	//***************************
	// Login Slide Function
	//***************************
    jQuery('a.wm-userlogin').on("click", function(){
        jQuery('.wm-login-popup').slideToggle('slow');
        return false;
    });
    jQuery('html').on("click", function() { jQuery(".wm-login-popup").fadeOut(); });
	jQuery('.wm-useroptions').on("click", function(event){ event.stopPropagation(); });

	jQuery('a.wm-usersignup').on("click", function(){
        jQuery('.wm-signup-popup').slideToggle('slow');
        return false;
    });
    jQuery('html').on("click", function() { jQuery(".wm-signup-popup").fadeOut(); });
	jQuery('.wm-useroptions').on("click", function(event){ event.stopPropagation(); });

	jQuery('a.wm-search-btn').on("click", function(){
        jQuery('.wm-search-popup').slideToggle('slow');
        return false;
    });
    jQuery('html').on("click", function() { jQuery(".wm-search-popup").fadeOut(); });
	jQuery('.wm-useroptions').on("click", function(event){ event.stopPropagation(); });

	//***************************
	// Cart Slide Function
	//***************************
	jQuery('.wm-cart-baskit > a.flaticon-shop,a.wm-text-cart,.wm-cart-bag > a,a.wm-cart').on("click", function(){
        jQuery('.wm-cart-box').slideToggle('slow');
        return false;
    });
    jQuery('html').on("click", function() { jQuery(".wm-cart-box").fadeOut(); });
	jQuery('.wm-cart-baskit,.wm-topstrip .wm-right-section,.wm-cart-bag,.wm-header-one .wm-right-section').on("click", function(event){ event.stopPropagation(); });

	//***************************
	// Cart Remove Function
	//***************************
	jQuery("#wmbtnremove1").on("click", function(){ jQuery("#wmremove1").remove(); });
	jQuery("#wmbtnremove2").on("click", function(){ jQuery("#wmremove2").remove(); });
	jQuery("#wmbtnremove3").on("click", function(){ jQuery("#wmremove3").remove(); });

	//***************************
	// Slide Toggle Function
	//***************************
	jQuery('[data-toggle="tooltip"]').tooltip();

	//***************************
	// NiceScroll Function
	//***************************
	jQuery(".wm-banner-player .jp-playlist ul").niceScroll("",{
		cursorcolor:"#6a747d",
		cursoropacitymax:1,
		boxzoom:true,
		touchbehavior:false,
		autohidemode: false,
        background: '#414e59',
        cursorborderradius: '20px 20px 0px 0px',
        cursorheight: '126px',
        cursorwidth: '6px',
        cursorborder: '0px',
        touchbehavior:true,
        railoffset: {top:28,}
	});
	jQuery(".wm-footer-player .jp-playlist ul").niceScroll("",{
		cursorcolor:"#e1e1e1",
		cursoropacitymax:1,
		boxzoom:true,
		touchbehavior:false,
		autohidemode: false,
        background: '#808080',
        cursorborderradius: '20px 20px 0px 0px',
        cursorheight: '126px',
        cursorwidth: '6px',
        cursorborder: '0px',
        touchbehavior:true,
        railoffset: {top:28,}
	});
	jQuery(".wm-banner-player-three .jp-playlist ul").niceScroll("",{
		cursorcolor:"#e1e1e1",
		cursoropacitymax:1,
		boxzoom:true,
		touchbehavior:false,
		autohidemode: false,
        background: '#808080',
        cursorborderradius: '20px 20px 0px 0px',
        cursorheight: '126px',
        cursorwidth: '6px',
        cursorborder: '0px',
        touchbehavior:true,
        railoffset: {top:0,left:12,}
	});
	jQuery(".wm-albumplayer .jp-playlist ul").niceScroll("",{
		cursorcolor:"#636363",
		cursoropacitymax:1,
		boxzoom:true,
		touchbehavior:false,
		autohidemode: false,
        background: '#4e4e4e',
        cursorborderradius: '20px 20px 0px 0px',
        cursorminheight: 26,
        cursorwidth: 6,
        cursorborder: 0,
        touchbehavior:true,
        railoffset: {top:15,left:-22,},
        railpadding: { top: 0, right: 0, left: 0, bottom: 34 },
	});
	jQuery(".wm-event-performer ul").niceScroll("",{
		cursorcolor:"#494848",
		cursoropacitymax:1,
		boxzoom:true,
		touchbehavior:false,
		autohidemode: false,
        background: '#2a2a2a',
        cursorborderradius: '20px',
        cursorminheight: 20,
        cursorwidth: 10,
        cursorborder: 0,
        touchbehavior:true,
        railoffset: {top:15,left:10,},
        railpadding: { top: 0, right: 0, left: 0, bottom: 34 },
	});
	jQuery(".wm_withscroll ul").niceScroll("",{
		cursorcolor:"#aaaaaa",
		cursoropacitymax:1,
		boxzoom:true,
		touchbehavior:false,
		autohidemode: false,
        background: '#5f5f5f',
        cursorborderradius: '20px',
        cursorminheight: 20,
        cursorwidth: 7,
        cursorborder: 0,
        touchbehavior:true,
        railoffset: {top:20,left:-18,},
        railpadding: { top: 0, right: 0, left: 0, bottom: 34 },
	});
	jQuery(".wm-shop-review > ul").niceScroll("",{
		cursorcolor:"#494848",
		cursoropacitymax:1,
		boxzoom:true,
		touchbehavior:false,
		autohidemode: false,
        background: '#2a2a2a',
        cursorborderradius: '20px',
        cursorminheight: 20,
        cursorwidth: 11,
        cursorborder: 0,
        touchbehavior:true,
        railoffset: {top:15,left:0,},
        railpadding: { top: 0, right: 0, left: 0, bottom: 34 },
	});

});

//***************************
// Google Map Function
//***************************
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
    });
}


//***************************
// Event Calendar Function
//***************************
jQuery(document).ready(function() {
	var d = new Date();
	var y = d.getFullYear();
	var m = d.getMonth();
	jQuery('#calendar').fullCalendar({
		draggable: false,
		showTime: false,
		events: [
		
			{
				id: 1,
				title: "MetLife Stadium ...",
				start: "2016-06-08 00:00:00",
				end: "2016-06-10 00:00:00",
				tooltip: "<h5>Foro Sol - Mexico City, MX</h5> <span>Few Tickets</span> <p>02/03/2016 <small>08:55pm - 12:00am</small></p>"
				
			},
			{
				id: 2,
				title: "Foro Sol - Mexico City, MX",
				start: "2016-06-18 13:00:00",
				end: "2016-06-22 16:00:00",
				tooltip: "<h5>Foro Sol - Mexico City, MX</h5> <span>Few Tickets</span> <p>02/03/2016 <small>08:55pm - 12:00am</small></p>"
			},
			{
				id: 3,
				title: "Rose Bowl ...",
				start: "2016-06-26 13:00:00",
				end: "2016-06-26 16:00:00",
				tooltip: "<h5>Foro Sol - Mexico City, MX</h5> <span>Few Tickets</span> <p>02/03/2016 <small>08:55pm - 12:00am</small></p>"
			},
			{
				id: 4,
				title: "Manchester Etihad Stadium - UK",
				start: "2016-07-01 13:00:00",
				end: "2016-07-02 16:00:00",
				tooltip: "<h5>Foro Sol - Mexico City, MX</h5> <span>Few Tickets</span> <p>02/03/2016 <small>08:55pm - 12:00am</small></p>"
			},
			{
				id: 3,
				title: "Rose Bowl ...",
				start: "2016-07-26 13:00:00",
				end: "2016-07-26 16:00:00",
				tooltip: "<h5>Foro Sol - Mexico City, MX</h5> <span>Few Tickets</span> <p>02/03/2016 <small>08:55pm - 12:00am</small></p>"
			}
		],
	

		eventMouseover: function(calEvent, jsEvent) {
		    var tooltip = '<div class="tooltipevent" style="position:absolute;z-index:10001;">' + calEvent.tooltip + '</div>';
		    jQuery("body").append(tooltip);
		    jQuery(this).mouseover(function(e) {
		        jQuery(this).css('z-index', 10000);
		        jQuery('.tooltipevent').fadeIn('500');
		        jQuery('.tooltipevent').fadeTo('10', 1.9);
		    }).mousemove(function(e) {
		        jQuery('.tooltipevent').css('top', e.pageY - 220);
		        jQuery('.tooltipevent').css('left', e.pageX - 80);
		    });
		},

		eventMouseout: function(calEvent, jsEvent) {
		    jQuery(this).css('z-index', 8);
		    jQuery('.tooltipevent').remove();
		},

	});
});

//***************************
// Event FilterAble Function
//***************************
jQuery(function($) {
    $('.wm-album-filter >li').on("click", function(event) {
        event.preventDefault();
        var target = $(this).find('>a').prop('hash');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });
    $("a.preview").prettyPhoto({
        social_tools: false
    });
    $(window).load(function() {
        $portfolio = $('.wm-albummasonry-list');
        $portfolio.isotope({
            itemSelector: '.wm-albummasonry-list > ul > li',
            layoutMode: 'fitRows',
        });
        $portfolio_selectors = $('.wm-album-filter >li>a');
        $portfolio_selectors.on('click', function() {
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector
            });
           
        });
    });
});

//***************************
// Masonery Function
//***************************
$(window).load(function() {
        $portfolio = $('.wm-masonry-list,.wm-masonry-faq');
        $portfolio.isotope({
            itemSelector: '.wm-masonry-list > div.col-md-3,.wm-masonry-faq > .col-md-4',
            layoutMode: 'masonry',
        });
    });

jQuery('.wm-faqshare').on("click", function() {
    $portfolio = $('.wm-masonry-faq');
    $portfolio.isotope({
        itemSelector: '.wm-masonry-faq > .col-md-4',
        layoutMode: 'masonry',
    });
});