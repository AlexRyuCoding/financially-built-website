"use client";

import { AnimatedInView } from "./AnimatedInView";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";

export function Problem() {
  const handleCTAClick = () => {
    const solutionSection = document.querySelector("#solution");
    if (solutionSection) {
      solutionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id="problem" className="bg-muted/30">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <AnimatedInView>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            College Costs Are Rising Faster Than Ever
          </h2>
        </AnimatedInView>

        <AnimatedInView delay={0.1}>
          <div className="text-base sm:text-lg md:text-xl text-muted-foreground space-y-4 leading-relaxed">
            <p>
              <em>Tuition costs have more than doubled in the last 20 years</em>{" "}
              — and they continue to rise. At the same time,{" "}
              <em>financial aid is more competitive and complex than ever.</em>{" "}
              Even families who <em>want</em> to save often find themselves
              unsure where to begin — or realize too late that{" "}
              <em>they've missed key opportunities for aid.</em>
            </p>

            <p>
              With{" "}
              <em>early planning, clear guidance, and simple strategies,</em>{" "}
              you can help your child step into college with{" "}
              <em>confidence instead of concern.</em>
            </p>
          </div>
        </AnimatedInView>

        <AnimatedInView delay={0.2}>
          <Button size="lg" variant="outline" onClick={handleCTAClick}>
            Discover What College Could Cost in 10 Years
          </Button>
        </AnimatedInView>
      </div>
    </Section>
  );
}
