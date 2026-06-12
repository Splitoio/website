---
title: "A 9-person group trip settled in USDC: the exact breakdown"
description: "9 people, 3 countries, 47 expenses, $4,200. Here's how the whole trip gets tracked across four currencies and settled in USDC, with zero bank transfers."
date: "2026-06-12"
keyword: "9-person group trip settled in USDC"
angle: "The 9-person group trip expense breakdown, settled in USDC"
format: "how-to"
author: "Splito"
author_bio: "i'm the founder of Splito. i built it after watching the same trip-end money mess play out in every international friend group i know - and after a Stellar Community Fund grant backed the bet that on-chain settlement could close the loop Splitwise leaves open."
draft: false
---

A 9-person group trip settled in USDC sounds exotic until you see what it replaces. A normal trip ends the same way almost every time: the last dinner is paid, everyone hugs at the airport, and then nine people scatter to three or four different countries. Within a week, the group chat is a balance-cleanup thread. "do you have Venmo?" "Venmo doesn't work here." "i'll Wise it to you when i'm back." Two weeks later, one or two people still haven't paid, and the organizer who fronted the hotel is out a few hundred dollars with no clean way to ask for it.

we built [Splito](https://splito.io) because this exact pattern keeps showing up in our own trips and in r/digitalnomad threads and Splitwise reviews, and a Stellar Community Fund grant backed the bet that the settlement step doesn't have to work this way. So this post is the walkthrough: a real-shaped 9-person, 3-country trip with 47 expenses and a $4,200 total, tracked across four currencies and settled on-chain in USDC with no bank transfers. Numbers are illustrative of a representative trip, but the mechanics and the on-chain costs are exactly what the app does today.

> **TL;DR:** A 9-person group trip settled in USDC means you track every expense in whatever currency it was paid, lock each exchange rate at the moment you log it, net everyone down to one balance, and settle on-chain in stablecoin. No Venmo, no Wise accounts, no two-week chase. The settlement itself costs a few cents and clears in seconds.

This is the part of "split expenses crypto" that the [comparison of crypto expense splitters](/blog/split-expenses-crypto) doesn't fully walk through: not which app, but what the actual end-to-end trip looks like from first expense to final settled balance.

## Why settle a group trip in USDC at all

The honest answer: USDC isn't the point, it's the rail. The point is that the trip ends with everyone square in one move instead of nine people negotiating four payment apps across three jurisdictions.

Here's the problem stablecoin settlement actually fixes. When a group spans countries, the fiat rails stop overlapping. [Venmo's international support](https://help.venmo.com/cs/articles/international-payments-vhel369) only lets US accounts pay each other, Zelle is US-bank-only, and Wise needs an account on both ends with a 1 to 4 day clear. SquadTrip, a group-trip payment service, says it plainly in [its own guide on collecting money](https://www.squadtrip.com/guides/how-to-collect-money-for-a-group-trip/): "avoid Venmo or Zelle for groups over 5 people - there's no tracking, no reminders, and disputes become personal." A 9-person international group is exactly the case those rails were never built for.

A market-research scan of how this segment talks about the problem surfaces the same complaint over and over. One Splitwise reviewer put it directly:

> "Our friend group has people in 3 different countries. Venmo doesn't work for half of them and Splitwise just shows the balance but doesn't help you actually pay."

USDC sidesteps all of it. It's a dollar-denominated token that holds a fixed $1 value and moves on blockchain rails, so it settles internationally in minutes regardless of which country anyone is in. [Wego's travel blog](https://blog.wego.com/stablecoins-for-travel/) frames the same advantage for travel spend: stablecoins move across borders and time zones within minutes, without waiting days for a bank transfer. For a group split, that means the trip is over the moment the transaction confirms, not whenever the slowest person opens their banking app.

## Step 1: Log each expense in the currency it was actually paid

The first thing that goes wrong in a multi-country trip is forcing everything into one currency at entry. Don't. Log the Lisbon dinner in EUR, the Bangkok hotel in THB, the Singapore airport lounge in SGD, the USDC someone fronted for the villa deposit as USDC. Each expense keeps its native currency.

For a 9-person trip, a realistic spread of 47 expenses looks like this:

| Currency | Example expenses | Rough share of $4,200 |
|---|---|---|
| EUR | villa, two group dinners, train tickets | ~$1,900 |
| THB | hotel nights, street food, taxis, SIM cards | ~$1,300 |
| SGD | layover hotel, airport meals | ~$600 |
| USDC | villa deposit one person pre-paid on-chain | ~$400 |

Why native-currency entry matters: it's the only way to keep the record honest. The moment you convert at entry, you've baked in one person's rate guess, and you can't recover the real number later. Logging in the paid currency means the conversion is a separate, auditable step, not a silent assumption.

## Step 2: Lock the exchange rate at the moment of the expense

This is the step every other tracker skips, and it's the one that quietly costs groups the most.

When you log a foreign expense, the app should store the rate at that timestamp and freeze it. Most apps don't. They re-fetch today's rate every time they display the expense, so the same trip settled this week and settled next month gives two different totals. We cover why that data model is broken in depth in [the multi-currency expense splitting breakdown](/blog/expense-splitting-multi-currency); the short version is that an expense is a thing that happened at a moment, and its rate should be frozen at that moment.

There's a second silent cost here that has nothing to do with crypto: the rate your card charged isn't the interbank rate. [Bankrate's breakdown of foreign transaction fees](https://www.bankrate.com/personal-finance/foreign-transaction-fees-vs-currency-conversion-fees/) puts the typical foreign transaction fee at 1 to 3%, and if a terminal talked anyone into dynamic currency conversion, [the markup runs 3 to 12%](https://upgradedpoints.com/credit-cards/credit-card-foreign-transaction-currency-conversion-fees/) on that single charge. On a $4,200 trip, a 5% gap between the rate the app assumes and the rate someone's card actually charged is $210 floating around unaccounted for. Splito's timeLockIn freezes the rate per expense at log time so that gap is captured once and never re-litigated at settlement.

## Step 3: Let the balances net down to one number per person

With 47 expenses across four currencies and nine people, the pairwise math is a spreadsheet nobody wants to maintain. The app does it: every expense, in its frozen rate, rolls up into a single net balance per person, denominated in the settlement currency you pick - here, USDC.

This is the feature Splitwise users have been asking for since 2019 and still don't have: cross-currency netting that collapses "you owe me 20 GBP, i owe you 20 USD" into one clean number. When the denomination question disappears, the argument disappears with it. Nine people go from a tangle of partial cross-currency IOUs to one line each: this person owes 280 USDC, that person is owed 510 USDC.

## Step 4: Settle on-chain in USDC, in one move

Now the part that replaces the two-week WhatsApp thread. Each person who owes sends their net balance in USDC to the person who's owed, on-chain, from the same view where the balances live. No "do you have Venmo," no Wise account setup, no waiting on a wire.

The receipts make the case better than the pitch does. [USDC on Solana confirms in roughly 5 seconds](https://www.spark.money/tools/transfer-time/usdc/solana) with fees in the range of $0.0005 to $0.005 per transfer, and [eco's 2026 guide to sending USDC](https://eco.com/support/en/articles/15183708-how-to-send-usdc-networks-fees-and-wallet-steps-in-2026) puts Base on-chain fees under $0.05. Settle the whole 9-person trip and the total settlement cost is a few cents and a few minutes, against a $4,200 trip that would otherwise have cost 1 to 4 business days per Wise transfer plus whatever PayPal's international spread skimmed off each leg.

The transaction hash is the proof of payment. There's no "i forgot to mark it paid" state, because the chain marked it. The balance updates when the transfer confirms, not when someone remembers to tap a button.

## What about the friend who doesn't hold crypto

This is the real open edge, and pretending it away would be dishonest. In most 9-person groups, one or two people are comfortable with a wallet and the rest aren't. The crypto-curious member is who brings the others along, but a $40 dinner debt isn't worth a 30-minute wallet tutorial.

The honest current state: a group settlement share link lets a crypto-literate member settle on behalf of others, so the whole group doesn't need to onboard before the trip can close. The wallet-onboarding friction for the non-crypto majority is the part we're still actively reducing, not a solved problem we're going to oversell. What we won't do is add a fiat fallback - the whole point of the rail is that it works in every country, and bolting fiat back on re-imports the jurisdiction problem we started with.

## What you should actually do

If your group is fully US-based and travels domestically, you don't need any of this. Splitwise Pro plus Venmo is fine.

If your next trip spans countries and at least one person in the group already holds USDC or another stablecoin, the workflow above is the one that closes the loop: log in native currencies, lock the rate per expense, net to one balance, settle on-chain. The trip ends when the transaction confirms.

If nobody in your group touches crypto yet, track in a multi-currency tracker and settle via Wise, and know that the part that still hurts - collecting from nine people across three countries - is the part the on-chain rail is built to remove the day one of you is ready for it. [PayPal's own guide to paying friends back after a group trip](https://www.paypal.com/us/money-hub/article/paying-friends-after-group-trip) is a fair read on how much friction the fiat path still carries.

## About the author

i'm the founder of Splito. i've split enough multi-country trips across USDC, EUR, SGD, THB, and INR to be tired of every tool that tracks the debt and then leaves the actual settlement as somebody else's problem. Splito is the version that settles. A Stellar Community Fund grant backed the build.

## Sources

- [Venmo international payments support](https://help.venmo.com/cs/articles/international-payments-vhel369)
- [SquadTrip - how to collect money for a group trip](https://www.squadtrip.com/guides/how-to-collect-money-for-a-group-trip/)
- [PayPal money hub - paying friends after a group trip](https://www.paypal.com/us/money-hub/article/paying-friends-after-group-trip)
- [Wego - stablecoins for travel](https://blog.wego.com/stablecoins-for-travel/)
- [Spark - USDC transfer time on Solana](https://www.spark.money/tools/transfer-time/usdc/solana)
- [eco - how to send USDC: networks, fees, wallet steps in 2026](https://eco.com/support/en/articles/15183708-how-to-send-usdc-networks-fees-and-wallet-steps-in-2026)
- [Bankrate - foreign transaction fees vs currency conversion fees](https://www.bankrate.com/personal-finance/foreign-transaction-fees-vs-currency-conversion-fees/)
- [Upgraded Points - credit card foreign transaction and currency conversion fees 2026](https://upgradedpoints.com/credit-cards/credit-card-foreign-transaction-currency-conversion-fees/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "A 9-person group trip, settled in USDC: the exact breakdown",
      "description": "9 people, 3 countries, 47 expenses, $4,200. Here's how a group trip like that gets tracked across four currencies and settled on-chain in USDC, with zero bank transfers.",
      "datePublished": "2026-06-12",
      "keywords": "9-person group trip settled in USDC",
      "author": {"@id": "#author"},
      "mainEntityOfPage": "/blog/9-person-group-trip-settled-in-usdc"
    },
    {
      "@type": "Person",
      "@id": "#author",
      "name": "Splito",
      "description": "Founder of Splito, a multi-currency expense splitter that settles on-chain in USDC, XLM, SOL, and ETH. Built with backing from a Stellar Community Fund grant.",
      "url": "https://splito.io"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Why settle a group trip in USDC at all?", "acceptedAnswer": {"@type": "Answer", "text": "USDC isn't the point, it's the rail. The point is that the trip ends with everyone square in one move instead of nine people negotiating four payment apps across three jurisdictions. When a group spans countries, fiat rails like Venmo, Zelle, and Wise stop overlapping; USDC settles internationally in minutes regardless of country."}},
        {"@type": "Question", "name": "What about the friend who doesn't hold crypto?", "acceptedAnswer": {"@type": "Answer", "text": "In most 9-person groups, one or two people are comfortable with a wallet and the rest aren't. A group settlement share link lets a crypto-literate member settle on behalf of others, so the whole group doesn't need to onboard before the trip can close. Wallet-onboarding friction for the non-crypto majority is still being reduced, not solved."}}
      ]
    }
  ]
}
</script>
