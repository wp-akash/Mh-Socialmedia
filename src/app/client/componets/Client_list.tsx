"use client";
import Image from "next/image";

import React, { useState } from "react";

const clients = [
  { id: 0, name: "UNFPA", image: "/client/0.unfpa.jpg" },
  { id: 1, name: "UNHCR", image: "/client/1.unhcr.jpg" },
  { id: 3, name: "BBC", image: "/client/3.bbc.jpg" },
  // { id: 4, name: "Government", image: "/client/4.gono.jpg" },
  { id: 5, name: "HEU", image: "/client/5.heu.jpg" },
  { id: 6, name: "POL", image: "/client/6.pol.jpg" },
  { id: 7, name: "SOTI", image: "/client/7.soti.jpg" },
  // { id: 8, name: "Help Bot", image: "/client/8.help_bot.jpg" },
  // { id: 9, name: "TED", image: "/client/9.ted.jpg" },
  { id: 10, name: "Midwife", image: "/client/10.midwife.jpg" },
  { id: 11, name: "Anzara", image: "/client/anzara.jpg" },
  {
    id: 12,
    name: "Dhaka University",
    image: "/client/12.Dhaka_University_logo.svg.png",
  },
  {
    id: 13,
    name: "Treatment Sri Lanka",
    image: "/client/13.Treatment_In_Sri_Lanka_logo.jpg",
  },
  // { id: 14, name: "Meher", image: "/client/meher.jpg" },
  // { id: 15, name: "Azran", image: "/client/15.azran logo.jpg" },
  // { id: 15, name: "Elor", image: "/client/elor.jpg" },
  {
    id: 16,
    name: "Aesthetic Events",
    image: "/client/16.Aesthetic Events-logo.jpg",
  },
  // { id: 17, name: "BD Patient Care", image: "/client/17.bd_paritent_care.jpg" },
  { id: 18, name: "Cotton Club", image: "/client/18.Cotton_Club.jpg" },
  { id: 19, name: "Shirtex", image: "/client/19.shirtex.png" },
  // { id: 20, name: "PAL", image: "/client/20.pal.jpg" },
  // { id: 21, name: "AL Khejurian", image: "/client/21.AL-Khejurian-logo.jpg" },
  // { id: 22, name: "CMMS", image: "/client/22.cmms.jpg" },
  // { id: 23, name: "Endeavor", image: "/client/endevor_fashion.jpg" },
  {
    id: 24,
    name: "J&H Holdings",
    image: "/client/24.jandhholdings-limited-logo.png",
  },
  // { id: 25, name: "Aran Properties", image: "/client/aran_properties.jpg" },
  // { id: 27, name: "Conrem", image: "/client/conrembd.png" },
  // { id: 28, name: "Faquirs", image: "/client/faquirs.jpg" },
  // { id: 29, name: "Lighthouse BD", image: "/client/29.logo-of-lighthousebd.jpg"},
  { id: 30, name: "KDC", image: "/client/khabardabarcatring.jpg" },
  // { id: 31, name: "CSD DMC", image: "/client/31.logo.jpg" },
  // { id: 32, name: "Fittoro", image: "/client/32.fittoro.jpg" },
  { id: 33, name: "GT Engineering", image: "/client/33.gtengineering.png" },
  { id: 34, name: "ELCO", image: "/client/34.elco.png" },
  // { id: 35, name: "Halal 10", image: "/client/35.halal.jpg" },
  // { id: 36, name: "Rabbani", image: "/client/36.rabbani.jpg" },
  { id: 37, name: "Hoq Surgical", image: "/client/37.hoq.png" },
  // { id: 38, name: "Elegant", image: "/client/38.elegant.png" },
  // { id: 39, name: "Exista Digital", image: "/client/existadigital.png" },
  // { id: 40, name: "Farhana Mobin", image: "/client/farhana_mobin.png" },
  { id: 41, name: "Hotel Crystal Rose", image: "/client/Hotelcrystalrose.png" },
  { id: 42, name: "ksidata Research", image: "/client/ksidataresearch.jpg" },
  // { id: 43, name: "Lifestyle ERP", image: "/client/lifestyle_erp.webp" },
  // { id: 44, name: "Guided Dubai", image: "/client/guideddubai.png" },
  // { id: 45, name: "MBP", image: "/client/mbp.png" },
  // { id: 46, name: "Momtaz Trauma", image: "/client/momtaz_trauma.png" },
  { id: 47, name: "Northern Workforce", image: "/client/northernworkforce.png" },
  { id: 48, name: "Studio 19th", image: "/client/studio19thbd.jpg" },
  // { id: 49, name: "Tamnbd", image: "/client/tamnbd.png" },
  // { id: 50, name: "Xside21", image: "/client/xside21.png" },
  // { id: 51, name: "Zaz Technology", image: "/client/zaztechnology.png" },
  // { id: 52, name: "ZSK Solution", image: "/client/zsk_solution.jpg" },
  { id: 53, name: "CSQE", image: "/client/csqe.webp" },
  { id: 54, name: "Sherpa Power", image: "/client/logo_color.svg" },
  // { id: 55, name: "Innovate Spring", image: "/client/Innovate_Spring.png" },
];

function Client_list() {
  const [showAll, setShowAll] = useState(false);
  const visibleClients = showAll ? clients : clients.slice(0,30);

  return (
    <div className="global-container mx-auto py-32 px-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-8">
        {visibleClients.map((client, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white dark:bg-zinc-900 rounded-xl shadow p-4"
          >
            <Image
              src={client.image}
              alt={client.name}
              width={100}
              height={100}
              className="w-27 h-27 rounded-full object-scale-down mb-3 border-1 border-[#e5e5e5
] shadow"
              priority={idx === 0}
            />
            <h3 className="text-md text-zinc-900 dark:text-white mb-1 paragraph text-center">
              {client.name}
            </h3>
            {/* <p className="small-text">{client.name}</p> */}
          </div>
        ))}
      </div>
      {!showAll && clients.length > 30 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary/90 transition"
          >
            Show More Clients
          </button>
        </div>
      )}
    </div>
  );
}

export default Client_list;
