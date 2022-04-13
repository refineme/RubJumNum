var images = document.getElementsByClassName('imageReview');
var carouselWrapper = document.getElementById('carousel-wrapper');
var selected = 3;
var i;
var l;

for(i = 0, l = images.length; i < l; i++) {
  
  images[i].addEventListener('click', function(e){
    
    var imageId = e.target.id;
    var imageNum = imageId.split('-')[1];
    var difference = imageNum - selected;
    var position = parseInt(document.defaultView.getComputedStyle(carouselWrapper).marginLeft);
    
    carouselWrapper.style.marginLeft = position - (difference * 350) + 'px';
    selected = imageNum;
    
  }); 
}

var imagesCarpark = document.getElementsByClassName('carpark');
var carparkWrapper = document.getElementById('carpark-wrapper');
var selectedCarpark = 2;
var y;
var z;

for(y = 0, z = imagesCarpark.length; y < z; y++) {
  
  imagesCarpark[y].addEventListener('click', function(e){
    
    var imageId = e.target.id;
    var imageNum = imageId.split('-')[1];
    var difference = imageNum - selectedCarpark;
    var position = parseInt(document.defaultView.getComputedStyle(carparkWrapper).marginLeft);
    
    carparkWrapper.style.marginLeft = position - (difference * 350) + 'px';
    selectedCarpark = imageNum;
    
  }); 
}