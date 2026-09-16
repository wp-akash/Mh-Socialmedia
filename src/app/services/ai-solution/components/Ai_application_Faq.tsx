'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

type FAQItem = {
  id: string
  icon: IconName
  question: string
  answer: React.ReactNode
}

export default function Ai_application_Faq() {
     const faqItems: FAQItem[] = [
    {
      id: 'item-1',
      icon: 'clock',
      question: 'How can custom AI solutions benefit my business?',
      answer: (
        <span>
          Custom AI solutions can streamline your operations and improve performance across the board – from boosting efficiency and cutting costs to enhancing customer experiences – ultimately helping your business scale. For example, AI can automate routine tasks (like customer support inquiries or demand forecasting), freeing your team to focus on higher-value work. Whether you&apos;re a startup or a large enterprise, a well-tailored AI system increases the accuracy of decisions and provides a measurable competitive edge in the market. By leveraging AI that&apos;s built around your specific workflows and data, you gain insights and automation that generic off-the-shelf tools might miss, giving you an advantage over competitors.
        </span>
      )
    },
    {
      id: 'item-2',
      icon: 'clock',
      question: 'How much do custom AI solutions cost, and are they worth the investment?',
      answer: (
        <span>
          The cost of a custom AI solution can vary widely depending on its complexity and scope. For instance, a relatively basic AI tool (such as an intelligent chatbot) might cost in the tens of thousands of dollars, whereas a sophisticated AI platform (e.g. a full predictive analytics system) could run into the high six figures. Key factors include the level of customization, data volume, integration requirements, and ongoing maintenance or training expenses.

          Despite the upfront investment, custom AI often delivers strong returns. By automating processes and uncovering data-driven opportunities, AI can boost efficiency and revenue enough to offset its cost – one analysis found companies average about $3.50 in returns for every $1 spent on AI initiatives. The long-term savings and improved decision-making can outweigh the initial costs, especially when the solution is aligned to clear business goals. In short, a well-implemented custom AI solution is worth it for most businesses, providing substantial ROI through cost savings, higher productivity, and new growth opportunities.
        </span>
      )
    },
    {
      id: 'item-3',
      icon: 'clock',
      question: 'How do custom AI solutions integrate with my existing systems?',
      answer: (
        <span>
          Custom AI solutions are designed to work with your current tech stack with minimal disruption. Integration typically involves using APIs or middleware to connect the AI system to your existing software (CRM, ERP, e-commerce platforms, databases, etc.), ensuring data flows smoothly between old and new tools. Of course, integrating advanced technology can pose challenges – for example, dealing with legacy systems and data quality issues is a common hurdle in AI projects – but careful planning and a phased implementation can mitigate these issues. <br />
          You <b>won&apos;t need deep technical expertise</b> on your team to implement or maintain a custom AI solution if you have a reliable partner. A good AI solutions provider will handle the heavy lifting: assessing your infrastructure, customizing the AI to fit your workflows, and ensuring compatibility with your existing systems. They will typically deploy the solution in stages, test everything thoroughly, and address any technical complexities along the way. We also provide ongoing support and training, so your staff can comfortably use the new AI tools. In the end, the goal is a seamless integration – your custom AI will operate as an <b>integrated extension of your business</b>, not a standalone system, all while adhering to your security and compliance requirements. <br />
          Each of these FAQs addresses common concerns before adopting custom AI solutions. By understanding the benefits, costs, and integration process, you can move forward with confidence in leveraging AI to transform your business.
        </span>
      )
    }
  ]

    return (
        <section className="py-20">
            <div className="global-container md:px-4">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-0">
                            <h3 className="mb-4 h3 font-bold">Frequently Asked Questions</h3>
                            <p className='paragraph primary_header_content'>
                                Whether you run a small business, startup, e-commerce company, or enterprise, you likely have a few crucial questions before investing in a custom AI solution. Below we address the top three questions our ideal customers ask – covering the benefits, costs, and technical considerations – to help you make an informed decision.
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
                                            <span className="primary_header_content !font-medium ">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="paragraph secondary_header_content">{item.answer}</p>
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