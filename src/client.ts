import { algoliasearch } from "algoliasearch";

export class AlgoliaSearchClient {
  private client;
  private indexName;

  constructor({
    applicationId,
    searchApiKey,
    indexName,
  }: {
    applicationId: string;
    searchApiKey: string;
    indexName: string;
  }) {
    this.client = algoliasearch(applicationId, searchApiKey);
    this.indexName = indexName;
  }

  async searchByQuery(params: { query: string }) {
    const { query } = params;
    const indexName = this.indexName;

    const { results } = await this.client.search({
      requests: [
        {
          indexName,
          query,
        },
      ],
    });
    return results;
  }
}
