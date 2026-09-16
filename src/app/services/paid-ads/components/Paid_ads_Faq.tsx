'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: React.ReactNode
}

type FAQCategory = {
    categoryName: string
    items: FAQItem[]
}

const FAQ_DATA: FAQCategory[] = [
    {
        categoryName: 'Pricing & Budgeting',
        items: [
            {
                id: 'cost-dubai',
                icon: 'wallet',
                question: 'How much does paid advertising cost in Dubai?',
                answer: (
                    <div className="space-y-2">
                        <p>There are two separate costs: <strong>Advertising spend</strong> and <strong>Agency/service fees</strong>.</p>
                        <p>Your advertising budget depends on your industry, competition, customer value, target volume, and platform. We recommend determining budget based on business economics rather than an arbitrary number.</p>
                    </div>
                ),
            },
            {
                id: 'google-ads-budget',
                icon: 'coins',
                question: 'How much should I spend on Google Ads in Dubai?',
                answer: (
                    <div className="space-y-2">
                        <p>There is no universal budget. A business selling a low-value product and a company selling million-dirham real estate cannot use the same economics.</p>
                        <p>We calculate budget around: <strong>Demand + Conversion Rate + Customer Value + Target Acquisition Cost</strong>.</p>
                    </div>
                ),
            },
            {
                id: 'meta-ads-budget',
                icon: 'chart-pie',
                question: 'How much should I spend on Meta Ads?',
                answer: 'Again, it depends. The right budget is the amount that allows sufficient data and testing while remaining economically viable.',
            },
        ],
    },
    {
        categoryName: 'Platforms & Strategy',
        items: [
            {
                id: 'google-vs-meta',
                icon: 'split',
                question: 'Which is better: Google Ads or Meta Ads?',
                answer: 'They solve different problems. Google often captures existing intent, whereas Meta can create and influence demand. For many businesses, combining them produces stronger results.',
            },
            {
                id: 'tiktok-ads',
                icon: 'video',
                question: 'Should I use TikTok Ads in Dubai?',
                answer: 'If your audience and creative fit the platform, TikTok can be valuable. Its reported UAE advertising audience was 12.5 million adults in late 2025 according to DataReportal. But audience size alone shouldn\'t determine platform selection.',
            },
            {
                id: 'linkedin-b2b',
                icon: 'briefcase',
                question: 'Should B2B companies advertise on LinkedIn?',
                answer: 'LinkedIn can be valuable for B2B businesses where professional targeting is commercially relevant. The key is having a sufficiently valuable offer to justify the potentially higher acquisition cost.',
            },
            {
                id: 'advertise-everywhere',
                icon: 'globe',
                question: 'Should I advertise everywhere?',
                answer: 'No. More platforms don\'t automatically mean better marketing. We recommend platforms based on: Audience + Intent + Creative Fit + Economics + Business Goal.',
            },
        ],
    },
    {
        categoryName: 'Expectations & Guarantees',
        items: [
            {
                id: 'speed-results',
                icon: 'zap',
                question: 'How quickly can paid advertising generate leads?',
                answer: (
                    <div className="space-y-2">
                        <p>Paid advertising can begin generating traffic and conversions shortly after campaigns launch, but performance depends heavily on:</p>
                        <p className="font-medium text-sm border-l-2 border-primary/50 pl-3 py-1">
                            Offer • Creative • Targeting • Competition • Landing page • Tracking • Budget • Sales process
                        </p>
                        <p>Launching quickly doesn't mean profitability is guaranteed quickly.</p>
                    </div>
                ),
            },
            {
                id: 'guarantee-leads',
                icon: 'shield-alert',
                question: 'Can you guarantee leads?',
                answer: 'No responsible advertising agency can guarantee a fixed number of leads. The market controls demand, platforms control auctions, and customers control decisions. We control the strategy, execution, and optimization.',
            },
            {
                id: 'guarantee-sales',
                icon: 'shopping-cart',
                question: 'Can you guarantee sales?',
                answer: 'No. Advertising is one part of the sales system. Product quality, pricing, offer, website, sales team, customer experience, and market conditions all matter.',
            },
            {
                id: 'guarantee-roas',
                icon: 'badge-percent',
                question: 'Can you guarantee ROAS?',
                answer: 'No credible agency should guarantee a specific ROAS without controlling all relevant variables. We can set targets and optimize toward them.',
            },
        ],
    },
    {
        categoryName: 'Definitions & Concepts',
        items: [
            {
                id: 'def-roas',
                icon: 'calculator',
                question: 'What is ROAS?',
                answer: 'ROAS means Return on Ad Spend. For example, if you spend AED 10,000 and generate AED 50,000 in attributed revenue, your ROAS is 5x. However, ROAS alone doesn\'t tell you whether the campaign is profitable—margins matter.',
            },
            {
                id: 'def-cpa',
                icon: 'target',
                question: 'What is CPA?',
                answer: 'CPA means Cost Per Acquisition. It measures how much advertising spend is required to generate a defined acquisition.',
            },
            {
                id: 'def-cpl',
                icon: 'users',
                question: 'What is CPL?',
                answer: 'CPL means Cost Per Lead. It is useful for lead-generation campaigns but should not be the only KPI. A campaign producing cheap leads that never become customers may be worse than a campaign producing fewer but higher-quality leads.',
            },
            {
                id: 'def-pmax',
                icon: 'bot',
                question: 'What is Performance Max?',
                answer: 'Performance Max is a Google Ads campaign type that uses Google\'s automated systems to serve ads across eligible Google inventory. It can be useful when the account has appropriate conversion data, assets, and objectives.',
            },
            {
                id: 'def-demand-gen',
                icon: 'sparkles',
                question: 'What is Demand Gen?',
                answer: 'Demand Gen is designed to help advertisers create demand and reach potential customers across visual Google environments. It can be useful for discovery, consideration, and remarketing.',
            },
            {
                id: 'def-advantage-plus',
                icon: 'cpu',
                question: 'What is Advantage+?',
                answer: 'Advantage+ refers to Meta\'s suite of AI-powered and automated advertising capabilities. These systems increasingly automate aspects of audience selection, placements, creative, and campaign optimization.',
            },
            {
                id: 'def-ai-buyer',
                icon: 'brain-circuit',
                question: 'Does AI replace media buyers?',
                answer: 'AI automates more of the execution, but humans still need to understand business economics, customer psychology, creative, offers, brand, measurement, and strategy. The role of the media buyer is evolving from manual campaign operator to strategic growth operator.',
            },
            {
                id: 'def-ai-ads',
                icon: 'wand-2',
                question: 'Should I use AI-generated ads?',
                answer: 'AI can help generate creative variations and speed up production, but generic AI content can feel generic. We use AI as a production and testing accelerator while maintaining human strategic and creative oversight.',
            },
            {
                id: 'def-first-party',
                icon: 'database',
                question: 'What is first-party data?',
                answer: 'First-party data is information your business collects directly from its customers and users (e.g., CRM records, customer lists, purchases, leads, website interactions, and booking info). It is increasingly valuable for advertising measurement and optimization.',
            },
            {
                id: 'def-capi',
                icon: 'server',
                question: 'What is Conversion API?',
                answer: 'Conversion APIs allow businesses to send conversion events directly from their systems to advertising platforms rather than relying solely on browser-based tracking. Implementation depends on the platform and technical environment.',
            },
            {
                id: 'def-attribution',
                icon: 'line-chart',
                question: 'What is attribution?',
                answer: 'Attribution is the process of understanding which marketing interactions contributed to a conversion. It matters because customers often interact with multiple channels before buying.',
            },
        ],
    },
    {
        categoryName: 'Troubleshooting & Optimization',
        items: [
            {
                id: 'fix-clicks-no-leads',
                icon: 'help-circle',
                question: 'Why are my ads getting clicks but no leads?',
                answer: 'Possible reasons include: wrong audience, weak offer, poor landing page, low trust, slow website, confusing CTA, poor traffic quality, broken tracking, or weak follow-up. We diagnose the entire funnel rather than blaming the advertising platform immediately.',
            },
            {
                id: 'fix-meta-expensive',
                icon: 'trending-up',
                question: 'Why are my Meta Ads suddenly getting expensive?',
                answer: 'Possible causes include increased competition, creative fatigue, audience saturation, seasonality, offer changes, tracking changes, conversion-rate decline, or auction changes. We investigate the data before making decisions.',
            },
            {
                id: 'fix-google-expensive',
                icon: 'search-x',
                question: 'Why are my Google Ads clicks expensive?',
                answer: 'Possible factors include highly competitive keywords, low Quality Score, high commercial value, weak ad relevance, geographic competition, and industry economics. The objective isn\'t always to make CPC as low as possible—a higher CPC can be acceptable if the resulting customer is significantly more valuable.',
            },
            {
                id: 'campaign-duration',
                icon: 'clock',
                question: 'How long should I run an advertising campaign?',
                answer: 'It depends on the objective. Some campaigns are short-term promotions; others are always-on acquisition systems. We prefer creating a testing period followed by ongoing optimization where the economics justify it.',
            },
            {
                id: 'ad-frequency',
                icon: 'refresh-cw',
                question: 'How often should ads be changed?',
                answer: 'Not every ad needs to be changed constantly. Changing too frequently can prevent campaigns from gathering useful data. We monitor creative performance and replace or expand assets based on evidence.',
            },
            {
                id: 'creative-fatigue',
                icon: 'battery-low',
                question: 'What is creative fatigue?',
                answer: 'Creative fatigue happens when an audience repeatedly sees the same advertisement and its performance declines. Signs include rising frequency, falling CTR, rising CPA, and declining engagement. Creative variation helps reduce this risk.',
            },
        ],
    },
    {
        categoryName: 'Services & Deliverables',
        items: [
            {
                id: 'service-creatives',
                icon: 'palette',
                question: 'Do you create advertising creatives?',
                answer: 'Yes. Depending on your package, we can create: Static ads, Carousels, Reels, Short videos, UGC, Motion graphics, Stories, Product ads, and Lead-generation creatives.',
            },
            {
                id: 'service-landing-pages',
                icon: 'layout',
                question: 'Do you create landing pages?',
                answer: 'Yes. Landing pages can be developed specifically for paid campaigns to improve message alignment and conversion.',
            },
            {
                id: 'service-crm',
                icon: 'workflow',
                question: 'Can you integrate advertising with my CRM?',
                answer: 'Where the required integrations are available, yes. CRM integration helps connect: Ad → Lead → Qualification → Sales → Customer.',
            },
            {
                id: 'service-offline-sales',
                icon: 'store',
                question: 'Can you track offline sales?',
                answer: 'Depending on your CRM and advertising platform, offline conversion data can potentially be imported or connected. This is especially valuable for businesses where the final sale happens offline.',
            },
            {
                id: 'service-budget-mgmt',
                icon: 'shield-check',
                question: 'Do you manage the advertising budget?',
                answer: 'We manage campaign execution and optimization, while the advertising spend remains your business investment. Budgets and approvals should be transparent.',
            },
            {
                id: 'service-google-meta',
                icon: 'layers',
                question: 'Do you manage Google Ads and Meta Ads together?',
                answer: 'Yes. In many cases, using both creates a stronger customer acquisition ecosystem: Google captures intent, while Meta helps generate and influence demand.',
            },
            {
                id: 'service-reports',
                icon: 'file-bar-chart',
                question: 'Do you provide monthly reports?',
                answer: 'Yes. Reports can cover spend, reach, clicks, CTR, CPC, leads, sales, CPA, CPL, ROAS, revenue, and conversion rate. We also explain what the numbers actually mean.',
            },
            {
                id: 'why-mh-social',
                icon: 'award',
                question: 'What makes MH Social different from other paid advertising agencies in Dubai?',
                answer: 'We don\'t treat advertising as simply buying clicks. We connect Strategy + Creative + Media + Landing Pages + Tracking + Data + Sales into one unified performance system.',
            },
            {
                id: 'choose-agency',
                icon: 'check-circle-2',
                question: 'How do I choose the right paid advertising agency in Dubai?',
                answer: 'Ask whether they understand your business model, customer acquisition economics, creative strategy, tracking implementation, CRM integrations, and multi-channel attribution. The right agency should be able to explain why the campaign should work, not simply promise that it will.',
            },
        ],
    },
]

export default function Paid_ads_Faq() {
    return (
        <section className="py-20 border-[0.5px] border-color">
            <div className="global-container md:px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h3 className="h3">Top Questions Clients Ask</h3>
                    <p className="paragraph mt-4 primary_header_content">
                        Find clear answers to the most common questions about our paid advertising services, process, pricing, and growth solutions.
                    </p>
                </div>

                {/* Categorized Accordion */}
                <div className="max-w-3xl mx-auto space-y-10">
                    {FAQ_DATA.map((category) => (
                        <div key={category.categoryName} className="space-y-4">
                            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground block px-1">
                                {category.categoryName}
                            </span>
                            <Accordion type="single" collapsible className="w-full space-y-2">
                                {category.items.map((item) => (
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
                                                        className="size-4"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <span className="primary_header_content !font-medium">
                                                    {item.question}
                                                </span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-5">
                                            <div className="pl-9 pr-4">
                                                <div className="paragraph text-muted-foreground">
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}