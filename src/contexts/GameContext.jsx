import React, { createContext, useState } from 'react'
import Card from '../game/Card'
import { addCards, shuffle } from '../game/Table'
import Player from '../game/Player'

const GameContext = createContext()

function GameContextProvider({ children }) {
    const [ username, setUsername ] = useState(localStorage.getItem("username"))
    const [ game, setGame ] = useState({})

    const updateUsername = (value) => {
        setUsername(value)
        localStorage.setItem("username", value)
    }

    const startGame = () => {
        // cleaning data
        setGame(null)

        // define player
        const player = Player(username)

        // creating deck
        const deck = []
        const colors = ['heart', 'diamonds', 'spades', 'clubs']
        const numbers = [...Array(13).keys()]
        colors.map(color => {
            numbers.map((num) => {
                let card = Card(num+1, color)
                deck.push(card)
            })
        })
        
        // adding players
        const players = []
        const NOs = [...Array(4).keys()]
        NOs.map(no => {
            let player = Player(`Computer ${no}`)
            players.push(player)
        })
        players.push(player)

        // starting
        let ndeck = shuffle(deck)
        let temp = [...Array(2).keys()]
        temp.map(() => {
            players.map(player => {
                if(player.cards.length < 2){
                    player.receive(deck.pop())
                }
            })
        })

        // saving to state
        setGame({
            finish: false,
            deck: ndeck,
            players: players
        })
    }

    // take one more card
    const take = () => {
        let player = game.players.filter(i => i.name == username)[0]
        if(player.cards.length < 3) {
            player.receive(game.deck.pop())
             
            setGame({
                finish: false,
                deck: game.deck,
                players: game.players
            })
        }
    }

    const gameShot = () => {
        let oldPlayer = Player("")
        let highest = addCards(oldPlayer.cards)
        game.players.map(player => {
            let total = addCards(player.cards)
            if(total > highest) {
                oldPlayer.winner = false
                player.winner = true
                oldPlayer = player
                highest = total
            }
        })             
        setGame({
            finish: true,
            deck: game.deck,
            players: game.players
        })
    }

    const contextValue = {
        username,
        game,
        startGame,
        setUsername: updateUsername,
        take,
        gameShot
    }
    return (
        <GameContext.Provider value={contextValue}>
            {children}
        </GameContext.Provider>
    )
}

export { GameContext, GameContextProvider }