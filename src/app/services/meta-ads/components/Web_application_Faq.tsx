'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: React.ReactNode
}

export default function Web_application_Faq() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'clock',
            question: 'What\'s the minimum budget to start?',
            answer: (
                <span>
                    Meta technically allows very small daily spends, but we recommend around AED 2,000–3,000/month in ad spend so campaigns have enough data to optimize properly.
                </span>
            )
        },
        {
            id: 'item-2',
            icon: 'clock',
            question: 'Facebook or Instagram which is better',
            answer: (<span>
                Both, working together. We use Advantage+ placements so Meta serves your ads where they perform best, then shift creative weight toward whichever platform delivers your lowest cost per result.

            </span>),
        },
        {
            id: 'item-3',
            icon: 'clock',
            question: 'How soon will I see results',
            answer: <span>Early signals appear within the first 1–2 weeks, but campaigns typically need a short learning period to stabilize before we scale. Meaningful, optimized performance usually builds over the first 4–6 weeks.</span>
        },
        {
            id: 'item-4',
            icon: 'clock',
            question: 'Do you handle the creative?',
            answer: <span>Yes — ad creative, copywriting, and bilingual versions are all part of what we do.
            </span>
        },
    ]

    return (
        <section className="py-20 border-[0.5px] border-color">
            <div className="global-container md:px-4">
                {/* ── Centered Header ── */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h3 className="h3">Top Questions Clients Ask</h3>
                    <p className='paragraph mt-4 primary_header_content'>
                        Find clear answers to the most common questions about our consulting services, process, pricing, and business growth solutions.
                    </p>
                </div>

                {/* ── Centered Accordion ── */}
                <div className="max-w-3xl mx-auto">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full space-y-2">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-6">
                                            <DynamicIcon
                                                name={item.icon}
                                                className="m-auto size-4"
                                            />
                                        </div>
                                        <p className="primary_header_content !font-medium ">{item.question}</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-5">
                                    <div className="px-9">
                                        <p className="paragraph">{item.answer}</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}