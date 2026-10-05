---
layout: page
title: OpenRole
description: I built a multi-agent job search tool to avoid doing my job search. It worked too well.
img: assets/img/fillers/pixel_city_run.gif
importance: 1
category: research
github: NisargaGondi/openrole
---

<p class="proj-meta">CMU 14-789 · Spring 2026 · FastAPI + Next.js + LangGraph</p>

Job searching in 2026 is forty tabs and a spreadsheet you stop opening. I did that for two weeks. Then I did the most engineer thing possible. I stopped applying and started building. (classic.)

<img class="proj-banner demo" src="{{ '/assets/img/projects/openrole_demo.gif' | relative_url }}" alt="OpenRole walkthrough in dark mode: Scout, Signal, Analytics">

The spreadsheet was the honest version of the process: a role, a person, a sentence I might send, a date I did not. It died the way spreadsheets die. I wanted the boring parts done and the sending left to me. A bot that emails researchers with my name on it is not a tool. It is a liability.

OpenRole is that split. Scout finds roles and checks the posting is still alive. Signal maps the team and writes a hook that is about their work, not a paragraph of adjectives about mine. Then it drafts the note and waits. Pressing send is still me.

The loop is LangGraph on FastAPI, with Postgres keeping every step so I can see what the agents decided instead of trusting a chat window. Next.js is the UI in the gif above: Scout, then Signal, then analytics. The pipeline board is cropped out of that last frame. Other people's rejections do not belong on this website.

Multi-provider routing, because putting a whole job search on one model's mood is how you wake up to a very creative misunderstanding. **220+ tests**, because an agent that silently breaks is worse than no agent.

Scout has found **790 roles**. I was not emotionally prepared. Most of them are wrong for me, which is the point. The tool's job is to surface the pile. Mine is to throw most of it away.

It still cannot do the interviews. I checked.

**Links:** [Code](https://github.com/NisargaGondi/openrole)
