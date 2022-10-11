let main = document.createElement('div');
main.className = "slideShow"
document.body.appendChild (main)
function createMySlidesFade(text,src,cText){
    let slide = document.createElement('div')
    slide.className = "slides"
    let numberText = document.createElement('p');
    let imgSrc = document.createElement ('img');
    let captionText = document.createElement('p');
    numberText.innerText = text;
    imgSrc.style.width ="100%";
    imgSrc.src = src;
    captionText.innerText= cText; 
    slide.appendChild(numberText);
    slide.appendChild(imgSrc);
    slide.appendChild(captionText);
    main.appendChild(slide)
}

const slide1 = createMySlidesFade("1/4","https://images.unsplash.com/photo-1665053521142-65354ae80bfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60", 'Caption Text');

const slide2 = createMySlidesFade("2/4",  "https://images.unsplash.com/photo-1665225792901-1b514cbbfe4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" , 'Caption Text');

const slide3 = createMySlidesFade("3/4",  "https://images.unsplash.com/photo-1665053521142-65354ae80bfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" , 'Caption Text');

const slide4 = createMySlidesFade("4/4","https://images.unsplash.com/photo-1665346360092-6d936451b012?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60", "Caption Text");