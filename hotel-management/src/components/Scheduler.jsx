import "./Scheduler.css";
import { registerLicense } from "@syncfusion/ej2-base";

import {
	ScheduleComponent,
	Day,
	Week,
	WorkWeek,
	Month,
	Agenda,
	TimelineMonth,
	TimelineYear,
	ViewsDirective,
	ViewDirective,
	Inject,
	Resize,
	DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

registerLicense(
	"Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekx1RXxbf1x0ZF1MYV1bRXdPMyBoS35RckVgWn5eeHVUR2FVWExw",
);

export default function Scheduler({
	dataSource,
	currentView = "TimelineMonth",
	showDay,
	showWeek,
	showWorkWeek,
	showMonth,
	showAgenda,
	showTimelineMonth,
	showTimelineYear,
	isResize = false,
	isDragAndDrop = false,
	isReadOnly = false,
	hasRecurence,
	dayStartHour = "08:00",
	dayEndHour = "23:00",
	displayInterval = 1,
	displayName = {
		dayName: "Day",
		weekName: "Week",
		workWeekName: "Work Week",
		monthName: "Month",
		agendaName: "Agenda",
		timelineMonthName: "Timeline Month",
		timelineYearName: "Timeline Year",
	},
}) {
	const {
		dayName,
		weekName,
		workWeekName,
		monthName,
		agendaName,
		timelineMonthName,
		timelineYearName,
	} = displayName;

	if (hasRecurence) {
		dataSource = dataSource.map((event) => {
			event.RecurrenceRule = hasRecurence;
			return event;
		});
	}

	function onDragStart(args) {
		args.navigation = { enable: true, timeDelay: 2000 };
	}

    

	const eventSettings = { dataSource: dataSource };
	return (
		<ScheduleComponent
			height="90vh"
			allowDragAndDrop={isDragAndDrop}
			allowResizing={isResize}
			dragStart={onDragStart}
			currentView={currentView}
			eventSettings={eventSettings}
			readonly={isReadOnly}
		>
			<ViewsDirective>
				{(showDay || currentView === "Day") && (
					<ViewDirective
						option="Day"
						startHour={dayStartHour}
						endHour={dayEndHour}
						interval={displayInterval}
						displayName={dayName}
					/>
				)}
				{(showWeek || currentView === "Week") && (
					<ViewDirective
						option="Week"
						startHour={dayStartHour}
						endHour={dayEndHour}
						interval={displayInterval}
						displayName={weekName}
					/>
				)}
				{(showWorkWeek || currentView === "WorkWeek") && (
					<ViewDirective
						option="WorkWeek"
						startHour={dayStartHour}
						endHour={dayEndHour}
						interval={displayInterval}
						displayName={workWeekName}
					/>
				)}
				{(showMonth || currentView === "Month") && (
					<ViewDirective option="Month" interval={displayInterval} displayName={monthName} />
				)}
				{(showAgenda || currentView === "Agenda") && (
					<ViewDirective option="Agenda" interval={displayInterval} displayName={agendaName} />
				)}
				{(showTimelineMonth || currentView === "TimelineMonth") && (
					<ViewDirective
						option="TimelineMonth"
						interval={displayInterval}
						displayName={timelineMonthName}
					/>
				)}
				{(showTimelineYear || currentView === "TimelineYear") && (
					<ViewDirective
						option="TimelineYear"
						interval={displayInterval}
						displayName={timelineYearName}
					/>
				)}
			</ViewsDirective>
			<Inject
				services={[
					Day,
					Week,
					WorkWeek,
					Agenda,
					Month,
					TimelineMonth,
					TimelineYear,
					Resize,
					DragAndDrop,
				]}
			/>
		</ScheduleComponent>
	);
}
