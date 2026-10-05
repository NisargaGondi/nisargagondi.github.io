---
layout: page
title: Samsung PRISM · Bixby Smart Notifications
description: On-device notification triage at 93.15% accuracy, built during undergrad
img: assets/img/fillers/pixel_retro_computer.gif
importance: 1
category: industry
github: NisargaGondi/notification_collector
logo: /assets/img/projects/samsung_prism_logo.png
logo_alt: Samsung PRISM
---

<p class="proj-meta">Samsung PRISM · Bangalore · March – September 2024</p>

Fourteen buzzes in one lecture. One was a friend. The other thirteen were coupons. (the coupons won.)

That is the whole product problem. A phone already knows something arrived. It does not know whether you should look up. Samsung PRISM let me spend a semester teaching Bixby the difference, on device, with other people's notifications and the privacy constraints that implies.

A Flutter collector pulled **10,000+** real notifications through NotificationListenerService. A Random Forest sorted them into urgent, social, promo, and noise, **93.15%** accurate. We shipped the model as **ONNX** so inference never left the phone. A slightly smarter network that answers after you have already checked the lock screen is not smarter.

The deck lived on a laptop I no longer own, so the charts below are rebuilt from the numbers that survived. The overall accuracy is real. The per-class bars are reconstructed around it. Not ideal. Still better than another confession paragraph.

<div class="proj-grid">
<figure class="proj-figure">
  <img src="{{ '/assets/img/projects/prism_accuracy.png' | relative_url }}" alt="Per-class accuracy around 93.15 percent overall" loading="lazy">
  <figcaption>Overall 93.15%. Per-class bars reconstructed around that number.</figcaption>
</figure>
<figure class="proj-figure">
  <img src="{{ '/assets/img/projects/prism_volume.png' | relative_url }}" alt="Notification volume across four buckets totaling over 10,000" loading="lazy">
  <figcaption>The mix we collected. Promo and noise were not shy.</figcaption>
</figure>
</div>

Random Forest over something deeper was the point, not a compromise I apologized for later. On a phone, fast and right now beats slightly smarter after the moment has passed. Four buckets. The model does not need to understand your life. It needs to stop the coupons from winning the lock screen.

**Links:** [Collector code](https://github.com/NisargaGondi/notification_collector)
