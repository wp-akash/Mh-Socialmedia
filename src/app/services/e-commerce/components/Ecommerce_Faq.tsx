'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function Ecommerce_Faq() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'clock',
            question: 'Will my ecommerce store be fast, mobile-friendly, and SEO-optimized?',
            answer: 'We build each online store to be fast, mobile-responsive, and optimized for search. Studies show users form an opinion in just ~50 milliseconds, so we focus on intuitive design and quick load times. We also implement SEO best practices: for example, one retailer saw 77% of its sales come from organic search after an SEO-focused redesign. This ensures your store ranks well in search results and attracts the right customers.'
        },
        {
            id: 'item-2',
            icon: 'clock',
            question: 'What is the timeline and cost of developing a custom e-commerce site?',
            answer: 'Our projects follow clear timelines and budgets defined upfront. Industry data indicates 40% of e-commerce projects launch in 8–16 weeks , though simpler stores can go live in about 6–10 weeks and highly custom platforms may take 6–12+ months. Costs vary by scope: for example, a basic WooCommerce store might cost $30K–$50K, a medium Shopify project ~$50K–$80K, and a large enterprise solution $150K+ . We provide a detailed proposal after assessing your needs to give an accurate timeline and quote.',
        },
        {
            id: 'item-3',
            icon: 'clock',
            question: 'How do I know you can deliver, and what about post-launch support?',
            answer: 'Our team has deep experience building e-commerce sites for fashion, electronics, and lifestyle brands. Industry experts say choosing a developer with relevant industry experience is a “game-changer” , and our portfolio proves our track record. We invite you to review our case studies and client testimonials – verifiable evidence of our success . Equally important, we provide dedicated post-launch maintenance and support. Unlike some agencies that “disappear” after launch , we stay engaged to keep your store updated and performing well. We also support global e-commerce needs (e.g. multi-currency, multi-language), which broadens your reach – multi-currency support in particular is known to “drive global market expansion” clarity-ventures.com by attracting customers in every region.',
        },
        
    ]

    return (
        <section className="py-20">
            <div className="global-container md:px-4 mb-10">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-0">
                            <h3 className="mt-4 h3">E-Commerce Development<br/> FAQs</h3>
                            
                        </div>
                    </div>
                    <div className="md:w-2/3">
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
                                            <span className="primary_header_content !font-medium">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="secondary_header_content paragraph">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}