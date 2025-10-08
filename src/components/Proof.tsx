"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedInView } from "./AnimatedInView";
import { Section } from "./Section";
import { staggerContainer, fadeUp } from "@/lib/motion";
import Image from "next/image";

const testimonials = [
  {
    text: "FAFSA used to terrify us. Now we understand every form and deadline. We couldn't have done it without their guidance.",
    cite: "The Patel Family",
  },
  {
    text: "We started when our daughter was in middle school. By senior year, we had saved $50,000 — and she graduated debt-free.",
    cite: "The Johnson Family",
  },
];

export function Proof() {
  const handleCTAClick = () => {
    const ctaSection = document.querySelector("#cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id="proof" className="bg-muted/30">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <AnimatedInView>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Real Families, Real Peace of Mind
            </h2>
          </AnimatedInView>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Testimonials */}
          <div className="lg:col-span-2">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col justify-between h-full space-y-6"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <blockquote className="space-y-4">
                        <p className="text-base md:text-lg italic text-foreground leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <cite className="text-sm text-muted-foreground not-italic font-medium">
                          — {testimonial.cite}
                        </cite>
                      </blockquote>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <div className="lg:col-span-1">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative aspect-[3/5] rounded-lg overflow-hidden">
                <Image
                  src="/college-student-portrait.png"
                  alt="Happy college student with headphones and red folder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <AnimatedInView delay={0.2}>
          <div className="text-center space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These families didn't have secret wealth — they had{" "}
              <em>a plan and a partner.</em> With expert guidance, they turned
              uncertainty into <em>confidence and control.</em>
            </p>
            <Button size="lg" onClick={handleCTAClick}>
              Start Your Plan — It's Easier Than You Think
            </Button>
          </div>
        </AnimatedInView>
      </div>
    </Section>
  );
}
