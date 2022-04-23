import CreditCardImg from "../assets/credit-card.png"

export const cardsService = [
	{
		"id": "1000",
		"cardImage": CreditCardImg,
		"name": "software subscriptions",
		"creditCardNo": "1234 5678 9012 3456",
		"csvCode": 123,
		"csvExpDate": "11/22",
		"balance": 123213,
		"limit": 100000,
		"debt": 22313,
		"savings": 400000,
		"payment": 60000,
		"active": true,
		"status": "virtual",
		"issuedAccess": [
			{name: "microsoft o365", date: "01/01/2022", period: "monthly", charges: 645},
			{name: "netflix", date: "04/01/2022", period: "monthly", charges: 1245},
		]
	},
]
