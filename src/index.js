import getRandomAddress from "./randomAddress";
import { nanoid } from "nanoid";
import './styles/main.scss';
import mainImage from './assets/image.jpeg'

console.log(getRandomAddress());
console.log(nanoid());

const img = document.getElementById('mainImage');
img.src = mainImage;