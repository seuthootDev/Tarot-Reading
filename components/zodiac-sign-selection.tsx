"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface ZodiacSignSelectionProps {
  onSelectSign: (sign: string) => void
}

const zodiacSigns = [
  { name: "양자리", period: "3월 21일 ~ 4월 19일", symbol: "♈" },
  { name: "황소자리", period: "4월 20일 ~ 5월 20일", symbol: "♉" },
  { name: "쌍둥이자리", period: "5월 21일 ~ 6월 21일", symbol: "♊" },
  { name: "게자리", period: "6월 22일 ~ 7월 22일", symbol: "♋" },
  { name: "사자자리", period: "7월 23일 ~ 8월 22일", symbol: "♌" },
  { name: "처녀자리", period: "8월 23일 ~ 9월 22일", symbol: "♍" },
  { name: "천칭자리", period: "9월 23일 ~ 10월 22일", symbol: "♎" },
  { name: "전갈자리", period: "10월 23일 ~ 11월 21일", symbol: "♏" },
  { name: "사수자리", period: "11월 22일 ~ 12월 21일", symbol: "♐" },
  { name: "염소자리", period: "12월 22일 ~ 1월 19일", symbol: "♑" },
  { name: "물병자리", period: "1월 20일 ~ 2월 18일", symbol: "♒" },
  { name: "물고기자리", period: "2월 19일 ~ 3월 20일", symbol: "♓" },
]

export default function ZodiacSignSelection({ onSelectSign }: ZodiacSignSelectionProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2
        className="text-2xl text-center mb-8 text-purple-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        당신의 별자리를 선택해주세요
      </motion.h2>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {zodiacSigns.map((sign, index) => (
          <motion.div
            key={sign.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              className="p-4 cursor-pointer hover:bg-purple-900/30 transition-colors border-purple-500/30 hover:border-purple-400"
              onClick={() => onSelectSign(sign.name)}
            >
              <div className="text-center">
                <div className="text-3xl mb-2 font-astro text-amber-300">
                  {sign.symbol}
                </div>
                <h3 className="text-lg font-medium text-purple-200 mb-1">
                  {sign.name}
                </h3>
                <p className="text-sm text-purple-300">
                  {sign.period}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 