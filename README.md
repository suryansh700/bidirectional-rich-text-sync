# 🚀 Bidirectional Rich Text Sync Across Iframes

## Overview

This project demonstrates real-time synchronization of rich text formatting between two isolated iframe editors using the browser's `window.postMessage()` API.

Users can apply formatting in either editor and instantly see the same changes reflected in the other editor.

---

## Features

### Core Features

✅ Two independent iframe editors

✅ Rich text editing using contenteditable

✅ Bold formatting

✅ Italic formatting

✅ Strikethrough formatting

✅ Bidirectional synchronization

✅ Host page message broker

✅ Infinite loop prevention

---

### Nice To Have

✅ Origin validation

✅ Synchronization status indicator

✅ Professional responsive UI

✅ Action logging

---

### Bonus Features

✅ Real-time typing synchronization

✅ Live event logging

---

## Architecture

Frame A
↓
postMessage()
↓
Host Page
↓
Relay
↓
Frame B

Frame B
↓
postMessage()
↓
Host Page
↓
Relay
↓
Frame A

---

## Message Structure

```javascript
{
    type: "FORMAT_SYNC",
    action: "Bold",
    html: "<strong>Hello World</strong>"
}
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- window.postMessage()

## Security

The project validates message origins before processing incoming events.

```javascript
if(event.origin !== location.origin)
return;
```

## Infinite Loop Prevention

A synchronization flag prevents rebroadcasting received updates.

```javascript
if(syncing) return;
```

## How To Run

1. Clone repository

```bash
git clone https://github.com/yourusername/bidirectional-rich-text-sync.git
```

2. Open in VS Code

3. Install Live Server

4. Run index.html using Live Server

## Author

Suryansh Singh
B.Tech Information Technology
