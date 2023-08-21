let imgTag = document.querySelector('img');


imgTag.onclick = function() {
    console.log(imgTag.src);
    if (imgTag.src.includes('img/img1.jpg')) 
        imgTag.src = 'img/img2.jpg'
    else 
        imgTag.src = 'img/img1.jpg'
}