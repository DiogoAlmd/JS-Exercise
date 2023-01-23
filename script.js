      // document.getElementById("Idparagrafo").innerHTML = "Bom dia!";
  
      var x=  document.getElementById("Idparagrafo")
      x.textContent = "Bom Dia !";
      x.style.backgroundColor= "tomato"
      

    function Verificar()
    {
            y=  document.getElementById("idNUM"); //pega o objeto 
            if ( parseInt(y.value) > 0)
            {
                window.alert("Número positivo");
                y.style.backgroundColor ="green";
                document.getElementById("Idparagrafo").textContent = "Número Positivo " +y.value; 
            }
            else if (Number(y.value)< 0)
            {
                window.alert("Número negativo");
                y.style.color ="red";
                document.getElementById("Idparagrafo").textContent = "Número Negativo " +y.value; 
            }
    }

    function Validar()
    {
        let num=   Number(document.getElementById("idNUM").value);
        if (num == 0 )
        {
            window.alert("Número Nulo "+num);
            console.log("Número nulo "+num);
            document.getElementById("Idparagrafo").textContent = "Número nulo "+num
        }
    }
    