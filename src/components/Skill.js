import React from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

function Skill() {
    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                    <Card variant="outlined" sx={{ p: 3, mb: 2 }}>
                        <Typography
                            component="h4"
                            variant="h4"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Langages
                        </Typography>
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            HTML
                        </Typography>
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            CSS
                        </Typography>
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            PHP
                        </Typography>
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            JS ES6
                        </Typography>
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            Java
                        </Typography>
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            Python
                        </Typography>
                    </Card>
                    <Card variant="outlined" sx={{ p: 3 }}>
                    <Typography
                            component="h4"
                            variant="h4"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Base de données
                        </Typography>
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            MySql
                        </Typography>
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            PostgreSQL
                        </Typography>
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            MongoDB
                        </Typography>
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            Firebase
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>

                <Card variant="outlined" sx={{ p: 3, height: '100%' }}>
                        <Typography
                            component="h4"
                            variant="h4"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Technos
                        </Typography>
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            React
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={60} />
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            Angular
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={70} />
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            Vue.js
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={30} />
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            Express.js
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={40} />
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            Symfony 4
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={50} />
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            Api Platform
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={40} />
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            Spring Boot
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={60} />
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            Ionic
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={70} />
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            React Native
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={70} />
                        <Typography
                            color="text.primary"
                            gutterBottom
                        >
                            Docker
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={50} />
                    </Card>
                </Grid>
            </Grid>

            
        </Container>
    )
}

export default Skill;