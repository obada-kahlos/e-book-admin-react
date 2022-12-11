import React from 'react'
import { TbodyProps } from '../data-access/tbody'

const Tbody : React.FC<TbodyProps> = ({...props}) => {
  return (
    <tbody>{props.children}</tbody>
  )
}

export default Tbody