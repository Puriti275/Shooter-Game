import Phaser from "phaser"

export default class MainScene extends Phaser.scene {
    constructor() {
        super("MainScene")
    }

    preload() {}

    create() {
        this.add.text(400, 300, "Phaser + Next.js", {
            fontSize: "32px",
            color: "#ffffff"
        }).setOrigin(0.5)
    }

    update() {}
}