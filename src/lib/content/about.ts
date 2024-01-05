import { AboutSectionType } from '@/lib/types/sections'

export const aboutSection: AboutSectionType = {
    title: 'about me',
    // Paragraphs need to be changed from containers/About.tsx
    // Because it wasn't possible to insert anchor tags like this
    list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
        'Java',
        'HTML & CSS',
        'Javascript',
        'TypeScript',
        'NodeJS',
        'MySQL'
    ],
    },
    img: 'https://github.com/imrohitkr/portfolio-website/assets/94630124/3f3dae09-74ec-451f-8d48-c8c73fe55e5f',
};