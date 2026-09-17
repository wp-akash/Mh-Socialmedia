'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: React.ReactNode
}

export default function Seo_application_Faq() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'help-circle',
            question: 'How much does SEO cost in the UAE?',
            answer: (
                <span>
                    There is no universal SEO price. The right investment depends on: Competition, Website size, Number of locations, Number of languages, Industry, Technical complexity, Content requirements, Authority requirements, Business goals. A small Dubai business and a multinational enterprise require completely different SEO programs.
                </span>
            )
        },
        {
            id: 'item-2',
            icon: 'help-circle',
            question: 'Which is the best SEO company in Dubai?',
            answer: (
                <span>
                    The best SEO agency for you is the one that understands your business, market and commercial goals. And avoid agencies promising guaranteed #1 rankings.
                </span>
            )
        },
        {
            id: 'item-3',
            icon: 'help-circle',
            question: 'What is an SEO agency?',
            answer: (
                <span>
                    An SEO agency helps businesses increase their organic visibility across search engines and search experiences. Services can include technical SEO, content, keyword strategy, local SEO, authority building, analytics, conversion optimization and emerging AI-search optimization.
                </span>
            )
        },
        {
            id: 'item-4',
            icon: 'help-circle',
            question: 'Is SEO dead or evolving in 2026?',
            answer: (
                <span>
                    SEO is evolving. Google itself is actively developing generative AI experiences in Search. In August 2026, Google reported that AI Overviews had surpassed 2.5 billion monthly active users and AI Mode had surpassed one billion monthly users globally. That doesn't mean traditional SEO disappears. It means SEO becomes broader.
                </span>
            )
        },
        {
            id: 'item-5',
            icon: 'help-circle',
            question: 'How much do SEO services cost in Dubai?',
            answer: (
                <span>
                    Pricing depends on scope. A local SEO campaign can be very different from an enterprise multilingual campaign targeting several UAE markets. We recommend starting with an audit and opportunity analysis before deciding on investment.
                </span>
            )
        },
        {
            id: 'item-6',
            icon: 'help-circle',
            question: 'Is SEO worth it for small businesses in Dubai?',
            answer: (
                <span>
                    It can be extremely valuable when people actively search for the products or services you provide. Local SEO can be particularly powerful because it connects search intent with location.
                </span>
            )
        },
        {
            id: 'item-7',
            icon: 'help-circle',
            question: 'Why are SEO services in Dubai more expensive than other markets?',
            answer: (
                <span>
                    Dubai has strong competition in many commercially valuable sectors. Companies compete for high-value searches in: Real estate, Hospitality, Healthcare, Finance, Legal, Tourism, Professional services, E-commerce. The competitiveness of the market influences the resources required.
                </span>
            )
        },
        {
            id: 'item-8',
            icon: 'help-circle',
            question: 'How much does Google Ads cost vs. SEO in Dubai?',
            answer: (
                <span>
                    Google Ads typically requires payment for advertising clicks. SEO requires investment in the website, content, technical optimization, authority and ongoing strategy. Paid search can produce visibility quickly. SEO is designed to build an organic asset over time. For many businesses, the strongest strategy combines both.
                </span>
            )
        },
        {
            id: 'item-9',
            icon: 'help-circle',
            question: 'How long does SEO take to show results in Dubai?',
            answer: (
                <span>
                    There is no universal timeline. Some technical improvements may produce relatively fast changes. Competitive commercial terms can take much longer. We establish realistic milestones based on your starting point, competition and resources.
                </span>
            )
        },
        {
            id: 'item-10',
            icon: 'help-circle',
            question: 'How quickly can SEO increase my website traffic?',
            answer: (
                <span>
                    It depends on your current authority, technical health, content, competition and search demand. Rather than promising a specific percentage, we identify opportunities based on your actual data.
                </span>
            )
        },
        {
            id: 'item-11',
            icon: 'help-circle',
            question: 'When will I see ROI from SEO?',
            answer: (
                <span>
                    ROI depends on: Traffic × Conversion Rate × Customer Value. A website generating high-value leads may achieve positive ROI with significantly less traffic than a low-value business. That's why we focus on commercial intent rather than traffic alone.
                </span>
            )
        },
        {
            id: 'item-12',
            icon: 'help-circle',
            question: 'Can you guarantee #1 ranking on Google?',
            answer: (
                <span>
                    No. Nobody can honestly guarantee a permanent #1 position on Google. Search results change. Competitors change. Search systems change. Algorithms change. We can guarantee a professional process. We cannot guarantee Google's decisions.
                </span>
            )
        },
        {
            id: 'item-13',
            icon: 'help-circle',
            question: 'What is Google\'s SGE and how does it affect SEO?',
            answer: (
                <span>
                    SGE was the earlier name associated with Google's Search Generative Experience. Google's search ecosystem has since evolved considerably, including AI Overviews and AI Mode. In 2026, the more useful discussion is about AI-powered Search and generative search visibility rather than treating SGE as a standalone SEO channel.
                </span>
            )
        },
        {
            id: 'item-14',
            icon: 'help-circle',
            question: 'What is AEO?',
            answer: (
                <span>
                    AEO means Answer Engine Optimization. It focuses on making content useful and understandable for answer-oriented search experiences. The foundation is still high-quality information, strong structure, clear answers and genuine expertise.
                </span>
            )
        },
        {
            id: 'item-15',
            icon: 'help-circle',
            question: 'What is GEO?',
            answer: (
                <span>
                    GEO commonly means Generative Engine Optimization. It refers to strategies designed to improve a brand's visibility or representation in generative AI experiences. There is no single universally accepted GEO methodology. Google itself cautions against treating third-party AEO/GEO claims as official Google ranking guidance.
                </span>
            )
        },
        {
            id: 'item-16',
            icon: 'help-circle',
            question: 'What is AIO?',
            answer: (
                <span>
                    AIO can mean AI Optimization in modern marketing discussions. At MH Social, we use the term to describe broader optimization for AI-powered discovery and interpretation. We don't treat it as a magic replacement for SEO.
                </span>
            )
        },
        {
            id: 'item-17',
            icon: 'help-circle',
            question: 'What is AGI?',
            answer: (
                <span>
                    AGI stands for Artificial General Intelligence. It is a broader AI concept, not a specific SEO channel. Rather than claiming that websites can be “optimized for AGI,” we focus on making businesses clear, authoritative, useful and machine-understandable across evolving discovery systems.
                </span>
            )
        },
        {
            id: 'item-18',
            icon: 'help-circle',
            question: 'Do you offer e-commerce SEO for Shopify, Magento and WooCommerce?',
            answer: (
                <span>
                    Yes. We can develop SEO strategies for Shopify, Magento, WooCommerce and custom e-commerce platforms.
                </span>
            )
        },
        {
            id: 'item-19',
            icon: 'help-circle',
            question: 'Do you offer Arabic SEO?',
            answer: (
                <span>
                    Yes. Our multilingual SEO strategy can include Arabic keyword research, Arabic content, technical architecture, hreflang, metadata, local search and Arabic landing pages.
                </span>
            )
        },
        {
            id: 'item-20',
            icon: 'help-circle',
            question: 'Who have you worked with in Dubai?',
            answer: (
                <span>
                    We work across multiple industries and business types. [Insert verified MH Social client logos here.]
                </span>
            )
        },
        {
            id: 'item-21',
            icon: 'help-circle',
            question: 'Do you have Dubai SEO case studies?',
            answer: (
                <span>
                    Case studies should show measurable outcomes. We recommend presenting: Starting point → Strategy → Implementation → Results → Business impact. [Insert verified MH Social case studies here.]
                </span>
            )
        },
        {
            id: 'item-22',
            icon: 'help-circle',
            question: 'What makes MH Social different from other SEO companies in Dubai?',
            answer: (
                <span>
                    We don't look at SEO as simply keyword rankings. We combine: SEO + AEO + GEO + AIO + Local SEO + Content + Technical SEO + Conversion Strategy with a commercial objective.
                </span>
            )
        },
        {
            id: 'item-23',
            icon: 'help-circle',
            question: 'How do I choose the right SEO agency in Dubai?',
            answer: (
                <span>
                    Ask: Can they show relevant case studies? Do they explain what they're doing? Do they understand your industry? Do they measure commercial outcomes? Do they use ethical SEO practices? Do they provide transparent reporting? Do they understand technical SEO? Can they handle multilingual search? Do they understand modern AI-powered search? Do they avoid unrealistic ranking guarantees?
                </span>
            )
        },
        {
            id: 'item-24',
            icon: 'help-circle',
            question: 'What are the biggest SEO mistakes Dubai businesses make?',
            answer: (
                <span>
                    Common problems include: Keyword stuffing, Thin content, Duplicate pages, Poor technical architecture, Weak local SEO, Ignoring Arabic search, Buying low-quality links, Publishing generic AI content, Creating hundreds of low-value pages, Ignoring conversion optimization, Tracking rankings but not revenue. Google's current spam policies specifically warn against scaled content abuse, keyword stuffing and manipulative link practices.
                </span>
            )
        },
        {
            id: 'item-25',
            icon: 'help-circle',
            question: 'How do you measure SEO success?',
            answer: (
                <span>
                    We can measure: Visibility, Traffic, Engagement, Leads, Sales, Revenue, ROI. The exact KPI set depends on your business model.
                </span>
            )
        },
        {
            id: 'item-26',
            icon: 'help-circle',
            question: 'What tools do you use for SEO?',
            answer: (
                <span>
                    Depending on the campaign, our toolkit can include Google Search Console, Google Analytics, Google Business Profile, Semrush, Ahrefs, Screaming Frog, Sitebulb, PageSpeed Insights and Looker Studio.
                </span>
            )
        },
        {
            id: 'item-27',
            icon: 'help-circle',
            question: 'How often will I receive SEO reports?',
            answer: (
                <span>
                    Reporting frequency depends on the campaign. Reports can cover: Completed work, Organic traffic, Search visibility, Rankings, Technical health, Leads, Conversions, Opportunities, Next actions.
                </span>
            )
        },
        {
            id: 'item-28',
            icon: 'help-circle',
            question: 'What is SXO?',
            answer: (
                <span>
                    SXO means Search Experience Optimization. Instead of focusing only on getting a click, SXO considers the entire journey: Search → Result → Click → Page → Experience → Conversion. In an increasingly competitive and sometimes zero-click search environment, the experience after the click matters just as much as visibility.
                </span>
            )
        },
        {
            id: 'item-29',
            icon: 'help-circle',
            question: 'What is AI Optimization?',
            answer: (
                <span>
                    AI Optimization is the broader process of making your digital presence easier for AI-powered systems to understand, interpret and potentially surface. It involves: Clear entities, Strong content, Structured information, Original expertise, Brand consistency, Authority, Useful media, Technical accessibility.
                </span>
            )
        },
        {
            id: 'item-30',
            icon: 'help-circle',
            question: 'Can AI-generated content rank on Google?',
            answer: (
                <span>
                    AI assistance itself isn't automatically the problem. The real issue is whether the resulting content provides value. Google's 2026 guidance says content should be useful, reliable, people-first and non-commodity. Google also warns against using generative AI to produce large quantities of low-value pages primarily to manipulate rankings. Our approach is: AI-assisted where useful. Human expertise where essential. Original value everywhere.
                </span>
            )
        },
        {
            id: 'item-31',
            icon: 'help-circle',
            question: 'Can SEO make my business appear in AI Overviews?',
            answer: (
                <span>
                    No agency can guarantee inclusion. Google's systems decide which sources and information appear. What we can do is strengthen the foundations that matter: Relevance + Authority + Originality + Structure + Technical Accessibility + Useful Content. Google's current guidance specifically recommends unique, valuable content and states that established SEO practices remain foundational for generative AI search.
                </span>
            )
        },
        {
            id: 'item-32',
            icon: 'help-circle',
            question: 'Does Google Search Console now provide AI-search insights?',
            answer: (
                <span>
                    Google announced new Search Console controls and insights for generative AI Search features in 2026. Google said these features include information about pages appearing in AI responses and related impressions, and announced that the new capabilities had rolled out worldwide as of August 31, 2026. That means AI-search visibility is becoming increasingly measurable rather than purely theoretical.
                </span>
            )
        }
    ];

    return (
        <section className="py-20 border-[0.5px] border-color">
            <div className="global-container md:px-4">
                {/* ── Centered Header ── */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h3 className="h3">SEO Frequently Asked Questions</h3>
                    <p className='paragraph mt-4 primary_header_content'>
                        Find clear answers to the most common questions about our SEO services, process, pricing, and organic growth solutions in Dubai.
                    </p>
                </div>

                {/* ── Two Column Accordion ── */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full space-y-2">
                        {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline text-left">
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
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full space-y-2">
                        {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline text-left">
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