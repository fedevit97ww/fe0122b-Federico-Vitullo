$(() =>{
   

       const mieImg =["pokemon","mushroom","console","supermario","carnivora","pikachu","missile","dratini","pokemon","mushroom","console","supermario","carnivora","pikachu","missile","dratini"]

    for (let i = 0; i < 16; i++) {

        let immagineRandom = Math.floor(Math.random() * mieImg.length);
        let immagineEliminata = mieImg.splice(immagineRandom, 1);


        $("#memory").append('<div class="images" id="emoji'+i+'"><img id="'+i+'" src="img/'+immagineEliminata+'.png"  width="130" height="130"></div>')
    }

    let immaginiCliccate = [];
    let finish = 0;

    $(".images").click(function(){
       $(this).addClass('disabilita')
        if(finish < 8 ) {
        
        let clicks = Number($("#clicks").text());

        clicks++;


        $("#clicks").text(clicks);
        if(clicks > 45){
            $('#vittoria').text('LOSER!!')
        }
        if(immaginiCliccate.length < 2 && clicks < 45){
            
            let imgId = $(this).children().attr('id');
            let imgSrc = $(this).children().attr('src');
            $(this).children().show()
            
            let infoImg = {
                id: imgId,
                src: imgSrc

            }

            immaginiCliccate.push(infoImg)

            if(immaginiCliccate.length == 2){
             
                if(immaginiCliccate[0].src == immaginiCliccate[1].src){
                    
                    $('#' + immaginiCliccate[0].id).parent().css("background-color","transparent")
                    $('#' + immaginiCliccate[1].id).parent().css("background-color","transparent")
                    immaginiCliccate = [];
                    finish++;
                }else{

                    setTimeout(function(){
                    $('#' + immaginiCliccate[0].id).hide().parent().removeClass('disabilita')
                    $('#' + immaginiCliccate[1].id).hide().parent().removeClass('disabilita')
                    immaginiCliccate = [];
                  
                    }, 300)

                }

            }

        }
}
        if(finish == 8){
            $('#vittoria').text('VICTORY!!!')
            $('#reset').css('display','block')
        }
       
    });

    $("#reset").click(function(){
        location.reload();
    })
});
       ///SE USI IL METODO ON JQUERY NON PRENDE I THIS ALL'INTERNO NON LI RIESCE A LEGGERE
       