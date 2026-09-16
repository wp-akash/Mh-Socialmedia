'use client'
import { cn } from '@/lib/utils'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Bold, Calendar, Ellipsis, Italic, Strikethrough, Underline } from 'lucide-react'
import { Button } from '@/components/ui/button'

const processSteps = [
  {
    title: "System crashes during peak hours?",
    desc: "Lost sales, broken trust, and staff scrambling to recover—right when it matters most.",
  },
  {
    title: "Rising cyber threats and data breaches?",
    desc: "One vulnerability can expose your customer data, harming your reputation and bottom line.",
  },
  {
    title: "Struggling with outdated software?",
    desc: "Clunky tools hold your team back, making everyday tasks harder than they should be.",
  },
  {
    title: "Losing valuable time fixing IT issues?",
    desc: "Your staff weren't hired to be tech support—yet they're constantly tied up with fixes.",
  },
  
];

export default function Problem() {
    return (
        <>
            {/* Second Section - Game Development Services with Card Design */}
            <section className="bg-muted/50 py-24">
                <div className="global-container md:px-4">
                    {/* Section Header */}
                    <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                        <h3 className="h3">
                            Is Technology Holding Your<br/> Business Back?
                        </h3>
                        <p className="primary_header_content mt-6 md:mt-0 text-justify paragraph">
                            Technology should drive your business forward—not slow it down. Yet many Global businesses find themselves
stuck in a cycle of digital frustration that chips away at productivity, security, and growth potential.
                        </p>
                    </div>
                    
                    {/* Process Steps Grid */}
                    <div className="grid gap-x-8 gap-y-[50px] md:grid-cols-3 lg:grid-cols-3 mt-16">
                        {processSteps.map((step, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl shadow p-6 flex flex-col h-full relative border-b-0 border-[#d82d45] mb-[25px]"
                            >
                                {/* Circle Icon */}
                                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 shadow">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="mt-8 text-center">
                                    <h4 className="secondary_header mb-3">{step.title}</h4>
                                    <p className="secondary_header_content paragraph paragraph text-justify">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

type IllustrationProps = {
    className?: string
    variant?: 'elevated' | 'outlined' | 'mixed'
}

export const ScheduleIllustation = ({ className, variant = 'elevated' }: IllustrationProps) => {
    return (
        <div className={cn('relative', className)}>
            <div
                className={cn('bg-background -translate-x-1/8 absolute flex -translate-y-[110%] items-center gap-2 rounded-lg p-1', {
                    'shadow-black-950/10 shadow-lg': variant === 'elevated',
                    'border-foreground/10 border': variant === 'outlined',
                    'border-foreground/10 border shadow-md shadow-black/5': variant === 'mixed',
                })}>
                <Button
                    size="sm"
                    className="rounded-sm">
                    <Calendar className="size-3" />
                    <span className="text-sm font-medium">Schedule</span>
                </Button>
                <span className="bg-border block h-4 w-px"></span>
                <ToggleGroup
                    type="multiple"
                    size="sm"
                    className="gap-0.5 *:rounded-md">
                    <ToggleGroupItem
                        value="bold"
                        aria-label="Toggle bold">
                        <Bold className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="italic"
                        aria-label="Toggle italic">
                        <Italic className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="underline"
                        aria-label="Toggle underline">
                        <Underline className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="strikethrough"
                        aria-label="Toggle strikethrough">
                        <Strikethrough className="size-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
                <span className="bg-border block h-4 w-px"></span>
                <Button
                    size="icon"
                    className="size-8"
                    variant="ghost">
                    <Ellipsis className="size-3" />
                </Button>
            </div>
            <span>
                <span className="bg-secondary text-secondary-foreground py-1">Tomorrow 8:30 pm</span> is our priority.
            </span>
        </div>
    )
}

export const CodeIllustration = ({ className }: { className?: string }) => {
    return (
        <div className={cn('[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]', className)}>
            <ul className="text-muted-foreground mx-auto w-fit font-mono text-2xl font-medium">
                {['Images', 'Variables', 'Pages', 'Components', 'Styles'].map((item, index) => (
                    <li
                        key={index}
                        className={cn(index == 2 && "text-foreground before:absolute before:-translate-x-[110%] before:text-orange-500 before:content-['Import']")}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}