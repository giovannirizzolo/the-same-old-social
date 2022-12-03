import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import { useState } from "react";
import Form from './Form'
import { Navigate, useNavigate, useNavigation } from "react-router-dom";

const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("min-width: 1000px");

    /* the following status should be added to the store*/
    
    const [pageType, setPageType] = useState('register')
    const navigate = useNavigate()
    const isLogin = pageType === 'login'
    const isRegister = pageType === 'register'

    return (
        <Box backgroundColor={theme.palette.background.default}>
            <Box width="100%" backgroundColor={theme.palette.background.alt} p="1erem 6%" textAlign="center">
                <Typography fontWeight="bold" fontSize="32px" color={theme.palette.primary.main} onClick={() => navigate('/home')} sx={{
                        "&:hover": {
                            color: theme.palette.primary.primaryLight,
                            cursor: "pointer",
                        },
                    }}>
                    The Same Old Social
                </Typography>
            </Box>
            <Box width={isNonMobileScreens ? "50%" : "93%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
                <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }} color={theme.palette.neutral.medium}>
                    Welcome to The Same Old Social, nothing new, just sign {isLogin ? 'in' : 'up'} and shut up.
                </Typography>
            </Box>
            <Box width={isNonMobileScreens ? "50%" : "93%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
                    <Typography align="center" sx={{ mb: "1.5rem" }} color={theme.palette.neutral.medium}>Fill the following form, come on</Typography>
                
                    <Form />
                
            </Box>
            
        </Box>
    );
};

export default LoginPage;
