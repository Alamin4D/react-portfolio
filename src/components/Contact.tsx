import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCheckCircle,
} from "react-icons/fa";

import { HiSparkles } from "react-icons/hi";

/* ---------------- CONTACT INFO ---------------- */

const contactInfo = [
  {
    icon: <FaEnvelope size={24} />,
    title: "Email",
    value: "alaminahmed.dev@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaPhone size={24} />,
    title: "Phone",
    value: "+880 1401768261",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaMapMarkerAlt size={24} />,
    title: "Location",
    value: "Dhaka, Bangladesh",
    color: "from-purple-500 to-pink-500",
  },
];

/* ---------------- SOCIAL LINKS ---------------- */

const socialLinks = [
  {
    icon: <FaGithub size={20} />,
    href: "https://github.com/Alamin4D",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={20} />,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: <FaTwitter size={20} />,
    href: "https://twitter.com",
    label: "Twitter",
  },
];

/* ---------------- MAIN COMPONENT ---------------- */

export function Contact() {
  /* -------- STATES -------- */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  /* -------- ANIMATION -------- */

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  /* -------- HANDLE INPUT -------- */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* -------- HANDLE SUBMIT (WEB3FORMS) -------- */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const data = new FormData();

      data.append("access_key", "395dd015-8cff-468c-b619-f09fca1802f3");
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("subject", formData.subject);
      data.append("message", formData.message);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        setIsSubmitted(true);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        alert("Failed to send message!");
        console.log(result);
      }
    } catch (err) {
      console.error(err);
      alert("Network Error!");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <section
      id="contact"
      className="py-24 bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[150px]" />
      </div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 relative z-10"
      >
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind? Let’s talk.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid lg:grid-cols-5 gap-12">
          {/* LEFT */}

          <div className="lg:col-span-2">
            <div className="glass p-8 rounded-3xl border border-gray-800">

              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 mb-4 p-4 bg-gray-800/40 rounded-xl"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      {item.title}
                    </p>
                    <p className="text-white font-medium">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}

              {/* Social */}

              <div className="flex gap-3 mt-6">

                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    className="p-3 bg-gray-800 rounded-xl text-gray-400 hover:text-white"
                  >
                    {s.icon}
                  </a>
                ))}

              </div>
            </div>
          </div>

          {/* RIGHT FORM */}

          <div className="lg:col-span-3">

            <div className="glass p-8 rounded-3xl border border-gray-800">

              {isSubmitted ? (
                <div className="text-center py-20">

                  <FaCheckCircle
                    size={50}
                    className="mx-auto text-green-500 mb-4"
                  />

                  <h3 className="text-2xl text-white font-bold">
                    Message Sent!
                  </h3>

                  <p className="text-gray-400">
                    I will contact you soon.
                  </p>

                </div>
              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2">
                    <HiSparkles className="text-indigo-400" />
                    <span className="text-gray-400 text-sm">
                      Contact Form
                    </span>
                  </div>

                  {/* Name + Email */}

                  <div className="grid sm:grid-cols-2 gap-6">

                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="input"
                    />

                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your Email"
                      className="input"
                    />

                  </div>

                  {/* Subject */}

                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                    className="input"
                  />

                  {/* Message */}

                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                    className="input resize-none"
                  />

                  {/* Button */}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-indigo-600 text-white rounded-xl font-semibold flex justify-center gap-2"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Input Style */}

      <style>{`
        .input {
          width: 100%;
          padding: 14px;
          background: rgba(31,41,55,0.5);
          border: 1px solid #374151;
          border-radius: 12px;
          color: white;
          outline: none;
        }

        .input:focus {
          border-color: #6366f1;
        }
      `}</style>
    </section>
  );
}
