import React, { useContext } from 'react'
import cardsPNG from '../assets/cards.png'
import cardBackPNG from '../assets/back.png'
import { GameContext } from '../contexts/GameContext'

function Game() {
    const { username, game, take, gameShot, startGame } = useContext(GameContext)
    const positions = [
        "top-5 left-5",
        "top-5 right-5",
        "top-1/2 left-5 -translate-y-1/2",
        "top-1/2 right-5 -translate-y-1/2"
    ]

    const winOrLose = player => {
        if(game.finish){
            return player.winner ? "drop-shadow-2xl" : "opacity-80 brightness-50"
        }
        return ""
    }

    return (
        <section className="relative w-screen h-screen overflow-hidden bg-slate-800">
            <img src={cardsPNG} alt="cards" className="fixed -bottom-32 -left-32 rotate-45 opacity-80 w-[500px]" />
            <img src={cardsPNG} alt="cards" className="fixed -top-32 -right-32 -rotate-[135deg] opacity-80 w-[500px]" />

            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[97%] h-[97%] max-w-[1000px] max-h-[700px] bg-slate-500/10 rounded-xl">
                {
                    game.finish ?
                    <button
                        onClick={startGame}
                        className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-black text-2xl font-medium py-2 px-10 bg-slate-200/50 rounded-xl"
                    >ပြန်စ</button>
                    :
                    <button
                        onClick={gameShot}
                        className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-black text-2xl font-medium py-2 px-10 bg-slate-200/50 rounded-xl"
                    >တော်ပြီ</button>
                }
                <button
                    disabled={game.finish}
                    onClick={take}
                    className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-black text-2xl font-medium py-2 px-10 bg-slate-200/50 rounded-xl"
                >ယူမယ်</button>
                <img src={cardBackPNG} alt="deck" className="w-28 absolute rounded-lg top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40" />
                
                {
                    game.players.map((i, index) => (
                        i.name != username && 
                        <div key={index} className={`w-fit h-40 absolute ${positions[index]} flex ${winOrLose(i)}`}>
                            {
                                i.cards.map((i, idx) => (
                                    <img key={idx} src={game.finish ? i.img : cardBackPNG} alt="deck" className="h-full rounded-lg first:ml-0 -ml-[5rem]" />
                                ))
                            }
                            <span className="w-32 absolute -bottom-14 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-slate-900 px-4 py-0.5 rounded-md">
                                {i.name}
                            </span>
                        </div>
                    ))
                }

                {
                    game.players.map((i, index) => (
                        i.name == username && 
                        <div className={`w-fit h-40 absolute bottom-12 left-1/2 -translate-x-1/2 flex ${winOrLose(i)}`}>
                            {
                                i.cards.map((i, idx) => (
                                    <img key={idx} src={i.img} alt="deck" className="h-full rounded-lg first:ml-0 -ml-[5rem]" />
                                ))
                            }
                            <span className="block w-fit absolute -bottom-14 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-slate-900 px-4 py-0.5 rounded-md">
                                {i.name}
                            </span>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default Game