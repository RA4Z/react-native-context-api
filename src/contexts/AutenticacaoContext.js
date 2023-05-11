import { createContext, useState } from 'react'

export const AutenticacaoContext = createContext({})

export function AutenticacaoProvider( {children} ) {
    const [usuario, setUsuario] = useState({})

    function login(email, senha) {
        if(email == 'Robert@email.com' && senha == 123){
            setUsuario({
                nome: 'Robert',
                email: email,
                endereco: 'Germano Muller',
                telefone: '(47) 4002-8922',
            })
            return 'ok'
        } else {
            return 'Email ou senha incorretos'
        }
    }

  return (
    <AutenticacaoContext.Provider value={{
        usuario,
        login
    }}>
      {children}
    </AutenticacaoContext.Provider>
  )
}