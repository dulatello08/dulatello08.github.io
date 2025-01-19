---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<ul class="posts-list">
  {% for post in site.posts %}
    <li class="post-item">
      <a href="{{ post.url | relative_url }}" class="post-link">
        {% if post.image %}
          <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="post-image">
        {% endif %}
        <div class="post-content">
          <h2 class="post-title">{{ post.title }}</h2>
          {% if post.description %}
            <p class="post-description">{{ post.description }}</p>
          {% endif %}
        </div>
      </a>
    </li>
  {% endfor %}
</ul>