const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="efeurhobobullish@gmail.com"
global.location="Africa/Lagos."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/efeurhobo/";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/";
global.website=process.env.GURL || "https://whatsapp.com/channel/" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6ntq2i.jpg" || "https://github.com/efeurhobo/Empire_Md-main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "® 𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇SAEED" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923120443386";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/6ntq2i.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX204eDNnQmdSek9ZMldoSlJhaDh3QVwiLFxuICBcInBob25lSWRcIjogXCI4ODA1ZDMyNi01NmYzLTRmZjEtYjc3YS0yOGZlYjg1YTA0NWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgMjE1LFxuICAgICAgOSxcbiAgICAgIDIwNCxcbiAgICAgIDk1LFxuICAgICAgMjUsXG4gICAgICAyMzksXG4gICAgICAxMTEsXG4gICAgICAyMjEsXG4gICAgICAyMzQsXG4gICAgICAyMzUsXG4gICAgICA2NCxcbiAgICAgIDE0MSxcbiAgICAgIDQ4LFxuICAgICAgMjU1LFxuICAgICAgMjI5LFxuICAgICAgNDMsXG4gICAgICA4MCxcbiAgICAgIDIwNixcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDE4NSxcbiAgICAgIDQ0LFxuICAgICAgMjE0LFxuICAgICAgMjI3LFxuICAgICAgMTExLFxuICAgICAgMTI1LFxuICAgICAgMTUzLFxuICAgICAgOTksXG4gICAgICAxNTUsXG4gICAgICAxMzksXG4gICAgICAyNDIsXG4gICAgICAxODgsXG4gICAgICA5NCxcbiAgICAgIDE1MCxcbiAgICAgIDI0MixcbiAgICAgIDI0OSxcbiAgICAgIDE0NyxcbiAgICAgIDEwMyxcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BTYThaMEVFTGovMDdrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicVR1ai9JeDJtR2c0VExZWWU2andQU2s2VFlnaHltMXFyUWZyTTlUeW9oMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxVXlTRTBxdXBueitvd1ZrdXlmRmd2eHpSQjlMdUwyYzM4U3phc2l3cWNMSjZvMnV5RmxaTGJUSFh5dWFuL3ZVTTBXNElLWm5GMTV6OFczMmJGRlVBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaYW1QSDBHajdOaG1RcHlDYnlXc3ZGUndtL0hGdXVtejYycjlZSDUvWndydkd4MWd4NVZxOHVwL0Nta3lHRDl5aEZuVEY4Tk03dHpiK3lPQis0QkxCQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM2MTUwMTgwMDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi5LmIIOGOuyDvvK0g5LmIICDhjqBcIixcbiAgICBcImxpZFwiOiBcIjU1MDYyMDUxMTcyNTE4OjRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzNjE1MDE4MDA6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNTI2NTg4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEVjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQRWMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJdFdHemwyOGIwVzZkY0tVNGM5SUJYZ0JZTTlnb3hnL0V5cHJ4OGZqcXpRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMzY0MTQwNjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDg2NzIwNTU1MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "® 𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇saeed" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒 ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • 𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒 𝐶ℎ𝑎𝑛𝑛𝑒𝑙』*\n youtube.com/@only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇saeed",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "saeed",
  ownername:process.env.OWNER_NAME|| "𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇saeed",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
