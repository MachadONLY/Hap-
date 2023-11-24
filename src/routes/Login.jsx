import "../scss/Login.scss";
import { useState} from "react";
import partner from "../assets/partner.svg";


function Login() {

 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    
    const handleChange = async(event) => {
      const { name, value } = event.target;
      if (name === 'username') {
        setUsername(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    };



  const handleSubmit = async (event) => {
    event.preventDefault();

    let user;

    try {
      const response = await fetch("http://localhost:5000/users");
      if (response.ok) {
        const users = await response.json();
       
        for (let i = 0; i < users.length; i++) {
          const usuario = users[i];

    
          if (usuario.username == username && usuario.password == password) {
            user = usuario;
            break;
          }
        }
      }
      if (user) {

        alert("Login realizado com SUCESSO!!");
        

        const token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        sessionStorage.setItem("token-user", token);
        sessionStorage.setItem("user-object", JSON.stringify(user));

        window.location = "/solucao";
      } else {

        alert("Usuário e ou senha incorretos!");
          
          setUsername("");
          setPassword("");

          window.location = "/";
        
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="login-container">
      <form className="form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>LOGIN</legend>
          <label>
            USERNAME
            <input type="text" name="username" value={username} onChange={handleChange} required placeholder="Digite seu Nome..."/>
          </label>
          <label>
            SENHA
            <input type="password" name="password" value={password} onChange={handleChange} required placeholder="Digite sua Senha..."/>
          </label>
          <button type="submit">SIGN IN</button>
        </fieldset>
        <div className="partner">
          <img src={partner} alt="icone das empresas" />
        </div>
      </form>
    </section>
  );
}

  

export default Login;
