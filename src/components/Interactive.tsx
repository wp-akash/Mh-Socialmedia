import Link from 'next/link'
import React from 'react'
function Interactive() {
  return (
    <>
      <section>
            <div className='mx-auto global-container space-y-8 px-6 md:space-y-16'>
                <div className="px-6 border-1 border-primary rounded-lg bg-white dark:bg-zinc-900 shadow-lg py-24">
                    <blockquote className="before:bg-primary relative pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full">
                        <h2 className='h2'>The Hub Between You and Us</h2>
                        <p className="mt-3 text-balance">Sucessful Apps Are More Than Just Clean UI/UX and Coding</p>
                        {/* <footer className="mt-4 flex items-center gap-2">
                            <cite>View All Projects</cite>
                            
                        </footer> */}
                        <Link href="/" className='btn mt-4'>View All Projects</Link>
                    </blockquote>
                </div>
            </div>
        </section>
    </>
  )
}

export default Interactive
