$(document).ready(function () {
  // varibles
  const nav_bar = document.querySelector("nav");
  const close_nav = document.querySelector(".btn_close_nav");
  const barsIcon = document.querySelector(".btn_bars");
  const body_ = document.querySelector("body");
  const btn_search_mobile = document.querySelector(".btn-search-mobile");

  // open navbar
  barsIcon.addEventListener("click", function () {
    nav_bar.classList.add("open_nav");
    body_.classList.add("over_");
  });

  // close navbar
  close_nav.addEventListener("click", function () {
    nav_bar.classList.remove("open_nav");
    body_.classList.remove("over_");
  });
  // open signin
  $(".btn_user_").click(function () {
    $(".login-popup-parant").slideToggle("500");
    $(".moboverlay").slideToggle("500");
    body_.classList.add("over_");
  });
  // close signin
  $(".moboverlay, .close_login").click(function () {
    $(".login-popup-parant").fadeOut("500");
    $(".moboverlay").fadeOut("500");
    body_.classList.remove("over_");
  });
  // open address-box
  $(".popup-address").click(function () {
    $(".address-box").slideToggle("500");
    $(".moboverlay").slideToggle("500");
    body_.classList.add("over_");
  });
  // close address-box
  $(".moboverlay, .close_address-box").click(function () {
    $(".address-box").fadeOut("500");
    $(".moboverlay").fadeOut("500");
    body_.classList.remove("over_");
  });
  // open menu mobile
  if ($(document).width() < 768) {
    $(".action_menu > a").click(function (e) {
      e.preventDefault();
      $(this).next().slideToggle("500");
    });
  }
  // open mobile-search
  btn_search_mobile.addEventListener("click", function () {
    $(".input-serch-div-parant").slideToggle("500");
    $(".btn-search-mobile .la-search").toggleClass("la-times");
  });

  // ~~~~~~~~~~~~back_top
  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $(".back_top").fadeIn("500");
    } else {
      $(".back_top").fadeOut("500");
    }
  });
  $(".back_top").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "500");
  });

  //~~~~~~~~~ fixed header
  if ($(document).width() > 768) {
    //~~~~~~~~~ fixed header

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 150) {
        $("nav").addClass("fixed_");
      } else {
        $("nav").removeClass("fixed_");
      }
    });
    var fixedBar = document.querySelector("nav"),
      prevScrollpos = $(window).scrollTop();

    (window.onscroll = function () {
      var o = $(window).scrollTop();
      prevScrollpos < o && prevScrollpos > 0
        ? fixedBar.classList.add("fixsedt")
        : fixedBar.classList.remove("fixsedt"),
        (prevScrollpos = o);
    }),
      document.documentElement.style.setProperty("--animate-duration", ".5s");
    // ~~~~~~~~~~~~~~~
  } else {
    //~~~~~~~~~ fixed header
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 150) {
        $("header").addClass("fixed_");
      } else {
        $("header").removeClass("fixed_");
      }
    });
    var fixedBar = document.querySelector("header"),
      prevScrollpos = $(window).scrollTop();

    (window.onscroll = function () {
      var o = $(window).scrollTop();
      prevScrollpos < o && prevScrollpos > 0
        ? fixedBar.classList.add("fixsedt")
        : fixedBar.classList.remove("fixsedt"),
        (prevScrollpos = o);
    }),
      document.documentElement.style.setProperty("--animate-duration", ".5s");
    // ~~~~~~~~~~~~~~~
  }

  ///quantity
  jQuery(document).ready(($) => {
    $(".quantity").on("click", ".plus", function (e) {
      let $input = $(this).prev("input.qty");
      let val = parseInt($input.val());
      $input.val(val + 1).change();
    });

    $(".quantity").on("click", ".minus", function (e) {
      let $input = $(this).next("input.qty");
      var val = parseInt($input.val());
      if (val > 0) {
        $input.val(val - 1).change();
      }
    });
  });

  // collapse~~~~~~~~
  $(".btn_collapse_").click(function () {
    const toggle = $(this).next(".toggle_collapse");
    $(toggle)
      .stop()
      .slideToggle("slow")

      .prev(".color_toggle")
      .toggleClass("poen_co");
    $(toggle)
      .prev()
      .children()
      .children(".backg_toggle")
      .toggleClass("poen_backg");
    $(toggle).parent().prev(".color_toggle").toggleClass("poen_co");
    $(this).children().children(".bar--horizontal").toggleClass("is-active");
  });
  // ~~~~~~~~~~~~~~~
});

