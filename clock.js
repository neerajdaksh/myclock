let hh = document.getElementById("hours"); 
let mm = document.getElementById("minute"); 
let ss = document.getElementById("second"); 
function mytimer(){
    let d = new Date;
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds(); 

    hh.innerHTML = h;
    mm.innerHTML = m;
    ss.innerHTML = s
    
}
 
 setInterval(mytimer,1000);
 
 
 

