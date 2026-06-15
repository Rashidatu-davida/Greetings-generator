/* ============================================================
   THEMES — 8 occasions with full visual + message data
   ============================================================ */
const THEMES = [
  {
    id: "birthday",
    emoji: "✨",
    label: "Birthday",
    carouselLabel: "Birthday Greetings Generator",
    heading: "Create a Personalized\nBirthday Wish",
    subtitle: "Create a heartfelt message your birthday star will treasure.",
    namePlaceholder: "Who's the birthday star? ✨",
    generateLabel: "Generate Wish",
    revealGreeting: (n) => `Happy Birthday, ${n}!`,
    tagBadge: "Birthday Message",
    cardEmoji: "🎂",
    bg: "radial-gradient(ellipse at 20% 20%, #3b0764 0%, #1a0533 40%, #0f0a2e 70%, #0d1117 100%)",
    glassCard: "rgba(255,255,255,0.08)",
    primaryGlow: "rgba(192,132,252,0.25)",
    primaryColor: "#c084fc",
    secondaryColor: "#f472b6",
    goldColor: "#fbbf24",
    buttonGradient: "linear-gradient(135deg, #9333ea 0%, #c026d3 40%, #db2777 100%)",
    buttonShadow: "0 8px 24px rgba(147,51,234,0.45)",
    badgeBg: "rgba(192,132,252,0.15)",
    badgeColor: "#c084fc",
    headingGradient: "linear-gradient(135deg, #c084fc 0%, #f472b6 50%, #fbbf24 100%)",
    namePill: { bg: "rgba(192,132,252,0.15)", border: "rgba(192,132,252,0.3)", color: "#c084fc" },
    topAccentLine: "linear-gradient(90deg,transparent,rgba(192,132,252,0.7),rgba(244,114,182,0.7),transparent)",
    confettiColors: ["#c084fc","#f472b6","#fbbf24","#60a5fa","#34d399","#a78bfa"],
    sparkleColor: "rgba(251,191,36,0.9)",
    blobColors: ["rgba(192,132,252,0.18)","rgba(244,114,182,0.14)","rgba(96,165,250,0.12)","rgba(251,191,36,0.10)"],
    dotColors: ["#f472b6","#a78bfa","#fbbf24","#34d399","#f472b6","#60a5fa","#fbbf24","#a78bfa"],
    messages: [
      "May your birthday be as luminous as your spirit — overflowing with laughter, love, and every beautiful thing you deserve. Here's to a year where all your boldest dreams become your reality. You are beyond cherished. 🎂✨",
      "Another year of being absolutely magnetic! Your light makes the whole world brighter. Wishing you a birthday filled with magic moments, genuine connections, and the kind of joy that makes time slow down. 💫🌸",
      "To the most iconic person in the room — happy birthday! May this year bring you clarity, confidence, and celebrations big and small. The world is richer simply because you're in it. Keep shining exactly as you are. 🎉💜",
      "On your special day, may every small thing feel extraordinary — your morning coffee, the songs on your playlist, the people who love you most. You radiate warmth wherever you go. Wishing you a year as wonderful as you are. 🌟🎈",
      "Happy birthday! Wishing you a year that feels like your favourite playlist on a golden afternoon — full of good vibes, the right people, and moments you'll want to replay forever. You are endlessly loved. 🎶💛",
      "Today the universe is celebrating YOU, and honestly, same. You deserve every gift, every laugh, every sweet moment this birthday brings. May this next chapter be your most beautiful one yet. 🦋✨",
      "Wishing you a birthday as radiant and extraordinary as you are. May this year open doors you didn't even know existed, bring you closer to your dreams, and surround you with all the love you deserve. 🌈🎂",
      "Here's to you — the one who makes ordinary days feel like adventures. May this year bring abundance, peace, unexpected joy, and all the things that make your soul feel alive. You are so very loved. 🌙⭐",
    ],
  },
  {
    id: "christmas",
    emoji: "🎄",
    label: "Christmas",
    carouselLabel: "Christmas Greetings Generator",
    heading: "Send a Magical\nChristmas Greeting",
    subtitle: "Send warm seasonal wishes to someone on your nice list.",
    namePlaceholder: "Who's on the nice list? 🎅",
    generateLabel: "Generate Greeting",
    revealGreeting: (n) => `Merry Christmas, ${n}!`,
    tagBadge: "Christmas Message",
    cardEmoji: "🎄",
    bg: "radial-gradient(ellipse at 20% 15%, #1a0a0a 0%, #0a1f0a 40%, #071507 65%, #050d05 100%)",
    glassCard: "rgba(255,255,255,0.07)",
    primaryGlow: "rgba(34,197,94,0.2)",
    primaryColor: "#22c55e",
    secondaryColor: "#ef4444",
    goldColor: "#fbbf24",
    buttonGradient: "linear-gradient(135deg, #15803d 0%, #16a34a 50%, #dc2626 100%)",
    buttonShadow: "0 8px 24px rgba(21,128,61,0.45)",
    badgeBg: "rgba(34,197,94,0.15)",
    badgeColor: "#4ade80",
    headingGradient: "linear-gradient(135deg, #4ade80 0%, #fbbf24 50%, #f87171 100%)",
    namePill: { bg: "rgba(34,197,94,0.15)", border: "rgba(34,197,94,0.3)", color: "#4ade80" },
    topAccentLine: "linear-gradient(90deg,transparent,rgba(74,222,128,0.7),rgba(251,191,36,0.7),transparent)",
    confettiColors: ["#22c55e","#ef4444","#fbbf24","#ffffff","#4ade80","#fca5a5"],
    sparkleColor: "rgba(251,191,36,0.9)",
    blobColors: ["rgba(34,197,94,0.15)","rgba(239,68,68,0.12)","rgba(251,191,36,0.10)","rgba(74,222,128,0.08)"],
    dotColors: ["#4ade80","#fbbf24","#ef4444","#ffffff","#22c55e","#fca5a5","#fbbf24","#4ade80"],
    messages: [
      "May your Christmas be as warm and bright as the lights on the tree — filled with laughter around the table, cozy moments by the fire, and the joy of being loved. Wishing you magic in every corner of this season. 🎄✨",
      "Season's warmest greetings! May this Christmas wrap you in all the peace, joy, and love you deserve. Here's to twinkling lights, familiar songs, and moments that make your heart feel full. 🎅🌟",
      "Wishing you a Christmas that sparkles from morning to midnight — with festive surprises, cherished company, and memories that will last long after the decorations come down. You deserve every bit of this magic. 🎁❄️",
      "May the spirit of Christmas fill your home with warmth, your heart with gratitude, and your days with all the love and laughter the season brings. Sending you the cosiest of holiday wishes! ☃️🕯️",
      "Christmas is a little more special because of people like you. Wishing you a season full of wonder, rest, and togetherness — and a new year shining with everything you hope for. Merry Christmas! 🦌💛",
    ],
  },
  {
    id: "easter",
    emoji: "🐣",
    label: "Easter",
    carouselLabel: "Easter Greetings Generator",
    heading: "Share a Joyful\nEaster Greeting",
    subtitle: "Share joyful Easter blessings with someone you love.",
    namePlaceholder: "Who are you blessing? 🌸",
    generateLabel: "Generate Greeting",
    revealGreeting: (n) => `Happy Easter, ${n}!`,
    tagBadge: "Easter Message",
    cardEmoji: "🐣",
    bg: "radial-gradient(ellipse at 30% 20%, #2d0a3a 0%, #1a0a2e 40%, #0f0a1a 65%, #080810 100%)",
    glassCard: "rgba(255,255,255,0.09)",
    primaryGlow: "rgba(217,70,239,0.2)",
    primaryColor: "#d946ef",
    secondaryColor: "#86efac",
    goldColor: "#fde68a",
    buttonGradient: "linear-gradient(135deg, #a855f7 0%, #d946ef 50%, #ec4899 100%)",
    buttonShadow: "0 8px 24px rgba(168,85,247,0.4)",
    badgeBg: "rgba(217,70,239,0.15)",
    badgeColor: "#e879f9",
    headingGradient: "linear-gradient(135deg, #e879f9 0%, #86efac 50%, #fde68a 100%)",
    namePill: { bg: "rgba(217,70,239,0.15)", border: "rgba(217,70,239,0.3)", color: "#e879f9" },
    topAccentLine: "linear-gradient(90deg,transparent,rgba(232,121,249,0.7),rgba(134,239,172,0.7),transparent)",
    confettiColors: ["#e879f9","#86efac","#fde68a","#f9a8d4","#a5f3fc","#c4b5fd"],
    sparkleColor: "rgba(253,230,138,0.9)",
    blobColors: ["rgba(217,70,239,0.15)","rgba(134,239,172,0.12)","rgba(253,230,138,0.10)","rgba(244,114,182,0.10)"],
    dotColors: ["#e879f9","#86efac","#fde68a","#f9a8d4","#a5f3fc","#c4b5fd","#86efac","#fde68a"],
    messages: [
      "Wishing you an Easter overflowing with colour, hope, and new beginnings. May this season remind you of all the beauty that surrounds you and the wonderful things still ahead. You are a true gift to this world. 🌸🐣",
      "Happy Easter! May every egg you find, every smile you share, and every moment of this beautiful season fill your heart with the purest joy. Here's to fresh starts, blooming friendships, and all things wonderful. 🌷✨",
      "Spring is here, and so is the perfect moment to celebrate YOU! Wishing you an Easter as vibrant and full of life as you are. May this season plant seeds of joy that bloom all year long. 🌼💛",
      "May this Easter bring you renewed energy, blossoming hopes, and the warmth of everyone who loves you. You deserve a season that feels as bright and full of promise as you make every room you enter. 🐰🌸",
    ],
  },
  {
    id: "mothers-day",
    emoji: "💐",
    label: "Mother's Day",
    carouselLabel: "Mother's Day Greetings Generator",
    heading: "Celebrate the\nMost Amazing Mum",
    subtitle: "Tell Mum how much she means in a few beautiful words.",
    namePlaceholder: "Her beautiful name… 💐",
    generateLabel: "Generate Message",
    revealGreeting: (n) => `Happy Mother's Day, ${n}!`,
    tagBadge: "Mother's Day Message",
    cardEmoji: "💐",
    bg: "radial-gradient(ellipse at 25% 20%, #3a0a1e 0%, #1f0a14 40%, #120609 65%, #0a0408 100%)",
    glassCard: "rgba(255,255,255,0.08)",
    primaryGlow: "rgba(251,113,133,0.22)",
    primaryColor: "#fb7185",
    secondaryColor: "#fda4af",
    goldColor: "#fcd34d",
    buttonGradient: "linear-gradient(135deg, #be185d 0%, #e11d48 50%, #fb923c 100%)",
    buttonShadow: "0 8px 24px rgba(190,24,93,0.45)",
    badgeBg: "rgba(251,113,133,0.15)",
    badgeColor: "#fb7185",
    headingGradient: "linear-gradient(135deg, #fda4af 0%, #fb7185 50%, #fcd34d 100%)",
    namePill: { bg: "rgba(251,113,133,0.15)", border: "rgba(251,113,133,0.3)", color: "#fda4af" },
    topAccentLine: "linear-gradient(90deg,transparent,rgba(251,113,133,0.7),rgba(252,211,77,0.7),transparent)",
    confettiColors: ["#fb7185","#fda4af","#fcd34d","#f9a8d4","#fbcfe8","#fef08a"],
    sparkleColor: "rgba(252,211,77,0.9)",
    blobColors: ["rgba(251,113,133,0.18)","rgba(253,164,175,0.14)","rgba(252,211,77,0.10)","rgba(251,207,232,0.12)"],
    dotColors: ["#fb7185","#fcd34d","#fda4af","#fbcfe8","#f9a8d4","#fef08a","#fb7185","#fda4af"],
    messages: [
      "To the woman who made everything possible — you are the definition of unconditional love, quiet strength, and boundless grace. Thank you for being our anchor, our cheerleader, and our greatest gift. Happy Mother's Day, with all the love in the world. 💐✨",
      "There are no words powerful enough to capture everything you mean to us — but on this special day, we want you to feel every ounce of the love you have always given so freely. You deserve the world, Mum. 🌸💛",
      "Happy Mother's Day to the most extraordinary woman we know. Your warmth, wisdom, and unwavering love are the foundation everything is built on. Today is yours — let yourself be celebrated the way you celebrate everyone else. 💐🌹",
      "You taught us what it means to love without limits, to laugh through the hard days, and to always show up for each other. Thank you for being exactly who you are. Today and every day, you are endlessly adored. 🌸💕",
      "Behind every beautiful thing in our lives is your love, care, and sacrifice. You make ordinary moments extraordinary just by being in them. Happy Mother's Day — you are our entire heart. 💐🌷",
    ],
  },
  {
    id: "fathers-day",
    emoji: "👔",
    label: "Father's Day",
    carouselLabel: "Father's Day Greetings Generator",
    heading: "Honour the Most\nIncredible Dad",
    subtitle: "Honour Dad with words that truly capture how much he means.",
    namePlaceholder: "His great name… 👔",
    generateLabel: "Generate Message",
    revealGreeting: (n) => `Happy Father's Day, ${n}!`,
    tagBadge: "Father's Day Message",
    cardEmoji: "👔",
    bg: "radial-gradient(ellipse at 20% 20%, #050e1f 0%, #0a1628 40%, #060d1a 65%, #040810 100%)",
    glassCard: "rgba(255,255,255,0.07)",
    primaryGlow: "rgba(59,130,246,0.2)",
    primaryColor: "#3b82f6",
    secondaryColor: "#93c5fd",
    goldColor: "#fbbf24",
    buttonGradient: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #0f766e 100%)",
    buttonShadow: "0 8px 24px rgba(29,78,216,0.45)",
    badgeBg: "rgba(59,130,246,0.15)",
    badgeColor: "#60a5fa",
    headingGradient: "linear-gradient(135deg, #93c5fd 0%, #60a5fa 50%, #fbbf24 100%)",
    namePill: { bg: "rgba(59,130,246,0.15)", border: "rgba(59,130,246,0.3)", color: "#93c5fd" },
    topAccentLine: "linear-gradient(90deg,transparent,rgba(96,165,250,0.7),rgba(251,191,36,0.7),transparent)",
    confettiColors: ["#3b82f6","#93c5fd","#fbbf24","#1d4ed8","#bae6fd","#e2e8f0"],
    sparkleColor: "rgba(251,191,36,0.9)",
    blobColors: ["rgba(59,130,246,0.15)","rgba(147,197,253,0.10)","rgba(251,191,36,0.08)","rgba(30,58,138,0.20)"],
    dotColors: ["#60a5fa","#fbbf24","#93c5fd","#bae6fd","#3b82f6","#e2e8f0","#fbbf24","#60a5fa"],
    messages: [
      "To the man who showed us what strength, patience, and love really look like — thank you for every sacrifice made quietly, every lesson taught by example, and every moment you showed up. Happy Father's Day. You are our hero, always. 👔✨",
      "Dad, your steady presence has been our greatest comfort. You lead with wisdom, love with courage, and always make us feel safe just by being there. Today we celebrate everything you are. We are beyond grateful for you. 🌟💛",
      "Happy Father's Day to a man who defines what it means to be dependable, kind, and quietly brilliant. You've given us more than you know — and today we want you to feel every bit of the admiration and love we carry for you. 👔🏅",
      "Some people make life better just by being in it — you are one of those rare people, Dad. Thank you for your patience, your guidance, and the moments that became the best memories of our lives. Happy Father's Day. 🌟💙",
      "Behind every great family is a dad who gave everything without counting the cost. That's you. Today is your day to rest, to be celebrated, and to know how deeply and profoundly loved you truly are. 👔✨",
    ],
  },
  {
    id: "eid",
    emoji: "☪️",
    label: "Eid",
    carouselLabel: "Eid Greetings Generator",
    heading: "Share the Joy of\nEid with Someone Special",
    subtitle: "Send warm Eid blessings to someone you care about.",
    namePlaceholder: "Their name… ☪️",
    generateLabel: "Send Eid Greetings",
    revealGreeting: (n) => `Eid Mubarak, ${n}!`,
    tagBadge: "Eid Mubarak Message",
    cardEmoji: "🌙",
    bg: "radial-gradient(ellipse at 20% 20%, #021a0c 0%, #071a0f 40%, #040d08 65%, #020807 100%)",
    glassCard: "rgba(255,255,255,0.07)",
    primaryGlow: "rgba(52,211,153,0.22)",
    primaryColor: "#34d399",
    secondaryColor: "#6ee7b7",
    goldColor: "#fbbf24",
    buttonGradient: "linear-gradient(135deg, #065f46 0%, #059669 50%, #d97706 100%)",
    buttonShadow: "0 8px 24px rgba(5,150,105,0.45)",
    badgeBg: "rgba(52,211,153,0.15)",
    badgeColor: "#34d399",
    headingGradient: "linear-gradient(135deg, #6ee7b7 0%, #34d399 40%, #fbbf24 100%)",
    namePill: { bg: "rgba(52,211,153,0.15)", border: "rgba(52,211,153,0.3)", color: "#6ee7b7" },
    topAccentLine: "linear-gradient(90deg,transparent,rgba(52,211,153,0.7),rgba(251,191,36,0.7),transparent)",
    confettiColors: ["#34d399","#fbbf24","#6ee7b7","#d97706","#a7f3d0","#fde68a"],
    sparkleColor: "rgba(251,191,36,0.95)",
    blobColors: ["rgba(52,211,153,0.18)","rgba(251,191,36,0.14)","rgba(110,231,183,0.10)","rgba(217,119,6,0.10)"],
    dotColors: ["#34d399","#fbbf24","#6ee7b7","#a7f3d0","#d97706","#fde68a","#34d399","#fbbf24"],
    messages: [
      "Eid Mubarak! May this blessed occasion fill your heart with peace, your home with joy, and your life with the warmth of all those you love. Taqabbalallahu minna wa minkum — may Allah accept from us and from you. 🌙✨",
      "On this beautiful day of celebration and gratitude, I send you my warmest wishes. May your Eid be as radiant as the crescent moon, as sweet as the finest dates, and filled with all the blessings your heart can hold. ☪️🌟",
      "Wishing you an Eid filled with divine blessings, cherished family moments, and the deep contentment that comes from faith and gratitude. May Allah's mercy and grace surround you always. Eid Mubarak, dear friend! 🌙💛",
      "May the spirit of Eid bring you renewed hope, abundant joy, and togetherness with all who matter most. Sending you prayers of peace and happiness on this sacred and joyful occasion. Eid Mubarak! 🕌✨",
      "Eid Mubarak! May your prayers be answered, your heart be at peace, and this celebration remind you of all the beauty and blessings that surround you. You are thought of with the warmest of wishes today. 🌙🌟",
    ],
  },
  {
    id: "new-year",
    emoji: "🎆",
    label: "New Year",
    carouselLabel: "New Year Greetings Generator",
    heading: "Ring in the New Year\nwith a Beautiful Wish",
    subtitle: "Start the new year right with a heartfelt wish for someone you love.",
    namePlaceholder: "Who's stepping into the new year? 🥂",
    generateLabel: "Generate Wish",
    revealGreeting: (n) => `Happy New Year, ${n}!`,
    tagBadge: "New Year Message",
    cardEmoji: "🥂",
    bg: "radial-gradient(ellipse at 20% 15%, #0a0520 0%, #050310 40%, #000510 65%, #000208 100%)",
    glassCard: "rgba(255,255,255,0.07)",
    primaryGlow: "rgba(251,191,36,0.22)",
    primaryColor: "#fbbf24",
    secondaryColor: "#818cf8",
    goldColor: "#fbbf24",
    buttonGradient: "linear-gradient(135deg, #b45309 0%, #d97706 50%, #4f46e5 100%)",
    buttonShadow: "0 8px 24px rgba(180,83,9,0.45)",
    badgeBg: "rgba(251,191,36,0.15)",
    badgeColor: "#fbbf24",
    headingGradient: "linear-gradient(135deg, #fde68a 0%, #fbbf24 40%, #818cf8 100%)",
    namePill: { bg: "rgba(251,191,36,0.15)", border: "rgba(251,191,36,0.3)", color: "#fde68a" },
    topAccentLine: "linear-gradient(90deg,transparent,rgba(251,191,36,0.7),rgba(129,140,248,0.7),transparent)",
    confettiColors: ["#fbbf24","#818cf8","#fde68a","#c7d2fe","#ffffff","#f59e0b"],
    sparkleColor: "rgba(251,191,36,1)",
    blobColors: ["rgba(251,191,36,0.18)","rgba(129,140,248,0.14)","rgba(253,230,138,0.10)","rgba(99,102,241,0.12)"],
    dotColors: ["#fbbf24","#818cf8","#fde68a","#c7d2fe","#ffffff","#f59e0b","#fbbf24","#818cf8"],
    messages: [
      "Happy New Year! As the clock strikes midnight and a new chapter begins, I wish you a year filled with bold adventures, meaningful connections, and all the abundance your heart desires. The best is truly yet to come. 🥂✨",
      "Here's to a brand new year — a blank canvas waiting for your most beautiful story. May this year bring you clarity, courage, and countless reasons to smile. Wishing you health, happiness, and everything wonderful. 🎆🌟",
      "As we step into the new year together, I'm grateful for everything you bring to this world. May this year exceed every expectation, surprise you in the most beautiful ways, and feel like the fresh start you've been waiting for. Happy New Year! 🥂💛",
      "New year, same extraordinary you — but with new opportunities, new possibilities, and a whole world of moments waiting to be lived. Wishing you a year as incredible as you are. Let's make it one for the books. 🎇🌙",
      "May the new year wrap you in hope, fill your path with light, and bring you closer to everything you've been working toward. You deserve a year that matches the size of your dreams. Happy New Year! 🎆✨",
    ],
  },
  {
    id: "happy-holidays",
    emoji: "🎁",
    label: "Happy Holidays",
    carouselLabel: "Holiday Greetings Generator",
    heading: "Send Warm\nHoliday Greetings",
    subtitle: "Spread warmth and joy with a personalised holiday greeting.",
    namePlaceholder: "Someone special's name… 🎁",
    generateLabel: "Generate Greeting",
    revealGreeting: (n) => `Happy Holidays, ${n}!`,
    tagBadge: "Holiday Message",
    cardEmoji: "🎁",
    bg: "radial-gradient(ellipse at 25% 20%, #1a0a05 0%, #0f1020 40%, #0a0d1a 65%, #060810 100%)",
    glassCard: "rgba(255,255,255,0.08)",
    primaryGlow: "rgba(249,115,22,0.2)",
    primaryColor: "#f97316",
    secondaryColor: "#60a5fa",
    goldColor: "#fbbf24",
    buttonGradient: "linear-gradient(135deg, #c2410c 0%, #ea580c 40%, #1d4ed8 100%)",
    buttonShadow: "0 8px 24px rgba(194,65,12,0.45)",
    badgeBg: "rgba(249,115,22,0.15)",
    badgeColor: "#fb923c",
    headingGradient: "linear-gradient(135deg, #fdba74 0%, #f97316 40%, #60a5fa 100%)",
    namePill: { bg: "rgba(249,115,22,0.15)", border: "rgba(249,115,22,0.3)", color: "#fdba74" },
    topAccentLine: "linear-gradient(90deg,transparent,rgba(249,115,22,0.7),rgba(96,165,250,0.7),transparent)",
    confettiColors: ["#f97316","#60a5fa","#fbbf24","#fb923c","#bae6fd","#fde68a"],
    sparkleColor: "rgba(251,191,36,0.9)",
    blobColors: ["rgba(249,115,22,0.16)","rgba(96,165,250,0.14)","rgba(251,191,36,0.10)","rgba(234,88,12,0.10)"],
    dotColors: ["#f97316","#60a5fa","#fbbf24","#fdba74","#bae6fd","#fb923c","#fbbf24","#60a5fa"],
    messages: [
      "Wishing you a season filled with cosy moments, warm laughter, and the quiet magic that only this time of year brings. May your holidays be everything you hoped for and your heart feel full of gratitude and joy. Happy Holidays! 🎁✨",
      "As the year draws to a close, I want you to know how much joy you bring to everyone around you. Wishing you the most wonderful holiday season — filled with warmth, togetherness, and all the little things that matter most. 🌟🎁",
      "Happy Holidays! May your season be wrapped in warmth, your days be merry and bright, and your home filled with the sounds of laughter and love. Here's to celebrating the beauty of the season with everyone you hold dear. ❄️🕯️",
      "Sending you the warmest wishes this holiday season — for rest, for joy, for connection, and for all the magic that lives in this special time of year. You deserve every bit of light and happiness coming your way. 🎁💛",
      "Whatever this season means to you, may it bring you peace, joy, and the presence of the people who make life worth celebrating. Happy Holidays — you are so very loved and appreciated. 🌟🎁",
    ],
  },
];

