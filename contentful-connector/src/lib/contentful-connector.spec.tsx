import { render } from '@testing-library/react';

import ContentfulConnector from './contentful-connector';

describe('ContentfulConnector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentfulConnector />);
    expect(baseElement).toBeTruthy();
  });
});
