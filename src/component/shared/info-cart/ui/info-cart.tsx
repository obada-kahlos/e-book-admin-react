import React from 'react'
import Icon from '../../icon/ui/icon'
import { InfoCartProps } from '../data-access/info-cart'

const InfoCart : React.FC<InfoCartProps> = ({...props}) => {
  return (
    <>
      <div className={`${props.className}-cart`}>
        <div>
          <p className='text-[46px] text-main-color mb-0 font-mono'> {props.count} </p>
          <p className='text-[20px] mt-[-10px] font-mono text-[#6d6c6c]'> {props.title} </p>
        </div>
          <Icon icon={props.icon}/>
      </div>
      <style>
        {`
          .${props.className}-cart{
            background-color: ${props.bgColor};
            border-radius: ${props.borderRadius};
            padding: ${props.padding};
            margin: ${props.margin};
            width: ${props.width};
            height: ${props.height};
            box-shadow : 0px 0px 30px 0px rgb(204 204 204 / 23%), 0px 0px 25px 0px rgb(204 204 204 / 65%);
            display : flex;
            justify-content : space-between;
            align-items : center;
            cursor : pointer;
            transition : 0.4s;
          }
          .${props.className}-cart:hover{
            background-color : #f2f2f2;
          }
        `}
      </style>
    </>
  )
}

export default InfoCart