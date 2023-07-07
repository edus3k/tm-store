import { NavigationContainer } from '@react-navigation/native';

import UsersRoutes from '@routes/UsersStacks';

const App = ()=>{
  return (
    <NavigationContainer>
      <UsersRoutes/>
    </NavigationContainer>
  );
}

export default App;