/* ============================================================
   FLOATING ELEMENT POSITIONS (from FloatingElements.tsx)
   ============================================================ */
const SPARKLE_POSITIONS = [
  { x: "8%",  y: "12%", size: 16, delay: 0,   dur: 3.2 },
  { x: "88%", y: "8%",  size: 12, delay: 0.8, dur: 2.8 },
  { x: "5%",  y: "55%", size: 20, delay: 1.4, dur: 3.6 },
  { x: "92%", y: "45%", size: 14, delay: 0.3, dur: 2.5 },
  { x: "15%", y: "85%", size: 10, delay: 1.8, dur: 3.0 },
  { x: "80%", y: "78%", size: 18, delay: 0.6, dur: 3.4 },
  { x: "45%", y: "4%",  size:  8, delay: 2.0, dur: 2.6 },
  { x: "72%", y: "22%", size: 22, delay: 1.1, dur: 3.8 },
];

const DOT_POSITIONS = [
  { x: "12%", y: "20%", size: 8,  delay: 0.2 },
  { x: "85%", y: "15%", size: 6,  delay: 1.0 },
  { x: "20%", y: "70%", size: 10, delay: 0.5 },
  { x: "75%", y: "65%", size: 7,  delay: 1.5 },
  { x: "60%", y: "88%", size: 9,  delay: 0.8 },
  { x: "35%", y: "92%", size: 6,  delay: 1.2 },
  { x: "90%", y: "55%", size: 11, delay: 0.4 },
  { x: "3%",  y: "38%", size: 8,  delay: 1.7 },
];

