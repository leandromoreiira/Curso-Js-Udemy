function Tiposdedados(dado)
{
      
      if(typeof(dado) === "string")
      {
            String()
      }else if (typeof(dado) === "number")
      {
            Number()
      }else if (typeof(dado) === "boolean")
      {
            Boolean()
      };


      
      function String(dado)
      {
            console.log(`É uma string`)
      };
      function Number(dado)
      {
            console.log(`É um number`)
      };
      function Boolean(dado)
      {
            console.log(`É uma Bollean`)
      }
};
function Tiposdedados2(dado)
{
      
      if(typeof(dado) === "string")
      {
            console.log(`É uma string`)
      }else if (typeof(dado) === "number")
      {
            console.log(`É um number`)
      }else if (typeof(dado) === "boolean")
      {
            console.log(`É uma Bollean`)
      };
}



console.log(Tiposdedados(true))
console.log(Tiposdedados2(2))
