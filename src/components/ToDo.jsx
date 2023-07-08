import React, { useState } from "react";

function ToDo() {
  const [activity, setActivity] = useState("");
  const [dataList, setdataList] = useState([]);

  function addActivity() {
    setdataList((dataList) => {
      const updatedList = [...dataList, activity];
      setActivity("");
      return updatedList;
    });

    console.log(dataList);
    // setActivity(updatedList);
  }
  function removeActivity(i) {
    const updatedListData = dataList.filter((elem, id) => {
      return i !== id;
    });
    setdataList(updatedListData);
  }
  function removeAll() {
    setdataList([]);
  }

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button className="btn" onClick={addActivity}>
          Add
        </button>
        <h3>Here is Your List :</h3>
        {dataList !== [] &&
          dataList.map((data, i) => {
            return (
              <p key={i}>
                <div className="datalist">{data}</div>
                <div>
                  <button
                    className="btn-position"
                    onClick={() => removeActivity(i)}
                  >
                    remove
                  </button>
                </div>
              </p>
            );
          })}
        {dataList.length >= 1 && (
          <button className="btn-removeAll" onClick={removeAll}>
            Remove All
          </button>
        )}
      </div>
    </>
  );
}

export default ToDo;
