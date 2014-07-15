var videos = [
   [ "video 1", "Wd3UdqPmKbA"],
   [ "video 2","Wd3UdqPmKbA"],
   [ "video 3","Wd3UdqPmKbA"]
   ];


function onBodyLoad(){
    
	var string ="";

	
 	 for(var n=0; n<videos.length; n++){
 		  $('#videos').append("<li><a href='#' onclick='callAnotherPage(videos["+ n + "][1])'>" + videos[n][0] + "</a></li>").listview('refresh');   	
	    }
 	 

 

}


function callAnotherPage(){

	window.location = "test.html?view=Wd3UdqPmKbA";
	
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


