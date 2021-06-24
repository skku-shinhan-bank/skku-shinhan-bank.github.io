import * as React from "react"
import { useState } from "react";
import CommonHead from '../lib/CommonHead';

import HomePage from '../views/component/page/HomePage';

import '../views/styles/global.scss';

// markup
const IndexPage = () => {
  const [chatting, setChatting] = useState([])
  const [input, setInput] = React.useState('');

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const onClickSendButton = () => {
    const newChatting = [...chatting];

    newChatting.push({
      review: input,
      comment: 'sorry',
    })

    setChatting(newChatting);
    setInput('');

  }

  return (
    <>
    <CommonHead
      title="SKKU Shinhan Bank Team"
      description="SKKU Shinhan Bank Team"
    />
    <HomePage
      input={input}
      onChangeInput={onChangeInput}
      chatting={chatting}
      onClickSendButton={onClickSendButton}
    />
    </>
  )
}

export default IndexPage
