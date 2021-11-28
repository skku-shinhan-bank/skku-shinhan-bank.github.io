import * as React from "react"
import { useState } from "react";
import CommonHead from '../lib/CommonHead';
import { registerReview } from "../lib/psh-sevice/register-review";

import HomePage from '../views/component/page/HomePage';

import '../views/styles/global.scss';

// markup
const IndexRoute = () => {
  const [chattings, setChattings] = useState<{
    review: string;
    comments: string[];
    writeTime: string;
    issueName: string;
    totalIssueInfo: number[];
  }[]>([])
  const [input, setInput] = React.useState('');
  const [isReviewRegistering, setIsReviewRegistering] = useState(false);

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const onClickSendButton = async () => {
    setIsReviewRegistering(true)

    const newReview = input;
    
    let newChatting = {
      review: newReview,
      comments: ['[리뷰 등록 실패]'],
      writeTime: '',
      issueName: '',
      totalIssueInfo: [],
    };

    try {
      const review = await registerReview(newReview);
      newChatting = {
        review: review.review,
        comments: review.comments,
        writeTime: review.writeTime,
        issueName: getIssueName(review.issueId),
        totalIssueInfo: review.totalIssueInfo,
      };
    } catch (error) {
      console.error(error);
    }

    const newChattings = [newChatting, ...chattings]

    setChattings(newChattings);
    setInput('');
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

function getIssueName(issueId: number) {
  console.log(issueId)
  if (issueId == 0) return '앱 실행';
  if (issueId == 1) return '로그인';
  if (issueId == 2) return '회원가입';
  if (issueId == 3) return '금융 서비스';
  if (issueId == 4) return '기타';
  if (issueId == 5) return '앱 외부 기능';
  return '이슈 알 수 없음';
}

function getTwoPlaceString(num: number) {
  if (num < 9) {
    return `0${num}`;
  }
  return `${num}`;
}

export default IndexRoute;
