'use client'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import { HelpCircle } from 'lucide-react'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: React.ReactNode
}

export default function Google_application_Faq() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'banknote',
            question: 'How much does website development cost in Dubai?',
            answer: (
                <div className="space-y-2">
                    <p>
                        There is no single price. A simple corporate website can require a completely different investment from a multilingual enterprise platform, e-commerce store or custom web application.
                    </p>
                    <p>Pricing depends on:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Number of pages</li>
                        <li>Design requirements</li>
                        <li>CMS</li>
                        <li>Custom functionality</li>
                        <li>Integrations</li>
                        <li>E-commerce</li>
                        <li>Languages</li>
                        <li>Content</li>
                        <li>SEO</li>
                        <li>Hosting</li>
                        <li>Maintenance</li>
                    </ul>
                    <p className="pt-1 font-medium">We recommend starting with requirements rather than a fixed package.</p>
                </div>
            ),
        },
        {
            id: 'item-2',
            icon: 'timer',
            question: 'How long does it take to build a website in Dubai?',
            answer: (
                <div className="space-y-2">
                    <p>Timelines depend on complexity.</p>
                    <p>A simple website may be completed relatively quickly. A large corporate website, e-commerce store or custom web application can require significantly more planning, development and testing.</p>
                    <p>We establish a project timeline after defining scope.</p>
                </div>
            ),
        },
        {
            id: 'item-3',
            icon: 'globe',
            question: 'Do you build WordPress websites?',
            answer: (
                <span>
                    Yes. We build custom WordPress websites, including Elementor-based websites, corporate websites, landing pages and WooCommerce stores.
                </span>
            ),
        },
        {
            id: 'item-4',
            icon: 'blocks',
            question: 'Do you build Elementor websites?',
            answer: (
                <span>
                    Yes. We can create custom Elementor websites designed around your brand, content structure and conversion goals.
                </span>
            ),
        },
        {
            id: 'item-5',
            icon: 'shopping-bag',
            question: 'Do you build Shopify websites?',
            answer: (
                <span>
                    Yes. We can develop and customize Shopify stores, including themes, product structures, integrations and conversion-focused experiences.
                </span>
            ),
        },
        {
            id: 'item-6',
            icon: 'shopping-cart',
            question: 'Do you build WooCommerce websites?',
            answer: (
                <span>
                    Yes. WooCommerce is an excellent option for businesses that want the flexibility of WordPress combined with e-commerce functionality.
                </span>
            ),
        },
        {
            id: 'item-7',
            icon: 'code-2',
            question: 'Do you build custom websites?',
            answer: (
                <span>
                    Yes. For businesses with unique requirements, we can build custom functionality and web applications rather than forcing the business into a standard template.
                </span>
            ),
        },
        {
            id: 'item-8',
            icon: 'store',
            question: 'Do you develop e-commerce websites?',
            answer: (
                <span>
                    Yes. We can develop e-commerce platforms using Shopify, WooCommerce, Magento and custom technology depending on requirements.
                </span>
            ),
        },
        {
            id: 'item-9',
            icon: 'refresh-cw',
            question: 'Can you redesign my existing website?',
            answer: (
                <span>
                    Yes. We can redesign the website while preserving valuable content, URLs and SEO equity where appropriate.
                </span>
            ),
        },
        {
            id: 'item-10',
            icon: 'shield-alert',
            question: 'Will redesigning my website hurt my SEO?',
            answer: (
                <div className="space-y-2">
                    <p>It can if the migration is handled poorly. Common problems include:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Lost URLs</li>
                        <li>Missing redirects</li>
                        <li>Deleted content</li>
                        <li>Changed metadata</li>
                        <li>Broken internal links</li>
                        <li>Indexing problems</li>
                    </ul>
                    <p className="pt-1">We plan redesigns with SEO and migration requirements in mind.</p>
                </div>
            ),
        },
        {
            id: 'item-11',
            icon: 'search-check',
            question: 'Do you build SEO-friendly websites?',
            answer: (
                <span>
                    Yes. SEO is considered during architecture and development rather than treated as an afterthought.
                </span>
            ),
        },
        {
            id: 'item-12',
            icon: 'zap',
            question: 'Can you optimize website speed?',
            answer: (
                <div className="space-y-2">
                    <p>Yes. We can investigate:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Images</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>Fonts</li>
                        <li>Hosting</li>
                        <li>Caching</li>
                        <li>CDN</li>
                        <li>Third-party scripts</li>
                        <li>Database performance</li>
                    </ul>
                    <p className="pt-1">and prioritize improvements based on actual bottlenecks.</p>
                </div>
            ),
        },
        {
            id: 'item-13',
            icon: 'gauge',
            question: 'What are Core Web Vitals?',
            answer: (
                <span>
                    Core Web Vitals are Google's user-focused metrics for measuring important aspects of page experience, including loading performance, responsiveness and visual stability. They are one part of a broader website-quality picture.
                </span>
            ),
        },
        {
            id: 'item-14',
            icon: 'smartphone',
            question: 'Do you build mobile-friendly websites?',
            answer: (
                <span>
                    Yes. Our websites are designed to work across mobile, tablet and desktop screen sizes.
                </span>
            ),
        },
        {
            id: 'item-15',
            icon: 'languages',
            question: 'Do you build Arabic websites?',
            answer: (
                <span>
                    Yes. We can develop Arabic and multilingual websites, including RTL layouts.
                </span>
            ),
        },
        {
            id: 'item-16',
            icon: 'align-right',
            question: 'What is RTL web development?',
            answer: (
                <span>
                    RTL means Right-to-Left. Arabic is written from right to left, so Arabic websites require appropriate layout, typography, navigation and interface handling.
                </span>
            ),
        },
        {
            id: 'item-17',
            icon: 'message-square-more',
            question: 'Can you integrate WhatsApp into my website?',
            answer: (
                <span>
                    Yes. Depending on your requirements, we can implement WhatsApp contact and lead-generation flows.
                </span>
            ),
        },
        {
            id: 'item-18',
            icon: 'users',
            question: 'Can you connect my website to a CRM?',
            answer: (
                <span>
                    Yes. If the CRM provides suitable integration capabilities, we can connect website forms and relevant events to your CRM.
                </span>
            ),
        },
        {
            id: 'item-19',
            icon: 'network',
            question: 'Can you connect my website to an ERP?',
            answer: (
                <span>
                    Potentially, yes. ERP integrations depend on the ERP's APIs, architecture, security requirements and available integration methods.
                </span>
            ),
        },
        {
            id: 'item-20',
            icon: 'credit-card',
            question: 'Can you integrate payment gateways?',
            answer: (
                <span>
                    Yes. We can integrate appropriate payment solutions depending on your platform, market and provider requirements.
                </span>
            ),
        },
        {
            id: 'item-21',
            icon: 'calendar-check',
            question: 'Can you build booking systems?',
            answer: (
                <div className="space-y-2">
                    <p>Yes. We can build or integrate booking functionality for:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Hotels</li>
                        <li>Restaurants</li>
                        <li>Clinics</li>
                        <li>Services</li>
                        <li>Events</li>
                        <li>Appointments</li>
                        <li>Rentals</li>
                    </ul>
                </div>
            ),
        },
        {
            id: 'item-22',
            icon: 'building-2',
            question: 'Can you build property listing websites?',
            answer: (
                <span>
                    Yes. We can develop real estate websites with listings, filters, project pages, location information, agent profiles and lead-generation systems.
                </span>
            ),
        },
        {
            id: 'item-23',
            icon: 'layout-grid',
            question: 'Can you build a marketplace?',
            answer: (
                <div className="space-y-2">
                    <p>
                        Yes. Marketplace development is possible, although requirements are significantly more complex than a standard e-commerce store.
                    </p>
                    <p>Marketplace projects may involve:</p>
                    <ul className="list-disc pl-5 space-y-1 grid grid-cols-2 gap-x-4">
                        <li>Buyers</li>
                        <li>Sellers</li>
                        <li>Listings</li>
                        <li>Payments</li>
                        <li>Commissions</li>
                        <li>Dashboards</li>
                        <li>Verification</li>
                        <li>Reviews</li>
                        <li>Messaging</li>
                        <li>Order management</li>
                    </ul>
                </div>
            ),
        },
        {
            id: 'item-24',
            icon: 'layers',
            question: 'Can you build SaaS applications?',
            answer: (
                <span>
                    Yes. We can support web-based SaaS products and business applications depending on the technical requirements.
                </span>
            ),
        },
        {
            id: 'item-25',
            icon: 'bot',
            question: 'Can you integrate AI into my website?',
            answer: (
                <div className="space-y-2">
                    <p>Yes. Potential applications include:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>AI chat</li>
                        <li>AI search</li>
                        <li>Lead qualification</li>
                        <li>Recommendations</li>
                        <li>Content assistance</li>
                        <li>Customer support</li>
                        <li>Automation</li>
                    </ul>
                    <p className="pt-1">We recommend using AI where it solves a genuine problem rather than adding AI simply for marketing purposes.</p>
                </div>
            ),
        },
        {
            id: 'item-26',
            icon: 'sparkles',
            question: 'Will my website be ready for AI search?',
            answer: (
                <div className="space-y-2">
                    <p>No website can guarantee visibility in AI search. But we can build the technical and content foundations that support modern search discovery:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Clear information architecture</li>
                        <li>Structured data</li>
                        <li>Strong content</li>
                        <li>Entity clarity</li>
                        <li>Internal linking</li>
                        <li>Technical accessibility</li>
                        <li>Authoritative information</li>
                    </ul>
                    <p className="pt-1">These foundations support SEO and can also support visibility across evolving AI-powered search experiences.</p>
                </div>
            ),
        },
        {
            id: 'item-27',
            icon: 'file-question',
            question: 'What is AEO in web development?',
            answer: (
                <div className="space-y-2">
                    <p>AEO means Answer Engine Optimization. From a website-development perspective, this means structuring information clearly so answer-oriented systems can understand the site's content.</p>
                    <p>That can include:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Clear headings</li>
                        <li>Question-based content</li>
                        <li>Structured information</li>
                        <li>FAQs</li>
                        <li>Semantic HTML</li>
                        <li>Schema</li>
                        <li>Strong internal relationships</li>
                    </ul>
                </div>
            ),
        },
        {
            id: 'item-28',
            icon: 'cpu',
            question: 'What is GEO?',
            answer: (
                <span>
                    GEO commonly means Generative Engine Optimization. It focuses on improving a brand's visibility and representation within generative search experiences. A technically strong website is only one part of GEO. Content, expertise, authority and brand signals matter too.
                </span>
            ),
        },
        {
            id: 'item-29',
            icon: 'brain-circuit',
            question: 'What is AIO?',
            answer: (
                <span>
                    AIO can mean AI Optimization. In the context of web development, it broadly refers to making digital content and experiences easier for AI-powered systems to interpret and use.
                </span>
            ),
        },
        {
            id: 'item-30',
            icon: 'atom',
            question: 'What is AGI and does it affect websites?',
            answer: (
                <span>
                    AGI stands for Artificial General Intelligence. It isn't a specific web-development technology or SEO tactic. However, increasingly capable AI systems may change how users discover information, interact with businesses and navigate digital services. That's why we focus on building websites around clear information, strong UX, structured data and scalable technology.
                </span>
            ),
        },
        {
            id: 'item-31',
            icon: 'server',
            question: 'Do you provide website hosting?',
            answer: (
                <div className="space-y-2">
                    <p>Hosting can be included or coordinated depending on the project. The appropriate hosting environment depends on:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Traffic</li>
                        <li>Technology</li>
                        <li>Security</li>
                        <li>Performance</li>
                        <li>Scalability</li>
                        <li>Budget</li>
                    </ul>
                </div>
            ),
        },
        {
            id: 'item-32',
            icon: 'wrench',
            question: 'Do you provide website maintenance?',
            answer: (
                <div className="space-y-2">
                    <p>Yes. Maintenance can include:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Updates</li>
                        <li>Security</li>
                        <li>Backups</li>
                        <li>Monitoring</li>
                        <li>Bug fixes</li>
                        <li>Performance</li>
                        <li>Content changes</li>
                        <li>Technical support</li>
                    </ul>
                </div>
            ),
        },
        {
            id: 'item-33',
            icon: 'rocket',
            question: 'Can you manage my website after launch?',
            answer: (
                <span>
                    Yes. We can provide ongoing development, maintenance, SEO, CRO and digital growth support.
                </span>
            ),
        },
        {
            id: 'item-34',
            icon: 'user-check',
            question: 'Will I be able to edit my website myself?',
            answer: (
                <span>
                    For CMS-based websites such as WordPress, Shopify and similar platforms, we can structure the website so your team can manage appropriate content areas.
                </span>
            ),
        },
        {
            id: 'item-35',
            icon: 'pen-tool',
            question: 'Do you provide website content?',
            answer: (
                <div className="space-y-2">
                    <p>Yes, depending on the project. We can support:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Website copy</li>
                        <li>SEO content</li>
                        <li>Service pages</li>
                        <li>Product content</li>
                        <li>Blog content</li>
                        <li>FAQs</li>
                        <li>Landing pages</li>
                    </ul>
                </div>
            ),
        },
        {
            id: 'item-36',
            icon: 'line-chart',
            question: 'Do you provide SEO with web development?',
            answer: (
                <div className="space-y-2">
                    <p>Yes. SEO can be integrated into the development process, including:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Architecture</li>
                        <li>URLs</li>
                        <li>Metadata</li>
                        <li>Internal linking</li>
                        <li>Schema</li>
                        <li>Performance</li>
                        <li>Mobile UX</li>
                        <li>Crawlability</li>
                    </ul>
                </div>
            ),
        },
        {
            id: 'item-37',
            icon: 'shield-check',
            question: 'Do you guarantee Google rankings after building my website?',
            answer: (
                <span>
                    No. Website development can create strong technical foundations for SEO, but rankings depend on many factors including competition, content, authority, search demand and Google's systems.
                </span>
            ),
        },
        {
            id: 'item-38',
            icon: 'trophy',
            question: 'What makes MH Social different from other web development companies in Dubai?',
            answer: (
                <div className="space-y-2">
                    <p>We don't separate technology from marketing. We combine:</p>
                    <p className="font-semibold text-primary">
                        Web Development + UX + SEO + CRO + Digital Marketing + AI + Business Strategy
                    </p>
                    <p>so your website becomes part of your growth system rather than an isolated project.</p>
                </div>
            ),
        },
        {
            id: 'item-39',
            icon: 'check-circle-2',
            question: 'How do I choose the right web development company in Dubai?',
            answer: (
                <div className="space-y-2">
                    <p>Ask:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Can they show relevant projects?</li>
                        <li>Do they understand your industry?</li>
                        <li>Can they explain the technology?</li>
                        <li>Do they consider SEO?</li>
                        <li>Do they understand UX?</li>
                        <li>Can they integrate your systems?</li>
                        <li>Do they provide post-launch support?</li>
                        <li>Do they understand performance?</li>
                        <li>Can they handle Arabic and multilingual requirements?</li>
                        <li>Can they connect the website to business outcomes?</li>
                    </ul>
                    <p className="pt-1 font-medium">
                        Don't choose a developer based only on the homepage screenshot. Choose a partner who understands what the website needs to accomplish.
                    </p>
                </div>
            ),
        },
    ]

    return (
        <section className="py-20 border-[0.5px] border-color">
            <div className="global-container md:px-4">
                {/* ── Centered Header ── */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h3 className="h3">Top Questions Clients Ask</h3>
                    <p className="paragraph mt-4 primary_header_content">
                        Find clear answers to the most common questions about our consulting services, process, pricing, and business growth solutions.
                    </p>
                </div>

                {/* ── Centered Accordion ── */}
                <div className="max-w-3xl mx-auto">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full space-y-2"
                    >
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                            >
                                <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                    <div className="flex items-center gap-3 text-left">
                                        <div className="flex size-6 shrink-0 items-center justify-center">
                                            <DynamicIcon
                                                name={item.icon}
                                                fallback={() => <HelpCircle className="size-4" />}
                                                className="size-4"
                                            />
                                        </div>
                                        <span className="primary_header_content font-medium">
                                            {item.question}
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-5">
                                    <div className="pl-9 pr-2 text-muted-foreground leading-relaxed">
                                        <div className="paragraph">{item.answer}</div>
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