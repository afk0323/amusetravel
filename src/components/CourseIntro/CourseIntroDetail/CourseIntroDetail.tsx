/* eslint-disable react/react-in-jsx-scope */
import { FC } from 'react';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CourseIntroDetail.scss';

interface CourseIntroDetailProps {
    title: string;
    time: string;
    content: string;
    imageSrc: string;
  }

const CourseIntroDetail: FC<CourseIntroDetailProps> = ({
  title, time, content, imageSrc,
}) => (
  <div className="course-information">
    <div className="course">
      <div className="course-text">
        <div className="course-icon-title">
          <FontAwesomeIcon className="icon-location" icon={faLocationDot} />
          <p className="course-title">{title}</p>
          <p className="course-time">{time}</p>
        </div>
        <div className="course-line-content">
          <div className="course-line" />
          <p className="course-content">
            {content.split('\n').map((line) => (
              <span>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
      <img className="course-image" src={imageSrc} alt={title} />
    </div>
  </div>
);

export default CourseIntroDetail;
