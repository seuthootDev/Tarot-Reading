import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

// Gemini Pro 모델 초기화
const genAI = new GoogleGenerativeAI(process.env.APIKEY || "");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { selectedCards, readingType, zodiacSign, selectedCard } = req.body;
    console.log('API 수신된 데이터:', { selectedCards, readingType, zodiacSign, selectedCard });

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    let prompt = '';
    
    if (readingType === 'love-fortune') {
      // 별자리 연애운 프롬프트
      prompt = `
      당신은 타로와 점성술에 정통한 전문가입니다. ${zodiacSign}인 사람이 연애운을 보기 위해 ${selectedCard} 카드를 뽑았습니다.
      이 사람의 올해의의 연애운을 타로 카드와 별자리의 특성을 연결지어 상세히 해석해주세요.

      다음 내용을 포함해서 해석해주세요:

      # 현재의 연애 에너지
      [${zodiacSign}의 현재 연애 운과 감정적 상태]

      # 올해해의 연애운
      [올해 찾아올 주요 연애 기회나 변화]
      [특별히 주의해야 할 시기나 상황]

      # 인연을 만나기 좋은 시기
      [별자리의 운세를 고려한 좋은 시기]

      # 궁합이 좋은 별자리
      [${zodiacSign}와 특히 좋은 궁합을 보일 수 있는 별자리들]

      # 연애운 상승을 위한 조언
      [타로 카드의 메시지를 바탕으로 한 실천적 조언]

      답변은 친근하고 따뜻한 톤으로 작성해주시고, 희망적인 메시지로 마무리해주세요.
      공백 포함 500자 이내로 작성해주세요.
      `;
    } else if (readingType === 'zodiac-spread') {
      console.log('조디악 스프레드 처리 중'); // 처리 과정 로그
      if (!Array.isArray(selectedCards) || selectedCards.length !== 12) {
        return res.status(400).json({ message: "12개의 카드가 필요합니다" });
      }

      prompt = `
        당신은 전문 타로 리더입니다. 친절하고 따뜻한 어조로 12궁의 별자리 스프레드를 해석해주세요.

        선택된 카드:
        1. 양자리 (자아/개성): ${selectedCards[0]}
        2. 황소자리 (물질/가치): ${selectedCards[1]}
        3. 쌍둥이자리 (소통/지식): ${selectedCards[2]}
        4. 게자리 (가정/감정): ${selectedCards[3]}
        5. 사자자리 (창조/자기표현): ${selectedCards[4]}
        6. 처녀자리 (일/건강): ${selectedCards[5]}
        7. 천칭자리 (관계/균형): ${selectedCards[6]}
        8. 전갈자리 (변화/재생): ${selectedCards[7]}
        9. 궁수자리 (철학/여행): ${selectedCards[8]}
        10. 염소자리 (경력/목표): ${selectedCards[9]}
        11. 물병자리 (친구/희망): ${selectedCards[10]}
        12. 물고기자리 (영성/잠재력): ${selectedCards[11]}

        다음 형식으로 해석해주세요:

        # 전체적인 에너지 흐름
        [전반적인 카드들의 패턴과 에너지에 대한 설명]

        # 주요 영역별 해석
        ## 개인 영역 (1-3궁)
        [자아, 가치관, 소통 영역의 카드들이 보여주는 메시지]

        ## 정서 영역 (4-6궁)
        [가정, 창조성, 일상의 영역에서의 메시지]

        ## 관계 영역 (7-9궁)
        [대인관계, 변화, 확장에 대한 메시지]

        ## 사회와 영성 (10-12궁)
        [사회적 성취, 공동체, 내면의 성장에 대한 메시지]

        # 종합 조언
        [전체적인 조언과 긍정적인 메시지]

        답변은 한국어로 작성해주시고, 공백 포함 900자 이내로 작성해주세요.
        `;
    } else if (readingType === 'past-present-future') {
      // 과거-현재-미래 스프레드 검증
      if (!Array.isArray(selectedCards) || selectedCards.length !== 3) {
        return res.status(400).json({ message: "3개의 카드가 필요합니다" });
      }

      prompt = `
        당신은 전문 타로 리더입니다. 친절하고 따뜻한 어조로 타로 카드를 해석해주세요.

        선택된 카드:
        1번 카드 (과거): ${selectedCards[0]}
        2번 카드 (현재): ${selectedCards[1]}
        3번 카드 (미래): ${selectedCards[2]}

        각 카드의 의미와 카드들 간의 관계를 분석하여, 질문자에게 통찰력 있는 조언을 해주세요.
        답변은 다음 형식으로 작성해주세요:

        # 전체적인 흐름
        [전체적인 카드의 흐름과 의미 2-3문장]

        # 시기별 상세 해석
        ## 과거: ${selectedCards[0]}
        [과거의 영향과 의미]

        ## 현재: ${selectedCards[1]}
        [현재 상황과 직면한 과제]

        ## 미래: ${selectedCards[2]}
        [앞으로의 방향과 조언]

        # 종합 조언
        [전체적인 조언과 긍정적인 메시지]

        답변은 한국어로 작성해주시고, 공백 포함 700자 이내로 작성해주세요.
        `;
    } else {
      return res.status(400).json({ message: "올바르지 않은 리딩 타입입니다" });
    }

    console.log('생성될 프롬프트:', prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log('AI 응답:', text.substring(0, 100) + '...');

    return res.status(200).json({ reading: text });
  } catch (error) {
    console.error("상세 에러 정보:", error);
    return res.status(500).json({ message: "타로 리딩 중 오류가 발생했습니다" });
  }
}
