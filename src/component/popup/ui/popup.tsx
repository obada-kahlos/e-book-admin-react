import React from 'react'
import Icon from '../../shared/icon/ui/icon'
import { PopupProps } from '../data-access/popup'

const Popup : React.FC<PopupProps> = ({...props}) => {
  return (
    <>
        {
            props.isOpen && <div className='popup-container'>
                <div className='pupup-header'>
                    <p> {props.header.title} </p>
                    <Icon icon={props.icon} onClick={props.onClick}/>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        }
        <style>
            {`
                .popup-container{
                    position : fixed;
                    top : ${props.top};
                    left: ${props.left};
                    right: ${props.right};
                    bottom: ${props.bottom};
                    transform : translate(-50% , -50%);
                    width : ${props.width};
                    height : ${props.height};
                    background-color : ${props.bgClor};
                    border-radius : ${props.borderRadius};
                    padding : ${props.padding};
                    box-shadow : 0px 3px 20px 0px rgba(204, 204, 204,0.4);
                    z-index : 10001;
                }
                @media(max-width : 600px){
                    .popup-container{
                        width : 90%;
                    }
                }
                .pupup-header{
                    display : flex;
                    justify-content : space-between;
                    align-items : center;
                    padding : 10px;
                    border-bottom : 1px solid #ccc;
                }
            `}
        </style>
    </>
  )
}

export default Popup