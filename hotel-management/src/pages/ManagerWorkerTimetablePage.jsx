import Scheduler from "../components/Scheduler";
import { formatDateYMDHMS } from "../util/dateFormater";
import { useState } from "react";

export default function ManagerWorkerTimetablePage() {
	const recurenceFrequency = "WEEKLY";
	const recurenceInterval = 1;
	const recurence = `FREQ=${recurenceFrequency};NEVER;INTERVAL=${recurenceInterval}`;

	const [workSchedule, setWorkSchedule] = useState([
		{
			DayID: 1,
			EmployName: "Monday",
			Start: "2024-04-01 08:00:00",
			Finish: "2024-04-01 16:30:00",
		},
		{
			DayID: 2,
			EmployName: "Tuesday",
			Start: "2024-04-02 08:00:00",
			Finish: "2024-04-02 16:30:00",
		},
		{
			DayID: 3,
			EmployName: "Wednesday",
			Start: "2024-04-03 08:00:00",
			Finish: "2024-04-03 16:30:00",
		},
		{
			DayID: 4,
			EmployName: "Thursday",
			Start: "2024-04-04 08:00:00",
			Finish: "2024-04-04 16:30:00",
		},
		{
			DayID: 5,
			EmployName: "Friday",
			Start: "2024-04-05 16:30:00",
			Finish: "2024-04-05 22:30:00",
		},
		{
			DayID: 6,
			EmployName: "Saturday",
			Start: "2024-04-06 16:30:00",
			Finish: "2024-04-06 22:30:00",
		},
		{
			DayID: 7,
			EmployName: "Sunday",
			Start: "2024-04-07 16:30:00",
			Finish: "2024-04-07 22:30:00",
		},
	]);

	const fieldsData = {
		id: "DayID",
		subject: { name: "EmployName", title: "Employ Name", default: "Add Summary" },
		startTime: { name: "Start" },
		endTime: { name: "Finish" },
	};



	function handleElementChange(args) { 
        console.log(args);
        const changedElement = args.changedRecords[0];
        const changedElementData = {
            DayID: changedElement.DayID,
            EmployName: changedElement.EmployName,
            Start: formatDateYMDHMS(changedElement.Start),
            Finish: formatDateYMDHMS(changedElement.Finish),
        }
        
        setWorkSchedule((prev) => {
            return prev.map((record) => {
                if (record.EmployName === changedElementData.EmployName) {
                    return {
                        ...record,
                        DayID: changedElementData.DayID,
                        Start: changedElementData.Start,
                        Finish: changedElementData.Finish,
                    };
                }
                return record;
            });
        });
	}

	console.log(workSchedule)

	return (
		<Scheduler
			dataSource={workSchedule}
			currentView="Week"
			isDragAndDrop
			isResize
			hasRecurence={recurence}
			fieldsData={fieldsData}
			canAdd={true}
			canEdit={true}
			canDelete={true}
			onChangesToElement={handleElementChange}
		/>
	);
}
