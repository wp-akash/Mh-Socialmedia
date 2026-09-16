import Image from "next/image";

const clients = [
  { src: "https://html.tailus.io/blocks/customers/nvidia.svg", alt: "Nvidia Logo", height: 20, width: 80, className: "h-5 w-fit dark:invert" },
  { src: "https://html.tailus.io/blocks/customers/column.svg", alt: "Column Logo", height: 16, width: 80, className: "h-4 w-fit dark:invert" },
  { src: "https://html.tailus.io/blocks/customers/github.svg", alt: "GitHub Logo", height: 16, width: 80, className: "h-4 w-fit dark:invert" },
  { src: "https://html.tailus.io/blocks/customers/nike.svg", alt: "Nike Logo", height: 20, width: 80, className: "h-5 w-fit dark:invert" },
  { src: "https://html.tailus.io/blocks/customers/laravel.svg", alt: "Laravel Logo", height: 16, width: 80, className: "h-4 w-fit dark:invert" },
  { src: "https://html.tailus.io/blocks/customers/lilly.svg", alt: "Lilly Logo", height: 28, width: 80, className: "h-7 w-fit dark:invert" },
  { src: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg", alt: "Lemon Squeezy Logo", height: 20, width: 80, className: "h-5 w-fit dark:invert" },
  { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI Logo", height: 24, width: 80, className: "h-6 w-fit dark:invert" },
  { src: "https://html.tailus.io/blocks/customers/tailwindcss.svg", alt: "Tailwind CSS Logo", height: 16, width: 80, className: "h-4 w-fit dark:invert" },
  { src: "https://html.tailus.io/blocks/customers/vercel.svg", alt: "Vercel Logo", height: 20, width: 80, className: "h-5 w-fit dark:invert" },
  { src: "https://html.tailus.io/blocks/customers/zapier.svg", alt: "Zapier Logo", height: 20, width: 80, className: "h-5 w-fit dark:invert" },
];

export default function ClientSection() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto global-container px-6">
        <h3 className="h3 text-center">Your favorite companies are our partners.</h3>
        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          {clients.map((client, idx) => (
            <Image
              key={idx}
              src={client.src}
              alt={client.alt}
              width={client.width}
              height={client.height}
              className={client.className}
              priority={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}