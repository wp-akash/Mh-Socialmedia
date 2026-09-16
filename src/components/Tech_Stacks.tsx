import React from 'react'

function Tech_Stacks() {
  return (
    <>
    <section className="w-full pt-16 bg-white dark:bg-zinc-900">
  <div className="max-w-5xl mx-auto px-4 text-center mb-12">
    <h3 className="h3">Our Technologies</h3>
    <p className="paragraph mb-10 mt-3">
      We mostly work on web development. Here is a list of technologies we use for web development- Python, Django, Laravel, Flask, React & redux, Rest API, etc. And for Android app development we use Java. More and more new technologies are coming but we are looking forward to Flutter because hybrid apps and cross-platform technologies are becoming more popular these days and they are easy to use. Unity for game Development.
    </p>
  </div>
  {/* First row: left to right */}
  <div className="overflow-hidden w-full mb-6">
    <div className="flex gap-4 animate-slide-x w-max">
      {["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Django", "MongoDB", "AWS"].map((tech, i) => (
        <span key={i} className="px-5 py-2 bg-primary/10 text-primary font-semibold rounded-full shadow text-base whitespace-nowrap">
          {tech}
        </span>
      ))}
      {/* Duplicate for seamless loop */}
      {["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Django", "MongoDB", "AWS"].map((tech, i) => (
        <span key={i + 'dup'} className="px-5 py-2 bg-primary/10 text-primary font-semibold rounded-full shadow text-base whitespace-nowrap">
          {tech}
        </span>
      ))}
      
    </div>
  </div>
  {/* Second row: right to left */}
  <div className="overflow-hidden w-full">
    <div className="flex gap-4 animate-slide-x-reverse w-max">
      {["TypeScript", "Vue.js", "Next.js", "Express", "Laravel", "MySQL", "PostgreSQL", "Azure", "Firebase"].map((tech, i) => (
        <span key={i} className="px-5 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full shadow text-base whitespace-nowrap">
          {tech}
        </span>
      ))}
      {/* Duplicate for seamless loop */}
      {["TypeScript", "Vue.js", "Next.js", "Express", "Laravel", "MySQL", "PostgreSQL", "Azure", "Firebase"].map((tech, i) => (
        <span key={i + 'dup'} className="px-5 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full shadow text-base whitespace-nowrap">
          {tech}
        </span>
      ))}
    </div>
  </div>
</section>
    </>
  )
}

export default Tech_Stacks