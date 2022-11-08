import React from 'react';
import styled from "styled-components";
import Marquee from '../../Components/Marquee/Marquee';
import cn from './Contact.module.scss';
import ContantForm from './components/ContantForm';


const DiagonalBox = styled.div`
  position: relative;
  background: var(--background-color);
  transition: background 350ms;

  height: 15rem;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(45deg, #3787dc, #702cac);
    transform: skewY(-5deg);
  }
`;

const DivBox = styled.div`
  position: relative;
  background: var(--background-color);
  transition: background 350ms;
  height: 10rem;
  width: 100%;
`;

const Content = styled.div`
  color: #e4e4e4;
  position: relative;
  max-width: 50em;
  margin: 0 auto;
  padding: 3rem 2rem;
`;




const Contact = ({ theme }) => {
  return (
    <>
        <DiagonalBox style={{ zIndex: "200" }}>
    <Marquee text={"CONTACT!I AM LOOKING FOR A JOB"} />
    <Content>
      <p>
        Welcome to the site! above were my projects. Now, let me tell you
        something small about..  MYSELF
      </p>
    </Content>
  </DiagonalBox>
    <div  className={cn.container} style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}} >
    <ContantForm />

    </div>
    </>
)
}

export default Contact