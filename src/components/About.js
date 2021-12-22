import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {
    about
  } from '../components/layout.module.css'

function About() {
    return (
        <React.Fragment>
            <div className={about}>
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Typography align="justify" paragraph>Récemment diplômé de mon Mastère au sein de l'ESGI en alternance, je cherche un nouveau challenge où je pourrais à la fois partager mes compétences et m'améliorer.</Typography>
                <Typography align="justify" paragraph>Comprenant les problématiques liées à une dette technique trop importante pour la maintenabilité et la scalabilité d'un projet, je cherche continuellement à progresser et à produire du code de qualité avec une certaine sensibilité pour l'expérience utilisateur.</Typography>
                <Typography align="justify" paragraph>Polyvalent et capable de m'adapter, je peux participer aux différents aspects d'un projet.</Typography>
            </Container>
            </div>
        </React.Fragment>

    )
}

export default About;