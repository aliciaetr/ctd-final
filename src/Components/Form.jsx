import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState('')

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName.length <= 5 || !emailRegex.test(email)) {
      setMessage('Por favor verifique su información nuevamente')
      return;
    }

    setMessage(`Gracias ${fullName}, te contactaremos cuanto antes vía mail`)
    console.log('Nombre:', fullName)
    console.log('Email:', email)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={fullName}
              placeholder="Nombre completo"
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>Enviar</button>

            {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Form;
