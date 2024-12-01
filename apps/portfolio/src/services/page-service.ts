import { ContentfulConnector } from '@portfolio/contentful-connector';

class PageService {
  async getPageSlugs() {
    const contentfulConnector = new ContentfulConnector();
    try {
      const response = contentfulConnector.getPages();
      return response;
    } catch (error) {
      console.error('[PageService] - Could not fetch page slugs');
    }
  }

  // async getPageBySlug() {}
}

export { PageService };
