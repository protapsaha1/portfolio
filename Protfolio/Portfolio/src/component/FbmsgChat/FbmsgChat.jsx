import { CustomChat, FacebookProvider } from "react-facebook";

const FbmsgChat = () => {
    return (
        <FacebookProvider appId={import.meta.env.VITE_FB_MSG_ID} chatSupport>
            <CustomChat pageId={import.meta.env.VITE_FB_PAGE_ID} minimized={true} />
        </FacebookProvider>
    );
};

export default FbmsgChat;

// pageId="124857620704335"
// appId="136310816211573"