function irArriba(pixeles){
     window.addEventListener('scroll', () => {
        let scroll = document.documentElement.scrollTop;
        console.log(scroll);
        let botonArriba = document.getElementById('botonArriba')
        if(scroll > pixeles){
            botonArriba.style.bottom = 20 + "px";
        }else{
            botonArriba.style.bottom = -100 + "px";
        }
        
     })
}
irArriba(400);