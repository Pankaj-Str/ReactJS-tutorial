# build a Pagination Component with React-Query 

To build a pagination component with React-Query, you'll need to integrate React-Query with your React application and then create a pagination component that interacts with your data using React-Query's hooks. In this example, I'll show you how to create a basic pagination component with React-Query.

1. Install React-Query and Axios (or any other data-fetching library you prefer):

```bash
npm install react-query axios
```

2. Set up your React-Query client in your application. You typically do this in your main application file (e.g., `App.js`).

```jsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Your application components */}
    </QueryClientProvider>
  );
}

export default App;
```

3. Create a pagination component. Let's call it `Pagination.js`.

```jsx
import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevClick} disabled={currentPage === 1}>
        Previous
      </button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <button onClick={handleNextClick} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
```

4. Use React-Query to fetch and paginate your data. You can create a separate component for displaying the data, and use `useQuery` from React-Query to fetch and manage the data.

```jsx
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Pagination from './Pagination';

function DataList() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 10; // Adjust this as needed
  const { data, isLoading, error } = useQuery(
    ['data', currentPage],
    () =>
      axios.get(`/api/data?page=${currentPage}&pageSize=${pageSize}`), // Replace with your API endpoint
    {
      keepPreviousData: true,
    }
  );

  const totalPages = Math.ceil((data?.total || 0) / pageSize);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {/* Display your data here */}
      <ul>
        {data?.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(newPage) => setCurrentPage(newPage)}
      />
    </div>
  );
}

export default DataList;
```

In this example, we fetch data from an API using React-Query and display it in a list. The `Pagination` component handles the navigation between pages by changing the `currentPage` state, which in turn triggers a new query to fetch the data for the current page.

Make sure to replace the API endpoint and adjust the data structure according to your project's requirements.

This is a basic example of how to build a pagination component with React-Query. Depending on your specific needs, you may need to customize it further, handle edge cases, and style it according to your design.
