import { LoggedInUser } from '../LoggedInUser';
import { render, screen } from '@testing-library/react';

describe('LoggedInUser', () => {
  it('should render LoggedInUser', () => {
    render(<LoggedInUser />);
    const component = screen.getByText('Todo LogOut');
    console.log(component);
    expect(component).toBeInTheDocument();
    screen.getByRole('heading');
  });
});
