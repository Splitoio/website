import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Terms of Service — Splito",
  description: "Terms for using Splito.",
};

export default function TermsPage() {
  return (
    <div
      style={{ background: "linear-gradient(0deg, #111111, #111111), #FFFFFF" }}
      className="min-h-screen text-white overflow-x-hidden"
    >
      <Navigation />

      <main className="container mx-auto px-4 max-w-3xl pt-40 pb-24">
        <h1 className="text-white text-4xl md:text-5xl font-medium font-general-sans mb-4">
          Terms of Service
        </h1>
        <p className="text-[rgba(248,250,252,0.4)] text-sm font-inter mb-16">
          Last updated: April 10, 2026
        </p>

        <div className="space-y-12 text-[rgba(248,250,252,0.75)] font-inter text-[15px] leading-relaxed">

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">What Splito is</h2>
            <p>
              Splito is an expense-splitting tool for groups and travelers. It lets you log
              shared costs in multiple currencies, lock exchange rates at the time of the
              expense, and settle balances via on-chain transactions on Stellar and Aptos.
            </p>
            <p className="mt-3">
              Splito is currently at MVP stage. The service is provided as-is. Things may
              break, change, or be discontinued. We&apos;ll be transparent about significant
              changes.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">Using the service</h2>
            <p>By using Splito, you agree to:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Provide accurate information when creating an account.",
                "Use the service for lawful purposes only.",
                "Not attempt to access, disrupt, or reverse-engineer the service.",
                "Keep your account credentials secure.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#09D1FD] mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">Exchange rates</h2>
            <p>
              Exchange rates in Splito are entered by you at the time of the expense. We
              store and display the rate you set — we do not pull live market rates or
              modify your entries. The accuracy of the rate you record is your
              responsibility. Splito does not provide foreign exchange services or
              financial advice.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">On-chain settlement</h2>
            <p>
              When you settle a balance on Stellar or Aptos, you are initiating a
              blockchain transaction directly from your wallet. These transactions are:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Irreversible — blockchain transactions cannot be undone once confirmed.",
                "Your responsibility — you control your wallet and private keys. We never have access to them.",
                "Public — transaction data is visible on the public blockchain.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#09D1FD] mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Splito is not a financial institution, payment processor, or money transmitter.
              We provide the interface; the settlement happens between you and the blockchain.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">No financial advice</h2>
            <p>
              Nothing in Splito — balances, exchange rates, settlement amounts — constitutes
              financial, legal, or tax advice. Consult a qualified professional for anything
              that matters financially.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">Availability &amp; changes</h2>
            <p>
              We&apos;re an early-stage project. We do not guarantee uptime, data durability, or
              feature continuity. We reserve the right to modify, suspend, or shut down
              the service at any time. If we make a breaking change that affects your data,
              we&apos;ll do our best to give you notice and an export option.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">Limitation of liability</h2>
            <p>
              Splito is provided &ldquo;as is&rdquo; without warranty of any kind. We are not liable
              for losses arising from incorrect balances, failed transactions, exchange rate
              discrepancies, or any on-chain activity initiated through the service. Use
              it as a convenience tool, not as a source of financial truth.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">Your content</h2>
            <p>
              Expense data, group names, and other content you enter belongs to you. We
              use it only to operate the service. You can request deletion of your account
              and associated data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">Changes to these terms</h2>
            <p>
              We&apos;ll update this page when terms change meaningfully. Continuing to use
              the service after an update means you accept the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium font-general-sans mb-4">Contact</h2>
            <p>
              Questions or concerns:{" "}
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
