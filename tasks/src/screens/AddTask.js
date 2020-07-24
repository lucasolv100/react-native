import React from 'react'
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native'

export default class AddTask extends React.Component {


	render() {
		return (
			<Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel} animationType='slide'>
				<TouchableWithoutFeedback onPress={this.props.onCancel}>
					<View style={styles.background}>

					</View>
				</TouchableWithoutFeedback>
			</Modal>
		)
	}
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		flex: 1
	}
})