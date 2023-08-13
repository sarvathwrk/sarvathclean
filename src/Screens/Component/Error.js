import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
        this.onLine = this.onLine.bind(this);
        this.offLine = this.offLine.bind(this);
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }
    onLine = () => {
        // let element = document.getElementById("Networktoast").classList
        // element.add("show")
        // element.replace("bg-danger", "bg-success")
        // document.getElementById("Networkmsg").replaceChildren("Back to Online ...")
        // setTimeout(() => {
        //     element.remove("show")
        //     element.replace("bg-success", "")
        // }, 1500);
    }
    offLine = () => {
        // let element = document.getElementById("Networktoast").classList
        // element.add("show")
        // element.add("bg-danger")
        // document.getElementById("Networkmsg").replaceChildren("You are currently offline")
    }
    componentDidMount() {
        window.addEventListener("online", this.onLine);
        window.addEventListener("offline", this.offLine);
    }
    render() {
        if (this.state.errorInfo) {
            setTimeout(() => {
                window.location.href = window.location.pathname
            }, 5000);
            return (
                <div className="container" style={{ marginTop: "30vh" }}>
                    <div className="row">
                        <div className="col-sm-4" />
                        <div className="col-sm-7" >
                            <div id="Thank_You_largeText" className="mt-2">
                                <p style={{ fontSize: 30 }}> Reloading...   <img src="https://foodtruckexp.difuza.com/admin/file?name=admin/Smileys_1681385487407.png" alt="smile" style={{ width: 35, height: 35 }}></img>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return this.props.children
    }
}


