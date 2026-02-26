import Phaser from "phaser"
import MainScene from "./scenes/MainScene"

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroudnColor: "#1d1d1d",
    parent: "phaser-container",
    scene: [MainScene],
    physics: {
        default: "arcade",
        arcade: {debug: false}
    }
}

export default config