$(document).ready(function () {
    
    /*--------------------------------------
    |   =OPEN AND CLOSE MODIFY WINDOW
    --------------------------------------*/
    
    // CLOSE WINDOW 
	$("#closeWindow").click(function () {
        $('.modify-window').addClass('display-hidden');
    });
	
	// OPEN WINDOW 
	$("#openWindow").click(function () {
        $('.modify-window').removeClass('display-hidden');
    });
    
    /*--------------------------------------
    |   =LOOPS
    --------------------------------------*/
    
    // LOOPS STYLE 1
	$(".global-loop-style-1").click(function () {
        $('.show-loop-1').removeClass('display-hidden');
        $('.show-loop-2').addClass('display-hidden');
        $('.show-loop-3').addClass('display-hidden');
        
        $('button.global-loop-style-1').addClass('active');
        $('button.global-loop-style-2').removeClass('active');
        $('button.global-loop-style-3').removeClass('active');
    });
	
    // LOOPS STYLE 2
	$(".global-loop-style-2").click(function () {
        $('.show-loop-1').addClass('display-hidden');
        $('.show-loop-2').removeClass('display-hidden');
        $('.show-loop-3').addClass('display-hidden');
        
        $('button.global-loop-style-1').removeClass('active');
        $('button.global-loop-style-2').addClass('active');
        $('button.global-loop-style-3').removeClass('active');
    });	
    
    // LOOPS STYLE 3
	$(".global-loop-style-3").click(function () {
        $('.show-loop-1').addClass('display-hidden');
        $('.show-loop-2').addClass('display-hidden');
        $('.show-loop-3').removeClass('display-hidden');
        
        $('button.global-loop-style-1').removeClass('active');
        $('button.global-loop-style-2').removeClass('active');
        $('button.global-loop-style-3').addClass('active');
    });	
    
    /*--------------------------------------
    |   =GLOBAL SIDEBAR
    --------------------------------------*/
    
    // SHOW SIDEBAR
	$(".global-sidebar-show").click(function () {
        $('aside.col-md-3').removeClass('display-hidden');
        $('section.col-md-9').removeClass('col-md-12');
        $('section.col-md-12').addClass('col-md-9');
        $('.global-sidebar-show').addClass('active');
        $('.global-sidebar-hide').removeClass('active');
    });
	
    // HIDE SIDEBAR
	$(".global-sidebar-hide").click(function () {
    	$('aside.col-md-3').addClass('display-hidden');
    	$('section.col-md-9').addClass('col-md-12');
    	$('section.col-md-12').removeClass('col-md-9');
    	$('.global-sidebar-hide').addClass('active');
    	$('.global-sidebar-show').removeClass('active');
    });	
    
    /*--------------------------------------
    |   =ARCHIVE
    --------------------------------------*/
    
    // SHOW PAGE HEADER
	$(".archive-header-show").click(function () {
        $('section.page-header .container').removeClass('display-hidden');
        $('.archive-header-show').addClass('active');
        $('.archive-header-hide').removeClass('active');
    });
	
    // HIDE PAGE HEADER
	$(".archive-header-hide").click(function () {
    	$('section.page-header .container').addClass('display-hidden');
    	$('.archive-header-hide').addClass('active');
    	$('.archive-header-show').removeClass('active');
    });	
    
    // ARCHIVE TYPE TOGGLE
	$("button.archive-type").click(function () {
        $('p.archive-type').toggleClass('display-hidden');
        $('button.archive-type').toggleClass('active');
    });
    
    // ACHIVE TITLE TOGGLE
	$("button.archive-title").click(function () {
        $('h1.page-title').toggleClass('display-hidden');
        $('button.archive-title').toggleClass('active');
    });
    
    // SHOW TYPE DESCRIPTION
	$("button.archive-description").click(function () {
        $('div.archive-description').toggleClass('display-hidden');
        $('button.archive-description').toggleClass('active');
    });
	
/* -----------------------------------------------------------------------------
	
	=COLOURS
  
----------------------------------------------------------------------------- */
	
	// SOLID COLOUR
	$("#toggleColour").click(function () {
		$('body').addClass('patterns');
        $('body').removeClass('add-image');
    });
	
	// COLOURS = BLUE	
    $("#toggleBlue").click(function () {
        $('body').removeClass('red green orange purple');
    });
    
	// COLOURS = RED		
	$("#toggleRed").click(function () {
        $('body').addClass('red');
		$('body').removeClass('green orange purple');
    });
	
	// COLOURS = GREEN
	$("#toggleGreen").click(function () {
        $('body').addClass('green');
		$('body').removeClass('red orange purple');
    });
	
	// COLOURS = ORANGE
	$("#toggleOrange").click(function () {
        $('body').addClass('orange');
		$('body').removeClass('red green purple');
    });
	
	// COLOURS = PURPLE
	$("#togglePurple").click(function () {
        $('body').addClass('purple');
		$('body').removeClass('red green orange');
    });    
});    