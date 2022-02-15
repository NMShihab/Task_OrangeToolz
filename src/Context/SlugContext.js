import React, { useState, createContext } from "react";

export const SlugContext = createContext();

export const SlugProvider = (props) => {
  const [slug, setSlug] = useState("");

  return (
    <SlugContext.Provider value={[slug, setSlug]}>
      {props.children}
    </SlugContext.Provider>
  );
};
