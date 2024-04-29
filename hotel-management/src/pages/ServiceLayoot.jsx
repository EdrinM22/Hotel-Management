import SecondaryHeader from "../components/SecondaryHeader";
import { Outlet } from "react-router-dom";
import Scheduler from "../components/Scheduler";

export default function ServiceLayout() {
	return (
		<>
			<SecondaryHeader hasButton />
			<Scheduler currentView="Agenda" />
		</>
	);
}
