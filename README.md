<p align="center">
  <img width="160" height="160" src="https://avatars.githubusercontent.com/u/65117737?s=160&v=4" />
</p>
<h1 align="center">Slow Roads App</h1>
<h3 align="center">
  Seek the peace of a long, scenic drive on Open Web Desktop.
</h3>

<br />

## Overview

This app for Open Web Desktop allows you to play Slow Roads.

[Demo](https://dxlliv.github.io/app-slowroads/) · [Documentation](https://owdproject.github.io/docs/)

## Installation

```bash
pnpm desktop add app-slowroads --from dxlliv
```

## Configuration

Add the app to your `desktop.config.ts`:

```ts
export default defineDesktopConfig({
  apps: [
    '@owdproject/app-slowroads'
  ]
})
```

## License

This application is released under the [MIT License](LICENSE).
