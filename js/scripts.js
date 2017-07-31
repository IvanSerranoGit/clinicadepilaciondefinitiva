$(function () {
    
	//Background images slider
	$('.backgroundSlider #backgroundImages').supersized({
		slide_interval : 4000, // Length between transitions
		transition : 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed : 900, // Speed of transition
		slide_links : false, // Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides : [
			{image : 'images/OQI7ZM0.jpg', title : '', thumb : '', url : ''},
			{image : 'images/794.jpg', title : '', thumb : '', url : ''},
			{image : 'images/133726-OS00RM-615.jpg', title : '', thumb : '', url : ''},
			{image : 'images/OCNVWA0.jpg', title : '', thumb : '', url : ''},
		]
	});
        
        var autoplay = false;
        if($(window).width() >= 992)
        {
            autoplay = true;
            $("#bgndVideo").mb_YTPlayer();
        }

        
	//Text slider
	$('#text_slider').cycle({
		fx : 'fade',
		timeout: 4000,
		speed: 900,
		slides: '.slide'
	});
    
	//Countdown
	$("#countdown").countdown({
            until: someDate, 
            padZeroes: true,
            layout: $("#countdown").html()
	});
        
	//Submit Newsletter form to PHP file
	$("#form_newsletter").submit(function(event) {
	    
		//stop form from submitting normally
		event.preventDefault();

		//get some values from elements on the page:
		var $form = $( this );

		$("#form_newsletter button").attr("disabled", "disabled");

		//Send the data using post
		var posting = $.post( 'process_form.php', $form.serialize() );

		//Show result
		posting.done(function( data ) {

			$("#form_newsletter button").removeAttr('disabled');

			$("#form_newsletter_result").hide().html(data).fadeIn();
		});
	});
    
	//About us (Open / Close)
	$(".open_aboutus").click(function() {
		$("#about_us").removeClass('animated fadeOut').addClass('animated fadeIn').fadeIn();
	});

	$(".close_aboutus").click(function() {
		$("#about_us").removeClass('animated fadeIn').addClass('animated fadeOut').fadeOut();
	});
        
            
        
		
});

//Countdown for demo. Always add 18 days
var someDate = new Date();
var numberOfDaysToAdd = 15;
someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 

//Countdown with real date
var someDate = new Date("August 15, 2017 23:59:59");
someDate.setDate(someDate.getDate()); 