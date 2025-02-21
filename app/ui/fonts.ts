import { Playfair_Display } from 'next/font/google';
import { Rubik } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
    weight: ['400', '700'],
    subsets: ['latin', 'cyrillic'],
});

export const rubik = Rubik({
    weight: ['400', '700'],
    subsets: ['latin', 'cyrillic'],
});