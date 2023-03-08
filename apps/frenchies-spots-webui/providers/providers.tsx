import React from 'react';
import GraphqlProvider from './graphql-provider';

// import { ThemeProvider } from '@frenchies-spots/theme';
import ThemeProvider from './theme-provider';

import AuthProvider from './auth-provider';
import { RootSiblingParent } from 'react-native-root-siblings';

type Props = { children: JSX.Element };

const Providers = (props: Props) => {
  const { children } = props;
  return (
    <GraphqlProvider>
      <ThemeProvider>
        <AuthProvider>
          <RootSiblingParent>{children}</RootSiblingParent>
        </AuthProvider>
      </ThemeProvider>
    </GraphqlProvider>
  );
};

export default Providers;
