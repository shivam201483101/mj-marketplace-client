import React, { useReducer, useState } from "react";
import "./Add.scss";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    // var vaildpass = document.getElementById("pass").value;
    // const pattern = /[0-9]/;

    // if ((vaildpass.length >= 10 && vaildpass.length <= 12 )&& pattern.test(vaildpass)) {
    //   document.getElementById("vaild-pass").innerHTML = "correct contact no.";
    //   return false;
    // } else {
    //   document.getElementById("vaild-pass").innerHTML = "Invalid.Number sholud be 10 digit.";
    // }

   

    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate("/mygigs")
  };

  return (
    <div className="add">
      <div className="container">
        <h1>Create a new JOB post to let anyone hire you</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title of your service</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange}
            />
            <label htmlFor="">Category</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="Constructor Worker">Constructor Worker</option>
              <option value="Handicraft">Handicraft</option>
              <option value="Drawing Artist">Drawing Artist</option>
              <option value="Voice Artist">Voice Artist</option>
              <option value="Catering Service">Catering Service</option>
              <option value="Packers and Movers">Packers and Movers</option>
              <option value="Pickup & drop Service">Pickup & drop Service</option>
              <option value="Audience gathering">Audience gathering</option>
              <option value="Cleaning services">Cleaning services</option>
              <option value="Beautician">Beautician</option>
              <option value="Plumbing">Plumbing</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Cover Image</label>
                <input
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor="">Upload Images</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? "uploading" : "Upload"}
              </button>
            </div>
            <label htmlFor="">Description</label>
            <textarea
              name="desc"
              id=""
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>Create Job post</button>
          </div>
          <div className="details">
            <label htmlFor="">Personal Contact no.</label>
            <input
              type="text"
              name="shortTitle"
              placeholder="+91 84678 45688"
              onChange={handleChange}
              id="pass"
            />
             <span id="vaild-pass"></span>
            <label htmlFor="">Your Email. id:</label>
            <textarea
              name="shortDesc"
              onChange={handleChange}
              id=""
              placeholder="example@gmail.com"
            
            ></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" name="deliveryTime" onChange={handleChange} />
            <label htmlFor="">Revision Number</label>
            <input
              type="number"
              name="revisionNumber"
              onChange={handleChange}
            />
            <label htmlFor="">Add Extra Features & Details about your service</label>
            <form action="" className="add" onSubmit={handleFeature}>
              <input type="text" placeholder="e.g. best design" />
              <button type="submit">add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((f) => (
                <div className="item" key={f}>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    {f}
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="">Price</label>
            <input type="number" onChange={handleChange} name="price" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
