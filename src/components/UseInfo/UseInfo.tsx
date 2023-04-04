import React from 'react';
import './UseInfo.scss';
import UseInfoDetail from './UseInfoDetail/UseInfoDetail';

function UseInfo() {
  return (
    <div className="use-information">
      <p className="information-title">이용 안내</p>
      <UseInfoDetail title="컨시어지 서비스" content={'픽업, 인원 추가, 숙박 등의 개인 맞춤형 서비스를 제공합니다. \n문의해주시는 고객의 상황과 요구사항에 따라 포함사항 및 불포함사항은 변경될 수 있으며, 이로 인해 최종견적금의 차이가 발생될 수 있습니다. 기존 상품에 추가적인 옵션을 희망하는 분께서는 별도로 문의해주시길 바랍니다.'} />
      <UseInfoDetail title="여행자 보험" content={'여행 시 발생할 수 있는 여러 사고에 대비하여 여행 참가자 전원의 여행자보험 가입을 대행해 드리고 있습니다. \n보험금 청구 및 보상은 하나손해보험에서 이루어집니다. 보험비는 투어 비용에 포함되어 있으며, 보험 가입을 위해 수집한 개인정보는 가입 완료 후 즉시 폐기됩니다.'} />
      <UseInfoDetail title="GPS 추적기" content={'안전을 위해 모든 아동들은 해당 기기를 부착하게 됩니다. \n보호자들도 해당 기기의 애플리케이션을 설치하여 아이의 위치를 파악할 수 있습니다.'} />
      <UseInfoDetail title="영상 촬영 동의" content="돌발상황에 대처하기 위해 투어의 전과정은 카메라로 녹화되고, 아동의 초상권에 대한 보호자의 동의서를 받을 예정입니다. 투어 내용 기록을 위한 동의서는 필수 사항이며, 이를 마케팅에 활용함에 대한 동의는 선택 사항입니다." />
      <UseInfoDetail title="장애인 이용객 별도 문의" content={'저희는 장애인 여행자들에게 풀컨시어지 여행을 기획해드리는 회사입니다. \n해당 상품은 비장애인을 대상으로 한 고정 상품으로, 개개인의 장애 유형과 정도를 고려한 일정 변경이 어렵습니다. 위의 구성으로 여행을 희망하시는 분께서는 별도로 문의해주시길 바랍니다.'} />
    </div>
  );
}

export default UseInfo;
