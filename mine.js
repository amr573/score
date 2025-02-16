let but=document.querySelector(".but")
let pra=document.querySelector(".pra")
let pre=document.querySelector(".pre")

function grade(){
    let inp=document.querySelector(".inp").value
    let d=(inp/360)*100
     
    if(d>=85 & d<=100){
        pra.textContent="Excellent"
    }else if(d>=75 & d<85){
        pra.textContent="very good"
    }else if(d>=65 & d<75){
        pra.textContent="good"
    } else if(d>=50 & d<65){
        pra.textContent="acceptable"
    } else if(d>=0 & d<50){
        pra.textContent="bad!!"
        
    }else{
        pra.textContent="not a thing"
    }
    pre.textContent=d
}

but.onclick=grade



