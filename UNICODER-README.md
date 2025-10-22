# Unicoder - AI Code Assistant

Unicoder is a powerful AI code assistant powered by A4F.co, giving you access to hundreds of AI models including GPT-4, Claude, Gemini, and more - all through a single API key.

## Features

✨ **Multiple AI Models**: Access GPT-4, Claude 3.5, Gemini 2.0, and hundreds more models  
💬 **Chat Interface**: Ask questions and get help without leaving VS Code  
✏️ **Code Editing**: Edit code with natural language instructions  
🤖 **Agent Mode**: Let AI make substantial changes to your codebase  
⚡ **Autocomplete**: Get AI-powered code suggestions as you type  
🔍 **Codebase Understanding**: AI understands your entire project context

## Pre-configured Setup

Unicoder comes pre-configured with your A4F.co API key, so you can start coding immediately without any setup!

### Available Models (Pre-configured)

- **GPT-4o Latest** (provider-1/chatgpt-4o-latest)
- **GPT-4 Turbo** (provider-1/gpt-4-turbo)
- **GPT-3.5 Turbo** (provider-1/gpt-3.5-turbo)
- **Claude 3.5 Sonnet** (provider-2/claude-3-5-sonnet-20241022)
- **Claude 3 Opus** (provider-2/claude-3-opus-20240229)
- **Gemini 2.0 Flash** (provider-3/gemini-2.0-flash-exp)

## Keyboard Shortcuts

- **Cmd/Ctrl + L**: Add code to chat context and clear chat
- **Cmd/Ctrl + Shift + L**: Add code to chat context
- **Cmd/Ctrl + I**: Edit selected code with AI
- **Cmd/Ctrl + K, Cmd/Ctrl + M**: Open chat in new window
- **Cmd/Ctrl + K, Cmd/Ctrl + A**: Toggle autocomplete

## How to Use

### 1. Chat with AI
1. Select code (optional)
2. Press `Cmd/Ctrl + L`
3. Ask your question
4. Get instant AI-powered responses

### 2. Edit Code
1. Select the code you want to modify
2. Press `Cmd/Ctrl + I`
3. Describe what changes you want
4. Review and accept the changes

### 3. Autocomplete
- Just start typing
- AI suggestions appear automatically
- Press `Tab` to accept suggestions

## Configuration

Your A4F.co API key is already configured: `ddc-a4f-65e1f8bbd0a843189c92111fb399fc80`

### Adding More Models

To add more models from A4F.co:

1. Open Command Palette (`Cmd/Ctrl + Shift + P`)
2. Type "Unicoder: Open Settings"
3. Add models following this format:

```json
{
  "models": [
    {
      "title": "Your Model Name",
      "provider": "a4f",
      "model": "provider-X/model-name",
      "apiKey": "ddc-a4f-65e1f8bbd0a843189c92111fb399fc80",
      "apiBase": "https://api.a4f.co/v1/"
    }
  ]
}
```

### Available A4F.co Models

Visit [a4f.co/models](https://www.a4f.co/models) to see all available models. Models are named with provider prefixes like:
- `provider-1/` for OpenAI models
- `provider-2/` for Anthropic models
- `provider-3/` for Google models

## Features in Detail

### Context Providers
Unicoder automatically understands:
- Selected code
- Open files
- Terminal output
- Git diffs
- Compiler errors
- Entire codebase

### Slash Commands
Use these commands in chat:
- `/edit` - Edit selected code
- `/comment` - Add comments to code
- `/cmd` - Generate shell commands
- `/share` - Export chat to markdown

## Support

For issues or questions:
- Check the [A4F.co documentation](https://www.a4f.co/docs)
- View available models at [a4f.co/models](https://www.a4f.co/models)

## Privacy

- Telemetry is **disabled by default**
- Your code and conversations are sent to A4F.co for processing
- A4F.co API key is stored locally in your VS Code settings

---

Built on the Continue framework with A4F.co integration
