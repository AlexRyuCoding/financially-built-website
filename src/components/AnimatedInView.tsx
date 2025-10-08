"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedInViewProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export function AnimatedInView({
  children,
  variants,
  className,
  delay = 0,
}: AnimatedInViewProps) {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
