---
layout: page
title: Trip Master
description: Gemini plans your trip, AR tells you what it costs to stand where you are standing
img: assets/img/fillers/pixel_sunset_train.gif
importance: 6
category: academic
github: NisargaGondi/ar_travel_planner
---

<p class="proj-meta">BMSCE · October 2024 – May 2025 · with Gauri Ram</p>

Someone makes a spreadsheet. Everyone ignores the spreadsheet. You eat at the first place with seats. As tradition requires.

Gauri owned the Flutter app. I was her teammate. The split was simple. Gemini writes the itinerary. Reviews get a sentiment pass, so "worth every minute" beats "fine, I guess" when the day is being planned. Native Android AR overlays what things cost within 5 km of wherever you are standing. (yes. the camera argues with your budget.)

<img class="proj-phone" src="{{ '/assets/img/projects/tripmaster_demo.gif' | relative_url }}" alt="Trip Master demo: pick Goa, read the Gemini itinerary, then AR prices on the beach">

No real app recording survived, so the gif is a reconstruction of the actual flow, using Gauri's destination photos. Pick a place. Gemini drafts the days and a number. Open the camera and the pins show up on the beach you are pretending to stand on.

Goa was the test trip because it had a beach, a scooter, and a budget we were trying not to exceed. Sentiment on the reviews mattered more than I expected. A place with glowing adjectives and a terrible price is still a terrible price. The model was good at the adjectives. The AR layer was there so the price could interrupt.

The test-trip budget survived. Mostly.

**Links:** [AR planner](https://github.com/NisargaGondi/ar_travel_planner) · [Gauri's app](https://github.com/Gauri-ram/Travel-itinerary)
