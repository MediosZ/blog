---
title: Linked notes
date: 2020-6-17
tags: 
  - thought
  - tools
  - prototype
author: Tricster
location: 山西
---

# what is a useful note system?

When we build a Note System or Information System, it is more important to build an index table or some thing like this to help you find what you need quickly, rather than write once but never read it again.

# Index Table

If we need to build a index table, it would be easy to treat the hash of the note title to be the unique key for this note. Every time we create a new note, we can simply add an entry to the index table, and when we need come back, we just need to search the index table for what we need and then go to the note directly using the key we generated before.

# Linked Notes

It is easy to build a index table but it is only good for monodirectional navigation. 

But the fact is that the information around us is fully connected in some way.

Instead build an index table, the linked notes which contains the links to other related notes can be a better choice. And we can see some tools works in this way these days, such as Roam Search[^roam], etc.

Yesterday, I followed the co-creator of  styled-components and find a amazing note system[^note].

Unfortunately, the system is not open source, so maybe I can make one for myself.

[^roam]: [Roam Search](https://roamresearch.com/)
[^note]: [Note system from Andy Matuschak.](https://notes.andymatuschak.org/About_these_notes)