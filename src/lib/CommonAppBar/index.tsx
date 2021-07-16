import React, { FunctionComponent } from 'react';
import BasicAppBar from '../../views/component/app-bar/BasicAppBar';
import { navigate } from "gatsby" 

const CommonAppBar: FunctionComponent = () => {
  const onClickHome = () => {
    navigate('/');
  };

  const onClickMenu = (menuIndex: number) => {
    if (menuIndex === 0) {
      navigate('/reviews/analysis');
    }
  };

  return (
    <BasicAppBar
      onClickHome={onClickHome}
      onClickMenu={onClickMenu}
    />
  )
};

export default CommonAppBar;