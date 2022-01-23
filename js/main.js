$(document).ready(function() {
    $(".say").select2({
        dir: "rtl"
      });
      // $(".say-last").select2({
      //   dir: "rtl",
      //   dropdownCssClass: "last-element" 
      // });

      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

      if($(window).width() < 767) {
        $('.footer .down').click (function () {
            $('.footer .gover i').toggleClass('fa-chevron-down fa-chevron-up');
            $('.footer .city').slideToggle();
        });

        $('.footer .up').click (function () {
            $('.footer .cat i').toggleClass('fa-chevron-down fa-chevron-up');
            $('.footer .catogry').slideToggle();
        });
    } 
});

var swiper = new Swiper(".product", {
  slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
        },
  pagination: {
    el: ".product .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    567: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    767: {
        slidesPerView: 2,
        spaceBetween: 15,
    },
    991: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".company", {
  slidesPerView: 9,
  autoplay: {
    delay: 2000,
    },
  spaceBetween: 30,
  pagination: {
    el: ".company .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView: 3,
        spaceBetween: 10,
    },
    567: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    767: {
        slidesPerView: 4,
        spaceBetween: 15,
    },
    991: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
    1199: {
      slidesPerView: 9,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
  },
});

var swiper = new Swiper(".jobs", {
  slidesPerView: 3,
  
  autoplay: {
    delay: 2000,
    },
  spaceBetween: 30,
  pagination: {
    el: ".jobs .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
    567: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    767: {
        slidesPerView: 2,
        spaceBetween: 0,
    },
    991: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    1199: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".view", {
  slidesPerView: 8,
  autoplay: {
    delay: 2000,
    },
  spaceBetween: 30,
  pagination: {
    el: ".view .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView: 3,
        spaceBetween: 10,
    },
    567: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    767: {
        slidesPerView: 4,
        spaceBetween: 0,
    },
    991: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    1199: {
      slidesPerView: 8,
      spaceBetween: 15,
    },
  },
});

//for navbar in mobile
let menu = document.querySelector(".header .header-content .icon")
let nav = document.querySelector(".header .list ul")
let upperlogo = document.querySelector('.upper-logo')
let close = document.querySelector(".header .list .close")
let popup = document.querySelector(".header .popup")
let popupsearch = document.querySelector(".header .popup-search")
let search = document.querySelector(".find")
let time = document.querySelector(".header .list .time")
let git = document.querySelector(".header .list .git")
let lang = document.querySelector(".header .header-content .lang")
let image = document.querySelector(".header .lang .image")

menu.onclick = function () {
    nav.classList.add("open");
    close.classList.add("open");
    lang.classList.add("open");
    popup.classList.add("open");
    image.classList.add("open");
    document.body.classList.add('ovh');
};

close.onclick = function () {
    this.parentElement.classList.remove("open");
    close.classList.remove("open");
    lang.classList.remove("open");
    popup.classList.remove("open");
    image.classList.remove("open");
    document.body.classList.remove('ovh');
};

search.onclick = function () {
  git.classList.add("open");
  time.classList.add("open");
  popupsearch.classList.add("open");
  document.body.classList.add('ovh');
}

time.onclick = function () {
    git.classList.remove("open");
    time.classList.remove("open");
    popup.classList.remove("open");
    popupsearch.classList.remove("open");
    document.body.classList.remove('ovh');
}

popup.onclick = function () {
  nav.classList.remove("open");
  close.classList.remove("open");
  git.classList.remove("open");
  time.classList.remove("open");
  lang.classList.remove("open");
  popup.classList.remove("open");
  image.classList.remove("open");
  document.body.classList.remove('ovh');
}

popupsearch.onclick = function () {
  nav.classList.remove("open");
  close.classList.remove("open");
  git.classList.remove("open");
  time.classList.remove("open");
  lang.classList.remove("open");
  popupsearch.classList.remove("open");
  document.body.classList.remove('ovh');
}

document.onkeyup = function (e) {
    if (e.key === "Escape") {
        nav.classList.remove("open");
    }
};


(function(){
  var doc = document.documentElement;
  var w = window;
  var curScroll = prevScroll = w.scrollY || doc.scrollTop;
  var curDirction = prevDirection = 0;
  var header = document.getElementById('side-header');
  var threshold = 100;
  var toggled;

  var checkScroll = function() {
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) {
          curDirction = 2;
      }
      else {
          curDirction = 1;
      }

      if(curDirction !== prevDirection) {
          toggled = toggleHeader();
      }

      if(toggled) {
          prevDirection = curDirction;
      }
      prevScroll = curScroll;
  };

  var toggleHeader = function() {
      toggled = true;
      if(curDirction === 2 && curScroll > threshold) {
          header.classList.add('hide');
      }
      else if (curDirction === 1) {
          header.classList.remove('hide');
      }
      else {
          toggled = false;
      }
      return toggled;
  };

  window.addEventListener("scroll",checkScroll);
})();