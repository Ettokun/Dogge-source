const config = require(`../config/bot.js`)

module.exports = {

    event: {
      cmdnotfound: "원하는 명령이 없습니다.",
      mention1: ":wave: 안녕하세요,이 길드의 접두사는 ",
      mention2: "아직 사용 정보를 모릅니다 "
      },
      
    start: {
      perms: ":warning: 당신은 부족 `manage messages` 이 명령 또는 :",
      channel: ":warning: 텍스트를 입력하세요 `#채널` 경품을 시작하려면.",
      duration: ":warning: 경품 기간을 표시하십시오. 사용 가능한 인수 `s` 몇 초 동안, `m` 몇 분 동안, `h` 매시간 `d` 며칠 동안. 예 `10m`.",
      argswinners: ":warning: 당첨자 수를 표시 해주세요. 예 `1` 한 명의 우승자 또는 `2` 두 명의 우승자.",
      prize: ":warning:당첨 될 상품을 표시 해주세요. 예 `니트로`.",
      good: ":tada: 거실에서 선물을 시작했습니다 :",

      giveaway: "**경품** 🎁",
      giveawayEnded: "**경품 완료** 🎁",

      timeRemaining: "남은 시간 : **{duration}** !", 
      inviteToParticipate: (message) => `클릭 ${config.reaction} 참여!`,
      winMessage: (message) => `${config.reaction} 축하합니다, {winners} ! 너는 좀 이겼다 : **{prize}** !`,
      embedFooter: "경품",
      noWinner: "참가자가 충분하지 않아 경품이 취소되었습니다.",
      hostedBy: "으로 : {user}",
      winners: "우승자",
      endedAt: "끝마친",
    },

   units: {
      seconds: "초",
      minutes: "의사록",
      hours: "시",
      days: "일",
    },

    help: {
      title: "도움말 패널",
      description: "이 패널에서 내 주문 목록, 필수 인수 찾기 `<>`.",

      start: (message) => `**${config.prefix}start**`,
      startdescription: (message) => `이 명령은 경품 행사를 시작하는 데 사용됩니다.\n용법 \`${config.prefix}start <#채널> <시각> <우승자> <lot>\`.`,

      end: (message) => `**${config.prefix}end**`,
      enddescription: (message) => `이 명령은 경품을 삭제하는 데 사용됩니다..\n용법 \`${config.prefix}end <ID 경품>\`.`,

      reroll: (message) => `**${config.prefix}reroll**`,
      rerolldescription: (message) => `이 명령은 경품을 다시 시작하는 데 사용됩니다.\n용법 \`${config.prefix}reroll<ID 경품>\`.`,

      edit: (message) => `**${config.prefix}edit**`,
      editdescription: (message) => `이 명령은 경품을 수정하는 데 사용됩니다.\n용법 \`${config.prefix}edit <ID 경품> <우승자> <새로운 lot>\`.`,

      lang: (message) => `**${config.prefix}lang**`,
      langdescription: (message) => `이 명령은 봇의 언어를 변경하는 데 사용됩니다.\n용법 \`${config.prefix}lang <fr/en>\`.`,

      set: (message) => `**${config.prefix}set**`,
      setdescription: (message) => `이 명령은 봇의 구성을 수정하는 데 사용됩니다.\n용법 \`${config.prefix}set <mention/logs/role>\`.`,
    
      invite: (message) => `**${config.prefix}invite**`,
      invitedescription: (message) => `이 명령은 봇의 초대 링크를 가져 오는 데 사용됩니다.\n용법 \`${config.prefix}invite\`.`
    },

   end: {
      perms: ":warning: You lack the `manage messages` permission to use this command or the :",
      msg: ":warning: Please enter a giveaway ID.",
      err: ":warning: I couldn't find anything for this giveaway :",
      errmod: ":warning: An error occurred, maybe this giveaway is already finished or deleted ?",
      good: ":hourglass_flowing_sand: I'm deleting this contest in :"
    },

    reroll: {
      perms: ":warning: You lack the `manage messages` permission to use this command or the :",
      msg: ":warning: Please enter a giveaway ID.",
      err: ":warning: I couldn't find anything for this giveaway :",
      good: ":tada: New winner(s) : {winners} ! Congratulations !",
      parts: ":warning: There weren't enough participants for this giveaway i can't choose."
    },

    edit: {
      perms: ":warning: You lack the `manage messages` permission to use this command or the :",
      msg: ":warning: Please enter a giveaway ID.",
      argswinners: ":warning: Please indicate the number of winners. Example `1` for one winner or `2` for two winners.",
      prize: ":warning: Please indicate the prize to be won. Example `a nitro`.",
      err: ":warning: I couldn't find anything for this giveaway :",
      good: ":tada: I'm in the process of modifying the giveaway with the new parameters. The changes will take effect in 5 seconds.",
      errmod: ":warning: An error occurred, maybe this giveaway is already finished or deleted ?"
    },

    lang: {
      perms: ":warning: 당신은 부족 `manage messages` 이 명령 또는.",
      msg: ":warning: 정의 할 언어를 지정하십시오 `fr` french 과 `en` english.",
      err: ":warning: 선택한 언어는 이미이 서버에서 활성화되어 있습니다. 볼 다른 것을 시도하십시오?"
    },

    set: {
      perms: ":warning:당신은 부족 `manage messages` 이 명령 또는.",
      msg: ":warning: 경품 행사가 진행중인 경우 전체 서버를 언급하기 위해 정의 할 기능을 '멘션'으로 지정하세요, `logs`, 공짜 로그가있는 방을 정의하고 `role` 역할을 가진 사용자가 메시지 관리 권한없이 경품 행사를 시작할 수 있도록 역할 선택.",
      args: ":warning: 기능을 지정하십시오 `on` 활성화하거나 `off` 비활성화하려면.",
      erroff: ":warning:이 기능은 이미 비활성화되어 있습니다. 확인하려면 켜보세요?",
      erron: ":warning: 이 기능은 이미 활성화되어 있습니다. 확인하려면 해제 해보세요.",
      mon: ":dividers: 다음 경품 행사를 위해 `모두`기능을 활성화했습니다.",
      moff: ":dividers:다음 경품 행사를 위해 `모든 사람`기능을 비활성화했습니다. ",
      channel: ":warning: 로그를 정의 할 수있는 문자 채팅방`#chat`을 알려주세요.",
      chon: ":dividers: 나는 쇼에 경품 로그를 설정했다 :",
      role: ":warning: 역할을 정의 할 역할을 `@role`로 지정해주세요.",
      ron: ":dividers: 대체 역할을 다음과 같이 정의했습니다.",
    },

    logs: {
      raddtitle: "새로운 회원",
      raddmsg1: "회원",
      raddmsg2: "방금 경품 행사에 참여했습니다.",
      rremtitle: "이전 참가자",
      rremmsg1: "회원",
      rremmsg2: "방금 경품 행사에 참가를 취소했습니다",
    },

    invite: {
      title: "감사합니다!",
      description: (client) => `Yeay 선택해 주셔서 감사합니다 ${client.user.username}!서버에 추가하려면`,
      server: "최신 정보를 얻으려면 지원 서버에 가입하는 데 도움이 필요합니다.",
      clickhere: "여기를 클릭하세요"
    },
    
    prefix: {
      title1: "접두사를 변경하는 방법?",
      usage: (client) => `\n용법: ${client.prefix}prefix set <새 접두사>\n예: ${client.prefix}prefix set +\n\n하위 명령:\nreset: 기본 접두사 설정.\nset: 원하는 접두사 설정.`,
      title: "새로운 접두사!",
      error: "❌ | 접두사는 4 자 미만이어야합니다.",
      description: "이 서버의 접두사가 다음으로 설정되었습니다 ",
      reset: "이 서버의 접두사가 재설정되었습니다.",
      perms: `당신은 가지고 있지 않습니다 \`MANAGE_MESSAGES\` 이 명령을 사용할 수있는 권한!`,
      prefix: "사용할 새 접두사를 입력하십시오."
    },
};
