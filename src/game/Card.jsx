const cardPNGs = [
    {
        clubs: "ace_of_clubs.png",
        diamonds: "ace_of_diamonds.png",
        spades: "ace_of_spades.png",
        heart: "ace_of_hearts.png",    
    },
    {        
        clubs: "2_of_clubs.png",
        spades: "2_of_spades.png",
        diamonds: "2_of_diamonds.png",
        heart: "2_of_hearts.png",
    },
    {
        clubs: "3_of_clubs.png",
        spades: "3_of_spades.png",
        diamonds: "3_of_diamonds.png",
        heart: "3_of_hearts.png",
    },
    {
        clubs: "4_of_clubs.png",
        spades: "4_of_spades.png",
        diamonds: "4_of_diamonds.png",
        heart: "4_of_hearts.png",
    },
    {
        clubs: "5_of_clubs.png",
        spades: "5_of_spades.png",
        diamonds: "5_of_diamonds.png",
        heart: "5_of_hearts.png",
    },
    {
        clubs: "6_of_clubs.png",
        spades: "6_of_spades.png",
        diamonds: "6_of_diamonds.png",
        heart: "6_of_hearts.png",
    },
    {
        clubs: "7_of_clubs.png",
        spades: "7_of_spades.png",
        diamonds: "7_of_diamonds.png",
        heart: "7_of_hearts.png",
    },
    {
        clubs: "8_of_clubs.png",
        spades: "8_of_spades.png",
        diamonds: "8_of_diamonds.png",
        heart: "8_of_hearts.png",
    },
    {
        clubs: "9_of_clubs.png",
        spades: "9_of_spades.png",
        diamonds: "9_of_diamonds.png",
        heart: "9_of_hearts.png",
    },
    {
        clubs: "10_of_clubs.png",
        spades: "10_of_spades.png",
        diamonds: "10_of_diamonds.png",
        heart: "10_of_hearts.png",
    },
    {
        clubs: "jack_of_clubs.png",
        spades: "jack_of_spades.png",
        diamonds: "jack_of_diamonds.png",
        heart: "jack_of_hearts.png",
    },
    {
        clubs: "queen_of_clubs.png",
        spades: "queen_of_spades.png",
        diamonds: "queen_of_diamonds.png",
        heart: "queen_of_hearts.png",
    },
    {
        clubs: "king_of_clubs.png",
        spades: "king_of_spades.png",
        diamonds: "king_of_diamonds.png",
        heart: "king_of_hearts.png",
    }
]

function value_to_number(value) {
    switch(value) {
        case 1:
            return "Ace"
        case 11:
            return "Joker"
        case 12:
            return "Queen"
        case 13:
            return "King"
        default:
            return value
    }
}

function Card (value, color) {
    let number = value_to_number(value)

    return {
        value,
        color,
        number,
        img: `${window.location.href}/cards/${cardPNGs[value-1][color]}`
    }
}

export default Card