import React from 'react';
import { Message } from 'semantic-ui-react';

const SuccessMessage = ({ msg }) => (
	<Message
		success
		header='Tu numero de orden es:'
		content={msg.id}
		style={{ textAlign: 'center' }}
	/>
);

export default SuccessMessage;
