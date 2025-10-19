import { getAuthHeaders } from "../utils/auth";

const API_URL = "http://localhost:3000/api";

const getConversations = async () => {
    const res = await fetch(`${API_URL}/conversations`, {
        method: "GET",
        headers: {
            ...getAuthHeaders(),
        },
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to fetch conversations");
    }

    return res.json();
};

const getConversationMessages = async (conversationId, participantId) => {
    const res = await fetch(
        `${API_URL}/conversations/${conversationId}?participantId=${participantId}`,
        {
            method: "GET",
            headers: {
                ...getAuthHeaders(),
            },
        },
    );

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
            errorData.error || "Failed to fetch conversation messages",
        );
    }

    return res.json();
};

const createMessage = async (id, content ) => {
    const res = await fetch(`${API_URL}/conversations/${id}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders(),
        },
        body: JSON.stringify({ content }),
    });

    if (!res.ok) {
        const errorData = await res.json();
        console.log("Error sending message: ", errorData);
        throw new Error(errorData.error || "Message not sent");
    }
    return res.json();
};


export { getConversations, getConversationMessages ,createMessage};
