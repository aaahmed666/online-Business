$(document).ready(function() {
    $('.say').select2();
    $(".say").select2({
        dir: "rtl"
      });

      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
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
        slidesPerView: 1,
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
let modal = document.createElement("div")
modal.className = "popup"
let overflow = document.createElement("div")
overflow.className = "overflow"
let search = document.querySelector(".find")
let time = document.querySelector(".header .list .time")
let git = document.querySelector(".header .list .git")
let lang = document.querySelector(".header .header-content .lang")

menu.onclick = function () {
    nav.classList.add("open");
    close.classList.add("open");
    lang.classList.add("open");
    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";
};

close.onclick = function () {
    this.parentElement.classList.remove("open");
    close.classList.remove("open");
    lang.classList.remove("open");
    modal.remove('.popup');
    document.body.style.overflow = "auto";
};

search.onclick = function () {
  git.classList.add("open");
  time.classList.add("open");
  document.body.appendChild(modal);
  document.body.style.overflow = "hidden";
}

time.onclick = function () {
    git.classList.remove("open");
    time.classList.remove("open");
    modal.remove('.popup');
    document.body.style.overflow = "auto";
}

modal.onclick = function () {
  nav.classList.remove("open");
  close.classList.remove("open");
  git.classList.remove("open");
  time.classList.remove("open");
  lang.classList.remove("open");
  modal.remove('.popup');
  document.body.style.overflow = "auto";
}



document.onkeyup = function (e) {
    if (e.key === "Escape") {
        nav.classList.remove("open");
    }
};