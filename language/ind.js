exports.wait = () => {
	return`*「 𝐂𝐀𝐑𝐑𝐄𝐆𝐀𝐍𝐃𝐎 」 AGUARDE UM POUCO MANO TÔ PROCESSANDO O BAGUIO*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 HABILITAR 」 NIVEL*`
}

exports.lvloff = () => {
	return`*「 DESATIVAR 」 NIVEL*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*NIVEL DO GRUB NÃO ATIVADO*`
}

exports.noregis = () => {
	return`*「 NÃO REGISTRADO 」*\n\n*𝐏𝐀𝐑𝐀 𝐕𝐂 𝐓𝐄𝐑 𝐀𝐂𝐄𝐒𝐒𝐎 𝐀𝐎 𝐁𝐎𝐓 𝐕𝐂 𝐏𝐑𝐄𝐂𝐈𝐒𝐀 𝐒𝐄 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐑=(𝐬𝐞𝐮 𝐧𝐨𝐦𝐞 𝐩𝐫𝐢𝐦𝐞𝐢𝐫𝐨 𝐞 𝐢𝐝𝐚𝐝𝐞 𝐝𝐞𝐩𝐨𝐢𝐬) \n*𝓮𝔁: ${prefix}𝐝𝐚𝐟𝐭𝐚𝐫 𝐡𝐢𝐝𝐞𝐤𝐢|𝟏𝟗*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n*𝐕𝐂 𝐉Á 𝐄𝐒𝐓Á 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎 𝐍𝐎 𝐁𝐎𝐓*`
}

exports.stikga = () => {
	return`*sim falhou tente repetir em alguns momentos*`
}

exports.linkga = () => {
	return`*desculpe link inválido*`
}

exports.groupo = () => {
	return`*「SÓ GRUPO」*`
}

exports.ownerb = () => {
	return`*「DONO DO BOT APENAS」*`
}

exports.ownerg = () => {
	return`*「SOMENTE GRUPO DE PROPRIETÁRIOS」*`
}

exports.admin = () => {
	return`*「SOMENTE GRUPO DE ADMINISTRAÇÃO」*`
}

exports.badmin = () => {
	return`*「O BOT DEVE SER ADMINISTRADOR」*`
}

exports.nsfwoff = () => {
	return`*NSFW EM ATIVO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*Formato incorreto/texto em branco*`
}

exports.clears = () => {
	return`*limpar tudo o sucesso*`
}

