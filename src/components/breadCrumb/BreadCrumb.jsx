import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BreadCrum.scss';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className="breadcrumb">
            <ul className='breadcrumb__wrapper'>
                <li>
                    <Link className='breadcrumb__main' to="/">Главная / </Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return (
                        <li className='breadcrumb__item' key={to}>
                            {index + 1 === pathnames.length ? (
                                value
                            ) : (
                                <Link to={to}>{value}</Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
