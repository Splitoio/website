---
title: "Multi-currency expense splitting is broken in every app I've tried"
description: "Every multi-currency expense splitting app gets the same three things wrong, and has for over a decade. Here's what they miss and what the right math looks like."
date: "2026-05-05"
keyword: "expense splitting multi currency"
author: "Splito"
draft: false
---

I've used five multi-currency expense splitting apps. Every one of them gets the same three things wrong, and they have been getting them wrong for over a decade. The Splitwise feedback board has a request from 2014 for proper multi-currency handling. It is still open. The thread that complains about exchange rates being off by 5% is from 2019, has hundreds of votes, and the last official reply is from 2015.

This is the part nobody who builds these apps wants to talk about. Multi-currency expense splitting isn't hard because the math is hard. It isn't hard because the data isn't available. It's hard because every app has the wrong mental model of what an expense actually is. The fix is the same in every case, and once you see it, you can't unsee how broken the current generation of apps is.

I'm the founder of [Splito](https://splito.io). I built it after a trip to Bangkok where four of us tried to settle baht expenses in INR and the group chat melted down for a week. So yes, I have a horse in this race. But the issues below are independent of any product. If you're doing multi-currency expense splitting today, with any tool, you've probably hit at least two of these.

## Multi-currency expense splitting fails on the interbank rate

Every app that auto-fetches an exchange rate fetches the wrong one. They pull from Open Exchange Rates or a similar API, which returns the interbank mid-market rate. That is the rate banks use to settle with each other at scale. It is not the rate you got when you tapped your card in a Bangkok 7-Eleven.

The rate you actually paid included a card network spread (Visa and Mastercard add 0.2 to 1%), an issuer markup (anywhere from 0 to 3% depending on the card), and if you used a foreign ATM, a withdrawal fee, a conversion margin, and a flat fee on top. The total gap between the interbank rate and what your card actually charged you runs 2 to 10%, depending on the card and country.

This was documented exactly on the Splitwise feedback board by Andrey Rachev in 2019. His exact words: "I don't know how the pro app gets the conversion rate but it is different with 5% comparing to the Google conversion rate." The thread has hundreds of votes. Branislav Gerzo posted on the same thread in late 2023: "Voting has closed for such an important feature. Without this, currency conversion is not really usable, payer always pay more than official exchange rate."

The fix is trivial. Let users override the rate with the rate from their card statement. The reason the apps don't ship it is that auto-conversion is the marquee Pro feature, and letting users override implies that the auto rate is wrong.

A 5% gap doesn't sound like much until you do the math. Two-week trip, $2,000 of group spend, four people. A 5% gap silently misallocates $100 across the group. Somebody pays $25 more than they should. Nobody can prove who, because the app only shows the converted total.

## The historical rate problem

This one is worse, and it's caused by a basic data model bug.

When you log an expense in a foreign currency, the right thing to store is: the amount, the currency, the timestamp of the spend, and the rate at that timestamp. That gives you a complete record. You can re-render it in any currency at any future point. The rate is fixed.

What most apps store is: the amount and the currency. The rate gets applied at display time, using whatever today's rate is. This is fine until the rate moves, which is to say, always.

Here's a real example. A Splitwise user named Shlomo wrote on the feedback board that the gap between "the real historic exchange rate which was used to charge our cards back then and the current exchange rate Splitwise used for ISK to USD conversion resulted in one of my friend paying over $100 more than she should have." The app applied today's rate to a six-month-old expense. The friend ate the cost and didn't notice for weeks. By the time anyone did, asking for the difference felt insane.

A trip is a sequence of spends, each at a specific moment, each with a specific rate. Treating the rate as a function of "now" instead of a function of "when this happened" turns the app into a slot machine. The exact same trip, settled today vs. next month, gives different totals. Nobody designed it this way deliberately. They built the simplest thing and shipped it, and the bug compounds quietly across every currency-volatile pair.

## Cross-currency netting that no app handles

There's a Splitwise feature request from March 2019 by a user named Lauren R. The text is short. "If I owe my friend 20GBP and she owes me 20USD, we should be able to convert that to a single currency."

This is one of the simplest features you can imagine. Net the debts across currencies. Pick a settlement currency. Show one number per pair. The math is two lines of code. The thread has hundreds of upvotes. It is now seven years old. The same request appears on the same feedback board in 2018 from a different user, in the context of a 10-person trip with several currencies. Same answer from the company, which is no answer.

Every multi-currency expense splitting app I've tested handles this the same way: it doesn't. You see two debts, in two currencies, between the same two people. You're left to do the netting in your head, which means picking a rate, which puts you back to the first two problems.

If your group has spend in three currencies, the pairwise dashboard becomes a small spreadsheet. Splid handles this best, with running totals that update across currencies. Most don't.

