---
title: What I Want and Need from a New Programming Language
date: "2020-01-01"
---

- Intro

  - This is what **I** want, not necessarily what I think will be successful

- Wants

  - Type system
    - Lightweight ADTs - expressivity, discourage primitive obsession by reducing boilerplate, by-value semantics
    - Non-nullability
    - Immutability (across the board or opt-out?)
    - Purity?
    - Parametric polymorphism (generics)
    - Ad-hoc polymorphism
  - Backends
    - Native code (statically linked execs with easy cross-compilation, i.e. Golang?)
    - WASM for in-browser

- Needs: the nonfunctional requirements

  - quick compiles
  - decent IDE support
  - REPL (overlaps with above)
  - Easy build system/depenendency management

- Don't want

  - OOP-style inheritance (subtype polymorphism)

- Don't care
  - Syntax
  - Top-tier performance; fine with average perf of a statically-typed, compiled language
