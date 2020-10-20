const config = require(`../config/bot.js`)

module.exports = {

    event: {
      cmdnotfound: "Perintah itu yang kamu minta tidak ada.",
      mention1: ":wave: Halo prefik saya di guild ini adalah ",
      mention2: "Kamu tidak tahu penggunaan informasi "
      },
      
    start: {
      perms: ":warning: Kamu kekuarangan izin `Manage Message` untuk menggunakan perintah ini atau:",
      channel: ":warning: Mohon isikan teks `#salon` untuk memulaikan giveaway.",
      duration: ":warning: Harap sebutkan durasi giveaway.  Argumen tersedia `s` untuk detik,` m` untuk menit, `h` untuk jam dan` d` untuk hari.  Contoh `10m`.",
      argswinners: ":warning: Harap sebutkan jumblah pemenang. Contoh `1` untuk satu pemenang atau `2` untuk 2 pemenang.",
      prize: ":warning: Harap sebutkan hadiah untuk menang. Contoh `sebuah nitro`.",
      good: ":tada: Aku meluncurkan giveaway di ruang keluarga :",

      giveaway: "**GIVEAWAY** 🎁",
      giveawayEnded: "**GIVEAWAY SELESAI** 🎁",

      timeRemaining: "Waktu Tersisa: **{duration}** !", 
      inviteToParticipate: (message) => `Tekan di ${config.reaction} untuk berpartisipasi !`,
      winMessage: (message) => `${config.reaction} Selamat!, {winners} ! Banyak : **{prize}** !`,
      embedFooter: "Giveaway",
      noWinner: "Giveaway Digagalkan, karena kurangnya peserta.",
      hostedBy: "Dari : {user}",
      winners: "Pemenang",
      endedAt: "Selesai",
    },

   units: {
      seconds: "detik",
      minutes: "menit",
      hours: "jam",
      days: "hari",
    },

    help: {
      title: "Panel Bantuan",
      description: "Temukan daftar pesanan saya di panel ini, argumen wajib `<>`. ",

      start: (message) => `**${config.prefix}start**`,
      startdescription: (message) => `Perintah Ini Untuk memulaikan Giveaway.\nPenggunaan \`${config.prefix}start <#salon> <time> <winners> <lot>\`.`,

      end: (message) => `**${config.prefix}end**`,
      enddescription: (message) => `Perintah Ini Untuk Menghapus Giveaway.\nPenggunaan \`${config.prefix}end <ID giveaway>\`.`,

      reroll: (message) => `**${config.prefix}reroll**`,
      rerolldescription: (message) => `Perintah ini untuk memulai ulang giveaway.\nPenggunaan \`${config.prefix}reroll <ID giveaway>\`.`,

      edit: (message) => `**${config.prefix}edit**`,
      editdescription: (message) => `Perintah ini untuk modifikasi Giveaway.\Penggunaan \`${config.prefix}edit <ID giveaway> <winners> <new lot>\`.`,

      lang: (message) => `**${config.prefix}lang**`,
      langdescription: (message) => `Perintah ini untuk mengubah bahasa bot.\Penggunaan \`${config.prefix}lang <fr/en>\`.`,

      set: (message) => `**${config.prefix}set**`,
      setdescription: (message) => `Perintah ini untuk modifikasi konfigurasi bot.\Penggunaan \`${config.prefix}set <mention/logs/role>\`.`,
    
      invite: (message) => `**${config.prefix}invite**`,
      invitedescription: (message) => `Perintah ini untuk mendapatkan undangan bot.\Penggunaan \`${config.prefix}invite\`.`
    },

   end: {
      perms: ":warning: kamu kekurangan izin `Manage Messages` untuk menggunakan perintah ini atau:",
      msg: ":warning: Mohon isikan ID Giveaway.",
      err: ":warning: Aku tidak menemukan sesuatu untuk giveaway ini:",
      errmod: ":warning: terjadi kesalahan, apakah giveaway telah selesai atau terhapus?",
      good: ":hourglass_flowing_sand: Aku menghapus kontes di:"
    },

    reroll: {
      perms: ":warning: kamu kekurangan izin `Manage Messages` untuk menggunakan perintah ini atau :",
      msg: ":warning: Mohon isikan ID Giveaway.",
      err: ":warning:  Aku tidak menemukan sesuatu untuk giveaway ini :",
      good: ":tada: Pemenang Baru : {winners} ! Selamat !",
      parts: ":warning: mereka tidak cukup peserta untuk giveaway itu , saya tidak bisa memilih."
    },

    edit: {
      perms: ":warning:Kamu kekuarangan izin `Manage Message` untuk menggunakan perintah ini atau:",
      msg: ":warning: Mohon isikan ID Giveaway.",
      argswinners: ":warning: Harap sebutkan jumblah pemenang. Contoh `1` untuk satu pemenang atau `2` untuk 2 pemenang.",
      prize: ":warning: Harap sebutkan hadiah untuk menang. Contoh `sebuah nitro`.",
      err: ":warning: Aku tidak menemukan sesuatu untuk giveaway ini :",
      good: ":tada: Saya sedang dalam proses memodifikasi giveaway dengan parameter baru. Perubahan akan berlaku dalam 5 detik.",
      errmod: ":warning: Terjadi error, mungkin giveaway ini sudah selesai atau dihapus ?"
    },

    lang: {
      perms: ":warning: kamu kekurangan izin `Manage Messages` untuk menggunakan perintah ini.",
      msg: ":warning: mohon sebutkan bahasa yang definisikan `fr` bahasa perancis, `en` bahasa inggris dan `id-in` bahasa indonesia.",
      err: ":warning: satu bahasa ini telah aktif di server ini. Coba yang lain untuk melihat ?"
    },

    set: {
      perms: ":warning: kamu kekurangan izin `Manage Messages` untuk menggunakan perintah ini.",
      msg: ":warning:Tunjukkan fungsi yang akan didefinisikan `mention` untuk menyebutkan seluruh server jika giveaway sedang berjalan,` logs` untuk menentukan ruangan dengan log giveaway, dan `role` memilih peran sehingga pengguna yang memilikinya dapat meluncurkan giveaway tanpa memiliki izin untuk mengelola pesan.",
      args: ":warning: Harap tunjukkan fungsi ʻon` untuk diaktifkan atau ʻoff` untuk menonaktifkan.",
      erroff: ":warning: Fungsi ini sudah dinonaktifkan. Coba nyalakan untuk melihat?",
      erron: ":warning: Fungsi ini sudah diaktifkan. Coba matikan untuk melihat?",
      mon: ":dividers: Saya telah mengaktifkan fungsi ʻeveryone` untuk giveaway berikutnya.",
      moff: ":dividers: Saya telah menonaktifkan fungsi ʻeveryone` untuk giveaway berikutnya.",
      channel: ":warning: Harap arahkan saya ke ruang obrolan teks, `#chat` untuk menentukan log.",
      chon: ":dividers: Saya menyiapkan log giveaway di acara itu:",
      role: ":warning: Tunjukkan peran bagi saya, `@role` untuk menentukan peran.",
      ron: ":dividers: Saya mendefinisikan peran alternatif dengan:",
    },

    logs: {
      raddtitle: "Anggota baru",
      raddmsg1: "Anggota",
      raddmsg2: "baru saja bergabung dengan giveaway",
      rremtitle: "mantan peserta",
      rremmsg1: "anggota",
      rremmsg2: "baru saja membatalkan entri di giveaway",
    },

    invite: {
      title: "Terima Kasih UwU!", 
      description: (client) => `Yeay terima kasih telah memilih ${client.user.username}! Ke server anda`,
      server: "Perlu bantuan untuk bergabung dengan server dukungan untuk mendapatkan informasi terbaru",
      clickhere: "tekan disini."
    },
    
    prefix: {
      title1: "Bagaimana cara mengubah prefik?",
      usage: (client) => `\nPengunaan: ${client.prefix}prefix set <newprefix>\nContoh: ${client.prefix}prefix set +\n\nSub-perintah:\nreset: ubah prefik yang biasa.\nset: atur prefik pilihan Anda.`,
      title: "Prefik Baru!",
      error: "❌ |  karakter prefik harus memiliki kurang dari 4",
      description: "Prefix for this server has been set to ",
      reset: "Prefik untuk server ini telah di setel ulang ",
      perms: `Kamu tidak memiliki izin \`MANAGE_MESSAGES\` untuk perintah ini`,
      prefix: "Tuliskan Prefik baru untuk digunakan."
    },
};
