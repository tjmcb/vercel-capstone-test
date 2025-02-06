---
sidebar_position: 1
---

# System Overview
## Project Abstract
This project offers an interactive and accessible social experience for children in elementary school who struggle with verbal communication. Users will be able to participate in a game of “Go Fish” with their peers while having Augmentative and Alternative Communication (AAC) available to them. Each user will take turns until the game is complete and one of the users has won. The game can be played between multiple devices, as long as each user has access to a web browser. An interactive AAC interface will meet users' communication needs by offering commonly used Go Fish phrases, as well as further options for individualized customization. The game will show the AAC communication while it is in progress as this visual cue is important for empathy building among users. The goal of this project is to provide a seamless and interactive experience for children regardless of their ability to communicate verbally.

## Conceptual Design
The game will be played on two to four separate devices. One player will host the game and others can join using a unique code. The frontend will be built using React.js, which will be used to build and manage the game components. The backend will be built using Python, which will be used to store game identifiers and connections and the state of the game and its logic. FastAPI will be used to process requests between the frontend and backend.

## Background
The system used to connect devices together will mirror what is used by Kahoot. Specifically, the creation of the unique code to connect to a game session through a web browser. The game will also abide by AAC system design guidelines and principles, as well as prior research on AAC communication. This includes the use of grid displays, a commonly used tool that creates sentences for people who struggle with verbal communication. Inclusion of features such as showing in-progress AAC communication, as well as a customizable AAC interface, aim to reduce social isolation by meeting the communication needs of each individual user and promoting empathy building.
