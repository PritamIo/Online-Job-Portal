import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import { useEffect, useState } from "react";
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = [];

    // Start with the base query
    let jobsRef = collection(db, "jobs");
    let q = query(jobsRef);

    // Dynamically add conditions only if they have a value
    if (jobCriteria.type) {
      q = query(q, where("type", "==", jobCriteria.type));
    }
    if (jobCriteria.title) {
      q = query(q, where("title", "==", jobCriteria.title));
    }
    if (jobCriteria.experience) {
      q = query(q, where("experience", "==", jobCriteria.experience));
    }
    if (jobCriteria.location) {
      q = query(q, where("location", "==", jobCriteria.location));
    }

    try {
      const req = await getDocs(q);
      req.forEach((job) => {
        tempJobs.push({
          ...job.data(),
          id: job.id,
          postedOn: job.data().postedOn.toDate(),
        });
      });

      // Sort the jobs by postedOn as a temporary measure due to order by is requiring an index for every possible combination of a query
      tempJobs.sort((a, b) => b.postedOn - a.postedOn);

      setJobs(tempJobs);
    } catch (error) {
      console.error("Error fetching custom jobs: ", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar
        fetchJobs={fetchJobs}
        fetchJobsCustom={fetchJobsCustom}
        customSearch={customSearch}
      />
      {jobs.length === 0 && (
        <h1 className="text-2xl font-bold text-center text-white">Oops! Sorry, looks like there are no jobs matching your criteria currently.</h1>
      )}

      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;
