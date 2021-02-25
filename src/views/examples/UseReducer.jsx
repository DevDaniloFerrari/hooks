import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload } }
        case 'numberMultiply7':
            return { ...state, number: state.number * 7 }
        case 'numberDivide25':
            return { ...state, number: state.number / 25 }
        case 'numberRound':
            return { ...state, number: parseInt(state.number) }
        case 'addNumber':
            return { ...state, number: +state.number + +action.payload }
        default:
            return state
    }
}

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
                    <button className="btn" onClick={() => dispatch({ type: 'login', payload: 'Ester' })}>Login</button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberAdd2' })}>+2</button>
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
