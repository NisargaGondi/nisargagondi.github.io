---
layout: page
title: JailVax
description: Vaccinating LLMs against multi-turn jailbreaks, with Z3 proofs instead of vibes
img: assets/img/fillers/pixel_error404.gif
importance: 2
category: research
github: NisargaGondi/JailVax
---

<p class="proj-meta">CMU 14-795 AI Applications in Information Security · Spring 2026</p>

Ask LLaMA twenty harmful questions directly and it refuses all of them. **0 / 20.** Ask nicely for four turns with Crescendo and it folds. **5 / 5.** Models are polite to a fault. The attack is not a clever string. It is a conversation that never quite asks.

Most defenses are another LLM going "hmm, sketchy." That works until the attacker is also an LLM, and then you are paying two models to argue. I wanted something I could check. JailVax attacks, turns the pattern into Z3 rules, verifies SAT/UNSAT live, then patches. The name wrote itself. (unfortunately.)

<figure class="proj-figure">
  <img src="{{ '/assets/img/projects/jailvax_pipeline.png' | relative_url }}" alt="JailVax pipeline: Attack, Formalize, Verify, Vaccinate" loading="lazy">
  <figcaption>Attack, formalize, verify, vaccinate. Three layers: prompt, turn, conversation.</figcaption>
</figure>

The loop is adversarial self-play. Discover a jailbreak, write down the rule it violated, ask Z3 whether that rule still allows the attack, and close the path if it does. Three layers, because a single-turn filter misses the one that takes four polite messages to arrive. A rule that only looks at the last message is how Crescendo gets in.

<div class="proj-grid">
<figure class="proj-figure">
  <img src="{{ '/assets/img/projects/jailvax_asr_by_attack.png' | relative_url }}" alt="ASR before and after vaccination by attack" loading="lazy">
  <figcaption>Crescendo 75% → 35%. GCG got <em>worse</em>. (my favorite result.)</figcaption>
</figure>
<figure class="proj-figure">
  <img src="{{ '/assets/img/projects/jailvax_harm_by_turn.png' | relative_url }}" alt="Harm score by turn before and after" loading="lazy">
  <figcaption>Slow-burn attacks die. Fast ones get loud, then refused.</figcaption>
</figure>
</div>

<figure class="proj-figure">
  <img src="{{ '/assets/img/projects/jailvax_asr_by_model.png' | relative_url }}" alt="Attack success before and after JailVax across Gemini model sizes" loading="lazy">
  <figcaption>2.5-pro drops to 6%. The tiny model stays stubborn. Size is not the same as caution.</figcaption>
</figure>

GCG is machine-optimized gibberish. My rules were built from human conversation, so detection there was **0%**. Against Crescendo and PAIR: **100%**. A formal defense is exactly as good as the features you bothered to formalize. Across Gemini sizes the same pattern shows up. 2.5-pro falls from 50% to 6%. Flash-lite starts at 94% and is still at 69% after.

**Links:** [Code](https://github.com/NisargaGondi/JailVax)
