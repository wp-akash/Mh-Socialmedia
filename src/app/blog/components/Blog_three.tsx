import React from 'react'
import Image from 'next/image'

const blogs = [
  {
    image: "/industry/Automotive.jpg",
    category: "Technology",
    readTime: "15 min read",
    title: "How ICT Hub Empowers Businesses with Modern Tech",
    desc: "Discover how our team delivers innovative solutions to help businesses grow and stay ahead in the digital era.",
    authorImg: "/placeholder-male.jpg",
    author: "Jane Doe",
    date: "June 25, 2025",
  },
  {
    image: "/industry/Travel-and-tourism.jpg",
    category: "Business",
    readTime: "10 min read",
    title: "Driving Digital Transformation for Modern Enterprises",
    desc: "Explore our approach to digital transformation and how we help organizations adapt to the ever-changing tech landscape.",
    authorImg: "/placeholder-male.jpg",
    author: "John Smith",
    date: "June 20, 2025",
  },
  {
    image: "/industry/Startup.jpg",
    category: "Innovation",
    readTime: "8 min read",
    title: "Innovative Solutions for a Competitive Market",
    desc: "Learn how ICT Hub crafts custom solutions to give clients a competitive edge in their industries.",
    authorImg: "/placeholder-male.jpg",
    author: "Emily Clark",
    date: "June 15, 2025",
  },
];

function Blog_three() {
  return (
    <section className="bg-white lg:py-20">
      <div className="global-container md:px-6">
        <h3 className='h3 mb-4'>All Blog Posts</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, idx) => (
            <div key={idx} className="flex flex-col overflow-hidden">
              <Image
                src={blog.image}
                alt="Blog Cover"
                width={600}
                height={400}
                className="w-full h-90 rounded-lg object-cover"
                priority={idx === 0}
              />
              <div className="flex-1 flex flex-col gap-3 py-6 px-2">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">{blog.category}</span>
                  <span>·</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="h5">{blog.title}</h3>
                <p className="text-zinc-600 text-sm">{blog.desc}</p>
                <div className="flex items-center gap-3 mt-2">
                  <Image
                    src={blog.authorImg}
                    alt={blog.author}
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <div className="font-semibold text-zinc-800 text-sm">{blog.author}</div>
                    <div className="text-xs text-zinc-500">{blog.date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog_three