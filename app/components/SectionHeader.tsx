import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  index: string;
  title: string;
}

const ease = [0.7, 0, 0.2, 1] as const;

const SectionHeader = ({ index, title }: SectionHeaderProps) => {
  return (
    <div className="mb-12 md:mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
        className="flex items-start gap-3 font-display font-black uppercase leading-[0.85] tracking-tight text-[clamp(3rem,8vw,6.5rem)]"
      >
        <span className="font-mono font-normal text-sm text-signal tracking-normal mt-2">{index}</span>
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeader;
