import { ProjectsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper';


export const projectsSection: ProjectsSectionType = {
    title: 'my projects',
    projects: [
    {
        id: getId(),
        name: 'Kart-On',
        url: '#',
        repo: 'https://github.com/imrohitkr/Kart-On',
        img: 'https://www.homemakerproperties.com/wp-content/uploads/bb-plugin/cache/homemaker-placeholder-landscape-0adac48ba04ee236c85908e6dd3f2b46-.jpg',
        year: 2023,
        tags: ['PHP', 'HTML', 'CSS', 'Javascript', 'MySQL'],
    },
    {
        id: getId(),
        name: 'Friends App',
        url: 'https://radiant-pika-105ad2.netlify.app/',
        repo: 'https://github.com/imrohitkr/friends-app',
        img: 'https://www.homemakerproperties.com/wp-content/uploads/bb-plugin/cache/homemaker-placeholder-landscape-0adac48ba04ee236c85908e6dd3f2b46-.jpg',
        year: 2023,
        tags: ['React', 'firebase'],
    },
    {
        id: getId(),
        name: 'Care Club',
        url: 'https://coruscating-moonbeam-c9c0a0.netlify.app/',
        repo: 'https://github.com/imrohitkr/Care_Club',
        img: 'https://www.homemakerproperties.com/wp-content/uploads/bb-plugin/cache/homemaker-placeholder-landscape-0adac48ba04ee236c85908e6dd3f2b46-.jpg',
        year: 2023,
        tags: ['HTML', 'CSS', 'Javascript'],
    },
    {
        id: getId(),
        name: 'Chat App',
        url: '#',
        repo: 'https://github.com/imrohitkr/Chat-App',
        img: 'https://www.homemakerproperties.com/wp-content/uploads/bb-plugin/cache/homemaker-placeholder-landscape-0adac48ba04ee236c85908e6dd3f2b46-.jpg',
        year: 2023,
        tags: ['React', 'NodeJS', 'MongoDB'],
    }
    ],
};