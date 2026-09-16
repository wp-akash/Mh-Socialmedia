import React from 'react'
import Image from 'next/image'
function Free_consultation() {
  return (
    <>
      <section className="py-20 md:py-20 bg-gradient-to-b">
        <div className="global-container md:px-4">
          {/* Content Column (merged left + middle) */}
          <div className="grid md:grid-cols-2 justify-between items-center gap-10">
            <div className="">
              <h3 className="h3 pt-5 primary_header">Why Dubai Brands Can't Afford to Stand Still</h3>
              <p className='py-4 text-zinc-500 text-sm md:text-md'>Dubai is one of the most competitive digital markets on the planet. The UAE has 99% internet penetration and social media identities equal to 110% of the population, and residents spend nearly three hours on social media every single day. Your customers are already online — researching, comparing, and buying. The only question is whether they find you or your competitor.</p>
              <p className='py-4 text-zinc-500 text-sm md:text-md'>At the same time, competition for attention is intensifying. The UAE's digital advertising market is projected to reach $2.64 billion in 2026, growing at 15.2% a year, and roughly 64% of that spend is concentrated in the Dubai market. Winning here takes more than boosting a few posts — it takes strategy, precision, and creative that converts. That's exactly what MH Social delivers.</p>


            </div>

            <div className="">
              <Image src="/a.jpg" alt="Free Consultation" width={500} height={500} className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Free_consultation
