export default function EcommerceMobileApp() {
  const features = [
    {
      title: "User-Friendly UI/UX",
      bgColor: "bg-muted/50",
      icon: (
       <svg
  className="w-5 h-5 text-[#000000]"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z" />
</svg>


      ),
      desc: (
        <>
          We prioritize clean, intuitive design in our apps. This means easy navigation with clear categories, search functionality, and simple menus so users can find products quickly. The app interface is crafted for{" "}
          <strong>seamless user experience</strong>, from browsing product catalogs to adding items to the cart. An intuitive UI/UX keeps shoppers engaged and encourages them to return.
        </>
      ),
    },
    {
      title: "Secure Transactions",
      bgColor: "bg-muted/50",
      icon: (
        <svg
          className="w-5 h-5 text-[#000000]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 11c-1.657 0-3 1.343-3 3v1h6v-1c0-1.657-1.343-3-3-3z" />
          <path d="M17 8V6a5 5 0 00-10 0v2m10 0H7m10 0a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2" />
        </svg>
      ),
      desc: (
        <>
          Security is paramount in mobile commerce. We integrate trusted payment gateways and ensure your app uses biometric logins, encrypted data, and secure SDKs. Our apps support Apple Pay, Google Pay, PayPal, and more to create a <strong>secure in-app payment experience</strong>.
        </>
      ),
    },
    {
      title: "Fast Load Speed",
      bgColor: "bg-muted/50",
      icon: (
        <svg
          className="w-5 h-5 text-[#000000]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" />
        </svg>
      ),
      desc: (
        <>
          We optimize apps for <strong>speed and responsiveness</strong>. Using efficient code, caching, and CDNs ensures fast loading images, smooth transitions, and low wait times — even on slow networks or older devices.
        </>
      ),
    },
    {
      title: "Personalized Shopping",
      bgColor: "bg-muted/50",
      icon: (
        <svg
          className="w-5 h-5 text-[#000000]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M5.121 17.804A7 7 0 0112 15a7 7 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M21 12a9 9 0 10-18 0 9 9 0 0018 0z" />
        </svg>
      ),
      desc: (
        <>
          We use AI to offer <strong>personalized recommendations</strong>, push notifications, and user insights. Your app becomes smarter over time, showing users what they want—leading to higher engagement and sales.
        </>
      ),
    },
  ];

  return (
    <section className="bg-zinc-50 py-16 px-4">
      <div className="global-container">
        {/* Intro */}
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <h3 className="h3">
            E-Commerce Mobile<br /> Application Development
          </h3>
          <p className="primary_header_content max-w-3xl mx-auto md:mt-0 mt-5 paragraph">
            Mobile e-commerce apps offer on-the-go convenience, helping businesses engage customers wherever they are. Mobile shopping dominates a huge portion of online commerce, and a dedicated mobile app can significantly boost engagement and loyalty.
            
            In fact, many shoppers prefer apps over mobile websites – studies show mobile apps can drive conversion rates up to <strong>3× higher</strong> than browsers. We specialize in high-performance <strong>e-commerce app development</strong> for iOS and Android.
            <br />
            Our apps are designed to enhance convenience and increase sales. <strong>Key features include:</strong>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:px-12 md:grid-cols-2 lg:gap-10 lg:px-0 mt-20 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-md border border-gray-200 p-8 hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Icon in top-right corner (no gap) */}
              <div className={`absolute -top-2 -right-2 ${feature.bgColor} p-8 rounded-full`}>
                {feature.icon}
              </div>

              <h4 className="secondary_header mb-3 mt-4">{feature.title}</h4>
              <p className="secondary_header_content paragraph text-justify">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <p className="text-gray-800 secondary_header_content max-w-5xl mx-auto">
            With these features, your mobile app becomes a powerful tool for sales and brand loyalty. In today&rsquo;s mobile-first world, <strong>The ICT Hub</strong> can build a solution that puts your store in every pocket.
          </p>
        </div>
      </div>
    </section>
  );
}
