import Scheduler from "../components/Scheduler.jsx"

export default function TimeTablePage() {
    const recurenceFrequency = "WEEKLY";
    const recurenceInterval = 1;
    const recurenceCount = 100;
    const recurence = `FREQ=${recurenceFrequency};NEVER;INTERVAL=${recurenceInterval}`

    const workSchedule = [
        {
            Id: 1,
            Subject: "Monday",
            StartTime: new Date(2024, 3, 1, 8, 0),
            EndTime: new Date(2024, 3, 1, 16, 30),
        },
        {
            Id: 2,
            Subject: "Tuesday",
            StartTime: new Date(2024, 3, 2, 8, 0),
            EndTime: new Date(2024, 3, 2, 16, 30),
        },
        {
            Id: 3,
            Subject: "Wednesday",
            StartTime: new Date(2024, 3, 3, 8, 0),
            EndTime: new Date(2024, 3, 3, 16, 30),
        },
        {
            Id: 4,
            Subject: "Thursday",
            StartTime: new Date(2024, 3, 4, 8, 0),
            EndTime: new Date(2024, 3, 4, 16, 30),
        },
        {
            Id: 5,
            Subject: "Friday",
            StartTime: new Date(2024, 3, 5, 16, 30),
            EndTime: new Date(2024, 3, 5, 22, 30),
        },
        {
            Id: 6,
            Subject: "Saturday",
            StartTime: new Date(2024, 3, 6, 16, 30),
            EndTime: new Date(2024, 3, 6, 22, 30),
        },
        {
            Id: 7,
            Subject: "Sunday",
            StartTime: new Date(2024, 3, 7, 16, 30),
            EndTime: new Date(2024, 3, 7, 22, 30),
        }
    ]

    return (
        <Scheduler currentView="Week" dataSource={workSchedule} hasRecurence={recurence} isReadOnly/>
    )
}