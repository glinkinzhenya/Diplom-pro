import { Component } from "react";
import CreatSocial from "../../Footer/CreateSocial";
import CallBack from "../../Footer/CallBack";

export default class Footer extends Component {
    render() {
        return (
            <>
                <CreatSocial />
                <CallBack />
            </>
        );
    }
}