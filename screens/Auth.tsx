import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const Auth: React.FC = () => {
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
			<View style={styles.title}>
				<Text style={styles.titleText}>TGL</Text>
			</View>
			<View style={styles.formContainer}>
				<Text style={styles.formTitle}>Authentication</Text>
				<View style={styles.form}>
					<TextInput
						style={styles.input}
						label='Email'
						mode='flat'
						spellCheck={false}
						selectionColor='#B5C401'
						theme={{
							colors: {
								placeholder: '#777',
								primary: '#777',
							},
						}}
					/>
					<TextInput
						style={styles.input}
						label='Password'
						mode='flat'
						spellCheck={false}
						selectionColor='#B5C401'
						secureTextEntry
						theme={{
							colors: {
								placeholder: '#777',
								primary: '#777',
							},
						}}
					/>
					<Text style={styles.forgetPassword}>I forget my password</Text>
					<View style={styles.login}>
						<TouchableOpacity style={styles.btn}>
							<Text style={styles.btnLogin}>Log In</Text>
							<AntDesign name='arrowright' size={26} color='#B5C401' />
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.login}>
					<TouchableOpacity style={styles.btn}>
						<Text style={styles.btnSignUp}>Sign Up</Text>
						<AntDesign name='arrowright' size={26} color='#777' />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eeeeee',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		borderBottomWidth: 5,
		borderBottomColor: '#B5C401',
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		width: 100,
		alignItems: 'center',
	},
	titleText: {
		fontSize: 40,
		fontWeight: 'bold',
		color: '#777777',
	},
	formContainer: {
		width: Dimensions.get('window').width - 50,
	},
	formTitle: {
		textAlign: 'center',
		fontSize: 30,
		color: '#777777',
		fontWeight: 'bold',
		marginTop: 30,
		marginBottom: 20,
	},
	form: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 10,
	},
	input: {
		height: 60,
		paddingLeft: 20,
		fontWeight: 'bold',
		borderBottomWidth: 1,
		backgroundColor: '#fff',
		borderBottomColor: '#eee',
	},
	forgetPassword: {
		textAlign: 'right',
		marginEnd: 15,
		marginTop: 20,
		color: '#eee',
	},
	login: {
		flexDirection: 'column',
		alignItems: 'center',
		margin: 30,
	},
	btn: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	btnLogin: {
		color: '#B5C401',
		fontSize: 30,
		fontWeight: 'bold',
		marginRight: 15,
	},
	btnSignUp: {
		color: '#777',
		fontSize: 30,
		fontWeight: 'bold',
		marginRight: 15,
	},
});

export default Auth;
