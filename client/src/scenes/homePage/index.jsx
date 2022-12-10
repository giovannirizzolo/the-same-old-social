import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import AdvertWidget from "../../scenes/widgets/AdvertWidget";
import FriendListWidget from "../../scenes/widgets/FriendListWidget";
import MyPostWidget from "../../scenes/widgets/MyPostWidget";
import PostsWidget from "../../scenes/widgets/PostsWidget";
import UserWidget from "../../scenes/widgets/UserWidget";
import Navbar from "../navbar";

const HomePage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const { _id, picturePath, friends } = useSelector((state) => state.user);

    const friendsCount = friends.length;

    return (
        <Box>
            <Navbar />
            <Box backgroundColor={theme.palette.background.default} width="100%" padding="2rem 6%" display={isNonMobileScreens ? "flex" : "block"} gap="0.5rem" justifyContent="space-between">
                <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                    <UserWidget userId={_id} picturePath={picturePath} />
                </Box>
                <Box flexBasis={isNonMobileScreens ? "42%" : undefined} mt={isNonMobileScreens ? undefined : "2rem"}>
                    <MyPostWidget picturePath={picturePath} />
                    <PostsWidget picturePath={picturePath} />
                </Box>
                {isNonMobileScreens ? (
                    <Box flexBasis="26%">
                        <AdvertWidget />
                        <Box m="2rem 0" />
                        {friendsCount ? <FriendListWidget userId={_id} /> : null}
                    </Box>
                ) : null}
            </Box>
        </Box>
    );
};

export default HomePage;
