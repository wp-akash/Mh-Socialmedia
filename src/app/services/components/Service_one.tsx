import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'
import { Gemini, Replit, MagicUI, VSCodium, MediaWiki, GooglePaLM } from '@/components/ui/logos'

export default function ServiceOne() {
    return (
        <section>
            <div className="py-32">
                <div className="mx-auto global-container px-6">
                    <div className="text-center">
                        <h2 className="h2">Our Services</h2>
                        <p className="paragraph text-muted-foreground">Connect seamlessly with popular platforms and services to enhance your workflow.</p>
                    </div>

                    <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <IntegrationCard
                        title="Software Development Service"
                        description="Maximize your potential with our software development services. The ICT Hub infuses operational excellence to deliver robust solutions tailored to your needs.">
                        <Gemini />
                    </IntegrationCard>

                    <IntegrationCard
                        title="Web Application Service"
                        description="We specialize in creating efficient and engaging web applications from scratch by utilizing industry-standard web app technologies.">
                        <Replit />
                    </IntegrationCard>

                    <IntegrationCard
                        title="E-Commerce & Marketplace Development"
                        description="Establish your online presence and effortlessly reach clients with our e-commerce and marketplace-building services.">
                        <MagicUI />
                    </IntegrationCard>

                    <IntegrationCard
                        title="Mobile App Development Service"
                        description="Innovate with rapid mobile application development for both established and emerging platforms, including Android and iOS.">
                        <VSCodium />
                    </IntegrationCard>

                    <IntegrationCard
                        title="Enterprise Software Development"
                        description="Transform your business processes with our flexible and enriched enterprise software solutions.">
                        <MediaWiki />
                    </IntegrationCard>

                    <IntegrationCard
                        title="Game Development"
                        description="We create engaging games for Desktop, Online, Android, iOS, and TV platforms, supporting local gaming businesses with creative solutions.">
                        <GooglePaLM />
                    </IntegrationCard>
                </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ title, description, children, link = '/services/software-support-and-services' }: { title: string; description: string; children: React.ReactNode; link?: string }) => {
    return (
        <Card className="p-6">
            <div className="relative">
                <div className="*:size-10">{children}</div>

                <div className="space-y-2 py-6">
                    <h3 className="h5">{title}</h3>
                    <p className="text-muted-foreground line-clamp-2 text-md">{description}</p>
                </div>

                <div className="flex gap-3 border-t border-dashed pt-6">
                    <Button
                        asChild
                        variant="secondary"
                        size="sm"
                        className="gap-1 pr-2 shadow-none">
                        <Link href={link}>
                            Learn More
                            <ChevronRight className="ml-0 !size-3.5 opacity-50" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    )
}