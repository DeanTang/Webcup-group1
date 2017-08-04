$.global = new Object();

$.global.item = 1;
$.global.total = 0;

$(document).ready(function() 
	{
	
	var WindowWidth = $(window).width();
	var SlideCount = $('#slides li').length;
	var SlidesWidth = SlideCount * WindowWidth;
	
   $.global.item = 0;
    $.global.total = SlideCount; 
    
	$('.slide').css('width',WindowWidth+'px');
	$('#slides').css('width',SlidesWidth+'px');

   $("#slides li:nth-child(1)").addClass('alive');
    
  $('#left').click(function() { Slide('back'); }); 
  $('#right').click(function() { Slide('forward'); }); 
        
  });

function Slide(direction)
	{
   
    if (direction == 'back') { var $target = $.global.item - 1; }
    if (direction == 'forward') { var $target = $.global.item + 1; }  
    
    if ($target == -1) { DoIt($.global.total-1); } 
    else if ($target == $.global.total) { DoIt(0); }  
    else { DoIt($target); }
    
    
	}

function DoIt(target)
  {
   
    var $windowwidth = $(window).width();
	var $margin = $windowwidth * target; 
    var $actualtarget = target+1;
    
    $("#slides li:nth-child("+$actualtarget+")").addClass('alive');
    
    $('#slides').css('transform','translate3d(-'+$margin+'px,0px,0px)');	
    
    $.global.item = target; 
    
  $('#count').html($.global.item+1);
    
  }
  
  
  
  
  	$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})


//Get the image
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var image4 = document.getElementById('image4');
var image5 = document.getElementById('image5');
var image6 = document.getElementById('image6');
var image7 = document.getElementById('image7');
var image8 = document.getElementById('image8');
var image9 = document.getElementById('image9');
var image10 = document.getElementById('image10');
var image11 = document.getElementById('image11');
var image12= document.getElementById('image12');
var image13= document.getElementById('image13');
var image14= document.getElementById('image14');
var image15= document.getElementById('image15');
var image16= document.getElementById('image16');
var image17= document.getElementById('image17');
var image18= document.getElementById('image18');

// Get the modal
var modal = document.getElementById('myModal');



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//When hte user clicks on the image
image1.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/fish1.png";
	document.getElementById("myText").innerHTML="As you can see, fishes are only a small portion of the aquatic ecosystem.";
}
image2.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/fish2.png";
	document.getElementById("myText").innerHTML="Lionfish";
}
image3.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/fish3.png";
	document.getElementById("myText").innerHTML="A group of fish is called a school.";
}
image4.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/shark1.png";
	document.getElementById("myText").innerHTML="Species of sharks.";
}
image5.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/shark2.png";
	document.getElementById("myText").innerHTML="Tiger Shark";
}
image6.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/shark3.png";
	document.getElementById("myText").innerHTML="Goblin Fish";
}
image7.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/oct1.png";
	document.getElementById("myText").innerHTML="Fascinating, right.";
}
image8.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/oct2.png";
	document.getElementById("myText").innerHTML="Blue-ringed";
}
image9.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/oct3.png";
	document.getElementById("myText").innerHTML="Regular Octopus";
}
image10.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/fish4.png";
	document.getElementById("myText").innerHTML="Curious about the name of this fish? You know where to find us.";
}
image11.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/fish5.png";
	document.getElementById("myText").innerHTML="Here is the classic clownfish. (Not Nemo)";
}
image12.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/fish6.png";
	document.getElementById("myText").innerHTML="Toxotes jaculatrix";
}
image13.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/shark4.png";
	document.getElementById("myText").innerHTML="Hammerhead Shark";
}
image14.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/shark5.png";
	document.getElementById("myText").innerHTML="Blue Shark";
}
image15.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/shark6.png";
	document.getElementById("myText").innerHTML="Porteagle";
}
image16.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/oct4.png";
	document.getElementById("myText").innerHTML="White-stripped"; 
}
image17.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/oct5.png";
	document.getElementById("myText").innerHTML="Fluorescent octopus/ Mimic";
}
image18.onclick = function(){
	modal.style.display = "block";
	document.getElementById("imgmodal").src="img/oct6.png";
	document.getElementById("myText").innerHTML="Orange octopus";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/////////////////////////////////////////////////////////////////////
//BOOKING
////////////////////////////////////////////////////////////////////

      
      'use strict';

var $infobox = $('.infobox');
var $infoboxCount = $infobox.find('.selected-count');
var $infoboxNames = $infobox.find('.selected-names');
var $categories = $('.categories');
var $scrollButtons = $('.categories__scroll');

$(document).on('click', '.category__link', function (e) {
    e.preventDefault();
    selectCategory($(this).closest('.category'));
});

$(window).on('resize', adjustCategoriesContainer);

$scrollButtons.on('click', function () {
    if ($(this).hasClass('categories__scroll--left')) {
        scrollCategoriesContainer(-1);
    } else {
        scrollCategoriesContainer(1);
    }
});

adjustCategoriesContainer();
updateInfobox();

function selectCategory($category) {
    $category.toggleClass('category--selected');
    updateInfobox();
}

function updateInfobox() {
    var $selectedCategories = $('.category--selected');
    var selectedCount = $selectedCategories.length;
    var selectedCategories = [];
    $selectedCategories.each(function () {
        var name = $(this).find('.category__name').text();
        selectedCategories.push(name);
    });
    var totalCategories = $('.category').length;
    $infoboxCount.text(selectedCount + ' / ' + totalCategories + ' selected');
    $infoboxNames.html(selectedCategories.join(' / ') || '&nbsp;');
}

function adjustCategoriesContainer() {
    var containerWidth = $categories.width();
    var contentWidth = $categories[0].scrollWidth;
    if (containerWidth < contentWidth) {
        $scrollButtons.removeClass('hidden');
    } else {
        $scrollButtons.addClass('hidden');
    }
}

function scrollCategoriesContainer(direction) {
    var offset = $('.category').first().width() * direction;
    var scrollLeft = $categories.scrollLeft() + offset;
    $categories.animate({ scrollLeft: scrollLeft }, 250);
}
/////////////////////////
//VALIDATION MAIL
/////////////////////////

function ValidateEmail(inputText)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(inputText.value.match(mailformat))  
{  
document.form1.email.focus();  
return true;  
}  
else  
{  
alert("You have entered an invalid email address!");  
document.form1.email.focus();  
return false;  
}  
}