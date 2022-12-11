import React from 'react'
import { TableProps } from '../data-access/table'

const Table : React.FC<TableProps> = ({...props}) => {
  return (
    <>
        <table style={{width : props.width}}>
            {props.children}
        </table>
    </>
  )
}

export default Table