# MSC MSIT Announcement Board

This is a real-time announcement board application built with React and Firebase. It provides a platform for students and faculty of the MSC MSIT program to share and view announcements, fostering a connected and informed community. The application features Google Authentication for secure access and a clean, user-friendly interface for a seamless experience.

## ✨ Features

* **Google Authentication**: Secure and easy login using Google accounts.
* **Real-time Announcements**: Announcements are updated in real-time, ensuring users always have the latest information.
* **Create Announcements**: Logged-in users can post new announcements with a character limit of 280 characters.
* **View Announcements**: A clean and organized list of all announcements, showing the author, their profile picture, and the time of posting.
* **Delete Announcements**: Users can delete their own announcements.
* **Responsive Design**: The application is designed to work on various screen sizes, providing a consistent experience across devices.

---

## 💻 Tech Stack

* **Frontend**:
    * [React](https://reactjs.org/)
    * [Vite](https://vitejs.dev/)
    * [Tailwind CSS](https://tailwindcss.com/)
* **Backend & Database**:
    * [Firebase](https://firebase.google.com/)
        * Firebase Authentication
        * Firestore Database
* **UI & Icons**:
    * [Lucide React](https://lucide.dev/guide/packages/lucide-react) for icons.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18.0.0 or higher)
* npm (v8.0.0 or higher)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/msc-announcement.git](https://github.com/your-username/msc-announcement.git)
    cd msc-announcement
    ```
2.  **Install NPM packages:**
    ```sh
    npm install
    ```
3.  **Configure Firebase:**
    * Create a new Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
    * Set up a new web app in your Firebase project.
    * Enable **Google Authentication** in the "Authentication" section.
    * Create a **Firestore Database**.
    * Copy your Firebase configuration and replace the placeholder values in `src/config/firebase.jsx`.
        ```javascript
        const firebaseConfig = {
          apiKey: "YOUR_API_KEY",
          authDomain: "YOUR_AUTH_DOMAIN",
          projectId: "YOUR_PROJECT_ID",
          storageBucket: "YOUR_STORAGE_BUCKET",
          messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
          appId: "YOUR_APP_ID",
          measurementId: "YOUR_MEASUREMENT_ID"
        };
        ```
4.  **Run the development server:**
    ```sh
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

---

## 📁 Project Structure


msc-announcement/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AnnouncementForm.jsx
│   │   ├── AnnouncementList.jsx
│   │   └── Header.jsx
│   ├── config/
│   │   └── firebase.jsx
│   ├── pages/
│   │   ├── Announcement.jsx
│   │   └── Auth.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── style.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js



## 🙏 Acknowledgements

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [Firebase](https://firebase.google.com/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Lucide React](https://lucide.dev/guide/packages/lucide-react)
* [React Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks)
