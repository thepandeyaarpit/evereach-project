import React from 'react';
import { Button, Typography } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import {makeStyles} from '@material-ui/core/styles';
import '../../index.css';

const useStyle = makeStyles({
    card: {
        boxShadow: '2px 2px 15px rgba(0, 0, 0, 0.1)',
    },
    offer: {
        border: '3px solid #03EA6A',
        borderRadius: '20px',
        textAlign: 'center',
        padding: '10px 50px',
    },
    
    
    buttonFree: {
        backgroundColor: '#110828',
        color: '#03EA6A',
        padding: '10px',
        width: '135px',
        fontWeight: '700', 
        fontSize: '12px',
        borderRadius: '15px',
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: 'Poppins',
        marginTop: '18px',
        '&:hover': {
            background: "#110828",
            color: '#03EA6A',
         },
    },
    
    list: {
        fontSize: '13px', 
        padding: '7px', 
        marginLeft: '-10px', 
        color: '#000000',
        // fontWeight: '600',
        listStyleType: 'none',
        fontFamily: 'Poppins',
        },
    

    price: {
        fontSize: '45px',
        color: '#03EA6A',
        fontWeight: '700',
        fontFamily: 'Poppins',
        margin: '10px 0',
    },
    
    
    highlighter: {
        margin: '10px',
        fontSize: '45px', 
        fontWeight: '700', 
        textAlign: 'center',
    },
    insideOffer: {
        display: 'flex', 
        marginTop: '-20px', 
        justifyContent: 'center',
        fontFamily: 'Poppins',
    },
    sign: {
        color: '#03EA6A', 
        marginTop: '20px', 
        marginRight: '1px', 
        fontSize: '16px', 
        fontFamily: 'Poppins',
    },
    yearText: {
        marginTop: '-20px',
        fontFamily: 'Poppins',
        fontWeight: '700',
    },
    simpleText: {
        fontFamily: 'Poppins',
        margin: '6px 0',
        fontWeight: '700',
    },

    
})

function Free(){
    const classes = useStyle();
    return(
        <>
            <Card className={classes.card} style={{ borderRadius: '20px', margin: '10px 20px',  height: 'auto' }}>
            <CardContent>
                <Typography className={classes.highlighter}>
                    FREE
                </Typography>
                
                <Typography className={classes.offer}>
                    <Typography className={classes.simpleText}>A Simple strat for everyone</Typography>
                    <CardContent className={classes.insideOffer} >
                        <Typography className={classes.sign} >$</Typography>
                        <Typography className={classes.price}>00</Typography>
                    </CardContent>
                    <Typography className={classes.yearText} >for year</Typography>
                </Typography>
                
                <List >
                
                <ul style={{marginTop: '30px'}}>
                    <li className={classes.list}>Lorem ipsum idero Lorem ipsum idero</li>
                    <li className={classes.list}>Lorem ipsum idero Lorem ipsum idero</li>
                    <li className={classes.list}>Lorem ipsum idero Lorem ipsum idero</li>
                    <li className={classes.list}>Lorem ipsum idero Lorem ipsum idero</li>
                </ul>

                </List>
                
                <Typography align='center'>
                    <Button className={classes.buttonFree}>Choose Plan</Button>
                </Typography>
            </CardContent>
            </Card>

        </>
    )
}

export default Free;