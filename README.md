# Michael Olatunji Portfolio

A personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. The site presents Michael Olatunji's profile, featured projects, technical focus, and contact channels through a neon terminal-inspired interface with animated transitions and a Matrix-style background.

## Live URL

Visit the live site here: [https://shekinahcodes.vercel.app/](https://shekinahcodes.vercel.app/)

## Overview

This project is a single-page portfolio experience designed to:

- Introduce Michael Olatunji as a software and systems engineer
- Highlight selected projects with code and demo links
- Showcase technical skills across frontend, backend, systems, and tools
- Provide direct collaboration and contact options
- Let visitors send messages through an EmailJS-powered contact form

## Features

- Terminal-inspired hero section with smooth-scroll navigation
- Animated Matrix canvas background
- Scroll-based reveal animations powered by AOS
- About section with skills cards
- Featured projects rendered from a central data file
- Contact section with social links and availability details
- Contact form with success and error feedback modal
- Responsive layout for mobile and desktop

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- AOS
- EmailJS
- Lucide React

## Project Structure

```text
src/
  App.tsx
  MatrixBackground.tsx
  assets/data/projects.ts
  components/
    AboutMe.tsx
    Contact.tsx
    ContactForm.tsx
    Footer.tsx
    Header.tsx
    Project.tsx
    WorkStatus.tsx
    Collaborate.tsx
    ui/
      Modal.tsx
      ProjectsCard.tsx
      SkilsCard.tsx
```


## Design Notes

The interface uses a custom neon palette, JetBrains Mono typography, animated gradients, and subtle scanline effects to create a cyber-terminal aesthetic.

## Deployment

The live site is deployed on Vercel:

[https://shekinahcodes.vercel.app/](https://shekinahcodes.vercel.app/)
