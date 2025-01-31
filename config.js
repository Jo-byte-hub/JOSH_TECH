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
global.owner = process.env.OWNER_NUMBER || "2348037827860";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0pGd0RJWS9WQ3FHeUlJTVdQY09VZi9tM08vN1NFcjFGdU92UncvQUszcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTZIcGEySjBxWTV4UlJrWGtyTGEwQ3JQMWxYcXNhSjk0RmQxQnVKQWFHUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3T1VxaVl0cnc3KzZWUWt6eFYvTDJQNFlaRWE1RlMvcENIOUVkV0xpczIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1K2U1UUx2a2ZzL3JERHdEM0VCUHB5OWRFb3V1RGdaN3NDQ3RlOXlUbmc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVId3FuVko0dXpDejVsdlZTSlQrd3BJUExMb29UbUZmNlIxd1dnbThGMk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRDeWppaEo2NThuWCtNYXBLNTZLcTdvc2N1SldqLy9KMmVPRTZYU21NQjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUNRNEVHa0J5c0R2aERiZk9GckxYL1crTkY1OHJvR2M3cjUxVTE1dGduND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2FPVFJ5amtrUHNhcnVFUGVUdysyMmxDVkdwdTUvSTJWUTFZb3FDcEF6TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitjTHE1RnFFUnMwa24yOC9OeUFpQURWZ0plUkhnc0VOeUhvdExKNkIyZkJ6eFJXeHdFc25adlRVL24rUmlsS3hFYks5dElzMGxMUFdVMnBaY0xud0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiIzdEZ3bjVmTzc5V2RyV2tsYnJQako3dWhNSW5pOGgxV0szSUtadDAxKzIwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4OW1qZjk3bVRiV241WXdlOE5VbXZnIiwicGhvbmVJZCI6ImNhOTM3YmY3LWNkNTAtNDcyZS05ODg5LTAxZmZhNjZiOGNiMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3S3JnaXZTTmkxaDB3czgxWTlVcGNGNFhwV0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVV2Vm5tL2NzdCtXb0VKZjhTYlQyYVBLQldjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhSV044MUszIiwibWUiOnsiaWQiOiIyMzQ4MDM3ODI3ODYwOjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09DZXR0MEdFUGo1OHJ3R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBZT29GK3l1c1J3UnN3Umx4TjlRY1BtVjlmc0FFN0ZOZGFvN1UwVFhVMWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjRBT2JHWjd5VktNNFNCdUV0WURzNEZIazl6SVl0b0x5MnM5QzJIY2l6VnVSYlhjQXIra29LT3R6cjNJN2VrbElwSVhuc3o4WUYvRk4rdlF5ZWQrSkJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlZXFvaVJNOEN4QTZxM3RJaCtVTW04NXdaOWx6Rm5hYktUNjZIemkwRlAwMGxhVGxnb0h2bnNLaW9MU1BMOWxYN0xXT2dmdXluWG42OUp3OE9yVmpEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMzc4Mjc4NjA6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUMkRxQmZzcnJFY0ViTUVaY1RmVUhENWxmWDdBQk94VFhXcU8xTkUxMU5YIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM4MzI1MjU0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUkrZyJ9"
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
