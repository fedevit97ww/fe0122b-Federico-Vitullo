// Quando il documento è pronto...

    //gestisco il click sul pulsante Iscriviti
   

  /*$(()=>{

       $('#iscr-news').click(function(){
        let nome= $('#nome').val();
        let email = $('#email-1').val();
        let email2 = $('#email-2').val();
        let control = true;
    
           if(nome == '' ){
            $('#nome').next().text('Campo non compilato');
            control = false;
           }else{
            $('#nome').next().text('Campo corretto');
           };

           if(email == '' ){
            $('#email-1').next().text('Campo non compilato');
            control = false;
           }else{
            $('#email-1').next().text('Campo corretto');
           };

           if(email != email2 || email2 == ''){
            $('#email-2').next().text('La mail non corrisponde');
            control = false;
           }else{
            $('#email-2').next().text('La mail corrisponde'); 
           };
          
          
            if(control){
            $('form').submit();

            }else{
            alert('il form non è compilato correttamente');
          };
       });
       
  
        $('#pulisci-form').click(function(){

            let arrayN = $('#nome, #email-1, #email-2');
            arrayN.val('');

    });
   });*/

  
 
 $(()=>{
 $('#iscr-news').click(function(){
    
    let email = $('#email-1').val();
    let email2 = $('#email-2').val();
    let control = true;

   
    function riconosce(campo){
        if($(campo).val() == ''){
            $(campo).next().text('campo non compilato')
            control = false;

        }else{
            $(campo).next().text("");
        };

   };
   
   let arrayy = $("#nome, #email-1, #email-2");

   arrayy.each((indice,element) => {
       riconosce(element);

   });
   if (email !== email2){
    $("#email-2").next().text("Le email non corrispondono!");
    control = false;
   };

   if(control){
    $('form').submit();

    }else{
    alert('il form non è compilato correttamente');
  };
 });

  $('#pulisci-form').click(function(){

            let arrayN = $('#nome, #email-1, #email-2');
            arrayN.val('');

    });
 });