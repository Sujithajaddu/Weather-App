var name1=document.getElementById('three')
var temp=document.getElementById('two')
var description=document.getElementById('one')
document.getElementById("search").onclick=function(){
    var inputvalue=document.getElementById('in').value;
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue+'&appid=f588d87533886645a8c4397249f26fb4')
    .then(data=>data.json())
    .then(message=>{
        console.log(message);
        var namevalue=message['name'];
        var tempvalue=message['main']['temp'];
        var descriptionvalue=message['weather'][0]['description'];
        description.innerHTML=descriptionvalue;
        name1.innerHTML = "City: "+namevalue;
        temp.innerHTML="Temperature: "+tempvalue;
        
    })
    .catch(error=>alert("wrong city!"))

    };

