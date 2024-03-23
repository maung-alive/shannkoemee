import Card from "./Card"

class Deck {
    constructor () {
        this.deck = []
        const colors = ['heart', 'diamonds', 'spades', 'clubs']
        const numbers = [...Array(14).keys()]
        colors.map(color => {
            numbers.map((num) => {
                let card = new Card(num+1, color)
                this.deck.push(card)
            })
        })
    }
}

export default Deck