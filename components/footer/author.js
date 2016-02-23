import { React, Component } from 'React';
import { link } from 'gatsby-helpers';
import { rhythm } from 'utils/typography';
import { config } from 'config';
export default class Author extends Component {
    render() {
        return (
            <p>
                <img src={link('/assets/images/base/profile.jpg')}
                    style={{
                        float: 'left',
                        marginRight: rhythm(1/4),
                        marginBottom: 0,
                        width: rhythm(2),
                        height: rhythm(2),
                    }} />
                <strong>{config.authorName}</strong> lives and works in New York City building useful things. <a href="https://twitter.com/kylemathews">You should follow him on Twitter</a>
            </p>
        );
    }
}
