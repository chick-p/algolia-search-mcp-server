# Algolia Search MCP Server

## Features

- Search for any text in your Algolia index

## Setup

This package is installed as local.

1. Clone the repository

1. Install dependencies

   ```shell
   cd algolia-search-mcp-server
   pnpm install
   ```

1. Build the project and install it globally

   ```shell
   pnpm build
   npm install -g .
   ```

1. Configure your IDE:

    - cline(cline_mcp_settings.json)

      ```json
      {
        "mcpServers": {
          "algolia-search-server": {
            "command": "algolia-search-server",
            "env": {
              "ALGOLIA_APPLICATION_ID": "<YOUR_ALGOLIA_APPLICATION_ID>",
              "ALGOLIA_SEARCH_API_KEY": "<YOUR_ALGOLIA_SEARCH_API_KEY>",
              "ALGOLIA_INDEX_NAME": "<YOUR_ALGOLIA_INDEX_NAME>"
            }
          }
        }
      }
      ```

    - Visual Studio Code(`settings.json`)

      ```json
      {
        "chat.mcp.discovery.enabled": true,
        "mcp": {
            "inputs": [],
            "servers": {
                "mcp-server-time": {
                    "command": "algolia-search-server",
                    "env": {
                      "ALGOLIA_APPLICATION_ID": "<YOUR_ALGOLIA_APPLICATION_ID>",
                      "ALGOLIA_SEARCH_API_KEY": "<YOUR_ALGOLIA_SEARCH_API_KEY>",
                      "ALGOLIA_INDEX_NAME": "<YOUR_ALGOLIA_INDEX_NAME>"
                    }
                }
            }
        }
      }
      ```
