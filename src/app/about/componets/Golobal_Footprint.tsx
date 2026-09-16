import React from 'react'
import { Globe2 } from 'lucide-react'

const countries = [
  { name: 'Africa', text: 'AF' },
  { name: 'USA', text: 'USA' },
  { name: 'Canada', text: 'CAN' },
  { name: 'Saudi Arabia', text: 'SA' },
  { name: 'Japan', text: 'JPN' },
  { name: 'France', text: 'FRA' },
]

function Golobal_Footprint() {
  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-blue-950 overflow-hidden">
      {/* Decorative Globe Icon */}
      <Globe2 className="absolute opacity-10 w-[70vw] h-[70vw] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-300 dark:text-blue-900 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 z-10">
        <h3 className="h3 text-center mb-12">
          <span>Our Global Footprint</span>
        </h3>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {countries.map((country) => (
            <div
              key={country.name}
              className="group rounded-3xl bg-white/80 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="text-2xl mb-4 drop-shadow">{country.text}</span>
              <span className="text-2xl font-bold text-primary mb-1 group-hover:text-[#D72D45] transition">{country.name}</span>
              <span className="block w-10 h-1 bg-gradient-to-r from-primary to-[#D72D45] rounded-full mt-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Golobal_Footprint