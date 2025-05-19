非常抱歉误解了您的需求。我明白您需要可以直接粘贴到GitHub的README.md编辑界面中的内容。

以下是纯文本格式的README内容，您可以直接复制整段文本，然后粘贴到GitHub的README.md编辑器中：

# Wikipedia MCP Server

A Model Context Protocol (MCP) server for Wikipedia, allowing you to interact with Wikipedia content through AI models and applications.

[![NPM Version](https://img.shields.io/npm/v/wikipedia-mcp.svg)](https://www.npmjs.com/package/wikipedia-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- Query Wikipedia pages for summaries, content, HTML, and more
- Search Wikipedia for articles matching specific terms
- Get lists of images, links, references, and categories
- Check page existence and disambiguation options
- See historical events that happened on specific days
- Support for multiple languages

## Installation

### Global Installation

```bash
npm install -g wikipedia-mcp
```

### Usage with npx

```bash
npx wikipedia-mcp
```

## Available Tools

| Tool Name | Description |
|-----------|-------------|
| `get_summary` | Retrieve the summary of a Wikipedia page |
| `get_content` | Retrieve the full plain text content of a Wikipedia page |
| `get_html` | Retrieve the rendered HTML of a Wikipedia page |
| `get_images` | Retrieve a list of image URLs from a Wikipedia page |
| `get_links` | Retrieve a list of internal Wikipedia links from a page |
| `get_references` | Retrieve external reference URLs cited on a Wikipedia page |
| `get_categories` | Retrieve the list of categories for a Wikipedia page |
| `get_url` | Retrieve the canonical URL of a Wikipedia page |
| `get_title` | Retrieve the title of a Wikipedia page after normalization |
| `get_page_id` | Retrieve the internal Wikipedia page ID |
| `search_pages` | Search Wikipedia for pages matching a query term |
| `check_page_exists` | Check whether a Wikipedia page exists |
| `disambiguation_options` | Get disambiguation options for an ambiguous Wikipedia page |
| `on_this_day` | Get events that happened on this day in history |
| `set_language` | Set the language for Wikipedia requests |

## Examples

### Connecting to the MCP Server

You can connect to the Wikipedia MCP server using any MCP client implementation. Here are examples using different frameworks:

#### Using Vercel AI SDK

```typescript
import { createMCPClient } from 'ai/mcp';
import { StdioMCPTransport } from 'ai/mcp-stdio';

const transport = new StdioMCPTransport({
  command: 'wikipedia-mcp',
  args: []
});

const wikipediaClient = await createMCPClient({
  name: 'wikipedia',
  transport
});

const tools = await wikipediaClient.tools();
console.log(tools); // Lists all available tools
```

#### Example: Get Summary for a Page

```typescript
const summary = await wikipediaClient.tools().get_summary({
  page: 'Artificial intelligence'
});
console.log(summary);
```

#### Example: Search Wikipedia

```typescript
const searchResults = await wikipediaClient.tools().search_pages({
  query: 'quantum computing'
});
console.log(searchResults);
```

#### Example: Events On This Day

```typescript
const events = await wikipediaClient.tools().on_this_day({
  month: '7',
  day: '20',
  type: 'events'
});
console.log(events);
```

## Development

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/wikipedia-mcp.git
cd wikipedia-mcp

# Install dependencies
npm install

# Build the project
npm run build

# Start the server
npm start
```

### Testing Locally

To test your MCP server locally:

```bash
# Start the server in one terminal
npm start

# In another terminal, use a client to connect to the server
# Examples will depend on your client implementation
```

## License

MIT

## Acknowledgments

- This project uses the [wikipedia](https://www.npmjs.com/package/wikipedia) NPM package
- Built with the Model Context Protocol (MCP) standard
