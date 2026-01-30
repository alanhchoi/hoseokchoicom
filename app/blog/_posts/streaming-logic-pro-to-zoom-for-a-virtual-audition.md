---
title: "Streaming Logic Pro to Zoom for a Virtual Audition"
date: 2024-01-22
language: "en"
---

I recently finished my virtual audition for Berklee College of Music. Preparing for the audition, I watched a [YouTube video](https://www.youtube.com/watch?v=_pIz0JEAenA) that suggested using a slight compressor on a vocal track to prevent my voice from getting buried underneath instruments, which I thought was a good idea. However, the video only had instructions based on [Reaper](https://www.reaper.fm/), while I wanted to use Logic Pro. Also, since I needed to monitor myself singing, I figured out the necessary audio settings a few days prior to the audition; I thought so, until I found them not working as expected right before the audition. I had no choice but to finish it without monitoring. Later, I learned what I did wrong, so if you’re interested in how to set up Logic Pro and Zoom for your virtual audition, here’s how you can do it.

## Setting up your Logic Pro project

Before jumping into the audio settings, set up your Logic Pro project so that you have the tracks and plug-ins you’ll use during the audition, and you can monitor yourself. Make sure to use an external headphone to avoid feedback.

## Installing BlackHole

If you hear the exact sound that you want your interviewers to listen to, you’re ready to route the audio into Zoom. Since you cannot select Logic Pro as your microphone on Zoom settings, you need to install a special software named [**BlackHole**](https://existential.audio/blackhole/) that will add a virtual audio device to your system allowing routing audio between apps. Download and install it before moving on to the next steps.

## Routing audio to Zoom as well as your headphones

Routing audio output from Logic Pro directly to Zoom will remove the chance for the signal to be transmitted to your headphones; meaning you won’t be able to hear it. To work around the issue, we can create a multi-output device using the **Audio MIDI Setup** app on your Mac.

## Creating a multi-output device

1. Search the Audio MIDI Setup app on Spotlight. Open it.
1. Click the Add button with a plus sign at the bottom left corner, and choose **Create Multi-Output Device**.
1. Select the new multi-output device, then on the right side of the Audio Devices window, select **Blackhole 2ch** and your external headphones using checkboxes.

## Changing audio devices on Logic Pro and Zoom

Open Logic Pro settings, and choose Audio > Devices pane. From the Output Device pop-up menu, select the multi-output device you created in the previous step. Click the Apply button.

Now, the sound output will be sent to both your headphones and the virtual audio device created by BlackHole. Make sure to turn on the input monitoring so that you can hear your voice while you’re talking. Again, the interviewers will hear exactly the same sound that you hear through your headphones, so you must keep it on even when you’re not singing.

Next, open the Audio Settings On Zoom. Select **BlackHole 2ch** as your microphone. Below the Input Volume, uncheck **Automatically adjust microphone volume**, and select **Original sound for musicians** as your Audio Profile. Then, select all the checkboxes that appear as you select the audio profile: **High-fidelity music mode**, **Echo cancellation**, and **Stereo audio**. Finally, in your Zoom meeting, turn on **Original Sound for Musicians** using the toggle button at the top left corner of the window.

That’s it! Note that you don’t need to use the Share button in a Zoom meeting unless you are asked to play an audio outside Logic Pro. I hope this helps with your audition.
