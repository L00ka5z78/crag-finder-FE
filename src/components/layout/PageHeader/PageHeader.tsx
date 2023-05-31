import { Link } from 'react-router-dom';
import { PageHeaderProps } from './page-header-props';

import './PageHeader.css';

export const PageHeader = ({
  title,
  info,
  link,
  linkText,
}: PageHeaderProps) => (
  <header>
    <h1 className="sectionTitle">{title}</h1>
    <p className="accountInfo">
      {info}
      <Link to={link} className="link">
        {linkText}
      </Link>
    </p>
  </header>
);
