import { init } from '@emailjs/browser';

export default defineNuxtPlugin(() => {
    init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
}); 