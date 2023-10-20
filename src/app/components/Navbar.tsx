import Link from "next/link";

import styles from '../page.module.css';

export default function Navbar() {
    return (
        <nav>
            <ul className={styles.flexRow}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/api/auth/signin">Sign In</Link></li>
                <li><Link href="/api/auth/signout">Sign Out</Link></li>
            </ul>
        </nav>
    );
}