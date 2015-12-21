$(document).ready(function(){

var shuffle = function () {
    var parent = $(".allCards");
    var divs = parent.children();
    while (divs.length) {
    	randomdivs = divs.splice(Math.floor(Math.random() * divs.length), 1)
        parent.append(randomdivs);
    }
};


shuffle();
var clicks = 0;
var clicked = [];

var clickValidator = function(card){
  clicks++;
  if (clicks <= 2){
    flipCard(card)
    if (clicks === 2){
      setTimeout(function(){
      	compareCards(); 
      }, 2000)
    }
  }
}

	

var flipCard = function(card){
    var cardId = card.attr('id');
    if(cardId === "card1" || cardId === "card2"){
        clicked.push('dennis2.jpg');
        card.children().attr('src', 'dennis2.jpg');
    }
    if (cardId ==="card3" || cardId === "card4"){
        clicked.push('bryan2.jpg');
        card.children().attr('src', 'bryan2.jpg');
       
    }
    if (cardId === "card5" || cardId === "card6"){
        clicked.push('bobby2.jpg');
        card.children().attr('src', 'bobby2.jpg');
        
    }
    if (cardId === "card7" || cardId === "card8"){
        clicked.push('ed2.jpg');
        card.children().attr('src', 'ed2.jpg');
    }
    if (cardId === "card9" || cardId === "card10"){
        clicked.push('jaden2.jpg');
        card.children().attr('src', 'jaden2.jpg');
    }
    if (cardId === "card11" || cardId === "card12"){
        clicked.push('matt4.jpg');
        card.children().attr('src', 'matt4.jpg');
    }
    if (cardId === "card13" || cardId === "card14"){
        clicked.push('john2.jpg');
        card.children().attr('src', 'john2.jpg');
    }
    if (cardId === "card15" || cardId === "card16"){
        clicked.push('nick2.jpg');
        card.children().attr('src', 'nick2.jpg');
    }
};

var paired = 0;

function compareCards(){
    // when cards match
  if (clicked[0] === clicked[1]){
    paired += 1;
    var trying = $("[src='"+clicked[0]+"']").fadeOut('slow');
        if (paired === 8){
            alert("Congrats you won!");
            $('body').remove('src', 'matrix_featured.png');
            $('body').css('background-image','url(win.jpg)');
            // myAudio.play();
        }
    clicks = 0;
    clicked = [];
  } else {
    clicked.forEach(function(target){
    $("[src='"+target+"']").attr('src', 'memory card.jpg');
    });
    clicks = 0;
    clicked = [];
  }
}

    // var myAudio = function(){
    //     new Audio("01 Hello.m4a");
    //     myAudio.play();
    // }

    $('.aCard').click(function(){
        clickValidator($(this));
    });

    $( ".bb" ).click(function(){
        shuffle();
        
    });
});






//attribute selector which looks for any element based on what attribute you are searching


