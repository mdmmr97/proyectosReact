import { useState } from "react";

const usePost = (ValorInicial) => {

    const [valorContador, setContador] = useState(+ValorInicial);

    function incrementarContador() {
        setContador(valorContador + 1);
    }
      function decrementarContador() {
          setContador(valorContador - 1);
    }
      function resetearContador() {
          setContador(+ValorInicial);
    }
    return {valorContador, incrementarContador, decrementarContador, resetearContador};

}
export default usePost;