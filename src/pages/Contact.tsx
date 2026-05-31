import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import contactHero from "@/assets/contact-hero.jpg";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().min(1, "Company name is required").max(150),
  phone: z.string().trim().min(5, "Phone number is required").max(30),
  jobTitle: z.string().trim().min(1, "Job title is required").max(100),
  country: z.string().min(1, "Please select a country"),
  category: z.string().min(1, "Please select a category"),
  area: z.string().min(1, "Please select an area of interest"),
  details: z.string().trim().min(10, "Please provide more details").max(1000),
  communications: z.enum(["yes", "no"], {
    errorMap: () => ({ message: "Please select a communication preference" }),
  }),
});

const countries = [
  "Algeria",
  "France",
  "Germany",
  "Italy",
  "Morocco",
  "Spain",
  "Tunisia",
  "Türkiye",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Other",
];

const categories = [
  "Sales inquiry",
  "Technical support",
  "Service & maintenance",
  "Partnership opportunity",
  "Media inquiry",
  "Other",
];

const areas = [
  "Gas Turbines",
  "Steam Turbines",
  "Electrification",
  "Substations & Switchgear",
  "Maintenance & Repair",
  "Digital Solutions",
];

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    jobTitle: "",
    country: "",
    category: "",
    area: "",
    details: "",
    communications: "" as "yes" | "no" | "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please review the form",
        description: result.error.errors[0]?.message ?? "Some fields are invalid.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Request received",
        description: "Thank you for contacting GEAT. Our team will reach out shortly.",
      });
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        jobTitle: "",
        country: "",
        category: "",
        area: "",
        details: "",
        communications: "",
      });
    }, 700);
  };

  const fieldClass =
    "h-11 rounded-none border-0 border-b border-input bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[480px] lg:h-[560px] w-full overflow-hidden">
          <img
            src={contactHero}
            alt="GEAT technician working on a turbine module"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/65 to-foreground/20" />
          <div className="relative section-container h-full flex flex-col justify-center">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-background/80 mb-8"
            >
              <a href="/" className="hover:text-primary transition-colors">
                Home
              </a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-background">Contact us</span>
            </nav>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-background max-w-3xl leading-tight">
              How can we help you?
            </h1>
            <p className="mt-6 max-w-xl text-background/85 text-base lg:text-lg leading-relaxed">
              Let us know how we can support your existing or future projects, and
              one of our sales or support representatives will contact you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background flex-1">
        <div className="section-container py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20">
            {/* Form card */}
            <div className="bg-card border border-border shadow-lg p-8 lg:p-10 lg:-mt-40 relative z-10">
              <div className="w-12 h-1 bg-primary mb-6" />
              <h2 className="font-heading font-bold text-3xl text-foreground mb-3">
                Contact us
              </h2>
              <p className="text-muted-foreground mb-8">
                Connect with GEAT by completing the form below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <Field label="First Name" required>
                  <Input
                    className={fieldClass}
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                    maxLength={100}
                  />
                </Field>
                <Field label="Last Name" required>
                  <Input
                    className={fieldClass}
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                    maxLength={100}
                  />
                </Field>
                <Field label="Company Email Address" required>
                  <Input
                    type="email"
                    className={fieldClass}
                    placeholder="Company Email Address"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    maxLength={255}
                  />
                </Field>
                <Field label="Company Name" required>
                  <Input
                    className={fieldClass}
                    placeholder="Company Name"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    maxLength={150}
                  />
                </Field>
                <Field label="Primary Phone Number" required>
                  <Input
                    type="tel"
                    className={fieldClass}
                    placeholder="Primary Phone Number"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    maxLength={30}
                  />
                </Field>
                <Field label="Job Title" required>
                  <Input
                    className={fieldClass}
                    placeholder="Job Title"
                    value={form.jobTitle}
                    onChange={(e) => update("jobTitle", e.target.value)}
                    maxLength={100}
                  />
                </Field>
                <Field label="Country/Territory" required>
                  <Select
                    value={form.country}
                    onValueChange={(v) => update("country", v)}
                  >
                    <SelectTrigger className={fieldClass}>
                      <SelectValue placeholder="Select Country/Territory…" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field
                  label="Which category best describes your reason for contacting us?"
                  required
                >
                  <Select
                    value={form.category}
                    onValueChange={(v) => update("category", v)}
                  >
                    <SelectTrigger className={fieldClass}>
                      <SelectValue placeholder="Select…" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Area of Interest" required>
                  <Select
                    value={form.area}
                    onValueChange={(v) => update("area", v)}
                  >
                    <SelectTrigger className={fieldClass}>
                      <SelectValue placeholder="Select…" />
                    </SelectTrigger>
                    <SelectContent>
                      {areas.map((a) => (
                        <SelectItem key={a} value={a}>
                          {a}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Please provide details about your request" required>
                  <Textarea
                    className="min-h-32 rounded-none border border-input bg-transparent focus-visible:ring-0 focus-visible:border-primary"
                    placeholder="Write your request here."
                    value={form.details}
                    onChange={(e) => update("details", e.target.value)}
                    maxLength={1000}
                  />
                </Field>

                <div>
                  <p className="text-sm font-medium text-foreground mb-3">
                    Communications Preference:{" "}
                    <span className="text-primary">*</span>
                  </p>
                  <RadioGroup
                    value={form.communications}
                    onValueChange={(v) =>
                      update("communications", v as "yes" | "no")
                    }
                    className="space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="yes" id="comm-yes" className="mt-1" />
                      <Label
                        htmlFor="comm-yes"
                        className="text-sm text-muted-foreground leading-relaxed font-normal"
                      >
                        Yes, please keep me informed of topics and innovations
                        transforming my industry, including special event invitations,
                        surveys, newsletters, product and service incentives, and new
                        product announcements from GEAT and its affiliated companies.
                      </Label>
                    </div>
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="no" id="comm-no" className="mt-1" />
                      <Label
                        htmlFor="comm-no"
                        className="text-sm text-muted-foreground leading-relaxed font-normal"
                      >
                        No, please exclude me from marketing communications from GEAT.
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Detailed information about how the personal data you have supplied
                  is collected, stored and processed can be found in the GEAT Privacy
                  Notice. If you have opted in to receive marketing communications,
                  you can withdraw your consent at any time by visiting the GEAT
                  Communications Preference Center, or by using the unsubscribe link
                  found at the bottom of all emails from GEAT.
                </p>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wider text-xs px-8 py-6"
                >
                  {submitting ? "Submitting…" : "Submit Contact Request"}
                </Button>
              </form>
            </div>

            {/* Useful links */}
            <aside className="lg:pt-4">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-8">
                Useful links
              </h2>
              <div className="space-y-8">
                <LinkBlock
                  title="Career opportunities"
                  body={
                    <>
                      For career opportunities or to check your job applications,
                      please click{" "}
                      <a href="/careers" className="text-primary underline">
                        here
                      </a>
                      .
                    </>
                  }
                />
                <LinkBlock
                  title="Employment verifications"
                  body="For employment verifications and other human resources questions, please contact our HR department."
                />
                <LinkBlock
                  title="Media contacts"
                  body="For media inquiries, interviews and press resources, please contact our communications team."
                />
                <LinkBlock
                  title="Report a concern"
                  body="GEAT is committed to doing the right thing, always. To report an ethics, compliance or other concern, please contact our integrity office."
                />
                <LinkBlock
                  title="Visit us"
                  body="GEAT Manufacturing Facility — Aïn Yagout, Batna Province, Algeria."
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Field = ({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-foreground">
      {label}: {required && <span className="text-primary">*</span>}
    </label>
    {children}
  </div>
);

const LinkBlock = ({
  title,
  body,
}: {
  title: string;
  body: React.ReactNode;
}) => (
  <div>
    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
      {title}
    </h3>
    <p className="text-muted-foreground leading-relaxed text-sm">{body}</p>
  </div>
);

export default Contact;
