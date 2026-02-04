"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [activeResumeCategory, setActiveResumeCategory] = useState("education")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.data.mesg) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };

const techItems = [
  'React.js Developer',
  'Next.js Developer',
  'WordPress Developer',
  'Front-End Developer',
  'UI/UX Developer'
];

  const [index, setIndex] = useState(0)
   
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "testimonial", label: "Testimonial" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact Me" },
    
  ]

  const highlights = [
    "JavaScript full stack web developer with background knowledge of MERN",
    "Interactive and responsive front-end as per the design",
    "React / Next and Redux with Thunk & Saga for state management",
    "Rest Driven Development using solid Jasmin framework",
    "Database : MongoDB, MySQL",
    "No-sql databases - MongoDB for storing data",
    "Basic knowledge of AWS and Google cloud, Docker",
  ]

  const testimonials = [
      {
      name: "Shankar Surwanshi",
      role: "Runs a business",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "I had given him commercial web-site work and he delivered it on time and more than what I was expected. Really Nice work. Thank you, Rohit 👍",
    },
    {
      name: "Lakhan Tour",
      role: "Runs a business",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "When Rohit delivered my website, my head spinned. It was so nice and he implemented every functionality I requested for. Thank you 👍",
    },
    {
      name: "Prathmesh Mathaphati",
      role: "Startup Founder",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Rohit's expertise in full-stack development helped us launch our product on time. His attention to detail and problem-solving skills are exceptional. Highly recommended! 👍",
    },
    {
      name: "Avinash Jadhav",
      role: "Digital Marketing Agency",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Working with Rohit was a fantastic experience. He understood our requirements perfectly and delivered a beautiful, responsive website that exceeded our expectations. 👍",
    },
    {
      name: "Ajay Shinde",
      role: "E-commerce Business",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Rohit developed our complete e-commerce platform with payment integration. The site is fast, secure, and user-friendly. Great work and professional service! 👍",
    },
  ]

  const resumeCategories = [
    { id: "education", label: "Education" },
    { id: "work", label: "Work History" },
    { id: "skills", label: "Programming Skills" },
    { id: "projects", label: "Projects" },
    { id: "interests", label: "Interests" },
  ]

  const socialLinks = [
    { Icon: Github, url: "https://github.com/rohitgobade239" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/rohit-gobade-a42845313/" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % techItems.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])


  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900 dark:bg-blue-950 transition-colors duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <motion.div className="text-2xl font-bold text-white" whileHover={{ scale: 1.05 }}>
              Rohit Gobade
            </motion.div>

            <div className="flex items-center space-x-8">
              <div className="flex space-x-8">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${activeSection === item.id ? "text-orange-500" : "text-white hover:text-orange-400"
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-slate-900 dark:bg-blue-950 pt-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="text-4xl font-normal text-white mb-2">
                  Hello, I'm <span className="text-orange-500 font-medium">Rohit Gobade</span>
                </h1>
                <h2 className="text-2xl text-white mb-6 transition-opacity duration-500">
        {techItems[index]}
          </h2>
                <p className="text-gray-300 mb-8 max-w-md">
                  Able to build apps that handle both the front end and back end.
                </p>
              </motion.div>

              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  variant="outline"
                  className="border-white hover:bg-white hover:text-slate-900 px-6"
                  onClick={() => window.location.href = "mailto:your.rohitgobade@gmail.com"}

                >
                  Hire Me
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6" onClick={() => window.open("/resume.pdf", "_blank")}>Get Resume</Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-80 h-80 rounded-full overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Rohit Suryawanshi"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              About Me
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-2"></div>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Why Choose Me?</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-full">
                <Image
                  src="/profile.png"
                  alt="Rohit Suryawanshi"
                  width={500}
                  height={600}
                  className="w-medium h-auto rounded-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 shadow-lg bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-700 transition-colors duration-300">
                <CardContent className="p-0">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                    JavaScript full stack web developer with background knowledge of MERN with Redux, along with a knack
                    of building applications with utmost efficiency and performance. Strong professional with a
                    willingness to learn and grow with the organization.
                  </p>

                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
                    Here are a Few Highlights:
                  </h3>

                  <div className="space-y-2 mb-8">
                    {highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                          {highlight}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      onClick={() => scrollToSection("contact")}
                      className="dark:border-slate-600 dark:text-white dark:hover:bg-slate-800" onClick={() => window.location.href = "mailto:your.rohitgobade@gmail.com"}
                    >
                      Hire Me
                    </Button>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6" onClick={() => window.open("/resume.pdf", "_blank")}>Get Resume</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonial" className="py-20 bg-slate-900 dark:bg-blue-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Testimonial</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-2"></div>
            <p className="text-gray-400">What My Client Say About Me</p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Slider Container */}
            <div className="overflow-hidden rounded-lg">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * (100 / 3)}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (index % 3) * 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className={`transition-all duration-300 ${index === currentTestimonial ? "scale-105 z-10" : "scale-95 opacity-75"
                        }`}
                    >
                      <Card className="bg-white dark:bg-slate-800 p-6 h-full border-gray-200 dark:border-slate-700 transition-colors duration-300">
                        <CardContent className="p-0">
                          <div className="flex items-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed transition-colors duration-300">
                            "{testimonial.text}"
                          </p>
                          <div className="flex items-center">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={50}
                              height={50}
                              className="rounded-full mr-4"
                            />
                            <div>
                              <h4 className="font-semibold text-sm text-gray-900 dark:text-white transition-colors duration-300">
                                {testimonial.name}
                              </h4>
                              <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index ? "bg-orange-500 scale-125" : "bg-gray-400 hover:bg-gray-300"
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-6 max-w-xs mx-auto">
              <div className="w-full bg-gray-700 rounded-full h-1">
                <motion.div
                  className="bg-orange-500 h-1 rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((currentTestimonial + 1) / testimonials.length) * 100}%`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-center text-gray-400 text-sm mt-2">
                {currentTestimonial + 1} of {testimonials.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Resume
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-2"></div>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">My Formal Bio Details</p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Resume Navigation */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-900 dark:bg-blue-950 rounded-lg overflow-hidden transition-colors duration-300">
                <div className="space-y-0">
                  {resumeCategories.map((category, index) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveResumeCategory(category.id)}
                      className={`w-full text-left p-4 transition-colors ${activeResumeCategory === category.id
                          ? "bg-slate-800 dark:bg-blue-900 text-white border-r-4 border-orange-500"
                          : "text-gray-300 hover:bg-slate-800 dark:hover:bg-blue-900"
                        }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center">
                        <span className="text-orange-500 mr-3 text-lg font-bold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm">{category.label}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Resume Content */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-lg p-8 min-h-[400px] border-gray-200 dark:border-slate-700 transition-colors duration-300">
                {activeResumeCategory === "education" && (
                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="border-l-4 border-orange-500 pl-6">
                        <h3 className="text-xl font-semibold text-orange-500 mb-2">Master of Computer Applciation</h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium mb-1 transition-colors duration-300">
                          Savitribai Phule Pune University
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
                          64%
                        </p>
                      </div>
                    </motion.div>
                                        <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="border-l-4 border-orange-500 pl-6">
                        <h3 className="text-xl font-semibold text-orange-500 mb-2"> Bachelor of Computer Applications</h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium mb-1 transition-colors duration-300">
                          SRTM Nanded University
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
                          61%
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="border-l-4 border-orange-500 pl-6">
                        <h3 className="text-xl font-semibold text-orange-500 mb-2">Higher Secondary Certificate</h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium mb-1 transition-colors duration-300">
                          Maharashtra State Board
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
                          65%
                        </p>
                        </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <div className="border-l-4 border-orange-500 pl-6">
                        <h3 className="text-xl font-semibold text-orange-500 mb-2">Secondary School Certificate</h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium mb-1 transition-colors duration-300">
                          Maharashtra State Board
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
                          70%
                        </p>
                      </div>
                    </motion.div>
                  </div>
                )}

                {activeResumeCategory === "work" && (
                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="border-l-4 border-orange-500 pl-6">
                        <h3 className="text-xl font-semibold text-orange-500 mb-2">Senior Web Developer</h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium mb-1 transition-colors duration-300">
                          Chittlesoft Solution Pvt Ltd
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
                          March 2023 - Present
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300">
Developed and maintained multiple client projects using React.js, Node.js, Next JS, and MongoDB, Rect Bootstraps, Tailwantd CSS, AWS, Docker Collaborated with the design team to implement pixel-perfect UI components, conducted code reviews, and mentored junior developers

                        </p>
                        <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1 transition-colors duration-300">
                          <li>• Developed 15+ responsive web applications and Website</li>
                          <li>• Improved application performance by 40%</li>
                          <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
                          <li>• Optimized database queries improving load times by 35%</li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="border-l-4 border-orange-500 pl-6">
                        <h3 className="text-xl font-semibold text-orange-500 mb-2">Web Developer</h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium mb-1 transition-colors duration-300">
                          Vsynergize Pvt Ltd
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
                          May 2020 - March 2023
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300">
                          Started career as junior developer working on frontend development using Wordrpess, React.js and CSS, Bootstraps
                          frameworks. Gained experience in version control, agile methodology, and team collaboration.
                        </p>
                        <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1 transition-colors duration-300">
                          <li>• Built 10+ client websites from scratch</li>
                          <li>• Converted 20+ PSD designs to responsive HTML/CSS</li>
                          <li>• Learned React.js and modern JavaScript ES6+</li>
                          <li>• Participated in daily standups and sprint planning</li>
                        </ul>
                      </div>
                    </motion.div>


                  </div>
                )}

                {activeResumeCategory === "skills" && (
                  <div className="space-y-6">
           

                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
                        Skills
                      </h3>
                      <div className="flex flex-wrap gap-7">
                        {[
                          "JavaScript",
                          "React.js",
                          "Node.js",
                          "MangoDB",
                          "Express.JS",
                          "HTML5/CSS3",
                          "Docker",
                          "Jenkins",
                          "Webpack",
                          "Sass/SCSS",
                          "Bootstrap",
                          "Tailwind CSS",
                          "Firebase",
                          "Redux",
                          "TypeScript",
                          "Next.JS",
                          "Git/GitHub",
                          "AWS",
                        ].map((tech, index) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm transition-colors duration-300"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeResumeCategory === "projects" && (
                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="border-l-4 border-orange-500 pl-6">
                        <h3 className="text-xl font-semibold text-orange-500 mb-2">Personal Portfolio Website</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
                          Technologies Used: Next.js, Node.js, Express.js, Nodemailer (for email), and Tailwind CSS
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300">
Technologies Used: Next.js, Node.js, Express.js, Nodemailer (for email), and Tailwind CSS
                        </p>
                        <div className="flex space-x-4 text-sm">
                          <a href="#" className="text-orange-500 hover:underline">
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="border-l-4 border-orange-500 pl-6">
                        <h3 className="text-xl font-semibold text-orange-500 mb-2">News Pulse</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
Technologies Used: React.js, Node.js, Express.js, Nodemailer (for email), and Tailwind CSS, News API
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300">
Created a news app website that displays the latest headlines from around the world.


                        </p>
                        <div className="flex space-x-4 text-sm">
                          <a href="#" className="text-orange-500 hover:underline">
                            Live Demo
                          </a>

                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <div className="border-l-4 border-orange-500 pl-6">
                        <h3 className="text-xl font-semibold text-orange-500 mb-2">Text Tools</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
                          React.js, TypeScript, CSS
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300">
TextUtils is a simple tool to count words, count characters, and remove extra spaces from text.
                        </p>
                        <div className="flex space-x-4 text-sm">
                          <a href="#" className="text-orange-500 hover:underline">
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}

                {activeResumeCategory === "interests" && (
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="text-xl font-semibold text-orange-500 mb-3">Learning new technologies</h3>
                      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                        I'm tech enthusiast and in love with it, so I love to learn new technologies and implement in
                        project.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <h3 className="text-xl font-semibold text-orange-500 mb-3">Music</h3>
                      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                        I like to listen Indian Classic songs and
                        sometimes western songs.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h3 className="text-xl font-semibold text-orange-500 mb-3">Fitness</h3>
                      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                        I always take care of my health, so stay healthy and fit do exercises and running every day.
                      </p>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Contact Me
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-2"></div>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Let's Keep In Touch</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-gray-200 dark:border-slate-700 transition-colors duration-300">
              <div className="grid lg:grid-cols-2">
                {/* Contact Info */}
                <motion.div
                  className="bg-slate-900 dark:bg-blue-950 p-8 text-white transition-colors duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6">Get In Touch 📧</h3>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-5 w-5 text-orange-500" />
                      <span className="text-sm">rohitgobade239@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="h-5 w-5 text-orange-500" />
                      <span className="text-sm">+91 7447711239</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-5 w-5 text-orange-500" />
                      <span className="text-sm">Pune, Maharashtra, India</span>
                    </div>
                  </div>

              {/* Social Icons */}
              <motion.div
                className="flex space-x-4 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {socialLinks.map(({ Icon, url }, index) => (
                  <motion.a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded text-white hover:bg-orange-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </motion.div>

                  <p className="text-gray-400 text-sm"></p>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  className="p-8 bg-white dark:bg-slate-800 transition-colors duration-300"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <form className="space-y-6" onSubmit={handleSubmit} >
                    <div>
                      <Input
                        placeholder="Name"
                        className="w-full dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="w-full dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                        value={formData.email}
                        onChange={handleChange}
                          name="email"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Message"
                        rows={6}
                        className="w-full resize-none dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                        value={formData.message}
                        onChange={handleChange}
                          name="message"
                      
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        Send
                      </Button>
                    </motion.div>
                    {status && <p className="text-sm text-center mt-2">{status}</p>}

                  </form>
                </motion.div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
