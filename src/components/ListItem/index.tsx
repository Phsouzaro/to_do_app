import { useState } from 'react';
import {Type} from '../../types/Type'
import * as C from './styled'
type Props = {
    data: Type;
}

export default ({ data }: Props) => {
    const [isChecked, setIsChecked] = useState(data.done)
    return (
        <C.Container>
            <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label style={{textDecoration: isChecked ? 'line-through' : 'none'}}>{data.name}</label>
        </C.Container>
    )
}