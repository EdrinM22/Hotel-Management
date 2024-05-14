import Scheduler from "../components/Scheduler.jsx"

export default function TimeTablePage() {
    const recurenceFrequency = "WEEKLY";
    const recurenceInterval = 1;
    const recurenceCount = 100;
    const recurence = `FREQ=${recurenceFrequency};NEVER;INTERVAL=${recurenceInterval}`

    const workSchedule = [
        {
            DayID: 1,
            EmployName: "Monday",
            Start: new Date(2024, 3, 1, 8, 0),
            Finish: new Date(2024, 3, 1, 16, 30),
        },
        {
            DayID: 2,
            EmployName: "Tuesday",
            Start: new Date(2024, 3, 2, 8, 0),
            Finish: new Date(2024, 3, 2, 16, 30),
        },
        {
            DayID: 3,
            EmployName: "Wednesday",
            Start: new Date(2024, 3, 3, 8, 0),
            Finish: new Date(2024, 3, 3, 16, 30),
        },
        {
            DayID: 4,
            EmployName: "Thursday",
            Start: new Date(2024, 3, 4, 8, 0),
            Finish: new Date(2024, 3, 4, 16, 30),
        },
        {
            DayID: 5,
            EmployName: "Friday",
            Start: new Date(2024, 3, 5, 16, 30),
            Finish: new Date(2024, 3, 5, 22, 30),
        },
        {
            DayID: 6,
            EmployName: "Saturday",
            Start: new Date(2024, 3, 6, 16, 30),
            Finish: new Date(2024, 3, 6, 22, 30),
        },
        {
            DayID: 7,
            EmployName: "Sunday",
            Start: new Date(2024, 3, 7, 16, 30),
            Finish: new Date(2024, 3, 7, 22, 30),
        }
    ]

    const fieldsData = {
        id: 'DayID',
        subject: { name: 'EmployName', title: 'Employ Name', default: 'Add Summary' },
        startTime: { name: 'Start' },
        endTime: { name: 'Finish' }
    }

    return (
        <Scheduler currentView="Week" fieldsData={fieldsData} dataSource={workSchedule} hasRecurence={recurence} isReadOnly/>
    )
}