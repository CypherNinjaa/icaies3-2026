import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import { registrationFees, registrationContent } from "@/content/registration";
import { CreditCard, FileImage, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Registration",
  description:
    "Register for ICAIES³ 2026. View registration fees, payment instructions, and poster presentation guidelines.",
};

export default function RegistrationPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-10 lg:py-14">
        <PageTitle
          lightText=""
          accentText="Registration"
          description={registrationContent.overview}
        />

        {/* Fee Table */}
        <section id="fee-table" className="mt-8">
          <h3 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-accent" />
            Registration Fees
          </h3>

          <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm" id="registration-fee-table">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-6 py-4 font-semibold">
                    Category
                  </th>
                  <th className="text-center px-6 py-4 font-semibold">
                    Indian Authors (INR)
                  </th>
                  <th className="text-center px-6 py-4 font-semibold">
                    Foreign Authors (USD)
                  </th>
                </tr>
              </thead>
              <tbody>
                {registrationFees.map((fee, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 ${
                      index % 2 === 0 ? "bg-white" : "bg-bg-cream"
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-primary">
                      {fee.category}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-text-body">
                      {fee.indianFee}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-text-body">
                      {fee.foreignFee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Payment Instructions */}
        <section id="payment-instructions" className="mt-10">
          <h3 className="text-xl font-bold text-primary mb-4">
            {registrationContent.paymentInstructions.title}
          </h3>
          <ul className="space-y-2.5">
            {registrationContent.paymentInstructions.methods.map(
              (method, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-body">{method}</span>
                </li>
              )
            )}
          </ul>
        </section>

        {/* Poster Presentation */}
        <section id="poster-presentation" className="mt-10">
          <div className="bg-bg-cream border border-gray-100 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
                <FileImage className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">
                  {registrationContent.posterPresentation.title}
                </h3>
                <p className="text-sm text-text-muted">
                  {registrationContent.posterPresentation.description}
                </p>
              </div>
            </div>

            <ul className="space-y-2 mb-5">
              {registrationContent.posterPresentation.details.map(
                (detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-body">{detail}</span>
                  </li>
                )
              )}
            </ul>

            <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
              Poster Specifications
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {registrationContent.posterPresentation.specs.map(
                (spec, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-3 text-center border border-gray-100"
                  >
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                      {spec.label}
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      {spec.value}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Registration Form Placeholder */}
        <section id="registration-form" className="mt-12">
          <div className="bg-gradient-to-br from-primary to-primary-light rounded-xl p-8 text-center text-white">
            <h3 className="font-serif text-2xl font-bold mb-3 text-accent-light">
              Ready to Register?
            </h3>
            <p className="text-white/90 text-sm mb-6 max-w-lg mx-auto">
              Registration form will be available soon. Please ensure your
              paper has been submitted and accepted before proceeding with
              registration.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2.5 text-sm font-medium border border-white/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Registration Opening Soon
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
