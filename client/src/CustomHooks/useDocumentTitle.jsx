import React from 'react';

const useDocumentTitle = (title) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useDocumentTitle;
