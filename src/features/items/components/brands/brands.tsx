import { useEffect } from "react";
import { useTypedSelector, useTypedDispatch } from "../../../../hooks";
import { getCompanies } from '../../../companies/slices/companiesSlice'
import { filterItemsBySlug } from '../../slices/itemsSlice'
import { pushSelection, removeSelection } from './brandsSlice'
import type { Company } from '../../../companies/types/companies.types'

export function Brands() {
  const companies = useTypedSelector((state) => state.companies.value)
  const selections = useTypedSelector((state) => state.brands.selections)
  const dispatch = useTypedDispatch()

  useEffect(() => {
    dispatch(getCompanies({}))
  }, [dispatch])

  const handleCheckboxChange = (company: Company) => {
    const foundCompany = selections.indexOf(company);

    if (foundCompany > -1) {
      dispatch(removeSelection(foundCompany))
    } else {
      dispatch(pushSelection(company))
    }
  }

  const checkboxItems = () => {
    return (
      <div>
        {companies.map((company: Company) => (
          <div key={company.account} style={{display: 'flex', alignItems: 'center'}}>
            <input
              type="checkbox"
              checked={selections.includes(company)}
              onChange={() => handleCheckboxChange(company)}
            ></input>
            <p style={{margin: 0}}>{company.name}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {checkboxItems()}
    </div>
  );
}
