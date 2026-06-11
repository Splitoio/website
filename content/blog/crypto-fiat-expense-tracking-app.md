---
title: "The crypto+fiat expense tracking app your friend group has been missing"
description: "Your friend still owes you €80 from a trip six months ago. The reason isn't them - it's that no app tracks crypto and fiat in one group. Here's the fix."
date: "2026-06-12"
keyword: "crypto+fiat expense tracking app"
angle: "Why your international friends still owe you money (and what to do about it)"
format: "opinion-essay"
author: "Splito"
author_bio: "i'm part of the team building Splito. A Stellar Community Fund grant backed the bet that the worst part of group travel isn't tracking who owes what - it's that the debt never actually closes once your friends are in different countries holding different kinds of money."
draft: false
---

Your friend from the trip six months ago still owes you €80. You've thought about asking maybe fourteen times. You drafted the text once, looked at it, and deleted it. It's not the money. It's that asking feels like accusing a friend of forgetting, and they probably did forget, and now there's a small weird thing sitting between you that neither of you will mention. We build a **crypto+fiat expense tracking app**, so we spend a lot of time reading versions of this exact story, and the pattern is always the same: multiply that €80 by the three people from that trip who never quite settled, and you start to understand why "i'll pay you back" is one of the least reliable sentences in any friend group. The debt didn't survive because anyone's dishonest. It survived because nothing ever closed the loop, and the longer it stayed open the more awkward it got to close.

> **TL;DR:** International friends still owe you money because the debt never gets a clean closing moment - the tracker shows a balance but the money lives in different countries and different currencies, some fiat, some crypto, with no shared rail. A **crypto+fiat expense tracking app** that treats both kinds of money as equals in the same group, with the rate locked when you log each expense, removes the awkwardness by letting the debt actually settle.

It's almost never a fight. It's a slow fade where the balance just sits there. Here's why that happens, and what actually closes it.

## Why your international friends still owe you money

They still owe you money because the debt never gets a closing moment. The app tracks it perfectly, but tracking a debt and closing it are two different things, and every common tool does the first and skips the second. So the balance lives on a screen nobody opens, in a currency half the group doesn't hold, owed by people who'd pay in a second if paying were one tap instead of a project.

