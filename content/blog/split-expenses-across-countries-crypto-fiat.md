---
title: "How to split expenses across countries with a crypto and fiat group"
description: "Splitwise tracks a cross-border trip fine, then settlement breaks. How to split expenses across countries when some friends pay fiat and some pay crypto."
date: "2026-06-12"
keyword: "how to split expenses across countries crypto fiat"
angle: "Splitwise gets you 90% there; here's the last 10% that ruins every trip"
format: "how-to"
author: "Splito"
author_bio: "i'm part of the team building Splito. A Stellar Community Fund grant backed the bet that the settlement step of group travel - the part Splitwise leaves as somebody else's problem - shouldn't break the moment a group spans countries and currencies."
draft: false
---

We build Splito, so we read a lot of post-trip money messes, and almost all of them are the same shape. Splitwise gets you 90% of the way through a cross-border trip: it tracks every expense, does the splits, keeps the balance right. So the question that actually stumps people isn't tracking, it's how to split expenses across countries crypto fiat groups can actually settle. The trip ends, everyone flies home to four different countries, and the last 10% falls apart: one person paid the villa in euros, one wants to settle in USDC because that's what they hold, one's in Singapore dollars, and no single tool moves the money. The tracking was never the hard part. Settling across borders, when the group mixes fiat and crypto, is.

> **TL;DR:** To split expenses across countries with a mixed crypto-and-fiat group: log every expense in the currency it was actually paid, lock the exchange rate at the moment you log it, let the balances net to one number per person without forcing a base currency, then settle in whatever each person holds - stablecoin or fiat - from the same view. The break point is settlement, not tracking, and it only breaks if you convert too early or settle too late.

This is a how-to, not a product tour. Most steps below work in any decent multi-currency tracker. One - actually settling across borders - is where every fiat-only app stops, and where treating crypto and fiat as equals changes the answer.

## What you need before you start

Three things, and none of them is "get everyone on crypto."

You need a tracker that stores a per-expense exchange rate, not one that recomputes at display time. You need to agree, before the trip, on a settlement currency per pair or per group - it can be a fiat currency, a stablecoin, or both, depending on who's paying whom. And you need exactly one person in the group who's comfortable with a wallet. Not all of them. One. That person is the bridge for the crypto side; everyone else can stay in fiat if they want.

The mistake people make is treating "we'll figure out settlement later" as a step. It isn't. Later is when the rate has moved, the group chat has gone quiet, and the organizer is out $400. Decide the settlement rule up front, the same way you'd agree on the split rule up front.

## Step 1: Log each expense in the currency it was actually paid

Do not convert anything at entry. The Lisbon dinner goes in as EUR. The Bangkok hotel goes in as THB. The villa deposit one friend pre-paid on-chain goes in as USDC. Each expense keeps its native currency, untouched.

This matters because the moment you convert at entry, you've baked in one person's rate guess and can't recover the true number later. A friend group splitting across countries is, in practice, holding four or five kinds of money at once: fiat the locals spent, fiat the travelers' cards charged, stablecoin the crypto-literate member already had. The way to keep the record honest is to let every expense carry its own currency and make the conversion a separate, auditable step. People who've done this by hand know how bad the alternative is:

> "we need to paid in MXN, so I need to convert manually each debt in each currency."
>
> - Sergio Reyna, on the Splitwise feedback forum, January 2019

That's the workflow you're trying to avoid: a human doing FX by hand, per debt, per currency, every settlement cycle. The fix starts at entry. Log in the paid currency and the manual conversion never has to happen.

## Step 2: Lock the exchange rate at the moment you log the expense

This is the step that separates a tool that works from one that quietly costs you money. When you log a foreign expense, the rate at that timestamp should be captured and frozen next to it forever.

