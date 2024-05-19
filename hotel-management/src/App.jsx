import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./pages/RootLayout";
import ReceptionistLayout from "./pages/ReceptionistLayout";
import BookLayout from "./pages/BookLayout";
import ServiceLayout from "./pages/ServiceLayoot";
import ManagerLayout from "./pages/ManagerLayout";
import AdminLayout from "./pages/AdminLayout";

import MainPage from "./pages/MainPage";
import RoomBookingPage from "./pages/RoomBookingPage";
import EventBookingPage from "./pages/EventBookingPage";
import LocationPage from "./pages/LocationPage";
import FeedbackPage from "./pages/FeedbackPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./components/SignUp";

import ReceptionDashBoardPage from "./pages/ReceptionDashBoardPage";
import TimeTablePage from "./pages/TimeTablePage";
import TodayEventsPage from "./pages/TodayEventsPage";

import ManagerDashboardPage from "./pages/ManagerDashboardPAge";
import ManagerRoomDetailPage from "./pages/ManagerRoomDetailPage";
import ManagerWorkerTimetablePage from "./pages/ManagerWorkerTimetablePage";
import ManagerContactUsInquiryPage from "./pages/ManagerContactUsInquiryPage";

import AdminAddWorkerPage from "./pages/AdminAddWorkerPage";
import ReviewPage from "./pages/ReviewPage";
import AdminContactUsInquiryPage from "./pages/AdminContactUsInquiryPage";
import AboutPage from "./pages/AboutPage";
import PrivacyNoticePage from "./pages/PrivacyNoticePage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import CookieConsent from "./components/CookieConsent";
import CookieConsentPage from "./pages/CookieConsentPage";

import PaymentPage from "./pages/PaymentPage";



const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <MainPage /> },
			{
				path: "book",
				element: <BookLayout />,
				children: [
          { index: true, element: <RoomBookingPage /> },
          { path: "event", element: <EventBookingPage /> },
          { path: 'payment', element: <PaymentPage />}
        ],
			},
      {
        path: "location",
        element: <LocationPage />,
      },
      {
        path: 'feedback',
        element: <FeedbackPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'privacy',
        element: <PrivacyNoticePage />
      },
      {
        path: 'terms',
        element: <TermsOfUsePage/>
      },
      {
        path: 'cookies',
        element: <CookieConsentPage />
      },
      
		],
	},
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: 'signup',
    element: <SignUp />
  },
  {
    path: 'receptionist',
    element: <ReceptionistLayout />,
    children: [
      { index: true, element: <ReceptionDashBoardPage /> },
      { path: 'book', element: <RoomBookingPage />},
      { path: 'timetable', element: <TimeTablePage /> },
      { path: 'todayevents', element: <TodayEventsPage /> }
    ]
  },
  {
    path: 'service',
    element: <ServiceLayout />,
  },
  {
    path: 'manager',
    element: <ManagerLayout />,
    children: [
      { index: true, element: <ManagerDashboardPage />},
      { path: 'review', element: <ReviewPage /> },
      { path: 'roomdetail', element: <ManagerRoomDetailPage /> },
      { path: 'workertimetable', element: <ManagerWorkerTimetablePage /> },
      { path: 'contactusinquiry', element: <ManagerContactUsInquiryPage />}
    ]
  },
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <ReviewPage />},
      { path: 'addworker', element: <AdminAddWorkerPage />},
      { path: 'contactusinquiry', element: <AdminContactUsInquiryPage />}
    ]
  }
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
