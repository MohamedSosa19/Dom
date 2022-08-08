
var imgs=Array.from(document.querySelectorAll('.img-fluid'));
var lightBoxContainer=document.getElementById("lightBoxContainer");
var lightBoxItem=document.getElementById("lightBoxItem");
var closeIcon=document.getElementById("close");
var nextIcon=document.getElementById("next");
var prevIcon=document.getElementById("prev");
var currentIndex=0;




for(var i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",function(e){
        lightBoxContainer.style.display="flex";
        var imgSrc=e.target.src;
        currentIndex=imgs.indexOf(e.target)
        lightBoxItem.style.backgroundImage=`url(${imgSrc})`
    })

}

nextIcon.addEventListener("click",getNextItem);
prevIcon.addEventListener("click",getPrevItem);
closeIcon.addEventListener("click",closeItem);


function closeItem(){
    lightBoxContainer.style.display="none";

}

function getNextItem(){

    currentIndex++;

    if(currentIndex==imgs.length){
        currentIndex=0;
    }
    var imgSrc=imgs[currentIndex].src
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`
}

function getPrevItem(){

    currentIndex--;

    if(currentIndex<0){
        currentIndex= imgs.length-1;
    }
    var imgSrc=imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
}


document.addEventListener("keydown",function(e){

    if(e.key=="Escape"){
        closeItem();
    }
    else if(e.key=="ArrowRight"){
        getNextItem();
    }
    else if(e.key=="ArrowLeft"){
        getPrevItem();
    }
})