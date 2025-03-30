#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { AlgoliaSearchClient } from "./client.js";

const applicationId = process.env.ALGOLIA_APPLICATION_ID;
const searchApiKey = process.env.ALGOLIA_SEARCH_API_KEY;
const indexName = process.env.ALGOLIA_INDEX_NAME;

if (!applicationId) {
  console.error("ALGOLIA_APPLICATION_ID environment variable is required");
  process.exit(1);
}

if (!searchApiKey) {
  console.error("ALGOLIA_SEARCH_API_KEY environment variable is required");
  process.exit(1);
}

if (!indexName) {
  console.error("ALGOLIA_INDEX_NAME environment variable is required");
  process.exit(1);
}

const server = new McpServer({
  name: "algolia-search-server",
  version: "0.0.1",
});

server.tool(
  "search_index",
  "Search query from Algolia index",
  {
    q: z.string().optional().default("").describe("Query string"),
  },
  async ({ q }) => {
    const client = new AlgoliaSearchClient({
      applicationId,
      searchApiKey,
      indexName,
    });
    const response = await client.searchByQuery({ query: q });

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(response, null, 2),
        },
      ],
    };
  },
);

const transport = new StdioServerTransport();
await server.connect(transport);
