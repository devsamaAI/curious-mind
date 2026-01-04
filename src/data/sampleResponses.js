// Sample AI responses with explanations, examples, and exercises
export const sampleResponses = {
    "why is the sky blue": {
        explanation: `The sky appears blue because of a phenomenon called **Rayleigh scattering**. When sunlight enters Earth's atmosphere, it collides with gas molecules. 

Sunlight contains all colors of the rainbow, but blue light has a shorter wavelength than other colors. These short waves get scattered in all directions much more than other colors when they hit tiny molecules in the air.

So when you look up, you're seeing blue light that has bounced around the atmosphere and reached your eyes from all directions!`,
        example: `Imagine you're in a ball pit filled with balls of different sizes. If you throw a handful of marbles through them:

🔵 **Small marbles (blue light)** bounce off everything and scatter everywhere
🔴 **Large marbles (red light)** mostly pass straight through without bouncing much

The sky is like that ball pit — blue light bounces around everywhere, making the whole sky look blue! This is also why sunsets are orange and red — the light travels through more atmosphere, and by the time it reaches your eyes, most of the blue has scattered away.`,
        exercise: {
            question: "During sunset, the sky turns orange/red because:",
            options: [
                "The sun changes color",
                "Blue light scatters away as light travels through more atmosphere",
                "The atmosphere gets warmer",
                "Red light moves faster at sunset"
            ],
            correctIndex: 1,
            explanation: "Correct! At sunset, sunlight travels through more atmosphere to reach your eyes, so most blue light has already scattered away, leaving mainly red and orange light."
        }
    },

    "how does wifi work": {
        explanation: `WiFi is like an invisible messenger that carries information through the air using **radio waves** — the same type of waves used in regular radios, just at different frequencies.

Your WiFi router converts internet data into radio signals and broadcasts them. Your devices have small antennas that catch these signals and decode them back into data you can use — like loading this webpage!

The data travels in tiny **packets**, each containing a small piece of information plus an address (like your device's unique ID), so your router knows where to send the right data.`,
        example: `Think of WiFi like a pizza delivery service:

🏠 **Your router** = The pizza shop that prepares and sends out orders
📦 **Data packets** = Individual pizza boxes with addresses on them  
🛵 **Radio waves** = The delivery drivers zooming through the air
📱 **Your device** = Your house receiving the delivery

When you request a website, it's like ordering a pizza. The router breaks it into small boxes (packets), each delivery driver (radio wave) takes a box to your address (device), and your phone assembles them back into the complete meal (webpage)!`,
        exercise: {
            question: "What does your WiFi router do with internet data?",
            options: [
                "Stores all websites locally",
                "Converts data to radio waves and broadcasts them",
                "Sends data through invisible cables",
                "Creates new websites"
            ],
            correctIndex: 1,
            explanation: "Correct! Your router converts digital data into radio waves that travel through the air to your devices."
        }
    },

    "what is gravity": {
        explanation: `Gravity is the force that pulls objects with mass toward each other. Everything with mass creates gravity — you, your phone, the Earth, even a grain of sand!

The more mass something has, the stronger its gravity. That's why Earth (huge mass) pulls you down, but you don't feel your phone pulling you toward it (tiny mass).

Einstein showed that gravity actually bends the fabric of space itself — massive objects create curves in space, and other objects follow these curves, which we experience as the force of gravity.`,
        example: `Imagine space as a stretched rubber sheet (like a trampoline):

🌍 **Earth** = A heavy bowling ball placed on the sheet, creating a deep dip
🌙 **Moon** = A smaller ball rolling around the edge of Earth's dip
🍎 **Apple** = A tiny marble that rolls down toward the bowling ball

Without the bowling ball (Earth), the marble (apple) would just sit still. But because the bowling ball curves the sheet, the marble naturally rolls toward it. That's why apples fall down — they're rolling down the curve Earth creates in space!`,
        exercise: {
            question: "Why do heavier objects create more gravity?",
            options: [
                "They move faster",
                "They have more mass, which bends space more",
                "They are usually larger",
                "They contain more air"
            ],
            correctIndex: 1,
            explanation: "Correct! More mass means more bending of the fabric of space-time, which creates stronger gravitational pull."
        }
    },

    "how do computers think": {
        explanation: `Computers don't actually "think" like we do — they're incredibly fast calculators that follow instructions step by step!

At the core, computers only understand two things: **1s and 0s** (called binary). Everything you see on screen — images, videos, text — is stored as millions of 1s and 0s.

The computer's processor (CPU) is like a super-fast chef following a recipe. It reads instructions one by one and executes them billions of times per second. What looks like "thinking" is actually millions of simple yes/no decisions happening incredibly fast!`,
        example: `Imagine you're sorting a huge pile of books:

📚 **The computer way:** You can only ask yes/no questions:
- "Is this book red?" Yes/No
- "Does the title start with A?" Yes/No
- "Is it heavier than 1kg?" Yes/No

By asking billions of simple yes/no questions per second, you could sort books incredibly fast! That's exactly how computers work — they break complex problems into millions of tiny yes/no (1/0) decisions and solve them faster than we can blink.`,
        exercise: {
            question: "What is the basic 'language' computers understand?",
            options: [
                "English words",
                "Binary (1s and 0s)",
                "Mathematical equations",
                "Pictures"
            ],
            correctIndex: 1,
            explanation: "Correct! Computers fundamentally only understand binary — combinations of 1s and 0s. Everything else is built on top of this!"
        }
    },

    "why do we dream": {
        explanation: `Dreams happen during a phase of sleep called **REM (Rapid Eye Movement)**, when your brain is almost as active as when you're awake!

Scientists believe dreams serve several purposes:
- **Memory processing:** Your brain reviews and organizes the day's experiences
- **Emotional regulation:** Dreams help process feelings and fears in a safe space
- **Problem solving:** Your brain makes creative connections while you sleep

Dreams often feel strange because the logical part of your brain (prefrontal cortex) is less active during REM sleep, so anything goes!`,
        example: `Think of your brain during sleep like a librarian working overnight in a library:

📚 **All day**, new books (memories) pile up on your desk
🌙 **At night**, the librarian sorts through them:
  - Some go to permanent shelves (long-term memory)
  - Some get linked to similar books (making connections)
  - Some get tossed out (forgetting unimportant stuff)

Dreams are like glimpses of the librarian at work — you see random books flying around, pages mixing together, sometimes making weird combinations. That's why dreams can mix yesterday's lunch with your childhood pet!`,
        exercise: {
            question: "During which phase of sleep do most dreams occur?",
            options: [
                "Light sleep",
                "Deep sleep",
                "REM (Rapid Eye Movement) sleep",
                "When falling asleep"
            ],
            correctIndex: 2,
            explanation: "Correct! REM sleep is when your brain is most active during sleep and when most vivid dreams occur."
        }
    },

    "how do airplanes fly": {
        explanation: `Airplanes fly by using four forces working together:

1. **Lift** — Created by the wing shape. Air moves faster over the curved top, creating lower pressure above the wing and higher pressure below, pushing the plane up.

2. **Thrust** — Engines push the plane forward, making air flow over the wings.

3. **Weight** — Gravity pulling the plane down. Lift must overcome this!

4. **Drag** — Air resistance slowing the plane. Thrust must overcome this!

When thrust > drag and lift > weight, the plane moves forward and up!`,
        example: `Try this at home! 🖐️

Stick your hand out of a moving car window (carefully!):
- Hold it **flat** (palm down) — your hand stays level
- **Tilt your palm up slightly** — the air pushes your hand UP
- **Tilt down** — the air pushes your hand DOWN

That's exactly how airplane wings work! They're tilted slightly up (called "angle of attack"), and the air rushing past creates an upward force. The faster the plane goes, the more lift — just like your hand feels more push at higher speeds!`,
        exercise: {
            question: "What creates the 'lift' force that keeps planes in the air?",
            options: [
                "Hot air rising from the engines",
                "Difference in air pressure above and below the wings",
                "The plane is lighter than air",
                "Spinning propellers push air downward"
            ],
            correctIndex: 1,
            explanation: "Correct! The curved shape of wings creates lower pressure above and higher pressure below, generating lift!"
        }
    }
};