const BLOB_POSITIONS = [
  { cx: "15%", cy: "20%", r: "120px", idx: 0 },
  { cx: "85%", cy: "25%", r: "100px", idx: 1 },
  { cx: "10%", cy: "75%", r:  "90px", idx: 2 },
  { cx: "82%", cy: "72%", r: "130px", idx: 3 },
];

/* ============================================================
   APP STATE
   ============================================================ */
const state = {
  themeIndex: 0,
  screen: "create",
  name: "",
  photo: null,
  wish: "",
  transitioning: false,
};

/* ============================================================
   SPARKLE SVG (matches FloatingElements.tsx SparkleIcon)
   ============================================================ */
function sparkleSVG(size, color) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="${color}"/>
  </svg>`;
}

/* ============================================================
   RENDER FLOATING ELEMENTS
   ============================================================ */
function renderFloatingElements(containerId, theme, intense) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  // Glowing blobs
  BLOB_POSITIONS.forEach((b) => {
    const el = document.createElement("div");
    el.className = "float-blob";
    const color = theme.blobColors[b.idx] || theme.blobColors[0];
    el.style.left = b.cx;
    el.style.top = b.cy;
    el.style.width = b.r;
    el.style.height = b.r;
    el.style.background = `radial-gradient(circle, ${color}, transparent 70%)`;
    el.style.animationDuration = `${5 + b.idx * 0.7}s`;
    el.style.animationDelay = `${-(b.idx * 0.5)}s`;
    container.appendChild(el);
  });

  // Sparkle stars
  SPARKLE_POSITIONS.forEach((s) => {
    const el = document.createElement("div");
    el.className = "float-sparkle";
    el.style.left = s.x;
    el.style.top = s.y;
    el.style.animationDuration = `${s.dur}s`;
    el.style.animationDelay = `${-s.delay}s`;
    el.innerHTML = sparkleSVG(s.size, theme.sparkleColor);
    container.appendChild(el);
  });

  // Confetti dots
  DOT_POSITIONS.forEach((d, i) => {
    const color = theme.dotColors[i % theme.dotColors.length];
    const el = document.createElement("div");
    el.className = "float-dot" + (intense ? " intense" : "");
    el.style.left = d.x;
    el.style.top = d.y;
    el.style.width = `${d.size}px`;
    el.style.height = `${d.size}px`;
    el.style.background = color;
    el.style.boxShadow = `0 0 ${d.size * 2}px ${color}`;
    el.style.animationDuration = `${3 + d.delay}s`;
    el.style.animationDelay = `${-d.delay}s`;
    container.appendChild(el);
  });

  // SVG ribbon strokes
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("class", "float-ribbons");
  svg.setAttribute("viewBox", "0 0 390 844");
  svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
  svg.setAttribute("fill", "none");
  const uid = containerId.replace(/-/g, "_");
  svg.innerHTML = `
    <path d="M-20 200 Q100 120 200 180 Q300 240 410 160" stroke="url(#r1_${uid})" stroke-width="2"/>
    <path d="M-20 600 Q120 520 220 580 Q320 640 410 560" stroke="url(#r2_${uid})" stroke-width="1.5"/>
    <defs>
      <linearGradient id="r1_${uid}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${theme.primaryColor}"/>
        <stop offset="100%" stop-color="${theme.secondaryColor}"/>
      </linearGradient>
      <linearGradient id="r2_${uid}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${theme.secondaryColor}"/>
        <stop offset="100%" stop-color="${theme.goldColor}"/>
      </linearGradient>
    </defs>
  `;
  container.appendChild(svg);
}

/* ============================================================
   CAROUSEL DOTS
   ============================================================ */
function renderCarouselDots(activeIndex, theme) {
  const container = document.getElementById("carousel-dots");
  container.innerHTML = "";
  THEMES.forEach((t, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === activeIndex ? " active" : "");
    dot.setAttribute("aria-label", `${t.label} theme`);
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-selected", String(i === activeIndex));
    if (i === activeIndex) dot.style.background = theme.primaryColor;
    dot.addEventListener("click", () => setTheme(i));
    container.appendChild(dot);
  });
}

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
let _toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("toast-visible");
  if (_toastTimer) clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => {
    toast.classList.remove("toast-visible");
    _toastTimer = null;
  }, 2500);
}

/* ============================================================
   DROP ZONE ERROR
   ============================================================ */
function showDropZoneError(message) {
  const existing = document.getElementById("dz-error");
  if (existing) existing.remove();
  const err = document.createElement("p");
  err.id = "dz-error";
  err.className = "dz-error";
  err.textContent = message;
  document.getElementById("dz-empty").appendChild(err);
  setTimeout(() => { if (err.parentNode) err.remove(); }, 3500);
}

/* ============================================================
   SMALL CONFETTI — for wish regeneration
   ============================================================ */
function fireSmallConfetti(theme) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const colors = theme.confettiColors;
  confetti({ origin: { y: 0.55 }, particleCount: 40, spread: 70, startVelocity: 30, colors, decay: 0.9 });
}

/* ============================================================
   APPLY THEME — updates all dynamic styles
   ============================================================ */
function applyTheme(theme) {
  // Page title + localStorage
  document.title = `${theme.label} Wish Generator`;
  try { localStorage.setItem("lastTheme", String(state.themeIndex)); } catch (_) {}

  // Carousel dots
  renderCarouselDots(state.themeIndex, theme);

  // Backgrounds
  document.getElementById("create-screen").style.background = theme.bg;
  document.getElementById("reveal-screen").style.background = theme.bg;

  // Carousel buttons
  ["prev-btn", "next-btn"].forEach((id) => {
    const btn = document.getElementById(id);
    btn.style.borderColor = `${theme.primaryColor}40`;
    btn.style.color = theme.primaryColor;
  });

  // Carousel label (fade swap)
  updateCarouselLabel(theme);

  // Heading lines
  updateHeading(theme);

  // Name input placeholder & styles
  const nameInput = document.getElementById("name-input");
  nameInput.placeholder = theme.namePlaceholder;
  refreshInputBorder(nameInput, theme);

  // Generate button label and state
  document.getElementById("generate-label").textContent = theme.generateLabel;
  refreshGenerateBtn(nameInput.value, theme);

  // Drop zone icon color
  document.getElementById("dz-icon-wrap").style.background = `${theme.primaryColor}22`;
  document.getElementById("dz-camera-icon").style.color = theme.primaryColor;
  document.getElementById("preview-uploaded").style.color = theme.primaryColor;
  document.getElementById("preview-img").style.borderColor = `${theme.primaryColor}80`;

  // Glass card backgrounds
  document.querySelectorAll(".glass-card").forEach((card) => {
    card.style.background = theme.glassCard;
  });

  // Reveal screen elements
  applyRevealTheme(theme);

  // Floating elements (both screens)
  renderFloatingElements("create-floats", theme, false);
  renderFloatingElements("reveal-floats", theme, true);
}

function applyRevealTheme(theme) {
  // Avatar glow
  document.getElementById("avatar-glow").style.background =
    `radial-gradient(circle, ${theme.primaryGlow}, transparent 70%)`;

  // Spinning ring gradient
  document.getElementById("avatar-ring").style.background =
    `conic-gradient(from 0deg, ${theme.primaryColor}, ${theme.secondaryColor}, ${theme.goldColor}, ${theme.primaryColor})`;

  // Avatar circle (fallback bg when no photo)
  if (!state.photo) {
    document.getElementById("avatar-circle").style.background = theme.buttonGradient;
  }

  // Emoji badge
  const badge = document.getElementById("emoji-badge");
  badge.style.background = `linear-gradient(135deg, ${theme.goldColor}, ${theme.primaryColor})`;
  badge.textContent = theme.cardEmoji;

  // Greeting heading gradient
  document.getElementById("greeting-heading").style.backgroundImage = theme.headingGradient;

  // Greeting sub emoji
  document.getElementById("greeting-sub").textContent = `${theme.emoji} Sending warm wishes to`;

  // Card accent line
  document.getElementById("card-accent-line").style.background = theme.topAccentLine;

  // Card emoji box
  const emojiBox = document.getElementById("card-emoji-box");
  emojiBox.style.background = `${theme.primaryColor}22`;
  emojiBox.style.borderColor = `${theme.primaryColor}44`;
  emojiBox.textContent = theme.cardEmoji;

  // Card badge text
  const badgeText = document.getElementById("card-badge-text");
  badgeText.style.color = theme.primaryColor;
  badgeText.textContent = theme.tagBadge;

  // Card heart icon
  document.getElementById("card-heart-icon").style.color = theme.secondaryColor;

  // Card credit
  document.getElementById("card-credit").textContent = `Made with love · ${theme.label} Wish Generator`;

  // Primary action button
  const newWishBtn = document.getElementById("new-wish-btn");
  newWishBtn.style.background = theme.buttonGradient;
  newWishBtn.style.boxShadow = theme.buttonShadow;
}

/* ============================================================
   CAROUSEL LABEL — animated label swap
   ============================================================ */
function updateCarouselLabel(theme) {
  const label = document.getElementById("carousel-label");
  // Fade out
  label.classList.add("fade-out");
  setTimeout(() => {
    document.getElementById("carousel-emoji").textContent = theme.emoji;
    document.getElementById("carousel-text").textContent = theme.carouselLabel;
    document.getElementById("carousel-text").style.color = theme.primaryColor;
    label.style.background = `${theme.primaryColor}1a`;
    label.style.borderColor = `${theme.primaryColor}4d`;
    // Fade in
    label.classList.remove("fade-out");
    label.classList.add("fade-in");
    label.offsetHeight; // force reflow
    label.classList.remove("fade-in");
  }, 150);
}

/* ============================================================
   HEADING — animated update
   ============================================================ */
function updateHeading(theme) {
  const heading = document.getElementById("create-heading");
  heading.style.transition = "opacity 0.2s ease, transform 0.2s ease";
  heading.style.opacity = "0";
  heading.style.transform = "translateY(12px)";

  setTimeout(() => {
    const lines = theme.heading.split("\n");
    document.getElementById("heading-line1").textContent = lines[0] || "";
    const line2 = document.getElementById("heading-line2");
    line2.textContent = lines[1] || "";
    line2.style.backgroundImage = theme.headingGradient;
    document.getElementById("heading-sub").textContent = theme.subtitle;
    heading.style.opacity = "1";
    heading.style.transform = "translateY(0)";
  }, 200);
}

/* ============================================================
   INPUT BORDER — dynamic color from theme
   ============================================================ */
function refreshInputBorder(input, theme) {
  const hasValue = input.value.length > 0;
  input.style.border = hasValue
    ? `1.5px solid ${theme.primaryColor}99`
    : "1.5px solid rgba(255,255,255,0.12)";
  input.style.boxShadow = hasValue ? `0 0 0 4px ${theme.primaryColor}22` : "none";
}

/* ============================================================
   GENERATE BUTTON — enable / disable with visual state
   ============================================================ */
function refreshGenerateBtn(value, theme) {
  const btn = document.getElementById("generate-btn");
  const active = value.trim().length > 0;
  btn.disabled = !active;
  btn.style.background = active ? theme.buttonGradient : "rgba(255,255,255,0.07)";
  btn.style.color = active ? "#faf5ff" : "rgba(250,245,255,0.25)";
  btn.style.boxShadow = active ? theme.buttonShadow : "none";
  btn.style.cursor = active ? "pointer" : "not-allowed";
}

/* ============================================================
   PHOTO HANDLING
   ============================================================ */
function handleFile(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    showDropZoneError("Please upload an image file (PNG, JPG, GIF…)");
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    showDropZoneError("Image must be under 10 MB — please choose a smaller file.");
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    state.photo = e.target.result;
    const theme = THEMES[state.themeIndex];
    const img = document.getElementById("preview-img");
    img.src = state.photo;
    img.style.borderColor = `${theme.primaryColor}80`;
    document.getElementById("dz-empty").style.display = "none";
    document.getElementById("dz-preview").style.display = "flex";
  };
  reader.readAsDataURL(file);
}

function clearPhoto() {
  state.photo = null;
  document.getElementById("preview-img").src = "";
  document.getElementById("dz-preview").style.display = "none";
  document.getElementById("dz-empty").style.display = "flex";
  document.getElementById("file-input").value = "";
}

/* ============================================================
   PICK WISH — random message from current theme
   ============================================================ */
function pickWish() {
  const pool = THEMES[state.themeIndex].messages;
  return pool[Math.floor(Math.random() * pool.length)];
}

/* ============================================================
   CONFETTI — matches WishRevealScreen.tsx
   ============================================================ */
function fireConfetti(theme) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const colors = theme.confettiColors;
  function fire(ratio, opts) {
    confetti(Object.assign({ origin: { y: 0.6 }, particleCount: Math.floor(200 * ratio), colors }, opts));
  }
  fire(0.25, { spread: 26,  startVelocity: 55 });
  fire(0.2,  { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1,  { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1,  { spread: 120, startVelocity: 45 });
}

/* ============================================================
   SCREEN TRANSITIONS
   ============================================================ */
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const DUR = 380; // ms

function transitionTo(newScreenId, setupFn) {
  if (state.transitioning) return;
  state.transitioning = true;

  const currentId = state.screen === "create" ? "create-screen" : "reveal-screen";
  const currentEl = document.getElementById(currentId);
  const newEl = document.getElementById(newScreenId);
  const exitX = state.screen === "create" ? "-24px" : "24px";
  const enterX = newScreenId === "reveal-screen" ? "24px" : "-24px";

  // Animate current screen out
  currentEl.style.transition = `opacity ${DUR}ms ${EASE}, transform ${DUR}ms ${EASE}`;
  currentEl.style.opacity = "0";
  currentEl.style.transform = `translateX(${exitX})`;

  setTimeout(() => {
    // Hide old screen
    currentEl.style.display = "none";
    currentEl.style.transition = "none";
    currentEl.style.opacity = "1";
    currentEl.style.transform = "translateX(0)";

    // Run any setup before showing new screen
    if (setupFn) setupFn();

    // Prepare new screen (off-screen, invisible)
    newEl.style.display = "flex";
    newEl.style.transition = "none";
    newEl.style.opacity = "0";
    newEl.style.transform = `translateX(${enterX})`;
    newEl.offsetHeight; // force reflow so transition fires

    // Animate new screen in
    newEl.style.transition = `opacity ${DUR}ms ${EASE}, transform ${DUR}ms ${EASE}`;
    newEl.style.opacity = "1";
    newEl.style.transform = "translateX(0)";

    state.screen = newScreenId === "reveal-screen" ? "reveal" : "create";
    state.transitioning = false;
  }, DUR + 20);
}

/* ============================================================
   SHOW REVEAL SCREEN
   ============================================================ */
function showReveal(name, photo, wish) {
  const theme = THEMES[state.themeIndex];

  transitionTo("reveal-screen", () => {
    state.name = name;
    state.photo = photo;
    state.wish = wish;

    // Greeting text
    const greetingEl = document.getElementById("greeting-heading");
    greetingEl.textContent = theme.revealGreeting(name);
    greetingEl.style.backgroundImage = theme.headingGradient;

    // Wish text
    document.getElementById("wish-text").textContent = wish;

    // Avatar photo or heart icon
    const avatarImg = document.getElementById("avatar-img");
    const avatarHeart = document.getElementById("avatar-heart");
    const avatarCircle = document.getElementById("avatar-circle");

    if (photo) {
      avatarImg.src = photo;
      avatarImg.alt = `${name}'s photo`;
      avatarImg.style.display = "block";
      avatarHeart.style.display = "none";
      avatarCircle.style.background = "transparent";
    } else {
      avatarImg.style.display = "none";
      avatarHeart.style.display = "flex";
      avatarCircle.style.background = theme.buttonGradient;
    }

    // Reset reveal animations so they re-run
    resetRevealAnimations();

    // Confetti after short delay
    setTimeout(() => fireConfetti(theme), 350);
  });
}

