import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../data/content";

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
