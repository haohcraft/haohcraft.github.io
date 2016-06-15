import React, {Component} from 'react'
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from 'utils/typography';
import { config } from 'config';
import SocialNetworks from '../SocialNetworks';


export default class Author extends Component {
    constructor() {
        super();
        this.cn = "Author";
    }
    render() {
        const style = {
            display: 'flex',
        };
        const styleProfile = {
            marginRight: rhythm(1/4),
            marginBottom: 0,
            width: rhythm(5),
            height: rhythm(5),
            borderRadius: '3px'
        };
        const styleBio = {
        };
        return (
            <div className={`${this.cn}`} style={style}>
                <div className={`${this.cn}-profile`} style={styleProfile}>
                <a target="_blank" href="https://www.linkedin.com/in/haohjob">
                    <img src={prefixLink('/assets/images/base/profile.jpg')}/>
                </a>
                </div>
                <div className={`${this.cn}-bio`} style={styleBio}>
                <strong>{config.authorName}</strong> lives in New York City and currently works as a Front End Engineer at <a href="https://www.dataminr.com/" target="_blank">Dataminr</a> to write abstracts with React/Redux.
                <SocialNetworks />
                </div>
            </div>
        );
    }
}
