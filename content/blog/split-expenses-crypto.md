---
title: "Split expenses crypto: what actually works in 2026 and what doesn't"
description: "Seven apps now let you split expenses and settle in crypto. Most pick a single chain and hope your friends are on it. Here's what each one actually does."
date: "2026-05-05"
keyword: "split expenses crypto"
author: "Splito"
draft: false
---

There is a feature request on the Splitwise board that asks for Bitcoin settlement. It was posted in 2013. It has 647 votes. Splitwise last replied to it in 2015 with the words "on our list of possible improvements," and then never wrote on it again. The request is now older than the iPhone X. It has been ignored through one full crypto bull run, one bear, and most of a second cycle. It is the single oldest unresolved request on their feedback board.

That gap is the entire reason "split expenses crypto" is now a category instead of a curiosity. If you've been looking for an app that lets you split a trip or a dinner with friends and actually settle on-chain, you've probably noticed there are seven of them now, and none of the listicles bother to explain what's different between them. Most of them are single-chain product pages with three lines of marketing copy. So this post is the comparison I wish existed when I started building Splito.

I'm the founder of Splito. I'll mention the product once near the end. The rest is the actual landscape.

## Why split expenses crypto became a category at all

The first attempt at this was a project called Lndr by Blockmason. It launched in 2018, billed itself as "the Venmo of the blockchain," and required both parties to have an Ethereum wallet, plus mutual on-chain confirmation for every debt. Settlements happened on Ethereum L1, which meant a $5 dinner split could cost $10 in gas during a busy week. The product was effectively dead by 2020 and fully dark by 2024.

Lndr proved two things. First, the demand exists. The 647-vote Splitwise thread is not unique. Every crypto-native friend group has hit the same wall: you've all got wallets, you've all got USDC, but the app you use to track who owes what has no idea any of that exists. Second, the unit economics had to change. On Ethereum L1 with $20 gas, no one is settling a $30 lunch. On Stellar with sub-cent fees, on Solana, on Base, on Aptos, settling small balances is finally cheaper than the FX spread Splitwise charges Pro users.

That's the moment we're in. The unit economics fixed themselves, and seven products showed up in the gap.

## The seven apps that let you split expenses in crypto

Here's what each one does, what chain it's on, and the structural tradeoff it's made. I've used or tested all of them. None of these are ranked. They solve slightly different problems.

