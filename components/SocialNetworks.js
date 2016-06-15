import React from 'react'
import { rhythm } from 'utils/typography'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import GithubIcon from 'react-icons/lib/fa/github'
import InstagramIcon from 'react-icons/lib/fa/instagram'
import LinkedinIcon from 'react-icons/lib/fa/linkedin'

const SocialNetworks = (props) => {
  const marginBetweenIcons = rhythm(1/6)
  return (
    <div className="SocialNetworks"
      style={ props.style }
    >
    <li style={{ margin: marginBetweenIcons }}><a href="http://twitter.com/haohmobile" title="Twitter" target="_blank"><TwitterIcon /></a></li>
    <li style={{ margin: marginBetweenIcons }}><a href="http://instagram.com/haohmobile" title="instagram" target="_blank"><InstagramIcon /></a></li>
    <li style={{ margin: marginBetweenIcons }}><a href="http://github.com/haohcraft" title="github" target="_blank"><GithubIcon /></a></li>
    <li style={{ margin: marginBetweenIcons }}><a href="https://www.linkedin.com/in/haohjob" title="github" target="_blank"><LinkedinIcon /></a></li>
    </div>
  )
}

SocialNetworks.propTypes = {
  style: React.PropTypes.object,
}

export default SocialNetworks