// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

import PropTypes from 'prop-types';
import React from 'react';
import { StyledAccordion } from './Accordion-styled';

import { getChildType } from '../utils/helpers';

const Accordion = ({
  children,
  activeSectionIndexes,
  onAccordionChange,
  ...other
}) => {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case 'AccordionSection':
        let section;
        section = React.cloneElement(child, {
          key: i,
          active: activeSectionIndexes.includes(i),
          sectionIndex: i,
          onAccordionChange: onAccordionChange
        });
        return section;
      default:
        return child;
    }
  });

  return <StyledAccordion {...other}>{childrenWithProps}</StyledAccordion>;
};

Accordion.propTypes = {
  /** Used to render AccordionSections inside the Accordion. */
  children: PropTypes.node,
  /** Indexes of the sections that are supposed to be active. */
  activeSectionIndexes: PropTypes.array
};

Accordion.defaultProps = {
  activeSectionIndexes: [],
  onAccordionChange: () => {}
};

Accordion.displayName = 'Accordion';

export default Accordion;
