import { screen } from '@testing-library/react';
import { render } from '../../../../utils';
import { SignIn } from '../SignIn';
import userEvent from '@testing-library/user-event';

describe('Sign In Layout test', () => {
  it('should render Home', () => {
    render(<SignIn />);
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });
});

describe('Sign In Interactions', () => {
  it('should return status 200', () => {
    render(<SignIn />);

    const button = screen.getByRole('button');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');

    userEvent.type(emailInput, 'test-email@test.com');
    userEvent.type(passwordInput, 'top-secret');
    userEvent.click(button);
  });
});
