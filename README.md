# Intercom Beacon

Lightweight Agent Status Beacon feature built on top of **Intercom** — a decentralized peer-to-peer communication framework for autonomous agents.

This fork introduces periodic presence broadcasts over the Intercom sidechannel to enable simple peer discovery and status reporting.

---

## 📌 Features

- 🛰️ Status heartbeat broadcast every 15s  
- 👤 Includes peer public key and capabilities  
- 📊 Load indicator (random for now)  
- 🔁 Broadcast over Intercom sidechannel (`0000intercom`)  
- 🗂️ Fully compatible with existing Intercom network

---

## 🚀 Quick Start

### 1. Clone your fork

```bash
git clone https://github.com/jerquinae/intercom
cd intercom
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Pear runtime

```bash
npm install -g pear
```

### 4. Run Intercom with beacon enabled

```bash
pear run .
```

You should see logs like:

```
[Beacon] started
[Beacon] heartbeat: { … }
```

---

## 📡 Beacon Format

Agents broadcast a `beacon.status` object over the sidechannel with this format:

```json
{
  "type": "beacon.status",
  "peer": "<hex public key>",
  "capabilities": ["beacon-layer", "status-broadcast"],
  "load": "<0.00-1.00>",
  "ts": 1700000000000
}
```

---

## 📘 Example Output

```
[Beacon] started
[Beacon] heartbeat: {
  type: 'beacon.status',
  peer: 'abc123…',
  capabilities: ['beacon-layer','status-broadcast'],
  load: '0.42',
  ts: 1700000000000
}
```

---

## 🧠 Details

This extension enhances the base Intercom agent with a continuous simple presence layer.  
Beacon messages can be consumed by other agents to build a live registry of active peers.

---

## 🛠 Development

Beacon logic lives in:

```
features/beacon.js
```

And is invoked from:

```
index.js
```

---

## 📄 SKILL

See [`SKILL.md`](SKILL.md) for the formal skill definition and instructions for agent compatibility.

---

## 🧾 License

This project uses the same license as the base Intercom (MIT).

---
##  Trac Address

`trac1dph4g3mezl3rg06682l4h799t9pjggnakme7dgpdwce6679q07uqjkp9q8`
