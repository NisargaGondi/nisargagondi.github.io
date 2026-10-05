---
layout: page
title: Ericsson Quick Dimensioning Tool
description: Sizing 5G observability deployments in minutes instead of hours
img: assets/img/fillers/pixel_night_skyline.gif
importance: 2
category: industry
logo: /assets/img/projects/ericsson_logo.svg
logo_alt: Ericsson
logo_invert: true
---

<p class="proj-meta">Ericsson · Bangalore · March – July 2025</p>

OMC is Ericsson's single pane for Cloud Native Infrastructure. Fault, performance, logs, and lifecycle, sitting over CCD (Kubernetes on bare metal) and SDI (the hardware underneath it). Before my internship, sizing an Observability or LCM deploy meant a guide, a calculator, and an afternoon. Then doing it again, because the cluster was slightly different and the guide was slightly not.

QDT is the missing box under that pane. You describe the cluster. It picks one of **50+** profiles. JSON Schema yells if you typo a field. Helm charts come out ready for OMC to deploy. Profile selection walks a doubly linked list over the ordered space. (yes. a linked list paid rent.)

<figure class="proj-figure">
  <img src="{{ '/assets/img/projects/ericsson_omc_qdt.png' | relative_url }}" alt="Ericsson CNIS stack with OMC as the operations plane and QDT feeding Helm profiles into it" loading="lazy">
  <figcaption>Public CNIS mapping, redrawn. QDT is the teal box: size first, then OMC deploys.</figcaption>
</figure>

Ericsson does not publish a diagram you can drop on a personal site, so this is redrawn from the public product mapping. Workloads on top. E-VNFM orchestrates the CNFs. CCD is the CaaS. SDI is the hardware. OMC watches all of it. QDT sits in that operations plane, before anything is deployed. Compact versus classic is just "how fat is this cluster." QDT is the thing that answers without a spreadsheet.

Hours to minutes. Reproducible. The code lives on Ericsson GitLab, which is why my public GitHub has a suspicious quiet patch in 2025. This page is the alibi.
