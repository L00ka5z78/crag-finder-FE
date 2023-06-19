import { screen } from '@testing-library/react';
import { PageHeader } from '../PageHeader';
import { render } from '../../../../utils';

describe('PageHeader', () => {
  //   beforeEach(() => {
  // render(
  //   <PageHeader
  //     info="test-info"
  //     link="/sign-in-test"
  //     linkText="test-link"
  //     title="Test Title"
  //   />
  // );
  //   });
  it('should render PageHeader', () => {
    render(
      <PageHeader
        info="test-info"
        link="/sign-in-test"
        linkText="test-link"
        title="Test Title"
      />
    );
    expect(screen.getByText('test-info')).toBeInTheDocument();
  });

  it('should render PageHeader with provided info text', () => {
    render(
      <PageHeader
        info="test-info"
        link="/sign-in-test"
        linkText="test-link"
        title="Test Title"
      />
    );
    expect(screen.getByText('test-info')).toHaveTextContent('test-info');
  });

  it('should render PageHeader with provided title text', () => {
    render(
      <PageHeader
        info="test-info"
        link="/sign-in-test"
        linkText="test-link"
        title="Test Title"
      />
    );
    expect(screen.getByText('Test Title')).toHaveTextContent('Test Title');
  });

  it('should render PageHeader with provided link href', () => {
    render(
      <PageHeader
        info="test-info"
        link="/sign-in-test"
        linkText="test-link"
        title="Test Title"
      />
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', '/sign-in-test');
  });
});
