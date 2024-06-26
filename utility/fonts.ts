import { Inter as FontSans, Inter_Tight, Dancing_Script, Shadows_Into_Light } from 'next/font/google';

import local from 'next/font/local';

export const helvetica = local({
	src: [
		{
			path: '../public/fonts/HelveticaNeueMedium.otf',
			weight: '800',
		},
	],
});

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const InterTight = Inter_Tight({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const DancingScript = Dancing_Script({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const shadowLight = Shadows_Into_Light({
	subsets: ['latin'],
	weight: ['400'],
});
