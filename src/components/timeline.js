import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    time_card: {
        margin: '10px 12px',
        minWidth: 140,
        minHeight: 30
    },
    line_container:{
        display: 'flex'
    }
}));

function Timeline() {
    const classes = useStyles();
    const [timeline, setTimeline] = useState('Cool stuff');

    const processButtonClick = e =>{
        console.log(e.target);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <div className={classes.line_container}>
                    <Card className={classes.time_card} onClick={processButtonClick}>Testing</Card>
                    <Card className={classes.time_card} onClick={processButtonClick}>Testing2</Card>
                </div>
            </Grid>
        </div>
    );
}

export default Timeline;