import * as React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from '../avatar';

describe('Avatar tests', () => {
  it('should set a correct src image', () => {
    const { getByAltText } = render(<Avatar src={'/image/test.jpg'} alt={'cool'} />);
    expect(getByAltText('cool')).toHaveAttribute('src', '/image/test.jpg');
  });
});
