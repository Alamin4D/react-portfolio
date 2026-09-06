import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import {
  FiArrowUpRight,
  FiClock,
  FiMessageCircle,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";

interface PremiumTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}

interface PremiumInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

/* ============================================================
   CONTACT INFO
============================================================ */

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "alaminahmed.dev@gmail.com",
    href: "mailto:alaminahmed.dev@gmail.com",
    color: "from-blue-500 to-cyan-500",
    glow: "bg-blue-500/10",
  },
  {
    icon: <FaPhone />,
    title: "Phone",
    value: "+880 1401768261",
    href: "tel:+8801401768261",
    color: "from-emerald-500 to-green-500",
    glow: "bg-emerald-500/10",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Dhaka, Bangladesh",
    href: "#",
    color: "from-purple-500 to-pink-500",
    glow: "bg-purple-500/10",
  },
];

/* ============================================================
   SOCIAL LINKS
============================================================ */

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/Alamin4D",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/mdalaminhossain2/",
    label: "LinkedIn",
  },
  {
    icon: <FaTwitter />,
    href: "https://twitter.com",
    label: "Twitter",
  },
];

/* ============================================================
   COMPONENT
============================================================ */

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  /* ============================================================
     INPUT HANDLER
  ============================================================ */

  const handleChange = (e:any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  /* ============================================================
     SUBMIT
  ============================================================ */

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError("");

    try {
      const data = new FormData();

      data.append(
        "access_key",
        "395dd015-8cff-468c-b619-f09fca1802f3"
      );

      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("subject", formData.subject);
      data.append("message", formData.message);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

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
        }, 6000);
      } else {
        setError(
          "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      console.error(err);
      setError(
        "Unable to send your message. Please check your internet connection."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-[#050509] py-28 sm:py-32"
    >
      {/* ========================================================
          BACKGROUND
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Left glow */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[150px]"
        />

        {/* Right glow */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]"
        />

        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.025] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* ========================================================
            HEADER
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/[0.08] px-4 py-2">
            <HiSparkles className="text-indigo-400" />

            <span className="text-sm font-medium text-indigo-300">
              Let's Connect
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Great
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Have an idea, project, or opportunity in mind?
            I&apos;d love to hear about it and explore how we
            can build something meaningful together.
          </p>

          {/* Decorative line */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-500/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/60" />
          </div>
        </motion.div>

        {/* ========================================================
            MAIN GRID
        ======================================================== */}

        <div className="grid gap-7 lg:grid-cols-5">
          {/* ======================================================
              LEFT SIDE
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl sm:p-7">
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-[70px]" />

              {/* Header */}
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-400">
                    <FiMessageCircle size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-400">
                      Contact Details
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-white">
                      Get in touch
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-gray-500">
                  Whether you&apos;re looking for a developer,
                  have a project idea, or simply want to say
                  hello, feel free to reach out.
                </p>
              </div>

              {/* Contact items */}
              <div className="relative mt-7 space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={
                      inView
                        ? {
                            opacity: 1,
                            y: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.25 + index * 0.1,
                    }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-all duration-300 hover:border-indigo-400/20 hover:bg-white/[0.045]"
                  >
                    {/* Icon */}
                    <div
                      className={`relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${item.color} text-white`}
                    >
                      <div
                        className={`absolute inset-0 ${item.glow} blur-xl`}
                      />

                      <span className="relative">
                        {item.icon}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-gray-500">
                        {item.title}
                      </p>

                      <p className="mt-1 truncate text-sm font-medium text-gray-200 transition-colors group-hover:text-white">
                        {item.value}
                      </p>
                    </div>

                    <FiArrowUpRight className="shrink-0 text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-400" />
                  </motion.a>
                ))}
              </div>

              {/* Availability */}
              <div className="relative mt-6 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.04] p-4">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10">
                    <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-emerald-300">
                      Available for opportunities
                    </p>

                    <p className="mt-0.5 text-xs text-gray-500">
                      Usually responds within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="relative mt-7 border-t border-white/[0.06] pt-6">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                  Follow Me
                </p>

                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-gray-500 transition-all duration-300 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white"
                    >
                      <span className="transition-transform duration-300 group-hover:scale-110">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Time */}
              <div className="relative mt-6 flex items-center gap-2 text-xs text-gray-600">
                <FiClock />

                <span>
                  Dhaka, Bangladesh · Open to remote collaboration
                </span>
              </div>
            </div>
          </motion.div>

          {/* ======================================================
              RIGHT SIDE FORM
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8">
              {/* Form glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-purple-500/10 blur-[80px]" />

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  /* ==================================================
                     SUCCESS STATE
                  ================================================== */

                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    className="relative flex min-h-[500px] flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      className="flex h-20 w-20 items-center justify-center rounded-3xl border border-emerald-400/20 bg-emerald-400/10"
                    >
                      <FaCheckCircle
                        size={38}
                        className="text-emerald-400"
                      />
                    </motion.div>

                    <h3 className="mt-7 text-2xl font-bold text-white sm:text-3xl">
                      Message Sent Successfully!
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">
                      Thanks for reaching out. I&apos;ll review
                      your message and get back to you as soon
                      as possible.
                    </p>

                    <div className="mt-6 flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-4 py-2 text-xs text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Your message has been received
                    </div>
                  </motion.div>
                ) : (
                  /* ==================================================
                     FORM
                  ================================================== */

                  <motion.form
                    key="form"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    onSubmit={handleSubmit}
                    className="relative space-y-6"
                  >
                    {/* Form header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                          <HiSparkles />
                        </div>

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                            Contact Form
                          </p>

                          <h3 className="mt-1 text-lg font-bold text-white">
                            Send a message
                          </h3>
                        </div>
                      </div>

                      <span className="hidden rounded-full border border-white/[0.06] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium text-gray-500 sm:block">
                        Let&apos;s talk
                      </span>
                    </div>

                    {/* Name + Email */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <PremiumInput
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />

                      <PremiumInput
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    {/* Subject */}
                    <PremiumInput
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project discussion..."
                      required
                    />

                    {/* Message */}
                    <PremiumTextarea
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me a little about your project or idea..."
                      rows={6}
                      required
                    />

                    {/* Error */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: -10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -10,
                          }}
                          className="rounded-xl border border-red-400/10 bg-red-400/[0.04] px-4 py-3 text-sm text-red-300"
                        >
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_100%] py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-950/30 transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          Send Message
                          <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] leading-5 text-gray-600">
                      By sending this message, you&apos;re
                      starting a conversation — no spam, just
                      good ideas.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            BOTTOM CTA
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-gray-600">
            Looking forward to hearing from you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   PREMIUM INPUT
============================================================ */

function PremiumInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}: PremiumInputProps) {
  return (
    <label className="block">
      <span className="mb-2.5 block text-xs font-medium text-gray-400">
        {label}
      </span>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-3.5 text-sm text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-indigo-400/40 focus:bg-indigo-500/[0.04] focus:ring-4 focus:ring-indigo-500/[0.06]"
      />
    </label>
  );
}

/* ============================================================
   PREMIUM TEXTAREA
============================================================ */

function PremiumTextarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 6,
  required = false,
}: PremiumTextareaProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-white"
      >
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20"
      />
    </div>
  );
}