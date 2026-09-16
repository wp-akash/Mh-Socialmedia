'use client';
import { useState } from "react";
import { Code, Edit, User, Briefcase, GraduationCap, X } from "lucide-react";

// Define the job role type
interface JobRole {
  id: string;
  title: string;
  icon: React.ReactNode;
  gradient: string;
}

// Define the form data type
interface FormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

const Career_grid = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });

  const jobRoles: JobRole[] = [
    {
      id: "01",
      title: "Senior Software Engineer",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-indigo-500 via-purple-500 to-pink-500"
    },
    {
      id: "02", 
      title: "UI/UX Designer",
      icon: <Edit className="w-8 h-8" />,
      gradient: "from-pink-500 via-red-500 to-yellow-500"
    },
    {
      id: "03",
      title: "Digital Marketing Specialist", 
      icon: <User className="w-8 h-8" />,
      gradient: "from-blue-500 via-cyan-500 to-teal-500"
    },
    {
      id: "04",
      title: "WordPress Developer",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.135-2.85-.135-.584-.031-.651.855-.067.899 0 0 .584.075 1.195.105l1.807 4.95-2.534 7.6-4.21-12.55c.647-.03 1.231-.105 1.231-.105.583-.075.514-.93-.066-.899 0 0-1.755.135-2.88.135-.202 0-.438-.008-.69-.015C4.861 2.35 8.277 1.2 12 1.2c2.763 0 5.283.797 7.425 2.173-.047-.006-.094-.006-.141-.006-1.064 0-1.817.93-1.817 1.932 0 .9.52 1.658 1.075 2.56.416.72.9 1.658.9 3.007 0 .93-.357 2.01-.82 3.512l-1.075 3.585-3.9-11.61L12.51 6.73c.328-.015.659-.045.978-.105M12 22.8C5.922 22.8 1.2 18.077 1.2 12S5.922 1.2 12 1.2s10.8 4.723 10.8 10.8-4.723 10.8-10.8 10.8M12 6.375c-.888 0-1.71.195-2.468.538l2.625 7.2 2.694-7.785c.015-.045.045-.075.06-.12-.405-.555-1.05-.833-1.71-.833"/>
        </svg>
      ),
      gradient: "from-emerald-400 via-cyan-400 to-blue-400"
    },
    {
      id: "05",
      title: "Business Development Executive",
      icon: <Briefcase className="w-8 h-8" />,
      gradient: "from-orange-400 via-pink-400 to-red-400"
    },
    {
      id: "06", 
      title: "Intern",
      icon: <GraduationCap className="w-8 h-8" />,
      gradient: "from-purple-400 via-pink-400 to-red-400"
    }
  ];

  const categories: string[] = [
    "Frontend Development",
    "Backend Development", 
    "Full Stack Development",
    "UI/UX Design",
    "Digital Marketing",
    "WordPress Development",
    "Business Development",
    "Internship"
  ];

  const handleCardClick = (job: JobRole): void => {
    setFormData({ ...formData, category: job.title });
    setIsPopupOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Application submitted successfully!');
    setIsPopupOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: '',
      message: ''
    });
  };

  const closePopup = (): void => {
    setIsPopupOpen(false);
  };

  return (
    <div className="py-20 md:py-20 bg-gray-50">
      <div className="global-container md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobRoles.map((role) => (
            <div
              key={role.id}
              onClick={() => handleCardClick(role)}
              className={`relative h-64 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group bg-gradient-to-br ${role.gradient}`}
            >
              {/* Card Number */}
              <div className="absolute top-5 right-5 z-10">
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                  {role.id}
                </span>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/30"></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 rounded-lg bg-white/20"></div>
                <div className="absolute top-32 right-20 w-12 h-12 rounded-full bg-white/25"></div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-white">
                      {role.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold leading-tight drop-shadow-md">
                  {role.title}
                </h3>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">JOB OPENINGS</h2>
                <button
                  onClick={closePopup}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 bg-gray-100 border-0 rounded-lg text-gray-700 focus:bg-white focus:ring-2 focus:ring-red-500 focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Please Select your Category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-red-500 focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    13 + 1 = <span className="font-semibold">14</span>
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-white border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career_grid;