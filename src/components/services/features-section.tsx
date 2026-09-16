import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'
import Link from 'next/link'

export default function FeaturesSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto global-container space-y-8 px-6 md:space-y-16  mt-20">
                <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-7xl font-medium lg:text-5xl">The foundation for creative teams management</h2>
                    <p>Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                </div>

                <div className="relative mx-auto grid global-container divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <Link href="/services/software-support-and-services">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Zap className="size-4" />
                                <h3 className="text-sm font-medium">Software support and services</h3>
                            </div>
                            <p className="text-sm">It supports an entire helping developers and innovate.</p>
                        </div>
                    </Link>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Powerful</h3>
                        </div>
                        <p className="text-sm">It supports an entire helping developers and businesses.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-4" />

                            <h3 className="text-sm font-medium">Security</h3>
                        </div>
                        <p className="text-sm">It supports an helping developers businesses.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />

                            <h3 className="text-sm font-medium">Customization</h3>
                        </div>
                        <p className="text-sm">It supports helping developers and businesses innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4" />

                            <h3 className="text-sm font-medium">Control</h3>
                        </div>
                        <p className="text-sm">It supports helping developers and businesses innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">Built for AI</h3>
                        </div>
                        <p className="text-sm">It supports helping developers and businesses innovate.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
