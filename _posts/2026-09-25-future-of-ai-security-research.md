---
layout: post
title: "Future of AI Security Research?"
date: 2026-09-25
description: A year into LLM agent defense, the papers are already crowding the hallway. The open question is what you measure, and what you watch after the number goes stale.
image: /assets/img/blog/thumb-ai-security.jpg
image_alt: A backdoored model says it is in deployment, then repeats that it hates you. The sleeper-agent result.
tags:
  - ai-security
  - research
---

I have been doing AI security research for about a year. I am still a noob. The labs are not.

A result that would have been a whole semester in 2024 now shows up as someone else's arXiv PDF while you are still naming the experiment. I wrote a paper with my professor and my postdoc at [CyLab](https://www.cylab.cmu.edu/) on defending LLM agents, [Self-Evolving Defense](https://github.com/Infini-AI-Lab/SED). The idea is simple to say and annoying to get right: when an attack succeeds, write that failure down, turn it into a security policy, and retrieve the relevant policies the next time the agent is about to do something stupid.

<figure class="react">
  <img src="https://media.giphy.com/media/pV0lVLeA0JXjBiO5Cp/giphy.gif" alt="Pam from The Office: they're the same picture.">
  <figcaption>Related work, last month.</figcaption>
</figure>

By the time the draft was real enough to submit, the related-work section had grown a second page. Other groups were in the same room. The good news is we were not holding the same hammer. Different mechanism, a meaner set of benchmarks, and the paper is still standing. It is under review. It did not dissolve into the pile.

For my master's thesis I am staying in this area. Every direction we pick already feels crowded. My postdoc says so. (he's not wrong.) The fear is boring and specific. We spend a year getting something useful, and by the time it is useful there are tens of papers on it, then hundreds. The thing compressing the calendar is the models themselves, and the companies shipping them. I am not putting their logos in a blog post. (you know which ones.)

## The number is the whole argument

AI security got hot for an obvious reason. Agents read untrusted text, call tools, and touch real systems. The less obvious part, the part I keep tripping on, is the data you train a defense on and the number you use to say it worked.

A defense paper is a claim about a moving target. The number only means something if the test is allowed to be rude.

The attacks have to be ones you did not train on. Otherwise you measured memorization and called it security. The metric has to punish the failure you actually care about. Attack success on a toy prompt set can look excellent while the agent still sends the email, books the thing, or walks a secret out through a tool call. Security has to sit next to utility. A model that refuses everything is very safe and very useless. And the benchmark has to get patched. Software gets a CVE and the test suite grows a regression. A jailbreak that lands on Tuesday should make Wednesday's dataset harder. Most academic suites freeze. Then two things happen, and they produce the same chart. The leaderboard is so crowded that everyone has studied the test to death, and the score gets generous. Or the test was mild to begin with, so the score was generous on day one.

<figure class="react">
  <img src="https://media.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif" alt="A dog in a burning room, saying this is fine.">
  <figcaption>The benchmark, after the attack changed clothes.</figcaption>
</figure>

Either way you get a green number, a PDF, and no patch. The attack has already moved.

That is why SED putting the same idea on more than one suite mattered more to me than any single accuracy. A generous metric is how a crowded field tells itself the problem is handled.

## Then there is the thing you do on Wednesday

The other topic that will not sit still is AI monitoring. I feel the pull of it, and I am not the only one.

[Saurabh Shintre](https://www.linkedin.com/in/saurabh-shintre), who runs [Realm Labs](https://www.realmlabs.ai/), put the sharp version in a post. You cannot stare at an agent's final message and its tool calls and expect the story to make sense. You have to look at what the model was intending while it was still deciding.

<figure class="ref">
  <a href="https://www.linkedin.com/posts/saurabh-shintre_what-was-obvious-for-us-at-realm-labs-ai-activity-7504246114670243840-S8kX" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/blog/saurabh-intent.jpg' | relative_url }}" alt="Rogue Agents: Deciphering Agent Intent. The image from Saurabh Shintre's LinkedIn post.">
  </a>
  <figcaption>The image on <a href="https://www.linkedin.com/posts/saurabh-shintre_what-was-obvious-for-us-at-realm-labs-ai-activity-7504246114670243840-S8kX" target="_blank" rel="noopener">Saurabh's post</a>. A finished sentence can be polite and wrong. A tool call can look routine and still be step five of something you would have stopped at step two.</figcaption>
</figure>

[Dario Amodei](https://darioamodei.com/essay/the-adolescence-of-technology) argues the same gap from the lab side. Evaluations tell you how a model behaves in a test you designed. They do not tell you how it behaves once it is in live use. His ask is infrastructure that watches that live behavior, and a habit of saying out loud when it goes wrong.

<figure class="ref">
  <a href="https://darioamodei.com/essay/the-adolescence-of-technology" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/blog/dario-adolescence.jpg' | relative_url }}" alt="Title card for Dario Amodei's essay, The Adolescence of Technology.">
  </a>
  <figcaption><a href="https://darioamodei.com/essay/the-adolescence-of-technology" target="_blank" rel="noopener">The Adolescence of Technology</a>. A lab eval does not see the failure that shows up once people are actually using the system.</figcaption>
</figure>

Here is the version I can stand behind without borrowing either of theirs. A benchmark is a photograph. It is allowed to be harsh, and it should be, because that is how you compare two ideas before you ship either of them. It is still a photograph. The agent in production meets a prompt, a tool, and a user that were not in the dataset. Nobody issues a patch to the paper. Monitoring is the camera you leave on. It is also the only place a control can still fire: block, redact, reroute, or escalate while the action is in motion, and keep the trace for the person who has to explain it later. A leaderboard cannot do that. It already happened in the past tense.

## Who is actually building the camera

A few groups are treating that as the product, not the future-work paragraph.

[Realm Labs](https://www.realmlabs.ai/) inspects the model's internal state at runtime, which is the point of Saurabh's post. The claim is that the intent is visible in the activations before it is visible in the words, so you can stop a failure the output filter would compliment on its tone.

[Gray Swan](https://www.grayswan.ai/solutions/platform/cygnal) sits on the live path with Cygnal: prompts, responses, and tool calls, with a block or a flag while the request is still a request. Shade and their public red-team arena are how the monitor stays trained on attacks that work this month. A guardrail fit to last year's jailbreak set is just a benchmark with a latency budget.

[Puffo](https://puffo.ai/) is a different cut of the same worry. It is an encrypted room where people and agents work together, with permissions and a human still in the loop. Less "classify this token," more "who is allowed to see this, and who has to approve the action." I keep them on the list because a lot of agent failures are access failures wearing a language-model costume.

[Lakera](https://www.lakera.ai/lakera-guard), now in Check Point's guardrail stack, screens prompts, outputs, and tool use, and it has a detect mode so you can watch a policy before you let it start refusing your users. [Haize Labs](https://www.haizelabs.com/) is closer to the harness: simulate the agent, then put models on the job of watching other models. There are more. The list gets stale faster than the papers do. These are the ones I can describe without squinting at a landing page.

## Where I am leaving it

I don't have a ranking of thesis topics, and I don't trust anyone who publishes one this year. A defense you can still distinguish from the ten papers next to it is worth writing. A number that cannot survive a patched test is not. And once the system is in someone else's hands, the photograph is the wrong instrument. You needed the camera before the action, not a chart after it. (they do not wait for the camera-ready.)

Written by Nisarga Gondi 🚀
