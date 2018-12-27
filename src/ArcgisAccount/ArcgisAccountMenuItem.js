// Framework and third-party non-ui
import React from 'react';
import PropTypes from 'prop-types';

// Redux operations and local helpers/utils/modules

// Component specific modules (Component-styled, etc.)
import { StyledArcgisAccountMenuItem } from './ArcgisAccount-styled';

// App components

// Third-party components (buttons, icons, etc.)

// JSON

// CSS

const ArcgisAccountMenuItem = ({ children, ...other }) => {
  return (
    <StyledArcgisAccountMenuItem {...other}>
      {children}
    </StyledArcgisAccountMenuItem>
  );
};

ArcgisAccountMenuItem.propTypes = {
  /** Content node of the ArcgisAccountMenuItem. */
  children: PropTypes.node
};

ArcgisAccountMenuItem.defaultProps = {};

ArcgisAccountMenuItem.displayName = 'ArcgisAccountMenuItem';

export default ArcgisAccountMenuItem;
