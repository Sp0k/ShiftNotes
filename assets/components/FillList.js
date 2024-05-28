import { useEffect, useState } from "react";

function FillList(num) {
  const [data, setData] = useState([]);
  const generateData = (count) =>
    Array.from({ length: count }, (_, i) => ({ id: (i + 1).toString() }));

  useEffect(() => {
    setData(generateData(num));
  }, []);

  return data;
}

export default FillList;
