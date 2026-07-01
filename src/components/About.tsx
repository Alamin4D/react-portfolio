import { FiCode, FiCoffee, FiHeart, FiCamera } from "react-icons/fi";

const HIGHLIGHTS = [
  {
    icon: FiCode,
    title: "My Journey",
    text: "Started coding in college with simple HTML/CSS pages, fell in love with problem-solving, and grew into building full-stack applications with React and Node.js.",
  },
  {
    icon: FiCoffee,
    title: "What I Enjoy",
    text: "Crafting clean UI, solving tricky logic problems, and turning vague ideas into polished, usable products. I love the moment a feature finally clicks into place.",
  },
  {
    icon: FiCamera,
    title: "Beyond Code",
    text: "When I'm away from the keyboard, you'll find me playing football, sketching landscapes, or exploring new photography spots around the city.",
  },
  {
    icon: FiHeart,
    title: "My Values",
    text: "I believe in continuous learning, honest communication, and writing code that my future self (and teammates) will thank me for.",
  },
];

export default function About() {
  return (
    <section id="about" className=" py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Get To Know Me
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">About Me</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-3xl border-2 border-dashed border-indigo-400/30" />
              <img
                src="/images/alamin.png"
                alt="About Rakibul Islam"
                className="relative w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-white">
              A curious developer who loves building things that matter.
            </h3>
            <p className="mt-4 leading-relaxed text-slate-400">
              I'm Alamin, a Full Stack Web Developer based in Dhaka,
              Bangladesh. My programming journey began almost 3 years ago out
              of pure curiosity about how websites work — that curiosity
              quickly turned into a passion. Since then, I've spent countless
              hours learning, breaking things, fixing them, and shipping real
              projects, from small landing pages to complete full-stack
              applications with authentication, payments, and real-time
              features.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              I enjoy the entire process of building software — sketching out
              an idea, designing a clean interface, architecting the backend,
              and finally seeing it come alive for real users. I'm especially
              drawn to projects that combine solid engineering with thoughtful
              design.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              Outside of programming, I'm a huge football fan (proud
              Barcelona supporter), I enjoy sketching and photography on
              weekends, and I'm always up for a good cup of coffee and a
              conversation about tech, movies, or travel. I believe a
              well-rounded life makes for a better developer.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-indigo-400/40"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-400">
                    <Icon className="text-lg" />
                  </div>
                  <h4 className="font-semibold text-white">{title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
