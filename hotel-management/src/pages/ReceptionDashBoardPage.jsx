import Scheduler from "../components/Scheduler.jsx";


export default function ReceptionDashBoardPage() {
	const dataSource = [
		{
			Id: 1,
			Subject: "001",
			StartTime: new Date(2024, 3, 1, 10, 0),
			EndTime: new Date(2024, 3, 5, 12, 30),
			// IsReadonly: true,
		},
		{
			Id: 2,
			Subject: "014",
			StartTime: new Date(2024, 3, 13, 10, 0),
			EndTime: new Date(2024, 3, 19, 12, 0),
			// IsReadonly: true,
		},
		{
			Id: 3,
			Subject: "212",
			StartTime: new Date(2024, 3, 2, 9, 30),
			EndTime: new Date(2024, 3, 7, 11, 0),
			// IsReadonly: true,
		},
	];

	return (
			<Scheduler
				showMonth
				isDragAndDrop
				isResize
				dataSource={dataSource}
				displayName={{ timelineMonthName: "Bookings" }}
			/>
	);
}
