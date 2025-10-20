const fs = require('fs'),   
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,  
      convertToBool = (text, fault = 'true') => text === fault;  
  
global.session = "https://ali-pair-xode.onrender.com";   
   
module.exports = {  
SESSION_ID: process.env.SESSION_ID || "ALI-MD~hjVKWGwbZ+4wBpX3s4gIePwCUQlDafwcAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...  
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...  
ANTI_DELETE: process.env.ANTI_DELETE || "true", // ✅ only ONE, default = true  
AUTO_STATUS_VIEW: process.env.AUTO_STATUS_VIEW || "true",  
AUTO_STATUS_REACTS: process.env.AUTO_STATUS_REACTS || "true",  
STATUS_REACTION: process.env.STATUS_REACTION || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas  
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",  
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...  
MODE: process.env.MODE || "public", // Put private or public or inbox or groups  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923197521693", // Only 1 owner Number Here, others Add to sudo numbers...  
OWNER_NAME: process.env.OWNER_NAME || "𓂃ᷱ᪳𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄^᪲᪲᪲⤸֓同", // Input Yours custom...(Maintain font for Flow)  
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...  
PACK_NAME: process.env.PACK_NAME || "",
HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",// Added // Input Yours custom...  
PREFIX: process.env.PREFIX || ".",  
VERSION: process.env.VERSION || "6.5.0",  
ANTILINK: process.env.ANTILINK || "false",//  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking  
ANTICALL: process.env.ANTICALL || "false",  
MENTION_REPLY: process.env.MENTION_REPLY || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",  
AUTO_REACT: process.env.AUTO_REACT || "false",  
OWNER_REACT: process.env.OWNER_REACT || "false",  
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌𝐃ှ᪳𓆪", //  don't change   
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/6ku0eo.jpg", //  don't change   
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",  
AUTO_BIO: process.env.AUTO_BIO || "false",  
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",  
WELCOME: process.env.WELCOME || "false",  
//not working for the moment do don't on it  
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false  
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...  
PRESENCE: process.env.PRESENCE || "null", // Choose one: typing, recording, online, null  
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure  
};  
  
let file = require.resolve(__filename);   
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });  
// That's All...
