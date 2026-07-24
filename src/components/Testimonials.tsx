import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The hands-on approach to learning HTML and CSS completely changed my perspective. I went from knowing nothing to building my first website in just a few days!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "O/L ICT Student",
  },
  {
    text: "The React workshop was incredibly well-structured. The instructors made complex state management concepts easy to grasp for beginners.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Web Engineering Batch",
  },
  {
    text: "Python Data Science pipelines always seemed intimidating, but this course broke it down perfectly. I now feel confident exploring machine learning.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Data Science Enthusiast",
  },
  {
    text: "I loved the AI & ML seminar! The practical prompt engineering sessions really opened my eyes to how I can use AI for rapid prototyping.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Future Tech Batch",
  },
  {
    text: "Figma design workflows were taught beautifully. The UI/UX prototyping exercises helped me build a solid portfolio piece I'm really proud of.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Design Student",
  },
  {
    text: "The mentors are so supportive. They don't just teach theory; they ensure you get your hands dirty with real-world coding problems.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "A/L ICT Student",
  },
  {
    text: "Getting into software engineering felt like a huge leap, but the foundation course made the transition incredibly smooth and enjoyable.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Engineering Foundation",
  },
  {
    text: "The community here is amazing. Being able to collaborate with other students on full-stack projects really accelerated my learning.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Web Dev Bootcamp",
  },
  {
    text: "From basic HTML to advanced JavaScript, the curriculum is perfectly aligned with what the tech industry actually demands today.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Code Core Batch 04",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-3xl border border-white/10 shadow-lg bg-white/5 backdrop-blur-md max-w-xs w-full text-white" key={i}>
                  <div className="text-gray-300 font-body text-sm leading-relaxed">{text}</div>
                  <div className="flex items-center gap-4 mt-6">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover border border-white/20"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold tracking-tight leading-5 text-white font-display text-sm">{name}</div>
                      <div className="leading-5 text-gray-500 tracking-tight text-xs font-mono mt-1 uppercase">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="relative w-full mt-24 mb-24">
      <div className="container z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <div className="flex justify-center">
            <div className="border border-[#00AEEF]/30 bg-[#00AEEF]/10 text-[#00AEEF] py-1 px-4 rounded-full text-xs font-mono uppercase tracking-widest">Testimonials</div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tighter mt-5 text-white">
            What our students say
          </h2>
          <p className="mt-5 text-gray-400 font-body">
            Glimpses into the experiences and success stories of our community.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] overflow-hidden relative">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
