CNAPP Dashboard
----------------
This project is a Cloud Security Posture Management (CSPM) Dashboard built using React.js, Redux and Material-UI (MUI). The dashboard provides a comprehensive overview of cloud accounts, their risk management, and other related metrics.The modular design allows users to add custom widgets to personalize their dashboard according to their needs.

Features
----------

    Responsive Layout: The dashboard is responsive and adapts to various screen sizes.
    Customizable Widgets: Users can add and remove widgets from the dashboard.
    Visual Data Representation: Uses donut charts and assessment bars to represent data visually.
    Modular Design: Easy to extend with additional widgets or features.

    Technologies Used
    ------------------

    * React.js: A JavaScript library for building user interfaces.
    * Material-UI (MUI): A popular React UI framework for designing responsive and customizable user interfaces.
    * JavaScript (ES6+): Modern JavaScript features for cleaner and more efficient code.
    * HTML5 & CSS3: Standard web technologies for structure and styling.

    CNAPP-dashboard/
 *********************
│
├── src/
│   ├── components/
│   │   ├          
│   │   │         
│   │   ├── Header.js               # Header component
│   │   ├── AssessmentBar.js        # Bar component for assessment data
│   │   ├── AddWidgetModal.js       # Modal component for adding new widgets
│   │   ├── Dashboard.js            # Main Dashboard component
│   │   ├── DonutChart.js           # Donut chart component for visualizing data
│   │   ├── NoGraphData.js          # Component to display when there is no graph data
│   │   ├── CNAPPDashboard.js       # CNAPP-specific dashboard component
│   │
│   └── App.js                      # Entry point of the application
│
├── redux/
│   ├── actions.js                  # Redux action definitions
│
├── store/
│   ├── dashboardSlice.js           # Redux slice for the dashboard
│   ├── index.js                    # Redux store configuration
│
├── public/
│   ├── index.html                  # Main HTML file
│
├── README.md                       # Project documentation
├── package.json                    # Project dependencies and scripts
└── .gitignore                      # Files and directories to ignore in version control



Starting the Project :
>>>>>>>>>>>>>>>>>>>> 
        Create reactjs app using npx create-react-app dashboard-app
        npm install @reduxjs/toolkit react-redux
 
        using editor as # Visual studio code #
      Clone the repository:git clone https://github.com/arunakt2023/AccuKnox-dashboard-app.git
Install dependencies:npm install
Start the Development Server : npm start
        Open browser and navigate to http://localhost:3000 to view the dashboard.

        
        Usage:
        ------

    Add Widgets: Click on the "Add Widget" box to open the modal and add new widgets to the dashboard.
    View Data: Visualize the cloud account data and other security metrics through the provided charts.

Customization:
--------------

    Modify or Add Widgets: Customize existing widgets or create new ones by adding components to the components directory.
    Styling: Modify the existing styles or add new ones using MUI's styling solution.