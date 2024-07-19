const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_34_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjExLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNixcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc1LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQyLFxuICAgICAgICA4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDM1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY4LFxuICAgICAgICA3LFxuICAgICAgICA0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjExLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDk0LFxuICAgICAgICAzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk2LFxuICAgICAgICA1NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAwLFxuICAgICAgICA5MixcbiAgICAgICAgMTUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI2LFxuICAgICAgICA1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnQkdHcmJmWmh3QUdiYzY3YW1pRUZtV01oenZGZGszcXYwZFRmRldiaFlJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzYzNjkwNzAxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTAxQjU4MDFERDA0NTFFNUNEQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0MDMyNjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2MzY5MDcwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E2QjVFMThCNDA3MEUzNDAwODBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDAzMjYzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJfLUZ0Q1hyU2ZTVkhOS0lmMGJhRHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2UxYTUzODctZDBkZS00NjkwLTg2ZWEtOGQ0YzQ4ZGYxMjYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDg0LFxuICAgICAgMzksXG4gICAgICAxOTgsXG4gICAgICAxNjQsXG4gICAgICA0OSxcbiAgICAgIDIyMyxcbiAgICAgIDQ3LFxuICAgICAgNzgsXG4gICAgICAyNDgsXG4gICAgICAxMzUsXG4gICAgICAyNDgsXG4gICAgICAxODMsXG4gICAgICA1NixcbiAgICAgIDE2NyxcbiAgICAgIDE0NCxcbiAgICAgIDMwLFxuICAgICAgNzYsXG4gICAgICA5MyxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDQ2LFxuICAgICAgNTQsXG4gICAgICAxMzMsXG4gICAgICA0NSxcbiAgICAgIDEzMCxcbiAgICAgIDEyMCxcbiAgICAgIDIzOCxcbiAgICAgIDEyOSxcbiAgICAgIDE2NixcbiAgICAgIDEwNyxcbiAgICAgIDEyNSxcbiAgICAgIDE5LFxuICAgICAgMjM4LFxuICAgICAgMjA5LFxuICAgICAgNzMsXG4gICAgICAxOTAsXG4gICAgICAyMzQsXG4gICAgICAyNSxcbiAgICAgIDE0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJONVNIVFRXMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjM2OTA3MDE6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInBlcGUgbW9uZXlcIixcbiAgICBcImxpZFwiOiBcIjE3MzM0NTI2NTk1NDg4NToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0orZXlmb0ZFUGlPNnJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZDJ3VlRQODdYMUF0bUdvaEpCbHlQN05jQ0tsYkpGaDFaTFVyb2JkZzR3TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpYzRydlJvbWZoNzVrRkh4Z216Sm5GVFV2ZytqakpaNzdKTmx5RDMycEUxbXZpVGNTTnR2MkVmcDl6MTR3UUpwMzIreEVENmtrZ2l6eGZiejFrOXNoQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvK3Bab1lnMlNScHFaWENBUHRzVWtjTlRYTk9oV2V0VWtsZ0ROMFNZNzd3QjRHb0ZiUWRNV1ViMHowVHVQdnNrd1hsb0lXZVkwM0RsK053NWlXNkVEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2MzY5MDcwMToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQwMzI1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUc4MlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRzgyLmpzb24iOiAie1wia2V5RGF0YVwiOlwieGVTTlZDR2FVSHdCNERLWUp5VFd6UHZUOXVzRVlpWEc0R0VCQm4xNkFMYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTk5MjI5NzI3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4NTc2NzczMTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
