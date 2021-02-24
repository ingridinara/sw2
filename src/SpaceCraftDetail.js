import React, { Component } from 'react';

import {
  DisplayButton,
  HideButton,
  DetailsUl,
  DetailsLi,
  DetailsParagraphTitle,
  DetailsParagraph,
  DetailBackground,
} from './spacecraftdetailstyled';

export default class SpaceCraftDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ expanded: !this.state.expanded });
  }

  close() {
    this.setState({ expanded: !this.state.expanded });
  }
  render() {
    const info = this.props.details;
    if (!this.state.expanded) {
      return <DisplayButton onClick={this.open}>Display Details</DisplayButton>;
    }

    return (
      <DetailBackground>
        <HideButton onClick={this.close}>Hide Details</HideButton>
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
  }
}
