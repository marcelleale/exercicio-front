   
   /* 
    var texto =
    document.write(variavel)
    alert()
    console.log
*/

document.addEventListener("DOMContentLoaded", () => {
    // alert("oi");

});

function mensagem() {

    //Nome digitado
    var nome_digitado = document.getElementById('nome').value;
    console.log(nome_digitado);

   //ativação do botão para capturar o elemento checado no radio button do html
    var teste = document.querySelector('input[name=sex]:checked').value;

    //gambiarra
   if(teste == 'on'){
    teste = "menino";
   }

   console.log(teste)

   document.getElementById('paragrafo').innerHTML = "Olá, " + nome_digitado + '. Você é ' + teste + ".";

}

//------------------------------------------------------------------------- CORES FAVORITAS -------------------------------------------------------------------------------------

   function cores_preferidas(cor_fundo) {

    var check_1 = document.querySelector('#chk_vermelho:checked');
        document.getElementById("vermelho").style.background = "white";
            
            if(check_1 != null) { console.log("verdadeiro");
                document.getElementById("vermelho").style.background = cor_fundo;
            } 
        
        console.log(document.querySelector('#chk_vermelho:checked'));
    
   }

    function cores_preferidas_1(cor_fundo_1) {

        
        var check_2 = document.querySelector('#chk_azul:checked');
        document.getElementById("azul").style.background = "white";
            
            if(check_2 != null) { 
                document.getElementById("azul").style.background = cor_fundo_1;
            } 

    }

    function cores_preferidas_2(cor_fundo_2) {

        
        var check_2_1 = document.querySelector('#chk_amarelo:checked');
        document.getElementById("amarelo").style.background = "white";
            
            if(check_2_1 != null) { 
            document.getElementById("amarelo").style.background = cor_fundo_2;
            } 

    }

    function cores_preferidas_3(cor_fundo_3) {

       
        var check_3 = document.querySelector('#chk_verde:checked');
        document.getElementById("verde").style.background = "white";
            
            if(check_3 != null) { 
                document.getElementById("verde").style.background = cor_fundo_3;
            } 

        
    }

    function cores_preferidas_4(cor_fundo_4) {
        
        var check_4 = document.querySelector('#chk_branco:checked');
        document.getElementById("branco").style.background = "white";
            
            if(check_4 != null) { 
                document.getElementById("branco").style.background = cor_fundo_4;
            } 
       

    }

    function cores_preferidas_5(cor_fundo_5) {

        var check_5 = document.querySelector('#chk_preto:checked');
        document.getElementById("preto").style.background = "white";
            
            if(check_5 != null) { 
                document.getElementById("preto").style.background = cor_fundo_5;
            } 

    }


//------------------------------------------------------------------------- CALCULO DA IDADE --------------------------------------------------------------------------------------   

    function calc_idade() {

       var ano_atual = document.querySelector("input[id='data_atual']").value;
          console.log(ano_atual);

       var ano_nasc = document.querySelector("input[id='data_nasc']").value;
         console.log(ano_nasc);
        
        ano_atual = new Date()
               console.log(ano_atual.getDate());
               console.log(ano_atual.getMonth() + 1);
               console.log(ano_atual.getFullYear());

               dia_atual = (ano_atual.getDate());
               mes_atual = (ano_atual.getMonth() + 1);
               a_atual = (ano_atual.getFullYear());
        

        ano_nasc = new Date(ano_nasc)
           console.log(ano_nasc.getDate());
           console.log(ano_nasc.getMonth() + 1);
           console.log(ano_nasc.getFullYear());

                dia_nasc = (ano_nasc.getDate());
                mes_nasc = (ano_nasc.getMonth() + 1);
                a_nasc = (ano_nasc.getFullYear());

        var idade = ano_atual.getFullYear() - ano_nasc.getFullYear();

            if( (mes_atual < mes_nasc) || mes_atual == mes_nasc && dia_atual < dia_nasc) {

                idade = idade - 1
            }

            document.getElementById('resultado_idade').innerHTML = "Você tem " + idade + " anos.";



            console.log(idade)
    }


    //------------------------------------------------------------------------------ BOTÃO FINALIZAR -----------------------------------------------------------------------------------

        function botao_finalizar() {

            var select = document.getElementById("msg_despedida");
            console.log(select);

            var opcaotext = select.options[select.selectedIndex].text;

            console.log(opcaotext);

            alert(opcaotext);

            
        }

         
//--------------------------------------------------------------- | tentativas sem êxito e mais complexas sem necessidade | ---------------------------------------------------------------

    // var sexo = Array()
    // sexo[0] = "Menina";
    // sexo[1] = "Menino";

    //  console.log(sexo);

    // var i;
    // var texto = "";

    // // if (sexo[0] == "Menina") {
    // //          document.getElementById('box_lilas').innerHTML = ('Olá, ' + nome_digitado + ' .Você é ' + sexo[0]);
    // // } else {
    // //     document.getElementById('box_lilas').innerHTML = ('Olá, ' + nome_digitado + '. Você é ' + sexo[1]);
    // // }
       
    // -----

    // for (i = 0; i < sexo.lenght; i++) {
    //     if(sexo[i].checked) {
    //         texto = sexo[i];
    //     }
    //     }

    //     console.log(texto);
        
        // document.getElementById('box_lilas').innerHTML = "Olá, " + nome_digitado + '. Você é ' + teste;
        // document.getElementById('Menino').value = document.getElementById('box_lilas').innerHTML = "Olá, " + nome_digitado + '. Você é ' + texto;

    //}

    // document.getElementById('Menina').value = document.getElementById('box_lilas').innerHTML = "Olá, " + nome_digitado + '. Você é ' + texto;
    // document.getElementById('Menino').value = document.getElementById('box_lilas').innerHTML = "Olá, " + nome_digitado + '. Você é ' + texto;
    
    





//}