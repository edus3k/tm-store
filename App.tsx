import { NavigationContainer } from '@react-navigation/native';

import StacksApp from '@routes/StacksApp';
import RoutesDev from '@routes/RoutesDev';

const App = ()=>{
  return (
    <NavigationContainer>
      <RoutesDev/>
    </NavigationContainer>
  );
}

export default App;