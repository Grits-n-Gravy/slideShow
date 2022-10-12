let main = document.createElement("div");
main.className = "slideshow-container";
document.body.appendChild(main);

let prev = document.createElement("a");
prev.className = "prev";
prev.setAttribute("onclick", "plusSlides(-1)");
prev.innerHTML = "&#10094;";
document.body.appendChild(prev);

let nxt = document.createElement("a");
nxt.className = "next";
nxt.setAttribute("onclick", "plusSlides(1)");
nxt.innerHTML = "&#10095";
document.body.appendChild(nxt);

let dots = document.createElement("div");
dots.style = "text-align:center";
document.body.appendChild(dots);

let span1 = document.createElement("span");
span1.className = "dot";
span1.setAttribute("onclick", "currentSlide(1)");
dots.appendChild(span1);

let span2 = document.createElement("span");
span2.className = "dot";
span2.setAttribute("onclick", "currentSlide(2)");
dots.appendChild(span2);

let span3 = document.createElement("span");
span3.className = "dot";
span3.setAttribute("onclick", "currentSlide(3)");
dots.appendChild(span3);

function createMySlidesFade(text, src, cText) {
  let slide = document.createElement("div");
  slide.className = "mySlides fade";
  let numberText = document.createElement("p");
  let imgSrc = document.createElement("img");
  let captionText = document.createElement("p");
  numberText.innerText = text;
  imgSrc.style.width = "100%";
  imgSrc.src = src;
  captionText.innerText = cText;
  slide.appendChild(numberText);
  slide.appendChild(imgSrc);
  slide.appendChild(captionText);
  return slide;
}

const SLIDE1 = createMySlidesFade(
  "1/4",
  "https://images.unsplash.com/photo-1665053521142-65354ae80bfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "Caption Text"
);
main.appendChild(SLIDE1);

const SLIDE2 = createMySlidesFade(
  "2/4",
  "https://images.unsplash.com/photo-1665225792901-1b514cbbfe4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "Caption Text"
);
main.appendChild(SLIDE2);

const SLIDE3 = createMySlidesFade(
  "3/4",
  "https://images.unsplash.com/photo-1665053521142-65354ae80bfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "Caption Text"
);
main.appendChild(SLIDE3);

const SLIDE4 = createMySlidesFade(
  "4/4",
  "https://images.unsplash.com/photo-1665346360092-6d936451b012?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "Caption Text"
);
main.appendChild(SLIDE4);
