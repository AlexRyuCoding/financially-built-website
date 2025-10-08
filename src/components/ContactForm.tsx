"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const consultFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  childAge: z.string().optional(),
  message: z.string().optional(),
});

const questionFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  question: z
    .string()
    .min(10, "Please provide more details about your question"),
});

type ConsultFormData = z.infer<typeof consultFormSchema>;
type QuestionFormData = z.infer<typeof questionFormSchema>;

interface ContactFormProps {
  type: "consult" | "question";
  onBack: () => void;
}

function ConsultForm({
  onSubmit,
  isSubmitting,
}: {
  onSubmit: (data: ConsultFormData) => Promise<void>;
  isSubmitting: boolean;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConsultFormData>({
    resolver: zodResolver(consultFormSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Full Name *
        </label>
        <Input
          id="name"
          {...register("name")}
          placeholder="John Smith"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email Address *
        </label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="john@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          Phone Number *
        </label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="(555) 123-4567"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-sm text-destructive">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="childAge"
          className="text-sm font-medium text-foreground"
        >
          Child's Age (Optional)
        </label>
        <Input
          id="childAge"
          {...register("childAge")}
          placeholder="e.g., 5 years old"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Additional Information (Optional)
        </label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us a bit about your situation or any specific questions..."
          rows={4}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to be contacted by our team regarding
        your inquiry. We respect your privacy and will never share your
        information.
      </p>
    </form>
  );
}

function QuestionForm({
  onSubmit,
  isSubmitting,
}: {
  onSubmit: (data: QuestionFormData) => Promise<void>;
  isSubmitting: boolean;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuestionFormData>({
    resolver: zodResolver(questionFormSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Full Name *
        </label>
        <Input
          id="name"
          {...register("name")}
          placeholder="John Smith"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email Address *
        </label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="john@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="question"
          className="text-sm font-medium text-foreground"
        >
          Your Question *
        </label>
        <Textarea
          id="question"
          {...register("question")}
          placeholder="What would you like to know about college fund planning?"
          rows={5}
          aria-invalid={!!errors.question}
          aria-describedby={errors.question ? "question-error" : undefined}
        />
        {errors.question && (
          <p id="question-error" className="text-sm text-destructive">
            {errors.question.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to be contacted by our team regarding
        your inquiry. We respect your privacy and will never share your
        information.
      </p>
    </form>
  );
}

export function ContactForm({ type, onBack }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isConsult = type === "consult";

  const handleConsultSubmit = async (data: ConsultFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleQuestionSubmit = async (data: QuestionFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="text-center space-y-4 py-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold">Thank You!</h3>
        <p className="text-muted-foreground">
          {isConsult
            ? "We've received your consultation request. Our team will reach out to you within 24 hours to schedule your free consultation."
            : "We've received your question. Our team will respond to you via email within 24 hours."}
        </p>
        <Button onClick={onBack} variant="outline">
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h3 className="text-2xl font-bold">
          {isConsult ? "Book Your Free Consultation" : "Ask a Question"}
        </h3>
      </div>

      {isConsult ? (
        <ConsultForm
          onSubmit={handleConsultSubmit}
          isSubmitting={isSubmitting}
        />
      ) : (
        <QuestionForm
          onSubmit={handleQuestionSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
}
