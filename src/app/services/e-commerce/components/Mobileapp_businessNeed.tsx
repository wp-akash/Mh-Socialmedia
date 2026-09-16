"use client";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Bold,
  Calendar1,
  Ellipsis,
  Italic,
  Strikethrough,
  Underline,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Mobileapp_businessNeed() {
  return (
    <section>
      <div className="bg-muted/50 py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div>
            <h3 className="h3">
              Why Your Business Needs a Mobile App
            </h3>
            <p className="text-muted-foreground mb-12 mt-4 text-lg">
              In today’s digital age, a well-developed mobile app can make all
              the difference for your business. Here are some key benefits a
              mobile app offers:
            </p>
          </div>

          <div className="border-foreground/5 space-y-6 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] sm:space-y-0 sm:divide-y">
            <div className="grid sm:grid-cols-6">
              <div className="mt-6 sm:col-span-3 sm:mt-0 pb-10 py-5 sm:mr-12 sm:mr-12">
                <h4 className="h4">
                  Increased Customer Engagement
                </h4>
                <p className="text-muted-foreground mt-4 text-lg">
                  Stay connected with your customers through push notifications,
                  in-app promotions, and updates. A mobile app provides a direct
                  line to users, encouraging them to interact with your brand
                  more frequently. This constant engagement helps build loyalty
                  and keeps your business on your customers’ minds.
                </p>
              </div>
              <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12 py-5">
                <h4 className="h4">
                  Improved Customer Service
                </h4>
                <p className="text-muted-foreground mt-4 text-lg">
                  Offer better support and convenience with features like in-app
                  messaging, chat support, and easy access to FAQs. Mobile apps
                  let customers get help <b>anytime, anywhere</b>, leading to
                  higher satisfaction. Quick issue resolution and personalized
                  interactions through an app can significantly enhance the
                  customer experience.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-6">
              <div className="mt-6 sm:col-span-3 sm:mt-0 pb-10 py-5 sm:mr-12 sm:mr-12">
                <h4 className="h4">
                  Streamlined Operations: Automate and simplify
                </h4>
                <p className="text-muted-foreground mt-4 text-lg">
                  your business processes. From order processing and bookings to
                  inventory management, a dedicated app can make operations more
                  efficient. By reducing manual tasks and errors, your team can
                  save time and focus on what matters most – growing your
                  business.
                </p>
              </div>
              <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12 sm:pt-12">
                <h4 className="h4">
                  Enhanced Brand Visibility & Credibility:
                </h4>
                <p className="text-muted-foreground mt-4 text-lg">
                  A branded app on your customers’ home screens boosts your
                  visibility. It reinforces your brand image every time they
                  glance at their phone. Moreover, having a professional,
                  well-designed app signals that your company is modern and
                  trustworthy, enhancing credibility with your UK audience.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-6">
              <div className="mt-6 sm:col-span-3 sm:mt-0 pb-10 py-5 sm:mr-12 sm:mr-12">
                <h4 className="h4">
                  Valuable Data Insights:
                </h4>
                <p className="text-muted-foreground mt-4 text-lg">
                  Gain insights into user behavior and preferences. Mobile apps
                  can track usage patterns, purchase history, and feedback,
                  providing <b>data-driven
                  insights</b>. These analytics help you understand your
                  customers better and make informed decisions in marketing,
                  product development, and customer service.
                </p>
              </div>
              <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12 sm:pt-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type IllustrationProps = {
  className?: string;
  variant?: "elevated" | "outlined" | "mixed";
};

export const ScheduleIllustation = ({
  className,
  variant = "elevated",
}: IllustrationProps) => {
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "bg-background -translate-x-1/8 absolute flex -translate-y-[110%] items-center gap-2 rounded-lg p-1",
          {
            "shadow-black-950/10 shadow-lg": variant === "elevated",
            "border-foreground/10 border": variant === "outlined",
            "border-foreground/10 border shadow-md shadow-black/5":
              variant === "mixed",
          }
        )}
      >
        <Button size="sm" className="rounded-sm">
          <Calendar1 className="size-3" />
          <span className="text-sm font-medium">Schedule</span>
        </Button>
        <span className="bg-border block h-4 w-px"></span>
        <ToggleGroup type="multiple" size="sm" className="gap-0.5 *:rounded-md">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
          >
            <Strikethrough className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
        <span className="bg-border block h-4 w-px"></span>
        <Button size="icon" className="size-8" variant="ghost">
          <Ellipsis className="size-3" />
        </Button>
      </div>
      <span>
        <span className="bg-secondary text-secondary-foreground py-1">
          Tomorrow 8:30 pm
        </span>{" "}
        is our priority.
      </span>
    </div>
  );
};

export const CodeIllustration = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]",
        className
      )}
    >
      <ul className="text-muted-foreground mx-auto w-fit font-mono text-2xl font-medium">
        {["Images", "Variables", "Pages", "Components", "Styles"].map(
          (item, index) => (
            <li
              key={index}
              className={cn(
                index == 2 &&
                  "text-foreground before:absolute before:-translate-x-[110%] before:text-orange-500 before:content-['Import']"
              )}
            >
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
