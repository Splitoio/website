import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy — Splito",
  description: "How Splito handles your data.",
};

export default function PrivacyPage() {
  return (
    <div
      style={{ background: "linear-gradient(0deg, #111111, #111111), #FFFFFF" }}
      className="min-h-screen text-white overflow-x-hidden"
    >
      <Navigation />

      <main className="container mx-auto px-4 max-w-3xl pt-40 pb-24">
        <h1 className="text-white text-4xl md:text-5xl font-medium font-general-sans mb-4">
          Privacy Policy
        </h1>
        <p className="text-[rgba(248,250,252,0.4)] text-sm font-inter mb-16">
          Last updated: April 10, 2026
        </p>

        <div className="space-y-12 text-[rgba(248,250,252,0.75)] font-inter text-[15px] leading-relaxed">

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">Overview</h2>
            <p>
              Splito is an early-stage project. We built it because splitting expenses across
              currencies is genuinely painful, and we wanted a better tool. This policy explains
              what data we collect to make the service work, and what we do — and don&apos;t do
              — with it.
            </p>
            <p className="mt-3">
              Short version: we collect what we need to run the app, we don&apos;t sell it, and
              on-chain transactions are public by the nature of blockchains.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">What we collect</h2>
            <ul className="space-y-3 list-none">
              {[
                ["Account data", "Your name and email address when you sign up."],
                ["Expense data", "Amounts, currencies, exchange rates you set, descriptions, and who is part of each expense or group."],
                ["Wallet addresses", "If you connect a Stellar or Aptos wallet to settle balances, we store that address. Wallet addresses are considered personal data under most privacy frameworks."],
                ["Group membership", "Which groups you belong to and who else is in them."],
                ["Usage", "Basic app interactions (pages visited, actions taken) to understand how the product is being used. We do not track you across other sites."],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3">
                  <span className="text-[#09D1FD] mt-1 shrink-0">—</span>
                  <span><span className="text-white font-medium">{title}:</span> {desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">How we use it</h2>
            <p>We use the data above to:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Operate the service — calculate balances, show group expenses, send settlement transactions.",
                "Authenticate your account.",
                "Improve the product based on how it&apos;s being used.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#09D1FD] mt-1 shrink-0">—</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <p className="mt-4">We do not sell your data. We do not share it with advertisers.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">On-chain transactions</h2>
            <p>
              When you settle a balance via Stellar or Aptos, the transaction is recorded on a
              public blockchain. This data — including wallet addresses and amounts — is publicly
              visible to anyone. We do not control blockchain data and cannot delete or modify it.
              This is inherent to how blockchains work.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">Exchange rates</h2>
            <p>
              Exchange rates in Splito are set by you at the time an expense is created. We store
              the rate you enter. We do not pull live rates automatically or modify the rates you
              set. You are responsible for the accuracy of the rate you record.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">Third parties</h2>
            <p>
              We use a small number of third-party services to run the app — authentication,
              hosting, and email delivery. These services process data only to the extent needed
              to provide their function. We do not share your expense or financial data with them
              beyond what is technically required.
            </p>
            <p className="mt-3">
              Blockchain networks (Stellar, Aptos) are public infrastructure. Transactions
              broadcast to them are outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">Data retention &amp; deletion</h2>
            <p>
              We retain your data for as long as your account is active. If you want your account
              and data deleted, reach out to us and we&apos;ll take care of it. On-chain
              transaction records cannot be deleted — that&apos;s outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">Your rights</h2>
            <p>
              You can ask us what data we hold about you, request corrections, or ask for
              deletion. Get in touch via{" "}
              <a
                href="https://x.com/splitodotio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#09D1FD] hover:underline"
              >
                @splitodotio on X
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">Changes to this policy</h2>
            <p>
              We&apos;ll update this page if something material changes. Since this is an early
              project, the service itself is evolving — and this policy may evolve with it.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">Contact</h2>
            <p>
              Questions or requests:{" "}
              <a
                href="https://x.com/splitodotio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#09D1FD] hover:underline"
              >
                @splitodotio on X
              </a>
              .
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
