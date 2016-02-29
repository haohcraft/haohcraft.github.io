import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import DisqusThread from 'react-disqus-thread';

import ReadNext from '../components/ReadNext'
import { rhythm } from 'utils/typography'
import { config } from 'config'

import '../css/zenburn.css'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.blogTitle}`}>
        <div className="markdown">
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }}/>
          <em
            style={{
              display: 'block',
              marginBottom: rhythm(2),
            }}
          >
            Posted {moment(post.date).format('MMMM D, YYYY')}
          </em>
          <hr
            style={{
              marginBottom: rhythm(2),
            }}
          />
          <ReadNext post={post} pages={route.pages} />
          <DisqusThread
            shortname="haohcraft"
            title={post.title}
            url={"http://haohcraft.com#{@props.page.path}"}
          />
        </div>
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
