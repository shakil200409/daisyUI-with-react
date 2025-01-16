import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    //     fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //       .then((res) => res.json())
    //       .then((data) => setPhones(data.data));

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phonesWithFakeData);
        setPhones(phonesWithFakeData);
      });
    //   .then((data) => setPhones(data.data.data));
  }, []);
  return (
    <div>
      <h1 className="text-8xl">Hello Phones: {phones.length}</h1>
      <BarChart width={1200} height={500} data={phones}>
        <Bar dataKey={"price"} fill="#8884d8"></Bar>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phones;
