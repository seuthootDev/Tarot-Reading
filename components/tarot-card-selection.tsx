"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TarotCardSelectionProps {
  selectedCards: number[]
  setSelectedCards: (cards: number[]) => void
}

export default function TarotCardSelection({ selectedCards, setSelectedCards }: TarotCardSelectionProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [cards, setCards] = useState(() => Array.from({ length: 22 }, (_, i) => i))

  useEffect(() => {
    // 22개의 카드 중 랜덤하게 12개만 선택
    setCards(cards => {
      const shuffled = [...cards].sort(() => Math.random() - 0.5)
      return shuffled.slice(0, 12)
    })
  }, [])

  const handleCardSelect = (index: number) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(selectedCards.filter((cardIndex) => cardIndex !== index))
    } else if (selectedCards.length < 3) {
      setSelectedCards([...selectedCards, index])
    }
  }

  return (
    <div className="mb-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-purple-200">카드를 선택하세요</h2>
        <p className="text-purple-300">
          {selectedCards.length < 3
            ? `${3 - selectedCards.length}장의 카드를 더 선택할 수 있습니다`
            : "카드 선택이 완료되었습니다"}
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-1 sm:gap-2 md:gap-4 max-w-4xl mx-auto px-1 sm:px-2 md:px-4">
        {cards.map((cardIndex) => (
          <motion.div
            key={cardIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: cardIndex * 0.05 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="aspect-[2/3] perspective-500 max-w-[80px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-[180px] mx-auto w-full"
            onHoverStart={() => setHoveredCard(cardIndex)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <Card
              className={cn(
                "w-full h-full cursor-pointer transition-all duration-300 transform-gpu",
                "bg-gradient-to-br from-indigo-800 to-purple-900 border-2",
                selectedCards.includes(cardIndex)
                  ? "border-amber-400 shadow-lg shadow-amber-500/20"
                  : "border-indigo-700 hover:border-purple-400",
                hoveredCard === cardIndex && "shadow-md shadow-purple-500/30",
              )}
              onClick={() => handleCardSelect(cardIndex)}
            >
              <div className="h-full flex items-center justify-center">
                <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-950">
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
          </motion.div>
        ))}
      </div>
    </div>
  )
}

