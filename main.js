//set load hooks
$(document).ready(function(){
    //what happens when we click a 'nav' link:
    $('.nav').click(function(e){   
        //stop normal browser link action
        //i forget, if you have a glitch you need to add something here like:
        //e.stopDefaultHandler?  
        //get panel name from link href
        var pLink = $(this).attr('href').replace('#', '');
        //change to that panel
        changePanel( pLink );      
    });  
});

function changePanel( pname ){
    //all our panels
    var pages = ['about', 'members', 'music', 'audition', 'shows', 'contact'];
    
    //the height of any panel
    var pheight = $('.panel').first().outerHeight();
 
    //the index of the panel we want
    var i = pages.indexOf( pname );
    var target = -1 * i * pheight;
    
    //the offset to view that panel    
    target = String( target ) + 'px';
    
    //slide to that panel offset
    $('.panel').first().animate({'marginTop': target});
    
}