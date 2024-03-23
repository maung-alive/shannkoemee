import React, { useContext, useState } from 'react'
import cardsPNG from '../assets/cards.png'
import { GameContext } from '../contexts/GameContext'

function Welcome({ setCurrentTab }) {
    const { username, setUsername, startGame } = useContext(GameContext)
    const [ errMsg, setErrMsg ] = useState("")

    const enter = () => {
        if(username.length < 3){ setErrMsg("အမည်သည် အနည်းဆုံး သုံးလုံးရှိရပါမည်") }
        else {
            startGame()
            setCurrentTab(prev => prev + 1)
        }
    }

    return (
        <section className="relative w-screen h-screen overflow-hidden bg-gray-700">
            <img src={cardsPNG} alt="cards" className="fixed -bottom-32 -left-32 rotate-45 opacity-80 w-[500px]" />
            <img src={cardsPNG} alt="cards" className="fixed -top-32 -right-32 -rotate-[135deg] opacity-80 w-[500px]" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center w-full max-w-[400px]">
                <p className="text-2xl font-semibold text-white text-center">Pick an username for you</p>
                <p className="my-4 text-center text-pink-600 font-medium">{errMsg}</p>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full mt-2 text-lg px-2 py-4 outline-none border-0 rounded-lg text-white bg-slate-800 font-mono"
                />

                <button
                    onClick={enter}
                    style={{
                        borderRadius: "43% 32% 52% 34% / 10%"
                    }}
                    className="hover:w-60 duration-200 active:w-20 overflow-hidden w-52 py-2 mt-5 mx-auto text-base font-medium font-mono tracking-wider text-white border-0 bg-red-900"
                >
                    START
                </button>
            </div>
        </section>
    )
}

export default Welcome