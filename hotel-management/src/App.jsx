import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./pages/RootLayout";
import BookLayout from "./pages/BookLayout";
import MainPage from "./pages/MainPage";
import RoomBookingPage from "./pages/RoomBookingPage";
import EventBookingPage from "./pages/EventBookingPage";
import LocationPage from "./pages/LocationPage";
import FeedbackPage from "./pages/FeedbackPage";
import ContactPage from "./pages/ContactPage";

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
          { path: "event", element: <EventBookingPage /> }
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
		],
	},
  {
    path: 'login',
    element: <h1>login</h1>,
  },
  {
    path: 'staff',
    element: <h1>test</h1>,
  },
  {
    path: 'manager',
    element: <h1>manager</h1>,
  },
  {
    path: 'admin',
    element: <h1>admin</h1>,
  }
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
