import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import UserWidget from "../../scenes/widgets/UserWidget";

const HomePage = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const { _id, picturePath } = useSelector((state) => state.user) 

    return (
        <Box>
            <Navbar />
            <Box 
                backgroundColor={theme.palette.background.default}
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="0.5rem"
                justifyContent="space-between"
                >
                    <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                        <UserWidget userId={_id} picturePath={picturePath} />
                    </Box>
                    <Box
                        flexBasis={isNonMobileScreens ? "26%" : undefined}
                        mt={isNonMobileScreens ? undefined : "2rem"}
                        >

                        </Box>
                        {isNonMobileScreens ? (
                            <Box
                                flexBasis={isNonMobileScreens ? "42%" : undefined}
                                mt={isNonMobileScreens ? undefined : "2rem"}
                                >
                            </Box>
                        ): null}
                        {isNonMobileScreens ? (
                            <Box
                                flexBasis="26%">
                            </Box>
                        ) : null}
                        
            <Button
                sx={{
                    "&:hover": {
                        cursor: "pointer",
                    },
                }}
                onClick={() => navigate("/")}
            >
                To root
            </Button>
            </Box>
        </Box>
    );
};

export default HomePage;
