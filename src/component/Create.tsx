import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addHotel } from "../lib/controller";

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [feature, setFeature] = useState("Room Only");
  const [location, setLocation] = useState("");
  const [stars, setStars] = useState("1");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [review, setReview] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [perNight, setPerNight] = useState("");

  const navigate = useNavigate();

  const addNewHotel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addHotel({
      title,
      description,
      feature,
      location,
      stars,
      country,
      region,
      review,
      totalPrice,
      perNight,
    });
    console.log("YES");
    navigate("/");
  };
  return (
    <div className="create">
      <h2>Add a new Kamar</h2>
      <form onSubmit={(e) => addNewHotel(e)}>
        <label> Nama Kamar </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <label>Deskripsi Kamar:</label>
        <textarea
          required
          value={description}
          rows={5}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Fasilitas:</label>
        <select value={feature} onChange={(e) => setFeature(e.target.value)}>
          <option value="Room Only">Room Only</option>
          <option value="Room with Breakfast included">
            Room with Breakfast included
          </option>
          <option value="Local Charges Payable at Hotel">
            Local Charges Payable at Hotel
          </option>
          <option value="Free Parking for all guests">
            Free Parking for all guests
          </option>
          <option value="Free WiFi">Free WiFi</option>
          <option value="Spa and wellness centre included">
            Spa and wellness centre included
          </option>
          <option value="Private parking at the hotel">
            Private parking at the hotel
          </option>
          <option value="Restaurant & Bar">Restaurant & Bar</option>
          <option value="Swimming pool">Swimming pool</option>
          <option value="Room and Parking">Room and Parking</option>
        </select>

        <label>Image:</label>
        <input
          type="text"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Rating:</label>
        <select value={stars} onChange={(e) => setStars(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Kota:</label>
        <input
          type="text"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <label>Negara:</label>
        <input
          type="text"
          required
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <label>Reviews:</label>
        <input
          type="number"
          required
          min="1"
          max="1000"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <label>Total Biaya ($):</label>
        <input
          type="text"
          required
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
        />
        <label>Harga per Malam ($):</label>
        <input
          type="text"
          required
          value={perNight}
          onChange={(e) => setPerNight(e.target.value)}
        />
        <button>Add Kamar</button>
      </form>
    </div>
  );
}

export default Create;
