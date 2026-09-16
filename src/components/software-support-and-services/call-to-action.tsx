import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-32 bg-gray-200">
            <div className="global-container md:px-4">
                <div className="text-center">
                    <h3 className="h3">Ready to Transform Your Business with <span>The ICT HUB?</span></h3>
                    <p className="mt-4 paragraph">Get in touch with us today for a free consultation!</p>

                    <div className="mt-5 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="/">
                                <span>Contact Us</span>
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg">
                            <Link href="/">
                                <span>Live Chat</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg">
                            <Link href="tel:+8801816221339">
                                <span>+8801816221339</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}