# dsh-settings-icon-manager

Semantic icons for third-party settings sections in [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH).

[中文说明](README_CN.md)

## Features

- Replaces the default gear icon on third-party settings sections with meaningful outline icons.
- Includes mappings for Mobile Access, Snapshots, File Mentions, Web UI Plugins, Skin Center, Pets, and Community Plugins.
- Provides an **Icon Manager** settings page for choosing an icon per entry.
- Includes about 50 icons across files, development, networking, security, media, organization, and common actions.
- Uses a compact two-column entry layout and a six-column icon picker.
- Stores preferences locally in the browser without modifying other plugins.

## Install

```powershell
dsh plugin --profile web add github:zhoupengjie/dsh-settings-icon-manager
```

Restart `dsh web`, then open **Icon Manager** from the settings sidebar.

## Development

The client code is in `src/client.js`. The plugin observes the settings sidebar DOM and replaces fallback icons, so it may need an update if DSH changes that internal structure.

## License

MIT
