import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
export default function Testimonials() {
    return (
        <section className="py-16 md:py-24">
            <div className="global-container space-y-8 md:px-4 md:space-y-16">
                
            <div className="max-w-4xl mx-auto px-4 text-center">
                    <h3 className="h3">What Our Clients Say</h3>
                    <p className='primary_header_content mt-4 paragraph'>Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardHeader>
                            <Image src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike Logo"
                                width={60}
                                height={24}
                                className="h-6 w-fit dark:invert"
                                priority
                            />
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">The ICT HUB transformed our outdated system into a streamlined ERP that saved us 40% in operational costs. A true partner in growth.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="https://tailus.io/images/reviews/shekinah.webp" alt="Shekinah Tshiokufila" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>ST</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-medium">Shekinah Tshiokufila</cite>
                                        <span className="text-muted-foreground block text-sm">Client, UK</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Their team understood our challenges and delivered a custom mobile app that now drives 70% of our sales.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="https://tailus.io/images/reviews/jonathan.webp" alt="Jonathan Yombo" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>JY</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Jonathan Yombo</cite>
                                        <span className="text-muted-foreground block text-sm">Client, UK</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Great work on tailfolio template. This is one of the best personal website that I have seen so far!</p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage src="https://tailus.io/images/reviews/yucel.webp" alt="Yucel Faruksahan" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>YF</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Yucel Faruksahan</cite>
                                        <span className="text-muted-foreground block text-sm">Creator, Tailkits</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="card variant-mixed">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Great work on tailfolio template. This is one of the best personal website that I have seen so far!</p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="https://tailus.io/images/reviews/rodrigo.webp" alt="Rodrigo Aguilar" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>YF</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">Rodrigo Aguilar</p>
                                        <span className="text-muted-foreground block text-sm">Creator, TailwindAwesome</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
