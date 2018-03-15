import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledAvatar,
  StyledAvatarImage,
  StyledAvatarSvg,
  StyledAvatarText
} from './Avatar-styled';

const Avatar = ({ children, src, alt, ...other }) => {
  let wrappedChildren;

  if (children) {
    if (React.isValidElement(children)) {
      //Assume the element is an SVG icon
      wrappedChildren = React.cloneElement(children, {
        ...children.props,
        style: {
          ...StyledAvatarSvg,
          ...children.props.style
        }
      });
    } else {
      wrappedChildren = <StyledAvatarText>{children}</StyledAvatarText>;
    }
  } else if (src) {
    wrappedChildren = <StyledAvatarImage src={src} alt={alt || ''} />;
  }

  const avatar = <StyledAvatar {...other}>{wrappedChildren}</StyledAvatar>;

  return avatar;
};

Avatar.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** The src attribute for the img element */
  src: PropTypes.string,
  /** Used in combination with src to provide
   an alt attribute for the rendered img element */
  alt: PropTypes.string
};

Avatar.defaultProps = {};

export default Avatar;