import { useLocation } from "react-router-dom";
import { Fragment, useState, useEffect, useCallback } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import RecordsTable from "../RecordsTable/RecordsTable";
import { useCollection } from "../../../hooks/useCollection";
import RecordsLearnForm from "../RecordsLearnForm/RecordsLearnForm";
import AddRecordsForm from "../AddRecordsForm/AddRecordsForm";

const Category = () => {
  const [learnCount, setLearnCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [recordsToLearn, setRecordsToLearn] = useState([]);
  const location = useLocation();
  const { user } = useAuthContext();
  const { documents } = useCollection(
    "records",
    ["uid", "==", user.uid],
    ["category", "==", location.pathname.slice(10)],
    []
  );

  const addDays = (date: any, days: any) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const getToday = () => {
    let today: any = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "-" + dd + "-" + yyyy;
    return today;
  };

  const checkIfToLearnRecord = useCallback((record: any) => {
    const today = new Date(getToday());
    if (record.stage === 1) {
      return true;
    } else if (record.stage === 2 && addDays(record.lastRepeat, 3) < today) {
      return true;
    } else if (record.stage === "3" && addDays(record.lastRepeat, 7) < today) {
      return true;
    } else if (record.stage === "4" && addDays(record.lastRepeat, 21) < today) {
      return true;
    } else if (record.stage === "5" && addDays(record.lastRepeat, 30) < today) {
      return true;
    } else if (record.stage === "6" && addDays(record.lastRepeat, 120) < today) {
      return true;
    } else {
      return false;
    }
  }, []);

  useEffect(() => {
    let count = 0;
    let records: any = [];
    documents.forEach((document) => {
      if (checkIfToLearnRecord(document)) {
        count++;
        records.push(document);
      }
    });
    setLearnCount(count);
    setRecordsToLearn(records);
  }, [documents, checkIfToLearnRecord]);

  return (
    <Fragment>
      <h1>Records to learn: {learnCount}</h1>
      <div>
        <RecordsTable category={location.pathname.slice(10)} uid={user.uid} />
      </div>
      <br></br>
      <div>
        {recordsToLearn[0] && <RecordsLearnForm record={recordsToLearn[0]} getToday={getToday}/>}
      </div>
      <div>
        <AddRecordsForm open={open} setOpen={setOpen} uid={user.uid} />
      </div>
    </Fragment>
  );
};

export default Category;
