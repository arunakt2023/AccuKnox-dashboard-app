import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Cloud Accounts", text: "Connected (2) Not Connected (2)" },
        { id: 2, name: "Cloud Account Risk Assessment", text: "Risk Scores: Failed, Warning, Passed" }
      ]
    },
    {
      id: 2,
      name: "CWPP Dashboard",
      widgets: [
        { id: 3, name: "Top 5 Namespace Specific Alerts", text: "No data available" },
        { id: 4, name: "Workload Alerts", text: "No data available" }
      ]
    }
  ],
  allWidgets: []
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);
        state.allWidgets.push({ ...widget, categoryId });
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
      state.allWidgets = state.allWidgets.filter(widget => widget.id !== widgetId);
    },
  },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;
