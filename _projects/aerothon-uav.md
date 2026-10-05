---
layout: page
title: Disaster Management UAV
description: An autonomous drone that finds people when GPS gives up · All India Rank 7, Aerothon 2024
img: assets/img/projects/uav_hero.png
importance: 7
category: academic
---

<p class="proj-meta">BMSCE · SAE Aerothon 2024 · Team Dronuts · All India Rank 7 of 100</p>

Disasters take the cell towers and the GPS with them. The useful drone is the one that still flies after that. We built a UAV for the case where the sky is not helping: cover the zone, find people, do not trust a lock you just lost. Team name: Dronuts. (yes.)

I did onboard YOLOv8 detection and the path-planning work. A pretty route that assumed a GPS fix is a route to the ground. The mission on paper is climb, cruise, a maze, a hover, and home. Hover looks easy until the airframe is the thing you have to get back.

<div class="uav-board">
<figure class="mission">
  <img src="{{ '/assets/img/projects/uav_mission_plan.png' | relative_url }}" alt="Mission plan with climb, cruise, hover, descend" loading="lazy">
  <figcaption>Climb, cruise, maze, hover, home.</figcaption>
</figure>
<figure class="spec">
  <img src="{{ '/assets/img/projects/uav_spec_sheet.png' | relative_url }}" alt="UAV engineering drawing and specifications" loading="lazy">
  <figcaption>1.8 kg, 14 minutes, Pi 4.</figcaption>
</figure>
<figure class="fea">
  <img src="{{ '/assets/img/projects/uav_stress_fea.png' | relative_url }}" alt="Finite element stress plot of the UAV frame" loading="lazy">
  <figcaption>Stress on the frame. The simulation was optimistic.</figcaption>
</figure>
</div>

**All India Rank 7** of 100 at Aerothon. In an ML class a wrong prediction costs a metric. On a UAV it costs the UAV. You learn to test. Roughly one hard landing in.
