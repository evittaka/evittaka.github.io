---
title: "Projects"
permalink: /projects/
layout: single
---

## Projects

Number of projects: {{ site.projects.size }}

{% for project in site.projects %}

### [{{ project.title }}]({{ project.url | relative_url }})

{{ project.excerpt }}

{% endfor %}

- [Cat vs Dog Image Classifier](/projects/cat-dog-classifier/)