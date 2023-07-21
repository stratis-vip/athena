import adv11small from "./Adventure11small.jpg";
import adv11 from "./Adventure11.jpg";
import adv10small from "./Adventure10small.jpg";
import adv10 from "./Adventure10.jpg";
import adv12small from "./Adventure12small.jpg";
import adv12 from "./Adventure12.jpg";
import adv13small from "./13small.jpg";
import adv13 from "./13.jpg";
import adv09small from "./adv09small.jpg";
import adv09 from "./adv09.jpg";

export const adventures = [
	{
		id: 9,

		name: "Adventure 09 - Valley of the Elements",
		images: {
			thumb: adv09small,
			solution: adv09,
		},
		paths: [
			{
				colour: "blue",
				numbers: "02-06-10-15-20-14-24-29-25-36-39-42-44-Boss(x2)",
			},
			{
				colour: "orange",
				numbers: "03-08-12-11-07-16-21-26-30-31-32-35-37-40-Boss",
			},
			{
				colour: "green",
				numbers: "03-04-13-19-18-23-17-22-38-41-43-46-Boss(x3)",
			},
		],
	},
	{
		id: 10,
		name: "Adventure 10 - Valley of the Elements",
		images: {
			thumb: adv10small,
			solution: adv10,
		},
		paths: [
			{
				colour: "blue",
				numbers: "03-02-06-11-17-25-30-35-29-34-33-38-43-44-Boss",
			},
			{
				colour: "orange",
				numbers: "04-08-13-18-22-26-31-36-40-46-45-39-33-28-20",
			},
			{
				colour: "green",
				numbers: "05-09-14-19-23-27-32-37-42-48-51-50-49-47-41",
			},
		],
	},
	{
		id: 11,
		name: "Adventure 11 - Ghirwil City Depths",
		images: {
			thumb: adv11small,
			solution: adv11,
		},
		paths: [
			{
				colour: "blue",
				numbers: "02-03-06-07-12-11-15-21-27-36-39-40-41-Boss(x2)",
			},
			{
				colour: "orange",
				numbers: "02-04-06-08-12-17-16-22-28-29-30-31-25-19-18",
			},
			{
				colour: "green",
				numbers: "02-05-06-09-13-14-20-26-32-38-35-33-34-Boss(x2)",
			},
		],
	},
	{
		id: 12,
		name: "Adventure 12 - Fall of the Celestial City",
		description: "null",
		buffs: [
			{
				type: "Healing Increase",
				numbers: [{ number: 23, percentage: 50 }],
			},
			{
				type: "Health Increase",
				numbers: [
					{ number: 12, percentage: 200 },
					{ number: 13, percentage: 200 },
				],
			},
			{
				type: "Magic Damage Resist",
				numbers: [
					{ number: 20, percentage: 90 },
					{ number: 29, percentage: 90 },
					{ number: 30, percentage: 90 },
					{ number: 36, percentage: 90 },
				],
			},
			{
				type: "Pure Damage Resist",
				numbers: [
					{ number: 5, percentage: 90 },
					{ number: 12, percentage: 90 },
				],
			},
			{
				type: "Physical Damage Resist",
				numbers: [
					{ number: 18, percentage: 90 },
					{ number: 24, percentage: 90 },
					{ number: 25, percentage: 90 },
					{ number: 32, percentage: 90 },
				],
			},

			{
				type: "Damage Increase",
				numbers: [
					{ number: 11, percentage: 50 },
					{ number: 18, percentage: 100 },
					{ number: 31, percentage: 50 },
				],
			},
		],
		images: {
			thumb: adv12small,
			solution: adv12,
		},
		paths: [
			{
				colour: "blue",
				numbers: "05-09-03-06-10-22-31-36-35-29-30-21-13",
			},
			{
				colour: "red",
				numbers: "08-11-17-24-14-12-15-28-20-19-18-BOSS",
			},
			{
				colour: "orange",
				numbers:
					"02-04-07-16-23-32-33-25-34-25-26-18-BOSS",
			},
		],
		notes: [
			{
				id: 1,
				description: "Orange path, is better suited to mage teams.",
			},
		],
	},
	{
		id: 13,
		name: "Adventure 13 on 12 map - Fall of the Celestial City",
		description: "null",
		buffs: [
			{
				type: "Healing Increase",
				numbers: [
					{ number: 23, percentage: 100 },
					{ number: 33, percentage: 100 },
				],
			},
			{
				type: "Magic Damage Resist",
				numbers: [
					{ number: 3, percentage: 100 },
					{ number: 10, percentage: 100 },
					{ number: 13, percentage: 100 },
					{ number: 20, percentage: 100 },
					{ number: 30, percentage: 100 },
				],
			},
			{
				type: "Pure Damage Resist",
				numbers: [{ number: 12, percentage: 100 }],
			},
			{
				type: "Physical Damage Resist",
				numbers: [
					{ number: 2, percentage: 100 },
					{ number: 6, percentage: 100 },
					{ number: 11, percentage: 100 },
					{ number: 18, percentage: 100 },
					{ number: 24, percentage: 100 },
				],
			},
			{
				type: "Health Increase",
				numbers: [
					{ number: 25, percentage: 250 },
					{ number: 29, percentage: 250 },
					{ number: 31, percentage: 250 },
					{ number: 36, percentage: 250 },
				],
			},
			{
				type: "Damage Increase",
				numbers: [
					{ number: 8, percentage: 100 },
					{ number: 12, percentage: 100 },
					{ number: 18, percentage: 100 },
					{ number: 20, percentage: 100 },
					{ number: 25, percentage: 100 },
					{ number: 29, percentage: 100 },
				],
			},
		],
		images: {
			thumb: adv12small,
			solution: adv12,
		},
		paths: [
			{
				colour: "blue",
				numbers: "07-11-17-24-23-33-34-25-32-25-26-18-Boss(x3)",
			},
			{
				colour: "red",
				numbers: "02-04-07-06-16-23-24-14-12-15-28-20-19-18-boss(x2)",
			},
			{
				colour: "yellow",
				numbers:
					"08-01-09-03-05-10-22-31-36-35-29-[32-29-30-21] or [30-21-13(x2)] ",
			},
		],
		notes: [
			{
				id: 1,
				description: "Only map of adventure 12 is recommended!",
			},
			{
				id: 2,
				description: "Red path, is better suited to mage teams.",
			},
			{
				id: 3,
				description:
					"#24 is red path's responsibility but if it create problem blue path can help",
			},
			{
				id: 4,
				description: "Yellow path starts with #8.",
			},
		],
	},
	{
		id: 14,
		description: "null",
		buffs: [
			{
				type: "Healing Increase",
				numbers: [
					{ number: 23, percentage: 100 },
					{ number: 33, percentage: 100 },
				],
			},
			{
				type: "Magic Damage Resist",
				numbers: [
					{ number: 3, percentage: 100 },
					{ number: 10, percentage: 100 },
					{ number: 13, percentage: 100 },
					{ number: 20, percentage: 100 },
					{ number: 30, percentage: 100 },
				],
			},
			{
				type: "Pure Damage Resist",
				numbers: [{ number: 12, percentage: 100 }],
			},
			{
				type: "Physical Damage Resist",
				numbers: [
					{ number: 2, percentage: 100 },
					{ number: 6, percentage: 100 },
					{ number: 11, percentage: 100 },
					{ number: 18, percentage: 100 },
					{ number: 24, percentage: 100 },
				],
			},
			{
				type: "Health Increase",
				numbers: [
					{ number: 25, percentage: 250 },
					{ number: 29, percentage: 250 },
					{ number: 31, percentage: 250 },
					{ number: 36, percentage: 250 },
				],
			},
			{
				type: "Damage Increase",
				numbers: [
					{ number: 8, percentage: 100 },
					{ number: 12, percentage: 100 },
					{ number: 18, percentage: 100 },
					{ number: 20, percentage: 100 },
					{ number: 25, percentage: 100 },
					{ number: 29, percentage: 100 },
				],
			},
		],
		name: "Adventure 13 on 12 map #2- Fall of the Celestial City",
		images: {
			thumb: adv13small,
			solution: adv13,
		},
		paths: [
			{
				colour: "red",
				numbers: "09-03-05-10-22-31-36-35-29-30-21-13(x2)",
			},
			{
				colour: "yellow",
				numbers: "07-02-04-06-16-23-33-34-25-26-18-26-14-24-17",
			},
			{
				colour: "green",
				numbers: "08-12-14-12-15-28-29-32-29-28-20-19-20-boss(x2)",
			},
		],
		notes: [
			{
				id: 1,
				description: "Only map of adventure 12 is recommended!",
			},
			{
				id: 2,
				description: "Yellow path, is better suited to mage teams.",
			},
			{
				id: 3,
				description: "Yellow must not loose a spot for 4 chests",
			},
			{
				id: 4,
				description: "Green can lost one spot (if he can win boss on one spot)",
			},
			{
				id: 5,
				description: "Red can lost 2 spots (13 is not necessary) ",
			},
			{
				id: 6,
				description:
					"If red member clear 13, yellow or green can lost one more spot ",
			},
		],
	},
];
