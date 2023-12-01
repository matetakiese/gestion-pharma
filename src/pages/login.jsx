import {useNavigate} from "react-router-dom";

function Login() {

   const navigate = useNavigate();
   const handleClick = () => {
       navigate('/home');
   }
   const hookClick = () => {
    navigate('/AllProduct');
   }

   return (
       <>
           <h1>Login Page</h1>

           <button onClick={handleClick}>
               Connexion
           </button>
           <div>
            <button onClick={hookClick}>Admin</button>
           </div>
       </>
   );
}

export default Login;
