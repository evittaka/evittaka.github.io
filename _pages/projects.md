---
title: "Projects"
permalink: /projects/
layout: single
---

## Projects

{% for project in site.projects %}

### [{{ project.title }}]({{ project.url | relative_url }})

{{ project.excerpt }}

{% endfor %}