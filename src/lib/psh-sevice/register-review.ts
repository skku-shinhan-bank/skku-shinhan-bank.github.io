import RequestSender from '../request-sender';
import { Chatting } from '../model/ReviewChat';
import { getPSHHost } from '../util';

interface ResponseBody {
  comment: string;
  review: string;
  write_time: string;
  issue_id: number;
  total_issue_info: number[];
}

export const registerReview = async (review: string): Promise<Chatting> => {
  const url = `${getPSHHost()}/reviews`;

  const { status, body } = await RequestSender.sendPostRequest<ResponseBody>({
    url,
    body: {
      review,
    }
  });

  if (status !== 200) {
    throw new Error();
  }

  return {
    review: body.review,
    comment: body.comment,
    writeTime: body.write_time,
    issueId: body.issue_id,
  };
};
