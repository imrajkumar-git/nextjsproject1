"use client";

import SalesEnquiryForm from "@/components/Forms/SalesEnquiryForm";

export default function SalesEnquiryPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <SalesEnquiryForm formId={process.env.NEXT_PUBLIC_SALES_FORM_ID || "sales_enquiry_default"} />
      </div>
    </main>
  );
}
