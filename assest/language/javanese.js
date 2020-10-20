const config = require(`../config/bot.js`)

module.exports = {

    event: {
      cmdnotfound: "Perintah seng kok jaluk ora enek",
      mention1: ":wave: Halo, prefix ku neng server iki ",
      mention2: "Sampeyan durung ngerti informasi panggunaan "
      },
      
    start: {
      perms: ":warning: Sampeyan ora duwe `manage messages` ijin nggunakake perintah iki utawa :",
      channel: ":warning: Tulung lebokno teks `#salon` kangge start giveaway.",
      duration: ":warning: Tulung Wenehono durasine hadiah. Args kasedhiya `s` kanggo detik,` m` kanggo menit, `h` jam` d` dina. Contoh `10m`.",
      argswinners: ":warning: Tulung Wenehono nomer seng menang. Contoh `1` kanggo 1 pemenang utowo `2` kanggo 2 pemenang.",
      prize: ":warning: Tulung Wenehono hadiah kanggo seng menang. Conto `Nitro`.",
      good: ":tada: Aku ngluncurake hadiah ing ruang tamu:",

      giveaway: "**GIVEAWAY** 🎁",
      giveawayEnded: "**GIVEAWAY RAMPUNG** 🎁",

      timeRemaining: "Waktu Kesedia : **{duration}** !", 
      inviteToParticipate: (message) => `Pencet ${config.reaction} kanggo partisipasi !`,
      winMessage: (message) => `${config.reaction} Selamat, {winners} ! Lot : **{prize}** !`,
      embedFooter: "Giveaway",
      noWinner: "Giveaway dibatalno, kekurangan partisipan.",
      hostedBy: "Oleh : {user}",
      winners: "Pemenang",
      endedAt: "Rampung",
    },

   units: {
      seconds: "detik",
      minutes: "menit",
      hours: "jam",
      days: "dina",
    },

    help: {
      title: "Panel pitulung",
      description: "Temokake daftar perintahku ing panel iki, argumen wajib `<>`.",

      start: (message) => `**${config.prefix}start**`,
      startdescription: (message) => `Prentah iki digunakake kanggo ngluncurake giveaway.\nConto \`${config.prefix}start <#salon> <waktu> <pemenang> <lot>\`.`,

      end: (message) => `**${config.prefix}end**`,
      enddescription: (message) => `Prentah iki digunakake kanggo ngehapus giveaway.\nConto \`${config.prefix}end <ID giveaway>\`.`,

      reroll: (message) => `**${config.prefix}reroll**`,
      rerolldescription: (message) => `Prentah iki digunakake kanggo ngulangi giveaway.\nConto \`${config.prefix}reroll <ID giveaway>\`.`,

      edit: (message) => `**${config.prefix}edit**`,
      editdescription: (message) => `Prentah iki digunakake kanggo ngesunting giveaway.\nConto \`${config.prefix}edit <ID giveaway> <winners> <new lot>\`.`,

      lang: (message) => `**${config.prefix}lang**`,
      langdescription: (message) => `Prentah iki digunakake kanggo ngrubah bahasa bot.\nConto \`${config.prefix}lang <fr/en>\`.`,

      set: (message) => `**${config.prefix}set**`,
      setdescription: (message) => `Printah iki digunakake kanggo ngowahi konfigurasi bot.\nConto \`${config.prefix}set <mention/logs/role>\`.`,
    
      invite: (message) => `**${config.prefix}invite**`,
      invitedescription: (message) => `Prentah iki digunakake kanggo entuk tautan undhangan bot.\nConto \`${config.prefix}invite\`.`
    },

   end: {
      perms: ":warning: Sampeyan ora duwe `manage messages` ijin nggunakake perintah iki utawa :",
      msg: ":warning: Tulung lebokne giveaway ID.",
      err: ":warning: Aku ora bisa nemokake apa-apa neng giveaway :",
      errmod: ":warning: Ana kesalahan, mungkin giveaway iki wis rampung utawa dihapus?",
      good: ":hourglass_flowing_sand: Aku ngehapus content iki ing :"
    },

    reroll: {
      perms: ":warning: Sampeyan ora duwe `manage messages` ijin nggunakake perintah iki utawa :",
      msg: ":warning: Tulung lebokne giveaway ID.",
      err: ":warning: Aku ora bisa nemokake apa-apa neng giveaway :",
      good: ":tada: Pemenang anyar : {winners} ! Selamat !",
      parts: ":warning: Ora cukup peserta kanggo hadiah sing ora bisa takpilih."
    },

    edit: {
      perms: ":warning: Sampeyan ora duwe `manage messages` ijin nggunakake perintah iki utawa :",
      msg: ":warning: Tulung lebokne giveaway ID.",
      argswinners: ":warning: Tulung lebokno nomer indikasi pemenang. Contoh `1` kanggo 1 pemenang utowo `2` kanggo 2 pemenang.",
      prize: ":warning: Tulung Wenehono hadiah kanggo seng menang. Conto `Nitro`.",
      err: ":warning: Aku ora bisa nemokake apa-apa neng giveaway :",
      good: ":tada: Aku lagi proses ngowahi giveaway neng paramèter anyar. Pangowahan kasebut bakal ditrapake ing 5 detik'an.",
      errmod: ":warning: Ana kesalahan, mungkin giveaway iki wis rampung utawa dihapus?",
    },

    lang: {
      perms: ":warning: Sampeyan ora duwe `manage messages` ijin nggunakake perintah iki utawa :",
      msg: ":warning: Mangga wenehi basa sing bakal ditetepake `fr` french lan basa inggris `ing`.",
      err: ":warning: Basa sing dipilih wis dadi aktif ing server iki. Coba liyane, utowo delok bahasa liane ?"
    },

    set: {
      perms: ":warning: Sampeyan ora duwe `manage messages` ijin nggunakake perintah iki utawa :",
      msg: ":warning: Tandhani fungsi sing bakal ditemtokake `mention` kanggo nyebutake kabeh server yen ana hadiah,` log` kanggo netepake ruangan kanthi log hadiah, lan `role` milih peran supaya pangguna sing duwe bisa ngluncurake hadiah tanpa duwe izin kanggo ngatur pesen.",
      args: ":warning: Mangga wenehi fungsi `on` kanggo ngaktifake utawa` off` kanggo mateni.",
      erroff: ":warning: Fungsi iki wis dipateni. Coba aktifake kanggo ndelok ?",
      erron: ":warning: Fungsi iki wis diaktifake. Coba dipateni kanggo ndelok ?",
      mon: ":dividers: Aku wis ngaktifake fungsi `everyone` kanggo giveaway sabanjure.",
      moff: ":dividers: Aku wis mateni fungsi `everyone` Kanggo giveaway sekwise.",
      channel: ":warning: Mangga arahake aku menyang ruang obrolan teks, `# chat` kanggo netepake log.",
      chon: ":dividers: Aku nyiyapake log giveaway ing acara kasebut :",
      role: ":warning: Mangga wenehi role kanggo aku, `@ role` kanggo netepake role.",
      ron: ":dividers: Aku nentok ke peran alternatif karo :",
    },

    logs: {
      raddtitle: "Member anyar",
      raddmsg1: "Member",
      raddmsg2: "Tas gabung neng giveaway",
      rremtitle: "Mantan peserta",
      rremmsg1: "Member",
      rremmsg2: "Tas mbatalake entri kasebut ing giveaway",
    },

    invite: {
      title: "Matur suwun uwu!",
      description: (client) => `Matur suwun, wes milih ${client.user.username}! kanggo server iki`,
      server: "Perlu pitulung gabung karo server dukungan kanggo oleh informasi paling anyar",
      clickhere: "Pencet iki."
    },
    
    prefix: {
      title1: "Piye carane ngganti prefix?",
      usage: (client) => `\nConto: ${client.prefix}prefix set <newprefix>\nConto: ${client.prefix}prefix set +\n\nSub-command:\nreset: ngrubah ke prefix default, prefix.\nset: set prefix pilianmu.`,
      title: "Prefix anyar!",
      error: "❌ | Karakter prefix kudu luwih cilik soko 4 huruf",
      description: "Prefix neng server iki wes diset dadi",
      reset: "Prefix neng server iki wes direset ",
      perms: `Sampeyan ora duwe \`MANAGE_MESSAGES\` ijin kanggo gunakake perintah!`,
      prefix: "Tulis prefix anyar kanggi gunakake."
    },
};
