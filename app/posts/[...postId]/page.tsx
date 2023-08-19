import { FC } from 'react';
interface PageProps {
  params: {
    postId: string;
  };
}
const posts: FC<PageProps> = ({ params }) => {
  return <div>{params.postId}</div>;
};

export default posts;
