'use client'

import { LiveList } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";
import { RoomProvider } from "../../../liveblocks.config";

import { TodoList } from '../components/LiveblocksComponents';

import styles from '../page.module.css';

export default function Dashboard() {

    return (
        <RoomProvider 
            id="next-todo-list" 
            initialPresence={{ isTyping: false }}
            initialStorage={{ todos: new LiveList() }}
        >
            <ClientSideSuspense fallback={<div>Loading...</div>}>
               {
                () => (
                    <div className={styles.main}>
                        <TodoList />
                    </div>
                )
               }
            </ClientSideSuspense>
        </RoomProvider>
    )

}