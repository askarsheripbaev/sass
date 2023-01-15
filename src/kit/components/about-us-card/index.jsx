import React from 'react';
import styles from "./style.module.scss";
import styled from "styled-components"
import TextCard from "./text-card";

const StyledIcon = styled.span `
   background: ${props => `url(${props.icon}) center center/contain no-repeat;`}
`


const AboutUsCard = (props) => {
   const {
      icon,
       text
   } = props
  return (
    <div className={styles['about-us-card']}>
      <StyledIcon icon={props.icon} className={styles.icon} />
      <h2 className={styles.title}>
        About us
      </h2>
      <p className={styles.description}>
         <TextCard>{props.text}</TextCard>
      </p>
    </div>
  );
};

export default AboutUsCard;