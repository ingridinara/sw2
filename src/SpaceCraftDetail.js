import React, { useState } from 'react';
import {
  DisplayButton,
  HideButton,
  DetailsUl,
  DetailsLi,
  DetailsParagraphTitle,
  DetailsParagraph,
  DetailBackground,
} from './spacecraftdetailstyled';
const SpaceCraftDetail = ({ details }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = (e) => {
    setExpanded((expanded) => !expanded);
  };
  const info = { details };

  if (!expanded) {
    return <DisplayButton onClick={handleClick}>Display Details</DisplayButton>;
  }
  return (
    <DetailBackground>
      <HideButton onClick={handleClick}>Hide Details</HideButton>
      <DetailsUl>
        <DetailsLi>
          <DetailsParagraphTitle>Model:</DetailsParagraphTitle>
          <DetailsParagraph>{info.model}</DetailsParagraph>
        </DetailsLi>
        <DetailsLi>
          <DetailsParagraphTitle>Cargo Capacity:</DetailsParagraphTitle>
          <DetailsParagraph>{info.cargo_capacity}</DetailsParagraph>
        </DetailsLi>
        <DetailsLi>
          <DetailsParagraphTitle>Consumables:</DetailsParagraphTitle>
          <DetailsParagraph>{info.consumables}</DetailsParagraph>
        </DetailsLi>
        <DetailsLi>
          <DetailsParagraphTitle>Manufacturer:</DetailsParagraphTitle>
          <DetailsParagraph>{info.manufacturer}</DetailsParagraph>
        </DetailsLi>
      </DetailsUl>
    </DetailBackground>
  );
};

export default SpaceCraftDetail;
