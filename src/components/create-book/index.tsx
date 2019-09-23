import React from "react";
import Button from '@material-ui/core/Button';


export class CreateProduct extends React.Component<any, any>{

    constructor(props: any) {
        super(props);

        this.state = { title: "", imageLink: "", language: "" }
    }

    render() {
        const { title, imageLink, language } = this.state;
        const { addProductToList } = this.props;
        return (
            <div className="container">
                <div className="row">
                    Title: <input value={title} onChange={(e: any) => {
                        this.setState({ title: e.target.value })
                        
                    }} className="col-lg-3" type="text" />

                    Image Link: <input value={imageLink} onChange={(e: any) => {
                        this.setState({ imageLink: e.target.value })
                    }} className="col-lg-3" type="text" />

                    language: <input value={language} onChange={(e: any) => {
                        this.setState({ language: e.target.value })
                    }} className="col-lg-3" type="text" />

                    <Button onClick={(r) => { addProductToList(this.state) }} className="col-lg-3" variant="contained" >
                        Add new Book
                    </Button>
                </div>

            </div>
        )
    }
}