"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"
import TarotCardSelection from "@/components/tarot-card-selection"
import TarotReading from "@/components/tarot-reading"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [selectedCards, setSelectedCards] = useState<number[]>([])
  const [showReading, setShowReading] = useState(false)

  const startOver = () => {
    setSelectedCards([])
    setShowReading(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full bg-[url('/stars-bg.svg')] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-8">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-purple-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            신비로운 타로 리딩
          </motion.h1>
          <motion.p
            className="text-lg text-purple-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            당신의 운명을 알려줄 카드를 선택하세요
            <Sparkles className="inline-block ml-2 text-amber-300" />
          </motion.p>
        </header>

        <AnimatePresence mode="wait">
          {!showReading ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TarotCardSelection selectedCards={selectedCards} setSelectedCards={setSelectedCards} />

              {selectedCards.length === 3 && (
                <motion.div
                  className="text-center mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    onClick={() => setShowReading(true)}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-2 rounded-full text-lg shadow-lg shadow-purple-900/30"
                  >
                    리딩 보기
                  </Button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="reading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TarotReading selectedCards={selectedCards} />
              <div className="text-center mt-12">
                <Button
                  onClick={startOver}
                  variant="outline"
                  className="border-purple-400 bg-purple-900/50 text-white hover:text-white hover:bg-purple-800 hover:border-purple-300"
                >
                  다시 시작하기
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}

