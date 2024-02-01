import React from 'react';
import "./index.css"
import  login_profile from "./assets/login_profile.png";
import techs from "./assets/techs.png";

function App() {
  return (
    <div className="App">
      <body className="bg-slate-200 font-poppins">
        <main className="w-full min-h-screen flex flex-col md:flex-row items-center
        justify-center mx-auto">

          <section className="w-full  flex flex-1 flex-col justify-center items-center p-4">

            <div className="w-full max-w-xl flex flex-col justify-center items-center gap-4">
            <img src={login_profile} alt="Image of login profile blue" className="w-36"/>
            <h1 className="text-4xl font-bold mb-7">Login</h1>
            <input type="text" 
            placeholder="Digite seu e-mail" 
            className ="w-full rounded-full p-3 outline-none bg-gray-50 focus:bg-white"/>

            <input type="password" 
            placeholder="********" 
            className ="w-full rounded-full p-3 outline-none bg-gray-50 focus:bg-white"/>
            
            <div className=" w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="font-medium"> Lembrar senha</label>
              </div>

              <a href="#" className="text-blue-700 hover:text-blue-500">Esqueceu a senha?</a>
            </div> 

            <button className="w-full bg-blue-600 p-2 rounded-lg text-lg text-white font-medium hover:bg-blue-500 duration-150">
              Acessar
            </button>
            <p>
              Não possui uma conta? 
              <a href="#" className="text-blue-700"> Criar conta</a>
            </p>
            </div>
          </section>
          {/* Lado Direito */}
          <section className="hidden md:flex w-full flex-1 flex-col items-center justify-center p-4 gap-8 h-screen bg-blue-600 ">
              <h1 className="text-gray-100 text-2xl text-center max-w-lg lg:text-4xl"> Domine as <strong>tecnologias mais buscadas</strong> pelo mercado</h1>
              <img src={techs} alt="Image about tecnologies" className="w-5/6 lg:w-full lg:max-w-md" />
          </section>
        </main>
      </body>
    </div>
  );
};

export default App;
