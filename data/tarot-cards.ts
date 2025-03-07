export // Tarot card data
const tarotCards = [
  {
    name: "광대 (The Fool)",
    image: "/tarot-cards/Major Arcana/fool.jpg",
    meaning: "새로운 시작, 순수함, 모험을 의미합니다. 두려움 없이 앞으로 나아가세요.",
  },
  {
    name: "마법사 (The Magician)",
    image: "/tarot-cards/Major Arcana/magician.jpg",
    meaning: "창의력, 숙련된 기술, 자원의 활용을 상징합니다. 당신의 잠재력을 발휘하세요.",
  },
  {
    name: "여사제 (The High Priestess)",
    image: "/tarot-cards/Major Arcana/high-priestess.jpg",
    meaning: "직관, 내면의 지혜, 잠재의식을 나타냅니다. 내면의 목소리에 귀를 기울이세요.",
  },
  {
    name: "여황제 (The Empress)",
    image: "/tarot-cards/Major Arcana/empress.jpg",
    meaning: "풍요, 창조성, 모성을 상징합니다. 성장과 번영의 시기입니다.",
  },
  {
    name: "황제 (The Emperor)",
    image: "/tarot-cards/Major Arcana/emperor.jpg",
    meaning: "권위, 구조, 안정성을 나타냅니다. 리더십을 발휘할 때입니다.",
  },
  {
    name: "교황 (The Hierophant)",
    image: "/tarot-cards/Major Arcana/hierophant.jpg",
    meaning: "전통, 교육, 영적 지도를 상징합니다. 지혜를 구하고 배우세요.",
  },
  {
    name: "연인 (The Lovers)",
    image: "/tarot-cards/Major Arcana/lovers.jpg",
    meaning: "사랑, 조화, 관계성을 나타냅니다. 중요한 선택의 시기입니다.",
  },
  {
    name: "전차 (The Chariot)",
    image: "/tarot-cards/Major Arcana/chariot.jpg",
    meaning: "의지력, 성공, 결단력을 상징합니다. 목표를 향해 전진하세요.",
  },
  {
    name: "힘 (Strength)",
    image: "/tarot-cards/Major Arcana/strength.jpg",
    meaning: "내면의 힘, 용기, 인내를 나타냅니다. 당신의 내면의 힘을 믿으세요.",
  },
  {
    name: "은둔자 (The Hermit)",
    image: "/tarot-cards/Major Arcana/hermit.jpg",
    meaning: "내면의 성찰, 고독, 지혜를 상징합니다. 고요히 자신을 돌아보세요.",
  },
  {
    name: "운명의 수레바퀴 (Wheel of Fortune)",
    image: "/tarot-cards/Major Arcana/wheel-of-fortune.jpg",
    meaning: "운명, 순환, 전환점을 나타냅니다. 변화를 받아들이세요.",
  },
  {
    name: "정의 (Justice)",
    image: "/tarot-cards/Major Arcana/justice.jpg",
    meaning: "균형, 진실, 인과응보를 상징합니다. 공정한 결과가 있을 것입니다.",
  },
  {
    name: "매달린 사람 (The Hanged Man)",
    image: "/tarot-cards/Major Arcana/hanged-man.jpg",
    meaning: "희생, 포기, 새로운 관점을 나타냅니다. 다른 시각으로 바라보세요.",
  },
  {
    name: "죽음 (Death)",
    image: "/tarot-cards/Major Arcana/death.jpg",
    meaning: "끝과 시작, 변화, 변형을 상징합니다. 새로운 시작이 기다립니다.",
  },
  {
    name: "절제 (Temperance)",
    image: "/tarot-cards/Major Arcana/temperance.jpg",
    meaning: "균형, 조화, 절제를 나타냅니다. 중용을 지키세요.",
  },
  {
    name: "악마 (The Devil)",
    image: "/tarot-cards/Major Arcana/devil.jpg",
    meaning: "속박, 집착, 물질주의를 상징합니다. 당신을 구속하는 것을 파악하세요.",
  },
  {
    name: "탑 (The Tower)",
    image: "/tarot-cards/Major Arcana/tower.jpg",
    meaning: "갑작스러운 변화, 혼돈, 계시를 나타냅니다. 피할 수 없는 변화가 옵니다.",
  },
  {
    name: "별 (The Star)",
    image: "/tarot-cards/Major Arcana/star.jpg",
    meaning: "희망, 영감, 평온을 상징합니다. 긍정적인 기운이 함께합니다.",
  },
  {
    name: "달 (The Moon)",
    image: "/tarot-cards/Major Arcana/moon.jpg",
    meaning: "환상, 불확실성, 직관을 나타냅니다. 내면의 두려움을 마주하세요.",
  },
  {
    name: "태양 (The Sun)",
    image: "/tarot-cards/Major Arcana/sun.jpg",
    meaning: "성공, 기쁨, 활력을 상징합니다. 밝은 미래가 기다립니다.",
  },
  {
    name: "심판 (Judgement)",
    image: "/tarot-cards/Major Arcana/judgement.jpg",
    meaning: "재생, 깨달음, 변화를 나타냅니다. 새로운 소명을 발견하세요.",
  },
  {
    name: "세계 (The World)",
    image: "/tarot-cards/Major Arcana/world.jpg",
    meaning: "완성, 성취, 통합을 상징합니다. 목표가 달성되는 시기입니다.",
  },
  // Wands
  {
    name: "완드의 에이스 (Ace of Wands)",
    image: "/tarot-cards/Wands/Ace of Wands.jpg",
    meaning: "새로운 시작, 영감, 창의력의 불꽃이 타오르는 시기입니다.",
  },
  {
    name: "완드의 2 (Two of Wands)",
    image: "/tarot-cards/Wands/Two of Wands.jpg",
    meaning: "계획, 결정, 미래에 대한 비전을 고민하는 시기입니다.",
  },
  {
    name: "완드의 3 (Three of Wands)",
    image: "/tarot-cards/Wands/Three of Wands.jpg",
    meaning: "확장, 모험, 새로운 기회가 다가오고 있습니다.",
  },
  {
    name: "완드의 4 (Four of Wands)",
    image: "/tarot-cards/Wands/Four of Wands.jpg",
    meaning: "축하, 성공, 안정된 기반을 이루는 시기입니다.",
  },
  {
    name: "완드의 5 (Five of Wands)",
    image: "/tarot-cards/Wands/Five of Wands.jpg",
    meaning: "경쟁, 갈등, 도전적인 상황에 직면할 수 있습니다.",
  },
  {
    name: "완드의 6 (Six of Wands)",
    image: "/tarot-cards/Wands/Six of Wands.jpg",
    meaning: "승리, 인정, 자부심을 느끼는 순간이 찾아옵니다.",
  },
  {
    name: "완드의 7 (Seven of Wands)",
    image: "/tarot-cards/Wands/Seven of Wands.jpg",
    meaning: "방어, 도전, 자신의 입장을 지켜내야 하는 시기입니다.",
  },
  {
    name: "완드의 8 (Eight of Wands)",
    image: "/tarot-cards/Wands/Eight of Wands.jpg",
    meaning: "빠른 진전, 움직임, 소식이 전해지는 시기입니다.",
  },
  {
    name: "완드의 9 (Nine of Wands)",
    image: "/tarot-cards/Wands/Nine of Wands.jpg",
    meaning: "인내, 경계, 마지막 시험에 직면하게 됩니다.",
  },
  {
    name: "완드의 10 (Ten of Wands)",
    image: "/tarot-cards/Wands/Ten of Wands.jpg",
    meaning: "부담, 책임, 과도한 짐을 짊어지고 있습니다.",
  },
  {
    name: "완드의 시종 (Page of Wands)",
    image: "/tarot-cards/Wands/Page of Wands.jpg",
    meaning: "열정적인 시작, 모험심, 새로운 아이디어가 떠오릅니다.",
  },
  {
    name: "완드의 기사 (Knight of Wands)",
    image: "/tarot-cards/Wands/Knight of Wands.jpg",
    meaning: "행동, 모험, 열정적으로 전진하는 시기입니다.",
  },
  {
    name: "완드의 여왕 (Queen of Wands)",
    image: "/tarot-cards/Wands/Queen of Wands.jpg",
    meaning: "자신감, 매력, 창의적 에너지가 넘치는 때입니다.",
  },
  {
    name: "완드의 왕 (King of Wands)",
    image: "/tarot-cards/Wands/King of Wands.jpg",
    meaning: "카리스마, 리더십, 창의적인 비전을 실현하는 시기입니다.",
  },
  // Pentacles
  {
    name: "펜타클의 에이스 (Ace of Pentacles)",
    image: "/tarot-cards/Pentacles/Ace of Pentacles.jpg",
    meaning: "새로운 기회, 물질적 시작, 번영의 씨앗이 뿌려집니다.",
  },
  {
    name: "펜타클의 2 (Two of Pentacles)",
    image: "/tarot-cards/Pentacles/Two of Pentacles.jpg",
    meaning: "균형, 유연성, 여러 상황을 조율해야 합니다.",
  },
  {
    name: "펜타클의 3 (Three of Pentacles)",
    image: "/tarot-cards/Pentacles/Three of Pentacles.jpg",
    meaning: "팀워크, 숙련도, 협력을 통한 성과를 이룹니다.",
  },
  {
    name: "펜타클의 4 (Four of Pentacles)",
    image: "/tarot-cards/Pentacles/Four of Pentacles.jpg",
    meaning: "안정, 보안, 소유에 대한 집착을 조심하세요.",
  },
  {
    name: "펜타클의 5 (Five of Pentacles)",
    image: "/tarot-cards/Pentacles/Five of Pentacles.jpg",
    meaning: "어려움, 고난, 물질적 또는 영적 빈곤을 겪을 수 있습니다.",
  },
  {
    name: "펜타클의 6 (Six of Pentacles)",
    image: "/tarot-cards/Pentacles/Six of Pentacles.jpg",
    meaning: "관용, 나눔, 주고받는 것의 균형을 이루세요.",
  },
  {
    name: "펜타클의 7 (Seven of Pentacles)",
    image: "/tarot-cards/Pentacles/Seven of Pentacles.jpg",
    meaning: "평가, 인내, 투자의 결실을 기다리는 시기입니다.",
  },
  {
    name: "펜타클의 8 (Eight of Pentacles)",
    image: "/tarot-cards/Pentacles/Eight of Pentacles.jpg",
    meaning: "숙련, 완성도, 기술을 연마하는 시기입니다.",
  },
  {
    name: "펜타클의 9 (Nine of Pentacles)",
    image: "/tarot-cards/Pentacles/Nine of Pentacles.jpg",
    meaning: "독립, 풍요, 자급자족의 단계에 도달합니다.",
  },
  {
    name: "펜타클의 10 (Ten of Pentacles)",
    image: "/tarot-cards/Pentacles/Ten of Pentacles.jpg",
    meaning: "부, 유산, 가족의 안정과 번영이 찾아옵니다.",
  },
  {
    name: "펜타클의 시종 (Page of Pentacles)",
    image: "/tarot-cards/Pentacles/Page of Pentacles.jpg",
    meaning: "학습, 실용성, 새로운 기술을 배우는 시기입니다.",
  },
  {
    name: "펜타클의 기사 (Knight of Pentacles)",
    image: "/tarot-cards/Pentacles/Knight of Pentacles.jpg",
    meaning: "신중함, 책임감, 꾸준한 노력이 필요한 때입니다.",
  },
  {
    name: "펜타클의 여왕 (Queen of Pentacles)",
    image: "/tarot-cards/Pentacles/Queen of Pentacles.jpg",
    meaning: "풍요, 실용성, 물질적 안정을 이루는 시기입니다.",
  },
  {
    name: "펜타클의 왕 (King of Pentacles)",
    image: "/tarot-cards/Pentacles/King of Pentacles.jpg",
    meaning: "부와 성공, 사업적 수완, 물질적 성취를 이룹니다.",
  },
  // Swords
  {
    name: "소드의 에이스 (Ace of Swords)",
    image: "/tarot-cards/Swords/Ace of Swords.jpg",
    meaning: "명확성, 진실, 새로운 통찰력이 떠오릅니다.",
  },
  {
    name: "소드의 2 (Two of Swords)",
    image: "/tarot-cards/Swords/Two of Swords.jpg",
    meaning: "결정 유보, 균형, 교착 상태에 놓여있습니다.",
  },
  {
    name: "소드의 3 (Three of Swords)",
    image: "/tarot-cards/Swords/Three of Swords.jpg",
    meaning: "상처, 슬픔, 고통스러운 진실을 마주하게 됩니다.",
  },
  {
    name: "소드의 4 (Four of Swords)",
    image: "/tarot-cards/Swords/Four of Swords.jpg",
    meaning: "휴식, 회복, 명상이 필요한 시기입니다.",
  },
  {
    name: "소드의 5 (Five of Swords)",
    image: "/tarot-cards/Swords/Five of Swords.jpg",
    meaning: "갈등, 패배, 승리의 대가를 고민해보세요.",
  },
  {
    name: "소드의 6 (Six of Swords)",
    image: "/tarot-cards/Swords/Six of Swords.jpg",
    meaning: "전환, 여행, 어려움을 뒤로하고 앞으로 나아갑니다.",
  },
  {
    name: "소드의 7 (Seven of Swords)",
    image: "/tarot-cards/Swords/Seven of Swords.jpg",
    meaning: "책략, 기만, 전략적 행동이 필요한 시기입니다.",
  },
  {
    name: "소드의 8 (Eight of Swords)",
    image: "/tarot-cards/Swords/Eight of Swords.jpg",
    meaning: "제한, 속박, 자기 제한적 사고에서 벗어나세요.",
  },
  {
    name: "소드의 9 (Nine of Swords)",
    image: "/tarot-cards/Swords/Nine of Swords.jpg",
    meaning: "불안, 걱정, 악몽에서 벗어나야 할 때입니다.",
  },
  {
    name: "소드의 10 (Ten of Swords)",
    image: "/tarot-cards/Swords/Ten of Swords.jpg",
    meaning: "종말, 패배, 새로운 시작을 위한 끝입니다.",
  },
  {
    name: "소드의 시종 (Page of Swords)",
    image: "/tarot-cards/Swords/Page of Swords.jpg",
    meaning: "호기심, 통찰력, 새로운 아이디어가 떠오릅니다.",
  },
  {
    name: "소드의 기사 (Knight of Swords)",
    image: "/tarot-cards/Swords/Knight of Swords.jpg",
    meaning: "행동, 대담함, 빠른 사고와 결정이 필요합니다.",
  },
  {
    name: "소드의 여왕 (Queen of Swords)",
    image: "/tarot-cards/Swords/Queen of Swords.jpg",
    meaning: "명석함, 독립성, 직접적인 의사소통이 필요합니다.",
  },
  {
    name: "소드의 왕 (King of Swords)",
    image: "/tarot-cards/Swords/King of Swords.jpg",
    meaning: "지성, 권위, 진실과 정의를 추구하는 시기입니다.",
  },
  // Cups
  {
    name: "컵의 에이스 (Ace of Cups)",
    image: "/tarot-cards/Cups/Ace of Cups.jpg",
    meaning: "새로운 감정, 사랑, 영적 깨달음이 시작됩니다.",
  },
  {
    name: "컵의 2 (Two of Cups)",
    image: "/tarot-cards/Cups/Two of Cups.jpg",
    meaning: "파트너십, 사랑, 조화로운 관계가 형성됩니다.",
  },
  {
    name: "컵의 3 (Three of Cups)",
    image: "/tarot-cards/Cups/Three of Cups.jpg",
    meaning: "축하, 우정, 함께하는 기쁨을 누리세요.",
  },
  {
    name: "컵의 4 (Four of Cups)",
    image: "/tarot-cards/Cups/Four of Cups.jpg",
    meaning: "명상, 재평가, 새로운 기회를 놓치지 마세요.",
  },
  {
    name: "컵의 5 (Five of Cups)",
    image: "/tarot-cards/Cups/Five of Cups.jpg",
    meaning: "상실, 실망, 희망을 잃지 말아야 합니다.",
  },
  {
    name: "컵의 6 (Six of Cups)",
    image: "/tarot-cards/Cups/Six of Cups.jpg",
    meaning: "추억, 향수, 순수한 사랑을 되새기는 시기입니다.",
  },
  {
    name: "컵의 7 (Seven of Cups)",
    image: "/tarot-cards/Cups/Seven of Cups.jpg",
    meaning: "환상, 선택, 현실적인 판단이 필요합니다.",
  },
  {
    name: "컵의 8 (Eight of Cups)",
    image: "/tarot-cards/Cups/Eight of Cups.jpg",
    meaning: "포기, 떠남, 더 높은 목적을 찾아 떠나야 합니다.",
  },
  {
    name: "컵의 9 (Nine of Cups)",
    image: "/tarot-cards/Cups/Nine of Cups.jpg",
    meaning: "만족, 행복, 소원이 이루어지는 시기입니다.",
  },
  {
    name: "컵의 10 (Ten of Cups)",
    image: "/tarot-cards/Cups/Ten of Cups.jpg",
    meaning: "완전한 행복, 조화, 가족의 사랑이 충만합니다.",
  },
  {
    name: "컵의 시종 (Page of Cups)",
    image: "/tarot-cards/Cups/Page of Cups.jpg",
    meaning: "창의성, 직관, 감정적인 메시지가 도착합니다.",
  },
  {
    name: "컵의 기사 (Knight of Cups)",
    image: "/tarot-cards/Cups/Knight of Cups.jpg",
    meaning: "로맨스, 매력, 창의적인 추구가 시작됩니다.",
  },
  {
    name: "컵의 여왕 (Queen of Cups)",
    image: "/tarot-cards/Cups/Queen of Cups.jpg",
    meaning: "직관, 연민, 감정적 지혜가 필요한 때입니다.",
  },
  {
    name: "컵의 왕 (King of Cups)",
    image: "/tarot-cards/Cups/King of Cups.jpg",
    meaning: "감정적 통제, 지혜, 창의적 리더십을 발휘하세요.",
  },
]