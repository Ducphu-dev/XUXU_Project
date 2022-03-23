import React from 'react';
import './CallToActionButtons.scss';

interface CTAButtonProps {
  title: string;
  quantity?: string;
  url?: string;
}

function CallToActionButtons() {
  const data = [
    {
      id: 1,
      title: '오늘 신작',
      label: '8',
      category: ['home'],
      url: '',
    },
    {
      id: 2,
      title: '5천캐시 찬스',
      label: '',
      category: ['home'],
      url: '',
    },
    {
      id: 3,
      title: '사내맞선DAY',
      label: '',
      category: ['home'],
      url: '',
    },
  ];

  return (
    <section className="call-to-action">
      <div className="call-to-action-container">
        {data.map((item) => (
          <CTAButton
            key={item.id}
            title={item.title}
            quantity={item.label}
            url={item.url}
          />
        ))}
      </div>
    </section>
  );
}

const CTAButton = (props: CTAButtonProps) => {
  const { title, quantity, url } = props;
  return (
    <a href={`${url ? url : '/'} `} className="cta-button">
      <div className="cta-content">
        <span className="cta-title">{title}</span>
        {quantity && <div className="cta-quantity">{quantity}</div>}
      </div>
    </a>
  );
};

export default CallToActionButtons;