// Topic suggestions for the landing page
export const topicSuggestions = [
    {
        id: 1,
        question: "Why is the sky blue?",
        icon: "🌤️",
        category: "Science",
        key: "why is the sky blue"
    },
    {
        id: 2,
        question: "How does WiFi work?",
        icon: "📶",
        category: "Technology",
        key: "how does wifi work"
    },
    {
        id: 3,
        question: "What is gravity?",
        icon: "🍎",
        category: "Physics",
        key: "what is gravity"
    },
    {
        id: 4,
        question: "How do computers think?",
        icon: "💻",
        category: "Technology",
        key: "how do computers think"
    },
    {
        id: 5,
        question: "Why do we dream?",
        icon: "💭",
        category: "Biology",
        key: "why do we dream"
    },
    {
        id: 6,
        question: "How do airplanes fly?",
        icon: "✈️",
        category: "Physics",
        key: "how do airplanes fly"
    }
];

// Generate a default response for unknown questions
export const generateDefaultResponse = (question) => ({
    explanation: `That's a great question about "${question}"! 

This is a demo version of CuriousMind. In a full implementation, this would connect to an AI service like OpenAI or Gemini to provide a thoughtful, simple explanation.

For now, try clicking one of the suggested topic cards above to see a full example with explanations, real-world examples, and exercises!`,
    example: `Imagine explaining this to a curious 10-year-old — you'd want to use everyday objects and situations they already understand.

For example, if explaining how a car engine works, you might compare it to:
🚗 "It's like eating food for energy — the car 'eats' gasoline and uses that energy to spin the wheels!"`,
    exercise: {
        question: "What's the best way to learn something new?",
        options: [
            "Memorize definitions",
            "Relate it to things you already know",
            "Read it once quickly",
            "Skip the examples"
        ],
        correctIndex: 1,
        explanation: "Relating new concepts to familiar things makes them stick in your memory better — that's why CuriousMind uses real-world examples!"
    }
});
