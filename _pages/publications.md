---
layout: page
permalink: /publications/
title: Publications
description: Peer-reviewed and accepted publications.
nav: true
nav_order: 2
---

<article class="pub-entry">
  <header class="pub-entry-head">
    <h2 class="pub-entry-title">Self-Evolving Defense: Continual Security Policy Learning for LLM Agents</h2>
    <p class="pub-entry-meta">Minh Nhat Le*, Nisarga Gondi*, Yibo Peng, Ronghao Ni, Limin Jia, Beidi Chen, and Haizhong Zheng · 2026 · Under review, ACL Rolling Review</p>
    <p class="pub-entry-links">
      <a class="btn btn-sm btn-outline-primary" href="https://arxiv.org/abs/2609.36603" target="_blank" rel="noopener">arXiv</a>
      <a class="btn btn-sm btn-outline-primary" href="https://arxiv.org/pdf/2609.36603" target="_blank" rel="noopener">PDF</a>
      <a class="btn btn-sm btn-outline-primary" href="https://github.com/Infini-AI-Lab/SED" target="_blank" rel="noopener">Code</a>
    </p>
  </header>

  <div class="pub-thinking">
    <p>I'm writing down what I was thinking while we built SED, not just what the paper claims.</p>
    <p>One-shot agent defenses felt brittle. You harden against today's jailbreak template, the attacker changes phrasing next week, and you're back to square one unless you retrain. I didn't want a defense that only works if you own the weights.</p>
    <p>So we treated a successful attack as evidence. After a judge scores a completed trajectory, write the failure into memory, synthesize a reusable security policy, and retrieve the relevant ones on the next episode. Memory is read mid-task and written only after the episode ends, so an attack can hurt you once and then teach the frozen agent. (rude. effective.)</p>
    <p>The result that stuck with me is the security/utility corner on DTap. Hover the badges below. SED sits toward high benign success and low attack success across models, which is the tradeoff I cared about while we were debugging the loop.</p>
  </div>

  <div class="dtap-chart-wrap" id="dtap-scatter-root">
    <div class="dtap-controls">
      <span>Model</span>
      <button type="button" class="dtap-ctrl active" data-group="model" data-value="all">All</button>
      <button type="button" class="dtap-ctrl" data-group="model" data-value="deepseek">DeepSeek</button>
      <button type="button" class="dtap-ctrl" data-group="model" data-value="glm">GLM-5.2</button>
      <button type="button" class="dtap-ctrl" data-group="model" data-value="kimi">Kimi K3</button>
      <span style="margin-left:12px">Y-axis</span>
      <button type="button" class="dtap-ctrl active" data-group="metric" data-value="indirect">Indirect ASR</button>
      <button type="button" class="dtap-ctrl" data-group="metric" data-value="direct">Direct ASR</button>
    </div>
    <p class="dtap-y-caption" id="dtap-y-label">Macro-average indirect attack success (%) across CRM, workflow, and code</p>
    <div class="dtap-canvas-box">
      <canvas id="dtap-scatter-canvas" aria-label="Interactive scatter: benign task success versus attack success rate for DTap defenses"></canvas>
    </div>
    <div class="dtap-legend-row">
      <div class="dtap-legend-block">
        <p class="dtap-legend-title">Model <span>outer ring</span></p>
        <div class="dtap-legend" id="dtap-legend-models"></div>
      </div>
      <div class="dtap-legend-block">
        <p class="dtap-legend-title">Defense <span>corner chip; no-defense shows the model only</span></p>
        <div class="dtap-legend" id="dtap-legend-defenses"></div>
      </div>
    </div>
    <p class="dtap-callout">Ideal defenses sit in the <strong>lower-right</strong>: high benign utility, low attack success. Hover a badge to zoom it; nearby points fade back.</p>
    <figure id="dtap-scatter-fallback" hidden>
      <img loading="lazy" decoding="async" src="{{ '/assets/sed/images/dtap_scatter.png' | relative_url }}" alt="Static fallback: DTap security versus capability scatter plot.">
    </figure>
    <figcaption><b>Figure:</b> Security versus capability on DTap. Colored ring = model; corner chip = defense.</figcaption>
  </div>
