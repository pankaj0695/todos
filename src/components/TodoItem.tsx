import { PropsWithChildren } from 'react';

import classes from './TodoItem.module.css';

const TodoItem: React.FC<
  PropsWithChildren<{ text: string; onDelete: () => void }>
> = props => {
  return (
    <li onClick={props.onDelete} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
