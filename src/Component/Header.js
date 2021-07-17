import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo.png from '../assets/icon/header/icon_myprofile@3x.png'


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
        const styleDefault = { textDecoration: 'none', color: '#2b2b2b' };
        const styleCurrent = { textDecoration: 'none', color: '#00462a', borderBottom: "0.125rem solid #00462a" };

        return (
            <div className="header-container">
                <Link to="/" className="logo-box"><img src={this.props.seasonLogo} alt="logo winter" className="logo" /></Link>
                <div className="header-nav">
                    <Link to="/Ranking" style={this.props.sectionName === "Ranking" ? styleCurrent : styleDefault}>Q&A</Link>
                    {/* <Link to="/Community" style={this.props.sectionName === "Community" ? styleCurrent : styleDefault}>커뮤니티</Link> */}
                    <Link to="/SideProject" style={this.props.sectionName === "SideProject" ? styleCurrent : styleDefault}>COMMUNITY</Link>
                    <Link to="/TechRSS" style={this.props.sectionName === "TechRss" ? styleCurrent : styleDefault}>TECH&JOBS</Link>
                    {/* <Link to="/notification" style={this.props.sectionName === "notification" ? styleCurrent : styleDefault}>공지사항</Link> */}
                    <Link to="/MyProfile" style={this.props.sectionName === "MyProfile" ? styleCurrent : styleDefault}>STUDY</Link>
                </div>
            </div>
        )
    }

}

export default