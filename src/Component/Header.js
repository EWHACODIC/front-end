import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo.png'


class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hovering: false
        }
        this.handleMouseHover = this.handleMouseHover.bind(this);
    }

    handleMouseHover() {
        this.setState({
            hovering: !this.state.hovering,
        });
    }

    render() {
        const styleDefault = { textDecoration: 'none', color: '#48A560' };
        const styleCurrent = { textDecoration: 'none', color: '#00462a', borderBottom: "0.125rem solid #00462a" };

        return (
            <div className="header-container">
                <Link to="/" className="logo-box"><img src={this.props.seasonLogo} alt="logo winter" className="logo" /></Link>
                <div className="header-nav">
                    <Link to="/Q&A" style={this.props.sectionName === "Q&A" ? styleCurrent : styleDefault}>Q&A</Link>
                    {/* <Link to="/Q&A" style={this.props.sectionName === "Q&A" ? styleCurrent : styleDefault}>Q&A</Link> */}
                    <Link to="/COMMUNITY" style={this.props.sectionName === "COMMUNITY" ? styleCurrent : styleDefault}>COMMUNITY</Link>
                    <Link to="/TECH&JOBS" style={this.props.sectionName === "TECH&JOBS" ? styleCurrent : styleDefault}>TECH&JOBS</Link>
                    {/* <Link to="/notification" style={this.props.sectionName === "notification" ? styleCurrent : styleDefault}>공지사항</Link> */}
                    <Link to="/STUDY" style={this.props.sectionName === "STUDY" ? styleCurrent : styleDefault}>STUDY</Link>
                </div>
            </div>
        )
    }

}

export default