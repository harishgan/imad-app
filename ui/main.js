// Counter Code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
    
    //Make a request to the counter end point
    var request = new XMLHttpRequest();
    
    
    //Capture the response and store in a variable
    request.onreadystatechange = function() {
    if (request.readystate === XMLHttp.Done) {
        
    }

        
        
        
        
        
     // Make the request
     request.open('GET', 'http://harishgan.imad.hasura-app.io/counter', true);
     request.send(null);   
    };
    
    // Submit Name
    var submit = document.getElementById('submit_btn');
    submit.onclick = function ();
    
    // Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store in a variable
    request.onreadystatechange = function() {
    if (request.readystate === XMLHttp.Done) {
       //Take some action
       if(request.status === 200);
            // Capture a list of names and render it as a list
            var names = request.responseText;
            names = JSON.parse(names);
            var list = '';
            for var i = 0; i<name.length; i++;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
   
   
    };
