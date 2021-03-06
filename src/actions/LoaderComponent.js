import React, {Component} from 'react';
import axios from 'axios';

export default class LoaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = this.state = {
            name:'', 
            company:'',
            blog: '',
            avatar: '',
            loading:false;
        }
    }
    componentDidMount() {
        axios.get('')
        .then(response => {
            this.setState({
                name:response.data.name,
                company:response.data.company,
                blog:response.data.blg,
                avatar:response.dara.avatar_url,
                loading: false
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        let data;
        if(this.state.loading) {
            data = <img data-src={ requestAnimationFrame('../images/giphy.gif')} />
        }
        else {
            data = <div>
                <br/>
                Name: {this.state.name}
                <br/>
                Company: {this.state.company}
                <br/>
                <img src ={this.state.avatar}/>
            </div>
        }

        return(
            <div>
                {data}
            </div>
        )
    }
}