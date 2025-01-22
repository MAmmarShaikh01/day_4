"use client";

import React, { useState } from "react";
import { client } from "@/sanity/lib/client";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    street: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const { name, email, password, mobileNumber, street, city, state, country, postalCode } =
      formData;

    try {
      // Check if user already exists
      const existingUser = await client.fetch(
        `*[_type == "user" && email == $email][0]`,
        { email }
      );

      if (existingUser) {
        setMessage("Email is already registered. Please log in.");
        setIsLoading(false);
        return;
      }

      // Hash the password (simulate it here; use server hashing in production)
      const hashedPassword = btoa(password); // Use bcrypt on the server in real use cases

      // Create the user
      const newUser = {
        _type: "user",
        name,
        email,
        password: hashedPassword,
        mobileNumber,
        address: {
          street,
          city,
          state,
          country,
          postalCode,
        },
        isVerified: false,
        role: "user",
        // createdAt: new Date().toISOString(),
        // updatedAt: new Date().toISOString(),
      };

      const res = await client.create(newUser);
      console.log(res+ " created user")
      setMessage("User signed up successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {(Object.keys(formData) as Array<keyof typeof formData>).map((field) => (
            <input
              key={field}
              type={field === "password" ? "password" : "text"}
              name={field}
              placeholder={field[0].toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-3 mb-4 border rounded"
              required
            />
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
            disabled={isLoading}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        {message && <p className="text-center text-red-500 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default SignUpPage;
