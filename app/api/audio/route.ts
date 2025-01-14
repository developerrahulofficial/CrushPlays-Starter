import { songs } from "@/demos/MusicWidget/songs"
import { NextRequest } from "next/server"
import { promises as fs } from "fs"
import path from "path"

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    const song = songs.find((song) => song.id === id)

    if (!song) {
        return new Response("Not found", { status: 404 })
    }

    try {
        const audioPath = path.join(
            process.cwd(),
            "public",
            "assets",
            "demos",
            "music-widget",
            "audio",
            `${id}.mp3`,
        )
        const audioFile = await fs.readFile(audioPath)

        return new Response(audioFile, {
            headers: {
                "Content-Type": "audio/mpeg",
                "Content-Length": audioFile.length.toString(),
            },
        })
    } catch (error) {
        console.error("Error reading audio file:", error)
        return new Response("Internal Server Error", { status: 500 })
    }
}
