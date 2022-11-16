import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "", position: "", level: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://wallpaperaccess.com/full/2784144.png"
        alt=""
      ></img>
      <div className="fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Create New Trainer</h1>
            <form onSubmit={onSubmit} className="w-full flex flex-col py-4">
              <input
                onChange={(e) => updateForm({ name: e.target.value })}
                className="p-3 my-2 bg-gray-700 rounded"
                type="text"
                placeholder="Name"
                id="name"
                value={form.name}
              />
              <input
                onChange={(e) => updateForm({ position: e.target.value })}
                className="p-3 my-2 bg-gray-700 rounded"
                type="text"
                placeholder="Position"
              />
              <div class="flex justify-center">
                <div>
                  <div class="form-check">
                    <input
                      class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="positionOptions"
                      id="positionIntern"
                      value="Intern"
                      checked={form.level === "Intern"}
                      onChange={(e) => updateForm({ level: e.target.value })}
                    />
                    <label
                      class="form-check-label inline-block text-white "
                      for="flexRadioDefault1"
                    >
                      Intern
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="positionOptions"
                      id="positionJunior"
                      value="Junior"
                      checked={form.level === "Junior"}
                      onChange={(e) => updateForm({ level: e.target.value })}
                    />
                    <label
                      class="form-check-label inline-block text-white "
                      for="flexRadioDefault2"
                    >
                      Junior
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="positionOptions"
                      id="positionSenior"
                      value="Senior"
                      checked={form.level === "Senior"}
                      onChange={(e) => updateForm({ level: e.target.value })}
                    />
                    <label
                      class="form-check-label inline-block text-white "
                      for="flexRadioDefault1"
                    >
                      Senior
                    </label>
                  </div>
                </div>
              </div>
              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
