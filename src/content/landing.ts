export const storySteps = [
  {
    title: 'Bring the material',
    body: 'Upload a PDF, document, image, or pasted summary. Your source stays at the center of the process.',
  },
  {
    title: 'Shape the sound',
    body: 'Choose a genre, voice, tempo, and learning mode that fit the topic and your listening habits.',
  },
  {
    title: 'Review and replay',
    body: 'Check the lyrics, save the track, and return to the idea whenever revision fits your day.',
  },
] as const

export const genres = [
  {
    name: 'Afrobeats',
    descriptor: 'Momentum for a topic that needs repeat plays.',
    image: 'cover-afrobeats.webp',
    duration: '03:18',
    subject: 'Cell Biology',
  },
  {
    name: 'Amapiano',
    descriptor: 'Space and rhythm for step-by-step concepts.',
    image: 'cover-amapiano.webp',
    duration: '04:06',
    subject: 'Organic Chemistry',
  },
  {
    name: 'Gospel',
    descriptor: 'Vocal lift for lines you want to sing back.',
    image: 'cover-gospel.webp',
    duration: '03:42',
    subject: 'Constitutional Law',
  },
  {
    name: 'Lo-Fi',
    descriptor: 'A calmer frame for focused review.',
    image: 'cover-lofi.webp',
    duration: '04:28',
    subject: 'Macroeconomics',
  },
] as const

export const learningLoop = [
  {
    verb: 'Listen',
    body: 'Follow the study track with synchronized lyrics.',
  },
  {
    verb: 'Recall',
    body: 'Hide the next line or sing the idea back without looking.',
  },
  {
    verb: 'Check',
    body: 'Compare important lyrics with the original source.',
  },
  {
    verb: 'Replay',
    body: 'Return later and strengthen the memory through spaced review.',
  },
] as const

export const faqs = [
  {
    question: 'What can I upload?',
    answer:
      'The MVP is planned to support PDF, DOCX, TXT, images with text recognition, and pasted text.',
  },
  {
    question: 'Which genres are planned?',
    answer:
      'The PRD includes Afrobeats, Hip-Hop, Amapiano, Pop, Gospel, Classical, Jazz, and Lo-Fi.',
  },
  {
    question: 'How long will a track take?',
    answer:
      'The product target is 2-5 minutes for a full generated track. Actual performance must be verified before launch.',
  },
  {
    question: 'Can I trust every generated lyric?',
    answer:
      'AI output can be inaccurate. ClassVybes should make review and source comparison part of the normal flow.',
  },
  {
    question: 'Will my notes be used to train models?',
    answer:
      'That policy has not been finalized. The launch product must answer it clearly before accepting uploads.',
  },
  {
    question: 'Is ClassVybes a replacement for studying?',
    answer:
      'No. It adds music-led recall and repetition to the study methods that already work for you.',
  },
] as const
