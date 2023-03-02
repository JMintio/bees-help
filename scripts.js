var pagename = "none";

function startBtn_click() {
  pagename = "home";
  const start_page = document.querySelectorAll(".start_page");
  start_page.forEach((start_item) => {
    start_item.style.display = "none";
  });

  document;
  const home_page = document.querySelectorAll(".home_page");
  home_page.forEach((home_item) => {
    home_item.classList.add("animate__animated", "animate__fadeInLeft");
    home_item.style.display = "block";
  });
}

function resgate_btn() {
  const home_page = document.querySelectorAll(".home_page");
  home_page.forEach((home_item) => {
    home_item.style.display = "none";
  });
}
function tele_btn() {
  pagename = "tel";
  const home_page = document.querySelectorAll(".home_page");

  home_page.forEach((home_item) => {
    home_item.style.display = "none";
  });
  const tel_page = document.querySelectorAll(".tel_page");
  tel_page.forEach((tel_item) => {
    tel_item.classList.add("animate__animated", "animate__fadeInLeft");
    tel_item.style.display = "block";
  });
}

function back_btn() {
  if (pagename === "tel") {
    pagename = "home";
    const tel_page = document.querySelectorAll(".tel_page");
    tel_page.forEach((tel_item) => {
      tel_item.classList.add("animate__animated", "animate__fadeInLeft");
      tel_item.style.display = "none";
    });
    document;
    const home_page = document.querySelectorAll(".home_page");
    home_page.forEach((home_item) => {
      home_item.classList.add("animate__animated", "animate__fadeInLeft");
      home_item.style.display = "block";
    });
  } else if (pagename === "home") {
    pagename = "start";
    const start_page = document.querySelectorAll(".start_page");
    start_page.forEach((start_item) => {
      start_item.style.display = "block";
    });
    document;
    const home_page = document.querySelectorAll(".home_page");
    home_page.forEach((home_item) => {
      home_item.classList.add("animate__animated", "animate__fadeInLeft");
      home_item.style.display = "none";
    });
  }
}
