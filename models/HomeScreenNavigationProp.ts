import { DrawerNavigationProp } from '@react-navigation/drawer';
import DrawerStackParamList from './DrawerStackParamList';

type DrawerScreenNavigationProp = DrawerNavigationProp<
	DrawerStackParamList,
	'Cart'
>;

export default DrawerScreenNavigationProp;
