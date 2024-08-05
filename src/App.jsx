import React from "react";
import useApiCall from "./Hooks/Apicall";
import LoadingSkeleton from "./ShimmerEffect/LoadingSkeleton";
import ErrorPage from "./Components/ErrorPage";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  const { data, loading, error } = useApiCall(
    "https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task"
  );
  if (loading) return <LoadingSkeleton />;
  if (error) {
    console.error("API call error:", error);
    return (
      <ErrorPage
        errorCode={error.response?.status}
        errorMessage={"Please check the API"}
      />
    );
  }

  return (
    <>
      <Navbar data={data}/>
      <Main data={data}/>
      <Footer data={data}/>
    </>
  );
}

export default App;
