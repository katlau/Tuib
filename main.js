$(document).ready(function(){
    
	$('#logo').click(showHome);
    //what happens when you click the new crush button?
    $('#aboutLink').click(showAbout);
    $('#membersLink').click(showMembers);
    $('#musicLink').click(showMusic);
    $('#auditionLink').click(showAudition);
	$('#showsLink').click(showShows);
    $('#contactLink').click(showContact);
    
});

function showLink(){
	$(this).slideUp('slow', function () {
		//Animation complete.
	});
	[link clicked] = [div name to show]
	[hide all other divs]/[slide up whatever div is currently displayed]
	[show "this" div] with slideup animation
	
}



//Our show functions
function showHome(){
   $('#home').slideUp('fast', function() {
	    // Animation complete.
	  });	
   $('#home').show();
   $('#about').hide();
   $('#members').hide();
   $('#music').hide();
   $('#audition').hide();
   $('#shows').hide();
   $('#contact').hide();
}

function showAbout(){
	$('#about').slideUp('fast', function() {
	    // Animation complete.
	  });
   $('#home').hide();
   $('#about').show();
   $('#members').hide();
   $('#music').hide();
   $('#audition').hide();
   $('#shows').hide();
   $('#contact').hide();
}

function showMembers(){
	$('#members').slideUp('fast', function() {
	    // Animation complete.
	  });
   $('#home').hide();
   $('#about').hide();
   $('#members').show();
   $('#music').hide();
   $('#audition').hide();
   $('#shows').hide();
   $('#contact').hide();
}

function showMusic(){
	$('#music').slideUp('fast', function() {
	    // Animation complete.
	  });
   $('#home').hide();
   $('#about').hide();
   $('#members').hide();
   $('#music').show();
   $('#audition').hide();
   $('#shows').hide();
   $('#contact').hide();
}

function showAudition(){
	$('#audition').slideUp('fast', function() {
	    // Animation complete.
	  });
   $('#home').hide();
   $('#about').hide();
   $('#members').hide();
   $('#music').hide();
   $('#audition').show();
   $('#shows').hide();
   $('#contact').hide();
}

function showShows(){
	$('#shows').slideUp('fast', function() {
	    // Animation complete.
	  });
   $('#home').hide();
   $('#about').hide();
   $('#members').hide();
   $('#music').hide();
   $('#audition').hide();
   $('#shows').show();
   $('#contact').hide();
}

function showContact(){
	$('#contact').slideUp('fast', function() {
	    // Animation complete.
	  });
   $('#home').hide();
   $('#about').hide();
   $('#members').hide();
   $('#music').hide();
   $('#audition').hide();
   $('#shows').hide();
   $('#contact').show();
}