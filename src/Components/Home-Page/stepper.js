import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(1),
        width: '50%',
    },
    textButtonRoot: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

// Model of profile


export default function LayoutTextFields1(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        event.preventDefault();
        props.profile[event.target.id] = event.target.value;
        console.log(props.profile);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setChecked(false);
    };

    return (
        <Slide direction="right" in={props.active === 0} mountOnEnter unmountOnExit>
            <form onSubmit={handleSubmit}>
                <div className={classes.root}>
                    <div style={{paddingTop: '3%'}}>
                        <div style={{paddingBottom: '5%'}}>
                            <TextField className={classes.textField} label="Address"
                                       id="addr" placeholder="17 Buckington PL " color="secondary"
                                       onChange={handleChange}                                InputLabelProps={{
                                shrink: true,
                            }}/>
                            <TextField
                                id="name"
                                label="Full Name"
                                className={classes.textField}
                                color="secondary"
                                fullWidth
                                placeholder="Aj Mcmillan"
                                onChange={handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="age"
                                label="Age"
                                placeholder="21"
                                color="secondary"
                                type="number"
                                fullWidth
                                className={classes.textField}
                                onChange={handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="degree"
                                label="Degree"
                                placeholder="Computer science"
                                onChange={handleChange}
                                className={classes.textField}
                                color="secondary"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>

                    </div>

                </div>
            </form>
        </Slide>
    );
}
