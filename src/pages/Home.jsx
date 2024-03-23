import React from 'react'
import fireFlamesGIF from '../assets/fire-flame.gif'
import cardsPNG from '../assets/cards.png'

function Home({ setCurrentTab }) {
    return (
        <section className="relative w-screen h-screen overflow-hidden bg-slate-800">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center">
                <img src={cardsPNG} alt="Cards" className="w-72 m-auto pb-10" />
                <img src={fireFlamesGIF} alt="Fire" className="w-24 m-auto absolute top-20 left-1/2 -translate-x-1/2" />
                <p className="text-4xl font-semibold text-center text-white">ရှမ်းကိုးမီး</p>
                <button
                    className="w-40 mx-auto bg-red-900 text-xl text-white font-medium py-2 mt-12"
                    style={{ borderRadius: "43% 32% 52% 34% / 10%" }}
                    onClick={() => setCurrentTab(1)}
                >
                    ကစားမယ်
                </button>
                <div className="relative mt-5 bg-slate-900 overflow-hidden rounded-2xl flex h-10 w-80">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans">0%</span>
                    <div className="h-full w-1/2 bg-slate-100"></div>
                </div>
            </div>
        </section>
    )
}

export default Home