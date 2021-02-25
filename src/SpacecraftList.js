import React from 'react';
import SpacecraftDetail from './SpaceCraftDetail';
//style
import {
  ListStyle,
  PageTitle,
  SpacecraftTitle,
  SpacecraftCard,
} from './spacecraftliststyled';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
const SpacecraftList = ({ ships }) => {
  const handleClick = (e) => {
    <Redirect to={{ pathname: '/home' }} />;
  };
  return (
    <div>
      <ListStyle>
        <SpacecraftCard>
          <PageTitle>Spacecrafts List</PageTitle>

          {ships.map((s) => {
            //console.log(s);
            return (
              <div key={s.url}>
                <SpacecraftTitle>{s.name}</SpacecraftTitle>
                <SpacecraftDetail details={s} />
              </div>
            );
          })}
        </SpacecraftCard>
      </ListStyle>
    </div>
  );
};

export default SpacecraftList;
