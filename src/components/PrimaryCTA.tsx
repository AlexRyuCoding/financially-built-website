"use client";

import { useState } from "react";
import { AnimatedInView } from "./AnimatedInView";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { ContactForm } from "@/components/ContactForm";

export function PrimaryCTA() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handlePrimaryClick = () => {
    setShowContactForm(true);
  };

  return (
    <Section
      id="cta"
      className="bg-gradient-to-br from-primary/10 via-background to-primary/5"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {!showContactForm ? (
          <>
            <div className="text-center space-y-4">
              <AnimatedInView>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  Let's Start Planning Their Future
                </h2>
              </AnimatedInView>

              <AnimatedInView delay={0.1}>
                <div className="text-base sm:text-lg md:text-xl text-muted-foreground space-y-4 leading-relaxed">
                  <p>
                    <em>
                      You don't need to have it all figured out — you just need
                      to start.
                    </em>
                  </p>

                  <p>
                    Our team will walk you through{" "}
                    <em>every step of the process</em> — from savings options to
                    FAFSA strategies — and help you create{" "}
                    <em>a plan that fits your family perfectly.</em>
                  </p>

                  <p>
                    A short conversation today could{" "}
                    <em>change your child's tomorrow.</em>
                  </p>
                </div>
              </AnimatedInView>

              <AnimatedInView delay={0.2}>
                <p className="text-xl md:text-2xl font-semibold text-foreground">
                  No cost. No obligation. Just clarity.
                </p>
              </AnimatedInView>
            </div>

            <AnimatedInView delay={0.3}>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  onClick={handlePrimaryClick}
                  className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto w-full sm:w-auto"
                >
                  Book Your Free Consultation
                </Button>
              </div>
            </AnimatedInView>
          </>
        ) : (
          <AnimatedInView>
            <div className="bg-background rounded-lg p-6 md:p-8 shadow-lg">
              <ContactForm
                type="consult"
                onBack={() => setShowContactForm(false)}
              />
            </div>
          </AnimatedInView>
        )}
      </div>
    </Section>
  );
}
