const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
};

const addCards = (cards) => {
    let total = 0
    cards.map(card => {
        let val = card.value > 10 ? 10 : card.value
        total += val
    })
    while(total>=10){
        total -= 10
    }
    return total
}

export { shuffle, addCards }