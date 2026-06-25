"use client";

import React, { useState, type FormEvent } from "react";
import { Forminit } from "forminit";

const forminit = new Forminit({ proxyUrl: "/api/forminit" });

type Props = {
  formId?: string;
};

export default function SalesEnquiryForm({ formId = "sales_enquiry_default" }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const { data, error } = await forminit.submit(formId, formData);

    if (error) {
      setStatus("error");
      setError(error.message);
      return;
    }

    setStatus("success");
    setError(null);
    e.currentTarget.reset();
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-900">Sales Enquiry</h2>
        <p className="text-sm text-gray-600">Tell us about your needs and we'll reach out.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">
              First name
            </label>
            <input
              id="firstName"
              name="fi-sender-firstName"
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="First name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">
              Last name
            </label>
            <input
              id="lastName"
              name="fi-sender-lastName"
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Last name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="company">
              Company
            </label>
            <input
              id="company"
              name="fi-text-company"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Business email
            </label>
            <input
              id="email"
              name="fi-sender-email"
              type="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="fi-sender-phone"
              type="tel"
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="+1 (555) 555-5555"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="product">
              Product / Service
            </label>
            <select
              id="product"
              name="fi-text-productInterest"
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select an option</option>
              <option>Consulting</option>
              <option>Development</option>
              <option>Integration</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="budget">
            Estimated budget
          </label>
          <select
            id="budget"
            name="fi-text-budget"
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select a range</option>
            <option value="<5k">Under $5k</option>
            <option value="5k-25k">$5k–$25k</option>
            <option value="25k+">$25k+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="fi-text-message"
            rows={6}
            required
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Describe your project, timeline, and goals"
          />
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="consent"
              name="fi-checkbox-consent"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="consent" className="font-medium text-gray-700">
              I agree to be contacted about this enquiry.
            </label>
          </div>
        </div>

        {status === "error" && (
          <p className="text-sm text-red-600" aria-live="polite">
            {error || "Submission failed. Please try again."}
          </p>
        )}

        {status === "success" && (
          <p className="text-sm text-green-600" aria-live="polite">Message sent successfully!</p>
        )}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Submit Enquiry"}
          </button>
        </div>
      </form>
    </div>
  );
}
