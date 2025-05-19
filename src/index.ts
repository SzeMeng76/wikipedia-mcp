#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import wiki from 'wikipedia';

const server = new McpServer({
    name: 'wikipedia',
    version: '1.0.0',
    description: 'Provides tools to query Wikipedia content, including summary, full content, references, categories, images, links, and more.'
});

server.tool(
    'get_summary',
    'Retrieve the summary of a given Wikipedia page.',
    {
        page: z.string().describe('The title of the Wikipedia page to retrieve.'),
    },
    async ({ page }) => {
        try {
            const summary = await wiki.summary(page);
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(summary, null, 2),
                    },
                ],
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `Summary error: ${error.message || JSON.stringify(error)}`,
                    },
                ],
            };
        }
    },
);

server.tool(
    'get_content',
    'Retrieve the full plain text content of a Wikipedia page.',
    {
        page: z.string().describe('The title of the Wikipedia page to retrieve.'),
    },
    async ({ page }) => {
        try {
            const wikiPage = await wiki.page(page);
            const content = await wikiPage.content();
            return {
                content: [
                    {
                        type: 'text',
                        text: content,
                    },
                ],
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `Content error: ${error.message || JSON.stringify(error)}`,
                    },
                ],
            };
        }
    },
);

server.tool(
    'get_html',
    'Retrieve the rendered HTML of a Wikipedia page.',
    {
        page: z.string().describe('The title of the Wikipedia page to retrieve.'),
    },
    async ({ page }) => {
        try {
            const wikiPage = await wiki.page(page);
            const html = await wikiPage.html();
            return {
                content: [
                    {
                        type: 'text',
                        text: html,
                    },
                ],
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `HTML error: ${error.message || JSON.stringify(error)}`,
                    },
                ],
            };
        }
    },
);

server.tool(
    'get_images',
    'Retrieve a list of image URLs from a Wikipedia page.',
    {
        page: z.string().describe('The title of the Wikipedia page to retrieve.'),
    },
    async ({ page }) => {
        try {
            const wikiPage = await wiki.page(page);
            const images = await wikiPage.images();
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(images, null, 2),
                    },
                ],
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `Images error: ${error.message || JSON.stringify(error)}`,
                    },
                ],
            };
        }
    },
);

server.tool(
    'get_links',
    'Retrieve a list of internal Wikipedia links from a page.',
    {
        page: z.string().describe('The title of the Wikipedia page to retrieve.'),
    },
    async ({ page }) => {
        try {
            const wikiPage = await wiki.page(page);
            const links = await wikiPage.links();
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(links, null, 2),
                    },
                ],
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `Links error: ${error.message || JSON.stringify(error)}`,
                    },
                ],
            };
        }
    },
);

server.tool(
    'get_references',
    'Retrieve external reference URLs cited on a Wikipedia page.',
    {
        page: z.string().describe('The title of the Wikipedia page to retrieve.'),
    },
    async ({ page }) => {
        try {
            const wikiPage = await wiki.page(page);
            const references = await wikiPage.references();
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(references, null, 2),
                    },
                ],
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `References error: ${error.message || JSON.stringify(error)}`,
                    },
                ],
            };
        }
    },
);

server.tool(
    'get_categories',
    'Retrieve the list of categories for a Wikipedia page.',
    {
        page: z.string().describe('The title of the Wikipedia page to retrieve.'),
    },
    async ({ page }) => {
        try {
            const wikiPage = await wiki.page(page);
            const categories = await wikiPage.categories();
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(categories, null, 2),
                    },
                ],
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `Categories error: ${error.message || JSON.stringify(error)}`,
                    },
                ],
            };
        }
    },
);

server.tool(
    'get_url',
    'Retrieve the canonical URL of a Wikipedia page.',
    {
        page: z.string().describe('The title of the Wikipedia page to retrieve.'),
    },
    async ({ page }) => {
        try {
            const wikiPage = await wiki.page(page);
            const url = wikiPage.fullurl;
            return {
                content: [
                    {
                        type: 'text',
                        text: url,
                    },
                ],
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `URL error: ${error.message || JSON.stringify(error)}`,
                    },
                ],
            };
        }
    },
);

