# 25-07-24 update: Goodbye, fetch... TT^TT
First blog post! A quick introduction: I'm learning to make userscripts with JavaScript because I've always liked how userscripts and browsers make the Internet-browsing experience more centered on what *I* as a user needs. Basically I want to mess with the websites myself. 
For this script, I'm just doing things in an entirely "try first, google later" kind of method to see what I can pick up along the way. Not very efficient but ehhh, that's exactly why I started this blog -- to lament over old versions of this script and so much time that could've been saved.

## My goals
I just need the script to work on my Firefox and my iOS Safari browsers basically. But it's unexpectedly so. **damn**. **MUCH**. ***WORK***.

## Oh no, the flashback's starting
It started like this: After hacking together a script that worked on Firefox (much effort was spent to follow the laws of writing readable code though I don't know how much I succeeded) I tested it on Safari just to see... it didn't work. And the code's so gargantuan that I don't know where to start fixing it. Especially with***out** a debugger (clearly I don't own a Mac).

So I pretty much just... rewrote everything in a separate version for Safari, but I no longer put so much importance on making it fancy and readable (probably the fact that I have to make it fancy to make it readable already means I went wrong somewhere with that whole writing readable code, but that's a lesson for future me). I tried a new approach in which I just fetch api'ed everything, mainly so that I can keep a count in my code and increase it every time a word is graded without resetting it. Makes for a good progress bar. But though it worked relying on Fetch for everything made it *sooooooooo* slow. I mean it took almost 7 seconds to GET or POST something!

I did try to replace Fetch with XHR but it's still so slow. Guess I will just... you guessed it... write it all over again. Aha.

## What I learned
- Modularizing my code and keeping stuff tiny and cute is important. It'll just make managing stuff just easier.
- All the time I spent adding event listeners, preventing default, removing event listeners or setting the {once: true} option could've been saved simply by just knowing form.submit() exists. (Again, the wonder of trial-n-error am I right?)
- Callbacks that act as event handlers automatically have the event passed to them (no more worrying about whether doSomething(e) counts as a callback), yay!
- github dot com is a bitch on mobile (nothing fucking loads!)
- I have no impulse control and have sunk way too much time on this shit. Time that could've been better spent actually learning Nihongo actually.
