"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Moon, Sun, Star } from "lucide-react"
import Image from "next/image"

interface TarotReadingProps {
  selectedCards: number[]
}

// Tarot card data
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
]

export default function TarotReading({ selectedCards }: TarotReadingProps) {
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [readingComplete, setReadingComplete] = useState(false)

  // Get the selected tarot cards
  const selectedTarotCards = selectedCards.map((index) => tarotCards[index % tarotCards.length])

  // Positions and their meanings
  const positions = [
    { title: "과거", icon: <Moon className="h-5 w-5 text-indigo-300" /> },
    { title: "현재", icon: <Sun className="h-5 w-5 text-amber-300" /> },
    { title: "미래", icon: <Star className="h-5 w-5 text-purple-300" /> },
  ]

  useEffect(() => {
    // Flip cards one by one with delay
    const flipWithDelay = async () => {
      for (let i = 0; i < selectedCards.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 800))
        setFlippedCards((prev) => [...prev, i])
      }

      // Mark reading as complete after all cards are flipped
      setTimeout(() => {
        setReadingComplete(true)
      }, 1000)
    }

    flipWithDelay()
  }, [selectedCards.length])

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2
        className="text-2xl md:text-3xl font-semibold mb-8 text-center text-purple-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Sparkles className="inline-block mr-2 text-amber-300" />
        당신의 타로 리딩
        <Sparkles className="inline-block ml-2 text-amber-300" />
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {selectedTarotCards.map((card, index) => (
          <div key={index} className="flex flex-col items-center">
            <motion.div
              className="mb-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: flippedCards.includes(index) ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center mb-1">
                {positions[index].icon}
                <span className="ml-2 text-lg font-medium text-purple-200">{positions[index].title}</span>
              </div>
            </motion.div>

            <div className="perspective-1000 w-full max-w-[140px] sm:max-w-[160px] md:max-w-[200px] aspect-[2/3]">
              <motion.div
                className="relative w-full h-full transition-all duration-500 transform-gpu preserve-3d"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: flippedCards.includes(index) ? 180 : 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Card Back */}
                <Card className="absolute w-full h-full backface-hidden bg-gradient-to-br from-indigo-900 to-purple-950 border-2 border-indigo-700">
                  <div className="h-full flex items-center justify-center">
                    <div className="w-full h-full relative overflow-hidden">
                      {/* Card back design */}
                      <div className="absolute inset-0">
                        {/* 메인 테두리 */}
                        <div className="absolute inset-2 border-2 border-gold-400/40" />
                        
                        {/* 반복되는 패턴 배경 */}
                        <div className="absolute inset-4 grid grid-cols-3 grid-rows-4 gap-1 p-2">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="relative">
                              <div className="absolute inset-0 border border-purple-400/20 rotate-45" />
                              <div className="absolute inset-1 border border-amber-400/10" />
                            </div>
                          ))}
                        </div>

                        {/* 중앙 장식적 요소 */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                            {/* 달 */}
                            <div className="absolute inset-0 border-2 border-amber-400/40 rounded-full" />
                            {/* 별 */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-3/4 h-3/4 relative">
                                {[0, 45, 90, 135].map((rotation) => (
                                  <div
                                    key={rotation}
                                    className="absolute inset-0 border border-purple-400/30"
                                    style={{ transform: `rotate(${rotation}deg)` }}
                                  />
                                ))}
                              </div>
                            </div>
                            {/* 신비로운 문양 */}
                            <div className="absolute inset-2 flex items-center justify-center">
                              <div className="w-2/3 h-2/3 border border-amber-400/40 rotate-45" />
                            </div>
                          </div>
                        </div>

                        {/* 모서리 장식 */}
                        <div className="absolute top-2 left-2 w-6 h-6">
                          <div className="absolute inset-0 border-t-2 border-l-2 border-amber-400/40" />
                          <div className="absolute inset-1 rotate-45 border border-purple-400/30" />
                        </div>
                        <div className="absolute top-2 right-2 w-6 h-6 rotate-90">
                          <div className="absolute inset-0 border-t-2 border-l-2 border-amber-400/40" />
                          <div className="absolute inset-1 rotate-45 border border-purple-400/30" />
                        </div>
                        <div className="absolute bottom-2 left-2 w-6 h-6 -rotate-90">
                          <div className="absolute inset-0 border-t-2 border-l-2 border-amber-400/40" />
                          <div className="absolute inset-1 rotate-45 border border-purple-400/30" />
                        </div>
                        <div className="absolute bottom-2 right-2 w-6 h-6 rotate-180">
                          <div className="absolute inset-0 border-t-2 border-l-2 border-amber-400/40" />
                          <div className="absolute inset-1 rotate-45 border border-purple-400/30" />
                        </div>

                        {/* 추가적인 장식적 요소들 */}
                        <div className="absolute inset-8 border border-purple-400/20 rounded-full" />
                        <div className="absolute inset-10 border border-amber-400/10 rotate-45" />
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Card Front */}
                <Card className="absolute w-full h-full backface-hidden rotateY-180 border-2 border-purple-500 overflow-hidden">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="bg-gradient-to-b from-indigo-900 to-purple-900 p-1 sm:p-2 text-center">
                      <h3 className="text-xs sm:text-sm font-medium text-purple-200">{card.name}</h3>
                    </div>
                    <div className="relative flex-grow bg-black flex items-center justify-center overflow-hidden">
                      {/* 우주적 배경 효과 */}
                      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-indigo-950">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
                        <div className="absolute inset-0">
                          {[...Array(30)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute rounded-full bg-white"
                              style={{
                                width: Math.random() * 2 + 'px',
                                height: Math.random() * 2 + 'px',
                                top: Math.random() * 100 + '%',
                                left: Math.random() * 100 + '%',
                                opacity: Math.random() * 0.7 + 0.3,
                                animation: `twinkle ${Math.random() * 4 + 2}s infinite`
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div className="relative w-[90%] h-[90%] z-10">
                        <Image
                          src={card.image || "/placeholder.svg"}
                          alt={card.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              className="mt-6 text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: flippedCards.includes(index) ? 1 : 0,
                y: flippedCards.includes(index) ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-purple-200">{card.meaning}</p>
            </motion.div>
          </div>
        ))}
      </div>

      {readingComplete && (
        <motion.div
          className="mt-12 p-6 rounded-lg bg-purple-900/30 border border-purple-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-medium mb-3 text-amber-300">종합 해석</h3>
          <p className="text-purple-200 leading-relaxed">
            당신의 과거는 {selectedTarotCards[0].name} 카드가 보여주듯이{" "}
            {selectedTarotCards[0].meaning.split(".")[0].toLowerCase()}
            현재는 {selectedTarotCards[1].name} 카드를 통해 {selectedTarotCards[1].meaning.split(".")[0].toLowerCase()}
            그리고 미래는 {selectedTarotCards[2].name} 카드가 암시하듯{" "}
            {selectedTarotCards[2].meaning.split(".")[0].toLowerCase()}이 세 카드의 조합은 당신이 과거의 경험을 바탕으로
            현재의 상황을 지혜롭게 다루면, 미래에 긍정적인 결과를 얻을 수 있음을 보여줍니다.
          </p>
        </motion.div>
      )}
    </div>
  )
}

