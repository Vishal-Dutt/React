import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    // Custom css
    btn: {
        marginTop: '10%',
        '&:hover':{
            backgroundcolor:'black',
            color:'Black',
        }
    }
}));

function Buttons() {
    const classes = useStyles();
    return (
        <div>
            {/* Add Class to the button */}
            <Button className={classes.btn} variant="contained" color="secondary">
                Secondary
            </Button>
        </div>
    )
}

export default Buttons
