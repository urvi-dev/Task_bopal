import { useEffect, useRef } from 'react';

const defaultUseTitleOptions = {
  restoreOnUnmount: false,
};

const useTitle = (title, options = defaultUseTitleOptions) => {
  // Store previous title for restoration
  const prevTitleRef = useRef(document.title);

  // Set the title if it has changed
  if (document.title !== title) {
    document.title = title;
  }

  // Clean up function to restore title on unmount (if specified)
  useEffect(() => () => {
    if (options.restoreOnUnmount) {
      document.title = prevTitleRef.current;
    }
  }, [options.restoreOnUnmount]);
};

export default useTitle;
