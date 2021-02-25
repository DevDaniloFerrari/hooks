import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'
import { login, numberAdd2 } from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [number, setNumber] = useState(initialState.number)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem Usuário</span>
                }

                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => login(dispatch, 'Danilo Ferrari')}>Login</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberMultiply7' })}>*7</button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberDivide25' })}>/25</button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberRound' })}>round</button>

                    <input type="number" className="input" value={number} onChange={(e) => setNumber(e.target.value)} />
                    <button className="btn" onClick={() => dispatch({ type: 'addNumber', payload: number })}>add</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
