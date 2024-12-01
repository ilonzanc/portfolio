import { ContentfulConnector } from '@portfolio/contentful-connector';

class PageService {
  async getPageSlugs() {
    const contentfulConnector = new ContentfulConnector();
    try {
      const response = await contentfulConnector.getPages();
      const pageSlugs = response.items.map((item) => item.fields.slug);
      return pageSlugs;
    } catch (error) {
      console.error(
        '[PageService - getPageSlugs] - Could not fetch page slugs'
      );
    }
  }

  async getPageBySlug(slug) {
    const contentfulConnector = new ContentfulConnector();
    try {
      const response = await contentfulConnector.getPageBySlug(slug);
      console.log(
        'getPageBySlug response content type: ',
        response.sys.contentType.sys.id
      );
      console.log('getPageBySlug response: ', response);
      const pageData = response.fields;
      return pageData;
    } catch (error) {
      console.error('[PageService - getPageBySlug] Could not fetch page slugs');
    }
  }
}

export { PageService };
