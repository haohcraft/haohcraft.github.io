import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import access from 'safe-access'
import { config } from 'config'
import Author from '../components/footer/author';
import moment from 'moment';

class BlogIndex extends React.Component {
  constructor() {
    super();
    this.cn = this.constructor.name;
  }
  render () {
    const that = this;
    const pageLinks = []
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md') {
        const title = access(page, 'data.title') || page.path;
        const intro = access(page, 'data.intro');
        pageLinks.push(
          <li
            className={`${that.cn}-containter`}
            key={page.path}
            style={{
              marginBottom: rhythm(1/2),
            }}
          >
            <Link className={`${that.cn}-title`} to={prefixLink(page.path)}>{title}</Link>
            {intro && <p className={`${that.cn}-intro`} style={{fontSize: rhythm(0.5)}}>{intro}</p>}
          </li>
        )
      }
    })
    return (
      <DocumentTitle title={config.blogTitle}>
        <div>
          <Author />
          <ul>
            {pageLinks}
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
