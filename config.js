//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "okoyejoshi@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "";
global.devs = "https://t.me/Okoyejoshua001";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349115983460";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEE0c0liaU5iZTBwVSt1SGtGcEJSTUpsbnZndjluR01ET1J1VzdRc2NtST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZW9sL3JQQUxRYWpxZ1R3UVdZNnNDU0JuMzhjYmtSL0NVazBVNUMyV0JuZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTkcwQXlFSXU1OUZyR3RyWTlRRS81OUl6VlVzTHU2TnZwdFY3RlhxYWxnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQmNxQkRjOUFjckoyVElzSS9vY1EvREJqaUhiRGVaMkg4NlQ4ZjZGZ2xRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhNQ0czczV2ZElKZUk5TENteW1UMU0zcHNPMjJ4WE9EMUM1MXYxT2JqSGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IncwYiswNHZZVmFwMlpvVGsrMUFtYUQ5Nmgxc0c0RitjOFFxM2N6WWhNVHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUgvSEJSZDIzZGhQRzg4RU9POXBEZkJveFRuZnAxR1JTSVJqZ3hWUzBtST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFB0VDYySGlJdEMxYmJXVk92elV4Q0V0U0ZQdVdqV2x3L3hXeEpRYTNXTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIvd1k4TStiUWtvSjd1bTZQVENUd2hHTXJvTjZnc09VNDVWc3EybWVvZmZuejJYbkl1cXFnZGNXMVh1bXNTTW5ZQkdpRjZOSlR3eEF1OGNGbjVWVWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU3LCJhZHZTZWNyZXRLZXkiOiJtcG1UeWhjT1Bib21TcDBUVndqVERTc3V3eHVISVNGQmtvR29XUFNkZ0JJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwRGJJY2lwblF6dVVmNHZtUEIwalJ3IiwicGhvbmVJZCI6IjU3NmIyMTI2LTVhN2ItNDNlNS1hOWE0LTAxYjhlYWJmZWM3NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKWWYrMUxWSGFsVXlxdzlCQ3VuaXgreVhhK1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkluQm5ET3J5SmtWS2hEUlRMK3owN20rQytZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNDQkZDQzFSIiwibWUiOnsiaWQiOiIyMzQ5MTE1OTgzNDYwOjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l1ZXZlY0RFTWlLeGJ3R0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im9sQWhRejRrZ1lzSk5JQ3hocFdYNVN0bW9PQzRrQUFsTUhPWlloelVKVTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InlxTnM0WVJIbStxd3lWZk5KczdHd3hvRG13TXJ4YWxFbWlzNFhYNnhzSEVQdnZFcUphTWErM2o0MjhYeDRuRm1hYXdZSnZESVdDZVptemRzN3R3OURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyem40TzFtcG9UYis1ZUs4bXVMbjhsQ04wWUdlNEhxMU9sNHhYZzJ6cTFTRkpUa1VCOVFyZ1o2UnZRc3AwclhkZWQ5RXIyMjRLbjVZRU9qSmMzRytnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMTU5ODM0NjA6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhSlFJVU0rSklHTENUU0FzWWFWbCtVclpxRGd1SkFBSlRCem1XSWMxQ1ZOIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM3NTczNzE5fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "JOSHUA™`",
  author: process.env.PACK_AUTHER || "JOSHTECH",
  packname: process.env.PACK_NAME || "Joshtech",
  botname: process.env.BOT_NAME || "JOSHTECH",
  ownername: process.env.OWNER_NAME || "Joshua",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
