import React from 'react';
import './TextUnderline.scss';
import styled from 'styled-components';

interface TextUnderlineProps {
  style?: React.CSSProperties;
  borderheight?: number;
  children: any;
  bottom?: number;
  className?: string;
  href?: string;
}

function TextUnderline(props: TextUnderlineProps) {
  const { style, borderheight, children, bottom, className, href } = props;
  if (href) {
    <Text
      style={style}
      borderheight={borderheight}
      bottom={bottom}
      className={className}
      href={href}
    >
      {children}
    </Text>;
  }
  return (
    <Text
      style={style}
      borderheight={borderheight}
      bottom={bottom}
      className={className}
    >
      {children}
    </Text>
  );
}

const Text = styled.span<{ borderheight: any; bottom: any; href?: any }>`
  font-size: 54px;
  line-height: 64px;
  font-weight: 600;
  color: #111111;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: ${({ bottom }) => (bottom ? `${bottom}px` : '-5px')};
    left: 0;
    right: 0;
    height: ${({ borderheight }) =>
      borderheight ? `${borderheight}px` : '5px'};
    background-color: ${(props) =>
      props.style?.color ? props.style.color : '#111111'};
  }
`;

const Link = styled.a<{ borderheight: any; bottom: any }>`
  font-size: 54px;
  line-height: 64px;
  font-weight: 600;
  color: #111111;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: ${({ bottom }) => (bottom ? `${bottom}px` : '-5px')};
    left: 0;
    right: 0;
    height: ${({ borderheight }) =>
      borderheight ? `${borderheight}px` : '5px'};
    background-color: ${(props) =>
      props.style?.color ? props.style.color : '#111111'};
  }
`;

export default TextUnderline;
