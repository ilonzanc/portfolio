import * as contentful from 'contentful';

class ContentfulConnector {
  readonly client;

  constructor() {
    const clientSettings = {
      space: process.env['CONTENTFUL_SPACE_ID'] as string,
      accessToken: process.env['CONTENTFUL_DELIVERY_ACCESS_TOKEN'] as string,
      environment: process.env['CONTENTFUL_ENVIRONMENT_ID'] as string,
    };

    this.client = contentful.createClient({
      ...clientSettings,
    });
  }
  async getPages() {
    // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
    const pages = await this.client
      .getEntries({
        content_type: 'page',
      })
      .then((response) => response)
      .catch(console.error);

    return pages;
  }

  async getPageBySlug(slug: string) {
    // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
    const page = await this.client
      .getEntries({
        content_type: 'page',
        'fields.slug': slug,
        include: 10,
        limit: 1,
      })
      .then((response) => response.items[0])
      .catch(console.error);

    return page;
  }
}

export { ContentfulConnector };
