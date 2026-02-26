import dynamic from "next/dynamic"

const PhaserGame = dynamic(
    () => import("./PhaserGame"), 
    {ssr: false}
)

export default function Home() {
    return (
        <main>
            <h1>Next.js + Phaser</h1>
            <PhaserGame/>
        </main>
    )
}