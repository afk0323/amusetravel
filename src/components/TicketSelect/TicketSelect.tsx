import React from 'react';
import './TicketSelect.scss';
import TicketList from './TicketList/TicketList';

function TicketSelect() {
  return (
    <div className="select-ticket">
      <p className="select-ticket-title">티켓 선택</p>
      {/* calender api */}
      <div className="calendar">
        <img className="image" src="images/calendar.png" alt="calendar" />
      </div>
      <TicketList />
    </div>
  );
}

export default TicketSelect;
