import React, { FunctionComponent } from 'react';

import { Helmet } from 'react-helmet'

interface Props {
  title: string;
  description: string;
}

const CommonHead: FunctionComponent<Props> = ({
  title, description,
}) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: 'ko',
      }}
      title={title}
      titleTemplate={`%s | Han Jungwoo`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: 'Han Jungwoo',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          // for google search console 소유권 확인
          name: 'google-site-verification',
          content: 'RZnFgzTyqGnyCqfaCKx2-HloYzNA3D3yrC2N1-J1K5U',
        },
        {
          name: 'naver-site-verification',
          content: '189cca7bf40ac78f41ef4578ab1084d6a017fca2',
        },
      ]}
    />
  )
};

export default CommonHead;
