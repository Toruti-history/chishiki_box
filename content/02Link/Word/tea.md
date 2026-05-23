---
title: 茶
aliases:
  - 茶
draft: "false"
description: 茶
tags:
created: 2026-05-23
modified: 2026-05-23
---
<div style="display:flex; gap:10px; align-items:center;">

  <button
    onclick="window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href))"
    style="
      width:42px;
      height:42px;
      border-radius:9999px;
      border:none;
      background:#000;
      color:white;
      font-size:18px;
      cursor:pointer;
    ">
    𝕏
  </button>

  <button
  onclick="window.location.href='https://line.me/R/msg/text/?' + encodeURIComponent(window.location.href)"
  style="
    width:42px;
    height:42px;
    border-radius:9999px;
    border:none;
    background:#06c755;
    color:white;
    font-size:12px;
    cursor:pointer;
  ">
  LINE
</button>

  <button
  onclick="
    navigator.clipboard.writeText(window.location.href);
    alert('URLをコピーしました');
  "
  style="
    width:42px;
    height:42px;
    border-radius:9999px;
    border:none;
    background:#1d9bf0;
    color:white;
    font-size:18px;
    cursor:pointer;
  ">
  🔗
</button>

</div>