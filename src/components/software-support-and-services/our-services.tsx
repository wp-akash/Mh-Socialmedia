import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'

export default function SupportAndServicesServiceSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto global-container space-y-12 px-6">
                {/* <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold">Meet The ICT HUB: Your Trusted Technology Partner</h2>
                    <p className="max-w-sm sm:ml-auto">Empower your team with workflows that adapt to your needs, whether you prefer git synchronization or a AI Agents interface.</p>
                </div> */}
                <div className="mx-auto max-w-xl text-center">
                        <h2 className="text-balance text-3xl font-bold md:text-3xl lg:text-3xl">Meet The ICT HUB</h2>
                        <p className="text-muted-foreground mt-4 text-balance">Your Trusted Technology Partner</p>
                    </div>
                {/* <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
                    <div className="aspect-88/26 relative bg-gray-100">
                        <div className="bg-linear-to-t z-1 from-background absolute inset-0 to-transparent"></div>
                        
                    </div>
                </div> */}
                <div className="relative global-container mx-auto grid grid-cols-1 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-1">
                    <div className="space-y-3">
                        <div className="flex items-center justify-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">24/7 IT Support</h3>
                        </div>
                        
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Scalable Cloud Services
</h3>
                        </div>
                        
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Rock-Solid Network Security
</h3>
                        </div>
                        
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">Custom Software Development</h3>
                        </div>
                        
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">Compliance Management</h3>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
