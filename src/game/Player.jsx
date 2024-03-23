function Player(username) {
	let name = username
	let cards = []
	let total = 0
	let power = false
	let winner = false

	const add = () => {
		cards.map(card => {
			total += card.value
		})
	}
	const checkNull = () => {
		while(total > 10){
			total -= 10
		}
	}
	const checkPower = () => {
		let color = ''
		cards.map(card => {
			card.color == color ? power = true : power = false
			color = card.color
		})
	}

	const receive = (card) => {
		cards.push(card)
		add()
		checkNull()
		checkPower()
	}

	return {
		name,
		cards,
		total,
		power,
		winner,
		receive
	}
}

export default Player