Think about what "settle up" actually asks of an international group. One person has to pick a rail. Then everyone else has to have that rail. [Venmo only works between US accounts](https://help.venmo.com/cs/articles/international-payments-vhel369), Zelle needs a US bank, Wise wants an account on both ends and takes a few days to clear. The moment your group spans countries, there's no rail everyone already shares, so settling stops being an action and becomes a negotiation about *how* to settle before anyone can actually do it. Most people don't have the energy for that over €80, so the balance just sits.

And the people living this know exactly how it feels. From a Splitwise reviewer, the cleanest description of the whole problem:

> "Our friend group has people in 3 different countries. Venmo doesn't work for half of them and Splitwise just shows the balance but doesn't help you actually pay."

That's it. The app shows the balance and stops. The part where money actually moves - the only part that makes the awkwardness go away - is left as your problem, in a group where no two people necessarily bank in the same country.

## The awkwardness is a product gap, not a personality flaw

It's tempting to read an unpaid debt as a story about your friend. They're flaky, they're cheap, they forgot. Sometimes, sure. But when the *same* thing happens with different people on every trip, it stops being about the people and starts being about the tool. The friction is manufactured by software that assumes settlement is somebody else's job.

You can see the social cost leak out in reviews of these apps. People don't just complain about features - they complain about what the app does to their relationships:

> "any friend of mine who suggests using this app is disinvited to future hangouts."

That's a one-star review, and it's funny, but it's pointing at something real. The act of chasing a balance - the reminders, the "hey just circling back," the nudges - costs social capital. Every time the app makes *you* do the collecting, it's spending your friendship to cover for its own missing settlement layer. A tool that closed the loop itself would never make you send that text. The nudge that damages the friendship only exists because the payment never happened on its own.

The fix isn't a better reminder system. More nudges is just more awkwardness, automated. The fix is to remove the reason the nudge exists, which is the unclosed debt, which means the app has to actually move the money - in whatever form the people involved actually hold.

## Why a crypto+fiat expense tracking app has to hold both at once

Here's the part the category has mostly ignored. A modern friend group doesn't hold one kind of money. One person spent euros on the villa. One has been paid in USDC for two years and thinks in stablecoin. One's in Singapore on SGD. One keeps a little SOL around. When you try to settle that group, you're not converting one currency to another - you're trying to reconcile fiat and crypto at the same time, and almost every tool forces you to pretend one side doesn't exist.

Fiat-only trackers make the crypto holder convert to dollars, guess a rate, and settle on a rail that doesn't reach half the group. The handful of crypto-native splitters do the opposite: they assume everyone's on one chain and ignore the friend who just wants to pay in euros. Both are half a product for a group that's actually mixed. People have been doing the reconciliation by hand for years because nothing did it for them:

> "we need to paid in MXN, so I need to convert manually each debt in each currency."

That's a person doing FX math by hand, per debt, per currency, because the tool wouldn't hold both kinds of money at once. A real **crypto+fiat expense tracking app** treats crypto and fiat as equals in the same group: each expense logged in the currency it was actually paid, balances shown side by side in their native currencies, no forced conversion into a base currency that flattens half the group. The euro spender sees euros. The stablecoin holder sees USDC. The math still nets to one number per person.

## Why does the rate have to lock the moment you log the expense?

Because if it doesn't, the debt rots. The number you agreed to drifts with the market while the balance sits unpaid, so settling an old debt means re-arguing which rate to use. In 2025 the euro swung from about 1.03 dollars to 1.18, over 10% in months. Freeze the rate at log time and that drift can't happen.

There's a reason old debts feel impossible to settle fairly: the number changed. If your friend owed you €80 six months ago and you finally settle today, the dollar value of that €80 has moved, and now there's a second tiny argument hiding inside the first one - whose rate do we use, then or now? Crypto makes this sharper, because a balance owed in a token can drift a lot in six months.

The fix is boring and it's the thing nobody ships: lock the exchange rate at the moment you log the expense and store it forever, so the debt can't rot while it sits. Someone in the wild asked for exactly this, unprompted:

> "I want to lock the rate when we log the expense."

That's a user describing the mechanism before any tool offered it. When the rate is frozen at log time, a six-month-old €80 debt is still worth exactly what it was worth the night you covered it - there's no drift to argue about, so settling late costs nothing and the "should it be the old rate or the new rate" conversation never starts. The reason this matters most for a mixed group is that locking the rate per expense is what lets crypto and fiat coexist in one ledger without one side getting re-flattened every time someone opens the app. We wrote the full version of why every multi-currency app gets the rate wrong in our [breakdown of the exchange rate argument](/blog/exchange-rate-lock-expense-splitter); the relevant part here is that a frozen rate is what makes an old debt closeable at all.

## What a crypto+fiat expense tracking app changes about the money your friends owe you

You don't strictly need a new app to stop the slow fade. You need to make settling a one-step action instead of a multi-step negotiation, and you need to do it before the rate and the goodwill both drift. Practically:

Close the loop fast. The awkwardness compounds with time. A debt settled the week of the trip is a non-event; the same debt six months later is a whole conversation. Whatever tool you use, settle while the trip is still a shared memory, not an accusation.

Agree on the rail per pair, not for the whole group. The mistake is trying to force nine people onto one payment method. You don't need that. You need each pair to settle on something that works for those two people - and if even one of you holds a stablecoin, that pair's cross-border problem is already solved. A Wise transfer takes 1 to 4 business days and needs an account on both ends; an international PayPal transfer can skim 3 to 5% in fees and FX spread. [USDC moves internationally in seconds for fractions of a cent](https://www.circle.com/usdc) regardless of who banks where, which is the difference between a debt that closes tonight and one that waits on the slowest banking app in the group.

Use a tool that holds both kinds of money and locks the rate at log time. This is what we built [Splito](https://splito.io) to do, and it's the category most people don't realize exists yet: log every expense in the currency it was actually paid, the rate locks the moment you log it, crypto and fiat balances sit side by side in their native currencies, and you settle on-chain from the same screen in seconds. The debt gets a real closing moment - a transaction hash, not a "marked as paid" checkbox nobody trusts. For a worked example of a mixed group doing exactly this, see [a 9-person trip settled in USDC](/blog/9-person-group-trip-settled-in-usdc), and for the step-by-step method, [how to split expenses across countries with a crypto and fiat group](/blog/split-expenses-across-countries-crypto-fiat).

The €80 your friend owes you isn't really about €80. It's about a debt that never got a clean way to close, in a group that holds money in five different forms across three different countries. Give it a closing moment - one rail that reaches everyone, a rate that didn't move, a settlement that takes seconds - and the awkwardness has nowhere left to live. You stop being the person who has to send the text, because there's nothing left to send it about.

## About the author

i'm part of the team building [Splito](https://splito.io). A Stellar Community Fund grant backed the build, and we spend most of our time reading how international friend groups actually fall apart at the money step - across r/digitalnomad, Splitwise reviews, and our own trips. The thing that kept showing up wasn't fights. It was debts that never closed because the group held both crypto and fiat and no tool would hold both at once. That's the one we built for.

## Sources

- [Venmo international payments support](https://help.venmo.com/cs/articles/international-payments-vhel369)
- [Circle - what is USDC](https://www.circle.com/usdc)
- [Circle - what are cross-border payments](https://www.circle.com/blog/what-are-cross-border-payments)
- [PayPal money hub - paying friends after a group trip](https://www.paypal.com/us/money-hub/article/paying-friends-after-group-trip)
- [SquadTrip - how to collect money for a group trip](https://www.squadtrip.com/guides/how-to-collect-money-for-a-group-trip/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "The crypto+fiat expense tracking app your friend group has been missing",
      "description": "Your friend still owes you 80 euros from a trip six months ago. The reason isn't them - it's that no app tracks crypto and fiat in one group. Here's the fix.",
      "datePublished": "2026-06-12",
      "keywords": "crypto+fiat expense tracking app",
      "author": {"@id": "#author"},
      "mainEntityOfPage": "/blog/crypto-fiat-expense-tracking-app"
    },
    {
      "@type": "Person",
      "@id": "#author",
      "name": "Splito",
      "description": "Part of the team building Splito, a crypto and fiat expense tracking app that settles on-chain. A Stellar Community Fund grant backed the build.",
      "url": "https://splito.io",
      "sameAs": ["https://x.com/anshstwt"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do your international friends still owe you money?",
          "acceptedAnswer": {"@type": "Answer", "text": "The debt never gets a closing moment. The app tracks the balance but doesn't move the money, and once a group spans countries there's no payment rail everyone already shares - Venmo is US-only, Zelle needs a US bank, Wise takes days. So the balance sits in a currency half the group doesn't hold, owed by people who'd pay if paying were one tap."}
        }
      ]
    }
  ]
}
</script>
