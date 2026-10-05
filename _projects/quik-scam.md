---
layout: page
title: Quik SMS Scam Detection
description: Teaching an open-source messaging app to smell scams, offline, on your phone
img: assets/img/fillers/pixel_rain_city.gif
importance: 3
category: research
github: NisargaGondi/quik-sms-scam-ng
---

<p class="proj-meta">CyLab, Carnegie Mellon University · 2025 – Present</p>

The fake delivery text always arrives when you are actually waiting for a package. That is the whole scam. It does not need to be clever. It needs to show up on the day you ordered something, in the app you already trust, with a link that looks like the one you tapped last week.

At CyLab I work on the counter-move: scam detection that never leaves the phone. If a model has to read your texts to help you, it had better live next to them. Shipping the message to a server so a bigger model can squint at it is how you solve a scam by creating a different problem.

We forked [Quik](https://github.com/quik-sms/quik) instead of writing Yet Another Messenger Nobody Installs. Quik is an open-source Android app in Kotlin. People already use it. Study code stays on the fork. Their users did not sign up to be my test subjects.

Python handles the preprocessing. Git is the review workflow, because a model change that nobody can diff is just a vibe with a version number.

The part that humbled me was not the model. It was RCS-to-SMS "shadow groups." On paper, copy a chat. On Android, every vendor has a different opinion about where the copy should appear. Sometimes a third thread shows up. Nobody asked for the third thread. (send help.)

<div class="proj-shots">
<img src="{{ '/assets/img/projects/quik_inbox.png' | relative_url }}" alt="Quik inbox with the same conversation listed twice" loading="lazy">
<img src="{{ '/assets/img/projects/quik_thread.png' | relative_url }}" alt="Quik conversation view" loading="lazy">
</div>
<p class="proj-meta">Same chat, twice. The number is covered. That second row is the shadow thread.</p>

<pre class="proj-log">SmsKick: Quik became default SMS app. Syncing then kicking shadow groups...
SmsKick: Sync complete, sending kick to shadow groups
SmsKick: Found N shadow group(s) to kick
SmsKick: Sent group kick to shadow thread
SmsKick: All N shadow groups kicked successfully</pre>

On a OnePlus with **59,166** messages, the inbox was usable in **7.7 seconds** instead of about 11, and emoji reparsing moved off the main thread. The interesting failure is still not a wrong probability. It is a notification that lands in a thread the user has never seen.

**Links:** [My fork](https://github.com/NisargaGondi/quik-sms-scam-ng) · [Quik upstream](https://github.com/quik-sms/quik)
