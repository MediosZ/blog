---
title: Switch to Arch Linux
date: 2023-06-10
tags:
  - OS
author: Tricster
location: Nanjing
---

I've been tried many operating systems, such as Windows, macOS and several Linux distributions. All of them have their own advantagies that makes me unable to stop using every one of them. For example, I will need Windows for gaming and Ubuntu for Deep Learning related projects.

But if I have to choose one as my favorite OS, I would choose Arch Linux. The reason is simple, it just gives me full control over the system and the community of Arch Linux is amazing. I am saying that it has no limit. On the contrary, I've been facing a lot of problems during the time using Arch Linux and there are even some that I haven't solved yet.

In this post, I would like to track some problems I solved as a reference for you and future me.

# Why Arch?

The primary operating system I've been using for years is Ubuntu, because it's popular among students and reseachers in the field of Deep Learning. Ubuntu is not bad, there are tons of posts around the Internet teaching you how to solve various problems on Ubuntu. I learnt so much about Linux on Ubuntu.

I am willing to try new things, such as tiling window managers, text editors, terminal emulators. I feel like I am able to be more productive when using these fancy tools.

So the main reason why I want to swtich to Arch Linux is that I want to use Hyprland, a tiling window manager with really fancy animations. Also I heard that Arch Linux is more configurable than Ubuntu. Also since Arch Linux follows a rolling-release model, I can use the latest softwares easily. I bet most of people don't like the feeling of being able to install out-dated softwares using `apt` only.

Anyway, after install it a few times and setup the basic environment, I start to feel good when using Arch Linux.

# Holes

After installing the Arch, I spent about two days on configuring the system. And there are few things I want to record here.

## Hidpi

Install:

```bash
paru -S xsettingsd hyprland-hidpi-xprop-git
```

Then configure Hyprland

```text
exec-once = systemctl --user start xsettingsd.service && echo "Xft.dpi: 192" | xrdb -merge && xprop -root -format _XWAYLAND_GLOBAL_OUTPUT_SCALE 32c -set _XWAYLAND_GLOBAL_OUTPUT_SCALE 2

```

## Remap Key

Install `paru -S xremap-x11-bin`
Then configure user to run without sudo

```bash
sudo echo uinput >> /etc/modules-load.d/uinput.conf
echo 'KERNEL=="uinput", GROUP="input", MODE="0660"' | sudo tee /etc/udev/rules.d/99-input.rules
sudo gpasswd -a $USER input
```

## Volume

Simply install `pulseaudio` and `pamixer`

## Input Chinese

Install required packages:

```bash
sudo pacman -S fcitx5 fcitx5-chinese-addons
```
