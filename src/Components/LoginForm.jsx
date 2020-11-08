import { Box, Button, Checkbox, FilledInput, FormControl, FormControlLabel, IconButton, InputAdornment, makeStyles, TextField } from '@material-ui/core'
import { ArrowForward, Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react'


const useStyles = makeStyles(()=>({
    input:{
        width:'80vw',
        maxWidth:'20em',
    },
    button:{
        borderRadius:'20px',
        width:'3px',
        height:'3em'
    },
    icon:{
        width:'50px',
        height:'35px',
        marginLeft:'8px'
    },
    buttonContainer:{
        display:'flex',
        justifyContent:'center',
        marginTop:'1em'
    }
}))

export const LoginForm = () => {

    const classes=useStyles();

    const labelStyle = {
        textTransform:'uppercase'
    }

    const [showPassWord, setShowPassWord]= useState(false);

    return (
        <div>
            <form>
                <Box margin={3}>
                    <FormControl className={classes.input}>
                        <TextField
                            label="USERNAME"
                            variant="filled"
                            inputProps={{style:labelStyle}}
                        />
                    </FormControl>
                </Box>

                <Box margin={3}>
                    <FormControl className={classes.input}>
                        <FilledInput
                        type=
                            {
                                showPassWord ? "password" : "text"
                            }
                        variant="filled"
                        InputLabelProps={{style:labelStyle}}
                        endAdornment={
                            <InputAdornment>
                                <IconButton onClick={()=>{setShowPassWord(!showPassWord)}}>
                                    {
                                        showPassWord ? <Visibility/> : <VisibilityOff/>
                                    }
                                </IconButton>
                            </InputAdornment>
                        }
                        />                        
                    </FormControl>
                </Box>

                <Box margin={3}>
                    <FormControlLabel
                        control={<Checkbox/>}
                        label={<span>Stay signed</span>}
                    />
                </Box>

                <Box className={classes.buttonContainer}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary" 
                        startIcon={<ArrowForward className={classes.icon}/>}
                    />
                </Box>
            </form>
        </div>
    )
}
