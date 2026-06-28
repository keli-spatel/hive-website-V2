import { SCHEDULE_CALL_URL } from "@/app/data/site";

import { AnimatedButton } from "../ui/AnimatedButton";

const quoteFields = [
  { label: "Your Name", type: "text", placeholder: "Enter name" },
  { label: "Your Phone", type: "tel", placeholder: "Enter number" },
  { label: "Your Email", type: "email", placeholder: "name@gmail.com" },
  { label: "Subject", type: "text", placeholder: "Fill Subject" },
];

export function QuoteForm() {
  return (
    <div className="max-w-xl mx-auto w-full">
      <div className="quote-eyebrow">Get A Quote</div>
      <h2 className="quote-title">Request a Quote</h2>

      <form className="space-y-6 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {quoteFields.map((field) => (
            <div className="space-y-2" key={field.label}>
              <label className="form-field-label">
                {field.label} <span className="text-[#ff3b3b]">*</span>
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full bg-[#f8f9fa] border-0 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-[#ff3b3b] outline-none text-black"
              />
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <label className="form-field-label">Enter Message</label>
          <textarea
            placeholder="Enter your message here..."
            rows={5}
            className="w-full bg-[#f8f9fa] border-0 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-[#ff3b3b] outline-none resize-none text-black"
          ></textarea>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <AnimatedButton type="submit" variant="secondary">
            Submit
          </AnimatedButton>
          <AnimatedButton
            type="button"
            href={SCHEDULE_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Request a Call
          </AnimatedButton>
        </div>
      </form>
    </div>
  );
}
