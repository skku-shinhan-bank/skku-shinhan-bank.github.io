import * as React from "react"
import { useState } from "react";
import CommonHead from '../lib/CommonHead';
import { Chatting } from "../lib/model/ReviewChat";
import { registerReview } from "../lib/psh-sevice/register-review";

import HomePage from '../views/component/page/HomePage';

import '../views/styles/global.scss';

// markup
const IndexPage = () => {
  const [chattings, setChattings] = useState<Chatting[]>([])
  const [input, setInput] = React.useState('');
  const [isReviewRegistering, setIsReviewRegistering] = useState(false);

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const onClickSendButton = async () => {
    setIsReviewRegistering(true)

    const newReview = input;
    
    try {
      const reviewChat = await registerReview(newReview);
  
      const newChattings = [reviewChat, ...chattings]
  
      setChattings(newChattings);
      setInput('');
    } catch (error) {
      console.error(error);
      alert('리뷰 등록에 실패했습니다.')
    }
    setIsReviewRegistering(false)
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
      chatting={chattings}
      onClickSendButton={onClickSendButton}
      isInputDisabled={isReviewRegistering}
      isSendButtonLoading={isReviewRegistering}
      isNewChattingLoading={isReviewRegistering}
    />
    </>
  )
}

export default IndexPage
