---
ID: 1382
title: 100 Days of Code, Day 11
author: Tiffany White
date: "2016-10-31"
layout: post
link: >
  https://tiffanywhite.tech/100-days-of-code-day-11/
published: true
tags:
  - 100 days of code
  - accountability
  - coding
categories:
  - 100 Days of Code
---


<img class="size-full wp-image-1381 aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/10/code-optimization-xxl-5.png" width="256" height="256" />

## 31 October 2016

**Today’s Progress:**
Web Development class was cancelled today— our professor most likely had to take his kids Trick or Treating tonight. So instead of getting assigned Assignment 3, we got assigned an in-class assignment #2.

This was an assignment using CSS3 animations, transitions, and keyframes, which I had no idea about. I looked it up on the internet and I got really frightened by it, like *WTF is this?*.

Then after reading several sources, I finally understood the syntax and how it works.

**Thoughts:**
I don’t like CSS. In fact, I’ve gone on record about it:

https://twitter.com/TiffanyW_412/status/784917100422758400

https://twitter.com/TiffanyW_412/status/784917245805735936

https://twitter.com/TiffanyW_412/status/784917476391854080

But I found that I could do some pretty cool things with `transition`, `animation`, and `@keyframes`.

For instance, I have a circle I am animating with the bounceIn animation keyframe. You can do this with:

[html]
<div class="element"></div>
[/html]

[css]
html, body {
height: 100%;
}

body {
display: flex;
align-items: center;
justify-content: center;
position: relative;
}

.element {
height: 300px;
width: 300px;
background-color: #46D6D6;
border-radius: 100%;
animation: bounceIn 3s ease-in-out 4s, pulse 3s ease infinite alternate;
}

@keyframes bounceIn {
0% {
transform: scale(0.1);
opacity: 0;
}
60% {
transform: scale(2);
opacity: 1;
}
100% {
transform: scale(1);
}
}
[/css]

This will make a circle with a medium turquoise background color. The first animation is `bounceIn` which will bounce the circle as it fades in. The second value is the `animation-timing-function` which will ease the bounce animation in and out, start to finish, for 4s.

**Link to work:**

You can find the CodePen below.

https://codepen.io/twhite96/pen/yamOrq




<img class="size-full wp-image-1381 aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/10/code-optimization-xxl-5.png" width="256" height="256" />

## 31 October 2016

**Today’s Progress:**
Web Development class was cancelled today— our professor most likely had to take his kids Trick or Treating tonight. So instead of getting assigned Assignment 3, we got assigned an in-class assignment #2.

This was an assignment using CSS3 animations, transitions, and keyframes, which I had no idea about. I looked it up on the internet and I got really frightened by it, like *WTF is this?*.

Then after reading several sources, I finally understood the syntax and how it works.

**Thoughts:**
I don’t like CSS. In fact, I’ve gone on record about it:

https://twitter.com/TiffanyW_412/status/784917100422758400

https://twitter.com/TiffanyW_412/status/784917245805735936

https://twitter.com/TiffanyW_412/status/784917476391854080

But I found that I could do some pretty cool things with `transition`, `animation`, and `@keyframes`.

For instance, I have a circle I am animating with the bounceIn animation keyframe. You can do this with:

[html]
<div class="element"></div>
[/html]

[css]
html, body {
height: 100%;
}

body {
display: flex;
align-items: center;
justify-content: center;
position: relative;
}

.element {
height: 300px;
width: 300px;
background-color: #46D6D6;
border-radius: 100%;
animation: bounceIn 3s ease-in-out 4s, pulse 3s ease infinite alternate;
}

@keyframes bounceIn {
0% {
transform: scale(0.1);
opacity: 0;
}
60% {
transform: scale(2);
opacity: 1;
}
100% {
transform: scale(1);
}
}
[/css]

This will make a circle with a medium turquoise background color. The first animation is `bounceIn` which will bounce the circle as it fades in. The second value is the `animation-timing-function` which will ease the bounce animation in and out, start to finish, for 4s.

**Link to work:**

You can find the CodePen below.

https://codepen.io/twhite96/pen/yamOrq





&nbsp;