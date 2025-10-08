"use client";

import { AnimatedInView } from "./AnimatedInView";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";

export function Trust() {
  const handleCTAClick = () => {
    const ctaSection = document.querySelector("#cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id="trust" className="bg-background">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <AnimatedInView>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Why Families Trust Us
            </h2>
          </AnimatedInView>

          <AnimatedInView delay={0.1}>
            <div className="text-base sm:text-lg md:text-xl text-muted-foreground space-y-4 leading-relaxed">
              <p>
                You're trusting us with something precious —{" "}
                <em>your child's future.</em> That's why we take a{" "}
                <em>fiduciary approach</em>, meaning{" "}
                <em>your family's best interests always come first.</em>
              </p>

              <p>
                Our advisors are{" "}
                <em>
                  experienced professionals specializing in college and
                  education planning.
                </em>{" "}
                We don't push products — <em>we provide clarity.</em>
              </p>
            </div>
          </AnimatedInView>
        </div>

        <AnimatedInView delay={0.2}>
          <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-muted/30 rounded-r-lg">
            <p className="text-lg md:text-xl italic text-foreground leading-relaxed mb-2">
              "We wanted to save for college but didn't know where to start. Now
              we have a clear plan and real peace of mind."
            </p>
            <cite className="text-sm text-muted-foreground not-italic">
              — The Ramirez Family
            </cite>
          </blockquote>
        </AnimatedInView>

        <AnimatedInView delay={0.3}>
          <div className="text-center">
            <Button size="lg" variant="outline" onClick={handleCTAClick}>
              See How Other Parents Started
            </Button>
          </div>
        </AnimatedInView>
      </div>
    </Section>
  );
}
