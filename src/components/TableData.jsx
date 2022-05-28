import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TableData = () => {
  const commentsData = useSelector(({ comments }) => comments);
  const [data, setData] = useState();

  useEffect(() => {
    setData(
      commentsData.data
        .concat(commentsData.adminComments)
        .reverse()
        .map((item) => {
          return { size: item.body.length, name: item.name };
        })
        .slice(0, 10)
        .reverse()
    );
  }, [commentsData]);

  return (
    <div style={{ margin: "20px 0" }}>
      <table border="1px">
        <thead>
          <tr>
            <td>No</td>
            <td>Name</td>
            <td>Words Size</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map(({ name, size }, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{size}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
