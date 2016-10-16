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
                <div className={`${this.cn}-bio`} style={styleBio}>
                <strong>{config.authorName}</strong> lives in New York City and currently works as a Software Engineer at <a href="https://www.datadoghq.com/" target="_blank">Datadog</a> to build dashboards. Previously he worked at <a href="https://www.dataminr.com/" target="_blank">Dataminr</a> as a Front End Engineer responsible for writting React/Redux UI abstracts and also worked as a SE at <a href="https://www.wearesmartertravel.com/" target="_blank">SmarterTravelMedia</a> in Boston, MA before.
                <SocialNetworks />
                </div>
            </div>
        );
    }
}
