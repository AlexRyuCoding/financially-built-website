"use client";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "About", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Disclosures", href: "#" },
  { label: "Resources", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Brand and Tagline */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">
              Financially Built.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Helping families build brighter futures — one plan at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">
              Quick Links
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">
              Parent Planning Newsletter
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get practical tips, FAFSA updates, and simple strategies that help
              you stay ahead.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Mock handler
                alert("Thank you for subscribing!");
              }}
              className="flex flex-col sm:flex-row gap-2"
            >
              <Input
                type="email"
                placeholder="Your email"
                required
                className="flex-1"
                aria-label="Email address"
              />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Financially Built. All rights reserved.
          </p>
          <p className="text-xs">
            Investment advisory services offered through a registered investment
            advisor.
          </p>
        </div>
      </div>
    </footer>
  );
}
