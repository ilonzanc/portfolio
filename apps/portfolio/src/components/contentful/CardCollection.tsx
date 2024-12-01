import { Card } from './Card';

const CardCollection = ({ data }) => {
  return (
    <div>
      <h1>CardCollection</h1>
      <ul className="flex gap-4 flex-wrap">
        {data.fields.cards.map((card) => (
          <li className="w-1/3">
            <Card data={card.fields} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { CardCollection };
