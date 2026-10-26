export const metadata = {
  title: "Privacy Policy | German Nepali Dictionary",
  description: "Privacy policy for the German Nepali Dictionary Android app.",
};

const sections = [
  {
    title: "1. About This App",
    content:
      "German Nepali Dictionary is a dictionary application designed to help users understand German and Nepali words and meanings. This policy explains how the app handles information.",
  },
  {
    title: "2. Information We Collect",
    content:
      "Based on the app's current design, the app does not require account registration and is intended to work offline. The developer does not intentionally collect or transmit users' personal information through the app. This statement must be updated if the app or any included library collects or transmits data.",
  },
  {
    title: "3. Internet and Third-Party Services",
    content:
      "The app is designed to work without an internet connection and does not intentionally send dictionary searches or personal information to the developer or third parties. This statement assumes the released app and its included libraries do not make network requests or transmit data.",
  },
  {
    title: "4. Data Stored on Your Device",
    content:
      "Dictionary content and app preferences may be stored locally on your device, depending on the features you use. If search history, bookmarks, or favorites are supported, those records may remain on your device until you clear them or uninstall the app. We do not receive this locally stored information.",
  },
  {
    title: "5. Permissions",
    content:
      "The app is intended to operate without requesting sensitive device permissions. Your device and Android operating system may still process technical information as part of normal operation.",
  },
  {
    title: "6. Data Security and Retention",
    content:
      "Because the app is designed to work offline without an account or developer-operated data storage, the developer does not maintain a server-side user account or personal-information database for this app. Information stored locally is subject to your device's security, settings, and backup configuration.",
  },
  {
    title: "7. Children's Privacy",
    content:
      "The app does not intentionally collect personal information from children. If the app's audience or data practices change, this policy will be updated as necessary to address applicable requirements.",
  },
  {
    title: "8. Changes to This Policy",
    content:
      "This policy may be updated if the app's features, data practices, or applicable requirements change. The latest version will be published on this page with an updated revision date.",
  },
];

export default function GermanNepaliPrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-800 sm:px-6 sm:py-16">
      <article className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <header className="mb-10 border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            German Nepali Dictionary
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Last updated: October 26, 2026
          </p>

          <p className="mt-5 leading-7 text-slate-600">
            Your privacy matters. This policy describes how German Nepali
            Dictionary handles information when you use the application.
          </p>
        </header>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-950">
                {section.title}
              </h2>
              <p className="leading-7 text-slate-600">{section.content}</p>
            </section>
          ))}

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-950">
              9. Contact Us
            </h2>

            <p className="leading-7 text-slate-600">
              If you have questions about this Privacy Policy, contact the app
              developer:
            </p>

            <p className="leading-7 text-slate-600">
              <strong>App:</strong> German Nepali Dictionary
              <br />
              <strong>Developer:</strong> Nandalal Shukla
              <br />
              <strong>Email:</strong>
              <a
                href="mailto:shuklanandalal@gmail.com"
                className="text-blue-700 underline underline-offset-4"
              >
                shuklanandalal@gmail.com
              </a>
            </p>
          </section>
        </div>

        <footer className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          German Nepali Dictionary — Privacy Policy
        </footer>
      </article>
    </main>
  );
}
