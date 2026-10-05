---
layout: post
title: "Physical AI, and Flying Datacenters (floating actually)"
date: 2026-10-05
description: Ding Zhao called the next frontier hardware plus software. AMD answered with an $8.2 billion offer for World Labs. The power bill is trying to leave the planet.
image: /assets/img/blog/thumb-physical-ai.jpg
image_alt: Earth wrapped in a shell of satellites. ESO visualization of machines in orbit.
tags:
  - physical-ai
  - robotics
---

In Trustworthy AI on September 28, Ding Zhao said the quiet part in a way I have not been able to put down. Pure software AI is getting crowded. The edge is knowing a domain well enough to build the machine around the model: circuits, mechanics, chemistry, a body. Hardware and software, together. He put World Labs in that sentence. AMD had just agreed to buy Fei-Fei Li's lab for about [$8.2 billion](https://newsroom.amd.com/news/amd-acquire-world-labs/) in stock. A world-model company. State, reward, action. Not a chatbot with a plugin.

<figure class="ref">
  <a href="https://newsroom.amd.com/news/amd-acquire-world-labs/" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/blog/amd-world-labs.jpg' | relative_url }}" alt="AMD and World Labs logos over a lit Earth.">
  </a>
  <figcaption><a href="https://newsroom.amd.com/news/amd-acquire-world-labs/" target="_blank" rel="noopener">AMD's announcement</a>, September 28. Fei-Fei Li joins as chief scientist when it closes. A chip company buying the lab that generates 3D worlds. (what a transition.)</figcaption>
</figure>

I vouch for it. The robotics future looks crisp in a way the last five years of demo videos did not, because the model can finally be in the loop while the body is still moving. In the same class, Yaru Niu, from Ding's lab, walked through quadrupeds and humanoids with tactile sensing, trained on human data and robot data.

<figure class="react">
  <img src="https://media.giphy.com/media/N88tLrkcXfQqRioFoO/giphy.gif" alt="A robot dog loses its footing and goes down.">
  <figcaption>Long delicate task, or does not fall over. Pick one.</figcaption>
</figure>

The split she was fighting is the one I keep seeing: a robot that can plan a long delicate task, or a robot that does not fall over. Rarely both. Physical AI is the attempt to stop choosing.

The famous version of the same bet has been public for a while. Jensen Huang, at Computex, called it in one line: the next wave of AI is physical AI, AI that understands the laws of physics and can work among us. Fei-Fei built [World Labs](https://www.worldlabs.ai/blog/amd-announcement) on the spatial version of that claim, models that generate and simulate a 3D world instead of a paragraph. AMD did not pay $8.2 billion for a vibe. They paid it so the hardware roadmap has someone in the room who knows what a robot will ask of a chip.

## The bill comes due on the ground

Then I look at where those chips have to live, and the crisp future grows a power plant.

Training and serving this stuff is already a land-use argument. A datacenter is electricity, water for the cooling loop, a substation someone nearby did not ask for, and a grid that is often still a fossil grid wearing a green slide. The heat is not metaphorical. Global warming does not care that the workload was a world model. Pile enough of them on Earth and the climate story of AI stops being a footnote in the system card.

Reusable rocketry is the ridiculous answer that started working. A launch used to be a national event. Now a rideshare can carry a research satellite because the booster comes home. Which is how Alphabet, they do insist on the longer name, put the first piece of a space datacenter upstairs.

<figure class="ref">
  <a href="https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-prototype/" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/blog/suncatcher-sat.jpg' | relative_url }}" alt="Project Suncatcher title card: how do we put machine learning in space, over a sunrise.">
  </a>
  <figcaption><a href="https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-prototype/" target="_blank" rel="noopener">Project Suncatcher</a>. On October 1 a prototype satellite, built with Planet, reached orbit on SpaceX's Transporter-18. Four TPUs. Sunlight that does not clock out.</figcaption>
</figure>

<figure class="react">
  <img src="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif" alt="Leonardo DiCaprio as Gatsby raises a glass while fireworks go off.">
  <figcaption>DiCaprio can unclench. A little.</figcaption>
</figure>

They are not flying. They are falling around the Earth and missing the ground, which is what floating means once you are going fast enough. Google's claim is that a satellite in low orbit can see near-constant sun, on the order of eight times the solar power of a panel stuck on a roof. No local water fight. No new gas peaker for the neighborhood. The honest asterisk is that this one is a prototype: the chips run, the radiation and the heat get measured, and a two-satellite laser test is the 2027 plan. It is not a campus in the sky yet. It is the first time the power bill has a plausible way off the planet.

## Where I am leaving it

The pace is not asking permission. A world-model lab changes owners on a Monday, and by Thursday there is a TPU in orbit. I still know which room I am staying in. AI security. Muse and Dots cannot get through a day without a fresh zero-day. (GrokBot remains the goat.)

Written by Nisarga Gondi 🚀
