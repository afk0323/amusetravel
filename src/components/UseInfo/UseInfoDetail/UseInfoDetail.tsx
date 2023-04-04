/* eslint-disable react/react-in-jsx-scope */
import { FC } from 'react';
import './UseInfoDetail.scss';

interface UseInfoDetailProps {
    title: string;
    content: string;
  }

const UseInfoDetail: FC<UseInfoDetailProps> = ({ title, content }) => (
  <div className="useinfo-information">
    <h3>{title}</h3>
    <p>
      {content.split('\n').map((line) => (
        <span>
          {line}
          <br />
        </span>
      ))}
    </p>
  </div>
);

export default UseInfoDetail;
