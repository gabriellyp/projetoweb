import React from "react"
import "./styles.css"
import Imagemlogin from "./src/imagens/Imagemlogin.png"

export function Login(){
    return(
    <div className="informacoes">
        <div className="imagem-lateral">
               <img className="imagem" src={Imagemlogin} alt="logo lua de prata"/>
        </div>
            <div className="formulario-login">
                <form action="#">
                    <div className="titulo">
                        <h2>Login</h2>
                        <p>Realize seu login para ter acesso ao sistema.</p>
                    </div>
                    <div className="form-grupo">
                        <label for="senha">Login</label>
                        <input type="text" placeholder="Insira seu login" id="login" name="login" required/>

                        <label for="senha">Senha</label>
                        <input type="password" placeholder="Insira sua senha" id="login" name="senha" required/>
                    </div>
                    <div className="btn-logar">
                        <button type="submit">Entrar</button>
                    </div>
                    <div className="titulo-esquecer">
                        <p>Não possui cadastro? <a href="#">Cadastre-se.</a></p>
                    </div>
                </form>
        </div>
    </div>
    )
}