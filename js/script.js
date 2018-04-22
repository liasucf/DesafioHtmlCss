/* BEM VINDO, MARINHEIRO 
   O desafio demorou mas saiu rápido
   Antes de tudo, leia todas as dicas e obersações no link do desafio
   ...
   *-* Todo conteudo dentro de $(document).ready( function() { ... } ); será execultado assim que carregar a página
*/
var i=6;
$(document).ready(function() {
        

        contador(5);
        $( "#alerta" ).draggable();
        
        

    $("#novidadesform [type='submit']").click(function(e) {
        e.preventDefault();

       
        var element = document.forms["contact-form"]["email"].value;
        //criar uma variavel e pegar o conteudo digitado na input
        //verificar se o campo não está vazio com if e else
        if (element == ""){
            toastr.error('Preencha um email!', 'Error!');
        }
            else{
                $.ajax({
                    type: 'post',
                    data: {meuemail:element},
                    url:'http://51.254.204.44/ti/enviar_email.php',
                    dataType:'JSON',

                    success: function(retorno){
                    toastr.success(retorno, 'Success');
                    $(".resultado").text(element + " foi salvo em nossa lista de novidades =)");
                    element="";
                    contadorNovo(2);
                    
                    
                      },


                    error: function(erro){
                    $('#resposta').html(erro);
                    toastr.error(erro.responseText, 'Error');
                    }
      
                    })
                }

        //se for vazio execultar o comando abaixo
        //toastr.error('Preencha um email!', 'Error!');

        //se não for vazio enviar uma requisição com -requisição AJAX- do tipo POST para http://51.254.204.44/ti/enviar_email.php 
        // -- passando o paramentro "meuemail" e o dataType JSON

        //SE OCORRER TUDO CERTO COM A REQUISIÇAO: 1° exibir um toastr.sucess com a mensagem  | 2° 
        // 2° colocar um texto na div  de class resultado. "*emaildigitado* foi salvo em nossa lista de novidades =)"
        //limpar input
        //fechar a alerta depois de 2 segundos

        //SE não ocorrer tudo certo a alerta ñ deve fechar. Exibir um toastr.error com a mensagem do erro retornada pelo servidor



    });

     $('#logo').click(function() {
                location.reload();
            });
      $('#logo').mouseover(function(){
                $('#logo').css("cursor", "pointer");
            });
      $("#logo").mouseover(function(){
        $("#logo").animate({
            
            opacity: '0.7',
            height: '25px'
            
        });
         $("#logo").mouseout(function(){
        $("#logo").animate({
            
            opacity: '1',
            height: '20px'
            }); 
        });
    });
});

/* NÃO MEXER 
   Se tiver visível, após executar a função, a div será oculta e vice-versa
*/
function toggleAlert() {
    $('#alerta').slideToggle();
}

//Contador inicia em 5


function contador(i) {
    var myVar = setInterval(function(){ myTimer() }, 1000);

    function myTimer() {
        

         $( "#contador" ).text( "Alerta  aparecendo em " +  i);
        
        if(i <= 3){
            $('#contador').css("color", "#f0f40c");
        }

        if (i == 0){
            clearInterval(myVar);
            $('#contador').hide();
            toggleAlert();
        }
         i= i -1;
        
    }
}
function contadorNovo(i) {
    var myVar = setInterval(function(){ myTimer() }, 1000);

    function myTimer() {
        

        
        if (i == 0){
            clearInterval(myVar);
            $('#alerta').hide();
        }
         i= i -1;
        
    }
}


   

