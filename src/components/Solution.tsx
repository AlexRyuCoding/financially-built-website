"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedInView } from "./AnimatedInView";
import { Section } from "./Section";
import { staggerContainer, fadeUp } from "@/lib/motion";

const steps = [
  {
    title: "Assess",
    text: "Your goals, budget, and family timeline.",
  },
  {
    title: "Educate",
    text: "Estimate real college costs and uncover aid opportunities.",
  },
  {
    title: "Build",
    text: "Personalized savings or investment strategy that grows with your child.",
  },
  {
    title: "Track",
    text: "Stay on course through life's changes.",
  },
];

export function Solution() {
  const handleCTAClick = () => {
    const ctaSection = document.querySelector("#cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id="solution" className="relative bg-muted/30">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-black/20"
        style={{
          backgroundImage: "url('/graduation-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <AnimatedInView>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              How We Help Families Build College Funds That Work
            </h2>
          </AnimatedInView>

          <AnimatedInView delay={0.1}>
            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed text-white drop-shadow-md"
              style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
            >
              We believe{" "}
              <em className="text-yellow-200">
                every family deserves a clear path to college success.
              </em>{" "}
              Our approach is built on{" "}
              <em className="text-yellow-200">
                education, transparency, and trust
              </em>{" "}
              — so you can make confident decisions about your child's future.
            </p>
          </AnimatedInView>
        </div>

        <AnimatedInView delay={0.2}>
          <h3
            className="text-xl sm:text-2xl font-semibold text-center mb-8 text-white drop-shadow-md"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
          >
            Here's how we guide you:
          </h3>
        </AnimatedInView>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={fadeUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    <em>{step.text}</em>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedInView delay={0.3}>
          <div className="text-center space-y-6">
            <p
              className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-white drop-shadow-md"
              style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
            >
              <em className="text-yellow-200">No jargon. No confusion.</em> Just
              honest, step-by-step support that helps you{" "}
              <em className="text-yellow-200">
                feel confident about every financial decision you make for your
                child.
              </em>
            </p>
            <Button
              size="lg"
              onClick={handleCTAClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
            >
              Schedule Your Free College Fund Consultation
            </Button>
          </div>
        </AnimatedInView>
      </div>
    </Section>
  );
}
