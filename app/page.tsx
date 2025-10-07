'use client'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  const linkedinPhoto = "https://media.licdn.com/dms/image/v2/D4D03AQEOvqu2LPjGdw/profile-displayphoto-shrink_800_800/0/1708346010959?e=1738195200&v=beta&t=ba09cK1aZoZQSPoGq90f-V3Qb4hxQpsSmRkLQm44aLE"

  return (
    <>
      <section className="flex flex-col md:flex-row items-center gap-8 mt-6">
        <div className="flex-shrink-0">
          <img src={linkedinPhoto} alt="Nishchal Chotai" className="w-40 h-40 rounded-full border-4 border-green-500 shadow-lg" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Nishchal Chotai</h1>
          <p className="text-green-300 mt-1">Implementation and Platform Engineer</p>
          <p className="mt-4 text-gray-300 max-w-xl leading-relaxed">
            Implementation and Platform Engineer with hands-on experience in PKI, HSM installations, eKYC middleware, AUA/KUA services, and Linux administration. Worked at JISA Softech with clients like Bajaj Finance, NSDL Payment Bank and Shriram Finance.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="https://www.linkedin.com/in/nishchal-chotai-060b22190" target="_blank" rel="noreferrer" className="px-4 py-2 rounded bg-green-600/20 border border-green-600 text-green-200">LinkedIn</a>
            <a href="mailto:nishchalchotai25@gmail.com" className="px-4 py-2 rounded bg-green-600 text-black font-semibold">Email</a>
          </div>
        </div>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </section>

      <section id="experience" className="mt-12 grid md:grid-cols-2 gap-6">
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.05}} className="bg-gray-900/50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-green-200 mb-2">Experience</h2>
          <div className="text-gray-300">
            <p className="font-semibold">JISA Softech Pvt. Ltd. — May 2024 – Present</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Worked on HSM installations and integrations for enterprise clients.</li>
              <li>Implemented PKI flows, digital signature solutions, and eKYC middleware.</li>
              <li>Handled support and client onboarding, mentored new joiners.</li>
            </ul>
          </div>
        </motion.div>

      <section id="education" className="mt-12 grid md:grid-cols-2 gap-6">
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.05}} className="bg-gray-900/50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-green-200 mb-2">Education</h2>
          <div className="text-gray-300">
            <p className="font-semibold">BTech Computer Engineering</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Participation in hackathons.</li>
              <li>Completed final year project of Remote Cowatching application using flutter.</li>
              <li>Cleared all the semester in first class with distinction</li>
            </ul>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="bg-gray-900/50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-green-200 mb-2">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Hardware Security Module (HSM)",
              "Public Key Infrastructure (PKI)",
              "Digital Signature",
              "eKYC Middleware",
              "AUA/KUA Services",
              "Linux Administration",
              "Cryptography",
              "API Integration",
              "Client Support",
              "System Design"
            ].map((s)=>(
              <span key={s} className="px-3 py-1 rounded-full bg-green-600/10 text-green-200 text-sm">{s}</span>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="projects" className="mt-8">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.15}} className="bg-gray-900/50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-green-200 mb-2">Projects & Highlights</h2>
          <p className="text-gray-300">Implemented HSM integrations and JClient solutions for financial institutions, worked on PKI deployments and helped clients with eKYC middleware setup. (Details available on request — sensitive client info omitted.)</p>
        </motion.div>
      </section>

      <section id="contact" className="mt-8">
        <div className="bg-gray-900/50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-green-200 mb-2">Contact</h2>
          <p className="text-gray-300 mb-4">Use the form below to open an email to me (works without backend):</p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  )
}

function ContactForm(){
  const handleSubmit = (e:any) => {
    e.preventDefault();
    const name = e.target.name.value || "";
    const email = e.target.email.value || "";
    const message = e.target.message.value || "";
    const subject = encodeURIComponent("Portfolio contact from " + name + (email ? " <"+email+">": ""));
    const body = encodeURIComponent(message + "\n\n--\nSent via portfolio website");
    const mailto = `mailto:nishchalchotai25@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <input name="name" placeholder="Your name" className="p-2 rounded bg-gray-800 border border-gray-700" />
      <input name="email" placeholder="Your email" className="p-2 rounded bg-gray-800 border border-gray-700" />
      <textarea name="message" placeholder="Message" className="md:col-span-2 p-2 rounded bg-gray-800 border border-gray-700 h-32" />
      <button type="submit" className="md:col-span-2 py-2 rounded bg-green-600 text-black font-semibold">Send Email</button>
    </form>
  )
}
