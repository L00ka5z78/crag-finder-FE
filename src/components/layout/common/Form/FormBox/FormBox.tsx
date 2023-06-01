import './FormBox.css';

interface Props {
  children: React.ReactNode;
}
export const FormBox = ({ children }: Props) => {
  return <section className="formBox">{children}</section>;
};
