$(document).ready(function(){
    var cycleClass = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9', 'image10'];

    var randomNumber = Math.floor(Math.random() * cycleClass.length);
    var applyClass = cycleClass[randomNumber];

    $('body').addClass(applyClass);
})