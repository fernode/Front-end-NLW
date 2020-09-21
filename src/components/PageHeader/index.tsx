import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logo from '../../assets/images/logo.svg';
import './styles.css';

interface PageHeaderProps {
  title: string;
  description?: String;
}

const PageHeader: FC<PageHeaderProps> = (props) => {
  return (
    <div>
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <img src={logo} alt="Proffy" />
        </div>

        <div className="header-content">
          <strong>{props.title}</strong>
          {props.description && <p>{props.description}</p>}
          {props.children}
        </div>
      </header>
    </div>
  );
};

export default PageHeader;
