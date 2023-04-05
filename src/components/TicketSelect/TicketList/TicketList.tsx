import React from 'react';
import './TicketList.scss';
import Ticket from '../Ticket/Ticket';

function TicketList() {
  return (
    <div className="TicketList">
      <Ticket
        name="어린이 이용권"
        detail="만 6세~13세"
        price="511,000"
      />
      <Ticket
        name="어른 이용권"
        detail="만 19세 이상"
        price="550,000"
      />
    </div>
  );
}

export default TicketList;
