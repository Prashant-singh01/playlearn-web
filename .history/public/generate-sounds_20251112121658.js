import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import "dotenv/config";

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_API_KEY) {
    console.error("❌ Missing ELEVENLABS_API_KEY in .env file");
    process.exit(1);
}

const outputDir = path.join(process.cwd(), "public", "sounds");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const voiceId = "Rachel"; // Default ElevenLabs voice

const letters = [
    ["A", "Apple"],
    ["B", "Ball"],
    ["C", "Cat"],
    ["D", "Dog"],
    ["E", "Elephant"],
    ["F", "Fish"],
    ["G", "Goat"],
    ["H", "Hat"],
    ["I", "Ice Cream"],
    ["J", "Juice"],
    ["K", "Kite"],
    ["L", "Lion"],
    ["M", "Moon"],
    ["N", "Nest"],
    ["O", "Orange"],
    ["P", "Parrot"],
    ["Q", "Queen"],
    ["R", "Rabbit"],
    ["S", "Sun"],
    ["T", "Tree"],
    ["U", "Umbrella"],
    ["V", "Van"],
    ["W", "Watch"],
    ["X", "Xylophone"],
    ["Y", "Yak"],
    ["Z", "Zebra"]
];

async function generateSound(letter, word) {
    const text = `${letter} for ${word}`;
    console.log(`🎙️ Generating: ${text}`);

    const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
        {
            method: "POST",
            headers: {
                "xi-api-key": ELEVENLABS_API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text,
                model_id: "eleven_multilingual_v2",
                voice_settings: { stability: 0.4, similarity_boost: 0.8 },
            }),
        }
    );

    if (!response.ok) {
        console.error(`❌ Failed: ${letter} (${response.statusText})`);
        return;
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    const filePath = path.join(outputDir, `${letter}.mp3`);
    fs.writeFileSync(filePath, buffer);
    console.log(`✅ Saved: ${filePath}`);
}

(async () => {
    for (const [letter, word] of letters) {
        await generateSound(letter, word);
    }
    console.log("\n🎉 All alphabet sounds generated successfully!");
})();
