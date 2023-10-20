import { createClient, LiveList } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
    publicApiKey: "pk_dev__EfBXH0-aGib7cMKRzSerLbtI7Fa_dV-nFfkohCA_a_1V2Rkwq9wcajXkW1aDBjO",
});

type Presence = {
    isTyping: boolean;
};
type Storage = {
    todos: LiveList<{ text: string }>;
};

export const {
    suspense: { 
        RoomProvider,
        useOthers,
        useUpdateMyPresence,
        useStorage,
        useMutation,
    },
} = createRoomContext<Presence, Storage>(client);