## Settlement is the part most multi-currency expense splitting apps skip

Even if the three problems above were solved, you'd still hit the settlement wall. None of these apps move money. You finish the trip, the app shows you "you owe Sarah €120 and she owes you $90," you settle on the totals, and now you have to actually transfer the money.

Splitwise integrates Venmo (US-only) and Tink (EU-only). Tricount is owned by bunq, an EU bank, and works best for SEPA users. Every other app punts entirely. The PilotPlans review of Splitwise put it bluntly in 2024: "There's no way to pay your friends directly via the app. If you have PayPal or Venmo installed, you will be directed to the app. If your country doesn't support either, it's just cash."

For an international group, settlement is a separate problem with its own friction. PayPal charges around 5% plus an FX spread for international transfers. Wise is cheaper but takes 1 to 4 business days and requires a Wise account on both ends. Bank wires take longer and cost more. Cash works if you'll see the person again.

This is where the rates question comes back around. Once you settle externally, you've converted again, at a third rate, with another spread. The total cost of a multi-currency trip isn't just the trip. It's the trip plus two layers of rate spread plus whatever the settlement rail charges.

## What multi-currency expense splitting should look like

An app that actually worked would do four things, none of which are hard.

Store the rate at the moment of spending, not the moment of display. This is a one-line schema change. Every other rate fix follows from this.

Let users override the auto rate with the rate from their card statement. The auto rate is a default, not a truth claim. Users who care about accuracy will fix it. Users who don't will accept the default. Either way, nobody is forced to argue at the end of the trip.

Net debts across currencies in the dashboard. Pick a settlement currency per group. Show one number per pair. The Lauren R feature.

Settle in something that works internationally. This is what I built Splito for. The app tracks multi-currency expenses with the rate locked at the moment of spending, and it settles on Stellar, which works from any country, costs sub-cent, and clears in seconds. If your group is comfortable with a wallet, settlement stops being a separate problem.

If your group isn't crypto-native, Tricount with Wise is still a fine answer for the tracking-then-settle workflow. Splid is the best of the trackers if you want a no-account option. Splitwise Pro is fine if your trip is mostly in one currency. The thing none of them do is solve the underlying mental model. They store amounts and apply rates at display time, and you live with the consequences.

## What you should actually do

If your trip is single-currency or close to it, any of the apps work.

If your trip is multi-currency and your group lives in the same country, Tricount or Splid for tracking, then settle once at the end via your local rail (Wise, SEPA, ACH).

If your trip is multi-currency and your group lives in different countries, you have three options. Tricount plus Wise transfers. Splid plus PayPal (and accept the spread). [Splito](https://splito.io) if your group will use a wallet.

The thing to focus on when you're picking a tool is rate timing. Ask: when does the app fetch the rate, and what does it do when the rate moves? If the answer is "we fetch the rate every time we display the expense," that app will silently misallocate money on you. Pick something that locks the rate at the moment of spending, or accept that you'll be reconciling manually at the end of every trip.

Multi-currency expense splitting is not a hard problem. It is a problem that nobody who can actually fix it has cared enough to fix, for over a decade. That gap is the entire reason a category like Splito exists. If you've already tried two apps and given up, you're not the problem. The apps are.

For more on this, the [Splitwise alternative for international travelers](/blog/splitwise-alternative-international) post covers the broader competitive landscape and which app to pick for which situation.

## Sources

- [Splitwise feedback — currency rate 5% off Google's](https://feedback.splitwise.com/forums/162446-general/suggestions/15248577-currency-rate)
- [Splitwise feedback — historical exchange rate request](https://feedback.splitwise.com/forums/162446-general/suggestions/7710975-use-historical-exchange-rate-data-via-google-or-f)
- [Splitwise feedback — improve multi-currency handling (Vietnam trip)](https://feedback.splitwise.com/forums/162446-general/suggestions/6765166-improve-the-way-splitwise-handles-multi-currency)
- [Splitwise feedback — cross-currency netting request from 2019](https://feedback.splitwise.com/forums/162446-general/suggestions/3323194-currency-conversion)
- [Splitwise feedback — Pro broke historical conversions](https://feedback.splitwise.com/forums/162446-general/suggestions/13864530-make-the-currency-conversion-function-better)
- [Splitwise feedback — predetermined billing currency request](https://feedback.splitwise.com/forums/162446-general/suggestions/17686630-create-a-billing-currency-within-a-group)
- [PilotPlans — Splitwise settlement gap review](https://www.pilotplans.com/blog/splitwise-review)
- [Splid — multi-currency feature page](https://splid.app/english)
- [SquadTrip — Splitwise alternatives for group travel](https://www.squadtrip.com/guides/top-splitwise-alternatives-for-group-travel-expenses/)
