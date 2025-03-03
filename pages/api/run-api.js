import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

// Gemini Pro 모델 초기화
const genAI = new GoogleGenerativeAI(process.env.APIKEY || "");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { selectedCards, question } = req.body;

    if (!Array.isArray(selectedCards) || selectedCards.length !== 3) {
      return res.status(400).json({ message: "3개의 카드를 선택해주세요" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
당신은 전문 타로 리더입니다. 친절하고 따뜻한 어조로 타로 카드를 해석해주세요.

질문: ${question || "앞으로의 전반적인 운세에 대해 알고 싶습니다."}

선택된 카드:
1번 카드 (과거/현재의 상황): ${selectedCards[0]}
2번 카드 (장애물/도전): ${selectedCards[1]}
3번 카드 (조언/미래의 방향): ${selectedCards[2]}

각 카드의 의미와 카드들 간의 관계를 분석하여, 질문자에게 통찰력 있는 조언을 해주세요.
답변은 다음 형식으로 작성해주세요:

1. 전체적인 타로 리딩 요약 (2-3문장)
2. 각 카드별 상세 해석
3. 카드들의 전체적인 스토리와 조언 (긍정적인 메시지로 마무리)

답변은 한국어로 작성해주세요.
공백포함 700자 이내로 작성해주세요
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ reading: text });
  } catch (error) {
    console.error("Tarot reading error:", error);
    return res.status(500).json({ message: "타로 리딩 중 오류가 발생했습니다" });
  }
}
