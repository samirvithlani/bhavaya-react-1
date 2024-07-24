import React from "react";

export const Content = () => {
  var name = "Akash";
  var age = 23;
  var isActive = true;
  var user = {
    name: "Parth",
    age: 26,
  };

  const contentStyle= {
    backgroundColor: "#AAF04B",
    height: "auto",
    width: "100%",
    marginTop: "20px",
    padding: "10px",
  }

  return (
    <div style={contentStyle}>
      <h1 style={{color:"red"}}>Content</h1>
      <h2>Hello</h2>
      <h3>At a time you can return only and tag and 1 tag should return </h3>
      <h3>Every tag must have closing tag</h3>
      <h3>Whatever return will only display to browser</h3>
      {name}
      <h2>Name = {name}</h2>
      <h3>Age = {age}</h3>
      <h3>ISactive ={isActive == true ? "Active" : "Not active"}</h3>
      {user.name + " " + user.age}
    </div>
  );
};
