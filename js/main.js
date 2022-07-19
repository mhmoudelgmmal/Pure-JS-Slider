var slider = document.getElementById("fixed-box");
var ArrowLeft = document.getElementById("btn-left");
var ArrowRight = document.getElementById("btn-right");
var CloseBtn = document.getElementById("btn-close");
var container = document.querySelector(".container");
var innerImg = document.getElementById("sliderImg");
var img = document.querySelectorAll("#imgContainer img");
var arrayImgs = Array.from(img);
var indexOfClickedImg = 0;


function displayPic(e){
    var clickedImg = e.target
    var imgSrc = clickedImg.src;
    indexOfClickedImg = arrayImgs.indexOf(clickedImg);
   
   if(imgSrc != null){
    innerImg.setAttribute("src",imgSrc);
    slider.setAttribute("class","d-flex");
   }

}
container.addEventListener("click",displayPic);

function closeWindow(){
     slider.setAttribute("class","d-none");
}

CloseBtn.addEventListener("click",closeWindow());

slider.addEventListener("click",function(){
    
    slider.setAttribute("class","d-none");
});

function getNext(e){
   
  
   indexOfClickedImg ++
   if(indexOfClickedImg == arrayImgs.length){
    indexOfClickedImg = 0;
  }
  var nextImg = arrayImgs[indexOfClickedImg];
  var nextImgSrc = nextImg.getAttribute("src");
  
  innerImg.setAttribute("src",nextImgSrc);
}

ArrowRight.addEventListener("click",function (e){
    e.stopPropagation();
    getNext();
});

function getPrev(){
    
    indexOfClickedImg --;
    if(indexOfClickedImg < 0){
        indexOfClickedImg = arrayImgs.length - 1;
    }
    var prevImg =  arrayImgs[indexOfClickedImg].src;
    innerImg.setAttribute("src",prevImg);
}

ArrowLeft.addEventListener("click",function(e){
    e.stopPropagation();
    getPrev();
});

document.addEventListener("keyup",function(e){
  if(slider.getAttribute("class") == "d-flex"){
    if(e.key == "ArrowRight"){
        getNext();
    }else if(e.key == "ArrowLeft"){
        getPrev();
    }else if(e.key == "Escape"){
        closeWindow();
    }
  }

});