// ~~~~~~~~~~~~~~preload~~~~~~~~~~~~~~
document.onreadystatechange = function (e) {
  if (document.readyState == "interactive") {
    var all = document.getElementsByTagName("*");
    for (var i = 0, max = all.length; i < max; i++) {
      set_ele(all[i]);
    }
  }
};
function check_element(ele) {
  var all = document.getElementsByTagName("*");
  var totalele = all.length;
  var per_inc = 100 / all.length;

  if ($(ele).on()) {
    var prog_width =
      per_inc + Number(document.getElementById("progress_width").value);
    document.getElementById("progress_width").value = prog_width;
    $("#bar1").animate({ width: prog_width + "%" }, 3, function () {
      if (document.getElementById("bar1").style.width == "100%") {
        $(".progress").fadeOut("slow");
        $(".progress .bar").fadeOut("slow");
      }
    });
  } else {
    set_ele(ele);
  }
}
function set_ele(set_element) {
  check_element(set_element);
}
// ~~~~~~~~~~~~~~~~~~~~~

// swiper js
const swiper1 = new Swiper(".slider .mySwiper", {
  slidesPerView: "1",
  autoplay: false,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".slider .swiper-button-next",
    prevEl: ".slider .swiper-button-prev",
  },
  pagination: {
    el: ".slider .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    enabled: true,
  },
});
if ($(document).width() < 768) {
  $(".new_section .new .swiper-slide").unwrap();
  $(".bestseller_section .swiper-slide").unwrap();
  $(".designer-page .new .swiper-slide").unwrap();

  // swiper js bestseller
  const swiper2 = new Swiper(".bestseller_section .mySwiper", {
    slidesPerView: "2",
    // loop: true,
    observer: true,
    autoplay: true,
    observeParents: true,
    spaceBetween: 15,
    pagination: {
      el: ".bestseller_section .swiper-pagination",
      clickable: true,
    },
  });
  // swiper js new
  const swiper3 = new Swiper(".new_section .mySwiper", {
    slidesPerView: "2",
    autoplay: true,
    spaceBetween: 15,
    pagination: {
      el: ".new_section .swiper-pagination",
      clickable: true,
    },
  });
  // swiper js new
  const swiper7 = new Swiper(".designer-page .mySwiper", {
    slidesPerView: "2",
    autoplay: true,
    spaceBetween: 15,
    pagination: {
      el: ".designer-page .swiper-pagination",
      clickable: true,
    },
  });
}
// swiper js
const swiper4 = new Swiper(".best_designers .mySwiper", {
  autoplay: false,
  spaceBetween: 20,
  navigation: {
    nextEl: ".best_designers .swiper-button-next",
    prevEl: ".best_designers .swiper-button-prev",
  },
  pagination: {
    el: ".best_designers .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    enabled: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  },
});

// swiper js
const swiper5 = new Swiper(".like .mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    nextEl: ".like .swiper-button-next",
    prevEl: ".like .swiper-button-prev",
  },
  pagination: {
    el: ".like .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    enabled: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
});
const $disabledResults = $(".select_input");
$disabledResults.select2();
$("select[name='gender']").select2({
  minimumResultsForSearch: Infinity,
});
// start product
const swiper10 = new Swiper(".porduct_img .mySwiper", {
  spaceBetween: 7,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper11 = new Swiper(".porduct_img .mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper10,
  },
});

///// show $ hidden passsword
const show_pass = document.querySelector(".btn_show_pass");
const attrtype = document.querySelector(".password_change");
const e_block = document.querySelector(".e_block");
const e_none = document.querySelector(".e_none");

console.log(attrtype);
show_pass.addEventListener("click", function (e) {
  e.preventDefault();
  if (attrtype.type === "password") {
    attrtype.type = "text";
    e_none.style.display = "block";
    e_block.style.display = "none";
  } else {
    attrtype.type = "password";
    e_block.style.display = "block";
    e_none.style.display = "none";
  }
});
// ~~~~~~~~~~wow.js
new WOW().init();
document.documentElement.style.setProperty("--animate-duration", ".8s");
