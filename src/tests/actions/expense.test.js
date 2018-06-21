import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should set up remove expense action object', () =>{
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should set up edit expense action object', () => {
    const action = editExpense('123abc', {note: 'New note value '});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value '
        }
    })
})