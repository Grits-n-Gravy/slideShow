let container = document.createElement("div");
container.className = "slideShowContainer";
document.body.appendChild(container);

let slides = document.createElement("div");
slides.className = "mySlides_Fade";
container.appendChild(slides);

let img1 = document.createElement("img");
img1.classname = "img1";
img1.style.width = "100%";
img1.src =
  "https://images.unsplash.com/photo-1665179489306-a5158530b8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60";
slides.appendChild(img1);

let numText = document.createElement("div");
numText.className = "numberText";
numText.innerText = "1/3";
slides.appendChild(numText);

let text = document.createElement("div");
text.className = "text";
text.innerText = "Caption Text";
slides.appendChild(text);

let slides2 = document.createElement("div");
slides2.className = "mySlides_Fade";
slides.appendChild(slides2);

let img2 = document.createElement("img");
img2.classname = "img";
img2.style.width = "100%";
img2.src =
  "https://images.unsplash.com/photo-1665225792901-1b514cbbfe4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60";
slides2.appendChild(img2);

let numText2 = document.createElement("div");
numText2.className = "numberText";
numText2.innerText = "2/3";
slides.appendChild(numText2);

let text2 = document.createElement("div");
text2.className = "text";
text2.innerText = "Caption Two";
slides.appendChild(text2);

let slides3 = document.createElement("div");
slides3.className = "mySlides_Fade";
slides.appendChild(slides3);

let img3 = document.createElement("img");
img3.classname = "img";
img3.style.width = "100%";
img3.src =
  "https://images.unsplash.com/photo-1665053521142-65354ae80bfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60";
slides3.appendChild(img3);

let numText3 = document.createElement("div");
numText3.className = "numberText";
numText3.innerText = "3/3";
slides.appendChild(numText3);

let text3 = document.createElement("div");
text3.className = "text";
text3.innerText = "Caption Three";
slides.appendChild(text3);

let prev = document.createElement("a");
prev.className = "prev";
prev.setAttribute("onclick", "plusSlides(-1)");
prev.innerHTML = "&#10094;";

container.appendChild(prev);

let nxt = document.createElement("a");
nxt.className = "next";
nxt.setAttribute("onclick", "plusSlides(1)");

nxt.innerHTML = "&#10095";
container.appendChild(nxt);

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
span3.classame = "dot";
span3.setAttribute("onclick", "currentSlide(3)");
dots.appendChild(span3);
