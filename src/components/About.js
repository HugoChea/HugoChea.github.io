import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import thinking from "../images/thinking.png";

import {
    about,
    cover
} from '../components/layout.module.css'

function About() {
    return (
        <React.Fragment>
            <div className={about}>
                <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container columnSpacing={1}>
                    <Grid item xs={12} md={4}>
                    
                    <Typography align="justify" paragraph>Récemment diplômé de mon Mastère au sein de l'ESGI en alternance, je cherche un nouveau challenge où je pourrais à la fois partager mes compétences et m'améliorer.</Typography>
                    <Typography align="justify" paragraph>Comprenant les problématiques liées à une dette technique trop importante pour la maintenabilité et la scalabilité d'un projet, je cherche continuellement à progresser et à produire du code de qualité avec une certaine sensibilité pour l'expérience utilisateur.</Typography>
                    <Typography align="justify" paragraph>Polyvalent et capable de m'adapter, je peux participer aux différents aspects d'un projet.</Typography>
                
                    </Grid>
                    <Grid item xs={0} md={1}>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <img className={cover} src={thinking} alt="Logo" />
                    </Grid>
                    
                </Grid>
                </Container>
            </div>
        </React.Fragment>

    )
}

export default About;