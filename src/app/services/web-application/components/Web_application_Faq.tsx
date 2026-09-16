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
            question: 'How long does a typical project take?',
            answer: (
    <span>
      Most standard website projects (a marketing site of ~5–20 pages) take roughly <b>6–10 weeks from kickoff to launch</b>. The exact timeline can vary based on complexity (e.g. e-commerce or custom features may be longer) and how quickly you can provide feedback or content. We start with a detailed project plan, so you’ll know the expected timeline upfront. Throughout the process, we stick to agreed milestones and update you regularly. Our efficient, senior-led team often delivers ahead of schedule, but we never compromise quality for speed.

    </span>
  )
        },
        {
            id: 'item-2',
            icon: 'clock',
            question: 'What’s included in your maintenance plan?',
            answer: (<span>
                Our relationship doesn’t end at launch – we offer ongoing <b>website maintenance packages</b> to keep your site secure, up-to-date, and performing optimally. <b>Maintenance plans typically include</b> security updates and patches for your website platform (CMS core, plugins, etc.), regular backups of your site data, uptime monitoring, and performance tuning (so your site stays fast). We’ll also handle minor content updates or bug fixes as needed. Essentially, we cover the key areas of <b>security, updates, backups, performance, and content</b>. For example, if WordPress releases a critical update or a new browser causes a display issue, we take care of it proactively. Our maintenance ensures peace of mind – your website continues running smoothly and safely, without you lifting a finger.

            </span>),
        },
        {
            id: 'item-3',
            icon: 'clock',
            question: 'Do you provide hosting, or only development?',
            answer: <span>We specialise in <b>website design and development</b> – we do <b>not operate our own hosting servers</b>, because we believe you should fully own and control your web infrastructure. However, we make hosting easy for you: we will <b>recommend a reliable hosting provider</b> (if you don’t have one), assist with setting up the hosting environment, and handle the deployment of your site. In practice, it’s seamless – we’ll configure your hosting for performance and security and launch the site there once it’s ready. Many of our clients appreciate this approach: you keep ownership of the hosting account (we advise it be in your name for transparency), and we take care of the technical setup and transfer. In summary, <b>we don’t directly host your site, but we do everything needed to get your site live</b> on a host of your choice. If you already have a host or internal server, we’re happy to work with that as well.</span>
        },
    ]

    return (
        <section className="py-20">
            <div className="global-container md:px-4">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-0">
                            <h3 className="h3">Frequently Asked Questions</h3>
                            <p className='paragraph mt-4 primary_header_content'>
                                We know investing in a website is a big decision. To help, here are answers to some common questions we get:
                            </p>
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
            </div>
        </section>
    )
}