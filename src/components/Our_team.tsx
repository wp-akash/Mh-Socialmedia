"use client";
import Image from "next/image";

function Our_team() {
  const teamData = [
    {
      type: "profile",
      title: "INNOVATIVE",
      name: "Jayan K Narayanan",
      subtitle: "Co-founder, Helveticans",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/team/one.gif",
    },
    {
      type: "illustration",
      company: "ADOBE PHOTOSHOP EXPRESS",
      name: "REVAMPED",
      subtitle: "REVAMPED",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/team/one.gif",
    },
    {
      type: "illustration",
      company: "ADOBE",
      title: "LEAN PRINT",
      subtitle: "OPTIMIZED",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/team/one.gif",
    },
    {
      type: "profile",
      title: "VISIONARY",
      name: "Hemant Charya",
      subtitle: "Ex. Product Development & Head, Reliance Big Flix",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/team/one.gif",
    },
    {
      type: "profile",
      title: "INNOVATIVE",
      name: "Jayan K Narayanan",
      subtitle: "Co-founder, Helveticans",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/team/one.gif",
    },
    {
      type: "illustration",
      company: "ADOBE PHOTOSHOP EXPRESS",
      name: "REVAMPED",
      subtitle: "REVAMPED",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/team/one.gif",
    },
    {
      type: "illustration",
      company: "ADOBE",
      title: "LEAN PRINT",
      subtitle: "OPTIMIZED",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/team/one.gif",
    },
    {
      type: "profile",
      title: "VISIONARY",
      name: "Hemant Charya",
      subtitle: "Ex. Product Development & Head, Reliance Big Flix",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/team/one.gif",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="global-container md:px-4">
        <div className="gap-4 sm:grid sm:grid-cols-2">
          <div className="sm:w-2/5">
            <h3 className="h3">Our dream team</h3>
          </div>
          <div className="mt-6 sm:mt-0">
            <p className="paragraph">
              During the working process, we perform regular fitting with the
              client because he is the only person who can feel whether a new
              suit fits or not.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          {teamData.map((item, index) => {
            const isEvenRow = Math.floor(index / 2) % 2 === 0;
            const isFirstInRow = index % 2 === 0;

            // Only apply custom col-span for large screens
            const colSpanClass = isFirstInRow
              ? isEvenRow
                ? "lg:col-span-3" // 60%
                : "lg:col-span-2" // 40%
              : isEvenRow
              ? "lg:col-span-2" // 40%
              : "lg:col-span-3"; // 60%

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl py-12 px-5 flex items-center justify-between ${colSpanClass} col-span-1 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer team_card`}
                style={{ height: "216px", overflow: "hidden" }}
              >
                {/* Left: Text */}
                <div>
                  {item.type === "profile" ? (
                    <>
                      <div className="team_inforation">
                        <h6 className="h6">{item.title}</h6>
                        <h5 className="h5">{item.name}</h5>
                        <p className=" font-[10px]">{item.subtitle}</p>
                        <p className=" font-[10px]">{item.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                    <div className="team_inforation">
                      <h6 className="h6">{item.company}</h6>
                      <h5 className="h5">{item.title}</h5>
                      <p className=" font-[10px]">{item.subtitle}</p>
                      <p className=" font-[10px]">{item.description}</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Right: Image */}
                <div className="flex-shrink-0 ml-6">
                  <Image
                    src={item.img}
                    alt={
                      item.type === "profile"
                        ? item.name ?? "Profile image"
                        : item.title ?? "Item image"
                    }
                    width={100}
                    height={100}
                    className={`${
                      item.type === "profile"
                        ? "w-30 h-30 rounded-full object-cover"
                        : "w-30 h-30 object-contain"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Our_team;
