import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export default function FeaturesSectionForSupportAndServices() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto global-container space-y-8 px-6 md:space-y-16  mt-20">
                <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-3xl font-medium lg:text-3xl">Service Highlights</h2>
                    
                </div>

                <div className="relative mx-auto grid global-container divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    
                    
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">IT Support Services</h3>
                        </div>
                        <p className="text-sm italic">Keep Your Business Running Smoothly</p>
                        <p className="text-sm">Our expert IT support team is here to provide comprehensive technical support—24/7. From routine maintenance to urgent troubleshooting, we ensure your systems are secure and always operational.</p>
                    </div>
                 <div className="space-y-3"></div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Network Security Solutions</h3>
                        </div>
                        <p className="text-sm italic">Protect Your Business from Cyber Threats</p>
                        <p className="text-sm">Your data and systems deserve the best protection. Our cybersecurity services include audits, vulnerability assessments, and custom security solutions, such as firewalls and encryption, to keep your organization secure.</p>
                    </div>
                    
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-4" />

                            <h3 className="text-sm font-medium">Scalable Cloud Services</h3>
                        </div>
                        <p className="text-sm italic">Enhance Flexibility and Collaboration</p>
                        <p className="text-sm">Move your business to the cloud with our managed services. Enjoy reduced costs, increased efficiency, and enhanced collaboration while scaling effortlessly as your business grows.</p>
                    </div>
                    <div className="space-y-3"></div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />

                            <h3 className="text-sm font-medium">Managed IT Services</h3>
                        </div>
                        <p className="text-sm italic">Focus on Growth While We Handle Your IT</p>
                        <p className="text-sm">Let us take care of your IT management—from system monitoring and maintenance to project deployment. We offer end-to-end services, freeing you up to focus on your core business.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4" />

                            <h3 className="text-sm font-medium">Custom Business Software Solutions</h3>
                        </div>
                        <p className="text-sm italic">Tailored for Your Unique Needs</p>
                        <p className="text-sm">We provide custom software solutions designed to meet your specific business challenges. From ERP systems to CRM software, our solutions are built to optimize operations and improve productivity.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">Disaster Recovery Services</h3>
                        </div>
                        <p className="text-sm italic">Ensure Business Continuity</p>
                        <p className="text-sm">Prepare for the unexpected with our disaster recovery services. From data backup to system restoration, we ensure your data is always protected and your business can bounce back quickly.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">Compliance Management Solutions</h3>
                        </div>
                        <p className="text-sm italic">Stay Ahead of Regulations</p>
                        <p className="text-sm">Our compliance management software helps businesses stay on top of ever-evolving regulations, ensuring that your organization remains compliant with industry standards.</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
