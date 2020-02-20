---
marp: true
theme: gaia
---

<!-- class: lead invert -->

# Sock it to me

## A websockets code along*

_(*or just follow along, that's cool too)_

---

<!-- class: default -->

#### Smol intro

* Two-way communication
* `ws://` and `wss://` protocols
* Event based
  * `open` - The connection has been established
  * `message` - A message has been received
  * `error` - An error occurred
  * `closed` - The connection was closed

---

#### What we're building

* A twitter-like app
* Websockets on both front and back end
* UI components are built out, we'll just be adding the functionality
* We're building the server from scratch
* Requirements
  * Node 10+
