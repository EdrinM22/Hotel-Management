import Scheduler from "../components/Scheduler";

export default function TodayEventsPage() {
	return <Scheduler currentView="Day" showAgenda displayInterval={3}/>;
}
