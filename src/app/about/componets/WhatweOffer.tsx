import React from 'react'
import { Lightbulb, Users, MessageCircle, ThumbsUp, Layout, ShieldCheck, FileText, Headphones, BadgeCheck } from 'lucide-react'

const offers = [
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: 'Planning, Prototyping, Visualization and Documentation',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Dedicated Experienced Team',
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-primary" />,
    title: 'Excellent Interpersonal Communication',
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-primary" />,
    title: '100% Customer Satisfaction',
  },
  {
    icon: <Layout className="w-8 h-8 text-primary" />,
    title: 'Trending and Clean UI/UX Design',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'High Level Data Security',
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: '3 Layer Backup Storage',
  },
  {
    icon: <Headphones className="w-8 h-8 text-primary" />,
    title: '24/7 After Sales Service and Support with Ticketing System',
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-primary" />,
    title: 'Free on Demand IT Consultation',
  },
]

function WhatweOffer() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
      <div className="mx-auto global-container md:px-4">
        <h3 className="h3 text-center mb-12">
          What We Offer
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white/80 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20">
                {offer.icon}
              </div>
              <span className="secondary_header">{offer.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatweOffer