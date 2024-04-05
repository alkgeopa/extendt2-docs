import './cookieconsent.umd.js';

/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({
	// root: 'body',
	// autoShow: true,
	// disablePageInteraction: true,
	// hideFromBots: true,
	// mode: 'opt-in',
	// revision: 0,

	cookie: {
		name: 'cc_cookie',
		// domain: location.hostname,
		// path: '/docs',
		// sameSite: 'Lax',
		// expiresAfterDays: 365,
	},

	// https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
	guiOptions: {
		consentModal: {
			layout: 'box inline',
			position: 'bottom right',
			equalWeightButtons: true,
		},
		preferencesModal: {
			layout: 'box',
			equalWeightButtons: true,
		},
	},

	onFirstConsent: ({ cookie }) => {
		// console.log('onFirstConsent fired', cookie);
	},

	onConsent: ({ cookie }) => {
		// console.log('onConsent fired!', cookie);
	},

	onChange: ({ changedCategories, changedServices }) => {
		// console.log('onChange fired!', changedCategories, changedServices);
	},

	onModalReady: ({ modalName }) => {
		// console.log('ready:', modalName);
	},

	onModalShow: ({ modalName }) => {
		// console.log('visible:', modalName);
	},

	onModalHide: ({ modalName }) => {
		// console.log('hidden:', modalName);
	},

	categories: {
		// necessary: {
		// 	enabled: true, // this category is enabled by default
		// 	readOnly: true, // this category cannot be disabled
		// },
		analytics: {
			autoClear: {
				cookies: [
					{
						name: /^_ga/, // regex: match all cookies starting with '_ga'
					},
					{
						name: '_gid', // string: exact cookie name
					},
				],
			},

			// https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
			services: {
				ga: {
					label: 'Google Analytics',
					onAccept: () => {},
					onReject: () => {},
				},
			},
		},
	},

	language: {
		default: 'en',
		translations: {
			en: {
				consentModal: {
					title: 'We use cookies',
					description:
						'This documentation site uses cookies for analytics and to improve your experience.',
					acceptAllBtn: 'Accept all',
					acceptNecessaryBtn: 'Reject all',
					showPreferencesBtn: 'Manage Individual preferences',
					// closeIconLabel: 'Reject all and close modal',
					footer: `
											<a href="https://extendt2.com/docs/cookies/">Cookies</a>
											<a href="https://extendt2.eu/privacy-policy/" target="_blank">Privacy Policy</a>
									`,
				},
				preferencesModal: {
					title: 'Manage cookie preferences',
					acceptAllBtn: 'Accept all',
					acceptNecessaryBtn: 'Reject all',
					savePreferencesBtn: 'Accept current selection',
					closeIconLabel: 'Close modal',
					serviceCounterLabel: 'Service|Services',
					sections: [
						{
							title: 'Your Privacy Choices',
							description: `In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.`,
						},
						{
							title: 'Strictly Necessary',
							description:
								'These cookies are essential for the proper functioning of the website and cannot be disabled.',

							//this field will generate a toggle linked to the 'necessary' category
							linkedCategory: 'necessary',
						},
						{
							title: 'Performance and Analytics',
							description:
								'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
							linkedCategory: 'analytics',
							cookieTable: {
								caption: 'Cookie table',
								headers: {
									name: 'Cookie',
									domain: 'Domain',
									desc: 'Description',
								},
								body: [
									{
										name: '_ga',
										domain: location.hostname,
										desc: 'Google Analytics cookie',
									},
									{
										name: '_gid',
										domain: location.hostname,
										desc: 'Google Analytics cookie',
									},
								],
							},
						},
						{
							title: 'More information',
							description:
								'For any queries in relation to my policy on cookies and your choices, please contact us by using the following contact details:<br>' +
								'Linnaeus University<br>' +
								'Mattias Bengtsson, Data Protection Officer<br>' +
								'Linnaeus University,<br>' +
								'351 95 Växjö<br>' +
								'Sweden<br>' +
								'Email: dataskyddsombud@lnu.se<br>' +
								'Phone number: +46 470 708503',
						},
					],
				},
			},
		},
	},
});
