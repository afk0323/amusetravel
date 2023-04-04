import React from 'react';
import UseInfoDetail from '../UseInfo/UseInfoDetail/UseInfoDetail';
import '../UseInfo/UseInfo.scss';

function CancelRefund() {
  return (
    <div className="use-information">
      <p className="information-title">취소 및 환불 규정</p>
      <UseInfoDetail title="📍 여행사의 귀책사유로 여행사가 계약해제하는 경우" content={'여행개시 5일전까지 통보시 ⇒ 계약금환급\n여행개시 2일전까지 통보시⇒ 계약금환급 및 요금의 10% 배상\n여행개시 1일전까지 통보시⇒ 계약금환급 및 요금의 20% 배상\n여행당일 통보 및 통보가 없는 경우 ⇒ 계약금환급 및 요금의 30% 배상'} />
      <UseInfoDetail title="📍 여행자의 귀책사유로 여행자가 계약해제하는 경우 (숙박여행인 경우)" content={'여행개시 5일전까지 취소 통보시 ⇒ 전액환급\n여행개시 2일전까지 취소 통보시 ⇒ 요금의 10% 배상\n여행개시 1일전까지 취소 통보시 ⇒ 요금의 20% 배상\n여행개시 당일취소하거나 연락없이 불참한 경우 ⇒ 요금의 30% 배상'} />
      <UseInfoDetail title="📍 여행사의 계약조건 위반으로 여행자가 여행계약을 해제하는 경우 (여행전)" content={'여행개시 5일전까지 계약조건 변경 통보시 ⇒ 계약금환급\n여행개시 2일전까지 계약조건 변경 통보시 ⇒ 계약금환급 및 요금의 10% 배상\n여행개시 1일전까지 계약조건 변경 통보시 ⇒ 계약금환급 및 요금의 20% 배상\n여행당일 계약조건 변경통보 또는 통보가 없을 시 ⇒ 계약금환급 및 요금의 30% 배상'} />
    </div>
  );
}

export default CancelRefund;
