import image1 from "./../../public/images/placeholderImg.png"
import { StaticImageData } from 'next/image';

interface Speaker {
    position: number;
    name: string;
    designation: string;
    bio: string;
    image: StaticImageData;
    
}

export const speakers: Speaker[] = [
    {
        position: 1,
        name: 'Dr. Jane Doe',
        designation: 'SPEAKER',
        bio: 'Dr. Jane Doe is a fingerstache flexitarian street art 8-bit waist co, subway tile poke farm',
        image: image1,
    }, 
    {
        position: 2,
        name: 'Janet Doe',
        designation: 'SPEAKER',
        bio: 'Janet Doe is a fingerstache flexitarian street art 8-bit waist co, subway tile poke farm',
        image: image1,
    },
    {
        position: 3,
        name: 'Neptune Doe',
        designation: 'HOST/CONVENER',
        bio: 'Neptune Doe is a fingerstache flexitarian street art 8-bit waist co, subway tile poke farm',
        image: image1,
    },
    {
        position: 4,
        name: 'Melanchole Doe',
        designation: 'SPEAKER',
        bio: 'Melanchole Doe is a fingerstache flexitarian street art 8-bit waist co, subway tile poke farm',
        image: image1,
    },
    {
        position: 5,
        name: 'Bunker Doe',
        designation: 'SPEAKER',
        bio: 'Bunker Doe is a fingerstache flexitarian street art 8-bit waist co, subway tile poke farm',
        image: image1,
    }

]
