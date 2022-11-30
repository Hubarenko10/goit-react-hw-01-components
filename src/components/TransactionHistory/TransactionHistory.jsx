import PropTypes from 'prop-types';
import { TransctionHistoryStyle,Thead, Tr, Th, Td, } from './TransctionHistoryStyle';

export const TransactionHistory = ({ items }) => {
  return (
    <TransctionHistoryStyle>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <tbody>
        {items.map(item => {
        return (<Tr key={item.id}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
        </Tr>
        
        )
        })}
      </tbody>
    </TransctionHistoryStyle>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })
  ).isRequired
}


