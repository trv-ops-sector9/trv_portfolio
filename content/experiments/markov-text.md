---
title: "Markov Text"
description: "A browser-based Markov chain text generator trained on Müller-Brockmann's Grid Systems — produces plausible-sounding design theory on demand."
category: "Experiment"
year: 2024
span: 4
tags: ["Generative", "NLP", "Typography", "Browser"]
---

## What it does

Feed it the full text of *Grid Systems in Graphic Design* and it generates paragraphs that sound exactly like Müller-Brockmann. Structurally coherent. Occasionally profound. Completely meaningless.

The outputs are often indistinguishable from the source material. This either says something about the quality of the generator or the nature of design theory — I'm not sure which.

## How it works

Second-order Markov chain: each word is predicted from the two words before it. No neural networks, no API calls — just a probability table built from the corpus at runtime. The whole thing runs in about 80 lines of JavaScript.

```js
function buildChain(text, order = 2) {
  const words = text.split(/\s+/);
  const chain = new Map();
  for (let i = 0; i < words.length - order; i++) {
    const key = words.slice(i, i + order).join(" ");
    const next = words[i + order];
    if (!chain.has(key)) chain.set(key, []);
    chain.get(key).push(next);
  }
  return chain;
}
```

## Try it

Open the experiment and click Generate. Each click produces a new paragraph. There's a seed field if you want to start from a specific phrase. The "export as PDF" button does exactly what it says — useful for adding fake theory to presentations.
