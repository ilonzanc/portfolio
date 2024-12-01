import { ContentComponentUtil } from '../../utils';

const Section = ({ data }) => {
  console.log('Section data: ', data);
  return (
    <div>
      <h1>Section</h1>
      {ContentComponentUtil(data.fields.items)}
    </div>
  );
};

export { Section };
