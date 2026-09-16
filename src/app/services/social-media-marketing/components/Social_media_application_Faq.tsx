'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

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
            icon: 'clock',
            question: 'What does a social media marketing agency do?',
            answer: (
                <span>
                    A social media marketing agency helps businesses build, manage, advertise and grow their presence across social platforms. Services can include strategy, content, creative, video, paid advertising, community management, influencer marketing, analytics and conversion campaigns.
                </span>
            )
        },
        {
            id: 'item-2',
            icon: 'clock',
            question: 'How much does social media marketing cost in Dubai?',
            answer: (
                <span>
                    Pricing depends on: Number of platforms, Content volume, Video requirements, Creative complexity, Paid advertising, Influencers, Community management, Strategy requirements, and Reporting. A small local business and a major Dubai enterprise need completely different levels of service.
                </span>
            )
        },
        {
            id: 'item-3',
            icon: 'clock',
            question: 'Which social media platform is best for businesses in Dubai?',
            answer: (
                <span>
                    There is no universal answer. Depending on your audience, you may benefit from: Instagram, Facebook, TikTok, YouTube, LinkedIn, Snapchat, or X. The right platform is the one where your customers spend attention and where your business can create relevant content.
                </span>
            )
        },
        {
            id: 'item-4',
            icon: 'clock',
            question: 'How many social media posts should we publish each month?',
            answer: (
                <span>
                    Quality and consistency matter more than hitting an arbitrary number. The correct volume depends on: Audience, Platform, Content resources, Business goals, Creative budget, Video production, and Campaign calendar.
                </span>
            )
        },
        {
            id: 'item-5',
            icon: 'clock',
            question: 'Is Instagram still important in Dubai?',
            answer: (
                <span>
                    Yes. Meta's advertising resources reported approximately 8.05 million Instagram users in the UAE in late 2025, equivalent to 71.3% of the country's internet user base. These figures represent advertising reach, not necessarily monthly active users.
                </span>
            )
        },
        {
            id: 'item-6',
            icon: 'clock',
            question: 'Is Facebook still relevant in Dubai?',
            answer: (
                <span>
                    Yes. Meta's advertising resources reported approximately 9.70 million Facebook users in the UAE in late 2025. Again, advertising reach should not be interpreted as identical to active-user counts.
                </span>
            )
        },
        {
            id: 'item-7',
            icon: 'clock',
            question: 'Should my Dubai business use TikTok?',
            answer: (
                <span>
                    If your audience and content fit TikTok, it can be extremely valuable. TikTok's advertising resources reported 12.5 million adults in its UAE audience in late 2025, according to DataReportal. The platform is particularly useful for short-form video, discovery, creators, UGC and entertainment-led marketing.
                </span>
            )
        },
        {
            id: 'item-8',
            icon: 'clock',
            question: 'Is social media better than Google Ads?',
            answer: (
                <span>
                    They serve different purposes. Google Ads captures existing intent. Social media can create and influence demand. For many businesses, the strongest strategy combines: Google + Social + SEO + Remarketing.
                </span>
            )
        },
        {
            id: 'item-9',
            icon: 'clock',
            question: 'How much should I spend on social media ads in Dubai?',
            answer: (
                <span>
                    There isn't one correct budget. We recommend determining your budget based on: Customer value + conversion rate + target volume + acquisition economics rather than choosing an arbitrary daily amount.
                </span>
            )
        },
        {
            id: 'item-10',
            icon: 'clock',
            question: 'Can you guarantee leads from social media?',
            answer: (
                <span>
                    No responsible agency can guarantee a fixed number of leads. Results depend on: Market, Offer, Creative, Audience, Landing page, Sales process, Competition, and Budget. We can build, test and optimize the system.
                </span>
            )
        },
        {
            id: 'item-11',
            icon: 'clock',
            question: 'Can you guarantee viral content?',
            answer: (
                <span>
                    No. Virality cannot be guaranteed. We can increase the probability of strong performance through better: Hooks, Storytelling, Creative, Relevance, Trends, Audience understanding, and Testing. But no honest marketer can promise that a specific post will go viral.
                </span>
            )
        },
        {
            id: 'item-12',
            icon: 'clock',
            question: 'What is social media SEO?',
            answer: (
                <span>
                    Social media SEO means optimizing your social presence for discovery within social platforms and search environments. This can include: Profile optimization, Keywords, Captions, Video titles, Descriptions, Location signals, Content topics, and Search-friendly language.
                </span>
            )
        },
        {
            id: 'item-13',
            icon: 'clock',
            question: 'What is UGC?',
            answer: (
                <span>
                    UGC stands for User-Generated Content. It is content created by customers, creators or users rather than traditional brand advertising. UGC can make advertising feel more authentic and experience-driven.
                </span>
            )
        },
        {
            id: 'item-14',
            icon: 'clock',
            question: 'What is creator marketing?',
            answer: (
                <span>
                    Creator marketing involves partnering with creators who have relevant audiences and influence. The right creator isn't necessarily the one with the largest following. Audience relevance and credibility often matter more.
                </span>
            )
        },
        {
            id: 'item-15',
            icon: 'clock',
            question: 'Should I use influencers in Dubai?',
            answer: (
                <span>
                    Influencer marketing can work extremely well when the creator, audience and product fit together. We recommend evaluating: Audience quality + relevance + engagement + content quality + location + credibility rather than follower count alone.
                </span>
            )
        },
        {
            id: 'item-16',
            icon: 'clock',
            question: 'Can AI create my social media content?',
            answer: (
                <span>
                    AI can assist with: Ideas, Research, Drafts, Variations, Translation, Video workflows, and Creative testing. But brands still need human strategy, judgment, experience and originality.
                </span>
            )
        },
        {
            id: 'item-17',
            icon: 'clock',
            question: 'Will AI replace social media marketers?',
            answer: (
                <span>
                    AI will automate parts of social media marketing. It won't eliminate the need for: Strategy, Brand thinking, Creative direction, Storytelling, Community, Relationships, and Business understanding. The strongest teams will combine human creativity + AI scalability.
                </span>
            )
        },
        {
            id: 'item-18',
            icon: 'clock',
            question: 'How does AI affect Meta advertising?',
            answer: (
                <span>
                    AI is increasingly involved in ad ranking, recommendations, creative tools and optimization. Meta reported that its newer advertising ranking improvements produced a 3.5% lift in Facebook ad clicks and more than a 1% increase in Instagram conversions in Q4 2025. That makes creative quality and useful conversion signals increasingly important.
                </span>
            )
        },
        {
            id: 'item-19',
            icon: 'clock',
            question: 'Do you manage Facebook and Instagram?',
            answer: (
                <span>
                    Yes. We can manage: Strategy, Content, Creative, Reels, Stories, Publishing, Community, Meta Ads, and Reporting.
                </span>
            )
        },
        {
            id: 'item-20',
            icon: 'clock',
            question: 'Do you manage TikTok?',
            answer: (
                <span>
                    Yes, depending on the campaign. We can support: TikTok strategy, Short-form content, Creative direction, Creator campaigns, UGC, TikTok Ads, and Performance reporting.
                </span>
            )
        },
        {
            id: 'item-21',
            icon: 'clock',
            question: 'Do you manage LinkedIn?',
            answer: (
                <span>
                    Yes. We can develop: Company pages, Founder branding, Thought leadership, B2B content, LinkedIn Ads, and Lead generation.
                </span>
            )
        },
        {
            id: 'item-22',
            icon: 'clock',
            question: 'Do you create Reels?',
            answer: (
                <span>
                    Yes. Reels can be part of a broader short-form video system including Instagram, Facebook, TikTok and YouTube Shorts.
                </span>
            )
        },
        {
            id: 'item-23',
            icon: 'clock',
            question: 'Do you create the content or do we provide it?',
            answer: (
                <span>
                    We can work either way. Depending on your package, we can support: Strategy only, Content planning, Creative design, Video production, Copywriting, UGC, and Full social media management.
                </span>
            )
        },
        {
            id: 'item-24',
            icon: 'clock',
            question: 'How often will I receive reports?',
            answer: (
                <span>
                    Reporting frequency depends on the package. Reports can cover: Reach, Engagement, Video performance, Followers, Website traffic, Leads, Conversions, Advertising, Cost per result, and ROAS.
                </span>
            )
        },
        {
            id: 'item-25',
            icon: 'clock',
            question: 'What makes MH Social different from other social media agencies in Dubai?',
            answer: (
                <span>
                    We don't view social media as a posting service. We connect: Strategy + Creative + Content + Media + Community + Data to business objectives.
                </span>
            )
        },
        {
            id: 'item-26',
            icon: 'clock',
            question: 'How do I choose the right social media agency in Dubai?',
            answer: (
                <span>
                    Ask for: Relevant case studies, Actual creative examples, Clear deliverables, Transparent reporting, Strategy, Platform expertise, Paid media experience, Video capability, Industry knowledge, and Realistic expectations. And ask one important question: “How will your work help my business make money?”
                </span>
            )
        },
        {
            id: 'item-27',
            icon: 'clock',
            question: 'What are the biggest social media mistakes Dubai businesses make?',
            answer: (
                <span>
                    Common mistakes include: Posting without a strategy, Copying competitors, Creating generic AI content, Focusing only on followers, Ignoring video, Using the same content everywhere, Boosting every post, Not testing creatives, Ignoring comments and messages, Targeting everyone, Measuring vanity metrics, and Not connecting social media with sales.
                </span>
            )
        }
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