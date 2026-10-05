---
layout: page
title: Exoplanet Detection Using ML
description: My first real ML project. I did not discover a planet, but I discovered a lot else.
img: assets/img/fillers/pixel_planet.gif
importance: 8
category: academic
---

<p class="proj-meta">BMSCE · April – May 2023 · Kaggle, on NASA Kepler KOIs</p>

A planet crossing its star dips the brightness by a fraction of a percent. Find the dip, find the planet. From a spreadsheet. In Bangalore. (woah.)

This was the first time I tried to do machine learning on something that was not a tutorial. Kepler objects of interest, from the NASA archive, the same table every Kaggle kernel starts from. Textbook data is clean. Kepler is not. **20%+** of the fields are missing, and the classes are wildly imbalanced. False positives outnumber planets. A model can look brilliant by predicting "not a planet" every time.

<div class="proj-grid">
<figure class="proj-figure">
  <img src="{{ '/assets/img/projects/exo_transit_curve.png' | relative_url }}" alt="Phase-folded Kepler transit light curve" loading="lazy">
  <figcaption>The dip. Blink and you miss it.</figcaption>
</figure>
<figure class="proj-figure">
  <img src="{{ '/assets/img/projects/exo_koi_imbalance.png' | relative_url }}" alt="Kepler KOI class imbalance" loading="lazy">
  <figcaption>False positives outnumber planets. Accuracy is a trap.</figcaption>
</figure>
</div>

<figure class="proj-figure">
  <img src="{{ '/assets/img/projects/exo_period_radius.png' | relative_url }}" alt="Confirmed Kepler planets and false positives by period and radius" loading="lazy">
  <figcaption>Confirmed planets inside a cloud of false positives.</figcaption>
</figure>

My first model hit gorgeous accuracy by saying no, every time. Technically correct. Astronomically useless. The period-radius plot is the same joke in two axes. The planets are in there. So is everything that is not a planet, sitting on top of them.

KNN and Random Forest, judged on recall instead of the accuracy number that had been lying to me. **+15%** on the minority class. No new planets were discovered. The ML engineer, however, was.