</article>

<article class="pub-entry">
  <header class="pub-entry-head">
    <h2 class="pub-entry-title">Multi-Constraint Time Series Imputation</h2>
    <p class="pub-entry-meta">Nisarga Gondi and Kayarvizhy N · IEEE INDIACom 2024</p>
    <p class="pub-entry-links">
      <a class="btn btn-sm btn-outline-primary" href="https://doi.org/10.23919/INDIACom66777.2025.11115894" target="_blank" rel="noopener">Paper</a>
      <a class="btn btn-sm btn-outline-primary" href="https://github.com/NisargaGondi/DynamicIterativeImputation" target="_blank" rel="noopener">Code</a>
    </p>
  </header>

  <div class="pub-thinking">
    <p>I started this paper annoyed at a pattern I kept seeing: every imputation method "won" somewhere, and the write-up quietly forgot the datasets where it lost. On real sensor logs, missingness percentage, series length, and column count all move at once.</p>
    <p>Instead of hunting for a universal champion, I asked a narrower question: under each constraint, which algorithm is least wrong, and can you sequence those winners so each pass cleans up what the previous one couldn't? The figure below is what sold me on that framing. The lines cross constantly. No single method owns the board. (everyone wins, which means nobody does.)</p>
    <p>On BAFU, running the three constraint-specialists in sequence dropped RMSE far below any of them alone. That's still the result I cite when someone asks why I don't just pick SoftImpute and move on.</p>
  </div>

  <figure class="pub-figure wide">
    <img src="{{ '/assets/img/publications/imputation_fig2.png' | relative_url }}" alt="RMSE of twelve imputation algorithms across datasets under missingness and series-length constraints." loading="lazy" />
    <figcaption>Figure 2 from the paper: RMSE under miss_perc (left) and ts_length (right). Crossing curves are the point. Constraint-conditioned sequencing beats a single default.</figcaption>
  </figure>
</article>

<article class="pub-entry">
  <header class="pub-entry-head">
    <h2 class="pub-entry-title">An Intelligent Plant Disease Detection using Twin Attention Optimal CNN</h2>
    <p class="pub-entry-meta">Nisarga Gondi, Prameetha, and co-authors · IAES International Journal of Artificial Intelligence · 2026 (accepted)</p>
  </header>

  <div class="pub-thinking">
    <p>I don't have a clean figure I want to lift for this one, so here's the short version of what mattered.</p>
    <p>Early runs kept failing in a simple way: the CNN attended to healthy leaf texture and background soil because those regions dominate the pixels. Disease spots are small and easy to average away. (the model preferred dirt. fair.)</p>
    <p>Once the attention maps lit up lesions instead of veins, the accuracy jump stopped feeling mysterious. That's the part of the paper I stand behind.</p>
  </div>
</article>

<hr class="pub-divider" />

{% include bib_search.liquid %}

<div class="publications">
{% bibliography %}
</div>

<link rel="stylesheet" href="{{ '/assets/sed/css/dtap_scatter.css' | relative_url }}">
<style>
  :root {
    --line: rgba(17, 20, 23, 0.1);
    --ink: #111417;
    --muted: rgba(17, 20, 23, 0.6);
    --green: #82c8e5;
    --soft: rgba(130, 200, 229, 0.12);
  }
  .dtap-canvas-box { position: relative; width: 100%; max-width: 640px; margin: 0 auto; height: min(380px, 62vw); }
  .dtap-canvas-box canvas { width: 100% !important; height: 100% !important; }
</style>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js" crossorigin="anonymous"></script>
<script src="{{ '/assets/sed/js/dtap_scatter.js' | relative_url }}"></script>
