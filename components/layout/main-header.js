import { useState } from 'react';
import Link from 'next/link';

import classes from './main-header.module.css';
import MenuToggleIcon from '../icons/menu';

function MainHeader() {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return(
        <header className={classes['header']}>
            <div className={classes['header-inner']}>
                <div className={classes['header-controls']}>
                    <button className={classes['menu-toggle']} aria-label='Open Menu' onClick={
                        () => {
                            setIsNavExpanded(!isNavExpanded);
                        }
                    }><MenuToggleIcon /></button>
                </div>
                <div className={classes['header-brand']}>
                    <Link href='/' className={classes['brand']}>The Football Directive</Link>
                </div>
                <div className={classes['header-cta']}>
                    <Link href='/' className={classes['cta-link']}>Subscribe</Link>
                </div>
            </div>
            <nav className={isNavExpanded ? 'navigation expanded' : 'navigation'}>
                <ul>
                    <li>
                        <Link href='/'>Live Table</Link>
                    </li>
                    <li>
                        <Link href='/'>Predictions</Link>
                    </li>
                    <li>
                        <Link href='/'>Results</Link>
                    </li>
                    <li>
                        <Link href='/'>Video</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default MainHeader;