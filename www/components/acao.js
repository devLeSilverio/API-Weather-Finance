$(document).on("click","#buscar",function(){
  $.ajax({
    type:"get",
    dataType:"json",
    url:"https://api.hgbrasil.com/weather?format=json&key=ab0481a0&city_name="+$("#city").val(),
    
    success:function(data){
          var conteudo2;
          conteudo2 = "<p><strong>Temperatura:</strong>"+data.results.temp+"ºC</p>";
          conteudo2 += "<p><strong>Data:</strong>"+data.results.date+"</p>";
          conteudo2 += "<p><strong>Horário:</strong>"+data.results.time+"</p>";
          conteudo2 += "<p><strong>Descrição:</strong>"+data.results.description+"</p>";
          if(data.results.temp > 20){
            $("#dados").html('<center><img src="lib/img/clima.png" style="width:100px"></center>' + conteudo2); 
          }
          else{
            $("#dados").html('<center><img src="lib/img/frio.png" style="width:100px"></center>' + conteudo2);  
          }
    },
    error: function(){
      alert("Error");
    }
  })
});


$(document).on("click","#buscar",function(){
      $.ajax({
        type:"get",
        dataType:"json",
        url:"https://api.hgbrasil.com/finance?key=ab0481a0",
    success:function(data){

    var teste = $('#sel').val();
    var conteudo;
  
    if(teste==1){
          conteudo += "<p><strong>Moeda base:</strong>"+data.results.currencies.source+"(Real)</p>";
          conteudo += "<p><strong>Moeda Escolhida:</strong>"+data.results.currencies.USD.name+"</p>";
          conteudo += "<p><strong>Valor em R$:</strong>"+data.results.currencies.USD.buy+"</p>";
            $("#dados2").html('<center><img src="lib/img/dollar.jpg" style="width:100px"></center>' + conteudo); 

    }else if(teste==2){
        conteudo += "<p><strong>Moeda base:</strong>"+data.results.currencies.source+"</p>";
        conteudo += "<p><strong>Moeda Escolhida:</strong>"+data.results.currencies.EUR.name+"</p>";
        conteudo += "<p><strong>Valor em R$:</strong>"+data.results.currencies.EUR.buy+"</p>";
        $("#dados2").html('<center><img src="lib/img/euro.png" style="width:100px"></center>' + conteudo); 
    }else if(teste==3){
      conteudo += "<p><strong>Moeda base:</strong>"+data.results.currencies.source+"</p>";
      conteudo += "<p><strong>Moeda Escolhida:</strong>"+data.results.currencies.GBP.name+"(Libra esterlina)</p>";
      conteudo += "<p><strong>Valor em R$:</strong>"+data.results.currencies.GBP.buy+"</p>";
       $("#dados2").html('<center><img src="lib/img/libra.png" style="width:100px"></center>' + conteudo); 
    }else if(teste==4){
      conteudo += "<p><strong>Moeda base:</strong>"+data.results.currencies.source+"</p>";
      conteudo += "<p><strong>Moeda Escolhida:</strong>"+data.results.currencies.ARS.name+"</p>";
      conteudo += "<p><strong>Valor em R$:</strong>"+data.results.currencies.ARS.buy+"</p>";
        $("#dados2").html('<center><img src="lib/img/peso.png" style="width:100px"></center>' + conteudo); 
    }else if(teste==5){
      conteudo += "<p><stong>Moeda base:</strong>"+data.results.currencies.source+"</p>";
      conteudo += "<p><strong>Moeda Escolhida:</strong>"+data.results.currencies.BTC.name+"</p>";
      conteudo += "<p><strong>Valor em R$:</strong>"+data.results.currencies.BTC.buy+"</p>";
      $("#dados2").html('<center><img src="lib/img/bit.png" style="width:100px"></center>' + conteudo); 
    }   
    },
    error: function(){
      alert("Error");
    }
  })
});
