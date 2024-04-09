# Title-cards

Quick and dirty proyect to show a series of title cards on OBS.

**NOTE: This is just an initial proof-of-concept and still in early development, meaning it still does not work properly.**

## Setup
- Clone repository
- install dependencies `pnpm install`
- Run in dev mode `pnpm run dev`
- Open a Browser Source in OBS
  - `http://localhost:8888`
  - Height: `700`
  - Width: `500`

# Usage
- Load the text in `App.tsx`, in the `'messages'` array`
- Enable/disable the current card using spacebar
- Move to the next/previous card using arrow keys -> and <- 