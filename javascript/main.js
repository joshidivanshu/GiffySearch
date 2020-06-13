/* 1. Grab the input value */

/*
Variables are not visible outside the scope in which they are declared. JavaScript has function scope which means, variables declared inside of our functions are not accessible outside of the functions. Not without some fancy moves.
*/
var h = document.querySelector(".js-go")
h.addEventListener('click',function(){
	var input = document.querySelector("input").value;
	test(input.split(" "));
	
});
// to use enter to make it work
var h2 = document.querySelector(".js-userinput")
h2.addEventListener('keyup',function(e){
	var input = document.querySelector("input").value;
	/* the conditional here only prints the output when u press the key
	if this conditional is not there so that e won't be there as well
	so if it's not there then the output will be there simultaneously as
	you input the characters in the input bar
	Every key on our keyboard has a specific keyCode for enter it is 13.
	if(e.which == 13) -> but this is being dropped not supported by all browsers.
	*/
	if(e.which === 13)
	{
	test(input.split(" "));
    }
	
});


/* 2. do the data stuff with the API */
/*
In your coding journey, a common task that you'll perform with your code is accessing APIs (Application Programming Interface). APIs provide a way for two applications to communicate with each other. You will most often use APIs to access some data or to integrate an application with your own. Our GIF search engine will be powered by the Giphy API. In this lesson, you'll learn how to make AJAX requests to an API and get data back from it. Ajax, short for Asynchronous JavaScript and XML, refers to a set of web development techniques used widely in client-side programming (e.g. JavaScript) that enable data to be sent and received to and from a database/server.
*/
function test(x)
{
if(x.length === 2)
{	
	var url = "http://api.giphy.com/v1/gifs/search?q="+x[0]+"+"+x[1]+"&api_key=YOUR_API_KEY";
}
else
{
	var url = "http://api.giphy.com/v1/gifs/search?q="+x[0]+"&api_key=YOUR_API_KEY";
}
//ajax is a way to grab a data and present data on ur website without refreshing the complete webpage
// AJAX Request Asychronous JavaScript and XML.
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET',url);
GiphyAJAXCall.send();

//when the data is loaded by the ajax call in that case we define the following event.
GiphyAJAXCall.addEventListener('load',function(e){
	var data = e.target.response;
	pushToDOM(data);
});
}





/* 3. Show me the GIFs */
function pushToDOM(input)
{
	// we take the data to the response
    var response = JSON.parse(input);
    
    var imageUrls = response.data;
    imageUrls.forEach(function(image){
    	var src = image.images.fixed_height.url;
    	var container = document.querySelector(".js-container");
	    container.innerHTML = container.innerHTML + "<img src=\""+ src +"\" class=\"container-image\">";

    });
    // now we ll search the response to find out for the images that need to be displayed on our webpage

    
}