// Simple Language Guesser with Node.js
// Using 3 Dependencies: franc, langs, colors


// Ngebuat import dan require bisa di satu file
import { createRequire } from "module";
const require = createRequire(import.meta.url);
 
import { franc } from "franc";
const langs = require('langs');
const colors = require('colors');

// Menyimpan inputan dari user
const input = process.argv[2];
const langCode = franc(input);

if (langCode === "und") {
    console.log("Maaf, kita tidak bisa menebak bahasa tersebut. Coba lagi dengan sample text lain".bgRed.black);
} else {
    console.log(`Tebakan terbaik kita adalah: ${langs.where("3", langCode).name}`.bgGreen.black);
}