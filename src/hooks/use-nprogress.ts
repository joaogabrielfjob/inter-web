import { useEffect } from 'react';
import { useLocation, useNavigation } from 'react-router-dom';
import nProgress from 'nprogress';

import 'nprogress/nprogress.css';

nProgress.configure({ showSpinner: false, speed: 500 });

export function useNProgress() {
  const location = useLocation();
  const navigation = useNavigation();

  useEffect(() => {
    nProgress.start();

    if (navigation.state === 'idle') nProgress.done();
  }, [location, navigation.state]);
};