/* ============================================================
   SHOW CREATE SCREEN
   ============================================================ */
function showCreate() {
  transitionTo("create-screen", () => {
    // Reset form state
    const theme = THEMES[state.themeIndex];
    const nameInput = document.getElementById("name-input");
    nameInput.value = "";
    clearPhoto();
    refreshGenerateBtn("", theme);
    refreshInputBorder(nameInput, theme);

    // Restore generate button icon + label in case loading state was applied
    const genBtn = document.getElementById("generate-btn");
    const genIcon = genBtn.querySelector("i");
    genIcon.className = "fa-solid fa-wand-magic-sparkles";
    document.getElementById("generate-label").textContent = theme.generateLabel;

    // Reset char counter
    const counter = document.getElementById("char-counter");
    counter.textContent = "";
    counter.style.opacity = "0";

    state.name = "";
    state.photo = null;
    state.wish = "";
  });
}

/* ============================================================
   RESET REVEAL ANIMATIONS — force CSS animations to replay
   when navigating create → reveal multiple times
   ============================================================ */
function resetRevealAnimations() {
  const ids = ["avatar-wrap", "greeting-section", "wish-card", "ad-placeholder", "reveal-actions"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.animation = "none";
    el.offsetHeight; // trigger reflow
    el.style.animation = "";
  });
}

