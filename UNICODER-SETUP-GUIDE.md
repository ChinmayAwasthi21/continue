# Unicoder Setup Guide

This guide will help you build and install the Unicoder VS Code extension with your A4F.co API key pre-configured.

## What is Unicoder?

Unicoder is a customized version of the Continue AI code assistant, pre-configured with your A4F.co API key (ddc-a4f-65e1f8bbd0a843189c92111fb399fc80) to give you instant access to hundreds of AI models including:

- GPT-4o, GPT-4 Turbo, GPT-3.5
- Claude 3.5 Sonnet, Claude 3 Opus
- Gemini 2.0 Flash
- And hundreds more models

## Prerequisites

- Node.js 20.19.0 or higher
- npm or yarn
- VS Code 1.70.0 or higher

## Building the Extension

### 1. Install Dependencies

```bash
# Navigate to the core package
cd /app/core
npm install

# Navigate to the VS Code extension
cd /app/extensions/vscode
npm install
```

### 2. Build the Extension

```bash
cd /app/extensions/vscode

# Build the extension
npm run esbuild

# Package the extension (creates .vsix file)
npm run package
```

This will create a file named `unicoder-1.1.72.vsix` (or similar) in the `extensions/vscode` directory.

## Installing the Extension

### Method 1: Install from VSIX (Recommended)

1. Open VS Code
2. Press `Cmd/Ctrl + Shift + P` to open Command Palette
3. Type "Extensions: Install from VSIX"
4. Select the generated `.vsix` file
5. Reload VS Code when prompted

### Method 2: Install for Development

```bash
cd /app/extensions/vscode

# Copy the extension to VS Code extensions folder
# On macOS/Linux:
cp -r . ~/.vscode/extensions/unicoder-1.1.72/

# On Windows:
# Copy to: %USERPROFILE%\.vscode\extensions\unicoder-1.1.72\
```

Then reload VS Code.

## Verification

After installation:

1. Look for the **Unicoder** icon in the VS Code activity bar (left sidebar)
2. Click it to open the Unicoder panel
3. Try asking a question - it should work immediately without any configuration!

## Using Unicoder

### Quick Start

1. **Open Unicoder**: Click the Unicoder icon in the sidebar
2. **Ask a Question**: Type your question and press Enter
3. **Select Code**: Select code in your editor and press `Cmd/Ctrl + L` to add it to chat
4. **Edit Code**: Select code and press `Cmd/Ctrl + I` to edit with AI

### Available Models

All these models are pre-configured and ready to use:

- **GPT-4o Latest** - Best for complex tasks
- **GPT-4 Turbo** - Fast and capable
- **GPT-3.5 Turbo** - Quick responses
- **Claude 3.5 Sonnet** - Great for code
- **Claude 3 Opus** - Most capable Claude model
- **Gemini 2.0 Flash** - Fast and efficient

### Switching Models

1. Open Unicoder panel
2. Click on the model dropdown at the top
3. Select your preferred model

## Configuration

### Pre-configured Settings

Your extension comes with:
- ✅ A4F.co API key: `ddc-a4f-65e1f8bbd0a843189c92111fb399fc80`
- ✅ API endpoint: `https://api.a4f.co/v1/`
- ✅ Multiple models ready to use
- ✅ Autocomplete enabled
- ✅ Telemetry disabled for privacy

### Adding More Models

To add models from A4F.co:

1. Visit [a4f.co/models](https://www.a4f.co/models) to see available models
2. Open Unicoder settings (gear icon in Unicoder panel)
3. Add models in this format:

```json
{
  "models": [
    {
      "title": "Model Display Name",
      "provider": "a4f",
      "model": "provider-X/model-id",
      "apiKey": "ddc-a4f-65e1f8bbd0a843189c92111fb399fc80",
      "apiBase": "https://api.a4f.co/v1/"
    }
  ]
}
```

Model naming convention:
- `provider-1/` = OpenAI models
- `provider-2/` = Anthropic models  
- `provider-3/` = Google models

### Custom Configuration File

A sample configuration is available at `/app/unicoder-config-sample.json`

To use it:
1. Copy it to `~/.continue/config.json`
2. Modify as needed
3. Restart VS Code

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + L` | Add code to chat and clear |
| `Cmd/Ctrl + Shift + L` | Add code to context |
| `Cmd/Ctrl + I` | Edit selected code |
| `Cmd/Ctrl + K, M` | Open in new window |
| `Cmd/Ctrl + K, A` | Toggle autocomplete |
| `Tab` | Accept autocomplete suggestion |

## Features

### 💬 Chat
- Ask questions about your code
- Get explanations and suggestions
- Debug errors
- Learn new concepts

### ✏️ Edit
- Modify code with natural language
- Refactor functions
- Add documentation
- Fix bugs

### 🤖 Agent Mode
- Make large-scale changes
- Implement features across multiple files
- Refactor entire modules

### ⚡ Autocomplete
- Get suggestions as you type
- Accept with Tab
- Works with all configured models

### 🔍 Context Awareness
Unicoder understands:
- Selected code
- Open files
- Terminal output
- Git changes
- Compiler errors
- Your entire codebase

## Troubleshooting

### Extension doesn't appear
- Make sure VS Code is reloaded (`Cmd/Ctrl + Shift + P` > "Reload Window")
- Check Extensions view (`Cmd/Ctrl + Shift + X`) to see if Unicoder is installed

### Models not working
- Check your internet connection
- Verify the A4F.co API key is valid at [a4f.co](https://www.a4f.co)
- Try a different model

### Build fails
- Ensure Node.js 20.19.0 or higher is installed
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run tsc:check`

### Autocomplete not working
- Check if autocomplete is enabled: `Cmd/Ctrl + K, A`
- Try reloading VS Code
- Check settings: `continue.enableTabAutocomplete` should be `true`

## API Key Information

Your pre-configured A4F.co API key: `ddc-a4f-65e1f8bbd0a843189c92111fb399fc80`

- **Location**: Configured in `/app/core/config/onboarding.ts`
- **Endpoint**: https://api.a4f.co/v1/
- **Models**: Access to hundreds of models from multiple providers
- **Documentation**: https://www.a4f.co/docs

## Building from Source

If you want to modify Unicoder:

```bash
# 1. Make your changes to the source code

# 2. Rebuild
cd /app/extensions/vscode
npm run esbuild

# 3. Test in development mode
# Press F5 in VS Code to launch Extension Development Host

# 4. Package when ready
npm run package
```

## Additional Resources

- **A4F.co Documentation**: https://www.a4f.co/docs
- **Available Models**: https://www.a4f.co/models
- **Continue Framework**: https://github.com/continuedev/continue
- **Usage Guide**: See `UNICODER-README.md`

## Support

For issues:
1. Check the A4F.co API status
2. Verify your API key at a4f.co
3. Review the troubleshooting section above
4. Check VS Code Developer Tools (`Help > Toggle Developer Tools`)

---

**Built on Continue framework with A4F.co integration**

Your API Key: `ddc-a4f-65e1f8bbd0a843189c92111fb399fc80`  
Endpoint: `https://api.a4f.co/v1/`