Most apps don't do this. They re-fetch today's rate every time they show the expense, so the same trip settled this week and settled next month produces two different totals. Why does that matter across countries specifically? Because cross-border trips settle slowly: 2 to 3 weeks often pass between the last dinner and the final payment, and that's exactly the window in which rates move. In 2025 the euro ran from about 1.03 dollars in January to roughly 1.18 by late May, a swing over 10%. On a €3,000 villa split eight ways, a 5% drift between split and settlement is about $150 nobody planned for, around $19 a head, which is precisely the size of debt friends get weird about. A rate frozen at log time can't drift while the group procrastinates. A rate recomputed at settlement will.

The same logic applies harder to the crypto side. If someone owes the equivalent of €120 in USDC and you settle a week later, an unlocked tool reconciles two moving rates at once: euro-to-dollar and USDC-to-euro. Lock the rate per expense at log time and that double-drift collapses to a fixed number. The point of holding USDC or XLM is to not convert to a base currency and back; locking the rate per expense is what lets crypto and fiat sit in the same ledger without one getting flattened every time you open the app.

## Step 3: Net the balances without forcing a base currency

With a dozen expenses across four currencies and a group of eight, the pairwise math is a spreadsheet nobody wants to own. The app should collapse it: every expense, at its frozen rate, rolls up to one net balance per person.

Here's the part most tools get wrong. They pick a single base currency, convert everything into it, and hide the rest - so the crypto holder sees their USDC re-expressed as dollars they didn't ask for, and the euro spender sees their euros flattened too. Treating crypto and fiat as equals means the opposite: balances shown side by side in their native currencies, with a settlement number per pair rather than a forced global conversion. The person who thinks in USDC settles in USDC. The person who thinks in euros sees euros. Nobody is forced into a base currency they don't hold.

This is the cross-currency netting Splitwise users have asked for since 2019 and still don't have: collapse "you owe me in one currency, i owe you in another" into one clean number, without pretending one side of the group doesn't exist. When the forced-conversion step disappears, the argument about whose rate is right disappears with it.

## Step 4: Settle in what each person actually holds

Now the 10% that breaks every fiat-only app: actually moving the money across borders.

