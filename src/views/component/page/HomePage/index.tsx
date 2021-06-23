import React, { FunctionComponent } from 'react';

import BasicAppBar from '../../app-bar/BasicAppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import './index.scss';

const HomePage: FunctionComponent = () => {
  return (
    <>
    <BasicAppBar />
    <main className="home-page-comp">
      <div className="center-page-content">
        <Typography variant="h5" style={{ textAlign: 'center', marginTop: '30px' }}>
          SKKU 산학협력 프로젝트 Shinhan Bank Team
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          style={{ marginTop: '20px' }}
          
        />
      </div>
    </main>
    </>
  );
};

export default HomePage;
