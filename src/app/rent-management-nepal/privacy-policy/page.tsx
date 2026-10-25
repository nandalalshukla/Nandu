export const metadata = {
  title: "Privacy Policy | Rent Management Nepal",
  description:
    "Learn how Rent Management Nepal collects, uses, stores, and protects your information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>Depending on how you use the app, we may collect:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Name and email address for account creation and management.</li>
          <li>Phone number for account-related communication.</li>
          <li>
            Property and rental details, including information you enter about
            properties, tenants, rent amounts, and payment status.
          </li>
          <li>
            Location information that you provide or authorize the app to
            access, if applicable to its features.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How We Use Information",
    content: (
      <ul className="list-disc space-y-2 pl-6">
        <li>Create and manage user accounts.</li>
        <li>Provide property and rent management features.</li>
        <li>Store and display rental records.</li>
        <li>Respond to support requests and communicate about the service.</li>
        <li>Maintain app security and comply with applicable laws.</li>
      </ul>
    ),
  },
  {
    title: "3. Data Storage and Security",
    content: (
      <p>
        Your information is stored on our backend servers and associated
        database infrastructure. We use reasonable safeguards to protect
        information from unauthorized access, alteration, disclosure, or
        destruction. No electronic storage or transmission method is completely
        secure.
      </p>
    ),
  },
  {
    title: "4. Information Sharing",
    content: (
      <p>
        Information may be processed by service providers that support our
        hosting, database, and app operations. We may also disclose information
        where required by law or necessary to protect the service and its users.
        Our actual third-party sharing practices are described in this policy
        and the app's applicable disclosures.
      </p>
    ),
  },
  {
    title: "5. Data Retention",
    content: (
      <p>
        We retain information for as long as necessary to provide the service,
        operate user accounts, resolve disputes, and meet applicable legal
        obligations. When an account is deleted, we delete or anonymize
        associated personal information unless retention is legally required or
        otherwise permitted for a specific legitimate purpose.
      </p>
    ),
  },
  {
    title: "6. Account and Data Deletion",
    content: (
      <p>
        You can request deletion of your account and associated personal
        information through the account deletion feature in the app or by
        visiting our account deletion page:{" "}
        <a
          href="/rent-management-nepal/delete-account"
          className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
        >
          Request account deletion
        </a>
        . We may need to verify account ownership before processing a request.
        Any information that must be retained for legal or security reasons will
        be handled according to applicable requirements.
      </p>
    ),
  },
  {
    title: "7. Location Information",
    content: (
      <p>
        If a feature uses your device's location, we will use that information
        for the relevant feature and subject to the permissions you grant. You
        can manage device location permissions through your device settings. If
        the app only collects a location you enter yourself, this section should
        be updated to say so.
      </p>
    ),
  },
  {
    title: "8. Children's Privacy",
    content: (
      <p>
        The app is not intended for children who are not permitted to use it
        under applicable law. If you believe a child has provided personal
        information inappropriately, contact us so we can investigate and take
        appropriate action.
      </p>
    ),
  },
  {
    title: "9. Third-Party Services",
    content: (
      <p>
        The app may rely on third-party services to host, store, or operate its
        features. Those providers may process information as necessary to
        perform their services. We will disclose relevant data practices as
        required.
      </p>
    ),
  },
  {
    title: "10. Changes to This Policy",
    content: (
      <p>
        We may update this policy when our app, data practices, or legal
        obligations change. The updated version will be published on this page
        with a revised date where appropriate.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-800 sm:px-6 lg:py-16">
      <article className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <header className="mb-10 border-b border-slate-200 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700">
            Gharbeti App
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Last updated: October 25, 2026
          </p>

          <p className="mt-5 leading-7 text-slate-600">
            This policy explains how Gharbeti App collects, uses,
            stores, and protects information when you use our app.
          </p>
        </header>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-950">
                {section.title}
              </h2>
              <div className="space-y-3 leading-7 text-slate-600">
                {section.content}
              </div>
            </section>
          ))}

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-950">
              11. Contact Us
            </h2>
            <p className="leading-7 text-slate-600">
              For privacy questions or account and data deletion requests,
              contact the app developer:
            </p>
            <p className="leading-7 text-slate-600">
              <strong>App:</strong> Gharbeti
              <br />
              <strong>Developer:</strong> Nandalal Shukla
              <br />
              <strong>Email:</strong>
              <a
                href="shuklanandalal@gmail.com"
                className="text-blue-700 underline underline-offset-4"
              >
                shuklanandalal@gmail.com
              </a>
            </p>
          </section>
        </div>

        <footer className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Rent Management Nepal. All rights
          reserved.
        </footer>
      </article>
    </main>
  );
}
