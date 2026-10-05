---
layout: default
permalink: /blog/
title: Blog
nav: true
nav_order: 4
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<div class="post">

  <div class="header-bar">
    <h1>{{ site.blog_name }}</h1>
    {% if site.blog_description.size > 0 %}
      <h2>{{ site.blog_description }}</h2>
    {% endif %}
  </div>

{% assign postlist = paginator.posts %}
{% if postlist.size == 0 %}

  <p class="blog-empty">No posts yet. The drafts exist. They are shy. (first one coming soon.)</p>
{% else %}
  <ul class="post-list">
    {% for post in postlist %}
      {% if post.external_source == blank %}
        {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
      {% else %}
        {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
      {% endif %}
      {% assign year = post.date | date: "%Y" %}
      <li class="blog-row">
        {% if post.image %}
          {% if post.redirect == blank %}
            {% assign post_href = post.url | relative_url %}
          {% elsif post.redirect contains '://' %}
            {% assign post_href = post.redirect %}
          {% else %}
            {% assign post_href = post.redirect | relative_url %}
          {% endif %}
          <a class="blog-thumb" href="{{ post_href }}">
            <img src="{{ post.image | relative_url }}" alt="{{ post.image_alt | default: post.title }}" style="object-position: {{ post.image_position | default: 'center' }};">
          </a>
        {% endif %}
        <div class="blog-row-copy">
          <h3>
            {% if post.redirect == blank %}
              <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
            {% elsif post.redirect contains '://' %}
              <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
            {% else %}
              <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
            {% endif %}
          </h3>
          <p>{{ post.description }}</p>
          <p class="post-meta">
            {{ read_time }} min read &nbsp; · &nbsp;
            {{ post.date | date: '%B %d, %Y' }}
          </p>
        </div>
      </li>
    {% endfor %}
  </ul>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}
{% endif %}

</div>
