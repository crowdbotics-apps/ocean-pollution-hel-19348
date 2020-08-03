import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList87101Navigator from '../features/ArticleList87101/navigator';
import ArticleList87100Navigator from '../features/ArticleList87100/navigator';
import ArticleList87099Navigator from '../features/ArticleList87099/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList87101: { screen: ArticleList87101Navigator },
ArticleList87100: { screen: ArticleList87100Navigator },
ArticleList87099: { screen: ArticleList87099Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
