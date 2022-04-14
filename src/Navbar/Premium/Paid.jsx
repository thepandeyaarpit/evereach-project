import React from 'react';
import { Button, Typography } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import {makeStyles} from '@material-ui/core/styles';


const useStyle = makeStyles({

    cardSecond: {
        borderRadius: '20px',
        backgroundColor: '#110828',
        color: '#FFFFFF',
    },
    offer: {
        border: '3px solid #03EA6A',
        borderRadius: '20px',
        textAlign: 'center',
        padding: '10px 50px',
    },
    list: {
        fontSize: '13px', 
        padding: '7px', 
        marginLeft: '-10px',
        color: '#FFFFFF',
        listStyleType: 'none',
        fontFamily: 'Poppins',
        },
    
    buttonPaid: {
        backgroundColor: '#FFFFFF',
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
            background: "#FFFFFF",
            color: '#03EA6A',
         },
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

function Paid(){
    const classes = useStyle();
    return(
        <>
            <Card className={ classes.cardSecond } style={{ backgroundColor: '#110828', color: '#FFFFFF', borderRadius: '20px', height: 'auto', margin: '10px 20px' }}>
            <CardContent>
                <Typography className={classes.highlighter}>
                    PAID
                </Typography>
                
                <Typography className={classes.offer}>
                    <Typography className={classes.simpleText}>A Simple strat for everyone</Typography>
                    <CardContent className={classes.insideOffer} >
                        <Typography className={classes.sign} >$</Typography>
                        <Typography className={classes.price}>49</Typography>
                    </CardContent>
                    <Typography className={classes.yearText}>for year</Typography>
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
                    <Button className={classes.buttonPaid}>Choose Plan</Button>
                </Typography>
            </CardContent>
            </Card>

        </>
    )
}

export default Paid;