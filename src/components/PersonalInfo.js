import React from 'react'
import { TextField, Grid, FormControl, InputLabel, Select, MenuItem, TextareaAutosize, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '1.5rem 0'
    },
    textField: {
        width: '100%',
    }
}));

const PersonalInfo = ({ countries, state, handleChange, handleChangePhoto }) => {
    const classes = useStyles();

    return (
        <div className="form-header">
            <form noValidate autoComplete="on">
                <h1>Personal Information</h1>
                <div className={classes.root}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                className={classes.textField}
                                type="text"
                                label="First name"
                                name="firstName"
                                value={state.firstName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                className={classes.textField}
                                type="text"
                                label="Last name"
                                name="lastName"
                                value={state.lastName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                className={classes.textField}
                                type="email"
                                required
                                label="Email"
                                name="email"
                                value={state.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                className={classes.textField}
                                type="number"
                                label="Phone"
                                name="phone"
                                value={state.phone}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <FormControl className={classes.textField}>
                                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="country"
                                    value={state.country}
                                    onChange={handleChange}
                                >
                                    {countries.map(country => (
                                        <MenuItem value={country.name}>{country.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField
                                className={classes.textField}
                                label="State"
                                name="state"
                                value={state.state}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                name="birthday"
                                value={state.birthday}
                                onChange={handleChange}
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <FormControl className={classes.textField}>
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="gender"
                                    value={state.gender}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="men">Male</MenuItem>
                                    <MenuItem value="women">Female</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} sm={9}>
                            <TextareaAutosize
                                className="textAbout"
                                aria-label="minimum height"
                                minRows={9}
                                placeholder="About yourself"
                                name="about"
                                value={state.about}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6} sm={3} className="profile-img">
                            <Avatar
                                className="profile-img-user"
                                alt="Remy Sharp"
                                src={state.photo}
                            />
                            <input
                                id="input"
                                label="Photo"
                                name="photo"
                                type="file"
                                onChange={handleChangePhoto}
                            />
                            <div className="label">
                                <label className="image-upload" htmlFor="input">
                                    <i class="fas fa-arrow-circle-up"></i>
                                    Choose Photo
                                </label>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </form>
        </div>
    )
}

export default PersonalInfo