/* ============================================================
   SHARE FUNCTIONALITY — matches WishRevealScreen.tsx
   ============================================================ */
async function handleShare() {
  const theme = THEMES[state.themeIndex];
  const greeting = theme.revealGreeting(state.name);
  const text =
    `✉️ Your friend sent you a special ${theme.label} greeting!\n\n` +
    `🎉 ${greeting}\n\n${state.wish}\n\n👉 Create your own free greeting at ${theme.label} Wish Generator`;

  try {
    if (navigator.share) {
      await navigator.share({ title: greeting, text });
      return;
    }
  } catch (_) {
    // User cancelled or share not permitted — fall through to clipboard
  }

  try {
    await navigator.clipboard.writeText(text);
    showToast("✓ Copied! Paste anywhere to share.");
  } catch (_) {
    showToast("Couldn't copy — try selecting the text manually.");
  }
}

/* ============================================================
   THEME CHANGE
   ============================================================ */
function setTheme(index) {
  state.themeIndex = index;
  applyTheme(THEMES[index]);
}

/* ============================================================
   EVENT LISTENERS & INIT
   ============================================================ */
function init() {
  // Restore last-used theme from localStorage
  try {
    const saved = parseInt(localStorage.getItem("lastTheme") || "0", 10);
    if (!isNaN(saved) && saved >= 0 && saved < THEMES.length) {
      state.themeIndex = saved;
    }
  } catch (_) {}

  // Apply initial theme
  applyTheme(THEMES[state.themeIndex]);

  // ---- Carousel ----
  document.getElementById("prev-btn").addEventListener("click", () => {
    setTheme((state.themeIndex - 1 + THEMES.length) % THEMES.length);
  });
  document.getElementById("next-btn").addEventListener("click", () => {
    setTheme((state.themeIndex + 1) % THEMES.length);
  });

  // ---- Name Input ----
  const nameInput = document.getElementById("name-input");

  nameInput.addEventListener("input", () => {
    const theme = THEMES[state.themeIndex];
    refreshGenerateBtn(nameInput.value, theme);
    refreshInputBorder(nameInput, theme);
    // Live character counter — appears after 20 chars
    const len = nameInput.value.length;
    const counter = document.getElementById("char-counter");
    if (len >= 20) {
      counter.textContent = `${len} / 40`;
      counter.style.opacity = "1";
    } else {
      counter.style.opacity = "0";
    }
  });

  nameInput.addEventListener("focus", () => {
    const theme = THEMES[state.themeIndex];
    nameInput.style.border = `1.5px solid ${theme.primaryColor}cc`;
    nameInput.style.boxShadow = `0 0 0 4px ${theme.primaryColor}22`;
  });

  nameInput.addEventListener("blur", () => {
    refreshInputBorder(nameInput, THEMES[state.themeIndex]);
  });

  // Submit on Enter key (name field)
  nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("create-form").requestSubmit();
    }
  });

  // ---- Photo / Drop Zone ----
  const dropZone = document.getElementById("drop-zone");
  const fileInput = document.getElementById("file-input");

  dropZone.addEventListener("click", () => fileInput.click());

  dropZone.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fileInput.click();
    }
  });

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    const theme = THEMES[state.themeIndex];
    dropZone.style.borderColor = `${theme.primaryColor}cc`;
    dropZone.style.background = `${theme.primaryColor}14`;
    dropZone.classList.add("dragging");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.style.borderColor = "rgba(255,255,255,0.18)";
    dropZone.style.background = "rgba(255,255,255,0.04)";
    dropZone.classList.remove("dragging");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "rgba(255,255,255,0.18)";
    dropZone.style.background = "rgba(255,255,255,0.04)";
    dropZone.classList.remove("dragging");
    handleFile(e.dataTransfer.files[0]);
  });

  fileInput.addEventListener("change", () => {
    handleFile(fileInput.files[0]);
    fileInput.value = ""; // allow re-uploading the same file
  });

  document.getElementById("preview-remove").addEventListener("click", (e) => {
    e.stopPropagation();
    clearPhoto();
  });

  // ---- Form Submit ----
  document.getElementById("create-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    if (!name) return;

    // Loading state on the button
    const genBtn = document.getElementById("generate-btn");
    const genIcon = genBtn.querySelector("i");
    const genLabel = document.getElementById("generate-label");
    genBtn.disabled = true;
    genIcon.className = "fa-solid fa-spinner fa-spin";
    genLabel.textContent = "Generating…";

    showReveal(name, state.photo, pickWish());
  });

  // ---- Reveal Buttons ----
  document.getElementById("new-wish-btn").addEventListener("click", () => {
    const newWish = pickWish();
    state.wish = newWish;

    // Animate wish text swap
    const wishText = document.getElementById("wish-text");
    wishText.style.transition = "opacity 0.18s ease";
    wishText.style.opacity = "0";
    setTimeout(() => {
      wishText.textContent = newWish;
      wishText.style.opacity = "1";
    }, 180);

    // Card bounce + small confetti celebration
    const wishCard = document.getElementById("wish-card");
    wishCard.classList.remove("bouncing");
    wishCard.offsetHeight;
    wishCard.classList.add("bouncing");
    setTimeout(() => wishCard.classList.remove("bouncing"), 450);
    fireSmallConfetti(THEMES[state.themeIndex]);
  });

  document.getElementById("share-btn").addEventListener("click", handleShare);

  document.getElementById("reset-btn").addEventListener("click", showCreate);

  // ---- Card Copy Button ----
  document.getElementById("card-copy-btn").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(state.wish);
      showToast("✓ Wish copied!");
    } catch (_) {
      showToast("Couldn't copy — try selecting the text manually.");
    }
  });

  // ---- Keyboard: arrow keys cycle themes on create screen ----
  document.addEventListener("keydown", (e) => {
    if (state.screen !== "create") return;
    if (document.activeElement === nameInput) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setTheme((state.themeIndex - 1 + THEMES.length) % THEMES.length);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setTheme((state.themeIndex + 1) % THEMES.length);
    }
  });

  // ---- Touch swipe: cycle themes on create screen ----
  let _touchStartX = 0;
  document.addEventListener("touchstart", (e) => {
    if (state.screen !== "create") return;
    _touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  document.addEventListener("touchend", (e) => {
    if (state.screen !== "create") return;
    if (e.target.closest("input, .drop-zone, button")) return;
    const dx = e.changedTouches[0].clientX - _touchStartX;
    if (Math.abs(dx) > 50) {
      setTheme((state.themeIndex + (dx < 0 ? 1 : -1) + THEMES.length) % THEMES.length);
    }
  }, { passive: true });
}

/* ============================================================
   BOOT
   ============================================================ */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