exports.pc = () => {
	return`*「 CADASTRO 」*\n\𝐩𝐚𝐫𝐚 𝐬𝐚𝐛𝐞𝐫 𝐬𝐞 𝐯𝐨𝐜ê 𝐬𝐞 𝐜𝐚𝐝𝐚𝐬𝐭𝐫𝐨𝐮, 𝐯𝐞𝐫𝐢𝐟𝐢𝐪𝐮𝐞 𝐚 𝐦𝐞𝐧𝐬𝐚𝐠𝐞𝐦 𝐪𝐮𝐞 𝐞𝐧𝐯𝐢𝐞𝐢 \n\nNOTE:\n*𝐬𝐞 𝐯𝐨𝐜ê 𝐧ã𝐨 𝐫𝐞𝐜𝐞𝐛𝐞𝐮 𝐚 𝐦𝐞𝐧𝐬𝐚𝐠𝐞𝐦 𝐬𝐢𝐠𝐧𝐢𝐟𝐢𝐜𝐚 𝐪𝐮𝐞 𝐯𝐨𝐜ê 𝐧ã𝐨 𝐬𝐚𝐥𝐯𝐨𝐮 𝐨 𝐧ú𝐦𝐞𝐫𝐨 𝐝𝐨 𝐛𝐨𝐭*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA DE REGISTRO *𝐇𝐈𝐃𝐄𝐊𝐈 𝐁𝐎𝐓*」*\n\nvocê se registrou com os dados \n\n┏━⊱nome\n┗⊱${namaUser}\n┏━⊱numero\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱idade\n┗⊱${umurUser}\n┏━⊱hora de registro\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTA : não se esqueça deste número porque é importante:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} não o script do dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} seu nível não é suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱requisitos de nível : ${aha}*\n\n_NOTE : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} seu nível não é suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱requisitos de nível : ${ahb}*\n\n_NOTE : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} seu nível não é suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱requisitos de nível : ${ahc}*\n\n_NOTE : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} seu nível não é suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱requisitos de nível : ${ahd}*\n\n_NOTE : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} seu nível não é suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱requisitos de nível : ${ahe}*\n\n_NOTE : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} seu nível não é suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱requisitos de nível : ${ahf}*\n\n_NOTE : CHAT / SEMPRE PARA OBTER XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
╭══─⊱ ❰ *𝐇𝐈𝐃𝐄𝐊𝐈 𝐁𝐎𝐓* ❱ ⊰─══
╠☞ *Nome* : ${pushname}
╠☞ *Numero* : wa.me/${sender.split("@")[0]}
╠☞ *O teu dinheiro* : Rp${uangku}
╠☞ *XP* : ${getLevelingXp(sender)}/${reqXp}
╠☞ *Level* : ${getLevelingLevel(sender)}
╠☞ *User register* : ${_registered.length}
╰════─⊱  ⸨ *𝐇𝐈𝐃𝐄𝐊𝐈 𝐁𝐎𝐓* ⸩  ⊰─════╯

          
▬▭▬▭▬▭▬▭▬▭▬▭▬
* Spam: bloqueio automático! *
● ⧐ *Dê uma pausa de 5 segundos ao usar!!*
● ⧐ *Bug / Erro, por favor, Cht Owner!*
● ⧐ *Para garantir que o bot está desligado ou ligado*
● ⧐ *Digite $ {prefix} bot*
● ⧐ *Faça o melhor uso do bot!*
▬▭▬▭▬▭▬▭▬▭▬▭▬

╭══─⊱ ❰ *MAKER MENU* ❱ ⊰─══➤
╠☞ *${prefix}sticker*
╠☞ *${prefix}vinta*
╠☞ *${prefix}avengers*
╠☞ *${prefix}summer*
╠☞ *${prefix}sandwrite*
╠☞ *${prefix}metaldark*
╠☞ *${prefix}dropwater*
╠☞ *${prefix}greenneon*
╠☞ *${prefix}neontext*
╠☞ *${prefix}sumery*
╠☞ *${prefix}blood*
╠☞ *${prefix}firework*
╠☞ *${prefix}lava*
║
╠══─⊱ ❰ *FUL MENU* ❱ ⊰─════➤
╠☞ *${prefix}mining*
╠☞ *${prefix}bisakah*
╠☞ *${prefix}kapankah*
╠☞ *${prefix}apakah*
╠☞ *${prefix}rate*
╠☞ *${prefix}slap*
╠☞ *${prefix}tampar*
╠☞ *${prefix}speed*
║
╠══─⊱ ❰ *MiDIA MENU* ❱ ⊰─═══➤
╠☞ *${prefix}toxic*
╠☞ *${prefix}quotes*
╠☞ *${prefix}beritahoax*
╠☞ *${prefix}brainly*
╠☞ *${prefix}pinterest*
╠☞ *${prefix}resepmasakan*
╠☞ *${prefix}igstalk*
║
╠══─⊱ ❰ *LIMIT MENU* ❱ ⊰─═══➤
╠☞ *${prefix}limit*
╠☞ *${prefix}buylimit*
╠☞ *${prefix}dompet*
║
╠══─⊱ ❰ *NSFW MENU* ❱ ⊰─═══➤
╠☞ *${prefix}pokemon*
╠☞ *${prefix}anjing*
╠☞ *${prefix}1cak*
║
╠══─⊱ ❰ *GRUPO MENU* ❱ ⊰─══➤
╠☞ *${prefix}hidetag*
╠☞ *${prefix}grouplist*
╠☞ *${prefix}limit*
╠☞ *${prefix}level*
╠☞ *${prefix}linkgc*
╠☞ *${prefix}tagall*
╠☞ *${prefix}setpp*
╠☞ *${prefix}add*
╠☞ *${prefix}kick*
╠☞ *${prefix}setname*
╠☞ *${prefix}setdesc*
╠☞ *${prefix}demote*
╠☞ *${prefix}promote*
╠☞ *${prefix}listadmin*
╠☞ *${prefix}group* [buka/tutup]
╠☞ *${prefix}leveling* [enable/disable]
╠☞ *${prefix}nsfw* [1/0]
╠☞ *${prefix}simih* [1/0]
╠☞ *${prefix}welcome* [1/0]
║
╠══─⊱ ❰ *OWNER MENU* ❱ ⊰─══➤
╠☞ *${prefix}bc*
╠☞ *${prefix}bcgc*
╠☞ *${prefix}kickall*
╠☞ *${prefix}setreply*
╠☞ *${prefix}setprefix*
╠☞ *${prefix}clearall*
╠☞ *${prefix}block*
╠☞ *${prefix}unblock*
╠☞ *${prefix}leave*
╠☞ *${prefix}event* [1/0]
╠☞ *${prefix}clone*
╠☞ *${prefix}setppbot*
║
╠══─⊱ ❰ *𝐇𝐈𝐃𝐄𝐊𝐈 𝐁𝐎𝐓* ❱ ⊰─══➤
║
╰════─⊱  ⸨ *𝐇𝐈𝐃𝐄𝐊𝐈 𝐁𝐎𝐓* ⸩  ⊰─════╯

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

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 FELIZ 」*
┏⊱ *Nome* : ${pushname}
┣⊱ *Numero* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} O limite de hoje expira * \ n * o limite é redefinido a cada hora 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : para chegar ao limite. pode passar de nível ou limite de capacidade`
}

exports.satukos = () => {
	return`*Adicionar 1 / ativar ou 0 / desativar parâmetros`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
