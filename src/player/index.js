import Mario from 'phaser-mario'

export default opts => {
	const player = new Mario({
		game: opts.game,
		key: 'mushroom',
		controls: true
	})

	return player
}
