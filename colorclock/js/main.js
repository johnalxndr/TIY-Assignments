$(document).ready(function(){
    


//lets display the current time
 
    
    function myTime(){
        var d,h,m,s,color;
        
        d = new Date();
        h = d.getHours();
        m = d.getMinutes();
        s = d.getSeconds();
        
        if(h < 10 ){
            h = "0" + h 
        }
        if(m < 10 ){
            m = "0" + m 
        }
        if(s < 10 ){
            s = "0" + s 
        }
    
        
        color= '#' + h + m + s;
        
        document.body.style.background = color;
        
        document.getElementById("clock").innerHTML = h + ':' + m + ':' + s;  
        
        setTimeout(myTime, 1000);
    }

    myTime();
    
    })