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
    console.log("convoId:", conversationId);
    console.log("partId:", participantId);

    const res = await fetch(
        `${API_URL}/conversations/${conversationId}?participantId=${Number(participantId)}`,
        {
            method: "GET",
            headers: {
                ...getAuthHeaders(),
            },
        },
    );

    if (res.status === 401) {
        alert("Permission denied");
    } else if (res.status === 404) {
        alert("Conversation Not Found");
    }

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
            errorData.error || "Failed to fetch conversation messages",
        );
    }

    return res.json();
};

const getConversationById = async (id) => {
    const res = await fetch(`${API_URL}/conversations/${id}`, {
        method: "GET",
        headers: {
            ...getAuthHeaders(),
        },
    });

    if (res.status === 401) {
        alert("Permission denied");
    } else if (res.status === 404) {
        alert("Conversation Not Found");
    }

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to fetch conversation");
    }

    return res.json();
};

const createConversation = async (participantId) => {
    const res = await fetch(`${API_URL}/conversations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders(),
        },
        body: JSON.stringify({ participantId }),
    });

    if (!res.ok) {
        const errorData = await res.json();
        console.log("Error creating convo: ", errorData);
        throw new Error(errorData.error || "Failed to create conversation");
    }

    if (res.status === 401) {
        alert("Permission denied");
    }

    return res.json();
};

const createMessage = async (id, content) => {
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

    if (res.status === 401) {
        alert("Permission denied");
    } else if (res.status === 404) {
        alert("Conversation Not Found");
    }

    return res.json();
};

export {
    getConversations,
    getConversationMessages,
    createMessage,
    createConversation,
    getConversationById,
};
