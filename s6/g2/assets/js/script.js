
$( () => {
/*$('h2').click(function(){

$(this).next().toggleClass("visibile");
$(this).toggleClass("meno")
*/
$('h2').on('click', function(){
    $(this).next().toggle('fast') //show e hide 
    $(this).toggleClass("meno")

    })
})


