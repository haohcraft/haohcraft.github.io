import React, {Component} from 'react'
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from 'utils/typography';
import { config } from 'config';
export default class Author extends Component {
    render() {
        return (
            <p>
                <a target="_blank" href="https://www.linkedin.com/in/haohjob">
                    <img src={prefixLink('/assets/images/base/profile.jpg')}
                        style={{
                            float: 'left',
                            marginRight: rhythm(1/4),
                            marginBottom: 0,
                            width: rhythm(2),
                            height: rhythm(2),
                            borderRadius: '3px'
                        }} />
                </a>
                <strong>{config.authorName}</strong> lives in New York City and currently works as a Front End Engineer at <a href="https://www.dataminr.com/" target="_blank">Dataminr</a> to write abstracts with React/Redux.
            </p>
        );
    }
}
