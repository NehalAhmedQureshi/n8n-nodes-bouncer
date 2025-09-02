import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class TheNeverBounce implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'The Never Bounce',
		name: 'theNeverBounce',
		// icon: 'file:theneverbounce.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from bouncers API',
		defaults: {
			name: 'The Never Bounce',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'TheNeverBounceApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://bouncer.automely.ai/api/v1/',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
			// Resources and operations will go here
			properties: [
				//* resourses are here
				// {
				// 	displayName: 'Resource',
				// 	name: 'resource',
				// 	type: 'options',
				// 	noDataExpression: true,
				// 	options: [
				// 		{
				// 			name: 'Astronomy Picture of the Day',
				// 			value: 'astronomyPictureOfTheDay',
				// 		},
				// 		{
				// 			name: 'Hello',
				// 			value: 'marsRoverPhotos',
				// 		},
				// 	],
				// 	default: 'astronomyPictureOfTheDay',
				// },

				// Operations will go here
				{					displayName: 'Operation',
					name: 'operation',
					type: 'options',
					noDataExpression: true,
					// displayOptions: {
					// 	show: {
					// 		resource: [
					// 			'astronomyPictureOfTheDay',
					// 		],
					// 	},
					// },
					options: [
						{
							name: 'Get',
							value: 'get',
							action: 'Single validate',
							description: 'Validate a single email',
							routing: {
								request: {
									method: 'GET',
									url: 'validate',
								},
							},
						},
					],
					default: 'get',
				},
				{
					displayName: 'Email',
					description: 'The email address to verify',
					required: true,
					name: 'email',
					type: 'string',
					default: '',
					placeholder: 'name@example.com',
					// displayOptions: {
					// 	show: {
					// 		resource: [
					// 			'marsRoverPhotos', // Change this to your actual resource if needed
					// 		],
					// 	},
					// },
					routing: {
						request: {
							// If you want to send the email as a query parameter:
							qs: {
								email: '={{$value}}',
							},
							// Or, if you want to send it in the body (for POST requests):
							// body: {
							//     email: '={{$value}}',
							// },
						},
					},
				},
				// Optional/additional fields will go here
				// {
				// 	displayName: 'Additional Fields',
				// 	name: 'additionalFields',
				// 	type: 'collection',
				// 	default: {},
				// 	placeholder: 'Add Field',
				// 	displayOptions: {
				// 		show: {
				// 			resource: [
				// 				'astronomyPictureOfTheDay',
				// 			],
				// 			operation: [
				// 				'get',
				// 			],
				// 		},
				// 	},
				// 	options: [
				// 		{
				// 			displayName: 'Date',
				// 			name: 'apodDate',
				// 			type: 'dateTime',
				// 			default: '',
				// 			routing: {
				// 				request: {
				// 					// You've already set up the URL. qs appends the value of the field as a query string
				// 					qs: {
				// 						date: '={{ new Date($value).toISOString().substr(0,10) }}',
				// 					},
				// 				},
				// 			},
				// 		},
				// 	],
				// }
		],
	};
}
