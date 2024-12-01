import { CONTENT_COMPONENTS } from '../constants';
import { StringUtil } from './string.util';

const stringUtil = new StringUtil();

const ContentComponentUtil = (content) => {
  console.log('ContentComponentUtil', content);
  return (
    <>
      {content.map((contentItem, index) => {
        if (!contentItem.sys.contentType) {
          return null;
        }

        const componentName = stringUtil.camelToPascalCase(
          contentItem.sys.contentType.sys.id
        );

        if (Object.keys(CONTENT_COMPONENTS).includes(componentName)) {
          const Component =
            CONTENT_COMPONENTS[
              stringUtil.camelToPascalCase(contentItem.sys.contentType.sys.id)
            ];

          return (
            <Component
              key={`${index}_${contentItem.sys.id}`}
              data={{
                sys: contentItem.sys,
                fields: contentItem.fields,
              }}
            />
          );
        }

        return null;
      })}
    </>
  );
};

export { ContentComponentUtil };
