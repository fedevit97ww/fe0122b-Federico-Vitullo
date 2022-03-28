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
            $(campo).next().text('* campo obbligatorio')
            control = false;

        }else{
            $(campo).next().text("Campo corretto");
        };

   };
   
   let arrayN = $("#nome, #email-1, #email-2");

   arrayN.each((indice,element) => {
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

 //
 /*$("iscr-news").click( function(){

    let nome = $('nome').val();
    let email1 = $('email-1').val();
    let email2 = $('email-2').val();
    let isValid = true;

    let campi = $('#form-email input[type="text"]');

    campi.each(function(ind,el){
 
        if($(el).val() ==''){
            $(el).next().text('*richiesto');
            isValid = false;
        }else{
            $(el).next().text('*');
        };
    

    })*/

   /* if(nome ==''){
        $('nome').next().text('*richiesto');
        isValid = false;
    }else{
        $('nome').next().text('*');
    };

    if(email1 ==''){
        $('email-1').next().text('*richiesto');
        isValid = false;
    }else{
        $('email-1').next().text('*');
    };

    if(email2 ==''){
        $('email-2').next().text('*richiesto');
        isValid = false;
    }else{
        $('email-2').next().text('*');
    };*/

    /*if(email1 != email2){
        $('email-2').next().text('*Gli indirizzi non corrispondono');
        isValid = false;
    }else{
        $('email-2').next().text('*');
    };

    if(isValid){
        $('#form-email').submit();
    };
 });*/
 
 
  