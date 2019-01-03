/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';

import SearchPage from './Pages/SearchPage';
import SearchResults from './Pages/SearchResults';
import DetailPage from './Pages/DetailPage';
import {
  createStackNavigator,createAppContainer
} from 'react-navigation';


const App = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
  Detail: {screen: DetailPage}
});
export default createAppContainer(App);
