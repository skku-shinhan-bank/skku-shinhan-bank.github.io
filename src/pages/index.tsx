import * as React from "react"
import CommonHead from '../lib/CommonHead';

import HomePage from '../views/component/page/HomePage';

import '../views/styles/global.scss';

// markup
const IndexPage = () => {
  return (
    <>
    <CommonHead
      title="SKKU Shinhan Bank Team"
      description="SKKU Shinhan Bank Team"
    />
    <HomePage />
    </>
  )
}

export default IndexPage
