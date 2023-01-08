import React from "react";

const InfoForm = () => {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    country: "",
    zip: "",
  });
  const [totalInfo, setTotalInfo] = React.useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ data });
    setTotalInfo(totalInfo.concat(data));
    setData({
      name: "",
      email: "",
      country: "",
      zip: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bankInfo">
      <form className="infoFormLabel" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={data && data.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          id="emai"
          type="text"
          name="email"
          value={data && data.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="country">Country:</label>
        <input
          id="country"
          type="text"
          name="country"
          value={data && data.country}
          onChange={handleChange}
          required
        />
        <label htmlFor="zip">Zip Code:</label>
        <input
          id="zip"
          type="text"
          name="zip"
          value={data && data.zip}
          onChange={handleChange}
          required
        />
        <button className="formButton btn btn-primary" type="submit">
          Submit Info
        </button>
      </form>

      <div class="form-info">
        <h4>
          In addition to the credit card you submitted the following info:
        </h4>
        {totalInfo.map((val, ind, arr) => {
          return (
            <ul key={ind + 1}>
              <li>{val.name}</li>
              <li>{val.email}</li>
              <li>{val.country}</li>
              <li>{val.zip}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default InfoForm;
