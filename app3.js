var sıra2=0;
let ok2=document.getElementById("ok2");


ok2.addEventListener("click",()=>{
    //if ( window.location.href==="file:///C:/Users/srcn_/OneDrive/Masa%C3%BCst%C3%BC/Javascript%20projeleri/Banka%20S%C4%B1ramatik/tcs%C4%B1ra.html"){
        if (document.getElementById("yaz") .innerHTML.length != 11 ){
            alert("Lütfen 11 haneli tc numarasını girdiniz!!")
        }
        else{
            sıra2 +=1;
            document.getElementById("tcno").innerText =sıra2;
        }
    // }else{
    //         alert("yanlıs adres")
    // }
   
})