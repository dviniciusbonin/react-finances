import { Item } from '../../types/item';
import * as C from './styles';

type Props = {
    onAdd: (item: Item) => void;
}

function InputArea({onAdd}: Props) {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2021, 9, 27),
            category: 'food',
            title: 'item de teste',
            value: 250.25
        }
        onAdd(newItem);
    }

    return (
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    );
}

export default InputArea;