import React, {Component} from 'react';
import Button from '@material-ui/core/Button';


class ListaInmuebles extends Component{
    render(){
        return(
            <div>
                <Button variant="contained" color="primary" > Color Primary</Button>
                <Button variant="contained" color="secondary"> Color Secondary</Button>
            </div>
        );
    }
}

export default ListaInmuebles;