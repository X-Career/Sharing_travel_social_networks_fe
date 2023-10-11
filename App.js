import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import LoginProvider, {LoginContext} from './src/Login/logincontext';

import Sigin from './src/Login'
import Profile from './src/screens/Profile'

const AppMobile = () => {
  const [state, dispatch] = useContext(LoginContext)
  return (
    <View style={{ flex: 1 }}>
        {/* {state.first? 
          <Profile/>
          : */}
          <Sigin/>
        {/* } */}
      </View>
  )
}
const App = () => {  
  return (
    <LoginProvider>
      <AppMobile/>
    </LoginProvider>
  )
}

export default App