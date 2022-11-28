import {
  Section,
  Title,
  ItemList,
  Item,
  Label,
  Percentage,
} from './StatisticsStyle';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
       {title && <Title>{title}</Title>}
      <ItemList>
        {stats.map(stat => {
          return (
            <Item key={stat.id} style={{ backgroundColor: randomHexColor() }}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}</Percentage>
            </Item>
          );
        })}
      </ItemList>
    </Section>
  );
};
function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
