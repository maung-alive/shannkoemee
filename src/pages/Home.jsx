import React, { useState } from 'react'
import fireFlamesGIF from '../assets/fire-flame.gif'
import cardsPNG from '../assets/cards.png'
import usePreload from '../hooks/usePreload'

function Home({ setCurrentTab }) {
    const [ progress, setProgress ] = useState(0)
    const [ loaded, setLoaded ] = useState(false)
    const images = ['10_of_clubs.png', '10_of_diamonds.png', '10_of_hearts.png', '10_of_spades.png', '2_of_clubs.png', '2_of_diamonds.png', '2_of_hearts.png', '2_of_spades.png', '3_of_clubs.png', '3_of_diamonds.png', '3_of_hearts.png', '3_of_spades.png', '4_of_clubs.png', '4_of_diamonds.png', '4_of_hearts.png', '4_of_spades.png', '5_of_clubs.png', '5_of_diamonds.png', '5_of_hearts.png', '5_of_spades.png', '6_of_clubs.png', '6_of_diamonds.png', '6_of_hearts.png', '6_of_spades.png', '7_of_clubs.png', '7_of_diamonds.png', '7_of_hearts.png', '7_of_spades.png', '8_of_clubs.png', '8_of_diamonds.png', '8_of_hearts.png', '8_of_spades.png', '9_of_clubs.png', '9_of_diamonds.png', '9_of_hearts.png', '9_of_spades.png', 'ace_of_clubs.png', 'ace_of_diamonds.png', 'ace_of_hearts.png', 'ace_of_spades.png', 'jack_of_clubs.png', 'jack_of_diamonds.png', 'jack_of_hearts.png', 'jack_of_spades.png', 'king_of_clubs.png', 'king_of_diamonds.png', 'king_of_hearts.png', 'king_of_spades.png', 'queen_of_clubs.png', 'queen_of_diamonds.png', 'queen_of_hearts.png', 'queen_of_spades.png']

    const startGame = () => {
        let done = 0
        images.map(src => {
            fetch(window.location.href + '/cards/' + src)
            .then(resp => resp.blob())
            .then(blob => {
                done += 1
                setProgress(Math.floor((done/images.length)*100))
                if(done == images.length) { setCurrentTab(prev => prev + 1) }
            })
        })
    }

    return (
        <section className="relative w-screen h-screen overflow-hidden bg-slate-800">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center">
                <img src={cardsPNG} alt="Cards" className="w-72 m-auto pb-10" />
                <img src={fireFlamesGIF} alt="Fire" className="w-24 m-auto absolute top-20 left-1/2 -translate-x-1/2" />
                <p className="text-4xl font-semibold text-center text-white">ရှမ်းကိုးမီး</p>
                <button
                    className="w-40 mx-auto bg-red-900 text-xl text-white font-medium py-2 mt-12"
                    style={{ borderRadius: "43% 32% 52% 34% / 10%" }}
                    onClick={startGame}
                >
                    ကစားမယ်
                </button>
                <div className="relative mt-5 bg-slate-900 overflow-hidden rounded-2xl flex h-10 w-80">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans">{progress}%</span>
                    <div
                        className="h-full bg-slate-100"
                        style={{
                            width: `${progress}%`
                        }}
                    ></div>
                </div>
            </div>
        </section>
    )
}

export default Home