
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp) => { 
	return `                 
┏━━❉ *𝐇𝐈𝐃𝐄𝐊𝐈 𝐁𝐎𝐓* ❉━━━┓
┣⊱ *nome* : ${pushname}
┣⊱ *numero* : wa.me/${sender.split("@")[0]}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱ *level* : ${getLevelingLevel(sender)}
┗━━━━━━━━━━━━━━━━
       𝓜𝓔𝓝𝓤    
┗━━━━━━━━━━━━━━━━
┏━━❉ *NIVEL 1* ❉━━┓
┣⊱ *${prefix}sticker*
┣⊱ *${prefix}tts*
┣⊱ *${prefix}toimg*
┣━━❉ *NIVEL 2* ❉━━
┣⊱ *${prefix}ocr*
┣⊱ *${prefix}quotemaker*
┣⊱ *${prefix}tiktokstalk*
┣⊱ *${prefix}fototiktok*
┣⊱ *${prefix}truth*
┣⊱ *${prefix}dare*
┣━━❉ *NIVEL 3* ❉━━
┣⊱ *${prefix}text3d*
┣⊱ *${prefix}bucin*
┣⊱ *${prefix}hilih*
┣⊱ *${prefix}persengay*
┣⊱ *${prefix}ssweb*
┣━━❉ *NIVEL 4* ❉━━
┣⊱ *${prefix}artinama*
┣⊱ *${prefix}spamcall*
┣⊱ *${prefix}quotes*
┣⊱ *${prefix}kbbi*
┣⊱ *${prefix}map*
┣⊱ *${prefix}cerpen*
┣━━❉ *NIVEL 5* ❉━━
┣⊱ *${prefix}chord*
┣⊱ *${prefix}lirik*
┣⊱ *${prefix}phlogo*
┣━━❉ *NIVEL 6* ❉━━
┣⊱ *${prefix}bisakah*
┣⊱ *${prefix}apakah*
┣⊱ *${prefix}kapankah*
┣⊱ *${prefix}rate*
┣⊱ *${prefix}owner*
┗━━━━━━━━━━━━━━

┏━━❉ *Nsfw* ❉━━━━┓
┣⊱ *${prefix}waifu*
┣⊱ *${prefix}anime*
┣⊱ *${prefix}neko*
┣⊱ *${prefix}dewabatch*
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}indohot*
┗━━━━━━━━━━━━━━

┏━━❉ *GRUPO* ❉━━━━┓
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add*
┣⊱ *${prefix}kick*
┣⊱ *${prefix}setname*
┣⊱ *${prefix}setdesc*
┣⊱ *${prefix}demote*
┣⊱ *${prefix}promote*
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━❉ *Owner* ❉━━
┣⊱ *${prefix}bc*
┣⊱ *${prefix}setprefix*
┣⊱ *${prefix}getses*
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block*
┣⊱ *${prefix}unblock*
┣⊱ *${prefix}leave*
┣⊱ *${prefix}clone*
┗━━━━━━━━━━━━━━━━

 ┣━━❉ *𝓜𝓔𝓝𝓤 𝓣𝓣𝓢* ❉━━

┣ 'af': 'Afrikaans',
┣ 'sq': 'Albanian',
┣ 'ar': 'Arabic',
┣ 'hy': 'Armenian',
┣ 'ca': 'Catalan',
┣ 'zh': 'Chinese',
┣ 'zh-cn': 'Chinese (Mandarin/China)',
┣ 'zh-tw': 'Chinese (Mandarin/Taiwan)',
┣ 'zh-yue': 'Chinese (Cantonese)',
┣ 'hr': 'Croatian',
┣ 'cs': 'Czech',
┣ 'da': 'Danish',
┣ 'nl': 'Dutch',
┣ 'en': 'English',
┣ 'en-au': 'English (Australia)',
┣ 'en-uk': 'English (United Kingdom)',
┣ 'en-us': 'English (United States)',
┣ 'eo': 'Esperanto',
┣ 'fi': 'Finnish',
┣ 'fr': 'French',
┣ 'de': 'German',
┣ 'el': 'Greek',
┣ 'ht': 'Haitian Creole',
┣ 'hi': 'Hindi',
┣ 'hu': 'Hungarian',
┣ 'is': 'Icelandic',
┣ 'id': 'Indonesian',
┣ 'it': 'Italian',
┣ 'ja': 'Japanese',
┣ 'ko': 'Korean',
┣ 'la': 'Latin',
┣ 'lv': 'Latvian',
┣ 'mk': 'Macedonian',
┣ 'no': 'Norwegian',
┣ 'pl': 'Polish',
┣ 'pt': 'Portuguese',
┣ 'pt-br': 'Portuguese (Brazil)',
┣ 'ro': 'Romanian',
┣ 'ru': 'Russian',
┣ 'sr': 'Serbian',
┣ 'sk': 'Slovak',
┣ 'es': 'Spanish',
┣ 'es-es': 'Spanish (Spain)',
┣ 'es-us': 'Spanish (United States)',
┣ 'sw': 'Swahili',
┣ 'sv': 'Swedish',
┣ 'ta': 'Tamil',
┣ 'th': 'Thai',
┣ 'tr': 'Turkish',
┣ 'vi': 'Vietnamese',
┣ 'cy': 'Welsh'
┗━━━━━━━━━━━━━━━━
𝐍Ú𝐌𝐄𝐑𝐎 𝐃𝐎 𝐌𝐄𝐔 𝐂𝐑𝐈𝐀𝐃𝐎𝐑:Wa.me/+5511946462131
`
}
exports.help = help



  
