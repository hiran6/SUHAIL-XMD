const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,919356730236";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,919356730236";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "9193567320236,919356730236";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_04_10_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDU5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjksXG4gICAgICAgIDExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQwLFxuICAgICAgICA3MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk1LFxuICAgICAgICA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDg3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU1LFxuICAgICAgICA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgODcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDY4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICA4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUwLFxuICAgICAgICA0NixcbiAgICAgICAgMTY4LFxuICAgICAgICA1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDUxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTWkE4OU95NzE1RXFzZHdsQllXSGRnRG1ZSGtNS08zcjY0REpRamRwcldNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTM1NjczMDIzNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUQ4M0U1MDVFODQ0OTQ1M0I4MEVBMkIwRjdDNDg0MTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4NDY4Mjg2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRURExNRE9PUmZxTVduaVdyQ3NuWXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzE4MTU5ZWYtMDNkMS00MTNmLTk3ZDgtYjZiMzMwNGY1YzU0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOCxcbiAgICAgIDI0MCxcbiAgICAgIDQxLFxuICAgICAgMTAsXG4gICAgICAxNDksXG4gICAgICAyMTksXG4gICAgICA5OSxcbiAgICAgIDEyOCxcbiAgICAgIDEwNSxcbiAgICAgIDIyNyxcbiAgICAgIDEzLFxuICAgICAgMTUxLFxuICAgICAgMjA1LFxuICAgICAgNTUsXG4gICAgICAyMjEsXG4gICAgICA4OCxcbiAgICAgIDE2NyxcbiAgICAgIDMsXG4gICAgICA2MyxcbiAgICAgIDIwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICA2MCxcbiAgICAgIDE0NCxcbiAgICAgIDE4MixcbiAgICAgIDI0NSxcbiAgICAgIDEsXG4gICAgICA1NCxcbiAgICAgIDM2LFxuICAgICAgMTE4LFxuICAgICAgNjksXG4gICAgICA2NCxcbiAgICAgIDI0OSxcbiAgICAgIDI4LFxuICAgICAgMzEsXG4gICAgICAyNSxcbiAgICAgIDEyNyxcbiAgICAgIDMsXG4gICAgICAxMDQsXG4gICAgICA4MyxcbiAgICAgIDIyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3TVhQRlpBN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5MzU2NzMwMjM2OjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUmFodWxfSklcIixcbiAgICBcImxpZFwiOiBcIjI0NDgyNjQ3Mzc5NTY2Mjo4MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTy94MThRdGFxWnVBWVlDU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFLWHlWR1phcC9XVWRGdTY5a2VhQTVvNXMxNXNCQ29sUnFpZWpkSEthRWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMGxFZGg2SU5QRUduc3VVR1E4L2JRSjFWZ2VkcU5DTGlRbmRJTSs4QjRlOTZIYzhxM0xSeHhqWGF2aE9BdVNkY01LdHZhZmJIQWVacjVZRUdhalc4QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU0xIMFZUbm1GeXZna2YwbXZSN0N5S1FVY291Z3ZyY1FvRWQxY0U2OFY0a3ZCV3VKamc3R3AxN1Y0MW00bHVtVDdtMi85ZkpBZzQzYkEybWdwak8xZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5MzU2NzMwMjM2OjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg0NjgyODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMNUdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw1Ry5qc29uIjogIntcImtleURhdGFcIjpcIi9uTURQRlA2b3ZoYld4OVVsUG1GY3dxYlBUbTR6Zlhpc0NBc0tRVHFuTjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAwNDAwODAzLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "."
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Rahul_JI",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
