import Phaser from 'phaser'
import Player from '../player'

export default class extends Phaser.State {
	init () {}
	preload () {}

	create () {
		this.game.physics.startSystem(Phaser.Physics.ARCADE)
		this.game.physics.arcade.gravity.y = 500
		this.game.add.existing(new Player({ game: this.game }))
	}

	render () {

	}
}
