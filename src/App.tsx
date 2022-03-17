import { useEffect } from "react";
import { useTypedSelector } from "./hooks";
import { useDispatch } from "react-redux";
import { getCompanies } from "./store/companies/companiesSlice";
import type { Company } from "./types";

function App() {
  const dispatch = useDispatch();
  const companies = useTypedSelector((state) => state.companies.value);

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch])

  console.log("companies", companies.length);

  return (
    <>
      <button onClick={() => dispatch(getCompanies())}>getir</button>
      <div>
        {companies &&
          companies.length &&
          companies.map((company: Company) => (
            <div key={company.account}>{company.slug}</div>
          ))}
      </div>
    </>
  );
}

export default App;
