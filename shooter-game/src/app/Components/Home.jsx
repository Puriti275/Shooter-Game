"use client"

import dynamic from "next/dynamic"
import PhaserGame from "../../client/Components/PhaserGame"

const ClientPhaserGame = dynamic(
    () => import("../../client/Components/PhaserGame"), 
    {ssr: false}
)

export default function Home() {
    return (
        <main>
            <h1>Next.js + Phaser</h1>
            <ClientPhaserGame/>
        </main>
    );
}