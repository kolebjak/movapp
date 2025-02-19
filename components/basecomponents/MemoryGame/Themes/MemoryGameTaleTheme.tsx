import React from 'react';
import styles from './MemoryGameTaleTheme.module.css';
import MemoryGame from '../MemoryGameCore';
import { TranslationJSON } from 'utils/Phrase';
import { CountryVariant, getCountryVariant } from 'utils/locales';
import kidsWords_CS from 'data/translations/cs/pro-deti.json';
import kidsWords_SK from 'data/translations/sk/pro-deti_sk.json';
import kidsWords_PL from 'data/translations/pl/pro-deti_pl.json';

// const KIDS_WORDS: Record<CountryVariant, KidsTranlsation[]> = {
//     cs: { /* filter tale words from kids json */ },
//     sk: { /* filter tale words from kids json */ },
//     pl: { /* filter tale words from kids json */ },
//   };

type KidsTranlsation = TranslationJSON & { image: string };

const KIDS_WORDS: Record<CountryVariant, KidsTranlsation[]> = {
  cs: kidsWords_CS,
  sk: kidsWords_SK,
  pl: kidsWords_PL,
};

const normalizeData = ({ main, uk, image }: { main: string; uk: string; image: string }) => ({
  translation: {
    uk,
    main,
  },
  image,
});

const cardsData = KIDS_WORDS[getCountryVariant()].map(normalizeData);

const gameData = {
  audio: {
    cardFlipSound: '/kids/memory-game/card_flip.mp3',
    cardsMatchSound: '/kids/memory-game/spell.mp3',
    winMusic: '/kids/memory-game/win_music_sh.mp3',
  },
  styles,
  cardBackImage: '/kids/memory-game/talecard.png',
  cardsData,
};

const MemoryGameWithTheme = () => <MemoryGame {...gameData} />;

export default MemoryGameWithTheme;
