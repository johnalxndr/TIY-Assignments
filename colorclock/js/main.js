//lets display the current time
var d,h,m,s,color; 
    
    function myTime(){
        d = new Date();
        h = d.getHours();
        m = d.getMinutes();
        s = d.getSeconds();
        
        color= '#' + h + m + s;
        
        document.body.style.background = color;
        
        document.getElementById("clock").innerHTML = color;   
        
        setTimeout(myTime, 1000);
    }

    myTime();