'use client'

import React, { useState } from 'react'

export interface FAQItem {
  question: string
  answer: string
}

// Backward-compatible input shape (some pages may use { q, a })
export type FAQItemInput = FAQItem | { q: string; a: string }

interface FAQAccordionProps {
  items: FAQItemInput[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {items.map((raw, index) => {
        const question = 'question' in raw ? raw.question : raw.q
        const answer = 'answer' in raw ? raw.answer : raw.a

        return (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
            >
              <span className="font-semibold text-slate-900 pr-8">{question}</span>
              <svg
                className={`w-5 h-5 text-primary-600 transition-transform flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`px-6 overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
              }`}
            >
              <p className="text-slate-600 leading-relaxed">{answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
