import React, {Component} from 'react';
import { Container, Typography , Button} from '@material-ui/core';
import LockOutLineIcon from '@material-ui/icons/LockOutlined';//npm install @material-ui/icons
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { TextField } from '@material-ui/core';

const style = {
    paper : {
        marginTop : 8,
        display : "flex",
        flexDirection : "column",
        alignItems : "center"
    },
    avatar : {
        margin : 8,
        backgroundColor : "#e53935"
    },
    form : {
        width : "100%",
        marginTop : 10,

    },
    submit : {
        marginTop : 15,
        marginBottom : 20
    }
}

class RegistrarUsuarios extends Component{

    state = {
        usuario : { // servira para almacenar la data que tengamos en nuestros TextFields
            nombre : '',
            apellido : '',
            email : '',
            password : ''
        }
    }

    onChange = e => {
        let usuario = Object.assign({}, this.state.usuario); // clonar el estado del usuario en la variable
        usuario[e.target.name] = e.target.value; // cargar lo que haya en la caja de texto y almacena dentro de la propiedad usuario.nombre

    }

    render(){
        return(
            <Container maxWidth="md">
                <div style={style.paper}>
                    <Avatar style={style.avatar}>
                        <LockOutLineIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registre su cuenta
                    </Typography>
                    <form style={style.form}>
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <TextField name="nombre" onChange={this.onChange} value={this.state.usuario.nombre} fullWidth label="Ingrese su nombre"/>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField item name="apellido" onChange={this.onChange} value={this.state.usuario.apellido} fullWidth label="Ingrese sus apellidos"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField name="email" onChange={this.onChange} value={this.state.usuario.email} fullWidth label="Ingresa tu correo"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField type="password" onChange={this.onChange} value={this.state.usuario.password} name="password" fullWidth label="Ingresa tu constraseña"></TextField>
                            </Grid>
                        </Grid>
                        <Grid container justify="center">
                            <Grid item xs={12} md={6}>
                                <Button type="submit" variant="contained" fullWidth size="large" color="primary" style={style.submit}>
                                    Registrar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}

export default RegistrarUsuarios;