server.tool(
    'get_title',
    'Retrieve the title of a Wikipedia page after normalization.',
    {
        page: z.string().describe('The title of the Wikipedia page to retrieve.'),
    },
    async ({ page }) => {
        try {
            const wikiPage = await wiki.page(page);
            return {
                content: [
                    {
                        type: 'text',
                        text: wikiPage.title,
                    },
                ],
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `Title error: ${error.message || JSON.stringify(error)}`,
                    },
                ],
            };
        }
    },
);

server.tool(
    'get_page_id',
    'Retrieve the internal Wikipedia page ID.',
    {
        page: z.string().describe('The title of the Wikipedia page to retrieve.'),
    },
    async ({ page }) => {
        try {
            const wikiPage = await wiki.page(page);
            return {
                content: [
                    {
                        type: 'text',
                        text: wikiPage.pageid.toString(),
                    },
                ],
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `Page ID error: ${error.message || JSON.stringify(error)}`,
                    },
                ],
            };
        }
    },
);

server.tool(
    'search_pages',
    'Search Wikipedia for pages matching a query term.',
    {
        query: z.string().describe('Search term to find Wikipedia pages.'),
    },
    async ({ query }) => {
        try {
            const searchResults = await wiki.search(query);
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(searchResults, null, 2),
                    },
                ],
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `Search error: ${error.message || JSON.stringify(error)}`,
                    },
                ],
            };
        }
    },
);

server.tool(
    'check_page_exists',
    'Check whether a Wikipedia page exists.',
    {
        page: z.string().describe('The title of the Wikipedia page to check.'),
    },
    async ({ page }) => {
        try {
            await wiki.page(page);
            return {
                content: [
                    {
                        type: 'text',
                        text: 'true',
                    },
                ],
            };
        } catch (error) {
            if (error.message && error.message.includes('Page not found')) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: 'false',
                        },
                    ],
                };
            }
            return {
                content: [
                    {
                        type: 'text',
                        text: `Existence check error: ${error.message || JSON.stringify(error)}`,
                    },
                ],
            };
        }
    },
);

server.tool(
    'disambiguation_options',
    'Get disambiguation options for an ambiguous Wikipedia page.',
    {
        page: z.string().describe('The title of the Wikipedia page to check for disambiguation.'),
    },
    async ({ page }) => {
        try {
            await wiki.page(page);
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify({ disambiguation: false, options: [] }, null, 2),
                    },
                ],
            };
        } catch (error) {
            if (error.message && error.message.includes('Disambiguation')) {
                // Parse out the options from the error message
                const options = error.message
                    .substring(error.message.indexOf('[') + 1, error.message.lastIndexOf(']'))
                    .split(',')
                    .map(option => option.trim());
                return {
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify({ disambiguation: true, options }, null, 2),
                        },
                    ],
                };
            }
            return {
                content: [
                    {
                        type: 'text',
                        text: `Disambiguation check error: ${error.message || JSON.stringify(error)}`,
                    },
                ],
            };
        }
    },
);

server.tool(
    'on_this_day',
    'Get events that happened on this day in history.',
    {
        type: z.string().optional().describe('Type of event (events, births, deaths, holidays, selected)'),
        month: z.string().optional().describe('Month (1-12)'),
        day: z.string().optional().describe('Day (1-31)'),
    },
    async ({ type, month, day }) => {
        try {
            const options = {};
            if (type) options.type = type;
            if (month) options.month = month;
            if (day) options.day = day;
            
            const events = await wiki.onThisDay(options);
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(events, null, 2),
                    },
                ],
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `On This Day error: ${error.message || JSON.stringify(error)}`,
                    },
                ],
            };
        }
    },
);

server.tool(
    'set_language',
    'Set the language for Wikipedia requests.',
    {
        language: z.string().describe('Language code (e.g., "en", "fr", "es")'),
    },
    async ({ language }) => {
        try {
            const newUrl = await wiki.setLang(language);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Language set to "${language}". New API URL: ${newUrl}`,
                    },
                ],
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `Language setting error: ${error.message || JSON.stringify(error)}`,
                    },
                ],
            };
        }
    },
);

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.log('Wikipedia MCP Server running on stdio');
}

main().catch((error) => {
    console.error('Fatal error in main():', error);
    process.exit(1);
});
