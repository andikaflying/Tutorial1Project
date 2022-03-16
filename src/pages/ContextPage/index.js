import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, createContext} from 'react';

const UserContext = createContext('Unknown');

const ContextPage = () => {
  const userName = 'John R';

  return (
    <UserContext.Provider value={userName}>
      <Layout>
        <Text>Main content</Text>
        <Text>Main content 2</Text>
      </Layout>
    </UserContext.Provider>
  );
};

const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

const Header = () => {
  return <UserInfo />;
};

const UserInfo = () => {
  const nama = useContext(UserContext);
  return <Text>{nama}</Text>;
};

export default ContextPage;

const styles = StyleSheet.create({});
