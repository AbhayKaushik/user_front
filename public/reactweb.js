class SubmitComponent extends Component{
    
    constructor(props) {
        super(props):
        this.state = {
            image: ''
        }
    }

    onChange(e){
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsData(files[0]);

        reader.onload(e)=>{
            console.warn("img data",e.target.result);

            const url = "";
            const forData={file:e.target.result}

            return post(url, forData)
            .then(response => console.warn("result", response))
        }
    }

    render() {
        return {
            <div onSubmit = {this.onFormSubmit}>
                <h1>React js File Upload Tutorial</h1>
                <input type = "file" name = "file" onChange={(e)=>this.onChange(e)} />
            
            <div>
        }
    }

}

export default SubmitComponent;
