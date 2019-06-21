import React from 'react';
import style from '../../container/AppContainer/index.scss';

/**
 * @file 颜色列表
 */
const BlockChecbox = ({ onChange, list }) => (
  <div className={style.BlockColor} >
    {list.map(item => (
        <div className={style.item} style={{background:item.key}} onClick={() => onChange(item.key)}>
        </div>
    ))}
  </div>
);

export default BlockChecbox;
