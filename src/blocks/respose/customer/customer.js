import React from "react";
import PropTypes from "prop-types";

import stylesShared from "Src/customer.css";
import Contact from "../Contact/Contact";
import statuses from './statuses'
import sexes from './sexes'
import CustomFields from '../CustomFields/CustomFields';


const Customer = ({ customer, ...props }) => {
  const {
    processingStatus,
    sex,
    birthDate,
    mobilePhone,
    pendingMobilePhone,
    isMobilePhoneInvalid,
    isMobilePhoneConfirmed,
    email,
    isEmailInvalid,
    isEmailConfirmed,
    pendingEmail,
    area,
    ianaTimeZone, 
    timeZoneSource,
    customFields
  } = customer;




  return (
    <div className={stylesShared.customer}>
      <div className={stylesShared.inline}>
        <div className={stylesShared.half}>
          <div className={stylesShared.name}>ФИО</div>
          <div className={stylesShared.value}>
            {`${customer.firstName} ${customer.middleName} ${customer.lastName}`}
          </div>
        </div>
        <div className={stylesShared.half}>
          <div className={stylesShared.name}>Статус обработки</div>
          <div className={stylesShared.value}>
            {statuses[processingStatus] || processingStatus}
          </div>
        </div>
      </div>
      <div className={stylesShared.inline}>
        <div className={stylesShared.half}>
          <div className={stylesShared.name}>Пол</div>
          <div className={stylesShared.value}>{sexes[sex]}</div>
        </div>
        <div className={stylesShared.half}>
          <div className={stylesShared.name}>Дата рождения</div>
          <div className={stylesShared.value}>{birthDate}</div>
        </div>
      </div>
      {mobilePhone && <Contact
        label='Мобильный телефон'
        main={mobilePhone}
        invalid={isMobilePhoneInvalid}
        confirmed={isMobilePhoneConfirmed}
        pending={pendingMobilePhone}
      />}
      {email && <Contact
        label='Email'
        main={email}
        invalid={isEmailInvalid}
        confirmed={isEmailConfirmed}
        pending={pendingEmail}
      />}

      
      <div className={stylesShared.inline}>
        {area && (
          <div className={stylesShared.half}>
            <div className={stylesShared.name}>Зона</div>
            <div className={stylesShared.value}>{area.name}</div>
            <p className={`${stylesShared.neutral} ${stylesShared.status}`}>{area.ids.externalId}</p>
          </div>
        )}
        {ianaTimeZone && (
          <div className={stylesShared.half}>
            <div className={stylesShared.name}>Часовой пояс</div>
            <div className={stylesShared.value}>{ianaTimeZone}</div>
            <p className={`${stylesShared.neutral} ${stylesShared.status}`}>{timeZoneSource}</p>
          </div>
        )}
      </div>
      {customFields && <CustomFields data={customFields} />}
    </div>
  );
};

Customer.propTypes = {
  customer: PropTypes.object,
};

export default Customer;
