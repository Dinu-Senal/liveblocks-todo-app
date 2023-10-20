import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import styles from './page.module.css';

export default async function Home() {

  const session = await getServerSession(options);

  console.log(session);

  return (
    <main className={styles.main}>
      {session ? (
        <div>Home</div>
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </main>
  )
}
