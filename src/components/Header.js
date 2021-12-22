import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Typewriter from 'typewriter-effect';

import {
    header
} from '../components/layout.module.css'

function Header() {
    return (
        <Box
            className={header}
            sx={{
                display: 'flex',
                alignContent: 'center',
                alignItems: 'center',
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Album layout
                </Typography>
                <Typography component={'span'} variant="h5" align="center" color="text.secondary" paragraph>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Je suis un passioné")

                                .pauseFor(1800)
                                .deleteChars(8)
                                .typeString("geek")
                                .pauseFor(1800)
                                .deleteChars(4)
                                .typeString("teamworker")
                                .pauseFor(1800)
                                .deleteChars(10)
                                .typeString("développeur")
                                .start();
                        }}
                    />
                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained">Main call to action</Button>
                    <Button variant="outlined">Secondary action</Button>
                </Stack>
            </Container>
        </Box>
    )
}

export default Header;