The reason this is hard is that fiat rails are jurisdiction-locked. [Venmo's international support](https://help.venmo.com/cs/articles/international-payments-vhel369) only lets US accounts pay each other; Zelle is US-bank-only; Wise works but needs an account on both ends and clears in 1 to 4 business days. The moment your group spans countries, there's no fiat rail everyone shares. That's the structural wall - not tracking, not math, but the fact that the payment step assumes everyone banks in the same place.

Stablecoin is the rail that doesn't care where anyone banks. [USDC is a fully-reserved dollar-denominated token](https://www.circle.com/usdc) that holds a fixed $1 value and moves on blockchain rails, so it settles internationally in seconds regardless of country, for fees measured in cents rather than the 3 to 5% an international PayPal transfer skims. Industry write-ups on [stablecoins for cross-border payments](https://www.circle.com/blog/what-are-cross-border-payments) make the same point: settlement clears in minutes, not the 1 to 4 business days a bank wire takes, and isn't gated by which bank you use. For a group split, the trip is over the moment the transaction confirms, and the transaction hash is the proof of payment - there's no "i forgot to mark it paid" state, because the chain marked it.

Crucially, settling in crypto doesn't mean everyone settles in crypto. The crypto-literate member can settle their leg in USDC; a fiat-only friend can still Wise their share to whoever's collecting. The group doesn't have to be uniform - it just agrees, per pair, on a rail that works for those two people. For any pair where one holds stablecoin, the cross-border problem is already solved.

## Common things that go wrong

**You converted at entry.** If you logged the Bangkok hotel directly in dollars, you've already lost the real THB number and baked in a guess. Re-log in native currency if you can.

**You waited to settle.** The longer the gap between the trip and the payment, the more the rate drifts on any expense whose rate wasn't locked. Settle within days, or use a tool that froze the rate at log time so the delay costs nothing.

**You forced everyone onto one rail.** Trying to make the whole group use crypto, or the whole group use Wise, is how settlement stalls. Let each pair settle on what works for them. One crypto-comfortable person is enough to unlock the cross-border legs.

**You picked a base currency nobody agreed to.** If the app silently converts all balances to USD and one of your friends holds euros and another holds USDC, you've manufactured an argument. Use a tool that shows native currencies side by side instead.

**Nobody in the group holds crypto at all.** Then cross-border settlement genuinely still hurts - track in a multi-currency tracker and settle via Wise, and know the painful part (collecting from people across three countries) is exactly what the on-chain rail removes the day one of you is ready. [PayPal's guide to paying friends back after a group trip](https://www.paypal.com/us/money-hub/article/paying-friends-after-group-trip) is a fair read on how much friction the all-fiat path carries.

## What you should actually do

If your group is fully US-based and travels domestically, you don't need any of this. Splitwise plus Venmo is fine.

If your next trip spans countries and at least one person holds a stablecoin, the workflow above closes the loop Splitwise leaves open: log in native currencies, lock the rate per expense, net to one number per person without a forced base currency, settle in what each person holds. This is what we built [Splito](https://splito.io) to do in one view - log in any currency, the rate locks at that moment via timeLockIn, balances show side by side in their native currencies, and you settle on-chain in seconds. For why the rate has to lock at log time, see our [breakdown of the exchange rate argument](/blog/exchange-rate-lock-expense-splitter); for a worked example, see [a 9-person trip settled in USDC](/blog/9-person-group-trip-settled-in-usdc).

The tracking was always the easy 90%. The hard 10% is settling across borders with a group that doesn't all hold the same kind of money. Treat crypto and fiat as equals - same ledger, native currencies, rate locked at log time - and the 10% stops being the part that ruins the trip.

## About the author

i'm part of the team building [Splito](https://splito.io). A Stellar Community Fund grant backed the build, and we spend a lot of time reading how international friend groups actually fall apart at settlement - across r/digitalnomad, Splitwise reviews, and our own trips. The crypto-and-fiat-in-the-same-group case is the one nobody else was solving, so it's the one we built for.

## Sources

- [Splitwise feedback forum - manual multi-currency conversion (Sergio Reyna, 2019)](https://feedback.splitwise.com/forums/162446-general/suggestions/3323194-currency-conversion)
- [Venmo international payments support](https://help.venmo.com/cs/articles/international-payments-vhel369)
- [Circle - what is USDC](https://www.circle.com/usdc)
- [Circle - what are cross-border payments](https://www.circle.com/blog/what-are-cross-border-payments)
- [PayPal money hub - paying friends after a group trip](https://www.paypal.com/us/money-hub/article/paying-friends-after-group-trip)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "How to split expenses across countries when the group mixes crypto and fiat",
      "description": "Splitwise tracks a cross-border trip fine, then the settlement breaks. Here's how to split expenses across countries when some friends pay in fiat and some in crypto.",
      "datePublished": "2026-06-12",
      "keywords": "how to split expenses across countries crypto fiat",
      "author": {"@id": "#author"},
      "mainEntityOfPage": "/blog/split-expenses-across-countries-crypto-fiat"
    },
    {
      "@type": "Person",
      "@id": "#author",
      "name": "Splito",
      "description": "Part of the team building Splito, a multi-currency expense splitter that settles on-chain. A Stellar Community Fund grant backed the build.",
      "url": "https://splito.io",
      "sameAs": ["https://x.com/anshstwt"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What do you need before you start splitting expenses across countries with crypto and fiat?",
          "acceptedAnswer": {"@type": "Answer", "text": "You need a tracker that stores a per-expense exchange rate rather than recomputing at display time, an agreement on a settlement currency per pair or group (fiat, stablecoin, or both), and exactly one person comfortable with a wallet to bridge the crypto side. Everyone else can stay in fiat."}
        }
      ]
    }
  ]
}
</script>
