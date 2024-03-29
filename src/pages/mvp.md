---
title: MVPs and Iterating Your Way to a Finished Product
date: "2018-09-11"
excerpt: I have long struggles with building the projects I set out to build and fill my GitHub with. This is due to a crippling penchant for perfectionism at all costs. This is dangerous for your mental health, productivity, and prospective employers.
layout: post
categories:
  - Web Development
tags:
  - open source
  - mvp
  - npm
  - tools
image: https://res.cloudinary.com/twhiteblog/image/upload/v1536722539/Header%20Images/Optimized-andrew-neel-1050242-unsplash.jpg
description: Getting a project out the door is the most important thing you can do.
---



I have long struggled with building the projects I set out to build and fill my GitHub with. This is due to a crippling penchant for perfectionism at all costs. This is dangerous for your mental health, productivity, and prospective employers.

I began to feel stifled and overwhelmed by the scope of the projects I was creating...until recently.

## Dan Abramov at JSConf 2018

This talk by Dan Abramov opened my eyes to React and JavaScript. It helped me to clear out a lot of the burden I was carrying by trying to create the perfect app/tool.

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/nLF0n9SACd4' frameborder='0' allowfullscreen></iframe></div>

## Dan Abramov on Twitter

Recently, Dan tweeted something which led me to scrap all the extra features in my apps. and coming up with a smaller concept to ship called an *MVP*.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">First years of programming were really hard. I was confused for a long time. But I remembered how I got through it. It’s the feeling of getting excited — like an itch or buzz in your head. Seeing things coming together before they’re real. I remembered because I feel it again.</p>&mdash; Dan Abramov (@dan_abramov) <a href="https://twitter.com/dan_abramov/status/1036002775598092295?ref_src=twsrc%5Etfw">September 1, 2018</a></blockquote>


<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I&#39;ve been programming for about 14 years, about 8 of them professionally. I&#39;m a slow learner though.</p>&mdash; Dan Abramov (@dan_abramov) <a href="https://twitter.com/dan_abramov/status/1036004805796405248?ref_src=twsrc%5Etfw">September 1, 2018</a></blockquote>


## So What is an *MVP*?

MVP stands for *Minimum Viable Product*. This is an app with a small set of features you ship to have *something* ready to consume.

An MVP helps new developers fill their portfolios with meaningful projects. This will help them stand out from other new developers. This is if the code is clean, well structured, and the project is functional.

You can always *iterate* on the MVP instead of trying to perfect a project: no software project is perfect. You might as well *ship*.

> *Real artists ship*.
          > —Steve Jobs

## Pick an MVP and Open Source It

Open Source is not some fad that software engineers are fanatic about. It is the lifeblood of software development today.

Using an open-source platform like [GitHub](https://github.com), [GitLab](https://about.gitlab.com/), or [Bitbucket](https://bitbucket.org/)[^1] will showcase to prospective employers what you are working on. It also shows how well you're doing with what you're working on, and it also shows growth and your learning process[^2].

## Open Source But Don't Go Star Chasing

A lot of times, new developers, myself included, want to hit it big on GitHub and get thousands of stars on a project and make the [trending repositories list](https://github.com/trending).

Stop. It's definitely a trap.

<div style="width:100%;height:0;padding-bottom:61%;position:relative;"><iframe src="https://giphy.com/embed/RKiOMSy7LLcA0" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/trap-RKiOMSy7LLcA0">via GIPHY</a></p>

Having a popular repo on GitHub is rare; there are 350 million+ users on GitHub and even more repositories. The odds are against you, at least at first.

Getting your feet wet in open source, building your skills, is the best thing you can do when you're starting out. Once you get a feel for open source, you can build something more significant. If the developer community finds it interesting, the stars will come.

### Learn in Public

[Shawn Wang](https://twitter.com/swyx) is a popular React developer at Netlify. He tweeted the phrase *learn in public* which encapsulates what I mean when I say you should open source your MVP:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Learn In Public. <a href="https://t.co/RpKfRAy9Um">pic.twitter.com/RpKfRAy9Um</a></p>&mdash; shawn swyx wang 🇸🇬 (@swyx) <a href="https://twitter.com/swyx/status/1009174159690264579?ref_src=twsrc%5Etfw">June 19, 2018</a></blockquote>


Learning and failing in public is an important part of getting your work noticed. The more you iterate and share, the more visible you are to prospective employers. This is why it is important to *get something out the door*.

## Experiencing Perfectionism

I wanted my current app, Check Yo Self to be a beautiful, full stack environment to check your markdown blog posts. It went through many iterations but, I stalled on building it. Every shiny new thing I wanted to add to it to make it perfect overwhelmed me; it was crippling.

I have been working on this app for a year and a half, almost two years now. It should be, considering its simple premise, finished. The scope creep, the feeling that it needed to look better than similar apps left me paralyzed. I was unable to work on it. It killed my productivity and I stopped working on it for months.

After watching Dan's talk and reading his tweets, I decided that I should build a few features. Then, after they're built, I can iterate on it.

<figure>
    <div style="width:100%;height:0;padding-bottom:54%;position:relative;"><iframe src="https://giphy.com/embed/3oz8xRXOGEacAXIUKI" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/nfl-football-celebration-3oz8xRXOGEacAXIUKI">via GIPHY</a></p>
    <figcaption>
       Let's Go.
    </figcaption>
</figure>


I am also working on a CLI tool. I have been working on that for 8 months now and it's taken that long for the same reason.

I stripped all the extra options and have been working on it for the past few days.

Considering all the small npm tools out there, I can make a tool with a couple small functions that are useful. That's it.

This relieved a lot of the stress I was feeling over the course of the past year. Now I knew I could ship something and not have the weight of [abandoned](https://dev.to/avalander/my-github-graveyard-172b) [repos](https://dev.to/domcorvasce/my-github-graveyard-1hdo) littering my GitHub profile.

## Conclusion

You can build pretty much *anything* you want, even if it there are similar tools out there. You have a unique perspective and you can bring that to a project that someone else has built. You'll build it in a different way.

Get set up on [GitHub](https://github.com/), [create a repo](https://help.github.com/articles/create-a-repo/), get a little documentation set up for it, and share it on Twitter, LinkedIn, Hacker News, wherever.

You'll then have something to add to your portfolio and resume to be proud of. You can always build on top of what you have later.

[^1]: I'd choose GitHub over all the other ones. It is the de facto standard currently. Most employers who look for open source contributions do so at GitHub.
[^2]: There's a lot of debate about having your GitHub be a requirement for a software engineering position. If you work 9-5, have a family and other obligations, open sourcing side projects or side projects in general, will not be something you're able to do. Contributing to open source would be difficult as well. It is something new developers should look into, regardless.
