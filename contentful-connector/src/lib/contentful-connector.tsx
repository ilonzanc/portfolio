import * as contentful from 'contentful';

class ContentfulConnector {
  async getPage() {
    const clientSettings = {
      space: process.env['CONTENTFUL_SPACE_ID'] as string,
      accessToken: process.env['CONTENTFUL_DELIVERY_ACCESS_TOKEN'] as string,
      environment: process.env['CONTENTFUL_ENVIRONMENT_ID'] as string,
    };

    const client = contentful.createClient({
      ...clientSettings,
    });
    // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
    const pages = await client
      .getEntries({
        content_type: 'contentfulPage',
      })
      .then((response) => console.log(response.items))
      .catch(console.error);
  }
}

export { ContentfulConnector };
