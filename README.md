# Dashboard Project

This project is a dynamic dashboard built with **Next.js**, **Tailwind CSS**, and **Chart.js** to display data such as payments, expenses, and net profit. The dashboard allows users to filter data by date and view dynamic charts and tables that update based on the selected date.

## Live Demo
[https://business-dashboard-flax.vercel.app/](https://business-dashboard-flax.vercel.app/)

## Github Link
[https://github.com/Sarthak5290/business-dashboard](https://github.com/Sarthak5290/business-dashboard)

## Approach

The goal of this project was to build an interactive dashboard that displays key metrics (payments, expenses, net profit) and allows users to filter data by date.

### Key Steps:
1. **Design Fidelity**: I started by carefully analyzing the Figma design to ensure the layout, color schemes, and font sizes were accurately replicated.
2. **Data Fetching and Filtering**: I fetched the data from a `data.json` file using **Next.js API routes** or client-side fetching. The date filter was integrated using query parameters in the URL (e.g., `/dashboard?date=12-01-2025`).
3. **Charts & Tables**: I integrated **Chart.js** to display interactive charts and dynamic tables to show payments data. The charts were updated whenever the date filter changed.
4. **Responsiveness**: I used **Tailwind CSS** to ensure the dashboard was responsive across different screen sizes (desktop, tablet, mobile).
5. **Deployment**: The app was deployed on **Vercel** for seamless hosting and live demo access.

## Tools & Frameworks Used

1. **Next.js**:  
   A React framework that provides file-based routing, server-side rendering (SSR), static site generation (SSG), and API routes. It was used for building the entire web application.

2. **React**:  
   A JavaScript library for building the user interface. React’s component-based architecture helped in creating reusable components for the sidebar, charts, and tables.

3. **Tailwind CSS**:  
   A utility-first CSS framework for rapidly building custom designs. I used Tailwind for responsive layouts and quick styling without writing custom CSS from scratch.

4. **Chart.js**:  
   A powerful charting library for rendering dynamic and interactive charts (e.g., bar charts, line charts) to visualize payments, expenses, and net profit.

5. **Vercel**:  
   A cloud platform optimized for hosting **Next.js** applications. Vercel was used for the deployment of the project, providing automatic deployments from GitHub.

6. **GitHub**:  
   A version control system used for hosting the project’s source code and tracking changes via Git.

## Challenges Faced & Solutions

### 1. Dynamic Data Rendering
**Challenge**: Ensuring that the charts and tables update dynamically when the date filter changes.  
**Solution**: By leveraging **React state management** and **Next.js's built-in data fetching** capabilities (such as `getServerSideProps` or `useEffect`), I was able to update the data dynamically and re-render the relevant charts and tables without page reloads.

### 2. Responsiveness
**Challenge**: Making sure the dashboard layout adapted smoothly across different screen sizes, especially for mobile and tablet views.  
**Solution**: I used **Tailwind CSS**'s responsive utilities (`sm:`, `md:`, `lg:`) to create a flexible layout that adjusts based on the screen size. Testing on different devices ensured that the design worked well across all sizes.

### 3. Managing Complex State
**Challenge**: Managing the state for dynamic components like charts and tables that depend on the date selection.  
**Solution**: I used **React hooks** such as `useState`, `useEffect`, and `useRouter` to manage the state and URL query parameters efficiently. This ensured that when the date filter changed, the state was updated and the UI re-rendered the correct data.

## Conclusion

This project demonstrates a complete full-stack dashboard with interactive charts, dynamic data rendering, and a responsive UI. The use of **Next.js**, **React**, **Tailwind CSS**, and **Chart.js** helped in creating an efficient and scalable web application. The challenges faced during development, such as date handling and responsive design, were addressed through well-suited libraries and techniques.

The project is deployed on **Vercel**, and the source code is hosted on **GitHub** for version control and collaboration.

---

Feel free to explore the demo and source code, and if you have any questions or feedback, please feel free to reach out!
