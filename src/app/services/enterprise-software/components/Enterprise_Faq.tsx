'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

type FAQItem = {
  id: string
  icon: IconName
  question: string
  answer: React.ReactNode
}

export default function Enterprise_Faq() {
    const faqItems: FAQItem[] = [
  {
    id: 'item-1',
    icon: 'clock',
    question: 'Will the ERP integrate with my existing systems and processes?',
    answer: (
      <span>
        <b>Absolutely</b>. Our ERP is designed to <b>integrate seamlessly</b> with the tools and software you already use (e.g. POS systems, accounting software, CRM). This means you won&apos;t have to abandon your favorite apps – instead, the ERP connects with them to share data. Seamless integration eliminates data silos between departments, so information flows smoothly across your business. For example, if a sale is made, your inventory and finance records update automatically, without duplicate data entry. This not only saves time but also <b>avoids errors and boosts efficiency</b>. In short, our ERP will fit into your current workflow with minimal disruption, allowing your business to transition smoothly onto the new system without losing valuable time or data.
      </span>
    )
  },
  {
    id: 'item-2',
    icon: 'clock',
    question: 'Can I customize it to fit my business needs?',
    answer: (
      <span>
        <b>Yes – one size does not fit all</b>. Our ERP is highly <b>customizable</b> so it can be tailored to your unique processes and goals. Every business is different, and you shouldn&apos;t have to change how you work to match your software. With our solution, we configure the modules and workflows to match your operations (whether you&apos;re managing salon appointments, inventory for a shop, client relationships, etc.), rather than forcing you into a generic mold. This tailored approach enhances productivity because your team won&apos;t waste time adapting to an ill-fitting system. In fact, many companies opt for custom-fit ERP systems for exactly this reason – one survey found that <b>78% of businesses saw increased productivity after customizing their</b> ERP to their needs. Bottom line: you&apos;ll get a solution that works for you, not against you.
      </span>
    )
  },
  {
    id: 'item-3',
    icon: 'clock',
    question: 'Will the system scale as my business grows?',
    answer: (
      <span>
        <b>Definitely</b>. Our ERP is built to <b>grow with your business</b>. Whether you expand from one location to ten, or triple your customer base, the system can scale up without a hitch. You can start with the features you need now and easily add more users or modules later as your requirements evolve. The architecture is cloud-based and flexible, so performance remains smooth even as data volume increases. Unlike some off-the-shelf solutions that struggle with rapid growth, our ERP lets you add new capabilities or handle higher transaction loads <b>without any disruptions</b>. This means you won&apos;t outgrow the software. Moreover, you <b>only add (and pay for) what you need</b> – for instance, if you open a new store, simply add a user license or a module for that location, rather than paying for a whole new system. The ability to “plug in” extra modules on demand ensures you&apos;re never paying for excessive features you don&apos;t use. In short, you can invest with confidence, knowing the ERP will support your business now and in the future.
      </span>
    )
  },
  {
    id: 'item-4',
    icon: 'clock',
    question: 'Is my data secure, and will I have support when I need it?',
    answer: (
      <span>
        <b>Yes</b>. We understand that <b>trust and security</b> are huge concerns when adopting a new software. Rest assured, your data is protected with <b>enterprise-grade security measures</b>. Our ERP uses advanced encryption (the same type of technology banks use) to safeguard your information, both in transit and at rest. We also implement strict access controls, so only authorized team members can see sensitive data. Additionally, all data is backed up regularly to prevent loss, and our system is compliant with industry standards to keep your business data private. Beyond technology, you can trust in our company&apos;s support. We have an experienced team ready to <b>guide you through onboarding and provide ongoing support</b>. You&apos;ll receive training during implementation so your staff can feel comfortable with the new system. And if questions arise later, we&apos;re just a phone call or email away. Our goal is to build a long-term relationship, not just make a one-time sale – so we&apos;re committed to your success. Choosing an ERP is a big decision, but we&apos;re here to ensure you feel confident and supported every step of the way.
      </span>
    )
  },
  {
    id: 'item-5',
    icon: 'clock',
    question: 'How is the pricing structured, and what about ROI?',
    answer: (
      <span>
        We offer <b>customized quotes</b> for each client. There is no one-size-fits-all price for an ERP because the cost depends on your specific needs and scale. Factors like the <b>number of users, modules/features you require, the complexity of your operations</b>, and any <b>custom integrations or special requirements</b> will influence the price. Rather than charge a fixed package that might include things you don&apos;t need, we tailor the pricing so you <b>only pay for what you truly need</b>. This approach is fair and often more cost-effective for businesses of different sizes. (For context, ERP software costs can vary widely – studies have found that solutions can range anywhere from around $1,700 to $9,300 per month on average, depending on scope. This is why a custom quote is important.) Importantly, consider the <b>return on investment (ROI)</b>. While an ERP is an investment up front, it can <b>pay for itself through efficiency gains and cost savings</b>. By centralizing and streamlining processes, companies often save money and time – for example, businesses that implemented ERP saw IT costs drop by around 40% and cycle times improve by 35% on average. You will likely spend far less time on manual work or fixing errors, and more time serving customers and growing your business. Those productivity improvements translate into real dollars saved. In the long run, the benefits of a good ERP <b>far outweigh the costs</b> for most organizations, leading to improved profitability. We&apos;re happy to discuss your requirements and provide a transparent quote – and to help you understand how our solution can deliver value and ROI for your specific business.
      </span>
    )
  }
]


    return (
        <section className="py-20">
            <div className="mx-auto global-container md:px-4">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-0">
                            <h3 className="h3 primary_header">Frequently Asked Questions (FAQ) About Our ERP Solution</h3>
                            
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
                                            <span className="primary_header_content !font-medium ">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="secondary_header_content paragraph text-justify">{item.answer}</p>
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