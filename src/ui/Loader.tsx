import { FC } from 'react';
import styled from 'styled-components';

const Loader: FC = () => {
  return (
    <Load>
      <LoaderSC>
        <div>
          <span>
            <div></div>
          </span>
        </div>
      </LoaderSC>
    </Load>
  );
};

export default Loader;

const Load = styled('div')`
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f7f6fc;
  z-index: 100000; 
  display: flex;
  align-items: center; 
  justify-content: center;
  width: 100vw; 
  height: 100vh;
`
const LoaderSC = styled('div')`
  div{
    width: 20px;
    height: 20px;
    position: relative;
    span{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(43, 0, 255);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        clip:rect(0 ,20px, 20px, 5px);
        animation: loading 0.7s linear infinite;
        div{
            width: 18px;
            height: 18px;
            clip:rect(0 ,20px, 20px, 8px);
            border-radius: 50%;
            background-color: rgb(255, 255, 255);
        }
    }
    @keyframes loading{
        0%{
            clip:rect(0 ,20px, 20px, 15px);
        }
        50%{
            transform: rotate(180deg);
            clip:rect(0 ,20px, 20px, 1px);
        }
        100%{
            transform: rotate(360deg);
            clip:rect(0 ,20px, 20px, 15px);
        }
    }
  }
`