Wikipedia MCP Server
A Model Context Protocol (MCP) server for Wikipedia, allowing you to interact with Wikipedia content through AI models and applications.
Show Image
Show Image
Features

Query Wikipedia pages for summaries, content, HTML, and more
Search Wikipedia for articles matching specific terms
Get lists of images, links, references, and categories
Check page existence and disambiguation options
See historical events that happened on specific days
Support for multiple languages

Installation
Global Installation
bashnpm install -g wikipedia-mcp
Usage with npx
bashnpx wikipedia-mcp
Project Structure
wikipedia-mcp/
├── .github/                # GitHub workflows and templates
├── src/                    # Source code
│   └── index.ts            # Main server implementation
├── dist/                   # Compiled JavaScript output
├── package.json            # Project metadata and dependencies
├── tsconfig.json           # TypeScript configuration
├── LICENSE                 # MIT License
└── README.md               # This file
Available Tools
Tool NameDescriptionget_summaryRetrieve the summary of a Wikipedia pageget_contentRetrieve the full plain text content of a Wikipedia pageget_htmlRetrieve the rendered HTML of a Wikipedia pageget_imagesRetrieve a list of image URLs from a Wikipedia pageget_linksRetrieve a list of internal Wikipedia links from a pageget_referencesRetrieve external reference URLs cited on a Wikipedia pageget_categoriesRetrieve the list of categories for a Wikipedia pageget_urlRetrieve the canonical URL of a Wikipedia pageget_titleRetrieve the title of a Wikipedia page after normalizationget_page_idRetrieve the internal Wikipedia page IDsearch_pagesSearch Wikipedia for pages matching a query termcheck_page_existsCheck whether a Wikipedia page existsdisambiguation_optionsGet disambiguation options for an ambiguous Wikipedia pageon_this_dayGet events that happened on this day in historyset_languageSet the language for Wikipedia requests
Examples
Connecting to the MCP Server
You can connect to the Wikipedia MCP server using any MCP client implementation. Here are examples using different frameworks:
Using Vercel AI SDK
typescriptimport { createMCPClient } from 'ai/mcp';
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
Example: Get Summary for a Page
typescriptconst summary = await wikipediaClient.tools().get_summary({
  page: 'Artificial intelligence'
});
console.log(summary);
Example: Search Wikipedia
typescriptconst searchResults = await wikipediaClient.tools().search_pages({
  query: 'quantum computing'
});
console.log(searchResults);
Example: Events On This Day
typescriptconst events = await wikipediaClient.tools().on_this_day({
  month: '7',
  day: '20',
  type: 'events'
});
console.log(events);
Development
Prerequisites

Node.js 18 or later
npm or yarn

Setup
bash# Clone the repository
git clone https://github.com/yourusername/wikipedia-mcp.git
cd wikipedia-mcp

# Install dependencies
npm install

# Build the project
npm run build

# Start the server
npm start
Testing Locally
To test your MCP server locally:
bash# Start the server in one terminal
npm start

# In another terminal, use a client to connect to the server
# Examples will depend on your client implementation
License
MIT
Acknowledgments

This project uses the wikipedia NPM package
Built with the Model Context Protocol (MCP) standard
