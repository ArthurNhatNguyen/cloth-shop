import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
	auth,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
	useEffect(() => {
		const logGoogleRedirect = async () => {
			const response = await getRedirectResult(auth);
			if (response) {
				const userDocRef = await createUserDocumentFromAuth(response.user);
			}
		};
		logGoogleRedirect();
	}, []);

	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		const { user } = response;
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In</h1>
			<button onClick={logGoogleUser}>Sign In With Google Popup</button>
			<button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