**Divide** ([divide.cash](https://divide.cash)) settles in USDC on Ethereum L2s: Optimism, Base, Arbitrum. Tracks the expenses, calculates the most efficient netting, and charges $1 per settlement. The pricing is honest. The structural choice is single-currency settlement, which is fine if your whole group is happy in USDC, less fine if some of your friends prefer SOL or APT or want to settle in a non-stablecoin.

**HyperSplit** ([hypersplit.app](https://www.hypersplit.app)) does receipt-scanning, AI-itemizes the bill, and settles in USDC on Base. Apple Pay is the on-ramp, which means it leans American. If you're a US iPhone group splitting a restaurant bill, it's smooth. If your group is half in India and half in Portugal and three different chains, it's not the right tool.

**SplitPool** ([splitpool.app](https://splitpool.app)) is Solana-only. The execution is clean, the netting is on-chain, the wallet UX is light. If your group is already in the Solana ecosystem, this is a fine pick. The single-chain decision is a real cost outside that group.

**SolSplitter** ([solsplitter.com](https://solsplitter.com)) is the second Solana-only entrant. Targets DAOs and crypto-native friend groups directly. Same structural tradeoff as SplitPool. It's good if you're on Solana and breaks if you're not.

**SplitBillEz** ([splitbillez.com](https://www.splitbillez.com)) runs on Shardeum, which is an exotic chain even by crypto standards. Pure gas-fee settlement. The product works. The chain choice will rule it out for almost everyone outside Shardeum's small validator community.

**Mobichain** ([mobichain.co](https://mobichain.co)) supports multiple tokens (BTC, ETH, USDT, TRX) and uses a "pool" model where each member's share is deducted from their wallet into a shared pool, then released. It's closer to a group wallet than an expense splitter. Useful for some groups, friction for others. Pre-funding the pool is an extra step Splitwise doesn't have.

**Settler** is a Telegram Mini App. TON chain, USDT on TON. Non-custodial, on-chain verification auto-marks debts as settled. The hard limit: it lives inside Telegram. If you're not in TG, the app doesn't exist for you. TON is also a niche chain, useful in some pockets, irrelevant in most.

That's the consumer side. On the business side, **Request Finance** does invoice and payroll in stablecoins for crypto teams, but starts at $250 a month and has zero ad-hoc friend-group expense splitting. It's a different category. Mentioning it here only because people sometimes lump it into the same search.

## The pattern across all of them

If you stare at the list above for ten seconds, the pattern is obvious. Six of seven crypto expense splitters are single-chain. The chain they pick is the chain the founder uses, or the ecosystem grant they applied for. The result is a market where every product implicitly demands that your entire friend group be on the same chain as the founder.

Real friend groups don't work that way. The friend who got into crypto early holds ETH on mainnet. The one who showed up in 2024 is on Solana because that's where the meme coins live. The one who's actually using it day-to-day is in stablecoins on Base or Arbitrum because gas is cheap. The one who works in DeFi is on whatever chain pays best this month. If you split a trip with these four people, single-chain settlement asks three of them to bridge their funds, sometimes paying a 0.5% bridge fee plus gas on both sides.

This is the mistake I tried to avoid when I built [Splito](https://splito.io). Stellar is live today, Aptos works, Solana and Base are queued. The reason for picking that mix isn't to look impressive on a launch page. It's that real groups have funds on different chains and a split-expenses app that picks one of them is half a product.

## What about the FX problem these apps actually solve

Here's the part that nobody on the crypto side talks about loudly enough. The reason "split expenses crypto" is interesting isn't really crypto. It's that crypto stablecoins sidestep the entire FX-spread mess that Splitwise and Tricount can't fix.

A user named Andrey Rachev wrote on the Splitwise feedback board in 2019: "I don't know how the pro app gets the conversion rate but it is different with 5% comparing to the Google conversion rate." He's right. Splitwise pulls the interbank mid-market rate. Your card pays the Visa or Mastercard rate plus your issuer's spread. The gap is 2 to 10%. On a $2,000 group trip, 5% is $100 silently misallocated.

Now do the same trip on a crypto stable. Everyone pays in their local card, logs the expense in baht or pesos or euros, the app converts at the rate of the day to USDC. At settlement, the only number anyone owes anyone else is denominated in USDC. Going from USDC back to whatever your home rail is, that conversion is your problem, not the group's. The group is square the moment the on-chain transaction confirms.

Tom Voirol, on a Splitwise feedback thread from 2014, described a Vietnam trip with four people and three currencies. His exact words: "once it came to settling it all turned bad. The interface is very clearly made for single currency." That post is from before the iPhone 6. Eleven years later, the same thread still has new comments on it. The reason settlement on a stable rail solves it is that you compress the entire FX argument into one moment, on-chain, with a rate everyone can verify.

This is the actual pitch. Crypto settlement isn't the point. The point is "the rate argument is over and the wire takes two seconds." Crypto is the rail that makes both true at once.

## Cross-currency netting is the feature you didn't know you wanted

There's another Splitwise feedback request, posted in March 2019 by a user named Lauren R. The text is short. "If I owe my friend 20GBP and she owes me 20USD, we should be able to convert that to a single currency."

This is a two-line code change. It is also the most-voted multi-currency feature request on the Splitwise board. Seven years later, still not built. Splitwise picks one currency to display, hides the rest, and you end up doing the netting in your head with a rate you didn't choose.

Crypto-native splitters have a structural advantage here because you can settle in a stable, period. The denomination question goes away. Every debt collapses to USDC at the moment of spending. The dashboard shows one number per pair. The Lauren R feature comes free with the architecture. None of the seven crypto apps above advertise it, because to them it's the obvious thing. From the Splitwise side it's been an open ticket since the year of the Apple Watch Series 4.

## What you should actually do

If your friend group is fully on Solana, **SplitPool** or **SolSplitter** are the right answer. Same chain, fast, cheap, no bridging.

If everyone is on Base or an Eth L2 and happy with USDC, **Divide** or **HyperSplit** work well. Divide is more flexible, HyperSplit is faster for restaurant bills if you're all on iPhone.

If your group spans multiple chains, or you want optionality on which chain you settle on, [Splito](https://splito.io) is the option built for that case. Stellar today, more chains rolling. The point is your group doesn't have to agree on a chain to settle.

If your group is half-crypto and half-not, three friends with wallets and two who refuse to install one, none of these apps fit cleanly yet. That's the real open problem in the category and the one I think about most. For now, mixed groups are still in the Tricount-plus-Wise world.

If you're a crypto company looking for invoice and payroll, that's Request Finance, not any of these.

The thing to notice is that the seven crypto expense splitters are not really competing with each other. They're each picking a slice of the wallet/chain landscape and serving that slice. The actual competitor is Splitwise, which still doesn't move money outside the US, still pulls the wrong FX rate, still sits on the 647-vote request from 2013. That's the real opportunity. The category exists because the incumbent has had twelve years to build this and didn't.

For more on the broader Splitwise landscape see the [Splitwise alternative for international travelers](/blog/splitwise-alternative-international) post, and for why the FX math is broken across every multi-currency app see [the multi-currency expense splitting breakdown](/blog/expense-splitting-multi-currency).

## Sources

- [Splitwise feedback, 2013 Bitcoin settlement request, 647 votes](https://feedback.splitwise.com/forums/162446-general)
- [Splitwise feedback, currency rate 5% off Google's](https://feedback.splitwise.com/forums/162446-general/suggestions/15248577-currency-rate)
- [Splitwise feedback, Vietnam trip multi-currency settlement broken](https://feedback.splitwise.com/forums/162446-general/suggestions/6765166-improve-the-way-splitwise-handles-multi-currency)
- [Splitwise feedback, Lauren R cross-currency netting March 2019](https://feedback.splitwise.com/forums/162446-general/suggestions/3323194-currency-conversion)
- [Divide, USDC on Ethereum L2s](https://divide.cash/)
- [HyperSplit, Base and Apple Pay](https://www.hypersplit.app/)
- [SplitPool, Solana on-chain expense splitting](https://splitpool.app/)
- [SolSplitter, Solana DAO and crypto-native focus](https://solsplitter.com/)
- [SplitBillEz, Shardeum-based bill splitting](https://www.splitbillez.com/)
- [Mobichain, multi-token expense pools](https://mobichain.co/)
- [PilotPlans, Splitwise settlement gap review](https://www.pilotplans.com/blog/splitwise-review)
