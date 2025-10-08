"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Section } from "./Section";

export function Hero() {
  const handleCTAClick = () => {
    const ctaSection = document.querySelector("#cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/child-college-hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Card */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        <Card className="backdrop-blur-sm bg-background/40 border-0 shadow-2xl">
          <div className="p-6 md:p-10 lg:p-12 space-y-6 md:space  -y-8">
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              Your Child's Future Starts Today
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto space-y-4"
            >
              <p>
                Give your child the best possible start. With the right plan,{" "}
                <em>college can be within reach for every family.</em>{" "}
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                We're here to make{" "}
                <em>clear, manageable, and achievable plans</em> so you can{" "}
                <strong>start building the future your child deserves.</strong>
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Button
                size="lg"
                onClick={handleCTAClick}
                className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto"
              >
                Start Your College Fund Plan
              </Button>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
