"use client";

import { AnimatedInView } from "./AnimatedInView";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";

export function Vision() {
  const handleCTAClick = () => {
    const solutionSection = document.querySelector("#solution");
    if (solutionSection) {
      solutionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id="vision" className="bg-background">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <AnimatedInView>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Imagine Sending Your Child to College—Without the Stress
          </h2>
        </AnimatedInView>

        <AnimatedInView delay={0.1}>
          <div className="text-base sm:text-lg md:text-xl text-muted-foreground space-y-4 leading-relaxed">
            <p>
              <em>Picture this:</em> your child opening their college acceptance
              letter — excited, proud, and ready — while you feel calm,{" "}
              <em>not anxious about tuition bills.</em> You already know their
              education is accounted for, <em>their future secure.</em>
            </p>

            <p>
              That's the peace that comes from <em>planning ahead.</em> When you
              take control early, you give your child{" "}
              <em>
                freedom to focus on learning, growing, and building their
                future.
              </em>
            </p>
          </div>
        </AnimatedInView>

        <AnimatedInView delay={0.2}>
          <Button size="lg" onClick={handleCTAClick}>
            See How We Make College Planning Simple
          </Button>
        </AnimatedInView>
      </div>
    </Section>
  );
}
