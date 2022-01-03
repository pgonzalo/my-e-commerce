import React from 'react';
import { Message } from 'semantic-ui-react';

const Error = () => (
	<Message
		warning
		header='Error'
		content="Página no encontrada"
		style={{ textAlign: 'center' }}
	/>
);

export default Error;

